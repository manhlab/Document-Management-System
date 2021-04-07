(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/base/Collapses.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/base/Collapses.vue?vue&type=script&lang=js& ***!
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
  name: 'Collapses',
  data: function data() {
    return {
      collapse: false,
      cardCollapse: true,
      innerCollapse: false,
      text: "\n        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry\n        richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor\n        brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon\n        tempor, sunt aliqua put a bird on it squid single-origin coffee nulla\n        assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore\n        wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher\n        vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic\n        synth nesciunt you probably haven't heard of them accusamus labore VHS.\n      "
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/base/Collapses.vue?vue&type=template&id=27721a12&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/base/Collapses.vue?vue&type=template&id=27721a12& ***!
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
    "CRow",
    [
      _c(
        "CCol",
        { attrs: { col: "12", md: "6" } },
        [
          _c(
            "CCard",
            [
              _c(
                "CCardHeader",
                [
                  _c("CIcon", { attrs: { name: "cil-justify-center" } }),
                  _vm._v(" "),
                  _c("strong", [_vm._v(" Bootstrap Collapse ")]),
                  _vm._v(" "),
                  _c("div", { staticClass: "card-header-actions" }, [
                    _c(
                      "a",
                      {
                        staticClass: "card-header-action",
                        attrs: {
                          href:
                            "https://coreui.io/vue/docs/components/collapse",
                          rel: "noreferrer noopener",
                          target: "_blank"
                        }
                      },
                      [
                        _c("small", { staticClass: "text-muted" }, [
                          _vm._v("docs")
                        ])
                      ]
                    )
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "CCardBody",
                [
                  _c(
                    "CButton",
                    {
                      staticClass: "mb-2",
                      attrs: { color: "primary" },
                      on: {
                        click: function($event) {
                          _vm.collapse = !_vm.collapse
                        }
                      }
                    },
                    [_vm._v("\n          Toggle Collapse\n        ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "CCollapse",
                    { attrs: { show: _vm.collapse, duration: 400 } },
                    [
                      _c(
                        "CCard",
                        { attrs: { "body-wrapper": "" } },
                        [
                          _c("CCardText", [_vm._v("Collapse contents Here")]),
                          _vm._v(" "),
                          _c(
                            "CButton",
                            {
                              attrs: { size: "sm", color: "secondary" },
                              on: {
                                click: function($event) {
                                  _vm.innerCollapse = !_vm.innerCollapse
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n              Toggle Inner Collapse\n            "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "CCollapse",
                            {
                              staticClass: "mt-2",
                              attrs: { show: _vm.innerCollapse }
                            },
                            [
                              _c("CCard", { attrs: { "body-wrapper": "" } }, [
                                _vm._v("Hello!")
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "CCol",
        { attrs: { col: "12", md: "6" } },
        [
          _c(
            "CCard",
            [
              _c(
                "CCardHeader",
                {
                  staticClass: "btn text-left",
                  on: {
                    click: function($event) {
                      _vm.cardCollapse = !_vm.cardCollapse
                    }
                  }
                },
                [_c("strong", [_vm._v("Collapsible card")])]
              ),
              _vm._v(" "),
              _c(
                "CCollapse",
                { attrs: { show: _vm.cardCollapse } },
                [
                  _c("CCardBody", { staticClass: "m-1" }, [
                    _vm._v("\n          " + _vm._s(_vm.text) + "\n        ")
                  ])
                ],
                1
              )
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

/***/ "./resources/js/src/views/base/Collapses.vue":
/*!***************************************************!*\
  !*** ./resources/js/src/views/base/Collapses.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Collapses_vue_vue_type_template_id_27721a12___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Collapses.vue?vue&type=template&id=27721a12& */ "./resources/js/src/views/base/Collapses.vue?vue&type=template&id=27721a12&");
/* harmony import */ var _Collapses_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Collapses.vue?vue&type=script&lang=js& */ "./resources/js/src/views/base/Collapses.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Collapses_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Collapses_vue_vue_type_template_id_27721a12___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Collapses_vue_vue_type_template_id_27721a12___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/base/Collapses.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/base/Collapses.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/src/views/base/Collapses.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Collapses_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Collapses.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/base/Collapses.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Collapses_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/base/Collapses.vue?vue&type=template&id=27721a12&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/base/Collapses.vue?vue&type=template&id=27721a12& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Collapses_vue_vue_type_template_id_27721a12___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Collapses.vue?vue&type=template&id=27721a12& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/base/Collapses.vue?vue&type=template&id=27721a12&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Collapses_vue_vue_type_template_id_27721a12___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Collapses_vue_vue_type_template_id_27721a12___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);