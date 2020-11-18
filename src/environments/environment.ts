// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false ,

  GET_TOKEN : '/api',

  EXTRATO: 'https://sandbox.openbanking.original.com.br/accounts/v1/balance',
  
  FATURA: 'https://sandbox.openbanking.original.com.br/cards/v1/cards',

  TRANSFERENCIA: 'https://sandbox.openbanking.original.com.br/money-transfers/v1/transfers',

  PAGAMENTOS_DE_BARRAS_CONSULTA: 'https://sandbox.openbanking.original.com.br/payments/v3/slips/infos',

  PAGAMENTOS_DE_BARRAS_PAGAR: 'https://sandbox.openbanking.original.com.br/payments/v3/slips',

  GERAR_BOLETOS: 'https://sandbox.openbanking.original.com.br/slips/v1/slips',

  INVESTIMENTO: 'https://sandbox.openbanking.original.com.br/investments/v1/investments'

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
