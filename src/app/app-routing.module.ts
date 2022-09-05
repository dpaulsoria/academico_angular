import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './views/info/info.component';
import { LoginComponent } from './views/login/login.component';
import { MainViewComponent } from './views/main-view/main-view.component';
import { PagosComponent } from './views/pagos/pagos.component';

const routes: Routes = [{
    path: 'login',
    component: LoginComponent,
  },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  {
    path: 'info',
    component: InfoComponent,
  },{
    path: 'pagos',
    component: PagosComponent,
  },
  {
    path: 'main',
    component: MainViewComponent,
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
