import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, AbstractControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  myForm: FormGroup;
  //public nombre: AbstractControl;
  mailForm: AbstractControl;
  newsletterForm: AbstractControl;

  constructor(private fb: FormBuilder
  ) {
    this.myForm = fb.group({
      'nombre': ['', Validators.required],
      'apellido': ['', Validators.required],
      'mail': ['', [Validators.email] ],
      'newsletter': ['']
    });
    this.mailForm = this.myForm.controls.mail;
    this.newsletterForm = this.myForm.controls.newsletter;
    this.mailForm = new FormControl({value:"",disabled: true}, Validators.required);
    //this.nombre = this.myForm.controls['nombre'];
    this.newsletterForm.valueChanges.subscribe( (value:boolean) => {
      if(value){
        this.mail.enable();
      }else{
        this.mail.disable();
      }
    })
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
  get newsletter(){
    return this.myForm.get('newsletter');
  }

  public onSubmit(value){
    console.log(value);
  }

}
