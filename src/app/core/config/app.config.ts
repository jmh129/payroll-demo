import { InjectionToken } from '@angular/core';
import * as packageInfo from '../../../../package.json';

export interface AppConfig {
  siteName: string;
  version: string;
  meta: {
    description: string;
    keywords: string[];
    author: string;
  };
  defaultCountry: string;
  production: boolean;
}

export const APP_CONFIG: AppConfig = {
  siteName: 'Payroll App Demo',
  version: packageInfo.version,
  meta: {
    description: packageInfo.description,
    keywords: packageInfo.keywords,
    author: packageInfo.author,
  },
  defaultCountry: 'US',
  production: false,
};

export const APP_CONFIG_TOKEN = new InjectionToken<AppConfig>('app.config');
