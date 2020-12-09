import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { FaturaService } from './fatura.service';

@Component({
  selector: 'app-fatura',
  templateUrl: './fatura.component.html',
  styleUrls: ['./fatura.component.css']
})
export class FaturaComponent implements OnInit {

  response = {}

  constructor(

    private faturaService: FaturaService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.faturaService.consultarFatura().subscribe(
      data =>{
        this.response = data
      })
  }
}
