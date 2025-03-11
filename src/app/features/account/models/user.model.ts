export enum UserRole {
  Admin = 'Admin',
  Manager = 'Manager',
  User = 'User',
  Viewer = 'Viewer',
}

export interface User {
  id: string;
  name: string;
  email: string;
  phoneNumber?: string;
  department?: string;
  role: string;
  imageUrl?: string;
  country: string;
  lastLogin?: string;
}
