import { NgModule } from '@angular/core';
import { ProductState } from './product.state';
import { LOADS_ALL_PRODUCTS_COMMAND_PORT } from './ports/primary/command/loads-all-products.command-port';
import { GETS_ALL_PRODUCT_QUERY_PORT } from './ports/primary/query/gets-all-product.query-port';
import { REMOVES_PRODUCT_COMMAND_PORT } from './ports/primary/command/removes-product.command-port';

@NgModule({
  imports: [],
  declarations: [],
  providers: [ProductState, { provide: LOADS_ALL_PRODUCTS_COMMAND_PORT, useExisting: ProductState }, { provide: GETS_ALL_PRODUCT_QUERY_PORT, useExisting: ProductState }, { provide: REMOVES_PRODUCT_COMMAND_PORT, useExisting: ProductState }],
  exports: []
})
export class ProductStateModule {
}
