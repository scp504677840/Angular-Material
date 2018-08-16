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
 */
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
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