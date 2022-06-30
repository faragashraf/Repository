import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './component/login/login/login.component';
import { MaterialModule } from './component/material/material/material.module'; 
import { ReactiveFormsModule } from '@angular/forms'; 
import { NgxSpinnerModule } from 'ngx-spinner';
import { UserComponent } from './component/user-edit/user/user.component';
import { UsersController } from './shared/service-proxies/service-proxies';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    HttpClientModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [UsersController],
  bootstrap: [AppComponent]
})
export class AppModule { }
