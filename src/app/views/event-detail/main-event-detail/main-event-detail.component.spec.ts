import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EVENT_RESPONSE_MOCK } from 'src/app/shared/mocks/event.mock';
import { EventsServiceMock } from 'src/app/shared/mocks/events-service.mock';
import { EventsService } from 'src/app/shared/services/events.service';
import { MainHomeComponent } from '../../home/main-home/main-home.component';

import { MainEventDetailComponent } from './main-event-detail.component';

describe('MainEventDetailComponent', () => {
  let component: MainEventDetailComponent;
  let fixture: ComponentFixture<MainEventDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        RouterTestingModule.withRoutes([
          { path: 'home', component: MainHomeComponent}
      ])
      ],
      declarations: [ MainEventDetailComponent ],
      providers: [
        { provide: EventsService, useClass: EventsServiceMock },
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainEventDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get Event Selected', () => {
    component.getEventSelected();
  });

  it('should extract the url form the result', () => {
    component.selectedEvent = EVENT_RESPONSE_MOCK.response[0];
    component.extractUrl();
    
    expect(component.videoURL.changingThisBreaksApplicationSecurity)
    .toEqual('https://www.scorebat.com/embed/v/RzFQWjV4NXo3M0poMjhDK3RhcFQrZz09/?token=Mjc0OTJfMTY2MzY0MDAxNV8yYzY2ODdiZThkZWFmZjBlYmNmYjQ5ZmZmZTBjZGI3ZDdkYjdhMDQx&utm_source=api&utm_medium=video&utm_campaign=apifd')
  });

});
