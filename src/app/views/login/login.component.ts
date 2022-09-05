import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  user: any = {
    'email': '',
    'passwd': ''
  }

  login() {
    console.log(this.user.email);
    console.log(this.user.passwd);

  }

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.getData().subscribe(data => {
      console.log(data);

    })
  }

}
