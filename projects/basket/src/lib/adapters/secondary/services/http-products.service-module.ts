import { NgModule } from '@angular/core';
import { HttpProductsService } from './http-products.service';
import { GETS_ALL_PRODUCTS_DTO_PORT } from '../../../application/ports/secondary/dto/gets-all-products.dto-port';

@NgModule({
  imports: [],
  declarations: [],
  providers: [HttpProductsService, { provide: GETS_ALL_PRODUCTS_DTO_PORT, useExisting: HttpProductsService }],
  exports: []
})
export class HttpProductsServiceModule {
}
