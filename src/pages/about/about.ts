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
    if(!this.a || !this.b || !this.op){
      let alert = this.alertCtrl.create({
    			title: 'Error!',
    			subTitle: 'Preencha todos os campos...',
    			buttons: ['Ok']
  			});
  	  alert.present();
    }
    else if(isNaN(this.a) || isNaN(this.b)){
      let alert = this.alertCtrl.create({
    			title: 'Error!',
    			subTitle: 'Use apenas números para \"a\" e \"b\"...',
    			buttons: ['Ok']
  			});
  	  alert.present();
    }
    else{
      let A = parseFloat(this.a, 10);
      let B = parseFloat(this.b, 10);
      switch(this.op){
        case '+': this.resultado = ""+(A + B);
        		  break;
        case '-': this.resultado = ""+(A - B);
        		  break;
        case '*': this.resultado = ""+(A * B);
        		  break;
        case '/': this.resultado = ""+(A / B);
        		  break;
      }
    }
  }
}
