import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  nomes: String = ["Matheus","João","Paulo"]
  constructor(public navCtrl: NavController) {

  }

  removerNome(nome){
  	if(nome){
  		this.nomes.splice( this.nomes.indexOf(nome), 1);
  	}
  }
}
