import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private ruta: Router) { }

  ngOnInit(): void {
  }

  changeRoute() {
    this.ruta.navigate(['/login']);
  }


  bttn = {
    width: 50,
    height: 50,
    border: 25,
    color: 'white'
  }

  img_espol = {
    width: 250,
    height: 100,
    path: '../../../assets/logo-gris.png',
    alt_text: 'Logo de la ESPOL'
  }

  img_logOut = {
    width: 25,
    height: 25,
    path: '../../../assets/exit.png',
    alt_text: 'Botón de salida'
  }

}
