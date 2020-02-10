import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { SettingsComponent } from './components/settings/settings.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';

@NgModule({
  declarations: [SettingsComponent,ProfileComponent,EditProfileComponent,],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    
  ]
})
export class SettingsModule { }
