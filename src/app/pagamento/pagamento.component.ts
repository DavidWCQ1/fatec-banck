import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { PagamentoService } from './pagamento.service';


@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})
export class PagamentoComponent implements OnInit {

  type = ''
  pagamentoForm: FormGroup
  

  constructor(
    private boletoService: PagamentoService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) { }
  
  ngOnInit() {

    this.pagamentoForm = this.formBuilder.group({
      barcodeNumber: ['846300000003649901090112004017356363301183312117'],
      paymentDate: ['2017-0 7-21']
    })
  }

  onSubmit() {
   this.boletoService.consultarBarra(this.pagamentoForm.value).subscribe(console.log)
  }

}
