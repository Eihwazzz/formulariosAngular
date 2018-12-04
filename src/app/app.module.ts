import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ObservablesComponent } from './observables/observables.component';

import { AlumnosComponent } from './alumno-module/alumnos/alumnos.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ReactiveFormComponent,
    ObservablesComponent,
    AlumnosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
