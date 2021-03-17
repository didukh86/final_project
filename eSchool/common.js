(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/primeng/calendar.js":
/*!******************************************!*\
  !*** ./node_modules/primeng/calendar.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/calendar/calendar */ "./node_modules/primeng/components/calendar/calendar.js"));

/***/ }),

/***/ "./node_modules/primeng/card.js":
/*!**************************************!*\
  !*** ./node_modules/primeng/card.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/card/card */ "./node_modules/primeng/components/card/card.js"));

/***/ }),

/***/ "./node_modules/primeng/dialog.js":
/*!****************************************!*\
  !*** ./node_modules/primeng/dialog.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/dialog/dialog */ "./node_modules/primeng/components/dialog/dialog.js"));

/***/ }),

/***/ "./node_modules/primeng/inputmask.js":
/*!*******************************************!*\
  !*** ./node_modules/primeng/inputmask.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/inputmask/inputmask */ "./node_modules/primeng/components/inputmask/inputmask.js"));

/***/ }),

/***/ "./node_modules/primeng/inputtext.js":
/*!*******************************************!*\
  !*** ./node_modules/primeng/inputtext.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/inputtext/inputtext */ "./node_modules/primeng/components/inputtext/inputtext.js"));

/***/ }),

/***/ "./node_modules/primeng/inputtextarea.js":
/*!***********************************************!*\
  !*** ./node_modules/primeng/inputtextarea.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/inputtextarea/inputtextarea */ "./node_modules/primeng/components/inputtextarea/inputtextarea.js"));

/***/ }),

/***/ "./node_modules/primeng/radiobutton.js":
/*!*********************************************!*\
  !*** ./node_modules/primeng/radiobutton.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/radiobutton/radiobutton */ "./node_modules/primeng/components/radiobutton/radiobutton.js"));

/***/ }),

/***/ "./node_modules/primeng/toolbar.js":
/*!*****************************************!*\
  !*** ./node_modules/primeng/toolbar.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/toolbar/toolbar */ "./node_modules/primeng/components/toolbar/toolbar.js"));

/***/ }),

/***/ "./src/app/models/journalData.model.ts":
/*!*********************************************!*\
  !*** ./src/app/models/journalData.model.ts ***!
  \*********************************************/
/*! exports provided: JournalData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JournalData", function() { return JournalData; });
var JournalData = /** @class */ (function () {
    function JournalData(id, marks, fullName) {
        this.idStudent = id;
        this.rating = [0, 0];
        this.marks = marks;
        this.studentFullName = fullName;
    }
    return JournalData;
}());



/***/ }),

/***/ "./src/app/services/data-sharing.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/data-sharing.service.ts ***!
  \**************************************************/
/*! exports provided: DataSharingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSharingService", function() { return DataSharingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DataSharingService = /** @class */ (function () {
    function DataSharingService() {
        this.showToasts = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    DataSharingService.prototype.notify = function (severity, summary, detail, sticky) {
        this.showToasts.next({ severity: severity, summary: summary, detail: detail, sticky: sticky });
    };
    DataSharingService.prototype.getToasts = function () {
        return this.showToasts.asObservable();
    };
    DataSharingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], DataSharingService);
    return DataSharingService;
}());



/***/ }),

/***/ "./src/app/services/teacher-journals.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/teacher-journals.service.ts ***!
  \******************************************************/
