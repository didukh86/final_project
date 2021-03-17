(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["journal-journal-module"],{

/***/ "./node_modules/primeng/components/dataview/dataview.js":
/*!**************************************************************!*\
  !*** ./node_modules/primeng/components/dataview/dataview.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var objectutils_1 = __webpack_require__(/*! ../utils/objectutils */ "./node_modules/primeng/components/utils/objectutils.js");
var shared_1 = __webpack_require__(/*! ../common/shared */ "./node_modules/primeng/components/common/shared.js");
var paginator_1 = __webpack_require__(/*! ../paginator/paginator */ "./node_modules/primeng/components/paginator/paginator.js");
var DataView = /** @class */ (function () {
    function DataView(el) {
        this.el = el;
        this.layout = 'list';
        this.pageLinks = 5;
        this.paginatorPosition = 'bottom';
        this.alwaysShowPaginator = true;
        this.currentPageReportTemplate = '{currentPage} of {totalPages}';
        this.emptyMessage = 'No records found';
        this.onLazyLoad = new core_1.EventEmitter();
        this.trackBy = function (index, item) { return item; };
        this.loadingIcon = 'pi pi-spinner';
        this.first = 0;
        this.onPage = new core_1.EventEmitter();
        this.onSort = new core_1.EventEmitter();
        this._sortOrder = 1;
    }
    DataView.prototype.ngOnInit = function () {
        if (this.lazy) {
            this.onLazyLoad.emit(this.createLazyLoadMetadata());
        }
        this.initialized = true;
    };
    Object.defineProperty(DataView.prototype, "sortField", {
        get: function () {
            return this._sortField;
        },
        set: function (val) {
            this._sortField = val;
            //avoid triggering lazy load prior to lazy initialization at onInit
            if (!this.lazy || this.initialized) {
                this.sort();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataView.prototype, "sortOrder", {
        get: function () {
            return this._sortOrder;
        },
        set: function (val) {
            this._sortOrder = val;
            //avoid triggering lazy load prior to lazy initialization at onInit
            if (!this.lazy || this.initialized) {
                this.sort();
            }
        },
        enumerable: true,
        configurable: true
    });
    DataView.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.templates.forEach(function (item) {
            switch (item.getType()) {
                case 'listItem':
                    _this.listItemTemplate = item.template;
                    break;
                case 'gridItem':
                    _this.gridItemTemplate = item.template;
                    break;
                case 'paginatorleft':
                    _this.paginatorLeftTemplate = item.template;
                    break;
                case 'paginatorright':
                    _this.paginatorRightTemplate = item.template;
                    break;
            }
        });
        this.updateItemTemplate();
    };
    DataView.prototype.updateItemTemplate = function () {
        switch (this.layout) {
            case 'list':
                this.itemTemplate = this.listItemTemplate;
                break;
            case 'grid':
                this.itemTemplate = this.gridItemTemplate;
                break;
        }
    };
    Object.defineProperty(DataView.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (val) {
            this._value = val;
            this.updateTotalRecords();
            if (!this.lazy && this.hasFilter()) {
                this.filter(this.filterValue);
            }
        },
        enumerable: true,
        configurable: true
    });
    DataView.prototype.changeLayout = function (layout) {
        this.layout = layout;
        this.updateItemTemplate();
    };
    DataView.prototype.updateTotalRecords = function () {
        this.totalRecords = this.lazy ? this.totalRecords : (this._value ? this._value.length : 0);
    };
    DataView.prototype.paginate = function (event) {
        this.first = event.first;
        this.rows = event.rows;
        if (this.lazy) {
            this.onLazyLoad.emit(this.createLazyLoadMetadata());
        }
        this.onPage.emit({
            first: this.first,
            rows: this.rows
        });
    };
    DataView.prototype.sort = function () {
        var _this = this;
        this.first = 0;
        if (this.lazy) {
            this.onLazyLoad.emit(this.createLazyLoadMetadata());
        }
        else if (this.value) {
            this.value.sort(function (data1, data2) {
                var value1 = objectutils_1.ObjectUtils.resolveFieldData(data1, _this.sortField);
                var value2 = objectutils_1.ObjectUtils.resolveFieldData(data2, _this.sortField);
                var result = null;
                if (value1 == null && value2 != null)
                    result = -1;
                else if (value1 != null && value2 == null)
                    result = 1;
                else if (value1 == null && value2 == null)
                    result = 0;
                else if (typeof value1 === 'string' && typeof value2 === 'string')
                    result = value1.localeCompare(value2);
                else
                    result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;
                return (_this.sortOrder * result);
            });
            if (this.hasFilter()) {
                this.filter(this.filterValue);
            }
        }
        this.onSort.emit({
            sortField: this.sortField,
            sortOrder: this.sortOrder
        });
    };
    DataView.prototype.isEmpty = function () {
        var data = this.filteredValue || this.value;
        return data == null || data.length == 0;
    };
    DataView.prototype.createLazyLoadMetadata = function () {
        return {
            first: this.first,
            rows: this.rows,
            sortField: this.sortField,
            sortOrder: this.sortOrder
        };
    };
    DataView.prototype.getBlockableElement = function () {
        return this.el.nativeElement.children[0];
    };
    DataView.prototype.filter = function (filter) {
        this.filterValue = filter;
        if (this.value && this.value.length) {
            var searchFields = this.filterBy.split(',');
            this.filteredValue = objectutils_1.ObjectUtils.filter(this.value, searchFields, filter);
            if (this.filteredValue.length === this.value.length) {
                this.filteredValue = null;
            }
            if (this.paginator) {
                this.first = 0;
                this.totalRecords = this.filteredValue ? this.filteredValue.length : this.value ? this.value.length : 0;
            }
        }
    };
    DataView.prototype.hasFilter = function () {
        return this.filterValue && this.filterValue.trim().length > 0;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DataView.prototype, "layout", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], DataView.prototype, "paginator", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], DataView.prototype, "rows", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], DataView.prototype, "totalRecords", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], DataView.prototype, "pageLinks", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], DataView.prototype, "rowsPerPageOptions", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DataView.prototype, "paginatorPosition", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], DataView.prototype, "alwaysShowPaginator", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DataView.prototype, "paginatorDropdownAppendTo", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DataView.prototype, "currentPageReportTemplate", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], DataView.prototype, "showCurrentPageReport", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], DataView.prototype, "lazy", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DataView.prototype, "emptyMessage", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], DataView.prototype, "onLazyLoad", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DataView.prototype, "style", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DataView.prototype, "styleClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Function)
    ], DataView.prototype, "trackBy", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DataView.prototype, "filterBy", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], DataView.prototype, "loading", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DataView.prototype, "loadingIcon", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], DataView.prototype, "first", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], DataView.prototype, "onPage", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], DataView.prototype, "onSort", void 0);
    __decorate([
        core_1.ContentChild(shared_1.Header),
        __metadata("design:type", Object)
    ], DataView.prototype, "header", void 0);
    __decorate([
        core_1.ContentChild(shared_1.Footer),
        __metadata("design:type", Object)
    ], DataView.prototype, "footer", void 0);
    __decorate([
        core_1.ContentChildren(shared_1.PrimeTemplate),
        __metadata("design:type", core_1.QueryList)
    ], DataView.prototype, "templates", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], DataView.prototype, "sortField", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], DataView.prototype, "sortOrder", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], DataView.prototype, "value", null);
    DataView = __decorate([
        core_1.Component({
            selector: 'p-dataView',
            template: "\n        <div [ngClass]=\"{'ui-dataview ui-widget': true, 'ui-dataview-list': (layout === 'list'), 'ui-dataview-grid': (layout === 'grid')}\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <div class=\"ui-dataview-loading ui-widget-overlay\" *ngIf=\"loading\"></div>\n            <div class=\"ui-dataview-loading-content\" *ngIf=\"loading\">\n                <i [class]=\"'ui-dataview-loading-icon pi-spin ' + loadingIcon\"></i>\n            </div>\n            <div class=\"ui-dataview-header ui-widget-header ui-corner-top\">\n                <ng-content select=\"p-header\"></ng-content>\n            </div>\n            <p-paginator [rows]=\"rows\" [first]=\"first\" [totalRecords]=\"totalRecords\" [pageLinkSize]=\"pageLinks\" [alwaysShow]=\"alwaysShowPaginator\"\n                (onPageChange)=\"paginate($event)\" styleClass=\"ui-paginator-top\" [rowsPerPageOptions]=\"rowsPerPageOptions\" *ngIf=\"paginator && (paginatorPosition === 'top' || paginatorPosition =='both')\"\n                [dropdownAppendTo]=\"paginatorDropdownAppendTo\" [templateLeft]=\"paginatorLeftTemplate\" [templateRight]=\"paginatorRightTemplate\"\n                [currentPageReportTemplate]=\"currentPageReportTemplate\" [showCurrentPageReport]=\"showCurrentPageReport\"></p-paginator>\n            <div class=\"ui-dataview-content ui-widget-content\">\n                <div class=\"ui-g\">\n                    <ng-template ngFor let-rowData let-rowIndex=\"index\" [ngForOf]=\"paginator ? ((filteredValue||value) | slice:(lazy ? 0 : first):((lazy ? 0 : first) + rows)) : (filteredValue||value)\" [ngForTrackBy]=\"trackBy\">\n                        <ng-container *ngTemplateOutlet=\"itemTemplate; context: {$implicit: rowData, rowIndex: rowIndex}\"></ng-container>\n                    </ng-template>\n                    <div *ngIf=\"isEmpty()\" class=\"ui-g-12 ui-dataview-emptymessage\">{{emptyMessage}}</div>\n                </div>\n            </div>\n            <p-paginator [rows]=\"rows\" [first]=\"first\" [totalRecords]=\"totalRecords\" [pageLinkSize]=\"pageLinks\" [alwaysShow]=\"alwaysShowPaginator\"\n                (onPageChange)=\"paginate($event)\" styleClass=\"ui-paginator-bottom\" [rowsPerPageOptions]=\"rowsPerPageOptions\" *ngIf=\"paginator && (paginatorPosition === 'bottom' || paginatorPosition =='both')\"\n                [dropdownAppendTo]=\"paginatorDropdownAppendTo\" [templateLeft]=\"paginatorLeftTemplate\" [templateRight]=\"paginatorRightTemplate\"\n                [currentPageReportTemplate]=\"currentPageReportTemplate\" [showCurrentPageReport]=\"showCurrentPageReport\"></p-paginator>\n            <div class=\"ui-dataview-footer ui-widget-header ui-corner-bottom\" *ngIf=\"footer\">\n                <ng-content select=\"p-footer\"></ng-content>\n            </div>\n        </div>\n    "
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], DataView);
    return DataView;
}());
exports.DataView = DataView;
var DataViewLayoutOptions = /** @class */ (function () {
    function DataViewLayoutOptions(dv) {
        this.dv = dv;
    }
    DataViewLayoutOptions.prototype.changeLayout = function (event, layout) {
        this.dv.changeLayout(layout);
        event.preventDefault();
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DataViewLayoutOptions.prototype, "style", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DataViewLayoutOptions.prototype, "styleClass", void 0);
    DataViewLayoutOptions = __decorate([
        core_1.Component({
            selector: 'p-dataViewLayoutOptions',
            template: "\n        <div [ngClass]=\"'ui-dataview-layout-options ui-selectbutton ui-buttonset'\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <a tabindex=\"0\" class=\"ui-button ui-button-icon-only ui-state-default\" (click)=\"changeLayout($event, 'list')\" (keydown.enter)=\"changeLayout($event, 'list')\"\n                [ngClass]=\"{'ui-state-active': dv.layout === 'list'}\">\n                <i class=\"pi pi-bars ui-button-icon-left\"></i>\n                <span class=\"ui-button-text ui-clickable\">ui-btn</span>\n            </a><a tabindex=\"0\" class=\"ui-button ui-button-icon-only ui-state-default\" (click)=\"changeLayout($event, 'grid')\" (keydown.enter)=\"changeLayout($event, 'grid')\"\n                [ngClass]=\"{'ui-state-active': dv.layout === 'grid'}\">\n                <i class=\"pi pi-th-large ui-button-icon-left\"></i>\n                <span class=\"ui-button-text ui-clickable\">ui-btn</span>\n            </a>\n        </div>\n    "
        }),
        __metadata("design:paramtypes", [DataView])
    ], DataViewLayoutOptions);
    return DataViewLayoutOptions;
}());
exports.DataViewLayoutOptions = DataViewLayoutOptions;
var DataViewModule = /** @class */ (function () {
    function DataViewModule() {
    }
    DataViewModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, shared_1.SharedModule, paginator_1.PaginatorModule],
            exports: [DataView, shared_1.SharedModule, DataViewLayoutOptions],
            declarations: [DataView, DataViewLayoutOptions]
        })
    ], DataViewModule);
    return DataViewModule;
}());
exports.DataViewModule = DataViewModule;
//# sourceMappingURL=dataview.js.map

