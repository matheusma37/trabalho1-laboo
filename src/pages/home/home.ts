import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  nomes: Array<String> = ["Matheus","João","Paulo"];
  nome: String = "";
  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {

  }

  removerNome(nome){
  	if(nome){
  		this.nomes.splice( this.nomes.indexOf(nome), 1);
  	}
  }

  salvarNome(){
  		if(!this.nome){
  			let alert = this.alertCtrl.create({
    			title: 'Falha ao inserir nome!',
    			subTitle: 'Campo nome está vazio...',
    			buttons: ['Ok']
  			});
  			alert.present();
  		} else if (this.nomes.indexOf(this.nome) >= 0){
  			let alert = this.alertCtrl.create({
    			title: 'Falha ao inserir nome!',
    			subTitle: 'Nome já existente na lista...',
    			buttons: ['Ok']
  			});
  			this.nome = "";
  			alert.present();
  		}else{
  			this.nomes.push(this.nome);
  			this.nome = "";
  		}
  }
}
