import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddemployComponent } from './addemploy/addemploy.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchemployComponent } from './searchemploy/searchemploy.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const appRoutes:Routes=[
  {
    path:"",component:AddemployComponent
  },
  {
    path:"search",component:SearchemployComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    AddemployComponent,
    NavbarComponent,
    SearchemployComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
