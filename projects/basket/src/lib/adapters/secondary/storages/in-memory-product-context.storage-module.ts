import { NgModule } from '@angular/core';
import { InMemoryProductContextStorage } from './in-memory-product-context.storage';
import { PRODUCT_CONTEXT_PORT } from '../../../application/ports/secondary/context/product.context-port';

@NgModule({
  imports: [],
  declarations: [],
  providers: [InMemoryProductContextStorage, { provide: PRODUCT_CONTEXT_PORT, useExisting: InMemoryProductContextStorage }],
  exports: []
})
export class InMemoryProductContextStorageModule {
}
