/**
 * EmployeeFilterService manages filtering logic for employees based on search terms and status filters.
 * It uses signals to maintain reactive state.
 */

import { Injectable, signal } from '@angular/core';

// Model
import { EmployeeStatus, Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeFilterService {
  searchTerm = signal<string>('');
  selectedFilters = signal<EmployeeStatus[]>([]);

  /**
   * Filters an array of employees based on the current search term and selected filters.
   * @param employees The full list of employees to filter
   * @returns The filtered list of employees
   */
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

  /**
   * Sets the search term for filtering employees.
   * @param term The search term to set
   */
  setSearchTerm(term: string): void {
    this.searchTerm.set(term.toLowerCase());
  }

  /**
   * Toggles a status filter on or off in the selected filters list.
   * @param status The status to toggle
   */
  toggleFilter(status: EmployeeStatus): void {
    this.selectedFilters.update((filters) =>
      filters.includes(status)
        ? filters.filter((f) => f !== status)
        : [...filters, status]
    );
  }

  /**
   * Clears all selected status filters.
   */
  clearFilters(): void {
    this.selectedFilters.set([]);
  }

  /**
   * Removes a specific status from the selected filters.
   * @param status The status to remove
   */
  removeFilter(status: EmployeeStatus): void {
    this.selectedFilters.update((filters) =>
      filters.filter((f) => f !== status)
    );
  }
}
