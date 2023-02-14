import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptimizationViewComponent } from './optimization-view.component';

describe('OptimizationViewComponent', () => {
  let component: OptimizationViewComponent;
  let fixture: ComponentFixture<OptimizationViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptimizationViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptimizationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
