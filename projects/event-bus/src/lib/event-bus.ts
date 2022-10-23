import { filter, Observable, ReplaySubject, tap } from 'rxjs';
import { Injectable } from '@angular/core';

interface Event {
  type: string;
  payload: Record<string, any>;
}

@Injectable({ providedIn: 'root' })
export class EventBus {
  private bus = new ReplaySubject<Event>(1);

  dispatch(event: Event): void {
    console.log('dispatch', event);
    this.bus.next(event);
  }
  on(type: string): Observable<Event> {
    console.log('on', type)
    return this.bus.asObservable().pipe(tap(e => console.log('on sub', e)),filter((e: Event) => e.type === type));
  }
}
