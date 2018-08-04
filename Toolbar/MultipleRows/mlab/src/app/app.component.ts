import {Component} from '@angular/core';

/**
 * Toolbar
 *
 * <mat-toolbar>是headers，titles或actions的容器。
 *
 * Single row
 * 在大多数情况下，工具栏将放置在应用程序的顶部，并且只有一行包含应用程序的标题。
 *
 * Multiple rows
 * Material Design规范描述了工具栏也可以有多行。
 * 在Angular Material中创建具有多行的工具栏可以通过在<mat-toolbar>中放置<mat-toolbar-row>元素来完成。
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
