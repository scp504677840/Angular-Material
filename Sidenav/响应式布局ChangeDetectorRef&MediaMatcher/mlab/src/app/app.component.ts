import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MediaMatcher} from '@angular/cdk/layout';

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
 * Mode  Description
 * over  Sidenav漂浮在主要内容上，由背景覆盖
 * push  Sidenav将主要内容推出，并用背景覆盖它
 * side  Sidenav与主要内容并排显示，缩小主要内容的宽度以为sidenav腾出空间。
 *
 * 如果未指定模式，则默认使用over。
 *
 * over和push sidenav模式默认显示背景，而side模式则不显示。
 * 这可以通过在mat-sidenav-container上设置hasBackdrop属性来自定义。
 * 将hasBackdrop明确设置为true或false将覆盖无模式的所有sidenavs的默认背景可见性设置。
 * 保留未设置属性或将其设置为null将使用每种模式的默认背景可见性。
 *
 * <mat-drawer>还支持所有这些相同的模式和选项。
 *
 * 禁用自动关闭
 * 单击背景或按Esc键通常会关闭打开的sidenav。
 * 但是，可以通过在要禁用其行为的<mat-sidenav>或<mat-drawer>上设置disableClose属性来禁用此自动关闭行为。
 *
 * 可以通过向<mat-sidenav>添加keydown侦听器来完成Esc的自定义处理。
 * 可以通过<mat-sidenav-container>上的（backdropClick）输出属性完成背景点击的自定义处理。
 *
 * 调整打开的侧边栏大小
 * 默认情况下，Material仅在几个关键时刻（打开时，窗口调整大小，模式更改时）测量和调整抽屉容器的大小，
 * 以避免布局颠簸，但是在某些情况下这可能会有问题。
 * 如果您的应用程序要求抽屉在打开时更改其宽度，
 * 您可以使用自动调整大小选项告诉材料继续测量它。
 * 请注意，您应该使用此选项，风险自负，因为它可能会导致性能问题。
 *
 * 设置sidenav的大小
 * 默认情况下，<mat-sidenav>和<mat-drawer>将适合其内容的大小。
 * 宽度可以通过CSS显式设置：
 * mat-sidenav {
 *    width: 200px;
 * }
 * 尝试避免基于百分比的宽度，因为尚未支持调整大小事件。
 *
 * 固定位置sidenavs
 * 仅适用于<mat-sidenav>（不是<mat-drawer>），支持固定定位。
 * 可以通过设置fixedInViewport属性来启用它。
 * 此外，可以通过fixedTopGap和fixedBottomGap设置顶部和底部空间。
 * 这些属性接受在顶部或底部添加的像素值空间量。
 *
 * 为移动和桌面创建响应式布局
 * sidenav通常需要在移动设备和桌面显示器上表现不同。
 * 在桌面上，只有滚动内容部分才有意义。
 * 但是，在移动设备上，你经常希望身体成为滚动的元素;
 * 这允许地址栏自动隐藏。
 * sidenav可以用CSS设置样式以适应任何类型的设备。
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  mobileQuery: MediaQueryList;

  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

  fillerContent = Array.from({length: 50}, () =>
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
