import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFormDialogComponent } from './register-form-dialog.component';

describe('RegisterFormDialogComponent', () => {
  let component: RegisterFormDialogComponent;
  let fixture: ComponentFixture<RegisterFormDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterFormDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
