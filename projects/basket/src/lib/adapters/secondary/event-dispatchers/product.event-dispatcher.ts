import { Injectable } from '@angular/core';
import { ProductEventPort } from '../../../application/ports/secondary/event/product.event-port';
import { ProductsChangedPriceEvent } from '../../../application/ports/secondary/event/products-changed-price.event';
import { EventBus } from '@event-bus';

@Injectable()
export class ProductEventDispatcher implements ProductEventPort {
  constructor(private _eventBus: EventBus) {
  }
  productsChangedPrice(event: ProductsChangedPriceEvent): void {
    this._eventBus.dispatch({type: 'products-price-changed', payload: {...event}})
  }
}
