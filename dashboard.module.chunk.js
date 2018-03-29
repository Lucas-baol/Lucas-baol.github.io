webpackJsonp(["dashboard.module"],{

/***/ "../../../../../src/app/layout/dashboard/dashboard-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_component__ = __webpack_require__("../../../../../src/app/layout/dashboard/dashboard.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_2__dashboard_component__["a" /* DashboardComponent */]
    }
];
var DashboardRoutingModule = (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".map-container {\r\n    width: 300px;height: 400px;overflow: hidden;margin:0;font-family:\"\\5FAE\\8F6F\\96C5\\9ED1\";\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  dashboard works!\n</p>\n<div class=\"card mb-3\">\n  <div class=\"card-header\">示例</div>\n  <div class=\"card-body\">\n      <textarea highlight-js>&lt;abm-map #map [options]=\"options\" (ready)=\"onReady($event)\" style=\"height: 300px;\"></abm-map></textarea>\n      <abm-map #map [options]=\"options\" (ready)=\"onReady($event)\" style=\"height: 300px;\"></abm-map>\n      <p>{{status}}</p>\n      <h5 style=\"border-bottom:1px solid #eee;\" class=\"mt-3 mb-3 pb-3\">操作</h5>\n      <div class=\"mb-3\">\n          <button type=\"button\" (click)=\"panTo()\" class=\"btn btn-primary btn-sm\">改变地图中心</button>\n          <button type=\"button\" (click)=\"zoom()\" class=\"btn btn-primary btn-sm\">自动放大缩小</button>\n      </div>\n      <div class=\"mb-3\">\n          <button type=\"button\" (click)=\"infoWindow()\" class=\"btn btn-primary btn-sm\">添加信息窗口</button>\n      </div>\n  </div>\n</div>\n<div class=\"card mb-3\">\n  <div class=\"card-header\">卫星地图</div>\n  <div class=\"card-body\">\n      <abm-map [options]=\"satelliteOptions\" (ready)=\"onReadySatellite($event)\" style=\"height: 300px;\"></abm-map>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/layout/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_baidu_maps__ = __webpack_require__("../../../../angular-baidu-maps/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/* tslint:disable */


var DashboardComponent = (function () {
    function DashboardComponent(el, zone) {
        this.el = el;
        this.zone = zone;
        this.options = {};
        this.status = '';
    }
    DashboardComponent.prototype.onReady = function (map) {
        var _this = this;
        this._map = map;
        map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
        map.addControl(new BMap.MapTypeControl());
        map.setCurrentCity("北京");
        map.enableScrollWheelZoom(true);
        this.status = '加载完成';
        //添加监听事件
        map.addEventListener('tilesloaded', function () {
            _this.status = '地图加载完毕';
        });
        map.addEventListener('click', this._click.bind(this));
    };
    DashboardComponent.prototype._click = function (e) {
        this.status = e.point.lng + ", " + e.point.lat + ", " + +new Date;
    };
    DashboardComponent.prototype.panTo = function () {
        this._map.panTo(new BMap.Point(116.404, 39.715));
    };
    DashboardComponent.prototype.zoom = function () {
        this._map.setZoom((this._map.getZoom() + 1) % 17);
    };
    DashboardComponent.prototype.infoWindow = function () {
        var infoWin = new BMap.InfoWindow("地址：北京市东城区王府井大街88号乐天银泰百货八层", {
            width: 200,
            height: 100,
            title: "海底捞王府井店",
            enableMessage: true,
            message: "亲耐滴，晚上一起吃个饭吧？戳下面的链接看下地址喔~"
        });
        this._map.openInfoWindow(infoWin, this._map.getCenter());
    };
    DashboardComponent.prototype.onReadySatellite = function (map) {
        map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
        map.setMapType(BMAP_SATELLITE_MAP);
        this.mapSatellite = map;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_angular_baidu_maps__["a" /* AbmComponent */])
    ], DashboardComponent.prototype, "mapComp", void 0);
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/layout/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/dashboard/dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_baidu_maps__ = __webpack_require__("../../../../angular-baidu-maps/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_component__ = __webpack_require__("../../../../../src/app/layout/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_routing_module__ = __webpack_require__("../../../../../src/app/layout/dashboard/dashboard-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var DashboardModule = (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbCarouselModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbAlertModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5__dashboard_routing_module__["a" /* DashboardRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3_angular_baidu_maps__["b" /* AbmModule */].forRoot({
                    apiKey: 'FzyTMkgeqZnaWGONyebO5XnGMUiz6R9Q' // app key为必选项
                })
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__dashboard_component__["a" /* DashboardComponent */],
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "../../../../angular-baidu-maps/core/abm-panorama.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbmPanoramaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loader_service__ = __webpack_require__("../../../../angular-baidu-maps/core/loader.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__abm_config__ = __webpack_require__("../../../../angular-baidu-maps/core/abm.config.js");



var AbmPanoramaComponent = (function () {
    function AbmPanoramaComponent(el, COG, loader, zone) {
        this.el = el;
        this.COG = COG;
        this.loader = loader;
        this.zone = zone;
        this.options = {};
        this.ready = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.map = null;
    }
    AbmPanoramaComponent.prototype.ngOnInit = function () {
        this._initMap();
    };
    AbmPanoramaComponent.prototype.ngOnChanges = function (changes) {
        if ('options' in changes)
            this._updateOptions();
    };
    AbmPanoramaComponent.prototype._initMap = function () {
        var _this = this;
        if (this.map)
            return;
        this.loader.load().then(function () {
            _this.zone.runOutsideAngular(function () {
                try {
                    _this.map = new BMap.Panorama(_this.el.nativeElement, _this.options);
                }
                catch (ex) {
                    console.warn('全景初始化失败', ex);
                }
            });
            _this.ready.emit(_this.map);
        }).catch(function (error) {
            console.warn('js加载失败', error);
        });
    };
    AbmPanoramaComponent.prototype._updateOptions = function () {
        this.options = Object.assign({}, this.COG.panoramaOptions, this.options);
        if (this.map) {
            this.map.setOptions(this.options);
        }
    };
    AbmPanoramaComponent.prototype.destroy = function () {
    };
    AbmPanoramaComponent.prototype.ngOnDestroy = function () {
        this.destroy();
    };
    AbmPanoramaComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                    selector: 'abm-panorama',
                    template: "",
                    styles: ["\n        .angular-baidu-maps-container { display:block; width:100%; height:100%; }\n    "],
                    host: {
                        '[class.angular-baidu-maps-container]': 'true'
                    },
                    encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewEncapsulation */].None
                },] },
    ];
    /** @nocollapse */
    AbmPanoramaComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], },
        { type: __WEBPACK_IMPORTED_MODULE_2__abm_config__["a" /* AbmConfig */], },
        { type: __WEBPACK_IMPORTED_MODULE_1__loader_service__["a" /* LoaderService */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */], },
    ]; };
    AbmPanoramaComponent.propDecorators = {
        "options": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        "ready": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */] },],
    };
    return AbmPanoramaComponent;
}());

