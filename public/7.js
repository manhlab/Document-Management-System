(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/containers/TheContainer.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/containers/TheContainer.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TheSidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheSidebar */ "./resources/js/src/containers/TheSidebar.vue");
/* harmony import */ var _TheHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TheHeader */ "./resources/js/src/containers/TheHeader.vue");
/* harmony import */ var _TheFooter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TheFooter */ "./resources/js/src/containers/TheFooter.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'TheContainer',
  components: {
    TheSidebar: _TheSidebar__WEBPACK_IMPORTED_MODULE_0__["default"],
    TheHeader: _TheHeader__WEBPACK_IMPORTED_MODULE_1__["default"],
    TheFooter: _TheFooter__WEBPACK_IMPORTED_MODULE_2__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/containers/TheFooter.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/containers/TheFooter.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'TheFooter'
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/containers/TheHeader.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/containers/TheHeader.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TheHeaderDropdownAccnt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheHeaderDropdownAccnt */ "./resources/js/src/containers/TheHeaderDropdownAccnt.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'TheHeader',
  components: {
    TheHeaderDropdownAccnt: _TheHeaderDropdownAccnt__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/containers/TheHeaderDropdownAccnt.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/containers/TheHeaderDropdownAccnt.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "TheHeaderDropdownAccnt",
  data: function data() {
    return {
      itemsCount: 42
    };
  },
  methods: {
    logout: function logout() {
      var _this = this;

      this.$store.dispatch("auth/logout").then(function (response) {
        _this.redirectToLogin();
      })["catch"](function (error) {
        _this.redirectToLogin();
      });
    },
    redirectToLogin: function redirectToLogin() {
      this.$router.push({
        name: "Login"
      });
    },
    goProfile: function goProfile() {
      this.$router.push({
        name: "Profile"
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/containers/TheSidebar.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/containers/TheSidebar.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_nav */ "./resources/js/src/containers/_nav.js");
/* harmony import */ var _services_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/factory */ "./resources/js/src/services/factory.js");


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "TheSidebar",
  nav: _nav__WEBPACK_IMPORTED_MODULE_1__["default"],
  created: function created() {
    this.init();
  },
  computed: {
    show: function show() {
      return this.$store.state.sidebarShow;
    },
    minimize: function minimize() {
      return this.$store.state.sidebarMinimize;
    },
    dashboard: function dashboard() {
      return {
        _name: 'CSidebarNavItem',
        name: 'Домашняя страница',
        to: '/dashboard',
        icon: 'cil-home'
      };
    }
  },
  methods: {
    init: function init() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var books, system, operating;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.fetchDocument();

              case 2:
                books = _context.sent;
                _context.next = 5;
                return _this.fetchSystem();

              case 5:
                system = _context.sent;
                _context.next = 8;
                return _this.fetchOperating();

              case 8:
                operating = _context.sent;
                _this.$options.nav[0]._children = [_this.dashboard].concat(_toConsumableArray(books), _toConsumableArray(operating), _toConsumableArray(system));
                _this.RFKey += 1;

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    fetchDocument: function fetchDocument() {
      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _services_factory__WEBPACK_IMPORTED_MODULE_2__["default"].book.all().then(function (response) {
                  return [{
                    _name: "CSidebarNavTitle",
                    _children: ["Документы"]
                  }].concat(_toConsumableArray(response.data.map(function (item) {
                    return {
                      _name: "CSidebarNavItem",
                      name: item.name,
                      to: "/books/".concat(item.id, "/documents"),
                      icon: "cil-notes"
                    };
                  })));
                });

              case 2:
                return _context2.abrupt("return", _context2.sent);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    fetchSystem: function fetchSystem() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _services_factory__WEBPACK_IMPORTED_MODULE_2__["default"].auth.namePermissions().then(function (permissions) {
                  return _this2.system.filter(function (item) {
                    return !!item.permission ? permissions.includes(item.permission) : true;
                  });
                });

              case 2:
                return _context3.abrupt("return", _context3.sent);

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    fetchOperating: function fetchOperating() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _services_factory__WEBPACK_IMPORTED_MODULE_2__["default"].auth.namePermissions().then(function (permissions) {
                  return _this3.operating.filter(function (item) {
                    return !!item.permission ? permissions.includes(item.permission) : true;
                  });
                });

              case 2:
                return _context4.abrupt("return", _context4.sent);

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    }
  },
  data: function data() {
    return {
      RFKey: 0,
      // key for rerender sidebar
      operating: [{
        _name: "CSidebarNavTitle",
        _children: ["Разрешении"]
      }, {
        _name: "CSidebarNavItem",
        name: "Статистическая",
        to: "/statistic",
        icon: "cil-notes",
        permission: "Статистическая"
      }],
      system: [{
        _name: "CSidebarNavTitle",
        _children: ["Система"]
      }, {
        _name: "CSidebarNavItem",
        name: "Пользователь",
        to: "/users",
        icon: "cil-people",
        permission: "Разрешении пользователь"
      }, {
        _name: "CSidebarNavItem",
        name: "Должность",
        to: "/titles",
        icon: "cil-contact",
        permission: "Разрешении должность"
      }, {
        _name: "CSidebarNavItem",
        name: "Подразделение",
        to: "/departments",
        icon: "cil-lan",
        permission: "Разрешении подразделение"
      }, {
        _name: "CSidebarNavItem",
        name: "Подписал",
        to: "/signers",
        icon: "cil-touch-app",
        permission: "Разрешении подписал"
      }, {
        _name: "CSidebarNavItem",
        name: "Место выдачи",
        to: "/publishers",
        icon: "cil-institution",
        permission: "Разрешении место выдачи"
      }, {
        _name: "CSidebarNavItem",
        name: "Вид документа",
        to: "/document-types",
        icon: "cil-text-size",
        permission: "Разрешении вид документа"
      }, {
        _name: "CSidebarNavItem",
        name: "Документы",
        to: "/books",
        icon: "cil-book",
        permission: "Разрешении книги"
      }, {
        _name: "CSidebarNavItem",
        name: "Группа",
        to: "/roles",
        icon: "cil-address-book",
        permission: "Разрешении"
      }, {
        _name: "CSidebarNavItem",
        name: "Разрешение",
        to: "/permissions",
        icon: "cil-lock-locked",
        permission: "Разрешении разрешение"
      }, {
        _name: "CSidebarNavItem",
        name: "Интрукция",
        to: "/help",
        icon: "cil-touch-app"
      }, {
        _name: "CSidebarNavItem",
        name: "Настройки",
        to: "/settings",
        icon: "cil-settings"
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/containers/TheContainer.vue?vue&type=style&index=0&id=5603bad4&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/containers/TheContainer.vue?vue&type=style&index=0&id=5603bad4&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.fade-enter-active[data-v-5603bad4],\r\n.fade-leave-active[data-v-5603bad4] {\r\n  -webkit-transition: opacity 0.3s;\r\n  transition: opacity 0.3s;\n}\n.fade-enter[data-v-5603bad4],\r\n.fade-leave-to[data-v-5603bad4] {\r\n  opacity: 0;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/containers/TheHeaderDropdownAccnt.vue?vue&type=style&index=0&id=f77a4108&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/containers/TheHeaderDropdownAccnt.vue?vue&type=style&index=0&id=f77a4108&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.c-icon[data-v-f77a4108] {\r\n  margin-right: 0.3rem;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/containers/TheContainer.vue?vue&type=style&index=0&id=5603bad4&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/containers/TheContainer.vue?vue&type=style&index=0&id=5603bad4&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./TheContainer.vue?vue&type=style&index=0&id=5603bad4&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/containers/TheContainer.vue?vue&type=style&index=0&id=5603bad4&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/containers/TheHeaderDropdownAccnt.vue?vue&type=style&index=0&id=f77a4108&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/containers/TheHeaderDropdownAccnt.vue?vue&type=style&index=0&id=f77a4108&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./TheHeaderDropdownAccnt.vue?vue&type=style&index=0&id=f77a4108&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/containers/TheHeaderDropdownAccnt.vue?vue&type=style&index=0&id=f77a4108&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/containers/TheContainer.vue?vue&type=template&id=5603bad4&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/containers/TheContainer.vue?vue&type=template&id=5603bad4&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "c-app" },
    [
      _c("TheSidebar"),
      _vm._v(" "),
      _c(
        "CWrapper",
        [
          _c("TheHeader"),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "c-body" },
            [
              _c(
                "main",
                { staticClass: "c-main" },
                [
                  _c(
                    "CContainer",
                    { attrs: { fluid: "" } },
                    [
                      _c(
                        "transition",
                        { attrs: { name: "fade" } },
                        [_c("router-view")],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("TheFooter")
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/containers/TheFooter.vue?vue&type=template&id=6a1dbf50&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/containers/TheFooter.vue?vue&type=template&id=6a1dbf50& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("CFooter", { attrs: { fixed: false } })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/containers/TheHeader.vue?vue&type=template&id=27b8f76c&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/containers/TheHeader.vue?vue&type=template&id=27b8f76c& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "CHeader",
    { attrs: { fixed: "", "with-subheader": "", light: "" } },
    [
      _c("CToggler", {
        staticClass: "ml-3 d-lg-none",
        attrs: { "in-header": "" },
        on: {
          click: function($event) {
            return _vm.$store.commit("toggleSidebarMobile")
          }
        }
      }),
      _vm._v(" "),
      _c("CToggler", {
        staticClass: "ml-3 d-md-down-none",
        attrs: { "in-header": "" },
        on: {
          click: function($event) {
            return _vm.$store.commit("toggleSidebarDesktop")
          }
        }
      }),
      _vm._v(" "),
      _c(
        "CHeaderBrand",
        { staticClass: "mx-auto d-lg-none", attrs: { to: "/" } },
        [_c("CIcon", { attrs: { name: "logo", height: "48", alt: "Logo" } })],
        1
      ),
      _vm._v(" "),
      _c("CHeaderNav", { staticClass: "d-md-down-none mr-auto" }),
      _vm._v(" "),
      _c(
        "CHeaderNav",
        { staticClass: "mr-4" },
        [
          _c("CHeaderNavItem", { staticClass: "d-md-down-none mx-2" }),
          _vm._v(" "),
          _c("TheHeaderDropdownAccnt")
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "CSubheader",
        { staticClass: "px-3" },
        [_c("CBreadcrumbRouter", { staticClass: "border-0 mb-0" })],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/containers/TheHeaderDropdownAccnt.vue?vue&type=template&id=f77a4108&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/containers/TheHeaderDropdownAccnt.vue?vue&type=template&id=f77a4108&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "CButton",
        {
          directives: [
            {
              name: "c-tooltip",
              rawName: "v-c-tooltip",
              value: "Персональная информация",
              expression: "'Персональная информация'"
            }
          ],
          attrs: { size: "sm", color: "info", variant: "outline" },
          on: { click: _vm.goProfile }
        },
        [_c("CIcon", { staticClass: "m-0", attrs: { name: "cil-user" } })],
        1
      ),
      _vm._v(" "),
      _c(
        "CButton",
        {
          directives: [
            {
              name: "c-tooltip",
              rawName: "v-c-tooltip",
              value: "Выход",
              expression: "'Выход'"
            }
          ],
          attrs: { size: "sm", color: "danger", variant: "outline" },
          on: { click: _vm.logout }
        },
        [
          _c("CIcon", {
            staticClass: "m-0",
            attrs: { name: "cil-power-standby" }
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/containers/TheSidebar.vue?vue&type=template&id=3bdd66ef&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/containers/TheSidebar.vue?vue&type=template&id=3bdd66ef& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "CSidebar",
    {
      attrs: { fixed: "", minimize: _vm.minimize, show: _vm.show },
      on: {
        "update:show": function(value) {
          return _vm.$store.commit("set", ["sidebarShow", value])
        }
      }
    },
    [
      _c(
        "CSidebarBrand",
        { staticClass: "d-md-down-none", attrs: { to: "/" } },
        [
          _c("CIcon", {
            staticClass: "c-sidebar-brand-full",
            attrs: {
              src:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOQAAAA6CAYAAACgY/XSAAAAAXNSR0IArs4c6QAAAAlwSFlzAAAOxAAADsQBlSsOGwAAGDZJREFUeJztnHl4VNXZwH/nzp5M9pVgSNhXwbAEVEA2ERWp2q+V2rqwaMXtswqfiO0XrRatYKFuBVw+bCt1wwVqiixuKEhAFgmENewQsk+Syaz3nu+PSSaZTBISgTY+z/3BPDD3nnuW95z3vO85570jpJQSHR2dDoHyn66Ajo5OA7pC6uh0IHSF1NHpQOgKqaPTgdAVUkenA6ErpI5OB0JXSB2dDoSukDo6HQhdIXV0OhC6QurodCB0hdTR6UDoCqmj04HQFVJHpwOhK6SOTgdCV0gdnQ6ErpA6Oh0IXSF1dDoQukLq6HQgzkshfX6NkkrXharLBUHTJCWVblRV/2USnR8f56WQL6/cQ/av13DghIOO8Ms8mgarvzlG9qx1/GvLiQ5RJx2d9mA8n4dn3NCHTgk2eqXHXKj6tBlNkyiKQEoQInBNUeAnozKpdfu5/vIuwes6Oj8WxPn+6pyqSgyGf//IX/TO97y7oZDVz00iMdYacq9eWXV0fmy0yWW9ce6n9LvjE6prfSHXW9Ll06W19LjlPTbnF7eYpjFur8qAabmMuOvDsPSaJsPWg6dLnfx55UHOltdy02Nrm9SJZl3VUyVOev1qNc/+bQeads4q6ej8R2iTy/rkzKFsLSghwhKa/GSxkz1HKhl9WSo2iwFR5yOmxNu4bVJP+neNC15rDbNJYd6tvUhPtoel//5wOVVOL6Mv64SUEiEEsXYLUVZBjcfCzWO6hritpQ43WwuKGd4vmYSYBsuZFGvl7slduW1iNxR9b1mng9Jml7XxoAd4//NCHn91Bz6/SnSkibV/mkRSrC2Ypjm38WSJk/nLtzN8QAp3XNurSf4yRBmllPz2tZ2s+HQ/QhFc2j2Jj58ZF7zvdPs5WVxDz/QYFBFYS24rKGbas19T6/Zjj7DwxtwrGNonKfjM+bqybRFVWyagpnm29kyDxQ+ka++6uLX8m/bp+eb3Q9I1fSac5tsckEvbZaJpMphXW6tVL/fWaDpm29vmprRtU0dKhJQglGDBK9Yfx+t1IyVU1Wi8vnofj92e1WxF6/n9/+1kXd5J1m47w4ShnUlLjAwKp74v6r+rGqzaWIiUKlKF3YdLydtbwtA+iSiKIMJqpHvngDLWP7fk4wKcTjcSSXW1n7fWHg5RyPYoo6PGS4zdHPxe4/JRU+sDWspDYjEbiIuyBNtTVuUmMcbaQvoAJZVukuNsLd4/XlzD8TPVIASZneykJ9vb1fFlVZ4W61BS6SYx1hKUIQQmOgFEWJsfGqUOD/HRFgyNZOny+PGrkqgIU/BacYWblPiW21Xl9GK3mYJ9UuX0UesOl69EkhRrxWhocGtcHj9ny1043X4MiiAtMaKu7HDllFLi8qjkHynH7VGJjjTTv2scJmOom+TyqAgBVrMBAK9fo8zhRrTS30KIkDZWVHuJj7aEp5TgUzUUITCeY7+lTQrpLziCrKzGlD0AjIEKx9qNgEDUVeyS5Eg0LfB/t9dP3t5iBvVIIMZuCQqpd5cY1n9nJi7aTGyUuZHySbYVFGM1GxjYIxEhwKBAtN2Gs9YTmKOkJDnOGhyIJ846OXqmipEDU4OdmhJvQzEY0FQVoSgkxYQLpy3sPVrBDY+uZ2DPJD58egwAQ2Z8jNfrDXaPVjeDCBomH5PZxCfPTaRbWjS3P/U5m3YX8dIjo7h2RHqzA2XBP/JZ9nEBT0zP4tare4RMGGu2nOD5t/dy+GQlos7HlppK364JzPlFf8ZkpZ2zHQv/kc8rH+Qz7/ZBzLyhb6OyYfv+EqbmfMYtE7rz1MyhCBEY6KPvXYUQCu8/PZ6M1KhGE6ak1OHh8rs/4ursS3jlkZEIERhoEx/KparWz4YXriM+2srLK/fywnv5LLw/mxuuzAhpl5Sw71gFP8v5kqsGdeKl3wxn37GAvP1+b9DbqUcoMHbwJbw2dzRCwKJ3C1j64W48fi0od4OQDO6bxvy7LqNbWnSIrF94v4BlH+/F5Q2k1zSN6AgTN47qwpMzhwbTjX0wF68fPn3+ahJjrPz08XXsKSwLGsiG/m6k9ELwzD0juGV8V+Yt28F7nx3kqZlDuGV8t5AJ069qZN+1iphIM2sXTcJiannN1LpCSonrhbfRnn8LpEQd3AfLiqchwkrOtEE4an0cPlHBpBEZ3DYp4IKWOtxcec9qfGpAqVY9O4E+GbEIIXhk6gDGDU4lLTGSSGtgNvX6Ne78w0a+3VMMwO3XdCNn+hCEEPzxnsHkvL4Dp8vHtOt7kZFqByRrtpxi1oKvEYqBTklRrF04ngirkXm3Z1FU7mX7/mKG9knm/p8NCGlOW13Wkko3qqZxuqQ2eK17ejxV1bWAQErJqWIHAkFSfCRmk5F6CxmYgAR7CssBuP9Pm9n2enLYzLm1oIS/fFiAQGXfscqQQbTq66PMeWU7Xq8bq8XMgO6JaJpkz5Ey9haW8OuF3/LiQ9lMHHZJK10nOXSqCpAcOlkVJofdhwP1+/5QWX1X43D6KKt0IQTcs/Abchdc02hgCU6crUFKOHDcEayvs9bH6VInEoXSSjexdgvl1W40TeXJ5bv4yajMkLKFgL+vPYzT6cJiCnwvr/LgVyVCKCTFR9a5l/XpJT3TYwGJlIL1207g9fmJjrTQKTGKGpePUyU1bN1zkuvmlJK3bDIxdjNSSlZ+cYTF7+YjpEpachTx0TaOFzmodmn8de1RZt86iKgIE5oGldUevKqgzOEmIcZK38wEyqt8wfafLnEgNYiJtmK3mQGBJiUp8QHvw+/3oaoqz761mzFZnUiJj0CIgLG5ad46apwu0pNsnGv4ta6QfhXDc3+nVvpBCCzb9mLcdQDjFYPISI3i/d+PDRnkmgaL38lHVX1oqkRB4fm3d/Pqo6ODWQ7skRDiBJwpdbIpvxg0LwBvrj3Ggz8bQHy0hZEDU1m/+Fo0KVEEdTMczFuSh0BDU1WKistZv+00U0ZmYLeZeOOxkSFrrnrKHG7G/fcacqYN4sZRma0rZv1sKBpmstw/NqxfPV6VS29fiV9T+MvsKxjcK7HJWqLhX4GfuUvy+MvskUE3z+1ReXzZdyD9dcuAhgHo82vMXboTr8fNoJ4JLHt0NEmxAbfodKmT6fO/5MDxSua8sp1xr6WFuHLhhFqbkDuNFK3JDSSSA8creeTlPP50//BmrXt4PgEUAdOv783y3EIqqzwUV7hCXHKvX2Pd1tMIYeDn4zKDyicUiIq0s2XZDS22JiBPgTAYuXtKH2bd1A8hBGvzTvLrBd/g9Xj4bn8pYwenIYTgk00nENLP5Zem8VbOGKSUqBqs33qSAyccjVxsSchyUUqem9VgPTVNMmzmBzhqfMz95UB+Pq57E6sveWTqpXy2vYhyh5OHX8xjxRNjkBI27jrD3iOVaNLAskdHhbnKTWn9rhD4FQIn7gIMCLA2rJFKHS72HqvA7fUHG5YUa0FKEUyTGGsLdqDHp1FwtIKzFa7gQDEaFIQwNLh+moqxUaWPn63h0MnGkUCSuDprIwCJ0qzf3nSgWMwGLuuVRGanqPNeeKvBGVwG/ray7pdSsG5rEZvzzyKlREp4I/cAh05VhT2naZLXVu/D43GDwciSOaOCG2VCQKeECF58+EpQjFTX1PL3Tw+FWJMLidQ0PvriMLmbj7c74qlTgo0uKRYUoTHnpW+DdZQSPvnmGKUONz3SYxjRP6XRwG7nBlCjTa5xQ9JAMaEokpMlzuB4q692rUetWyMKDIrgmuHpPNjEe2q9rAY0Lby/hRAkx1l55u7BaFLw7Z4iVqw9iNPt484/bAQkC+4bSkorewX1hChkWOcqAtNfn8SeEIfNHglTJ2Ic3Acp4bt9JYy6N5cpcz9n4m9ycbr8KIpg1s396Z6RQoTVSkbnJP7n1oEoisDtVfn5b9cz5bEvGH3fv1i39SRSQuekSO6clIk9MoKYKDsL7xtGlC0wcy3PPciYB9Zw7ZwN3L9oc6BKimDJnFGkJMdjs1rp3zWW4f2Tg7N4UVkt739xhOKK0Bhbu83Em/OurLNm5+6E9tCSgmsSrrg0BYGfBxdvpsblp7jCxYvv5RNrN9MnMz7EUimK4O31h0BKsvskBN2eehRF0Cs9hst6xiOAlV8UXvAACAHERUcw6fKAFzF36Q4qqj3BNVRbMCgKT80chqpKvtxdQY0rcH4tBLy9oRCpqfzkynB3W9M0Dp50cPBE4HPgeCVVTc6+gwTmQjRN1p2PS1QpSE9u2CgcNTAFKQzs3F/MxIc+YeUXRygqr20+vzZR7zmFy1wIwYRhl/Czsd0QwMJ39pHz+ncYhEZKfAQ3X9W1TX0V4rI+/MK3IASL/3tE4IKiYBozBHatCHtwwTsFeH0epCY5VepnyUd7eXjqQMxGhbULx4VsqUsJH3x5hPyjDjS/FykEf1xRwMTsQKfkTB9MzvTBdTNbYNaTEha/mw+aB02DNVtOsutQOZd2i6NH5yg2vzKp2QbdNn8zhcfP0iMjmTULxp+3NTw/JI/fmcV9i7Zx9FQJL63cQ+FpJx6fxpxf9mXDtiIOCUddSommQYkjMLiy+6U0u5uqaZKsXol8f7CEs+Xui1Jrv6rx3L3D2Lr3LOVVTq6b/S++XXZjm58XAob1TUQxWVB9LtZ/d5obR2bg9WvsPlyJ0Wjk5jGZIe2TUuKscTLxkQ2NTJJGZkoEn794XUj+UtP4/nA5qzYe5XSZi8Vv70LRNCKjYhjcu2H5MOOGPnx/pIrVGws5Vepk9ktbEIqJ8UOSefrutlms9iH53Z1ZrN1ynEpHNSs/q8JotrBpyZQ2G4EQCykMBry+JjNSI4GFlh1wv5CB/zcu0K9qVNZ48Pq04LOKAKnJoLCFaMhPk4FjhhqXP3hNCBCKqJ+Tgg0O3Ktfs4bP2ooARTFgEOd/JnQhqK718dr/DEdRFJZ+vI8N204woHsC06/v06yXVj8ZtXTmKURgU6n+z8VAIIi0mlg5fwIGk42SCjePLcmjPQFOFpORO67JxGhQePL179Ck5PXV+/D6VcYP7UxqfGR4/whBYoyVhBhL3cfGmKzUcJdZaqzLO8lv/ryJ51fswK9qxNotfP3S1cREmkOSLn5gGP96fhIj+idjt0eC5uWzbScY/eAGPD71B8mnJYQQREea+Ov/jkUTRhRF4dFf9G+XdxGikIseyOaV2aNCEkgpKa5w8X1hRYhg5v1qAGZLBAaTla6XJPLw1IEIEQiD6z31bbJmfEKvqe9QWulGUQRTJ/Qgq3cyRrMNsyWCx37ZPzDwgCff2M5lM3IZOP0TPtp4NFjOAzf3xWy1YzTbGJOVwqAeCUGz73B6+XZvSUhYnZSSVfPH8OysbFY+Pa5NB/kXG4Oi0L1zNFNGdglMFgYjT8/MarQODSAAgyJIjjYhhCBvb3GLE8r2/aUIFFLjWz/jrKdpWdBoG7/FOUuSnhzF0tnZqJrGPzYc4eCxSqRsm1oqCsz+xUD8mHG4JMeKavjg61NoKPx8bGZYeiEgOjqKrcuuY9ur1wc/OdMHh9VRKAZmTunLqucm0TnZDgJsViN2m6mZfAW90mNZ8cR4di+/gWdmZaNixO+uZt6SvIvyml7npEgANKkx6rJO7VoinfMcUgjB5bM+xe918sSMbO64NnBeNrBHAvvfCnVjNA0WrtgVGEiqC6NB4Yk3tvPCQ1egKLCy7kwP6qMa4HhRDW9+Woj0exACHn55B2MHpxFrNzN9cm+mT+4dVqcyh5th96xHUasZ1jeZfzw5PlhXi9nAjaMzQw6uOwKLHrwCIQVjh6Zxafd4mjOPqiq59ZpePPu3neTtr+RMWS2p8bZGu9iSAycc7Cp0YBCCW8b3QNNoNhRQCEFClAGkxslST4h7KARs2l0ESLqlRbcYaKAoMCYrjeuvzGDN5uPMXbqV9rxHEGE1khZn4Gx5LY8v28rx0xXERhi5qoVB2uYJtM4S9cuM44P5Exl6Vy5nSp18+NUxbhqVEfKyQ9Msb76qG9/mF/PPTUfZU1iOwSAu6MZY4zb8EHtwzqhOj1dD0/yYjArVrgZ3tnmtl7i9DW6AlNR9b+SeaqFuZ/2hf+P8GgtIynDXNDDjawgRiPhoSkdTxnqef/ByJl+R0aLlMxgEMyb3xhYZiaJ5uOmxtTgata+sysOtT3yGonmJibbXBRM0X5aUcFVWGsJgYUt+EV/tLAreq6r18vnOUrw+jZtGZ7S62aAogkUPjEBRBEo7XWQp4c3fjsWvSrbkn8Xr83PfT/u3WOf2LDGECNQtzm7hzkkBmT66ZAeljobNvMeX5nHvwo0UVzRs5KiqyvrvTqFp0CcjrsO9aHBOC2kxK7z/1BgKT1e3qfMe/dVl/G3dMYQCqqKQMy0r5JmCY5V0SbEHz4DSkyMZPziVDTsCLtpD/9WT2EYhayWVLpwuP13TooLXkmKtfLZoHOvyTnLbpJ4hdbgQ8YT11uu81mjN7sS1lFSE1HnZ7GHc+sSXlDpcZN+9muhICxKodnrQ/D5QTLzx6IhzFj9uSBoDusWz53AR0575irjoSISUlFfXIqSGzWJkeP+U4DPB2b1JPc0mA1tevYkhd+Ui/a4W5BsuKyGgZ3oMifHRlFdUIQzm4EZe0/ZLTVJVVc3Aaf9sYiklaQkWchdMRBH1UTIN9w0Gwbzbs1ieewSD6mL2S1v46+/GIgSs315CeWU1a7eexm63YzRIat1+PG4fisHKs/cOD67ZA7m23N+C0Hdv28IPGYYhc9Xid/NZ9M73YYmG9E7kp1dlhh1Cb9lbzK2//wqXp2EzJirCxO43f0LugvFsf/V60lPswXt/eHMnk+es4cpZq3C6A88oiuDVR0eyduF41v9pAg/814Dgi8cHjlcy5sE1XP2bNSzPPdCooYLMVDszJvcOxh5CQLBnylzc8rv1nCpxtl8adSTH2RCKmdjI5iVqNRtITYzGbFLo0ii8rAEZCHo3RZAc1/I6r19GLBpGBvVICHoBiiIY0S+FD+aPp1NCBKoqKK/yUFHlQVWhR3osHz8zPmQ93RJGg8LyeVcytF8qEiPlVW7Kqj0gjPTqEseXL0/GbGxwYxOircTF2EmOt4flHWs38+rsbAxmC4N7JwUHsT3CRFpyDJERVjolRITJQtMks6b0BMXM2KxUOieGb+YkxlgQBjNSmKh2uqmp9TR8nB5qav3B8jJS7GjSwKXd4oOKazIovPfUVSgmG8nxEYEekLB09gh6pseiYaCqxkW5w43Hq2I2KCyfdzkWkyFoaWOjIrGYBMlxtrC2K0IwoHs8wmBhaJ+kVhVNCEFMpJlLkiKw2uxkdooKiRU+FyFve/ziic8RQmFFzlVteviDL4+Q8/pOvnjpOuKjzCGCDkTXhFbk1ws2sXbLUUBh89IppCZENEpft7Na/12TbNxVxLRnvgapccekHuTMGNJqfaSEbftKuCXnc955cuw5hdcaxRUuYiLNWBopfGOqa32oqiQ2ytzsfb+qUVLpJjXe1qLF9quSkkoXnRrJoWkep0qclFd5AmvCaAtpSZHtdslVTXKmrJbSykBARkKMte5Vt/C0jhoviiJCAsXrkRLOlteSFGcLqUONy4fPrwUD65tjx4FS+mTEYrO0FLTuxutTaW5tHWs3B4PdPT4NR40nLCBfSsnp0lpS4iNCArhVTXK23EWZw43Xr2G3GemSEoXNEtqvDqcPgSQ6svn+VFWNsxUu0hIjW2xjY9xeFafLT0I746lDFNLr00CA+RzhPY3x+LRmg2V3HSyjf7e4EKt6prSWN9ccol9mDFNGZoSkP1ZUQ3SkKaxTV6w7TEmlm2nX9yK6mUHSHE63n8gW3lb4d9IW9/lcblDTs7of6o6H5vPD3KnzrUNb8m6OtpbXUrsuhgwvFuf9Ex5N0TTJ1JwNbNtfRr/MOD6cPyEkfq++uMYCyisoZer/foYQgk1LJodYzvo0TQVx4ISDv3y4j4X3Z3fYTRwdnfZywd+dl0BeQRlSU8kvrMTnD93GarqBIaVg58EyhFCRSIorwqNPmotW+Wb3WT746mhY/jo6P2YuuIWUErYfKGXJR/uZOiGT8UM6N7kfbu3cXpW5S7ZitxrImTEEU6tvMDSUU+UMfYlYR+fHzgVXSKjfRm6IS63H41N57Z8HmDCkE727xF7oYnV0fvRclJ97CrwuFKqMUsKJYid/fq+Av605eDGK1dH50XNRLGRrNP2tGh0dnQb+7Qqpo6PTMvovlOrodCB0hdTR6UDoCqmj04HQFVJHpwOhK6SOTgdCV0gdnQ6ErpA6Oh0IXSF1dDoQukLq6HQgdIXU0elA/D+dekSpP4a8TwAAA5lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0n77u/JyBpZD0nVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkJz8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0nYWRvYmU6bnM6bWV0YS8nPgo8cmRmOlJERiB4bWxuczpyZGY9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMnPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6QXR0cmliPSdodHRwOi8vbnMuYXR0cmlidXRpb24uY29tL2Fkcy8xLjAvJz4KICA8QXR0cmliOkFkcz4KICAgPHJkZjpTZXE+CiAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9J1Jlc291cmNlJz4KICAgICA8QXR0cmliOkNyZWF0ZWQ+MjAyMS0wNC0wNzwvQXR0cmliOkNyZWF0ZWQ+CiAgICAgPEF0dHJpYjpFeHRJZD42MzkyMTAzNS1hZmE5LTQxZDItOWM3Zi0wMTJlYmM4NTkxMjY8L0F0dHJpYjpFeHRJZD4KICAgICA8QXR0cmliOkZiSWQ+NTI1MjY1OTE0MTc5NTgwPC9BdHRyaWI6RmJJZD4KICAgICA8QXR0cmliOlRvdWNoVHlwZT4yPC9BdHRyaWI6VG91Y2hUeXBlPgogICAgPC9yZGY6bGk+CiAgIDwvcmRmOlNlcT4KICA8L0F0dHJpYjpBZHM+CiA8L3JkZjpEZXNjcmlwdGlvbj4KCiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0nJwogIHhtbG5zOnBkZj0naHR0cDovL25zLmFkb2JlLmNvbS9wZGYvMS4zLyc+CiAgPHBkZjpBdXRob3I+UkFDQSBIQU1BPC9wZGY6QXV0aG9yPgogPC9yZGY6RGVzY3JpcHRpb24+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczp4bXA9J2h0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8nPgogIDx4bXA6Q3JlYXRvclRvb2w+Q2FudmE8L3htcDpDcmVhdG9yVG9vbD4KIDwvcmRmOkRlc2NyaXB0aW9uPgo8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSdyJz8+QNGCbQAAAABJRU5ErkJggg==",
              size: "custom-size",
              height: 35,
              viewBox: "0 0 556 134"
            }
          }),
          _vm._v(" "),
          _c("CIcon", {
            staticClass: "c-sidebar-brand-minimized",
            attrs: {
              name: "logo",
              size: "custom-size",
              height: 35,
              viewBox: "0 0 110 134"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("CRenderFunction", {
        key: _vm.RFKey,
        attrs: { flat: "", "content-to-render": _vm.$options.nav }
      }),
      _vm._v(" "),
      _c("CSidebarMinimizer", {
        staticClass: "d-md-down-none",
        nativeOn: {
          click: function($event) {
            return _vm.$store.commit("set", ["sidebarMinimize", !_vm.minimize])
          }
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/containers/TheContainer.vue":
/*!******************************************************!*\
  !*** ./resources/js/src/containers/TheContainer.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TheContainer_vue_vue_type_template_id_5603bad4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheContainer.vue?vue&type=template&id=5603bad4&scoped=true& */ "./resources/js/src/containers/TheContainer.vue?vue&type=template&id=5603bad4&scoped=true&");
/* harmony import */ var _TheContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TheContainer.vue?vue&type=script&lang=js& */ "./resources/js/src/containers/TheContainer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _TheContainer_vue_vue_type_style_index_0_id_5603bad4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TheContainer.vue?vue&type=style&index=0&id=5603bad4&scoped=true&lang=css& */ "./resources/js/src/containers/TheContainer.vue?vue&type=style&index=0&id=5603bad4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TheContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TheContainer_vue_vue_type_template_id_5603bad4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TheContainer_vue_vue_type_template_id_5603bad4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5603bad4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/containers/TheContainer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/containers/TheContainer.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/containers/TheContainer.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./TheContainer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/containers/TheContainer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/containers/TheContainer.vue?vue&type=style&index=0&id=5603bad4&scoped=true&lang=css&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/src/containers/TheContainer.vue?vue&type=style&index=0&id=5603bad4&scoped=true&lang=css& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheContainer_vue_vue_type_style_index_0_id_5603bad4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./TheContainer.vue?vue&type=style&index=0&id=5603bad4&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/containers/TheContainer.vue?vue&type=style&index=0&id=5603bad4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheContainer_vue_vue_type_style_index_0_id_5603bad4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheContainer_vue_vue_type_style_index_0_id_5603bad4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheContainer_vue_vue_type_style_index_0_id_5603bad4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheContainer_vue_vue_type_style_index_0_id_5603bad4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheContainer_vue_vue_type_style_index_0_id_5603bad4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/containers/TheContainer.vue?vue&type=template&id=5603bad4&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/containers/TheContainer.vue?vue&type=template&id=5603bad4&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheContainer_vue_vue_type_template_id_5603bad4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./TheContainer.vue?vue&type=template&id=5603bad4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/containers/TheContainer.vue?vue&type=template&id=5603bad4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheContainer_vue_vue_type_template_id_5603bad4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheContainer_vue_vue_type_template_id_5603bad4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/containers/TheFooter.vue":
/*!***************************************************!*\
  !*** ./resources/js/src/containers/TheFooter.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TheFooter_vue_vue_type_template_id_6a1dbf50___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheFooter.vue?vue&type=template&id=6a1dbf50& */ "./resources/js/src/containers/TheFooter.vue?vue&type=template&id=6a1dbf50&");
/* harmony import */ var _TheFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TheFooter.vue?vue&type=script&lang=js& */ "./resources/js/src/containers/TheFooter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TheFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TheFooter_vue_vue_type_template_id_6a1dbf50___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TheFooter_vue_vue_type_template_id_6a1dbf50___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/containers/TheFooter.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/containers/TheFooter.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/src/containers/TheFooter.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./TheFooter.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/containers/TheFooter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/containers/TheFooter.vue?vue&type=template&id=6a1dbf50&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/containers/TheFooter.vue?vue&type=template&id=6a1dbf50& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFooter_vue_vue_type_template_id_6a1dbf50___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./TheFooter.vue?vue&type=template&id=6a1dbf50& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/containers/TheFooter.vue?vue&type=template&id=6a1dbf50&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFooter_vue_vue_type_template_id_6a1dbf50___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFooter_vue_vue_type_template_id_6a1dbf50___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/containers/TheHeader.vue":
/*!***************************************************!*\
  !*** ./resources/js/src/containers/TheHeader.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TheHeader_vue_vue_type_template_id_27b8f76c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheHeader.vue?vue&type=template&id=27b8f76c& */ "./resources/js/src/containers/TheHeader.vue?vue&type=template&id=27b8f76c&");
/* harmony import */ var _TheHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TheHeader.vue?vue&type=script&lang=js& */ "./resources/js/src/containers/TheHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TheHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TheHeader_vue_vue_type_template_id_27b8f76c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TheHeader_vue_vue_type_template_id_27b8f76c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/containers/TheHeader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/containers/TheHeader.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/src/containers/TheHeader.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./TheHeader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/containers/TheHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/containers/TheHeader.vue?vue&type=template&id=27b8f76c&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/containers/TheHeader.vue?vue&type=template&id=27b8f76c& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheHeader_vue_vue_type_template_id_27b8f76c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./TheHeader.vue?vue&type=template&id=27b8f76c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/containers/TheHeader.vue?vue&type=template&id=27b8f76c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheHeader_vue_vue_type_template_id_27b8f76c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheHeader_vue_vue_type_template_id_27b8f76c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/containers/TheHeaderDropdownAccnt.vue":
/*!****************************************************************!*\
  !*** ./resources/js/src/containers/TheHeaderDropdownAccnt.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TheHeaderDropdownAccnt_vue_vue_type_template_id_f77a4108_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheHeaderDropdownAccnt.vue?vue&type=template&id=f77a4108&scoped=true& */ "./resources/js/src/containers/TheHeaderDropdownAccnt.vue?vue&type=template&id=f77a4108&scoped=true&");
/* harmony import */ var _TheHeaderDropdownAccnt_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TheHeaderDropdownAccnt.vue?vue&type=script&lang=js& */ "./resources/js/src/containers/TheHeaderDropdownAccnt.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _TheHeaderDropdownAccnt_vue_vue_type_style_index_0_id_f77a4108_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TheHeaderDropdownAccnt.vue?vue&type=style&index=0&id=f77a4108&scoped=true&lang=css& */ "./resources/js/src/containers/TheHeaderDropdownAccnt.vue?vue&type=style&index=0&id=f77a4108&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TheHeaderDropdownAccnt_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TheHeaderDropdownAccnt_vue_vue_type_template_id_f77a4108_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TheHeaderDropdownAccnt_vue_vue_type_template_id_f77a4108_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "f77a4108",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/containers/TheHeaderDropdownAccnt.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/containers/TheHeaderDropdownAccnt.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/containers/TheHeaderDropdownAccnt.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheHeaderDropdownAccnt_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./TheHeaderDropdownAccnt.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/containers/TheHeaderDropdownAccnt.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheHeaderDropdownAccnt_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/containers/TheHeaderDropdownAccnt.vue?vue&type=style&index=0&id=f77a4108&scoped=true&lang=css&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/src/containers/TheHeaderDropdownAccnt.vue?vue&type=style&index=0&id=f77a4108&scoped=true&lang=css& ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheHeaderDropdownAccnt_vue_vue_type_style_index_0_id_f77a4108_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./TheHeaderDropdownAccnt.vue?vue&type=style&index=0&id=f77a4108&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/containers/TheHeaderDropdownAccnt.vue?vue&type=style&index=0&id=f77a4108&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheHeaderDropdownAccnt_vue_vue_type_style_index_0_id_f77a4108_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheHeaderDropdownAccnt_vue_vue_type_style_index_0_id_f77a4108_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheHeaderDropdownAccnt_vue_vue_type_style_index_0_id_f77a4108_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheHeaderDropdownAccnt_vue_vue_type_style_index_0_id_f77a4108_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheHeaderDropdownAccnt_vue_vue_type_style_index_0_id_f77a4108_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/containers/TheHeaderDropdownAccnt.vue?vue&type=template&id=f77a4108&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/src/containers/TheHeaderDropdownAccnt.vue?vue&type=template&id=f77a4108&scoped=true& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheHeaderDropdownAccnt_vue_vue_type_template_id_f77a4108_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./TheHeaderDropdownAccnt.vue?vue&type=template&id=f77a4108&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/containers/TheHeaderDropdownAccnt.vue?vue&type=template&id=f77a4108&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheHeaderDropdownAccnt_vue_vue_type_template_id_f77a4108_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheHeaderDropdownAccnt_vue_vue_type_template_id_f77a4108_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/containers/TheSidebar.vue":
/*!****************************************************!*\
  !*** ./resources/js/src/containers/TheSidebar.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TheSidebar_vue_vue_type_template_id_3bdd66ef___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheSidebar.vue?vue&type=template&id=3bdd66ef& */ "./resources/js/src/containers/TheSidebar.vue?vue&type=template&id=3bdd66ef&");
/* harmony import */ var _TheSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TheSidebar.vue?vue&type=script&lang=js& */ "./resources/js/src/containers/TheSidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TheSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TheSidebar_vue_vue_type_template_id_3bdd66ef___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TheSidebar_vue_vue_type_template_id_3bdd66ef___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/containers/TheSidebar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/containers/TheSidebar.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/containers/TheSidebar.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./TheSidebar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/containers/TheSidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/containers/TheSidebar.vue?vue&type=template&id=3bdd66ef&":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/containers/TheSidebar.vue?vue&type=template&id=3bdd66ef& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheSidebar_vue_vue_type_template_id_3bdd66ef___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./TheSidebar.vue?vue&type=template&id=3bdd66ef& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/containers/TheSidebar.vue?vue&type=template&id=3bdd66ef&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheSidebar_vue_vue_type_template_id_3bdd66ef___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheSidebar_vue_vue_type_template_id_3bdd66ef___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/containers/_nav.js":
/*!*********************************************!*\
  !*** ./resources/js/src/containers/_nav.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  _name: 'CSidebarNav',
  _children: [{
    _name: 'CSidebarNavItem',
    name: 'Домашняя страница',
    to: '/dashboard',
    icon: 'cil-home'
  } // {
  //   _name: 'CSidebarNavTitle',
  //   _children: ['Theme']
  // },
  // {
  //   _name: 'CSidebarNavItem',
  //   name: 'Colors',
  //   to: '/theme/colors',
  //   icon: 'cil-drop'
  // },
  // {
  //   _name: 'CSidebarNavItem',
  //   name: 'Typography',
  //   to: '/theme/typography',
  //   icon: 'cil-pencil'
  // },
  // {
  //   _name: 'CSidebarNavItem',
  //   name: 'CKEditor',
  //   to: '/theme/ckeditor',
  //   icon: 'cil-short-text'
  // },
  // {
  //   _name: 'CSidebarNavTitle',
  //   _children: ['Components']
  // },
  // {
  //   _name: 'CSidebarNavDropdown',
  //   name: 'Base',
  //   route: '/base',
  //   icon: 'cil-puzzle',
  //   items: [
  //     {
  //       name: 'Breadcrumbs',
  //       to: '/base/breadcrumbs'
  //     },
  //     {
  //       name: 'Cards',
  //       to: '/base/cards'
  //     },
  //     {
  //       name: 'Carousels',
  //       to: '/base/carousels'
  //     }, 
  //     {
  //       name: 'Collapses',
  //       to: '/base/collapses'
  //     },
  //     {
  //       name: 'Forms',
  //       to: '/base/forms'
  //     },
  //     {
  //       name: 'Jumbotrons',
  //       to: '/base/jumbotrons'
  //     },
  //     {
  //       name: 'List Groups',
  //       to: '/base/list-groups'
  //     },
  //     {
  //       name: 'Navs',
  //       to: '/base/navs'
  //     },
  //     {
  //       name: 'Navbars',
  //       to: '/base/navbars'
  //     },
  //     {
  //       name: 'Paginations',
  //       to: '/base/paginations'
  //     },
  //     {
  //       name: 'Popovers',
  //       to: '/base/popovers'
  //     },
  //     {
  //       name: 'Progress Bars',
  //       to: '/base/progress-bars'
  //     },
  //     {
  //       name: 'Switches',
  //       to: '/base/switches'
  //     },
  //     {
  //       name: 'Tables',
  //       to: '/base/tables'
  //     },
  //     {
  //       name: 'Tabs',
  //       to: '/base/tabs'
  //     },
  //     {
  //       name: 'Tooltips',
  //       to: '/base/tooltips'
  //     }
  //   ]
  // },
  // {
  //   _name: 'CSidebarNavDropdown',
  //   name: 'Buttons',
  //   route: '/buttons',
  //   icon: 'cil-cursor',
  //   items: [
  //     {
  //       name: 'Buttons',
  //       to: '/buttons/standard-buttons'
  //     },
  //     {
  //       name: 'Button Dropdowns',
  //       to: '/buttons/dropdowns'
  //     },
  //     {
  //       name: 'Button Groups',
  //       to: '/buttons/button-groups'
  //     },
  //     {
  //       name: 'Brand Buttons',
  //       to: '/buttons/brand-buttons'
  //     }
  //   ]
  // },
  // {
  //   _name: 'CSidebarNavItem',
  //   name: 'Charts',
  //   to: '/charts',
  //   icon: 'cil-chart-pie'
  // },
  // {
  //   _name: 'CSidebarNavDropdown',
  //   name: 'Icons',
  //   route: '/icons',
  //   icon: 'cil-star',
  //   items: [
  //     {
  //       name: 'CoreUI Icons',
  //       to: '/icons/coreui-icons',
  //       badge: {
  //         color: 'info',
  //         text: 'NEW'
  //       }
  //     },
  //     {
  //       name: 'Brands',
  //       to: '/icons/brands'
  //     },
  //     {
  //       name: 'Flags',
  //       to: '/icons/flags'
  //     }
  //   ]
  // },
  // {
  //   _name: 'CSidebarNavDropdown',
  //   name: 'Notifications',
  //   route: '/notifications',
  //   icon: 'cil-bell',
  //   items: [
  //     {
  //       name: 'Alerts',
  //       to: '/notifications/alerts'
  //     },
  //     {
  //       name: 'Badges',
  //       to: '/notifications/badges'
  //     },
  //     {
  //       name: 'Modals',
  //       to: '/notifications/modals'
  //     }
  //   ]
  // },
  // {
  //   _name: 'CSidebarNavItem',
  //   name: 'Widgets',
  //   to: '/widgets',
  //   icon: 'cil-calculator',
  //   badge: {
  //     color: 'primary',
  //     text: 'NEW',
  //     shape: 'pill'
  //   }
  // },
  // {
  //   _name: 'CSidebarNavDivider',
  //   _class: 'm-2'
  // },
  // {
  //   _name: 'CSidebarNavTitle',
  //   _children: ['Extras']
  // },
  // {
  //   _name: 'CSidebarNavDropdown',
  //   name: 'Pages',
  //   route: '/pages',
  //   icon: 'cil-star',
  //   items: [
  //     {
  //       name: 'Login',
  //       to: '/pages/login'
  //     },
  //     {
  //       name: 'Register',
  //       to: '/pages/register'
  //     },
  //     {
  //       name: 'Error 404',
  //       to: '/pages/404'
  //     },
  //     {
  //       name: 'Error 500',
  //       to: '/pages/500'
  //     }
  //   ]
  // },
  // {
  //   _name: 'CSidebarNavItem',
  //   name: 'Download CoreUI',
  //   href: 'http://coreui.io/vue/',
  //   icon: { name: 'cil-cloud-download', class: 'text-white' },
  //   _class: 'bg-success text-white',
  //   target: '_blank'
  // },
  // {
  //   _name: 'CSidebarNavItem',
  //   name: 'Try CoreUI PRO',
  //   href: 'http://coreui.io/pro/vue/',
  //   icon: { name: 'cil-layers', class: 'text-white' },
  //   _class: 'bg-danger text-white',
  //   target: '_blank'
  // }
  ]
}]);

/***/ })

}]);