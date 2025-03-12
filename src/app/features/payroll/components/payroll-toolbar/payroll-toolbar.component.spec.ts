import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollToolbarComponent } from './payroll-toolbar.component';

describe('PayrollToolbarComponent', () => {
  let component: PayrollToolbarComponent;
  let fixture: ComponentFixture<PayrollToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PayrollToolbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayrollToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
