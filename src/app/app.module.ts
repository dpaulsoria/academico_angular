import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { NavComponent } from './components/nav/nav.component';
import { BoxComponent } from './components/box/box.component';
import { DataBoxComponent } from './components/data-box/data-box.component';
import { CourseInfoComponent } from './components/register/course/course-info/course-info.component';
import { MainRegisterDataComponent } from './components/register/main-register-data/main-register-data.component';
import { CourseTimeComponent } from './components/register/course/course-time/course-time.component';
import { CourseParComponent } from './components/register/course/course-par/course-par.component';
import { ProfessorInfoComponent } from './components/register/professor/professor-info/professor-info.component';
import { CourseComponent } from './components/register/course/course/course.component';
import { MainInfoUserComponent } from './components/info/main-info-user/main-info-user.component';
import { InfoDataComponent } from './components/info/info-data/info-data.component';
import { InfoComponent } from './views/info/info.component';
import { MainViewComponent } from './views/main-view/main-view.component';
import { PagosComponent } from './views/pagos/pagos.component';
import { LoginComponent } from './views/login/login.component';
import { PaymentsComponent } from './components/payments/payments.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    HeaderComponent,
    MainComponent,
    NavComponent,
    BoxComponent,
    DataBoxComponent,
    CourseInfoComponent,
    MainRegisterDataComponent,
    CourseTimeComponent,
    CourseParComponent,
    ProfessorInfoComponent,
    CourseComponent,
    MainInfoUserComponent,
    InfoDataComponent,
    InfoComponent,
    MainViewComponent,
    PagosComponent,
    PaymentsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
