import {Component, NgZone, ViewChild} from '@angular/core';
import {take} from 'rxjs/operators';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';

/**
 * Input
 * matInput是一个允许原生<input>和<textarea>元素与<mat-form-field>一起使用的指令。
 *
 * <input>和<textarea>属性
 * 可以与普通<input>和<textarea>元素一起使用的所有属性也可以用在<mat-form-field>内的元素上。
 * 这包括Angular指令，例如ngModel和formControl。
 *
 * 唯一的限制是type属性只能是matInput支持的值之一。
 *
 * 支持的<input>类型
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
 * 以下输入类型可与matInput一起使用：
 * color
 * date
 * datetime-local
 * email
 * month
 * number
 * password
 * search
 * tel
 * text
 * time
 * url
 * week
 *
 * 表单字段功能
 * 有许多<mat-form-field>功能可以与任何<input matInput>或<textarea matInput>一起使用。
 * 这些包括错误消息，提示文本，前缀和后缀以及主题。
 * 有关这些功能的其他信息，请参阅表单字段文档。
 * https://material.angular.io/components/form-field/overview
 *
 * 占位符
 * 当<mat-form-field>标签浮动但输入为空时，占位符是显示的文本。
 * 它用于向用户提供有关他们应在输入中键入内容的其他提示。
 * 可以通过在<input>或<textarea>元素上设置占位符属性来指定占位符。
 * 在某些情况下，<mat-form-field>可以使用占位符作为标签（请参阅表单字段标签文档）。
 * https://material.angular.io/components/input/overview#floating-label
 *
 * 显示错误消息时更改
 * <mat-form-field>允许您将错误消息与matInput相关联。
 * 默认情况下，当控件无效并且用户已与元素交互（触摸）或已提交父表单时，将显示这些错误消息。
 * 如果您希望覆盖此行为（例如，一旦无效控件变脏或父表单组无效时显示错误），
 * 您可以使用matInput的errorStateMatcher属性。
 * 该属性采用ErrorStateMatcher对象的实例。
 * ErrorStateMatcher必须实现单个方法isErrorState，
 * 该方法接受此matInput的FormControl以及父窗体并返回一个布尔值，指示是否应显示错误。
 * （true表示应该显示它们，false表示它们不应该显示。）
 *
 * 使用自定义ErrorStateMatcher输入
 * 可以通过设置ErrorStateMatcher提供程序来指定全局错误状态匹配器。
 * 这适用于所有输入。
 * 为方便起见，ShowOnDirtyErrorStateMatcher可用于全局导致输入错误，以显示输入何时变脏和无效。
 * @NgModule({
 *   providers: [
 *     {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
 *   ]
 * })
 *
 * 自动调整<textarea>元素的大小
 * <textarea>元素可以通过使用CDK中提供的cdkAutosizeTextarea指令自动调整大小。
 *
 * 响应<input>的自动填充状态的变化
 * CDK提供用于检测输入何时被自动填充并改变自动填充状态的外观的实用程序。
 *
 * textarea
 *
 * @Input('cdkTextareaAutosize')
 * enabled: boolean
 *
 * @Input('mat-autosize')
 * matAutosize: boolean
 *
 * @Input()
 * matAutosizeMaxRows: number
 *
 * @Input()
 * matAutosizeMinRows: number
 *
 * @Input()
 * matTextareaAutosize: boolean
 *
 * @Input('cdkAutosizeMaxRows')
 * maxRows: number
 *
 * @Input('cdkAutosizeMinRows')
 * minRows: number
 *
 * matTextareaAutosize Deprecated
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('autosize')
  autosize: CdkTextareaAutosize;

  constructor(private ngZone: NgZone) {
  }

  triggerResize() {
    this.ngZone.onStable.pipe(take(1))
      .subscribe(() => {
        // 调整textarea的大小以适合其内容。
        // 参数force：是否强制重新计算高度。 默认情况下，仅当自上次调用后更改的值时才会重新计算高度。
        this.autosize.resizeToFitContent(true);
      });
  }

}
