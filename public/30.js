(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/base/Tooltips.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/base/Tooltips.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Tooltips',
  data: function data() {
    return {
      placements: ['top-start', 'top', 'top-end', 'bottom-start', 'bottom', 'bottom-end', 'right-start', 'right', 'right-end', 'left-start', 'left', 'left-end']
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/base/Tooltips.vue?vue&type=template&id=7ed8f0d4&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/base/Tooltips.vue?vue&type=template&id=7ed8f0d4& ***!
  \***************************************************************************************************************************************************************************************************************/
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
              _c("strong", [_vm._v(" Bootstrap Tooltips ")]),
              _vm._v(" "),
              _c("small", [
                _c("code", [_vm._v("v-c-tooltip")]),
                _vm._v(" directive")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-header-actions" }, [
                _c(
                  "a",
                  {
                    staticClass: "card-header-action",
                    attrs: {
                      href: "https://coreui.io/vue/docs/directives/tooltip",
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
              _c(
                "CRow",
                [
                  _c("CCol", { attrs: { col: "6" } }, [
                    _c(
                      "div",
                      { staticClass: "text-center my-3" },
                      [
                        _c(
                          "CButton",
                          {
                            directives: [
                              {
                                name: "c-tooltip",
                                rawName: "v-c-tooltip.hover.click",
                                value: "I am a tooltip!",
                                expression: "'I am a tooltip!'",
                                modifiers: { hover: true, click: true }
                              }
                            ],
                            attrs: { color: "secondary" }
                          },
                          [_vm._v("\n              Hover Me\n            ")]
                        )
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("CCol", { attrs: { col: "6" } }, [
                    _c(
                      "div",
                      { staticClass: "text-center my-3" },
                      [
                        _c(
                          "CButton",
                          {
                            directives: [
                              {
                                name: "c-tooltip",
                                rawName: "v-c-tooltip",
                                value: {
                                  content: "I start open!",
                                  active: true
                                },
                                expression:
                                  "{content: 'I start open!', active:true }"
                              }
                            ],
                            attrs: { color: "secondary" }
                          },
                          [_vm._v("\n              Hover me\n            ")]
                        )
                      ],
                      1
                    )
                  ])
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
        "CCard",
        [
          _c(
            "CCardHeader",
            [
              _c("CIcon", { attrs: { name: "cil-justify-center" } }),
              _vm._v(" "),
              _c("strong", [_vm._v(" Tooltips ")]),
              _vm._v(" "),
              _c("small", [_vm._v("placement")])
            ],
            1
          ),
          _vm._v(" "),
          _c("CCardBody", [
            _c(
              "div",
              { staticClass: "my-3" },
              [
                _c(
                  "CRow",
                  _vm._l(_vm.placements, function(placement) {
                    return _c(
                      "CCol",
                      {
                        key: placement,
                        staticClass: "py-4 text-center",
                        attrs: { md: "4" }
                      },
                      [
                        _c(
                          "CButton",
                          {
                            directives: [
                              {
                                name: "c-tooltip",
                                rawName: "v-c-tooltip.hover",
                                value: {
                                  content: "Placement " + placement,
                                  placement: placement
                                },
                                expression:
                                  "{\n                content: `Placement ${placement}`,\n                placement\n              }",
                                modifiers: { hover: true }
                              }
                            ],
                            attrs: { color: "primary" }
                          },
                          [
                            _vm._v(
                              "\n              " +
                                _vm._s(placement) +
                                "\n            "
                            )
                          ]
                        )
                      ],
                      1
                    )
                  }),
                  1
                )
              ],
              1
            )
          ])
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

/***/ "./resources/js/src/views/base/Tooltips.vue":
/*!**************************************************!*\
  !*** ./resources/js/src/views/base/Tooltips.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tooltips_vue_vue_type_template_id_7ed8f0d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tooltips.vue?vue&type=template&id=7ed8f0d4& */ "./resources/js/src/views/base/Tooltips.vue?vue&type=template&id=7ed8f0d4&");
/* harmony import */ var _Tooltips_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tooltips.vue?vue&type=script&lang=js& */ "./resources/js/src/views/base/Tooltips.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Tooltips_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Tooltips_vue_vue_type_template_id_7ed8f0d4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Tooltips_vue_vue_type_template_id_7ed8f0d4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/base/Tooltips.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/base/Tooltips.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/src/views/base/Tooltips.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tooltips_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Tooltips.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/base/Tooltips.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tooltips_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/base/Tooltips.vue?vue&type=template&id=7ed8f0d4&":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/base/Tooltips.vue?vue&type=template&id=7ed8f0d4& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tooltips_vue_vue_type_template_id_7ed8f0d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Tooltips.vue?vue&type=template&id=7ed8f0d4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/base/Tooltips.vue?vue&type=template&id=7ed8f0d4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tooltips_vue_vue_type_template_id_7ed8f0d4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tooltips_vue_vue_type_template_id_7ed8f0d4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);