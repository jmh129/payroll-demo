import { Component, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

// Config
import { APP_CONFIG_TOKEN } from '../../../core/config/app.config';

@Component({
  selector: 'app-footer',
  imports: [MatToolbarModule, MatIconModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  config = inject(APP_CONFIG_TOKEN);

  currentYear = new Date().getFullYear();
}
