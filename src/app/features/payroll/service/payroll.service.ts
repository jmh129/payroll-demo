/**
 * PayrollService manages payroll data and operations, including pay periods, payslips, and employee payroll processing.
 * It uses signals to maintain reactive state and mock data for demonstration purposes.
 * @Injectable Provided at the root level for app-wide access
 */

import { Injectable, signal } from '@angular/core';

// Mock data
import { MOCK_EMPLOYEES } from '../../employees/data/employees.mock';
import { MOCK_PAY_PERIODS } from '../data/pay-periods.mock';
import { MOCK_PAYSLIPS } from '../data/pay-slips.mock';

// Models
import {
  Employee,
  EmployeeStatus,
} from '../../employees/models/employee.model';
import {
  PayPeriod,
  Payslip,
  Deduction,
  DeductionType,
  PayPeriodStatus,
} from '../models/payroll.model';

/**
 * Service for managing payroll data and operations
 */
@Injectable({
  providedIn: 'root',
})
export class PayrollService {
  private employees = signal<Employee[]>(MOCK_EMPLOYEES);
  private payPeriods = signal<PayPeriod[]>(MOCK_PAY_PERIODS);
  private payslips = signal<Payslip[]>(MOCK_PAYSLIPS);

  /**
   * Returns a readonly signal of all employees.
   * @returns Readonly signal of Employee array
   */
  getEmployees() {
    return this.employees.asReadonly();
  }

  /**
   * Returns a readonly signal of all pay periods.
   * @returns Readonly signal of PayPeriod array
   */
  getPayPeriods() {
    return this.payPeriods.asReadonly();
  }

  /**
   * Returns a readonly signal of all payslips.
   * @returns Readonly signal of Payslip array
   */
  getPayslips() {
    return this.payslips.asReadonly();
  }

  /**
   * Returns a signal of payslips filtered by employee ID.
   * @param employeeId The ID of the employee to filter payslips for
   * @returns Signal containing the filtered Payslip array
   */
  getPayslipsByEmployeeId(employeeId: string) {
    return signal<Payslip[]>(
      this.payslips().filter((p) => p.employeeId === employeeId)
    );
  }

  /**
   * Finds a payslip by its ID.
   * @param payslipId The ID of the payslip to find
   * @returns The matching Payslip or undefined if not found
   */
  getPayslipById(payslipId: string): Payslip | undefined {
    return this.payslips().find((p) => p.id === payslipId);
  }

  /**
   * Finds a pay period by its ID.
   * @param periodId The ID of the pay period to find
   * @returns The matching PayPeriod or undefined if not found
   */
  getPayPeriodById(periodId: string): PayPeriod | undefined {
    return this.payPeriods().find((p) => p.id === periodId);
  }

  /**
   * Generates a pay period ID based on the provided date.
   * Format: PER-YYYY-MM (e.g., PER-2025-03)
   * @param date The date to generate the ID from
   * @returns Formatted pay period ID string
   */
  generatePayPeriodId(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    return `PER-${year}-${month}`;
  }

  /**
   * Adds a new pay period to the system.
   * @param payPeriod The pay period to add
   * @returns Boolean indicating success (false if duplicate ID exists)
   */
  addPayPeriod(payPeriod: PayPeriod): boolean {
    // Check if a pay period with the same ID already exists
    if (this.payPeriods().some((p) => p.id === payPeriod.id)) {
      return false;
    }

    // Ensure the pay period has a status
    const newPayPeriod: PayPeriod = {
      ...payPeriod,
      status: payPeriod.status || PayPeriodStatus.Pending,
    };

    // Update the pay periods collection
    this.payPeriods.update((periods) => {
      // Add to the beginning and sort by startDate in descending order
      const updatedPeriods = [newPayPeriod, ...periods];
      return this.sortPayPeriods(updatedPeriods);
    });

    return true;
  }

  /**
   * Check if an employee already has a payslip for a given period
   * @param employeeId The ID of the employee to check
   * @param periodId The ID of the pay period to check
   * @returns Boolean indicating whether the employee has a payslip for the period
   */
  employeeHasPayslip(employeeId: string, periodId: string): boolean {
    return this.payslips().some(
      (p) => p.employeeId === employeeId && p.periodId === periodId
    );
  }

