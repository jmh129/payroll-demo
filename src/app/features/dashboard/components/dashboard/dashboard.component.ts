import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';

// Models
import {
  PayPeriod,
  Payslip,
  PayPeriodStatus,
} from '../../../payroll/models/payroll.model';
import { EmployeeStatus } from '../../../employees/models/employee.model';

// Service
import { PayrollService } from '../../../payroll/service/payroll.service';

@Component({
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    MatListModule,
    MatDividerModule,
    CurrencyPipe,
  ],
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  payPeriods = signal<PayPeriod[]>([]);
  activeEmployeeCount = signal<number>(0);
  lastPayrollCost = signal<number>(0);

  PayPeriodStatus = PayPeriodStatus;

  constructor(private payrollService: PayrollService, private router: Router) {
    this.payPeriods.set(this.payrollService.getPayPeriods()());
    this.activeEmployeeCount.set(
      this.payrollService
        .getEmployees()()
        .filter((e) => e.status === EmployeeStatus.Active).length
    );
    const lastProcessedPayslips: Payslip[] = this.payrollService
      .getPayslips()()
      .filter((p) => {
        const period = this.payrollService
          .getPayPeriods()()
          .find((pp) => pp.id === p.periodId);
        return period?.status === PayPeriodStatus.Processed;
      });
    this.lastPayrollCost.set(
      lastProcessedPayslips.reduce((sum, p) => sum + p.netPay, 0)
    );
  }

  processPayroll(period: PayPeriod): void {
    // Process the payroll
    this.payrollService.processPayroll(period.id);

    // Update the local data to reflect the changes
    this.payPeriods.set(this.payrollService.getPayPeriods()());

    // Also update the last payroll cost since a new period was processed
    const lastProcessedPayslips: Payslip[] = this.payrollService
      .getPayslips()()
      .filter((p) => {
        const period = this.payrollService
          .getPayPeriods()()
          .find((pp) => pp.id === p.periodId);
        return period?.status === PayPeriodStatus.Processed;
      });
    this.lastPayrollCost.set(
      lastProcessedPayslips.reduce((sum, p) => sum + p.netPay, 0)
    );
  }

  navigateToPayroll(): void {
    this.router.navigate(['/payroll']);
  }

  navigateToEmployees(): void {
    this.router.navigate(['/employees']);
  }
}
