import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EVENT_RESPONSE_MOCK } from 'src/app/shared/mocks/event.mock';

import { EventCardComponent } from './event-card.component';

describe('EventCardComponent', () => {
  let component: EventCardComponent;
  let fixture: ComponentFixture<EventCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventCardComponent);
    component = fixture.componentInstance;
    component.eventDetail = EVENT_RESPONSE_MOCK.response[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test image', () => {
    component.handleMissingImage({target:{}});
  });
});
