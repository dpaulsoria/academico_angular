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
    '09h30 10h00',
    '',
    '',
    '',
    '',
    '',
    '10h00 11h30',
    '',
    '',
    '',
    '',
    '',
    '11h30 12h30',
    '',
    '',
    '',
    '',
    '',
    '12h30 13h30',
    '',
    '',
    '',
    '',
    '',
    '14h00 15h00',
    '',
    '',
    '',
    '',
    '',
    '15h00 16h00',
    '',
    '',
    '',
    '',
    '',
    '16h00 17h00',
    '',
    '',
    '',
    '',
    '',
    '17h00 18h00',
    '',
    '',
    '',
    '',
    ''
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
