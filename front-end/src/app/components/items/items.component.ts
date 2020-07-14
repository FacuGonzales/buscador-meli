/**
*  @author       Gonzales Liendo Facundo
*  @type         Component
*  @description  Listado de items component
*/


import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MeliService } from 'src/app/services/meli.service';
import { Producto } from 'src/app/models/producto';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  searchValue: string;

  esVacio: boolean = false; 

  listadoProductos: Producto[] = [];


  constructor( private router: Router,
               private route: ActivatedRoute,
               private meliData: MeliService ) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.searchValue = params.search

      this.meliData.getProductos(this.searchValue).subscribe( listado => {
        if(listado.length == 0){
          this.esVacio = true;
          this.listadoProductos = [];
        }else{
          this.listadoProductos = listado;
          for (let index = 0; index < this.listadoProductos.length; index++) {
            this.listadoProductos[index].price = this.listadoProductos[index].price.toString().replace('.', ','); 
            
          }
          this.esVacio = false;
        }
      })

    })
  }

  verDetalle( id: string ){
    this.router.navigate(['/items/'+ id])
  }
}
