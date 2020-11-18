import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'boletos', loadChildren: () => import('./boleto/boleto.component.module').then(m => m.BoletoModule) },
  { path: 'pagamentos', loadChildren: () => import('./pagamento/pagamento.componet.module').then(m => m.PagamentoModule) },
  { path: 'extratos', loadChildren: () => import('./extrato/extrato.module').then(m => m.ExtratoModule) },
  { path: 'faturas', loadChildren: () => import('./fatura/fatura.module').then(m => m.FaturaModule) },
  { path: 'transferencias', loadChildren: () => import('./transferencia/transferencia.module').then(m => m.TransferenciaModule) },
  { path: 'investimentos', loadChildren: () => import('./investimento/investimento.module').then(m => m.InvestimentoModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
