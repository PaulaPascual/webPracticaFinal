import { NgModule } from '@angular/core';
import {ContactComponent} from './contact/contact.component';
import { Routes, RouterModule } from '@angular/router';
import {MenuComponent} from './menu/menu.component';
import {GalleryComponent} from './gallery/gallery.component';
import {InfoArtComponent} from './info-art/info-art.component';
import {AdmiComponent} from './admi/admi.component';
import {LoginComponent} from './login/login.component';
import {ModifyArtComponent} from './modify-art/modify-art.component';
import {FailComponent} from './fail/fail.component';

const routes: Routes = [
  {path: 'contact', component: ContactComponent},
  {path: '', component: MenuComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'gallery/:id', component: InfoArtComponent},
  {path: 'admi', component: AdmiComponent, data:{requiresLogin: true}},
  {path: 'login', component: LoginComponent},
  {path: 'modify/:id', component: ModifyArtComponent},
  {path: '**', component: FailComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


