import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { SummaryLineQuery } from './summary-line.query';

export const GETS_SUMMARY_LINES_QUERY_PORT = new InjectionToken<GetsSummaryLinesQueryPort>('GETS_SUMMARY_LINES_QUERY_PORT');

export interface GetsSummaryLinesQueryPort {
  getSummaryLines(): Observable<SummaryLineQuery[]>;
}
