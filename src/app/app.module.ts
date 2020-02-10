import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThemeModule } from './theme/theme.module';
import { ModulesModule } from './modules/modules.module';
import { AuthModule } from './auth/auth.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { NgwWowModule } from 'ngx-wow';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgwWowModule,
    AngularFontAwesomeModule,
    NgbModule,
    FormsModule,
    HttpClientModule,NgxUiLoaderModule,ReactiveFormsModule, BrowserAnimationsModule
    // ThemeModule,
    // ModulesModule,
    // AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
