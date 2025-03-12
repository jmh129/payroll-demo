import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayPeriodListComponent } from './pay-period-list.component';

describe('PayPeriodListComponent', () => {
  let component: PayPeriodListComponent;
  let fixture: ComponentFixture<PayPeriodListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PayPeriodListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayPeriodListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
