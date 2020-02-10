import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';

import {MatCardModule} from '@angular/material/card';


const MaterialComponent =[
  MatInputModule,
  MatTabsModule,
  MatCardModule,
  MatButtonModule
 
]

@NgModule({

  imports: [
    MaterialComponent ],
  exports: [MaterialComponent]
})
export class MaterialModule { }
