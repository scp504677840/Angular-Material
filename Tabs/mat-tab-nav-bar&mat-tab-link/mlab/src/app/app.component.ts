import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {MatTabChangeEvent} from '@angular/material';

/**
 * Tabs
 *
 * Angular Material选项卡将内容组织到单独的视图中，其中一次只能看到一个视图。
 * 每个选项卡的标签显示在选项卡标题中，活动选项卡的标签使用动画墨水条指定。
 * 当标签标签列表超出标题宽度时，会出现分页控件，让用户在标签上左右滚动。
 *
 * 可以使用selectedIndex输入或当用户选择标题中的一个选项卡标签时设置活动选项卡。
 *
 * 事件
 * 当活动选项卡更改时，将发出selectedTabChange输出事件。
 * 当用户通过键盘导航将焦点放在标题中的任何标签标签上时，会发出focusChange输出事件。
 *
 * 标签
 * 如果选项卡的标签仅为文本，则可以使用简单的选项卡组API。
 *
 * mat-tab-label
 * 对于更复杂的标签，请在mat-tab中添加带mat-tab-label指令的模板。
 *
 * 动态高度
 * 默认情况下，选项卡组不会将其高度更改为当前活动选项卡的高度。
 * 要更改此设置，请将dynamicHeight输入设置为true。
 * 选项卡主体将根据活动选项卡的高度设置其高度的动画。
 *
 * 标签和导航
 * 虽然<mat-tab-group>用于在单个路径中切换视图，但<nav mat-tab-nav-bar>提供了一个类似于标签的UI，用于在路径之间导航。
 * <nav mat-tab-nav-bar>
 *  <a mat-tab-link
 *      *ngFor="let link of navLinks"
 *      [routerLink]="link.path"
 *      routerLinkActive #rla="routerLinkActive"
 *      [active]="rla.isActive">
 *      {{link.label}}
 *  </a>
 * </nav>
 *
 * <router-outlet></router-outlet>
 * tab-nav-bar不依赖于任何特定的路由器;
 * 它适用于普通的<a>元素，并使用active属性来确定当前活动的选项卡。
 * 相应的<router-outlet>可以放在视图中的任何位置。
 */
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {

    links = ['First', 'Second', 'Third'];
    activeLink = this.links[0];
    background = '';

    mobileQuery: MediaQueryList;

    private _mobileQueryListener: () => void;

    constructor(changeDetectorRef: ChangeDetectorRef,
                media: MediaMatcher) {
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }

    ngOnDestroy(): void {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }

    toggleBackground() {
        this.background = this.background ? '' : 'primary';
    }

    /**
     * Tab切换时调用
     *
     * @param index Tab索引
     */
    onSelectedIndexChange(index: number) {
        console.log(`onSelectedIndexChange: ${index}`);
    }

    /**
     * Tab切换时调用
     *
     * @param event Tab变化事件
     */
    onSelectedTabChange(event: MatTabChangeEvent) {
        console.log(`onSelectedTabChange: ${event.index} - ${event.tab.textLabel}`);
    }

    /**
     * Tab切换时调用
     * Tab焦点变化时调用
     *
     * @param event Tab变化事件
     */
    onFocusChange(event: MatTabChangeEvent) {
        console.log(`onFocusChange: ${event.index} - ${event.tab.textLabel}`);
    }
}