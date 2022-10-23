import { NgModule } from '@angular/core';
import { ProductEventDispatcher } from './product.event-dispatcher';
import { PRODUCT_EVENT_PORT } from '../../../application/ports/secondary/event/product.event-port';

@NgModule({
  imports: [],
  declarations: [],
  providers: [ProductEventDispatcher, { provide: PRODUCT_EVENT_PORT, useExisting: ProductEventDispatcher }],
  exports: []
})
export class ProductEventDispatcherModule {
}
