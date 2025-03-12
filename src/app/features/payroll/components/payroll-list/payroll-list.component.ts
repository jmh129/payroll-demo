import { Component, signal, effect } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';

// Models
import {
  Payslip,
  PayPeriod,
  PayslipWithDetails,
  PayPeriodStatus,
} from '../../models/payroll.model';

// Service
import { PayrollService } from '../../service/payroll.service';
import { PayrollFilterService } from '../../service/payroll-filter.service';

// Components
import { PayrollToolbarComponent } from '../payroll-toolbar/payroll-toolbar.component';
import { PayslipDetailComponent } from '../payslip-detail/payslip-detail.component';

@Component({
  standalone: true,
  imports: [
    MatListModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatChipsModule,
    CurrencyPipe,
    PayrollToolbarComponent,
  ],
  selector: 'app-payroll-list',
  templateUrl: './payroll-list.component.html',
})
export class PayrollListComponent {
  payslips = signal<Payslip[]>([]);
  payPeriods = signal<PayPeriod[]>([]);
  filteredPayslips = signal<PayslipWithDetails[]>([]);

  // Make enum available in template
  PayPeriodStatus = PayPeriodStatus;

  constructor(
    private payrollService: PayrollService,
    private dialog: MatDialog,
    public filterService: PayrollFilterService
  ) {
    this.payslips.set(this.payrollService.getPayslips()());
    this.payPeriods.set(this.payrollService.getPayPeriods()());
    this.updateFilteredPayslips();

    effect(() => {
      this.payslips.set(this.payrollService.getPayslips()());
      this.payPeriods.set(this.payrollService.getPayPeriods()());
      this.updateFilteredPayslips();
    });
  }

  onPayslipClick(payslip: Payslip): void {
    this.dialog.open(PayslipDetailComponent, { data: payslip });
  }

  regeneratePayslip(payslip: Payslip): void {
    console.log('Regenerate payslip:', payslip);
  }

  addNewPayPeriod(): void {
    console.log('Adding new pay period');
  }

  updateFilteredPayslips(): void {
    const employees = this.payrollService.getEmployees()();
    const filteredPayslips = this.filterService.filterPayslips(
      this.payslips(),
      employees,
      this.payPeriods()
    );

    const payslipsWithDetails: PayslipWithDetails[] = filteredPayslips.map(
      (payslip) => {
        const employee = employees.find((e) => e.id === payslip.employeeId);
        const payPeriod = this.payPeriods().find(
          (p) => p.id === payslip.periodId
        );

        return {
          payslip,
          employeeName: employee?.name || payslip.employeeId,
          periodStatus: payPeriod?.status || PayPeriodStatus.Pending,
        };
      }
    );

    this.filteredPayslips.set(payslipsWithDetails);
  }
}
