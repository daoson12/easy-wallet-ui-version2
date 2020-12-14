import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransferComponent } from './transfer.component';

import { TransferRoutingModule } from './transfer-routing.module';


@NgModule({
  declarations: [TransferComponent],
  imports: [
 
  CommonModule,
    TransferRoutingModule
  ]
})
export class TransferModule { }
