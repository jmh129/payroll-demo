import { Injectable, signal } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class DeviceService {
  screenSize = signal<'xs' | 'sm' | 'md' | 'lg' | 'xl'>('md');

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .pipe(takeUntilDestroyed())
      .subscribe((result) => {
        if (result.breakpoints[Breakpoints.XSmall]) this.screenSize.set('xs');
        else if (result.breakpoints[Breakpoints.Small])
          this.screenSize.set('sm');
        else if (result.breakpoints[Breakpoints.Medium])
          this.screenSize.set('md');
        else if (result.breakpoints[Breakpoints.Large])
          this.screenSize.set('lg');
        else this.screenSize.set('xl');
      });
  }
}
