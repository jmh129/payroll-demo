import { Component, Input, signal, computed } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule, Router } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

// Service
import { NavItem, NavigationService } from '../../service/navigation.service';

@Component({
  standalone: true,
  imports: [MatSidenavModule, RouterModule, MatListModule, MatIconModule],
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  @Input() onClose?: () => void;
  navItems = signal<NavItem[]>([]);
  currentRoute = signal<string>('');

  activeItem = computed(() => {
    return (
      this.navItems().find((item) => item.path === this.currentRoute()) || null
    );
  });

  constructor(
    private navigationService: NavigationService,
    private router: Router
  ) {
    this.navItems.set(this.navigationService.getNavItems());
    this.router.events.subscribe(() => {
      this.currentRoute.set(this.router.url);
    });
  }

  navigate(item: NavItem) {
    this.router.navigate([item.path]);
    this.currentRoute.set(item.path);
    if (this.onClose) {
      this.onClose();
    }
  }
}
