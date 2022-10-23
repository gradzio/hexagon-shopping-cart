import { NgModule } from '@angular/core';
import { InMemorySummaryContextStorage } from './in-memory-summary-context.storage';
import { SUMMARY_CONTEXT_PORT } from '../../../application/ports/secondary/context/summary.context-port';

@NgModule({
  imports: [],
  declarations: [],
  providers: [InMemorySummaryContextStorage, { provide: SUMMARY_CONTEXT_PORT, useExisting: InMemorySummaryContextStorage }],
  exports: []
})
export class InMemorySummaryContextStorageModule {
}
