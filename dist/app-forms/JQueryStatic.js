System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var JQueryStatic;
    return {
        setters:[],
        execute: function() {
            /**
             * Created by zhuyan6 on 16/4/5.
             * 获取第三方库的简单方法
             */
            JQueryStatic = (function () {
                function JQueryStatic() {
                    var _$ = window['$'];
                    if (_$) {
                        return Promise.resolve(_$);
                    }
                    else {
                        return new Promise(function (resolve) {
                            var JQueryStaticScript = document.getElementById('JQueryStatic');
                            if (JQueryStaticScript) {
                                JQueryStaticScript.onload = function (elm) {
                                    resolve(window['$']);
                                };
                            }
                            else {
                                JQueryStaticScript = document.createElement('script');
                                JQueryStaticScript.src = 'https://code.jquery.com/jquery-1.12.0.min.js';
                                document.head.appendChild(JQueryStaticScript);
                                JQueryStaticScript.onload = function (elm) {
                                    resolve(window['$']);
                                };
                            }
                        });
                    }
                }
                return JQueryStatic;
            }());
            exports_1("JQueryStatic", JQueryStatic);
        }
    }
});
//# sourceMappingURL=JQueryStatic.js.map