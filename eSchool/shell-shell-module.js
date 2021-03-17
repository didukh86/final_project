(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shell-shell-module"],{

/***/ "./node_modules/primeng/sidebar.js":
/*!*****************************************!*\
  !*** ./node_modules/primeng/sidebar.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/sidebar/sidebar */ "./node_modules/primeng/components/sidebar/sidebar.js"));

/***/ }),

/***/ "./src/app/shell/shell-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/shell/shell-routing.module.ts ***!
  \***********************************************/
/*! exports provided: ShellRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShellRoutingModule", function() { return ShellRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shell_shell_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shell/shell.component */ "./src/app/shell/shell/shell.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _shell_shell_component__WEBPACK_IMPORTED_MODULE_2__["ShellComponent"],
        children: [{
                path: 'admin-panel',
                loadChildren: '../admin-panel/admin-panel.module#AdminPanelModule'
            },
            {
                path: 'journal',
                loadChildren: '../journal/journal.module#JournalModule'
            },
            {
                path: 'progress',
                loadChildren: '../progress/progress.module#ProgressModule'
            },
            {
                path: 'student-book',
                loadChildren: '../student-book/student-book.module#StudentBookModule'
            }]
    }
];
var ShellRoutingModule = /** @class */ (function () {
    function ShellRoutingModule() {
    }
    ShellRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ShellRoutingModule);
    return ShellRoutingModule;
}());



/***/ }),

/***/ "./src/app/shell/shell.module.ts":
/*!***************************************!*\
  !*** ./src/app/shell/shell.module.ts ***!
  \***************************************/
/*! exports provided: ShellModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShellModule", function() { return ShellModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shell_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shell-routing.module */ "./src/app/shell/shell-routing.module.ts");
/* harmony import */ var _shell_shell_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shell/shell.component */ "./src/app/shell/shell/shell.component.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/toast.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_toast__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/sidebar */ "./node_modules/primeng/sidebar.js");
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_sidebar__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _services_data_sharing_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/data-sharing.service */ "./src/app/services/data-sharing.service.ts");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _services_admin_students_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/admin-students.service */ "./src/app/services/admin-students.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var ShellModule = /** @class */ (function () {
    function ShellModule() {
    }
    ShellModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shell_routing_module__WEBPACK_IMPORTED_MODULE_2__["ShellRoutingModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_4__["ToolbarModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_4__["ButtonModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_4__["SplitButtonModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_4__["MenubarModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_4__["MenuModule"],
                primeng_toast__WEBPACK_IMPORTED_MODULE_5__["ToastModule"],
                primeng_dropdown__WEBPACK_IMPORTED_MODULE_9__["DropdownModule"],
                primeng_sidebar__WEBPACK_IMPORTED_MODULE_7__["SidebarModule"]
            ],
            declarations: [_shell_shell_component__WEBPACK_IMPORTED_MODULE_3__["ShellComponent"]],
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"], _services_data_sharing_service__WEBPACK_IMPORTED_MODULE_8__["DataSharingService"], _services_admin_students_service__WEBPACK_IMPORTED_MODULE_10__["StudentsService"]]
        })
    ], ShellModule);
    return ShellModule;
}());



/***/ }),

