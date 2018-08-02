import {Component} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {PanelComponent} from './panel/panel.component';
import {Dir} from '@angular/cdk/bidi';
import {ScrollStrategy} from '@angular/cdk/overlay';
import {OverlayReference} from '@angular/cdk/overlay/typings/overlay-reference';

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

  constructor(private dialog: MatDialog, private dir: Dir) {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PanelComponent, this._createConfig());

    dialogRef.afterClosed().subscribe(result => {
      console.log('dialog已关闭');
      this.animal = result;
    });
  }

  private _createConfig(): MatDialogConfig {
    const config = new MatDialogConfig();
    // 对话框的ID。如果省略，将生成唯一的一个。
    config.id = 'appPanel';
    // 对话框的宽度。
    config.width = '800px';
    // 对话框的高度。
    config.height = '900px';
    // 对话框的最小宽度。如果提供数字，则假设像素单位。
    config.minWidth = '200px';
    // 对话框的最小高度。如果提供数字，则假设像素单位。
    config.minHeight = '280px';
    // 对话框的最大宽度。如果提供数字，则假设像素单位。默认为80vw
    config.maxWidth = '250px';
    // 对话框的最大高度。如果提供数字，则假设像素单位。
    config.maxHeight = '300px';
    // 对话框是否有背景。
    config.hasBackdrop = false;
    // 自定义背景
    config.backdropClass = 'backdrop';
    // 覆盖Dialog的自定义Class样式。
    config.panelClass = 'panel';
    // 当用户在历史记录中后退/前进时，对话框是否应该关闭。
    config.closeOnNavigation = true;
    // 将数据注入子组件。
    config.data = {name: this.name, animal: this.animal};
    // 对话框内容的布局方向。
    config.direction = this.dir.value;
    // 用户是否可以使用转义或单击背景来关闭模式。
    config.disableClose = true;
    // 位置。
    /*config.position = new class implements DialogPosition {
      bottom = '0px';
      left = '0px';
      right = '0px';
      top = '100px';
    };*/
    // 对话框元素的ARIA角色。dialog | alertdialog
    config.role = 'dialog';
    // 用于对话框的滚动策略。
    config.scrollStrategy = new class implements ScrollStrategy {
      attach: (overlayRef: OverlayReference) => void;
      disable: () => void;
      enable: () => void;
    }
    return config;
  }
}
