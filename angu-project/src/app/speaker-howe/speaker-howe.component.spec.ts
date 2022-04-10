import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakerHoweComponent } from './speaker-howe.component';

describe('SpeakerHoweComponent', () => {
  let component: SpeakerHoweComponent;
  let fixture: ComponentFixture<SpeakerHoweComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeakerHoweComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakerHoweComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
