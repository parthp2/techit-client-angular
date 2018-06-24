import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  HashLocationStrategy,
  LocationStrategy
} from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import {
    FormsModule,
    ReactiveFormsModule
} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RemoteDataService } from './services/remote-data.service';
import { CheckLoginGuard } from './guards/login/check-login.guard';
import { CheckLogoutGuard } from './guards/logout/check-logout.guard';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    RemoteDataService,
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    CheckLogoutGuard,
    CheckLoginGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
