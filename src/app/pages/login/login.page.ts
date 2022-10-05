import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController, MenuController, ToastController } from '@ionic/angular';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  pagetitle='login';
  isNotHome=true;

  user: any = {
    usuario: '',
    contraseña: ''
  }
  field: string = '';

  constructor(public alertController: AlertController, toastController: ToastController, private router:Router, private menu: MenuController, private loadingCtrl: LoadingController) {this.menu.enable(false);}

    ionViewDidEnter(){
      this.menu.enable(false);
    }

  ngOnInit() {
    this.presentLoading('<img src="../../../assets/img/TeLlevoAPP.png"><h1>Espera unos segundos!</h1>');
  }

  validateModel(model: any){
    for(var[key,value] of Object.entries(model)){
      if( this.user.usuario == 'admin' && this.user.pass == '1234'|| this.user.usuario == 'user' && this.user.pass == '1234'){
        this.field = key;
        return true;
      }
    }
    return false;
  }

  

  async ingresar(){
    if(this.validateModel(this.user)){
      const alert = await this.alertController.create({
        header: 'Ingresado correctamente',
        message: ('Bienvenido ' + this.user.usuario),
        buttons: ['Aceptar']
      });
      await alert.present();
      return this.router.navigate(['/home']);
    }else{
      const alert = await this.alertController.create({
        header: 'Datos Incorrectos',
        message: 'Tiene que llenar los datos validos',
        buttons: ['Aceptar']
      });
      await alert.present();
      return;
    }
  }

  async presentLoading(message: string){
    const loading = await this.loadingCtrl.create({
      message: message,
      duration: 1500,
      keyboardClose: true,
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    await loading.present();
  }
}


