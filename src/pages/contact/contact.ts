import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  nome: string = "Matheus Machado de Almeida"
  matricula: string = "201611200091"
  foto: string = "assets/imgs/foto.jpg"
  
  constructor(public navCtrl: NavController) {

  }

}
