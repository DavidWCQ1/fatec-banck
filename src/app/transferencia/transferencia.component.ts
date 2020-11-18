import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { TransferenciaService } from './transferencia.service'

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.css']
})
export class TransferenciaComponent implements OnInit {

  status = false
  response : object
  transferenciaForm: FormGroup


  constructor(
    private transferenciaService: TransferenciaService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {

    this.transferenciaForm = this.formBuilder.group({
      targetAccount: this.formBuilder.group({
        bank: ['033'],
        branch: ['0900'],
        account: ['222222'],
        accountType: ['CC'],
        payee: this.formBuilder.group({
          name: ['Acelino Freitas'],
          documentType: ['CPF'],
          document: ['11111111111']
        }),
      }),
      favoredId:['jbw123'],
      date:['2020-11-08'],
      amount: ['0'],
      reason: ['10'],
      comments: ['Pagamento de serviço'],
      autoSchedule: ['true'],
      callbackUrl:['https://partner.com.br/callback']
    })
  }

  onSubmit() {
    this.transferenciaService.FazerTransferencia(this.transferenciaForm.value)
    .subscribe(data => {
      this.status = true
      this.response = data
    })
  }

}
