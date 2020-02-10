import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageContentComponent } from './components/manage-content/manage-content.component';

const routes: Routes = [


  {
    path: '',
    component: ManageContentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentManagementRoutingModule { }
