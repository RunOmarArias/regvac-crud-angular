import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Patient } from '../Patient';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  generes: any = [
    'M',
    'F'
  ];
  selectedGenere: string = '';
  patients: Patient[] = [];
  selectedPatient: Patient = {
    id: 0,
    name: '',
    lastname: '',
    email: '',
    genere: '',
    hometown: '',
    curp: '',
    birthday: '',
    recordday: ''
  }

  radioChangeHandler(event: any) {
    this.selectedGenere = event.target.value;
  }

  constructor(private apiService: ApiService) {
    
  }

  ngOnInit(): void {
    this.readPatient();
  }

  readPatient() {
    this.apiService.readPatient().subscribe((patients: Patient[]) => {
      this.patients = patients;
      console.log(this.patients);
    })
  }

  createOrUpdatePatient(form: any) {
    console.log(form)
    form.value.genere = this.selectedGenere;
    if(this.selectedPatient && this.selectedPatient.id) {
      form.value.id = this.selectedPatient.id;
      console.log(form.value);
      console.log(this.selectedPatient.id);
      this.apiService.updatePatient(form.value).subscribe((patients: Patient) => {
        this.readPatient();
        console.log(form.value.id);
        console.log('Paciente actualizado ', patients);
      });
    } else {
      this.apiService.createPatient(form.value).subscribe((patients: Patient) => {
        this.readPatient();
        console.log('Paciente creado', patients);
      });
    }
  }

  selectPatient(patients: Patient) {
    this.selectedPatient = patients;
  }

  deletePatient(id: any) {
    this.apiService.deletePatient(id).subscribe((patients: Patient) => {
      this.readPatient();
      console.log('Paciente eliminado, ', patients);
    });
    this.readPatient();
  }
}
