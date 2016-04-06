/**
 * Created by zhuyan6 on 16/4/5.
 * 获取第三方库的简单方法
 */
export class JQueryStatic {
    constructor() {
        var _$=window['$'];
        if(_$) {
            return Promise.resolve(_$);
        }else {
            return new Promise(resolve =>{
                var JQueryStaticScript=document.getElementById('JQueryStatic');

                if(JQueryStaticScript) {
                    JQueryStaticScript.onload=function(elm):void {
                        resolve(window['$']);
                    }
                }else {
                    JQueryStaticScript=document.createElement('script');
                    JQueryStaticScript.src='https://code.jquery.com/jquery-1.12.0.min.js';
                    document.head.appendChild(JQueryStaticScript);
                    JQueryStaticScript.onload=function(elm):void {
                        resolve(window['$']);
                    };
                }

            });
        }


    }
}