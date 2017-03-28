import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './components/app.component';
import { NavbarComponent } from './components/navbar.component';
import { PricesComponent } from './components/prices.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PricesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
