import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakerAjComponent } from './speaker-aj.component';

describe('SpeakerAjComponent', () => {
  let component: SpeakerAjComponent;
  let fixture: ComponentFixture<SpeakerAjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeakerAjComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakerAjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
