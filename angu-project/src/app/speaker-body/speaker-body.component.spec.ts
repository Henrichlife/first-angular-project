import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakerBodyComponent } from './speaker-body.component';

describe('SpeakerBodyComponent', () => {
  let component: SpeakerBodyComponent;
  let fixture: ComponentFixture<SpeakerBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeakerBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakerBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
