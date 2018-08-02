import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentElementDialogComponent } from './content-element-dialog.component';

describe('ContentElementDialogComponent', () => {
  let component: ContentElementDialogComponent;
  let fixture: ComponentFixture<ContentElementDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentElementDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentElementDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
