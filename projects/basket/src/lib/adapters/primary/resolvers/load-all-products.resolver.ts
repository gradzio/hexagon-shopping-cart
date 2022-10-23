import { Inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { LOADS_ALL_PRODUCTS_COMMAND_PORT, LoadsAllProductsCommandPort } from '../../../application/ports/primary/command/loads-all-products.command-port';

@Injectable()
export class LoadAllProductsResolver implements Resolve<void> {
  constructor(@Inject(LOADS_ALL_PRODUCTS_COMMAND_PORT) private _loadsAllProductsCommandPort: LoadsAllProductsCommandPort) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<void> {
    return this._loadsAllProductsCommandPort.loadAllProducts();
  }
}
