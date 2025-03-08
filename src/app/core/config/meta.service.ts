import { Injectable, Inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { APP_CONFIG_TOKEN, AppConfig } from '../config/app.config';

@Injectable({
  providedIn: 'root',
})
export class MetaService {
  constructor(
    private meta: Meta,
    private title: Title,
    @Inject(APP_CONFIG_TOKEN) private config: AppConfig
  ) {}

  /**
   * Initialize default meta tags based on app config
   */
  initializeMetaTags(): void {
    // Set the page title
    this.title.setTitle(this.config.siteName);

    // Set standard meta tags
    this.meta.addTag({
      name: 'description',
      content: this.config.meta.description,
    });
    this.meta.addTag({ name: 'author', content: this.config.meta.author });
    this.meta.addTag({
      name: 'keywords',
      content: this.config.meta.keywords.join(', '),
    });

    // Version info from package.json
    this.meta.addTag({ name: 'version', content: this.config.version });
    this.meta.addTag({
      name: 'application-name',
      content: this.config.siteName,
    });
  }

  /**
   * Update specific meta tag
   */
  updateMetaTag(name: string, content: string): void {
    this.meta.updateTag({ name, content });
  }

  /**
   * Update page title
   */
  updateTitle(title: string): void {
    this.title.setTitle(title);
  }

  /**
   * Set route-specific meta tags
   */
  setRouteMetaTags(title: string, description?: string): void {
    this.updateTitle(`${title} | ${this.config.siteName}`);

    if (description) {
      this.updateMetaTag('description', description);
    }
  }
}
