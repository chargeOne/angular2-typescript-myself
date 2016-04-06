System.register(['../dialog.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var dialog_service_1;
    var CrisisDetailComponent;
    return {
        setters:[
            function (dialog_service_1_1) {
                dialog_service_1 = dialog_service_1_1;
            }],
        execute: function() {
            console.log("DialogService", dialog_service_1.DialogService);
            CrisisDetailComponent = (function () {
                function CrisisDetailComponent(_service, _router, _routeParams, _dialog) {
                    this._service = _service;
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._dialog = _dialog;
                }
                CrisisDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = +this._routeParams.get('id');
                    this._service.getCrisis(id).then(function (crisis) {
                        if (crisis) {
                            _this.editName = crisis.name;
                            _this.crisis = crisis;
                        }
                        else {
                            _this.gotoCrises();
                        }
                    });
                };
                CrisisDetailComponent.prototype.routerCanDeactivate = function (next, prev) {
                    // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged.
                    if (!this.crisis || this.crisis.name === this.editName) {
                        return true;
                    }
                    // Otherwise ask the user with the dialog service and return its
                    // promise which resolves to true or false when the user decides
                    return this._dialog.confirm('Discard changes?');
                };
                CrisisDetailComponent.prototype.cancel = function () {
                    this.editName = this.crisis.name;
                    this.gotoCrises();
                };
                CrisisDetailComponent.prototype.save = function () {
                    this.crisis.name = this.editName;
                    this.gotoCrises();
                };
                CrisisDetailComponent.prototype.gotoCrises = function () {
                    var crisisId = this.crisis ? this.crisis.id : null;
                    // Pass along the hero id if available
                    // so that the CrisisListComponent can select that hero.
                    // Add a totally useless `foo` parameter for kicks.
                    this._router.navigate(['CrisisList', { id: crisisId, foo: 'foo' }]);
                };
                return CrisisDetailComponent;
            }());
            exports_1("CrisisDetailComponent", CrisisDetailComponent);
        }
    }
});
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=crisis-detail.component.js.map