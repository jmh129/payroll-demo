import { Component, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

// Models and mock data
import { Employee } from '../../models/employee.model';
import { MOCK_EMPLOYEES } from '../../data/employees.mock';

// Components
import { EmployeeProfileComponent } from '../employee-profile/employee-profile.component';

@Component({
  imports: [
    MatListModule,
    MatChipsModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss',
})
export class EmployeeListComponent {
  private allEmployees = MOCK_EMPLOYEES;

  employees = signal<Employee[]>(this.allEmployees);
  searchTerm = signal<string>('');

  constructor(private dialog: MatDialog) {}

  onSearch(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.searchTerm.set(value.toLowerCase());
    this.employees.set(
      this.allEmployees.filter(
        (employee) =>
          employee.name.toLowerCase().includes(this.searchTerm()) ||
          (employee.department?.toLowerCase()?.includes(this.searchTerm()) ??
            false) ||
          employee.role.toLowerCase().includes(this.searchTerm())
      )
    );
  }

  onEmployeeClick(employee: Employee) {
    const dialogRef = this.dialog.open(EmployeeProfileComponent, {
      data: employee,
    });
    dialogRef.afterClosed().subscribe((result: Employee | undefined) => {
      if (result) {
        this.employees.update((emps) =>
          emps.map((emp) => (emp.id === result.id ? result : emp))
        );

        this.allEmployees = this.allEmployees.map((emp) =>
          emp.id === result.id ? result : emp
        );
      }
    });
  }
}
