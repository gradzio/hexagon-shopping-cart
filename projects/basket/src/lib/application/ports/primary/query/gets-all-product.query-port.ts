import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductQuery } from './product.query';

export const GETS_ALL_PRODUCT_QUERY_PORT = new InjectionToken<GetsAllProductQueryPort>('GETS_ALL_PRODUCT_QUERY_PORT');

export interface GetsAllProductQueryPort {
  getAllProductQuery(): Observable<ProductQuery[]>;
}
