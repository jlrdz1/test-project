import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @Input('nombre') leyenda = 'Leyenda';
  @Input() progreso = 50;
  @ViewChild('txtProgress') txtProgress: ElementRef;

  @Output('actualizaValor') cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
    // console.log('leyenda', this.leyenda);
    // console.log('progreso', this.progreso);
  }

  ngOnInit() {
    // console.log('leyenda', this.leyenda);
    // console.log('progreso', this.progreso);
  }

  onChanges(newVale:number) {
    
    // let elemHTML:any = this.txtProgress.nativeElement;
    // console.log(this.txtProgress)
    // console.log(elemHTML);

    if (newVale >= 100){
      this.progreso = 100;
    } else if (newVale <= 0){
      this.progreso = 0;
    }
    else {
      this.progreso = newVale;
    }

    this.txtProgress.nativeElement.value = this.progreso;
    
    this.cambioValor.emit(this.progreso);
    this.txtProgress.nativeElement.focus();
  }

  cambiarValor(valor){
    if (this.progreso >= 100 && valor > 0) {
      this.progreso = 100;
      return;
    }

    if (this.progreso <= 0 && valor <0) {
      this.progreso = 0;
      return;
    }
    this.progreso = this.progreso + valor;
    this.cambioValor.emit(this.progreso);
  }
}
