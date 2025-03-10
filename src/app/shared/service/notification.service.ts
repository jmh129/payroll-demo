import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

/**
 * Simple notification service that displays toast messages.
 * Each component is responsible for formatting its own messages.
 */
@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private snackBar: MatSnackBar) {}

  /**
   * Shows a success notification
   * @param message - The message to display
   * @param action - Optional action text (defaults to 'Close')
   * @param duration - How long to display the notification in ms (defaults to 3000ms)
   */
  success(message: string, action = 'Close', duration = 3000): void {
    this.snackBar.open(message, action, {
      duration: duration,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: ['success-snackbar'],
    });
  }

  /**
   * Shows an error notification
   * @param message - The error message to display
   * @param action - Optional action text (defaults to 'Close')
   * @param duration - How long to display the notification in ms (defaults to 5000ms)
   */
  error(message: string, action = 'Close', duration = 5000): void {
    this.snackBar.open(message, action, {
      duration: duration,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: ['error-snackbar'],
    });
  }

  /**
   * Shows an info notification
   * @param message - The info message to display
   * @param action - Optional action text (defaults to 'Close')
   * @param duration - How long to display the notification in ms (defaults to 3000ms)
   */
  info(message: string, action = 'Close', duration = 3000): void {
    this.snackBar.open(message, action, {
      duration: duration,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: ['info-snackbar'],
    });
  }

  /**
   * Shows a warning notification
   * @param message - The warning message to display
   * @param action - Optional action text (defaults to 'Close')
   * @param duration - How long to display the notification in ms (defaults to 4000ms)
   */
  warning(message: string, action = 'Close', duration = 4000): void {
    this.snackBar.open(message, action, {
      duration: duration,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: ['warning-snackbar'],
    });
  }

  /**
   * Dismisses the currently displayed notification
   */
  dismiss(): void {
    this.snackBar.dismiss();
  }
}
