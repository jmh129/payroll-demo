import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  signal,
  computed,
  effect,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

// Chart.js
import { Chart, TooltipItem } from 'chart.js/auto';

// Services
import { PayrollService } from '../../service/payroll.service';
import { PayrollAnalytics } from '../../service/payroll-analytics.service';

// Models
import { Payslip, PayPeriod } from '../../models/payroll.model';

@Component({
  selector: 'app-payroll-chart',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>Payroll Trends</mat-card-title>
        <mat-card-subtitle>Monthly payroll costs</mat-card-subtitle>
      </mat-card-header>
      <mat-card-content>
        <canvas #chartCanvas style="height: 250px;"></canvas>
      </mat-card-content>
    </mat-card>
  `,
})
export class PayrollChartComponent implements AfterViewInit, OnDestroy {
  @ViewChild('chartCanvas') chartCanvas!: ElementRef<HTMLCanvasElement>;
  private chart: Chart | null = null;

  // Use signals for reactive data
  private payslips = signal<Payslip[]>([]);
  private payPeriods = signal<PayPeriod[]>([]);

  // Computed values based on signals
  private chartData = computed(() => {
    return this.prepareChartData(this.payslips(), this.payPeriods());
  });

  constructor(
    private payrollService: PayrollService,
    private payrollAnalytics: PayrollAnalytics
  ) {
    effect(() => {
      const { labels, data } = this.chartData();
      this.updateChart(labels, data);
    });

    // Initialize signals with current data
    this.payslips.set(this.payrollService.getPayslips()());
    this.payPeriods.set(this.payrollService.getPayPeriods()());

    // Set up effect to watch for changes in the payroll service data
    effect(() => {
      this.payslips.set(this.payrollService.getPayslips()());
      this.payPeriods.set(this.payrollService.getPayPeriods()());
    });
  }

  ngAfterViewInit(): void {
    this.createChart();
  }

  ngOnDestroy(): void {
    // Clean up chart when component is destroyed
    if (this.chart) {
      this.chart.destroy();
    }
  }

  private createChart(): void {
    const { labels, data } = this.chartData();

    const ctx = this.chartCanvas.nativeElement.getContext('2d');
    if (ctx) {
      this.chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: labels,
          datasets: [
            {
              label: 'Total Payroll Cost',
              data: data,
              backgroundColor: 'rgba(63, 81, 181, 0.2)', // Primary color with transparency
              borderColor: 'rgba(63, 81, 181, 1)', // Primary color
              borderWidth: 2,
              tension: 0.3, // Slightly curved lines
              pointBackgroundColor: 'rgba(63, 81, 181, 1)',
              pointRadius: 4,
              fill: true,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            tooltip: {
              callbacks: {
                label: (context: TooltipItem<'line'>) => {
                  // Safely cast raw value to number
                  const value = context.raw as number;
                  return `$${value.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}`;
                },
              },
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                callback: (value) => `$${value.toLocaleString()}`,
              },
              title: {
                display: true,
                text: 'Total Cost',
              },
            },
            x: {
              title: {
                display: true,
                text: 'Pay Period',
              },
            },
          },
        },
      });
    }
  }

  private updateChart(labels: string[], data: number[]): void {
    if (this.chart) {
      this.chart.data.labels = labels;
      this.chart.data.datasets[0].data = data;
      this.chart.update();
    }
  }

  private prepareChartData(
    payslips: Payslip[],
    payPeriods: PayPeriod[]
  ): { labels: string[]; data: number[] } {
    // Get monthly data using analytics service
    const monthlyData = this.payrollAnalytics.calculateMonthlyPayrollCosts(
      payslips,
      payPeriods
    );

    // Sort chronologically
    const sortedMonths = Object.keys(monthlyData).sort();
    const labels = sortedMonths.map((month) =>
      this.payrollAnalytics.formatMonthLabel(month)
    );
    const data = sortedMonths.map((month) => monthlyData[month]);

    return { labels, data };
  }
}
