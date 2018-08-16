import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';

/**
 * Tabs
 *
 * Angular Material选项卡将内容组织到单独的视图中，其中一次只能看到一个视图。
 * 每个选项卡的标签显示在选项卡标题中，活动选项卡的标签使用动画墨水条指定。
 * 当标签标签列表超出标题宽度时，会出现分页控件，让用户在标签上左右滚动。
 *
 * 可以使用selectedIndex输入或当用户选择标题中的一个选项卡标签时设置活动选项卡。
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

}