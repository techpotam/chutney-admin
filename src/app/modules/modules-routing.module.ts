import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModulesComponent } from './modules/modules.component';
import { AuthGuard } from '../_auth_guard/auth.guard';



const routes: Routes = [
  {
    path: "",
    component: ModulesComponent,
    canActivate: [AuthGuard],
    children: [
      {


        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule)
      },
      {
        path: 'hotels',
        loadChildren: () => import('./hotels/hotels.module').then(m => m.HotelsModule)
      },
      {
        path: 'packages',
        loadChildren: () => import('./packages/packages.module').then(m => m.PackagesModule)
      },
      {
        path: 'manage-content',
        loadChildren: () => import('./content-management/content-management.module').then(m => m.ContentManagementModule)
      },
      {
        path: "",
        pathMatch: "full",
        redirectTo: "dashboard"
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
