import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PackagesRoutingModule } from './packages-routing.module';
import { TopPackagesComponent } from './components/top-packages/top-packages.component';
import { MaterialModule } from 'src/app/material/material.module';
import { PackagesinCityComponent } from './components/packagesin-city/packagesin-city.component';
import { EditPackageComponent } from './components/edit-package/edit-package.component';
import { ViewPackageComponent } from './components/view-package/view-package.component';

@NgModule({
  declarations: [TopPackagesComponent,  PackagesinCityComponent, EditPackageComponent, ViewPackageComponent],
  imports: [
    CommonModule,
    PackagesRoutingModule,
    MaterialModule
  ]
})
export class PackagesModule { }
