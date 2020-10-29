import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class BoletoService {

  constructor(
    private http: HttpClient
  ) { }

  gerarBoleto(contract: any) {
    console.log('contract -->', contract)
    
    let  a =  this.http.post(`${environment.PAGAMENTOS_DE_BARRAS}`, contract);
    console.log(a)
    return  this.http.post(`${environment.PAGAMENTOS_DE_BARRAS}`, contract);

  }

}
