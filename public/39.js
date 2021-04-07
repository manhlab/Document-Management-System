(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[39],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/notifications/Alerts.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/notifications/Alerts.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Alerts',
  data: function data() {
    return {
      dismissSecs: 10,
      dismissCountDown: 10,
      alert1: true,
      alert2: true
    };
  },
  methods: {
    countDownChanged: function countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert: function showAlert() {
      this.dismissCountDown = this.dismissSecs;
    },
    showDismissibleAlerts: function showDismissibleAlerts() {
      var _this = this;

      ['alert1', 'alert2'].forEach(function (alert) {
        return _this[alert] = true;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/notifications/Alerts.vue?vue&type=template&id=1d7d6ac8&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/notifications/Alerts.vue?vue&type=template&id=1d7d6ac8& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
                  _c("strong", [_vm._v(" Bootstrap Alert")]),
                  _vm._v(" "),
                  _c("div", { staticClass: "card-header-actions" }, [
                    _c(
                      "a",
                      {
                        staticClass: "card-header-action",
                        attrs: {
                          href: "https://coreui.io/vue/docs/components/alert",
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
              _c("CCardBody", [
                _c(
                  "div",
                  [
                    _c("p"),
                    _vm._v(" "),
                    _c("CAlert", { attrs: { show: "", color: "primary" } }, [
                      _vm._v("Primary Alert")
                    ]),
                    _vm._v(" "),
                    _c("CAlert", { attrs: { show: "", color: "secondary" } }, [
                      _vm._v("Secondary Alert")
                    ]),
                    _vm._v(" "),
                    _c("CAlert", { attrs: { show: "", color: "success" } }, [
                      _vm._v("Success Alert")
                    ]),
                    _vm._v(" "),
                    _c("CAlert", { attrs: { show: "", color: "danger" } }, [
                      _vm._v("Danger Alert")
                    ]),
                    _vm._v(" "),
                    _c("CAlert", { attrs: { show: "", color: "warning" } }, [
                      _vm._v("Warning Alert")
                    ]),
                    _vm._v(" "),
                    _c("CAlert", { attrs: { show: "", color: "info" } }, [
                      _vm._v("Info Alert")
                    ]),
                    _vm._v(" "),
                    _c("CAlert", { attrs: { show: "", color: "light" } }, [
                      _vm._v("Light Alert")
                    ]),
                    _vm._v(" "),
                    _c("CAlert", { attrs: { show: "", color: "dark" } }, [
                      _vm._v("Dark Alert")
                    ])
                  ],
                  1
                )
              ])
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
                [
                  _c("CIcon", { attrs: { name: "cil-justify-center" } }),
                  _vm._v(" Alert\n        "),
                  _c("small", [
                    _vm._v(" use "),
                    _c("code", [_vm._v(".alert-link")]),
                    _vm._v(" to provide links")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c("CCardBody", [
                _c(
                  "div",
                  [
                    _c("CAlert", { attrs: { show: "", color: "primary" } }, [
                      _vm._v("\n            Primary Alert with "),
                      _c(
                        "a",
                        { staticClass: "alert-link", attrs: { href: "#" } },
                        [_vm._v("an example link")]
                      ),
                      _vm._v(".\n          ")
                    ]),
                    _vm._v(" "),
                    _c("CAlert", { attrs: { show: "", color: "secondary" } }, [
                      _vm._v("\n            Secondary Alert with "),
                      _c(
                        "a",
                        { staticClass: "alert-link", attrs: { href: "#" } },
                        [_vm._v("an example link")]
                      ),
                      _vm._v(".\n          ")
                    ]),
                    _vm._v(" "),
                    _c("CAlert", { attrs: { show: "", color: "success" } }, [
                      _vm._v("\n            Success Alert with "),
                      _c(
                        "a",
                        { staticClass: "alert-link", attrs: { href: "#" } },
                        [_vm._v("an example link")]
                      ),
                      _vm._v(".\n          ")
                    ]),
                    _vm._v(" "),
                    _c("CAlert", { attrs: { show: "", color: "danger" } }, [
                      _vm._v("\n            Danger Alert with "),
                      _c(
                        "a",
                        { staticClass: "alert-link", attrs: { href: "#" } },
                        [_vm._v("an example link")]
                      ),
                      _vm._v(".\n          ")
                    ]),
                    _vm._v(" "),
                    _c("CAlert", { attrs: { show: "", color: "warning" } }, [
                      _vm._v("\n            Warning Alert with "),
                      _c(
                        "a",
                        { staticClass: "alert-link", attrs: { href: "#" } },
                        [_vm._v("an example link")]
                      ),
                      _vm._v(".\n          ")
                    ]),
                    _vm._v(" "),
                    _c("CAlert", { attrs: { show: "", color: "info" } }, [
                      _vm._v("\n            Info Alert with "),
                      _c(
                        "a",
                        { staticClass: "alert-link", attrs: { href: "#" } },
                        [_vm._v("an example link")]
                      ),
                      _vm._v(".\n          ")
                    ]),
                    _vm._v(" "),
                    _c("CAlert", { attrs: { show: "", color: "light" } }, [
                      _vm._v("\n            Light Alert with "),
                      _c(
                        "a",
                        { staticClass: "alert-link", attrs: { href: "#" } },
                        [_vm._v("an example link")]
                      ),
                      _vm._v(".\n          ")
                    ]),
                    _vm._v(" "),
                    _c(
                      "CAlert",
                      { attrs: { show: "", color: "dark" } },
                      [
                        _vm._v("\n            Dark Alert with\n            "),
                        _c(
                          "CLink",
                          { staticClass: "alert-link", attrs: { href: "#" } },
                          [_vm._v("an example link")]
                        ),
                        _vm._v("\n            .\n          ")
                      ],
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
                [
                  _c("CIcon", { attrs: { name: "cil-justify-center" } }),
                  _vm._v(" Alerts "),
                  _c("small", [_vm._v("with additional content")])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "CCardBody",
                [
                  _c("CAlert", { attrs: { show: "", color: "success" } }, [
                    _c("h4", { staticClass: "alert-heading" }, [
                      _vm._v("Well done!")
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "\n            Aww yeah, you successfully read this important alert message.\n            This example text is going to run a bit longer so that you can see\n            how spacing within an alert works with this kind of content.\n          "
                      )
                    ]),
                    _vm._v(" "),
                    _c("hr"),
                    _vm._v(" "),
                    _c("p", { staticClass: "mb-0" }, [
                      _vm._v(
                        "\n            Whenever you need to, be sure to use margin utilities to keep things nice and tidy.\n          "
                      )
                    ])
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
                  _vm._v(" Alerts\n        "),
                  _c("small", [_vm._v("dismissible")])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "CCardBody",
                [
                  _c(
                    "CAlert",
                    {
                      attrs: {
                        color: "secondary",
                        closeButton: "",
                        show: _vm.alert1
                      },
                      on: {
                        "update:show": function($event) {
                          _vm.alert1 = $event
                        }
                      }
                    },
                    [_vm._v("\n          Dismissible Alert!\n        ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "CAlert",
                    {
                      staticClass: "alert-dismissible",
                      attrs: { color: "secondary", show: _vm.alert2 },
                      on: {
                        "update:show": function($event) {
                          _vm.alert2 = $event
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n          Dismissible Alert with custom button!\n          "
                      ),
                      _c(
                        "CButton",
                        {
                          staticClass: "position-absolute",
                          staticStyle: {
                            right: "10px",
                            top: "50%",
                            transform: "translateY(-50%)"
                          },
                          attrs: { color: "secondary" },
                          on: {
                            click: function($event) {
                              _vm.alert2 = false
                            }
                          }
                        },
                        [_vm._v("\n            Close\n          ")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "CButton",
                    {
                      staticClass: "m-1",
                      attrs: { color: "info" },
                      on: { click: _vm.showDismissibleAlerts }
                    },
                    [_vm._v("\n          Show dismissible alerts\n        ")]
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
                  _vm._v(" Alerts\n        "),
                  _c("small", [_vm._v("auto dismissible")])
                ],
                1
              ),
              _vm._v(" "),
              _c("CCardBody", [
                _c(
                  "div",
                  [
                    _c(
                      "CAlert",
                      {
                        attrs: {
                          show: _vm.dismissCountDown,
                          closeButton: "",
                          color: "warning",
                          fade: ""
                        },
                        on: {
                          "update:show": function($event) {
                            _vm.dismissCountDown = $event
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n            Alert will dismiss after\n            "
                        ),
                        _c("strong", [_vm._v(_vm._s(_vm.dismissCountDown))]),
                        _vm._v(" seconds...\n          ")
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "CAlert",
                      {
                        attrs: {
                          show: _vm.dismissCountDown,
                          closeButton: "",
                          color: "info"
                        },
                        on: {
                          "update:show": function($event) {
                            _vm.dismissCountDown = $event
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n            Alert will dismiss after " +
                            _vm._s(_vm.dismissCountDown) +
                            " seconds...\n            "
                        ),
                        _c("CProgress", {
                          attrs: {
                            color: "info",
                            max: _vm.dismissSecs,
                            value: _vm.dismissCountDown,
                            height: "4px"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "CButton",
                      {
                        staticClass: "m-1",
                        attrs: { color: "info" },
                        on: { click: _vm.showAlert }
                      },
                      [
                        _vm._v(
                          "\n            Show alert with timer\n          "
                        )
                      ]
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
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/notifications/Alerts.vue":
/*!*********************************************************!*\
  !*** ./resources/js/src/views/notifications/Alerts.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Alerts_vue_vue_type_template_id_1d7d6ac8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Alerts.vue?vue&type=template&id=1d7d6ac8& */ "./resources/js/src/views/notifications/Alerts.vue?vue&type=template&id=1d7d6ac8&");
/* harmony import */ var _Alerts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Alerts.vue?vue&type=script&lang=js& */ "./resources/js/src/views/notifications/Alerts.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Alerts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Alerts_vue_vue_type_template_id_1d7d6ac8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Alerts_vue_vue_type_template_id_1d7d6ac8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/notifications/Alerts.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/notifications/Alerts.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/notifications/Alerts.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Alerts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Alerts.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/notifications/Alerts.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Alerts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/notifications/Alerts.vue?vue&type=template&id=1d7d6ac8&":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/views/notifications/Alerts.vue?vue&type=template&id=1d7d6ac8& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Alerts_vue_vue_type_template_id_1d7d6ac8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Alerts.vue?vue&type=template&id=1d7d6ac8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/notifications/Alerts.vue?vue&type=template&id=1d7d6ac8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Alerts_vue_vue_type_template_id_1d7d6ac8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Alerts_vue_vue_type_template_id_1d7d6ac8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);