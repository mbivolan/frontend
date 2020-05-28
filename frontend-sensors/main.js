(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n  <div>\n    <span class=\"font-weight-bold\"> Sensors </span>\n    <div class=\"sensors-wrapper\">\n      <div *ngFor=\"let sensor of sensorsResponseModel.sensors\">\n        <app-sensor-status [sensor]=\"sensor\">\n        </app-sensor-status>\n      </div>\n    </div>\n  </div>\n\n  <div>\n    <span class=\"font-weight-bold\"> Pumps </span>\n    <div class=\"sensors-wrapper\">\n      <div *ngFor=\"let pump of sensorsResponseModel.pumps\">\n        <app-sensor-status [sensor]=\"pump\">\n        </app-sensor-status>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"watter-tank-container\">\n    <app-watter-tank [watterLevel]=\"sensorsResponseModel.level\">\n    </app-watter-tank>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-wrapper {\n  padding: 10px; }\n\n.sensors-wrapper {\n  padding-left: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9EZXNrdG9wL3BlcnNvbmFsL2Zyb250ZW5kIHNlbnNvcnMvZnJvbnRlbmQvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhLEVBQUE7O0FBR2Y7RUFDRSxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50LXdyYXBwZXIge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uc2Vuc29ycy13cmFwcGVyIHtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG4iXX0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_sensors_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/sensors.service */ "./src/services/sensors.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(sensorsService) {
        var _this = this;
        this.sensorsService = sensorsService;
        sensorsService.getSensors().subscribe(function (sensorsResponse) {
            _this.sensorsResponseModel = sensorsResponse;
        });
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_sensors_service__WEBPACK_IMPORTED_MODULE_2__["SensorsService"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _sensor_status_sensor_status_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sensor-status/sensor-status.component */ "./src/app/sensor-status/sensor-status.component.ts");
/* harmony import */ var _services_sensors_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/sensors.service */ "./src/services/sensors.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _watter_tank_watter_tank_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./watter-tank/watter-tank.component */ "./src/app/watter-tank/watter-tank.component.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _sensor_status_sensor_status_component__WEBPACK_IMPORTED_MODULE_4__["SensorStatusComponent"],
                _watter_tank_watter_tank_component__WEBPACK_IMPORTED_MODULE_7__["WatterTankComponent"]
            ],
            providers: [
                _services_sensors_service__WEBPACK_IMPORTED_MODULE_5__["SensorsService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/sensor-status/sensor-status.component.html":
/*!************************************************************!*\
  !*** ./src/app/sensor-status/sensor-status.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span>{{sensor.name}}:</span>\n<div class=\"d-inline-block ml-1\"\n     [ngClass]=\"sensor.active ? 'green-bullet' : 'red-bullet'\">\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/sensor-status/sensor-status.component.scss":
/*!************************************************************!*\
  !*** ./src/app/sensor-status/sensor-status.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".circle, .green-bullet, .red-bullet {\n  background: white;\n  width: 13px;\n  height: 13px;\n  border-radius: 50%;\n  box-shadow: inset -1px -1px 1px 1px rgba(1, 1, 1, 0.2); }\n\n.green-bullet {\n  background-color: #00e676; }\n\n.red-bullet {\n  background-color: #ff1744; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9EZXNrdG9wL3BlcnNvbmFsL2Zyb250ZW5kIHNlbnNvcnMvZnJvbnRlbmQvc3JjL2FwcC9zZW5zb3Itc3RhdHVzL3NlbnNvci1zdGF0dXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsc0RBQXNELEVBQUE7O0FBR3hEO0VBRUUseUJBQXlCLEVBQUE7O0FBRzNCO0VBRUUseUJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zZW5zb3Itc3RhdHVzL3NlbnNvci1zdGF0dXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2lyY2xlIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHdpZHRoOiAxM3B4O1xuICBoZWlnaHQ6IDEzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAtMXB4IDFweCAxcHggcmdiYSgxLCAxLCAxLCAwLjIpO1xufVxuXG4uZ3JlZW4tYnVsbGV0IHtcbiAgQGV4dGVuZCAuY2lyY2xlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBlNjc2O1xufVxuXG4ucmVkLWJ1bGxldCB7XG4gIEBleHRlbmQgLmNpcmNsZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMTc0NDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/sensor-status/sensor-status.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/sensor-status/sensor-status.component.ts ***!
  \**********************************************************/
/*! exports provided: SensorStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SensorStatusComponent", function() { return SensorStatusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_sensor_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/sensor.model */ "./src/models/sensor.model.ts");



var SensorStatusComponent = /** @class */ (function () {
    function SensorStatusComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_sensor_model__WEBPACK_IMPORTED_MODULE_2__["SensorModel"])
    ], SensorStatusComponent.prototype, "sensor", void 0);
    SensorStatusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sensor-status',
            template: __webpack_require__(/*! ./sensor-status.component.html */ "./src/app/sensor-status/sensor-status.component.html"),
            styles: [__webpack_require__(/*! ./sensor-status.component.scss */ "./src/app/sensor-status/sensor-status.component.scss")]
        })
    ], SensorStatusComponent);
    return SensorStatusComponent;
}());



