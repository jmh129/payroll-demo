import { Injectable, signal } from '@angular/core';
import { EmployeeStatus, Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeFilterService {
  searchTerm = signal<string>('');
  selectedFilters = signal<EmployeeStatus[]>([]);

  filterEmployees(employees: Employee[]): Employee[] {
    const filters = this.selectedFilters();
    const term = this.searchTerm();
    return employees.filter((employee) => {
      const matchesSearch =
        employee.name.toLowerCase().includes(term) ||
        (employee.department?.toLowerCase()?.includes(term) ?? false) ||
        employee.role.toLowerCase().includes(term);
      const matchesFilter =
        filters.length === 0 || filters.includes(employee.status);
      return matchesSearch && matchesFilter;
    });
  }

  setSearchTerm(term: string): void {
    this.searchTerm.set(term.toLowerCase());
  }

  toggleFilter(status: EmployeeStatus): void {
    this.selectedFilters.update((filters) =>
      filters.includes(status)
        ? filters.filter((f) => f !== status)
        : [...filters, status]
    );
  }

  clearFilters(): void {
    this.selectedFilters.set([]);
  }

  removeFilter(status: EmployeeStatus): void {
    this.selectedFilters.update((filters) =>
      filters.filter((f) => f !== status)
    );
  }
}
