/**
 * Component for displaying pay periods and their associated payslips
 * Provides expandable or list views of pay period data
 */

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

  /**
   * Checks if a period is the currently selected one
   * @param periodId The ID of the period to check
   * @returns Boolean indicating if the period is current
   */
  isCurrentPeriod(periodId: string): boolean {
    return periodId === this.currentPeriodId;
  }

  /**
   * Calculates the total amount for a group of payslips
   * @param payslips The array of payslips to calculate the total for
   * @returns Total net pay amount for all payslips
   */
  calculatePeriodTotal(payslips: PayslipWithDetails[]): number {
    return this.payrollAnalytics.calculatePeriodTotal(payslips);
  }

  /**
   * Gets the status of a pay period
   * @param periodId The ID of the pay period to check
   * @returns The status of the specified pay period
   */
  getPeriodStatus(periodId: string): PayPeriodStatus {
    return this.payrollAnalytics.getPeriodStatus(periodId, this.payPeriods);
  }

  /**
   * Handles the process payroll action
   * @param period The pay period to process
   * @param event Optional click event to stop propagation
   */
  onProcessPayroll(period: PayPeriod, event?: Event): void {
    if (event) {
      event.stopPropagation();
    }
    this.processPayroll.emit(period);
  }

  /**
   * Handles the assign employees action
   * @param periodId The ID of the pay period to assign employees to
   * @param event Optional click event to stop propagation
   */
  onAssignEmployees(periodId: string, event?: Event): void {
    if (event) {
      event.stopPropagation();
    }
    this.assignEmployees.emit(periodId);
  }

  /**
   * Handles the view payslip action
   * @param item The payslip with details to view
   */
  onViewPayslip(item: PayslipWithDetails): void {
    this.viewPayslip.emit(item);
  }

  /**
   * Handles click on a period in the list view
   * @param period The pay period that was clicked
   */
  onPeriodClick(period: PayPeriod): void {
    this.periodClick.emit(period.id);
  }

  /**
   * Finds a pay period by its ID
   * @param periodId The ID of the pay period to find
   * @returns The matching pay period or undefined if not found
   */
  findPeriod(periodId: string): PayPeriod | undefined {
    return this.payPeriods.find((p) => p.id === periodId);
  }

  /**
   * Finds a payslip group by period ID
   * @param periodId The ID of the period to find payslips for
   * @returns The matching payslip group or undefined if not found
   */
  findGroup(
    periodId: string
  ): { periodId: string; items: PayslipWithDetails[] } | undefined {
    return this.payslipGroups.find((g) => g.periodId === periodId);
  }
}
