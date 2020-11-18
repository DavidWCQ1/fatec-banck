import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PagamentoService {

  constructor(
    private http: HttpClient
  ) { }

  token = sessionStorage.getItem('token')

  consultarBarra(contract: any) {
    const headers = {
      'Authorization': `Bearer ${this.token}`,
      'x-transaction-id': '6e3065eb-f801-4747-a78b-39aac362150e'
    }
    return this.http.post(`${environment.PAGAMENTOS_DE_BARRAS_CONSULTA}`, contract, { headers });
  }


  pagarBarra(contract: any) {
    const headers = {
      'Authorization': `Bearer ${this.token}`,
      'x-transaction-id': '6e3065eb-f801-4747-a78b-39aac362150e'
    }
    return this.http.post(`${environment.PAGAMENTOS_DE_BARRAS_PAGAR}`, contract, { headers });
  }



}