/***/ "./src/app/shell/shell/shell.component.html":
/*!**************************************************!*\
  !*** ./src/app/shell/shell/shell.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-toast [style]=\"{marginTop: '80px'}\"></p-toast>\n<p-toolbar>\n  <div class=\"ui-toolbar-group-left\">\n    <button pButton type=\"button\" (click)=\"homeButtonClicked()\"><i class=\"fas fa-home home\"></i></button>\n  </div>\n  <div class=\"ui-toolbar-group-right\">\n    <button type=\"text\" (click)=\"displaySidebar = !displaySidebar\" pButton icon=\"fas fa-user user\" class=\"userButton\"></button>\n    <span *ngIf='userFullName != \"\"' class=\"userName\">{{userFullName}}</span>\n  </div>\n</p-toolbar>\n<!-- Sidebar setup -->\n<p-sidebar [(visible)]=\"displaySidebar\" position=\"right\" class=\"user-profile\">\n  <div class=\"student-img\">\n    <img src=\"assets/avatar.png\" class=\"sidebar-avatar\">\n  </div>\n  <h3>{{userRoleLabel}}</h3>\n  <h1 *ngIf='userFullName != \"\"'>{{userFullName}}</h1>\n  <div class=\"action-buttons\">\n    <button type=\"text\" (click)=\"editActiveUser()\" pButton icon=\"pi pi-pencil\" label=\"{{editActiveUserLabel}}\" class=\"ui-button ui-button-info editUserBtn\"></button>\n    <button type=\"text\" (click)=\"LogOut()\" pButton icon=\"pi pi-sign-out\" label=\"{{logOutLabel}}\" class=\"ui-button-warning logOutBtn\"></button>\n  </div>\n  <img src=\"/assets/schoolLogo.png\" alt=\"Логотип\" class=\"admin-panel-img\" />\n</p-sidebar>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/shell/shell/shell.component.scss":
/*!**************************************************!*\
  !*** ./src/app/shell/shell/shell.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ui-toolbar-group-left .home {\n  font-size: 22px;\n  vertical-align: middle;\n  margin: 0px 10px -20px 8px; }\n\n.ui-toolbar-group-right {\n  font-size: 22px; }\n\n.ui-toolbar-group-right .ui-button {\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    display: block;\n    height: 50px;\n    width: 50px;\n    border-radius: 50%;\n    background-color: #8f8f8f;\n    border-color: #8f8f8f; }\n\n.editUserBtn {\n  display: none; }\n\n.userButton {\n  float: right; }\n\n.userName {\n  float: right;\n  font-size: 14px;\n  display: inline-block;\n  margin-top: 15px; }\n\n.admin-panel-img {\n  width: 100px;\n  height: 100px;\n  position: absolute;\n  bottom: 25px;\n  right: 60px; }\n\n:host ::ng-deep .ui-toolbar {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  z-index: 2;\n  border-radius: 0; }\n\n:host ::ng-deep .ui-toolbar .ui-button {\n  margin-left: 10px;\n  width: 60px; }\n\n:host ::ng-deep .ui-toolbar .ui-menuitem {\n  width: 400px; }\n\n:host ::ng-deep .ui-toolbar .ui-menuitem-text {\n  padding-left: 30px; }\n\n:host ::ng-deep .ui-toolbar .ui-menuitem:nth-child(2) .ui-menuitem-text {\n  font-weight: bold; }\n\n:host ::ng-deep .ui-sidebar {\n  width: 230px;\n  text-align: center; }\n\n:host ::ng-deep .ui-sidebar .ui-button {\n    width: 100%;\n    margin: 5px 5px 5px 0px; }\n\n.sidebar-avatar {\n  width: 200px;\n  height: 200px; }\n\n@media screen and (max-width: 920px) and (orientation: landscape) {\n  :host ::ng-deep .ui-sidebar {\n    width: auto;\n    padding: 5px; }\n  .sidebar-avatar {\n    width: 200px;\n    height: 200px; }\n  h3 {\n    margin: 0; }\n  h1 {\n    margin: 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9kaWR1a2g4Ni9maW5hbF9wcm9qZWN0L3NyYy9hcHAvc2hlbGwvc2hlbGwvc2hlbGwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLDBCQUEwQixFQUFBOztBQUc1QjtFQUNFLGVBQWUsRUFBQTs7QUFEakI7SUFJSSwwQkFBa0I7SUFBbEIsdUJBQWtCO0lBQWxCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLHFCQUFxQixFQUFBOztBQUl6QjtFQUNFLGFBQWEsRUFBQTs7QUFHZjtFQUNFLFlBQVksRUFBQTs7QUFHZDtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXLEVBQUE7O0FBR2I7RUFDRSxlQUFlO0VBQ2YsT0FBTztFQUNQLE1BQU07RUFDTixXQUFXO0VBQ1gsVUFBVTtFQUNWLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGlCQUFpQjtFQUNqQixXQUFXLEVBQUE7O0FBR2I7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxpQkFBaUIsRUFBQTs7QUFFbkI7RUFDRSxZQUFZO0VBQ1osa0JBQWtCLEVBQUE7O0FBRnBCO0lBSUksV0FBVztJQUNYLHVCQUF1QixFQUFBOztBQUczQjtFQUNFLFlBQVk7RUFDWixhQUFhLEVBQUE7O0FBR2I7RUFDRTtJQUNFLFdBQVc7SUFDWCxZQUFZLEVBQUE7RUFFZDtJQUNFLFlBQVk7SUFDWixhQUFhLEVBQUE7RUFFZjtJQUNFLFNBQVMsRUFBQTtFQUVYO0lBQ0UsU0FBUyxFQUFBLEVBQ1YiLCJmaWxlIjoic3JjL2FwcC9zaGVsbC9zaGVsbC9zaGVsbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51aS10b29sYmFyLWdyb3VwLWxlZnQgLmhvbWUge1xuICBmb250LXNpemU6IDIycHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1hcmdpbjogMHB4IDEwcHggLTIwcHggOHB4O1xufVxuXG4udWktdG9vbGJhci1ncm91cC1yaWdodCB7XG4gIGZvbnQtc2l6ZTogMjJweDtcblxuICAudWktYnV0dG9uIHtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGY4ZjhmO1xuICAgIGJvcmRlci1jb2xvcjogIzhmOGY4ZjtcbiAgfVxufVxuXG4uZWRpdFVzZXJCdG4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4udXNlckJ1dHRvbiB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLnVzZXJOYW1lIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLmFkbWluLXBhbmVsLWltZyB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDI1cHg7XG4gIHJpZ2h0OiA2MHB4O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnVpLXRvb2xiYXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDI7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbjpob3N0IDo6bmctZGVlcCAudWktdG9vbGJhciAudWktYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHdpZHRoOiA2MHB4O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnVpLXRvb2xiYXIgLnVpLW1lbnVpdGVtIHtcbiAgd2lkdGg6IDQwMHB4O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnVpLXRvb2xiYXIgLnVpLW1lbnVpdGVtLXRleHQge1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG59XG5cbjpob3N0IDo6bmctZGVlcCAudWktdG9vbGJhciAudWktbWVudWl0ZW06bnRoLWNoaWxkKDIpIC51aS1tZW51aXRlbS10ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLnVpLXNpZGViYXIge1xuICB3aWR0aDogMjMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLnVpLWJ1dHRvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiA1cHggNXB4IDVweCAwcHg7XG4gIH1cbn1cbi5zaWRlYmFyLWF2YXRhciB7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkyMHB4KSB7XG4gIEBtZWRpYSAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgIDpob3N0IDo6bmctZGVlcCAudWktc2lkZWJhciB7XG4gICAgICB3aWR0aDogYXV0bztcbiAgICAgIHBhZGRpbmc6IDVweDtcbiAgICB9XG4gICAgLnNpZGViYXItYXZhdGFyIHtcbiAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgfVxuICAgIGgzIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gICAgaDEge1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/shell/shell/shell.component.ts":
/*!************************************************!*\
  !*** ./src/app/shell/shell/shell.component.ts ***!
  \************************************************/
