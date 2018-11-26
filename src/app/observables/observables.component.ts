import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {

  constructor() { 
    var observable$ = new Observable( suscriber =>{
      let array = [1,2,3,4,5];
  
      array.forEach((element) => {
          suscriber.next(element);
          suscriber.error('Aca hay un error');
          //Directamente tira un error
          //throw new Error('Error');
      })
  
      suscriber.error('Aca hay un error');

      suscriber.complete();
    });

    //observable$.subscribe(resp => console.log(resp));
    observable$.subscribe(
      resp => console.log(resp),
      error => console.log(error),
      () => console.log('Completed')
    );

    /*

    var subscription = doubled$.subscribe(
      value => console.log(value);
    );

    subscription.unsubscribe();

    */
  }

  ngOnInit() {
    
  }

  

}
