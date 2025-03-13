/**
 * Component for creating new pay periods via a dialog
 * Provides form controls for selecting pay period dates
 */

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';

// Models
import { PayPeriod, PayPeriodStatus } from '../../../models/payroll.model';

// Services
import { NotificationService } from '../../../../../shared/service/notification.service';
import { PayrollService } from '../../../service/payroll.service';

@Component({
  selector: 'app-add-pay-period-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './add-pay-period-dialog.component.html',
  styleUrls: ['./add-pay-period-dialog.component.scss'],
})
export class AddPayPeriodDialogComponent {
  payPeriodForm: FormGroup;
  startDateValue: Date | null = null;
  endDateValue: Date | null = null;
  generatedId: string = '';

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddPayPeriodDialogComponent>,
    private payrollService: PayrollService,
    private notification: NotificationService
  ) {
    this.payPeriodForm = this.fb.group(
      {
        startDate: [null, Validators.required],
        endDate: [null, Validators.required],
      },
      {
        validators: this.dateRangeValidator,
      }
    );
  }

  /**
   * Validates that the end date is after the start date
   * @param group The form group to validate
   * @returns Error object if validation fails, null otherwise
   */
  dateRangeValidator(group: FormGroup): { [key: string]: boolean } | null {
    const start = group.get('startDate')?.value;
    const end = group.get('endDate')?.value;

    if (start && end && new Date(start) > new Date(end)) {
      return { dateRange: true };
    }
    return null;
  }

  /**
   * Handles changes to the start date input
   * Updates form values and generates the period ID
   * @param event The date change event
   */
  onStartDateChange(event: any): void {
    if (event.value) {
      this.startDateValue = event.value;
      this.payPeriodForm.patchValue({ startDate: this.startDateValue });

      if (this.startDateValue) {
        this.generatedId = this.payrollService.generatePayPeriodId(
          this.startDateValue
        );
      }

      this.payPeriodForm.updateValueAndValidity();
    }
  }

  /**
   * Handles changes to the end date input
   * Updates form values and validates the form
   * @param event The date change event
   */
  onEndDateChange(event: any): void {
    if (event.value) {
      this.endDateValue = event.value;
      this.payPeriodForm.patchValue({ endDate: this.endDateValue });
      this.payPeriodForm.updateValueAndValidity();
    }
  }

  /**
   * Checks if a form control has a specific validation error
   * @param controlName The name of the control to check
   * @param errorType The type of error to check for
   * @returns Boolean indicating if the error exists on the control
   */
  hasError(controlName: string, errorType: string): boolean {
    const control = this.payPeriodForm.get(controlName);
    return control
      ? control.hasError(errorType) && (control.touched || control.dirty)
      : false;
  }

  /**
   * Cancels the dialog without saving
   */
  cancel(): void {
    this.dialogRef.close();
  }

  /**
   * Validates and saves the new pay period
   * Closes the dialog with the created pay period if successful
   */
  save(): void {
    if (this.payPeriodForm.invalid) {
      this.notification.error('Please fix the validation errors before saving');
      return;
    }

    if (!this.startDateValue || !this.endDateValue) {
      this.notification.error('Both start and end dates are required');
      return;
    }

    try {
      const formattedStartDate = this.payrollService.formatDateString(
        this.startDateValue
      );
      const formattedEndDate = this.payrollService.formatDateString(
        this.endDateValue
      );

      const newPayPeriod: PayPeriod = {
        id: this.generatedId,
        startDate: formattedStartDate,
        endDate: formattedEndDate,
        status: PayPeriodStatus.Pending,
      };

      this.dialogRef.close(newPayPeriod);
    } catch (error) {
      this.notification.error('Failed to create pay period. Please try again.');
      console.error('Error creating pay period:', error);
    }
  }
}
