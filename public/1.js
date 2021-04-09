(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/form/List.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/form/List.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


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
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "List",
  props: {
    service: {
      required: true,
      type: Object
    },
    title: {
      required: false,
      type: String,
      "default": "Список"
    },
    canCreate: {
      required: false,
      type: Boolean,
      "default": true
    },
    canUpdate: {
      required: false,
      type: Boolean,
      "default": true
    },
    canDelete: {
      required: false,
      type: Boolean,
      "default": true
    },
    fields: {
      required: true,
      type: Array
    }
  },
  data: function data() {
    return {
      loading: false,
      items: [],
      itemSelected: {},
      itemUpdating: {},
      isShowDetail: false,
      createMode: false
    };
  },
  created: function created() {
    this.init();
  },
  methods: {
    init: function init() {
      this.fetchList();
    },
    fetchList: function fetchList() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.loading = true;
                _context.next = 3;
                return _this.service.all();

              case 3:
                response = _context.sent;
                _this.items = response.data;
                _this.loading = false;

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    showDetail: function showDetail(item) {
      this.$emit("show", item);
      this.createMode = false;
      this.itemSelected = item;
      this.itemUpdating = _.clone(item);
      this.isShowDetail = true;
    },
    onClickSave: function onClickSave() {
      var _this2 = this;

      this.service.update(this.itemUpdating, this.itemSelected.id).then(function (response) {
        _this2.isShowDetail = false;

        _this2.$toast.success("Đã lưu");

        _this2.fetchList();
      })["catch"](function (error) {
        _this2.toastHttpError(error);
      });
    },
    showCreate: function showCreate() {
      this.createMode = true;
      this.itemUpdating = {};
      this.isShowDetail = true;
    },
    onClickCreate: function onClickCreate() {
      var _this3 = this;

      this.service.create(this.itemUpdating).then(function (response) {
        _this3.isShowDetail = false;

        _this3.$toast.success("Đã tạo");

        _this3.fetchList();
      })["catch"](function (error) {
        _this3.toastHttpError(error);
      });
    },
    onClickDelete: function onClickDelete() {
      var _this4 = this;

      this.service["delete"](this.itemSelected.id).then(function (response) {
        _this4.isShowDetail = false;

        _this4.$toast.success("Đã xóa");

        _this4.fetchList();
      })["catch"](function (error) {
        _this4.toastHttpError(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/form/List.vue?vue&type=template&id=7f72a88e&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/form/List.vue?vue&type=template&id=7f72a88e& ***!
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
    "div",
    [
      _c(
        "CCard",
        [
          _c(
            "CCardHeader",
            [
              _c("CIcon", { attrs: { name: "cil-grid" } }),
              _vm._v("\n      " + _vm._s(_vm.title) + "\n      "),
              _vm.canCreate
                ? _c(
                    "CButton",
                    {
                      directives: [
                        {
                          name: "c-tooltip",
                          rawName: "v-c-tooltip",
                          value: "Создать новый",
                          expression: "'Создать'"
                        }
                      ],
                      staticClass: "float-right",
                      attrs: {
                        size: "sm",
                        color: "primary",
                        variant: "outline"
                      },
                      on: { click: _vm.showCreate }
                    },
                    [_c("CIcon", { attrs: { name: "cil-plus" } })],
                    1
                  )
                : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "CCardBody",
            { staticClass: "p-0" },
            [
              _c("CDataTable", {
                attrs: {
                  hover: "",
                  loading: _vm.loading,
                  items: _vm.items,
                  fields: _vm.fields,
                  "clickable-rows": "",
                  sorter: "",
                  "column-filter": ""
                },
                on: { "row-clicked": _vm.showDetail }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "CModal",
        {
          attrs: { title: _vm.title, show: _vm.isShowDetail },
          on: {
            "update:show": function($event) {
              _vm.isShowDetail = $event
            }
          },
          scopedSlots: _vm._u([
            {
              key: "footer",
              fn: function() {
                return [
                  _vm.canCreate && _vm.createMode
                    ? _c(
                        "CButton",
                        {
                          staticClass: "float-right",
                          attrs: { size: "sm", color: "success" },
                          on: { click: _vm.onClickCreate }
                        },
                        [
                          _c("CIcon", { attrs: { name: "cil-plus" } }),
                          _vm._v(" Создать новый\n      ")
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.canUpdate && !_vm.createMode
                    ? _c(
                        "CButton",
                        {
                          staticClass: "float-right",
                          attrs: { size: "sm", color: "success" },
                          on: { click: _vm.onClickSave }
                        },
                        [
                          _c("CIcon", { attrs: { name: "cil-check" } }),
                          _vm._v(" Lưu\n      ")
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.canDelete && !_vm.createMode
                    ? _c(
                        "CButton",
                        {
                          staticClass: "float-right",
                          attrs: { size: "sm", color: "danger" },
                          on: { click: _vm.onClickDelete }
                        },
                        [
                          _c("CIcon", { attrs: { name: "cil-x" } }),
                          _vm._v(" Xóa\n      ")
                        ],
                        1
                      )
                    : _vm._e()
                ]
              },
              proxy: true
            }
          ])
        },
        [
          _vm._l(_vm.fields, function(field) {
            return _c("CInput", {
              key: field.key,
              attrs: { label: field.label, value: _vm.itemUpdating[field.key] },
              on: {
                "update:value": function($event) {
                  return _vm.$set(_vm.itemUpdating, field.key, $event)
                }
              }
            })
          }),
          _vm._v(" "),
          !_vm.createMode ? _vm._t("append-body") : _vm._e()
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/components/form/List.vue":
/*!***************************************************!*\
  !*** ./resources/js/src/components/form/List.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _List_vue_vue_type_template_id_7f72a88e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List.vue?vue&type=template&id=7f72a88e& */ "./resources/js/src/components/form/List.vue?vue&type=template&id=7f72a88e&");
/* harmony import */ var _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./List.vue?vue&type=script&lang=js& */ "./resources/js/src/components/form/List.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _List_vue_vue_type_template_id_7f72a88e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _List_vue_vue_type_template_id_7f72a88e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/components/form/List.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/components/form/List.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/src/components/form/List.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./List.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/form/List.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/components/form/List.vue?vue&type=template&id=7f72a88e&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/components/form/List.vue?vue&type=template&id=7f72a88e& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_7f72a88e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./List.vue?vue&type=template&id=7f72a88e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/form/List.vue?vue&type=template&id=7f72a88e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_7f72a88e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_7f72a88e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);