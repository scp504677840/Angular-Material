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
 * <mat-sidenav>表示 添加的副作用。
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
}
