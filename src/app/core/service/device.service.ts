import { Injectable, signal, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class DeviceService {
  isSmallScreen = signal<boolean>(false);

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.XSmall])
      .pipe(takeUntilDestroyed())
      .subscribe((result) => {
        this.isSmallScreen.set(result.matches);
      });
  }
}
