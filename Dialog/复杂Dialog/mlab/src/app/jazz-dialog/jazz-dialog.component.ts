import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-jazz-dialog',
  templateUrl: './jazz-dialog.component.html',
  styleUrls: ['./jazz-dialog.component.css']
})
export class JazzDialogComponent {

  private _dimesionToggle = false;

  constructor(
    public dialogRef: MatDialogRef<JazzDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  togglePosition(): void {
    this._dimesionToggle = !this._dimesionToggle;

    if (this._dimesionToggle) {
      this.dialogRef
        .updateSize('500px', '500px')
        .updatePosition({top: '25px', left: '25px'});
    } else {
      this.dialogRef
        .updateSize()
        .updatePosition();
    }
  }
}
