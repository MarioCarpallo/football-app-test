import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class EventsService {
  
  private event$ = new BehaviorSubject<any>({});
  selectedEvent$ = this.event$.asObservable();

  constructor(private http: HttpClient) { }

  //Método get para recoger todos los eventos de fútbol.
  public getAllEvents(): Observable<any>{
    const API_KEY = 'Mjc0OTJfMTY2MzUyMTY4N185ODcyYjEyN2U3NzlhMTdjZDJlZmY5MzNkNWI1NDVhMWRkY2ViMzg2'
    const endpoint = `https://www.scorebat.com/video-api/v3/feed/?token=${API_KEY}`
    return this.http.get(endpoint);
  }

  setEvent(product: any) {
    this.event$.next(product);
  }
}
