import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-data-box',
  templateUrl: './data-box.component.html',
  styleUrls: ['./data-box.component.css']
})
export class DataBoxComponent implements OnInit {


  @Input() label: string = '';
  @Input() bg_color: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