/***/ }),

/***/ "./node_modules/primeng/contextmenu.js":
/*!*********************************************!*\
  !*** ./node_modules/primeng/contextmenu.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/contextmenu/contextmenu */ "./node_modules/primeng/components/contextmenu/contextmenu.js"));

/***/ }),

/***/ "./node_modules/primeng/dataview.js":
/*!******************************************!*\
  !*** ./node_modules/primeng/dataview.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/dataview/dataview */ "./node_modules/primeng/components/dataview/dataview.js"));

/***/ }),

/***/ "./node_modules/primeng/tooltip.js":
/*!*****************************************!*\
  !*** ./node_modules/primeng/tooltip.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/tooltip/tooltip */ "./node_modules/primeng/components/tooltip/tooltip.js"));

/***/ }),

/***/ "./src/app/journal/journal-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/journal/journal-routing.module.ts ***!
  \***************************************************/
/*! exports provided: JournalRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JournalRoutingModule", function() { return JournalRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _journal_journal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./journal/journal.component */ "./src/app/journal/journal/journal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _journal_journal_component__WEBPACK_IMPORTED_MODULE_2__["JournalComponent"]
    }
];
var JournalRoutingModule = /** @class */ (function () {
    function JournalRoutingModule() {
    }
    JournalRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], JournalRoutingModule);
    return JournalRoutingModule;
}());



/***/ }),

/***/ "./src/app/journal/journal.module.ts":
/*!*******************************************!*\
  !*** ./src/app/journal/journal.module.ts ***!
  \*******************************************/