/*! exports provided: TeacherJournalsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherJournalsService", function() { return TeacherJournalsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _models_journalData_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/journalData.model */ "./src/app/models/journalData.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TeacherJournalsService = /** @class */ (function () {
    function TeacherJournalsService(http) {
        this.http = http;
        this.journalChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.markSelected = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.allJournals = '/journals';
        this.activeJournal = '/active';
    }
    TeacherJournalsService.prototype.emitJournalChanged = function (journal) {
        this.journalChanged.next(journal);
    };
    TeacherJournalsService.prototype.markSelect = function (mark) {
        this.markSelected.next(mark);
    };
    TeacherJournalsService.prototype.homeTaskUrl = function (idSubject, idClass) {
        return '/homeworks/subjects/' + idSubject + '/classes/' + idClass;
    };
    TeacherJournalsService.prototype.homeTaskFileUrl = function (idLesson) {
        return '/homeworks/files/' + idLesson;
    };
    TeacherJournalsService.prototype.urlForTeacher = function (teacherId, isActive) {
        if (teacherId > 0) {
            if (isActive) {
                return this.allJournals + '/teachers/' + teacherId + this.activeJournal;
            }
            else {
                return this.allJournals + '/teachers/' + teacherId;
            }
        }
        else {
            return this.allJournals; // all journals for current user/teacher
        }
    };
    TeacherJournalsService.prototype.urlJournalSubject = function (idSubject, idClass) {
        if (idSubject + idClass > 1) {
            return this.allJournals + '/subjects/' + idSubject + '/classes/' + idClass;
        }
        else {
            return;
        }
    };
    TeacherJournalsService.prototype.getJournalsTeacher = function (id, isActive) {
        var url = this.urlForTeacher(id, isActive);
        var observerResponse = this.http.get(url)
            .map(function (response) {
            return response.data;
        })
            .catch(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        });
        return observerResponse;
    };
    TeacherJournalsService.prototype.getHomeworks = function (idSubject, idClass) {
        return this.http.get(this.homeTaskUrl(idSubject, idClass))
            .map(function (response) {
            return response.data;
        }).catch(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        });
    };
    TeacherJournalsService.prototype.getHomeTaskFile = function (idLesson) {
        return this.http.get(this.homeTaskFileUrl(idLesson))
            .map(function (response) {
            return response.data;
        }).catch(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        });
    };
    TeacherJournalsService.prototype.putHomeTaskFile = function (homeTaskFile) {
        return this.http.put('/homeworks/files', homeTaskFile)
            .map(function (response) {
            return response.status;
        }).catch(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        });
    };
    TeacherJournalsService.prototype.getjournals = function (idSubject, idClass) {
        return this.http.get(this.urlJournalSubject(idSubject, idClass))
            .map(function (response) {
            return response.data;
        })
            .catch(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        });
    };
    TeacherJournalsService.prototype.getPreparedMonths = function (journal) {
        var res = [];
        if (journal) {
            var markDates = [];
            for (var studentIndex = 0; studentIndex < journal.length; studentIndex++) {
                for (var markIndex = 0; markIndex < journal[studentIndex].marks.length; markIndex++) {
                    var markObject = journal[studentIndex].marks[markIndex];
                    var month = this.getMonths(markObject.dateMark, '.');
                    if (markDates.indexOf(month) >= 0) {
                        continue;
                    }
                    else {
                        markDates.push(month);
                        var formatedDate = markObject.dateMark;
                        var formatedMonth = formatedDate.slice(0, formatedDate.lastIndexOf('.'));
                        var monthElement = { label: month, value: formatedMonth };
                        res.push(monthElement);
                    }
                }
            }
            return res;
        }
        else {
            return [];
        }
    };
    TeacherJournalsService.prototype.getMonths = function (date, separator) {
        var months = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень',
            'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'];
        var res = date.split(separator);
        if (res[1]) {
            return months[(+res[1] - 1)] + ' ' + res[0];
        }
        return;
    };
    TeacherJournalsService.prototype.getExistingJournalMonths = function (month, journalsData) {
        var isThisMonth = function (element, index, array) {
            return (element.dateMark.indexOf(month) === 0);
        };
        for (var studentIndex = 0; studentIndex < journalsData.length; studentIndex++) {
            var marks = journalsData[studentIndex].marks;
            var marksFiltered = marks.filter(isThisMonth);
        }
        var filteredData = journalsData.map(function (student) {
            var filteredStudent = new _models_journalData_model__WEBPACK_IMPORTED_MODULE_3__["JournalData"](student.idStudent, student.marks.filter(isThisMonth), student.studentFullName);
            return filteredStudent;
        });
        return filteredData;
    };
    TeacherJournalsService.prototype.sendMark = function (mark, studentID) {
        var data = {
            idLesson: mark.idLesson,
            idMark: 0,
            idStudent: studentID,
            mark: mark.mark,
            note: mark.note
        };
        return this.http.post('/marks', data).map(function (response) { return response.status; });
    };
    TeacherJournalsService.prototype.b64toBlobUrl = function (b64Data, contentType, sliceSize) {
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
    TeacherJournalsService.prototype.getHomeTaskFileUrl = function (fileData, fileType) {
        var fileUrl = this.b64toBlobUrl(fileData, fileType);
        return fileUrl;
    };
    TeacherJournalsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TeacherJournalsService);
    return TeacherJournalsService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map