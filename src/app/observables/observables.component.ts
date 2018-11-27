import { Component, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

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
          /*
          let source$ = of(1,2,3,4,5);
          let doubler = map((value:number) => value * 2);
          let doubled$ = doubler(source$);//2,4,6,8,10
          */
          //suscriber.error('Aca hay un error');
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

    let source$ = of(1,2,3,4,5);
    let doubler$ = source$.pipe(
      map((value:number)=>value*2)
    );

    

    //observable$.subscribe(resp => console.log(resp));
    doubler$.subscribe(
      resp => console.log(resp),
      error => console.log(error),
      () => console.log('Completed')
    );


    let subject$ = new Subject();
    subject$.next('hola');

    let observable2$ = of(1,2,3,4,5);

    observable2$.subscribe(subject$);

    subject$.subscribe(value => console.log(value));    



  }

  ngOnInit() {
    
  }

  

}