/*! exports provided: JournalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JournalModule", function() { return JournalModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _journal_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./journal-routing.module */ "./src/app/journal/journal-routing.module.ts");
/* harmony import */ var _journal_journal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./journal/journal.component */ "./src/app/journal/journal/journal.component.ts");
/* harmony import */ var _journal_menu_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./journal/menu/menu.component */ "./src/app/journal/journal/menu/menu.component.ts");
/* harmony import */ var _journal_hometask_hometask_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./journal/hometask/hometask.component */ "./src/app/journal/journal/hometask/hometask.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/toolbar */ "./node_modules/primeng/toolbar.js");
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_toolbar__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primeng_dataview__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/dataview */ "./node_modules/primeng/dataview.js");
/* harmony import */ var primeng_dataview__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_dataview__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var primeng_inputmask__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/inputmask */ "./node_modules/primeng/inputmask.js");
/* harmony import */ var primeng_inputmask__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_inputmask__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var primeng_contextmenu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/contextmenu */ "./node_modules/primeng/contextmenu.js");
/* harmony import */ var primeng_contextmenu__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeng_contextmenu__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/inputtextarea */ "./node_modules/primeng/inputtextarea.js");
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/dialog.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/tooltip */ "./node_modules/primeng/tooltip.js");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(primeng_tooltip__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/toast.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(primeng_toast__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _journal_journal_data_journal_data_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./journal/journal-data/journal-data.component */ "./src/app/journal/journal/journal-data/journal-data.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var JournalModule = /** @class */ (function () {
    function JournalModule() {
    }
    JournalModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _journal_routing_module__WEBPACK_IMPORTED_MODULE_2__["JournalRoutingModule"],
                primeng_toolbar__WEBPACK_IMPORTED_MODULE_7__["ToolbarModule"],
                primeng_dropdown__WEBPACK_IMPORTED_MODULE_8__["DropdownModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                primeng_dataview__WEBPACK_IMPORTED_MODULE_9__["DataViewModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_11__["TableModule"],
                primeng_inputmask__WEBPACK_IMPORTED_MODULE_12__["InputMaskModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_13__["CheckboxModule"],
                primeng_contextmenu__WEBPACK_IMPORTED_MODULE_14__["ContextMenuModule"],
                primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_15__["InputTextareaModule"],
                primeng_dialog__WEBPACK_IMPORTED_MODULE_16__["DialogModule"],
                primeng_tooltip__WEBPACK_IMPORTED_MODULE_17__["TooltipModule"],
                primeng_toast__WEBPACK_IMPORTED_MODULE_18__["ToastModule"],
                primeng_button__WEBPACK_IMPORTED_MODULE_10__["ButtonModule"]
            ],
            declarations: [
                _journal_journal_component__WEBPACK_IMPORTED_MODULE_3__["JournalComponent"],
                _journal_menu_menu_component__WEBPACK_IMPORTED_MODULE_4__["MenuComponent"],
                _journal_hometask_hometask_component__WEBPACK_IMPORTED_MODULE_5__["HometaskComponent"],
                _journal_journal_data_journal_data_component__WEBPACK_IMPORTED_MODULE_19__["JournalDataComponent"]
            ]
        })
    ], JournalModule);
    return JournalModule;
}());



/***/ }),

/***/ "./src/app/journal/journal/hometask/hometask.component.html":
/*!******************************************************************!*\
  !*** ./src/app/journal/journal/hometask/hometask.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"activeHomeTaskFile\">\n  <h3 class=\"text-center\">\n    <span>Домашнє завдання для обраної дати ({{activeMark.dateMark}})</span>\n  </h3>\n  <div class=\"single-hometask-container\">\n    <div class=\"hometask-description\" *ngIf=\"!(activeHomeTaskFile.homework === '')\">\n      <input type=\"text\"\n             class=\"hometask-description-input\"\n             placeholder=\"Додати опис\"\n             value=\"{{activeHomeTaskFile.homework}}\"\n             (change)=\"changeHometaskDescription($event)\" >\n    </div>\n    <div class=\"hometask-description\" *ngIf=\"(activeHomeTaskFile.homework === '')\">\n      <input type=\"text\"\n             class=\"hometask-description-input\"\n             placeholder=\"Додати опис\"\n             (change)=\"changeHometaskDescription($event)\">\n    </div>\n    <div>\n      <a *ngIf=\"(activeHomeTaskFile.fileName === null)\">Файл не завантажено</a>\n      <a *ngIf=\"!(activeHomeTaskFile.fileName === null)\"\n         (click)=\"openSingleHomeTask(activeHomeTaskFile)\">\n        {{activeHomeTaskFile.fileName}}\n      </a>\n    </div>\n    <div>\n      <input\n        class=\"file\"\n        pInputText\n        id=\"photo\"\n        type=\"file\"\n        #Image\n        accept=\"image/*\"\n        (change)=\"handlerFileInput($event.target.files)\"\n        name=\"photo\"\n      />\n    </div>\n    <div>\n      <p-button (onClick)=\"sendHomeTaskFile(uploadHomeTaskFile)\"\n                label=\"Зберегти зміни\">\n      </p-button>\n    </div>\n  </div>\n</ng-container>\n<ng-container *ngIf=\"activeJournal\">\n  <h3 class=\"text-center\">\n    <span>Домашнє завдання для </span>\n    <span *ngIf=\"activeJournal\">\n      {{activeJournal ? activeJournal.className + ' класу з предмету \"' + activeJournal.subjectName + '\"' : 'Відсутні дані'}}\n    </span>\n  </h3>\n  <p-dataView #dv\n              [value]=\"hometasksToDisplay\"\n              [paginator]=\"true\"\n              [rows]=\"10\"\n              paginatorPosition=\"top\"\n              filterBy=\"homework\"\n              [sortField]=\"sortField\"\n              emptyMessage=\"Домашні завдання відсутні\"\n              [sortOrder]=\"sortOrder\">\n    <p-header>\n      <div class=\"ui-helper-clearfix\">\n        <div class=\"ui-g\">\n          <div class=\"ui-g-12 ui-md-4 order-selector\">\n            <p-dropdown [options]=\"sortOptions\"\n                        [(ngModel)]=\"sortKey\"\n                        placeholder=\"Сортування:\"\n                        (onChange)=\"onSortChange($event)\"\n                        [autoWidth]=\"false\">\n            </p-dropdown>\n          </div>\n          <div class=\"ui-g-6 ui-md-4 filter-container\">\n            <div>\n              <input class=\"ui-inputtext ui-corner-all ui-state-default ui-widget\"\n                     type=\"search\"\n                     pInputText\n                     placeholder=\"Шукати по опису\"\n                     (keyup)=\"dv.filter($event.target.value)\">\n            </div>\n          </div>\n          <div class=\"ui-g-6 ui-md-4 past-task-enabler\">\n            <p-checkbox [(ngModel)]=\"showPastTasks\"\n                        (onChange)=\"onPastTasksChange()\"\n                        binary=\"true\"></p-checkbox>\n            <span>Відображати минулі домашні завдання</span>\n          </div>\n        </div>\n      </div>\n    </p-header>\n    <ng-template let-hometask pTemplate=\"listItem\">\n      <div class=\"ui-g hometask-row\">\n        <div class=\"ui-g-12 ui-md-3\">\n          {{hometask.date}}\n        </div>\n        <div class=\"ui-g-12 ui-md-6\">\n          {{hometask.homework}}\n        </div>\n        <div class=\"ui-g-12 ui-md-3\">\n          <p-button *ngIf=\"hometask.fileName\" icon=\"pi pi-file\"\n                    (onClick)=\"openHomeTask(hometask.idLesson)\">\n          </p-button>\n        </div>\n      </div>\n    </ng-template>\n  </p-dataView>\n</ng-container>\n"

/***/ }),

