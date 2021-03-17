(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../admin-panel/admin-panel.module": [
		"./src/app/admin-panel/admin-panel.module.ts",
		"default~admin-panel-admin-panel-module~journal-journal-module~login-login-module~progress-progress-m~2576f8e9",
		"default~admin-panel-admin-panel-module~journal-journal-module~progress-progress-module~shell-shell-m~474f853f",
		"default~admin-panel-admin-panel-module~journal-journal-module~progress-progress-module~shell-shell-m~3991df33",
		"default~admin-panel-admin-panel-module~journal-journal-module~login-login-module~shell-shell-module",
		"default~admin-panel-admin-panel-module~journal-journal-module~shell-shell-module~student-book-studen~7409e67d",
		"default~admin-panel-admin-panel-module~journal-journal-module~shell-shell-module",
		"default~admin-panel-admin-panel-module~journal-journal-module~student-book-student-book-module",
		"common",
		"admin-panel-admin-panel-module"
	],
	"../journal/journal.module": [
		"./src/app/journal/journal.module.ts",
		"default~admin-panel-admin-panel-module~journal-journal-module~login-login-module~progress-progress-m~2576f8e9",
		"default~admin-panel-admin-panel-module~journal-journal-module~progress-progress-module~shell-shell-m~474f853f",
		"default~admin-panel-admin-panel-module~journal-journal-module~progress-progress-module~shell-shell-m~3991df33",
		"default~admin-panel-admin-panel-module~journal-journal-module~login-login-module~shell-shell-module",
		"default~admin-panel-admin-panel-module~journal-journal-module~shell-shell-module~student-book-studen~7409e67d",
		"default~admin-panel-admin-panel-module~journal-journal-module~shell-shell-module",
		"default~admin-panel-admin-panel-module~journal-journal-module~student-book-student-book-module",
		"common",
		"journal-journal-module"
	],
	"../progress/progress.module": [
		"./src/app/progress/progress.module.ts",
		"default~admin-panel-admin-panel-module~journal-journal-module~login-login-module~progress-progress-m~2576f8e9",
		"default~admin-panel-admin-panel-module~journal-journal-module~progress-progress-module~shell-shell-m~474f853f",
		"default~admin-panel-admin-panel-module~journal-journal-module~progress-progress-module~shell-shell-m~3991df33",
		"common",
		"progress-progress-module"
	],
	"../shell/shell.module": [
		"./src/app/shell/shell.module.ts",
		"default~admin-panel-admin-panel-module~journal-journal-module~login-login-module~progress-progress-m~2576f8e9",
		"default~admin-panel-admin-panel-module~journal-journal-module~progress-progress-module~shell-shell-m~474f853f",
		"default~admin-panel-admin-panel-module~journal-journal-module~progress-progress-module~shell-shell-m~3991df33",
		"default~admin-panel-admin-panel-module~journal-journal-module~login-login-module~shell-shell-module",
		"default~admin-panel-admin-panel-module~journal-journal-module~shell-shell-module~student-book-studen~7409e67d",
		"default~admin-panel-admin-panel-module~journal-journal-module~shell-shell-module",
		"common",
		"shell-shell-module"
	],
	"../student-book/student-book.module": [
		"./src/app/student-book/student-book.module.ts",
		"default~admin-panel-admin-panel-module~journal-journal-module~login-login-module~progress-progress-m~2576f8e9",
		"default~admin-panel-admin-panel-module~journal-journal-module~progress-progress-module~shell-shell-m~474f853f",
		"default~admin-panel-admin-panel-module~journal-journal-module~shell-shell-module~student-book-studen~7409e67d",
		"default~admin-panel-admin-panel-module~journal-journal-module~student-book-student-book-module",
		"common",
		"student-book-student-book-module"
	],
	"./login/login.module": [
		"./src/app/login/login.module.ts",
		"default~admin-panel-admin-panel-module~journal-journal-module~login-login-module~progress-progress-m~2576f8e9",
		"default~admin-panel-admin-panel-module~journal-journal-module~login-login-module~shell-shell-module",
		"common",
		"login-login-module"
	],
	"./shell/shell.module": [
		"./src/app/shell/shell.module.ts",
		"default~admin-panel-admin-panel-module~journal-journal-module~login-login-module~progress-progress-m~2576f8e9",
		"default~admin-panel-admin-panel-module~journal-journal-module~progress-progress-module~shell-shell-m~474f853f",
		"default~admin-panel-admin-panel-module~journal-journal-module~progress-progress-module~shell-shell-m~3991df33",
		"default~admin-panel-admin-panel-module~journal-journal-module~login-login-module~shell-shell-module",
		"default~admin-panel-admin-panel-module~journal-journal-module~shell-shell-module~student-book-studen~7409e67d",
		"default~admin-panel-admin-panel-module~journal-journal-module~shell-shell-module",
		"common",
		"shell-shell-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/admin-panel/admin.guard.ts":
/*!********************************************!*\
  !*** ./src/app/admin-panel/admin.guard.ts ***!
  \********************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminGuard = /** @class */ (function () {
    function AdminGuard(_authService, router) {
        this._authService = _authService;
        this.router = router;
    }
    AdminGuard.prototype.canLoad = function () {
        return this.canActivateInternal();
    };
    AdminGuard.prototype.canActivate = function () {
        return this.canActivateInternal();
    };
    AdminGuard.prototype.canActivateInternal = function () {
        if (this._authService.isAdmin()) {
            return true;
        }
        this.router.navigate([this._authService.defaultRoute()]);
        return false;
    };
    AdminGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AdminGuard);
    return AdminGuard;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shell_shell_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shell/shell.guard */ "./src/app/shell/shell.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: 'login',
        loadChildren: './login/login.module#LoginModule'
    },
    {
        canLoad: [_shell_shell_guard__WEBPACK_IMPORTED_MODULE_2__["ShellGuard"]],
        canActivate: [_shell_shell_guard__WEBPACK_IMPORTED_MODULE_2__["ShellGuard"]],
        path: 'shell',
        loadChildren: './shell/shell.module#ShellModule'
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'eSchool';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/token-interceptor.service */ "./src/app/services/token-interceptor.service.ts");
/* harmony import */ var _services_admingroups_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/admingroups.service */ "./src/app/services/admingroups.service.ts");
/* harmony import */ var _services_admin_subjects_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/admin-subjects.service */ "./src/app/services/admin-subjects.service.ts");
/* harmony import */ var _services_class_schedule_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/class-schedule.service */ "./src/app/services/class-schedule.service.ts");
/* harmony import */ var _services_admin_students_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/admin-students.service */ "./src/app/services/admin-students.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_login_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/login/login.guard */ "./src/app/login/login/login.guard.ts");
/* harmony import */ var _admin_panel_admin_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin-panel/admin.guard */ "./src/app/admin-panel/admin.guard.ts");
/* harmony import */ var _services_refresh_token_interceptor_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/refresh-token-interceptor.service */ "./src/app/services/refresh-token-interceptor.service.ts");
/* harmony import */ var _shell_shell_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shell/shell.guard */ "./src/app/shell/shell.guard.ts");
/* harmony import */ var _services_teachers_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/teachers.service */ "./src/app/services/teachers.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
            ],
            providers: [
                _services_admingroups_service__WEBPACK_IMPORTED_MODULE_5__["AdmingroupsService"],
                _services_admin_subjects_service__WEBPACK_IMPORTED_MODULE_6__["AdminSubjectsService"],
                _services_admin_students_service__WEBPACK_IMPORTED_MODULE_8__["StudentsService"],
                _login_login_login_guard__WEBPACK_IMPORTED_MODULE_11__["LoginGuard"],
                _services_class_schedule_service__WEBPACK_IMPORTED_MODULE_7__["ClassScheduleService"],
                _admin_panel_admin_guard__WEBPACK_IMPORTED_MODULE_12__["AdminGuard"],
                _shell_shell_guard__WEBPACK_IMPORTED_MODULE_14__["ShellGuard"],
                _services_teachers_service__WEBPACK_IMPORTED_MODULE_15__["TeachersService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
                    useClass: _services_refresh_token_interceptor_service__WEBPACK_IMPORTED_MODULE_13__["RefreshTokenInterceptorService"],
                    multi: true
                },
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
                    useClass: _services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_4__["TokenInterceptorService"],
                    multi: true
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/login/login/login.guard.ts":
/*!********************************************!*\
  !*** ./src/app/login/login/login.guard.ts ***!
  \********************************************/
/*! exports provided: LoginGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginGuard", function() { return LoginGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginGuard = /** @class */ (function () {
    function LoginGuard(_authService, router) {
        this._authService = _authService;
        this.router = router;
    }
    LoginGuard.prototype.canLoad = function () {
        return this.isActivated();
    };
    LoginGuard.prototype.canActivate = function () {
        return this.isActivated();
    };
    LoginGuard.prototype.isActivated = function () {
        if (this._authService.loggedIn()) {
            this.router.navigate([this._authService.defaultRoute()]);
            return true;
        }
        return true;
    };
    LoginGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginGuard);
    return LoginGuard;
}());



