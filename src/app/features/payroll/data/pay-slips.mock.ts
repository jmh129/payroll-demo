import { Payslip, DeductionType } from '../models/payroll.model';

export const MOCK_PAYSLIPS: Payslip[] = [
  {
    id: 'EMP-001-PER-2025-01',
    employeeId: 'EMP-001',
    periodId: 'PER-2025-01',
    grossPay: 6250,
    deductions: [
      { type: DeductionType.FederalTax, amount: 1250, percentage: 0.2 },
      { type: DeductionType.HealthInsurance, amount: 200 },
    ],
    netPay: 4800,
    paymentDate: '2025-01-31',
  },
  {
    id: 'EMP-002-PER-2025-01',
    employeeId: 'EMP-002',
    periodId: 'PER-2025-01',
    grossPay: 5000,
    deductions: [
      { type: DeductionType.IncomeTax, amount: 1000, percentage: 0.2 },
      { type: DeductionType.NationalInsurance, amount: 150 },
    ],
    netPay: 3850,
    paymentDate: '2025-01-31',
  },
  {
    id: 'EMP-005-PER-2025-02',
    employeeId: 'EMP-005',
    periodId: 'PER-2025-02',
    grossPay: 6833.33,
    deductions: [
      { type: DeductionType.IncomeTax, amount: 1366.67, percentage: 0.2 },
      { type: DeductionType.SocialSecurity, amount: 250 },
    ],
    netPay: 5216.66,
    paymentDate: '2025-02-28',
  },
  // Additional payslips for previous months to show in chart
  {
    id: 'EMP-001-PER-2024-12',
    employeeId: 'EMP-001',
    periodId: 'PER-2024-12',
    grossPay: 6250,
    deductions: [
      { type: DeductionType.FederalTax, amount: 1250, percentage: 0.2 },
      { type: DeductionType.HealthInsurance, amount: 200 },
    ],
    netPay: 4800,
    paymentDate: '2024-12-31',
  },
  {
    id: 'EMP-002-PER-2024-12',
    employeeId: 'EMP-002',
    periodId: 'PER-2024-12',
    grossPay: 5000,
    deductions: [
      { type: DeductionType.IncomeTax, amount: 1000, percentage: 0.2 },
      { type: DeductionType.NationalInsurance, amount: 150 },
    ],
    netPay: 3850,
    paymentDate: '2024-12-31',
  },
  {
    id: 'EMP-001-PER-2024-11',
    employeeId: 'EMP-001',
    periodId: 'PER-2024-11',
    grossPay: 6250,
    deductions: [
      { type: DeductionType.FederalTax, amount: 1250, percentage: 0.2 },
      { type: DeductionType.HealthInsurance, amount: 200 },
    ],
    netPay: 4800,
    paymentDate: '2024-11-30',
  },
  {
    id: 'EMP-002-PER-2024-11',
    employeeId: 'EMP-002',
    periodId: 'PER-2024-11',
    grossPay: 5000,
    deductions: [
      { type: DeductionType.IncomeTax, amount: 1000, percentage: 0.2 },
      { type: DeductionType.NationalInsurance, amount: 150 },
    ],
    netPay: 3850,
    paymentDate: '2024-11-30',
  },
  {
    id: 'EMP-001-PER-2024-10',
    employeeId: 'EMP-001',
    periodId: 'PER-2024-10',
    grossPay: 6250,
    deductions: [
      { type: DeductionType.FederalTax, amount: 1250, percentage: 0.2 },
      { type: DeductionType.HealthInsurance, amount: 200 },
    ],
    netPay: 4800,
    paymentDate: '2024-10-31',
  },
  {
    id: 'EMP-002-PER-2024-10',
    employeeId: 'EMP-002',
    periodId: 'PER-2024-10',
    grossPay: 5000,
    deductions: [
      { type: DeductionType.IncomeTax, amount: 1000, percentage: 0.2 },
      { type: DeductionType.NationalInsurance, amount: 150 },
    ],
    netPay: 3850,
    paymentDate: '2024-10-31',
  },
];
