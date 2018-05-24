import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Cliente } from '../../modelo/cliente';
import { ClienteProvider } from '../../providers/cliente/cliente';

/**
 * Generated class for the AdicionaClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adiciona-cliente',
  templateUrl: 'adiciona-cliente.html',
  providers: [
    ClienteProvider
  ]
})
export class AdicionaClientePage {
  public cliente:Cliente;
  constructor(public navCtrl: NavController, public navParams: NavParams, public clienteProvider:ClienteProvider) {
    this.cliente = new Cliente();
  }

  cadastraCliente(){
    this.clienteProvider.inserir(this.cliente);
    this.navCtrl.pop();
    console.log(this.cliente);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AdicionaClientePage');
  }

}