/***/ }),

/***/ "./src/app/services/admin-students.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/admin-students.service.ts ***!
  \****************************************************/
/*! exports provided: StudentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentsService", function() { return StudentsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StudentsService = /** @class */ (function () {
    function StudentsService(http) {
        this.http = http;
    }
    StudentsService.prototype.getClasses = function () {
        return this.http.get('classes').map(function (response) {
            return response.data;
        });
    };
    StudentsService.prototype.getStudents = function (idClass) {
        return this.http.get('students/classes/' + idClass).map(function (response) {
            return response.data;
        });
    };
    StudentsService.prototype.getStudent = function (idStudent) {
        return this.http.get('students/' + idStudent).map(function (response) {
            return response.data;
        });
    };
    StudentsService.prototype.addStudent = function (student) {
        return this.http.post('students', student).map(function (response) {
            return response.data;
        });
    };
    StudentsService.prototype.changeStudent = function (student) {
        return this.http.put("/admin/students/" + student.id, student).map(function (response) {
            return response.data;
        });
    };
    StudentsService.prototype.deleteStudent = function (student) {
        return this.http.patch("/users/" + student.id, student).map(function (response) {
            return response.data;
        });
    };
    StudentsService.prototype.sendStudentsData = function (currentClassId) {
        return this.http.get("/users/credentials/students?classId=" + currentClassId).map(function (response) {
            return response.data;
        });
    };
    StudentsService.prototype.checkStudentLogin = function (student) {
        return this.http.head("/users/login/" + student.login + "/");
    };
    StudentsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], StudentsService);
    return StudentsService;
}());



