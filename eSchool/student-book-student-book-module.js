(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["student-book-student-book-module"],{

/***/ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js ***!
  \************************************************************************************/
/*! exports provided: FontAwesomeModule, FaIconComponent, FaIconService, FaLayersComponent, FaLayersTextComponent, FaLayersCounterComponent, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontAwesomeModule", function() { return FontAwesomeModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaIconComponent", function() { return FaIconComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaIconService", function() { return FaIconService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaLayersComponent", function() { return FaLayersComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaLayersTextComponent", function() { return FaLayersTextComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaLayersCounterComponent", function() { return FaLayersCounterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return FaLayersTextBaseComponent; });
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");






/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** *
 * Returns if is IconLookup or not.
  @type {?} */
var isIconLookup = function (i) {
    return (/** @type {?} */ (i)).prefix !== undefined && (/** @type {?} */ (i)).iconName !== undefined;
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** *
 * Normalizing icon spec.
  @type {?} */
var faNormalizeIconSpec = function (iconSpec, defaultPrefix) {
    if (defaultPrefix === void 0) { defaultPrefix = 'fas'; }
    if (typeof iconSpec === 'undefined' || iconSpec === null) {
        return null;
    }
    if (isIconLookup(iconSpec)) {
        return iconSpec;
    }
    if (Array.isArray(iconSpec) && (/** @type {?} */ (iconSpec)).length === 2) {
        return { prefix: iconSpec[0], iconName: iconSpec[1] };
    }
    if (typeof iconSpec === 'string') {
        return { prefix: defaultPrefix, iconName: iconSpec };
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var objectWithKey = function (key, value) {
    var _a;
    return (Array.isArray(value) && value.length > 0) || (!Array.isArray(value) && value) ? (_a = {}, _a[key] = value, _a) : {};
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** *
 * Fontawesome class list.
 * Returns classes array by props.
  @type {?} */
var faClassList = function (props) {
    var _a;
    /** @type {?} */
    var classes = (_a = {
            'fa-spin': props.spin,
            'fa-pulse': props.pulse,
            'fa-fw': props.fixedWidth,
            'fa-border': props.border,
            'fa-li': props.listItem,
            'fa-inverse': props.inverse,
            'fa-layers-counter': props.counter,
            'fa-flip-horizontal': props.flip === 'horizontal' || props.flip === 'both',
            'fa-flip-vertical': props.flip === 'vertical' || props.flip === 'both'
        },
        _a["fa-" + props.size] = props.size !== null,
        _a["fa-rotate-" + props.rotate] = props.rotate !== null,
        _a["fa-pull-" + props.pull] = props.pull !== null,
        _a);
    return Object.keys(classes)
        .map(function (key) { return (classes[key] ? key : null); })
        .filter(function (key) { return key; });
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var faWarnIfIconHtmlMissing = function (iconObj, iconSpec) {
    if (iconSpec && !iconObj) {
        console.error("FontAwesome: Could not find icon with iconName=" + iconSpec.iconName + " and prefix=" + iconSpec.prefix);
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var faWarnIfIconSpecMissing = function (iconSpec) {
    if (!iconSpec) {
        console.error('FontAwesome: Could not find icon. ' +
            "It looks like you've provided a null or undefined icon object to this component.");
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var faNotFoundIconHtml = "<svg class=\"" + _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["config"].replacementClass + "\" viewBox=\"0 0 448 512\"></svg><!--icon not found-->";

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var FaIconService = /** @class */ (function () {
    function FaIconService() {
        this.defaultPrefix = 'fas';
    }
    FaIconService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ FaIconService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["defineInjectable"])({ factory: function FaIconService_Factory() { return new FaIconService(); }, token: FaIconService, providedIn: "root" });
    return FaIconService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Fontawesome icon.
 */
var FaIconComponent = /** @class */ (function () {
    function FaIconComponent(sanitizer, iconService) {
        this.sanitizer = sanitizer;
        this.iconService = iconService;
        this.classes = [];
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    FaIconComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes) {
            this.updateIconSpec();
            this.updateParams();
            this.updateIcon();
            this.renderIcon();
        }
    };
    /**
     * Updating icon spec.
     * @return {?}
     */
    FaIconComponent.prototype.updateIconSpec = /**
     * Updating icon spec.
     * @return {?}
     */
    function () {
        this.iconSpec = faNormalizeIconSpec(this.iconProp, this.iconService.defaultPrefix);
    };
    /**
     * Updating params by component props.
     * @return {?}
     */
    FaIconComponent.prototype.updateParams = /**
     * Updating params by component props.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var classOpts = {
            flip: this.flip,
            spin: this.spin,
            pulse: this.pulse,
            border: this.border,
            inverse: this.inverse,
            listItem: this.listItem,
            size: this.size || null,
            pull: this.pull || null,
            rotate: this.rotate || null,
            fixedWidth: this.fixedWidth
        };
        /** @type {?} */
        var classes = objectWithKey('classes', Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__spread"])(faClassList(classOpts), this.classes));
        /** @type {?} */
        var mask = objectWithKey('mask', faNormalizeIconSpec(this.mask, this.iconService.defaultPrefix));
        /** @type {?} */
        var parsedTransform = typeof this.transform === 'string' ? _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["parse"].transform(this.transform) : this.transform;
        /** @type {?} */
        var transform = objectWithKey('transform', parsedTransform);
        this.params = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({ title: this.title }, transform, classes, mask, { styles: this.styles, symbol: this.symbol });
    };
    /**
     * Updating icon by params and icon spec.
     * @return {?}
     */
    FaIconComponent.prototype.updateIcon = /**
     * Updating icon by params and icon spec.
     * @return {?}
     */
    function () {
        this.icon = Object(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["icon"])(this.iconSpec, this.params);
    };
    /**
     * Rendering icon.
     * @return {?}
     */
    FaIconComponent.prototype.renderIcon = /**
     * Rendering icon.
     * @return {?}
     */
    function () {
        faWarnIfIconSpecMissing(this.iconSpec);
        faWarnIfIconHtmlMissing(this.icon, this.iconSpec);
        this.renderedIconHTML = this.sanitizer.bypassSecurityTrustHtml(this.icon ? this.icon.html.join('\n') : faNotFoundIconHtml);
    };
    FaIconComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'fa-icon',
                    template: "",
                    host: {
                        class: 'ng-fa-icon',
                    }
                }] }
    ];
    /** @nocollapse */
    FaIconComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
        { type: FaIconService }
    ]; };
    FaIconComponent.propDecorators = {
        iconProp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['icon',] }],
        title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        spin: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        pulse: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        mask: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        styles: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        flip: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        pull: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        border: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        inverse: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        symbol: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        listItem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        rotate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        fixedWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        classes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        transform: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        renderedIconHTML: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['innerHTML',] }]
    };
    return FaIconComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Fontawesome layers.
 */
var FaLayersComponent = /** @class */ (function () {
    function FaLayersComponent(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
    }
    /**
     * @return {?}
     */
    FaLayersComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.renderer.addClass(this.elementRef.nativeElement, 'fa-layers');
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    FaLayersComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if ('size' in changes) {
            if (changes["size"].currentValue != null) {
                this.renderer.addClass(this.elementRef.nativeElement, "fa-" + changes["size"].currentValue);
            }
            if (changes["size"].previousValue != null) {
                this.renderer.removeClass(this.elementRef.nativeElement, "fa-" + changes["size"].previousValue);
            }
        }
    };
    FaLayersComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'fa-layers',
                    template: "<ng-content select=\"fa-icon, fa-layers-text, fa-layers-counter\"></ng-content>"
                }] }
    ];
    /** @nocollapse */
    FaLayersComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    FaLayersComponent.propDecorators = {
        size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        fixedWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.fa-fw',] }]
    };
    return FaLayersComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** *
 * Warns if parent component not existing.
  @type {?} */
var faWarnIfParentNotExist = function (parent, parentName, childName) {
    if (!parent) {
        console.error("FontAwesome: " + childName + " should be used as child of " + parentName + " only.");
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var FaLayersTextBaseComponent = /** @class */ (function () {
    function FaLayersTextBaseComponent(parent, sanitizer) {
        this.parent = parent;
        this.sanitizer = sanitizer;
        this.classes = [];
        faWarnIfParentNotExist(this.parent, 'FaLayersComponent', this.constructor.name);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    FaLayersTextBaseComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes) {
            this.updateParams();
            this.updateContent();
        }
    };
    /**
     * Updating content by params and content.
     * @return {?}
     */
    FaLayersTextBaseComponent.prototype.updateContent = /**
     * Updating content by params and content.
     * @return {?}
     */
    function () {
        this.renderedHTML = this.sanitizer.bypassSecurityTrustHtml(this.renderFontawesomeObject(this.content || '', this.params).html.join('\n'));
    };
    FaLayersTextBaseComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] }
    ];
    /** @nocollapse */
    FaLayersTextBaseComponent.ctorParameters = function () { return [
        { type: FaLayersComponent, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return FaLayersComponent; }),] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }
    ]; };
    FaLayersTextBaseComponent.propDecorators = {
        renderedHTML: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['innerHTML',] }],
        content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        styles: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        classes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    return FaLayersTextBaseComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Fontawesome layers text.
 */
var FaLayersTextComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(FaLayersTextComponent, _super);
    function FaLayersTextComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Updating params by component props.
     */
    /**
     * Updating params by component props.
     * @return {?}
     */
    FaLayersTextComponent.prototype.updateParams = /**
     * Updating params by component props.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var classOpts = {
            flip: this.flip,
            spin: this.spin,
            pulse: this.pulse,
            border: this.border,
            inverse: this.inverse,
            listItem: this.listItem,
            size: this.size || null,
            pull: this.pull || null,
            rotate: this.rotate || null,
            fixedWidth: this.fixedWidth
        };
        /** @type {?} */
        var classes = objectWithKey('classes', Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__spread"])(faClassList(classOpts), this.classes));
        /** @type {?} */
        var parsedTransform = typeof this.transform === 'string' ? _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["parse"].transform(this.transform) : this.transform;
        /** @type {?} */
        var transform = objectWithKey('transform', parsedTransform);
        this.params = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, transform, classes, { title: this.title, styles: this.styles });
    };
    /**
     * @param {?} content
     * @param {?=} params
     * @return {?}
     */
    FaLayersTextComponent.prototype.renderFontawesomeObject = /**
     * @param {?} content
     * @param {?=} params
     * @return {?}
     */
    function (content, params) {
        return Object(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["text"])(content, params);
    };
    FaLayersTextComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'fa-layers-text',
                    template: '',
                    host: {
                        class: 'ng-fa-layers-text'
                    }
                }] }
    ];
    FaLayersTextComponent.propDecorators = {
        spin: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        pulse: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        flip: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        pull: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        border: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        inverse: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        listItem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        rotate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        fixedWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        transform: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    return FaLayersTextComponent;
}(FaLayersTextBaseComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Fontawesome layers counter.
 */
var FaLayersCounterComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(FaLayersCounterComponent, _super);
    function FaLayersCounterComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Updating params by component props.
     */
    /**
     * Updating params by component props.
     * @return {?}
     */
    FaLayersCounterComponent.prototype.updateParams = /**
     * Updating params by component props.
     * @return {?}
     */
    function () {
        this.params = {
            title: this.title,
            classes: this.classes,
            styles: this.styles,
        };
    };
    /**
     * @param {?} content
     * @param {?=} params
     * @return {?}
     */
    FaLayersCounterComponent.prototype.renderFontawesomeObject = /**
     * @param {?} content
     * @param {?=} params
     * @return {?}
     */
    function (content, params) {
        return Object(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["counter"])(content, params);
    };
    FaLayersCounterComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'fa-layers-counter',
                    template: '',
                    host: {
                        class: 'ng-fa-layers-counter'
                    }
                }] }
    ];
    return FaLayersCounterComponent;
}(FaLayersTextBaseComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var FontAwesomeModule = /** @class */ (function () {
    function FontAwesomeModule() {
    }
    FontAwesomeModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]],
                    declarations: [
                        FaIconComponent,
                        FaLayersComponent,
                        FaLayersTextComponent,
                        FaLayersCounterComponent,
                    ],
                    exports: [
                        FaIconComponent,
                        FaLayersComponent,
                        FaLayersTextComponent,
                        FaLayersCounterComponent,
                    ],
                },] }
    ];
    return FontAwesomeModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1mb250YXdlc29tZS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGZvcnRhd2Vzb21lL2FuZ3VsYXItZm9udGF3ZXNvbWUvc2hhcmVkL3V0aWxzL2lzLWljb24tbG9va3VwLnV0aWwudHMiLCJuZzovL0Bmb3J0YXdlc29tZS9hbmd1bGFyLWZvbnRhd2Vzb21lL3NoYXJlZC91dGlscy9ub3JtYWxpemUtaWNvbi1zcGVjLnV0aWwudHMiLCJuZzovL0Bmb3J0YXdlc29tZS9hbmd1bGFyLWZvbnRhd2Vzb21lL3NoYXJlZC91dGlscy9vYmplY3Qtd2l0aC1rZXlzLnV0aWwudHMiLCJuZzovL0Bmb3J0YXdlc29tZS9hbmd1bGFyLWZvbnRhd2Vzb21lL3NoYXJlZC91dGlscy9jbGFzc2xpc3QudXRpbC50cyIsIm5nOi8vQGZvcnRhd2Vzb21lL2FuZ3VsYXItZm9udGF3ZXNvbWUvc2hhcmVkL2Vycm9ycy93YXJuLWlmLWljb24taHRtbC1taXNzaW5nLnRzIiwibmc6Ly9AZm9ydGF3ZXNvbWUvYW5ndWxhci1mb250YXdlc29tZS9zaGFyZWQvZXJyb3JzL3dhcm4taWYtaWNvbi1zcGVjLW1pc3NpbmcudHMiLCJuZzovL0Bmb3J0YXdlc29tZS9hbmd1bGFyLWZvbnRhd2Vzb21lL3NoYXJlZC9lcnJvcnMvbm90LWZvdW5kLWljb24taHRtbC50cyIsIm5nOi8vQGZvcnRhd2Vzb21lL2FuZ3VsYXItZm9udGF3ZXNvbWUvaWNvbi9pY29uLnNlcnZpY2UudHMiLCJuZzovL0Bmb3J0YXdlc29tZS9hbmd1bGFyLWZvbnRhd2Vzb21lL2ljb24vaWNvbi5jb21wb25lbnQudHMiLCJuZzovL0Bmb3J0YXdlc29tZS9hbmd1bGFyLWZvbnRhd2Vzb21lL2xheWVycy9sYXllcnMuY29tcG9uZW50LnRzIiwibmc6Ly9AZm9ydGF3ZXNvbWUvYW5ndWxhci1mb250YXdlc29tZS9zaGFyZWQvZXJyb3JzL3dhcm4taWYtcGFyZW50LW5vdC1leGlzdC50cyIsIm5nOi8vQGZvcnRhd2Vzb21lL2FuZ3VsYXItZm9udGF3ZXNvbWUvbGF5ZXJzL2xheWVycy10ZXh0LWJhc2UuY29tcG9uZW50LnRzIiwibmc6Ly9AZm9ydGF3ZXNvbWUvYW5ndWxhci1mb250YXdlc29tZS9sYXllcnMvbGF5ZXJzLXRleHQuY29tcG9uZW50LnRzIiwibmc6Ly9AZm9ydGF3ZXNvbWUvYW5ndWxhci1mb250YXdlc29tZS9sYXllcnMvbGF5ZXJzLWNvdW50ZXIuY29tcG9uZW50LnRzIiwibmc6Ly9AZm9ydGF3ZXNvbWUvYW5ndWxhci1mb250YXdlc29tZS9mb250YXdlc29tZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJY29uTG9va3VwLCBJY29uUHJvcH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlJztcblxuLyoqXG4gKiBSZXR1cm5zIGlmIGlzIEljb25Mb29rdXAgb3Igbm90LlxuICovXG5leHBvcnQgY29uc3QgaXNJY29uTG9va3VwID0gKGk6IEljb25Qcm9wKTogaSBpcyBJY29uTG9va3VwID0+IHtcbiAgcmV0dXJuICg8SWNvbkxvb2t1cD5pKS5wcmVmaXggIT09IHVuZGVmaW5lZCAmJiAoPEljb25Mb29rdXA+aSkuaWNvbk5hbWUgIT09IHVuZGVmaW5lZDtcbn07XG4iLCJpbXBvcnQgeyBJY29uTG9va3VwLCBJY29uUHJvcCwgSWNvblByZWZpeCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZSc7XG5cbmltcG9ydCB7IGlzSWNvbkxvb2t1cCB9IGZyb20gJy4vaXMtaWNvbi1sb29rdXAudXRpbCc7XG5cbi8qKlxuICogTm9ybWFsaXppbmcgaWNvbiBzcGVjLlxuICovXG5leHBvcnQgY29uc3QgZmFOb3JtYWxpemVJY29uU3BlYyA9IChpY29uU3BlYzogSWNvblByb3AsIGRlZmF1bHRQcmVmaXg6IEljb25QcmVmaXggPSAnZmFzJyk6IEljb25Mb29rdXAgPT4ge1xuXG4gIGlmICh0eXBlb2YgaWNvblNwZWMgPT09ICd1bmRlZmluZWQnIHx8IGljb25TcGVjID09PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBpZiAoaXNJY29uTG9va3VwKGljb25TcGVjKSkge1xuICAgIHJldHVybiBpY29uU3BlYztcbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KGljb25TcGVjKSAmJiAoPEFycmF5PHN0cmluZz4+aWNvblNwZWMpLmxlbmd0aCA9PT0gMikge1xuICAgIHJldHVybiB7IHByZWZpeDogaWNvblNwZWNbMF0sIGljb25OYW1lOiBpY29uU3BlY1sxXSB9O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBpY29uU3BlYyA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4geyBwcmVmaXg6IGRlZmF1bHRQcmVmaXgsIGljb25OYW1lOiBpY29uU3BlYyB9O1xuICB9XG59O1xuIiwiZXhwb3J0IGNvbnN0IG9iamVjdFdpdGhLZXkgPSA8VD4oa2V5OiBzdHJpbmcsIHZhbHVlOiBUKToge1tpZDogc3RyaW5nXTogVH0gPT4ge1xuICByZXR1cm4gKEFycmF5LmlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA+IDApIHx8ICghQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUpID8geyBba2V5XTogdmFsdWUgfSA6IHt9O1xufTtcbiIsImltcG9ydCB7IEZhUHJvcHMgfSBmcm9tICcuLi9tb2RlbHMvcHJvcHMubW9kZWwnO1xuXG4vKipcbiAqIEZvbnRhd2Vzb21lIGNsYXNzIGxpc3QuXG4gKiBSZXR1cm5zIGNsYXNzZXMgYXJyYXkgYnkgcHJvcHMuXG4gKi9cbmV4cG9ydCBjb25zdCBmYUNsYXNzTGlzdCA9IChwcm9wczogRmFQcm9wcyk6IHN0cmluZ1tdID0+IHtcbiAgY29uc3QgY2xhc3NlcyA9IHtcbiAgICAnZmEtc3Bpbic6IHByb3BzLnNwaW4sXG4gICAgJ2ZhLXB1bHNlJzogcHJvcHMucHVsc2UsXG4gICAgJ2ZhLWZ3JzogcHJvcHMuZml4ZWRXaWR0aCxcbiAgICAnZmEtYm9yZGVyJzogcHJvcHMuYm9yZGVyLFxuICAgICdmYS1saSc6IHByb3BzLmxpc3RJdGVtLFxuICAgICdmYS1pbnZlcnNlJzogcHJvcHMuaW52ZXJzZSxcbiAgICAnZmEtbGF5ZXJzLWNvdW50ZXInOiBwcm9wcy5jb3VudGVyLFxuICAgICdmYS1mbGlwLWhvcml6b250YWwnOiBwcm9wcy5mbGlwID09PSAnaG9yaXpvbnRhbCcgfHwgcHJvcHMuZmxpcCA9PT0gJ2JvdGgnLFxuICAgICdmYS1mbGlwLXZlcnRpY2FsJzogcHJvcHMuZmxpcCA9PT0gJ3ZlcnRpY2FsJyB8fCBwcm9wcy5mbGlwID09PSAnYm90aCcsXG4gICAgW2BmYS0ke3Byb3BzLnNpemV9YF06IHByb3BzLnNpemUgIT09IG51bGwsXG4gICAgW2BmYS1yb3RhdGUtJHtwcm9wcy5yb3RhdGV9YF06IHByb3BzLnJvdGF0ZSAhPT0gbnVsbCxcbiAgICBbYGZhLXB1bGwtJHtwcm9wcy5wdWxsfWBdOiBwcm9wcy5wdWxsICE9PSBudWxsXG4gIH07XG5cbiAgcmV0dXJuIE9iamVjdC5rZXlzKGNsYXNzZXMpXG4gICAgLm1hcChrZXkgPT4gKGNsYXNzZXNba2V5XSA/IGtleSA6IG51bGwpKVxuICAgIC5maWx0ZXIoa2V5ID0+IGtleSk7XG59O1xuIiwiaW1wb3J0IHsgSWNvbiwgSWNvbkxvb2t1cCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZSc7XG5cbmV4cG9ydCBjb25zdCBmYVdhcm5JZkljb25IdG1sTWlzc2luZyA9IChpY29uT2JqOiBJY29uLCBpY29uU3BlYzogSWNvbkxvb2t1cCkgPT4ge1xuICBpZiAoaWNvblNwZWMgJiYgIWljb25PYmopIHtcbiAgICBjb25zb2xlLmVycm9yKGBGb250QXdlc29tZTogQ291bGQgbm90IGZpbmQgaWNvbiB3aXRoIGljb25OYW1lPSR7aWNvblNwZWMuaWNvbk5hbWV9IGFuZCBwcmVmaXg9JHtpY29uU3BlYy5wcmVmaXh9YCk7XG4gIH1cbn07XG4iLCJpbXBvcnQgeyBJY29uTG9va3VwIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlJztcblxuZXhwb3J0IGNvbnN0IGZhV2FybklmSWNvblNwZWNNaXNzaW5nID0gKGljb25TcGVjOiBJY29uTG9va3VwKSA9PiB7XG4gIGlmICghaWNvblNwZWMpIHtcbiAgICBjb25zb2xlLmVycm9yKCdGb250QXdlc29tZTogQ291bGQgbm90IGZpbmQgaWNvbi4gJyArXG4gICAgICBgSXQgbG9va3MgbGlrZSB5b3UndmUgcHJvdmlkZWQgYSBudWxsIG9yIHVuZGVmaW5lZCBpY29uIG9iamVjdCB0byB0aGlzIGNvbXBvbmVudC5gKTtcbiAgfVxufTtcbiIsImltcG9ydCB7IGNvbmZpZyB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZSc7XG5cbmV4cG9ydCBjb25zdCBmYU5vdEZvdW5kSWNvbkh0bWwgPSBgPHN2ZyBjbGFzcz1cIiR7Y29uZmlnLnJlcGxhY2VtZW50Q2xhc3N9XCIgdmlld0JveD1cIjAgMCA0NDggNTEyXCI+PC9zdmc+PCEtLWljb24gbm90IGZvdW5kLS0+YDtcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEljb25QcmVmaXggfSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUnO1xuXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcbmV4cG9ydCBjbGFzcyBGYUljb25TZXJ2aWNlIHtcbiAgZGVmYXVsdFByZWZpeDogSWNvblByZWZpeCA9ICdmYXMnO1xufVxuIiwiaW1wb3J0IHtcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgQ29tcG9uZW50LFxuICBIb3N0QmluZGluZyxcbiAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIGljb24sXG4gIEljb24sXG4gIHBhcnNlLFxuICBTdHlsZXMsXG4gIFB1bGxQcm9wLFxuICBJY29uUHJvcCxcbiAgU2l6ZVByb3AsXG4gIEZsaXBQcm9wLFxuICBGYVN5bWJvbCxcbiAgVHJhbnNmb3JtLFxuICBJY29uUGFyYW1zLFxuICBJY29uTG9va3VwLFxuICBSb3RhdGVQcm9wXG59IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVIdG1sIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbmltcG9ydCB7IGZhTm9ybWFsaXplSWNvblNwZWMgfSBmcm9tICcuLi9zaGFyZWQvdXRpbHMvbm9ybWFsaXplLWljb24tc3BlYy51dGlsJztcbmltcG9ydCB7IEZhUHJvcHMgfSBmcm9tICcuLi9zaGFyZWQvbW9kZWxzL3Byb3BzLm1vZGVsJztcbmltcG9ydCB7IG9iamVjdFdpdGhLZXkgfSBmcm9tICcuLi9zaGFyZWQvdXRpbHMvb2JqZWN0LXdpdGgta2V5cy51dGlsJztcbmltcG9ydCB7IGZhQ2xhc3NMaXN0IH0gZnJvbSAnLi4vc2hhcmVkL3V0aWxzL2NsYXNzbGlzdC51dGlsJztcbmltcG9ydCB7IGZhV2FybklmSWNvbkh0bWxNaXNzaW5nIH0gZnJvbSAnLi4vc2hhcmVkL2Vycm9ycy93YXJuLWlmLWljb24taHRtbC1taXNzaW5nJztcbmltcG9ydCB7IGZhV2FybklmSWNvblNwZWNNaXNzaW5nIH0gZnJvbSAnLi4vc2hhcmVkL2Vycm9ycy93YXJuLWlmLWljb24tc3BlYy1taXNzaW5nJztcbmltcG9ydCB7IGZhTm90Rm91bmRJY29uSHRtbCB9IGZyb20gJy4uL3NoYXJlZC9lcnJvcnMvbm90LWZvdW5kLWljb24taHRtbCc7XG5pbXBvcnQgeyBGYUljb25TZXJ2aWNlIH0gZnJvbSAnLi9pY29uLnNlcnZpY2UnO1xuXG4vKipcbiAqIEZvbnRhd2Vzb21lIGljb24uXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2ZhLWljb24nLFxuICB0ZW1wbGF0ZTogYGAsXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ25nLWZhLWljb24nLFxuICB9XG59KVxuZXhwb3J0IGNsYXNzIEZhSWNvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1pbnB1dC1yZW5hbWVcbiAgQElucHV0KCdpY29uJykgaWNvblByb3A6IEljb25Qcm9wO1xuICBASW5wdXQoKSB0aXRsZT86IHN0cmluZztcbiAgQElucHV0KCkgc3Bpbj86IGJvb2xlYW47XG4gIEBJbnB1dCgpIHB1bHNlPzogYm9vbGVhbjtcbiAgQElucHV0KCkgbWFzaz86IEljb25Qcm9wO1xuICBASW5wdXQoKSBzdHlsZXM/OiBTdHlsZXM7XG4gIEBJbnB1dCgpIGZsaXA/OiBGbGlwUHJvcDtcbiAgQElucHV0KCkgc2l6ZT86IFNpemVQcm9wO1xuICBASW5wdXQoKSBwdWxsPzogUHVsbFByb3A7XG4gIEBJbnB1dCgpIGJvcmRlcj86IGJvb2xlYW47XG4gIEBJbnB1dCgpIGludmVyc2U/OiBib29sZWFuO1xuICBASW5wdXQoKSBzeW1ib2w/OiBGYVN5bWJvbDtcbiAgQElucHV0KCkgbGlzdEl0ZW0/OiBib29sZWFuO1xuICBASW5wdXQoKSByb3RhdGU/OiBSb3RhdGVQcm9wO1xuICBASW5wdXQoKSBmaXhlZFdpZHRoPzogYm9vbGVhbjtcbiAgQElucHV0KCkgY2xhc3Nlcz86IHN0cmluZ1tdID0gW107XG4gIEBJbnB1dCgpIHRyYW5zZm9ybT86IHN0cmluZyB8IFRyYW5zZm9ybTtcblxuICBwdWJsaWMgaWNvbjogSWNvbjtcblxuICBASG9zdEJpbmRpbmcoJ2lubmVySFRNTCcpXG4gIHB1YmxpYyByZW5kZXJlZEljb25IVE1MOiBTYWZlSHRtbDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyLCBwcml2YXRlIGljb25TZXJ2aWNlOiBGYUljb25TZXJ2aWNlKSB7fVxuXG4gIHByaXZhdGUgcGFyYW1zOiBJY29uUGFyYW1zO1xuICBwcml2YXRlIGljb25TcGVjOiBJY29uTG9va3VwO1xuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoY2hhbmdlcykge1xuICAgICAgdGhpcy51cGRhdGVJY29uU3BlYygpO1xuICAgICAgdGhpcy51cGRhdGVQYXJhbXMoKTtcbiAgICAgIHRoaXMudXBkYXRlSWNvbigpO1xuICAgICAgdGhpcy5yZW5kZXJJY29uKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0aW5nIGljb24gc3BlYy5cbiAgICovXG4gIHByaXZhdGUgdXBkYXRlSWNvblNwZWMoKSB7XG4gICAgdGhpcy5pY29uU3BlYyA9IGZhTm9ybWFsaXplSWNvblNwZWModGhpcy5pY29uUHJvcCwgdGhpcy5pY29uU2VydmljZS5kZWZhdWx0UHJlZml4KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGluZyBwYXJhbXMgYnkgY29tcG9uZW50IHByb3BzLlxuICAgKi9cbiAgcHJpdmF0ZSB1cGRhdGVQYXJhbXMoKSB7XG4gICAgY29uc3QgY2xhc3NPcHRzOiBGYVByb3BzID0ge1xuICAgICAgZmxpcDogdGhpcy5mbGlwLFxuICAgICAgc3BpbjogdGhpcy5zcGluLFxuICAgICAgcHVsc2U6IHRoaXMucHVsc2UsXG4gICAgICBib3JkZXI6IHRoaXMuYm9yZGVyLFxuICAgICAgaW52ZXJzZTogdGhpcy5pbnZlcnNlLFxuICAgICAgbGlzdEl0ZW06IHRoaXMubGlzdEl0ZW0sXG4gICAgICBzaXplOiB0aGlzLnNpemUgfHwgbnVsbCxcbiAgICAgIHB1bGw6IHRoaXMucHVsbCB8fCBudWxsLFxuICAgICAgcm90YXRlOiB0aGlzLnJvdGF0ZSB8fCBudWxsLFxuICAgICAgZml4ZWRXaWR0aDogdGhpcy5maXhlZFdpZHRoXG4gICAgfTtcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBvYmplY3RXaXRoS2V5KCdjbGFzc2VzJywgWy4uLmZhQ2xhc3NMaXN0KGNsYXNzT3B0cyksIC4uLnRoaXMuY2xhc3Nlc10pO1xuICAgIGNvbnN0IG1hc2sgPSBvYmplY3RXaXRoS2V5KCdtYXNrJywgZmFOb3JtYWxpemVJY29uU3BlYyh0aGlzLm1hc2ssIHRoaXMuaWNvblNlcnZpY2UuZGVmYXVsdFByZWZpeCkpO1xuICAgIGNvbnN0IHBhcnNlZFRyYW5zZm9ybSA9IHR5cGVvZiB0aGlzLnRyYW5zZm9ybSA9PT0gJ3N0cmluZycgPyBwYXJzZS50cmFuc2Zvcm0odGhpcy50cmFuc2Zvcm0pIDogdGhpcy50cmFuc2Zvcm07XG4gICAgY29uc3QgdHJhbnNmb3JtID0gb2JqZWN0V2l0aEtleSgndHJhbnNmb3JtJywgcGFyc2VkVHJhbnNmb3JtKTtcblxuICAgIHRoaXMucGFyYW1zID0ge1xuICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXG4gICAgICAuLi50cmFuc2Zvcm0sXG4gICAgICAuLi5jbGFzc2VzLFxuICAgICAgLi4ubWFzayxcbiAgICAgIHN0eWxlczogdGhpcy5zdHlsZXMsXG4gICAgICBzeW1ib2w6IHRoaXMuc3ltYm9sXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGluZyBpY29uIGJ5IHBhcmFtcyBhbmQgaWNvbiBzcGVjLlxuICAgKi9cbiAgcHJpdmF0ZSB1cGRhdGVJY29uKCkge1xuICAgIHRoaXMuaWNvbiA9IGljb24odGhpcy5pY29uU3BlYywgdGhpcy5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbmRlcmluZyBpY29uLlxuICAgKi9cbiAgcHJpdmF0ZSByZW5kZXJJY29uKCkge1xuICAgIGZhV2FybklmSWNvblNwZWNNaXNzaW5nKHRoaXMuaWNvblNwZWMpO1xuICAgIGZhV2FybklmSWNvbkh0bWxNaXNzaW5nKHRoaXMuaWNvbiwgdGhpcy5pY29uU3BlYyk7XG5cbiAgICB0aGlzLnJlbmRlcmVkSWNvbkhUTUwgPSB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChcbiAgICAgIHRoaXMuaWNvbiA/IHRoaXMuaWNvbi5odG1sLmpvaW4oJ1xcbicpIDogZmFOb3RGb3VuZEljb25IdG1sXG4gICAgKTtcbiAgfVxufVxuXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEhvc3RCaW5kaW5nLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFJlbmRlcmVyMiwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2l6ZVByb3AgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUnO1xuXG4vKipcbiAqIEZvbnRhd2Vzb21lIGxheWVycy5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZmEtbGF5ZXJzJyxcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudCBzZWxlY3Q9XCJmYS1pY29uLCBmYS1sYXllcnMtdGV4dCwgZmEtbGF5ZXJzLWNvdW50ZXJcIj48L25nLWNvbnRlbnQ+YCxcbn0pXG5leHBvcnQgY2xhc3MgRmFMYXllcnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIHNpemU/OiBTaXplUHJvcDtcblxuICBASW5wdXQoKVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmZhLWZ3JylcbiAgZml4ZWRXaWR0aD86IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZmEtbGF5ZXJzJyk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKCdzaXplJyBpbiBjaGFuZ2VzKSB7XG4gICAgICBpZiAoY2hhbmdlcy5zaXplLmN1cnJlbnRWYWx1ZSAhPSBudWxsKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGBmYS0ke2NoYW5nZXMuc2l6ZS5jdXJyZW50VmFsdWV9YCk7XG4gICAgICB9XG4gICAgICBpZiAoY2hhbmdlcy5zaXplLnByZXZpb3VzVmFsdWUgIT0gbnVsbCkge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBgZmEtJHtjaGFuZ2VzLnNpemUucHJldmlvdXNWYWx1ZX1gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi8qKlxuICogV2FybnMgaWYgcGFyZW50IGNvbXBvbmVudCBub3QgZXhpc3RpbmcuXG4gKi9cbmV4cG9ydCBjb25zdCBmYVdhcm5JZlBhcmVudE5vdEV4aXN0ID0gKHBhcmVudDogYW55LCBwYXJlbnROYW1lOiBzdHJpbmcsIGNoaWxkTmFtZTogc3RyaW5nKSA9PiB7XG4gIGlmICghcGFyZW50KSB7XG4gICAgY29uc29sZS5lcnJvcihgRm9udEF3ZXNvbWU6ICR7Y2hpbGROYW1lfSBzaG91bGQgYmUgdXNlZCBhcyBjaGlsZCBvZiAke3BhcmVudE5hbWV9IG9ubHkuYCk7XG4gIH1cbn07XG4iLCJpbXBvcnQge1xuICBJbnB1dCxcbiAgSW5qZWN0LFxuICBJbmplY3RhYmxlLFxuICBPcHRpb25hbCxcbiAgT25DaGFuZ2VzLFxuICBmb3J3YXJkUmVmLFxuICBIb3N0QmluZGluZyxcbiAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIFN0eWxlcyxcbiAgRm9udGF3ZXNvbWVPYmplY3QsXG4gIFRleHRQYXJhbXNcbn0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZUh0bWwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuaW1wb3J0IHsgRmFMYXllcnNDb21wb25lbnQgfSBmcm9tICcuL2xheWVycy5jb21wb25lbnQnO1xuaW1wb3J0IHsgZmFXYXJuSWZQYXJlbnROb3RFeGlzdCB9IGZyb20gJy4uL3NoYXJlZC9lcnJvcnMvd2Fybi1pZi1wYXJlbnQtbm90LWV4aXN0JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEZhTGF5ZXJzVGV4dEJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG4gIEBIb3N0QmluZGluZygnaW5uZXJIVE1MJylcbiAgcHVibGljIHJlbmRlcmVkSFRNTDogU2FmZUh0bWw7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChmb3J3YXJkUmVmKCgpID0+IEZhTGF5ZXJzQ29tcG9uZW50KSkgQE9wdGlvbmFsKCkgcHJpdmF0ZSBwYXJlbnQ6IEZhTGF5ZXJzQ29tcG9uZW50LFxuICAgIHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHtcblxuICAgIGZhV2FybklmUGFyZW50Tm90RXhpc3QodGhpcy5wYXJlbnQsICdGYUxheWVyc0NvbXBvbmVudCcsIHRoaXMuY29uc3RydWN0b3IubmFtZSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgcGFyYW1zOiBUZXh0UGFyYW1zO1xuXG4gIEBJbnB1dCgpIHByb3RlY3RlZCBjb250ZW50OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHByb3RlY3RlZCB0aXRsZT86IHN0cmluZztcbiAgQElucHV0KCkgcHJvdGVjdGVkIHN0eWxlcz86IFN0eWxlcztcbiAgQElucHV0KCkgcHJvdGVjdGVkIGNsYXNzZXM/OiBzdHJpbmdbXSA9IFtdO1xuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoY2hhbmdlcykge1xuICAgICAgdGhpcy51cGRhdGVQYXJhbXMoKTtcbiAgICAgIHRoaXMudXBkYXRlQ29udGVudCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGluZyBwYXJhbXMgYnkgY29tcG9uZW50IHByb3BzLlxuICAgKi9cbiAgcHJvdGVjdGVkIGFic3RyYWN0IHVwZGF0ZVBhcmFtcygpOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBSZW5kZXIgdGhlIEZvbnRhd2Vzb21lT2JqZWN0IHVzaW5nIHRoZSBjb250ZW50IGFuZCBwYXJhbXMuXG4gICAqL1xuICBwcm90ZWN0ZWQgYWJzdHJhY3QgcmVuZGVyRm9udGF3ZXNvbWVPYmplY3QoY29udGVudDogc3RyaW5nIHwgbnVtYmVyLCBwYXJhbXM/OiBUZXh0UGFyYW1zKTogRm9udGF3ZXNvbWVPYmplY3Q7XG5cbiAgLyoqXG4gICAqIFVwZGF0aW5nIGNvbnRlbnQgYnkgcGFyYW1zIGFuZCBjb250ZW50LlxuICAgKi9cbiAgcHJpdmF0ZSB1cGRhdGVDb250ZW50KCkge1xuICAgIHRoaXMucmVuZGVyZWRIVE1MID0gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwoXG4gICAgICB0aGlzLnJlbmRlckZvbnRhd2Vzb21lT2JqZWN0KHRoaXMuY29udGVudCB8fCAnJywgdGhpcy5wYXJhbXMpLmh0bWwuam9pbignXFxuJylcbiAgICApO1xuICB9XG59XG5cbiIsImltcG9ydCB7XG4gIElucHV0LFxuICBDb21wb25lbnQsXG4gIEhvc3RCaW5kaW5nXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgdGV4dCxcbiAgcGFyc2UsXG4gIFRleHQsXG4gIFRleHRQYXJhbXMsXG4gIFNpemVQcm9wLFxuICBGbGlwUHJvcCxcbiAgUHVsbFByb3AsXG4gIFRyYW5zZm9ybSxcbiAgUm90YXRlUHJvcFxufSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUnO1xuaW1wb3J0IHsgRmFMYXllcnNUZXh0QmFzZUNvbXBvbmVudCB9IGZyb20gJy4vbGF5ZXJzLXRleHQtYmFzZS5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBGYVByb3BzIH0gZnJvbSAnLi4vc2hhcmVkL21vZGVscy9wcm9wcy5tb2RlbCc7XG5pbXBvcnQgeyBvYmplY3RXaXRoS2V5IH0gZnJvbSAnLi4vc2hhcmVkL3V0aWxzL29iamVjdC13aXRoLWtleXMudXRpbCc7XG5pbXBvcnQgeyBmYUNsYXNzTGlzdCB9IGZyb20gJy4uL3NoYXJlZC91dGlscy9jbGFzc2xpc3QudXRpbCc7XG5cbi8qKlxuICogRm9udGF3ZXNvbWUgbGF5ZXJzIHRleHQuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2ZhLWxheWVycy10ZXh0JyxcbiAgdGVtcGxhdGU6ICcnLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICduZy1mYS1sYXllcnMtdGV4dCdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBGYUxheWVyc1RleHRDb21wb25lbnQgZXh0ZW5kcyBGYUxheWVyc1RleHRCYXNlQ29tcG9uZW50IHtcblxuICBASW5wdXQoKSBzcGluPzogYm9vbGVhbjtcbiAgQElucHV0KCkgcHVsc2U/OiBib29sZWFuO1xuICBASW5wdXQoKSBmbGlwPzogRmxpcFByb3A7XG4gIEBJbnB1dCgpIHNpemU/OiBTaXplUHJvcDtcbiAgQElucHV0KCkgcHVsbD86IFB1bGxQcm9wO1xuICBASW5wdXQoKSBib3JkZXI/OiBib29sZWFuO1xuICBASW5wdXQoKSBpbnZlcnNlPzogYm9vbGVhbjtcbiAgQElucHV0KCkgbGlzdEl0ZW0/OiBib29sZWFuO1xuICBASW5wdXQoKSByb3RhdGU/OiBSb3RhdGVQcm9wO1xuICBASW5wdXQoKSBmaXhlZFdpZHRoPzogYm9vbGVhbjtcbiAgQElucHV0KCkgdHJhbnNmb3JtPzogc3RyaW5nIHwgVHJhbnNmb3JtO1xuXG4gIC8qKlxuICAgKiBVcGRhdGluZyBwYXJhbXMgYnkgY29tcG9uZW50IHByb3BzLlxuICAgKi9cbiAgcHJvdGVjdGVkIHVwZGF0ZVBhcmFtcygpIHtcbiAgICBjb25zdCBjbGFzc09wdHM6IEZhUHJvcHMgPSB7XG4gICAgICBmbGlwOiB0aGlzLmZsaXAsXG4gICAgICBzcGluOiB0aGlzLnNwaW4sXG4gICAgICBwdWxzZTogdGhpcy5wdWxzZSxcbiAgICAgIGJvcmRlcjogdGhpcy5ib3JkZXIsXG4gICAgICBpbnZlcnNlOiB0aGlzLmludmVyc2UsXG4gICAgICBsaXN0SXRlbTogdGhpcy5saXN0SXRlbSxcbiAgICAgIHNpemU6IHRoaXMuc2l6ZSB8fCBudWxsLFxuICAgICAgcHVsbDogdGhpcy5wdWxsIHx8IG51bGwsXG4gICAgICByb3RhdGU6IHRoaXMucm90YXRlIHx8IG51bGwsXG4gICAgICBmaXhlZFdpZHRoOiB0aGlzLmZpeGVkV2lkdGhcbiAgICB9O1xuXG4gICAgY29uc3QgY2xhc3NlcyA9IG9iamVjdFdpdGhLZXkoJ2NsYXNzZXMnLCBbLi4uZmFDbGFzc0xpc3QoY2xhc3NPcHRzKSwgLi4udGhpcy5jbGFzc2VzXSk7XG4gICAgY29uc3QgcGFyc2VkVHJhbnNmb3JtID0gdHlwZW9mIHRoaXMudHJhbnNmb3JtID09PSAnc3RyaW5nJyA/IHBhcnNlLnRyYW5zZm9ybSh0aGlzLnRyYW5zZm9ybSkgOiB0aGlzLnRyYW5zZm9ybTtcbiAgICBjb25zdCB0cmFuc2Zvcm0gPSBvYmplY3RXaXRoS2V5KCd0cmFuc2Zvcm0nLCBwYXJzZWRUcmFuc2Zvcm0pO1xuXG4gICAgdGhpcy5wYXJhbXMgPSB7XG4gICAgICAuLi50cmFuc2Zvcm0sXG4gICAgICAuLi5jbGFzc2VzLFxuICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXG4gICAgICBzdHlsZXM6IHRoaXMuc3R5bGVzXG4gICAgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXJGb250YXdlc29tZU9iamVjdChjb250ZW50OiBzdHJpbmcsIHBhcmFtcz86IFRleHRQYXJhbXMpIHtcbiAgICByZXR1cm4gdGV4dChjb250ZW50LCBwYXJhbXMpO1xuICB9XG59XG5cbiIsImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSG9zdEJpbmRpbmdcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBjb3VudGVyLFxuICBDb3VudGVyLFxuICBDb3VudGVyUGFyYW1zLFxufSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUnO1xuaW1wb3J0IHsgRmFMYXllcnNUZXh0QmFzZUNvbXBvbmVudCB9IGZyb20gJy4vbGF5ZXJzLXRleHQtYmFzZS5jb21wb25lbnQnO1xuXG4vKipcbiAqIEZvbnRhd2Vzb21lIGxheWVycyBjb3VudGVyLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmYS1sYXllcnMtY291bnRlcicsXG4gIHRlbXBsYXRlOiAnJyxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnbmctZmEtbGF5ZXJzLWNvdW50ZXInXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgRmFMYXllcnNDb3VudGVyQ29tcG9uZW50IGV4dGVuZHMgRmFMYXllcnNUZXh0QmFzZUNvbXBvbmVudCB7XG5cbiAgLyoqXG4gICAqIFVwZGF0aW5nIHBhcmFtcyBieSBjb21wb25lbnQgcHJvcHMuXG4gICAqL1xuICBwcm90ZWN0ZWQgdXBkYXRlUGFyYW1zKCkge1xuICAgIHRoaXMucGFyYW1zID0ge1xuICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXG4gICAgICBjbGFzc2VzOiB0aGlzLmNsYXNzZXMsXG4gICAgICBzdHlsZXM6IHRoaXMuc3R5bGVzLFxuICAgIH07XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyRm9udGF3ZXNvbWVPYmplY3QoY29udGVudDogc3RyaW5nIHwgbnVtYmVyLCBwYXJhbXM/OiBDb3VudGVyUGFyYW1zKSB7XG4gICAgcmV0dXJuIGNvdW50ZXIoY29udGVudCwgcGFyYW1zKTtcbiAgfVxufVxuXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgRmFJY29uQ29tcG9uZW50IH0gZnJvbSAnLi9pY29uL2ljb24uY29tcG9uZW50JztcbmltcG9ydCB7IEZhTGF5ZXJzQ29tcG9uZW50IH0gZnJvbSAnLi9sYXllcnMvbGF5ZXJzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGYUxheWVyc1RleHRDb21wb25lbnQgfSBmcm9tICcuL2xheWVycy9sYXllcnMtdGV4dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmFMYXllcnNDb3VudGVyQ29tcG9uZW50IH0gZnJvbSAnLi9sYXllcnMvbGF5ZXJzLWNvdW50ZXIuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEZhSWNvbkNvbXBvbmVudCxcbiAgICBGYUxheWVyc0NvbXBvbmVudCxcbiAgICBGYUxheWVyc1RleHRDb21wb25lbnQsXG4gICAgRmFMYXllcnNDb3VudGVyQ29tcG9uZW50LFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgRmFJY29uQ29tcG9uZW50LFxuICAgIEZhTGF5ZXJzQ29tcG9uZW50LFxuICAgIEZhTGF5ZXJzVGV4dENvbXBvbmVudCxcbiAgICBGYUxheWVyc0NvdW50ZXJDb21wb25lbnQsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIEZvbnRBd2Vzb21lTW9kdWxlIHtcbn1cbiJdLCJuYW1lcyI6WyJ0c2xpYl8xLl9fZXh0ZW5kcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUtBLElBQWEsWUFBWSxHQUFHLFVBQUMsQ0FBVztJQUN0QyxPQUFPLG1CQUFhLENBQUMsR0FBRSxNQUFNLEtBQUssU0FBUyxJQUFJLG1CQUFhLENBQUMsR0FBRSxRQUFRLEtBQUssU0FBUyxDQUFDO0NBQ3ZGLENBQUM7Ozs7OztBQ0xGOzs7QUFLQSxJQUFhLG1CQUFtQixHQUFHLFVBQUMsUUFBa0IsRUFBRSxhQUFpQztJQUFqQyw4QkFBQSxFQUFBLHFCQUFpQztJQUV2RixJQUFJLE9BQU8sUUFBUSxLQUFLLFdBQVcsSUFBSSxRQUFRLEtBQUssSUFBSSxFQUFFO1FBQ3hELE9BQU8sSUFBSSxDQUFDO0tBQ2I7SUFFRCxJQUFJLFlBQVksQ0FBQyxRQUFRLENBQUMsRUFBRTtRQUMxQixPQUFPLFFBQVEsQ0FBQztLQUNqQjtJQUVELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxtQkFBZ0IsUUFBUSxHQUFFLE1BQU0sS0FBSyxDQUFD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

