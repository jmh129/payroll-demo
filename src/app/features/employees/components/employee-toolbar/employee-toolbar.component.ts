import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatChipsModule } from '@angular/material/chips';
import { MatCheckboxModule } from '@angular/material/checkbox';

// Models
import { EmployeeStatus } from '../../models/employee.model';

// Service
import { EmployeeFilterService } from '../../service/employee-filter.service';

@Component({
  imports: [
    MatToolbarModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatChipsModule,
    MatCheckboxModule,
  ],
  selector: 'app-employee-toolbar',
  templateUrl: './employee-toolbar.component.html',
  styleUrls: ['./employee-toolbar.component.scss'],
})
export class EmployeeToolbarComponent {
  @Input() employeeStatuses: EmployeeStatus[] = [];
  @Output() addEmployee = new EventEmitter<void>();
  @Output() filterChange = new EventEmitter<void>();

  constructor(public filterService: EmployeeFilterService) {}

  onSearch(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.filterService.setSearchTerm(value);
    this.filterChange.emit();
  }
}
