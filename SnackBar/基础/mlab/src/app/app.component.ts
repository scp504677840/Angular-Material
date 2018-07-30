import {Component} from '@angular/core';
import {MatSnackBar} from '@angular/material';

/**
 * SnackBar
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
    this.snackBar.open(message, action, {duration: 2000});
  }

}
