import { Inject, Injectable } from '@angular/core';
import { Observable, switchMap, tap } from 'rxjs';
import { CHANGES_SUMMARY_COMMAND_PORT, ChangesSummaryCommandPort } from '../../../application/ports/primary/command/changes-summary.command-port';
import { EventBus } from '@event-bus';

@Injectable()
export class CheckoutEventListener {
  constructor(@Inject(CHANGES_SUMMARY_COMMAND_PORT) private _changesSummaryCommandPort: ChangesSummaryCommandPort,
              private _eventBus: EventBus) {
    this.listenToProductsPriceChanged();
  }

  listenToProductsPriceChanged(): void {
    this._eventBus.on('products-price-changed').pipe(switchMap(event => this._changesSummaryCommandPort.changeSummary({
      productTotal: event.payload['newPrice'],
      shipping: 100
    }))).subscribe()
  }
}
