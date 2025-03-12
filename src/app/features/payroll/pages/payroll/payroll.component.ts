import { Component, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Router, ActivatedRoute } from '@angular/router';

// Models
import {
  Payslip,
  PayPeriod,
  PayslipWithDetails,
  PayrollPeriodGroup,
} from '../../models/payroll.model';
import { Employee } from '../../../employees/models/employee.model';

// Services
import { PayrollService } from '../../service/payroll.service';
import { PayrollFilterService } from '../../service/payroll-filter.service';
import { PayrollAnalytics } from '../../service/payroll-analytics.service';
import { NotificationService } from '../../../../shared/service/notification.service';

// Components
import { PayrollToolbarComponent } from '../../components/payroll-toolbar/payroll-toolbar.component';
import { PayslipDetailComponent } from '../../components/payslip-detail/payslip-detail.component';
import { PayPeriodListComponent } from '../../components/pay-period-list/pay-period-list.component';
import { AddPayPeriodDialogComponent } from '../../components/dialogs/add-pay-period-dialog/add-pay-period-dialog.component';
import { AssignEmployeesToPeriodDialogComponent } from '../../components/dialogs/assign-employeesto-period-dialog/assign-employees-to-period-dialog.component';

@Component({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    PayrollToolbarComponent,
    PayPeriodListComponent,
  ],
  selector: 'app-payroll',
  templateUrl: './payroll.component.html',
})
export class PayrollComponent {
  payslips = signal<Payslip[]>([]);
  payPeriods = signal<PayPeriod[]>([]);
  filteredPayslips = signal<PayslipWithDetails[]>([]);
  payrollGroups = signal<PayrollPeriodGroup[]>([]);
  currentPeriodId = signal<string>('');

  constructor(
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private payrollService: PayrollService,
    private payrollAnalytics: PayrollAnalytics,
    public filterService: PayrollFilterService,
    private notification: NotificationService
  ) {
    this.route.queryParams.subscribe((params) => {
      if (params['expandedPeriodId']) {
        this.currentPeriodId.set(params['expandedPeriodId']);
      }
    });

    this.updatePayrollData();

    effect(() => {
      this.updatePayrollData();
    });
  }

  updatePayrollData(): void {
    const payslips = this.payrollService.getPayslips()();
    const payPeriods = this.payrollService.getPayPeriods()();
    const employees = this.payrollService.getEmployees()();

    this.payslips.set(payslips);
    this.payPeriods.set(payPeriods);

    const filteredPayslips = this.filterService.filterPayslips(
      payslips,
      employees,
      payPeriods
    );

    const payslipsWithDetails = this.payrollAnalytics.getPayslipsWithDetails(
      filteredPayslips,
      employees,
      payPeriods
    );

    this.filteredPayslips.set(payslipsWithDetails);

    const groups = this.payrollAnalytics.groupPayslipsByPeriod(
      payslipsWithDetails,
      payPeriods
    );

    this.payrollGroups.set(groups);

    if (groups.length > 0 && this.currentPeriodId() === '') {
      this.currentPeriodId.set(groups[0].periodId);
    }
  }

  onPayslipClick(payslipWithDetails: PayslipWithDetails): void {
    this.dialog.open(PayslipDetailComponent, {
      data: payslipWithDetails.payslip,
    });
  }

  addNewPayPeriod(): void {
    const dialogRef = this.dialog.open(AddPayPeriodDialogComponent);

    dialogRef.afterClosed().subscribe((result: PayPeriod | undefined) => {
      if (result) {
        const success = this.payrollService.addPayPeriod(result);

        if (success) {
          this.notification.success('Pay period added successfully');
          this.currentPeriodId.set(result.id);
          this.updatePayrollData();
        } else {
          this.notification.error(
            'Failed to add pay period. ID already exists.'
          );
        }
      }
    });
  }

  assignEmployeesToPeriod(periodId: string): void {
    const period = this.payPeriods().find((p) => p.id === periodId);
    if (!period) {
      this.notification.error('Pay period not found');
      return;
    }

    const dialogRef = this.dialog.open(AssignEmployeesToPeriodDialogComponent, {
      data: { payPeriod: period },
      width: '600px',
    });

    dialogRef.afterClosed().subscribe((employees: Employee[] | undefined) => {
      if (employees && employees.length > 0) {
        const success = this.payrollService.addEmployeesToPayPeriod(
          periodId,
          employees
        );

        if (success) {
          this.notification.success(
            `Assigned ${employees.length} employee(s) to pay period`
          );
          this.updatePayrollData();
        } else {
          this.notification.error('Failed to assign employees to pay period');
        }
      }
    });
  }

  processPayroll(period: PayPeriod): void {
    this.payrollService.processPayroll(period.id);
    this.notification.success(
      `Payroll for period ${period.id} processed successfully`
    );
    this.updatePayrollData();
  }
}
