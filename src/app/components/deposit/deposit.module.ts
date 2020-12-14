import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepositComponent } from './deposit.component';

import { DepositRoutingModule } from './deposit-routing.module';


@NgModule({
  declarations: [DepositComponent],
  imports: [

  CommonModule,
    DepositRoutingModule
  ]
})
export class DepositModule { }
