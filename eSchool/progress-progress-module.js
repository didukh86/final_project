(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["progress-progress-module"],{

/***/ "./node_modules/primeng/button.js":
/*!****************************************!*\
  !*** ./node_modules/primeng/button.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/button/button */ "./node_modules/primeng/components/button/button.js"));

/***/ }),

/***/ "./node_modules/primeng/chart.js":
/*!***************************************!*\
  !*** ./node_modules/primeng/chart.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/chart/chart */ "./node_modules/primeng/components/chart/chart.js"));

/***/ }),

/***/ "./node_modules/primeng/multiselect.js":
/*!*********************************************!*\
  !*** ./node_modules/primeng/multiselect.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/multiselect/multiselect */ "./node_modules/primeng/components/multiselect/multiselect.js"));

/***/ }),

/***/ "./src/app/models/chartColors.ts":
/*!***************************************!*\
  !*** ./src/app/models/chartColors.ts ***!
  \***************************************/
/*! exports provided: ChartColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartColor", function() { return ChartColor; });
var ChartColor = /** @class */ (function () {
    function ChartColor() {
        this.colors = [
            'green',
            'red',
            'orange',
            'blue',
            'purple',
            'mediumslateblue',
            'lightcoral',
            'mediumvioletred',
            'steelblue'
        ];
        this.count = -1;
    }
    ChartColor.prototype.getColor = function () {
        if (this.count === this.colors.length - 1) {
            this.count = -1;
        }
        this.count++;
        return this.colors[this.count];
    };
    return ChartColor;
}());



/***/ }),

/***/ "./src/app/progress/progress-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/progress/progress-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ProgressRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressRoutingModule", function() { return ProgressRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _progress_progress_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./progress/progress.component */ "./src/app/progress/progress/progress.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _progress_progress_component__WEBPACK_IMPORTED_MODULE_2__["ProgressComponent"]
    }
];
var ProgressRoutingModule = /** @class */ (function () {
    function ProgressRoutingModule() {
    }
    ProgressRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ProgressRoutingModule);
    return ProgressRoutingModule;
}());



/***/ }),

/***/ "./src/app/progress/progress.module.ts":
/*!*********************************************!*\
  !*** ./src/app/progress/progress.module.ts ***!
  \*********************************************/
/*! exports provided: ProgressModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressModule", function() { return ProgressModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/calendar.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_calendar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/chart */ "./node_modules/primeng/chart.js");
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_chart__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/multiselect */ "./node_modules/primeng/multiselect.js");
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_multiselect__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/radiobutton */ "./node_modules/primeng/radiobutton.js");
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_radiobutton__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/card */ "./node_modules/primeng/card.js");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_card__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _progress_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./progress-routing.module */ "./src/app/progress/progress-routing.module.ts");
/* harmony import */ var _progress_progress_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./progress/progress.component */ "./src/app/progress/progress/progress.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var ProgressModule = /** @class */ (function () {
    function ProgressModule() {
    }
    ProgressModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _progress_routing_module__WEBPACK_IMPORTED_MODULE_10__["ProgressRoutingModule"],
                primeng_dropdown__WEBPACK_IMPORTED_MODULE_2__["DropdownModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                primeng_calendar__WEBPACK_IMPORTED_MODULE_4__["CalendarModule"],
                primeng_button__WEBPACK_IMPORTED_MODULE_5__["ButtonModule"],
                primeng_chart__WEBPACK_IMPORTED_MODULE_6__["ChartModule"],
                primeng_multiselect__WEBPACK_IMPORTED_MODULE_7__["MultiSelectModule"],
                primeng_radiobutton__WEBPACK_IMPORTED_MODULE_8__["RadioButtonModule"],
                primeng_card__WEBPACK_IMPORTED_MODULE_9__["CardModule"]
            ],
            declarations: [_progress_progress_component__WEBPACK_IMPORTED_MODULE_11__["ProgressComponent"]]
        })
    ], ProgressModule);
    return ProgressModule;
}());



/***/ }),

