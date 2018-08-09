import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

/**
 * DomSanitizer
 * 详情参考https://www.angular.cn/guide/security
 */
@Pipe({
  name: 'safeHtml'
})
export class SafeHtmlPipe implements PipeTransform {

  constructor(private domSanitizer: DomSanitizer) {
  }

  transform(value: any, args?: any): any {
    return this.domSanitizer.bypassSecurityTrustHtml(value);
  }

}
