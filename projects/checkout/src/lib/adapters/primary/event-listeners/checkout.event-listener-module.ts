import { Injector, NgModule } from '@angular/core';
import { CheckoutEventListener } from './checkout.event-listener';

@NgModule({
  imports: [],
  declarations: [],
  providers: [CheckoutEventListener],
  exports: []
})
export class CheckoutEventListenerModule {
  constructor(private _injector: Injector) {
    this._injector.get(CheckoutEventListener)
  }

}
