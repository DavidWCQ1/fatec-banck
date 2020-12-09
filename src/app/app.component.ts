import { Component } from '@angular/core';
import { AppService } from './app.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fatec-bank';
  status = false
  acesso = sessionStorage.getItem('acesso')

constructor(
  private router: Router,
  private route: ActivatedRoute,
  private appService: AppService
){}
  
  ngOnInit() {    
    console.log(this.acesso)
    this.appService.getToken()
    if(this.acesso === null || this.acesso === "undefined" ){
      this.router.navigate(['/login'])
    }else{
      this.status = true
      console.log(this.status = true)
    }
  }
}