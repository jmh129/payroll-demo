import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyPipe } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

//  Model
import {
  PayPeriod,
  PayPeriodStatus,
  PayslipWithDetails,
} from '../../models/payroll.model';

// Service
import { PayrollAnalytics } from '../../service/payroll-analytics.service';

@Component({
  selector: 'app-pay-period-list',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatChipsModule,
    MatDividerModule,
    MatExpansionModule,
    MatIconModule,
    CurrencyPipe,
  ],
  templateUrl: './pay-period-list.component.html',
  styleUrls: ['./pay-period-list.component.scss'],
})
export class PayPeriodListComponent {
  @Input() payPeriods: PayPeriod[] = [];
  @Input() payslipGroups: { periodId: string; items: PayslipWithDetails[] }[] =
    [];
  @Input() currentPeriodId: string = '';
  @Input() expandable: boolean = false;
  @Input() title: string = 'Pay Periods';

  @Output() processPayroll = new EventEmitter<PayPeriod>();
  @Output() assignEmployees = new EventEmitter<string>();
  @Output() viewPayslip = new EventEmitter<PayslipWithDetails>();
  @Output() periodClick = new EventEmitter<string>();

  PayPeriodStatus = PayPeriodStatus;

  constructor(private payrollAnalytics: PayrollAnalytics) {}

  isCurrentPeriod(periodId: string): boolean {
    return periodId === this.currentPeriodId;
  }

  calculatePeriodTotal(payslips: PayslipWithDetails[]): number {
    return this.payrollAnalytics.calculatePeriodTotal(payslips);
  }

  getPeriodStatus(periodId: string): PayPeriodStatus {
    return this.payrollAnalytics.getPeriodStatus(periodId, this.payPeriods);
  }

  onProcessPayroll(period: PayPeriod, event?: Event): void {
    if (event) {
      event.stopPropagation();
    }
    this.processPayroll.emit(period);
  }

  onAssignEmployees(periodId: string, event?: Event): void {
    if (event) {
      event.stopPropagation();
    }
    this.assignEmployees.emit(periodId);
  }

  onViewPayslip(item: PayslipWithDetails): void {
    this.viewPayslip.emit(item);
  }

  onPeriodClick(period: PayPeriod): void {
    this.periodClick.emit(period.id);
  }

  findPeriod(periodId: string): PayPeriod | undefined {
    return this.payPeriods.find((p) => p.id === periodId);
  }

  findGroup(
    periodId: string
  ): { periodId: string; items: PayslipWithDetails[] } | undefined {
    return this.payslipGroups.find((g) => g.periodId === periodId);
  }
}
