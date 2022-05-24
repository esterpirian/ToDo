import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WellcomeCoponentComponent } from './wellcome-coponent.component';

describe('WellcomeCoponentComponent', () => {
  let component: WellcomeCoponentComponent;
  let fixture: ComponentFixture<WellcomeCoponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WellcomeCoponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WellcomeCoponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
