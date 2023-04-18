import { Component } from '@angular/core';

@Component({
  selector: 'app-calc-imc',
  templateUrl: './calc-imc.component.html',
  styleUrls: ['./calc-imc.component.css']
})
export class CalcImcComponent {

peso: number= 0;
altura: number =0;
resultado : string = '';
mensagem: string ='';
Alturafinal : number =0;

 calc() {
  const Alturafinal = this.altura / 100;
  const calculofinal= (this.peso / (Alturafinal * Alturafinal));

  if (calculofinal < 18.9) {
    this.mensagem = "Você está abaixo do peso ideal.";
} else if (calculofinal < 23.9) {
    this.mensagem = " Seu peso está normal.";
} else if (calculofinal < 28.9) {
    this.mensagem= "Você está com sobrepeso.";
} else if (calculofinal < 33.9) {
    this.mensagem = " Você está com obesidade grau I.";
} else if (calculofinal < 39.9) {
    this.mensagem= "Você está com obesidade grau II.";
} else if (calculofinal > 40){
    this.mensagem = " Você está com obesidade grau III.";
}
 else{
  this.mensagem =" Preencha os campos corretamente"
 }

   this.resultado = this.mensagem + calculofinal.toFixed(2);
}
}

