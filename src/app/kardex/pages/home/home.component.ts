import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  @ViewChild('sidenav') sidenav!: MatSidenav;

  public sideNavItems = [
    {label: 'Registro', icon: 'add', url: 'create'},
    {label: 'Invetario', icon: 'inventory_2', url: 'management'},
  ]
}
