import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakerBermonComponent } from './speaker-bermon.component';

describe('SpeakerBermonComponent', () => {
  let component: SpeakerBermonComponent;
  let fixture: ComponentFixture<SpeakerBermonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeakerBermonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakerBermonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
