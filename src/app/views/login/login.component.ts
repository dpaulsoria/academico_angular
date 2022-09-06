import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api.service';
import { ComService } from 'src/app/servicios/com.service';
// import { Students } from 'src/rails/interfaces/students.interface';
import { Router } from '@angular/router';


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
    let user = this.user.email.split('@')[0];

    this.api.getStudentByUser(user).subscribe(data => {
      // console.log(data);
      const validate: boolean = this.user.email === data['email'] && this.user.passwd === data['passwrd'];

      // console.log(validate);

      // console.log(this.user);

      if (validate) {
        this.rutaRouter.navigate(['/info']);
        // this.rutaRouter.navigateByUrl('/main', data);
        this.com.triggerLogin.emit({data});
      } else {
        alert('Email o contraseña inválidos');
      }
    })

  }

  constructor(
    private api: ApiService,
    private rutaRouter: Router,
    private com: ComService
  ) { }

  ngOnInit(): void {
  }

}