/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js":
/*!********************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-svg-core/index.es.js ***!
  \********************************************************************/
/*! exports provided: icon, noAuto, config, toHtml, layer, text, counter, library, dom, parse, findIconDefinition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "icon", function() { return icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noAuto", function() { return noAuto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toHtml", function() { return toHtml; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layer", function() { return layer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "text", function() { return text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "counter", function() { return counter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "library", function() { return library; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dom", function() { return dom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findIconDefinition", function() { return findIconDefinition; });
/*!
 * Font Awesome Free 5.15.3 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */
function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var noop = function noop() {};

var _WINDOW = {};
var _DOCUMENT = {};
var _MUTATION_OBSERVER = null;
var _PERFORMANCE = {
  mark: noop,
  measure: noop
};

try {
  if (typeof window !== 'undefined') _WINDOW = window;
  if (typeof document !== 'undefined') _DOCUMENT = document;
  if (typeof MutationObserver !== 'undefined') _MUTATION_OBSERVER = MutationObserver;
  if (typeof performance !== 'undefined') _PERFORMANCE = performance;
} catch (e) {}

var _ref = _WINDOW.navigator || {},
    _ref$userAgent = _ref.userAgent,
    userAgent = _ref$userAgent === void 0 ? '' : _ref$userAgent;

var WINDOW = _WINDOW;
var DOCUMENT = _DOCUMENT;
var MUTATION_OBSERVER = _MUTATION_OBSERVER;
var PERFORMANCE = _PERFORMANCE;
var IS_BROWSER = !!WINDOW.document;
var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
var IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');

var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
var UNITS_IN_GRID = 16;
var DEFAULT_FAMILY_PREFIX = 'fa';
var DEFAULT_REPLACEMENT_CLASS = 'svg-inline--fa';
var DATA_FA_I2SVG = 'data-fa-i2svg';
var DATA_FA_PSEUDO_ELEMENT = 'data-fa-pseudo-element';
var DATA_FA_PSEUDO_ELEMENT_PENDING = 'data-fa-pseudo-element-pending';
var DATA_PREFIX = 'data-prefix';
var DATA_ICON = 'data-icon';
var HTML_CLASS_I2SVG_BASE_CLASS = 'fontawesome-i2svg';
var MUTATION_APPROACH_ASYNC = 'async';
var TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS = ['HTML', 'HEAD', 'STYLE', 'SCRIPT'];
var PRODUCTION = function () {
  try {
    return "development" === 'production';
  } catch (e) {
    return false;
  }
}();
var PREFIX_TO_STYLE = {
  'fas': 'solid',
  'far': 'regular',
  'fal': 'light',
  'fad': 'duotone',
  'fab': 'brands',
  'fak': 'kit',
  'fa': 'solid'
};
var STYLE_TO_PREFIX = {
  'solid': 'fas',
  'regular': 'far',
  'light': 'fal',
  'duotone': 'fad',
  'brands': 'fab',
  'kit': 'fak'
};
var LAYERS_TEXT_CLASSNAME = 'fa-layers-text';
var FONT_FAMILY_PATTERN = /Font Awesome ([5 ]*)(Solid|Regular|Light|Duotone|Brands|Free|Pro|Kit).*/; // TODO: do we need to handle font-weight for kit SVG pseudo-elements?

var FONT_WEIGHT_TO_PREFIX = {
  '900': 'fas',
  '400': 'far',
  'normal': 'far',
  '300': 'fal'
};
var oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var oneToTwenty = oneToTen.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
var ATTRIBUTES_WATCHED_FOR_MUTATION = ['class', 'data-prefix', 'data-icon', 'data-fa-transform', 'data-fa-mask'];
var DUOTONE_CLASSES = {
  GROUP: 'group',
  SWAP_OPACITY: 'swap-opacity',
  PRIMARY: 'primary',
  SECONDARY: 'secondary'
};
var RESERVED_CLASSES = ['xs', 'sm', 'lg', 'fw', 'ul', 'li', 'border', 'pull-left', 'pull-right', 'spin', 'pulse', 'rotate-90', 'rotate-180', 'rotate-270', 'flip-horizontal', 'flip-vertical', 'flip-both', 'stack', 'stack-1x', 'stack-2x', 'inverse', 'layers', 'layers-text', 'layers-counter', DUOTONE_CLASSES.GROUP, DUOTONE_CLASSES.SWAP_OPACITY, DUOTONE_CLASSES.PRIMARY, DUOTONE_CLASSES.SECONDARY].concat(oneToTen.map(function (n) {
  return "".concat(n, "x");
})).concat(oneToTwenty.map(function (n) {
  return "w-".concat(n);
}));

var initial = WINDOW.FontAwesomeConfig || {};

function getAttrConfig(attr) {
  var element = DOCUMENT.querySelector('script[' + attr + ']');

  if (element) {
    return element.getAttribute(attr);
  }
}

function coerce(val) {
  // Getting an empty string will occur if the attribute is set on the HTML tag but without a value
  // We'll assume that this is an indication that it should be toggled to true
  // For example <script data-search-pseudo-elements src="..."></script>
  if (val === '') return true;
  if (val === 'false') return false;
  if (val === 'true') return true;
  return val;
}

if (DOCUMENT && typeof DOCUMENT.querySelector === 'function') {
  var attrs = [['data-family-prefix', 'familyPrefix'], ['data-replacement-class', 'replacementClass'], ['data-auto-replace-svg', 'autoReplaceSvg'], ['data-auto-add-css', 'autoAddCss'], ['data-auto-a11y', 'autoA11y'], ['data-search-pseudo-elements', 'searchPseudoElements'], ['data-observe-mutations', 'observeMutations'], ['data-mutate-approach', 'mutateApproach'], ['data-keep-original-source', 'keepOriginalSource'], ['data-measure-performance', 'measurePerformance'], ['data-show-missing-icons', 'showMissingIcons']];
  attrs.forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        attr = _ref2[0],
        key = _ref2[1];

    var val = coerce(getAttrConfig(attr));

    if (val !== undefined && val !== null) {
      initial[key] = val;
    }
  });
}

var _default = {
  familyPrefix: DEFAULT_FAMILY_PREFIX,
  replacementClass: DEFAULT_REPLACEMENT_CLASS,
  autoReplaceSvg: true,
  autoAddCss: true,
  autoA11y: true,
  searchPseudoElements: false,
  observeMutations: true,
  mutateApproach: 'async',
  keepOriginalSource: true,
  measurePerformance: false,
  showMissingIcons: true
};

var _config = _objectSpread({}, _default, initial);

if (!_config.autoReplaceSvg) _config.observeMutations = false;

var config = _objectSpread({}, _config);

WINDOW.FontAwesomeConfig = config;

var w = WINDOW || {};
if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
if (!w[NAMESPACE_IDENTIFIER].styles) w[NAMESPACE_IDENTIFIER].styles = {};
if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];
var namespace = w[NAMESPACE_IDENTIFIER];

var functions = [];

var listener = function listener() {
  DOCUMENT.removeEventListener('DOMContentLoaded', listener);
  loaded = 1;
  functions.map(function (fn) {
    return fn();
  });
};

var loaded = false;

if (IS_DOM) {
  loaded = (DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT.readyState);
  if (!loaded) DOCUMENT.addEventListener('DOMContentLoaded', listener);
}

function domready (fn) {
  if (!IS_DOM) return;
  loaded ? setTimeout(fn, 0) : functions.push(fn);
}

var PENDING = 'pending';
var SETTLED = 'settled';
var FULFILLED = 'fulfilled';
var REJECTED = 'rejected';

var NOOP = function NOOP() {};

var isNode = typeof global !== 'undefined' && typeof global.process !== 'undefined' && typeof global.process.emit === 'function';
var asyncSetTimer = typeof setImmediate === 'undefined' ? setTimeout : setImmediate;
var asyncQueue = [];
var asyncTimer;

function asyncFlush() {
  // run promise callbacks
  for (var i = 0; i < asyncQueue.length; i++) {
    asyncQueue[i][0](asyncQueue[i][1]);
  } // reset async asyncQueue


  asyncQueue = [];
  asyncTimer = false;
}

function asyncCall(callback, arg) {
  asyncQueue.push([callback, arg]);

  if (!asyncTimer) {
    asyncTimer = true;
    asyncSetTimer(asyncFlush, 0);
  }
}

function invokeResolver(resolver, promise) {
  function resolvePromise(value) {
    resolve(promise, value);
  }

  function rejectPromise(reason) {
    reject(promise, reason);
  }

  try {
    resolver(resolvePromise, rejectPromise);
  } catch (e) {
    rejectPromise(e);
  }
}

function invokeCallback(subscriber) {
  var owner = subscriber.owner;
  var settled = owner._state;
  var value = owner._data;
  var callback = subscriber[settled];
  var promise = subscriber.then;

  if (typeof callback === 'function') {
    settled = FULFILLED;

    try {
      value = callback(value);
    } catch (e) {
      reject(promise, e);
    }
  }

  if (!handleThenable(promise, value)) {
    if (settled === FULFILLED) {
      resolve(promise, value);
    }

    if (settled === REJECTED) {
      reject(promise, value);
    }
  }
}

function handleThenable(promise, value) {
  var resolved;

  try {
    if (promise === value) {
      throw new TypeError('A promises callback cannot return that same promise.');
    }

    if (value && (typeof value === 'function' || _typeof(value) === 'object')) {
      // then should be retrieved only once
      var then = value.then;

      if (typeof then === 'function') {
        then.call(value, function (val) {
          if (!resolved) {
            resolved = true;

            if (value === val) {
              fulfill(promise, val);
            } else {
              resolve(promise, val);
            }
          }
        }, function (reason) {
          if (!resolved) {
            resolved = true;
            reject(promise, reason);
          }
        });
        return true;
      }
    }
  } catch (e) {
    if (!resolved) {
      reject(promise, e);
    }

    return true;
  }

  return false;
}

function resolve(promise, value) {
  if (promise === value || !handleThenable(promise, value)) {
    fulfill(promise, value);
  }
}

function fulfill(promise, value) {
  if (promise._state === PENDING) {
    promise._state = SETTLED;
    promise._data = value;
    asyncCall(publishFulfillment, promise);
  }
}

function reject(promise, reason) {
  if (promise._state === PENDING) {
    promise._state = SETTLED;
    promise._data = reason;
    asyncCall(publishRejection, promise);
  }
}

function publish(promise) {
  promise._then = promise._then.forEach(invokeCallback);
}

function publishFulfillment(promise) {
  promise._state = FULFILLED;
  publish(promise);
}

function publishRejection(promise) {
  promise._state = REJECTED;
  publish(promise);

  if (!promise._handled && isNode) {
    global.process.emit('unhandledRejection', promise._data, promise);
  }
}

function notifyRejectionHandled(promise) {
  global.process.emit('rejectionHandled', promise);
}
/**
 * @class
 */


function P(resolver) {
  if (typeof resolver !== 'function') {
    throw new TypeError('Promise resolver ' + resolver + ' is not a function');
  }

  if (this instanceof P === false) {
    throw new TypeError('Failed to construct \'Promise\': Please use the \'new\' operator, this object constructor cannot be called as a function.');
  }

  this._then = [];
  invokeResolver(resolver, this);
}

P.prototype = {
  constructor: P,
  _state: PENDING,
  _then: null,
  _data: undefined,
  _handled: false,
  then: function then(onFulfillment, onRejection) {
    var subscriber = {
      owner: this,
      then: new this.constructor(NOOP),
      fulfilled: onFulfillment,
      rejected: onRejection
    };

    if ((onRejection || onFulfillment) && !this._handled) {
      this._handled = true;

      if (this._state === REJECTED && isNode) {
        asyncCall(notifyRejectionHandled, this);
      }
    }

    if (this._state === FULFILLED || this._state === REJECTED) {
      // already resolved, call callback async
      asyncCall(invokeCallback, subscriber);
    } else {
      // subscribe
      this._then.push(subscriber);
    }

    return subscriber.then;
  },
  catch: function _catch(onRejection) {
    return this.then(null, onRejection);
  }
};

