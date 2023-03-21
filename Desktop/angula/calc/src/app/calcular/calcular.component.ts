import { Component } from '@angular/core';

@Component({
  selector: 'app-calcular',
  templateUrl: './calcular.component.html',
  styleUrls: ['./calcular.component.css']
})
export class CalcularComponent {
num1 : number = 0;
num2 : number = 0;
soma : number = 0;

somar(){

this.soma=this.num1+this.num2

}

}
