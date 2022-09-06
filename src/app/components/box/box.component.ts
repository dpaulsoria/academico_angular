import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComService } from 'src/app/servicios/com.service';
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
  @Input() data = {};



  constructor(
    private rutaRouter: Router,
    private com: ComService
  ) { }

  ngOnInit(): void {
  }
  clickOnAction() {

    this.rutaRouter.navigate([this.ruta]);
    this.com.triggerLogin.subscribe(data => {
      this.data = data;

    })

    this.com.triggerLogin.emit(this.data);
  }
}
