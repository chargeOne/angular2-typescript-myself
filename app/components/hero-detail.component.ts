/**
 * Created by zhuyan6 on 16/3/31.
 */
import {Component} from 'angular2/core';
import {Hero} from './../base/hero';

@Component ({
    selector: 'my-hero-detail',
    template:
        '<div *ngIf="hero">\
            <h1>{{title}}</h1>\
            <h2>{{hero.name}} details!</h2>\
            <div><label>id: </label>{{hero.id}}</div>\
            <div>\
                <label>name: </label>\
                <input value="ppp:{{hero.name}}" placeholder="name"/>\
                <input [(ngModel)]="hero.name" placeholder="name"/>\
            </div>\
        </div>',
    inputs: ['hero']
})

export class HeroDetailComponent {
    hero: Hero;
}