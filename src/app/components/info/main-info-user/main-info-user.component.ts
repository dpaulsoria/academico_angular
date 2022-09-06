import { Component, OnInit } from '@angular/core';
import { ComService } from 'src/app/servicios/com.service';


@Component({
  selector: 'app-main-info-user',
  templateUrl: './main-info-user.component.html',
  styleUrls: ['./main-info-user.component.css']
})
export class MainInfoUserComponent implements OnInit {
  arre: any = [];

  constructor(private com: ComService) { }


  estado_estudiante:string = '';
  ngOnInit(): void {
    // console.log('Main Info User Init');//Se ejecuta al ultimo, why?
    this.com.triggerLogin.subscribe(data => {
      this.arre = data;
      console.log(this.arre);

    })

  }


}
