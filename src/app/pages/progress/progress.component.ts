import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {
  progreso1 = 20;
  progreso2 = 30;

  constructor() { }

  ngOnInit() {
  }

  // cambiarValor(valor){
  //   if (this.progreso >= 100 && valor > 0) {
  //     this.progreso = 100;
  //     return;
  //   }

  //   if (this.progreso <= 0 && valor <0) {
  //     this.progreso = 0;
  //     return;
  //   }
  //   this.progreso = this.progreso + valor;
  // }

  // actualizar(event){
  //   console.log('Evento', event);
  //   this.progreso1 = event;
  // }

}
