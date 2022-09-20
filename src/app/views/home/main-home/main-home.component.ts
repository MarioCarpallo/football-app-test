import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs';
import { EventDetail, EventResponse } from 'src/app/shared/models/event.model';
import { EventsService } from 'src/app/shared/services/events.service';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.css']
})
export class MainHomeComponent implements OnInit {

  constructor(
    public _eventsService: EventsService,
    private router: Router
  ) { }

  eventList: EventDetail[] = [];
  eventSelected!: EventDetail;
  ngOnInit(): void {
    //Nada más cargue la aplicación, consultamos a la api el listado de eventos de los partidos.
    this.getAllEvents();
  }

  //Recogemos los eventos y los metemos en la variable global.
  getAllEvents(){
    this._eventsService.getAllEvents().subscribe((data: EventResponse): void => {
      this.eventList = data.response;
    })
  }

  //Al hacer click a un partido, iremos a al página del evento en concreto.
  goEventDetail(event:EventDetail){
    this.eventSelected = event;
    this._eventsService.setEvent(this.eventSelected);
    this.router.navigate(['event-detail']);
  }
}
