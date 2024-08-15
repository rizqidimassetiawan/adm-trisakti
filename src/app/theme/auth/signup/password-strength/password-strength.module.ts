import { SharedModule } from 'src/app/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { CommonModule } from '@angular/common';
import { ToastyModule } from 'ng2-toasty';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ToastyModule.forRoot(),
    DataTablesModule,
    SharedModule,
    FormsModule
  ],
})
export class PasswordStrengthModule { }
