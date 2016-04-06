System.register(['angular2/core', './hero-detail.component', './hero-detail-1.component', './../service/hero.service'], function(exports_1, context_1) {
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
    var core_1, hero_detail_component_1, hero_detail_1_component_1, hero_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (hero_detail_component_1_1) {
                hero_detail_component_1 = hero_detail_component_1_1;
            },
            function (hero_detail_1_component_1_1) {
                hero_detail_1_component_1 = hero_detail_1_component_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            }],
        execute: function() {
            /*
            * Component是一个装饰器函数，它接收一个元数据对象来告诉Angular如何创建和使用组件。为组件类应用该装饰器，通过在前缀@来调用，并传递一个元数据对象作为参数：
            * selector：为代表组件的HTML元素指定一个CSS选择器。组件元素的名称为my-app，Angular会为HTML中的my-app元素创建并显示AppComponent实例。
              template：指定组件对应的模板。模板中核能会包含一些数据绑定。
                      *ngIf                     = ng-if
                      * ngFor="#hero of heroes" = ng-repeat="hero in heroes track by $index"
                      [(ngModel)]               = ng-model,
                      [class.selected]=true     = ng-class={selected:true},
                      (click)                   = ng-click=function()
                      [hero]                    =$scope.hero或者directives对象.hero
                      ＃box 声明了一个本地模板变量box,实际是做一个锚点
              style: 组件对应的样式
             * */
            AppComponent = (function () {
                function AppComponent(_heroService) {
                    this._heroService = _heroService;
                    this.title = 'Tour of Heroes:';
                }
                AppComponent.prototype.getHeroes = function () {
                    var _this = this;
                    //this._heroService.getHeroes().then(heroes => {
                    //    this.heroes = heroes;
                    //    console.log("ppppp")
                    //});
                    this._heroService.getHeroesSlowly().then(function (heroes) {
                        _this.heroes = heroes;
                        console.log("ppppp");
                    });
                };
                AppComponent.prototype.ngOnInit = function () {
                    this.getHeroes();
                };
                AppComponent.prototype.onSelect = function (hero) { this.selectedHero = hero; };
                AppComponent.prototype.onKeyUp = function (event) {
                    this.KeyValues += event.target['value'] + ' | ';
                };
                AppComponent.prototype.onKeyDown = function (value) {
                    this.KeyValues += value + ' ||';
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: '<h2>My Heroes</h2>\
            <ul class="heroes">\
                <li *ngFor="#hero of heroes" [class.selected]="hero === selectedHero" (click)="onSelect(hero)">\
                    <span class="badge">{{hero.id}}</span> {{hero.name}}\
                </li>\
                声明了一个本地模板变量box\
                <input #box (keyup)="onKeyUp($event)" (keydown)="onKeyDown(box.value)">\
                <p>{{KeyValues}}</p>\
            </ul>\
            <my-hero-detail [hero]="selectedHero"></my-hero-detail>\
            <my-hero-detail-1 [hero1]="selectedHero"></my-hero-detail-1>',
                        directives: [hero_detail_component_1.HeroDetailComponent, hero_detail_1_component_1.HeroDetail1Component],
                        providers: [hero_service_1.HeroService],
                        styles: ["\n        .selected {\n          background-color: #CFD8DC !important;\n          color: white;\n        }\n        .heroes {\n          margin: 0 0 2em 0;\n          list-style-type: none;\n          padding: 0;\n          width: 10em;\n        }\n        .heroes li {\n          cursor: pointer;\n          position: relative;\n          left: 0;\n          background-color: #EEE;\n          margin: .5em;\n          padding: .3em 0;\n          height: 1.6em;\n          border-radius: 4px;\n        }\n        .heroes li.selected:hover {\n          background-color: #BBD8DC !important;\n          color: white;\n        }\n        .heroes li:hover {\n          color: #607D8B;\n          background-color: #DDD;\n          left: .1em;\n        }\n        .heroes .text {\n          position: relative;\n          top: -3px;\n        }\n        .heroes .badge {\n          display: inline-block;\n          font-size: small;\n          color: white;\n          padding: 0.8em 0.7em 0 0.7em;\n          background-color: #607D8B;\n          line-height: 1em;\n          position: relative;\n          left: -1px;\n          top: -4px;\n          height: 1.8em;\n          margin-right: .8em;\n          border-radius: 4px 0 0 4px;\n        }\n  "]
                    }), 
                    __metadata('design:paramtypes', [hero_service_1.HeroService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map