/***/ "./src/app/journal/journal/hometask/hometask.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/journal/journal/hometask/hometask.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".file {\n  text-align: center; }\n\n.hometask-row {\n  border-bottom: 1px solid #d9d9d9; }\n\n.hometask-row > div {\n    text-align: center; }\n\n.text-center {\n  text-align: center; }\n\n.single-hometask-container {\n  display: flex;\n  width: 90%;\n  justify-content: center;\n  margin: 0 auto;\n  flex-wrap: wrap; }\n\n.single-hometask-container > div {\n    border: 1px solid #c8c8c8;\n    padding: 20px;\n    flex-basis: 25%;\n    align-items: center;\n    display: flex;\n    justify-content: center; }\n\n.past-task-enabler {\n  display: flex;\n  align-items: center; }\n\n.past-task-enabler p-checkbox {\n    margin-right: 15px; }\n\n.hometask-description-input {\n  min-width: 200px; }\n\n::ng-deep .order-selector p-dropdown > div {\n  min-width: 15em; }\n\n::ng-deep .ui-dataview-emptymessage {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9kaWR1a2g4Ni9maW5hbF9wcm9qZWN0L3NyYy9hcHAvam91cm5hbC9qb3VybmFsL2hvbWV0YXNrL2hvbWV0YXNrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0UsZ0NBQWdDLEVBQUE7O0FBRGxDO0lBR0ksa0JBQWlCLEVBQUE7O0FBR3JCO0VBQ0Usa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0UsYUFBYTtFQUNiLFVBQVU7RUFDVix1QkFBdUI7RUFDdkIsY0FBYztFQUNkLGVBQWUsRUFBQTs7QUFMakI7SUFPSSx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHVCQUF1QixFQUFBOztBQUczQjtFQUNFLGFBQWE7RUFDYixtQkFBbUIsRUFBQTs7QUFGckI7SUFJSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDRSxnQkFBZ0IsRUFBQTs7QUFFbEI7RUFHTSxlQUFlLEVBQUE7O0FBSXJCO0VBQ0Usa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9qb3VybmFsL2pvdXJuYWwvaG9tZXRhc2svaG9tZXRhc2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5ob21ldGFzay1yb3cge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q5ZDlkOTtcbiAgPiBkaXYge1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICB9XG59XG4udGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc2luZ2xlLWhvbWV0YXNrLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA5MCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IDAgYXV0bztcbiAgZmxleC13cmFwOiB3cmFwO1xuICA+IGRpdiB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2M4YzhjODtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGZsZXgtYmFzaXM6IDI1JTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn1cbi5wYXN0LXRhc2stZW5hYmxlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHAtY2hlY2tib3gge1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgfVxufVxuLmhvbWV0YXNrLWRlc2NyaXB0aW9uLWlucHV0IHtcbiAgbWluLXdpZHRoOiAyMDBweDtcbn1cbjo6bmctZGVlcCAub3JkZXItc2VsZWN0b3Ige1xuICBwLWRyb3Bkb3duIHtcbiAgICA+ZGl2IHtcbiAgICAgIG1pbi13aWR0aDogMTVlbTtcbiAgICB9XG4gIH1cbn1cbjo6bmctZGVlcCAudWktZGF0YXZpZXctZW1wdHltZXNzYWdlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/journal/journal/hometask/hometask.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/journal/journal/hometask/hometask.component.ts ***!
  \****************************************************************/
/*! exports provided: HometaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HometaskComponent", function() { return HometaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_teacher_journals_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/teacher-journals.service */ "./src/app/services/teacher-journals.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HometaskComponent = /** @class */ (function () {
    function HometaskComponent(teacherJournalService, messageService) {
        this.teacherJournalService = teacherJournalService;
        this.messageService = messageService;
        this.showPastTasks = false;
        this.today = new Date();
        this.fileToUpload = null;
    }
    HometaskComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.teacherJournalService.journalChanged.subscribe(function (journal) {
            _this.activeJournal = journal;
            _this.getSelectedMarks();
            _this.teacherJournalService.getHomeworks(_this.activeJournal.idSubject, _this.activeJournal.idClass)
                .subscribe(function (hometasks) {
                _this.hometasks = hometasks;
                _this.hometasksToDisplay = _this.hometasks.filter(function (hometask) {
                    return _this.isHometaskEnableToShow(hometask.date, _this.showPastTasks);
                });
            });
        });
        this.sortOptions = [
            { label: 'Спочатку нові', value: '!date' },
            { label: 'Спочатку старі', value: 'date' },
            { label: 'По опису', value: 'homework' }
        ];
        this.currentDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(this.today, 'yyyy.MM.dd', 'en-US', '+0200');
    };
    HometaskComponent.prototype.getSelectedMarks = function () {
        var _this = this;
        this.teacherJournalService.markSelected.subscribe(function (mark) {
            _this.activeMark = mark;
            _this.teacherJournalService.getHomeTaskFile(mark.idLesson).subscribe(function (homeTaskFile) {
                _this.activeHomeTaskFile = homeTaskFile;
                _this.uploadHomeTaskFile = homeTaskFile;
            });
        });
    };
    HometaskComponent.prototype.onSortChange = function (event) {
        var value = event.value;
        if (value.indexOf('!') === 0) {
            this.sortOrder = -1;
            this.sortField = value.substring(1, value.length);
        }
        else {
            this.sortOrder = 1;
            this.sortField = value;
        }
    };
    HometaskComponent.prototype.openHomeTask = function (idLesson) {
        var fileUrl;
        var fileData;
        var fileType;
        if (!idLesson) {
            fileUrl = '';
        }
        else {
            fileData = this.homeTaskFiles[idLesson].fileData;
            fileType = this.homeTaskFiles[idLesson].fileType;
            fileUrl = this.teacherJournalService.getHomeTaskFileUrl(fileData, fileType);
        }
        window.open(fileUrl);
    };
    HometaskComponent.prototype.openSingleHomeTask = function (activeHomeTaskFile) {
        var fileUrl;
        var fileData;
        var fileType;
        fileData = activeHomeTaskFile.fileData;
        fileType = activeHomeTaskFile.fileType;
        fileUrl = this.teacherJournalService.getHomeTaskFileUrl(fileData, fileType);
        window.open(fileUrl);
    };
    HometaskComponent.prototype.onPastTasksChange = function () {
        var _this = this;
        this.hometasksToDisplay = this.hometasks.filter(function (hometask) {
            return _this.isHometaskEnableToShow(hometask.date, _this.showPastTasks);
        });
        this.homeTaskFiles = [];
        this.hometasksToDisplay.forEach(function (hometask) {
            if (hometask.fileName) {
                _this.teacherJournalService.getHomeTaskFile(hometask.idLesson).subscribe(function (homeTaskFile) {
                    _this.homeTaskFiles[homeTaskFile.idLesson] = homeTaskFile;
                });
            }
        });
    };
    HometaskComponent.prototype.isHometaskEnableToShow = function (hometaskDate, showPast) {
        if (showPast === void 0) { showPast = false; }
        var rule = showPast;
        if (hometaskDate > this.currentDate) {
            rule = true;
        }
        return rule;
    };
    HometaskComponent.prototype.sendHomeTaskFile = function (uploadHomeTaskFile) {
        var _this = this;
        this.teacherJournalService.putHomeTaskFile(uploadHomeTaskFile)
            .subscribe(function (status) {
            if (status.code && status.code !== 201) {
                _this.showNotification('error', 'Завдання не збережно!', status.message);
            }
            else {
                _this.showNotification('success', 'Завдання збережно!', status.message);
            }
        });
    };
    HometaskComponent.prototype.showNotification = function (type, message, detail) {
        var list = ['info', 'warn', 'error', 'success'];
        if (list.indexOf(type) >= 0) {
            this.messageService.add({
                key: 'error',
                severity: type,
                summary: message,
                detail: detail
            });
        }
        else {
            this.messageService.add({
                key: 'error',
                severity: 'info',
                summary: message,
                detail: detail
            });
        }
    };
    HometaskComponent.prototype.changeHometaskDescription = function (homework) {
        this.uploadHomeTaskFile.homework = homework.target.value;
    };
    HometaskComponent.prototype.handlerFileInput = function (file) {
        var _this = this;
        this.fileToUpload = file.item(0);
        var reader = new FileReader();
        reader.onload = function (event) {
            if (file.item(0).size > 500000) {
                _this.fileData = 'Перевищено максимальний розмір 500 кб';
            }
            else {
                _this.fileData = '';
                _this.uploadHomeTaskFile.fileData = event.target.result.toString().split(',')[1];
            }
        };
        reader.readAsDataURL(this.fileToUpload);
        this.uploadHomeTaskFile.fileType = this.fileToUpload.type;
        this.uploadHomeTaskFile.fileName = this.fileToUpload.name;
    };
    HometaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hometask',
            template: __webpack_require__(/*! ./hometask.component.html */ "./src/app/journal/journal/hometask/hometask.component.html"),
            styles: [__webpack_require__(/*! ./hometask.component.scss */ "./src/app/journal/journal/hometask/hometask.component.scss")],
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_1__["MessageService"]]
        }),
        __metadata("design:paramtypes", [_services_teacher_journals_service__WEBPACK_IMPORTED_MODULE_2__["TeacherJournalsService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_1__["MessageService"]])
    ], HometaskComponent);
    return HometaskComponent;
}());



