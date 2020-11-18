import { Component, OnInit } from '@angular/core';

import { InvestimentoService } from './investimento.service'

@Component({
  selector: 'app-investimento',
  templateUrl: './investimento.component.html',
  styleUrls: ['./investimento.component.css']
})
export class InvestimentoComponent implements OnInit {

  response = []
  


  constructor(
    private investimentoService: InvestimentoService
  ) { }

  ngOnInit(): void {
    this.investimentoService.consultaInvestimento()
    .subscribe(respoonse => {
      this.response = respoonse["data"]
    })
  }

}
