import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './components/settings/settings.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';

const routes: Routes = [
  {
    path:"",
    component: SettingsComponent,
    children: [
      {
        path: "profile",
        component: ProfileComponent
      },
      {
        path: "",
        component: ProfileComponent
      },
  
      {
        path: "edit-profile",
        component: EditProfileComponent
      },
     
      {
        path:"",
        pathMatch: "full",
        redirectTo: "profile"
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
