/**
 * DashboardComponent serves as the main dashboard page, displaying payroll metrics,
 * a chart, and pay period list. It integrates with payroll services for data updates.
 * @standalone
 */

import { Component, signal, effect } from '@angular/core';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';

// Model
import { PayPeriod } from '../../../payroll/models/payroll.model';

// Service
import { PayrollService } from '../../../payroll/service/payroll.service';
import { PayrollAnalytics } from '../../../payroll/service/payroll-analytics.service';
import { NotificationService } from '../../../../shared/service/notification.service';

// COmponets
import { PayrollChartComponent } from '../../../payroll/components/payroll-chart/payroll-chart.component';
import { PayPeriodListComponent } from '../../../payroll/components/pay-period-list/pay-period-list.component';
import { DashboardMetricsComponent } from '../../components/dashboard-metrics/dashboard-metrics.component';

@Component({
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    PayrollChartComponent,
    PayPeriodListComponent,
    DashboardMetricsComponent,
  ],
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  payPeriods = signal<PayPeriod[]>([]);
  activeEmployeeCount = signal<number>(0);
  lastPayrollCost = signal<number>(0);
  payrollCostChange = signal<number>(0);

  constructor(
    private payrollService: PayrollService,
    private payrollAnalytics: PayrollAnalytics,
    private notification: NotificationService,
    private router: Router
  ) {
    this.updateDashboardData();
    effect(() => this.updateDashboardData());
  }

  updateDashboardData(): void {
    const employees = this.payrollService.getEmployees()();
    const payPeriods = this.payrollService.getPayPeriods()();
    const payslips = this.payrollService.getPayslips()();

    this.payPeriods.set(payPeriods);
    this.activeEmployeeCount.set(
      this.payrollAnalytics.getActiveEmployeeCount(employees)
    );
    this.lastPayrollCost.set(
      this.payrollAnalytics.getLastProcessedPayrollCost(payslips, payPeriods)
    );
    this.payrollCostChange.set(
      this.payrollAnalytics.getPayrollCostChange(payslips, payPeriods)
    );
  }

  processPayroll(period: PayPeriod): void {
    this.payrollService.processPayroll(period.id);
    this.notification.success(
      `Payroll for period ${period.id} processed successfully`
    );
    this.updateDashboardData();
  }

  navigateToPayrollWithPeriod(periodId: string): void {
    this.router.navigate(['/payroll'], {
      queryParams: { expandedPeriodId: periodId },
    });
  }
}
