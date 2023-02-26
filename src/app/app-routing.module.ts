import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { C1Component } from './components/c1/c1.component';
import { C2Component } from './components/c2/c2.component';
import { C3Component } from './components/c3/c3.component';
import { LayoutsComponent } from './components/layouts/layouts.component';
import { AuthGuard } from './guards/auth.guard';
import { C2CandeactiveGuard } from './guards/c2-candeactive.guard';
import { PermissionGuard } from './guards/permission.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: "",
    component: LayoutsComponent,
    canActivateChild: [AuthGuard],
    children: [
      {
        path: "",
        component: C1Component
      },
      {
        path: "c1",
        component: C1Component,       
      },
      {
        path: "c2",
        component: C2Component,        
        canDeactivate: [C2CandeactiveGuard]       
      },
      {
        path: "c3",
        canActivate: [PermissionGuard],
        component: C3Component,        
      },
    ]
  }, 
  {
    path: "login",
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
