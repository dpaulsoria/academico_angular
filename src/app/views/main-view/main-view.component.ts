import { Component, OnInit } from '@angular/core';
import { ComService } from 'src/app/servicios/com.service';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {

  data = {};

  constructor(private com: ComService) { }
  ngOnInit(): void {
    // this.com.triggerLogin.subscribe(data => {
    //   console.log('Register View');
    //   console.log(data);
    //   this.data = data;

    // })
  }

}
