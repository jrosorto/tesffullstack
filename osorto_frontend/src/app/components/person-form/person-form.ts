import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PersonService } from '../../services/person.service';
import { Person } from '../../models/person.model';

@Component({
  selector: 'app-person-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './person-form.html',
  styleUrl: './person-form.css'
})
export class PersonFormComponent implements OnInit {
  isEdit = signal(false);
  personId = signal<number | null>(null);
  loading = signal(false);
  errorMsg = signal('');

  person: Person = {
    nombre: '',
    apellido: '',
    fechaNacimiento: '',
    puesto: '',
    sueldo: 0
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private personService: PersonService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit.set(true);
      this.personId.set(Number(id));
      this.loadPerson(Number(id));
    }
  }

  loadPerson(id: number): void {
    this.loading.set(true);
    this.personService.getById(id).subscribe({
      next: (data) => {
        this.person = { ...data };
        this.loading.set(false);
      },
      error: () => {
        this.errorMsg.set('No se pudo cargar la persona.');
        this.loading.set(false);
      }
    });
  }

  save(): void {
    if (!this.person.nombre || !this.person.apellido || !this.person.puesto) {
      this.errorMsg.set('Nombre, apellido y puesto son obligatorios.');
      return;
    }
    this.loading.set(true);
    this.errorMsg.set('');

    const request = this.isEdit()
      ? this.personService.update(this.personId()!, this.person)
      : this.personService.create(this.person);

    request.subscribe({
      next: () => this.router.navigate(['/persons']),
      error: () => {
        this.errorMsg.set('Error al guardar. Verifica los datos e intenta de nuevo.');
        this.loading.set(false);
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/persons']);
  }
}
