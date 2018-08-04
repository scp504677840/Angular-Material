import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';

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
 *
 * 指定主要和侧面内容
 * 主要内容和侧面内容都应放在<mat-sidenav-container>内部，
 * 不希望受sidenav影响的内容（如页眉或页脚）可以放在容器外部。
 *
 * 副内容应该包含在<mat-sidenav>元素中。
 * position属性可用于指定放置旁边内容的主要内容的哪一端。
 * 位置可以是开始或结束，其将侧面内容分别以左到右的语言放置在左侧或右侧。
 * 如果未设置位置，则将假定start的默认值。
 * <mat-sidenav-container>总共最多可以包含两个<mat-sidenav>元素，但对于任何给定的边，只能有一个。
 *
 * 主要内容应包含在<mat-sidenav-content>中。
 * 如果没有为<mat-sidenav-container>指定<mat-sidenav-content>，
 * 则会隐式创建一个<mat-sidenav-container>而<mat-sidenav-container>中除<mat-sidenav>元素之外的所有内容都将 放在里面。
 *
 * 打开和关闭sidenav
 * 可以使用open（），close（）和toggle（）方法打开或关闭<mat-sidenav>。
 * 这些方法中的每一个都返回一个Promise <boolean>，当sidenav完成打开时将返回true，当完成关闭时将解析为false。
 *
 * 打开状态也可以使用opens属性通过模板中的属性绑定进行设置。
 * 该属性支持双向绑定。
 *
 * <mat-sidenav>还分别支持open和just close事件，（opened）和（closed）属性的输出属性。
 * 所有这些属性和方法也适用于<mat-drawer>。
 *
 * 改变sidenav的行为
 * <mat-sidenav>可以基于mode属性以三种不同方式之一进行渲染。
 * Mode	Description
 * over	Sidenav漂浮在主要内容上，由背景覆盖
 * push	Sidenav将主要内容推出，并用背景覆盖它
 * side	Sidenav与主要内容并排显示，缩小主要内容的宽度以为sidenav腾出空间。
 *
 * 如果未指定模式，则默认使用over。
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mode = new FormControl('over');
  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
}
