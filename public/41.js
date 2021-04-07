(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[41],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/notifications/Modals.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/notifications/Modals.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Modals',
  data: function data() {
    return {
      myModal: false,
      largeModal: false,
      smallModal: false,
      primaryModal: false,
      successModal: false,
      warningModal: false,
      dangerModal: false,
      infoModal: false,
      darkModal: false
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/notifications/Modals.vue?vue&type=template&id=54ea2417&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/notifications/Modals.vue?vue&type=template&id=54ea2417& ***!
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
    "div",
    { staticClass: "wrapper" },
    [
      _c(
        "div",
        [
          _c(
            "CRow",
            [
              _c(
                "CCol",
                { attrs: { col: "12" } },
                [
                  _c(
                    "CCard",
                    [
                      _c(
                        "CCardHeader",
                        [
                          _c("CIcon", {
                            attrs: { name: "cil-justify-center" }
                          }),
                          _vm._v(" Bootstrap Modals\n            "),
                          _c("div", { staticClass: "card-header-actions" }, [
                            _c(
                              "a",
                              {
                                staticClass: "card-header-action",
                                attrs: {
                                  href:
                                    "https://coreui.io/vue/docs/components/modal",
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
                              staticClass: "mr-1",
                              attrs: { color: "secondary" },
                              on: {
                                click: function($event) {
                                  _vm.myModal = true
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n              Launch demo modal\n            "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "CButton",
                            {
                              staticClass: "mr-1",
                              attrs: { color: "secondary" },
                              on: {
                                click: function($event) {
                                  _vm.largeModal = true
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n              Launch large modal\n            "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "CButton",
                            {
                              staticClass: "mr-1",
                              attrs: { color: "secondary" },
                              on: {
                                click: function($event) {
                                  _vm.smallModal = true
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n              Launch small modal\n            "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("hr"),
                          _vm._v(" "),
                          _c(
                            "CButton",
                            {
                              staticClass: "mr-1",
                              attrs: { color: "primary" },
                              on: {
                                click: function($event) {
                                  _vm.primaryModal = true
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n              Launch primary modal\n            "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "CButton",
                            {
                              staticClass: "mr-1",
                              attrs: { color: "success" },
                              on: {
                                click: function($event) {
                                  _vm.successModal = true
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n              Launch success modal\n            "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "CButton",
                            {
                              staticClass: "mr-1",
                              attrs: { color: "warning" },
                              on: {
                                click: function($event) {
                                  _vm.warningModal = true
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n              Launch warning modal\n            "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "CButton",
                            {
                              staticClass: "mr-1",
                              attrs: { color: "danger" },
                              on: {
                                click: function($event) {
                                  _vm.dangerModal = true
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n              Launch danger modal\n            "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "CButton",
                            {
                              staticClass: "mr-1",
                              attrs: { color: "info" },
                              on: {
                                click: function($event) {
                                  _vm.infoModal = true
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n              Launch info modal\n            "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "CButton",
                            {
                              staticClass: "mr-1",
                              attrs: { color: "dark" },
                              on: {
                                click: function($event) {
                                  _vm.darkModal = true
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n              Launch dark modal\n            "
                              )
                            ]
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
        "CModal",
        {
          attrs: { title: "Modal title", show: _vm.myModal },
          on: {
            "update:show": function($event) {
              _vm.myModal = $event
            }
          }
        },
        [
          _vm._v(
            "\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n  "
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "CModal",
        {
          attrs: { title: "Modal title", size: "lg", show: _vm.largeModal },
          on: {
            "update:show": function($event) {
              _vm.largeModal = $event
            }
          }
        },
        [
          _vm._v(
            "\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n  "
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "CModal",
        {
          attrs: { title: "Modal title", size: "sm", show: _vm.smallModal },
          on: {
            "update:show": function($event) {
              _vm.smallModal = $event
            }
          }
        },
        [
          _vm._v(
            "\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n  "
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "CModal",
        {
          attrs: {
            title: "Modal title",
            show: _vm.primaryModal,
            color: "primary"
          },
          on: {
            "update:show": function($event) {
              _vm.primaryModal = $event
            }
          }
        },
        [
          _vm._v(
            "\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n  "
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "CModal",
        {
          attrs: {
            title: "Modal title",
            color: "success",
            show: _vm.successModal
          },
          on: {
            "update:show": function($event) {
              _vm.successModal = $event
            }
          }
        },
        [
          _vm._v(
            "\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n  "
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "CModal",
        {
          attrs: {
            title: "Modal title",
            color: "warning",
            show: _vm.warningModal
          },
          on: {
            "update:show": function($event) {
              _vm.warningModal = $event
            }
          }
        },
        [
          _vm._v(
            "\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n  "
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "CModal",
        {
          attrs: {
            title: "Modal title",
            color: "danger",
            show: _vm.dangerModal
          },
          on: {
            "update:show": function($event) {
              _vm.dangerModal = $event
            }
          }
        },
        [
          _vm._v(
            "\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n  "
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "CModal",
        {
          attrs: { title: "Modal title", color: "info", show: _vm.infoModal },
          on: {
            "update:show": function($event) {
              _vm.infoModal = $event
            }
          }
        },
        [
          _vm._v(
            "\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n  "
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "CModal",
        {
          attrs: {
            show: _vm.darkModal,
            "no-close-on-backdrop": true,
            centered: true,
            title: "Modal title 2",
            size: "lg",
            color: "dark"
          },
          on: {
            "update:show": function($event) {
              _vm.darkModal = $event
            }
          },
          scopedSlots: _vm._u([
            {
              key: "header",
              fn: function() {
                return [
                  _c("h6", { staticClass: "modal-title" }, [
                    _vm._v("Custom smaller modal title")
                  ]),
                  _vm._v(" "),
                  _c("CButtonClose", {
                    staticClass: "text-white",
                    on: {
                      click: function($event) {
                        _vm.darkModal = false
                      }
                    }
                  })
                ]
              },
              proxy: true
            },
            {
              key: "footer",
              fn: function() {
                return [
                  _c(
                    "CButton",
                    {
                      attrs: { color: "danger" },
                      on: {
                        click: function($event) {
                          _vm.darkModal = false
                        }
                      }
                    },
                    [_vm._v("Discard")]
                  ),
                  _vm._v(" "),
                  _c(
                    "CButton",
                    {
                      attrs: { color: "success" },
                      on: {
                        click: function($event) {
                          _vm.darkModal = false
                        }
                      }
                    },
                    [_vm._v("Accept")]
                  )
                ]
              },
              proxy: true
            }
          ])
        },
        [
          _vm._v(
            "\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n    "
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/notifications/Modals.vue":
/*!*********************************************************!*\
  !*** ./resources/js/src/views/notifications/Modals.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Modals_vue_vue_type_template_id_54ea2417___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modals.vue?vue&type=template&id=54ea2417& */ "./resources/js/src/views/notifications/Modals.vue?vue&type=template&id=54ea2417&");
/* harmony import */ var _Modals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modals.vue?vue&type=script&lang=js& */ "./resources/js/src/views/notifications/Modals.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Modals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Modals_vue_vue_type_template_id_54ea2417___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Modals_vue_vue_type_template_id_54ea2417___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/notifications/Modals.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/notifications/Modals.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/notifications/Modals.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Modals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Modals.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/notifications/Modals.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Modals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/notifications/Modals.vue?vue&type=template&id=54ea2417&":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/views/notifications/Modals.vue?vue&type=template&id=54ea2417& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Modals_vue_vue_type_template_id_54ea2417___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Modals.vue?vue&type=template&id=54ea2417& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/notifications/Modals.vue?vue&type=template&id=54ea2417&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Modals_vue_vue_type_template_id_54ea2417___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Modals_vue_vue_type_template_id_54ea2417___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);