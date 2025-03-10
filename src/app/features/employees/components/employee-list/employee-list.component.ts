import { Component, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

// Models and mock data
import { Employee } from '../../models/employee.model';
import { MOCK_EMPLOYEES } from '../../data/employees.mock';

// Components
import { EmployeeProfileComponent } from '../employee-profile/employee-profile.component';

@Component({
  imports: [MatListModule, MatChipsModule, MatIconModule],
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss',
})
export class EmployeeListComponent {
  employees = signal<Employee[]>(MOCK_EMPLOYEES);

  constructor(private dialog: MatDialog) {}

  onEmployeeClick(employee: Employee) {
    const dialogRef = this.dialog.open(EmployeeProfileComponent, {
      data: employee,
    });
    dialogRef.afterClosed().subscribe((result: Employee | undefined) => {
      if (result) {
        this.employees.update((emps) =>
          emps.map((emp) => (emp.id === result.id ? result : emp))
        );
      }
    });
  }
}
