import { ChangeDetectionStrategy, Component, Inject, ViewEncapsulation } from '@angular/core';
import { Observable, take } from 'rxjs';
import { ProductQuery } from '../../../application/ports/primary/query/product.query';
import {
  GETS_ALL_PRODUCT_QUERY_PORT,
  GetsAllProductQueryPort
} from '../../../application/ports/primary/query/gets-all-product.query-port';
import {
  REMOVES_PRODUCT_COMMAND_PORT,
  RemovesProductCommandPort
} from '../../../application/ports/primary/command/removes-product.command-port';

@Component({
  selector: 'lib-product-list',
  styleUrls: ['./product-list.component.scss'],
  templateUrl: './product-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent {
  readonly products$: Observable<ProductQuery[]> = this._getsAllProductQueryPort.getAllProductQuery();

  constructor(@Inject(GETS_ALL_PRODUCT_QUERY_PORT) private _getsAllProductQueryPort: GetsAllProductQueryPort, @Inject(REMOVES_PRODUCT_COMMAND_PORT) private _removesProductCommandPort: RemovesProductCommandPort) {
  }

  onTrashIconClicked(product: ProductQuery): void {
    this._removesProductCommandPort.removeProduct({productName: product.title}).pipe(take(1)).subscribe();
  }
}
