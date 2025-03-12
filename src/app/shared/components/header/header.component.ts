import { Component, EventEmitter, Output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';

// Mocks
import { CURRENT_USER } from '../../../features/account/data/user.mock';

// Components
import { UserProfileComponent } from '../../../features/account/components/user-profile/user-profile.component';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Output() toggleSidenav = new EventEmitter<void>();

  constructor(private dialog: MatDialog) {}

  onToggleSidenav() {
    this.toggleSidenav.emit();
  }

  openUserProfile(): void {
    const dialogRef = this.dialog.open(UserProfileComponent, {
      data: CURRENT_USER,
    });
  }
}
