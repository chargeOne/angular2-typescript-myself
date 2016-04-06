/**
 * Created by zhuyan6 on 16/3/30.
 */
import {bootstrap,bind}    from 'angular2/platform/browser'
import {AppComponent} from './components/app.component'
import {ROUTER_PROVIDERS} from 'angular2/router';


/*启动应用需要两样东西：浏览器bootstrap函数和应用的根组件AppComponent。然后调用bootstrap函数并传入根组件AppComponent。*/
//bootstrap(AppComponent,[ROUTER_PROVIDERS,bind(APP_BASE_HREF).toValue(location.pathname)]);
bootstrap(AppComponent,[ROUTER_PROVIDERS]);