/***/ "./src/app/progress/progress/progress.component.html":
/*!***********************************************************!*\
  !*** ./src/app/progress/progress/progress.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"title\">\n    <span>\n      <h2 class=\"stat\">Статистика <i class=\"fas fa-chart-line\"></i></h2>\n    </span>\n  </div>\n\n  <div class=\"flex-container\">\n    <p-card class=\"data\">\n      <p-dropdown\n        [options]=\"years\"\n        placeholder=\"Виберіть рік\"\n        [(ngModel)]=\"selectedYear\"\n        (onChange)=\"onYearChange()\"\n        [showClear]=\"true\"\n      ></p-dropdown>\n\n      <p-calendar\n        class=\"calendar\"\n        [(ngModel)]=\"start\"\n        [locale]=\"ua\"\n        placeholder=\"Початок періоду\"\n        dateFormat=\"yy.mm.dd\"\n        [showIcon]=\"true\"\n      ></p-calendar>\n\n      <p-calendar\n        class=\"calendar\"\n        [(ngModel)]=\"end\"\n        [locale]=\"ua\"\n        dateFormat=\"yy.mm.dd\"\n        placeholder=\"Кінець періоду\"\n        [showIcon]=\"true\"\n        [defaultDate]=\"defaultDate\"\n      ></p-calendar>\n      <div class=\"radio\">\n        <p-radioButton\n          label=\"Успішність класів по предмету\"\n          name=\"chartGroup\"\n          value=\"class-subject\"\n          [(ngModel)]=\"selectedChartsType\"\n          (onClick)=\"onDataReset()\"\n        ></p-radioButton>\n        <p-radioButton\n          label=\"Успішність класів\"\n          name=\"chartGroup\"\n          value=\"class\"\n          [(ngModel)]=\"selectedChartsType\"\n          (onClick)=\"onDataReset()\"\n        ></p-radioButton>\n        <p-radioButton\n          label=\"Успішність учнів\"\n          name=\"chartGroup\"\n          value=\"student\"\n          [(ngModel)]=\"selectedChartsType\"\n          (onClick)=\"onDataReset()\"\n        ></p-radioButton>\n\n        <p-multiSelect\n          class=\"group\"\n          *ngIf=\"\n            (selectedYear && selectedChartsType === 'class') ||\n            (selectedYear && selectedChartsType === 'class-subject')\n          \"\n          [options]=\"visibleGroups\"\n          [(ngModel)]=\"selectedGroups\"\n          (onChange)=\"onClassChange($event)\"\n          optionLabel=\"className\"\n          [panelStyle]=\"{ minWidth: '15em' }\"\n          defaultLabel=\"Виберіть клас\"\n          selectedItemsLabel=\"Вибрано {0} класів\"\n        ></p-multiSelect>\n\n        <p-dropdown\n          class=\"group\"\n          *ngIf=\"selectedYear && selectedChartsType === 'student'\"\n          [options]=\"visibleGroups\"\n          [(ngModel)]=\"selectedGroup\"\n          (onChange)=\"onClassChange($event)\"\n          placeholder=\"Виберіть клас\"\n          optionLabel=\"className\"\n          [showClear]=\"true\"\n        ></p-dropdown>\n\n        <p-dropdown\n          class=\"subject\"\n          *ngIf=\"\n            selectedGroup ||\n            (selectedChartsType === 'class-subject' && selectedGroups)\n          \"\n          [options]=\"visibleSubjects\"\n          [(ngModel)]=\"selectedSubjects\"\n          (onChange)=\"onSubjectChange()\"\n          placeholder=\"Виберіть предмет\"\n          [showClear]=\"true\"\n        ></p-dropdown>\n\n        <p-multiSelect\n          class=\"student\"\n          *ngIf=\"selectedGroup && selectedChartsType === 'student'\"\n          [options]=\"visibleStudents\"\n          [(ngModel)]=\"selectedStudents\"\n          (onChange)=\"onStudentChange($event)\"\n          [panelStyle]=\"{ minWidth: '13em' }\"\n          defaultLabel=\"Виберіть учня\"\n          selectedItemsLabel=\"Вибрано {0} учнів \"\n        ></p-multiSelect>\n\n        <p-button\n          class=\"showData\"\n          icon=\"pi pi-check\"\n          [disabled]=\"isButtonDisabled\"\n          (onClick)=\"onClickShow()\"\n          label=\"Показати оцінки\"\n        ></p-button>\n      </div>\n    </p-card>\n    <p-card class=\"chart\">\n      <h3 class=\"averageMark\">\n        Середня оцінка учня по предмету: {{ average | number: '.1-2' }}\n      </h3>\n\n      <h3 class=\"averageMark\">\n        Середня оцінка учня по всіх предметах:\n        {{ avgMarkAllSubjects | number: '.1-2' }}\n      </h3>\n      <p-chart\n        type=\"bar\"\n        height=\"350px\"\n        [data]=\"chartMarks\"\n        [options]=\"chartOptions\"\n      ></p-chart>\n    </p-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/progress/progress/progress.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/progress/progress/progress.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\n  margin-top: 78px;\n  text-align: center;\n  background-color: lightblue;\n  height: 45px;\n  border: 1px solid #77bcf5; }\n\n.stat {\n  margin-top: 5px;\n  font-family: 'Open Sans', 'Helvetica Neue', sans-serif;\n  font-size: 22px;\n  font-weight: normal; }\n\np-radioButton {\n  display: block;\n  margin-top: 2%;\n  margin-bottom: 2%;\n  font-family: 'Open Sans', 'Helvetica Neue', sans-serif; }\n\n.averageMark {\n  font-family: 'Open Sans', 'Helvetica Neue', sans-serif;\n  font-size: 14px;\n  font-weight: normal;\n  margin-left: 5%; }\n\n.flex-container {\n  display: flex;\n  flex-wrap: nowrap; }\n\n.data {\n  display: block;\n  width: 20%;\n  margin-top: 1%;\n  margin-left: 1.5%; }\n\n.chart {\n  display: block;\n  width: 75%;\n  margin-top: 1%;\n  margin-left: 1.5%; }\n\n:host ::ng-deep .ui-calendar {\n  display: block;\n  margin-top: 4%; }\n\n:host ::ng-deep .showData .ui-button {\n  margin-top: 4%; }\n\n.radio {\n  margin-top: 5%; }\n\n.subject,\n.student,\n.group {\n  display: block;\n  margin-top: 4%;\n  margin-bottom: 3%; }\n\n:host ::ng-deep .data .ui-card {\n  height: 460px; }\n\n@media screen and (max-width: 400px) {\n  .data {\n    width: 100%;\n    margin-left: 0;\n    margin-right: 0; }\n  .chart {\n    width: 100%;\n    margin-left: 0;\n    margin-right: 0; }\n  .flex-container {\n    display: flex;\n    flex-wrap: wrap; } }\n\n@media screen and (min-width: 401px) and (max-width: 1260px) {\n  .data {\n    width: 100%;\n    margin-left: 0;\n    margin-right: 0; }\n  .chart {\n    width: 100%;\n    margin-left: 0;\n    margin-right: 0; }\n  .flex-container {\n    display: flex;\n    flex-wrap: wrap; }\n  .subject,\n  .student,\n  .group,\n  .radio,\n  :host ::ng-deep .ui-calendar {\n    margin-top: 2%;\n    margin-bottom: 2%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9kaWR1a2g4Ni9maW5hbF9wcm9qZWN0L3NyYy9hcHAvcHJvZ3Jlc3MvcHJvZ3Jlc3MvcHJvZ3Jlc3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1oseUJBQW9DLEVBQUE7O0FBRXRDO0VBQ0UsZUFBZTtFQUNmLHNEQUFzRDtFQUN0RCxlQUFlO0VBQ2YsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsY0FBYztFQUNkLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsc0RBQXNELEVBQUE7O0FBSXhEO0VBQ0Usc0RBQXNEO0VBQ3RELGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZUFBZSxFQUFBOztBQUdqQjtFQUNFLGFBQWE7RUFDYixpQkFBaUIsRUFBQTs7QUFJbkI7RUFDRSxjQUFjO0VBQ2QsVUFBVTtFQUNWLGNBQWM7RUFDZCxpQkFBaUIsRUFBQTs7QUFJbkI7RUFDRSxjQUFjO0VBQ2QsVUFBVTtFQUNWLGNBQWM7RUFDZCxpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxjQUFjO0VBQ2QsY0FBYyxFQUFBOztBQUloQjtFQUNFLGNBQWMsRUFBQTs7QUFJaEI7RUFDRSxjQUFjLEVBQUE7O0FBSWhCOzs7RUFHRSxjQUFjO0VBQ2QsY0FBYztFQUNkLGlCQUFpQixFQUFBOztBQUluQjtFQUNFLGFBQWEsRUFBQTs7QUFHZjtFQUNFO0lBQ0UsV0FBVztJQUNYLGNBQWM7SUFDZCxlQUFlLEVBQUE7RUFFakI7SUFDRSxXQUFXO0lBQ1gsY0FBYztJQUNkLGVBQWUsRUFBQTtFQUVqQjtJQUNFLGFBQWE7SUFDYixlQUFlLEVBQUEsRUFDaEI7O0FBR0g7RUFDRTtJQUNFLFdBQVc7SUFDWCxjQUFjO0lBQ2QsZUFBZSxFQUFBO0VBRWpCO0lBQ0UsV0FBVztJQUNYLGNBQWM7SUFDZCxlQUFlLEVBQUE7RUFFakI7SUFDRSxhQUFhO0lBQ2IsZUFBZSxFQUFBO0VBRWpCOzs7OztJQUtFLGNBQWM7SUFDZCxpQkFBaUIsRUFBQSxFQUNsQiIsImZpbGUiOiJzcmMvYXBwL3Byb2dyZXNzL3Byb2dyZXNzL3Byb2dyZXNzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlIHtcbiAgbWFyZ2luLXRvcDogNzhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XG4gIGhlaWdodDogNDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDExOSwgMTg4LCAyNDUpO1xufVxuLnN0YXQge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG5wLXJhZGlvQnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDIlO1xuICBtYXJnaW4tYm90dG9tOiAyJTtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xufVxuXG4vLyBhdmVyYWdlIG1hcmtzXG4uYXZlcmFnZU1hcmsge1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xufVxuXG4uZmxleC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbn1cblxuLy8gc3R5bGVzIGZvciBkYXRhIGNvbnRhaW5lclxuLmRhdGEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDIwJTtcbiAgbWFyZ2luLXRvcDogMSU7XG4gIG1hcmdpbi1sZWZ0OiAxLjUlO1xufVxuXG4vLyBzdHlsZXMgZm9yIGNoYXJ0IGNvbnRhaW5lclxuLmNoYXJ0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA3NSU7XG4gIG1hcmdpbi10b3A6IDElO1xuICBtYXJnaW4tbGVmdDogMS41JTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC51aS1jYWxlbmRhciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiA0JTtcbn1cblxuLy8gYnV0dG9uIHNob3cgZGF0YVxuOmhvc3QgOjpuZy1kZWVwIC5zaG93RGF0YSAudWktYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogNCU7XG59XG5cbi8vIGNvbnRhaW5lciBmb3IgcmFkaW8tYnV0dG9uc1xuLnJhZGlvIHtcbiAgbWFyZ2luLXRvcDogNSU7XG59XG5cbi8vIGxpc3Qgb2Ygc3ViamVjdHMsIHN0dWRlbnRzLCBjbGFzc2VzXG4uc3ViamVjdCxcbi5zdHVkZW50LFxuLmdyb3VwIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDQlO1xuICBtYXJnaW4tYm90dG9tOiAzJTtcbn1cblxuLy8gZGF0YSBjYXJkXG46aG9zdCA6Om5nLWRlZXAgLmRhdGEgLnVpLWNhcmQge1xuICBoZWlnaHQ6IDQ2MHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xuICAuZGF0YSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICB9XG4gIC5jaGFydCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICB9XG4gIC5mbGV4LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDAxcHgpIGFuZCAobWF4LXdpZHRoOiAxMjYwcHgpIHtcbiAgLmRhdGEge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgfVxuICAuY2hhcnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgfVxuICAuZmxleC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICB9XG4gIC5zdWJqZWN0LFxuICAuc3R1ZGVudCxcbiAgLmdyb3VwLFxuICAucmFkaW8sXG4gIDpob3N0IDo6bmctZGVlcCAudWktY2FsZW5kYXIge1xuICAgIG1hcmdpbi10b3A6IDIlO1xuICAgIG1hcmdpbi1ib3R0b206IDIlO1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/progress/progress/progress.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/progress/progress/progress.component.ts ***!
  \*********************************************************/
