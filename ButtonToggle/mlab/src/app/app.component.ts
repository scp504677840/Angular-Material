import {Component} from '@angular/core';

/**
 * ButtonToggle
 * 
 * 独家选择与多重选择
 * 默认情况下，mat-button-toggle-group可以选择像单选按钮组一样的项目。
 * 在这种模式下，value的mat-button-toggle-group将反映所选择的按钮的值和ngModel被支撑。
 *
 * 添加multiple属性允许选择多个项目（复选框行为）。
 * 在此模式下，不使用切换mat-button-toggle-group的值，ngModel没有值，并且不支持。
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isVertical = false;
  isDisabled = false;
  favoritePie = 'Apple';
  pieOptions = [
    'Apple',
    'Cherry',
    'Pecan',
    'Lemon',
  ];
}