P.all = function (promises) {
  if (!Array.isArray(promises)) {
    throw new TypeError('You must pass an array to Promise.all().');
  }

  return new P(function (resolve, reject) {
    var results = [];
    var remaining = 0;

    function resolver(index) {
      remaining++;
      return function (value) {
        results[index] = value;

        if (! --remaining) {
          resolve(results);
        }
      };
    }

    for (var i = 0, promise; i < promises.length; i++) {
      promise = promises[i];

      if (promise && typeof promise.then === 'function') {
        promise.then(resolver(i), reject);
      } else {
        results[i] = promise;
      }
    }

    if (!remaining) {
      resolve(results);
    }
  });
};

P.race = function (promises) {
  if (!Array.isArray(promises)) {
    throw new TypeError('You must pass an array to Promise.race().');
  }

  return new P(function (resolve, reject) {
    for (var i = 0, promise; i < promises.length; i++) {
      promise = promises[i];

      if (promise && typeof promise.then === 'function') {
        promise.then(resolve, reject);
      } else {
        resolve(promise);
      }
    }
  });
};

P.resolve = function (value) {
  if (value && _typeof(value) === 'object' && value.constructor === P) {
    return value;
  }

  return new P(function (resolve) {
    resolve(value);
  });
};

P.reject = function (reason) {
  return new P(function (resolve, reject) {
    reject(reason);
  });
};

var picked = typeof Promise === 'function' ? Promise : P;

var d = UNITS_IN_GRID;
var meaninglessTransform = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: false,
  flipY: false
};

function isReserved(name) {
  return ~RESERVED_CLASSES.indexOf(name);
}
function insertCss(css) {
  if (!css || !IS_DOM) {
    return;
  }

  var style = DOCUMENT.createElement('style');
  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  var headChildren = DOCUMENT.head.childNodes;
  var beforeChild = null;

  for (var i = headChildren.length - 1; i > -1; i--) {
    var child = headChildren[i];
    var tagName = (child.tagName || '').toUpperCase();

    if (['STYLE', 'LINK'].indexOf(tagName) > -1) {
      beforeChild = child;
    }
  }

  DOCUMENT.head.insertBefore(style, beforeChild);
  return css;
}
var idPool = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
function nextUniqueId() {
  var size = 12;
  var id = '';

  while (size-- > 0) {
    id += idPool[Math.random() * 62 | 0];
  }

  return id;
}
function toArray(obj) {
  var array = [];

  for (var i = (obj || []).length >>> 0; i--;) {
    array[i] = obj[i];
  }

  return array;
}
function classArray(node) {
  if (node.classList) {
    return toArray(node.classList);
  } else {
    return (node.getAttribute('class') || '').split(' ').filter(function (i) {
      return i;
    });
  }
}
function getIconName(familyPrefix, cls) {
  var parts = cls.split('-');
  var prefix = parts[0];
  var iconName = parts.slice(1).join('-');

  if (prefix === familyPrefix && iconName !== '' && !isReserved(iconName)) {
    return iconName;
  } else {
    return null;
  }
}
function htmlEscape(str) {
  return "".concat(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function joinAttributes(attributes) {
  return Object.keys(attributes || {}).reduce(function (acc, attributeName) {
    return acc + "".concat(attributeName, "=\"").concat(htmlEscape(attributes[attributeName]), "\" ");
  }, '').trim();
}
function joinStyles(styles) {
  return Object.keys(styles || {}).reduce(function (acc, styleName) {
    return acc + "".concat(styleName, ": ").concat(styles[styleName], ";");
  }, '');
}
function transformIsMeaningful(transform) {
  return transform.size !== meaninglessTransform.size || transform.x !== meaninglessTransform.x || transform.y !== meaninglessTransform.y || transform.rotate !== meaninglessTransform.rotate || transform.flipX || transform.flipY;
}
function transformForSvg(_ref) {
  var transform = _ref.transform,
      containerWidth = _ref.containerWidth,
      iconWidth = _ref.iconWidth;
  var outer = {
    transform: "translate(".concat(containerWidth / 2, " 256)")
  };
  var innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
  var innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
  var innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
  var inner = {
    transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
  };
  var path = {
    transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
  };
  return {
    outer: outer,
    inner: inner,
    path: path
  };
}
function transformForCss(_ref2) {
  var transform = _ref2.transform,
      _ref2$width = _ref2.width,
      width = _ref2$width === void 0 ? UNITS_IN_GRID : _ref2$width,
      _ref2$height = _ref2.height,
      height = _ref2$height === void 0 ? UNITS_IN_GRID : _ref2$height,
      _ref2$startCentered = _ref2.startCentered,
      startCentered = _ref2$startCentered === void 0 ? false : _ref2$startCentered;
  var val = '';

  if (startCentered && IS_IE) {
    val += "translate(".concat(transform.x / d - width / 2, "em, ").concat(transform.y / d - height / 2, "em) ");
  } else if (startCentered) {
    val += "translate(calc(-50% + ".concat(transform.x / d, "em), calc(-50% + ").concat(transform.y / d, "em)) ");
  } else {
    val += "translate(".concat(transform.x / d, "em, ").concat(transform.y / d, "em) ");
  }

  val += "scale(".concat(transform.size / d * (transform.flipX ? -1 : 1), ", ").concat(transform.size / d * (transform.flipY ? -1 : 1), ") ");
  val += "rotate(".concat(transform.rotate, "deg) ");
  return val;
}

var ALL_SPACE = {
  x: 0,
  y: 0,
  width: '100%',
  height: '100%'
};

function fillBlack(abstract) {
  var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if (abstract.attributes && (abstract.attributes.fill || force)) {
    abstract.attributes.fill = 'black';
  }

  return abstract;
}

function deGroup(abstract) {
  if (abstract.tag === 'g') {
    return abstract.children;
  } else {
    return [abstract];
  }
}

function makeIconMasking (_ref) {
  var children = _ref.children,
      attributes = _ref.attributes,
      main = _ref.main,
      mask = _ref.mask,
      explicitMaskId = _ref.maskId,
      transform = _ref.transform;
  var mainWidth = main.width,
      mainPath = main.icon;
  var maskWidth = mask.width,
      maskPath = mask.icon;
  var trans = transformForSvg({
    transform: transform,
    containerWidth: maskWidth,
    iconWidth: mainWidth
  });
  var maskRect = {
    tag: 'rect',
    attributes: _objectSpread({}, ALL_SPACE, {
      fill: 'white'
    })
  };
  var maskInnerGroupChildrenMixin = mainPath.children ? {
    children: mainPath.children.map(fillBlack)
  } : {};
  var maskInnerGroup = {
    tag: 'g',
    attributes: _objectSpread({}, trans.inner),
    children: [fillBlack(_objectSpread({
      tag: mainPath.tag,
      attributes: _objectSpread({}, mainPath.attributes, trans.path)
    }, maskInnerGroupChildrenMixin))]
  };
  var maskOuterGroup = {
    tag: 'g',
    attributes: _objectSpread({}, trans.outer),
    children: [maskInnerGroup]
  };
  var maskId = "mask-".concat(explicitMaskId || nextUniqueId());
  var clipId = "clip-".concat(explicitMaskId || nextUniqueId());
  var maskTag = {
    tag: 'mask',
    attributes: _objectSpread({}, ALL_SPACE, {
      id: maskId,
      maskUnits: 'userSpaceOnUse',
      maskContentUnits: 'userSpaceOnUse'
    }),
    children: [maskRect, maskOuterGroup]
  };
  var defs = {
    tag: 'defs',
    children: [{
      tag: 'clipPath',
      attributes: {
        id: clipId
      },
      children: deGroup(maskPath)
    }, maskTag]
  };
  children.push(defs, {
    tag: 'rect',
    attributes: _objectSpread({
      fill: 'currentColor',
      'clip-path': "url(#".concat(clipId, ")"),
      mask: "url(#".concat(maskId, ")")
    }, ALL_SPACE)
  });
  return {
    children: children,
    attributes: attributes
  };
}

function makeIconStandard (_ref) {
  var children = _ref.children,
      attributes = _ref.attributes,
      main = _ref.main,
      transform = _ref.transform,
      styles = _ref.styles;
  var styleString = joinStyles(styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  if (transformIsMeaningful(transform)) {
    var trans = transformForSvg({
      transform: transform,
      containerWidth: main.width,
      iconWidth: main.width
    });
    children.push({
      tag: 'g',
      attributes: _objectSpread({}, trans.outer),
      children: [{
        tag: 'g',
        attributes: _objectSpread({}, trans.inner),
        children: [{
          tag: main.icon.tag,
          children: main.icon.children,
          attributes: _objectSpread({}, main.icon.attributes, trans.path)
        }]
      }]
    });
  } else {
    children.push(main.icon);
  }

  return {
    children: children,
    attributes: attributes
  };
}

function asIcon (_ref) {
  var children = _ref.children,
      main = _ref.main,
      mask = _ref.mask,
      attributes = _ref.attributes,
      styles = _ref.styles,
      transform = _ref.transform;

  if (transformIsMeaningful(transform) && main.found && !mask.found) {
    var width = main.width,
        height = main.height;
    var offset = {
      x: width / height / 2,
      y: 0.5
    };
    attributes['style'] = joinStyles(_objectSpread({}, styles, {
      'transform-origin': "".concat(offset.x + transform.x / 16, "em ").concat(offset.y + transform.y / 16, "em")
    }));
  }

  return [{
    tag: 'svg',
    attributes: attributes,
    children: children
  }];
}

function asSymbol (_ref) {
  var prefix = _ref.prefix,
      iconName = _ref.iconName,
      children = _ref.children,
      attributes = _ref.attributes,
      symbol = _ref.symbol;
  var id = symbol === true ? "".concat(prefix, "-").concat(config.familyPrefix, "-").concat(iconName) : symbol;
  return [{
    tag: 'svg',
    attributes: {
      style: 'display: none;'
    },
    children: [{
      tag: 'symbol',
      attributes: _objectSpread({}, attributes, {
        id: id
      }),
      children: children
    }]
  }];
}

function makeInlineSvgAbstract(params) {
  var _params$icons = params.icons,
      main = _params$icons.main,
      mask = _params$icons.mask,
      prefix = params.prefix,
      iconName = params.iconName,
      transform = params.transform,
      symbol = params.symbol,
      title = params.title,
      maskId = params.maskId,
      titleId = params.titleId,
      extra = params.extra,
      _params$watchable = params.watchable,
      watchable = _params$watchable === void 0 ? false : _params$watchable;

  var _ref = mask.found ? mask : main,
      width = _ref.width,
      height = _ref.height;

  var isUploadedIcon = prefix === 'fak';
  var widthClass = isUploadedIcon ? '' : "fa-w-".concat(Math.ceil(width / height * 16));
  var attrClass = [config.replacementClass, iconName ? "".concat(config.familyPrefix, "-").concat(iconName) : '', widthClass].filter(function (c) {
    return extra.classes.indexOf(c) === -1;
  }).filter(function (c) {
    return c !== '' || !!c;
  }).concat(extra.classes).join(' ');
  var content = {
    children: [],
    attributes: _objectSpread({}, extra.attributes, {
      'data-prefix': prefix,
      'data-icon': iconName,
      'class': attrClass,
      'role': extra.attributes.role || 'img',
      'xmlns': 'http://www.w3.org/2000/svg',
      'viewBox': "0 0 ".concat(width, " ").concat(height)
    })
  };
  var uploadedIconWidthStyle = isUploadedIcon && !~extra.classes.indexOf('fa-fw') ? {
    width: "".concat(width / height * 16 * 0.0625, "em")
  } : {};

  if (watchable) {
    content.attributes[DATA_FA_I2SVG] = '';
  }

  if (title) content.children.push({
    tag: 'title',
    attributes: {
      id: content.attributes['aria-labelledby'] || "title-".concat(titleId || nextUniqueId())
    },
    children: [title]
  });

  var args = _objectSpread({}, content, {
    prefix: prefix,
    iconName: iconName,
    main: main,
    mask: mask,
    maskId: maskId,
    transform: transform,
    symbol: symbol,
    styles: _objectSpread({}, uploadedIconWidthStyle, extra.styles)
  });

  var _ref2 = mask.found && main.found ? makeIconMasking(args) : makeIconStandard(args),
      children = _ref2.children,
      attributes = _ref2.attributes;

  args.children = children;
  args.attributes = attributes;

  if (symbol) {
    return asSymbol(args);
  } else {
    return asIcon(args);
  }
}
function makeLayersTextAbstract(params) {
  var content = params.content,
      width = params.width,
      height = params.height,
      transform = params.transform,
      title = params.title,
      extra = params.extra,
      _params$watchable2 = params.watchable,
      watchable = _params$watchable2 === void 0 ? false : _params$watchable2;

  var attributes = _objectSpread({}, extra.attributes, title ? {
    'title': title
  } : {}, {
    'class': extra.classes.join(' ')
  });

  if (watchable) {
    attributes[DATA_FA_I2SVG] = '';
  }

  var styles = _objectSpread({}, extra.styles);

  if (transformIsMeaningful(transform)) {
    styles['transform'] = transformForCss({
      transform: transform,
      startCentered: true,
      width: width,
      height: height
    });
    styles['-webkit-transform'] = styles['transform'];
  }

  var styleString = joinStyles(styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  var val = [];
  val.push({
    tag: 'span',
    attributes: attributes,
    children: [content]
  });

  if (title) {
    val.push({
      tag: 'span',
      attributes: {
        class: 'sr-only'
      },
      children: [title]
    });
  }

  return val;
}
function makeLayersCounterAbstract(params) {
  var content = params.content,
      title = params.title,
      extra = params.extra;

  var attributes = _objectSpread({}, extra.attributes, title ? {
    'title': title
  } : {}, {
    'class': extra.classes.join(' ')
  });

  var styleString = joinStyles(extra.styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  var val = [];
  val.push({
    tag: 'span',
    attributes: attributes,
    children: [content]
  });

  if (title) {
    val.push({
      tag: 'span',
      attributes: {
        class: 'sr-only'
      },
      children: [title]
    });
  }

  return val;
}

var noop$1 = function noop() {};

var p = config.measurePerformance && PERFORMANCE && PERFORMANCE.mark && PERFORMANCE.measure ? PERFORMANCE : {
  mark: noop$1,
  measure: noop$1
};
var preamble = "FA \"5.15.3\"";

var begin = function begin(name) {
  p.mark("".concat(preamble, " ").concat(name, " begins"));
  return function () {
    return end(name);
  };
};

var end = function end(name) {
  p.mark("".concat(preamble, " ").concat(name, " ends"));
  p.measure("".concat(preamble, " ").concat(name), "".concat(preamble, " ").concat(name, " begins"), "".concat(preamble, " ").concat(name, " ends"));
};

var perf = {
  begin: begin,
  end: end
};

/**
 * Internal helper to bind a function known to have 4 arguments
 * to a given context.
 */

var bindInternal4 = function bindInternal4(func, thisContext) {
  return function (a, b, c, d) {
    return func.call(thisContext, a, b, c, d);
  };
};

/**
 * # Reduce
 *
 * A fast object `.reduce()` implementation.
 *
 * @param  {Object}   subject      The object to reduce over.
 * @param  {Function} fn           The reducer function.
 * @param  {mixed}    initialValue The initial value for the reducer, defaults to subject[0].
 * @param  {Object}   thisContext  The context for the reducer.
 * @return {mixed}                 The final result.
 */


var reduce = function fastReduceObject(subject, fn, initialValue, thisContext) {
  var keys = Object.keys(subject),
      length = keys.length,
      iterator = thisContext !== undefined ? bindInternal4(fn, thisContext) : fn,
      i,
      key,
      result;

  if (initialValue === undefined) {
    i = 1;
    result = subject[keys[0]];
  } else {
    i = 0;
    result = initialValue;
  }

  for (; i < length; i++) {
    key = keys[i];
    result = iterator(result, subject[key], key, subject);
  }

  return result;
};

function toHex(unicode) {
  var result = '';

  for (var i = 0; i < unicode.length; i++) {
    var hex = unicode.charCodeAt(i).toString(16);
    result += ('000' + hex).slice(-4);
  }

  return result;
}

function defineIcons(prefix, icons) {
  var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var _params$skipHooks = params.skipHooks,
      skipHooks = _params$skipHooks === void 0 ? false : _params$skipHooks;
  var normalized = Object.keys(icons).reduce(function (acc, iconName) {
    var icon = icons[iconName];
    var expanded = !!icon.icon;

    if (expanded) {
      acc[icon.iconName] = icon.icon;
    } else {
      acc[iconName] = icon;
    }

    return acc;
  }, {});

  if (typeof namespace.hooks.addPack === 'function' && !skipHooks) {
    namespace.hooks.addPack(prefix, normalized);
  } else {
    namespace.styles[prefix] = _objectSpread({}, namespace.styles[prefix] || {}, normalized);
  }
  /**
   * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
   * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
   * for `fas` so we'll easy the upgrade process for our users by automatically defining
   * this as well.
   */


  if (prefix === 'fas') {
    defineIcons('fa', icons);
  }
}

var styles = namespace.styles,
    shims = namespace.shims;
var _byUnicode = {};
var _byLigature = {};
var _byOldName = {};
var build = function build() {
  var lookup = function lookup(reducer) {
    return reduce(styles, function (o, style, prefix) {
      o[prefix] = reduce(style, reducer, {});
      return o;
    }, {});
  };

  _byUnicode = lookup(function (acc, icon, iconName) {
    if (icon[3]) {
      acc[icon[3]] = iconName;
    }

    return acc;
  });
  _byLigature = lookup(function (acc, icon, iconName) {
    var ligatures = icon[2];
    acc[iconName] = iconName;
    ligatures.forEach(function (ligature) {
      acc[ligature] = iconName;
    });
    return acc;
  });
  var hasRegular = 'far' in styles;
  _byOldName = reduce(shims, function (acc, shim) {
    var oldName = shim[0];
    var prefix = shim[1];
    var iconName = shim[2];

    if (prefix === 'far' && !hasRegular) {
      prefix = 'fas';
    }

    acc[oldName] = {
      prefix: prefix,
      iconName: iconName
    };
    return acc;
  }, {});
};
build();
function byUnicode(prefix, unicode) {
  return (_byUnicode[prefix] || {})[unicode];
}
function byLigature(prefix, ligature) {
  return (_byLigature[prefix] || {})[ligature];
}
function byOldName(name) {
  return _byOldName[name] || {
    prefix: null,
    iconName: null
  };
}

var styles$1 = namespace.styles;
var emptyCanonicalIcon = function emptyCanonicalIcon() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function getCanonicalIcon(values) {
  return values.reduce(function (acc, cls) {
    var iconName = getIconName(config.familyPrefix, cls);

    if (styles$1[cls]) {
      acc.prefix = cls;
    } else if (config.autoFetchSvg && Object.keys(PREFIX_TO_STYLE).indexOf(cls) > -1) {
      acc.prefix = cls;
    } else if (iconName) {
      var shim = acc.prefix === 'fa' ? byOldName(iconName) : {};
      acc.iconName = shim.iconName || iconName;
      acc.prefix = shim.prefix || acc.prefix;
    } else if (cls !== config.replacementClass && cls.indexOf('fa-w-') !== 0) {
      acc.rest.push(cls);
    }

    return acc;
  }, emptyCanonicalIcon());
}
function iconFromMapping(mapping, prefix, iconName) {
  if (mapping && mapping[prefix] && mapping[prefix][iconName]) {
    return {
      prefix: prefix,
      iconName: iconName,
      icon: mapping[prefix][iconName]
    };
  }
}

function toHtml(abstractNodes) {
  var tag = abstractNodes.tag,
      _abstractNodes$attrib = abstractNodes.attributes,
      attributes = _abstractNodes$attrib === void 0 ? {} : _abstractNodes$attrib,
      _abstractNodes$childr = abstractNodes.children,
      children = _abstractNodes$childr === void 0 ? [] : _abstractNodes$childr;

  if (typeof abstractNodes === 'string') {
    return htmlEscape(abstractNodes);
  } else {
    return "<".concat(tag, " ").concat(joinAttributes(attributes), ">").concat(children.map(toHtml).join(''), "</").concat(tag, ">");
  }
}

var noop$2 = function noop() {};

function isWatched(node) {
  var i2svg = node.getAttribute ? node.getAttribute(DATA_FA_I2SVG) : null;
  return typeof i2svg === 'string';
}

function getMutator() {
  if (config.autoReplaceSvg === true) {
    return mutators.replace;
  }

  var mutator = mutators[config.autoReplaceSvg];
  return mutator || mutators.replace;
}

var mutators = {
  replace: function replace(mutation) {
    var node = mutation[0];
    var abstract = mutation[1];
    var newOuterHTML = abstract.map(function (a) {
      return toHtml(a);
    }).join('\n');

    if (node.parentNode && node.outerHTML) {
      node.outerHTML = newOuterHTML + (config.keepOriginalSource && node.tagName.toLowerCase() !== 'svg' ? "<!-- ".concat(node.outerHTML, " Font Awesome fontawesome.com -->") : '');
    } else if (node.parentNode) {
      var newNode = document.createElement('span');
      node.parentNode.replaceChild(newNode, node);
      newNode.outerHTML = newOuterHTML;
    }
  },
  nest: function nest(mutation) {
    var node = mutation[0];
    var abstract = mutation[1]; // If we already have a replaced node we do not want to continue nesting within it.
    // Short-circuit to the standard replacement

    if (~classArray(node).indexOf(config.replacementClass)) {
      return mutators.replace(mutation);
    }

    var forSvg = new RegExp("".concat(config.familyPrefix, "-.*"));
    delete abstract[0].attributes.style;
    delete abstract[0].attributes.id;
    var splitClasses = abstract[0].attributes.class.split(' ').reduce(function (acc, cls) {
      if (cls === config.replacementClass || cls.match(forSvg)) {
        acc.toSvg.push(cls);
      } else {
        acc.toNode.push(cls);
      }

      return acc;
    }, {
      toNode: [],
      toSvg: []
    });
    abstract[0].attributes.class = splitClasses.toSvg.join(' ');
    var newInnerHTML = abstract.map(function (a) {
      return toHtml(a);
    }).join('\n');
    node.setAttribute('class', splitClasses.toNode.join(' '));
    node.setAttribute(DATA_FA_I2SVG, '');
    node.innerHTML = newInnerHTML;
  }
};

function performOperationSync(op) {
  op();
}

function perform(mutations, callback) {
  var callbackFunction = typeof callback === 'function' ? callback : noop$2;

  if (mutations.length === 0) {
    callbackFunction();
  } else {
    var frame = performOperationSync;

    if (config.mutateApproach === MUTATION_APPROACH_ASYNC) {
      frame = WINDOW.requestAnimationFrame || performOperationSync;
    }

    frame(function () {
      var mutator = getMutator();
      var mark = perf.begin('mutate');
      mutations.map(mutator);
      mark();
      callbackFunction();
    });
  }
}
var disabled = false;
function disableObservation() {
  disabled = true;
}
function enableObservation() {
  disabled = false;
}
var mo = null;
function observe(options) {
  if (!MUTATION_OBSERVER) {
    return;
  }

  if (!config.observeMutations) {
    return;
  }

  var treeCallback = options.treeCallback,
      nodeCallback = options.nodeCallback,
      pseudoElementsCallback = options.pseudoElementsCallback,
      _options$observeMutat = options.observeMutationsRoot,
      observeMutationsRoot = _options$observeMutat === void 0 ? DOCUMENT : _options$observeMutat;
  mo = new MUTATION_OBSERVER(function (objects) {
    if (disabled) return;
    toArray(objects).forEach(function (mutationRecord) {
      if (mutationRecord.type === 'childList' && mutationRecord.addedNodes.length > 0 && !isWatched(mutationRecord.addedNodes[0])) {
        if (config.searchPseudoElements) {
          pseudoElementsCallback(mutationRecord.target);
        }

        treeCallback(mutationRecord.target);
      }

      if (mutationRecord.type === 'attributes' && mutationRecord.target.parentNode && config.searchPseudoElements) {
        pseudoElementsCallback(mutationRecord.target.parentNode);
      }

      if (mutationRecord.type === 'attributes' && isWatched(mutationRecord.target) && ~ATTRIBUTES_WATCHED_FOR_MUTATION.indexOf(mutationRecord.attributeName)) {
        if (mutationRecord.attributeName === 'class') {
          var _getCanonicalIcon = getCanonicalIcon(classArray(mutationRecord.target)),
              prefix = _getCanonicalIcon.prefix,
              iconName = _getCanonicalIcon.iconName;

          if (prefix) mutationRecord.target.setAttribute('data-prefix', prefix);
          if (iconName) mutationRecord.target.setAttribute('data-icon', iconName);
        } else {
          nodeCallback(mutationRecord.target);
        }
      }
    });
  });
  if (!IS_DOM) return;
  mo.observe(observeMutationsRoot, {
    childList: true,
    attributes: true,
    characterData: true,
    subtree: true
  });
}
function disconnect() {
  if (!mo) return;
  mo.disconnect();
}

function styleParser (node) {
  var style = node.getAttribute('style');
  var val = [];

  if (style) {
    val = style.split(';').reduce(function (acc, style) {
      var styles = style.split(':');
      var prop = styles[0];
      var value = styles.slice(1);

      if (prop && value.length > 0) {
        acc[prop] = value.join(':').trim();
      }

      return acc;
    }, {});
  }

  return val;
}

function classParser (node) {
  var existingPrefix = node.getAttribute('data-prefix');
  var existingIconName = node.getAttribute('data-icon');
  var innerText = node.innerText !== undefined ? node.innerText.trim() : '';
  var val = getCanonicalIcon(classArray(node));

  if (existingPrefix && existingIconName) {
    val.prefix = existingPrefix;
    val.iconName = existingIconName;
  }

  if (val.prefix && innerText.length > 1) {
    val.iconName = byLigature(val.prefix, node.innerText);
  } else if (val.prefix && innerText.length === 1) {
    val.iconName = byUnicode(val.prefix, toHex(node.innerText));
  }

  return val;
}

var parseTransformString = function parseTransformString(transformString) {
  var transform = {
    size: 16,
    x: 0,
    y: 0,
    flipX: false,
    flipY: false,
    rotate: 0
  };

  if (!transformString) {
    return transform;
  } else {
    return transformString.toLowerCase().split(' ').reduce(function (acc, n) {
      var parts = n.toLowerCase().split('-');
      var first = parts[0];
      var rest = parts.slice(1).join('-');

      if (first && rest === 'h') {
        acc.flipX = true;
        return acc;
      }

      if (first && rest === 'v') {
        acc.flipY = true;
        return acc;
      }

      rest = parseFloat(rest);

      if (isNaN(rest)) {
        return acc;
      }

      switch (first) {
        case 'grow':
          acc.size = acc.size + rest;
          break;

        case 'shrink':
          acc.size = acc.size - rest;
          break;

        case 'left':
          acc.x = acc.x - rest;
          break;

        case 'right':
          acc.x = acc.x + rest;
          break;

        case 'up':
          acc.y = acc.y - rest;
          break;

        case 'down':
          acc.y = acc.y + rest;
          break;

        case 'rotate':
          acc.rotate = acc.rotate + rest;
          break;
      }

      return acc;
    }, transform);
  }
};
function transformParser (node) {
  return parseTransformString(node.getAttribute('data-fa-transform'));
}

function symbolParser (node) {
  var symbol = node.getAttribute('data-fa-symbol');
  return symbol === null ? false : symbol === '' ? true : symbol;
}

function attributesParser (node) {
  var extraAttributes = toArray(node.attributes).reduce(function (acc, attr) {
    if (acc.name !== 'class' && acc.name !== 'style') {
      acc[attr.name] = attr.value;
    }

    return acc;
  }, {});
  var title = node.getAttribute('title');
  var titleId = node.getAttribute('data-fa-title-id');

  if (config.autoA11y) {
    if (title) {
      extraAttributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
    } else {
      extraAttributes['aria-hidden'] = 'true';
      extraAttributes['focusable'] = 'false';
    }
  }

  return extraAttributes;
}

function maskParser (node) {
  var mask = node.getAttribute('data-fa-mask');

  if (!mask) {
    return emptyCanonicalIcon();
  } else {
    return getCanonicalIcon(mask.split(' ').map(function (i) {
      return i.trim();
    }));
  }
}

function blankMeta() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: meaninglessTransform,
    symbol: false,
    mask: null,
    maskId: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}
function parseMeta(node) {
  var _classParser = classParser(node),
      iconName = _classParser.iconName,
      prefix = _classParser.prefix,
      extraClasses = _classParser.rest;

  var extraStyles = styleParser(node);
  var transform = transformParser(node);
  var symbol = symbolParser(node);
  var extraAttributes = attributesParser(node);
  var mask = maskParser(node);
  return {
    iconName: iconName,
    title: node.getAttribute('title'),
    titleId: node.getAttribute('data-fa-title-id'),
    prefix: prefix,
    transform: transform,
    symbol: symbol,
    mask: mask,
    maskId: node.getAttribute('data-fa-mask-id'),
    extra: {
      classes: extraClasses,
      styles: extraStyles,
      attributes: extraAttributes
    }
  };
}

function MissingIcon(error) {
  this.name = 'MissingIcon';
  this.message = error || 'Icon unavailable';
  this.stack = new Error().stack;
}
MissingIcon.prototype = Object.create(Error.prototype);
MissingIcon.prototype.constructor = MissingIcon;

var FILL = {
  fill: 'currentColor'
};
var ANIMATION_BASE = {
  attributeType: 'XML',
  repeatCount: 'indefinite',
  dur: '2s'
};
var RING = {
  tag: 'path',
  attributes: _objectSpread({}, FILL, {
    d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z'
  })
};

var OPACITY_ANIMATE = _objectSpread({}, ANIMATION_BASE, {
  attributeName: 'opacity'
});

var DOT = {
  tag: 'circle',
  attributes: _objectSpread({}, FILL, {
    cx: '256',
    cy: '364',
    r: '28'
  }),
  children: [{
    tag: 'animate',
    attributes: _objectSpread({}, ANIMATION_BASE, {
      attributeName: 'r',
      values: '28;14;28;28;14;28;'
    })
  }, {
    tag: 'animate',
    attributes: _objectSpread({}, OPACITY_ANIMATE, {
      values: '1;0;1;1;0;1;'
    })
  }]
};
var QUESTION = {
  tag: 'path',
  attributes: _objectSpread({}, FILL, {
    opacity: '1',
    d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z'
  }),
  children: [{
    tag: 'animate',
    attributes: _objectSpread({}, OPACITY_ANIMATE, {
      values: '1;0;0;0;0;1;'
    })
  }]
};
var EXCLAMATION = {
  tag: 'path',
  attributes: _objectSpread({}, FILL, {
    opacity: '0',
    d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z'
  }),
  children: [{
    tag: 'animate',
    attributes: _objectSpread({}, OPACITY_ANIMATE, {
      values: '0;0;1;1;0;0;'
    })
  }]
};
var missing = {
  tag: 'g',
  children: [RING, DOT, QUESTION, EXCLAMATION]
};

var styles$2 = namespace.styles;
function asFoundIcon(icon) {
  var width = icon[0];
  var height = icon[1];

  var _icon$slice = icon.slice(4),
      _icon$slice2 = _slicedToArray(_icon$slice, 1),
      vectorData = _icon$slice2[0];

  var element = null;

  if (Array.isArray(vectorData)) {
    element = {
      tag: 'g',
      attributes: {
        class: "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.GROUP)
      },
      children: [{
        tag: 'path',
        attributes: {
          class: "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.SECONDARY),
          fill: 'currentColor',
          d: vectorData[0]
        }
      }, {
        tag: 'path',
        attributes: {
          class: "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.PRIMARY),
          fill: 'currentColor',
          d: vectorData[1]
        }
      }]
    };
  } else {
    element = {
      tag: 'path',
      attributes: {
        fill: 'currentColor',
        d: vectorData
      }
    };
  }

  return {
    found: true,
    width: width,
    height: height,
    icon: element
  };
}
function findIcon(iconName, prefix) {
  return new picked(function (resolve, reject) {
    var val = {
      found: false,
      width: 512,
      height: 512,
      icon: missing
    };

    if (iconName && prefix && styles$2[prefix] && styles$2[prefix][iconName]) {
      var icon = styles$2[prefix][iconName];
      return resolve(asFoundIcon(icon));
    }

    if (iconName && prefix && !config.showMissingIcons) {
      reject(new MissingIcon("Icon is missing for prefix ".concat(prefix, " with icon name ").concat(iconName)));
    } else {
      resolve(val);
    }
  });
}

var styles$3 = namespace.styles;

function generateSvgReplacementMutation(node, nodeMeta) {
  var iconName = nodeMeta.iconName,
      title = nodeMeta.title,
      titleId = nodeMeta.titleId,
      prefix = nodeMeta.prefix,
      transform = nodeMeta.transform,
      symbol = nodeMeta.symbol,
      mask = nodeMeta.mask,
      maskId = nodeMeta.maskId,
      extra = nodeMeta.extra;
  return new picked(function (resolve, reject) {
    picked.all([findIcon(iconName, prefix), findIcon(mask.iconName, mask.prefix)]).then(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          main = _ref2[0],
          mask = _ref2[1];

      resolve([node, makeInlineSvgAbstract({
        icons: {
          main: main,
          mask: mask
        },
        prefix: prefix,
        iconName: iconName,
        transform: transform,
        symbol: symbol,
        mask: mask,
        maskId: maskId,
        title: title,
        titleId: titleId,
        extra: extra,
        watchable: true
      })]);
    });
  });
}

function generateLayersText(node, nodeMeta) {
  var title = nodeMeta.title,
      transform = nodeMeta.transform,
      extra = nodeMeta.extra;
  var width = null;
  var height = null;

  if (IS_IE) {
    var computedFontSize = parseInt(getComputedStyle(node).fontSize, 10);
    var boundingClientRect = node.getBoundingClientRect();
    width = boundingClientRect.width / computedFontSize;
    height = boundingClientRect.height / computedFontSize;
  }

  if (config.autoA11y && !title) {
    extra.attributes['aria-hidden'] = 'true';
  }

  return picked.resolve([node, makeLayersTextAbstract({
    content: node.innerHTML,
    width: width,
    height: height,
    transform: transform,
    title: title,
    extra: extra,
    watchable: true
  })]);
}

function generateMutation(node) {
  var nodeMeta = parseMeta(node);

  if (~nodeMeta.extra.classes.indexOf(LAYERS_TEXT_CLASSNAME)) {
    return generateLayersText(node, nodeMeta);
  } else {
    return generateSvgReplacementMutation(node, nodeMeta);
  }
}

function onTree(root) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  if (!IS_DOM) return;
  var htmlClassList = DOCUMENT.documentElement.classList;

  var hclAdd = function hclAdd(suffix) {
    return htmlClassList.add("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
  };

  var hclRemove = function hclRemove(suffix) {
    return htmlClassList.remove("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
  };

  var prefixes = config.autoFetchSvg ? Object.keys(PREFIX_TO_STYLE) : Object.keys(styles$3);
  var prefixesDomQuery = [".".concat(LAYERS_TEXT_CLASSNAME, ":not([").concat(DATA_FA_I2SVG, "])")].concat(prefixes.map(function (p) {
    return ".".concat(p, ":not([").concat(DATA_FA_I2SVG, "])");
  })).join(', ');

  if (prefixesDomQuery.length === 0) {
    return;
  }

  var candidates = [];

  try {
    candidates = toArray(root.querySelectorAll(prefixesDomQuery));
  } catch (e) {// noop
  }

  if (candidates.length > 0) {
    hclAdd('pending');
    hclRemove('complete');
  } else {
    return;
  }

  var mark = perf.begin('onTree');
  var mutations = candidates.reduce(function (acc, node) {
    try {
      var mutation = generateMutation(node);

      if (mutation) {
        acc.push(mutation);
      }
    } catch (e) {
      if (!PRODUCTION) {
        if (e instanceof MissingIcon) {
          console.error(e);
        }
      }
    }

    return acc;
  }, []);
  return new picked(function (resolve, reject) {
    picked.all(mutations).then(function (resolvedMutations) {
      perform(resolvedMutations, function () {
        hclAdd('active');
        hclAdd('complete');
        hclRemove('pending');
        if (typeof callback === 'function') callback();
        mark();
        resolve();
      });
    }).catch(function () {
      mark();
      reject();
    });
  });
}
function onNode(node) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  generateMutation(node).then(function (mutation) {
    if (mutation) {
      perform([mutation], callback);
    }
  });
}

function replaceForPosition(node, position) {
  var pendingAttribute = "".concat(DATA_FA_PSEUDO_ELEMENT_PENDING).concat(position.replace(':', '-'));
  return new picked(function (resolve, reject) {
    if (node.getAttribute(pendingAttribute) !== null) {
      // This node is already being processed
      return resolve();
    }

    var children = toArray(node.children);
    var alreadyProcessedPseudoElement = children.filter(function (c) {
      return c.getAttribute(DATA_FA_PSEUDO_ELEMENT) === position;
    })[0];
    var styles = WINDOW.getComputedStyle(node, position);
    var fontFamily = styles.getPropertyValue('font-family').match(FONT_FAMILY_PATTERN);
    var fontWeight = styles.getPropertyValue('font-weight');
    var content = styles.getPropertyValue('content');

    if (alreadyProcessedPseudoElement && !fontFamily) {
      // If we've already processed it but the current computed style does not result in a font-family,
      // that probably means that a class name that was previously present to make the icon has been
      // removed. So we now should delete the icon.
      node.removeChild(alreadyProcessedPseudoElement);
      return resolve();
    } else if (fontFamily && content !== 'none' && content !== '') {
      var _content = styles.getPropertyValue('content');

      var prefix = ~['Solid', 'Regular', 'Light', 'Duotone', 'Brands', 'Kit'].indexOf(fontFamily[2]) ? STYLE_TO_PREFIX[fontFamily[2].toLowerCase()] : FONT_WEIGHT_TO_PREFIX[fontWeight];
      var hexValue = toHex(_content.length === 3 ? _content.substr(1, 1) : _content);
      var iconName = byUnicode(prefix, hexValue);
      var iconIdentifier = iconName; // Only convert the pseudo element in this :before/:after position into an icon if we haven't
      // already done so with the same prefix and iconName

      if (iconName && (!alreadyProcessedPseudoElement || alreadyProcessedPseudoElement.getAttribute(DATA_PREFIX) !== prefix || alreadyProcessedPseudoElement.getAttribute(DATA_ICON) !== iconIdentifier)) {
        node.setAttribute(pendingAttribute, iconIdentifier);

        if (alreadyProcessedPseudoElement) {
          // Delete the old one, since we're replacing it with a new one
          node.removeChild(alreadyProcessedPseudoElement);
        }

        var meta = blankMeta();
        var extra = meta.extra;
        extra.attributes[DATA_FA_PSEUDO_ELEMENT] = position;
        findIcon(iconName, prefix).then(function (main) {
          var abstract = makeInlineSvgAbstract(_objectSpread({}, meta, {
            icons: {
              main: main,
              mask: emptyCanonicalIcon()
            },
            prefix: prefix,
            iconName: iconIdentifier,
            extra: extra,
            watchable: true
          }));
          var element = DOCUMENT.createElement('svg');

          if (position === ':before') {
            node.insertBefore(element, node.firstChild);
          } else {
            node.appendChild(element);
          }

          element.outerHTML = abstract.map(function (a) {
            return toHtml(a);
          }).join('\n');
          node.removeAttribute(pendingAttribute);
          resolve();
        }).catch(reject);
      } else {
        resolve();
      }
    } else {
      resolve();
    }
  });
}

function replace(node) {
  return picked.all([replaceForPosition(node, ':before'), replaceForPosition(node, ':after')]);
}

function processable(node) {
  return node.parentNode !== document.head && !~TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS.indexOf(node.tagName.toUpperCase()) && !node.getAttribute(DATA_FA_PSEUDO_ELEMENT) && (!node.parentNode || node.parentNode.tagName !== 'svg');
}

function searchPseudoElements (root) {
  if (!IS_DOM) return;
  return new picked(function (resolve, reject) {
    var operations = toArray(root.querySelectorAll('*')).filter(processable).map(replace);
    var end = perf.begin('searchPseudoElements');
    disableObservation();
    picked.all(operations).then(function () {
      end();
      enableObservation();
      resolve();
    }).catch(function () {
      end();
      enableObservation();
      reject();
    });
  });
}

var baseStyles = "svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse {\n  color: #fff;\n}";

function css () {
  var dfp = DEFAULT_FAMILY_PREFIX;
  var drc = DEFAULT_REPLACEMENT_CLASS;
  var fp = config.familyPrefix;
  var rc = config.replacementClass;
  var s = baseStyles;

  if (fp !== dfp || rc !== drc) {
    var dPatt = new RegExp("\\.".concat(dfp, "\\-"), 'g');
    var customPropPatt = new RegExp("\\--".concat(dfp, "\\-"), 'g');
    var rPatt = new RegExp("\\.".concat(drc), 'g');
    s = s.replace(dPatt, ".".concat(fp, "-")).replace(customPropPatt, "--".concat(fp, "-")).replace(rPatt, ".".concat(rc));
  }

  return s;
}

var Library =
/*#__PURE__*/
function () {
  function Library() {
    _classCallCheck(this, Library);

    this.definitions = {};
  }

  _createClass(Library, [{
    key: "add",
    value: function add() {
      var _this = this;

      for (var _len = arguments.length, definitions = new Array(_len), _key = 0; _key < _len; _key++) {
        definitions[_key] = arguments[_key];
      }

      var additions = definitions.reduce(this._pullDefinitions, {});
      Object.keys(additions).forEach(function (key) {
        _this.definitions[key] = _objectSpread({}, _this.definitions[key] || {}, additions[key]);
        defineIcons(key, additions[key]);
        build();
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      this.definitions = {};
    }
  }, {
    key: "_pullDefinitions",
    value: function _pullDefinitions(additions, definition) {
      var normalized = definition.prefix && definition.iconName && definition.icon ? {
        0: definition
      } : definition;
      Object.keys(normalized).map(function (key) {
        var _normalized$key = normalized[key],
            prefix = _normalized$key.prefix,
            iconName = _normalized$key.iconName,
            icon = _normalized$key.icon;
        if (!additions[prefix]) additions[prefix] = {};
        additions[prefix][iconName] = icon;
      });
      return additions;
    }
  }]);

  return Library;
}();

function ensureCss() {
  if (config.autoAddCss && !_cssInserted) {
    insertCss(css());

    _cssInserted = true;
  }
}

function apiObject(val, abstractCreator) {
  Object.defineProperty(val, 'abstract', {
    get: abstractCreator
  });
  Object.defineProperty(val, 'html', {
    get: function get() {
      return val.abstract.map(function (a) {
        return toHtml(a);
      });
    }
  });
  Object.defineProperty(val, 'node', {
    get: function get() {
      if (!IS_DOM) return;
      var container = DOCUMENT.createElement('div');
      container.innerHTML = val.html;
      return container.children;
    }
  });
  return val;
}

function findIconDefinition(iconLookup) {
  var _iconLookup$prefix = iconLookup.prefix,
      prefix = _iconLookup$prefix === void 0 ? 'fa' : _iconLookup$prefix,
      iconName = iconLookup.iconName;
  if (!iconName) return;
  return iconFromMapping(library.definitions, prefix, iconName) || iconFromMapping(namespace.styles, prefix, iconName);
}

function resolveIcons(next) {
  return function (maybeIconDefinition) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var iconDefinition = (maybeIconDefinition || {}).icon ? maybeIconDefinition : findIconDefinition(maybeIconDefinition || {});
    var mask = params.mask;

    if (mask) {
      mask = (mask || {}).icon ? mask : findIconDefinition(mask || {});
    }

    return next(iconDefinition, _objectSpread({}, params, {
      mask: mask
    }));
  };
}

var library = new Library();
var noAuto = function noAuto() {
  config.autoReplaceSvg = false;
  config.observeMutations = false;
  disconnect();
};
var _cssInserted = false;
var dom = {
  i2svg: function i2svg() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (IS_DOM) {
      ensureCss();
      var _params$node = params.node,
          node = _params$node === void 0 ? DOCUMENT : _params$node,
          _params$callback = params.callback,
          callback = _params$callback === void 0 ? function () {} : _params$callback;

      if (config.searchPseudoElements) {
        searchPseudoElements(node);
      }

      return onTree(node, callback);
    } else {
      return picked.reject('Operation requires a DOM of some kind.');
    }
  },
  css: css,
  insertCss: function insertCss$$1() {
    if (!_cssInserted) {
      insertCss(css());

      _cssInserted = true;
    }
  },
  watch: function watch() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var autoReplaceSvgRoot = params.autoReplaceSvgRoot,
        observeMutationsRoot = params.observeMutationsRoot;

    if (config.autoReplaceSvg === false) {
      config.autoReplaceSvg = true;
    }

    config.observeMutations = true;
    domready(function () {
      autoReplace({
        autoReplaceSvgRoot: autoReplaceSvgRoot
      });
      observe({
        treeCallback: onTree,
        nodeCallback: onNode,
        pseudoElementsCallback: searchPseudoElements,
        observeMutationsRoot: observeMutationsRoot
      });
    });
  }
};
var parse = {
  transform: function transform(transformString) {
    return parseTransformString(transformString);
  }
};
var icon = resolveIcons(function (iconDefinition) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$transform = params.transform,
      transform = _params$transform === void 0 ? meaninglessTransform : _params$transform,
      _params$symbol = params.symbol,
      symbol = _params$symbol === void 0 ? false : _params$symbol,
      _params$mask = params.mask,
      mask = _params$mask === void 0 ? null : _params$mask,
      _params$maskId = params.maskId,
      maskId = _params$maskId === void 0 ? null : _params$maskId,
      _params$title = params.title,
      title = _params$title === void 0 ? null : _params$title,
      _params$titleId = params.titleId,
      titleId = _params$titleId === void 0 ? null : _params$titleId,
      _params$classes = params.classes,
      classes = _params$classes === void 0 ? [] : _params$classes,
      _params$attributes = params.attributes,
      attributes = _params$attributes === void 0 ? {} : _params$attributes,
      _params$styles = params.styles,
      styles = _params$styles === void 0 ? {} : _params$styles;
  if (!iconDefinition) return;
  var prefix = iconDefinition.prefix,
      iconName = iconDefinition.iconName,
      icon = iconDefinition.icon;
  return apiObject(_objectSpread({
    type: 'icon'
  }, iconDefinition), function () {
    ensureCss();

    if (config.autoA11y) {
      if (title) {
        attributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
      } else {
        attributes['aria-hidden'] = 'true';
        attributes['focusable'] = 'false';
      }
    }

    return makeInlineSvgAbstract({
      icons: {
        main: asFoundIcon(icon),
        mask: mask ? asFoundIcon(mask.icon) : {
          found: false,
          width: null,
          height: null,
          icon: {}
        }
      },
      prefix: prefix,
      iconName: iconName,
      transform: _objectSpread({}, meaninglessTransform, transform),
      symbol: symbol,
      title: title,
      maskId: maskId,
      titleId: titleId,
      extra: {
        attributes: attributes,
        styles: styles,
        classes: classes
      }
    });
  });
});
var text = function text(content) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$transform2 = params.transform,
      transform = _params$transform2 === void 0 ? meaninglessTransform : _params$transform2,
      _params$title2 = params.title,
      title = _params$title2 === void 0 ? null : _params$title2,
      _params$classes2 = params.classes,
      classes = _params$classes2 === void 0 ? [] : _params$classes2,
      _params$attributes2 = params.attributes,
      attributes = _params$attributes2 === void 0 ? {} : _params$attributes2,
      _params$styles2 = params.styles,
      styles = _params$styles2 === void 0 ? {} : _params$styles2;
  return apiObject({
    type: 'text',
    content: content
  }, function () {
    ensureCss();
    return makeLayersTextAbstract({
      content: content,
      transform: _objectSpread({}, meaninglessTransform, transform),
      title: title,
      extra: {
        attributes: attributes,
        styles: styles,
        classes: ["".concat(config.familyPrefix, "-layers-text")].concat(_toConsumableArray(classes))
      }
    });
  });
};
var counter = function counter(content) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$title3 = params.title,
      title = _params$title3 === void 0 ? null : _params$title3,
      _params$classes3 = params.classes,
      classes = _params$classes3 === void 0 ? [] : _params$classes3,
      _params$attributes3 = params.attributes,
      attributes = _params$attributes3 === void 0 ? {} : _params$attributes3,
      _params$styles3 = params.styles,
      styles = _params$styles3 === void 0 ? {} : _params$styles3;
  return apiObject({
    type: 'counter',
    content: content
  }, function () {
    ensureCss();
    return makeLayersCounterAbstract({
      content: content.toString(),
      title: title,
      extra: {
        attributes: attributes,
        styles: styles,
        classes: ["".concat(config.familyPrefix, "-layers-counter")].concat(_toConsumableArray(classes))
      }
    });
  });
};
var layer = function layer(assembler) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$classes4 = params.classes,
      classes = _params$classes4 === void 0 ? [] : _params$classes4;
  return apiObject({
    type: 'layer'
  }, function () {
    ensureCss();
    var children = [];
    assembler(function (args) {
      Array.isArray(args) ? args.map(function (a) {
        children = children.concat(a.abstract);
      }) : children = children.concat(args.abstract);
    });
    return [{
      tag: 'span',
      attributes: {
        class: ["".concat(config.familyPrefix, "-layers")].concat(_toConsumableArray(classes)).join(' ')
      },
      children: children
    }];
  });
};
var api = {
  noAuto: noAuto,
  config: config,
  dom: dom,
  library: library,
  parse: parse,
  findIconDefinition: findIconDefinition,
  icon: icon,
  text: text,
  counter: counter,
  layer: layer,
  toHtml: toHtml
};

