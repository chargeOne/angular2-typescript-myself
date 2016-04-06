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
    var HeroDetail1Component;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            HeroDetail1Component = (function () {
                function HeroDetail1Component() {
                }
                HeroDetail1Component = __decorate([
                    core_1.Component({
                        selector: 'my-hero-detail-1',
                        template: '<div *ngIf="hero1">\
            <h1>{{title}}</h1>\
            <h2>{{hero1.name}} details!</h2>\
            <div><label>id: </label>{{hero1.id}}</div>\
            <div>\
                <label>name: </label>\
                <input value="ppp2:{{hero1.name}}" placeholder="name"/>\
                <input [(ngModel)]="hero1.name" placeholder="name"/>\
            </div>\
        </div>',
                        inputs: ['hero1']
                    }), 
                    __metadata('design:paramtypes', [])
                ], HeroDetail1Component);
                return HeroDetail1Component;
            }());
            exports_1("HeroDetail1Component", HeroDetail1Component);
        }
    }
});
//# sourceMappingURL=hero-detail-1.component.js.map