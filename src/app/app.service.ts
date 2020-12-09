import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }
  getToken() {

    const headers = {
      'Content-Type': 'application/json'
    }
    return this.http.get(`${environment.ACESSO}//creden`,{ headers })
                        .subscribe((data: any) => {sessionStorage.setItem('token', data.v)})
  }

}


