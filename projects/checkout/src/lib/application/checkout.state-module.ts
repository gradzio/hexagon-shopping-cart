import { NgModule } from '@angular/core';
import { CheckoutState } from './checkout.state';
import { GETS_SUMMARY_LINES_QUERY_PORT } from './ports/primary/query/gets-summary-lines.query-port';
import { CHANGES_SUMMARY_COMMAND_PORT } from './ports/primary/command/changes-summary.command-port';

@NgModule({
  imports: [],
  declarations: [],
  providers: [CheckoutState, { provide: GETS_SUMMARY_LINES_QUERY_PORT, useExisting: CheckoutState }, { provide: CHANGES_SUMMARY_COMMAND_PORT, useExisting: CheckoutState }],
  exports: []
})
export class CheckoutStateModule {
}