var autoReplace = function autoReplace() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _params$autoReplaceSv = params.autoReplaceSvgRoot,
      autoReplaceSvgRoot = _params$autoReplaceSv === void 0 ? DOCUMENT : _params$autoReplaceSv;
  if ((Object.keys(namespace.styles).length > 0 || config.autoFetchSvg) && IS_DOM && config.autoReplaceSvg) api.dom.i2svg({
    node: autoReplaceSvgRoot
  });
};




/***/ }),

/***/ "./node_modules/ngx-loading/fesm5/ngx-loading.js":
/*!*******************************************************!*\
  !*** ./node_modules/ngx-loading/fesm5/ngx-loading.js ***!
  \*******************************************************/
/*! exports provided: NgxLoadingService, NgxLoadingComponent, NgxLoadingModule, NgxLoadingConfig, ngxLoadingAnimationTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxLoadingService", function() { return NgxLoadingService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxLoadingComponent", function() { return NgxLoadingComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxLoadingModule", function() { return NgxLoadingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxLoadingConfig", function() { return NgxLoadingConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ngxLoadingAnimationTypes", function() { return ngxLoadingAnimationTypes; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgxLoadingConfig = /** @class */ (function () {
    function NgxLoadingConfig(config) {
        if (config === void 0) { config = {}; }
        this.backdropBorderRadius = config.backdropBorderRadius;
        this.backdropBackgroundColour = config.backdropBackgroundColour;
        this.fullScreenBackdrop = config.fullScreenBackdrop;
        this.animationType = config.animationType;
        this.primaryColour = config.primaryColour;
        this.secondaryColour = config.secondaryColour;
        this.tertiaryColour = config.tertiaryColour;
    }
    return NgxLoadingConfig;
}());
/** @type {?} */
var ngxLoadingAnimationTypes = {
    chasingDots: 'chasing-dots',
    circle: 'sk-circle',
    circleSwish: 'circleSwish',
    cubeGrid: 'sk-cube-grid',
    doubleBounce: 'double-bounce',
    none: 'none',
    pulse: 'pulse',
    rectangleBounce: 'rectangle-bounce',
    rotatingPlane: 'rotating-plane',
    threeBounce: 'three-bounce',
    wanderingCubes: 'wandering-cubes'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgxLoadingService = /** @class */ (function () {
    function NgxLoadingService(config) {
        this.config = config;
        this.loadingConfig = this.config || new NgxLoadingConfig();
    }
    NgxLoadingService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                    providedIn: 'root'
                },] },
    ];
    NgxLoadingService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ['loadingConfig',] }] }
    ]; };
    /** @nocollapse */ NgxLoadingService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function NgxLoadingService_Factory() { return new NgxLoadingService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])("loadingConfig", 8)); }, token: NgxLoadingService, providedIn: "root" });
    return NgxLoadingService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgxLoadingComponent = /** @class */ (function () {
    function NgxLoadingComponent(LoadingService, changeDetectorRef) {
        this.LoadingService = LoadingService;
        this.changeDetectorRef = changeDetectorRef;
        this.config = new NgxLoadingConfig();
        this.defaultConfig = {
            animationType: ngxLoadingAnimationTypes.threeBounce,
            backdropBackgroundColour: 'rgba(0, 0, 0, 0.3)',
            backdropBorderRadius: '0px',
            fullScreenBackdrop: false,
            primaryColour: '#ffffff',
            secondaryColour: '#ffffff',
            tertiaryColour: '#ffffff'
        };
        this.ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;
    }
    /**
     * @return {?}
     */
    NgxLoadingComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setupConfig();
    };
    /**
     * @return {?}
     */
    NgxLoadingComponent.prototype.setupConfig = /**
     * @return {?}
     */
    function () {
        for (var option in this.defaultConfig) {
            if (typeof this.config[option] === 'boolean') {
                if (this.config[option] != null) {
                    continue;
                }
                this.config[option] = this.LoadingService.loadingConfig[option] != null ? this.LoadingService.loadingConfig[option] : this.defaultConfig[option];
            }
            else {
                if (this.config[option] != null) {
                    continue;
                }
                this.config[option] = this.LoadingService.loadingConfig[option] != null ? this.LoadingService.loadingConfig[option] : this.defaultConfig[option];
            }
        }
    };
    /**
     * @param {?} show
     * @return {?}
     */
    NgxLoadingComponent.prototype.setShow = /**
     * @param {?} show
     * @return {?}
     */
    function (show) {
        this.show = show;
        this.changeDetectorRef.markForCheck();
    };
    NgxLoadingComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngx-loading',
                    template: "\n    <div *ngIf=\"show\">\n      <div class=\"backdrop\" [ngClass]=\"{'full-screen' : config?.fullScreenBackdrop == true}\" [ngStyle]=\"{'border-radius': config?.backdropBorderRadius, 'background-color': config?.backdropBackgroundColour}\"></div>\n\n      <div [ngSwitch]=\"config?.animationType\">\n        <div class=\"spinner-circle\" *ngSwitchCase=\"ngxLoadingAnimationTypes.circle\" [ngClass]=\"{'full-screen' : config?.fullScreenBackdrop == true}\"\n          [ngStyle]=\"{'border-top-color': config?.secondaryColour, 'border-right-color': config?.secondaryColour, 'border-bottom-color': config?.secondaryColour, 'border-left-color': config?.primaryColour}\">\n        </div>\n\n        <div *ngSwitchCase=\"ngxLoadingAnimationTypes.cubeGrid\" class=\"sk-cube-grid\" [ngClass]=\"{'full-screen' : config?.fullScreenBackdrop == true}\">\n          <div class=\"sk-cube sk-cube1\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"sk-cube sk-cube2\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"sk-cube sk-cube3\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"sk-cube sk-cube4\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"sk-cube sk-cube5\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"sk-cube sk-cube6\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"sk-cube sk-cube7\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"sk-cube sk-cube8\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"sk-cube sk-cube9\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n        </div>\n\n        <div class=\"spinner-sk-rotateplane\" *ngSwitchCase=\"ngxLoadingAnimationTypes.rotatingPlane\" [ngStyle]=\"{'background-color': config?.primaryColour}\" [ngClass]=\"{'full-screen' : config?.fullScreenBackdrop == true}\"></div>\n\n        <div class=\"spinner-rectangle-bounce\" *ngSwitchCase=\"ngxLoadingAnimationTypes.rectangleBounce\" [ngClass]=\"{'full-screen' : config?.fullScreenBackdrop == true}\">\n          <div class=\"rect1\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"rect2\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"rect3\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"rect4\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"rect5\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n        </div>\n\n        <div class=\"spinner-wandering-cubes\" *ngSwitchCase=\"ngxLoadingAnimationTypes.wanderingCubes\" [ngClass]=\"{'full-screen' : config?.fullScreenBackdrop == true}\">\n          <div class=\"cube1\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"cube2\" [ngStyle]=\"{'background-color': config?.secondaryColour}\"></div>\n        </div>\n\n        <div class=\"spinner-double-bounce\" *ngSwitchCase=\"ngxLoadingAnimationTypes.doubleBounce\" [ngClass]=\"{'full-screen' : config?.fullScreenBackdrop == true}\">\n          <div class=\"double-bounce1\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"double-bounce2\" [ngStyle]=\"{'background-color': config?.secondaryColour}\"></div>\n        </div>\n\n        <div class=\"spinner-pulse\" *ngSwitchCase=\"ngxLoadingAnimationTypes.pulse\" [ngClass]=\"{'full-screen' : config?.fullScreenBackdrop == true}\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n\n        <div class=\"spinner-chasing-dots\" *ngSwitchCase=\"ngxLoadingAnimationTypes.chasingDots\" [ngClass]=\"{'full-screen' : config?.fullScreenBackdrop == true}\">\n          <div class=\"dot1\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"dot2\" [ngStyle]=\"{'background-color': config?.secondaryColour}\"></div>\n        </div>\n\n        <div class=\"spinner-circle-swish\" *ngSwitchCase=\"ngxLoadingAnimationTypes.circleSwish\" [ngClass]=\"{'full-screen' : config?.fullScreenBackdrop == true}\" [ngStyle]=\"{'color': config?.primaryColour}\"></div>\n\n        <div *ngSwitchCase=\"ngxLoadingAnimationTypes.none\" [ngClass]=\"{'full-screen' : config?.fullScreenBackdrop == true}\"></div>\n\n        <div *ngSwitchDefault class=\"spinner-three-bounce\" [ngClass]=\"{'full-screen' : config?.fullScreenBackdrop == true}\">\n          <div class=\"bounce1\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"bounce2\" [ngStyle]=\"{'background-color': config?.secondaryColour}\"></div>\n          <div class=\"bounce3\" [ngStyle]=\"{'background-color': config?.tertiaryColour}\"></div>\n        </div>\n        \n        <ng-container *ngIf=\"template\">\n            <ng-container *ngTemplateOutlet=\"template\"></ng-container>\n        </ng-container>\n      </div>\n    </div>\n  ",
                    styles: [
                        "\n      .backdrop {\n        z-index: 1999;\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        background-color: rgba(0, 0, 0, 0.3);\n      }\n\n      /* Spinner Circle styles */\n      .spinner-circle,\n      .spinner-circle:after {\n          border-radius: 50%;\n          width: 10em;\n          height: 10em;\n      }\n\n      .spinner-circle {\n          font-size: 6px;\n          border-top: 1.1em solid rgba(255, 255, 255, 0.2);\n          border-right: 1.1em solid rgba(255, 255, 255, 0.2);\n          border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);\n          border-left: 1.1em solid #ffffff;\n          margin: auto;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          margin: auto;\n          z-index: 2000;\n          -webkit-transform: translateZ(0);\n          -ms-transform: translateZ(0);\n          transform: translateZ(0);\n          -webkit-animation: load8 1.1s infinite linear;\n          animation: load8 1.1s infinite linear;\n      }\n      @-webkit-keyframes load8 {\n          0% {\n              -webkit-transform: rotate(0deg);\n              transform: rotate(0deg);\n          }\n          100% {\n              -webkit-transform: rotate(360deg);\n              transform: rotate(360deg);\n          }\n      }\n      @keyframes load8 {\n          0% {\n              -webkit-transform: rotate(0deg);\n              transform: rotate(0deg);\n          }\n          100% {\n              -webkit-transform: rotate(360deg);\n              transform: rotate(360deg);\n          }\n      }\n\n      /* Circle Swish styles */\n      .spinner-circle-swish {\n          font-size: 60px;\n          overflow: hidden;\n          width: 1em;\n          height: 1em;\n          z-index: 2000;\n          border-radius: 50%;\n          margin: auto;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          margin: auto;\n          z-index: 2000;\n          -webkit-transform: translateZ(0);\n          -ms-transform: translateZ(0);\n          transform: translateZ(0);\n          -webkit-animation: load6 1.7s infinite ease, round 1.7s infinite ease;\n          animation: load6 1.7s infinite ease, round 1.7s infinite ease;\n        }\n        @-webkit-keyframes load6 {\n          0% {\n            box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n          }\n          5%,\n          95% {\n            box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n          }\n          10%,\n          59% {\n            box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;\n          }\n          20% {\n            box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;\n          }\n          38% {\n            box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;\n          }\n          100% {\n            box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n          }\n        }\n        @keyframes load6 {\n          0% {\n            box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n          }\n          5%,\n          95% {\n            box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n          }\n          10%,\n          59% {\n            box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;\n          }\n          20% {\n            box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;\n          }\n          38% {\n            box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;\n          }\n          100% {\n            box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n          }\n        }\n        @-webkit-keyframes round {\n          0% {\n            -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n          }\n          100% {\n            -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n          }\n        }\n        @keyframes round {\n          0% {\n            -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n          }\n          100% {\n            -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n          }\n        }\n\n      /* Cube Grid styles */\n      .sk-cube-grid {\n          width: 40px;\n          height: 40px;\n\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          margin: auto;\n          z-index: 2000;\n      }\n\n      .sk-cube-grid .sk-cube {\n          width: 33%;\n          height: 33%;\n          background-color: #333;\n          float: left;\n          -webkit-animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;\n          animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;\n      }\n\n      .sk-cube-grid .sk-cube1 {\n          -webkit-animation-delay: 0.2s;\n          animation-delay: 0.2s;\n      }\n\n      .sk-cube-grid .sk-cube2 {\n          -webkit-animation-delay: 0.3s;\n          animation-delay: 0.3s;\n      }\n\n      .sk-cube-grid .sk-cube3 {\n          -webkit-animation-delay: 0.4s;\n          animation-delay: 0.4s;\n      }\n\n      .sk-cube-grid .sk-cube4 {\n          -webkit-animation-delay: 0.1s;\n          animation-delay: 0.1s;\n      }\n\n      .sk-cube-grid .sk-cube5 {\n          -webkit-animation-delay: 0.2s;\n          animation-delay: 0.2s;\n      }\n\n      .sk-cube-grid .sk-cube6 {\n          -webkit-animation-delay: 0.3s;\n          animation-delay: 0.3s;\n      }\n\n      .sk-cube-grid .sk-cube7 {\n          -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n      }\n\n      .sk-cube-grid .sk-cube8 {\n          -webkit-animation-delay: 0.1s;\n          animation-delay: 0.1s;\n      }\n\n      .sk-cube-grid .sk-cube9 {\n          -webkit-animation-delay: 0.2s;\n          animation-delay: 0.2s;\n      }\n\n      @-webkit-keyframes sk-cubeGridScaleDelay {\n          0%, 70%, 100% {\n              -webkit-transform: scale3D(1, 1, 1);\n              transform: scale3D(1, 1, 1);\n          } 35% {\n              -webkit-transform: scale3D(0, 0, 1);\n              transform: scale3D(0, 0, 1);\n          }\n      }\n\n      @keyframes sk-cubeGridScaleDelay {\n          0%, 70%, 100% {\n              -webkit-transform: scale3D(1, 1, 1);\n              transform: scale3D(1, 1, 1);\n          } 35% {\n              -webkit-transform: scale3D(0, 0, 1);\n              transform: scale3D(0, 0, 1);\n          }\n      }\n\n      /* Double Bounce styles */\n      .spinner-double-bounce {\n          width: 40px;\n          height: 40px;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          margin: auto;\n          z-index: 2000;\n      }\n\n      .double-bounce1, .double-bounce2 {\n          width: 100%;\n          height: 100%;\n          border-radius: 50%;\n          background-color: #333;\n          opacity: 0.6;\n          position: absolute;\n          top: 0;\n          left: 0;\n          -webkit-animation: sk-bounce 2.0s infinite ease-in-out;\n          animation: sk-bounce 2.0s infinite ease-in-out;\n      }\n\n      .double-bounce2 {\n          -webkit-animation-delay: -1.0s;\n          animation-delay: -1.0s;\n      }\n\n      @-webkit-keyframes sk-bounce {\n          0%, 100% { -webkit-transform: scale(0.0) }\n          50% { -webkit-transform: scale(1.0) }\n      }\n\n      @keyframes sk-bounce {\n          0%, 100% {\n            transform: scale(0.0);\n            -webkit-transform: scale(0.0);\n          } 50% {\n            transform: scale(1.0);\n            -webkit-transform: scale(1.0);\n          }\n      }\n\n      /* Pulse styles */\n      .spinner-pulse {\n          width: 40px;\n          height: 40px;\n          background-color: #333;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          margin: auto;\n          z-index: 2000;\n          border-radius: 100%;\n          -webkit-animation: sk-scaleout 1.0s infinite ease-in-out;\n          animation: sk-scaleout 1.0s infinite ease-in-out;\n      }\n\n      @-webkit-keyframes sk-scaleout {\n          0% { -webkit-transform: scale(0) }\n          100% {\n            -webkit-transform: scale(1.0);\n            opacity: 0;\n          }\n      }\n\n      @keyframes sk-scaleout {\n          0% {\n            -webkit-transform: scale(0);\n            transform: scale(0);\n          } 100% {\n            -webkit-transform: scale(1.0);\n            transform: scale(1.0);\n            opacity: 0;\n          }\n      }\n\n      /* Three Bounce styles */\n      .spinner-three-bounce {\n          width: 70px;\n          text-align: center;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          height: 20px;\n          margin: auto;\n          z-index: 2000;\n      }\n\n      .spinner-three-bounce > div {\n          width: 18px;\n          height: 18px;\n          background-color: #ffffff;\n\n          border-radius: 100%;\n          display: inline-block;\n          -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n          animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n      }\n\n      .spinner-three-bounce .bounce1 {\n          -webkit-animation-delay: -0.32s;\n          animation-delay: -0.32s;\n      }\n\n      .spinner-three-bounce .bounce2 {\n          -webkit-animation-delay: -0.16s;\n          animation-delay: -0.16s;\n      }\n\n      @-webkit-keyframes sk-bouncedelay {\n          0%, 80%, 100% { -webkit-transform: scale(0) }\n          40% { -webkit-transform: scale(1.0) }\n      }\n\n      @keyframes sk-bouncedelay {\n          0%, 80%, 100% {\n              -webkit-transform: scale(0);\n              transform: scale(0);\n          } 40% {\n              -webkit-transform: scale(1.0);\n              transform: scale(1.0);\n          }\n      }\n\n      /* Rotate Plane styles */\n      .spinner-sk-rotateplane {\n          width: 40px;\n          height: 40px;\n          background-color: #ffffff;\n          text-align: center;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          margin: auto;\n          z-index: 2000;\n          -webkit-animation: sk-rotateplane 1.2s infinite ease-in-out;\n          animation: sk-rotateplane 1.2s infinite ease-in-out;\n      }\n\n      @-webkit-keyframes sk-rotateplane {\n          0% { -webkit-transform: perspective(120px) }\n          50% { -webkit-transform: perspective(120px) rotateY(180deg) }\n          100% { -webkit-transform: perspective(120px) rotateY(180deg)  rotateX(180deg) }\n      }\n\n      @keyframes sk-rotateplane {\n          0% {\n              transform: perspective(120px) rotateX(0deg) rotateY(0deg);\n              -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg)\n          } 50% {\n              transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\n              -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg)\n          } 100% {\n              transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n              -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n          }\n      }\n\n      /* Rectangle Bounce styles*/\n      .spinner-rectangle-bounce {\n          width: 50px;\n          height: 40px;\n          font-size: 10px;\n          text-align: center;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          margin: auto;\n          z-index: 2000;\n      }\n\n      .spinner-rectangle-bounce > div {\n          background-color: #ffffff;\n          height: 100%;\n          width: 6px;\n          display: inline-block;\n          -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;\n          animation: sk-stretchdelay 1.2s infinite ease-in-out;\n      }\n\n      .spinner-rectangle-bounce .rect2 {\n          -webkit-animation-delay: -1.1s;\n          animation-delay: -1.1s;\n      }\n\n      .spinner-rectangle-bounce .rect3 {\n          -webkit-animation-delay: -1.0s;\n          animation-delay: -1.0s;\n      }\n\n      .spinner-rectangle-bounce .rect4 {\n          -webkit-animation-delay: -0.9s;\n          animation-delay: -0.9s;\n      }\n\n      .spinner-rectangle-bounce .rect5 {\n          -webkit-animation-delay: -0.8s;\n          animation-delay: -0.8s;\n      }\n\n      @-webkit-keyframes sk-stretchdelay {\n          0%, 40%, 100% { -webkit-transform: scaleY(0.4) }\n          20% { -webkit-transform: scaleY(1.0) }\n      }\n\n      @keyframes sk-stretchdelay {\n          0%, 40%, 100% {\n              transform: scaleY(0.4);\n              -webkit-transform: scaleY(0.4);\n          }  20% {\n              transform: scaleY(1.0);\n              -webkit-transform: scaleY(1.0);\n          }\n      }\n\n      /* Wandering Cubes styles */\n      .spinner-wandering-cubes {\n          width: 60px;\n          height: 58px;\n          font-size: 10px;\n          text-align: center;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          margin: auto;\n          z-index: 2000;\n      }\n\n      .cube1, .cube2 {\n          background-color: #ffffff;\n          width: 15px;\n          height: 15px;\n          position: absolute;\n          top: 0;\n          left: 0;\n          -webkit-animation: sk-cubemove 1.8s infinite ease-in-out;\n          animation: sk-cubemove 1.8s infinite ease-in-out;\n      }\n\n      .cube2 {\n          -webkit-animation-delay: -0.9s;\n          animation-delay: -0.9s;\n      }\n\n      @-webkit-keyframes sk-cubemove {\n          25% { -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5) }\n          50% { -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg) }\n          75% { -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5) }\n          100% { -webkit-transform: rotate(-360deg) }\n      }\n\n      @keyframes sk-cubemove {\n          25% {\n              transform: translateX(42px) rotate(-90deg) scale(0.5);\n              -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5);\n          } 50% {\n              transform: translateX(42px) translateY(42px) rotate(-179deg);\n              -webkit-transform: translateX(42px) translateY(42px) rotate(-179deg);\n          } 50.1% {\n              transform: translateX(42px) translateY(42px) rotate(-180deg);\n              -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg);\n          } 75% {\n              transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);\n              -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);\n          } 100% {\n              transform: rotate(-360deg);\n              -webkit-transform: rotate(-360deg);\n          }\n      }\n\n      /* Circle styles */\n      .sk-circle {\n          width: 40px;\n          height: 40px;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          margin: auto;\n          z-index: 2000;\n        }\n        .sk-circle .sk-child {\n          width: 100%;\n          height: 100%;\n          position: absolute;\n          left: 0;\n          top: 0;\n        }\n        .sk-circle .sk-child:before {\n          content: '';\n          display: block;\n          margin: 0 auto;\n          width: 15%;\n          height: 15%;\n          background-color: #333;\n          border-radius: 100%;\n          -webkit-animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;\n                  animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;\n        }\n        .sk-circle .sk-circle2 {\n          -webkit-transform: rotate(30deg);\n              -ms-transform: rotate(30deg);\n                  transform: rotate(30deg); }\n        .sk-circle .sk-circle3 {\n          -webkit-transform: rotate(60deg);\n              -ms-transform: rotate(60deg);\n                  transform: rotate(60deg); }\n        .sk-circle .sk-circle4 {\n          -webkit-transform: rotate(90deg);\n              -ms-transform: rotate(90deg);\n                  transform: rotate(90deg); }\n        .sk-circle .sk-circle5 {\n          -webkit-transform: rotate(120deg);\n              -ms-transform: rotate(120deg);\n                  transform: rotate(120deg); }\n        .sk-circle .sk-circle6 {\n          -webkit-transform: rotate(150deg);\n              -ms-transform: rotate(150deg);\n                  transform: rotate(150deg); }\n        .sk-circle .sk-circle7 {\n          -webkit-transform: rotate(180deg);\n              -ms-transform: rotate(180deg);\n                  transform: rotate(180deg); }\n        .sk-circle .sk-circle8 {\n          -webkit-transform: rotate(210deg);\n              -ms-transform: rotate(210deg);\n                  transform: rotate(210deg); }\n        .sk-circle .sk-circle9 {\n          -webkit-transform: rotate(240deg);\n              -ms-transform: rotate(240deg);\n                  transform: rotate(240deg); }\n        .sk-circle .sk-circle10 {\n          -webkit-transform: rotate(270deg);\n              -ms-transform: rotate(270deg);\n                  transform: rotate(270deg); }\n        .sk-circle .sk-circle11 {\n          -webkit-transform: rotate(300deg);\n              -ms-transform: rotate(300deg);\n                  transform: rotate(300deg); }\n        .sk-circle .sk-circle12 {\n          -webkit-transform: rotate(330deg);\n              -ms-transform: rotate(330deg);\n                  transform: rotate(330deg); }\n        .sk-circle .sk-circle2:before {\n          -webkit-animation-delay: -1.1s;\n                  animation-delay: -1.1s; }\n        .sk-circle .sk-circle3:before {\n          -webkit-animation-delay: -1s;\n                  animation-delay: -1s; }\n        .sk-circle .sk-circle4:before {\n          -webkit-animation-delay: -0.9s;\n                  animation-delay: -0.9s; }\n        .sk-circle .sk-circle5:before {\n          -webkit-animation-delay: -0.8s;\n                  animation-delay: -0.8s; }\n        .sk-circle .sk-circle6:before {\n          -webkit-animation-delay: -0.7s;\n                  animation-delay: -0.7s; }\n        .sk-circle .sk-circle7:before {\n          -webkit-animation-delay: -0.6s;\n                  animation-delay: -0.6s; }\n        .sk-circle .sk-circle8:before {\n          -webkit-animation-delay: -0.5s;\n                  animation-delay: -0.5s; }\n        .sk-circle .sk-circle9:before {\n          -webkit-animation-delay: -0.4s;\n                  animation-delay: -0.4s; }\n        .sk-circle .sk-circle10:before {\n          -webkit-animation-delay: -0.3s;\n                  animation-delay: -0.3s; }\n        .sk-circle .sk-circle11:before {\n          -webkit-animation-delay: -0.2s;\n                  animation-delay: -0.2s; }\n        .sk-circle .sk-circle12:before {\n          -webkit-animation-delay: -0.1s;\n                  animation-delay: -0.1s; }\n\n        @-webkit-keyframes sk-circleBounceDelay {\n          0%, 80%, 100% {\n            -webkit-transform: scale(0);\n                    transform: scale(0);\n          } 40% {\n            -webkit-transform: scale(1);\n                    transform: scale(1);\n          }\n        }\n\n        @keyframes sk-circleBounceDelay {\n          0%, 80%, 100% {\n            -webkit-transform: scale(0);\n                    transform: scale(0);\n          } 40% {\n            -webkit-transform: scale(1);\n                    transform: scale(1);\n          }\n        }\n\n        /* Chasing Dots styles */\n        .spinner-chasing-dots {\n          width: 40px;\n          height: 40px;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          margin: auto;\n          z-index: 2000;\n          text-align: center;\n          -webkit-animation: sk-rotate 2.0s infinite linear;\n          animation: sk-rotate 2.0s infinite linear;\n        }\n\n        .dot1, .dot2 {\n          width: 60%;\n          height: 60%;\n          display: inline-block;\n          position: absolute;\n          top: 0;\n          background-color: #333;\n          border-radius: 100%;\n          -webkit-animation: sk-bounce 2.0s infinite ease-in-out;\n          animation: sk-bounce 2.0s infinite ease-in-out;\n        }\n\n        .dot2 {\n          top: auto;\n          bottom: 0;\n          -webkit-animation-delay: -1.0s;\n          animation-delay: -1.0s;\n        }\n\n        @-webkit-keyframes sk-rotate { 100% { -webkit-transform: rotate(360deg) }}\n        @keyframes sk-rotate { 100% { transform: rotate(360deg); -webkit-transform: rotate(360deg) }}\n\n        @-webkit-keyframes sk-bounce {\n          0%, 100% { -webkit-transform: scale(0.0) }\n          50% { -webkit-transform: scale(1.0) }\n        }\n\n        @keyframes sk-bounce {\n          0%, 100% {\n            transform: scale(0.0);\n            -webkit-transform: scale(0.0);\n          } 50% {\n            transform: scale(1.0);\n            -webkit-transform: scale(1.0);\n          }\n        }\n\n      .full-screen {\n          position: fixed;\n          position: -ms-page;\n      }\n    "
                    ]
                },] },
    ];
    NgxLoadingComponent.ctorParameters = function () { return [
        { type: NgxLoadingService },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
    ]; };
    NgxLoadingComponent.propDecorators = {
        show: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        template: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return NgxLoadingComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgxLoadingModule = /** @class */ (function () {
    function NgxLoadingModule() {
    }
    /**
     * @param {?} loadingConfig
     * @return {?}
     */
    NgxLoadingModule.forRoot = /**
     * @param {?} loadingConfig
     * @return {?}
     */
    function (loadingConfig) {
        return {
            ngModule: NgxLoadingModule,
            providers: [{ provide: 'loadingConfig', useValue: loadingConfig }]
        };
    };
    NgxLoadingModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                    declarations: [NgxLoadingComponent],
                    exports: [NgxLoadingComponent]
                },] },
    ];
    return NgxLoadingModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWxvYWRpbmcuanMubWFwIiwic291cmNlcyI6WyJuZzovL25neC1sb2FkaW5nL2xpYi9uZ3gtbG9hZGluZy1jb25maWcudHMiLCJuZzovL25neC1sb2FkaW5nL2xpYi9uZ3gtbG9hZGluZy5zZXJ2aWNlLnRzIiwibmc6Ly9uZ3gtbG9hZGluZy9saWIvbmd4LWxvYWRpbmcuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtbG9hZGluZy9saWIvbmd4LWxvYWRpbmcubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgSU5neExvYWRpbmdDb25maWcge1xyXG4gICAgYmFja2Ryb3BCb3JkZXJSYWRpdXM/OiBzdHJpbmc7XHJcbiAgICBiYWNrZHJvcEJhY2tncm91bmRDb2xvdXI/OiBzdHJpbmc7XHJcbiAgICBmdWxsU2NyZWVuQmFja2Ryb3A/OiBib29sZWFuO1xyXG4gICAgYW5pbWF0aW9uVHlwZT86IHN0cmluZztcclxuICAgIHByaW1hcnlDb2xvdXI/OiBzdHJpbmc7XHJcbiAgICBzZWNvbmRhcnlDb2xvdXI/OiBzdHJpbmc7XHJcbiAgICB0ZXJ0aWFyeUNvbG91cj86IHN0cmluZztcclxuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IGJvb2xlYW4gfCB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBOZ3hMb2FkaW5nQ29uZmlnIGltcGxlbWVudHMgSU5neExvYWRpbmdDb25maWcge1xyXG4gICAgYmFja2Ryb3BCb3JkZXJSYWRpdXM/OiBzdHJpbmc7XHJcbiAgICBiYWNrZHJvcEJhY2tncm91bmRDb2xvdXI/OiBzdHJpbmc7XHJcbiAgICBmdWxsU2NyZWVuQmFja2Ryb3A/OiBib29sZWFuO1xyXG4gICAgYW5pbWF0aW9uVHlwZT86IHN0cmluZztcclxuICAgIHByaW1hcnlDb2xvdXI/OiBzdHJpbmc7XHJcbiAgICBzZWNvbmRhcnlDb2xvdXI/OiBzdHJpbmc7XHJcbiAgICB0ZXJ0aWFyeUNvbG91cj86IHN0cmluZztcclxuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IGJvb2xlYW4gfCB1bmRlZmluZWQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29uZmlnOiBJTmd4TG9hZGluZ0NvbmZpZyA9IHt9KSB7XHJcbiAgICAgICAgdGhpcy5iYWNrZHJvcEJvcmRlclJhZGl1cyA9IGNvbmZpZy5iYWNrZHJvcEJvcmRlclJhZGl1cztcclxuICAgICAgICB0aGlzLmJhY2tkcm9wQmFja2dyb3VuZENvbG91ciA9IGNvbmZpZy5iYWNrZHJvcEJhY2tncm91bmRDb2xvdXI7XHJcbiAgICAgICAgdGhpcy5mdWxsU2NyZWVuQmFja2Ryb3AgPSBjb25maWcuZnVsbFNjcmVlbkJhY2tkcm9wO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uVHlwZSA9IGNvbmZpZy5hbmltYXRpb25UeXBlO1xyXG4gICAgICAgIHRoaXMucHJpbWFyeUNvbG91ciA9IGNvbmZpZy5wcmltYXJ5Q29sb3VyO1xyXG4gICAgICAgIHRoaXMuc2Vjb25kYXJ5Q29sb3VyID0gY29uZmlnLnNlY29uZGFyeUNvbG91cjtcclxuICAgICAgICB0aGlzLnRlcnRpYXJ5Q29sb3VyID0gY29uZmlnLnRlcnRpYXJ5Q29sb3VyO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgbmd4TG9hZGluZ0FuaW1hdGlvblR5cGVzID0ge1xyXG4gICAgY2hhc2luZ0RvdHM6ICdjaGFzaW5nLWRvdHMnLFxyXG4gICAgY2lyY2xlOiAnc2stY2lyY2xlJyxcclxuICAgIGNpcmNsZVN3aXNoOiAnY2lyY2xlU3dpc2gnLFxyXG4gICAgY3ViZUdyaWQ6ICdzay1jdWJlLWdyaWQnLFxyXG4gICAgZG91YmxlQm91bmNlOiAnZG91YmxlLWJvdW5jZScsXHJcbiAgICBub25lOiAnbm9uZScsXHJcbiAgICBwdWxzZTogJ3B1bHNlJyxcclxuICAgIHJlY3RhbmdsZUJvdW5jZTogJ3JlY3RhbmdsZS1ib3VuY2UnLFxyXG4gICAgcm90YXRpbmdQbGFuZTogJ3JvdGF0aW5nLXBsYW5lJyxcclxuICAgIHRocmVlQm91bmNlOiAndGhyZWUtYm91bmNlJyxcclxuICAgIHdhbmRlcmluZ0N1YmVzOiAnd2FuZGVyaW5nLWN1YmVzJ1xyXG59O1xyXG4iLCJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElOZ3hMb2FkaW5nQ29uZmlnLCBOZ3hMb2FkaW5nQ29uZmlnIH0gZnJvbSAnLi9uZ3gtbG9hZGluZy1jb25maWcnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4TG9hZGluZ1NlcnZpY2Uge1xyXG4gIHB1YmxpYyBsb2FkaW5nQ29uZmlnOiBJTmd4TG9hZGluZ0NvbmZpZztcclxuXHJcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQEluamVjdCgnbG9hZGluZ0NvbmZpZycpIHByaXZhdGUgY29uZmlnOiBJTmd4TG9hZGluZ0NvbmZpZykge1xyXG4gICAgdGhpcy5sb2FkaW5nQ29uZmlnID0gdGhpcy5jb25maWcgfHwgbmV3IE5neExvYWRpbmdDb25maWcoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgbmd4TG9hZGluZ0FuaW1hdGlvblR5cGVzLCBJTmd4TG9hZGluZ0NvbmZpZywgTmd4TG9hZGluZ0NvbmZpZyB9IGZyb20gJy4vbmd4LWxvYWRpbmctY29uZmlnJztcclxuaW1wb3J0IHsgTmd4TG9hZGluZ1NlcnZpY2UgfSBmcm9tICcuL25neC1sb2FkaW5nLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ25neC1sb2FkaW5nJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2ICpuZ0lmPVwic2hvd1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYmFja2Ryb3BcIiBbbmdDbGFzc109XCJ7J2Z1bGwtc2NyZWVuJyA6IGNvbmZpZz8uZnVsbFNjcmVlbkJhY2tkcm9wID09IHRydWV9XCIgW25nU3R5bGVdPVwieydib3JkZXItcmFkaXVzJzogY29uZmlnPy5iYWNrZHJvcEJvcmRlclJhZGl1cywgJ2JhY2tncm91bmQtY29sb3InOiBjb25maWc/LmJhY2tkcm9wQmFja2dyb3VuZENvbG91cn1cIj48L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgW25nU3dpdGNoXT1cImNvbmZpZz8uYW5pbWF0aW9uVHlwZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzcGlubmVyLWNpcmNsZVwiICpuZ1N3aXRjaENhc2U9XCJuZ3hMb2FkaW5nQW5pbWF0aW9uVHlwZXMuY2lyY2xlXCIgW25nQ2xhc3NdPVwieydmdWxsLXNjcmVlbicgOiBjb25maWc/LmZ1bGxTY3JlZW5CYWNrZHJvcCA9PSB0cnVlfVwiXHJcbiAgICAgICAgICBbbmdTdHlsZV09XCJ7J2JvcmRlci10b3AtY29sb3InOiBjb25maWc/LnNlY29uZGFyeUNvbG91ciwgJ2JvcmRlci1yaWdodC1jb2xvcic6IGNvbmZpZz8uc2Vjb25kYXJ5Q29sb3VyLCAnYm9yZGVyLWJvdHRvbS1jb2xvcic6IGNvbmZpZz8uc2Vjb25kYXJ5Q29sb3VyLCAnYm9yZGVyLWxlZnQtY29sb3InOiBjb25maWc/LnByaW1hcnlDb2xvdXJ9XCI+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cIm5neExvYWRpbmdBbmltYXRpb25UeXBlcy5jdWJlR3JpZFwiIGNsYXNzPVwic2stY3ViZS1ncmlkXCIgW25nQ2xhc3NdPVwieydmdWxsLXNjcmVlbicgOiBjb25maWc/LmZ1bGxTY3JlZW5CYWNrZHJvcCA9PSB0cnVlfVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNrLWN1YmUgc2stY3ViZTFcIiBbbmdTdHlsZV09XCJ7J2JhY2tncm91bmQtY29sb3InOiBjb25maWc/LnByaW1hcnlDb2xvdXJ9XCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2stY3ViZSBzay1jdWJlMlwiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGNvbmZpZz8ucHJpbWFyeUNvbG91cn1cIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzay1jdWJlIHNrLWN1YmUzXCIgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJzogY29uZmlnPy5wcmltYXJ5Q29sb3VyfVwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNrLWN1YmUgc2stY3ViZTRcIiBbbmdTdHlsZV09XCJ7J2JhY2tncm91bmQtY29sb3InOiBjb25maWc/LnByaW1hcnlDb2xvdXJ9XCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2stY3ViZSBzay1jdWJlNVwiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGNvbmZpZz8ucHJpbWFyeUNvbG91cn1cIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzay1jdWJlIHNrLWN1YmU2XCIgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJzogY29uZmlnPy5wcmltYXJ5Q29sb3VyfVwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNrLWN1YmUgc2stY3ViZTdcIiBbbmdTdHlsZV09XCJ7J2JhY2tncm91bmQtY29sb3InOiBjb25maWc/LnByaW1hcnlDb2xvdXJ9XCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2stY3ViZSBzay1jdWJlOFwiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGNvbmZpZz8ucHJpbWFyeUNvbG91cn1cIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzay1jdWJlIHNrLWN1YmU5XCIgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJzogY29uZmlnPy5wcmltYXJ5Q29sb3VyfVwiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic3Bpbm5lci1zay1yb3RhdGVwbGFuZVwiICpuZ1N3aXRjaENhc2U9XCJuZ3hMb2FkaW5nQW5pbWF0aW9uVHlwZXMucm90YXRpbmdQbGFuZVwiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGNvbmZpZz8ucHJpbWFyeUNvbG91cn1cIiBbbmdDbGFzc109XCJ7J2Z1bGwtc2NyZWVuJyA6IGNvbmZpZz8uZnVsbFNjcmVlbkJhY2tkcm9wID09IHRydWV9XCI+PC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzcGlubmVyLXJlY3RhbmdsZS1ib3VuY2VcIiAqbmdTd2l0Y2hDYXNlPVwibmd4TG9hZGluZ0FuaW1hdGlvblR5cGVzLnJlY3RhbmdsZUJvdW5jZVwiIFtuZ0NsYXNzXT1cInsnZnVsbC1zY3JlZW4nIDogY29uZmlnPy5mdWxsU2NyZWVuQmFja2Ryb3AgPT0gdHJ1ZX1cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZWN0MVwiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGNvbmZpZz8ucHJpbWFyeUNvbG91cn1cIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZWN0MlwiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGNvbmZpZz8ucHJpbWFyeUNvbG91cn1cIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZWN0M1wiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGNvbmZpZz8ucHJpbWFyeUNvbG91cn1cIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZWN0NFwiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGNvbmZpZz8ucHJpbWFyeUNvbG91cn1cIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZWN0NVwiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGNvbmZpZz8ucHJpbWFyeUNvbG91cn1cIj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInNwaW5uZXItd2FuZGVyaW5nLWN1YmVzXCIgKm5nU3dpdGNoQ2FzZT1cIm5neExvYWRpbmdBbmltYXRpb25UeXBlcy53YW5kZXJpbmdDdWJlc1wiIFtuZ0NsYXNzXT1cInsnZnVsbC1zY3JlZW4nIDogY29uZmlnPy5mdWxsU2NyZWVuQmFja2Ryb3AgPT0gdHJ1ZX1cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjdWJlMVwiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGNvbmZpZz8ucHJpbWFyeUNvbG91cn1cIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjdWJlMlwiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGNvbmZpZz8uc2Vjb25kYXJ5Q29sb3VyfVwiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic3Bpbm5lci1kb3VibGUtYm91bmNlXCIgKm5nU3dpdGNoQ2FzZT1cIm5neExvYWRpbmdBbmltYXRpb25UeXBlcy5kb3VibGVCb3VuY2VcIiBbbmdDbGFzc109XCJ7J2Z1bGwtc2NyZWVuJyA6IGNvbmZpZz8uZnVsbFNjcmVlbkJhY2tkcm9wID09IHRydWV9XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZG91YmxlLWJvdW5jZTFcIiBbbmdTdHlsZV09XCJ7J2JhY2tncm91bmQtY29sb3InOiBjb25maWc/LnByaW1hcnlDb2xvdXJ9XCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZG91YmxlLWJvdW5jZTJcIiBbbmdTdHlsZV09XCJ7J2JhY2tncm91bmQtY29sb3InOiBjb25maWc/LnNlY29uZGFyeUNvbG91cn1cIj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInNwaW5uZXItcHVsc2VcIiAqbmdTd2l0Y2hDYXNlPVwibmd4TG9hZGluZ0FuaW1hdGlvblR5cGVzLnB1bHNlXCIgW25nQ2xhc3NdPVwieydmdWxsLXNjcmVlbicgOiBjb25maWc/LmZ1bGxTY3JlZW5CYWNrZHJvcCA9PSB0cnVlfVwiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGNvbmZpZz8ucHJpbWFyeUNvbG91cn1cIj48L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInNwaW5uZXItY2hhc2luZy1kb3RzXCIgKm5nU3dpdGNoQ2FzZT1cIm5neExvYWRpbmdBbmltYXRpb25UeXBlcy5jaGFzaW5nRG90c1wiIFtuZ0NsYXNzXT1cInsnZnVsbC1zY3JlZW4nIDogY29uZmlnPy5mdWxsU2NyZWVuQmFja2Ryb3AgPT0gdHJ1ZX1cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkb3QxXCIgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJzogY29uZmlnPy5wcmltYXJ5Q29sb3VyfVwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImRvdDJcIiBbbmdTdHlsZV09XCJ7J2JhY2tncm91bmQtY29sb3InOiBjb25maWc/LnNlY29uZGFyeUNvbG91cn1cIj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInNwaW5uZXItY2lyY2xlLXN3aXNoXCIgKm5nU3dpdGNoQ2FzZT1cIm5neExvYWRpbmdBbmltYXRpb25UeXBlcy5jaXJjbGVTd2lzaFwiIFtuZ0NsYXNzXT1cInsnZnVsbC1zY3JlZW4nIDogY29uZmlnPy5mdWxsU2NyZWVuQmFja2Ryb3AgPT0gdHJ1ZX1cIiBbbmdTdHlsZV09XCJ7J2NvbG9yJzogY29uZmlnPy5wcmltYXJ5Q29sb3VyfVwiPjwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2ICpuZ1N3aXRjaENhc2U9XCJuZ3hMb2FkaW5nQW5pbWF0aW9uVHlwZXMubm9uZVwiIFtuZ0NsYXNzXT1cInsnZnVsbC1zY3JlZW4nIDogY29uZmlnPy5mdWxsU2NyZWVuQmFja2Ryb3AgPT0gdHJ1ZX1cIj48L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiAqbmdTd2l0Y2hEZWZhdWx0IGNsYXNzPVwic3Bpbm5lci10aHJlZS1ib3VuY2VcIiBbbmdDbGFzc109XCJ7J2Z1bGwtc2NyZWVuJyA6IGNvbmZpZz8uZnVsbFNjcmVlbkJhY2tkcm9wID09IHRydWV9XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm91bmNlMVwiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGNvbmZpZz8ucHJpbWFyeUNvbG91cn1cIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3VuY2UyXCIgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJzogY29uZmlnPy5zZWNvbmRhcnlDb2xvdXJ9XCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm91bmNlM1wiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGNvbmZpZz8udGVydGlhcnlDb2xvdXJ9XCI+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInRlbXBsYXRlXCI+XHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0ZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIGAsXHJcbiAgICBzdHlsZXM6IFtcclxuICAgICAgICBgXHJcbiAgICAgIC5iYWNrZHJvcCB7XHJcbiAgICAgICAgei1pbmRleDogMTk5OTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLyogU3Bpbm5lciBDaXJjbGUgc3R5bGVzICovXHJcbiAgICAgIC5zcGlubmVyLWNpcmNsZSxcclxuICAgICAgLnNwaW5uZXItY2lyY2xlOmFmdGVyIHtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgIHdpZHRoOiAxMGVtO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMGVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc3Bpbm5lci1jaXJjbGUge1xyXG4gICAgICAgICAgZm9udC1zaXplOiA2cHg7XHJcbiAgICAgICAgICBib3JkZXItdG9wOiAxLjFlbSBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgICAgICAgICBib3JkZXItcmlnaHQ6IDEuMWVtIHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b206IDEuMWVtIHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxuICAgICAgICAgIGJvcmRlci1sZWZ0OiAxLjFlbSBzb2xpZCAjZmZmZmZmO1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgei1pbmRleDogMjAwMDtcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBsb2FkOCAxLjFzIGluZmluaXRlIGxpbmVhcjtcclxuICAgICAgICAgIGFuaW1hdGlvbjogbG9hZDggMS4xcyBpbmZpbml0ZSBsaW5lYXI7XHJcbiAgICAgIH1cclxuICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIGxvYWQ4IHtcclxuICAgICAgICAgIDAlIHtcclxuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgQGtleWZyYW1lcyBsb2FkOCB7XHJcbiAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvKiBDaXJjbGUgU3dpc2ggc3R5bGVzICovXHJcbiAgICAgIC5zcGlubmVyLWNpcmNsZS1zd2lzaCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDYwcHg7XHJcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgd2lkdGg6IDFlbTtcclxuICAgICAgICAgIGhlaWdodDogMWVtO1xyXG4gICAgICAgICAgei1pbmRleDogMjAwMDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgIHotaW5kZXg6IDIwMDA7XHJcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogbG9hZDYgMS43cyBpbmZpbml0ZSBlYXNlLCByb3VuZCAxLjdzIGluZmluaXRlIGVhc2U7XHJcbiAgICAgICAgICBhbmltYXRpb246IGxvYWQ2IDEuN3MgaW5maW5pdGUgZWFzZSwgcm91bmQgMS43cyBpbmZpbml0ZSBlYXNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgbG9hZDYge1xyXG4gICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIC0wLjgzZW0gMCAtMC40ZW0sIDAgLTAuODNlbSAwIC0wLjQyZW0sIDAgLTAuODNlbSAwIC0wLjQ0ZW0sIDAgLTAuODNlbSAwIC0wLjQ2ZW0sIDAgLTAuODNlbSAwIC0wLjQ3N2VtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgNSUsXHJcbiAgICAgICAgICA5NSUge1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIC0wLjgzZW0gMCAtMC40ZW0sIDAgLTAuODNlbSAwIC0wLjQyZW0sIDAgLTAuODNlbSAwIC0wLjQ0ZW0sIDAgLTAuODNlbSAwIC0wLjQ2ZW0sIDAgLTAuODNlbSAwIC0wLjQ3N2VtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgMTAlLFxyXG4gICAgICAgICAgNTklIHtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAtMC44M2VtIDAgLTAuNGVtLCAtMC4wODdlbSAtMC44MjVlbSAwIC0wLjQyZW0sIC0wLjE3M2VtIC0wLjgxMmVtIDAgLTAuNDRlbSwgLTAuMjU2ZW0gLTAuNzg5ZW0gMCAtMC40NmVtLCAtMC4yOTdlbSAtMC43NzVlbSAwIC0wLjQ3N2VtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgMjAlIHtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAtMC44M2VtIDAgLTAuNGVtLCAtMC4zMzhlbSAtMC43NThlbSAwIC0wLjQyZW0sIC0wLjU1NWVtIC0wLjYxN2VtIDAgLTAuNDRlbSwgLTAuNjcxZW0gLTAuNDg4ZW0gMCAtMC40NmVtLCAtMC43NDllbSAtMC4zNGVtIDAgLTAuNDc3ZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAzOCUge1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIC0wLjgzZW0gMCAtMC40ZW0sIC0wLjM3N2VtIC0wLjc0ZW0gMCAtMC40MmVtLCAtMC42NDVlbSAtMC41MjJlbSAwIC0wLjQ0ZW0sIC0wLjc3NWVtIC0wLjI5N2VtIDAgLTAuNDZlbSwgLTAuODJlbSAtMC4wOWVtIDAgLTAuNDc3ZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAtMC44M2VtIDAgLTAuNGVtLCAwIC0wLjgzZW0gMCAtMC40MmVtLCAwIC0wLjgzZW0gMCAtMC40NGVtLCAwIC0wLjgzZW0gMCAtMC40NmVtLCAwIC0wLjgzZW0gMCAtMC40NzdlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgQGtleWZyYW1lcyBsb2FkNiB7XHJcbiAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgLTAuODNlbSAwIC0wLjRlbSwgMCAtMC44M2VtIDAgLTAuNDJlbSwgMCAtMC44M2VtIDAgLTAuNDRlbSwgMCAtMC44M2VtIDAgLTAuNDZlbSwgMCAtMC44M2VtIDAgLTAuNDc3ZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICA1JSxcclxuICAgICAgICAgIDk1JSB7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgLTAuODNlbSAwIC0wLjRlbSwgMCAtMC44M2VtIDAgLTAuNDJlbSwgMCAtMC44M2VtIDAgLTAuNDRlbSwgMCAtMC44M2VtIDAgLTAuNDZlbSwgMCAtMC44M2VtIDAgLTAuNDc3ZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAxMCUsXHJcbiAgICAgICAgICA1OSUge1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIC0wLjgzZW0gMCAtMC40ZW0sIC0wLjA4N2VtIC0wLjgyNWVtIDAgLTAuNDJlbSwgLTAuMTczZW0gLTAuODEyZW0gMCAtMC40NGVtLCAtMC4yNTZlbSAtMC43ODllbSAwIC0wLjQ2ZW0sIC0wLjI5N2VtIC0wLjc3NWVtIDAgLTAuNDc3ZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAyMCUge1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIC0wLjgzZW0gMCAtMC40ZW0sIC0wLjMzOGVtIC0wLjc1OGVtIDAgLTAuNDJlbSwgLTAuNTU1ZW0gLTAuNjE3ZW0gMCAtMC40NGVtLCAtMC42NzFlbSAtMC40ODhlbSAwIC0wLjQ2ZW0sIC0wLjc0OWVtIC0wLjM0ZW0gMCAtMC40NzdlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDM4JSB7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgLTAuODNlbSAwIC0wLjRlbSwgLTAuMzc3ZW0gLTAuNzRlbSAwIC0wLjQyZW0sIC0wLjY0NWVtIC0wLjUyMmVtIDAgLTAuNDRlbSwgLTAuNzc1ZW0gLTAuMjk3ZW0gMCAtMC40NmVtLCAtMC44MmVtIC0wLjA5ZW0gMCAtMC40NzdlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIC0wLjgzZW0gMCAtMC40ZW0sIDAgLTAuODNlbSAwIC0wLjQyZW0sIDAgLTAuODNlbSAwIC0wLjQ0ZW0sIDAgLTAuODNlbSAwIC0wLjQ2ZW0sIDAgLTAuODNlbSAwIC0wLjQ3N2VtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgcm91bmQge1xyXG4gICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBrZXlmcmFtZXMgcm91bmQge1xyXG4gICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgLyogQ3ViZSBHcmlkIHN0eWxlcyAqL1xyXG4gICAgICAuc2stY3ViZS1ncmlkIHtcclxuICAgICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG5cclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgIHotaW5kZXg6IDIwMDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zay1jdWJlLWdyaWQgLnNrLWN1YmUge1xyXG4gICAgICAgICAgd2lkdGg6IDMzJTtcclxuICAgICAgICAgIGhlaWdodDogMzMlO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHNrLWN1YmVHcmlkU2NhbGVEZWxheSAxLjNzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgYW5pbWF0aW9uOiBzay1jdWJlR3JpZFNjYWxlRGVsYXkgMS4zcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnNrLWN1YmUtZ3JpZCAuc2stY3ViZTEge1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuMnM7XHJcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDAuMnM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zay1jdWJlLWdyaWQgLnNrLWN1YmUyIHtcclxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjNzO1xyXG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjNzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc2stY3ViZS1ncmlkIC5zay1jdWJlMyB7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC40cztcclxuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC40cztcclxuICAgICAgfVxyXG5cclxuICAgICAgLnNrLWN1YmUtZ3JpZCAuc2stY3ViZTQge1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuMXM7XHJcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDAuMXM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zay1jdWJlLWdyaWQgLnNrLWN1YmU1IHtcclxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjJzO1xyXG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjJzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc2stY3ViZS1ncmlkIC5zay1jdWJlNiB7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC4zcztcclxuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC4zcztcclxuICAgICAgfVxyXG5cclxuICAgICAgLnNrLWN1YmUtZ3JpZCAuc2stY3ViZTcge1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDBzO1xyXG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwcztcclxuICAgICAgfVxyXG5cclxuICAgICAgLnNrLWN1YmUtZ3JpZCAuc2stY3ViZTgge1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuMXM7XHJcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDAuMXM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zay1jdWJlLWdyaWQgLnNrLWN1YmU5IHtcclxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjJzO1xyXG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjJzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBALXdlYmtpdC1rZXlmcmFtZXMgc2stY3ViZUdyaWRTY2FsZURlbGF5IHtcclxuICAgICAgICAgIDAlLCA3MCUsIDEwMCUge1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNEKDEsIDEsIDEpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUzRCgxLCAxLCAxKTtcclxuICAgICAgICAgIH0gMzUlIHtcclxuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzRCgwLCAwLCAxKTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlM0QoMCwgMCwgMSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBrZXlmcmFtZXMgc2stY3ViZUdyaWRTY2FsZURlbGF5IHtcclxuICAgICAgICAgIDAlLCA3MCUsIDEwMCUge1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNEKDEsIDEsIDEpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUzRCgxLCAxLCAxKTtcclxuICAgICAgICAgIH0gMzUlIHtcclxuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzRCgwLCAwLCAxKTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlM0QoMCwgMCwgMSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qIERvdWJsZSBCb3VuY2Ugc3R5bGVzICovXHJcbiAgICAgIC5zcGlubmVyLWRvdWJsZS1ib3VuY2Uge1xyXG4gICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICB6LWluZGV4OiAyMDAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZG91YmxlLWJvdW5jZTEsIC5kb3VibGUtYm91bmNlMiB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHNrLWJvdW5jZSAyLjBzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgYW5pbWF0aW9uOiBzay1ib3VuY2UgMi4wcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmRvdWJsZS1ib3VuY2UyIHtcclxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMS4wcztcclxuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTEuMHM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBzay1ib3VuY2Uge1xyXG4gICAgICAgICAgMCUsIDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4wKSB9XHJcbiAgICAgICAgICA1MCUgeyAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wKSB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBrZXlmcmFtZXMgc2stYm91bmNlIHtcclxuICAgICAgICAgIDAlLCAxMDAlIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjApO1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4wKTtcclxuICAgICAgICAgIH0gNTAlIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjApO1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wKTtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLyogUHVsc2Ugc3R5bGVzICovXHJcbiAgICAgIC5zcGlubmVyLXB1bHNlIHtcclxuICAgICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgIHotaW5kZXg6IDIwMDA7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHNrLXNjYWxlb3V0IDEuMHMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICBhbmltYXRpb246IHNrLXNjYWxlb3V0IDEuMHMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBzay1zY2FsZW91dCB7XHJcbiAgICAgICAgICAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKSB9XHJcbiAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMCk7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBrZXlmcmFtZXMgc2stc2NhbGVvdXQge1xyXG4gICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgICAgICB9IDEwMCUge1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjApO1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvKiBUaHJlZSBCb3VuY2Ugc3R5bGVzICovXHJcbiAgICAgIC5zcGlubmVyLXRocmVlLWJvdW5jZSB7XHJcbiAgICAgICAgICB3aWR0aDogNzBweDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgIHotaW5kZXg6IDIwMDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zcGlubmVyLXRocmVlLWJvdW5jZSA+IGRpdiB7XHJcbiAgICAgICAgICB3aWR0aDogMThweDtcclxuICAgICAgICAgIGhlaWdodDogMThweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcblxyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzay1ib3VuY2VkZWxheSAxLjRzIGluZmluaXRlIGVhc2UtaW4tb3V0IGJvdGg7XHJcbiAgICAgICAgICBhbmltYXRpb246IHNrLWJvdW5jZWRlbGF5IDEuNHMgaW5maW5pdGUgZWFzZS1pbi1vdXQgYm90aDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnNwaW5uZXItdGhyZWUtYm91bmNlIC5ib3VuY2UxIHtcclxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4zMnM7XHJcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjMycztcclxuICAgICAgfVxyXG5cclxuICAgICAgLnNwaW5uZXItdGhyZWUtYm91bmNlIC5ib3VuY2UyIHtcclxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4xNnM7XHJcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjE2cztcclxuICAgICAgfVxyXG5cclxuICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIHNrLWJvdW5jZWRlbGF5IHtcclxuICAgICAgICAgIDAlLCA4MCUsIDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCkgfVxyXG4gICAgICAgICAgNDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMCkgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBAa2V5ZnJhbWVzIHNrLWJvdW5jZWRlbGF5IHtcclxuICAgICAgICAgIDAlLCA4MCUsIDEwMCUge1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgICAgICAgfSA0MCUge1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjApO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wKTtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLyogUm90YXRlIFBsYW5lIHN0eWxlcyAqL1xyXG4gICAgICAuc3Bpbm5lci1zay1yb3RhdGVwbGFuZSB7XHJcbiAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICB6LWluZGV4OiAyMDAwO1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHNrLXJvdGF0ZXBsYW5lIDEuMnMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICBhbmltYXRpb246IHNrLXJvdGF0ZXBsYW5lIDEuMnMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBzay1yb3RhdGVwbGFuZSB7XHJcbiAgICAgICAgICAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMjBweCkgfVxyXG4gICAgICAgICAgNTAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEyMHB4KSByb3RhdGVZKDE4MGRlZykgfVxyXG4gICAgICAgICAgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMjBweCkgcm90YXRlWSgxODBkZWcpICByb3RhdGVYKDE4MGRlZykgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBAa2V5ZnJhbWVzIHNrLXJvdGF0ZXBsYW5lIHtcclxuICAgICAgICAgIDAlIHtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEyMHB4KSByb3RhdGVYKDBkZWcpIHJvdGF0ZVkoMGRlZyk7XHJcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEyMHB4KSByb3RhdGVYKDBkZWcpIHJvdGF0ZVkoMGRlZylcclxuICAgICAgICAgIH0gNTAlIHtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEyMHB4KSByb3RhdGVYKC0xODAuMWRlZykgcm90YXRlWSgwZGVnKTtcclxuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTIwcHgpIHJvdGF0ZVgoLTE4MC4xZGVnKSByb3RhdGVZKDBkZWcpXHJcbiAgICAgICAgICB9IDEwMCUge1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTIwcHgpIHJvdGF0ZVgoLTE4MGRlZykgcm90YXRlWSgtMTc5LjlkZWcpO1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMjBweCkgcm90YXRlWCgtMTgwZGVnKSByb3RhdGVZKC0xNzkuOWRlZyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qIFJlY3RhbmdsZSBCb3VuY2Ugc3R5bGVzKi9cclxuICAgICAgLnNwaW5uZXItcmVjdGFuZ2xlLWJvdW5jZSB7XHJcbiAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgIHotaW5kZXg6IDIwMDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zcGlubmVyLXJlY3RhbmdsZS1ib3VuY2UgPiBkaXYge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIHdpZHRoOiA2cHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogc2stc3RyZXRjaGRlbGF5IDEuMnMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICBhbmltYXRpb246IHNrLXN0cmV0Y2hkZWxheSAxLjJzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc3Bpbm5lci1yZWN0YW5nbGUtYm91bmNlIC5yZWN0MiB7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTEuMXM7XHJcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0xLjFzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc3Bpbm5lci1yZWN0YW5nbGUtYm91bmNlIC5yZWN0MyB7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTEuMHM7XHJcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0xLjBzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc3Bpbm5lci1yZWN0YW5nbGUtYm91bmNlIC5yZWN0NCB7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuOXM7XHJcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjlzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc3Bpbm5lci1yZWN0YW5nbGUtYm91bmNlIC5yZWN0NSB7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuOHM7XHJcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjhzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBALXdlYmtpdC1rZXlmcmFtZXMgc2stc3RyZXRjaGRlbGF5IHtcclxuICAgICAgICAgIDAlLCA0MCUsIDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKDAuNCkgfVxyXG4gICAgICAgICAgMjAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgxLjApIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgQGtleWZyYW1lcyBzay1zdHJldGNoZGVsYXkge1xyXG4gICAgICAgICAgMCUsIDQwJSwgMTAwJSB7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMC40KTtcclxuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKDAuNCk7XHJcbiAgICAgICAgICB9ICAyMCUge1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDEuMCk7XHJcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgxLjApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvKiBXYW5kZXJpbmcgQ3ViZXMgc3R5bGVzICovXHJcbiAgICAgIC5zcGlubmVyLXdhbmRlcmluZy1jdWJlcyB7XHJcbiAgICAgICAgICB3aWR0aDogNjBweDtcclxuICAgICAgICAgIGhlaWdodDogNThweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgIHotaW5kZXg6IDIwMDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jdWJlMSwgLmN1YmUyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICB3aWR0aDogMTVweDtcclxuICAgICAgICAgIGhlaWdodDogMTVweDtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogc2stY3ViZW1vdmUgMS44cyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxuICAgICAgICAgIGFuaW1hdGlvbjogc2stY3ViZW1vdmUgMS44cyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmN1YmUyIHtcclxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC45cztcclxuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuOXM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBzay1jdWJlbW92ZSB7XHJcbiAgICAgICAgICAyNSUgeyAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg0MnB4KSByb3RhdGUoLTkwZGVnKSBzY2FsZSgwLjUpIH1cclxuICAgICAgICAgIDUwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDQycHgpIHRyYW5zbGF0ZVkoNDJweCkgcm90YXRlKC0xODBkZWcpIH1cclxuICAgICAgICAgIDc1JSB7IC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCkgdHJhbnNsYXRlWSg0MnB4KSByb3RhdGUoLTI3MGRlZykgc2NhbGUoMC41KSB9XHJcbiAgICAgICAgICAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMzYwZGVnKSB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBrZXlmcmFtZXMgc2stY3ViZW1vdmUge1xyXG4gICAgICAgICAgMjUlIHtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNDJweCkgcm90YXRlKC05MGRlZykgc2NhbGUoMC41KTtcclxuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg0MnB4KSByb3RhdGUoLTkwZGVnKSBzY2FsZSgwLjUpO1xyXG4gICAgICAgICAgfSA1MCUge1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg0MnB4KSB0cmFuc2xhdGVZKDQycHgpIHJvdGF0ZSgtMTc5ZGVnKTtcclxuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg0MnB4KSB0cmFuc2xhdGVZKDQycHgpIHJvdGF0ZSgtMTc5ZGVnKTtcclxuICAgICAgICAgIH0gNTAuMSUge1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg0MnB4KSB0cmFuc2xhdGVZKDQycHgpIHJvdGF0ZSgtMTgwZGVnKTtcclxuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg0MnB4KSB0cmFuc2xhdGVZKDQycHgpIHJvdGF0ZSgtMTgwZGVnKTtcclxuICAgICAgICAgIH0gNzUlIHtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KSB0cmFuc2xhdGVZKDQycHgpIHJvdGF0ZSgtMjcwZGVnKSBzY2FsZSgwLjUpO1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCkgdHJhbnNsYXRlWSg0MnB4KSByb3RhdGUoLTI3MGRlZykgc2NhbGUoMC41KTtcclxuICAgICAgICAgIH0gMTAwJSB7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTM2MGRlZyk7XHJcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMzYwZGVnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLyogQ2lyY2xlIHN0eWxlcyAqL1xyXG4gICAgICAuc2stY2lyY2xlIHtcclxuICAgICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgei1pbmRleDogMjAwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNrLWNpcmNsZSAuc2stY2hpbGQge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2stY2lyY2xlIC5zay1jaGlsZDpiZWZvcmUge1xyXG4gICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgd2lkdGg6IDE1JTtcclxuICAgICAgICAgIGhlaWdodDogMTUlO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogc2stY2lyY2xlQm91bmNlRGVsYXkgMS4ycyBpbmZpbml0ZSBlYXNlLWluLW91dCBib3RoO1xyXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb246IHNrLWNpcmNsZUJvdW5jZURlbGF5IDEuMnMgaW5maW5pdGUgZWFzZS1pbi1vdXQgYm90aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNrLWNpcmNsZSAuc2stY2lyY2xlMiB7XHJcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDMwZGVnKTtcclxuICAgICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzBkZWcpO1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZyk7IH1cclxuICAgICAgICAuc2stY2lyY2xlIC5zay1jaXJjbGUzIHtcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNjBkZWcpO1xyXG4gICAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg2MGRlZyk7XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDYwZGVnKTsgfVxyXG4gICAgICAgIC5zay1jaXJjbGUgLnNrLWNpcmNsZTQge1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpOyB9XHJcbiAgICAgICAgLnNrLWNpcmNsZSAuc2stY2lyY2xlNSB7XHJcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDEyMGRlZyk7XHJcbiAgICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDEyMGRlZyk7XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDEyMGRlZyk7IH1cclxuICAgICAgICAuc2stY2lyY2xlIC5zay1jaXJjbGU2IHtcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTUwZGVnKTtcclxuICAgICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTUwZGVnKTtcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTUwZGVnKTsgfVxyXG4gICAgICAgIC5zay1jaXJjbGUgLnNrLWNpcmNsZTcge1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gICAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpOyB9XHJcbiAgICAgICAgLnNrLWNpcmNsZSAuc2stY2lyY2xlOCB7XHJcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDIxMGRlZyk7XHJcbiAgICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDIxMGRlZyk7XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDIxMGRlZyk7IH1cclxuICAgICAgICAuc2stY2lyY2xlIC5zay1jaXJjbGU5IHtcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjQwZGVnKTtcclxuICAgICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjQwZGVnKTtcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMjQwZGVnKTsgfVxyXG4gICAgICAgIC5zay1jaXJjbGUgLnNrLWNpcmNsZTEwIHtcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcclxuICAgICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTsgfVxyXG4gICAgICAgIC5zay1jaXJjbGUgLnNrLWNpcmNsZTExIHtcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzAwZGVnKTtcclxuICAgICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzAwZGVnKTtcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzAwZGVnKTsgfVxyXG4gICAgICAgIC5zay1jaXJjbGUgLnNrLWNpcmNsZTEyIHtcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzMwZGVnKTtcclxuICAgICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzMwZGVnKTtcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzMwZGVnKTsgfVxyXG4gICAgICAgIC5zay1jaXJjbGUgLnNrLWNpcmNsZTI6YmVmb3JlIHtcclxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMS4xcztcclxuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMS4xczsgfVxyXG4gICAgICAgIC5zay1jaXJjbGUgLnNrLWNpcmNsZTM6YmVmb3JlIHtcclxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMXM7XHJcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTFzOyB9XHJcbiAgICAgICAgLnNrLWNpcmNsZSAuc2stY2lyY2xlNDpiZWZvcmUge1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjlzO1xyXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjlzOyB9XHJcbiAgICAgICAgLnNrLWNpcmNsZSAuc2stY2lyY2xlNTpiZWZvcmUge1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjhzO1xyXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjhzOyB9XHJcbiAgICAgICAgLnNrLWNpcmNsZSAuc2stY2lyY2xlNjpiZWZvcmUge1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjdzO1xyXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjdzOyB9XHJcbiAgICAgICAgLnNrLWNpcmNsZSAuc2stY2lyY2xlNzpiZWZvcmUge1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjZzO1xyXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjZzOyB9XHJcbiAgICAgICAgLnNrLWNpcmNsZSAuc2stY2lyY2xlODpiZWZvcmUge1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjVzO1xyXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjVzOyB9XHJcbiAgICAgICAgLnNrLWNpcmNsZSAuc2stY2lyY2xlOTpiZWZvcmUge1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjRzO1xyXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjRzOyB9XHJcbiAgICAgICAgLnNrLWNpcmNsZSAuc2stY2lyY2xlMTA6YmVmb3JlIHtcclxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4zcztcclxuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4zczsgfVxyXG4gICAgICAgIC5zay1jaXJjbGUgLnNrLWNpcmNsZTExOmJlZm9yZSB7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuMnM7XHJcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMnM7IH1cclxuICAgICAgICAuc2stY2lyY2xlIC5zay1jaXJjbGUxMjpiZWZvcmUge1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjFzO1xyXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjFzOyB9XHJcblxyXG4gICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBzay1jaXJjbGVCb3VuY2VEZWxheSB7XHJcbiAgICAgICAgICAwJSwgODAlLCAxMDAlIHtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgICAgICB9IDQwJSB7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQGtleWZyYW1lcyBzay1jaXJjbGVCb3VuY2VEZWxheSB7XHJcbiAgICAgICAgICAwJSwgODAlLCAxMDAlIHtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgICAgICB9IDQwJSB7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyogQ2hhc2luZyBEb3RzIHN0eWxlcyAqL1xyXG4gICAgICAgIC5zcGlubmVyLWNoYXNpbmctZG90cyB7XHJcbiAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgIHotaW5kZXg6IDIwMDA7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogc2stcm90YXRlIDIuMHMgaW5maW5pdGUgbGluZWFyO1xyXG4gICAgICAgICAgYW5pbWF0aW9uOiBzay1yb3RhdGUgMi4wcyBpbmZpbml0ZSBsaW5lYXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZG90MSwgLmRvdDIge1xyXG4gICAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICAgIGhlaWdodDogNjAlO1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogc2stYm91bmNlIDIuMHMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICBhbmltYXRpb246IHNrLWJvdW5jZSAyLjBzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmRvdDIge1xyXG4gICAgICAgICAgdG9wOiBhdXRvO1xyXG4gICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0xLjBzO1xyXG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMS4wcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBzay1yb3RhdGUgeyAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpIH19XHJcbiAgICAgICAgQGtleWZyYW1lcyBzay1yb3RhdGUgeyAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpIH19XHJcblxyXG4gICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBzay1ib3VuY2Uge1xyXG4gICAgICAgICAgMCUsIDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4wKSB9XHJcbiAgICAgICAgICA1MCUgeyAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wKSB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAa2V5ZnJhbWVzIHNrLWJvdW5jZSB7XHJcbiAgICAgICAgICAwJSwgMTAwJSB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC4wKTtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuMCk7XHJcbiAgICAgICAgICB9IDUwJSB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wKTtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgLmZ1bGwtc2NyZWVuIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgIHBvc2l0aW9uOiAtbXMtcGFnZTtcclxuICAgICAgfVxyXG4gICAgYFxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4TG9hZGluZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBASW5wdXQoKSBzaG93OiBib29sZWFuO1xyXG4gICAgQElucHV0KCkgY29uZmlnOiBJTmd4TG9hZGluZ0NvbmZpZyA9IG5ldyBOZ3hMb2FkaW5nQ29uZmlnKCk7XHJcbiAgICBASW5wdXQoKSB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcclxuICAgIHByaXZhdGUgZGVmYXVsdENvbmZpZzogSU5neExvYWRpbmdDb25maWcgPSB7XHJcbiAgICAgICAgYW5pbWF0aW9uVHlwZTogbmd4TG9hZGluZ0FuaW1hdGlvblR5cGVzLnRocmVlQm91bmNlLFxyXG4gICAgICAgIGJhY2tkcm9wQmFja2dyb3VuZENvbG91cjogJ3JnYmEoMCwgMCwgMCwgMC4zKScsXHJcbiAgICAgICAgYmFja2Ryb3BCb3JkZXJSYWRpdXM6ICcwcHgnLFxyXG4gICAgICAgIGZ1bGxTY3JlZW5CYWNrZHJvcDogZmFsc2UsXHJcbiAgICAgICAgcHJpbWFyeUNvbG91cjogJyNmZmZmZmYnLFxyXG4gICAgICAgIHNlY29uZGFyeUNvbG91cjogJyNmZmZmZmYnLFxyXG4gICAgICAgIHRlcnRpYXJ5Q29sb3VyOiAnI2ZmZmZmZidcclxuICAgIH07XHJcbiAgICBwdWJsaWMgbmd4TG9hZGluZ0FuaW1hdGlvblR5cGVzID0gbmd4TG9hZGluZ0FuaW1hdGlvblR5cGVzO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgTG9hZGluZ1NlcnZpY2U6IE5neExvYWRpbmdTZXJ2aWNlLCBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5zZXR1cENvbmZpZygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0dXBDb25maWcoKTogdm9pZCB7XHJcbiAgICAgICAgZm9yIChjb25zdCBvcHRpb24gaW4gdGhpcy5kZWZhdWx0Q29uZmlnKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5jb25maWdbb3B0aW9uXSA9PT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb25maWdbb3B0aW9uXSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWdbb3B0aW9uXSA9IHRoaXMuTG9hZGluZ1NlcnZpY2UubG9hZGluZ0NvbmZpZ1tvcHRpb25dICE9IG51bGwgPyB0aGlzLkxvYWRpbmdTZXJ2aWNlLmxvYWRpbmdDb25maWdbb3B0aW9uXSA6IHRoaXMuZGVmYXVsdENvbmZpZ1tvcHRpb25dO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY29uZmlnW29wdGlvbl0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnW29wdGlvbl0gPSB0aGlzLkxvYWRpbmdTZXJ2aWNlLmxvYWRpbmdDb25maWdbb3B0aW9uXSAhPSBudWxsID8gdGhpcy5Mb2FkaW5nU2VydmljZS5sb2FkaW5nQ29uZmlnW29wdGlvbl0gOiB0aGlzLmRlZmF1bHRDb25maWdbb3B0aW9uXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0U2hvdyhzaG93OiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zaG93ID0gc2hvdztcclxuICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElOZ3hMb2FkaW5nQ29uZmlnIH0gZnJvbSAnLi4vcHVibGljX2FwaSc7XHJcbmltcG9ydCB7IE5neExvYWRpbmdDb21wb25lbnQgfSBmcm9tICcuL25neC1sb2FkaW5nLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW05neExvYWRpbmdDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtOZ3hMb2FkaW5nQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4TG9hZGluZ01vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QobG9hZGluZ0NvbmZpZzogSU5neExvYWRpbmdDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBOZ3hMb2FkaW5nTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6ICdsb2FkaW5nQ29uZmlnJywgdXNlVmFsdWU6IGxvYWRpbmdDb25maWcgfV1cclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztJQXFCSSwwQkFBWSxNQUE4QjtRQUE5Qix1QkFBQSxFQUFBLFdBQThCO1FBQ3RDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxNQUFNLENBQUMsb0JBQW9CLENBQUM7UUFDeEQsSUFBSSxDQUFDLHdCQUF3QixHQUFHLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQztRQUNoRSxJQUFJLENBQUMsa0JBQWtCLEdBQUcsTUFBTSxDQUFDLGtCQUFrQixDQUFDO1FBQ3BELElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQztRQUMxQyxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUM7UUFDMUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUMsZUFBZSxDQUFDO1FBQzlDLElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQztLQUMvQztJQUNMLHVCQUFDO0NBQUEsSUFBQTs7QUFFRCxJQUFhLHdCQUF3QixHQUFHO0lBQ3BDLFdBQVcsRUFBRSxjQUFjO0lBQzNCLE1BQU0sRUFBRSxXQUFXO0lBQ25CLFdBQVcsRUFBRSxhQUFhO0lBQzFCLFFBQVEsRUFBRSxjQUFjO0lBQ3hCLFlBQVksRUFBRSxlQUFlO0lBQzdCLElBQUksRUFBRSxNQUFNO0lBQ1osS0FBSyxFQUFFLE9BQU87SUFDZCxlQUFlLEVBQUUsa0JBQWtCO0lBQ25DLGFBQWEsRUFBRSxnQkFBZ0I7SUFDL0IsV0FBVyxFQUFFLGNBQWM7SUFDM0IsY0FBYyxFQUFFLGlCQUFpQjtDQUNwQzs7Ozs7O0FDNUNEO0lBU0UsMkJBQXlELE1BQXlCO1FBQXpCLFdBQU0sR0FBTixNQUFNLENBQW1CO1FBQ2hGLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLGdCQUFnQixFQUFFLENBQUM7S0FDNUQ7O2dCQVJGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7OztnREFJYyxRQUFRLFlBQUksTUFBTSxTQUFDLGVBQWU7Ozs0QkFUakQ7Q0FZQzs7Ozs7O0FDWkQ7SUF5eEJJLDZCQUFvQixjQUFpQyxFQUFVLGlCQUFvQztRQUEvRSxtQkFBYyxHQUFkLGNBQWMsQ0FBbUI7UUFBVSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBYjFGLFdBQU0sR0FBc0IsSUFBSSxnQkFBZ0IsRUFBRSxDQUFDO1FBRXBELGtCQUFhLEdBQXNCO1lBQ3ZDLGFBQWEsRUFBRSx3QkFBd0IsQ0FBQyxXQUFXO1lBQ25ELHdCQUF3QixFQUFFLG9CQUFvQjtZQUM5QyxvQkFBb0IsRUFBRSxLQUFLO1lBQzNCLGtCQUFrQixFQUFFLEtBQUs7WUFDekIsYUFBYSxFQUFFLFNBQVM7WUFDeEIsZUFBZSxFQUFFLFNBQVM7WUFDMUIsY0FBYyxFQUFFLFNBQVM7U0FDNUIsQ0FBQztRQUNLLDZCQUF3QixHQUFHLHdCQUF3QixDQUFDO0tBRTZDOzs7O0lBRXhHLHNDQUFROzs7SUFBUjtRQUNJLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztLQUN0Qjs7OztJQUVPLHlDQUFXOzs7SUFBbkI7UUFDSSxLQUFLLElBQU0sTUFBTSxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDckMsSUFBSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssU0FBUyxFQUFFO2dCQUMxQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxFQUFFO29CQUM3QixTQUFTO2lCQUNaO2dCQUVELElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDcEo7aUJBQU07Z0JBQ0gsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRTtvQkFDN0IsU0FBUztpQkFDWjtnQkFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ3BKO1NBQ0o7S0FDSjs7Ozs7SUFFTSxxQ0FBTzs7OztJQUFkLFVBQWUsSUFBYTtRQUN4QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7S0FDekM7O2dCQWh6QkosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxhQUFhO29CQUN2QixRQUFRLEVBQUUsMGdLQStEWDtvQkFDQyxNQUFNLEVBQUU7d0JBQ0osNDNyQkFnc0JIO3FCQUNBO2lCQUNKOzs7Z0JBdndCUSxpQkFBaUI7Z0JBRmpCLGlCQUFpQjs7O3VCQTJ3QnJCLEtBQUs7eUJBQ0wsS0FBSzsyQkFDTCxLQUFLOztJQXdDViwwQkFBQztDQUFBOzs7Ozs7QUNyekJEO0lBS0E7S0FZQzs7Ozs7SUFOUSx3QkFBTzs7OztJQUFkLFVBQWUsYUFBZ0M7UUFDN0MsT0FBTztZQUNMLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUUsQ0FBQztTQUNuRSxDQUFDO0tBQ0g7O2dCQVhGLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQ3ZCLFlBQVksRUFBRSxDQUFDLG1CQUFtQixDQUFDO29CQUNuQyxPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztpQkFDL0I7O0lBUUQsdUJBQUM7Q0FBQTs7Ozs7Ozs7Ozs7Ozs7In0=

