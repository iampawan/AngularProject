import { Component } from 'angular2/core';
import {EventListComponent} from './events/event-list.component';

@Component({
    selector: 'events-app',
    template: `
      <div><h1>{{pageTitle}}</h1>
        <el-events></el-events>
      </div> 
    `,
    directives: [EventListComponent]
})

export class AppComponent {
    pageTitle: string = '+ Local Events App +';
}
