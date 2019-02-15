import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {WeekViewComponent} from './week-view.component';
import {expect} from '@angular/core/testing/src/testing_internal';

fdescribe('WeekViewComponent', () => {
  let component: WeekViewComponent;
  let fixture: ComponentFixture<WeekViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WeekViewComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should genereate week range', () => {
    component.selectedDate = new Date();
    var generateDaysInWeek: Date[] = component.generateDaysInWeek();

    expect(generateDaysInWeek.length).toBe(7);


  })


});