/***/ }),

/***/ "./src/app/services/admin-subjects.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/admin-subjects.service.ts ***!
  \****************************************************/
/*! exports provided: AdminSubjectsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminSubjectsService", function() { return AdminSubjectsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminSubjectsService = /** @class */ (function () {
    function AdminSubjectsService(_http) {
        this._http = _http;
    }
    AdminSubjectsService.prototype.getSubjectsList = function () {
        return this._http.get('subjects').map(function (response) { return response.data; });
    };
    AdminSubjectsService.prototype.postSubject = function (subject) {
        return this._http
            .post('subjects', subject)
            .map(function (response) { return response.data; });
    };
    AdminSubjectsService.prototype.putSubject = function (subject) {
        return this._http.put("subjects/" + subject.subjectId, subject).map(function (response) { return response.data; });
    };
    AdminSubjectsService.prototype.getSubjectsListForClass = function (classId) {
        return this._http.get("subjects?classId=" + classId).map(function (response) { return response.data; });
    };
    AdminSubjectsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AdminSubjectsService);
    return AdminSubjectsService;
}());



/***/ }),

/***/ "./src/app/services/admingroups.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/admingroups.service.ts ***!
  \*************************************************/
/*! exports provided: AdmingroupsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmingroupsService", function() { return AdmingroupsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AdmingroupsService = /** @class */ (function () {
    function AdmingroupsService(http) {
        this.http = http;
    }
    AdmingroupsService.prototype.getClasses = function () {
        return this.http.get('classes')
            .map(function (response) {
            return response.data;
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    AdmingroupsService.prototype.saveClass = function (group) {
        if (Object(util__WEBPACK_IMPORTED_MODULE_6__["isNumber"])(group.id)) {
            return this.http.put("classes/" + group.id, group)
                .map(function (response) {
                return response.data;
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
        }
        else {
            return this.http.post('classes', group)
                .map(function (response) {
                return response.data;
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
        }
    };
    AdmingroupsService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
        }
        else {
            console.error({ error: status }, { error: error });
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    };
    AdmingroupsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AdmingroupsService);
    return AdmingroupsService;
}());



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(httpClient, router) {
        this.httpClient = httpClient;
        this.router = router;
        this.Url = 'signin';
        this.refreshUrl = 'refresh';
        this.tokenRefreshMinPeriod = 1000 * 60 * 5;
    }
    AuthenticationService.prototype.login = function (userName, password) {
        var _this = this;
        var userData = { username: userName, password: password };
        return this.httpClient
            .post(this.Url, userData, { observe: 'response' })
            .map(function (response) {
            if (response.status === 204) {
                _this.setToken(response.headers.get('Authorization'));
            }
            return response;
        });
    };
    AuthenticationService.prototype.changePassword = function (password, resetToken) {
        return this.httpClient.put('resetPassword', { password: password, token: resetToken });
    };
    AuthenticationService.prototype.requestPasswordReset = function (query) {
        return this.httpClient.get("requestPasswordReset?query=" + query);
    };
    Object.defineProperty(AuthenticationService.prototype, "idUser", {
        get: function () {
            if (this._idUser) {
                return this._idUser;
            }
            else {
                var token = localStorage.getItem('authToken');
                if (token) {
                    var jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]();
                    var decodedToken = jwtHelper.decodeToken(token);
                    this._idUser = decodedToken.jti;
                    return this._idUser;
                }
                else {
                    console.error('Token not found!!!');
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    AuthenticationService.prototype.getToken = function () {
        return localStorage.getItem('authToken');
    };
    AuthenticationService.prototype.logOut = function () {
        this.tokenRefreshTimestamp = null;
        localStorage.removeItem('authToken');
        this.router.navigate(['/login']);
        if (this.tokenExpireTimerId) {
            clearTimeout(this.tokenExpireTimerId);
        }
    };
    AuthenticationService.prototype.loggedIn = function () {
        return !!localStorage.getItem('authToken');
    };
    AuthenticationService.prototype.getRole = function () {
        return this.getDecodedToken().Roles.authority;
    };
    AuthenticationService.prototype.getRoleLocalizedName = function () {
        switch (this.getRole()) {
            case 'ROLE_ADMIN':
                return 'Адміністратор';
            case 'ROLE_TEACHER':
                return 'Вчитель';
            case 'ROLE_USER':
                return 'Користувач';
        }
    };
    AuthenticationService.prototype.defaultRoute = function () {
        var route;
        var role = this.getRole();
        switch (role) {
            case 'ROLE_ADMIN':
                route = '/shell/admin-panel/';
                break;
            case 'ROLE_TEACHER':
                route = '/shell/journal';
                break;
            case 'ROLE_USER':
                route = '/shell/student-book';
                break;
        }
        return route;
    };
    AuthenticationService.prototype.isAdmin = function () {
        return this.getRole() === 'ROLE_ADMIN';
    };
    AuthenticationService.prototype.refreshToken = function () {
        var _this = this;
        if (!this.loggedIn()) {
            return;
        }
        var curTime = new Date().getTime();
        if (this.tokenRefreshTimestamp) {
            var timeFromlastRefresh = curTime - this.tokenRefreshTimestamp;
            if (timeFromlastRefresh < this.tokenRefreshMinPeriod) {
                return;
            }
        }
        this.httpClient.get(this.refreshUrl, { observe: 'response' })
            .subscribe(function (response) {
            _this.setToken(response.headers.get('Authorization'));
        }, function (err) {
            // ---
            // problem: backend should return 401 "Token Expired" if token is expired but returns 400 "Bad Token"
            // hack: if response code is 400 call onTokenExpired
            if (err.status === 400) {
                _this.onTokenExpired();
            }
            // ---
            console.warn('failed to refresh token with error: ' + JSON.stringify(err));
        });
    };
    AuthenticationService.prototype.getDecodedToken = function () {
        var token = this.getToken();
        if (!token) {
            return null;
        }
        var jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]();
        var decodedToken = jwtHelper.decodeToken(token);
        return decodedToken;
    };
    AuthenticationService.prototype.getCurrentUserId = function () {
        return this.getDecodedToken().jti;
    };
    AuthenticationService.prototype.setToken = function (token) {
        var curTime = new Date().getTime();
        this.tokenRefreshTimestamp = curTime;
        localStorage.setItem('authToken', token);
        this.setTokenExpireTimeout();
    };
    AuthenticationService.prototype.setTokenExpireTimeout = function () {
        if (this.tokenExpireTimerId) {
            clearTimeout(this.tokenExpireTimerId);
        }
        var token = this.getDecodedToken();
        var timeoutSeconds = token.exp - token.iat;
        var thisRef = this;
        this.tokenExpireTimerId = setTimeout(function () { thisRef.onTokenExpired(); }, timeoutSeconds * 1000);
    };
    AuthenticationService.prototype.onTokenExpired = function () {
        this.logOut();
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/services/class-schedule.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/class-schedule.service.ts ***!
  \****************************************************/
/*! exports provided: ClassScheduleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassScheduleService", function() { return ClassScheduleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClassScheduleService = /** @class */ (function () {
    function ClassScheduleService(http) {
        this.http = http;
    }
    ClassScheduleService.prototype.getClasses = function () {
        return this.http.get('classes').map(function (response) {
            response.data.forEach(function (item) {
                item.label = item.className;
                item.value = item.id;
            });
            return response.data;
        });
    };
    ClassScheduleService.prototype.getScheduleSubjects = function () {
        return this.http.get('subjects').map(function (response) {
            response.data.forEach(function (item) {
                item.label = item.subjectName;
                item.value = item.subjectId;
            });
            return response.data;
        });
    };
    ClassScheduleService.prototype.postSchedule = function (schedule) {
        return this.http
            .post('classes/' + schedule.className.id + '/schedule', schedule)
            .map(function (response) {
            return response.data;
        });
    };
    ClassScheduleService.prototype.getSchedule = function (classId) {
        return this.http
            .get('classes/' + classId + '/schedule')
            .map(function (response) {
            return response.data;
        });
    };
    ClassScheduleService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ClassScheduleService);
    return ClassScheduleService;
}());



/***/ }),

/***/ "./src/app/services/refresh-token-interceptor.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/services/refresh-token-interceptor.service.ts ***!
  \***************************************************************/
/*! exports provided: RefreshTokenInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefreshTokenInterceptorService", function() { return RefreshTokenInterceptorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication.service */ "./src/app/services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RefreshTokenInterceptorService = /** @class */ (function () {
    function RefreshTokenInterceptorService(authService) {
        this.authService = authService;
    }
    RefreshTokenInterceptorService.prototype.intercept = function (request, next) {
        if (!request.url.endsWith('refresh')) {
            this.authService.refreshToken();
        }
        return next.handle(request);
    };
    RefreshTokenInterceptorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], RefreshTokenInterceptorService);
    return RefreshTokenInterceptorService;
}());



/***/ }),

