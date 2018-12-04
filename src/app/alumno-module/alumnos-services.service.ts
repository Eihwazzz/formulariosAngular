import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Curso } from 'src/app/alumno-module/curso';

@Injectable({
  providedIn: 'root'
})
export class AlumnosServicesService {

  cursos:any;

  constructor(private http: HttpClient) { 
    
  }
  
  ngOnInit(){
    

    console.log(this.cursos);
  }

  public getCursos(){
    return this.http.get('http://demo3744158.mockable.io/cursos');
  }
    
}
