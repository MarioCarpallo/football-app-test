import { TestBed } from '@angular/core/testing';
import { EVENT_RESPONSE_MOCK } from '../mocks/event.mock';
import { EventsServiceMock } from '../mocks/events-service.mock';

import { EventsService } from './events.service';

describe('EventsService', () => {
  let service: EventsService;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [
      { provide: EventsService, useClass: EventsServiceMock },
    ],});
    service = TestBed.get(EventsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all the events', () => {
    service.getAllEvents().subscribe(res => {
      expect(res).toBe(EVENT_RESPONSE_MOCK);
    });
  });

  it('should set the selected event', () => {
    service.setEvent(EVENT_RESPONSE_MOCK.response[0])

  });
});
