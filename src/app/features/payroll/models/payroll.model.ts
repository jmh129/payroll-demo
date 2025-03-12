export enum PayPeriodStatus {
  Pending = 'Pending',
  Processed = 'Processed',
  Paid = 'Paid',
}

export enum PayslipStatus {
  Pending = 'Pending',
  Processed = 'Processed',
}

export enum DeductionType {
  IncomeTax = 'Income Tax',
  FederalTax = 'Federal Tax',
  HealthInsurance = 'Health Insurance',
  SocialSecurity = 'Social Security',
  NationalInsurance = 'National Insurance',
}

export interface PayPeriod {
  id: string;
  startDate: string;
  endDate: string;
  status: PayPeriodStatus;
}

export interface Deduction {
  type: DeductionType | string;
  amount: number;
  percentage?: number;
}

export interface Payslip {
  id: string;
  employeeId: string;
  periodId: string;
  grossPay: number;
  deductions: Deduction[];
  netPay: number;
  paymentDate: string;
}

export interface PayslipWithDetails {
  payslip: Payslip;
  employeeName: string;
  periodStatus: PayPeriodStatus | string;
}
