import { PayPeriod, PayPeriodStatus } from '../models/payroll.model';

export const MOCK_PAY_PERIODS: PayPeriod[] = [
  {
    id: 'PER-2025-03',
    startDate: '2025-03-01',
    endDate: '2025-03-31',
    status: PayPeriodStatus.Pending,
  },
  {
    id: 'PER-2025-02',
    startDate: '2025-02-01',
    endDate: '2025-02-28',
    status: PayPeriodStatus.Processed,
  },
  {
    id: 'PER-2025-01',
    startDate: '2025-01-01',
    endDate: '2025-01-31',
    status: PayPeriodStatus.Paid,
  },
  {
    id: 'PER-2024-12',
    startDate: '2024-12-01',
    endDate: '2024-12-31',
    status: PayPeriodStatus.Paid,
  },
  {
    id: 'PER-2024-11',
    startDate: '2024-11-01',
    endDate: '2024-11-30',
    status: PayPeriodStatus.Paid,
  },
  {
    id: 'PER-2024-10',
    startDate: '2024-10-01',
    endDate: '2024-10-31',
    status: PayPeriodStatus.Paid,
  },
];
