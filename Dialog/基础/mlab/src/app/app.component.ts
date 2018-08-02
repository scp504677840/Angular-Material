import {Component} from '@angular/core';
import {MatDialog} from '@angular/material';
import {PanelComponent} from './panel/panel.component';

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

  animal: string;
  name: string;

  constructor(private dialog: MatDialog) {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PanelComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('dialog已关闭');
      this.animal = result;
    });
  }
}
