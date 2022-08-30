import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() id: string = '';
  @Input() name: string = '';
  @Input() type: string = '';
  @Input() label: string = '';
  @Input() required_string = '';
  required: boolean = (this.required_string === "true" ? true : false);
  @Input() ngName: any;
  @Input() value: string = '';
}
