import { Injectable } from '@angular/core';
import { Observable, of, ReplaySubject } from 'rxjs';
import { ProductContextPort } from '../../../application/ports/secondary/context/product.context-port';
import { ProductContext } from '../../../application/ports/secondary/context/product.context';

@Injectable()
export class InMemoryProductContextStorage implements ProductContextPort {
  private _dataSubject: ReplaySubject<ProductContext> = new ReplaySubject<ProductContext>(1);
  private _data$: Observable<ProductContext> = this._dataSubject.asObservable();

  select(): Observable<ProductContext> {
    return this._data$;
  }

  setState(context: ProductContext): Observable<void> {
    return of(this._dataSubject.next(context))
  }
}