/***/ }),

/***/ "./src/app/journal/journal/journal-data/journal-data.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/journal/journal/journal-data/journal-data.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"isDataRecived === true && journalData.length < 1\"><h2>Немає даних!</h2></ng-container>\n<ng-container *ngIf=\"isDataRecived === true\">\n    <p-table [columns]=\"scrollableCols\" [frozenColumns]=\"frozenCols\" [value]=\"journalData\" [scrollable]=\"true\"\n        [(contextMenuSelection)]=\"selectedMark\" [contextMenu]=\"contextMenu\"\n        scrollHeight=\"401px\" frozenWidth=\"20rem\" [ngStyle]=\"{'margin-bottom': '0px'}\">\n        <ng-template pTemplate=\"colgroup\" let-columns>\n            <colgroup>\n                <col *ngFor=\"let col of columns\" [style.width]=\"col.width\">\n            </colgroup>\n        </ng-template>\n        <ng-template pTemplate=\"header\" let-columns>\n            <tr>\n                <th *ngFor=\"let col of columns\" [ngStyle]=\"{'background-color':bgColorForMarkType(col)}\" class=\"journalHeader\" (click)=\"daySelected(col)\">\n                        <ng-container *ngIf=\"(+col.field + 1)\">\n                                <div>{{col.header.split(',')[2]}}</div>\n                                <div>{{col.header.split(',')[1]}}</div>\n                                <div class=\"lessonType\">{{col.header.split(',')[0]}}</div>\n                        </ng-container>\n                        <ng-container *ngIf=\"!(+col.field + 1)\">\n                            <div >{{col.header}}</div>\n                        </ng-container>\n                </th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n            <tr>\n                <td *ngFor=\"let col of columns\"\n                    [style.background-color]=\"isSelected(rowData,col.field) ? '#bcdfff' : '#fff'\" \n                    (click)=\"singleClick(rowData,col.field)\" \n                    (dblclick)=\"doubleClick(rowData,col.field)\"  [ngSwitch]=\"col.field\" class=\"journalDataCell\">\n                        <ng-container *ngSwitchCase=\"'rating'\">\n                            <div class=\"calculations\"><span>{{rowData.rating[0] | number:'1.1-2'}}</span>/<span>{{rowData.rating[1] | number:'1.1-2'}}</span></div>\n                        </ng-container>\n                        <ng-container *ngSwitchCase=\"'studentFullName'\">{{rowData.studentFullName}}</ng-container>\n                        <ng-container *ngSwitchDefault>\n                            <div *ngIf=\"!isEditMode(rowData, col.field) && rowData.marks[col.field].mark\" class=\"mark\" [pTooltip]=\"rowData.marks[col.field].note\" [hideDelay]=\"200\" [pContextMenuRow]=\"{row:rowData, col:col}\">\n                                {{markStudent(rowData, col.field)}}\n                            </div>\n                            <div *ngIf=\"isEditMode(rowData, col.field)\" >\n                                <p-inputMask class=\"editCell\" \n                                    mask=\"?9*\" autoFocus=\"true\"\n                                    slotChar=\"\"\n                                    autoClear=\"false\"\n                                    characterPattern=\"[0-9][0-2]\"\n                                    unmask=\"true\"\n                                    maxlenght=\"2\" size=\"2\" pInputText \n                                    [(ngModel)]=\"rowData.marks[col.field].mark\" \n                                    (onBlur)=\"markEditExit(rowData, col.field)\" \n                                    #box (keyup.enter)=\"markEditExit(rowData, col.field)\" \n                                    #box (keyup)=\"onKeydown($event)\"> \n                                </p-inputMask>\n                            </div>\n                        </ng-container>\n                </td>\n            </tr>\n        </ng-template>\n    </p-table>\n</ng-container>\n<p-contextMenu #contextMenu [model]=\"contextMenuItems\"></p-contextMenu>\n<p-dialog\n  header=\"Доповнення до оцінки\"\n  [(visible)]=\"isDisplayDialogVisable\"\n  [responsive]=\"true\"\n  showEffect=\"fade\"\n  [modal]=\"true\"\n  [width]=\"260\"\n  [height]=\"400\"\n  [minWidth]=\"200\"\n  #overlay>\n    <textarea pInputTextarea [(ngModel)]=\"markDescription\"></textarea>\n    <p-footer>\n        <button type=\"button\" pButton icon=\"pi pi-check\" (click)=\"storeMarkDescription()\" label=\"Зберегти\"></button>\n    </p-footer>\n</p-dialog>\n<p-toast [style]=\"{marginTop: '80px'}\" position=\"top-center\" key=\"error\"></p-toast>"

/***/ }),

/***/ "./src/app/journal/journal/journal-data/journal-data.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/journal/journal/journal-data/journal-data.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p-dropdown {\n  margin-left: 20px; }\n\n.ui-table-scrollable-header-table {\n  overflow-y: scroll;\n  overflow: hidden; }\n\n.cellContainer {\n  height: 18px;\n  align-content: center; }\n\n.mark {\n  align-content: center;\n  text-align: center;\n  height: 19px; }\n\n.editCell {\n  padding: 2px;\n  height: 10px;\n  text-align: center; }\n\n::ng-deep body .editCell .ui-inputtext {\n  padding: 0 2px;\n  margin: 0 1px;\n  border: 0px;\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.lessonType {\n  font-size: 0.6em; }\n\n.journalHeader {\n  height: 5.2em; }\n\n.calculations {\n  text-align: center; }\n\n.journalDataCell {\n  height: 2.5em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9kaWR1a2g4Ni9maW5hbF9wcm9qZWN0L3NyYy9hcHAvam91cm5hbC9qb3VybmFsL2pvdXJuYWwtZGF0YS9qb3VybmFsLWRhdGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsWUFBWTtFQUNaLHFCQUFxQixFQUFBOztBQUV2QjtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsWUFBWSxFQUFBOztBQUdkO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0IsRUFBQTs7QUFFcEI7RUFHTSxjQUFjO0VBQ2QsYUFBYTtFQUNiLFdBQVc7RUFDWCxxQ0FBa0MsRUFBQTs7QUFJeEM7RUFDRSxnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSxhQUFhLEVBQUE7O0FBRWY7RUFDRSxrQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSxhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9qb3VybmFsL2pvdXJuYWwvam91cm5hbC1kYXRhL2pvdXJuYWwtZGF0YS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInAtZHJvcGRvd24ge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuLnVpLXRhYmxlLXNjcm9sbGFibGUtaGVhZGVyLXRhYmxlIHtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cbi5jZWxsQ29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxOHB4O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG4ubWFyayB7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDE5cHg7XG59XG5cbi5lZGl0Q2VsbCB7XG4gIHBhZGRpbmc6IDJweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG46Om5nLWRlZXAgYm9keSB7XG4gIC5lZGl0Q2VsbCB7XG4gICAgLnVpLWlucHV0dGV4dCB7XG4gICAgICBwYWRkaW5nOiAwIDJweDtcbiAgICAgIG1hcmdpbjogMCAxcHg7XG4gICAgICBib3JkZXI6IDBweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4wNSk7XG4gICAgfVxuICB9XG59XG4ubGVzc29uVHlwZSB7XG4gIGZvbnQtc2l6ZTogMC42ZW07XG59XG4uam91cm5hbEhlYWRlciB7XG4gIGhlaWdodDogNS4yZW07XG59XG4uY2FsY3VsYXRpb25zIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmpvdXJuYWxEYXRhQ2VsbCB7XG4gIGhlaWdodDogMi41ZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/journal/journal/journal-data/journal-data.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/journal/journal/journal-data/journal-data.component.ts ***!
  \************************************************************************/
