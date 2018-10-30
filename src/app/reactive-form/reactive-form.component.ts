import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, AbstractControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  myForm: FormGroup;
  //public nombre: AbstractControl;

  constructor(private fb: FormBuilder
  ) {
    this.myForm = fb.group({
      'nombre': ['', Validators.required],
      'apellido': ['', Validators.required],
      'mail': ['', Validators.email]
    });
    //this.nombre = this.myForm.controls['nombre'];
  }

  ngOnInit() {
  }

  get nombre(){
    return this.myForm.get('nombre');
  }
  get apellido(){
    return this.myForm.get('apellido');
  }
  get mail(){
    return this.myForm.get('mail');
  }

  public onSubmit(value){
    console.log(value);
  }

}
