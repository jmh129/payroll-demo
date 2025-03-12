import { Component, Inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

// Model
import { Payslip } from '../../models/payroll.model';

// Service
import { PayrollService } from '../../service/payroll.service';

@Component({
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    CurrencyPipe,
  ],
  selector: 'app-payslip-detail',
  templateUrl: './payslip-detail.component.html',
  styleUrls: ['./payslip-detail.component.scss'],
})
export class PayslipDetailComponent {
  employeeName: string;

  constructor(
    public dialogRef: MatDialogRef<PayslipDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public payslip: Payslip,
    private payrollService: PayrollService
  ) {
    const employee = this.payrollService
      .getEmployees()()
      .find((e) => e.id === payslip.employeeId);
    this.employeeName = employee?.name || 'Unknown Employee';
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
