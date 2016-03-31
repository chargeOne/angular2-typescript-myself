/**
 * Created by zhuyan6 on 16/3/31.
 */
import {Component} from 'angular2/core';
import {Hero} from './../base/hero';

@Component ({
    selector: 'my-hero-detail-1',
    template:
        '<div *ngIf="hero1">\
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
})

export class HeroDetail1Component {
    hero1: Hero;
}