webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__developers_developers_component__ = __webpack_require__("../../../../../src/app/developers/developers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__developer_edit_developer_edit_component__ = __webpack_require__("../../../../../src/app/developer-edit/developer-edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__developers_developers_component__["a" /* DevelopersComponent */] },
    { path: 'developers/:id', component: __WEBPACK_IMPORTED_MODULE_3__developer_edit_developer_edit_component__["a" /* DeveloperEditComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".app {\n  width: 100%;\n  max-width: 600px;\n  margin: 0 auto;\n  padding: 20px;\n}\n\n.header {\n  text-align: center;\n}\n\n.app-content {\n  background-color: #dbe2e6;\n  padding: 20px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"app\">\n  <h1 class=\"header\">\n    {{ title }}\n  </h1>\n  <div class=\"app-content\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Arima';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__developers_developers_component__ = __webpack_require__("../../../../../src/app/developers/developers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__developer_edit_developer_edit_component__ = __webpack_require__("../../../../../src/app/developer-edit/developer-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__developer_service__ = __webpack_require__("../../../../../src/app/developer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__developers_developers_component__["a" /* DevelopersComponent */],
                __WEBPACK_IMPORTED_MODULE_5__developer_edit_developer_edit_component__["a" /* DeveloperEditComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__developer_service__["a" /* DeveloperService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/developer-edit/developer-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".developer {\n\n}\n\n.developer-back {\n  margin-bottom: 1rem;\n}\n\n.developer-edit-content {\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/developer-edit/developer-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"developer-edit\">\n  <div class=\"developer-back\">\n    <button (click)=\"goBack()\">< Go back</button>\n  </div>\n  <h2 class=\"developer-edit-title\">\n    Editing {{ developer.name }}\n  </h2>\n  <div class=\"developer-edit-content\">\n    <label>\n      Name:\n      <input [(ngModel)]=\"developer.name\" placeholder=\"name\" />\n    </label>\n    <label>\n      Description:\n      <textarea [(ngModel)]=\"developer.description\" placeholder=\"description\"></textarea>\n    </label>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/developer-edit/developer-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeveloperEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__developer__ = __webpack_require__("../../../../../src/app/developer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__developer_service__ = __webpack_require__("../../../../../src/app/developer.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DeveloperEditComponent = /** @class */ (function () {
    function DeveloperEditComponent(route, developerService, location) {
        this.route = route;
        this.developerService = developerService;
        this.location = location;
    }
    DeveloperEditComponent.prototype.ngOnInit = function () {
        this.getHero();
    };
    DeveloperEditComponent.prototype.getHero = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.developerService.getDeveloper(id)
            .subscribe(function (developer) { return _this.developer = developer; });
    };
    DeveloperEditComponent.prototype.goBack = function () {
        this.location.back();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__developer__["a" /* Developer */])
    ], DeveloperEditComponent.prototype, "developer", void 0);
    DeveloperEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-developer-edit',
            template: __webpack_require__("../../../../../src/app/developer-edit/developer-edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/developer-edit/developer-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__developer_service__["a" /* DeveloperService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]])
    ], DeveloperEditComponent);
    return DeveloperEditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/developer.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeveloperService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mock_developers__ = __webpack_require__("../../../../../src/app/mock-developers.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DeveloperService = /** @class */ (function () {
    function DeveloperService() {
    }
    DeveloperService.prototype.getDevelopers = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(__WEBPACK_IMPORTED_MODULE_2__mock_developers__["a" /* DEVELOPERS */]);
    };
    DeveloperService.prototype.getDeveloper = function (id) {
        return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(__WEBPACK_IMPORTED_MODULE_2__mock_developers__["a" /* DEVELOPERS */].find(function (developer) { return developer.id === id; }));
    };
    DeveloperService.prototype.addDeveloper = function (developer) {
        __WEBPACK_IMPORTED_MODULE_2__mock_developers__["a" /* DEVELOPERS */].push(developer);
        return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(developer);
    };
    DeveloperService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], DeveloperService);
    return DeveloperService;
}());



/***/ }),

/***/ "../../../../../src/app/developer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Developer; });
var Developer = /** @class */ (function () {
    function Developer() {
    }
    return Developer;
}());



/***/ }),

/***/ "../../../../../src/app/developers/developers.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".developers {\n\n}\n\n.developers-title {\n  margin-bottom: 2rem;\n}\n\n.developers-list {\n  list-style: none;\n  padding: 0;\n}\n\n.developers-item {\n  margin-bottom: 2rem;\n}\n\n.developers-item:last-child {\n  margin-bottom: 0;\n}\n\n.developers-add {\n  padding: 20px;\n  background-color: #edeff1;\n  -webkit-box-shadow: 0 2px 2px 0 #ccc;\n          box-shadow: 0 2px 2px 0 #ccc;\n  margin-top: 30px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/developers/developers.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"developers\">\n  <h2 class=\"developers-title\">Developers</h2>\n  <ul class=\"developers-list\">\n    <li *ngFor=\"let developer of developers\" class=\"developers-item\">\n      <h3 class=\"developers-item-name\">\n        {{developer.name}}\n      </h3>\n      <div class=\"developers-item-link\">\n        <button routerLink=\"/developers/{{developer.id}}\">\n          Edit Profile\n        </button>\n      </div>\n    </li>\n  </ul>\n  <div class=\"developers-add\">\n    <h3>Add new developer</h3>\n    <label>\n      Name:\n      <input #developerName />\n    </label>\n    <button\n      (click)=\"add(developerName.value); developerName.value=''\"\n    >\n      Add\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/developers/developers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DevelopersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__developer_service__ = __webpack_require__("../../../../../src/app/developer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DevelopersComponent = /** @class */ (function () {
    function DevelopersComponent(developerService, router) {
        this.developerService = developerService;
        this.router = router;
    }
    DevelopersComponent.prototype.ngOnInit = function () {
        this.getDevelopers();
    };
    DevelopersComponent.prototype.getDevelopers = function () {
        var _this = this;
        this.developerService.getDevelopers()
            .subscribe(function (developers) {
            _this.developers = developers;
        });
    };
    DevelopersComponent.prototype.add = function (name) {
        name = name.trim();
        if (!name) {
            return;
        }
        var data = {
            id: this.developers.length + 1,
            name: name
        };
        this.developerService.addDeveloper(data)
            .subscribe(function (developer) {
            // this.router.navigateByUrl(`developers/${developer.id}`);
        });
    };
    DevelopersComponent.prototype.onSelect = function (developer) {
        this.selectedDeveloper = developer;
    };
    DevelopersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-developers',
            template: __webpack_require__("../../../../../src/app/developers/developers.component.html"),
            styles: [__webpack_require__("../../../../../src/app/developers/developers.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__developer_service__["a" /* DeveloperService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], DevelopersComponent);
    return DevelopersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/mock-developers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DEVELOPERS; });
var DEVELOPERS = [
    { id: 1, name: 'Aritz', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, minus.' },
    { id: 2, name: 'Ugaitz', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, minus.' },
    { id: 3, name: 'Iñigo', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, minus.' },
    { id: 4, name: 'Julio', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, minus.' },
];


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map