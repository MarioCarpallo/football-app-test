import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { EVENT_RESPONSE_MOCK } from 'src/app/shared/mocks/event.mock';
import { EventsServiceMock } from 'src/app/shared/mocks/events-service.mock';
import { EventsService } from 'src/app/shared/services/events.service';
import { MainEventDetailComponent } from '../../event-detail/main-event-detail/main-event-detail.component';

import { MainHomeComponent } from './main-home.component';

describe('MainHomeComponent', () => {
  let component: MainHomeComponent;
  let fixture: ComponentFixture<MainHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        RouterTestingModule.withRoutes([
          { path: 'event-detail', component: MainEventDetailComponent}
      ])
      ],
      declarations: [ MainHomeComponent ],
      providers: [
        { provide: EventsService, useClass: EventsServiceMock },
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get all events', () => {
    component.getAllEvents();
    expect(component.eventList).toEqual(EVENT_RESPONSE_MOCK.response)
  });

  it('should go to EventDetail page', () => {
    component.goEventDetail(EVENT_RESPONSE_MOCK.response[0]);
    
    expect(component.eventSelected).toEqual(EVENT_RESPONSE_MOCK.response[0])

  });
});
