System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var EventListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            EventListComponent = (function () {
                function EventListComponent() {
                    this.pageTitle = 'Event List';
                }
                EventListComponent = __decorate([
                    core_1.Component({
                        selector: 'el-events',
                        templateUrl: 'app/events/event-list.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], EventListComponent);
                return EventListComponent;
            }());
            exports_1("EventListComponent", EventListComponent);
        }
    }
});

//# sourceMappingURL=event-list.component.js.map
