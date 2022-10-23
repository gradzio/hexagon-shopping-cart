import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { SummaryContext } from './summary.context';

export const SUMMARY_CONTEXT_PORT = new InjectionToken<SummaryContextPort>('SUMMARY_CONTEXT_PORT');

export interface SummaryContextPort {
  select(): Observable<SummaryContext>;
  setSummary(context: SummaryContext): Observable<void>;
}
