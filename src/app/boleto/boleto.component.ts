import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';


import { BoletoService } from './boleto.service';



@Component({
  selector: 'app-boleto',
  templateUrl: './boleto.component.html',
  styleUrls: ['./boleto.component.css']
})
export class BoletoComponent implements OnInit {
  type = ''
  boletoForm: FormGroup
  status = false
  response : Object

  constructor(
    private boletoService: BoletoService,
    private formBuilder: FormBuilder,

  ) { }

  ngOnInit() {

    this.boletoForm = this.formBuilder.group({
      dueDate: ['2017-0 7-21'],
      amount: ['19.87'],
      reference: ['12345ABC'],
      description: ['Depósito em conta'],
      customer: this.formBuilder.group({
        name: ['David Wesley'],
        email: ['david.wcq@gmail.com'],
        documentType: ['CPF'],
        document: ['09464309812'],
        phone: this.formBuilder.group({
          areaCode: ['17'],
          number: ['980761082'],
        }),
        address: this.formBuilder.group({
          postalCode: ['06310390'],
          street: ['Av. Francisco Pignatari'],
          number: ['650'],
          district: ['Vila Gustavo Correia'],
          city: ['Carapicuíba'],
          state: ['SP'],
        })
      })
    })
  }

  onSubmit() {
    this.boletoService.gerarBoleto(this.boletoForm.value)
      .subscribe(data => {
        this.status = true
        this.response = data
      }
      )
  }
}
