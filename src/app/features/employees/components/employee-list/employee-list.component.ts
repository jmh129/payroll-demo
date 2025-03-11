import { Component, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';

// Components
import { EmployeeToolbarComponent } from '../employee-toolbar/employee-toolbar.component';
import { EmployeeProfileComponent } from '../employee-profile/employee-profile.component';

// Models and Mocks
import { Employee, EmployeeStatus } from '../../models/employee.model';
import { MOCK_EMPLOYEES } from '../../data/employees.mock';

// Services
import { EmployeeFilterService } from '../../service/employee-filter.service';

@Component({
  standalone: true,
  imports: [MatListModule, EmployeeToolbarComponent],
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent {
  private allEmployees = MOCK_EMPLOYEES;
  employees = signal<Employee[]>(this.allEmployees);
  employeeStatuses = Object.values(EmployeeStatus);

  constructor(
    private dialog: MatDialog,
    private filterService: EmployeeFilterService
  ) {
    this.updateFilteredEmployees();
  }

  onEmployeeClick(employee: Employee): void {
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
        this.updateFilteredEmployees();
      }
    });
  }

  onAddEmployee(): void {
    const dialogRef = this.dialog.open(EmployeeProfileComponent, {
      data: null,
    });
    dialogRef.afterClosed().subscribe((newEmployee: Employee | undefined) => {
      if (newEmployee) {
        this.allEmployees = [...this.allEmployees, newEmployee];
        this.updateFilteredEmployees();
      }
    });
  }

  updateFilteredEmployees(): void {
    this.employees.set(this.filterService.filterEmployees(this.allEmployees));
  }
}
