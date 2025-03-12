import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./features/dashboard/pages/dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
  },
  {
    path: 'employees',
    loadComponent: () =>
      import('./features/employees/pages/employee/employee.component').then(
        (m) => m.EmployeeComponent
      ),
  },
  {
    path: 'payroll',
    loadComponent: () =>
      import('./features/payroll/pages/payroll/payroll.component').then(
        (m) => m.PayrollComponent
      ),
  },
];
