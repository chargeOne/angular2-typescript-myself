/**
 * Created by zhuyan6 on 16/3/30.
 */
import {Component,OnInit} from 'angular2/core';
import {Hero} from './../base/hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroDetail1Component} from './hero-detail-1.component';
import {HeroService} from './../service/hero.service';
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
@Component({
    selector: 'my-app',
    template:
            '<h2>My Heroes</h2>\
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

    directives: [HeroDetailComponent,HeroDetail1Component],
    providers: [HeroService],//注册provider
    styles:[`
        .selected {
          background-color: #CFD8DC !important;
          color: white;
        }
        .heroes {
          margin: 0 0 2em 0;
          list-style-type: none;
          padding: 0;
          width: 10em;
        }
        .heroes li {
          cursor: pointer;
          position: relative;
          left: 0;
          background-color: #EEE;
          margin: .5em;
          padding: .3em 0;
          height: 1.6em;
          border-radius: 4px;
        }
        .heroes li.selected:hover {
          background-color: #BBD8DC !important;
          color: white;
        }
        .heroes li:hover {
          color: #607D8B;
          background-color: #DDD;
          left: .1em;
        }
        .heroes .text {
          position: relative;
          top: -3px;
        }
        .heroes .badge {
          display: inline-block;
          font-size: small;
          color: white;
          padding: 0.8em 0.7em 0 0.7em;
          background-color: #607D8B;
          line-height: 1em;
          position: relative;
          left: -1px;
          top: -4px;
          height: 1.8em;
          margin-right: .8em;
          border-radius: 4px 0 0 4px;
        }
  `]
})
/*
* 一个名为AppComponent的空的类，后面可以再扩展：
* */
export class AppComponent implements OnInit{
    public title = 'Tour of Heroes:';
    public selectedHero: Hero ;
    private KeyValues:String;
    public heroes: Hero[];
    constructor(private _heroService: HeroService) { }
    getHeroes() {
        //this._heroService.getHeroes().then(heroes => {
        //    this.heroes = heroes;
        //    console.log("ppppp")
        //});
        this._heroService.getHeroesSlowly().then(heroes => {
            this.heroes = heroes;
            console.log("ppppp")
        });
    }
    ngOnInit() {
        this.getHeroes();
    }
    onSelect(hero: Hero) { this.selectedHero = hero; }
    onKeyUp(event:KeyboardEvent) {
        this.KeyValues += event.target['value'] + ' | ';
    }
    onKeyDown(value:string) {
        this.KeyValues += value + ' ||';
    }
}
