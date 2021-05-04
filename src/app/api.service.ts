import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Patient } from './Patient';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  PHP_API_SERVER = "http://127.0.0.1:80";

  constructor(private HttpClient: HttpClient) { }

  readPatient(): Observable<Patient[]> {
    return this.HttpClient.get<Patient[]>(`${this.PHP_API_SERVER}/regvac-angular-crud/backend/patient-single.php`);
  }

  createPatient(patients: Patient): Observable<Patient> {
    return this.HttpClient.post<Patient>(`${this.PHP_API_SERVER}/regvac-angular-crud/backend/patient-add.php`, patients);
  }

  updatePatient(patients: Patient){
    return this.HttpClient.put<Patient>(`${this.PHP_API_SERVER}/regvac-angular-crud/backend/patient-edit.php`, patients); 
  }

  deletePatient(id: number){
    return this.HttpClient.delete<Patient>(`${this.PHP_API_SERVER}/regvac-angular-crud/backend/patient-delete.php/?id=${id}`);
  }
}
