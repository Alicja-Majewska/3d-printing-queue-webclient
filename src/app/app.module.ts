import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SchedulerComponent} from './components/scheduler/scheduler.component';
import {ReservationComponent} from './components/reservation/reservation.component';
import {NgSelectModule} from '@ng-select/ng-select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {WeekViewComponent} from './components/week-view/week-view.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DayViewComponent} from './components/day-view/day-view.component';
import {TimeRulerComponent} from './components/time-ruler/time-ruler.component';
import {ReservationCreatorComponent} from './components/reservation-creator/reservation-creator.component';
import {ValidationErrorsComponent} from './components/validation-errors/validation-errors.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {AddFullUrlInterceptor} from './interceptors/AddFullUrlInterceptor';
import {AddHeaderInterceptor} from './interceptors/AddHeaderInterceptor';

@NgModule({
  declarations: [
    AppComponent,
    ReservationComponent,
    SchedulerComponent,
    WeekViewComponent,
    DayViewComponent,
    TimeRulerComponent,
    ReservationCreatorComponent,
    ValidationErrorsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSelectModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AddFullUrlInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: AddHeaderInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
