import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { PagamentoService } from './pagamento.service';


@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})
export class PagamentoComponent implements OnInit {

  pagamentoForm: FormGroup
  status = false
  response: object


  constructor(
    private boletoService: PagamentoService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {

    this.pagamentoForm = this.formBuilder.group({
      barcodeNumber: ['84630000000364990109011200401735636330118331211'],
      paymentDate: ['2019-11-05']
    })
  }
  onSubmit() {
    this.boletoService.consultarBarra(this.pagamentoForm.value)
      .subscribe(data => {
        this.status = true
        this.response = data
      })
  }

  

  payBar() {

  const payload = {
    "barcodeNumber": "84630000000364990109011200401735636330118331211",
    "amount": "239.40",
    "paymentDate": "2019-11-05",
    "comments": "XPTO"
  }

    this.boletoService.pagarBarra(payload)
      .subscribe(data => {
        this.status = true
        this.response = data
      })

  }

}
