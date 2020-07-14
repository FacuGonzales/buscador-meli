/**
*  @author       Gonzales Liendo Facundo
*  @type         Component
*  @description  Barra buscador component
*/

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})

export class InicioComponent implements OnInit {

  searchForm: FormGroup;
  
  searchValue;

  constructor( private router: Router,
               private fb: FormBuilder ) {

  }

  ngOnInit() {
      this.formInit();
  }

  formInit(){
    this.searchForm = this.fb.group({
        nameItem: '',
    })
  }


  searchItems(){
      this.searchValue = this.searchForm.value.nameItem;
      this.router.navigate(['/search/'+ this.searchValue])
  }

}
