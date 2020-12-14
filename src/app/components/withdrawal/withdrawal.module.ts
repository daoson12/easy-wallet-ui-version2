import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WithdrawalRoutingModule } from './withdrawal-routing.module';
import { WithdrawalComponent } from './withdrawal.component';


@NgModule({
  declarations: [ WithdrawalComponent],
  imports: [
    CommonModule,
    WithdrawalRoutingModule
  ]
})
export class WithdrawalModule { }
