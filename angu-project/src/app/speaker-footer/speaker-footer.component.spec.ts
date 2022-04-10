import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakerFooterComponent } from './speaker-footer.component';

describe('SpeakerFooterComponent', () => {
  let component: SpeakerFooterComponent;
  let fixture: ComponentFixture<SpeakerFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeakerFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakerFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