/*! exports provided: JournalDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JournalDataComponent", function() { return JournalDataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_teacher_journals_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/teacher-journals.service */ "./src/app/services/teacher-journals.service.ts");
/* harmony import */ var src_app_models_journalData_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/journalData.model */ "./src/app/models/journalData.model.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_pageTitle_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/pageTitle.service */ "./src/app/services/pageTitle.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var JournalDataComponent = /** @class */ (function () {
    function JournalDataComponent(teacherJournalService, messageService, pageTitle) {
        this.teacherJournalService = teacherJournalService;
        this.messageService = messageService;
        this.pageTitle = pageTitle;
        this.isDataRecived = false;
        this.isDisplayDialogVisable = false;
        this.frozenCols = [
            new Header('studentFullName', 'Студент', '14rem'),
            new Header('rating', 'Середня Рейтинг', '6rem')
        ];
    }
    JournalDataComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pageTitle.setTitle('Католицька Школа - Журнал');
        this.contextMenuItems = [
            {
                label: 'Опис оцінки',
                icon: 'pi pi-comments',
                command: function () { return _this.changeDescription(); }
            },
            {
                label: 'Видалити',
                icon: 'pi pi-times',
                command: function () { return _this.deleteMark(); }
            },
            {
                label: 'Вибрати',
                icon: 'pi pi-check',
                items: [
                    {
                        label: 'за місяць',
                        icon: 'pi pi-ellipsis-v',
                        command: function () { return _this.selectMarksMonth(false); }
                    },
                    {
                        label: 'всіх за місяць',
                        icon: 'pi pi-bars',
                        command: function () { return _this.selectMarksMonth(true); }
                    }
                ]
            },
            {
                label: 'Інверт вибір',
                icon: 'pi pi-check',
                items: [
                    {
                        label: 'за місяць',
                        icon: 'pi pi-ellipsis-v',
                        command: function () { return _this.selectMarksMonth(false, true); }
                    },
                    {
                        label: 'всіх за місяць',
                        icon: 'pi pi-bars',
                        command: function () { return _this.selectMarksMonth(true, true); }
                    }
                ]
            }
        ];
        this.subscribeData();
    };
    JournalDataComponent.prototype.subscribeData = function () {
        var _this = this;
        this.teacherJournalService.journalChanged.subscribe(function (journal) {
            _this.teacherJournalService
                .getjournals(journal.idSubject, journal.idClass)
                .subscribe(function (data) {
                _this.journalData = data;
                _this.sortingByDate();
                _this.sortingByAlphabet();
                _this.replaceNames();
                _this.countRating();
                _this.scrollableCols = _this.journalDeys;
                _this.isDataRecived = data.length > 0;
                if (data.length < 1) {
                    _this.showNotification('warn', 'Журнал порожній', 'Адміністратор має заповнити дані про клас та визначити графік');
                }
            });
        });
    };
    // sorting journalData by date
    JournalDataComponent.prototype.sortingByDate = function () {
        this.journalData.forEach(function (item) {
            item.marks.sort(function (day1, day2) {
                return +new Date(day1.dateMark.replace(/\./g, '-')) - +new Date(day2.dateMark.replace(/\./g, '-'));
            });
        });
    };
    // sorting journalData by alphabet
    JournalDataComponent.prototype.sortingByAlphabet = function () {
        this.journalData.sort(function (name1, name2) {
            return name1.studentFullName.split(' ')[1].localeCompare(name2.studentFullName.split(' ')[1]);
        });
    };
    // changes names in places
    JournalDataComponent.prototype.replaceNames = function () {
        this.journalData.forEach(function (item) {
            return item.studentFullName = item.studentFullName.split(' ')[1] + ' ' + item.studentFullName.split(' ')[0];
        });
    };
    Object.defineProperty(JournalDataComponent.prototype, "journalDeys", {
        get: function () {
            var _this = this;
            if (this.journalData && this.journalData.length > 0) {
                return this.journalData[0].marks.map(function (mark, index) {
                    var dayType = mark.typeMark ? mark.typeMark + ',' : ',';
                    var weekDay = _this.dayForMonth(mark.dateMark) + ',';
                    var day = mark.dateMark.slice(mark.dateMark.indexOf('.') + 1);
                    var formatedDay = day.split('.')[1] + '/' + day.split('.')[0];
                    return {
                        field: '' + index,
                        header: dayType + weekDay + formatedDay,
                        width: '5em'
                    };
                });
            }
            else {
                return;
            }
        },
        enumerable: true,
        configurable: true
    });
    JournalDataComponent.prototype.countRating = function () {
        this.journalData = this.journalData.map(function (student) {
            var totalRating = 0;
            var countMarks = 0;
            var countSelected = 0;
            var totalSelected = 0;
            student.marks.forEach(function (mark) {
                if (mark.mark) {
                    countMarks++;
                    totalRating = totalRating + +mark.mark;
                    if (mark.isSelected) {
                        totalSelected = totalSelected + +mark.mark;
                        countSelected++;
                    }
                }
            });
            var prepareStudent = new src_app_models_journalData_model__WEBPACK_IMPORTED_MODULE_2__["JournalData"](student.idStudent, student.marks, student.studentFullName);
            if (totalRating > 0) {
                prepareStudent.rating[0] = totalRating / countMarks;
            }
            if (countSelected > 0) {
                prepareStudent.rating[1] = totalSelected / countSelected;
            }
            return prepareStudent;
        });
    };
    JournalDataComponent.prototype.dayForMonth = function (date) {
        var weakDay = new Date(date.replace(/\./g, '-')).getDay();
        var days = ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
        return days[weakDay];
    };
    JournalDataComponent.prototype.markStudent = function (student, markIndex) {
        if (!isNaN(markIndex)) {
            var mark = student.marks[markIndex].mark;
            if (mark) {
                return mark;
            }
            else {
                return '';
            }
        }
        else {
            return student[markIndex];
        }
    };
    JournalDataComponent.prototype.singleClick = function (student, mark) {
        var _this = this;
        if (isNaN(mark)) {
            return;
        }
        if (student.marks[mark].isEdit) {
            return;
        }
        this.preventSimpleClick = false;
        var delay = 200;
        this.timerDoubleClick = setTimeout(function () {
            if (!_this.preventSimpleClick) {
                _this.selected(student, mark);
            }
        }, delay);
    };
    JournalDataComponent.prototype.doubleClick = function (student, mark) {
        this.preventSimpleClick = true;
        clearTimeout(this.timerDoubleClick);
        this.edit(student, mark);
    };
    JournalDataComponent.prototype.selected = function (student, mark) {
        if (student.marks[mark].mark) {
            student.marks[mark].isSelected = !student.marks[mark].isSelected;
            this.teacherJournalService.markSelect(student.marks[mark]);
            this.countRating();
        }
    };
    JournalDataComponent.prototype.daySelected = function (day) {
        if (!day) {
            return;
        }
        var indexDay = +day.field;
        if (isNaN(indexDay)) {
            return;
        }
        this.journalData.forEach(function (student) {
            if (student.marks[indexDay].mark && +student.marks[indexDay].mark > 0) {
                student.marks[indexDay].isSelected = !student.marks[indexDay]
                    .isSelected;
            }
        });
        if (this.journalData.length > 0) {
            this.teacherJournalService.markSelect(this.journalData[0].marks[indexDay]);
        }
        this.countRating();
    };
    JournalDataComponent.prototype.edit = function (student, mark) {
        if (isNaN(mark) || !student) {
            return;
        }
        student.marks[mark].isEdit = true;
        student.marks[mark].isSelected = false;
    };
    JournalDataComponent.prototype.isEditMode = function (student, mark) {
        if (student.marks[mark]) {
            if (student.marks[mark].isEdit) {
                return student.marks[mark].isEdit;
            }
        }
    };
    JournalDataComponent.prototype.isSelected = function (student, mark) {
        return (student.marks[mark] &&
            student.marks[mark].isSelected &&
            student.marks[mark].isSelected);
    };
    JournalDataComponent.prototype.bgColorForMarkType = function (col) {
        if (!col) {
            return 'mark';
        }
        var indexMark = +col.field;
        if (!(indexMark + 1) || this.journalData.length < 1) {
            return '#f4f4f4';
        }
        var mark = this.journalData[0].marks[indexMark];
        if (!mark.typeMark) {
            return '#f4f4f4';
        }
        switch (mark.typeMark.toLowerCase()) {
            case 'лабораторна':
                return 'rgba(255, 205, 150, 0.5)';
            case 'контрольна':
                return 'rgba(0, 255, 0, 0.5)';
            case 'тематична':
                return 'rgba(255, 0, 0, 0.5)';
            default:
                return '#f4f4f4';
        }
    };
    JournalDataComponent.prototype.markEditExit = function (student, mark) {
        var _this = this;
        if (student.marks[mark]) {
            if (student.marks[mark].isEdit) {
                student.marks[mark].isEdit = false;
                this.markEditValue = '';
                var markValue = +student.marks[mark].mark;
                if (markValue > 12) {
                    markValue = 12;
                }
                if (markValue < 1) {
                    return;
                }
                student.marks[mark].mark = '' + markValue;
                this.teacherJournalService
                    .sendMark(student.marks[mark], student.idStudent)
                    .subscribe(function (status) {
                    if (status.code && status.code !== 201) {
                        _this.showNotification('error', 'Оцінка не збережена!', status.message);
                    }
                });
                this.countRating();
            }
        }
    };
    JournalDataComponent.prototype.onKeydown = function (event) {
        if (event.target.value) {
            if (+event.target.value > 12) {
                event.target.value = '12';
                return false;
            }
            else {
                if (event.target.value.charAt(0) === '0') {
                    event.target.value = '';
                }
            }
        }
    };
    JournalDataComponent.prototype.resetMarks = function (marks) {
        return marks.map(function (mark) {
            mark.isSelected = false;
            mark.isEdit = false;
            return mark;
        });
    };
    JournalDataComponent.prototype.deleteMark = function () {
        var _this = this;
        if (!this.selectedMark ||
            !this.selectedMark.row ||
            !this.selectedMark.col) {
            this.isDisplayDialogVisable = false;
            return;
        }
        else {
            var studentIndex = this.journalData.indexOf(this.selectedMark.row);
            if (!isNaN(+this.selectedMark.col.field)) {
                var markForDelete_1 = this.journalData[studentIndex].marks[this.selectedMark.col.field];
                markForDelete_1.mark = '0';
                markForDelete_1.note = '';
                this.teacherJournalService
                    .sendMark(markForDelete_1, this.journalData[studentIndex].idStudent)
                    .subscribe(function (status) {
                    if (status.code && status.code !== 201) {
                        _this.showNotification('error', 'Видалення не вдалось!', status.message);
                    }
                    else {
                        if (markForDelete_1.isSelected) {
                            markForDelete_1.isSelected = false;
                        }
                        markForDelete_1.mark = undefined;
                        _this.countRating();
                    }
                });
            }
        }
    };
    JournalDataComponent.prototype.changeDescription = function () {
        if (!this.selectedMark ||
            !this.selectedMark.row ||
            !this.selectedMark.col) {
            this.isDisplayDialogVisable = false;
            return;
        }
        var colomn = +this.selectedMark.col.field;
        if (isNaN(colomn) || colomn === undefined) {
            return;
        }
        else {
            this.markDescription = this.selectedMark.row.marks[colomn].note;
            this.isDisplayDialogVisable = true;
        }
    };
    JournalDataComponent.prototype.storeMarkDescription = function () {
        var _this = this;
        var studentIndex = this.journalData.indexOf(this.selectedMark.row);
        var storeMark = this.selectedMark.row.marks[this.selectedMark.col.field];
        storeMark.note = this.markDescription;
        this.teacherJournalService
            .sendMark(storeMark, this.journalData[studentIndex].idStudent)
            .subscribe(function (status) {
            if (status.code && status.code !== 201) {
                _this.showNotification('error', 'Опис оцінки не змінено!', status.message);
            }
            _this.isDisplayDialogVisable = false;
        });
    };
    JournalDataComponent.prototype.selectMarksMonth = function (all, invert) {
        if (all === void 0) { all = false; }
        if (invert === void 0) { invert = false; }
        var month = this.selectedMark.col.header.split(',')[2].split('/')[1];
        if (all) {
            this.journalData.forEach(function (student) {
                student.marks.forEach(function (mark) {
                    if (mark.mark && mark.dateMark.split('.')[1] === month) {
                        mark.isEdit = false;
                        mark.isSelected = invert ? !mark.isSelected : true;
                    }
                });
            });
        }
        else {
            var selectedStudent = this.journalData.indexOf(this.selectedMark.row);
            if (isNaN(selectedStudent)) {
                return;
            }
            else {
                this.journalData[selectedStudent].marks.forEach(function (mark) {
                    if (mark.mark && mark.dateMark.split('.')[1] === month) {
                        mark.isEdit = false;
                        mark.isSelected = invert ? !mark.isSelected : true;
                    }
                });
            }
        }
        this.countRating();
    };
    JournalDataComponent.prototype.showNotification = function (type, message, detail) {
        var list = ['info', 'warn', 'error', 'success'];
        if (list.indexOf(type) >= 0) {
            this.messageService.add({
                key: 'error',
                severity: type,
                summary: message,
                detail: detail
            });
        }
        else {
            this.messageService.add({
                key: 'error',
                severity: 'info',
                summary: message,
                detail: detail
            });
        }
    };
    JournalDataComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-journal-data',
            template: __webpack_require__(/*! ./journal-data.component.html */ "./src/app/journal/journal/journal-data/journal-data.component.html"),
            styles: [__webpack_require__(/*! ./journal-data.component.scss */ "./src/app/journal/journal/journal-data/journal-data.component.scss")],
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"], _services_pageTitle_service__WEBPACK_IMPORTED_MODULE_4__["PageTitleService"]]
        }),
        __metadata("design:paramtypes", [src_app_services_teacher_journals_service__WEBPACK_IMPORTED_MODULE_1__["TeacherJournalsService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"],
            _services_pageTitle_service__WEBPACK_IMPORTED_MODULE_4__["PageTitleService"]])
    ], JournalDataComponent);
    return JournalDataComponent;
}());

