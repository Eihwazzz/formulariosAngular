import { Component, OnInit } from '@angular/core';
import { AlumnosServicesService } from '../alumnos-services.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Curso } from 'src/app/alumno-module/curso';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  cursos:any;
  
  constructor(private listadoCursos:AlumnosServicesService, private http: HttpClient) {
    this.http.get('https://demo3744158.mockable.io/cursos').subscribe(value => { 
      this.cursos = value;
    });
    
    /*.pipe(
      map( ( response:Array<Curso> ) => {
        return response.map( (curso: Curso) => {
            console.log(curso);
          return curso;
        });
      })		
    );
    */
    
   }

  ngOnInit() {

    //console.log(this.listadoCursos.getCursos());
    console.log('hola');
    
  }

}