/*! exports provided: ProgressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressComponent", function() { return ProgressComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_admingroups_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/admingroups.service */ "./src/app/services/admingroups.service.ts");
/* harmony import */ var src_app_services_marks_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/marks.service */ "./src/app/services/marks.service.ts");
/* harmony import */ var src_app_services_admin_subjects_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/admin-subjects.service */ "./src/app/services/admin-subjects.service.ts");
/* harmony import */ var src_app_services_admin_students_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/admin-students.service */ "./src/app/services/admin-students.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_services_teachers_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/teachers.service */ "./src/app/services/teachers.service.ts");
/* harmony import */ var src_app_services_data_sharing_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/data-sharing.service */ "./src/app/services/data-sharing.service.ts");
/* harmony import */ var src_app_models_chartColors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/models/chartColors */ "./src/app/models/chartColors.ts");
/* harmony import */ var _services_pageTitle_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/pageTitle.service */ "./src/app/services/pageTitle.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ProgressComponent = /** @class */ (function () {
    function ProgressComponent(groupService, notificationToasts, _subjectsService, studentService, marksService, _teacherServices, pageTitle) {
        this.groupService = groupService;
        this.notificationToasts = notificationToasts;
        this._subjectsService = _subjectsService;
        this.studentService = studentService;
        this.marksService = marksService;
        this._teacherServices = _teacherServices;
        this.pageTitle = pageTitle;
        this.disabled = true;
        this.selectedChartsType = 'student';
        this.defaultDate = new Date();
        this.color = new src_app_models_chartColors__WEBPACK_IMPORTED_MODULE_8__["ChartColor"]();
        this.isButtonDisabled = true;
        this.visibleGroups = new Array();
        this.visibleStudents = new Array();
        this.chartOptions = {
            responsive: true,
            maintainAspectRatio: false,
            animation: {
                duration: 0
            },
            hover: {
                animationDuration: 0
            },
            responsiveAnimationDuration: 0,
            scales: {
                yAxes: [
                    {
                        display: true,
                        ticks: {
                            beginAtZero: true,
                            stepValue: 1,
                            max: 12
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Оцінка'
                        }
                    }
                ],
                xAxes: [
                    {
                        scaleLabel: {
                            display: true,
                            labelString: 'Період'
                        }
                    }
                ]
            }
        };
    }
    ProgressComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pageTitle.setTitle('Католицька Школа - Статистика');
        this.calendar();
        this.groupService.getClasses().subscribe(function (data) {
            _this.groups = data;
            _this.visibleGroups = _this.groups.filter(function (g) { return g.isActive; });
            var allYears = data.map(function (group) { return group.classYear; });
            var uniqueYears = allYears
                .filter(function (value, index, self) { return self.indexOf(value) === index; })
                .sort();
            _this.years = uniqueYears.map(function (year) { return ({
                label: year.toString(),
                value: year
            }); });
        });
    };
    // writing everage marks to the chartMarks object for each selected student
    ProgressComponent.prototype.setMarksByStudentBySubject = function (servData, firstname, lastname, startDate, endDate) {
        var marksData = [];
        var sum = 0;
        var averageMark = 0;
        // count the average mark
        if (servData.length !== 0) {
            servData.forEach(function (value) {
                sum += value.y;
            });
            averageMark = sum / servData.length;
        }
        marksData.push(averageMark.toFixed(2));
        // saving already loaded datasets into a local variable to update full chartMarks later
        var datasetsLocal = this.chartMarks.datasets;
        datasetsLocal.push({
            label: firstname + ' ' + lastname,
            data: marksData,
            backgroundColor: this.color.getColor(),
            borderColor: 'white'
        });
        // format start and end of period
        var pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]('en-US');
        startDate = pipe.transform(startDate, 'dd.MM.yyyy');
        endDate = pipe.transform(endDate, 'dd.MM.yyyy');
        // sort average marks to show from the the biggest to the lowest
        var newDatasetsLocal = datasetsLocal.sort(this.sortAverageMarks);
        // fully update chartMarks
        this.chartMarks = {
            labels: [startDate + " - " + endDate],
            datasets: newDatasetsLocal
        };
    };
    ProgressComponent.prototype.sortAverageMarks = function (b, a) {
        return a.data - b.data;
    };
    // showing toast-message for students who do not have marks
    ProgressComponent.prototype.showToasts = function (servData, firstname, lastname) {
        if (servData.length === 0) {
            this.notificationToasts.notify('warn', '', " \u0414\u043B\u044F \u0443\u0447\u043D\u044F " + firstname + " " + lastname + " \u0437\u0430 \u0434\u0430\u043D\u0438\u0439 \u043F\u0435\u0440\u0456\u043E\u0434 \u043E\u0446\u0456\u043D\u043A\u0438 \u0432\u0456\u0434\u0441\u0443\u0442\u043D\u0456");
        }
    };
    ProgressComponent.prototype.getAverageStudentMark = function (servData) {
        var _this = this;
        // find average student mark by subject
        return (servData.find(function (item) { return item.subjectId === _this.selectedSubjects.subjectId; })
            .avgMark || 0);
    };
    ProgressComponent.prototype.countAverageStudentMark = function (servData) {
        var sumOfStudentMarks = 0;
        var avrStudentMark = 0;
        // count student average mark
        if (servData.length !== 0) {
            servData.forEach(function (value) {
                sumOfStudentMarks += value.avgMark;
            });
            avrStudentMark = sumOfStudentMarks / servData.length;
        }
        return avrStudentMark;
    };
    ProgressComponent.prototype.collectStudentMark = function (avrStudMark, className, startDate, endDate) {
        // push the average student mark to this.collectedAvgMarks object as array element
        if (this.collectedAvgMarks[className] === undefined) {
            this.collectedAvgMarks[className] = [];
        }
        if (avrStudMark !== 0) {
            this.collectedAvgMarks[className].push(avrStudMark.toFixed(2));
        }
        // update chart data after receiving each student data
        this.updateChartWithCollectedData(startDate, endDate);
    };
    ProgressComponent.prototype.countAverageClassMark = function (marks, className) {
        var avrSum = 0;
        // count average class mark and write it to the object as array
        marks[className].forEach(function (avgStudMark) {
            avrSum += Number(avgStudMark);
        });
        if (avrSum !== 0) {
            avrSum = avrSum / marks[className].length;
        }
        return [avrSum.toFixed(2)];
    };
    ProgressComponent.prototype.updateChartWithCollectedData = function (startDate, endDate) {
        var _this = this;
        var chartData = {};
        Object.keys(this.collectedAvgMarks).forEach(function (group) {
            chartData[group] = _this.countAverageClassMark(_this.collectedAvgMarks, group);
        }),
            this.showChart(chartData, startDate, endDate);
    };
    ProgressComponent.prototype.showChart = function (averageClassMarks, startDate, endDate) {
        var _this = this;
        var datasetsLocal = [];
        Object.keys(averageClassMarks).forEach(function (className) {
            datasetsLocal.push({
                label: className,
                data: averageClassMarks[className],
                backgroundColor: _this.color.getColor(),
                borderColor: 'white'
            });
        });
        // format start and end of period
        var pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]('en-US');
        startDate = pipe.transform(startDate, 'dd.MM.yyyy');
        endDate = pipe.transform(endDate, 'dd.MM.yyyy');
        // sort average marks to show from the biggest to the lowest
        var newDatasetsLocal = datasetsLocal.sort(this.sortAverageMarks);
        // fully update chartMarks
        this.chartMarks = {
            labels: [startDate + " - " + endDate],
            datasets: newDatasetsLocal
        };
    };
    ProgressComponent.prototype.onClickShow = function () {
        var _this = this;
        var pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]('en-US');
        var startStr = pipe.transform(this.start, 'yyyy-MM-dd');
        var endStr = pipe.transform(this.end, 'yyyy-MM-dd');
        this.chartMarks = {
            labels: [],
            datasets: []
        };
        // get average marks by selected class and all subjects
        if (this.selectedGroups && !this.selectedSubjects) {
            this.collectedAvgMarks = {};
            // this.collectedStudents an object of studens of selected classes
            Object.keys(this.collectedStudents).forEach(function (className) {
                _this.collectedStudents[className][0].forEach(function (student) {
                    _this.marksService
                        .getAvgMarks(student.id, startStr, endStr)
                        .subscribe(function (avgStudentMarks) {
                        _this.collectStudentMark(_this.countAverageStudentMark(avgStudentMarks), className, startStr, endStr);
                    });
                });
            });
        }
        // get average marks by selected class and selected subject
        if (this.selectedGroups && this.selectedSubjects) {
            this.collectedAvgMarks = {};
            // this.collectedStudents an object of studens of selected classes
            Object.keys(this.collectedStudents).forEach(function (className) {
                _this.collectedStudents[className][0].forEach(function (student) {
                    _this.marksService
                        .getAvgMarks(student.id, startStr, endStr)
                        .subscribe(function (avgStudentMarks) {
                        _this.collectStudentMark(_this.getAverageStudentMark(avgStudentMarks), className, startStr, endStr);
                    });
                });
            });
        }
        // getting data for each selected student
        if (this.selectedGroup && this.selectedStudents) {
            this.selectedStudents.forEach(function (item) {
                _this.marksService
                    .getMarks(startStr, endStr, _this.selectedSubjects.subjectId, _this.selectedGroup.id, item.id)
                    .subscribe(function (data) {
                    _this.setMarksByStudentBySubject(data, item.firstname, item.lastname, startStr, endStr);
                    _this.showToasts(data, item.firstname, item.lastname);
                });
            });
        }
        if (this.selectedGroup && this.selectedStudents.length === 1) {
            this.marksService
                .getAvgMarks(this.selectedStudents[0].id, startStr, endStr)
                .subscribe(function (data) {
                _this.avgMark = data;
                _this.avgMarkAllSubjects = _this.StudentAverageMark(data.map(function (mark) { return mark.avgMark; }));
                var subject = data.find(function (i) { return i.subjectId === _this.selectedSubjects.subjectId; });
                _this.average = subject ? subject.avgMark : null;
            });
        }
        // reset average marks when selected more than one student
        this.average = null;
        this.avgMarkAllSubjects = null;
    };
    ProgressComponent.prototype.onSubjectChange = function () {
        this.updateIsButtonDisabled();
    };
    ProgressComponent.prototype.onYearChange = function () {
        var _this = this;
        if (this.selectedYear) {
            this.start = new Date(this.selectedYear, 0);
            this.end =
                new Date().getFullYear() === this.selectedYear
                    ? new Date()
                    : new Date(this.selectedYear, 1);
            this.visibleGroups = this.visibleGroups.filter(function (g) { return g.classYear === _this.selectedYear; });
        }
        else {
            this.visibleGroups = new Array();
            this.start = null;
            this.end = null;
            this.average = null;
            this.avgMarkAllSubjects = null;
        }
        this.selectedGroup = null;
        this.onClassChange();
        this.updateIsButtonDisabled();
    };
    ProgressComponent.prototype.onStudentChange = function () {
        this.updateIsButtonDisabled();
    };
    // write all subjects into this.visibleSubjects by selected classes
    ProgressComponent.prototype.getSubjects = function (servData, subjectArr) {
        servData.forEach(function (value) {
            subjectArr.push(value);
        });
        var subjects = subjectArr.map(function (subject) {
            return {
                label: "" + subject.subjectName,
                value: subject
            };
        });
        this.visibleSubjects = this.findUniqueSubjects(subjects);
        this.updateIsButtonDisabled();
    };
    ProgressComponent.prototype.getStudents = function (servData, collectedStudents, className) {
        if (collectedStudents[className] === undefined) {
            collectedStudents[className] = [];
        }
        collectedStudents[className].push(servData);
    };
    // filter array of subjects
    ProgressComponent.prototype.findUniqueSubjects = function (arr) {
        var result = [];
        nextInput: for (var i = 0; i < arr.length; i++) {
            var obj = arr[i].label;
            for (var j = 0; j < result.length; j++) {
                if (result[j].label === obj) {
                    continue nextInput;
                }
            }
            result.push(arr[i]);
        }
        return result;
    };
    ProgressComponent.prototype.onClassChange = function () {
        var _this = this;
        if (this.selectedGroup) {
            this._subjectsService
                .getSubjectsListForClass(this.selectedGroup.id)
                .subscribe(function (data) {
                _this.visibleSubjects = data.map(function (subject) {
                    return {
                        label: "" + subject.subjectName,
                        value: subject
                    };
                });
            });
            this.visibleStudents = new Array();
            this.studentService.getStudents(this.selectedGroup.id).subscribe(function (data) {
                _this.visibleStudents = data.map(function (student) {
                    return {
                        label: student.firstname + " " + student.lastname,
                        value: student
                    };
                });
            });
        }
        else {
            this.visibleStudents = new Array();
            this.visibleSubjects = null;
        }
        this.selectedStudents = null;
        this.updateIsButtonDisabled();
        if (this.selectedGroups) {
            this.collectedStudents = {};
            var subjects_1 = [];
            // get subjects for each selected group
            this.selectedGroups.forEach(function (item) {
                _this._subjectsService
                    .getSubjectsListForClass(item.id)
                    .subscribe(function (data) {
                    _this.getSubjects(data, subjects_1);
                });
                // get students of selected classes
                _this.studentService.getStudents(item.id).subscribe(function (data) {
                    _this.getStudents(data, _this.collectedStudents, item.className);
                });
            });
        }
        else {
            this.visibleStudents = new Array();
            this.visibleSubjects = null;
        }
        this.selectedStudents = null;
        this.updateIsButtonDisabled();
    };
    ProgressComponent.prototype.onDataReset = function () {
        this.selectedGroups = null;
        this.selectedGroup = null;
        this.visibleStudents = new Array();
        this.selectedSubjects = null;
        this.chartMarks = {
            labels: [],
            datasets: []
        };
        this.updateIsButtonDisabled();
    };
    ProgressComponent.prototype.StudentAverageMark = function (marks) {
        var summ = 0;
        for (var i = 0; i < marks.length; i++) {
            summ += marks[i];
        }
        return summ / marks.length;
    };
    ProgressComponent.prototype.calendar = function () {
        var _this = this;
        this._teacherServices.currentCalendar.subscribe(function (data) { return (_this.ua = data); });
    };
    ProgressComponent.prototype.updateIsButtonDisabled = function () {
        this.isButtonDisabled =
            !(this.selectedChartsType === 'class' &&
                this.selectedGroups != null &&
                this.selectedYear != null) &&
                !(this.selectedChartsType === 'student' &&
                    this.selectedSubjects != null &&
                    this.selectedYear != null &&
                    this.selectedGroup != null &&
                    this.selectedStudents != null) &&
                !(this.selectedChartsType === 'class-subject' &&
                    this.selectedSubjects != null &&
                    this.selectedYear != null &&
                    this.selectedGroups != null);
    };
    ProgressComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-progress',
            template: __webpack_require__(/*! ./progress.component.html */ "./src/app/progress/progress/progress.component.html"),
            styles: [__webpack_require__(/*! ./progress.component.scss */ "./src/app/progress/progress/progress.component.scss")],
            providers: [_services_pageTitle_service__WEBPACK_IMPORTED_MODULE_9__["PageTitleService"]]
        }),
        __metadata("design:paramtypes", [src_app_services_admingroups_service__WEBPACK_IMPORTED_MODULE_1__["AdmingroupsService"],
            src_app_services_data_sharing_service__WEBPACK_IMPORTED_MODULE_7__["DataSharingService"],
            src_app_services_admin_subjects_service__WEBPACK_IMPORTED_MODULE_3__["AdminSubjectsService"],
            src_app_services_admin_students_service__WEBPACK_IMPORTED_MODULE_4__["StudentsService"],
            src_app_services_marks_service__WEBPACK_IMPORTED_MODULE_2__["MarksService"],
            src_app_services_teachers_service__WEBPACK_IMPORTED_MODULE_6__["TeachersService"],
            _services_pageTitle_service__WEBPACK_IMPORTED_MODULE_9__["PageTitleService"]])
    ], ProgressComponent);
    return ProgressComponent;
}());



