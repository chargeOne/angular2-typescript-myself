import {Component, OnInit} from 'angular2/core';
import { Router } from 'angular2/router';
import {Hero} from './../base/hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './../service/hero.service';

@Component({
    selector: 'my-heroes',
    templateUrl: './app-router/html/heroes.component.html',
    styleUrls:  ['./app-router/css/heroes.component.css'],
    directives: [HeroDetailComponent]
})
export class HeroesComponent implements OnInit {
    private _router: Router;
    private _heroService: HeroService;
    constructor() {
        this._heroService= new HeroService();
        this._router = new Router();
    }
    ngOnInit() {
        this.getHeroes();
    }

    title = 'Tour of Heroes';
    heroes: Hero[];
    selectedHero: Hero;
    onSelect(hero: Hero) { this.selectedHero = hero; }

    getHeroes() {
        this._heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    gotoDetail() {
        console.log("00000000000")
        this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
    }
}