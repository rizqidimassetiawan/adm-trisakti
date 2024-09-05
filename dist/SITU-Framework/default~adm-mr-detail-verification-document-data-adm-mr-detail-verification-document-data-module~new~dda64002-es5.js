function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~adm-mr-detail-verification-document-data-adm-mr-detail-verification-document-data-module~new~dda64002"], {
  /***/
  "./node_modules/angular-datatables/index.js":
  /*!**************************************************!*\
    !*** ./node_modules/angular-datatables/index.js ***!
    \**************************************************/

  /*! exports provided: DataTableDirective, DataTablesModule */

  /***/
  function node_modulesAngularDatatablesIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _src_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./src/angular-datatables.directive */
    "./node_modules/angular-datatables/src/angular-datatables.directive.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DataTableDirective", function () {
      return _src_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_0__["DataTableDirective"];
    });
    /* harmony import */


    var _src_angular_datatables_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./src/angular-datatables.module */
    "./node_modules/angular-datatables/src/angular-datatables.module.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DataTablesModule", function () {
      return _src_angular_datatables_module__WEBPACK_IMPORTED_MODULE_1__["DataTablesModule"];
    });
    /**
     * @license
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
     */

    /**
     * @module
     * @description
     * Entry point from which you should import all public library APIs.
     */
    //# sourceMappingURL=index.js.map

    /***/

  },

  /***/
  "./node_modules/angular-datatables/src/angular-datatables.directive.js":
  /*!*****************************************************************************!*\
    !*** ./node_modules/angular-datatables/src/angular-datatables.directive.js ***!
    \*****************************************************************************/

  /*! exports provided: DataTableDirective */

  /***/
  function node_modulesAngularDatatablesSrcAngularDatatablesDirectiveJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataTableDirective", function () {
      return DataTableDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /**
     * @license
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
     */


    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var DataTableDirective =
    /** @class */
    function () {
      function DataTableDirective(el) {
        this.el = el;
        /**
         * The DataTable option you pass to configure your table.
         */

        this.dtOptions = {};
      }

      DataTableDirective.prototype.ngOnInit = function () {
        var _this = this;

        if (this.dtTrigger) {
          this.dtTrigger.subscribe(function () {
            _this.displayTable();
          });
        } else {
          this.displayTable();
        }
      };

      DataTableDirective.prototype.ngOnDestroy = function () {
        if (this.dtTrigger) {
          this.dtTrigger.unsubscribe();
        }

        if (this.dt) {
          this.dt.destroy(true);
        }
      };

      DataTableDirective.prototype.displayTable = function () {
        var _this = this;

        this.dtInstance = new Promise(function (resolve, reject) {
          Promise.resolve(_this.dtOptions).then(function (dtOptions) {
            // Using setTimeout as a "hack" to be "part" of NgZone
            setTimeout(function () {
              _this.dt = $(_this.el.nativeElement).DataTable(dtOptions);
              resolve(_this.dt);
            });
          });
        });
      };

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Object)], DataTableDirective.prototype, "dtOptions", void 0);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"])], DataTableDirective.prototype, "dtTrigger", void 0);

      DataTableDirective = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
        selector: '[datatable]'
      }), __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])], DataTableDirective);
      return DataTableDirective;
    }(); //# sourceMappingURL=angular-datatables.directive.js.map

    /***/

  },

  /***/
  "./node_modules/angular-datatables/src/angular-datatables.module.js":
  /*!**************************************************************************!*\
    !*** ./node_modules/angular-datatables/src/angular-datatables.module.js ***!
    \**************************************************************************/

  /*! exports provided: DataTablesModule */

  /***/
  function node_modulesAngularDatatablesSrcAngularDatatablesModuleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataTablesModule", function () {
      return DataTablesModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./angular-datatables.directive */
    "./node_modules/angular-datatables/src/angular-datatables.directive.js");
    /**
     * @license
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
     */


    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var DataTablesModule =
    /** @class */
    function () {
      function DataTablesModule() {}

      DataTablesModule_1 = DataTablesModule;

      DataTablesModule.forRoot = function () {
        return {
          ngModule: DataTablesModule_1
        };
      };

      var DataTablesModule_1;
      DataTablesModule = DataTablesModule_1 = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        declarations: [_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]],
        exports: [_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]]
      })], DataTablesModule);
      return DataTablesModule;
    }(); //# sourceMappingURL=angular-datatables.module.js.map

    /***/

  },

  /***/
  "./node_modules/angular-dual-listbox/fesm2015/angular-dual-listbox.js":
  /*!****************************************************************************!*\
    !*** ./node_modules/angular-dual-listbox/fesm2015/angular-dual-listbox.js ***!
    \****************************************************************************/

  /*! exports provided: AngularDualListBoxModule, BasicList, DualListComponent */

  /***/
  function node_modulesAngularDualListboxFesm2015AngularDualListboxJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AngularDualListBoxModule", function () {
      return AngularDualListBoxModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicList", function () {
      return BasicList;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DualListComponent", function () {
      return DualListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var BasicList =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} name
       */
      function BasicList(name) {
        _classCallCheck(this, BasicList);

        this._name = name;
        this.last = null;
        this.picker = '';
        this.dragStart = false;
        this.dragOver = false; // Arrays will contain objects of { _id, _name }.

        this.pick = [];
        this.list = [];
        this.sift = [];
      }
      /**
       * @return {?}
       */


      _createClass(BasicList, [{
        key: "name",
        get: function get() {
          return this._name;
        }
      }]);

      return BasicList;
    }();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var nextId = 0;

    var DualListComponent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} differs
       */
      function DualListComponent(differs) {
        _classCallCheck(this, DualListComponent);

        this.differs = differs;
        this.id = "dual-list-".concat(nextId++);
        this.key = '_id';
        this.display = '_name';
        this.height = '100px';
        this.filter = false;
        this.format = DualListComponent.DEFAULT_FORMAT;
        this.sort = false;
        this.disabled = false;
        this.destinationChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();

        this.sorter =
        /**
        * @param {?} a
        * @param {?} b
        * @return {?}
        */
        function (a, b) {
          return a._name < b._name ? -1 : a._name > b._name ? 1 : 0;
        };

        this.available = new BasicList(DualListComponent.AVAILABLE_LIST_NAME);
        this.confirmed = new BasicList(DualListComponent.CONFIRMED_LIST_NAME);
      }
      /**
       * @param {?} changeRecord
       * @return {?}
       */


      _createClass(DualListComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changeRecord) {
          if (changeRecord['filter']) {
            if (changeRecord['filter'].currentValue === false) {
              this.clearFilter(this.available);
              this.clearFilter(this.confirmed);
            }
          }

          if (changeRecord['sort']) {
            if (changeRecord['sort'].currentValue === true && this.compare === undefined) {
              this.compare = this.sorter;
            } else if (changeRecord['sort'].currentValue === false) {
              this.compare = undefined;
            }
          }

          if (changeRecord['format']) {
            this.format = changeRecord['format'].currentValue;

            if (typeof this.format.direction === 'undefined') {
              this.format.direction = DualListComponent.LTR;
            }

            if (typeof this.format.add === 'undefined') {
              this.format.add = DualListComponent.DEFAULT_FORMAT.add;
            }

            if (typeof this.format.remove === 'undefined') {
              this.format.remove = DualListComponent.DEFAULT_FORMAT.remove;
            }

            if (typeof this.format.all === 'undefined') {
              this.format.all = DualListComponent.DEFAULT_FORMAT.all;
            }

            if (typeof this.format.none === 'undefined') {
              this.format.none = DualListComponent.DEFAULT_FORMAT.none;
            }

            if (typeof this.format.draggable === 'undefined') {
              this.format.draggable = DualListComponent.DEFAULT_FORMAT.draggable;
            }
          }

          if (changeRecord['source']) {
            this.available = new BasicList(DualListComponent.AVAILABLE_LIST_NAME);
            this.updatedSource();
            this.updatedDestination();
          }

          if (changeRecord['destination']) {
            this.confirmed = new BasicList(DualListComponent.CONFIRMED_LIST_NAME);
            this.updatedDestination();
            this.updatedSource();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          if (this.source && this.buildAvailable(this.source)) {
            this.onFilter(this.available);
          }

          if (this.destination && this.buildConfirmed(this.destination)) {
            this.onFilter(this.confirmed);
          }
        }
        /**
         * @param {?} source
         * @return {?}
         */

      }, {
        key: "buildAvailable",
        value: function buildAvailable(source) {
          var _this2 = this;

          /** @type {?} */
          var sourceChanges = this.sourceDiffer.diff(source);

          if (sourceChanges) {
            sourceChanges.forEachRemovedItem(
            /**
            * @param {?} r
            * @return {?}
            */
            function (r) {
              /** @type {?} */
              var idx = _this2.findItemIndex(_this2.available.list, r.item, _this2.key);

              if (idx !== -1) {
                _this2.available.list.splice(idx, 1);
              }
            });
            sourceChanges.forEachAddedItem(
            /**
            * @param {?} r
            * @return {?}
            */
            function (r) {
              // Do not add duplicates even if source has duplicates.
              if (_this2.findItemIndex(_this2.available.list, r.item, _this2.key) === -1) {
                _this2.available.list.push({
                  _id: _this2.makeId(r.item),
                  _name: _this2.makeName(r.item)
                });
              }
            });

            if (this.compare !== undefined) {
              this.available.list.sort(this.compare);
            }

            this.available.sift = this.available.list;
            return true;
          }

          return false;
        }
        /**
         * @param {?} destination
         * @return {?}
         */

      }, {
        key: "buildConfirmed",
        value: function buildConfirmed(destination) {
          var _this3 = this;

          /** @type {?} */
          var moved = false;
          /** @type {?} */

          var destChanges = this.destinationDiffer.diff(destination);

          if (destChanges) {
            destChanges.forEachRemovedItem(
            /**
            * @param {?} r
            * @return {?}
            */
            function (r) {
              /** @type {?} */
              var idx = _this3.findItemIndex(_this3.confirmed.list, r.item, _this3.key);

              if (idx !== -1) {
                if (!_this3.isItemSelected(_this3.confirmed.pick, _this3.confirmed.list[idx])) {
                  _this3.selectItem(_this3.confirmed.pick, _this3.confirmed.list[idx]);
                }

                _this3.moveItem(_this3.confirmed, _this3.available, _this3.confirmed.list[idx], false);

                moved = true;
              }
            });
            destChanges.forEachAddedItem(
            /**
            * @param {?} r
            * @return {?}
            */
            function (r) {
              /** @type {?} */
              var idx = _this3.findItemIndex(_this3.available.list, r.item, _this3.key);

              if (idx !== -1) {
                if (!_this3.isItemSelected(_this3.available.pick, _this3.available.list[idx])) {
                  _this3.selectItem(_this3.available.pick, _this3.available.list[idx]);
                }

                _this3.moveItem(_this3.available, _this3.confirmed, _this3.available.list[idx], false);

                moved = true;
              }
            });

            if (this.compare !== undefined) {
              this.confirmed.list.sort(this.compare);
            }

            this.confirmed.sift = this.confirmed.list;

            if (moved) {
              this.trueUp();
            }

            return true;
          }

          return false;
        }
        /**
         * @return {?}
         */

      }, {
        key: "updatedSource",
        value: function updatedSource() {
          this.available.list.length = 0;
          this.available.pick.length = 0;

          if (this.source !== undefined) {
            this.sourceDiffer = this.differs.find(this.source).create(null);
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "updatedDestination",
        value: function updatedDestination() {
          if (this.destination !== undefined) {
            this.destinationDiffer = this.differs.find(this.destination).create(null);
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "direction",
        value: function direction() {
          return this.format.direction === DualListComponent.LTR;
        }
        /**
         * @param {?=} list
         * @return {?}
         */

      }, {
        key: "dragEnd",
        value: function dragEnd() {
          var list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

          if (list) {
            list.dragStart = false;
          } else {
            this.available.dragStart = false;
            this.confirmed.dragStart = false;
          }

          return false;
        }
        /**
         * @param {?} event
         * @param {?} item
         * @param {?} list
         * @return {?}
         */

      }, {
        key: "drag",
        value: function drag(event, item, list) {
          if (!this.isItemSelected(list.pick, item)) {
            this.selectItem(list.pick, item);
          }

          list.dragStart = true; // Set a custom type to be this dual-list's id.

          event.dataTransfer.setData(this.id, item['_id']);
        }
        /**
         * @param {?} event
         * @param {?} list
         * @return {?}
         */

      }, {
        key: "allowDrop",
        value: function allowDrop(event, list) {
          if (event.dataTransfer.types.length && event.dataTransfer.types[0] === this.id) {
            event.preventDefault();

            if (!list.dragStart) {
              list.dragOver = true;
            }
          }

          return false;
        }
        /**
         * @return {?}
         */

      }, {
        key: "dragLeave",
        value: function dragLeave() {
          this.available.dragOver = false;
          this.confirmed.dragOver = false;
        }
        /**
         * @param {?} event
         * @param {?} list
         * @return {?}
         */

      }, {
        key: "drop",
        value: function drop(event, list) {
          if (event.dataTransfer.types.length && event.dataTransfer.types[0] === this.id) {
            event.preventDefault();
            this.dragLeave();
            this.dragEnd();

            if (list === this.available) {
              this.moveItem(this.available, this.confirmed);
            } else {
              this.moveItem(this.confirmed, this.available);
            }
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "trueUp",
        value: function trueUp() {
          var _this4 = this;

          /** @type {?} */
          var changed = false; // Clear removed items.

          /** @type {?} */

          var pos = this.destination.length;

          while ((pos -= 1) >= 0) {
            /** @type {?} */
            var mv = this.confirmed.list.filter(
            /**
            * @param {?} conf
            * @return {?}
            */
            function (conf) {
              if (typeof _this4.destination[pos] === 'object') {
                return conf._id === _this4.destination[pos][_this4.key];
              } else {
                return conf._id === _this4.destination[pos];
              }
            });

            if (mv.length === 0) {
              // Not found so remove.
              this.destination.splice(pos, 1);
              changed = true;
            }
          } // Push added items.


          var _loop = function _loop(i, len) {
            /** @type {?} */
            var mv = _this4.destination.filter(
            /**
            * @param {?} d
            * @return {?}
            */
            function (d) {
              if (typeof d === 'object') {
                return d[_this4.key] === _this4.confirmed.list[i]._id;
              } else {
                return d === _this4.confirmed.list[i]._id;
              }
            });

            if (mv.length === 0) {
              // Not found so add.
              mv = _this4.source.filter(
              /**
              * @param {?} o
              * @return {?}
              */
              function (o) {
                if (typeof o === 'object') {
                  return o[_this4.key] === _this4.confirmed.list[i]._id;
                } else {
                  return o === _this4.confirmed.list[i]._id;
                }
              });

              if (mv.length > 0) {
                _this4.destination.push(mv[0]);

                changed = true;
              }
            }
          };

          for (var i = 0, len = this.confirmed.list.length; i < len; i += 1) {
            _loop(i, len);
          }

          if (changed) {
            this.destinationChange.emit(this.destination);
          }
        }
        /**
         * @param {?} list
         * @param {?} item
         * @param {?=} key
         * @return {?}
         */

      }, {
        key: "findItemIndex",
        value: function findItemIndex(list, item) {
          var key = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '_id';

          /** @type {?} */
          var idx = -1;
          /**
           * @param {?} e
           * @return {?}
           */

          function matchObject(e) {
            if (e._id === item[key]) {
              idx = list.indexOf(e);
              return true;
            }

            return false;
          }
          /**
           * @param {?} e
           * @return {?}
           */


          function match(e) {
            if (e._id === item) {
              idx = list.indexOf(e);
              return true;
            }

            return false;
          } // Assumption is that the arrays do not have duplicates.


          if (typeof item === 'object') {
            list.filter(matchObject);
          } else {
            list.filter(match);
          }

          return idx;
        }
        /**
         * @private
         * @param {?} source
         * @param {?} item
         * @return {?}
         */

      }, {
        key: "makeUnavailable",
        value: function makeUnavailable(source, item) {
          /** @type {?} */
          var idx = source.list.indexOf(item);

          if (idx !== -1) {
            source.list.splice(idx, 1);
          }
        }
        /**
         * @param {?} source
         * @param {?} target
         * @param {?=} item
         * @param {?=} trueup
         * @return {?}
         */

      }, {
        key: "moveItem",
        value: function moveItem(source, target) {
          var _this5 = this;

          var item = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
          var trueup = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

          /** @type {?} */
          var i = 0;
          /** @type {?} */

          var len = source.pick.length;

          if (item) {
            i = source.list.indexOf(item);
            len = i + 1;
          }

          var _loop2 = function _loop2() {
            // Is the pick still in list?

            /** @type {?} */
            var mv = [];

            if (item) {
              /** @type {?} */
              var idx = _this5.findItemIndex(source.pick, item);

              if (idx !== -1) {
                mv[0] = source.pick[idx];
              }
            } else {
              mv = source.list.filter(
              /**
              * @param {?} src
              * @return {?}
              */
              function (src) {
                return src._id === source.pick[i]._id;
              });
            } // Should only ever be 1


            if (mv.length === 1) {
              // Add if not already in target.
              if (target.list.filter(
              /**
              * @param {?} trg
              * @return {?}
              */
              function (trg) {
                return trg._id === mv[0]._id;
              }).length === 0) {
                target.list.push(mv[0]);
              }

              _this5.makeUnavailable(source, mv[0]);
            }
          };

          for (; i < len; i += 1) {
            _loop2();
          }

          if (this.compare !== undefined) {
            target.list.sort(this.compare);
          }

          source.pick.length = 0; // Update destination

          if (trueup) {
            this.trueUp();
          } // Delay ever-so-slightly to prevent race condition.


          setTimeout(
          /**
          * @return {?}
          */
          function () {
            _this5.onFilter(source);

            _this5.onFilter(target);
          }, 10);
        }
        /**
         * @param {?} list
         * @param {?} item
         * @return {?}
         */

      }, {
        key: "isItemSelected",
        value: function isItemSelected(list, item) {
          if (list.filter(
          /**
          * @param {?} e
          * @return {?}
          */
          function (e) {
            return Object.is(e, item);
          }).length > 0) {
            return true;
          }

          return false;
        }
        /**
         * @param {?} event
         * @param {?} index
         * @param {?} source
         * @param {?} item
         * @return {?}
         */

      }, {
        key: "shiftClick",
        value: function shiftClick(event, index, source, item) {
          if (event.shiftKey && source.last && !Object.is(item, source.last)) {
            /** @type {?} */
            var idx = source.sift.indexOf(source.last);

            if (index > idx) {
              for (var i = idx + 1; i < index; i += 1) {
                this.selectItem(source.pick, source.sift[i]);
              }
            } else if (idx !== -1) {
              for (var _i = index + 1; _i < idx; _i += 1) {
                this.selectItem(source.pick, source.sift[_i]);
              }
            }
          }

          source.last = item;
        }
        /**
         * @param {?} list
         * @param {?} item
         * @return {?}
         */

      }, {
        key: "selectItem",
        value: function selectItem(list, item) {
          /** @type {?} */
          var pk = list.filter(
          /**
          * @param {?} e
          * @return {?}
          */
          function (e) {
            return Object.is(e, item);
          });

          if (pk.length > 0) {
            // Already in list, so deselect.
            for (var i = 0, len = pk.length; i < len; i += 1) {
              /** @type {?} */
              var idx = list.indexOf(pk[i]);

              if (idx !== -1) {
                list.splice(idx, 1);
              }
            }
          } else {
            list.push(item);
          }
        }
        /**
         * @param {?} source
         * @return {?}
         */

      }, {
        key: "selectAll",
        value: function selectAll(source) {
          source.pick.length = 0;
          source.pick = source.sift.slice(0);
        }
        /**
         * @param {?} source
         * @return {?}
         */

      }, {
        key: "selectNone",
        value: function selectNone(source) {
          source.pick.length = 0;
        }
        /**
         * @param {?} source
         * @return {?}
         */

      }, {
        key: "isAllSelected",
        value: function isAllSelected(source) {
          if (source.list.length === 0 || source.list.length === source.pick.length) {
            return true;
          }

          return false;
        }
        /**
         * @param {?} source
         * @return {?}
         */

      }, {
        key: "isAnySelected",
        value: function isAnySelected(source) {
          if (source.pick.length > 0) {
            return true;
          }

          return false;
        }
        /**
         * @private
         * @param {?} source
         * @return {?}
         */

      }, {
        key: "unpick",
        value: function unpick(source) {
          for (var i = source.pick.length - 1; i >= 0; i -= 1) {
            if (source.sift.indexOf(source.pick[i]) === -1) {
              source.pick.splice(i, 1);
            }
          }
        }
        /**
         * @param {?} source
         * @return {?}
         */

      }, {
        key: "clearFilter",
        value: function clearFilter(source) {
          if (source) {
            source.picker = '';
            this.onFilter(source);
          }
        }
        /**
         * @param {?} source
         * @return {?}
         */

      }, {
        key: "onFilter",
        value: function onFilter(source) {
          var _this6 = this;

          if (source.picker.length > 0) {
            try {
              /** @type {?} */
              var filtered = source.list.filter(
              /**
              * @param {?} item
              * @return {?}
              */
              function (item) {
                if (Object.prototype.toString.call(item) === '[object Object]') {
                  if (item._name !== undefined) {
                    // @ts-ignore: remove when d.ts has locale as an argument.
                    return item._name.toLocaleLowerCase(_this6.format.locale).indexOf(source.picker.toLocaleLowerCase(_this6.format.locale)) !== -1;
                  } else {
                    // @ts-ignore: remove when d.ts has locale as an argument.
                    return JSON.stringify(item).toLocaleLowerCase(_this6.format.locale).indexOf(source.picker.toLocaleLowerCase(_this6.format.locale)) !== -1;
                  }
                } else {
                  // @ts-ignore: remove when d.ts has locale as an argument.
                  return item.toLocaleLowerCase(_this6.format.locale).indexOf(source.picker.toLocaleLowerCase(_this6.format.locale)) !== -1;
                }
              });
              source.sift = filtered;
              this.unpick(source);
            } catch (e) {
              if (e instanceof RangeError) {
                this.format.locale = undefined;
              }

              source.sift = source.list;
            }
          } else {
            source.sift = source.list;
          }
        }
        /**
         * @private
         * @param {?} item
         * @return {?}
         */

      }, {
        key: "makeId",
        value: function makeId(item) {
          if (typeof item === 'object') {
            return item[this.key];
          } else {
            return item;
          }
        } // Allow for complex names by passing an array of strings.
        // Example: [display]="[ '_type.substring(0,1)', '_name' ]"

        /**
         * @protected
         * @param {?} item
         * @param {?=} separator
         * @return {?}
         */

      }, {
        key: "makeName",
        value: function makeName(item) {
          var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '_';

          /** @type {?} */
          var display = this.display;
          /**
           * @param {?} itm
           * @return {?}
           */

          function fallback(itm) {
            switch (Object.prototype.toString.call(itm)) {
              case '[object Number]':
                return itm;

              case '[object String]':
                return itm;

              default:
                if (itm !== undefined) {
                  return itm[display];
                } else {
                  return 'undefined';
                }

            }
          }
          /** @type {?} */


          var str = '';

          if (this.display !== undefined) {
            switch (Object.prototype.toString.call(this.display)) {
              case '[object Function]':
                str = this.display(item);
                break;

              case '[object Array]':
                for (var i = 0, len = this.display.length; i < len; i += 1) {
                  if (str.length > 0) {
                    str = str + separator;
                  }

                  if (this.display[i].indexOf('.') === -1) {
                    // Simple, just add to string.
                    str = str + item[this.display[i]];
                  } else {
                    // Complex, some action needs to be performed

                    /** @type {?} */
                    var parts = this.display[i].split('.');
                    /** @type {?} */

                    var s = item[parts[0]];

                    if (s) {
                      // Use brute force
                      if (parts[1].indexOf('substring') !== -1) {
                        /** @type {?} */
                        var nums = parts[1].substring(parts[1].indexOf('(') + 1, parts[1].indexOf(')')).split(',');

                        switch (nums.length) {
                          case 1:
                            str = str + s.substring(parseInt(nums[0], 10));
                            break;

                          case 2:
                            str = str + s.substring(parseInt(nums[0], 10), parseInt(nums[1], 10));
                            break;

                          default:
                            str = str + s;
                            break;
                        }
                      } else {
                        // method not approved, so just add s.
                        str = str + s;
                      }
                    }
                  }
                }

                break;

              default:
                str = fallback(item);
                break;
            }
          } else {
            str = fallback(item);
          }

          return str;
        }
      }]);

      return DualListComponent;
    }();

    DualListComponent.AVAILABLE_LIST_NAME = 'available';
    DualListComponent.CONFIRMED_LIST_NAME = 'confirmed';
    DualListComponent.LTR = 'left-to-right';
    DualListComponent.RTL = 'right-to-left';
    DualListComponent.DEFAULT_FORMAT = {
      add: 'Add',
      remove: 'Remove',
      all: 'All',
      none: 'None',
      direction: DualListComponent.LTR,
      draggable: true,
      locale: undefined
    };
    DualListComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'dual-list',
        template: "<div class=\"dual-list\">\n\t<div class=\"listbox\" [ngStyle]=\"{ 'order' :  direction() ? 1 : 2, 'margin-left' : direction() ? 0 : '10px' }\">\n\t\t<button type=\"button\" name=\"addBtn\" class=\"btn btn-primary btn-block\"\n\t\t\t(click)=\"moveItem(available, confirmed)\" [ngClass]=\"direction() ? 'point-right' : 'point-left'\"\n\t\t\t[disabled]=\"available.pick.length === 0\">{{format.add}}</button>\n\n\t\t<form *ngIf=\"filter\" class=\"filter\">\n\t\t\t<input class=\"form-control\" name=\"filterSource\" [(ngModel)]=\"available.picker\" (ngModelChange)=\"onFilter(available)\">\n\t\t</form>\n\n\t\t<div class=\"record-picker\">\n\t\t\t<ul [ngStyle]=\"{'max-height': height, 'min-height': height}\" [ngClass]=\"{over:available.dragOver}\"\n\t\t\t\t(drop)=\"drop($event, confirmed)\" (dragover)=\"allowDrop($event, available)\" (dragleave)=\"dragLeave()\">\n\t\t\t\t<li *ngFor=\"let item of available.sift; let idx=index;\"\n\t\t\t\t\t(click)=\"disabled ? null : selectItem(available.pick, item); shiftClick($event, idx, available, item)\"\n\t\t\t\t\t[ngClass]=\"{selected: isItemSelected(available.pick, item), disabled: disabled}\"\n\t\t\t\t\t[draggable]=\"!disabled && format.draggable\" (dragstart)=\"drag($event, item, available)\" (dragend)=\"dragEnd(available)\"\n\t\t\t\t><label>{{item._name}}</label></li>\n\t\t\t</ul>\n\t\t</div>\n\n\t\t<div class=\"button-bar\">\n\t\t\t<button type=\"button\" class=\"btn btn-primary pull-left\" (click)=\"selectAll(available)\"\n\t\t\t\t[disabled]=\"disabled || isAllSelected(available)\">{{format.all}}</button>\n\t\t\t<button type=\"button\" class=\"btn btn-default pull-right\" (click)=\"selectNone(available)\"\n\t\t\t\t[disabled]=\"!isAnySelected(available)\">{{format.none}}</button>\n\t\t</div>\n\t</div>\n\n\t<div class=\"listbox\" [ngStyle]=\"{ 'order' : direction() ? 2 : 1, 'margin-left' : direction() ? '10px' : 0 }\">\n\t\t<button type=\"button\" name=\"removeBtn\" class=\"btn btn-primary btn-block\"\n\t\t\t(click)=\"moveItem(confirmed, available)\" [ngClass]=\"direction() ? 'point-left' : 'point-right'\"\n\t\t\t[disabled]=\"confirmed.pick.length === 0\">{{format.remove}}</button>\n\n\t\t<form *ngIf=\"filter\" class=\"filter\">\n\t\t\t<input class=\"form-control\" name=\"filterDestination\" [(ngModel)]=\"confirmed.picker\" (ngModelChange)=\"onFilter(confirmed)\">\n\t\t</form>\n\n\t\t<div class=\"record-picker\">\n\t\t\t<ul [ngStyle]=\"{'max-height': height, 'min-height': height}\" [ngClass]=\"{over:confirmed.dragOver}\"\n\t\t\t\t(drop)=\"drop($event, available)\" (dragover)=\"allowDrop($event, confirmed)\" (dragleave)=\"dragLeave()\">\n\t\t\t\t<li #itmConf *ngFor=\"let item of confirmed.sift; let idx=index;\"\n\t\t\t\t\t(click)=\"disabled ? null : selectItem(confirmed.pick, item); shiftClick($event, idx, confirmed, item)\"\n\t\t\t\t\t[ngClass]=\"{selected: isItemSelected(confirmed.pick, item), disabled: disabled}\"\n\t\t\t\t\t[draggable]=\"!disabled && format.draggable\" (dragstart)=\"drag($event, item, confirmed)\" (dragend)=\"dragEnd(confirmed)\"\n\t\t\t\t><label>{{item._name}}</label></li>\n\t\t\t</ul>\n\t\t</div>\n\n\t\t<div class=\"button-bar\">\n\t\t\t<button type=\"button\" class=\"btn btn-primary pull-left\" (click)=\"selectAll(confirmed)\"\n\t\t\t\t[disabled]=\"disabled || isAllSelected(confirmed)\">{{format.all}}</button>\n\t\t\t<button type=\"button\" class=\"btn btn-default pull-right\" (click)=\"selectNone(confirmed)\"\n\t\t\t\t[disabled]=\"!isAnySelected(confirmed)\">{{format.none}}</button>\n\t\t</div>\n\t</div>\n</div>\n",
        styles: ["div.record-picker{overflow-x:hidden;overflow-y:auto;border:1px solid #ddd;border-radius:8px;position:relative;cursor:pointer;scrollbar-base-color:#337ab7;scrollbar-3dlight-color:#337ab7;scrollbar-highlight-color:#337ab7;scrollbar-track-color:#eee;scrollbar-arrow-color:gray;scrollbar-shadow-color:gray;scrollbar-dark-shadow-color:gray}div.record-picker::-webkit-scrollbar{width:12px}div.record-picker::-webkit-scrollbar-button{width:0;height:0}div.record-picker::-webkit-scrollbar-track{background:#eee;box-shadow:0 0 3px #dfdfdf inset;border-top-right-radius:8px;border-bottom-right-radius:8px}div.record-picker::-webkit-scrollbar-thumb{background:#337ab7;border:thin solid gray;border-top-right-radius:8px;border-bottom-right-radius:8px}div.record-picker::-webkit-scrollbar-thumb:hover{background:#286090}.record-picker ul{margin:0;padding:0 0 1px}.record-picker li{border-top:thin solid #ddd;border-bottom:1px solid #ddd;display:block;padding:2px 2px 2px 10px;margin-bottom:-1px;font-size:.85em;cursor:pointer;white-space:nowrap;min-height:16px}.record-picker li:hover{background-color:#f5f5f5}.record-picker li.selected{background-color:#d9edf7}.record-picker li.selected:hover{background-color:#c4e3f3}.record-picker li.disabled{opacity:.5;cursor:default;background-color:inherit}.record-picker li:first-child{border-top-left-radius:8px;border-top-right-radius:8px;border-top:none}.record-picker li:last-child{border-bottom-left-radius:8px;border-bottom-right-radius:8px;border-bottom:none}.record-picker label{cursor:pointer;font-weight:inherit;font-size:14px;padding:4px;margin-bottom:-1px;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.record-picker ul.over{background-color:#d3d3d3}.dual-list{display:flex;flex-direction:row;align-content:flex-start}.dual-list .listbox{width:50%;margin:0}.dual-list .button-bar{margin-top:8px}.point-right::after{content:\"\\25B6\";padding-left:1em}.point-left::before{content:\"\\25C0\";padding-right:1em}.dual-list .button-bar button{width:47%}button.btn-block{display:block;width:100%;margin-bottom:8px}.filter{margin-bottom:-2.2em}.filter::after{content:\"o\";width:40px;color:transparent;font-size:2em;background-image:url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path d=\"M0 64l192 192v192l128-32V256L512 64H0z\"/></svg>');background-repeat:no-repeat;background-position:center center;opacity:.2;top:-36px;left:calc(100% - 21px);position:relative}"]
      }]
    }];
    /** @nocollapse */

    DualListComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]
      }];
    };

    DualListComponent.propDecorators = {
      id: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      key: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      display: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      height: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      filter: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      format: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      sort: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      compare: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      source: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      destination: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      destinationChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var AngularDualListBoxModule = function AngularDualListBoxModule() {
      _classCallCheck(this, AngularDualListBoxModule);
    };

    AngularDualListBoxModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
        declarations: [DualListComponent],
        exports: [DualListComponent]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=angular-dual-listbox.js.map

    /***/
  },

  /***/
  "./node_modules/ng2-material-dropdown/fesm2015/ng2-material-dropdown.js":
  /*!******************************************************************************!*\
    !*** ./node_modules/ng2-material-dropdown/fesm2015/ng2-material-dropdown.js ***!
    \******************************************************************************/

  /*! exports provided: DropdownStateService, Ng2Dropdown, Ng2DropdownButton, Ng2DropdownMenu, Ng2DropdownModule, Ng2MenuItem */

  /***/
  function node_modulesNg2MaterialDropdownFesm2015Ng2MaterialDropdownJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    var _ACTIONS;

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DropdownStateService", function () {
      return DropdownStateService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Ng2Dropdown", function () {
      return Ng2Dropdown;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Ng2DropdownButton", function () {
      return Ng2DropdownButton;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Ng2DropdownMenu", function () {
      return Ng2DropdownMenu;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Ng2DropdownModule", function () {
      return Ng2DropdownModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Ng2MenuItem", function () {
      return Ng2MenuItem;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var Ng2DropdownButton =
    /*#__PURE__*/
    function () {
      function Ng2DropdownButton(element) {
        _classCallCheck(this, Ng2DropdownButton);

        this.element = element;
        this.onMenuToggled = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.showCaret = true;
      }
      /**
       * @name toggleMenu
       * @desc emits event to toggle menu
       */


      _createClass(Ng2DropdownButton, [{
        key: "toggleMenu",
        value: function toggleMenu() {
          this.onMenuToggled.emit(true);
        }
        /**
         * @name getPosition
         * @desc returns position of the button
         */

      }, {
        key: "getPosition",
        value: function getPosition() {
          return this.element.nativeElement.getBoundingClientRect();
        }
      }]);

      return Ng2DropdownButton;
    }();

    Ng2DropdownButton.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], Ng2DropdownButton.prototype, "onMenuToggled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Ng2DropdownButton.prototype, "showCaret", void 0);
    Ng2DropdownButton = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ng2-dropdown-button',
      template: "<button class='ng2-dropdown-button' type=\"button\" (click)=\"toggleMenu()\" tabindex=\"0s\">\n    <span class=\"ng2-dropdown-button__label\">\n        <ng-content></ng-content>\n    </span>\n\n    <span class=\"ng2-dropdown-button__caret\" *ngIf=\"showCaret\">\n        <svg enable-background=\"new 0 0 32 32\" height=\"16px\" id=\"\u0421\u043B\u043E\u0439_1\" version=\"1.1\" viewBox=\"0 0 32 32\" width=\"16px\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><path d=\"M24.285,11.284L16,19.571l-8.285-8.288c-0.395-0.395-1.034-0.395-1.429,0  c-0.394,0.395-0.394,1.035,0,1.43l8.999,9.002l0,0l0,0c0.394,0.395,1.034,0.395,1.428,0l8.999-9.002  c0.394-0.395,0.394-1.036,0-1.431C25.319,10.889,24.679,10.889,24.285,11.284z\" fill=\"#121313\" id=\"Expand_More\"/><g/><g/><g/><g/><g/><g/></svg>\n    </span>\n</button>\n",
      styles: [".ng2-dropdown-button{font-family:Roboto,\"Helvetica Neue\",Helvetica,Arial;background:#fff;padding:.45rem .25rem;font-size:14px;letter-spacing:.08rem;color:#444;outline:0;cursor:pointer;font-weight:400;border:none;border-bottom:1px solid #efefef;text-align:left;min-width:100px;width:100%;display:flex;flex-direction:row;max-width:150px}.ng2-dropdown-button:hover{color:#222}.ng2-dropdown-button:active,.ng2-dropdown-button:focus{color:#222;border-bottom:2px solid #2196f3}.ng2-dropdown-button__label{flex:1 1 95%}.ng2-dropdown-button__caret{width:12px;height:12px;display:flex;flex:1 1 6%}:host-context(.ng2-dropdown-button--icon) .ng2-dropdown-button{border:none;min-width:40px;width:40px;border-radius:100%;transition:.2s;text-align:center;height:40px;padding:.5em}:host-context(.ng2-dropdown-button--icon) .ng2-dropdown-button:active{background:rgba(0,0,0,.2)}"]
    })], Ng2DropdownButton);
    var KEYS = {
      BACKSPACE: 9,
      PREV: 38,
      NEXT: 40,
      ENTER: 13,
      ESCAPE: 27
    };
    /**
     * @name onSwitchNext
     * @param index
     * @param items
     * @param state
     */

    var onSwitchNext = function onSwitchNext(index, items, state) {
      if (index < items.length - 1) {
        state.select(items[index + 1], true);
      }
    };

    var ɵ0 = onSwitchNext;
    /**
     * @name onSwitchPrev
     * @param index
     * @param items
     * @param state
     */

    var onSwitchPrev = function onSwitchPrev(index, items, state) {
      if (index > 0) {
        state.select(items[index - 1], true);
      }
    };

    var ɵ1 = onSwitchPrev;
    /**
     * @name onBackspace
     * @param index
     * @param items
     * @param state
     */

    var onBackspace = function onBackspace(index, items, state) {
      if (index < items.length - 1) {
        state.select(items[index + 1], true);
      } else {
        state.select(items[0], true);
      }
    };

    var ɵ2 = onBackspace;

    function onEscape() {
      this.hide();
    }

    ;
    /**
     * @name onItemClicked
     * @param index
     * @param items
     * @param state
     */

    var onItemClicked = function onItemClicked(index, items, state) {
      return state.selectedItem ? state.selectedItem.click() : undefined;
    };

    var ɵ3 = onItemClicked;
    var ACTIONS = (_ACTIONS = {}, _defineProperty(_ACTIONS, KEYS.BACKSPACE, onBackspace), _defineProperty(_ACTIONS, KEYS.PREV, onSwitchPrev), _defineProperty(_ACTIONS, KEYS.NEXT, onSwitchNext), _defineProperty(_ACTIONS, KEYS.ENTER, onItemClicked), _defineProperty(_ACTIONS, KEYS.ESCAPE, onEscape), _ACTIONS);

    function arrowKeysHandler(event) {
      if ([38, 40].indexOf(event.keyCode) > -1) {
        event.preventDefault();
      }
    }

    var Ng2DropdownState =
    /*#__PURE__*/
    function () {
      function Ng2DropdownState() {
        _classCallCheck(this, Ng2DropdownState);

        this.onItemSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onItemClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onItemDestroyed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }
      /**
       * @name selectedItem
       * @desc getter for _selectedItem
       */


      _createClass(Ng2DropdownState, [{
        key: "select",

        /**
         * @name selects a menu item and emits event
         * @param item
         */
        value: function select(item) {
          var dispatchEvent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          this._selectedItem = item;

          if (!dispatchEvent || !item) {
            return;
          }

          item.focus();
          this.onItemSelected.emit(item);
        }
        /**
         * @name unselect
         * @desc sets _selectedItem as undefined
         */

      }, {
        key: "unselect",
        value: function unselect() {
          this._selectedItem = undefined;
        }
      }, {
        key: "selectedItem",
        get: function get() {
          return this._selectedItem;
        }
      }]);

      return Ng2DropdownState;
    }();

    var DropdownStateService = function DropdownStateService() {
      _classCallCheck(this, DropdownStateService);

      this.menuState = {
        isVisible: false,
        toString: function toString() {
          return this.isVisible === true ? 'visible' : 'hidden';
        }
      };
      this.dropdownState = new Ng2DropdownState();
    };

    DropdownStateService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], DropdownStateService);

    var Ng2MenuItem =
    /*#__PURE__*/
    function () {
      function Ng2MenuItem(state, element) {
        _classCallCheck(this, Ng2MenuItem);

        this.state = state;
        this.element = element;
        /**
         * @preventClose
         * @desc if true, clicking on the item won't close the dropdown
         */

        this.preventClose = false;
      }

      _createClass(Ng2MenuItem, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.state.dropdownState.onItemDestroyed.emit(this);
        }
        /**
         * @name isSelected
         * @desc returns current selected item
         */

      }, {
        key: "select",

        /**
         * @name click
         * @desc emits select event
         */
        value: function select($event) {
          this.state.dropdownState.select(this, true);

          if ($event) {
            $event.stopPropagation();
            $event.preventDefault();
          }
        }
        /**
         * @name click
         * @desc emits click event
         */

      }, {
        key: "click",
        value: function click() {
          this.state.dropdownState.onItemClicked.emit(this);
        }
        /**
         * @name focus
         */

      }, {
        key: "focus",
        value: function focus() {
          this.element.nativeElement.children[0].focus();
        }
      }, {
        key: "isSelected",
        get: function get() {
          return this === this.state.dropdownState.selectedItem;
        }
      }]);

      return Ng2MenuItem;
    }();

    Ng2MenuItem.ctorParameters = function () {
      return [{
        type: DropdownStateService
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Ng2MenuItem.prototype, "preventClose", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Ng2MenuItem.prototype, "value", void 0);
    Ng2MenuItem = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ng2-menu-item',
      template: "\n        <div\n            class=\"ng2-menu-item\"\n            role=\"button\"\n            tabindex=\"0\"\n            [class.ng2-menu-item--selected]=\"isSelected\"\n            (keydown.enter)=\"click()\"\n            (click)=\"click()\"\n            (mouseover)=\"select()\"\n        >\n            <ng-content></ng-content>\n        </div>\n    ",
      styles: [".ng2-menu-item{font-family:Roboto,\"Helvetica Neue\",Helvetica,Arial;background:#fff;color:rgba(0,0,0,.87);cursor:pointer;font-size:.9em;text-transform:none;font-weight:400;letter-spacing:.03em;height:48px;line-height:48px;padding:.3em 1.25rem;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;transition:background .25s}.ng2-menu-item--selected{background:rgba(158,158,158,.2);outline:0}.ng2-menu-item:focus{outline:0}.ng2-menu-item:active{background:rgba(158,158,158,.4)}:host(ng2-menu-item) ::ng-deep [ng2-menu-item-icon]{vertical-align:middle;font-size:28px;width:1.5em;height:30px;color:rgba(0,0,0,.44)}"]
    })], Ng2MenuItem);

    var Ng2DropdownMenu =
    /*#__PURE__*/
    function () {
      function Ng2DropdownMenu(dropdownState, element, renderer) {
        _classCallCheck(this, Ng2DropdownMenu);

        this.dropdownState = dropdownState;
        this.element = element;
        this.renderer = renderer;
        /**
         * @name width
         */

        this.width = 4;
        /**
         * @description if set to true, the first element of the dropdown will be automatically focused
         * @name focusFirstElement
         */

        this.focusFirstElement = true;
        /**
         * @name appendToBody
         */

        this.appendToBody = true;
        /**
         * @name zIndex
         */

        this.zIndex = 1000;
        this.listeners = {
          arrowHandler: undefined,
          handleKeypress: undefined
        };
      }
      /**
       * @name show
       * @shows menu and selects first item
       */


      _createClass(Ng2DropdownMenu, [{
        key: "show",
        value: function show(position) {
          var dynamic = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          var dc = typeof document !== 'undefined' ? document : undefined;
          var wd = typeof window !== 'undefined' ? window : undefined;

          if (!this.dropdownState.menuState.isVisible) {
            // setting handlers
            this.listeners.handleKeypress = this.renderer.listen(dc.body, 'keydown', this.handleKeypress.bind(this));
            this.listeners.arrowHandler = this.renderer.listen(wd, 'keydown', arrowKeysHandler);
          } // update state


          this.dropdownState.menuState.isVisible = true;

          if (position) {
            this.updatePosition(position, dynamic);
          }
        }
        /**
         * @name hide
         * @desc hides menu
         */

      }, {
        key: "hide",
        value: function hide() {
          this.dropdownState.menuState.isVisible = false; // reset selected item state

          this.dropdownState.dropdownState.unselect(); // call function to unlisten

          this.listeners.arrowHandler && this.listeners.arrowHandler();
          this.listeners.handleKeypress && this.listeners.handleKeypress();
        }
        /**
         * @name updatePosition
         * @desc updates the menu position every time it is toggled
         * @param position {ClientRect}
         * @param dynamic {boolean}
         */

      }, {
        key: "updatePosition",
        value: function updatePosition(position, dynamic) {
          this.position = position;
          this.updateOnChange(dynamic);
        }
        /**
         * @name handleKeypress
         * @desc executes functions on keyPress based on the key pressed
         * @param $event
         */

      }, {
        key: "handleKeypress",
        value: function handleKeypress($event) {
          var key = $event.keyCode;
          var items = this.items.toArray();
          var index = items.indexOf(this.dropdownState.dropdownState.selectedItem);

          if (!ACTIONS.hasOwnProperty(key)) {
            return;
          }

          ACTIONS[key].call(this, index, items, this.dropdownState.dropdownState);
        }
        /**
         * @name getMenuElement
         */

      }, {
        key: "getMenuElement",
        value: function getMenuElement() {
          return this.element.nativeElement.children[0];
        }
        /**
         * @name calcPositionOffset
         * @param position
         */

      }, {
        key: "calcPositionOffset",
        value: function calcPositionOffset(position) {
          var wd = typeof window !== 'undefined' ? window : undefined;
          var dc = typeof document !== 'undefined' ? document : undefined;

          if (!wd || !dc || !position) {
            return;
          }

          var element = this.getMenuElement();
          var supportPageOffset = wd.pageXOffset !== undefined;
          var isCSS1Compat = (dc.compatMode || '') === 'CSS1Compat';
          var x = supportPageOffset ? wd.pageXOffset : isCSS1Compat ? dc.documentElement.scrollLeft : dc.body.scrollLeft;
          var y = supportPageOffset ? wd.pageYOffset : isCSS1Compat ? dc.documentElement.scrollTop : dc.body.scrollTop;

          var _this$applyOffset = this.applyOffset("".concat(position.top + (this.appendToBody ? y - 15 : 0), "px"), "".concat(position.left + x - 5, "px")),
              top = _this$applyOffset.top,
              left = _this$applyOffset.left;

          var clientWidth = element.clientWidth;
          var clientHeight = element.clientHeight;
          var marginFromBottom = parseInt(top) + clientHeight + (this.appendToBody ? 0 : y - 15);
          var marginFromRight = parseInt(left) + clientWidth;
          var windowScrollHeight = wd.innerHeight + wd.scrollY;
          var windowScrollWidth = wd.innerWidth + wd.scrollX;

          if (marginFromBottom >= windowScrollHeight) {
            top = "".concat(parseInt(top.replace('px', '')) - clientHeight, "px");
          }

          if (marginFromRight >= windowScrollWidth) {
            var marginRight = marginFromRight - windowScrollWidth + 30;
            left = "".concat(parseInt(left.replace('px', '')) - marginRight, "px");
          }

          return {
            top: top,
            left: left
          };
        }
      }, {
        key: "applyOffset",
        value: function applyOffset(top, left) {
          if (!this.offset) {
            return {
              top: top,
              left: left
            };
          }

          var offset = this.offset.split(' ');

          if (!offset[1]) {
            offset[1] = '0';
          }

          top = "".concat(parseInt(top.replace('px', '')) + parseInt(offset[0]), "px");
          left = "".concat(parseInt(left.replace('px', '')) + parseInt(offset[1]), "px");
          return {
            top: top,
            left: left
          };
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var dc = typeof document !== 'undefined' ? document : undefined;

          if (this.appendToBody) {
            // append menu element to the body
            dc.body.appendChild(this.element.nativeElement);
          }
        }
      }, {
        key: "updateOnChange",
        value: function updateOnChange() {
          var dynamic = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
          var element = this.getMenuElement();
          var position = this.calcPositionOffset(this.position);

          if (position) {
            this.renderer.setStyle(element, 'top', position.top.toString());
            this.renderer.setStyle(element, 'left', position.left.toString());
          } // select first item unless user disabled this option


          if (this.focusFirstElement && this.items.first && !this.dropdownState.dropdownState.selectedItem) {
            this.dropdownState.dropdownState.select(this.items.first, false);
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          var elem = this.element.nativeElement;
          elem.parentNode.removeChild(elem);

          if (this.listeners.handleKeypress) {
            this.listeners.handleKeypress();
          }
        }
      }]);

      return Ng2DropdownMenu;
    }();

    Ng2DropdownMenu.ctorParameters = function () {
      return [{
        type: DropdownStateService
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Ng2DropdownMenu.prototype, "width", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Ng2DropdownMenu.prototype, "focusFirstElement", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Ng2DropdownMenu.prototype, "offset", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Ng2DropdownMenu.prototype, "appendToBody", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Ng2DropdownMenu.prototype, "zIndex", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(Ng2MenuItem, {
      descendants: true
    })], Ng2DropdownMenu.prototype, "items", void 0);
    Ng2DropdownMenu = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ng2-dropdown-menu',
      template: "\n        <!-- MENU -->\n        <div\n            class=\"ng2-dropdown-menu ng2-dropdown-menu---width--{{ width }}\"\n            [class.ng2-dropdown-menu--inside-element]=\"!appendToBody\"\n            [class.ng2-dropdown-menu--open]=\"dropdownState.menuState.isVisible\"\n            [style.z-index]=\"zIndex\"\n            [@fade]=\"dropdownState.menuState.toString()\"\n        >\n            <div\n                class=\"ng2-dropdown-menu__options-container\"\n                [@opacity]=\"dropdownState.menuState.toString()\"\n            >\n                <ng-content></ng-content>\n            </div>\n        </div>\n\n        <!-- BACKDROP -->\n        <div\n            class=\"ng2-dropdown-backdrop\"\n            *ngIf=\"dropdownState.menuState.isVisible\"\n            (click)=\"hide()\"\n        ></div>\n    ",
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('fade', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        opacity: 1,
        height: '*',
        width: '*'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        opacity: 0,
        overflow: 'hidden',
        height: 0,
        width: 0
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('hidden => visible', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('250ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        opacity: 1,
        height: '*',
        width: '*'
      }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('visible => hidden', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('350ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        opacity: 0,
        width: 0,
        height: 0
      }))])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('opacity', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('hidden => visible', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('450ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        opacity: 0,
        offset: 0
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        opacity: 1,
        offset: 1
      })]))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('visible => hidden', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('250ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        opacity: 1,
        offset: 0
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        opacity: 0.5,
        offset: 0.3
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        opacity: 0,
        offset: 1
      })]))])])],
      styles: [":host{display:block}.ng2-dropdown-menu{overflow-y:auto;box-shadow:0 1px 2px 0 rgba(0,0,0,.3);position:absolute;padding:.5em 0;background:#fff;border-radius:1px;max-height:400px;width:260px;min-height:0;display:block}.ng2-dropdown-menu.ng2-dropdown-menu--inside-element{position:fixed}.ng2-dropdown-menu.ng2-dropdown-menu--width--2{width:200px}.ng2-dropdown-menu.ng2-dropdown-menu--width--4{width:260px}.ng2-dropdown-menu.ng2-dropdown-menu--width--6{width:320px}.ng2-dropdown-backdrop{position:fixed;top:0;left:0;width:100%;height:100%;z-index:1;overflow:hidden}:host ::ng-deep .ng2-menu-divider{height:1px;min-height:1px;max-height:1px;width:100%;display:block;background:#f9f9f9}"]
    })], Ng2DropdownMenu);

    var Ng2Dropdown =
    /*#__PURE__*/
    function () {
      function Ng2Dropdown(state) {
        _classCallCheck(this, Ng2Dropdown);

        this.state = state;
        this.dynamicUpdate = true; // outputs

        this.onItemClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onItemSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(Ng2Dropdown, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.state.dropdownState.onItemClicked.subscribe(function (item) {
            _this7.onItemClicked.emit(item);

            if (item.preventClose) {
              return;
            }

            _this7.hide.call(_this7);
          });

          if (this.button) {
            this.button.onMenuToggled.subscribe(function () {
              _this7.toggleMenu();
            });
          }

          this.state.dropdownState.onItemSelected.subscribe(function (item) {
            _this7.onItemSelected.emit(item);
          });
          this.state.dropdownState.onItemDestroyed.subscribe(function (item) {
            var newSelectedItem;

            var items = _this7.menu.items.toArray();

            if (item !== _this7.state.dropdownState.selectedItem) {
              return;
            }

            if (_this7.menu.focusFirstElement) {
              newSelectedItem = item === items[0] && items.length > 1 ? items[1] : items[0];
            }

            _this7.state.dropdownState.select(newSelectedItem);
          });
        }
        /**
         * @name toggleMenu
         * @desc toggles menu visibility
         */

      }, {
        key: "toggleMenu",
        value: function toggleMenu() {
          var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.button.getPosition();
          this.state.menuState.isVisible ? this.hide() : this.show(position);
        }
        /**
         * - hides dropdown
         * @name hide
         */

      }, {
        key: "hide",
        value: function hide() {
          this.menu.hide();
          this.onHide.emit(this);
        }
        /**
         * - shows dropdown
         * @name show
         * @param position
         */

      }, {
        key: "show",
        value: function show() {
          var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.button.getPosition();
          this.menu.show(position, this.dynamicUpdate);
          this.onShow.emit(this);
        }
        /**
         * @name scrollListener
         */

      }, {
        key: "scrollListener",
        value: function scrollListener() {
          if (this.button && this.dynamicUpdate) {
            this.menu.updatePosition(this.button.getPosition(), true);
          }
        }
      }]);

      return Ng2Dropdown;
    }();

    Ng2Dropdown.ctorParameters = function () {
      return [{
        type: DropdownStateService
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(Ng2DropdownButton, {
      static: true
    })], Ng2Dropdown.prototype, "button", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(Ng2DropdownMenu, {
      static: true
    })], Ng2Dropdown.prototype, "menu", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Ng2Dropdown.prototype, "dynamicUpdate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], Ng2Dropdown.prototype, "onItemClicked", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], Ng2Dropdown.prototype, "onItemSelected", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], Ng2Dropdown.prototype, "onShow", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], Ng2Dropdown.prototype, "onHide", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll')], Ng2Dropdown.prototype, "scrollListener", null);
    Ng2Dropdown = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ng2-dropdown',
      template: "\n        <div class=\"ng2-dropdown-container\">\n            <ng-content select=\"ng2-dropdown-button\"></ng-content>\n            <ng-content select=\"ng2-dropdown-menu\"></ng-content>\n        </div>\n    ",
      providers: [DropdownStateService]
    })], Ng2Dropdown);

    var Ng2DropdownModule = function Ng2DropdownModule() {
      _classCallCheck(this, Ng2DropdownModule);
    };

    Ng2DropdownModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      exports: [Ng2MenuItem, Ng2DropdownButton, Ng2DropdownMenu, Ng2Dropdown],
      declarations: [Ng2Dropdown, Ng2MenuItem, Ng2DropdownButton, Ng2DropdownMenu],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]]
    })], Ng2DropdownModule);
    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=ng2-material-dropdown.js.map

    /***/
  },

  /***/
  "./node_modules/ngx-chips/fesm2015/ngx-chips.js":
  /*!******************************************************!*\
    !*** ./node_modules/ngx-chips/fesm2015/ngx-chips.js ***!
    \******************************************************/

  /*! exports provided: DeleteIconComponent, TagComponent, TagInputComponent, TagInputDropdown, TagInputForm, TagInputModule, TagRipple, ɵa, ɵb, ɵc, ɵd */

  /***/
  function node_modulesNgxChipsFesm2015NgxChipsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeleteIconComponent", function () {
      return DeleteIconComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TagComponent", function () {
      return TagComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TagInputComponent", function () {
      return TagInputComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TagInputDropdown", function () {
      return TagInputDropdown;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TagInputForm", function () {
      return TagInputForm;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TagInputModule", function () {
      return TagInputModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TagRipple", function () {
      return TagRipple;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return TagInputAccessor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵb", function () {
      return animations;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵc", function () {
      return DragProvider;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵd", function () {
      return HighlightPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ng2-material-dropdown */
    "./node_modules/ng2-material-dropdown/fesm2015/ng2-material-dropdown.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");

    var escape = function escape(s) {
      return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    };

    var HighlightPipe =
    /*#__PURE__*/
    function () {
      function HighlightPipe() {
        _classCallCheck(this, HighlightPipe);
      }

      _createClass(HighlightPipe, [{
        key: "transform",

        /**
         * @name transform
         * @param value {string}
         * @param arg {string}
         */
        value: function transform(value, arg) {
          if (!arg.trim()) {
            return value;
          }

          try {
            var regex = new RegExp("(".concat(escape(arg), ")"), 'i');
            return value.replace(regex, '<b>$1</b>');
          } catch (e) {
            return value;
          }
        }
      }]);

      return HighlightPipe;
    }();

    HighlightPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'highlight'
    })], HighlightPipe);
    /*
    ** constants and default values for <tag-input>
     */

    var PLACEHOLDER = '+ Tag';
    var SECONDARY_PLACEHOLDER = 'Enter a new tag';
    var KEYDOWN = 'keydown';
    var KEYUP = 'keyup';
    var MAX_ITEMS_WARNING = 'The number of items specified was greater than the property max-items.';
    var ACTIONS_KEYS = {
      DELETE: 'DELETE',
      SWITCH_PREV: 'SWITCH_PREV',
      SWITCH_NEXT: 'SWITCH_NEXT',
      TAB: 'TAB'
    };
    var KEY_PRESS_ACTIONS = {
      8: ACTIONS_KEYS.DELETE,
      37: ACTIONS_KEYS.SWITCH_PREV,
      39: ACTIONS_KEYS.SWITCH_NEXT,
      9: ACTIONS_KEYS.TAB
    };
    var DRAG_AND_DROP_KEY = 'Text';
    var NEXT = 'NEXT';
    var PREV = 'PREV';

    var DragProvider =
    /*#__PURE__*/
    function () {
      function DragProvider() {
        _classCallCheck(this, DragProvider);

        this.state = {
          dragging: false,
          dropping: false,
          index: undefined
        };
      }
      /**
       * @name setDraggedItem
       * @param event
       * @param tag
       */


      _createClass(DragProvider, [{
        key: "setDraggedItem",
        value: function setDraggedItem(event, tag) {
          if (event && event.dataTransfer) {
            event.dataTransfer.setData(DRAG_AND_DROP_KEY, JSON.stringify(tag));
          }
        }
        /**
         * @name getDraggedItem
         * @param event
         */

      }, {
        key: "getDraggedItem",
        value: function getDraggedItem(event) {
          if (event && event.dataTransfer) {
            var data = event.dataTransfer.getData(DRAG_AND_DROP_KEY);

            try {
              return JSON.parse(data);
            } catch (_a) {
              return;
            }
          }
        }
        /**
         * @name setSender
         * @param sender
         */

      }, {
        key: "setSender",
        value: function setSender(sender) {
          this.sender = sender;
        }
        /**
         * @name setReceiver
         * @param receiver
         */

      }, {
        key: "setReceiver",
        value: function setReceiver(receiver) {
          this.receiver = receiver;
        }
        /**
         * @name onTagDropped
         * @param tag
         * @param indexDragged
         * @param indexDropped
         */

      }, {
        key: "onTagDropped",
        value: function onTagDropped(tag, indexDragged, indexDropped) {
          this.onDragEnd();
          this.sender.onRemoveRequested(tag, indexDragged);
          this.receiver.onAddingRequested(false, tag, indexDropped);
        }
        /**
         * @name setState
         * @param state
         */

      }, {
        key: "setState",
        value: function setState(state) {
          this.state = Object.assign({}, this.state, state);
        }
        /**
         * @name getState
         * @param key
         */

      }, {
        key: "getState",
        value: function getState(key) {
          return key ? this.state[key] : this.state;
        }
        /**
         * @name onDragEnd
         */

      }, {
        key: "onDragEnd",
        value: function onDragEnd() {
          this.setState({
            dragging: false,
            dropping: false,
            index: undefined
          });
        }
      }]);

      return DragProvider;
    }();

    DragProvider = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], DragProvider);
    var defaults = {
      tagInput: {
        separatorKeys: [],
        separatorKeyCodes: [],
        maxItems: Infinity,
        placeholder: PLACEHOLDER,
        secondaryPlaceholder: SECONDARY_PLACEHOLDER,
        validators: [],
        asyncValidators: [],
        onlyFromAutocomplete: false,
        errorMessages: {},
        theme: '',
        onTextChangeDebounce: 250,
        inputId: null,
        inputClass: '',
        clearOnBlur: false,
        hideForm: false,
        addOnBlur: false,
        addOnPaste: false,
        pasteSplitPattern: ',',
        blinkIfDupe: true,
        removable: true,
        editable: false,
        allowDupes: false,
        modelAsStrings: false,
        trimTags: true,
        ripple: true,
        tabIndex: '',
        disable: false,
        dragZone: '',
        onRemoving: undefined,
        onAdding: undefined,
        displayBy: 'display',
        identifyBy: 'value',
        animationDuration: {
          enter: '250ms',
          leave: '150ms'
        }
      },
      dropdown: {
        displayBy: 'display',
        identifyBy: 'value',
        appendToBody: true,
        offset: '50 0',
        focusFirstElement: false,
        showDropdownIfEmpty: false,
        minimumTextLength: 1,
        limitItemsTo: Infinity,
        keepOpen: true,
        dynamicUpdate: true,
        zIndex: 1000,
        matchingFn: matchingFn
      }
    };
    /**
     * @name matchingFn
     * @param this
     * @param value
     * @param target
     */

    function matchingFn(value, target) {
      var targetValue = target[this.displayBy].toString();
      return targetValue && targetValue.toLowerCase().indexOf(value.toLowerCase()) >= 0;
    }

    var OptionsProvider =
    /*#__PURE__*/
    function () {
      function OptionsProvider() {
        _classCallCheck(this, OptionsProvider);
      }

      _createClass(OptionsProvider, [{
        key: "setOptions",
        value: function setOptions(options) {
          OptionsProvider.defaults.tagInput = Object.assign({}, defaults.tagInput, options.tagInput);
          OptionsProvider.defaults.dropdown = Object.assign({}, defaults.dropdown, options.dropdown);
        }
      }]);

      return OptionsProvider;
    }();

    OptionsProvider.defaults = defaults;

    function isObject(obj) {
      return obj === Object(obj);
    }

    var TagInputAccessor =
    /*#__PURE__*/
    function () {
      function TagInputAccessor() {
        _classCallCheck(this, TagInputAccessor);

        this._items = [];
        /**
         * @name displayBy
         */

        this.displayBy = OptionsProvider.defaults.tagInput.displayBy;
        /**
         * @name identifyBy
         */

        this.identifyBy = OptionsProvider.defaults.tagInput.identifyBy;
      }

      _createClass(TagInputAccessor, [{
        key: "onTouched",
        value: function onTouched() {
          this._onTouchedCallback();
        }
      }, {
        key: "writeValue",
        value: function writeValue(items) {
          this._items = items || [];
        }
      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this._onChangeCallback = fn;
        }
      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this._onTouchedCallback = fn;
        }
        /**
         * @name getItemValue
         * @param item
         * @param fromDropdown
         */

      }, {
        key: "getItemValue",
        value: function getItemValue(item) {
          var fromDropdown = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          var property = fromDropdown && this.dropdown ? this.dropdown.identifyBy : this.identifyBy;
          return isObject(item) ? item[property] : item;
        }
        /**
         * @name getItemDisplay
         * @param item
         * @param fromDropdown
         */

      }, {
        key: "getItemDisplay",
        value: function getItemDisplay(item) {
          var fromDropdown = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          var property = fromDropdown && this.dropdown ? this.dropdown.displayBy : this.displayBy;
          return isObject(item) ? item[property] : item;
        }
        /**
         * @name getItemsWithout
         * @param index
         */

      }, {
        key: "getItemsWithout",
        value: function getItemsWithout(index) {
          return this.items.filter(function (item, position) {
            return position !== index;
          });
        }
      }, {
        key: "items",
        get: function get() {
          return this._items;
        },
        set: function set(items) {
          this._items = items;

          this._onChangeCallback(this._items);
        }
      }]);

      return TagInputAccessor;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], TagInputAccessor.prototype, "displayBy", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], TagInputAccessor.prototype, "identifyBy", void 0);
    /**
     * @name listen
     * @param listenerType
     * @param action
     * @param condition
     */

    function listen(listenerType, action) {
      var condition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      // if the event provided does not exist, throw an error
      if (!this.listeners.hasOwnProperty(listenerType)) {
        throw new Error('The event entered may be wrong');
      } // if a condition is present and is false, exit early


      if (!condition) {
        return;
      } // fire listener


      this.listeners[listenerType].push(action);
    }

    var TagInputForm =
    /*#__PURE__*/
    function () {
      function TagInputForm() {
        _classCallCheck(this, TagInputForm);

        /**
         * @name onSubmit
         */
        this.onSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @name onBlur
         */

        this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @name onFocus
         */

        this.onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @name onKeyup
         */

        this.onKeyup = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @name onKeydown
         */

        this.onKeydown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @name inputTextChange
         */

        this.inputTextChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @name validators
         */

        this.validators = [];
        /**
         * @name asyncValidators
         * @desc array of AsyncValidator that are used to validate the tag before it gets appended to the list
         */

        this.asyncValidators = [];
        /**
         * @name tabindex
         * @desc pass through the specified tabindex to the input
         */

        this.tabindex = '';
        /**
         * @name disabled
         */

        this.disabled = false;
        this.item = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({
          value: '',
          disabled: this.disabled
        });
      }
      /**
       * @name inputText
       */


      _createClass(TagInputForm, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.item.setValidators(this.validators);
          this.item.setAsyncValidators(this.asyncValidators); // creating form

          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            item: this.item
          });
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes.disabled && !changes.disabled.firstChange) {
            if (changes.disabled.currentValue) {
              this.form.controls['item'].disable();
            } else {
              this.form.controls['item'].enable();
            }
          }
        }
        /**
         * @name value
         */

      }, {
        key: "isInputFocused",

        /**
         * @name isInputFocused
         */
        value: function isInputFocused() {
          var doc = typeof document !== 'undefined' ? document : undefined;
          return doc ? doc.activeElement === this.input.nativeElement : false;
        }
        /**
         * @name getErrorMessages
         * @param messages
         */

      }, {
        key: "getErrorMessages",
        value: function getErrorMessages(messages) {
          var _this8 = this;

          return Object.keys(messages).filter(function (err) {
            return _this8.value.hasError(err);
          }).map(function (err) {
            return messages[err];
          });
        }
        /**
         * @name hasErrors
         */

      }, {
        key: "hasErrors",
        value: function hasErrors() {
          var _this$form = this.form,
              dirty = _this$form.dirty,
              value = _this$form.value,
              valid = _this$form.valid;
          return dirty && value.item && !valid;
        }
        /**
         * @name focus
         */

      }, {
        key: "focus",
        value: function focus() {
          this.input.nativeElement.focus();
        }
        /**
         * @name blur
         */

      }, {
        key: "blur",
        value: function blur() {
          this.input.nativeElement.blur();
        }
        /**
         * @name getElementPosition
         */

      }, {
        key: "getElementPosition",
        value: function getElementPosition() {
          return this.input.nativeElement.getBoundingClientRect();
        }
        /**
         * - removes input from the component
         * @name destroy
         */

      }, {
        key: "destroy",
        value: function destroy() {
          var input = this.input.nativeElement;
          input.parentElement.removeChild(input);
        }
        /**
         * @name onKeyDown
         * @param $event
         */

      }, {
        key: "onKeyDown",
        value: function onKeyDown($event) {
          this.inputText = this.value.value;

          if ($event.key === 'Enter') {
            this.submit($event);
          } else {
            return this.onKeydown.emit($event);
          }
        }
        /**
         * @name onKeyUp
         * @param $event
         */

      }, {
        key: "onKeyUp",
        value: function onKeyUp($event) {
          this.inputText = this.value.value;
          return this.onKeyup.emit($event);
        }
        /**
         * @name submit
         */

      }, {
        key: "submit",
        value: function submit($event) {
          $event.preventDefault();
          this.onSubmit.emit($event);
        }
      }, {
        key: "inputText",
        get: function get() {
          return this.item.value;
        }
        /**
         * @name inputText
         * @param text {string}
         */
        ,
        set: function set(text) {
          this.item.setValue(text);
          this.inputTextChange.emit(text);
        }
      }, {
        key: "value",
        get: function get() {
          return this.form.get('item');
        }
      }]);

      return TagInputForm;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], TagInputForm.prototype, "onSubmit", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], TagInputForm.prototype, "onBlur", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], TagInputForm.prototype, "onFocus", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], TagInputForm.prototype, "onKeyup", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], TagInputForm.prototype, "onKeydown", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], TagInputForm.prototype, "inputTextChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], TagInputForm.prototype, "placeholder", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], TagInputForm.prototype, "validators", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], TagInputForm.prototype, "asyncValidators", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], TagInputForm.prototype, "inputId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], TagInputForm.prototype, "inputClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TagInputForm.prototype, "tabindex", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TagInputForm.prototype, "disabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('input', {
      static: false
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TagInputForm.prototype, "input", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String])], TagInputForm.prototype, "inputText", null);
    TagInputForm = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'tag-input-form',
      template: "<!-- form -->\n<form (ngSubmit)=\"submit($event)\" [formGroup]=\"form\">\n    <input #input\n\n           type=\"text\"\n           class=\"ng2-tag-input__text-input\"\n           autocomplete=\"off\"\n           tabindex=\"{{ disabled ? -1 : tabindex ? tabindex : 0 }}\"\n           minlength=\"1\"\n           formControlName=\"item\"\n\n           [ngClass]=\"inputClass\"\n           [attr.id]=\"inputId\"\n           [attr.placeholder]=\"placeholder\"\n           [attr.aria-label]=\"placeholder\"\n           [attr.tabindex]=\"tabindex\"\n           [attr.disabled]=\"disabled ? disabled : null\"\n\n           (focus)=\"onFocus.emit($event)\"\n           (blur)=\"onBlur.emit($event)\"\n           (keydown)=\"onKeyDown($event)\"\n           (keyup)=\"onKeyUp($event)\"\n    />\n</form>\n",
      styles: [".dark tag:focus{box-shadow:0 0 0 1px #323232}.ng2-tag-input.bootstrap3-info{background-color:#fff;display:inline-block;color:#555;vertical-align:middle;max-width:100%;height:42px;line-height:44px}.ng2-tag-input.bootstrap3-info input{border:none;box-shadow:none;outline:0;background-color:transparent;padding:0 6px;margin:0;width:auto;max-width:inherit}.ng2-tag-input.bootstrap3-info .form-control input::-moz-placeholder{color:#777;opacity:1}.ng2-tag-input.bootstrap3-info .form-control input:-ms-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info .form-control input::-webkit-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info input:focus{border:none;box-shadow:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--focused{box-shadow:inset 0 1px 1px rgba(0,0,0,.4);border:1px solid #ccc}.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;transition:.25s;padding:.25rem 0;min-height:32px;cursor:text;border-bottom:2px solid #efefef}.ng2-tag-input:focus{outline:0}.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.ng2-tag-input.ng2-tag-input--focused{border-bottom:2px solid #2196f3}.ng2-tag-input.ng2-tag-input--invalid{border-bottom:2px solid #f44336}.ng2-tag-input.ng2-tag-input--loading{border:none}.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.ng2-tag-input form{margin:.1em 0}.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.minimal.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:1px solid transparent}.minimal.ng2-tag-input:focus{outline:0}.minimal.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.minimal.ng2-tag-input.ng2-tag-input--loading{border:none}.minimal.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.minimal.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.dark.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #444}.dark.ng2-tag-input:focus{outline:0}.dark.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.dark.ng2-tag-input.ng2-tag-input--loading{border:none}.dark.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.dark.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.bootstrap.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #efefef}.bootstrap.ng2-tag-input:focus{outline:0}.bootstrap.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.bootstrap.ng2-tag-input.ng2-tag-input--focused{border-bottom:2px solid #0275d8}.bootstrap.ng2-tag-input.ng2-tag-input--invalid{border-bottom:2px solid #d9534f}.bootstrap.ng2-tag-input.ng2-tag-input--loading{border:none}.bootstrap.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.bootstrap.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.bootstrap3-info.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;padding:4px;cursor:text;box-shadow:inset 0 1px 1px rgba(0,0,0,.075);border-radius:4px}.bootstrap3-info.ng2-tag-input:focus{outline:0}.bootstrap3-info.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid{box-shadow:inset 0 1px 1px #d9534f;border-bottom:1px solid #d9534f}.bootstrap3-info.ng2-tag-input.ng2-tag-input--loading{border:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.bootstrap3-info.ng2-tag-input form{margin:.1em 0}.bootstrap3-info.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.error-message{font-size:.8em;color:#f44336;margin:.5em 0 0}.bootstrap .error-message{color:#d9534f}.ng2-tag-input__text-input{display:inline;vertical-align:middle;border:none;padding:0 .5rem;height:38px;font-size:1em;font-family:Roboto,\"Helvetica Neue\",sans-serif}.ng2-tag-input__text-input:focus{outline:0}.ng2-tag-input__text-input[disabled=true]{opacity:.5;background:#fff}"]
    })], TagInputForm);

    var TagRipple = function TagRipple() {
      _classCallCheck(this, TagRipple);

      this.state = 'none';
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TagRipple.prototype, "state", void 0);
    TagRipple = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'tag-ripple',
      template: "\n        <div class=\"tag-ripple\" [@ink]=\"state\"></div>\n    ",
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('ink', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('none', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
        width: 0,
        opacity: 0
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('none => clicked', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])(300, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
        opacity: 1,
        offset: 0,
        width: '30%',
        borderRadius: '100%'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
        opacity: 1,
        offset: 0.5,
        width: '50%'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
        opacity: 0.5,
        offset: 1,
        width: '100%',
        borderRadius: '16px'
      })]))])])],
      styles: ["\n        :host {\n            width: 100%;\n            height: 100%;\n            left: 0;\n            overflow: hidden;\n            position: absolute;\n        }\n\n        .tag-ripple {\n            background: rgba(0, 0, 0, 0.1);\n            top: 50%;\n            left: 50%;\n            height: 100%;\n            transform: translate(-50%, -50%);\n            position: absolute;\n        }\n    "]
    })], TagRipple); // mocking navigator

    var navigator = typeof window !== 'undefined' ? window.navigator : {
      userAgent: 'Chrome',
      vendor: 'Google Inc'
    };
    var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

    var TagComponent =
    /*#__PURE__*/
    function () {
      function TagComponent(element, renderer, cdRef) {
        _classCallCheck(this, TagComponent);

        this.element = element;
        this.renderer = renderer;
        this.cdRef = cdRef;
        /**
         * @name disabled
         */

        this.disabled = false;
        /**
         * @name onSelect
         */

        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @name onRemove
         */

        this.onRemove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @name onBlur
         */

        this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @name onKeyDown
         */

        this.onKeyDown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @name onTagEdited
         */

        this.onTagEdited = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @name editing
         */

        this.editing = false;
        /**
         * @name rippleState
         */

        this.rippleState = 'none';
      }
      /**
       * @name readonly {boolean}
       */


      _createClass(TagComponent, [{
        key: "select",

        /**
         * @name select
         */
        value: function select($event) {
          if (this.readonly || this.disabled) {
            return;
          }

          if ($event) {
            $event.stopPropagation();
          }

          this.focus();
          this.onSelect.emit(this.model);
        }
        /**
         * @name remove
         */

      }, {
        key: "remove",
        value: function remove($event) {
          $event.stopPropagation();
          this.onRemove.emit(this);
        }
        /**
         * @name focus
         */

      }, {
        key: "focus",
        value: function focus() {
          this.element.nativeElement.focus();
        }
      }, {
        key: "move",
        value: function move() {
          this.moving = true;
        }
        /**
         * @name keydown
         * @param event
         */

      }, {
        key: "keydown",
        value: function keydown(event) {
          if (this.editing) {
            if (event.keyCode === 13) {
              return this.disableEditMode(event);
            }
          } else {
            this.onKeyDown.emit({
              event: event,
              model: this.model
            });
          }
        }
        /**
         * @name blink
         */

      }, {
        key: "blink",
        value: function blink() {
          var classList = this.element.nativeElement.classList;
          classList.add('blink');
          setTimeout(function () {
            return classList.remove('blink');
          }, 50);
        }
        /**
         * @name toggleEditMode
         */

      }, {
        key: "toggleEditMode",
        value: function toggleEditMode() {
          if (this.editable) {
            return this.editing ? undefined : this.activateEditMode();
          }
        }
        /**
         * @name onBlurred
         * @param event
         */

      }, {
        key: "onBlurred",
        value: function onBlurred(event) {
          // Checks if it is editable first before handeling the onBlurred event in order to prevent
          // a bug in IE where tags are still editable with onlyFromAutocomplete set to true
          if (!this.editable) {
            return;
          }

          this.disableEditMode();
          var value = event.target.innerText;
          var result = typeof this.model === 'string' ? value : Object.assign({}, this.model, _defineProperty({}, this.displayBy, value));
          this.onBlur.emit(result);
        }
        /**
         * @name getDisplayValue
         * @param item
         */

      }, {
        key: "getDisplayValue",
        value: function getDisplayValue(item) {
          return typeof item === 'string' ? item : item[this.displayBy];
        }
        /**
         * @desc returns whether the ripple is visible or not
         * only works in Chrome
         * @name isRippleVisible
         */

      }, {
        key: "disableEditMode",

        /**
         * @name disableEditMode
         * @param $event
         */
        value: function disableEditMode($event) {
          var classList = this.element.nativeElement.classList;
          var input = this.getContentEditableText();
          this.editing = false;
          classList.remove('tag--editing');

          if (!input) {
            this.setContentEditableText(this.model);
            return;
          }

          this.storeNewValue(input);
          this.cdRef.detectChanges();

          if ($event) {
            $event.preventDefault();
          }
        }
        /**
         * @name isDeleteIconVisible
         */

      }, {
        key: "isDeleteIconVisible",
        value: function isDeleteIconVisible() {
          return !this.readonly && !this.disabled && this.removable && !this.editing;
        }
        /**
         * @name getContentEditableText
         */

      }, {
        key: "getContentEditableText",
        value: function getContentEditableText() {
          var input = this.getContentEditable();
          return input ? input.innerText.trim() : '';
        }
        /**
         * @name setContentEditableText
         * @param model
         */

      }, {
        key: "setContentEditableText",
        value: function setContentEditableText(model) {
          var input = this.getContentEditable();
          var value = this.getDisplayValue(model);
          input.innerText = value;
        }
        /**
         * @name
         */

      }, {
        key: "activateEditMode",
        value: function activateEditMode() {
          var classList = this.element.nativeElement.classList;
          classList.add('tag--editing');
          this.editing = true;
        }
        /**
         * @name storeNewValue
         * @param input
         */

      }, {
        key: "storeNewValue",
        value: function storeNewValue(input) {
          var _this9 = this,
              _ref;

          var exists = function exists(tag) {
            return typeof tag === 'string' ? tag === input : tag[_this9.displayBy] === input;
          };

          var hasId = function hasId() {
            return _this9.model[_this9.identifyBy] !== _this9.model[_this9.displayBy];
          }; // if the value changed, replace the value in the model


          if (exists(this.model)) {
            return;
          }

          var model = typeof this.model === 'string' ? input : (_ref = {
            index: this.index
          }, _defineProperty(_ref, this.identifyBy, hasId() ? this.model[this.identifyBy] : input), _defineProperty(_ref, this.displayBy, input), _ref);

          if (this.canAddTag(model)) {
            this.onTagEdited.emit({
              tag: model,
              index: this.index
            });
          } else {
            this.setContentEditableText(this.model);
          }
        }
        /**
         * @name getContentEditable
         */

      }, {
        key: "getContentEditable",
        value: function getContentEditable() {
          return this.element.nativeElement.querySelector('[contenteditable]');
        }
      }, {
        key: "readonly",
        get: function get() {
          return typeof this.model !== 'string' && this.model.readonly === true;
        }
      }, {
        key: "isRippleVisible",
        get: function get() {
          return !this.readonly && !this.editing && isChrome && this.hasRipple;
        }
      }]);

      return TagComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TagComponent.prototype, "model", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], TagComponent.prototype, "removable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], TagComponent.prototype, "editable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], TagComponent.prototype, "template", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], TagComponent.prototype, "displayBy", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], TagComponent.prototype, "identifyBy", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], TagComponent.prototype, "index", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], TagComponent.prototype, "hasRipple", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TagComponent.prototype, "disabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function)], TagComponent.prototype, "canAddTag", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], TagComponent.prototype, "onSelect", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], TagComponent.prototype, "onRemove", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], TagComponent.prototype, "onBlur", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], TagComponent.prototype, "onKeyDown", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], TagComponent.prototype, "onTagEdited", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.moving'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], TagComponent.prototype, "moving", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(TagRipple, {
      static: false
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", TagRipple)], TagComponent.prototype, "ripple", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keydown', ['$event']), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], TagComponent.prototype, "keydown", null);
    TagComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'tag',
      template: "<div (click)=\"select($event)\"\n     (dblclick)=\"toggleEditMode()\"\n     (mousedown)=\"rippleState='clicked'\"\n     (mouseup)=\"rippleState='none'\"\n     [ngSwitch]=\"!!template\"\n     [class.disabled]=\"disabled\"\n     [attr.tabindex]=\"-1\"\n     [attr.aria-label]=\"getDisplayValue(model)\">\n\n    <div *ngSwitchCase=\"true\" [attr.contenteditable]=\"editing\">\n        <!-- CUSTOM TEMPLATE -->\n        <ng-template\n            [ngTemplateOutletContext]=\"{ item: model, index: index }\"\n            [ngTemplateOutlet]=\"template\">\n        </ng-template>\n    </div>\n\n    <div *ngSwitchCase=\"false\" class=\"tag-wrapper\">\n        <!-- TAG NAME -->\n        <div [attr.contenteditable]=\"editing\"\n             [attr.title]=\"getDisplayValue(model)\"\n             class=\"tag__text inline\"\n             spellcheck=\"false\"\n             (keydown.enter)=\"disableEditMode($event)\"\n             (keydown.escape)=\"disableEditMode($event)\"\n             (click)=\"editing ? $event.stopPropagation() : undefined\"\n             (blur)=\"onBlurred($event)\">\n            {{ getDisplayValue(model) }}\n        </div>\n\n        <!-- 'X' BUTTON -->\n        <delete-icon\n            aria-label=\"Remove tag\"\n            role=\"button\"\n            (click)=\"remove($event)\"\n            *ngIf=\"isDeleteIconVisible()\">\n        </delete-icon>\n    </div>\n</div>\n\n<tag-ripple [state]=\"rippleState\"\n            [attr.tabindex]=\"-1\"\n            *ngIf=\"isRippleVisible\">\n</tag-ripple>\n",
      styles: [":host,:host>div,:host>div:focus{outline:0;overflow:hidden;transition:opacity 1s;z-index:1}:host{max-width:400px}:host.blink{-webkit-animation:.3s ease-in-out forwards blink;animation:.3s ease-in-out forwards blink}@-webkit-keyframes blink{0%{opacity:.3}}@keyframes blink{0%{opacity:.3}}:host .disabled{cursor:not-allowed}:host [contenteditable=true]{outline:0}.tag-wrapper{flex-direction:row;display:flex}.tag__text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}"]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], TagComponent);
    /**
     * @name animations
     */

    var animations = [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('animation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
      opacity: 1
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
      opacity: 0
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('{{ enter }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
      opacity: 0,
      offset: 0,
      transform: 'translate(0px, 20px)'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
      opacity: 0.3,
      offset: 0.3,
      transform: 'translate(0px, -10px)'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
      opacity: 0.5,
      offset: 0.5,
      transform: 'translate(0px, 0px)'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
      opacity: 0.75,
      offset: 0.75,
      transform: 'translate(0px, 5px)'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
      opacity: 1,
      offset: 1,
      transform: 'translate(0px, 0px)'
    })]))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('{{ leave }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
      opacity: 1,
      transform: 'translateX(0)',
      offset: 0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
      opacity: 1,
      transform: 'translateX(-15px)',
      offset: 0.7
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
      opacity: 0,
      transform: 'translateX(100%)',
      offset: 1.0
    })]))])])];

    var TagInputDropdown =
    /*#__PURE__*/
    function () {
      function TagInputDropdown(injector) {
        var _this10 = this;

        _classCallCheck(this, TagInputDropdown);

        this.injector = injector;
        /**
         * @name offset
         */

        this.offset = defaults.dropdown.offset;
        /**
         * @name focusFirstElement
         */

        this.focusFirstElement = defaults.dropdown.focusFirstElement;
        /**
         * - show autocomplete dropdown if the value of input is empty
         * @name showDropdownIfEmpty
         */

        this.showDropdownIfEmpty = defaults.dropdown.showDropdownIfEmpty;
        /**
         * - desc minimum text length in order to display the autocomplete dropdown
         * @name minimumTextLength
         */

        this.minimumTextLength = defaults.dropdown.minimumTextLength;
        /**
         * - number of items to display in the autocomplete dropdown
         * @name limitItemsTo
         */

        this.limitItemsTo = defaults.dropdown.limitItemsTo;
        /**
         * @name displayBy
         */

        this.displayBy = defaults.dropdown.displayBy;
        /**
         * @name identifyBy
         */

        this.identifyBy = defaults.dropdown.identifyBy;
        /**
         * @description a function a developer can use to implement custom matching for the autocomplete
         * @name matchingFn
         */

        this.matchingFn = defaults.dropdown.matchingFn;
        /**
         * @name appendToBody
         */

        this.appendToBody = defaults.dropdown.appendToBody;
        /**
         * @name keepOpen
         * @description option to leave dropdown open when adding a new item
         */

        this.keepOpen = defaults.dropdown.keepOpen;
        /**
         * @name dynamicUpdate
         */

        this.dynamicUpdate = defaults.dropdown.dynamicUpdate;
        /**
         * @name zIndex
         */

        this.zIndex = defaults.dropdown.zIndex;
        /**
         * list of items that match the current value of the input (for autocomplete)
         * @name items
         */

        this.items = [];
        /**
         * @name tagInput
         */

        this.tagInput = this.injector.get(TagInputComponent);
        /**
         * @name _autocompleteItems
         */

        this._autocompleteItems = [];
        /**
         *
         * @name show
         */

        this.show = function () {
          var maxItemsReached = _this10.tagInput.items.length === _this10.tagInput.maxItems;

          var value = _this10.getFormValue();

          var hasMinimumText = value.trim().length >= _this10.minimumTextLength;

          var position = _this10.calculatePosition();

          var items = _this10.getMatchingItems(value);

          var hasItems = items.length > 0;
          var isHidden = _this10.isVisible === false;
          var showDropdownIfEmpty = _this10.showDropdownIfEmpty && hasItems && !value;
          var isDisabled = _this10.tagInput.disable;
          var shouldShow = isHidden && (hasItems && hasMinimumText || showDropdownIfEmpty);
          var shouldHide = _this10.isVisible && !hasItems;

          if (_this10.autocompleteObservable && hasMinimumText) {
            return _this10.getItemsFromObservable(value);
          }

          if (!_this10.showDropdownIfEmpty && !value || maxItemsReached || isDisabled) {
            return _this10.dropdown.hide();
          }

          _this10.setItems(items);

          if (shouldShow) {
            _this10.dropdown.show(position);
          } else if (shouldHide) {
            _this10.hide();
          }
        };
        /**
         * @name requestAdding
         * @param item {Ng2MenuItem}
         */


        this.requestAdding = function (item) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this10, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var tag;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    tag = this.createTagModel(item);
                    _context.next = 3;
                    return this.tagInput.onAddingRequested(true, tag).catch(function () {});

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        };
        /**
         * @name resetItems
         */


        this.resetItems = function () {
          _this10.items = [];
        };
        /**
         * @name getItemsFromObservable
         * @param text
         */


        this.getItemsFromObservable = function (text) {
          _this10.setLoadingState(true);

          var subscribeFn = function subscribeFn(data) {
            // hide loading animation
            _this10.setLoadingState(false) // add items
            .populateItems(data);

            _this10.setItems(_this10.getMatchingItems(text));

            if (_this10.items.length) {
              _this10.dropdown.show(_this10.calculatePosition());
            } else {
              _this10.dropdown.hide();
            }
          };

          _this10.autocompleteObservable(text).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])()).subscribe(subscribeFn, function () {
            return _this10.setLoadingState(false);
          });
        };
      }
      /**
       * @name autocompleteItems
       * @param items
       */


      _createClass(TagInputDropdown, [{
        key: "ngAfterViewInit",

        /**
         * @name ngAfterviewInit
         */
        value: function ngAfterViewInit() {
          var _this11 = this;

          this.onItemClicked().subscribe(function (item) {
            _this11.requestAdding(item);
          }); // reset itemsMatching array when the dropdown is hidden

          this.onHide().subscribe(this.resetItems);
          var DEBOUNCE_TIME = 200;
          var KEEP_OPEN = this.keepOpen;
          this.tagInput.onTextChange.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(DEBOUNCE_TIME), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (value) {
            if (KEEP_OPEN === false) {
              return value.length > 0;
            }

            return true;
          })).subscribe(this.show);
        }
        /**
         * @name updatePosition
         */

      }, {
        key: "updatePosition",
        value: function updatePosition() {
          var position = this.tagInput.inputForm.getElementPosition();
          this.dropdown.menu.updatePosition(position, this.dynamicUpdate);
        }
        /**
         * @name isVisible
         */

      }, {
        key: "onHide",

        /**
         * @name onHide
         */
        value: function onHide() {
          return this.dropdown.onHide;
        }
        /**
         * @name onItemClicked
         */

      }, {
        key: "onItemClicked",
        value: function onItemClicked() {
          return this.dropdown.onItemClicked;
        }
        /**
         * @name selectedItem
         */

      }, {
        key: "hide",

        /**
         * @name hide
         */
        value: function hide() {
          this.resetItems();
          this.dropdown.hide();
        }
        /**
         * @name scrollListener
         */

      }, {
        key: "scrollListener",
        value: function scrollListener() {
          if (!this.isVisible || !this.dynamicUpdate) {
            return;
          }

          this.updatePosition();
        }
        /**
         * @name onWindowBlur
         */

      }, {
        key: "onWindowBlur",
        value: function onWindowBlur() {
          this.dropdown.hide();
        }
        /**
         * @name getFormValue
         */

      }, {
        key: "getFormValue",
        value: function getFormValue() {
          var formValue = this.tagInput.formValue;
          return formValue ? formValue.toString().trim() : '';
        }
        /**
         * @name calculatePosition
         */

      }, {
        key: "calculatePosition",
        value: function calculatePosition() {
          return this.tagInput.inputForm.getElementPosition();
        }
        /**
         * @name createTagModel
         * @param item
         */

      }, {
        key: "createTagModel",
        value: function createTagModel(item) {
          var _Object$assign2;

          var display = typeof item.value === 'string' ? item.value : item.value[this.displayBy];
          var value = typeof item.value === 'string' ? item.value : item.value[this.identifyBy];
          return Object.assign({}, item.value, (_Object$assign2 = {}, _defineProperty(_Object$assign2, this.tagInput.displayBy, display), _defineProperty(_Object$assign2, this.tagInput.identifyBy, value), _Object$assign2));
        }
        /**
         *
         * @param value {string}
         */

      }, {
        key: "getMatchingItems",
        value: function getMatchingItems(value) {
          var _this12 = this;

          if (!value && !this.showDropdownIfEmpty) {
            return [];
          }

          var dupesAllowed = this.tagInput.allowDupes;
          return this.autocompleteItems.filter(function (item) {
            var hasValue = dupesAllowed ? false : _this12.tagInput.tags.some(function (tag) {
              var identifyBy = _this12.tagInput.identifyBy;
              var model = typeof tag.model === 'string' ? tag.model : tag.model[identifyBy];
              return model === item[_this12.identifyBy];
            });
            return _this12.matchingFn(value, item) && hasValue === false;
          });
        }
        /**
         * @name setItems
         */

      }, {
        key: "setItems",
        value: function setItems(items) {
          this.items = items.slice(0, this.limitItemsTo || items.length);
        }
        /**
         * @name populateItems
         * @param data
         */

      }, {
        key: "populateItems",
        value: function populateItems(data) {
          var _this13 = this;

          this.autocompleteItems = data.map(function (item) {
            var _ref2;

            return typeof item === 'string' ? (_ref2 = {}, _defineProperty(_ref2, _this13.displayBy, item), _defineProperty(_ref2, _this13.identifyBy, item), _ref2) : item;
          });
          return this;
        }
        /**
         * @name setLoadingState
         * @param state
         */

      }, {
        key: "setLoadingState",
        value: function setLoadingState(state) {
          this.tagInput.isLoading = state;
          return this;
        }
      }, {
        key: "autocompleteItems",
        set: function set(items) {
          this._autocompleteItems = items;
        }
        /**
         * @name autocompleteItems
         * @desc array of items that will populate the autocomplete
         */
        ,
        get: function get() {
          var _this14 = this;

          var items = this._autocompleteItems;

          if (!items) {
            return [];
          }

          return items.map(function (item) {
            var _ref3;

            return typeof item === 'string' ? (_ref3 = {}, _defineProperty(_ref3, _this14.displayBy, item), _defineProperty(_ref3, _this14.identifyBy, item), _ref3) : item;
          });
        }
      }, {
        key: "isVisible",
        get: function get() {
          return this.dropdown.menu.dropdownState.menuState.isVisible;
        }
      }, {
        key: "selectedItem",
        get: function get() {
          return this.dropdown.menu.dropdownState.dropdownState.selectedItem;
        }
        /**
         * @name state
         */

      }, {
        key: "state",
        get: function get() {
          return this.dropdown.menu.dropdownState;
        }
      }]);

      return TagInputDropdown;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_4__["Ng2Dropdown"], {
      static: false
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_4__["Ng2Dropdown"])], TagInputDropdown.prototype, "dropdown", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])], TagInputDropdown.prototype, "templates", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], TagInputDropdown.prototype, "offset", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TagInputDropdown.prototype, "focusFirstElement", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TagInputDropdown.prototype, "showDropdownIfEmpty", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function)], TagInputDropdown.prototype, "autocompleteObservable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TagInputDropdown.prototype, "minimumTextLength", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], TagInputDropdown.prototype, "limitItemsTo", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TagInputDropdown.prototype, "displayBy", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TagInputDropdown.prototype, "identifyBy", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function)], TagInputDropdown.prototype, "matchingFn", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TagInputDropdown.prototype, "appendToBody", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TagInputDropdown.prototype, "keepOpen", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TagInputDropdown.prototype, "dynamicUpdate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TagInputDropdown.prototype, "zIndex", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Array])], TagInputDropdown.prototype, "autocompleteItems", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], TagInputDropdown.prototype, "scrollListener", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:blur'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], TagInputDropdown.prototype, "onWindowBlur", null);
    TagInputDropdown = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'tag-input-dropdown',
      template: "<ng2-dropdown [dynamicUpdate]=\"dynamicUpdate\">\n    <ng2-dropdown-menu [focusFirstElement]=\"focusFirstElement\"\n                       [zIndex]=\"zIndex\"\n                       [appendToBody]=\"appendToBody\"\n                       [offset]=\"offset\">\n        <ng2-menu-item *ngFor=\"let item of items; let index = index; let last = last\"\n                       [value]=\"item\"\n                       [ngSwitch]=\"!!templates.length\">\n\n            <span *ngSwitchCase=\"false\"\n                  [innerHTML]=\"item[displayBy] | highlight : tagInput.inputForm.value.value\">\n            </span>\n\n            <ng-template *ngSwitchDefault\n                      [ngTemplateOutlet]=\"templates.first\"\n                      [ngTemplateOutletContext]=\"{ item: item, index: index, last: last }\">\n            </ng-template>\n        </ng2-menu-item>\n    </ng2-dropdown-menu>\n</ng2-dropdown>\n"
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])], TagInputDropdown); // angular universal hacks

    /* tslint:disable-next-line */

    var DragEvent = window.DragEvent;
    var CUSTOM_ACCESSOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
        return TagInputComponent;
      }),
      multi: true
    };

    var TagInputComponent =
    /*#__PURE__*/
    function (_TagInputAccessor) {
      _inherits(TagInputComponent, _TagInputAccessor);

      function TagInputComponent(renderer, dragProvider) {
        var _this15$listeners;

        var _this15;

        _classCallCheck(this, TagInputComponent);

        _this15 = _possibleConstructorReturn(this, _getPrototypeOf(TagInputComponent).call(this));
        _this15.renderer = renderer;
        _this15.dragProvider = dragProvider;
        /**
         * @name separatorKeys
         * @desc keyboard keys with which a user can separate items
         */

        _this15.separatorKeys = defaults.tagInput.separatorKeys;
        /**
         * @name separatorKeyCodes
         * @desc keyboard key codes with which a user can separate items
         */

        _this15.separatorKeyCodes = defaults.tagInput.separatorKeyCodes;
        /**
         * @name placeholder
         * @desc the placeholder of the input text
         */

        _this15.placeholder = defaults.tagInput.placeholder;
        /**
         * @name secondaryPlaceholder
         * @desc placeholder to appear when the input is empty
         */

        _this15.secondaryPlaceholder = defaults.tagInput.secondaryPlaceholder;
        /**
         * @name maxItems
         * @desc maximum number of items that can be added
         */

        _this15.maxItems = defaults.tagInput.maxItems;
        /**
         * @name validators
         * @desc array of Validators that are used to validate the tag before it gets appended to the list
         */

        _this15.validators = defaults.tagInput.validators;
        /**
         * @name asyncValidators
         * @desc array of AsyncValidator that are used to validate the tag before it gets appended to the list
         */

        _this15.asyncValidators = defaults.tagInput.asyncValidators;
        /**
        * - if set to true, it will only possible to add items from the autocomplete
        * @name onlyFromAutocomplete
        */

        _this15.onlyFromAutocomplete = defaults.tagInput.onlyFromAutocomplete;
        /**
         * @name errorMessages
         */

        _this15.errorMessages = defaults.tagInput.errorMessages;
        /**
         * @name theme
         */

        _this15.theme = defaults.tagInput.theme;
        /**
         * @name onTextChangeDebounce
         */

        _this15.onTextChangeDebounce = defaults.tagInput.onTextChangeDebounce;
        /**
         * - custom id assigned to the input
         * @name id
         */

        _this15.inputId = defaults.tagInput.inputId;
        /**
         * - custom class assigned to the input
         */

        _this15.inputClass = defaults.tagInput.inputClass;
        /**
         * - option to clear text input when the form is blurred
         * @name clearOnBlur
         */

        _this15.clearOnBlur = defaults.tagInput.clearOnBlur;
        /**
         * - hideForm
         * @name clearOnBlur
         */

        _this15.hideForm = defaults.tagInput.hideForm;
        /**
         * @name addOnBlur
         */

        _this15.addOnBlur = defaults.tagInput.addOnBlur;
        /**
         * @name addOnPaste
         */

        _this15.addOnPaste = defaults.tagInput.addOnPaste;
        /**
         * - pattern used with the native method split() to separate patterns in the string pasted
         * @name pasteSplitPattern
         */

        _this15.pasteSplitPattern = defaults.tagInput.pasteSplitPattern;
        /**
         * @name blinkIfDupe
         */

        _this15.blinkIfDupe = defaults.tagInput.blinkIfDupe;
        /**
         * @name removable
         */

        _this15.removable = defaults.tagInput.removable;
        /**
         * @name editable
         */

        _this15.editable = defaults.tagInput.editable;
        /**
         * @name allowDupes
         */

        _this15.allowDupes = defaults.tagInput.allowDupes;
        /**
         * @description if set to true, the newly added tags will be added as strings, and not objects
         * @name modelAsStrings
         */

        _this15.modelAsStrings = defaults.tagInput.modelAsStrings;
        /**
         * @name trimTags
         */

        _this15.trimTags = defaults.tagInput.trimTags;
        /**
         * @name ripple
         */

        _this15.ripple = defaults.tagInput.ripple;
        /**
         * @name tabindex
         * @desc pass through the specified tabindex to the input
         */

        _this15.tabindex = defaults.tagInput.tabIndex;
        /**
         * @name disable
         */

        _this15.disable = defaults.tagInput.disable;
        /**
         * @name dragZone
         */

        _this15.dragZone = defaults.tagInput.dragZone;
        /**
         * @name onRemoving
         */

        _this15.onRemoving = defaults.tagInput.onRemoving;
        /**
         * @name onAdding
         */

        _this15.onAdding = defaults.tagInput.onAdding;
        /**
         * @name animationDuration
         */

        _this15.animationDuration = defaults.tagInput.animationDuration;
        /**
         * @name onAdd
         * @desc event emitted when adding a new item
         */

        _this15.onAdd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @name onRemove
         * @desc event emitted when removing an existing item
         */

        _this15.onRemove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @name onSelect
         * @desc event emitted when selecting an item
         */

        _this15.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @name onFocus
         * @desc event emitted when the input is focused
         */

        _this15.onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @name onFocus
         * @desc event emitted when the input is blurred
         */

        _this15.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @name onTextChange
         * @desc event emitted when the input value changes
         */

        _this15.onTextChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * - output triggered when text is pasted in the form
         * @name onPaste
         */

        _this15.onPaste = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * - output triggered when tag entered is not valid
         * @name onValidationError
         */

        _this15.onValidationError = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * - output triggered when tag is edited
         * @name onTagEdited
         */

        _this15.onTagEdited = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @name isLoading
         */

        _this15.isLoading = false;
        /**
         * @name listeners
         * @desc array of events that get fired using @fireEvents
         */

        _this15.listeners = (_this15$listeners = {}, _defineProperty(_this15$listeners, KEYDOWN, []), _defineProperty(_this15$listeners, KEYUP, []), _this15$listeners);
        /**
         * @description emitter for the 2-way data binding inputText value
         * @name inputTextChange
         */

        _this15.inputTextChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @description private variable to bind get/set
         * @name inputTextValue
         */

        _this15.inputTextValue = '';
        _this15.errors = [];
        /**
         * @name appendTag
         * @param tag {TagModel}
         */

        _this15.appendTag = function (tag) {
          var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this15.items.length;
          var items = _this15.items;
          var model = _this15.modelAsStrings ? tag[_this15.identifyBy] : tag;
          _this15.items = [].concat(_toConsumableArray(items.slice(0, index)), [model], _toConsumableArray(items.slice(index, items.length)));
        };
        /**
         * @name createTag
         * @param model
         */


        _this15.createTag = function (model) {
          var _Object$assign3;

          var trim = function trim(val, key) {
            return typeof val === 'string' ? val.trim() : val[key];
          };

          return Object.assign({}, typeof model !== 'string' ? model : {}, (_Object$assign3 = {}, _defineProperty(_Object$assign3, _this15.displayBy, _this15.trimTags ? trim(model, _this15.displayBy) : model), _defineProperty(_Object$assign3, _this15.identifyBy, _this15.trimTags ? trim(model, _this15.identifyBy) : model), _Object$assign3));
        };
        /**
         *
         * @param tag
         * @param isFromAutocomplete
         */


        _this15.isTagValid = function (tag) {
          var fromAutocomplete = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          var selectedItem = _this15.dropdown ? _this15.dropdown.selectedItem : undefined;

          var value = _this15.getItemDisplay(tag).trim();

          if (selectedItem && !fromAutocomplete || !value) {
            return false;
          }

          var dupe = _this15.findDupe(tag, fromAutocomplete); // if so, give a visual cue and return false


          if (!_this15.allowDupes && dupe && _this15.blinkIfDupe) {
            var model = _this15.tags.find(function (item) {
              return _this15.getItemValue(item.model) === _this15.getItemValue(dupe);
            });

            if (model) {
              model.blink();
            }
          }

          var isFromAutocomplete = fromAutocomplete && _this15.onlyFromAutocomplete;
          var assertions = [// 1. there must be no dupe OR dupes are allowed
          !dupe || _this15.allowDupes, // 2. check max items has not been reached
          !_this15.maxItemsReached, // 3. check item comes from autocomplete or onlyFromAutocomplete is false
          isFromAutocomplete || !_this15.onlyFromAutocomplete];
          return assertions.filter(Boolean).length === assertions.length;
        };
        /**
         * @name onPasteCallback
         * @param data
         */


        _this15.onPasteCallback = function (data) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_assertThisInitialized(_this15), void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var _this16 = this;

            var getText, text, requests, resetInput;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    getText = function getText() {
                      var isIE = Boolean(window.clipboardData);
                      var clipboardData = isIE ? window.clipboardData : data.clipboardData;
                      var type = isIE ? 'Text' : 'text/plain';
                      return clipboardData === null ? '' : clipboardData.getData(type) || '';
                    };

                    text = getText();
                    requests = text.split(this.pasteSplitPattern).map(function (item) {
                      var tag = _this16.createTag(item);

                      _this16.setInputValue(tag[_this16.displayBy]);

                      return _this16.onAddingRequested(false, tag);
                    });

                    resetInput = function resetInput() {
                      return setTimeout(function () {
                        return _this16.setInputValue('');
                      }, 50);
                    };

                    Promise.all(requests).then(function () {
                      _this16.onPaste.emit(text);

                      resetInput();
                    }).catch(resetInput);

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        };

        return _this15;
      }
      /**
       * @name inputText
       */


      _createClass(TagInputComponent, [{
        key: "ngAfterViewInit",

        /**
         * @name ngAfterViewInit
         */
        value: function ngAfterViewInit() {
          var _this17 = this;

          // set up listeners
          this.setUpKeypressListeners();
          this.setupSeparatorKeysListener();
          this.setUpInputKeydownListeners();

          if (this.onTextChange.observers.length) {
            this.setUpTextChangeSubscriber();
          } // if clear on blur is set to true, subscribe to the event and clear the text's form


          if (this.clearOnBlur || this.addOnBlur) {
            this.setUpOnBlurSubscriber();
          } // if addOnPaste is set to true, register the handler and add items


          if (this.addOnPaste) {
            this.setUpOnPasteListener();
          }

          var statusChanges$ = this.inputForm.form.statusChanges;
          statusChanges$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (status) {
            return status !== 'PENDING';
          })).subscribe(function () {
            _this17.errors = _this17.inputForm.getErrorMessages(_this17.errorMessages);
          });
          this.isProgressBarVisible$ = statusChanges$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (status) {
            return status === 'PENDING' || _this17.isLoading;
          })); // if hideForm is set to true, remove the input

          if (this.hideForm) {
            this.inputForm.destroy();
          }
        }
        /**
         * @name ngOnInit
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          // if the number of items specified in the model is > of the value of maxItems
          // degrade gracefully and let the max number of items to be the number of items in the model
          // though, warn the user.
          var hasReachedMaxItems = this.maxItems !== undefined && this.items && this.items.length > this.maxItems;

          if (hasReachedMaxItems) {
            this.maxItems = this.items.length;
            console.warn(MAX_ITEMS_WARNING);
          } // Setting editable to false to fix problem with tags in IE still being editable when
          // onlyFromAutocomplete is true


          this.editable = this.onlyFromAutocomplete ? false : this.editable;
          this.setAnimationMetadata();
        }
        /**
         * @name onRemoveRequested
         * @param tag
         * @param index
         */

      }, {
        key: "onRemoveRequested",
        value: function onRemoveRequested(tag, index) {
          var _this18 = this;

          return new Promise(function (resolve) {
            var subscribeFn = function subscribeFn(model) {
              _this18.removeItem(model, index);

              resolve(tag);
            };

            _this18.onRemoving ? _this18.onRemoving(tag).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])()).subscribe(subscribeFn) : subscribeFn(tag);
          });
        }
        /**
         * @name onAddingRequested
         * @param fromAutocomplete {boolean}
         * @param tag {TagModel}
         * @param index? {number}
         * @param giveupFocus? {boolean}
         */

      }, {
        key: "onAddingRequested",
        value: function onAddingRequested(fromAutocomplete, tag, index, giveupFocus) {
          var _this19 = this;

          return new Promise(function (resolve, reject) {
            var subscribeFn = function subscribeFn(model) {
              return _this19.addItem(fromAutocomplete, model, index, giveupFocus).then(resolve).catch(reject);
            };

            return _this19.onAdding ? _this19.onAdding(tag).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])()).subscribe(subscribeFn, reject) : subscribeFn(tag);
          });
        }
        /**
         * @name selectItem
         * @desc selects item passed as parameter as the selected tag
         * @param item
         * @param emit
         */

      }, {
        key: "selectItem",
        value: function selectItem(item) {
          var emit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          var isReadonly = item && typeof item !== 'string' && item.readonly;

          if (isReadonly || this.selectedTag === item) {
            return;
          }

          this.selectedTag = item;

          if (emit) {
            this.onSelect.emit(item);
          }
        }
        /**
         * @name fireEvents
         * @desc goes through the list of the events for a given eventName, and fires each of them
         * @param eventName
         * @param $event
         */

      }, {
        key: "fireEvents",
        value: function fireEvents(eventName, $event) {
          var _this20 = this;

          this.listeners[eventName].forEach(function (listener) {
            return listener.call(_this20, $event);
          });
        }
        /**
         * @name handleKeydown
         * @desc handles action when the user hits a keyboard key
         * @param data
         */

      }, {
        key: "handleKeydown",
        value: function handleKeydown(data) {
          var event = data.event;
          var key = event.keyCode || event.which;
          var shiftKey = event.shiftKey || false;

          switch (KEY_PRESS_ACTIONS[key]) {
            case ACTIONS_KEYS.DELETE:
              if (this.selectedTag && this.removable) {
                var index = this.items.indexOf(this.selectedTag);
                this.onRemoveRequested(this.selectedTag, index);
              }

              break;

            case ACTIONS_KEYS.SWITCH_PREV:
              this.moveToTag(data.model, PREV);
              break;

            case ACTIONS_KEYS.SWITCH_NEXT:
              this.moveToTag(data.model, NEXT);
              break;

            case ACTIONS_KEYS.TAB:
              if (shiftKey) {
                if (this.isFirstTag(data.model)) {
                  return;
                }

                this.moveToTag(data.model, PREV);
              } else {
                if (this.isLastTag(data.model) && (this.disable || this.maxItemsReached)) {
                  return;
                }

                this.moveToTag(data.model, NEXT);
              }

              break;

            default:
              return;
          } // prevent default behaviour


          event.preventDefault();
        }
      }, {
        key: "onFormSubmit",
        value: function onFormSubmit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.prev = 0;
                    _context3.next = 3;
                    return this.onAddingRequested(false, this.formValue);

                  case 3:
                    _context3.next = 8;
                    break;

                  case 5:
                    _context3.prev = 5;
                    _context3.t0 = _context3["catch"](0);
                    return _context3.abrupt("return");

                  case 8:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this, [[0, 5]]);
          }));
        }
        /**
         * @name setInputValue
         * @param value
         */

      }, {
        key: "setInputValue",
        value: function setInputValue(value) {
          var emitEvent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          var control = this.getControl(); // update form value with the transformed item

          control.setValue(value, {
            emitEvent: emitEvent
          });
        }
        /**
         * @name getControl
         */

      }, {
        key: "getControl",
        value: function getControl() {
          return this.inputForm.value;
        }
        /**
         * @name focus
         * @param applyFocus
         * @param displayAutocomplete
         */

      }, {
        key: "focus",
        value: function focus() {
          var applyFocus = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          var displayAutocomplete = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

          if (this.dragProvider.getState('dragging')) {
            return;
          }

          this.selectItem(undefined, false);

          if (applyFocus) {
            this.inputForm.focus();
            this.onFocus.emit(this.formValue);
          }
        }
        /**
         * @name blur
         */

      }, {
        key: "blur",
        value: function blur() {
          this.onTouched();
          this.onBlur.emit(this.formValue);
        }
        /**
         * @name hasErrors
         */

      }, {
        key: "hasErrors",
        value: function hasErrors() {
          return !!this.inputForm && this.inputForm.hasErrors();
        }
        /**
         * @name isInputFocused
         */

      }, {
        key: "isInputFocused",
        value: function isInputFocused() {
          return !!this.inputForm && this.inputForm.isInputFocused();
        }
        /**
         * - this is the one way I found to tell if the template has been passed and it is not
         * the template for the menu item
         * @name hasCustomTemplate
         */

      }, {
        key: "hasCustomTemplate",
        value: function hasCustomTemplate() {
          var template = this.templates ? this.templates.first : undefined;
          var menuTemplate = this.dropdown && this.dropdown.templates ? this.dropdown.templates.first : undefined;
          return Boolean(template && template !== menuTemplate);
        }
        /**
         * @name maxItemsReached
         */

      }, {
        key: "onDragStarted",

        /**3
         * @name onDragStarted
         * @param event
         * @param index
         */
        value: function onDragStarted(event, tag, index) {
          event.stopPropagation();
          var item = {
            zone: this.dragZone,
            tag: tag,
            index: index
          };
          this.dragProvider.setSender(this);
          this.dragProvider.setDraggedItem(event, item);
          this.dragProvider.setState({
            dragging: true,
            index: index
          });
        }
        /**
         * @name onDragOver
         * @param event
         */

      }, {
        key: "onDragOver",
        value: function onDragOver(event, index) {
          this.dragProvider.setState({
            dropping: true
          });
          this.dragProvider.setReceiver(this);
          event.preventDefault();
        }
        /**
         * @name onTagDropped
         * @param event
         * @param index
         */

      }, {
        key: "onTagDropped",
        value: function onTagDropped(event, index) {
          var item = this.dragProvider.getDraggedItem(event);

          if (!item || item.zone !== this.dragZone) {
            return;
          }

          this.dragProvider.onTagDropped(item.tag, item.index, index);
          event.preventDefault();
          event.stopPropagation();
        }
        /**
         * @name isDropping
         */

      }, {
        key: "isDropping",
        value: function isDropping() {
          var isReceiver = this.dragProvider.receiver === this;
          var isDropping = this.dragProvider.getState('dropping');
          return Boolean(isReceiver && isDropping);
        }
        /**
         * @name onTagBlurred
         * @param changedElement {TagModel}
         * @param index {number}
         */

      }, {
        key: "onTagBlurred",
        value: function onTagBlurred(changedElement, index) {
          this.items[index] = changedElement;
          this.blur();
        }
        /**
         * @name trackBy
         * @param items
         */

      }, {
        key: "trackBy",
        value: function trackBy(index, item) {
          return item[this.identifyBy];
        }
        /**
         * @name updateEditedTag
         * @param tag
         */

      }, {
        key: "updateEditedTag",
        value: function updateEditedTag(_ref4) {
          var tag = _ref4.tag,
              index = _ref4.index;
          this.onTagEdited.emit(tag);
        }
        /**
         * @name moveToTag
         * @param item
         * @param direction
         */

      }, {
        key: "moveToTag",
        value: function moveToTag(item, direction) {
          var isLast = this.isLastTag(item);
          var isFirst = this.isFirstTag(item);
          var stopSwitch = direction === NEXT && isLast || direction === PREV && isFirst;

          if (stopSwitch) {
            this.focus(true);
            return;
          }

          var offset = direction === NEXT ? 1 : -1;
          var index = this.getTagIndex(item) + offset;
          var tag = this.getTagAtIndex(index);
          return tag.select.call(tag);
        }
        /**
         * @name isFirstTag
         * @param item {TagModel}
         */

      }, {
        key: "isFirstTag",
        value: function isFirstTag(item) {
          return this.tags.first.model === item;
        }
        /**
         * @name isLastTag
         * @param item {TagModel}
         */

      }, {
        key: "isLastTag",
        value: function isLastTag(item) {
          return this.tags.last.model === item;
        }
        /**
         * @name getTagIndex
         * @param item
         */

      }, {
        key: "getTagIndex",
        value: function getTagIndex(item) {
          var tags = this.tags.toArray();
          return tags.findIndex(function (tag) {
            return tag.model === item;
          });
        }
        /**
         * @name getTagAtIndex
         * @param index
         */

      }, {
        key: "getTagAtIndex",
        value: function getTagAtIndex(index) {
          var tags = this.tags.toArray();
          return tags[index];
        }
        /**
         * @name removeItem
         * @desc removes an item from the array of the model
         * @param tag {TagModel}
         * @param index {number}
         */

      }, {
        key: "removeItem",
        value: function removeItem(tag, index) {
          this.items = this.getItemsWithout(index); // if the removed tag was selected, set it as undefined

          if (this.selectedTag === tag) {
            this.selectItem(undefined, false);
          } // focus input


          this.focus(true, false); // emit remove event

          this.onRemove.emit(tag);
        }
        /**
         * @name addItem
         * @desc adds the current text model to the items array
         * @param fromAutocomplete {boolean}
         * @param item {TagModel}
         * @param index? {number}
         * @param giveupFocus? {boolean}
         */

      }, {
        key: "addItem",
        value: function addItem() {
          var _this21 = this;

          var fromAutocomplete = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          var item = arguments.length > 1 ? arguments[1] : undefined;
          var index = arguments.length > 2 ? arguments[2] : undefined;
          var giveupFocus = arguments.length > 3 ? arguments[3] : undefined;
          var display = this.getItemDisplay(item);
          var tag = this.createTag(item);

          if (fromAutocomplete) {
            this.setInputValue(this.getItemValue(item, true));
          }

          return new Promise(function (resolve, reject) {
            /**
             * @name reset
             */
            var reset = function reset() {
              // reset control and focus input
              _this21.setInputValue('');

              if (giveupFocus) {
                _this21.focus(false, false);
              } else {
                // focus input
                _this21.focus(true, false);
              }

              resolve(display);
            };

            var appendItem = function appendItem() {
              _this21.appendTag(tag, index); // emit event


              _this21.onAdd.emit(tag);

              if (!_this21.dropdown) {
                return;
              }

              _this21.dropdown.hide();

              if (_this21.dropdown.showDropdownIfEmpty) {
                _this21.dropdown.show();
              }
            };

            var status = _this21.inputForm.form.status;

            var isTagValid = _this21.isTagValid(tag, fromAutocomplete);

            var onValidationError = function onValidationError() {
              _this21.onValidationError.emit(tag);

              return reject();
            };

            if (status === 'VALID' && isTagValid) {
              appendItem();
              return reset();
            }

            if (status === 'INVALID' || !isTagValid) {
              reset();
              return onValidationError();
            }

            if (status === 'PENDING') {
              var statusUpdate$ = _this21.inputForm.form.statusChanges;
              return statusUpdate$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (statusUpdate) {
                return statusUpdate !== 'PENDING';
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])()).subscribe(function (statusUpdate) {
                if (statusUpdate === 'VALID' && isTagValid) {
                  appendItem();
                  return reset();
                } else {
                  reset();
                  return onValidationError();
                }
              });
            }
          });
        }
        /**
         * @name setupSeparatorKeysListener
         */

      }, {
        key: "setupSeparatorKeysListener",
        value: function setupSeparatorKeysListener() {
          var _this22 = this;

          var useSeparatorKeys = this.separatorKeyCodes.length > 0 || this.separatorKeys.length > 0;

          var listener = function listener($event) {
            var hasKeyCode = _this22.separatorKeyCodes.indexOf($event.keyCode) >= 0;
            var hasKey = _this22.separatorKeys.indexOf($event.key) >= 0; // the keyCode of keydown event is 229 when IME is processing the key event.

            var isIMEProcessing = $event.keyCode === 229;

            if (hasKeyCode || hasKey && !isIMEProcessing) {
              $event.preventDefault();

              _this22.onAddingRequested(false, _this22.formValue).catch(function () {});
            }
          };

          listen.call(this, KEYDOWN, listener, useSeparatorKeys);
        }
        /**
         * @name setUpKeypressListeners
         */

      }, {
        key: "setUpKeypressListeners",
        value: function setUpKeypressListeners() {
          var _this23 = this;

          var listener = function listener($event) {
            var isCorrectKey = $event.keyCode === 37 || $event.keyCode === 8;

            if (isCorrectKey && !_this23.formValue && _this23.items.length) {
              _this23.tags.last.select.call(_this23.tags.last);
            }
          }; // setting up the keypress listeners


          listen.call(this, KEYDOWN, listener);
        }
        /**
         * @name setUpKeydownListeners
         */

      }, {
        key: "setUpInputKeydownListeners",
        value: function setUpInputKeydownListeners() {
          var _this24 = this;

          this.inputForm.onKeydown.subscribe(function (event) {
            if (event.key === 'Backspace' && _this24.formValue.trim() === '') {
              event.preventDefault();
            }
          });
        }
        /**
         * @name setUpOnPasteListener
         */

      }, {
        key: "setUpOnPasteListener",
        value: function setUpOnPasteListener() {
          var _this25 = this;

          var input = this.inputForm.input.nativeElement; // attach listener to input

          this.renderer.listen(input, 'paste', function (event) {
            _this25.onPasteCallback(event);

            event.preventDefault();
            return true;
          });
        }
        /**
         * @name setUpTextChangeSubscriber
         */

      }, {
        key: "setUpTextChangeSubscriber",
        value: function setUpTextChangeSubscriber() {
          var _this26 = this;

          this.inputForm.form.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(this.onTextChangeDebounce)).subscribe(function (value) {
            _this26.onTextChange.emit(value.item);
          });
        }
        /**
         * @name setUpOnBlurSubscriber
         */

      }, {
        key: "setUpOnBlurSubscriber",
        value: function setUpOnBlurSubscriber() {
          var _this27 = this;

          var filterFn = function filterFn() {
            var isVisible = _this27.dropdown && _this27.dropdown.isVisible;
            return !isVisible && !!_this27.formValue;
          };

          this.inputForm.onBlur.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(100), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(filterFn)).subscribe(function () {
            var reset = function reset() {
              return _this27.setInputValue('');
            };

            if (_this27.addOnBlur) {
              return _this27.onAddingRequested(false, _this27.formValue, undefined, true).then(reset).catch(reset);
            }

            reset();
          });
        }
        /**
         * @name findDupe
         * @param tag
         * @param isFromAutocomplete
         */

      }, {
        key: "findDupe",
        value: function findDupe(tag, isFromAutocomplete) {
          var _this28 = this;

          var identifyBy = isFromAutocomplete ? this.dropdown.identifyBy : this.identifyBy;
          var id = tag[identifyBy];
          return this.items.find(function (item) {
            return _this28.getItemValue(item) === id;
          });
        }
        /**
         * @name setAnimationMetadata
         */

      }, {
        key: "setAnimationMetadata",
        value: function setAnimationMetadata() {
          this.animationMetadata = {
            value: 'in',
            params: Object.assign({}, this.animationDuration)
          };
        }
      }, {
        key: "inputText",
        get: function get() {
          return this.inputTextValue;
        }
        /**
         * @name inputText
         * @param text
         */
        ,
        set: function set(text) {
          this.inputTextValue = text;
          this.inputTextChange.emit(text);
        }
        /**
         * @desc removes the tab index if it is set - it will be passed through to the input
         * @name tabindexAttr
         */

      }, {
        key: "tabindexAttr",
        get: function get() {
          return this.tabindex !== '' ? '-1' : '';
        }
      }, {
        key: "maxItemsReached",
        get: function get() {
          return this.maxItems !== undefined && this.items.length >= this.maxItems;
        }
        /**
         * @name formValue
         */

      }, {
        key: "formValue",
        get: function get() {
          var form = this.inputForm.value;
          return form ? form.value : '';
        }
      }]);

      return TagInputComponent;
    }(TagInputAccessor);

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], TagInputComponent.prototype, "separatorKeys", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], TagInputComponent.prototype, "separatorKeyCodes", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], TagInputComponent.prototype, "placeholder", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], TagInputComponent.prototype, "secondaryPlaceholder", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], TagInputComponent.prototype, "maxItems", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], TagInputComponent.prototype, "validators", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], TagInputComponent.prototype, "asyncValidators", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TagInputComponent.prototype, "onlyFromAutocomplete", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TagInputComponent.prototype, "errorMessages", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], TagInputComponent.prototype, "theme", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TagInputComponent.prototype, "onTextChangeDebounce", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TagInputComponent.prototype, "inputId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], TagInputComponent.prototype, "inputClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], TagInputComponent.prototype, "clearOnBlur", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], TagInputComponent.prototype, "hideForm", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], TagInputComponent.prototype, "addOnBlur", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], TagInputComponent.prototype, "addOnPaste", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TagInputComponent.prototype, "pasteSplitPattern", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TagInputComponent.prototype, "blinkIfDupe", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TagInputComponent.prototype, "removable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], TagInputComponent.prototype, "editable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TagInputComponent.prototype, "allowDupes", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TagInputComponent.prototype, "modelAsStrings", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TagInputComponent.prototype, "trimTags", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String])], TagInputComponent.prototype, "inputText", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], TagInputComponent.prototype, "ripple", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], TagInputComponent.prototype, "tabindex", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], TagInputComponent.prototype, "disable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], TagInputComponent.prototype, "dragZone", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TagInputComponent.prototype, "onRemoving", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TagInputComponent.prototype, "onAdding", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TagInputComponent.prototype, "animationDuration", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TagInputComponent.prototype, "onAdd", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TagInputComponent.prototype, "onRemove", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TagInputComponent.prototype, "onSelect", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TagInputComponent.prototype, "onFocus", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TagInputComponent.prototype, "onBlur", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TagInputComponent.prototype, "onTextChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TagInputComponent.prototype, "onPaste", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TagInputComponent.prototype, "onValidationError", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TagInputComponent.prototype, "onTagEdited", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(TagInputDropdown, {
      static: false
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", TagInputDropdown)], TagInputComponent.prototype, "dropdown", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], {
      descendants: false
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])], TagInputComponent.prototype, "templates", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(TagInputForm, {
      static: false
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", TagInputForm)], TagInputComponent.prototype, "inputForm", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(TagComponent), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])], TagInputComponent.prototype, "tags", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], TagInputComponent.prototype, "inputTextChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('attr.tabindex'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], TagInputComponent.prototype, "tabindexAttr", null);
    TagInputComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'tag-input',
      providers: [CUSTOM_ACCESSOR],
      template: "<div\n    [ngClass]=\"theme\"\n    class=\"ng2-tag-input\"\n    (click)=\"focus(true, false)\"\n    [attr.tabindex]=\"-1\"\n    (drop)=\"dragZone ? onTagDropped($event, undefined) : undefined\"\n    (dragenter)=\"dragZone ? onDragOver($event) : undefined\"\n    (dragover)=\"dragZone ? onDragOver($event) : undefined\"\n    (dragend)=\"dragZone ? dragProvider.onDragEnd() : undefined\"\n    [class.ng2-tag-input--dropping]=\"isDropping()\"\n    [class.ng2-tag-input--disabled]=\"disable\"\n    [class.ng2-tag-input--loading]=\"isLoading\"\n    [class.ng2-tag-input--invalid]=\"hasErrors()\"\n    [class.ng2-tag-input--focused]=\"isInputFocused()\"\n>\n\n    <!-- TAGS -->\n    <div class=\"ng2-tags-container\">\n        <tag\n            *ngFor=\"let item of items; let i = index; trackBy: trackBy\"\n            (onSelect)=\"selectItem(item)\"\n            (onRemove)=\"onRemoveRequested(item, i)\"\n            (onKeyDown)=\"handleKeydown($event)\"\n            (onTagEdited)=\"updateEditedTag($event)\"\n            (onBlur)=\"onTagBlurred($event, i)\"\n            draggable=\"{{ editable }}\"\n            (dragstart)=\"dragZone ? onDragStarted($event, item, i) : undefined\"\n            (drop)=\"dragZone ? onTagDropped($event, i) : undefined\"\n            (dragenter)=\"dragZone ? onDragOver($event) : undefined\"\n            (dragover)=\"dragZone ? onDragOver($event, i) : undefined\"\n            (dragleave)=\"dragZone ? dragProvider.onDragEnd() : undefined\"\n            [canAddTag]=\"isTagValid\"\n            [attr.tabindex]=\"0\"\n            [disabled]=\"disable\"\n            [@animation]=\"animationMetadata\"\n            [hasRipple]=\"ripple\"\n            [index]=\"i\"\n            [removable]=\"removable\"\n            [editable]=\"editable\"\n            [displayBy]=\"displayBy\"\n            [identifyBy]=\"identifyBy\"\n            [template]=\"!!hasCustomTemplate() ? templates.first : undefined\"\n            [draggable]=\"dragZone\"\n            [model]=\"item\"\n        >\n        </tag>\n\n        <tag-input-form\n            (onSubmit)=\"onFormSubmit()\"\n            (onBlur)=\"blur()\"\n            (click)=\"dropdown ? dropdown.show() : undefined\"\n            (onKeydown)=\"fireEvents('keydown', $event)\"\n            (onKeyup)=\"fireEvents('keyup', $event)\"\n            [(inputText)]=\"inputText\"\n            [disabled]=\"disable\"\n            [validators]=\"validators\"\n            [asyncValidators]=\"asyncValidators\"\n            [hidden]=\"maxItemsReached\"\n            [placeholder]=\"items.length ? placeholder : secondaryPlaceholder\"\n            [inputClass]=\"inputClass\"\n            [inputId]=\"inputId\"\n            [tabindex]=\"tabindex\"\n        >\n        </tag-input-form>\n    </div>\n\n    <div\n        class=\"progress-bar\"\n        *ngIf=\"isProgressBarVisible$ | async\"\n    ></div>\n</div>\n\n<!-- ERRORS -->\n<div\n    *ngIf=\"hasErrors()\"\n    [ngClass]=\"theme\"\n    class=\"error-messages\"\n>\n    <p\n        *ngFor=\"let error of errors\"\n        class=\"error-message\"\n    >\n        <span>{{ error }}</span>\n    </p>\n</div>\n<ng-content></ng-content>",
      animations: animations,
      styles: [".dark tag:focus{box-shadow:0 0 0 1px #323232}.ng2-tag-input.bootstrap3-info{background-color:#fff;display:inline-block;color:#555;vertical-align:middle;max-width:100%;height:42px;line-height:44px}.ng2-tag-input.bootstrap3-info input{border:none;box-shadow:none;outline:0;background-color:transparent;padding:0 6px;margin:0;width:auto;max-width:inherit}.ng2-tag-input.bootstrap3-info .form-control input::-moz-placeholder{color:#777;opacity:1}.ng2-tag-input.bootstrap3-info .form-control input:-ms-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info .form-control input::-webkit-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info input:focus{border:none;box-shadow:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--focused{box-shadow:inset 0 1px 1px rgba(0,0,0,.4);border:1px solid #ccc}.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;transition:.25s;padding:.25rem 0;min-height:32px;cursor:text;border-bottom:2px solid #efefef}.ng2-tag-input:focus{outline:0}.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.ng2-tag-input.ng2-tag-input--focused{border-bottom:2px solid #2196f3}.ng2-tag-input.ng2-tag-input--invalid{border-bottom:2px solid #f44336}.ng2-tag-input.ng2-tag-input--loading{border:none}.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.ng2-tag-input form{margin:.1em 0}.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.minimal.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:1px solid transparent}.minimal.ng2-tag-input:focus{outline:0}.minimal.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.minimal.ng2-tag-input.ng2-tag-input--loading{border:none}.minimal.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.minimal.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.dark.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #444}.dark.ng2-tag-input:focus{outline:0}.dark.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.dark.ng2-tag-input.ng2-tag-input--loading{border:none}.dark.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.dark.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.bootstrap.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #efefef}.bootstrap.ng2-tag-input:focus{outline:0}.bootstrap.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.bootstrap.ng2-tag-input.ng2-tag-input--focused{border-bottom:2px solid #0275d8}.bootstrap.ng2-tag-input.ng2-tag-input--invalid{border-bottom:2px solid #d9534f}.bootstrap.ng2-tag-input.ng2-tag-input--loading{border:none}.bootstrap.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.bootstrap.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.bootstrap3-info.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;padding:4px;cursor:text;box-shadow:inset 0 1px 1px rgba(0,0,0,.075);border-radius:4px}.bootstrap3-info.ng2-tag-input:focus{outline:0}.bootstrap3-info.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid{box-shadow:inset 0 1px 1px #d9534f;border-bottom:1px solid #d9534f}.bootstrap3-info.ng2-tag-input.ng2-tag-input--loading{border:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.bootstrap3-info.ng2-tag-input form{margin:.1em 0}.bootstrap3-info.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.error-message{font-size:.8em;color:#f44336;margin:.5em 0 0}.bootstrap .error-message{color:#d9534f}.progress-bar,.progress-bar:before{height:2px;width:100%;margin:0}.progress-bar{background-color:#2196f3;display:flex;position:absolute;bottom:0}.progress-bar:before{background-color:#82c4f8;content:\"\";-webkit-animation:2s cubic-bezier(.4,0,.2,1) infinite running-progress;animation:2s cubic-bezier(.4,0,.2,1) infinite running-progress}@-webkit-keyframes running-progress{0%{margin-left:0;margin-right:100%}50%{margin-left:25%;margin-right:0}100%{margin-left:100%;margin-right:0}}@keyframes running-progress{0%{margin-left:0;margin-right:100%}50%{margin-left:25%;margin-right:0}100%{margin-left:100%;margin-right:0}}tag{display:flex;flex-direction:row;flex-wrap:wrap;font-family:Roboto,\"Helvetica Neue\",sans-serif;font-weight:400;font-size:1em;letter-spacing:.05rem;color:#444;border-radius:16px;transition:.3s;margin:.1rem .3rem .1rem 0;padding:.08rem .45rem;height:32px;line-height:34px;background:#efefef;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative}tag:not(.readonly):not(.tag--editing):focus{background:#2196f3;color:#fff;box-shadow:0 2px 3px 1px #d4d1d1}tag:not(.readonly):not(.tag--editing):active{background:#0d8aee;color:#fff;box-shadow:0 2px 3px 1px #d4d1d1}tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#e2e2e2;color:initial;box-shadow:0 2px 3px 1px #d4d1d1}tag.readonly{cursor:default}tag.readonly:focus,tag:focus{outline:0}tag.tag--editing{background-color:#fff;border:1px solid #ccc;cursor:text}.minimal tag{display:flex;flex-direction:row;flex-wrap:wrap;border-radius:0;background:#f9f9f9;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative}.minimal tag:not(.readonly):not(.tag--editing):active,.minimal tag:not(.readonly):not(.tag--editing):focus{background:#d0d0d0;color:initial}.minimal tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#ececec}.minimal tag.readonly{cursor:default}.minimal tag.readonly:focus,.minimal tag:focus{outline:0}.minimal tag.tag--editing{cursor:text}.dark tag{display:flex;flex-direction:row;flex-wrap:wrap;color:#f9f9f9;border-radius:3px;background:#444;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative}.dark tag:not(.readonly):not(.tag--editing):focus{background:#efefef;color:#444}.dark tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#2b2b2b;color:#f9f9f9}.dark tag.readonly{cursor:default}.dark tag.readonly:focus,.dark tag:focus{outline:0}.dark tag.tag--editing{cursor:text}.bootstrap tag{display:flex;flex-direction:row;flex-wrap:wrap;color:#f9f9f9;border-radius:.25rem;background:#0275d8;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative}.bootstrap tag:not(.readonly):not(.tag--editing):active,.bootstrap tag:not(.readonly):not(.tag--editing):focus{background:#025aa5}.bootstrap tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#0267bf;color:#f9f9f9}.bootstrap tag.readonly{cursor:default}.bootstrap tag.readonly:focus,.bootstrap tag:focus{outline:0}.bootstrap tag.tag--editing{cursor:text}.bootstrap3-info tag{display:flex;flex-direction:row;flex-wrap:wrap;font-family:inherit;font-weight:400;font-size:95%;color:#fff;border-radius:.25em;background:#5bc0de;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative;padding:.25em .6em;text-align:center;white-space:nowrap}.bootstrap3-info tag:not(.readonly):not(.tag--editing):active,.bootstrap3-info tag:not(.readonly):not(.tag--editing):focus{background:#28a1c5}.bootstrap3-info tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#46b8da;color:#fff}.bootstrap3-info tag.readonly{cursor:default}.bootstrap3-info tag.readonly:focus,.bootstrap3-info tag:focus{outline:0}.bootstrap3-info tag.tag--editing{cursor:text}:host{display:block}"]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], DragProvider])], TagInputComponent);

    var DeleteIconComponent = function DeleteIconComponent() {
      _classCallCheck(this, DeleteIconComponent);
    };

    DeleteIconComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'delete-icon',
      template: "<span>\n    <svg\n        height=\"16px\"\n        viewBox=\"0 0 32 32\"\n        width=\"16px\"\n    >\n        <path\n            d=\"M17.459,16.014l8.239-8.194c0.395-0.391,0.395-1.024,0-1.414c-0.394-0.391-1.034-0.391-1.428,0  l-8.232,8.187L7.73,6.284c-0.394-0.395-1.034-0.395-1.428,0c-0.394,0.396-0.394,1.037,0,1.432l8.302,8.303l-8.332,8.286  c-0.394,0.391-0.394,1.024,0,1.414c0.394,0.391,1.034,0.391,1.428,0l8.325-8.279l8.275,8.276c0.394,0.395,1.034,0.395,1.428,0  c0.394-0.396,0.394-1.037,0-1.432L17.459,16.014z\"\n            fill=\"#121313\"\n        />\n    </svg>\n</span>",
      styles: [".dark tag:focus{box-shadow:0 0 0 1px #323232}.ng2-tag-input.bootstrap3-info{background-color:#fff;display:inline-block;color:#555;vertical-align:middle;max-width:100%;height:42px;line-height:44px}.ng2-tag-input.bootstrap3-info input{border:none;box-shadow:none;outline:0;background-color:transparent;padding:0 6px;margin:0;width:auto;max-width:inherit}.ng2-tag-input.bootstrap3-info .form-control input::-moz-placeholder{color:#777;opacity:1}.ng2-tag-input.bootstrap3-info .form-control input:-ms-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info .form-control input::-webkit-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info input:focus{border:none;box-shadow:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--focused{box-shadow:inset 0 1px 1px rgba(0,0,0,.4);border:1px solid #ccc}.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;transition:.25s;padding:.25rem 0;min-height:32px;cursor:text;border-bottom:2px solid #efefef}.ng2-tag-input:focus{outline:0}.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.ng2-tag-input.ng2-tag-input--focused{border-bottom:2px solid #2196f3}.ng2-tag-input.ng2-tag-input--invalid{border-bottom:2px solid #f44336}.ng2-tag-input.ng2-tag-input--loading{border:none}.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.ng2-tag-input form{margin:.1em 0}.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.minimal.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:1px solid transparent}.minimal.ng2-tag-input:focus{outline:0}.minimal.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.minimal.ng2-tag-input.ng2-tag-input--loading{border:none}.minimal.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.minimal.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.dark.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #444}.dark.ng2-tag-input:focus{outline:0}.dark.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.dark.ng2-tag-input.ng2-tag-input--loading{border:none}.dark.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.dark.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.bootstrap.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #efefef}.bootstrap.ng2-tag-input:focus{outline:0}.bootstrap.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.bootstrap.ng2-tag-input.ng2-tag-input--focused{border-bottom:2px solid #0275d8}.bootstrap.ng2-tag-input.ng2-tag-input--invalid{border-bottom:2px solid #d9534f}.bootstrap.ng2-tag-input.ng2-tag-input--loading{border:none}.bootstrap.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.bootstrap.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.bootstrap3-info.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;padding:4px;cursor:text;box-shadow:inset 0 1px 1px rgba(0,0,0,.075);border-radius:4px}.bootstrap3-info.ng2-tag-input:focus{outline:0}.bootstrap3-info.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid{box-shadow:inset 0 1px 1px #d9534f;border-bottom:1px solid #d9534f}.bootstrap3-info.ng2-tag-input.ng2-tag-input--loading{border:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.bootstrap3-info.ng2-tag-input form{margin:.1em 0}.bootstrap3-info.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.error-message{font-size:.8em;color:#f44336;margin:.5em 0 0}.bootstrap .error-message{color:#d9534f}:host(delete-icon){width:20px;height:16px;transition:.15s;display:inline-block;text-align:right}:host(delete-icon) path{fill:#444}:host(delete-icon) svg{vertical-align:bottom;height:34px}:host(delete-icon):hover{-webkit-transform:scale(1.5) translateY(-3px);transform:scale(1.5) translateY(-3px)}:host-context(.dark){text-align:right}:host-context(.dark) path{fill:#fff}:host-context(.dark) svg{vertical-align:bottom;height:34px}:host-context(.minimal){text-align:right}:host-context(.minimal) path{fill:#444}:host-context(.minimal) svg{vertical-align:bottom;height:34px}:host-context(.bootstrap){text-align:right}:host-context(.bootstrap) path{fill:#fff}:host-context(.bootstrap) svg{vertical-align:bottom;height:34px}:host-context(tag:active) path,:host-context(tag:focus) path{fill:#fff}:host-context(.darktag:active) path,:host-context(.darktag:focus) path{fill:#000}:host-context(.minimaltag:active) path,:host-context(.minimaltag:focus) path{fill:#000}:host-context(.bootstraptag:active) path,:host-context(.bootstraptag:focus) path{fill:#fff}:host-context(.bootstrap3-info){height:inherit}:host-context(.bootstrap3-info) path{fill:#fff}"]
    })], DeleteIconComponent);
    var optionsProvider = new OptionsProvider();

    var TagInputModule =
    /*#__PURE__*/
    function () {
      function TagInputModule() {
        _classCallCheck(this, TagInputModule);
      }

      _createClass(TagInputModule, null, [{
        key: "withDefaults",

        /**
         * @name withDefaults
         * @param options {Options}
         */
        value: function withDefaults(options) {
          optionsProvider.setOptions(options);
        }
      }]);

      return TagInputModule;
    }();

    TagInputModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_4__["Ng2DropdownModule"]],
      declarations: [TagInputComponent, DeleteIconComponent, TagInputForm, TagComponent, HighlightPipe, TagInputDropdown, TagRipple],
      exports: [TagInputComponent, DeleteIconComponent, TagInputForm, TagComponent, HighlightPipe, TagInputDropdown, TagRipple],
      providers: [DragProvider, {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"],
        useValue: false
      }]
    })], TagInputModule);
    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=ngx-chips.js.map

    /***/
  }
}]);
//# sourceMappingURL=default~adm-mr-detail-verification-document-data-adm-mr-detail-verification-document-data-module~new~dda64002-es5.js.map