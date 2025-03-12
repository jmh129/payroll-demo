import { Payslip } from '../models/payroll.model';

export const MOCK_PAYSLIPS: Payslip[] = [
  {
    id: 'EMP-001-PER-2025-01',
    employeeId: 'EMP-001',
    periodId: 'PER-2025-01',
    grossPay: 6250,
    deductions: [
      { type: 'Federal Tax', amount: 1250, percentage: 0.2 },
      { type: 'Health Insurance', amount: 200 },
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
      { type: 'Income Tax', amount: 1000, percentage: 0.2 },
      { type: 'National Insurance', amount: 150 },
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
      { type: 'Income Tax', amount: 1366.67, percentage: 0.2 },
      { type: 'Social Security', amount: 250 },
    ],
    netPay: 5216.66,
    paymentDate: '2025-02-28',
  },
];
