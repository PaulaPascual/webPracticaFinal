import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {CommonModule} from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { GalleryComponent } from './gallery/gallery.component';
import { InfoArtComponent } from './info-art/info-art.component';
import { AdmiComponent } from './admi/admi.component';
import { LoginComponent } from './login/login.component';
import { ModifyArtComponent } from './modify-art/modify-art.component';
import { FailComponent } from './fail/fail.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    ContactComponent,
    GalleryComponent,
    InfoArtComponent,
    AdmiComponent,
    LoginComponent,
    ModifyArtComponent,
    FailComponent
  ],
  imports: [
    BrowserModule,
      FormsModule,
      HttpClientModule,
      AppRoutingModule,
      ReactiveFormsModule,
      CommonModule,
    BsDropdownModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
