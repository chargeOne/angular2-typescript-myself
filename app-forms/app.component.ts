import {Component}         from 'angular2/core';
import {UserFormComponent} from './user-form.component';
import {JQueryStatic} from './JQueryStatic';

console.log("*****:",window['$']);


var _JQueryStatic:JQueryStatic=new JQueryStatic().then(myJquery => {
  console.log("ppppp:",myJquery('.container'))
});

@Component({
  selector: 'my-app',
  template: '<user-form></user-form>',
  directives: [UserFormComponent]
})
export class AppComponent {

}