//# sourceMappingURL=abm-panorama.component.js.map

/***/ }),

/***/ "../../../../angular-baidu-maps/core/abm.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbmComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loader_service__ = __webpack_require__("../../../../angular-baidu-maps/core/loader.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__abm_config__ = __webpack_require__("../../../../angular-baidu-maps/core/abm.config.js");



var AbmComponent = (function () {
    function AbmComponent(el, COG, loader, zone) {
        this.el = el;
        this.COG = COG;
        this.loader = loader;
        this.zone = zone;
        this.options = {};
        this.ready = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.map = null;
    }
    AbmComponent.prototype.ngOnInit = function () {
        this._initMap();
    };
    AbmComponent.prototype.ngOnChanges = function (changes) {
        if ('options' in changes)
            this._updateOptions();
    };
    AbmComponent.prototype._initMap = function () {
        var _this = this;
        if (this.map)
            return;
        this.loader.load().then(function () {
            _this.zone.runOutsideAngular(function () {
                try {
                    _this.map = new BMap.Map(_this.el.nativeElement, _this.options);
                }
                catch (ex) {
                    console.warn('地图初始化失败', ex);
                }
            });
            _this.ready.emit(_this.map);
        }).catch(function (error) {
            console.warn('js加载失败', error);
        });
    };
    AbmComponent.prototype._updateOptions = function () {
        this.options = Object.assign({}, this.COG.mapOptions, this.options);
        if (this.map) {
            this.map.setOptions(this.options);
        }
    };
    AbmComponent.prototype.destroy = function () {
        if (this.map) {
            this.map.clearOverlays();
            this.map.clearHotspots();
        }
    };
    AbmComponent.prototype.ngOnDestroy = function () {
        this.destroy();
    };
    AbmComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                    selector: 'abm-map',
                    template: "",
                    styles: ["\n        .angular-baidu-maps-container { display:block; width:100%; height:100%; }\n    "],
                    host: {
                        '[class.angular-baidu-maps-container]': 'true'
                    },
                    encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewEncapsulation */].None
                },] },
    ];
    /** @nocollapse */
    AbmComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], },
        { type: __WEBPACK_IMPORTED_MODULE_2__abm_config__["a" /* AbmConfig */], },
        { type: __WEBPACK_IMPORTED_MODULE_1__loader_service__["a" /* LoaderService */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */], },
    ]; };
    AbmComponent.propDecorators = {
        "options": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        "ready": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */] },],
    };
    return AbmComponent;
}());

