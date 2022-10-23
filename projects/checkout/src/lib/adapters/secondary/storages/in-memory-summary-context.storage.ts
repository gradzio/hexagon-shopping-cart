import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { SummaryContextPort } from '../../../application/ports/secondary/context/summary.context-port';
import { SummaryContext } from '../../../application/ports/secondary/context/summary.context';

@Injectable()
export class InMemorySummaryContextStorage implements SummaryContextPort {
  private _dataSubject: BehaviorSubject<SummaryContext> = new BehaviorSubject<SummaryContext>({
    productTotal: 0,
    shipping: 0
  });
  private _data$: Observable<SummaryContext> = this._dataSubject.asObservable();

  select(): Observable<SummaryContext> {
    return this._data$;
  }

  setSummary(context: SummaryContext): Observable<void> {
    return of(this._dataSubject.next(context))
  }
}
