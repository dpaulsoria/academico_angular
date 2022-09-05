import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {


  @Input() label: string = '';
  @Input() active: string = 'false';
  @Input() class: string = '';
  @Input() ruta: string = '';
  active_color: string = 'rgb(117, 117, 117)';
  inactive_color: string = 'rgb(210, 210, 210)';
  bg_color: string = (this.active === 'true' ? this.active_color : this.inactive_color);




  constructor(
    private rutaRouter: Router
  ) { }

  ngOnInit(): void {
  }
  clickOnAction() {

   this.rutaRouter.navigate([this.ruta]);
  }
}
