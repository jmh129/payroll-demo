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
      import(
        './features/dashboard/components/dashboard/dashboard.component'
      ).then((m) => m.DashboardComponent),
  },
  {
    path: 'employees',
    loadComponent: () =>
      import(
        './features/employees/components/employee-list/employee-list.component'
      ).then((m) => m.EmployeeListComponent),
  },
  {
    path: 'payroll',
    loadComponent: () =>
      import(
        './features/payroll/components/payroll-list/payroll-list.component'
      ).then((m) => m.PayrollListComponent),
  },
];
