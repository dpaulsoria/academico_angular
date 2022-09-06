import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cronograma-row',
  templateUrl: './cronograma-row.component.html',
  styleUrls: ['./cronograma-row.component.css']
})
export class CronogramaRowComponent implements OnInit {

  @Input() label: string = '';
  @Input() courses: string[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
