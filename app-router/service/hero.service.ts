/**
 * Created by zhuyan6 on 16/3/31.
 */
/*将数据的处理重构到单独的服务模块中*/
import {Injectable} from 'angular2/core';
import {HEROES} from './../data/mock-heroes';
import {Hero} from './../base/hero';

@Injectable()
export class HeroService {
    getHeroes() {
        return Promise.resolve(HEROES);
    }
    // See the "Take it slow" appendix
    //在HeroServise中添加getHeroesSlowly方法模拟延迟异步响应的处理：
    getHeroesSlowly() {
        return new Promise<Hero[]>(resolve =>{
                console.log("senddata=>");
                setTimeout(()=>resolve(HEROES), 2000) // 2 seconds
        });
    }
    getHero(id: number) {
        return Promise.resolve(HEROES).then(
                heroes => heroes.filter(hero => hero.id === id)[0]
        );
    }
}