import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  public sideNavItems = [
    {label: 'Registro', icon: 'add', url: 'create'},
    {label: 'Invetario', icon: 'inventory_2', url: 'management'},
  ]
}
