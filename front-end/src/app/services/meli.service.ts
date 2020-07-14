import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Producto } from '../models/producto';


@Injectable({
  providedIn: 'root'
})

export class MeliService {
  
  urlApi: string;

  constructor( private _http: HttpClient ) {
    this.urlApi = 'http://localhost:4000/api/';
  }

  getProductos(search: string){
    return this._http.get<Producto[]>(this.urlApi + 'items/' + search);
  }

  getProducto(id: string){
    return this._http.get<any>(this.urlApi + 'item/' + id);
  }

}
