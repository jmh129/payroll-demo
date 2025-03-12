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

/**
 * PayrollAnalytics - Service for analyzing payroll data
 *
 * This service provides methods for analyzing payroll data without modifying
 * the data itself. It's designed to be extended with additional analytics
 * functions as needed.
 */
@Injectable({
  providedIn: 'root',
})
export class PayrollAnalytics {
  /**
   * Get the count of active employees
   */
  getActiveEmployeeCount(employees: Employee[]): number {
    return employees.filter((e) => e.status === EmployeeStatus.Active).length;
  }

  /**
   * Get the total cost of the last processed payroll
   */
  getLastProcessedPayrollCost(
    payslips: Payslip[],
    payPeriods: PayPeriod[]
  ): number {
    const processedPayslips = this.getProcessedPayslips(payslips, payPeriods);
    return processedPayslips.reduce((sum, p) => sum + p.netPay, 0);
  }

  /**
   * Get all payslips associated with processed pay periods
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
   * Get all payslips associated with paid pay periods
   */
  getPaidPayslips(payslips: Payslip[], payPeriods: PayPeriod[]): Payslip[] {
    const periodMap = new Map<string, PayPeriod>();
    payPeriods.forEach((period) => periodMap.set(period.id, period));

    return payslips.filter((p) => {
      const period = periodMap.get(p.periodId);
      return period?.status === PayPeriodStatus.Paid;
    });
  }

  /**
   * Get payslips with employee details
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
   * Calculate monthly payroll costs
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
   * Get total deductions by type across all payslips
   */
  getTotalDeductionsByType(payslips: Payslip[]): Record<string, number> {
    const deductionTotals: Record<string, number> = {};

    payslips.forEach((payslip) => {
      payslip.deductions.forEach((deduction) => {
        const type = deduction.type;
        if (!deductionTotals[type]) {
          deductionTotals[type] = 0;
        }
        deductionTotals[type] += deduction.amount;
      });
    });

    return deductionTotals;
  }

  /**
   * Calculate average salary across all active employees
   */
  calculateAverageSalary(employees: Employee[]): number {
    const activeEmployees = employees.filter(
      (e) => e.status === EmployeeStatus.Active
    );
    if (activeEmployees.length === 0) return 0;

    const totalSalary = activeEmployees.reduce(
      (sum, emp) => sum + emp.baseSalary,
      0
    );
    return totalSalary / activeEmployees.length;
  }

  /**
   * Format month string (YYYY-MM) to readable format
   */
  formatMonthLabel(monthStr: string): string {
    const [year, month] = monthStr.split('-');
    const date = new Date(parseInt(year), parseInt(month) - 1, 1);
    return date.toLocaleDateString(undefined, {
      month: 'short',
      year: 'numeric',
    });
  }

  /**
   * Get department payroll distribution
   */
  getDepartmentPayrollDistribution(
    payslips: Payslip[],
    employees: Employee[]
  ): Record<string, number> {
    const departmentTotals: Record<string, number> = {};
    const employeeMap = new Map<string, Employee>();

    employees.forEach((emp) => employeeMap.set(emp.id, emp));

    payslips.forEach((payslip) => {
      const employee = employeeMap.get(payslip.employeeId);
      if (employee?.department) {
        if (!departmentTotals[employee.department]) {
          departmentTotals[employee.department] = 0;
        }
        departmentTotals[employee.department] += payslip.netPay;
      }
    });

    return departmentTotals;
  }
}
