import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPayPeriodDialogComponent } from './add-pay-period-dialog.component';

describe('AddPayPeriodDialogComponent', () => {
  let component: AddPayPeriodDialogComponent;
  let fixture: ComponentFixture<AddPayPeriodDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPayPeriodDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPayPeriodDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
