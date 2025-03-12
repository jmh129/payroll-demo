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

@Injectable({
  providedIn: 'root',
})
export class PayrollService {
  private employees = signal<Employee[]>(MOCK_EMPLOYEES);
  private payPeriods = signal<PayPeriod[]>(MOCK_PAY_PERIODS);
  private payslips = signal<Payslip[]>(MOCK_PAYSLIPS);

  getEmployees() {
    return this.employees.asReadonly();
  }

  getPayPeriods() {
    return this.payPeriods.asReadonly();
  }

  getPayslips() {
    return this.payslips.asReadonly();
  }

  getPayslipsByEmployeeId(employeeId: string) {
    return signal<Payslip[]>(
      this.payslips().filter((p) => p.employeeId === employeeId)
    );
  }

  getPayslipById(payslipId: string): Payslip | undefined {
    return this.payslips().find((p) => p.id === payslipId);
  }

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

  processPayroll(periodId: string) {
    const period = this.payPeriods().find((p) => p.id === periodId);
    if (!period || period.status !== PayPeriodStatus.Pending) return;

    const newPayslips = this.employees()
      .filter((e) => e.status === EmployeeStatus.Active)
      .map((e) => this.calculatePayslip(e, period));

    this.payslips.update((current) => [...current, ...newPayslips]);
    this.payPeriods.update((periods) =>
      periods.map((p) =>
        p.id === periodId ? { ...p, status: PayPeriodStatus.Processed } : p
      )
    );
  }

  private daysBetween(start: string, end: string): number {
    const startDate = new Date(start);
    const endDate = new Date(end);
    return (endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24) + 1;
  }
}
