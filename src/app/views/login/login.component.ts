import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
