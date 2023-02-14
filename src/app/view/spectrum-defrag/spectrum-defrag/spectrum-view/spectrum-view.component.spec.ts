import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpectrumViewComponent } from './spectrum-view.component';

describe('SpectrumViewComponent', () => {
  let component: SpectrumViewComponent;
  let fixture: ComponentFixture<SpectrumViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpectrumViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpectrumViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
