import { InjectionToken } from '@angular/core';
import { ProductsChangedPriceEvent } from './products-changed-price.event';

export const PRODUCT_EVENT_PORT = new InjectionToken<ProductEventPort>('PRODUCT_EVENT_PORT');

export interface ProductEventPort {
  productsChangedPrice(event: ProductsChangedPriceEvent): void;
}
