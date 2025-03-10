// src/app/models/employee.model.ts

export enum EmployeeStatus {
  Active = 'Active',
  OnLeave = 'On Leave',
  Terminated = 'Terminated',
  Contractor = 'Contractor',
  Probation = 'Probation',
}

export interface Employee {
  id: string;
  name: string;
  role: string;
  baseSalary: number;
  currency: string;
  country: string;
  bonus?: number;
  hireDate: string;
  email: string;
  department?: string;
  status: EmployeeStatus;
  phoneNumber?: string;
  imageUrl?: string;
}
