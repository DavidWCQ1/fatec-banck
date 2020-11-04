import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }
  getToken() {
    return this.http.get(`${environment.GET_TOKEN}`,{responseType: 'text'})
                        .subscribe((data: any) => {sessionStorage.setItem('token', data)})
  }

}
