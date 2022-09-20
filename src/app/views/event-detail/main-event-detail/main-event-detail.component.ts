import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { EventDetail } from 'src/app/shared/models/event.model';
import { EventsService } from 'src/app/shared/services/events.service';

@Component({
  selector: 'app-main-event-detail',
  templateUrl: './main-event-detail.component.html',
  styleUrls: ['./main-event-detail.component.css']
})
export class MainEventDetailComponent implements OnInit {
  
  selectedEvent!: EventDetail;
  videoURL!: any;
  constructor(
    private _eventsService: EventsService,
    private router: Router,
    private sanitizer: DomSanitizer
  ) { 

  }

  ngOnInit(): void {
    this.getEventSelected();
  }

  //Recogemos el evento seleccionado desde el servicio utilizando Behavior Subject
  getEventSelected(){
    this._eventsService.selectedEvent$.subscribe((value) => {
      if(value.title){
        this.selectedEvent = value;
        this.extractUrl();
      }else{
        this.router.navigate(['home']);
      }
    });
  }

  //Función para extraer la URL del iframe que proveé la API
  extractUrl(){
    const iframeUrl = this.selectedEvent.videos[0].embed;
    const startPosition = iframeUrl.search(`src='`) + 5;
    const endPosition = iframeUrl.search(`' fra`);
    const finalURL = iframeUrl.substring(startPosition, endPosition);
    this.videoURL = this.sanitizer.bypassSecurityTrustResourceUrl(finalURL);
  }


}
