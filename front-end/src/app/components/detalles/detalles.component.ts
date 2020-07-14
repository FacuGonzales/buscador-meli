/**
*  @author       Gonzales Liendo Facundo
*  @type         Component
*  @description  Detalle de item component
*/

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MeliService } from 'src/app/services/meli.service';
import { Producto } from 'src/app/models/producto';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss']
})
export class DetallesComponent implements OnInit {

  idProducto: string;
  producto: Producto = {};

  constructor(  private route: ActivatedRoute,
                private meliData: MeliService) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.idProducto = params.id;

      this.meliData.getProducto(this.idProducto).subscribe( producto => {
        this.producto = producto;

        this.producto.price = this.producto.price.toString().replace('.', ',');
      })

    })
  }

}
