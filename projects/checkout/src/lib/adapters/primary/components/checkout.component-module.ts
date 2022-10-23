import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout.component';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';

@NgModule({
  imports: [ReactiveFormsModule, MdbFormsModule, CommonModule],
  declarations: [CheckoutComponent],
  providers: [],
  exports: [CheckoutComponent]
})
export class CheckoutComponentModule {
}
