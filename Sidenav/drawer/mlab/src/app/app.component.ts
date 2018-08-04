import {Component} from '@angular/core';

/**
 * Sidenav
 * Angular Material提供了两组组件，
 * 旨在添加可折叠的内容（通常是导航，但可以是任何内容）以及一些主要内容。
 * 这些是sidenav和抽屉组件。
 *
 * sidenav组件旨在为全屏应用添加辅助内容。
 * 要设置sidenav，我们使用三个组件：
 * <mat-sidenav-container>作为内容和sidenav的结构容器，
 * <mat-sidenav-content>表示主要内容，
 * <mat-sidenav>表示辅助内容。
 *
 * 抽屉组件旨在将旁边内容添加到应用的一小部分。
 * 这是使用<mat-drawer-container>，<mat-drawer-content>和<mat-drawer>组件完成的，这些组件类似于它们的sidenav等价物。
 * 这些内容不是为应用整体添加辅助内容，
 * 而是为您的应用的一小部分添加辅助内容。
 * 它们支持几乎所有相同的功能，但不支持固定定位。
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
}