/***/ }),

/***/ "./src/app/watter-tank/watter-tank.component.css":
/*!*******************************************************!*\
  !*** ./src/app/watter-tank/watter-tank.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".watter-lever-container {\n  height: 400px;\n  width: 500px;\n  border: 1px solid black;\n  transform: rotateX(180deg);\n}\n\n.watter-level {\n  bottom: 0px;\n  width: 100%;\n  background-color: aqua;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2F0dGVyLXRhbmsvd2F0dGVyLXRhbmsuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsc0JBQXNCO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvd2F0dGVyLXRhbmsvd2F0dGVyLXRhbmsuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53YXR0ZXItbGV2ZXItY29udGFpbmVyIHtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgd2lkdGg6IDUwMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZyk7XG59XG5cbi53YXR0ZXItbGV2ZWwge1xuICBib3R0b206IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/watter-tank/watter-tank.component.html":
/*!********************************************************!*\
  !*** ./src/app/watter-tank/watter-tank.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"watter-lever-container\">\n  <div class=\"watter-level\" [style.height.%]=\"watterLevel\">\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/watter-tank/watter-tank.component.ts":
/*!******************************************************!*\
  !*** ./src/app/watter-tank/watter-tank.component.ts ***!
  \******************************************************/
/*! exports provided: WatterTankComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WatterTankComponent", function() { return WatterTankComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WatterTankComponent = /** @class */ (function () {
    function WatterTankComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], WatterTankComponent.prototype, "watterLevel", void 0);
    WatterTankComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-watter-tank',
            template: __webpack_require__(/*! ./watter-tank.component.html */ "./src/app/watter-tank/watter-tank.component.html"),
            styles: [__webpack_require__(/*! ./watter-tank.component.css */ "./src/app/watter-tank/watter-tank.component.css")]
        })
    ], WatterTankComponent);
    return WatterTankComponent;
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




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/models/sensor.model.ts":
/*!************************************!*\
  !*** ./src/models/sensor.model.ts ***!
  \************************************/
/*! exports provided: SensorModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SensorModel", function() { return SensorModel; });
var SensorModel = /** @class */ (function () {
    function SensorModel() {
    }
    return SensorModel;
}());



/***/ }),

/***/ "./src/services/sensors.service.ts":
/*!*****************************************!*\
  !*** ./src/services/sensors.service.ts ***!
  \*****************************************/
/*! exports provided: SensorsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SensorsService", function() { return SensorsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var SensorsService = /** @class */ (function () {
    function SensorsService(httpClient) {
        this.httpClient = httpClient;
    }
    SensorsService.prototype.getSensors = function () {
        var url = 'http://172.20.1.1:5000/getdata';
        return this.httpClient.get(url);
    };
    SensorsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SensorsService);
    return SensorsService;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/admin/Desktop/personal/frontend sensors/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map