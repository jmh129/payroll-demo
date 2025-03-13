/**
 * EmployeeProfileComponent displays and edits an employee's profile in a dialog.
 * It supports both viewing and editing modes, with form validation for updates or new employee creation.
 * @standalone
 */

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
  styleUrls: ['./employee-profile.component.scss'],
})
export class EmployeeProfileComponent {
  editMode = false;
  editedEmployee: Employee;
  employeeStatuses = Object.values(EmployeeStatus);
  employeeForm: FormGroup;
  countries: CountryLocale[] = COUNTRIES;
  dateValue: Date | null = null;
  isNewEmployee: boolean;

  constructor(
    public dialogRef: MatDialogRef<EmployeeProfileComponent>,
    @Inject(MAT_DIALOG_DATA) public employee: Employee | null,
    private notification: NotificationService,
    private fb: FormBuilder
  ) {
    this.isNewEmployee = !employee;
    this.editMode = this.isNewEmployee;

    this.editedEmployee = employee
      ? JSON.parse(JSON.stringify(employee))
      : {
          id: crypto.randomUUID(),
          name: '',
          role: '',
          baseSalary: 0,
          currency: 'USD',
          country: '',
          hireDate: '',
          email: '',
          status: EmployeeStatus.Active,
          department: undefined,
          phoneNumber: undefined,
        };

    if (this.editedEmployee.hireDate) {
      this.dateValue = new Date(this.editedEmployee.hireDate);
    }

    // Initialize the form with validators
    this.employeeForm = this.fb.group({
      name: [this.editedEmployee.name, Validators.required],
      role: [this.editedEmployee.role, Validators.required],
      department: [this.editedEmployee.department],
      email: [
        this.editedEmployee.email,
        [Validators.required, Validators.email],
      ],
      phoneNumber: [
        this.editedEmployee.phoneNumber,
        [Validators.pattern(/^\+?[0-9\s\-\(\)]+$/)],
      ],
      country: [this.editedEmployee.country, Validators.required],
      hireDate: [this.dateValue, Validators.required],
      status: [this.editedEmployee.status, Validators.required],
    });
  }

  /**
   * Toggles between edit and view modes, resetting form if canceling edits.
   */
  toggleEditMode(): void {
    this.editMode = !this.editMode;
    if (!this.editMode && !this.isNewEmployee) {
      // Reset to original values if canceling edit (not for new employees)
      this.editedEmployee = JSON.parse(JSON.stringify(this.employee));
      if (this.editedEmployee.hireDate) {
        this.dateValue = new Date(this.editedEmployee.hireDate);
      }
      this.employeeForm.patchValue({
        name: this.editedEmployee.name,
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

  /**
   * Updates the hire date when selected via the datepicker.
   * @param event The datepicker change event
   */
  onDateChange(event: any): void {
    if (event.value) {
      this.dateValue = event.value;
      const date = new Date(event.value);
      this.editedEmployee.hireDate = date.toISOString().split('T')[0];
      this.employeeForm.patchValue({ hireDate: this.dateValue });
    }
  }

  /**
   * Retrieves the full country name from a country code.
   * @param countryCode The ISO country code
   * @returns The country name or the code if not found
   */
  getCountryName(countryCode: string): string {
    const country = this.countries.find((c) => c.code === countryCode);
    return country ? country.name : countryCode;
  }

  /**
   * Saves changes to the employee profile and closes the dialog.
   */
  saveChanges(): void {
    if (this.employeeForm.invalid) {
      this.notification.error('Please fix the validation errors before saving');
      return;
    }

    try {
      // Update editedEmployee with form values
      this.editedEmployee.name = this.employeeForm.value.name;
      this.editedEmployee.role = this.employeeForm.value.role;
      this.editedEmployee.department = this.employeeForm.value.department;
      this.editedEmployee.email = this.employeeForm.value.email;
      this.editedEmployee.phoneNumber = this.employeeForm.value.phoneNumber;
      this.editedEmployee.country = this.employeeForm.value.country;
      this.editedEmployee.status = this.employeeForm.value.status;
      if (this.dateValue) {
        this.editedEmployee.hireDate = this.dateValue
          .toISOString()
          .split('T')[0];
      }

      this.editMode = false;
      const successMessage = this.isNewEmployee
        ? `${NameUtils.toPossessive(
            this.editedEmployee.name
          )} profile created successfully`
        : `${NameUtils.toPossessive(
            this.editedEmployee.name
          )} profile updated successfully`;
      this.notification.success(successMessage);

      this.dialogRef.close(this.editedEmployee);
    } catch (error) {
      this.notification.error('Failed to save profile. Please try again.');
      console.error('Error saving employee data:', error);
    }
  }

  /**
   * Checks if a form control has a specific error and has been interacted with.
   * @param controlName The name of the form control
   * @param errorType The type of error to check for
   * @returns True if the error exists and the control is touched/dirty
   */
  hasError(controlName: string, errorType: string): boolean {
    const control = this.employeeForm.get(controlName);
    return control
      ? control.hasError(errorType) && (control.touched || control.dirty)
      : false;
  }
}