/***/ }),

/***/ "./node_modules/primeng/selectbutton.js":
/*!**********************************************!*\
  !*** ./node_modules/primeng/selectbutton.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/selectbutton/selectbutton */ "./node_modules/primeng/components/selectbutton/selectbutton.js"));

/***/ }),

/***/ "./src/app/services/student-book-services/student-book.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/services/student-book-services/student-book.service.ts ***!
  \************************************************************************/
/*! exports provided: StudentBookService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentBookService", function() { return StudentBookService; });
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



var StudentBookService = /** @class */ (function () {
    function StudentBookService(_http) {
        this._http = _http;
        this.months = [
            'Січня',
            'Лютого',
            'Березня',
            'Квітня',
            'Травня',
            'Червня',
            'Липня',
            'Серпня',
            'Вересня',
            'Жовтня',
            'Листопада',
            'Грудня'
        ];
        this.dayOfWeek = [
            'Понеділок',
            'Вівторок',
            'Середа',
            'Четвер',
            'П\'ятниця',
            'Субота'
        ];
    }
    StudentBookService.prototype.getUkrainanDate = function (date) {
        var day = date.getDate();
        var month = this.months[date.getMonth()];
        var year = date.getFullYear();
        return day + " " + month + " " + year;
    };
    StudentBookService.prototype.getFormattedMonday = function (date) {
        var day = date.getDay(), diff = date.getDate() - day + 1;
        var monday = new Date(date.setDate(diff));
        var mondayMonth = monday.getMonth() + 1 < 10
            ? "0" + (monday.getMonth() + 1)
            : monday.getMonth() + 1;
        var mondayDate = monday.getDate() < 10 ? "0" + monday.getDate() : monday.getDate();
        return monday.getFullYear() + "-" + mondayMonth + "-" + mondayDate;
    };
    StudentBookService.prototype.sortDataByWeekDay = function (data) {
        var arr = [];
        var sortedArray = [];
        var _loop_1 = function (i) {
            data.forEach(function (el) {
                var currDate = new Date(el.date.join('-')).getDay() - 1;
                if (currDate === i) {
                    arr.push(el);
                }
            });
            if (arr.length) {
                sortedArray.push({
                    dayOfWeek: this_1.dayOfWeek[i],
                    daySchedule: arr,
                    dayDate: new Date(arr[0].date),
                    dayUkrDate: this_1.convertedDate(arr[0])
                });
            }
            arr = [];
        };
        var this_1 = this;
        for (var i = 0; i < this.dayOfWeek.length; i++) {
            _loop_1(i);
        }
        return sortedArray;
    };
    StudentBookService.prototype.b64toBlobUrl = function (b64Data, contentType, sliceSize) {
        if (contentType === void 0) { contentType = ''; }
        if (sliceSize === void 0) { sliceSize = 512; }
        var byteCharacters = atob(b64Data);
        var byteArrays = [];
        for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            var slice = byteCharacters.slice(offset, offset + sliceSize);
            var byteNumbers = new Array(slice.length);
            for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }
            var byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
        }
        var blob = new Blob(byteArrays, { type: contentType });
        return window.URL.createObjectURL(blob);
    };
    StudentBookService.prototype.addFilesToScheduleArray = function (data) {
        var _this = this;
        var scheduleWithFiles = data.map(function (el) {
            if (el.homeworkFileId) {
                _this.getFileById(el.lessonId).subscribe(function (response) {
                    el.blobUrl = _this.b64toBlobUrl(response.fileData, response.fileType);
                    el.fileName = response.fileName;
                }, function (err) {
                    Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
                });
            }
            return el;
        });
        return scheduleWithFiles;
    };
    StudentBookService.prototype.convertedDate = function (data) {
        var day = new Date(data.date.join('-')).getDate();
        var month = this.months[new Date(data.date.join('-')).getMonth()];
        var year = new Date(data.date.join('-')).getFullYear();
        return day + " " + month + " " + year;
    };
    StudentBookService.prototype.getFileById = function (lessonId) {
        return this._http.get("/homeworks/files/" + lessonId).map(function (response) {
            return response.data;
        });
    };
    StudentBookService.prototype.getDiariesList = function (date) {
        var _this = this;
        if (date === void 0) { date = new Date(); }
        var formattedDate = this.getFormattedMonday(date);
        return this._http
            .get("/diaries?weekStartDate=" + formattedDate)
            .map(function (response) {
            if (response.data.length) {
                var scheduleWithFiles = _this.addFilesToScheduleArray(response.data);
                var sortedWeekData = _this.sortDataByWeekDay(scheduleWithFiles);
                return sortedWeekData.slice();
            }
            else {
                throw new Error('Наразі немає даних про розклад');
            }
        });
    };
    StudentBookService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], StudentBookService);
    return StudentBookService;
}());