  /**
   * Get employees who already have payslips for a period
   * @param periodId The ID of the pay period to check
   * @returns Array of employee IDs who have payslips for the period
   */
  getEmployeesWithPayslips(periodId: string): string[] {
    return this.payslips()
      .filter((p) => p.periodId === periodId)
      .map((p) => p.employeeId);
  }

  /**
   * Add employees to a pay period by creating payslips for them
   * @param periodId The ID of the pay period
   * @param employees The employees to add
   * @returns Boolean indicating success
   */
  addEmployeesToPayPeriod(periodId: string, employees: Employee[]): boolean {
    const period = this.getPayPeriodById(periodId);
    if (!period) {
      return false;
    }

    // Check if any employees already have payslips for this period
    const existingEmployeeIds = new Set(
      this.getEmployeesWithPayslips(periodId)
    );

    // Filter out employees who already have payslips
    const newEmployees = employees.filter(
      (e) => !existingEmployeeIds.has(e.id)
    );

    // Create payslips for the new employees
    const newPayslips = newEmployees.map((employee) =>
      this.calculatePayslip(employee, period)
    );

    // Add the new payslips
    this.payslips.update((current) => [...current, ...newPayslips]);

    return true;
  }

  /**
   * Calculate a payslip for an employee and period
   * @param employee The employee to calculate the payslip for
   * @param period The pay period for the payslip
   * @returns The calculated Payslip object
   */
  calculatePayslip(employee: Employee, period: PayPeriod): Payslip {
    const daysInPeriod = this.daysBetween(period.startDate, period.endDate);
    const dailyRate = employee.baseSalary / 365;
    const grossPay = dailyRate * daysInPeriod;

    const deductions: Deduction[] = [
      {
        type: DeductionType.IncomeTax,
        percentage: 0.2,
        amount: grossPay * 0.2,
      },
      { type: DeductionType.HealthInsurance, amount: 200 },
    ];

    const totalDeductions = deductions.reduce((sum, d) => sum + d.amount, 0);
    const netPay =
      grossPay - totalDeductions + (employee.bonus ? employee.bonus / 12 : 0);

    return {
      id: `${employee.id}-${period.id}`,
      employeeId: employee.id,
      periodId: period.id,
      grossPay,
      deductions,
      netPay,
      paymentDate: period.endDate,
    };
  }

  /**
   * Process a pay period, creating payslips for all active employees
   * who don't already have one, and updating the period status
   * @param periodId The ID of the pay period to process
   * @returns Boolean indicating success
   */
  processPayroll(periodId: string): boolean {
    const period = this.getPayPeriodById(periodId);
    if (!period || period.status !== PayPeriodStatus.Pending) return false;

    // Get existing payslips for this period
    const existingEmployeeIds = new Set(
      this.getEmployeesWithPayslips(periodId)
    );

    // Get active employees who don't have payslips yet
    const newEmployees = this.employees().filter(
      (e) =>
        e.status === EmployeeStatus.Active && !existingEmployeeIds.has(e.id)
    );

    // Create payslips for them
    const newPayslips = newEmployees.map((e) =>
      this.calculatePayslip(e, period)
    );

    // Add new payslips
    this.payslips.update((current) => [...current, ...newPayslips]);

    // Update period status
    this.payPeriods.update((periods) =>
      periods.map((p) =>
        p.id === periodId ? { ...p, status: PayPeriodStatus.Processed } : p
      )
    );

    return true;
  }

  /**
   * Calculate the number of days between two dates
   * @param start Start date string in YYYY-MM-DD format
   * @param end End date string in YYYY-MM-DD format
   * @returns Number of days between dates, inclusive
   */
  daysBetween(start: string, end: string): number {
    const startDate = new Date(start);
    const endDate = new Date(end);
    return (endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24) + 1;
  }

  /**
   * Format a Date object to a string in YYYY-MM-DD format
   * @param date The Date object to format
   * @returns Formatted date string in YYYY-MM-DD format
   */
  formatDateString(date: Date): string {
    if (!date) return '';

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  /**
   * Sort pay periods by start date (newest first)
   * @param periods Array of pay periods to sort
   * @returns Sorted array of pay periods
   */
  private sortPayPeriods(periods: PayPeriod[]): PayPeriod[] {
    return [...periods].sort(
      (a, b) =>
        new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
    );
  }
}
