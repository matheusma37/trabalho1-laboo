import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  a: String = "";
  b: String = "";
  op: String = "";
  resultado: String = "";
  
  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {

  }

  calcular(){
    if(!this.a.valueOf() || !this.b.valueOf() || !this.op.valueOf()){
      let alert = this.alertCtrl.create({
    			title: 'Error!',
    			subTitle: 'Preencha todos os campos...',
    			buttons: ['Ok']
  			});
  	  alert.present();
    }
    else if(isNaN(Number(this.a)) || isNaN(Number(this.b))){
      let alert = this.alertCtrl.create({
    			title: 'Error!',
    			subTitle: 'Use apenas números para "a" e "b"...',
    			buttons: ['Ok']
  			});
  	  alert.present();
    }
    else if(this.b.valueOf() == '0' && this.op.valueOf() == '/'){
        let alert = this.alertCtrl.create({
    			title: 'Error!',
    			subTitle: 'Não é permitida divisão por zero!',
    			buttons: ['Ok']
  			});
  	    alert.present();
      }
      else{
        this.resultado = "" + eval(this.a.valueOf() + this.op.valueOf() + this.b.valueOf());
      }
    }
}
