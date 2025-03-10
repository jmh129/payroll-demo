import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogModule,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';

// Mock Data
import {
  CountryLocale,
  COUNTRIES,
} from '../../../../shared/data/countries.mock';

// Models
import { Employee, EmployeeStatus } from '../../models/employee.model';

// Service and Utils
import { NotificationService } from '../../../../shared/service/notification.service';
import { NameUtils } from '../../../../shared/utils/nameUtils';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatSelectModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [provideNativeDateAdapter()],
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
})
export class EmployeeProfileComponent {
  editMode = false;
  editedEmployee: Employee;
  employeeStatuses = Object.values(EmployeeStatus);
  employeeForm: FormGroup;
  countries: CountryLocale[] = COUNTRIES;

  // For date handling
  dateValue: Date | null = null;

  constructor(
    public dialogRef: MatDialogRef<EmployeeProfileComponent>,
    @Inject(MAT_DIALOG_DATA) public employee: Employee,
    private notification: NotificationService,
    private fb: FormBuilder
  ) {
    this.editedEmployee = JSON.parse(JSON.stringify(employee));

    if (this.editedEmployee.hireDate) {
      this.dateValue = new Date(this.editedEmployee.hireDate);
    }

    // Initialize the form with validators
    this.employeeForm = this.fb.group({
      role: [this.editedEmployee.role, Validators.required],
      department: [this.editedEmployee.department],
      email: [
        this.editedEmployee.email,
        [Validators.required, Validators.email],
      ],
      phoneNumber: [
        this.editedEmployee.phoneNumber,
        // Simple Validation for phone number (can be extended)
        [Validators.pattern(/^\+?[0-9\s\-\(\)]+$/)],
      ],
      country: [this.editedEmployee.country, Validators.required],
      hireDate: [this.dateValue, Validators.required],
      status: [this.editedEmployee.status, Validators.required],
    });
  }

  toggleEditMode(): void {
    this.editMode = !this.editMode;
    if (!this.editMode) {
      // Reset to original values if cancel is clicked
      this.editedEmployee = JSON.parse(JSON.stringify(this.employee));

      if (this.editedEmployee.hireDate) {
        this.dateValue = new Date(this.editedEmployee.hireDate);
      }

      // Reset form values
      this.employeeForm.patchValue({
        role: this.editedEmployee.role,
        department: this.editedEmployee.department,
        email: this.editedEmployee.email,
        phoneNumber: this.editedEmployee.phoneNumber,
        country: this.editedEmployee.country,
        hireDate: this.dateValue,
        status: this.editedEmployee.status,
      });
    }
  }

  onDateChange(event: any): void {
    if (event.value) {
      this.dateValue = event.value;
      const date = new Date(event.value);
      this.editedEmployee.hireDate = date.toISOString().split('T')[0];

      // Update form control value
      this.employeeForm.patchValue({
        hireDate: this.dateValue,
      });
    }
  }

  getCountryName(countryCode: string): string {
    const country = this.countries.find((c) => c.code === countryCode);
    return country ? country.name : countryCode;
  }

  saveChanges(): void {
    // Check if form is valid
    if (this.employeeForm.invalid) {
      this.notification.error('Please fix the validation errors before saving');
      return;
    }

    try {
      // Update the editedEmployee with form values
      this.editedEmployee.role = this.employeeForm.value.role;
      this.editedEmployee.department = this.employeeForm.value.department;
      this.editedEmployee.email = this.employeeForm.value.email;
      this.editedEmployee.phoneNumber = this.employeeForm.value.phoneNumber;
      this.editedEmployee.country = this.employeeForm.value.country;
      this.editedEmployee.status = this.employeeForm.value.status;

      // Handle date
      if (this.dateValue) {
        this.editedEmployee.hireDate = this.dateValue
          .toISOString()
          .split('T')[0];
      }

      this.editMode = false;

      const successMessage = `${NameUtils.toPossessive(
        this.employee.name
      )} profile updated successfully`;
      this.notification.success(successMessage);

      this.dialogRef.close(this.editedEmployee);
    } catch (error) {
      this.notification.error('Failed to update profile. Please try again.');
      console.error('Error saving employee data:', error);
    }
  }

  // Helper methods for template
  hasError(controlName: string, errorType: string): boolean {
    const control = this.employeeForm.get(controlName);
    return control
      ? control.hasError(errorType) && (control.touched || control.dirty)
      : false;
  }
}
