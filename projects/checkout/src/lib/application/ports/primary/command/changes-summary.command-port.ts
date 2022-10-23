import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { ChangeSummaryCommand } from './change-summary.command';

export const CHANGES_SUMMARY_COMMAND_PORT = new InjectionToken<ChangesSummaryCommandPort>('CHANGES_SUMMARY_COMMAND_PORT');

export interface ChangesSummaryCommandPort {
  changeSummary(command: ChangeSummaryCommand): Observable<void>;
}
