import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { RemoveProductCommand } from './remove-product.command';

export const REMOVES_PRODUCT_COMMAND_PORT = new InjectionToken<RemovesProductCommandPort>('REMOVES_PRODUCT_COMMAND_PORT');

export interface RemovesProductCommandPort {
  removeProduct(command: RemoveProductCommand): Observable<void>;
}
