(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/base/Navs.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/base/Navs.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Navs'
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/base/Navs.vue?vue&type=template&id=78ed3c98&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/base/Navs.vue?vue&type=template&id=78ed3c98& ***!
  \***********************************************************************************************************************************************************************************************************/
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
              _c("strong", [_vm._v(" Bootstrap Navs")]),
              _vm._v(" "),
              _c("div", { staticClass: "card-header-actions" }, [
                _c(
                  "a",
                  {
                    staticClass: "card-header-action",
                    attrs: {
                      href: "https://coreui.io/vue/docs/components/nav",
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
                "CNav",
                [
                  _c("CNavItem", { attrs: { active: "" } }, [_vm._v("Active")]),
                  _vm._v(" "),
                  _c("CNavItem", { attrs: { title: "Link" } }),
                  _vm._v(" "),
                  _c("CNavItem", [_vm._v("Another Link")]),
                  _vm._v(" "),
                  _c("CNavItem", { attrs: { disabled: "" } }, [
                    _vm._v("Disabled")
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
              _c("strong", [_vm._v(" Bootstrap Navs ")]),
              _vm._v(" "),
              _c("small", [_vm._v("icons")])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "CCardBody",
            [
              _c(
                "CNav",
                { attrs: { variant: "pills" } },
                [
                  _c(
                    "CNavItem",
                    { attrs: { active: "" } },
                    [_c("CIcon", { attrs: { name: "cil-basket" } })],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "CNavItem",
                    [_c("CIcon", { attrs: { name: "cil-settings" } })],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "CNavItem",
                    [_c("CIcon", { attrs: { name: "cil-bell" } })],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "CNavItem",
                    { attrs: { disabled: "" } },
                    [_c("CIcon", { attrs: { name: "cil-envelope-closed" } })],
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
        "CCard",
        [
          _c(
            "CCardHeader",
            [
              _c("CIcon", { attrs: { name: "cil-justify-center" } }),
              _vm._v(" "),
              _c("strong", [_vm._v(" Bootstrap Navs ")]),
              _vm._v(" "),
              _c("small", [_vm._v("tab style")])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "CCardBody",
            [
              _c(
                "CNav",
                { attrs: { variant: "tabs" } },
                [
                  _c("CNavItem", { attrs: { active: "" } }, [
                    _vm._v("\n          Active\n        ")
                  ]),
                  _vm._v(" "),
                  _c("CNavItem", [_vm._v("\n          Link\n        ")]),
                  _vm._v(" "),
                  _c("CNavItem", [
                    _vm._v("\n          Another Link\n        ")
                  ]),
                  _vm._v(" "),
                  _c("CNavItem", { attrs: { disabled: "" } }, [
                    _vm._v("Disabled")
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
            {
              on: {
                click: function($event) {
                  _vm.item++
                }
              }
            },
            [
              _c("CIcon", { attrs: { name: "cil-justify-center" } }),
              _vm._v(" "),
              _c("strong", [_vm._v(" Bootstrap Navs ")]),
              _vm._v(" "),
              _c("small", [_vm._v("pill style")])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "CCardBody",
            [
              _c(
                "CNav",
                { attrs: { variant: "pills" } },
                [
                  _c("CNavItem", { attrs: { active: "" } }, [_vm._v("Active")]),
                  _vm._v(" "),
                  _c("CNavItem", [_vm._v("Link")]),
                  _vm._v(" "),
                  _c("CNavItem", [_vm._v("Another Link")]),
                  _vm._v(" "),
                  _c("CNavItem", { attrs: { disabled: "" } }, [
                    _vm._v("Disabled")
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
              _c("strong", [_vm._v(" Bootstrap Navs ")]),
              _vm._v(" "),
              _c("small", [_vm._v("fill tabs")])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "CCardBody",
            [
              _c(
                "CNav",
                { attrs: { fill: "", variant: "tabs" } },
                [
                  _c("CNavItem", { attrs: { active: "" } }, [_vm._v("Active")]),
                  _vm._v(" "),
                  _c("CNavItem", [_vm._v("Link")]),
                  _vm._v(" "),
                  _c("CNavItem", [_vm._v("Link with a long name ")]),
                  _vm._v(" "),
                  _c("CNavItem", { attrs: { disabled: "" } }, [
                    _vm._v("Disabled")
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
              _c("strong", [_vm._v(" Bootstrap Navs ")]),
              _vm._v(" "),
              _c("small", [_vm._v("justified tabs")])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "CCardBody",
            [
              _c(
                "CNav",
                { attrs: { justified: "", variant: "tabs" } },
                [
                  _c("CNavItem", { attrs: { active: "" } }, [_vm._v("Active")]),
                  _vm._v(" "),
                  _c("CNavItem", [_vm._v("Link")]),
                  _vm._v(" "),
                  _c("CNavItem", [_vm._v("Link with a long name ")]),
                  _vm._v(" "),
                  _c("CNavItem", { attrs: { disabled: "" } }, [
                    _vm._v("Disabled")
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
              _c("strong", [_vm._v(" Bootstrap Navs ")]),
              _vm._v(" "),
              _c("small", [_vm._v("dropdown support")])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "CCardBody",
            [
              _c(
                "CNav",
                { attrs: { variant: "pills" } },
                [
                  _c("CNavItem", [_vm._v("Active")]),
                  _vm._v(" "),
                  _c("CNavItem", [_vm._v("Link")]),
                  _vm._v(" "),
                  _c(
                    "CDropdown",
                    {
                      attrs: {
                        "in-nav": "",
                        placement: "bottom-end",
                        "button-content": "Dropdown"
                      }
                    },
                    [
                      _c("CDropdownItem", [_vm._v("one")]),
                      _vm._v(" "),
                      _c("CDropdownItem", [_vm._v("two")]),
                      _vm._v(" "),
                      _c("CDropdownDivider"),
                      _vm._v(" "),
                      _c("CDropdownItem", [_vm._v("three")])
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
        "CCard",
        [
          _c(
            "CCardHeader",
            [
              _c("CIcon", { attrs: { name: "cil-justify-center" } }),
              _vm._v(" "),
              _c("strong", [_vm._v(" Bootstrap Navs ")]),
              _vm._v(" "),
              _c("small", [_vm._v("vertical variation")])
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
                  _c(
                    "CCol",
                    { staticClass: "m-0", attrs: { col: "3" } },
                    [
                      _c(
                        "CNav",
                        { attrs: { vertical: "", pills: "" } },
                        [
                          _c("CNavItem", { attrs: { active: "" } }, [
                            _vm._v("Active")
                          ]),
                          _vm._v(" "),
                          _c("CNavItem", [_vm._v("Link")]),
                          _vm._v(" "),
                          _c("CNavItem", [_vm._v("Another Link")]),
                          _vm._v(" "),
                          _c("CNavItem", { attrs: { disabled: "" } }, [
                            _vm._v("Disabled")
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
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/base/Navs.vue":
/*!**********************************************!*\
  !*** ./resources/js/src/views/base/Navs.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Navs_vue_vue_type_template_id_78ed3c98___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navs.vue?vue&type=template&id=78ed3c98& */ "./resources/js/src/views/base/Navs.vue?vue&type=template&id=78ed3c98&");
/* harmony import */ var _Navs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navs.vue?vue&type=script&lang=js& */ "./resources/js/src/views/base/Navs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Navs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Navs_vue_vue_type_template_id_78ed3c98___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Navs_vue_vue_type_template_id_78ed3c98___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/base/Navs.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/base/Navs.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/src/views/base/Navs.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Navs.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/base/Navs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/base/Navs.vue?vue&type=template&id=78ed3c98&":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/views/base/Navs.vue?vue&type=template&id=78ed3c98& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navs_vue_vue_type_template_id_78ed3c98___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Navs.vue?vue&type=template&id=78ed3c98& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/base/Navs.vue?vue&type=template&id=78ed3c98&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navs_vue_vue_type_template_id_78ed3c98___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navs_vue_vue_type_template_id_78ed3c98___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);