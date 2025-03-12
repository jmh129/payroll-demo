import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignEmployeesToPeriodDialogComponent } from './assign-employees-to-period-dialog.component';

describe('AssignEmployeeToPeriodDialogComponent', () => {
  let component: AssignEmployeesToPeriodDialogComponent;
  let fixture: ComponentFixture<AssignEmployeesToPeriodDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignEmployeesToPeriodDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AssignEmployeesToPeriodDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
