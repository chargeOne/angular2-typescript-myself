import { Component }       from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
//import {ROUTER_PROVIDERS,RouteConfig, ROUTER_DIRECTIVES,APP_BASE_HREF,LocationStrategy,RouteParams,ROUTER_BINDINGS} from 'angular2/router';
import { HeroService }     from '../service/hero.service';
import {DialogService}         from '../service/dialog.service';


import {DashboardComponent} from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';

import {CrisisListComponent}   from './crisis-center/crisis-list.component';
import {CrisisCenterComponent}   from './crisis-center/crisis-center.component';

@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['Dashboard']">Dashboard</a><!--a点击事件-->
      <a [routerLink]="['Heroes']">Heroes</a>
      <a [routerLink]="['CrisisCenter']">Crisis Center</a>
    </nav>
    <router-outlet></router-outlet>
  `,
    styleUrls: ['./app-router/css/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        HeroService,
        DialogService
    ]
})
@RouteConfig([
    {
        path: 'router/dashboard',
        name: 'Dashboard',
        component: DashboardComponent,
        //useAsDefault: true
    },
    {
        path: 'router/detail/:id',
        name: 'HeroDetail',
        component: HeroDetailComponent
    },
    {
        path: 'router/heroes',
        name: 'Heroes',
        component: HeroesComponent
    },
    { // Crisis Center child route
        path: '/crisis-center/...',
        name: 'CrisisCenter',
        //component: CrisisListComponent,
        component: CrisisCenterComponent,
        useAsDefault: true
    },
    {path: '/disaster', name: 'Asteroid', redirectTo: ['CrisisCenter', 'CrisisDetail', {id:3}]}
])
export class AppComponent {
    title = 'Tour of Heroes';
}