/***/ }),

/***/ "./src/app/student-book/student-book-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/student-book/student-book-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: StudentBookRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentBookRoutingModule", function() { return StudentBookRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _student_book_student_book_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./student-book/student-book.component */ "./src/app/student-book/student-book/student-book.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _student_book_student_book_component__WEBPACK_IMPORTED_MODULE_2__["StudentBookComponent"]
    }
];
var StudentBookRoutingModule = /** @class */ (function () {
    function StudentBookRoutingModule() {
    }
    StudentBookRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], StudentBookRoutingModule);
    return StudentBookRoutingModule;
}());



/***/ }),

/***/ "./src/app/student-book/student-book.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/student-book/student-book.module.ts ***!
  \*****************************************************/
/*! exports provided: StudentBookModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentBookModule", function() { return StudentBookModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/selectbutton */ "./node_modules/primeng/selectbutton.js");
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_selectbutton__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_loading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-loading */ "./node_modules/ngx-loading/fesm5/ngx-loading.js");
/* harmony import */ var _student_book_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./student-book-routing.module */ "./src/app/student-book/student-book-routing.module.ts");
/* harmony import */ var _student_book_student_book_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./student-book/student-book.component */ "./src/app/student-book/student-book/student-book.component.ts");
/* harmony import */ var _services_student_book_services_student_book_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/student-book-services/student-book.service */ "./src/app/services/student-book-services/student-book.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var StudentBookModule = /** @class */ (function () {
    function StudentBookModule() {
    }
    StudentBookModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _student_book_routing_module__WEBPACK_IMPORTED_MODULE_8__["StudentBookRoutingModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_2__["TableModule"],
                primeng_button__WEBPACK_IMPORTED_MODULE_3__["ButtonModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"],
                primeng_selectbutton__WEBPACK_IMPORTED_MODULE_5__["SelectButtonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                ngx_loading__WEBPACK_IMPORTED_MODULE_7__["NgxLoadingModule"]
            ],
            providers: [_services_student_book_services_student_book_service__WEBPACK_IMPORTED_MODULE_10__["StudentBookService"]],
            declarations: [_student_book_student_book_component__WEBPACK_IMPORTED_MODULE_9__["StudentBookComponent"]]
        })
    ], StudentBookModule);
    return StudentBookModule;
}());



