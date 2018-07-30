import {Component} from '@angular/core';
import {MatSnackBar, MatSnackBarDismiss} from '@angular/material';

/**
 * SnackBar
 * // Simple message.
 * let snackBarRef = snackBar.open('Message archived');
 *
 * // Simple message with an action.
 * let snackBarRef = snackBar.open('Message archived', 'Undo');
 *
 * // Load the given component into the snack-bar.
 * let snackBarRef = snackbar.openFromComponent(MessageArchivedComponent);
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private snackBar: MatSnackBar) {
  }

  openSnackBar(message: string, action: string) {
    const snackBarRef = this.snackBar.open(message, action, {duration: 2000});
    snackBarRef.afterOpened().subscribe(() => {
      console.log('opened');
    });
    snackBarRef.afterDismissed().subscribe((value: MatSnackBarDismiss) => {
      console.log('dismissed');
    });
    snackBarRef.onAction().subscribe(() => {
      console.log('action');
    });
  }

}
