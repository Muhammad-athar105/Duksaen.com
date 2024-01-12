import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { LoginComponent } from './components/login/login.component';



import { AuthGuard } from './core/gard/auth.guard';
import { AdmingaurdGuard } from './core/gard/admingaurd.guard';

import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { NotFondComponent } from './components/not-fond/not-fond.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { RegisterFormDialogComponent } from './webModule/web/register-form-dialog/register-form-dialog.component';




const routes: Routes = [
  {
    path: '',
    redirectTo: 'webhome',
    pathMatch: 'full',
  },
  // lazy loading components
  {
    path: 'admin',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./modules/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'sadmin',
    canActivate: [AdmingaurdGuard],
    loadChildren: () => import('./module/super-admin/super-admin.module').then((m) => m.SuperAdminModule)
  },
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home-module/home/home.module').then((m) => m.HomeModule)
  // },
  {
    path: 'webhome',
    loadChildren: () => import('./webModule/web/web.module').then((m) => m.WebModule)
  },
  { path: 'login', component: LoginComponent },
  { path: 'superadmin', component: AdminLoginComponent },
  { path: 'signin', component: RegisterFormDialogComponent },
  { path: 'forgot', component: ForgotPasswordComponent },
  { path: '**', component: NotFondComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