var Header = /** @class */ (function () {
    function Header(field, header, width) {
        this.field = field;
        this.header = header;
        this.width = width;
    }
    return Header;
}());


/***/ }),

/***/ "./src/app/journal/journal/journal.component.html":
/*!********************************************************!*\
  !*** ./src/app/journal/journal/journal.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-menu></app-menu>\n<app-journal-data></app-journal-data>\n<app-hometask></app-hometask>\n"

/***/ }),

/***/ "./src/app/journal/journal/journal.component.scss":
/*!********************************************************!*\
  !*** ./src/app/journal/journal/journal.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-journal {\n  min-height: 500px;\n  width: 100%;\n  background-color: #ccc;\n  margin: 15px 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-transform: uppercase; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9kaWR1a2g4Ni9maW5hbF9wcm9qZWN0L3NyYy9hcHAvam91cm5hbC9qb3VybmFsL2pvdXJuYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2QsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIseUJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9qb3VybmFsL2pvdXJuYWwvam91cm5hbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWpvdXJuYWwge1xuICBtaW4taGVpZ2h0OiA1MDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gIG1hcmdpbjogMTVweCAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/journal/journal/journal.component.ts":
/*!******************************************************!*\
  !*** ./src/app/journal/journal/journal.component.ts ***!
  \******************************************************/
