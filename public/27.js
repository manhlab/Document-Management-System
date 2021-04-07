(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/base/ProgressBars.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/base/ProgressBars.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'ProgressBars',
  data: function data() {
    return {
      counter: 73,
      max: 100,
      max2: 50,
      value: 33.333333333,
      value3: 75,
      bars: [{
        color: 'success',
        value: 75
      }, {
        color: 'info',
        value: 75
      }, {
        color: 'warning',
        value: 75
      }, {
        color: 'danger',
        value: 75
      }, {
        color: 'primary',
        value: 75
      }, {
        color: 'secondary',
        value: 75
      }, {
        color: 'dark',
        value: 75
      }],
      timer: null,
      striped: true,
      animate: true,
      max3: 100,
      values: [15, 30, 20]
    };
  },
  methods: {
    clicked: function clicked() {
      this.counter = Math.random() * this.max;
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.timer = setInterval(function () {
      _this.bars.forEach(function (bar) {
        bar.value = 25 + Math.random() * 75;
      });
    }, 2000);
  },
  beforeDestroy: function beforeDestroy() {
    clearInterval(this.timer);
    this.timer = null;
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/base/ProgressBars.vue?vue&type=template&id=a0bf3bde&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/base/ProgressBars.vue?vue&type=template&id=a0bf3bde& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
              _c("strong", [_vm._v(" Bootstrap Progress")]),
              _vm._v(" "),
              _c("div", { staticClass: "card-header-actions" }, [
                _c(
                  "a",
                  {
                    staticClass: "card-header-action",
                    attrs: {
                      href: "https://coreui.io/vue/docs/components/progress",
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
              _c("CProgress", {
                attrs: {
                  value: _vm.counter,
                  max: _vm.max,
                  "show-percentage": "",
                  animated: ""
                }
              }),
              _vm._v(" "),
              _c(
                "CProgress",
                {
                  staticClass: "mt-1",
                  attrs: { max: _vm.max, "show-value": "" }
                },
                [
                  _c("CProgressBar", {
                    attrs: { value: _vm.counter * (6 / 10), color: "success" }
                  }),
                  _vm._v(" "),
                  _c("CProgressBar", {
                    attrs: { value: _vm.counter * (2.5 / 10), color: "warning" }
                  }),
                  _vm._v(" "),
                  _c("CProgressBar", {
                    attrs: { value: _vm.counter * (1.5 / 10), color: "danger" }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "CButton",
                {
                  staticClass: "mt-4",
                  attrs: { color: "secondary" },
                  on: { click: _vm.clicked }
                },
                [_vm._v("\n        Click me to animate progress bars\n      ")]
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
              _c("strong", [_vm._v(" Progress ")]),
              _c("small", [_vm._v("labels")])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "CCardBody",
            [
              _c("h6", [_vm._v("No label")]),
              _vm._v(" "),
              _c("CProgress", {
                staticClass: "mb-3",
                attrs: { value: _vm.value, max: _vm.max2 }
              }),
              _vm._v(" "),
              _c("h6", [_vm._v("Value label")]),
              _vm._v(" "),
              _c("CProgress", {
                staticClass: "mb-3",
                attrs: { value: _vm.value, max: _vm.max2, "show-value": "" }
              }),
              _vm._v(" "),
              _c("h6", [_vm._v("Progress label")]),
              _vm._v(" "),
              _c("CProgress", {
                staticClass: "mb-3",
                attrs: {
                  value: _vm.value,
                  max: _vm.max2,
                  "show-percentage": ""
                }
              }),
              _vm._v(" "),
              _c("h6", [_vm._v("Value label with precision")]),
              _vm._v(" "),
              _c("CProgress", {
                staticClass: "mb-3",
                attrs: {
                  value: _vm.value,
                  max: _vm.max2,
                  precision: 2,
                  "show-value": ""
                }
              }),
              _vm._v(" "),
              _c("h6", [_vm._v("Progress label with precision")]),
              _vm._v(" "),
              _c("CProgress", {
                staticClass: "mb-3",
                attrs: {
                  value: _vm.value,
                  max: _vm.max2,
                  precision: 2,
                  "show-percentage": ""
                }
              })
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
              _c("strong", [_vm._v(" Progress ")]),
              _vm._v(" "),
              _c("small", [_vm._v("width")])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "CCardBody",
            [
              _c("h6", [_vm._v("Default width")]),
              _vm._v(" "),
              _c("CProgress", {
                staticClass: "mb-3",
                attrs: { value: _vm.value3 }
              }),
              _vm._v(" "),
              _c("h6", [_vm._v("Custom widths")]),
              _vm._v(" "),
              _c("CProgress", {
                staticClass: "w-75 mb-2",
                attrs: { value: _vm.value3 }
              }),
              _vm._v(" "),
              _c("CProgress", {
                staticClass: "w-50 mb-2",
                attrs: { value: _vm.value3 }
              }),
              _vm._v(" "),
              _c("CProgress", {
                staticClass: "w-25",
                attrs: { value: _vm.value3 }
              })
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
              _c("strong", [_vm._v(" Progress ")]),
              _vm._v(" "),
              _c("small", [_vm._v("height")])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "CCardBody",
            [
              _c("h6", [_vm._v("Default height")]),
              _vm._v(" "),
              _c("CProgress", {
                staticClass: "mb-3",
                attrs: { value: _vm.value3, "show-percentage": "" }
              }),
              _vm._v(" "),
              _c("h6", [_vm._v("Custom heights")]),
              _vm._v(" "),
              _c("CProgress", {
                staticClass: "mb-2",
                attrs: {
                  height: "2rem",
                  value: _vm.value3,
                  "show-percentage": ""
                }
              }),
              _vm._v(" "),
              _c("CProgress", {
                staticClass: "mb-2",
                attrs: {
                  height: "20px",
                  value: _vm.value3,
                  "show-percentage": ""
                }
              }),
              _vm._v(" "),
              _c("CProgress", { attrs: { height: "2px", value: _vm.value3 } })
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
              _c("strong", [_vm._v(" Progress ")]),
              _vm._v(" "),
              _c("small", [_vm._v("colors")])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "CCardBody",
            _vm._l(_vm.bars, function(bar, index) {
              return _c("div", { key: index, staticClass: "row mb-1" }, [
                _c("div", { staticClass: "col-sm-2" }, [
                  _vm._v(_vm._s(bar.color) + ":")
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-sm-10 pt-1" },
                  [
                    _c("CProgress", {
                      key: bar.color,
                      attrs: { value: bar.value, color: bar.color }
                    })
                  ],
                  1
                )
              ])
            }),
            0
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
              _c("strong", [_vm._v(" Progress ")]),
              _vm._v(" "),
              _c("small", [_vm._v("striped")])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "CCardBody",
            [
              _c("CProgress", {
                staticClass: "mb-2",
                attrs: { value: 25, color: "success", striped: _vm.striped }
              }),
              _vm._v(" "),
              _c("CProgress", {
                staticClass: "mb-2",
                attrs: { value: 50, color: "info", striped: _vm.striped }
              }),
              _vm._v(" "),
              _c("CProgress", {
                staticClass: "mb-2",
                attrs: { value: 75, color: "warning", striped: _vm.striped }
              }),
              _vm._v(" "),
              _c("CProgress", {
                staticClass: "mb-2",
                attrs: { value: 100, color: "danger", striped: _vm.striped }
              }),
              _vm._v(" "),
              _c(
                "CButton",
                {
                  attrs: { color: "secondary" },
                  on: {
                    click: function($event) {
                      _vm.striped = !_vm.striped
                    }
                  }
                },
                [
                  _vm._v(
                    "\n        " +
                      _vm._s(_vm.striped ? "Remove" : "Add") +
                      " Striped\n      "
                  )
                ]
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
              _c("strong", [_vm._v(" Progress ")]),
              _vm._v(" "),
              _c("small", [_vm._v("animated")])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "CCardBody",
            [
              _c("CProgress", {
                staticClass: "mb-2",
                attrs: {
                  value: 25,
                  color: "success",
                  striped: "",
                  animated: _vm.animate
                }
              }),
              _vm._v(" "),
              _c("CProgress", {
                staticClass: "mb-2",
                attrs: {
                  value: 50,
                  color: "info",
                  striped: "",
                  animated: _vm.animate
                }
              }),
              _vm._v(" "),
              _c("CProgress", {
                staticClass: "mb-2",
                attrs: {
                  value: 75,
                  color: "warning",
                  striped: "",
                  animated: _vm.animate
                }
              }),
              _vm._v(" "),
              _c("CProgress", {
                staticClass: "mb-3",
                attrs: { value: 100, color: "danger", animated: _vm.animate }
              }),
              _vm._v(" "),
              _c(
                "CButton",
                {
                  attrs: { color: "secondary" },
                  on: {
                    click: function($event) {
                      _vm.animate = !_vm.animate
                    }
                  }
                },
                [
                  _vm._v(
                    "\n        " +
                      _vm._s(_vm.animate ? "Stop" : "Start") +
                      " Animation\n      "
                  )
                ]
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
              _c("strong", [_vm._v(" Progress ")]),
              _vm._v(" "),
              _c("small", [_vm._v("multiple bars")])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "CCardBody",
            [
              _c(
                "CProgress",
                { staticClass: "mb-3", attrs: { max: _vm.max3 } },
                [
                  _c("CProgressBar", {
                    attrs: { color: "primary", value: _vm.values[0] }
                  }),
                  _vm._v(" "),
                  _c("CProgressBar", {
                    attrs: { color: "success", value: _vm.values[1] }
                  }),
                  _vm._v(" "),
                  _c("CProgressBar", {
                    attrs: { color: "info", value: _vm.values[2] }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "CProgress",
                {
                  staticClass: "mb-3",
                  attrs: { "show-percentage": "", max: _vm.max3 }
                },
                [
                  _c("CProgressBar", {
                    attrs: { color: "primary", value: _vm.values[0] }
                  }),
                  _vm._v(" "),
                  _c("CProgressBar", {
                    attrs: { color: "success", value: _vm.values[1] }
                  }),
                  _vm._v(" "),
                  _c("CProgressBar", {
                    attrs: { color: "info", value: _vm.values[2] }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "CProgress",
                {
                  staticClass: "mb-3",
                  attrs: { "show-value": "", striped: "", max: _vm.max3 }
                },
                [
                  _c("CProgressBar", {
                    attrs: { color: "primary", value: _vm.values[0] }
                  }),
                  _vm._v(" "),
                  _c("CProgressBar", {
                    attrs: { color: "success", value: _vm.values[1] }
                  }),
                  _vm._v(" "),
                  _c("CProgressBar", {
                    attrs: { color: "info", value: _vm.values[2] }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "CProgress",
                { staticClass: "mb-3", attrs: { max: _vm.max3 } },
                [
                  _c("CProgressBar", {
                    attrs: {
                      color: "primary",
                      value: _vm.values[0],
                      "show-percentage": ""
                    }
                  }),
                  _vm._v(" "),
                  _c("CProgressBar", {
                    attrs: {
                      color: "success",
                      value: _vm.values[1],
                      animated: "",
                      "show-percentage": ""
                    }
                  }),
                  _vm._v(" "),
                  _c("CProgressBar", {
                    attrs: {
                      color: "info",
                      value: _vm.values[2],
                      striped: "",
                      "show-percentage": ""
                    }
                  })
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

/***/ "./resources/js/src/views/base/ProgressBars.vue":
/*!******************************************************!*\
  !*** ./resources/js/src/views/base/ProgressBars.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProgressBars_vue_vue_type_template_id_a0bf3bde___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProgressBars.vue?vue&type=template&id=a0bf3bde& */ "./resources/js/src/views/base/ProgressBars.vue?vue&type=template&id=a0bf3bde&");
/* harmony import */ var _ProgressBars_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProgressBars.vue?vue&type=script&lang=js& */ "./resources/js/src/views/base/ProgressBars.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProgressBars_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProgressBars_vue_vue_type_template_id_a0bf3bde___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProgressBars_vue_vue_type_template_id_a0bf3bde___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/base/ProgressBars.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/base/ProgressBars.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/views/base/ProgressBars.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProgressBars_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProgressBars.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/base/ProgressBars.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProgressBars_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/base/ProgressBars.vue?vue&type=template&id=a0bf3bde&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/base/ProgressBars.vue?vue&type=template&id=a0bf3bde& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProgressBars_vue_vue_type_template_id_a0bf3bde___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProgressBars.vue?vue&type=template&id=a0bf3bde& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/base/ProgressBars.vue?vue&type=template&id=a0bf3bde&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProgressBars_vue_vue_type_template_id_a0bf3bde___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProgressBars_vue_vue_type_template_id_a0bf3bde___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);