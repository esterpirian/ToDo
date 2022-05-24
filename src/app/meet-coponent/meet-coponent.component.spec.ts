import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetCoponentComponent } from './meet-coponent.component';

describe('MeetCoponentComponent', () => {
  let component: MeetCoponentComponent;
  let fixture: ComponentFixture<MeetCoponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetCoponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetCoponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
