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
 *
 * 注意：不支持在指定多行时将内容放在<mat-toolbar-row>之外。
 *
 * 定位工具栏内容
 * 工具栏不会对其内容执行任何定位。
 * 这使用户有足够的能力来定位符合其应用的内容。
 * 常见的模式是在左侧放置标题，在右侧放置一些操作。
 * 这可以通过display：flex轻松完成。
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
