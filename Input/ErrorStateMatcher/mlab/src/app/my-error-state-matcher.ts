import {ErrorStateMatcher} from '@angular/material';
import {FormControl, FormGroupDirective, NgForm} from '@angular/forms';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    // control：control不为空
    // control.invalid：control无效
    // control.dirty：control输入过数据
    // control.touched：control被触摸过
    // isSubmitted：表单已提交
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
