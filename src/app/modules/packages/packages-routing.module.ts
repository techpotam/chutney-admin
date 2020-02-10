import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopPackagesComponent } from './components/top-packages/top-packages.component';
import { PackagesinCityComponent } from './components/packagesin-city/packagesin-city.component';
import { EditPackageComponent } from './components/edit-package/edit-package.component';
import { ViewPackageComponent } from './components/view-package/view-package.component';

const routes: Routes = [

  {
    path: "top-packages",
    component: TopPackagesComponent
  },
  {
    path: '',
    redirectTo: 'top-packages',
    pathMatch: "full"
  },
  {
    path: 'packagesinside',
    component: PackagesinCityComponent
  },
  {
    path: 'edit-package',
    component: EditPackageComponent
  },
  {
    path: 'view-package',
    component: ViewPackageComponent
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PackagesRoutingModule { }
