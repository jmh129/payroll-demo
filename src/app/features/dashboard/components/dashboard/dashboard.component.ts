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
  PayPeriodStatus,
} from '../../../payroll/models/payroll.model';

// Services
import { PayrollService } from '../../../payroll/service/payroll.service';
import { PayrollAnalytics } from '../../../payroll/service/payroll-analytics.service';

// Components
import { PayrollChartComponent } from '../../../payroll/components/payroll-chart/payroll-chart.component';

@Component({
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    MatListModule,
    MatDividerModule,
    CurrencyPipe,
    PayrollChartComponent,
  ],
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  payPeriods = signal<PayPeriod[]>([]);
  activeEmployeeCount = signal<number>(0);
  lastPayrollCost = signal<number>(0);

  PayPeriodStatus = PayPeriodStatus;

  constructor(
    private payrollService: PayrollService,
    private payrollAnalytics: PayrollAnalytics,
    private router: Router
  ) {
    this.updateDashboardData();
  }

  updateDashboardData(): void {
    // Get latest data
    const employees = this.payrollService.getEmployees()();
    const payPeriods = this.payrollService.getPayPeriods()();
    const payslips = this.payrollService.getPayslips()();

    // Update signals using analytics service
    this.payPeriods.set(payPeriods);
    this.activeEmployeeCount.set(
      this.payrollAnalytics.getActiveEmployeeCount(employees)
    );
    this.lastPayrollCost.set(
      this.payrollAnalytics.getLastProcessedPayrollCost(payslips, payPeriods)
    );
  }

  processPayroll(period: PayPeriod): void {
    // Process the payroll
    this.payrollService.processPayroll(period.id);

    // Update all dashboard data
    this.updateDashboardData();
  }

  navigateToPayroll(): void {
    this.router.navigate(['/payroll']);
  }

  navigateToEmployees(): void {
    this.router.navigate(['/employees']);
  }
}