//# sourceMappingURL=abm.component.js.map

/***/ }),

/***/ "../../../../angular-baidu-maps/core/abm.config.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbmConfig; });
var AbmConfig = (function () {
    function AbmConfig() {
    }
    return AbmConfig;
}());

//# sourceMappingURL=abm.config.js.map

/***/ }),

/***/ "../../../../angular-baidu-maps/core/loader.service.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__abm_config__ = __webpack_require__("../../../../angular-baidu-maps/core/abm.config.js");


var LoaderService = (function () {
    function LoaderService(cog) {
        this._cog = Object.assign({
            apiProtocol: 'auto',
            apiVersion: '2.0',
            apiCallback: 'angularBaiduMapsLoader',
            apiHostAndPath: 'api.map.baidu.com/api'
        }, cog);
    }
    LoaderService.prototype.load = function () {
        var _this = this;
        if (this._scriptLoadingPromise) {
            return this._scriptLoadingPromise;
        }
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.defer = true;
        script.src = this._getSrc();
        this._scriptLoadingPromise = new Promise(function (resolve, reject) {
            window[_this._cog.apiCallback] = function () { resolve(); };
            script.onerror = function (error) { reject(error); };
        });
        document.body.appendChild(script);
        return this._scriptLoadingPromise;
    };
    LoaderService.prototype._getSrc = function () {
        var protocol;
        switch (this._cog.apiProtocol) {
            case 'http':
                protocol = 'http:';
                break;
            case 'https':
                protocol = 'https:';
                break;
            default:
                protocol = '';
                break;
        }
        var queryParams = {
            v: this._cog.apiVersion,
            ak: this._cog.apiKey,
            callback: this._cog.apiCallback
        };
        var params = Object.keys(queryParams)
            .filter(function (k) { return queryParams[k] != null; })
            .filter(function (k) {
            return !Array.isArray(queryParams[k]) || (Array.isArray(queryParams[k]) && queryParams[k].length > 0);
        })
            .map(function (k) {
            var i = queryParams[k];
            if (Array.isArray(i))
                return { key: k, value: i.join(',') };
            return { key: k, value: i };
        })
            .map(function (entry) { return entry.key + "=" + entry.value; })
            .join('&');
        return protocol + "//" + this._cog.apiHostAndPath + "?" + params;
    };
    LoaderService.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */] },
    ];
    /** @nocollapse */
    LoaderService.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__abm_config__["a" /* AbmConfig */], },
    ]; };
    return LoaderService;
}());

//# sourceMappingURL=loader.service.js.map

/***/ }),

/***/ "../../../../angular-baidu-maps/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AbmModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_abm_component__ = __webpack_require__("../../../../angular-baidu-maps/core/abm.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_abm_panorama_component__ = __webpack_require__("../../../../angular-baidu-maps/core/abm-panorama.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_abm_config__ = __webpack_require__("../../../../angular-baidu-maps/core/abm.config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_loader_service__ = __webpack_require__("../../../../angular-baidu-maps/core/loader.service.js");
/* unused harmony reexport AbmConfig */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__core_abm_component__["a"]; });
/* unused harmony reexport AbmPanoramaComponent */









var AbmModule = (function () {
    function AbmModule() {
    }
    AbmModule.forRoot = function (config) {
        return {
            ngModule: AbmModule,
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_4__core_abm_config__["a" /* AbmConfig */], useValue: config }
            ]
        };
    };
    AbmModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */]],
                    providers: [__WEBPACK_IMPORTED_MODULE_5__core_loader_service__["a" /* LoaderService */]],
                    declarations: [__WEBPACK_IMPORTED_MODULE_2__core_abm_component__["a" /* AbmComponent */], __WEBPACK_IMPORTED_MODULE_3__core_abm_panorama_component__["a" /* AbmPanoramaComponent */]],
                    exports: [__WEBPACK_IMPORTED_MODULE_2__core_abm_component__["a" /* AbmComponent */], __WEBPACK_IMPORTED_MODULE_3__core_abm_panorama_component__["a" /* AbmPanoramaComponent */]]
                },] },
    ];
    /** @nocollapse */
    AbmModule.ctorParameters = function () { return []; };
    return AbmModule;
}());

//# sourceMappingURL=index.js.map

/***/ })

});
//# sourceMappingURL=dashboard.module.chunk.js.map