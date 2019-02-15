import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SchedulerComponent} from './components/scheduler/scheduler.component';
import {ReservationComponent} from './components/reservation/reservation.component';
import {NgSelectModule} from '@ng-select/ng-select';
import {FormsModule} from '@angular/forms';
import { WeekViewComponent } from './components/week-view/week-view.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DayViewComponent } from './components/day-view/day-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ReservationComponent,
    SchedulerComponent,
    WeekViewComponent,
    DayViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSelectModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
