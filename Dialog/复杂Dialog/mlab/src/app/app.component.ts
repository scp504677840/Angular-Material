import {Component, Inject, TemplateRef, ViewChild} from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material';
import {DOCUMENT} from '@angular/common';
import {JazzDialogComponent} from './jazz-dialog/jazz-dialog.component';
import {ContentElementDialogComponent} from './content-element-dialog/content-element-dialog.component';

const defaultDialogConfig = new MatDialogConfig();

/**
 * Dialog
 * 1.constructor(private dialog: MatDialog)
 * 2.书写component.html
 * 3.书写openDialog方法
 * 4.书写dialog样式组件PanelComponent
 * 5.在app.module.ts里执行下面两项操作：
 *  5.1 declarations: [PanelComponent]
 *  5.2 entryComponents: [PanelComponent]
 * 6.数据传递MatDialogConfig
 * 7.监听dialog关闭Observable
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  dialogRef: MatDialogRef<JazzDialogComponent> | null;
  lastAfterClosedResult: string;
  lastBeforeCloseResult: string;
  actionsAlignment: string;
  config = {
    disableClose: false,
    // Class样式在styles.css
    panelClass: 'custom-overlay-pane-class',
    hasBackdrop: true,
    backdropClass: 'custom-overlay-pane-class',
    width: '',
    height: '',
    minWidth: '',
    minHeight: '',
    maxWidth: defaultDialogConfig.maxWidth,
    maxHeight: '',
    position: {
      top: '',
      bottom: '',
      left: '',
      right: ''
    },
    data: {
      message: 'Jazzy jazz jazz'
    }
  };
  numTemplateOpens = 0;

  @ViewChild(TemplateRef) template: TemplateRef<any>;

  constructor(public dialog: MatDialog, @Inject(DOCUMENT) doc: any) {
    // Possible useful example for the open and closeAll events.
    // Adding a class to the body if a dialog opens and
    // removing it after all open dialogs are closed
    dialog.afterOpen.subscribe(() => {
      if (!doc.body.classList.contains('no-scroll')) {
        doc.body.classList.add('no-scroll');
      }
    });
    dialog.afterAllClosed.subscribe(() => {
      doc.body.classList.remove('no-scroll');
    });
  }

  openJazz() {
    this.dialogRef = this.dialog.open(JazzDialogComponent, this.config);

    this.dialogRef.beforeClose().subscribe((result: string) => {
      this.lastBeforeCloseResult = result;
    });
    this.dialogRef.afterClosed().subscribe((result: string) => {
      this.lastAfterClosedResult = result;
      this.dialogRef = null;
    });
  }

  openContentElement() {
    const dialogRef = this.dialog.open(ContentElementDialogComponent, this.config);
    dialogRef.componentInstance.actionsAlignment = this.actionsAlignment;
  }

  openTemplate() {
    this.numTemplateOpens++;
    this.dialog.open(this.template, this.config);
  }
}
