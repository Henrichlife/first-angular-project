import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestedFooterComponent } from './tested-footer.component';

describe('TestedFooterComponent', () => {
  let component: TestedFooterComponent;
  let fixture: ComponentFixture<TestedFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestedFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestedFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