/***/ }),

/***/ "./src/app/student-book/student-book/student-book.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/student-book/student-book/student-book.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"weekSchedule\" *ngIf=\"!loading\">\n  <div class=\"p-col-12 p-grid p-align-center schedule-navigation\">\n    <div class=\"p-col-12 p-md-3 p-lg-3 p-grid p-align-center left\">\n      <p-selectButton\n        *ngIf=\"startAndEndOfWeek\"\n        [options]=\"scheduleOptions\"\n        [(ngModel)]=\"selectedType\"\n        (click)=\"changeDataView()\"\n      ></p-selectButton>\n    </div>\n    <div class=\"p-col-12 p-md-7 p-lg-6 p-grid p-align-center central\">\n      <div class=\"p-md-2\">\n        <button\n          pButton\n          type=\"button\"\n          (click)=\"switchSchedule(false)\"\n          icon=\"fa fa-arrow-left\"\n          class=\"ui-button-rounded ui-button-secondary\"\n        ></button>\n      </div>\n      <div class=\"p-col-12 p-md-8\">\n        <label> {{ startAndEndOfWeek || ukrCurrDate }} </label>\n      </div>\n      <div class=\"p-md-2\">\n        <button\n          pButton\n          type=\"button\"\n          (click)=\"switchSchedule(true)\"\n          icon=\"fa fa-arrow-right\"\n          class=\"ui-button-rounded ui-button-secondary\"\n        ></button>\n      </div>\n    </div>\n    <div\n      *ngIf=\"startAndEndOfWeek\"\n      class=\"p-col-3 p-md-2 p-lg-3 p-grid p-align-center p-justify-end right\"\n    >\n      <p-selectButton\n        [options]=\"viewOptions\"\n        [(ngModel)]=\"viewType\"\n        [disabled]=\"selectedType === 'day' ? true : false\"\n        (click)=\"changeScheduleView()\"\n      >\n      </p-selectButton>\n      <button\n        pButton\n        type=\"button\"\n        icon=\"fa fa-print\"\n        [disabled]=\"viewType === 'list'\"\n        (click)=\"printSchedule()\"\n      ></button>\n    </div>\n  </div>\n  <div\n    class=\"p-col-12 p-grid tables\"\n    (swipeleft)=\"switchSchedule(true)\"\n    (swiperight)=\"switchSchedule(false)\"\n  >\n    <div\n      *ngFor=\"let daysOfWeek of weekSchedule\"\n      [ngClass]=\"{ 'p-md-12': view, 'p-md-6': !view, ordering: !view }\"\n      class=\"p-col-12\"\n    >\n      <p-table\n        [columns]=\"cols\"\n        [value]=\"daysOfWeek.daySchedule\"\n        [autoLayout]=\"true\"\n      >\n        <ng-template pTemplate=\"caption\">\n          {{ daysOfWeek.dayOfWeek }}\n        </ng-template>\n        <ng-template pTemplate=\"header\" let-columns>\n          <tr>\n            <th\n              *ngFor=\"let col of columns\"\n              [pSortableColumn]=\"col.field\"\n              [class]=\"col.class\"\n            >\n              {{ col.header }}\n            </th>\n          </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n          <tr class=\"students-table-row\">\n            <td\n              *ngFor=\"let col of columns\"\n              [ngClass]=\"{\n                'student-ellipsis-table-cell':\n                  col.field === 'homeWork' && rowData[col.field].length > 32,\n                'note-ellipsis-table-cell':\n                  col.field === 'note' && rowData[col.field].length > 49\n              }\"\n              [attr.data-homeWork]=\"\n                col.field === 'homeWork' && rowData[col.field].length > 32\n                  ? rowData[col.field]\n                  : null\n              \"\n              [attr.data-note]=\"\n                col.field === 'note' && rowData[col.field].length > 49\n                  ? rowData[col.field]\n                  : null\n              \"\n            >\n              {{ rowData[col.field] ? rowData[col.field] : '' }}\n              <a\n                class=\"download fas fa-download\"\n                [href]=\"sanitizer.bypassSecurityTrustUrl(rowData['blobUrl'])\"\n                [download]=\"rowData['fileName']\"\n                *ngIf=\"col.field === 'homeWork' && rowData['homeworkFileId']\"\n              ></a>\n            </td>\n          </tr>\n        </ng-template>\n      </p-table>\n    </div>\n  </div>\n</div>\n<ngx-loading [show]=\"loading\"></ngx-loading>\n"

/***/ }),

