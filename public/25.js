(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/base/Paginations.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/base/Paginations.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
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
  name: 'Paginations',
  data: function data() {
    return {
      currentPage: 3
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/base/Paginations.vue?vue&type=template&id=d3c28576&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/base/Paginations.vue?vue&type=template&id=d3c28576& ***!
  \******************************************************************************************************************************************************************************************************************/
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
              _c("CIcon", { attrs: { name: "cil-justify-center" } }),
              _vm._v(" "),
              _c("strong", [_vm._v(" Pagination ")]),
              _vm._v(" "),
              _c("small", [_vm._v("size")]),
              _vm._v(" "),
              _c("div", { staticClass: "card-header-actions" }, [
                _c(
                  "a",
                  {
                    staticClass: "card-header-action",
                    attrs: {
                      href: "https://coreui.io/vue/docs/components/pagination",
                      rel: "noreferrer noopener",
                      target: "_blank"
                    }
                  },
                  [_c("small", { staticClass: "text-muted" }, [_vm._v("docs")])]
                )
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "CCardBody",
            [
              _c("h6", [_vm._v("Default")]),
              _vm._v(" "),
              _c("CPagination", {
                attrs: {
                  "active-page": _vm.currentPage,
                  pages: 10,
                  responsive: ""
                },
                on: {
                  "update:activePage": function($event) {
                    _vm.currentPage = $event
                  },
                  "update:active-page": function($event) {
                    _vm.currentPage = $event
                  }
                }
              }),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("h6", [_vm._v("Small")]),
              _vm._v(" "),
              _c("CPagination", {
                attrs: {
                  size: "sm",
                  "active-page": _vm.currentPage,
                  pages: 10
                },
                on: {
                  "update:activePage": function($event) {
                    _vm.currentPage = $event
                  },
                  "update:active-page": function($event) {
                    _vm.currentPage = $event
                  }
                }
              }),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "d-md-down-none" },
                [
                  _c("h6", [_vm._v("Large")]),
                  _vm._v(" "),
                  _c("CPagination", {
                    attrs: {
                      size: "lg",
                      "active-page": _vm.currentPage,
                      pages: 10,
                      responsive: ""
                    },
                    on: {
                      "update:activePage": function($event) {
                        _vm.currentPage = $event
                      },
                      "update:active-page": function($event) {
                        _vm.currentPage = $event
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("br")
                ],
                1
              ),
              _vm._v(" "),
              _c("div", [_vm._v("currentPage: " + _vm._s(_vm.currentPage))])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "CCard",
        [
          _c(
            "CCardHeader",
            [
              _c("CIcon", { attrs: { name: "cil-justify-center" } }),
              _vm._v(" "),
              _c("strong", [_vm._v(" Pagination ")]),
              _vm._v(" "),
              _c("small", [_vm._v("alignment")])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "CCardBody",
            [
              _c("h6", [_vm._v("Left alignment (default)")]),
              _vm._v(" "),
              _c("CPagination", {
                attrs: { "active-page": _vm.currentPage, pages: 10 },
                on: {
                  "update:activePage": function($event) {
                    _vm.currentPage = $event
                  },
                  "update:active-page": function($event) {
                    _vm.currentPage = $event
                  }
                }
              }),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("h6", [_vm._v("Center alignment")]),
              _vm._v(" "),
              _c("CPagination", {
                attrs: {
                  align: "center",
                  pages: 10,
                  "active-page": _vm.currentPage
                },
                on: {
                  "update:activePage": function($event) {
                    _vm.currentPage = $event
                  },
                  "update:active-page": function($event) {
                    _vm.currentPage = $event
                  }
                }
              }),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("h6", [_vm._v("Right (end) alignment")]),
              _vm._v(" "),
              _c("CPagination", {
                attrs: {
                  align: "end",
                  "active-page": _vm.currentPage,
                  pages: 10
                },
                on: {
                  "update:activePage": function($event) {
                    _vm.currentPage = $event
                  },
                  "update:active-page": function($event) {
                    _vm.currentPage = $event
                  }
                }
              }),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("div", [_vm._v("currentPage: " + _vm._s(_vm.currentPage))])
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

/***/ "./resources/js/src/views/base/Paginations.vue":
/*!*****************************************************!*\
  !*** ./resources/js/src/views/base/Paginations.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Paginations_vue_vue_type_template_id_d3c28576___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Paginations.vue?vue&type=template&id=d3c28576& */ "./resources/js/src/views/base/Paginations.vue?vue&type=template&id=d3c28576&");
/* harmony import */ var _Paginations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Paginations.vue?vue&type=script&lang=js& */ "./resources/js/src/views/base/Paginations.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Paginations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Paginations_vue_vue_type_template_id_d3c28576___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Paginations_vue_vue_type_template_id_d3c28576___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/base/Paginations.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/base/Paginations.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/src/views/base/Paginations.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Paginations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Paginations.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/base/Paginations.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Paginations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/base/Paginations.vue?vue&type=template&id=d3c28576&":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/base/Paginations.vue?vue&type=template&id=d3c28576& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Paginations_vue_vue_type_template_id_d3c28576___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Paginations.vue?vue&type=template&id=d3c28576& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/base/Paginations.vue?vue&type=template&id=d3c28576&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Paginations_vue_vue_type_template_id_d3c28576___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Paginations_vue_vue_type_template_id_d3c28576___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);