import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GetsAllProductsDtoPort } from '../../../application/ports/secondary/dto/gets-all-products.dto-port';
import { ProductDto } from '../../../application/ports/secondary/dto/product.dto';

@Injectable()
export class HttpProductsService implements GetsAllProductsDtoPort {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<ProductDto[]> {
    return this._httpClient.get<ProductDto[]>('https://eqsfaxnghe.cfolks.pl/assets/data/shop/products-asc.json');
  }
}
