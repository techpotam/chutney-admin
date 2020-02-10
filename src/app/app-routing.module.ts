import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path:"",
    loadChildren:() => import('./auth/auth.module').then(m => m.AuthModule)
  },
  { 
    path:"admin",
    loadChildren:() => import('./theme/theme.module').then(m => m.ThemeModule)
    
  },
  {
    path:"",
    pathMatch:"full",
    redirectTo:"auth"
  },
  {
    path:"**",
    component:NotFoundComponent
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
