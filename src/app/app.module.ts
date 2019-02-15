import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SchedulerComponent} from './components/scheduler/scheduler.component';
import {ReservationComponent} from './components/reservation/reservation.component';

@NgModule({
  declarations: [
    AppComponent,
    ReservationComponent,
    SchedulerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
