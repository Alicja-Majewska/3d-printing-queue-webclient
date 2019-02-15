import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeRulerComponent } from './time-ruler.component';

describe('TimeRulerComponent', () => {
  let component: TimeRulerComponent;
  let fixture: ComponentFixture<TimeRulerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeRulerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeRulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
