import { Component, OnInit } from '@angular/core';

import { InvestimentoService } from './investimento.service'

@Component({
  selector: 'app-investimento',
  templateUrl: './investimento.component.html',
  styleUrls: ['./investimento.component.css']
})
export class InvestimentoComponent implements OnInit {

  response = []
  acao = []
  isAcao = false
  multiMercado = []
  isMultiMercado = false
  jurosPos = []
  isJuros = false
  cambial = []
  isCambial = false
  inflacao = []
  isInflacao = false
  status = true
  

  constructor(
    private investimentoService: InvestimentoService
  ) { }

  ngOnInit(): void {
    this.investimentoService.consultaInvestimento()
    .subscribe(respoonse => {
      this.response = respoonse["data"]

      this.acao = this.response.filter(data =>{
        return data.benchmarkClass == "Ações"
      })

      this.multiMercado = this.response.filter(data =>{
        return data.benchmarkClass == "Multimercados"
      })

      this.cambial = this.response.filter(data =>{
        return data.benchmarkClass == "Cambial"
      })

      this.jurosPos = this.response.filter(data =>{
        return data.benchmarkClass == "Juros Pós"
      })

      this.inflacao = this.response.filter(data =>{
        return data.benchmarkClass == "Inflação"
      })
    })
  }

  showAcao(){
    this.isAcao = true
    this.status = false
  }

  showMultiMercado(){
    this.isMultiMercado = true
    this.status = false
  }

  showCambial(){
    this.isCambial = true
    this.status = false
  }

  showJuros(){
    this.isJuros = true
    this.status = false
  }

  showInflacao(){
    this.isInflacao = true
    this.status = false
  }
  
  goBack(){
    this.status = true
    this.isInflacao = false
    this.isAcao = false
    this.isCambial = false
    this.isMultiMercado = false
    this.isJuros = false
  }
}