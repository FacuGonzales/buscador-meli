import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ItemsComponent } from './components/items/items.component';
import { DetallesComponent } from './components/detalles/detalles.component';


const routes: Routes = [
  { path: '', component: InicioComponent, pathMatch: 'full'}, 
  //{ path: 'inicio', component: InicioComponent}, 
  { path: 'search/:search', component: ItemsComponent}, 
  { path: 'items/:id', component: DetallesComponent}, 
  { path: '**', redirectTo: 'inicio' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
           ],

  exports: [RouterModule]
})

export class AppRoutingModule { }
