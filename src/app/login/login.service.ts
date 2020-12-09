import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(
    private http: HttpClient
  ) { }

  gerarAcesso(contract: any) {
    const headers = {
      'Content-Type': 'application/json'  
    }
    return  this.http.post(`${environment.ACESSO}/login`, contract, { headers });
  }

  gerarcadastro(contract: any) {
    const headers = {
      'Content-Type': 'application/json'  
    }
    return  this.http.post(`${environment.ACESSO}/cadastros`, contract, { headers });
  }

  confirm(contract: any) {
    const headers = {
      'Content-Type': 'application/json'  
    }
    return  this.http.post(`${environment.ACESSO}/confirm`, contract, { headers });
  }

}
