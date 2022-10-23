import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductContext } from './product.context';

export const PRODUCT_CONTEXT_PORT = new InjectionToken<ProductContextPort>('PRODUCT_CONTEXT_PORT');

export interface ProductContextPort {
  select(): Observable<ProductContext>;
  setState(context: ProductContext): Observable<void>;
}
