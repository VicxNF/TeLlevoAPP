import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/home', icon: 'home' },
    { title: 'Buscar Viaje', url: '/buscar-viaje', icon: 'car' },
    { title: 'Coversor', url: '/not-found404', icon: 'cube' },
    { title: 'Acerca de ...', url: '/about', icon: 'information-circle' },
    { title: 'Cerrar sesión', url: '/login', icon: 'log-out' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  
  constructor() {}
}
