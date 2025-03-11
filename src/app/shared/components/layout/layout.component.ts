import { Component, ViewChild, signal } from '@angular/core';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

// Components
import { HeaderComponent } from '../header/header.component';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatListModule,
    HeaderComponent,
    SidenavComponent,
    FooterComponent,
  ],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  @ViewChild(MatSidenav) sidenav!: MatSidenav;
  isSidenavOpen = signal(false);

  toggleSidenav() {
    this.sidenav.toggle();
    this.isSidenavOpen.update((value) => !value);
  }

  closeSidenav() {
    this.sidenav.close();
    this.isSidenavOpen.set(false);
  }
}
