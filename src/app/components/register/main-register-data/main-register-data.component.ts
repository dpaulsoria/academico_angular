import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-register-data',
  templateUrl: './main-register-data.component.html',
  styleUrls: ['./main-register-data.component.css']
})
export class MainRegisterDataComponent implements OnInit {


  days: string[] = [
    '',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes'
  ];

  hours: string[] = [
    '9h30-10h',
    '10h-11h30',
    '11h30-12h30',
    '12h30-13h30',
    '14h-15h',
    '15h-16h',
    '16h-17h',
    '17h-18h'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