/***/ "./src/app/services/teachers.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/teachers.service.ts ***!
  \**********************************************/
/*! exports provided: TeachersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeachersService", function() { return TeachersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TeachersService = /** @class */ (function () {
    function TeachersService(http) {
        this.http = http;
        this.calendarSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({
            firstDayOfWeek: 1,
            dayNames: [
                'Неділя',
                'Понеділок',
                'Вівторок',
                'Середа',
                'Четвер',
                'П\'ятниця',
                'Субота'
            ],
            dayNamesShort: ['Нед', 'Пон', 'Вів', 'Сер', 'Чет', 'П\'ят', 'Суб'],
            dayNamesMin: ['нд', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'],
            monthNames: [
                'Січень',
                'Лютий',
                'Березень',
                'Квітень',
                'Травень',
                'Червень',
                'Липень',
                'Серпень',
                'Вересень',
                'Жовтень',
                'Листопад',
                'Грудень'
            ],
            monthNamesShort: [
                'Січ',
                'Лют',
                'Бер',
                'Кві',
                'Тра',
                'Чер',
                'Лип',
                'Сер',
                'Вер',
                'Жов',
                'Лис',
                'Гру'
            ],
            today: 'Сьогодні',
            clear: 'Clear'
        });
        this.currentCalendar = this.calendarSource.asObservable();
    }
    TeachersService.prototype.formatDate = function (date) {
        var d = new Date(date);
        var year = d.getFullYear();
        var month = (d.getMonth() + 1).toString();
        var day = d.getDate().toString();
        if (month.length < 2) {
            month = '0' + month;
        }
        if (day.length < 2) {
            day = '0' + day;
        }
        return [year, month, day].join('-');
    };
    TeachersService.prototype.getTeachers = function () {
        return this.http.get('teachers').map(function (response) {
            return response.data;
        });
    };
    TeachersService.prototype.postTeacher = function (teacher) {
        return this.http
            .post('teachers', teacher)
            .map(function (response) {
            return response.data;
        });
    };
    TeachersService.prototype.putTeacher = function (teacher) {
        return this.http
            .put("/admin/teachers/" + teacher.id, teacher)
            .map(function (response) {
            return response.data;
        });
    };
    TeachersService.prototype.getTeacherBy = function (id) {
        return this.http.get("teachers/" + id).map(function (response) {
            return response.data;
        });
    };
    TeachersService.prototype.deactivateTeacher = function (teacher) {
        return this.http
            .patch("/users/" + teacher.id, teacher)
            .map(function (response) {
            return response.data;
        });
    };
    TeachersService.prototype.sendDataTeachers = function () {
        return this.http
            .get('/users/credentials/teachers')
            .map(function (response) {
            return response.data;
        });
    };
    TeachersService.prototype.checkLoginTeacher = function (teacher) {
        return this.http
            .head("/users/login/" + teacher.login + "/")
            .map(function (response) {
            return response;
        });
    };
    TeachersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TeachersService);
    return TeachersService;
}());



