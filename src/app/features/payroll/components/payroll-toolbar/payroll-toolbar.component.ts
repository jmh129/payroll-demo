import { Component, EventEmitter, Output } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';

// Service
import {
  PayrollFilterService,
  PayrollFilterType,
} from '../../service/payroll-filter.service';

@Component({
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatChipsModule,
    MatDividerModule,
    MatCheckboxModule,
  ],
  selector: 'app-payroll-toolbar',
  templateUrl: './payroll-toolbar.component.html',
  styleUrls: ['./payroll-toolbar.component.scss'],
})
export class PayrollToolbarComponent {
  @Output() filterChange = new EventEmitter<void>();
  @Output() addPayPeriod = new EventEmitter<void>();

  filterTypes = Object.values(PayrollFilterType);
  PayrollFilterType = PayrollFilterType;

  constructor(public filterService: PayrollFilterService) {}

  onSearch(event: Event): void {
    const searchValue = (event.target as HTMLInputElement).value;
    this.filterService.setSearchTerm(searchValue);
    this.filterChange.emit();
  }
}
