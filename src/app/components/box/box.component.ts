import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {


  @Input() label: string = '';
  @Input() active: string = 'false';
  @Input() class: string = '';

  active_color: string = 'rgb(117, 117, 117)';
  inactive_color: string = 'rgb(210, 210, 210)';
  bg_color: string = (this.active === 'true' ? this.active_color : this.inactive_color);


  

  constructor() { }

  ngOnInit(): void {
  }

}
