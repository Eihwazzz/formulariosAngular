import { Docente } from "src/app/alumno-module/docente";

export interface Curso {
    id:number;
    titulo:string;
    fechaInicio:number;
    fechaFin:number;
    asistentes:string[];
    profesor:Docente;
    laboratorio:number;
    estado:number;
}
