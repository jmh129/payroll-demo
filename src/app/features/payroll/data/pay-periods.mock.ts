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
];