/*! exports provided: JournalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JournalComponent", function() { return JournalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JournalComponent = /** @class */ (function () {
    function JournalComponent() {
    }
    JournalComponent.prototype.ngOnInit = function () {
    };
    JournalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-journal',
            template: __webpack_require__(/*! ./journal.component.html */ "./src/app/journal/journal/journal.component.html"),
            styles: [__webpack_require__(/*! ./journal.component.scss */ "./src/app/journal/journal/journal.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], JournalComponent);
    return JournalComponent;
}());



/***/ }),

/***/ "./src/app/journal/journal/menu/menu.component.html":
/*!**********************************************************!*\
  !*** ./src/app/journal/journal/menu/menu.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br />\n<p-toolbar>\n  <div class=\"ui-toolbar-group-left journal-menu\">\n    <p-dropdown [options]=\"displayJournalsByClass\"\n                [(ngModel)]=\"selectedClassName\"\n                optionLabel=\"className\"\n                placeholder=\"Оберіть клас:\"\n                (onChange)=\"showSubjects()\">\n    </p-dropdown>\n    <p-dropdown\n      [options]=\"displayJournalsBySubject\"\n      [(ngModel)]=\"selectedSubjectName\"\n      optionLabel=\"subjectName\"\n      placeholder=\"Оберіть предмет:\"\n    >\n    </p-dropdown>\n    <span class=\"selected-year\" *ngIf=\"selectedClassName\"\n      >{{\n        selectedClassName\n          ? 'Обраний навчальний рік: ' + selectedClassName.academicYear\n          : 'none'\n      }}\n    </span>\n    <p-button\n      *ngIf=\"selectedSubjectName\"\n      label=\"Завантажити журнал\"\n      (click)=\"setSelectedJournal()\"\n    >\n    </p-button>\n  </div>\n  <p-button\n    class=\"progress\"\n    label=\"Статистика\"\n    (click)=\"goToProgress()\"\n  ></p-button>\n</p-toolbar>\n"

/***/ }),

/***/ "./src/app/journal/journal/menu/menu.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/journal/journal/menu/menu.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p-dropdown {\n  margin: 7px 20px 7px 0; }\n\n:host ::ng-deep .ui-dropdown {\n  min-width: 200px; }\n\n:host ::ng-deep .ui-toolbar {\n  position: inherit;\n  margin-top: 60px; }\n\n:host ::ng-deep .ui-toolbar .ui-button {\n    margin: unset;\n    width: unset; }\n\n.selected-year {\n  margin: 0 20px 20px 0;\n  font-weight: 900; }\n\n.journal-menu {\n  display: flex;\n  align-items: baseline;\n  flex-wrap: wrap; }\n\n.progress {\n  float: right;\n  margin-right: 10px;\n  margin-top: 7px; }\n\n@media screen and (max-width: 1020px) {\n  .progress {\n    float: left; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9kaWR1a2g4Ni9maW5hbF9wcm9qZWN0L3NyYy9hcHAvam91cm5hbC9qb3VybmFsL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQixFQUFBOztBQUV4QjtFQUVJLGdCQUFnQixFQUFBOztBQUZwQjtFQUtJLGlCQUFpQjtFQUNqQixnQkFBZ0IsRUFBQTs7QUFOcEI7SUFRTSxhQUFhO0lBQ2IsWUFBWSxFQUFBOztBQUlsQjtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLGVBQWUsRUFBQTs7QUFFakI7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQTs7QUFHakI7RUFDRTtJQUNFLFdBQVcsRUFBQSxFQUNaIiwiZmlsZSI6InNyYy9hcHAvam91cm5hbC9qb3VybmFsL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInAtZHJvcGRvd24ge1xuICBtYXJnaW46IDdweCAyMHB4IDdweCAwO1xufVxuOmhvc3Qge1xuICA6Om5nLWRlZXAgLnVpLWRyb3Bkb3duIHtcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xuICB9XG4gIDo6bmctZGVlcCAudWktdG9vbGJhciB7XG4gICAgcG9zaXRpb246IGluaGVyaXQ7XG4gICAgbWFyZ2luLXRvcDogNjBweDtcbiAgICAudWktYnV0dG9uIHtcbiAgICAgIG1hcmdpbjogdW5zZXQ7XG4gICAgICB3aWR0aDogdW5zZXQ7XG4gICAgfVxuICB9XG59XG4uc2VsZWN0ZWQteWVhciB7XG4gIG1hcmdpbjogMCAyMHB4IDIwcHggMDtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cblxuLmpvdXJuYWwtbWVudSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLnByb2dyZXNzIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDdweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyMHB4KSB7XG4gIC5wcm9ncmVzcyB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/journal/journal/menu/menu.component.ts":
/*!********************************************************!*\
  !*** ./src/app/journal/journal/menu/menu.component.ts ***!
  \********************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_teacher_journals_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/teacher-journals.service */ "./src/app/services/teacher-journals.service.ts");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MenuComponent = /** @class */ (function () {
    function MenuComponent(teacherJournalService, auth, router) {
        this.teacherJournalService = teacherJournalService;
        this.auth = auth;
        this.router = router;
    }
    MenuComponent.prototype.removeDuplicates = function (originalArray, prop) {
        var newArray = [];
        var lookupObject = {};
        for (var item in originalArray) {
            if (originalArray.hasOwnProperty(item)) {
                lookupObject[originalArray[item][prop]] = originalArray[item];
            }
        }
        for (var item in lookupObject) {
            if (lookupObject.hasOwnProperty(item)) {
                newArray.push(lookupObject[item]);
            }
        }
        this.sortByKey(newArray, 'className');
        return newArray;
    };
    MenuComponent.prototype.sortByKey = function (array, key) {
        return array.sort(function (a, b) {
            var x = a[key];
            var y = b[key];
            if (typeof x === 'string') {
                x = ('' + x).toLowerCase();
            }
            if (typeof y === 'string') {
                y = ('' + y).toLowerCase();
            }
            return x < y ? -1 : x > y ? 1 : 0;
        });
    };
    MenuComponent.prototype.ngOnInit = function () {
        this.getJournals();
    };
    MenuComponent.prototype.getJournals = function () {
        var _this = this;
        var idUser = this.auth.idUser;
        this.teacherJournalService
            .getJournalsTeacher(idUser, false)
            .subscribe(function (journals) {
            _this.journals = journals;
            _this.displayJournalsByClass = _this.removeDuplicates(_this.journals, 'className');
        });
    };
    MenuComponent.prototype.setSelectedJournal = function () {
        this.teacherJournalService.emitJournalChanged(this.selectedSubjectName);
    };
    MenuComponent.prototype.showSubjects = function () {
        var _this = this;
        if (this.selectedClassName) {
            this.selectedSubjectName = undefined;
            this.displayJournalsBySubject = this.sortByKey(this.journals.filter(function (elem) {
                return elem.className === _this.selectedClassName.className;
            }), 'subjectName');
        }
    };
    MenuComponent.prototype.goToProgress = function () {
        this.router.navigate(['shell/progress']);
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/journal/journal/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/app/journal/journal/menu/menu.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_teacher_journals_service__WEBPACK_IMPORTED_MODULE_1__["TeacherJournalsService"],
            src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ })

}]);
//# sourceMappingURL=journal-journal-module.js.map