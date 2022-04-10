import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakerArmanComponent } from './speaker-arman.component';

describe('SpeakerArmanComponent', () => {
  let component: SpeakerArmanComponent;
  let fixture: ComponentFixture<SpeakerArmanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeakerArmanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakerArmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
