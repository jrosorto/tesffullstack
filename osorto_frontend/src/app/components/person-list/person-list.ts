import { Component, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PersonService } from '../../services/person.service';
import { Person } from '../../models/person.model';

@Component({
  selector: 'app-person-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './person-list.html',
  styleUrl: './person-list.css'
})
export class PersonListComponent implements OnInit {
  persons = signal<Person[]>([]);
  loading = signal(true);
  errorMsg = signal('');

  constructor(private personService: PersonService, private router: Router) {}

  ngOnInit(): void {
    this.loadPersons();
  }

  loadPersons(): void {
    this.loading.set(true);
    this.errorMsg.set('');
    this.personService.getAll().subscribe({
      next: (data) => {
        this.persons.set(data);
        this.loading.set(false);
      },
      error: () => {
        this.errorMsg.set('Error al cargar las personas. Verifica que el backend esté activo.');
        this.loading.set(false);
      }
    });
  }

  goToCreate(): void {
    this.router.navigate(['/persons/new']);
  }

  goToEdit(id: number): void {
    this.router.navigate(['/persons/edit', id]);
  }

  deletePerson(id: number): void {
    if (!confirm('¿Estás seguro de que deseas eliminar esta persona?')) return;
    this.personService.delete(id).subscribe({
      next: () => this.loadPersons(),
      error: () => this.errorMsg.set('Error al eliminar la persona.')
    });
  }
}
