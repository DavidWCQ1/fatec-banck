import { Component, OnInit } from '@angular/core';

import { ExtratoService } from './extrato.service'

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css']
})
export class ExtratoComponent implements OnInit {

  response : object

  constructor(
    private extratoService : ExtratoService
  ) { }

  ngOnInit(): void {
    this.extratoService.consultarExtrato()
    .subscribe( data => {
      this.response = data
    })
  }

}