/***/ "./src/app/student-book/student-book/student-book.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/student-book/student-book/student-book.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".student-ellipsis-table-cell, .note-ellipsis-table-cell {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.student-ellipsis-table-cell:hover:after, .student-ellipsis-table-cell:focus:after, .note-ellipsis-table-cell:hover:after, .note-ellipsis-table-cell:focus:after {\n  overflow: visible;\n  text-overflow: inherit;\n  background: #fff;\n  position: absolute;\n  left: auto;\n  top: auto;\n  width: auto;\n  max-width: 20rem;\n  border: 1px solid #eaebec;\n  padding: 0 0.5rem;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.28);\n  white-space: normal;\n  word-wrap: break-word;\n  display: block;\n  color: black;\n  margin-top: -1.25rem; }\n\n.weekSchedule {\n  margin-top: 70px;\n  margin-left: 1%; }\n\n.weekSchedule .central {\n    text-align: center;\n    position: relative; }\n\n.weekSchedule .central label {\n      font-family: 'Open Sans', 'Helvetica Neue', sans-serif; }\n\n.weekSchedule .left {\n    margin-left: 0.1em; }\n\n.weekSchedule .right {\n    padding-left: 13%; }\n\n.weekSchedule .right button {\n      margin-left: 3%; }\n\n.students-table-row {\n  height: 48px;\n  text-align: center; }\n\n.students-table-row td {\n    text-align: center;\n    padding-right: 4%;\n    position: relative; }\n\n.students-table-row td .download {\n      position: absolute;\n      top: calc((100% - 14px) / 2);\n      right: 8px;\n      font-size: 20px; }\n\n.student-ellipsis-table-cell:hover, .student-ellipsis-table-cell:focus {\n  color: transparent; }\n\n.student-ellipsis-table-cell:hover:after, .student-ellipsis-table-cell:focus:after {\n    content: attr(data-homework); }\n\n.note-ellipsis-table-cell:hover, .note-ellipsis-table-cell:focus {\n  color: transparent; }\n\n.note-ellipsis-table-cell:hover:after, .note-ellipsis-table-cell:focus:after {\n    content: attr(data-note); }\n\n.lesson-number {\n  width: 10%;\n  text-align: center !important; }\n\n.lesson-name {\n  width: auto; }\n\n.lesson-description {\n  width: auto; }\n\n.lesson-mark {\n  width: 10%; }\n\n.student-print-icon {\n  font-size: 26px;\n  position: relative;\n  top: 4px;\n  left: 6%; }\n\n.student-print-icon:hover {\n    cursor: pointer; }\n\n.ordering:nth-of-type(1) {\n  order: 1; }\n\n.ordering:nth-of-type(2) {\n  order: 3; }\n\n.ordering:nth-of-type(3) {\n  order: 5; }\n\n.ordering:nth-of-type(4) {\n  order: 2; }\n\n.ordering:nth-of-type(5) {\n  order: 4; }\n\n.ordering:nth-of-type(6) {\n  order: 6; }\n\n@media print {\n  .schedule-navigation {\n    display: none; }\n  .students-table-row {\n    height: 24px; }\n    .students-table-row td {\n      text-align: unset;\n      position: static; }\n      .students-table-row td .download {\n        display: none; }\n  .tables {\n    margin-top: -80px; }\n    .tables .ordering:nth-of-type(1) {\n      order: 1; }\n    .tables .ordering:nth-of-type(2) {\n      order: 3; }\n    .tables .ordering:nth-of-type(3) {\n      order: 5; }\n    .tables .ordering:nth-of-type(4) {\n      order: 2; }\n    .tables .ordering:nth-of-type(5) {\n      order: 4; }\n    .tables .ordering:nth-of-type(6) {\n      order: 6; }\n    .tables .p-col-12 {\n      width: 50%; } }\n\n/* \n  ##Device = Laptops, Desktops\n  ##Screen = B/w 992px to 1280px\n*/\n\n@media (min-width: 992px) and (max-width: 1280px) {\n  .schedule-navigation div:nth-child(2) label {\n    margin-left: 10%; } }\n\n/* \n  ##Device = Tablets, Ipads (portrait)\n  ##Screen = B/w 768px to 992px\n*/\n\n@media (min-width: 768px) and (max-width: 992px) {\n  .weekSchedule .right {\n    padding: 0%; }\n  .right button {\n    display: none; } }\n\n/* \n  ##Device = Low Resolution Tablets, Mobiles (Landscape)\n  ##Screen = B/w 481px to 767px\n*/\n\n@media (min-width: 481px) and (max-width: 767px) {\n  .central {\n    display: flex;\n    justify-content: center; }\n    .central div:nth-of-type(1) {\n      order: 2; }\n    .central div:nth-of-type(2) {\n      order: 1; }\n    .central div:nth-of-type(3) {\n      order: 3; }\n  .left,\n  .right {\n    display: none; }\n  .ordering:nth-of-type(1) {\n    order: 1; }\n  .ordering:nth-of-type(2) {\n    order: 2; }\n  .ordering:nth-of-type(3) {\n    order: 3; }\n  .ordering:nth-of-type(4) {\n    order: 4; }\n  .ordering:nth-of-type(5) {\n    order: 5; }\n  .ordering:nth-of-type(6) {\n    order: 6; } }\n\n/* \n  ##Device = Most of the Smartphones Mobiles (Portrait)\n  ##Screen = B/w 320px to 479px\n*/\n\n@media (max-width: 480px) {\n  .left,\n  .right {\n    display: none; }\n  .central {\n    display: flex;\n    justify-content: center; }\n    .central div:nth-of-type(1) {\n      order: 2; }\n    .central div:nth-of-type(2) {\n      order: 1; }\n    .central div:nth-of-type(3) {\n      order: 3; }\n  .ordering:nth-of-type(1) {\n    order: 1; }\n  .ordering:nth-of-type(2) {\n    order: 2; }\n  .ordering:nth-of-type(3) {\n    order: 3; }\n  .ordering:nth-of-type(4) {\n    order: 4; }\n  .ordering:nth-of-type(5) {\n    order: 5; }\n  .ordering:nth-of-type(6) {\n    order: 6; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9kaWR1a2g4Ni9maW5hbF9wcm9qZWN0L3NyYy9hcHAvc3R1ZGVudC1ib29rL3N0dWRlbnQtYm9vay9zdHVkZW50LWJvb2suY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3N0dWRlbnQtYm9vay9zdHVkZW50LWJvb2svc3R1ZGVudC1ib29rLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixtQkFBbUIsRUFBQTs7QUFFckI7RUFDRSxpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFNBQVM7RUFDVCxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsMkNBQTJDO0VBQzNDLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsY0FBYztFQUNkLFlBQVk7RUFDWixvQkFBb0IsRUFBQTs7QUFHdEI7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBOztBQUZqQjtJQUtJLGtCQUFrQjtJQUNsQixrQkFBa0IsRUFBQTs7QUFOdEI7TUFRTSxzREFBc0QsRUFBQTs7QUFSNUQ7SUFZSSxrQkFBa0IsRUFBQTs7QUFadEI7SUFlSSxpQkFBaUIsRUFBQTs7QUFmckI7TUFpQk0sZUFBZSxFQUFBOztBQUtyQjtFQUNFLFlBQVk7RUFDWixrQkFBa0IsRUFBQTs7QUFGcEI7SUFJSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQixFQUFBOztBQU50QjtNQVFNLGtCQUFrQjtNQUNsQiw0QkFBNEI7TUFDNUIsVUFBVTtNQUNWLGVBQWUsRUFBQTs7QUFLckI7RUFJSSxrQkFBa0IsRUFBQTs7QUFKdEI7SUFNTSw0QkFBNEIsRUFBQTs7QUFNbEM7RUFJSSxrQkFBa0IsRUFBQTs7QUFKdEI7SUFNTSx3QkFBd0IsRUFBQTs7QUFNOUI7RUFDRSxVQUFVO0VBQ1YsNkJBQTZCLEVBQUE7O0FBRy9CO0VBQ0UsV0FBVyxFQUFBOztBQUdiO0VBQ0UsV0FBVyxFQUFBOztBQUdiO0VBQ0UsVUFBVSxFQUFBOztBQUdaO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsUUFBUSxFQUFBOztBQUpWO0lBTUksZUFBZSxFQUFBOztBQUluQjtFQUNFLFFBQVEsRUFBQTs7QUFHVjtFQUNFLFFBQVEsRUFBQTs7QUFHVjtFQUNFLFFBQVEsRUFBQTs7QUFHVjtFQUNFLFFBQVEsRUFBQTs7QUFHVjtFQUNFLFFBQVEsRUFBQTs7QUFHVjtFQUNFLFFBQVEsRUFBQTs7QUFJVjtFQUNFO0lBQ0UsYUFBYSxFQUFBO0VBOUZqQjtJQWlHSSxZQUFZLEVBQUE7SUFqR2hCO01BbUdNLGlCQUFpQjtNQUNqQixnQkFBZ0IsRUFBQTtNQXBHdEI7UUFzR1EsYUFBYSxFQUFBO0VBSW5CO0lBd0JFLGlCQUFpQixFQUFBO0lBeEJuQjtNQUVJLFFBQVEsRUFBQTtJQUZaO01BTUksUUFBUSxFQUFBO0lBTlo7TUFVSSxRQUFRLEVBQUE7SUFWWjtNQWNJLFFBQVEsRUFBQTtJQWRaO01Ba0JJLFFBQVEsRUFBQTtJQWxCWjtNQXNCSSxRQUFRLEVBQUE7SUF0Qlo7TUEwQkksVUFBVSxFQUFBLEVBQ1g7O0FBTUw7OztDQ3ZEQzs7QUQ0REQ7RUFDRTtJQUdNLGdCQUFnQixFQUFBLEVBQ2pCOztBQUtQOzs7Q0M5REM7O0FEbUVEO0VBckxBO0lBdUxJLFdBQVcsRUFBQTtFQUViO0lBQ0UsYUFBYSxFQUFBLEVBQ2Q7O0FBR0g7OztDQ2xFQzs7QUR1RUQ7RUFDRTtJQUNFLGFBQWE7SUFDYix1QkFBdUIsRUFBQTtJQUZ6QjtNQUlJLFFBQVEsRUFBQTtJQUpaO01BUUksUUFBUSxFQUFBO0lBUlo7TUFZSSxRQUFRLEVBQUE7RUFHWjs7SUFFRSxhQUFhLEVBQUE7RUE1SGpCO0lBK0hJLFFBQVEsRUFBQTtFQTNIWjtJQStISSxRQUFRLEVBQUE7RUEzSFo7SUErSEksUUFBUSxFQUFBO0VBM0haO0lBK0hJLFFBQVEsRUFBQTtFQTNIWjtJQStISSxRQUFRLEVBQUE7RUEzSFo7SUErSEksUUFBUSxFQUFBLEVBQ1Q7O0FBR0g7OztDQ3RGQzs7QUQyRkQ7RUFsQ0U7O0lBcUNFLGFBQWEsRUFBQTtFQXBEZjtJQXVERSxhQUFhO0lBQ2IsdUJBQXVCLEVBQUE7SUF4RHpCO01BMERJLFFBQVEsRUFBQTtJQTFEWjtNQThESSxRQUFRLEVBQUE7SUE5RFo7TUFrRUksUUFBUSxFQUFBO0VBN0tkO0lBaUxJLFFBQVEsRUFBQTtFQTdLWjtJQWlMSSxRQUFRLEVBQUE7RUE3S1o7SUFpTEksUUFBUSxFQUFBO0VBN0taO0lBaUxJLFFBQVEsRUFBQTtFQTdLWjtJQWlMSSxRQUFRLEVBQUE7RUE3S1o7SUFpTEksUUFBUSxFQUFBLEVBQ1QiLCJmaWxlIjoic3JjL2FwcC9zdHVkZW50LWJvb2svc3R1ZGVudC1ib29rL3N0dWRlbnQtYm9vay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiVlbGxpcHNpcy1zaGFyZWQge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbiVlbGxpcHNpcy1hZnRlciB7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICB0ZXh0LW92ZXJmbG93OiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IGF1dG87XG4gIHRvcDogYXV0bztcbiAgd2lkdGg6IGF1dG87XG4gIG1heC13aWR0aDogMjByZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlYWViZWM7XG4gIHBhZGRpbmc6IDAgMC41cmVtO1xuICBib3gtc2hhZG93OiAwIDJweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMjgpO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogYmxhY2s7XG4gIG1hcmdpbi10b3A6IC0xLjI1cmVtO1xufVxuXG4ud2Vla1NjaGVkdWxlIHtcbiAgbWFyZ2luLXRvcDogNzBweDtcbiAgbWFyZ2luLWxlZnQ6IDElO1xuXG4gIC5jZW50cmFsIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxhYmVsIHtcbiAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgICB9XG4gIH1cbiAgLmxlZnQge1xuICAgIG1hcmdpbi1sZWZ0OiAwLjFlbTtcbiAgfVxuICAucmlnaHQge1xuICAgIHBhZGRpbmctbGVmdDogMTMlO1xuICAgIGJ1dHRvbiB7XG4gICAgICBtYXJnaW4tbGVmdDogMyU7XG4gICAgfVxuICB9XG59XG5cbi5zdHVkZW50cy10YWJsZS1yb3cge1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLXJpZ2h0OiA0JTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLmRvd25sb2FkIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogY2FsYygoMTAwJSAtIDE0cHgpIC8gMik7XG4gICAgICByaWdodDogOHB4O1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cbiAgfVxufVxuXG4uc3R1ZGVudC1lbGxpcHNpcy10YWJsZS1jZWxsIHtcbiAgQGV4dGVuZCAlZWxsaXBzaXMtc2hhcmVkO1xuICAmOmhvdmVyLFxuICAmOmZvY3VzIHtcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgJjphZnRlciB7XG4gICAgICBjb250ZW50OiBhdHRyKGRhdGEtaG9tZXdvcmspO1xuICAgICAgQGV4dGVuZCAlZWxsaXBzaXMtYWZ0ZXI7XG4gICAgfVxuICB9XG59XG5cbi5ub3RlLWVsbGlwc2lzLXRhYmxlLWNlbGwge1xuICBAZXh0ZW5kICVlbGxpcHNpcy1zaGFyZWQ7XG4gICY6aG92ZXIsXG4gICY6Zm9jdXMge1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAmOmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS1ub3RlKTtcbiAgICAgIEBleHRlbmQgJWVsbGlwc2lzLWFmdGVyO1xuICAgIH1cbiAgfVxufVxuXG4ubGVzc29uLW51bWJlciB7XG4gIHdpZHRoOiAxMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4ubGVzc29uLW5hbWUge1xuICB3aWR0aDogYXV0bztcbn1cblxuLmxlc3Nvbi1kZXNjcmlwdGlvbiB7XG4gIHdpZHRoOiBhdXRvO1xufVxuXG4ubGVzc29uLW1hcmsge1xuICB3aWR0aDogMTAlO1xufVxuXG4uc3R1ZGVudC1wcmludC1pY29uIHtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNHB4O1xuICBsZWZ0OiA2JTtcbiAgJjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59XG5cbi5vcmRlcmluZzpudGgtb2YtdHlwZSgxKSB7XG4gIG9yZGVyOiAxO1xufVxuXG4ub3JkZXJpbmc6bnRoLW9mLXR5cGUoMikge1xuICBvcmRlcjogMztcbn1cblxuLm9yZGVyaW5nOm50aC1vZi10eXBlKDMpIHtcbiAgb3JkZXI6IDU7XG59XG5cbi5vcmRlcmluZzpudGgtb2YtdHlwZSg0KSB7XG4gIG9yZGVyOiAyO1xufVxuXG4ub3JkZXJpbmc6bnRoLW9mLXR5cGUoNSkge1xuICBvcmRlcjogNDtcbn1cblxuLm9yZGVyaW5nOm50aC1vZi10eXBlKDYpIHtcbiAgb3JkZXI6IDY7XG59XG5cbi8vIFN0eWxlcyBmb3IgcHJpbnQgcGFnZVxuQG1lZGlhIHByaW50IHtcbiAgLnNjaGVkdWxlLW5hdmlnYXRpb24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLnN0dWRlbnRzLXRhYmxlLXJvdyB7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICAgIHRkIHtcbiAgICAgIHRleHQtYWxpZ246IHVuc2V0O1xuICAgICAgcG9zaXRpb246IHN0YXRpYztcbiAgICAgIC5kb3dubG9hZCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC50YWJsZXMge1xuICAgIC5vcmRlcmluZzpudGgtb2YtdHlwZSgxKSB7XG4gICAgICBvcmRlcjogMTtcbiAgICB9XG5cbiAgICAub3JkZXJpbmc6bnRoLW9mLXR5cGUoMikge1xuICAgICAgb3JkZXI6IDM7XG4gICAgfVxuXG4gICAgLm9yZGVyaW5nOm50aC1vZi10eXBlKDMpIHtcbiAgICAgIG9yZGVyOiA1O1xuICAgIH1cblxuICAgIC5vcmRlcmluZzpudGgtb2YtdHlwZSg0KSB7XG4gICAgICBvcmRlcjogMjtcbiAgICB9XG5cbiAgICAub3JkZXJpbmc6bnRoLW9mLXR5cGUoNSkge1xuICAgICAgb3JkZXI6IDQ7XG4gICAgfVxuXG4gICAgLm9yZGVyaW5nOm50aC1vZi10eXBlKDYpIHtcbiAgICAgIG9yZGVyOiA2O1xuICAgIH1cbiAgICBtYXJnaW4tdG9wOiAtODBweDtcbiAgICAucC1jb2wtMTIge1xuICAgICAgd2lkdGg6IDUwJTtcbiAgICB9XG4gIH1cbn1cblxuLy8gUmVzcG9uc2l2ZSBzdHlsZXNcblxuLyogXG4gICMjRGV2aWNlID0gTGFwdG9wcywgRGVza3RvcHNcbiAgIyNTY3JlZW4gPSBCL3cgOTkycHggdG8gMTI4MHB4XG4qL1xuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIHtcbiAgLnNjaGVkdWxlLW5hdmlnYXRpb24ge1xuICAgIGRpdjpudGgtY2hpbGQoMikge1xuICAgICAgbGFiZWwge1xuICAgICAgICBtYXJnaW4tbGVmdDogMTAlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKiBcbiAgIyNEZXZpY2UgPSBUYWJsZXRzLCBJcGFkcyAocG9ydHJhaXQpXG4gICMjU2NyZWVuID0gQi93IDc2OHB4IHRvIDk5MnB4XG4qL1xuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAud2Vla1NjaGVkdWxlIC5yaWdodCB7XG4gICAgcGFkZGluZzogMCU7XG4gIH1cbiAgLnJpZ2h0IGJ1dHRvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG4vKiBcbiAgIyNEZXZpY2UgPSBMb3cgUmVzb2x1dGlvbiBUYWJsZXRzLCBNb2JpbGVzIChMYW5kc2NhcGUpXG4gICMjU2NyZWVuID0gQi93IDQ4MXB4IHRvIDc2N3B4XG4qL1xuXG5AbWVkaWEgKG1pbi13aWR0aDogNDgxcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuY2VudHJhbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBkaXY6bnRoLW9mLXR5cGUoMSkge1xuICAgICAgb3JkZXI6IDI7XG4gICAgfVxuXG4gICAgZGl2Om50aC1vZi10eXBlKDIpIHtcbiAgICAgIG9yZGVyOiAxO1xuICAgIH1cblxuICAgIGRpdjpudGgtb2YtdHlwZSgzKSB7XG4gICAgICBvcmRlcjogMztcbiAgICB9XG4gIH1cbiAgLmxlZnQsXG4gIC5yaWdodCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAub3JkZXJpbmc6bnRoLW9mLXR5cGUoMSkge1xuICAgIG9yZGVyOiAxO1xuICB9XG5cbiAgLm9yZGVyaW5nOm50aC1vZi10eXBlKDIpIHtcbiAgICBvcmRlcjogMjtcbiAgfVxuXG4gIC5vcmRlcmluZzpudGgtb2YtdHlwZSgzKSB7XG4gICAgb3JkZXI6IDM7XG4gIH1cblxuICAub3JkZXJpbmc6bnRoLW9mLXR5cGUoNCkge1xuICAgIG9yZGVyOiA0O1xuICB9XG5cbiAgLm9yZGVyaW5nOm50aC1vZi10eXBlKDUpIHtcbiAgICBvcmRlcjogNTtcbiAgfVxuXG4gIC5vcmRlcmluZzpudGgtb2YtdHlwZSg2KSB7XG4gICAgb3JkZXI6IDY7XG4gIH1cbn1cblxuLyogXG4gICMjRGV2aWNlID0gTW9zdCBvZiB0aGUgU21hcnRwaG9uZXMgTW9iaWxlcyAoUG9ydHJhaXQpXG4gICMjU2NyZWVuID0gQi93IDMyMHB4IHRvIDQ3OXB4XG4qL1xuXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLmxlZnQsXG4gIC5yaWdodCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuY2VudHJhbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBkaXY6bnRoLW9mLXR5cGUoMSkge1xuICAgICAgb3JkZXI6IDI7XG4gICAgfVxuXG4gICAgZGl2Om50aC1vZi10eXBlKDIpIHtcbiAgICAgIG9yZGVyOiAxO1xuICAgIH1cblxuICAgIGRpdjpudGgtb2YtdHlwZSgzKSB7XG4gICAgICBvcmRlcjogMztcbiAgICB9XG4gIH1cbiAgLm9yZGVyaW5nOm50aC1vZi10eXBlKDEpIHtcbiAgICBvcmRlcjogMTtcbiAgfVxuXG4gIC5vcmRlcmluZzpudGgtb2YtdHlwZSgyKSB7XG4gICAgb3JkZXI6IDI7XG4gIH1cblxuICAub3JkZXJpbmc6bnRoLW9mLXR5cGUoMykge1xuICAgIG9yZGVyOiAzO1xuICB9XG5cbiAgLm9yZGVyaW5nOm50aC1vZi10eXBlKDQpIHtcbiAgICBvcmRlcjogNDtcbiAgfVxuXG4gIC5vcmRlcmluZzpudGgtb2YtdHlwZSg1KSB7XG4gICAgb3JkZXI6IDU7XG4gIH1cblxuICAub3JkZXJpbmc6bnRoLW9mLXR5cGUoNikge1xuICAgIG9yZGVyOiA2O1xuICB9XG59XG4iLCIuc3R1ZGVudC1lbGxpcHNpcy10YWJsZS1jZWxsLCAubm90ZS1lbGxpcHNpcy10YWJsZS1jZWxsIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cblxuLnN0dWRlbnQtZWxsaXBzaXMtdGFibGUtY2VsbDpob3ZlcjphZnRlciwgLnN0dWRlbnQtZWxsaXBzaXMtdGFibGUtY2VsbDpmb2N1czphZnRlciwgLm5vdGUtZWxsaXBzaXMtdGFibGUtY2VsbDpob3ZlcjphZnRlciwgLm5vdGUtZWxsaXBzaXMtdGFibGUtY2VsbDpmb2N1czphZnRlciB7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICB0ZXh0LW92ZXJmbG93OiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IGF1dG87XG4gIHRvcDogYXV0bztcbiAgd2lkdGg6IGF1dG87XG4gIG1heC13aWR0aDogMjByZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlYWViZWM7XG4gIHBhZGRpbmc6IDAgMC41cmVtO1xuICBib3gtc2hhZG93OiAwIDJweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMjgpO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogYmxhY2s7XG4gIG1hcmdpbi10b3A6IC0xLjI1cmVtOyB9XG5cbi53ZWVrU2NoZWR1bGUge1xuICBtYXJnaW4tdG9wOiA3MHB4O1xuICBtYXJnaW4tbGVmdDogMSU7IH1cbiAgLndlZWtTY2hlZHVsZSAuY2VudHJhbCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuICAgIC53ZWVrU2NoZWR1bGUgLmNlbnRyYWwgbGFiZWwge1xuICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmOyB9XG4gIC53ZWVrU2NoZWR1bGUgLmxlZnQge1xuICAgIG1hcmdpbi1sZWZ0OiAwLjFlbTsgfVxuICAud2Vla1NjaGVkdWxlIC5yaWdodCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMyU7IH1cbiAgICAud2Vla1NjaGVkdWxlIC5yaWdodCBidXR0b24ge1xuICAgICAgbWFyZ2luLWxlZnQ6IDMlOyB9XG5cbi5zdHVkZW50cy10YWJsZS1yb3cge1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuICAuc3R1ZGVudHMtdGFibGUtcm93IHRkIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy1yaWdodDogNCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gICAgLnN0dWRlbnRzLXRhYmxlLXJvdyB0ZCAuZG93bmxvYWQge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiBjYWxjKCgxMDAlIC0gMTRweCkgLyAyKTtcbiAgICAgIHJpZ2h0OiA4cHg7XG4gICAgICBmb250LXNpemU6IDIwcHg7IH1cblxuLnN0dWRlbnQtZWxsaXBzaXMtdGFibGUtY2VsbDpob3ZlciwgLnN0dWRlbnQtZWxsaXBzaXMtdGFibGUtY2VsbDpmb2N1cyB7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDsgfVxuICAuc3R1ZGVudC1lbGxpcHNpcy10YWJsZS1jZWxsOmhvdmVyOmFmdGVyLCAuc3R1ZGVudC1lbGxpcHNpcy10YWJsZS1jZWxsOmZvY3VzOmFmdGVyIHtcbiAgICBjb250ZW50OiBhdHRyKGRhdGEtaG9tZXdvcmspOyB9XG5cbi5ub3RlLWVsbGlwc2lzLXRhYmxlLWNlbGw6aG92ZXIsIC5ub3RlLWVsbGlwc2lzLXRhYmxlLWNlbGw6Zm9jdXMge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7IH1cbiAgLm5vdGUtZWxsaXBzaXMtdGFibGUtY2VsbDpob3ZlcjphZnRlciwgLm5vdGUtZWxsaXBzaXMtdGFibGUtY2VsbDpmb2N1czphZnRlciB7XG4gICAgY29udGVudDogYXR0cihkYXRhLW5vdGUpOyB9XG5cbi5sZXNzb24tbnVtYmVyIHtcbiAgd2lkdGg6IDEwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7IH1cblxuLmxlc3Nvbi1uYW1lIHtcbiAgd2lkdGg6IGF1dG87IH1cblxuLmxlc3Nvbi1kZXNjcmlwdGlvbiB7XG4gIHdpZHRoOiBhdXRvOyB9XG5cbi5sZXNzb24tbWFyayB7XG4gIHdpZHRoOiAxMCU7IH1cblxuLnN0dWRlbnQtcHJpbnQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDRweDtcbiAgbGVmdDogNiU7IH1cbiAgLnN0dWRlbnQtcHJpbnQtaWNvbjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XG5cbi5vcmRlcmluZzpudGgtb2YtdHlwZSgxKSB7XG4gIG9yZGVyOiAxOyB9XG5cbi5vcmRlcmluZzpudGgtb2YtdHlwZSgyKSB7XG4gIG9yZGVyOiAzOyB9XG5cbi5vcmRlcmluZzpudGgtb2YtdHlwZSgzKSB7XG4gIG9yZGVyOiA1OyB9XG5cbi5vcmRlcmluZzpudGgtb2YtdHlwZSg0KSB7XG4gIG9yZGVyOiAyOyB9XG5cbi5vcmRlcmluZzpudGgtb2YtdHlwZSg1KSB7XG4gIG9yZGVyOiA0OyB9XG5cbi5vcmRlcmluZzpudGgtb2YtdHlwZSg2KSB7XG4gIG9yZGVyOiA2OyB9XG5cbkBtZWRpYSBwcmludCB7XG4gIC5zY2hlZHVsZS1uYXZpZ2F0aW9uIHtcbiAgICBkaXNwbGF5OiBub25lOyB9XG4gIC5zdHVkZW50cy10YWJsZS1yb3cge1xuICAgIGhlaWdodDogMjRweDsgfVxuICAgIC5zdHVkZW50cy10YWJsZS1yb3cgdGQge1xuICAgICAgdGV4dC1hbGlnbjogdW5zZXQ7XG4gICAgICBwb3NpdGlvbjogc3RhdGljOyB9XG4gICAgICAuc3R1ZGVudHMtdGFibGUtcm93IHRkIC5kb3dubG9hZCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7IH1cbiAgLnRhYmxlcyB7XG4gICAgbWFyZ2luLXRvcDogLTgwcHg7IH1cbiAgICAudGFibGVzIC5vcmRlcmluZzpudGgtb2YtdHlwZSgxKSB7XG4gICAgICBvcmRlcjogMTsgfVxuICAgIC50YWJsZXMgLm9yZGVyaW5nOm50aC1vZi10eXBlKDIpIHtcbiAgICAgIG9yZGVyOiAzOyB9XG4gICAgLnRhYmxlcyAub3JkZXJpbmc6bnRoLW9mLXR5cGUoMykge1xuICAgICAgb3JkZXI6IDU7IH1cbiAgICAudGFibGVzIC5vcmRlcmluZzpudGgtb2YtdHlwZSg0KSB7XG4gICAgICBvcmRlcjogMjsgfVxuICAgIC50YWJsZXMgLm9yZGVyaW5nOm50aC1vZi10eXBlKDUpIHtcbiAgICAgIG9yZGVyOiA0OyB9XG4gICAgLnRhYmxlcyAub3JkZXJpbmc6bnRoLW9mLXR5cGUoNikge1xuICAgICAgb3JkZXI6IDY7IH1cbiAgICAudGFibGVzIC5wLWNvbC0xMiB7XG4gICAgICB3aWR0aDogNTAlOyB9IH1cblxuLyogXG4gICMjRGV2aWNlID0gTGFwdG9wcywgRGVza3RvcHNcbiAgIyNTY3JlZW4gPSBCL3cgOTkycHggdG8gMTI4MHB4XG4qL1xuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTI4MHB4KSB7XG4gIC5zY2hlZHVsZS1uYXZpZ2F0aW9uIGRpdjpudGgtY2hpbGQoMikgbGFiZWwge1xuICAgIG1hcmdpbi1sZWZ0OiAxMCU7IH0gfVxuXG4vKiBcbiAgIyNEZXZpY2UgPSBUYWJsZXRzLCBJcGFkcyAocG9ydHJhaXQpXG4gICMjU2NyZWVuID0gQi93IDc2OHB4IHRvIDk5MnB4XG4qL1xuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLndlZWtTY2hlZHVsZSAucmlnaHQge1xuICAgIHBhZGRpbmc6IDAlOyB9XG4gIC5yaWdodCBidXR0b24ge1xuICAgIGRpc3BsYXk6IG5vbmU7IH0gfVxuXG4vKiBcbiAgIyNEZXZpY2UgPSBMb3cgUmVzb2x1dGlvbiBUYWJsZXRzLCBNb2JpbGVzIChMYW5kc2NhcGUpXG4gICMjU2NyZWVuID0gQi93IDQ4MXB4IHRvIDc2N3B4XG4qL1xuQG1lZGlhIChtaW4td2lkdGg6IDQ4MXB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmNlbnRyYWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cbiAgICAuY2VudHJhbCBkaXY6bnRoLW9mLXR5cGUoMSkge1xuICAgICAgb3JkZXI6IDI7IH1cbiAgICAuY2VudHJhbCBkaXY6bnRoLW9mLXR5cGUoMikge1xuICAgICAgb3JkZXI6IDE7IH1cbiAgICAuY2VudHJhbCBkaXY6bnRoLW9mLXR5cGUoMykge1xuICAgICAgb3JkZXI6IDM7IH1cbiAgLmxlZnQsXG4gIC5yaWdodCB7XG4gICAgZGlzcGxheTogbm9uZTsgfVxuICAub3JkZXJpbmc6bnRoLW9mLXR5cGUoMSkge1xuICAgIG9yZGVyOiAxOyB9XG4gIC5vcmRlcmluZzpudGgtb2YtdHlwZSgyKSB7XG4gICAgb3JkZXI6IDI7IH1cbiAgLm9yZGVyaW5nOm50aC1vZi10eXBlKDMpIHtcbiAgICBvcmRlcjogMzsgfVxuICAub3JkZXJpbmc6bnRoLW9mLXR5cGUoNCkge1xuICAgIG9yZGVyOiA0OyB9XG4gIC5vcmRlcmluZzpudGgtb2YtdHlwZSg1KSB7XG4gICAgb3JkZXI6IDU7IH1cbiAgLm9yZGVyaW5nOm50aC1vZi10eXBlKDYpIHtcbiAgICBvcmRlcjogNjsgfSB9XG5cbi8qIFxuICAjI0RldmljZSA9IE1vc3Qgb2YgdGhlIFNtYXJ0cGhvbmVzIE1vYmlsZXMgKFBvcnRyYWl0KVxuICAjI1NjcmVlbiA9IEIvdyAzMjBweCB0byA0NzlweFxuKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAubGVmdCxcbiAgLnJpZ2h0IHtcbiAgICBkaXNwbGF5OiBub25lOyB9XG4gIC5jZW50cmFsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XG4gICAgLmNlbnRyYWwgZGl2Om50aC1vZi10eXBlKDEpIHtcbiAgICAgIG9yZGVyOiAyOyB9XG4gICAgLmNlbnRyYWwgZGl2Om50aC1vZi10eXBlKDIpIHtcbiAgICAgIG9yZGVyOiAxOyB9XG4gICAgLmNlbnRyYWwgZGl2Om50aC1vZi10eXBlKDMpIHtcbiAgICAgIG9yZGVyOiAzOyB9XG4gIC5vcmRlcmluZzpudGgtb2YtdHlwZSgxKSB7XG4gICAgb3JkZXI6IDE7IH1cbiAgLm9yZGVyaW5nOm50aC1vZi10eXBlKDIpIHtcbiAgICBvcmRlcjogMjsgfVxuICAub3JkZXJpbmc6bnRoLW9mLXR5cGUoMykge1xuICAgIG9yZGVyOiAzOyB9XG4gIC5vcmRlcmluZzpudGgtb2YtdHlwZSg0KSB7XG4gICAgb3JkZXI6IDQ7IH1cbiAgLm9yZGVyaW5nOm50aC1vZi10eXBlKDUpIHtcbiAgICBvcmRlcjogNTsgfVxuICAub3JkZXJpbmc6bnRoLW9mLXR5cGUoNikge1xuICAgIG9yZGVyOiA2OyB9IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/student-book/student-book/student-book.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/student-book/student-book/student-book.component.ts ***!
  \*********************************************************************/
/*! exports provided: StudentBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentBookComponent", function() { return StudentBookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_student_book_services_student_book_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/student-book-services/student-book.service */ "./src/app/services/student-book-services/student-book.service.ts");
/* harmony import */ var src_app_services_data_sharing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data-sharing.service */ "./src/app/services/data-sharing.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _services_pageTitle_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/pageTitle.service */ "./src/app/services/pageTitle.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StudentBookComponent = /** @class */ (function () {
    function StudentBookComponent(studentBookService, notificationToasts, sanitizer, pageTitle) {
        this.studentBookService = studentBookService;
        this.notificationToasts = notificationToasts;
        this.sanitizer = sanitizer;
        this.pageTitle = pageTitle;
        this.offset = 0;
        this.saveOffset = 0;
        this.view = false;
        this.selectedType = 'week';
        this.viewType = 'group';
        this.loading = true;
    }
    StudentBookComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pageTitle.setTitle('Католицька Школа - Щоденник');
        this.ukrCurrDate = this.studentBookService.getUkrainanDate(new Date());
        this.studentBookService.getDiariesList().subscribe(function (data) {
            _this.weekSchedule = data;
            _this.startAndEndOfWeek = _this.weekSchedule[0].dayUkrDate + " - " + _this.weekSchedule[_this.weekSchedule.length - 1].dayUkrDate;
            _this.loading = false;
        }, function () {
            _this.changeWeekSchedule(true, 5);
        });
        this.cols = [
            { field: 'lessonNumber', header: '№', class: 'lesson-number' },
            { field: 'subjectName', header: 'Предмет', class: 'lesson-name' },
            {
                field: 'homeWork',
                header: 'Домашня робота',
                class: 'lesson-description'
            },
            { field: 'mark', header: 'Оцінка', class: 'lesson-mark' }
        ];
        this.scheduleOptions = [
            { label: 'День', value: 'day' },
            { label: 'Тиждень', value: 'week' }
        ];
        this.viewOptions = [
            { value: 'list', icon: 'pi pi-list' },
            { value: 'group', icon: 'pi pi-th-large' }
        ];
    };
    StudentBookComponent.prototype.changeWeekSchedule = function (week, lengthOfCalls) {
        var _this = this;
        var day = new Date();
        var currDay = day.getDate();
        if (week) {
            this.offset += 7;
        }
        else {
            this.offset -= 7;
        }
        currDay += this.offset;
        var changedWeek = new Date(day.setDate(currDay));
        this.studentBookService.getDiariesList(changedWeek).subscribe(function (data) {
            _this.weekSchedule = data;
            _this.startAndEndOfWeek = _this.weekSchedule[0].dayUkrDate + " - " + _this.weekSchedule[_this.weekSchedule.length - 1].dayUkrDate;
            _this.clonedWeekSchedule = _this.weekSchedule.slice();
            _this.saveOffset = _this.offset;
            _this.loading = false;
        }, function (err) {
            if (lengthOfCalls >= 0) {
                _this.changeWeekSchedule(week, lengthOfCalls - 1);
            }
            else {
                _this.offset = _this.saveOffset;
                _this.notificationToasts.notify('error', 'Помилка', err.message);
                _this.loading = false;
            }
        });
    };
    StudentBookComponent.prototype.changeScheduleView = function () {
        if (this.viewType === 'list' && !this.view) {
            this.view = true;
            this.cols.push({ field: 'note', header: 'Примітка' });
        }
        else if (this.viewType === 'group' && this.view) {
            this.view = false;
            this.cols.length = this.cols.length - 1;
        }
    };
    StudentBookComponent.prototype.changeDataView = function () {
        if (this.selectedType === 'day') {
            this.viewType = 'list';
            this.changeScheduleView();
            var currDate_1 = new Date().setHours(0, 0, 0, 0);
            var today = this.weekSchedule.filter(function (el) {
                return currDate_1 === el.dayDate.getTime();
            });
            this.clonedWeekSchedule = this.weekSchedule.slice();
            this.weekSchedule = today.length ? today : [this.weekSchedule[0]];
            this.startAndEndOfWeek = "" + this.weekSchedule[0].dayUkrDate;
        }
        else {
            this.weekSchedule = this.clonedWeekSchedule || this.weekSchedule;
            this.startAndEndOfWeek = this.weekSchedule[0].dayUkrDate + " - " + this.weekSchedule[this.weekSchedule.length - 1].dayUkrDate;
            this.viewType = 'group';
            this.changeScheduleView();
        }
    };
    StudentBookComponent.prototype.switchSchedule = function (direction) {
        if (this.selectedType === 'day') {
            this.changeDaySchedule(direction);
        }
        else {
            this.loading = true;
            this.changeWeekSchedule(direction, 5);
        }
    };
    StudentBookComponent.prototype.changeDaySchedule = function (type) {
        var index = this.clonedWeekSchedule.indexOf(this.weekSchedule[0]);
        if (type && index !== this.clonedWeekSchedule.length - 1) {
            this.weekSchedule = [this.clonedWeekSchedule[index + 1]];
            this.startAndEndOfWeek = "" + this.weekSchedule[0].dayUkrDate;
        }
        else if (!type && index !== 0) {
            this.weekSchedule = [this.clonedWeekSchedule[index - 1]];
            this.startAndEndOfWeek = "" + this.weekSchedule[0].dayUkrDate;
        }
    };
    StudentBookComponent.prototype.printSchedule = function () {
        window.print();
    };
    StudentBookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-student-book',
            template: __webpack_require__(/*! ./student-book.component.html */ "./src/app/student-book/student-book/student-book.component.html"),
            styles: [__webpack_require__(/*! ./student-book.component.scss */ "./src/app/student-book/student-book/student-book.component.scss")],
            providers: [_services_pageTitle_service__WEBPACK_IMPORTED_MODULE_4__["PageTitleService"]]
        }),
        __metadata("design:paramtypes", [src_app_services_student_book_services_student_book_service__WEBPACK_IMPORTED_MODULE_1__["StudentBookService"],
            src_app_services_data_sharing_service__WEBPACK_IMPORTED_MODULE_2__["DataSharingService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"],
            _services_pageTitle_service__WEBPACK_IMPORTED_MODULE_4__["PageTitleService"]])
    ], StudentBookComponent);
    return StudentBookComponent;
}());



/***/ })

}]);
//# sourceMappingURL=student-book-student-book-module.js.map