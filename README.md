tsconfig.json: TypeScript配置文件

typings.json: 一些js库扩展了JavaScript的特性和语法，但是TypeScript编译器并不识别，因此需要在typings.json文件中配置TypeScript类型定义文件

package.json :

        angular2：我们所使用的框架。

        system.js：兼容ES2015模块规范的动态模块加载器，也可以使用其他库代替，例如webpack。
                   是一个通用Javascript模块加载器，可以在浏览器和NodeJS中加载ES6模块 AMD CommonJS 和全局脚本。
                   参考:
                        https://github.com/systemjs/systemjs/blob/master/docs/config-api.md
                        http://www.ruanyifeng.com/blog/2015/02/strong-typing-javascript.html

        Polyfills：polifill插件消除不同浏览器之间JavaScript实现的差别。包括：

            es6-promise：Angular需要浏览器支持ES2015中的promise。即使是支持ES2015 promise的浏览器，我们也需要es6-promise，为了和最新版的zone.js一起使用。

            es6-shim：为全局上下文（window）提供ES2016特性。开发者可以使用能提供同样的核心API的插件代替。

            reflect-metadata：Angular和TypeScript共享的一个依赖。开发者应该可以在不升级Angular的情况下更新TypeScript包，这就是为什么说是与应用的依赖而不是Angular的依赖。

            rxjs：一个提供Observable规范的插件。
                  Angular.js的Promise API提供了异步处理，但是AngularJS只有很少的异步处理库支持，如果你写复杂的异步处理功能，需要自己编写库包。
                  而Reactive Extensions for JavaScript (RxJS)则提供强大的reactive异步处理。
                  RxJS中添加了Observable.fromPromise功能，实现RxJS和AngularJS Promise衔接。
                  参考:http://www.jdon.com/45894

            zone.js：一个提供Zone规范的插件。
                     在ng2的开发过程中，Angular团队为我们带来了一个新的库 – zone.js。
                     zone.js的设计灵感来源于Dart语言，它描述JavaScript执行过程的上下文，
                     可以在异步任务之间进行持久性传递，它类似于Java中的TLS（thread-local storage: 线程本地存储）技术，
                     zone.js则是将TLS引入到JavaScript语言中的实现框架。
                     参考:http://www.cnblogs.com/whitewolf/p/zone-js.html


        npm start：在监控模式下运行编译器同时启动服务
        npm run tsc：运行TypeScript编译器
        npm run tsc:w：在监控模式下运行TypeScript编译器（进程会一直运行，监控TypeScript文件的变化，有变化时就重新编译）
        npm run lite：运行lite-server，一个轻量级静态文件服务器
        npm run typings：运行typings工具
        npm postinstall：npm完成包的安装后自动调用该命令，用于安装应用需要的TypeScript定义文件

