import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {	AdicionaClientePage }	from '../adiciona-cliente/adiciona-cliente';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  
cadastrarCliente (){
this.navCtrl.push(AdicionaClientePage);
}
}
