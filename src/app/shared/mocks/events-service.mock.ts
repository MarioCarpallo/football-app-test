import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";
import { EVENT_RESPONSE_MOCK } from "./event.mock";

@Injectable({
    providedIn: 'root'
  })

  
  export class EventsServiceMock {
    public getAllEvents(): Observable<any>{
        return of(EVENT_RESPONSE_MOCK)
    }
    
    private event$ = new BehaviorSubject<any>({});
    selectedEvent$ = this.event$.asObservable();
  
    setEvent(product: any) {
        this.event$.next(product);
      }
  }