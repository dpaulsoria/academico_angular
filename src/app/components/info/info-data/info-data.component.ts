import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info-data',
  templateUrl: './info-data.component.html',
  styleUrls: ['./info-data.component.css']
})
export class InfoDataComponent implements OnInit {

  @Input() class: string = '';
  @Input() active: string='';
  @Input() content: string = '';


  action = () => {

  }

  constructor() { }

  ngOnInit(): void {


  }
}
