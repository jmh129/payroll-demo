import { Component, computed, Input } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { CurrencyPipe, DecimalPipe } from '@angular/common';

@Component({
  standalone: true,
  imports: [MatChipsModule, MatIconModule, CurrencyPipe, DecimalPipe],
  selector: 'app-dashboard-metrics',
  templateUrl: './dashboard-metrics.component.html',
  styleUrls: ['./dashboard-metrics.component.scss'],
})
export class DashboardMetricsComponent {
  @Input() activeEmployeeCount = 0;
  @Input() lastPayrollCost = 0;
  @Input() payrollCostChange = 0;

  payrollChangeColor = computed(() => {
    return this.payrollCostChange > 0 ? 'warn' : 'primary';
  });
}
