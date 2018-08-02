import {Component} from '@angular/core';
import {MatDialog} from '@angular/material';
import {IFrameDialogComponent} from '../iframe-dialog/iframe-dialog.component';

@Component({
  selector: 'app-content-element-dialog',
  templateUrl: './content-element-dialog.component.html',
  styleUrls: ['./content-element-dialog.component.css']
})
export class ContentElementDialogComponent {
  actionsAlignment: string;

  constructor(public dialog: MatDialog) {
  }

  showInStackedDialog() {
    this.dialog.open(IFrameDialogComponent);
  }
}
