import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentManagementRoutingModule } from './content-management-routing.module';
import { ManageContentComponent } from './components/manage-content/manage-content.component';
import { MaterialModule } from 'src/app/material/material.module';
import { NgxEditorModule } from 'ngx-editor';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ ManageContentComponent],
  imports: [
    CommonModule,
    ContentManagementRoutingModule,
    MaterialModule,
    NgxEditorModule,
    FormsModule 
  ]
})
export class ContentManagementModule { }
