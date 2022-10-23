import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ProductListComponent],
  providers: [],
  exports: [ProductListComponent]
})
export class ProductListComponentModule {
}
