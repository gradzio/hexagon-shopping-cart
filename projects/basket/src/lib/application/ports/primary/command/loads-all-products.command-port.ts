import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

export const LOADS_ALL_PRODUCTS_COMMAND_PORT = new InjectionToken<LoadsAllProductsCommandPort>('LOADS_ALL_PRODUCTS_COMMAND_PORT');

export interface LoadsAllProductsCommandPort {
  loadAllProducts(): Observable<void>;
}
