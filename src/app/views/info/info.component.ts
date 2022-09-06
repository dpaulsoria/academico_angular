import { Component, OnInit } from '@angular/core';
import { ComService } from 'src/app/servicios/com.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor(private com: ComService) { }
  // data = {};
  ngOnInit(): void {
    // this.com.triggerLogin.subscribe(data => {
    //   console.log('Info View');
    //   this.data = data;

    // })
  }

}
