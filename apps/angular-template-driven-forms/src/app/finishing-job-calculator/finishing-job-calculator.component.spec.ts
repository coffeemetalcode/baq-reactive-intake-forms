import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishingJobCalculatorComponent } from './finishing-job-calculator.component';

describe('FinishingJobCalculatorComponent', () => {
  let component: FinishingJobCalculatorComponent;
  let fixture: ComponentFixture<FinishingJobCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinishingJobCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinishingJobCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