/***/ }),

/***/ "./src/app/services/marks.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/marks.service.ts ***!
  \*******************************************/
/*! exports provided: MarksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarksService", function() { return MarksService; });
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


var MarksService = /** @class */ (function () {
    function MarksService(http) {
        this.http = http;
    }
    MarksService.prototype.getMarks = function (start, end, subject_id, class_id, student_id) {
        return this.http
            .get("marks?student_id=" + student_id + "&class_id=" + class_id + "&subject_id=" + subject_id + "\n    &period_start=" + start + "&period_end=" + end)
            .map(function (response) { return response.data; });
    };
    MarksService.prototype.getAvgMarks = function (student_id, start, end) {
        return this.http
            .get("marks/avg?student_id=" + student_id + "&period_start=" + start + "&period_end=" + end)
            .map(function (response) { return response.data; });
    };
    MarksService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MarksService);
    return MarksService;
}());



/***/ }),

/***/ "./src/app/services/pageTitle.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/pageTitle.service.ts ***!
  \***********************************************/
/*! exports provided: PageTitleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageTitleService", function() { return PageTitleService; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PageTitleService = /** @class */ (function () {
    function PageTitleService(pageTitleService) {
        this.pageTitleService = pageTitleService;
    }
    PageTitleService.prototype.setTitle = function (newTitle) {
        this.pageTitleService.setTitle(newTitle);
    };
    PageTitleService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["Title"]])
    ], PageTitleService);
    return PageTitleService;
}());



/***/ })

}]);
//# sourceMappingURL=progress-progress-module.js.map