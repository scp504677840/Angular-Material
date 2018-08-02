import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JazzDialogComponent } from './jazz-dialog.component';

describe('JazzDialogComponent', () => {
  let component: JazzDialogComponent;
  let fixture: ComponentFixture<JazzDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JazzDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JazzDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
