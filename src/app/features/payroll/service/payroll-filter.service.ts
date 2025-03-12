import { Injectable, signal } from '@angular/core';

// Model
import { Payslip, PayPeriod, PayPeriodStatus } from '../models/payroll.model';

export enum PayrollFilterType {
  All = 'All',
  Pending = 'Pending',
  Processed = 'Processed',
}

@Injectable({
  providedIn: 'root',
})
export class PayrollFilterService {
  searchTerm = signal<string>('');
  selectedFilters = signal<PayrollFilterType[]>([]);

  filterPayslips(
    payslips: Payslip[],
    employees: any[],
    payPeriods: PayPeriod[]
  ): Payslip[] {
    const filters = this.selectedFilters();
    const term = this.searchTerm();

    return payslips.filter((payslip) => {
      // Find employee name for search
      const employee = employees.find((e) => e.id === payslip.employeeId);
      const employeeName = employee?.name || '';

      // Find associated pay period to get status
      const payPeriod = payPeriods.find((p) => p.id === payslip.periodId);
      const periodStatus = payPeriod?.status || '';

      // Match against search term
      const matchesSearch =
        term === '' ||
        employeeName.toLowerCase().includes(term) ||
        payslip.periodId.toLowerCase().includes(term);

      // Match against status filters
      const matchesFilter =
        filters.length === 0 ||
        filters.includes(PayrollFilterType.All) ||
        (filters.includes(PayrollFilterType.Pending) &&
          periodStatus === PayPeriodStatus.Pending) ||
        (filters.includes(PayrollFilterType.Processed) &&
          periodStatus === PayPeriodStatus.Processed);

      return matchesSearch && matchesFilter;
    });
  }

  setSearchTerm(term: string): void {
    this.searchTerm.set(term.toLowerCase());
  }

  toggleFilter(type: PayrollFilterType): void {
    this.selectedFilters.update((filters) => {
      // If "All" is selected, clear other filters
      if (type === PayrollFilterType.All) {
        return filters.includes(PayrollFilterType.All)
          ? []
          : [PayrollFilterType.All];
      }

      // If adding a specific filter, remove "All"
      let newFilters = filters.filter((f) => f !== PayrollFilterType.All);

      // Toggle the specific filter
      if (newFilters.includes(type)) {
        newFilters = newFilters.filter((f) => f !== type);
      } else {
        newFilters.push(type);
      }

      return newFilters;
    });
  }

  clearFilters(): void {
    this.selectedFilters.set([]);
  }

  removeFilter(type: PayrollFilterType): void {
    this.selectedFilters.update((filters) => filters.filter((f) => f !== type));
  }
}
