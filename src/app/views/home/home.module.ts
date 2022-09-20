import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EventCardComponent } from './components/event-card/event-card.component';
import { HomeRoutingModule } from './home-routing.module';
import { MainHomeComponent } from './main-home/main-home.component';

@NgModule({
  declarations: [
    MainHomeComponent,
    EventCardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule  
  ],
  providers: [],
  bootstrap: []
})
export class HomeModule { }
