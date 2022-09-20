import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainEventDetailComponent } from './main-event-detail/main-event-detail.component';
import { EventDetailRoutingModule } from './event-detail-routing.module';



@NgModule({
  declarations: [
    MainEventDetailComponent
    ],
  imports: [
    CommonModule,
    EventDetailRoutingModule
  ],
  exports: [
  ]
})
export class EventDetailModule { }
