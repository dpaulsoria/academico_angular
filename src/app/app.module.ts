import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { NavComponent } from './components/nav/nav.component';
import { BoxComponent } from './components/box/box.component';
import { DataBoxComponent } from './components/data-box/data-box.component';
import { CourseInfoComponent } from './components/course-info/course-info.component';
import { MainRegisterDataComponent } from './components/main-register-data/main-register-data.component';
import { CourseTimeComponent } from './components/course-time/course-time.component';
import { CourseParComponent } from './components/course-par/course-par.component';
import { ProfessorInfoComponent } from './components/professor-info/professor-info.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ButtonComponent,
    HeaderComponent,
    LoginComponent,
    MainComponent,
    NavComponent,
    BoxComponent,
    DataBoxComponent,
    CourseInfoComponent,
    MainRegisterDataComponent,
    CourseTimeComponent,
    CourseParComponent,
    ProfessorInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
