import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map, switchMap, take, tap } from 'rxjs/operators';
import { LoadsAllProductsCommandPort } from './ports/primary/command/loads-all-products.command-port';
import { GetsAllProductQueryPort } from './ports/primary/query/gets-all-product.query-port';
import { RemovesProductCommandPort } from './ports/primary/command/removes-product.command-port';
import { GETS_ALL_PRODUCTS_DTO_PORT, GetsAllProductsDtoPort } from './ports/secondary/dto/gets-all-products.dto-port';
import { PRODUCT_CONTEXT_PORT, ProductContextPort } from './ports/secondary/context/product.context-port';
import { PRODUCT_EVENT_PORT, ProductEventPort } from './ports/secondary/event/product.event-port';
import { ProductQuery } from './ports/primary/query/product.query';
import { RemoveProductCommand } from './ports/primary/command/remove-product.command';

@Injectable()
export class ProductState implements LoadsAllProductsCommandPort, GetsAllProductQueryPort, RemovesProductCommandPort {
  constructor(@Inject(GETS_ALL_PRODUCTS_DTO_PORT) private _getsAllProductsDtoPort: GetsAllProductsDtoPort, @Inject(PRODUCT_CONTEXT_PORT) private _productContextPort: ProductContextPort, @Inject(PRODUCT_EVENT_PORT) private _productEventPort: ProductEventPort) {
  }

  loadAllProducts(): Observable<void> {
    return this._getsAllProductsDtoPort.getAll().pipe(
      switchMap(products => this._productContextPort.setState({all: products}).pipe(
        tap(data => this._productEventPort.productsChangedPrice({newPrice: products.reduce((a, c) => a + c.price.value / 100, 0)}))
      ))
    );
  }

  getAllProductQuery(): Observable<ProductQuery[]> {
    return this._productContextPort.select().pipe(map(context => context.all.map(product => ({
      title: product.name,
      subtitle: product.tags.join(', '),
      price: `${product.price.currency} ${product.price.value / 100}`,
      imageUrl: product.imageUrl
    }))));
  }

  removeProduct(command: RemoveProductCommand): Observable<void> {
    return this._productContextPort.select().pipe(
      take(1),
      map(oldContext => ({...oldContext, all: oldContext.all.filter(p => p.name !== command.productName)})),
      switchMap(newContext => this._productContextPort.setState(newContext).pipe(
        tap(data => this._productEventPort.productsChangedPrice({newPrice: newContext.all.reduce((a, c) => a + c.price.value / 100, 0)}))
      ))
    );
  }
}