/*! exports provided: ShellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShellComponent", function() { return ShellComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var src_app_services_data_sharing_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/data-sharing.service */ "./src/app/services/data-sharing.service.ts");
/* harmony import */ var src_app_services_teachers_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/teachers.service */ "./src/app/services/teachers.service.ts");
/* harmony import */ var src_app_services_admin_students_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/admin-students.service */ "./src/app/services/admin-students.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ShellComponent = /** @class */ (function () {
    function ShellComponent(_authService, messageService, notificationToasts, studentService, teacherService, router) {
        this._authService = _authService;
        this.messageService = messageService;
        this.notificationToasts = notificationToasts;
        this.studentService = studentService;
        this.teacherService = teacherService;
        this.router = router;
        this.displaySidebar = false;
        this.userRoleLabel = this._authService.getRoleLocalizedName();
        this.logOutLabel = 'Вийти';
        this.editActiveUserLabel = 'Редагувати';
        this.activeUser = {};
    }
    ShellComponent.prototype.ngOnInit = function () {
        this.subscribeToNotifications();
        this.setUserFullName(this.userRoleLabel);
    };
    ShellComponent.prototype.setUserFullName = function (userRole) {
        var _this = this;
        if (userRole === 'Вчитель') {
            this.teacherService.getTeacherBy(this._authService.getCurrentUserId()).subscribe(function (teacher) {
                _this.activeUser = teacher;
                _this.userFullName = teacher.lastname + " " + teacher.firstname + " " + teacher.patronymic;
            });
        }
        else if (userRole === 'Користувач') {
            this.studentService.getStudent(this._authService.getCurrentUserId()).subscribe(function (student) {
                _this.activeUser = student;
                _this.userFullName = student.lastname + " " + student.firstname + " " + student.patronymic;
            });
        }
        else {
            this.userFullName = userRole;
        }
    };
    ShellComponent.prototype.LogOut = function () {
        this._authService.logOut();
    };
    ShellComponent.prototype.subscribeToNotifications = function () {
        var _this = this;
        this.subscription = this.notificationToasts
            .getToasts()
            .subscribe(function (notification) { return _this.messageService.add(notification); });
    };
    ShellComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    ShellComponent.prototype.homeButtonClicked = function () {
        this.router.navigate([this._authService.defaultRoute()]);
    };
    ShellComponent.prototype.editActiveUser = function () {
        console.log('User edit btn pressed'); // TODO-->>>
    };
    ShellComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shell',
            template: __webpack_require__(/*! ./shell.component.html */ "./src/app/shell/shell/shell.component.html"),
            styles: [__webpack_require__(/*! ./shell.component.scss */ "./src/app/shell/shell/shell.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"],
            src_app_services_data_sharing_service__WEBPACK_IMPORTED_MODULE_4__["DataSharingService"],
            src_app_services_admin_students_service__WEBPACK_IMPORTED_MODULE_6__["StudentsService"],
            src_app_services_teachers_service__WEBPACK_IMPORTED_MODULE_5__["TeachersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ShellComponent);
    return ShellComponent;
}());



/***/ })

}]);
//# sourceMappingURL=shell-shell-module.js.map