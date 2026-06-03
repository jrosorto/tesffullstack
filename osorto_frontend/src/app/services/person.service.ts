import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Person } from '../models/person.model';

interface ResponseDTO<T> {
  status: boolean;
  msg: string;
  data: T[];
}

@Injectable({ providedIn: 'root' })
export class PersonService {
  private readonly apiUrl = 'http://localhost:8080/api/person';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Person[]> {
    return this.http.get<ResponseDTO<Person>>(this.apiUrl).pipe(map(r => r.data));
  }

  getById(id: number): Observable<Person> {
    return this.http.get<ResponseDTO<Person>>(`${this.apiUrl}/${id}`).pipe(map(r => r.data[0]));
  }

  create(person: Person): Observable<Person> {
    return this.http.post<ResponseDTO<Person>>(this.apiUrl, person).pipe(map(r => r.data[0]));
  }

  update(id: number, person: Person): Observable<Person> {
    return this.http.put<ResponseDTO<Person>>(`${this.apiUrl}/${id}`, person).pipe(map(r => r.data[0]));
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
