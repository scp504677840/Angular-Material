import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IFrameDialogComponent } from './iframe-dialog.component';

describe('IFrameDialogComponent', () => {
  let component: IFrameDialogComponent;
  let fixture: ComponentFixture<IFrameDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IFrameDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IFrameDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