/***/ }),

/***/ "./src/app/services/token-interceptor.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/token-interceptor.service.ts ***!
  \*******************************************************/
/*! exports provided: TokenInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function() { return TokenInterceptorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TokenInterceptorService = /** @class */ (function () {
    function TokenInterceptorService(authService, router) {
        this.authService = authService;
        this.router = router;
        this.baseUrl = 'http://18.189.184.188:8080';
        this.allowedUrl = ['/login', '/login/', '/login/request-password', '/login/request-password/', '/login/password', '/login/password/'];
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE',
                'Access-Control-Allow-Headers': 'accept, content-type'
            })
        };
    }
    TokenInterceptorService.prototype.intercept = function (req, next) {
        var _this = this;
        var reqWithUrl = req.clone({
            url: this.appendBaseUrl(req.url)
        });
        var token = this.authService.getToken();
        if (token == null || token === '') {
            if (this.allowedUrl.indexOf(this.router.url.replace(/[?]+.*/g, '')) < 0) {
                this.router.navigate(['/login']);
            }
            return next.handle(reqWithUrl);
        }
        var tokenizedReq = reqWithUrl.clone({
            headers: req.headers.set('Authorization', token)
        });
        return next
            .handle(tokenizedReq)
            .catch(function (errorResponse) {
            if (errorResponse.status === 401) {
                _this.authService.logOut();
                _this.router.navigate(['/login']);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(errorResponse);
        });
    };
    TokenInterceptorService.prototype.appendBaseUrl = function (url) {
        if (url.startsWith('http')) {
            return url;
        }
        if (!url.startsWith('/')) {
            url = '/' + url;
        }
        return this.baseUrl + url;
    };
    TokenInterceptorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], TokenInterceptorService);
    return TokenInterceptorService;
}());



/***/ }),

/***/ "./src/app/shell/shell.guard.ts":
/*!**************************************!*\
  !*** ./src/app/shell/shell.guard.ts ***!
  \**************************************/
/*! exports provided: ShellGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShellGuard", function() { return ShellGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShellGuard = /** @class */ (function () {
    function ShellGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ShellGuard.prototype.canLoad = function () {
        return this.isAllowed();
    };
    ShellGuard.prototype.canActivate = function () {
        return this.isAllowed();
    };
    ShellGuard.prototype.isAllowed = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    };
    ShellGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ShellGuard);
    return ShellGuard;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/travis/build/didukh86/final_project/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map