import { Component } from 'angular2/core';

@Component({
    selector: 'el-events',
    templateUrl: 'app/events/event-list.component.html'
})
export class EventListComponent {
    pageTitle: string = 'Event List';
}
