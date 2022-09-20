import { Component, Input, OnInit } from '@angular/core';
import { EventDetail } from 'src/app/shared/models/event.model';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent implements OnInit {
 @Input() eventDetail!: EventDetail;
  constructor() { }

  ngOnInit(): void {
  }

  //En el caso de que la foto de la portada no cargue, se añade una por defecto para tener mejor UI
  handleMissingImage(event: any){
    (event.target as HTMLImageElement).src = 'https://editorial.uefa.com/resources/025e-0fac62eb08cc-e6eec4b938a5-1000/ucl-breaking-news.jpg';
  }
}
