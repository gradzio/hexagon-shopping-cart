import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductDto } from './product.dto';

export const GETS_ALL_PRODUCTS_DTO_PORT = new InjectionToken<GetsAllProductsDtoPort>('GETS_ALL_PRODUCTS_DTO_PORT');

export interface GetsAllProductsDtoPort {
  getAll(): Observable<ProductDto[]>;
}
