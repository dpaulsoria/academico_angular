import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './views/info/info.component';
import { LoginComponent } from './views/login/login.component';
import { MainViewComponent } from './views/main-view/main-view.component';
import { PagosComponent } from './views/pagos/pagos.component';

const routes: Routes = [{
    path: 'main',
    component: MainViewComponent,
  },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  {
    path: 'info',
    component: InfoComponent,
  },{ path: '', redirectTo: '/main', pathMatch: 'full' },
  {
    path: 'pagos',
    component: PagosComponent,
  },{ path: '', redirectTo: '/main', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
