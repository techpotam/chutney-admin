import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThemeComponent } from './theme/theme.component';
import { AuthGuard } from '../_auth_guard/auth.guard';


const routes: Routes = [
  {
    path: "",
    component: ThemeComponent,
    children: [

      {
        path: "modules",
        loadChildren: () => import('../modules/modules.module').then(m => m.ModulesModule)
      },
      {
        // canActivateChild:[AuthGuardService],
        path: "",
        loadChildren: () => import('../modules/modules.module').then(m => m.ModulesModule)
      },
      {
        path: "",
        redirectTo: "modules",
        pathMatch: "full"
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeRoutingModule { }
