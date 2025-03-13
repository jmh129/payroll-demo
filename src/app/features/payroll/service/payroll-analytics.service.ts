/**
 * Service for analyzing and processing payroll data
 * Contains business logic for payroll calculations and organization
 * @Injectable Provided at the root level for app-wide access
 */

import { Injectable } from '@angular/core';
import {
  PayPeriod,
  Payslip,
  PayslipWithDetails,
  PayPeriodStatus,
} from '../models/payroll.model';
import {
  Employee,
  EmployeeStatus,
} from '../../employees/models/employee.model';

@Injectable({
  providedIn: 'root',
})
export class PayrollAnalytics {
  /**
   * Get the count of active employees
   * @param employees The array of employees to analyze
   * @returns The number of active employees
   */
  getActiveEmployeeCount(employees: Employee[]): number {
    return employees.filter((e) => e.status === EmployeeStatus.Active).length;
  }

  /**
   * Get the total cost of the last processed payroll
   * @param payslips The array of payslips to analyze
   * @param payPeriods The array of pay periods for reference
   * @returns The total cost of the last processed payroll
   */
  getLastProcessedPayrollCost(
    payslips: Payslip[],
    payPeriods: PayPeriod[]
  ): number {
    const processedPayslips = this.getProcessedPayslips(payslips, payPeriods);
    return processedPayslips.reduce((sum, p) => sum + p.netPay, 0);
  }

  /**
   * Calculate monthly payroll costs
   * @param payslips The array of payslips to analyze
   * @param payPeriods The array of pay periods for reference
   * @returns Object with months as keys and total costs as values
   */
  calculateMonthlyPayrollCosts(
    payslips: Payslip[],
    payPeriods: PayPeriod[]
  ): Record<string, number> {
    // Create a map for quick period lookup
    const periodMap = new Map<string, PayPeriod>();
    payPeriods.forEach((period) => periodMap.set(period.id, period));

    // Group payslips by month and sum the net pay
    const monthlyTotals: Record<string, number> = {};

    payslips.forEach((payslip) => {
      const period = periodMap.get(payslip.periodId);
      if (
        period &&
        (period.status === PayPeriodStatus.Processed ||
          period.status === PayPeriodStatus.Paid)
      ) {
        // Extract month from end date (format: YYYY-MM)
        const monthKey = period.endDate.substring(0, 7);

        if (!monthlyTotals[monthKey]) {
          monthlyTotals[monthKey] = 0;
        }
        monthlyTotals[monthKey] += payslip.netPay;
      }
    });

    return monthlyTotals;
  }

  /**
   * Get all payslips associated with processed pay periods
   * @param payslips The array of payslips to filter
   * @param payPeriods The array of pay periods for reference
   * @returns Array of payslips associated with processed pay periods
   */
  getProcessedPayslips(
    payslips: Payslip[],
    payPeriods: PayPeriod[]
  ): Payslip[] {
    // Create a map for quicker lookup
    const periodMap = new Map<string, PayPeriod>();
    payPeriods.forEach((period) => periodMap.set(period.id, period));

    return payslips.filter((p) => {
      const period = periodMap.get(p.periodId);
      return period?.status === PayPeriodStatus.Processed;
    });
  }

  /**
   * Get payslips with employee details
   * @param payslips The array of payslips to enhance
   * @param employees The array of employees for reference
   * @param payPeriods The array of pay periods for reference
   * @returns Array of payslips with additional employee and period details
   */
  getPayslipsWithDetails(
    payslips: Payslip[],
    employees: Employee[],
    payPeriods: PayPeriod[]
  ): PayslipWithDetails[] {
    return payslips.map((payslip) => {
      const employee = employees.find((e) => e.id === payslip.employeeId);
      const payPeriod = payPeriods.find((p) => p.id === payslip.periodId);

      return {
        payslip,
        employeeName: employee?.name || payslip.employeeId,
        periodStatus: payPeriod?.status || PayPeriodStatus.Pending,
      };
    });
  }

  /**
   * Group payslips by pay period
   * @param payslipsWithDetails The array of enhanced payslips to group
   * @param payPeriods The array of pay periods for reference
   * @returns Array of objects containing period ID and associated payslips
   */
  groupPayslipsByPeriod(
    payslipsWithDetails: PayslipWithDetails[],
    payPeriods: PayPeriod[]
  ): Array<{ periodId: string; items: PayslipWithDetails[] }> {
    // Group payslips by period
    const groupedPayslips: Record<string, PayslipWithDetails[]> = {};

    // First, initialize groups for all pay periods (even empty ones)
    payPeriods.forEach((period) => {
      groupedPayslips[period.id] = [];
    });

    // Then add payslips to their respective groups
    payslipsWithDetails.forEach((item) => {
      if (groupedPayslips[item.payslip.periodId]) {
        groupedPayslips[item.payslip.periodId].push(item);
      }
    });

    // Convert to array for easier handling in template
    const groups = Object.keys(groupedPayslips).map((periodId) => ({
      periodId,
      items: groupedPayslips[periodId],
    }));

    // Sort by periodId in descending order (newest first)
    return groups.sort((a, b) => b.periodId.localeCompare(a.periodId));
  }

  /**
   * Calculate the percentage change in payroll cost between the last two processed periods
   * @param payslips The array of payslips to analyze
   * @param payPeriods The array of pay periods for reference
   * @returns Percentage change in payroll cost
   */
  getPayrollCostChange(payslips: Payslip[], payPeriods: PayPeriod[]): number {
    const processedPeriods = payPeriods
      .filter((p) => p.status === PayPeriodStatus.Processed)
      .sort((a, b) => a.endDate.localeCompare(b.endDate));

    if (processedPeriods.length < 2) return 0;

    const latestPeriod = processedPeriods[processedPeriods.length - 1];
    const previousPeriod = processedPeriods[processedPeriods.length - 2];

    const latestPayslips = payslips.filter(
      (p) => p.periodId === latestPeriod.id
    );
    const previousPayslips = payslips.filter(
      (p) => p.periodId === previousPeriod.id
    );

    const latestCost = latestPayslips.reduce((sum, p) => sum + p.netPay, 0);
    const previousCost = previousPayslips.reduce((sum, p) => sum + p.netPay, 0);

    return previousCost
      ? ((latestCost - previousCost) / previousCost) * 100
      : 0;
  }

  /**
   * Calculate the total net pay for a group of payslips
   * @param payslips The array of payslips to sum
   * @returns Total net pay amount
   */
  calculatePeriodTotal(payslips: PayslipWithDetails[]): number {
    return payslips.reduce((sum, item) => sum + item.payslip.netPay, 0);
  }

  /**
   * Get the status of a pay period
   * @param periodId The ID of the pay period to find
   * @param payPeriods The array of pay periods to search
   * @returns The status of the specified pay period
   */
  getPeriodStatus(periodId: string, payPeriods: PayPeriod[]): PayPeriodStatus {
    const period = payPeriods.find((p) => p.id === periodId);
    return period?.status || PayPeriodStatus.Pending;
  }

  /**
   * Format month string (YYYY-MM) to readable format
   * @param monthStr The month string in YYYY-MM format
   * @returns Formatted month string (e.g., "Jan 2025")
   */
  formatMonthLabel(monthStr: string): string {
    const [year, month] = monthStr.split('-');
    const date = new Date(parseInt(year), parseInt(month) - 1, 1);
    return date.toLocaleDateString(undefined, {
      month: 'short',
      year: 'numeric',
    });
  }
}
