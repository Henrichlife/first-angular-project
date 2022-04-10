import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakerAdamComponent } from './speaker-adam.component';

describe('SpeakerAdamComponent', () => {
  let component: SpeakerAdamComponent;
  let fixture: ComponentFixture<SpeakerAdamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeakerAdamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakerAdamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
