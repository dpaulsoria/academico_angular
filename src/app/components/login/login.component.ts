import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  user = {
    email: 'Email',
    passwd: 'Password'
  }

  style = {
    font: {
      size: 16,
      family: 'sans-serif'
    }

  }

  login() {
    alert(this.user.email);
  }


}
