System.register(['angular2/platform/browser', './components/app.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, app_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            }],
        execute: function() {
            /*启动应用需要两样东西：浏览器bootstrap函数和应用的根组件AppComponent。然后调用bootstrap函数并传入根组件AppComponent。*/
            browser_1.bootstrap(app_component_1.AppComponent);
        }
    }
});
//# sourceMappingURL=main.js.map