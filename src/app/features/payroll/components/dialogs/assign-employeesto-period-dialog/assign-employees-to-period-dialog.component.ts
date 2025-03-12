import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';

// Models
import {
  Employee,
  EmployeeStatus,
} from '../../../../employees/models/employee.model';
import { PayPeriod } from '../../../models/payroll.model';

// Service
import { PayrollService } from '../../../service/payroll.service';

@Component({
  selector: 'app-assign-employees-to-period-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatListModule,
    MatCheckboxModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatChipsModule,
  ],
  templateUrl: './assign-employees-to-period-dialog.component.html',
})
export class AssignEmployeesToPeriodDialogComponent implements OnInit {
  availableEmployees: Employee[] = [];
  selectedEmployeeIds: Set<string> = new Set();
  searchControl = new FormControl('');
  filteredEmployees: Employee[] = [];

  constructor(
    public dialogRef: MatDialogRef<AssignEmployeesToPeriodDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { payPeriod: PayPeriod },
    private payrollService: PayrollService
  ) {}

  ngOnInit(): void {
    this.loadAvailableEmployees();
    this.setupSearchFilter();
  }

  /**
   * Load active employees who don't already have payslips for this period
   */
  private loadAvailableEmployees(): void {
    // Get all active employees
    const allEmployees = this.payrollService.getEmployees()();
    const activeEmployees = allEmployees.filter(
      (e) => e.status === EmployeeStatus.Active
    );

    // Get employees who already have payslips for this period
    const existingEmployeeIds = new Set(
      this.payrollService.getEmployeesWithPayslips(this.data.payPeriod.id)
    );

    // Filter out employees who already have payslips
    this.availableEmployees = activeEmployees.filter(
      (e) => !existingEmployeeIds.has(e.id)
    );

    // Initially, all available employees are shown
    this.filteredEmployees = [...this.availableEmployees];
  }

  /**
   * Set up search filter to filter employees as user types
   */
  private setupSearchFilter(): void {
    this.searchControl.valueChanges.subscribe((searchTerm) => {
      this.filterEmployees(searchTerm || '');
    });
  }

  /**
   * Filter employees by search term
   */
  filterEmployees(searchTerm: string): void {
    if (!searchTerm) {
      this.filteredEmployees = [...this.availableEmployees];
      return;
    }

    const lowerSearchTerm = searchTerm.toLowerCase();
    this.filteredEmployees = this.availableEmployees.filter(
      (employee) =>
        employee.name.toLowerCase().includes(lowerSearchTerm) ||
        employee.role.toLowerCase().includes(lowerSearchTerm) ||
        (employee.department &&
          employee.department.toLowerCase().includes(lowerSearchTerm))
    );
  }

  /**
   * Toggle selection of an employee
   */
  toggleEmployee(employeeId: string): void {
    if (this.selectedEmployeeIds.has(employeeId)) {
      this.selectedEmployeeIds.delete(employeeId);
    } else {
      this.selectedEmployeeIds.add(employeeId);
    }
  }

  /**
   * Check if an employee is selected
   */
  isSelected(employeeId: string): boolean {
    return this.selectedEmployeeIds.has(employeeId);
  }

  /**
   * Select all currently filtered employees
   */
  selectAll(): void {
    this.filteredEmployees.forEach((e) => this.selectedEmployeeIds.add(e.id));
  }

  /**
   * Clear all selections
   */
  clearSelection(): void {
    this.selectedEmployeeIds.clear();
  }

  /**
   * Cancel dialog
   */
  cancel(): void {
    this.dialogRef.close();
  }

  /**
   * Confirm selection and close dialog with selected employees
   */
  confirm(): void {
    const selectedEmployees = this.availableEmployees.filter((e) =>
      this.selectedEmployeeIds.has(e.id)
    );

    this.dialogRef.close(selectedEmployees);
  }
}
