import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpectrumDefragComponent } from './spectrum-defrag.component';

describe('SpectrumDefragComponent', () => {
  let component: SpectrumDefragComponent;
  let fixture: ComponentFixture<SpectrumDefragComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpectrumDefragComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpectrumDefragComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
