import { Injectable } from '@angular/core';
import { Routes } from '@angular/router';

// Routes
import { routes } from '../../app.routes';

export interface NavItem {
  path: string;
  title: string;
}

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private navItems: NavItem[] = [];

  constructor() {
    this.navItems = this.generateNavItems(routes);
  }

  getNavItems(): NavItem[] {
    return this.navItems;
  }

  private generateNavItems(routes: Routes): NavItem[] {
    const items: NavItem[] = [
      ...routes
        .filter((route) => route.path && route.path !== '**')
        .map((route) => ({
          path: `/${route.path}`,
          title: this.capitalize(route.path || ''),
        })),
    ];
    return items;
  }

  private capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
