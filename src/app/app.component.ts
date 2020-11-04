import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fatec-bank';

constructor(
  private appService: AppService
){}
  
  ngOnInit() {
    this.appService.getToken()
  }
}