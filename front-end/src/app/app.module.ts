import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ItemsComponent } from './components/items/items.component';
import { DetallesComponent } from './components/detalles/detalles.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MeliService } from './services/meli.service';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ItemsComponent,
    DetallesComponent
  ],

  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],

  providers: [ 
    MeliService
  ],

  bootstrap: [
    AppComponent
  ]

})

export class AppModule { }
