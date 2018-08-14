import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

/**
 * Icon
 * mat-icon使您可以更轻松地在应用中使用基于矢量的图标。
 * 该指令既支持图标字体，也支持SVG图标，但不支持基于位图的格式（png，jpg等）。
 *
 * 注册图标
 * MatIconRegistry是一种可注入服务，允许您将图标名称与SVG URL，HTML字符串相关联，并为CSS字体类定义别名。
 * 其方法将在下面讨论并列在API摘要中。
 *
 * 带有ligatures的字体图标
 * 某些字体旨在通过使用ligatures来显示图标，例如通过将文本“home”渲染为主图像。
 * 要使用连字图标，请将其文本放在mat-icon组件的内容中。
 * https://en.wikipedia.org/wiki/Typographic_ligature
 *
 * 默认情况下，<mat-icon>需要Material图标字体。
 * （您仍然需要包含HTML来加载字体及其CSS，如链接中所述）。
 * 您可以通过将fontSet输入设置为要应用以使用所需字体的CSS类，
 * 或者先前使用MatIconRegistry.registerFontClassAlias注册的别名来指定其他字体。
 *
 * 带有CSS的字体图标
 * 字体还可以通过为每个图标字形定义CSS类来显示图标，这通常使用：before选择器来显示图标。
 * FontAwesome使用此方法显示其图标。
 * 要使用此类字体，请将fontSet输入设置为字体的CSS类（类本身或使用MatIconRegistry.registerFontClassAlias注册的别名），
 * 并将fontIcon输入设置为要显示的特定图标的类。
 *
 * 对于这两种类型的字体图标，
 * 您可以通过调用MatIconRegistry.setDefaultFontSetClass指定未显式设置fontSet时使用的默认字体类。
 *
 * SVG图标
 * 当mat-icon组件显示SVG图标时，它通过将SVG内容直接内嵌到页面中作为组件的子项来实现。
 * （而不是使用标签或div背景图像）。
 * 这样可以更轻松地将CSS样式应用于SVG图标。
 * 例如，SVG内容的默认颜色是CSS currentColor值。
 * 这使得SVG图标默认具有与周围文本相同的颜色，并允许您通过在mat-icon元素上设置“颜色”样式来更改颜色。
 *
 * 为了防止XSS漏洞，必须使用Angular的DomSanitizer服务将传递给MatIconRegistry的任何SVG URL和HTML字符串标记为受信任。
 *
 * 另请注意，所有通过URL注册的SVG图标都是通过XmlHttpRequest获取的，
 * 并且由于同源策略，它们的URL必须与包含页面位于同一域中，或者必须将其服务器配置为允许跨域访问。
 *
 * Named icons
 * 要将名称与图标URL相关联，请使用MatIconRegistry的addSvgIcon，
 * addSvgIconInNamespace，addSvgIconLiteral或addSvgIconLiteralInNamespace方法。
 * 注册图标后，可以通过设置svgIcon输入来显示它。
 * 对于默认命名空间中的图标，请直接使用该名称。
 * 对于非默认命名空间，请使用格式[namespace]：[name]。
 *
 * 图标集
 * 图标集允许将多个图标分组到单个SVG文件中。
 * 这是通过创建单个根<svg>标记来完成的，该标记在其<defs>部分中包含多个嵌套的<svg>标记。
 * 这些嵌套标记中的每一个都使用id属性标识。
 * 此ID用作图标的名称。
 *
 * 使用MatIconRegistry的addSvgIconSet，
 * addSvgIconSetInNamespace，
 * addSvgIconSetLiteral或addSvgIconSetLiteralInNamespace方法注册图标集。
 * 注册图标集后，可以通过其id属性访问其每个嵌入图标。
 * 要显示图标集中的图标，请使用svgIcon输入，方法与单独注册的图标相同。
 *
 * 可以在同一名称空间中注册多个图标集。
 * 请求一个id出现在多个图标集中的图标，将使用最近注册的图标集中的图标。
 *
 * 主题化
 * 默认情况下，图标将使用当前字体颜色（currentColor）。
 * 可以使用color属性更改此颜色以匹配当前主题的颜色。
 * 这可以更改为“primary”，“accent”或“warn”。
 *
 * 双向
 * 默认情况下，RTL布局中的图标看起来与LTR中的图标完全相同，
 * 但是必须为RTL用户镜像某些图标。
 * 如果只想在RTL布局中镜像图标，可以使用mat-icon-rtl-mirror CSS类。
 * <mat-icon class="mat-icon-rtl-mirror" svgIcon="thumb-up"></mat-icon>
 *
 * 装饰图标
 * 当图标纯粹是装饰性的并且没有传达真正的语义含义时，<mat-icon>元素用aria-hidden =“true”标记。
 *
 * 交互式图标
 * 仅图标不是屏幕阅读器用户的交互元素; 当用户与页面上的某个图标进行交互时，更合适的元素应“拥有”交互：
 * 1.<mat-icon>元素应该是<button>或<a>元素的子元素。
 * 2.父<button>或<a>应该通过直接文本内容，aria-label或aria-labelledby提供有意义的标签。
 *
 * 指示器图标
 * 当图标的存在将某些信息传达给用户时，
 * 无论是作为指示符还是通过内联到文本块中，
 * 该信息也必须可供屏幕阅读器使用。
 * 最直接的方法是
 * 1.将<span>作为相邻的兄弟添加到<mat-icon>元素，其中的文本传达与图标相同的信息。
 * 2.将cdk-visual-hidden类添加到<span>。 这将使消息在屏幕上不可见，但仍可供屏幕阅读器用户使用。
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
                media: MediaMatcher,
                private iconRegistry: MatIconRegistry,
                private sanitizer: DomSanitizer) {
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);

        // 注册svg图标
        this.iconRegistry.addSvgIcon('thumb_up',
            this.sanitizer.bypassSecurityTrustResourceUrl('../assets/thumb_up.svg'))
            .addSvgIconLiteral('bike',
                this.sanitizer.bypassSecurityTrustHtml(BIKE_ICON))
            .addSvgIconSetInNamespace('core',
                this.sanitizer.bypassSecurityTrustResourceUrl('../assets/core-icon-set.svg'))
            .addSvgIconSetLiteralInNamespace('core-inline',
                this.sanitizer.bypassSecurityTrustHtml(INLINE_ICON_SET))
            .registerFontClassAlias('fontawesome', 'fa')
            .registerFontClassAlias('iconfont', 'iconfont');
    }

    ngOnDestroy(): void {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }

}

const BIKE_ICON = `
  <svg xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M15.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM5 12c-2.8 0-5 2.2-5 ` +
    `5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 ` +
    `1.6 3.5 3.5-1.6 3.5-3.5 3.5zm5.8-10l2.4-2.4.8.8c1.3 1.3 3 2.1 5.1 2.1V9c-1.5 ` +
    `0-2.7-.6-3.6-1.5l-1.9-1.9c-.5-.4-1-.6-1.6-.6s-1.1.2-1.4.6L7.8 8.4c-.4.4-.6.9-.6 ` +
    `1.4 0 .6.2 1.1.6 1.4L11 14v5h2v-6.2l-2.2-2.3zM19 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 ` +
    `5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 ` +
    `3.5-3.5 3.5z"/>
  </svg>
`;

const INLINE_ICON_SET = `
  <svg>
    <defs>
    <svg id="account-balance">
      <path d="M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-` +
    `7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z"/>
    </svg>
    <svg id="account-balance-wallet">
      <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-` +
    `2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9` +
    `-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"
      />
    </svg>
    <svg id="account-box">
      <path d="M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H` +
    `5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-` +
    `3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z"/>
    </svg>
    </defs>
  </svg>
`;
