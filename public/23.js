(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/base/Navbars.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/base/Navbars.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Navbars',
  data: function data() {
    return {
      show: false,
      navbarText: false,
      navbarDropdown: false
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/base/Navbars.vue?vue&type=template&id=6d23dc8f&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/base/Navbars.vue?vue&type=template&id=6d23dc8f& ***!
  \**************************************************************************************************************************************************************************************************************/
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
              _c("strong", [_vm._v(" Bootstrap Navbar ")]),
              _vm._v(" "),
              _c("div", { staticClass: "card-header-actions" }, [
                _c(
                  "a",
                  {
                    staticClass: "card-header-action",
                    attrs: {
                      href: "https://coreui.io/vue/docs/components/navbar",
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
                "CNavbar",
                { attrs: { expandable: "md", color: "info" } },
                [
                  _c("CToggler", {
                    attrs: { inNavbar: "" },
                    on: {
                      click: function($event) {
                        _vm.show = !_vm.show
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("CNavbarBrand", { attrs: { href: "#" } }, [
                    _vm._v("NavBar")
                  ]),
                  _vm._v(" "),
                  _c(
                    "CCollapse",
                    { attrs: { show: _vm.show, navbar: "" } },
                    [
                      _c(
                        "CNavbarNav",
                        [
                          _c("CNavItem", { attrs: { href: "#" } }, [
                            _vm._v("Link")
                          ]),
                          _vm._v(" "),
                          _c(
                            "CNavItem",
                            { attrs: { href: "#", disabled: "" } },
                            [_vm._v("Disabled")]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "CNavbarNav",
                        { staticClass: "ml-auto" },
                        [
                          _c(
                            "CForm",
                            {
                              staticClass: "align-middle",
                              attrs: { inline: "" }
                            },
                            [
                              _c("CInput", {
                                staticClass: "mr-2 my-0",
                                attrs: { placeholder: "Search", size: "sm" }
                              }),
                              _vm._v(" "),
                              _c(
                                "CButton",
                                { attrs: { color: "light", size: "sm" } },
                                [
                                  _vm._v(
                                    "\n                Search\n              "
                                  )
                                ]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "CDropdown",
                            { attrs: { "toggler-text": "Lang", "in-nav": "" } },
                            [
                              _c("CDropdownItem", [_vm._v("EN")]),
                              _vm._v(" "),
                              _c("CDropdownItem", [_vm._v("ES")]),
                              _vm._v(" "),
                              _c("CDropdownItem", [_vm._v("RU")]),
                              _vm._v(" "),
                              _c("CDropdownItem", [_vm._v("FA")])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "CDropdown",
                            { attrs: { "in-nav": "", "toggler-text": "User" } },
                            [
                              _c("CDropdownItem", [_vm._v("Profile")]),
                              _vm._v(" "),
                              _c("CDropdownItem", [_vm._v("Signout")])
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
        "CCard",
        [
          _c(
            "CCardHeader",
            [
              _c("CIcon", { attrs: { name: "cil-justify-center" } }),
              _vm._v(" "),
              _c("strong", [_vm._v(" Navbar ")]),
              _vm._v(" "),
              _c("small", [_vm._v("brand")])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "CCardBody",
            [
              _c(
                "CNavbar",
                { attrs: { color: "faded", light: "" } },
                [
                  _c("CNavbarBrand", { attrs: { href: "#" } }, [
                    _c("img", {
                      staticClass: "d-inline-block align-top",
                      attrs: {
                        src: "https://placekitten.com/g/30/30",
                        alt: "CoreuiVue"
                      }
                    }),
                    _vm._v("\n          CoreuiVue\n        ")
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
              _c("strong", [_vm._v(" Navbar ")]),
              _vm._v(" "),
              _c("small", [_vm._v("text")])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "CCardBody",
            [
              _c(
                "CNavbar",
                { attrs: { toggleable: "sm", light: "", color: "light" } },
                [
                  _c("CToggler", {
                    attrs: { inNavbar: "" },
                    on: {
                      click: function($event) {
                        _vm.navbarText = !_vm.navbarText
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("CNavbarBrand", [_vm._v("CoreuiVue")]),
                  _vm._v(" "),
                  _c(
                    "CCollapse",
                    { attrs: { show: _vm.navbarText, navbar: "" } },
                    [
                      _c(
                        "CNavbarNav",
                        [_c("CNavbarText", [_vm._v("Navbar text")])],
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
        "CCard",
        [
          _c(
            "CCardHeader",
            [
              _c("CIcon", { attrs: { name: "cil-justify-center" } }),
              _vm._v(" "),
              _c("strong", [_vm._v(" Navbar ")]),
              _vm._v(" "),
              _c("small", [_vm._v("dropdown")])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "CCardBody",
            [
              _c(
                "CNavbar",
                { attrs: { expandable: "sm", color: "primary" } },
                [
                  _c("CToggler", {
                    attrs: { inNavbar: "" },
                    on: {
                      click: function($event) {
                        _vm.navbarDropdown = !_vm.navbarDropdown
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "CCollapse",
                    { attrs: { show: _vm.navbarDropdown, navbar: "" } },
                    [
                      _c(
                        "CNavbarNav",
                        [
                          _c("CNavItem", { attrs: { href: "#" } }, [
                            _vm._v("Home")
                          ]),
                          _vm._v(" "),
                          _c("CNavItem", { attrs: { href: "#" } }, [
                            _vm._v("Link")
                          ]),
                          _vm._v(" "),
                          _c(
                            "CDropdown",
                            { attrs: { "toggler-text": "Lang", "in-nav": "" } },
                            [
                              _c("CDropdownItem", [_vm._v("EN")]),
                              _vm._v(" "),
                              _c("CDropdownItem", [_vm._v("ES")]),
                              _vm._v(" "),
                              _c("CDropdownItem", [_vm._v("RU")]),
                              _vm._v(" "),
                              _c("CDropdownItem", [_vm._v("FA")])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "CDropdown",
                            { attrs: { "toggler-text": "User", "in-nav": "" } },
                            [
                              _c("CDropdownItem", [_vm._v("Account")]),
                              _vm._v(" "),
                              _c("CDropdownItem", [_vm._v("Settings")])
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
        "CCard",
        [
          _c(
            "CCardHeader",
            [
              _c("CIcon", { attrs: { name: "cil-justify-center" } }),
              _vm._v(" "),
              _c("strong", [_vm._v(" Navbar ")]),
              _vm._v(" "),
              _c("small", [_vm._v("form")])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "CCardBody",
            [
              _c(
                "CNavbar",
                { attrs: { light: "", color: "light" } },
                [
                  _c(
                    "CForm",
                    { attrs: { inline: "" } },
                    [
                      _c("CInput", {
                        staticClass: "mr-sm-2",
                        attrs: { placeholder: "Search", size: "sm" }
                      }),
                      _vm._v(" "),
                      _c(
                        "CButton",
                        {
                          staticClass: "my-2 my-sm-0",
                          attrs: { color: "outline-success", type: "submit" }
                        },
                        [_vm._v("Search")]
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
        "CCard",
        [
          _c(
            "CCardHeader",
            [
              _c("CIcon", { attrs: { name: "cil-justify-center" } }),
              _vm._v(" "),
              _c("strong", [_vm._v(" Navbar ")]),
              _vm._v(" "),
              _c("small", [_vm._v("input group")])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "CCardBody",
            [
              _c(
                "CNavbar",
                { attrs: { light: "", color: "light" } },
                [
                  _c(
                    "CForm",
                    { attrs: { inline: "" } },
                    [
                      _c("CInput", {
                        staticClass: "mr-sm-2",
                        attrs: { placeholder: "Username" }
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/base/Navbars.vue":
/*!*************************************************!*\
  !*** ./resources/js/src/views/base/Navbars.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Navbars_vue_vue_type_template_id_6d23dc8f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navbars.vue?vue&type=template&id=6d23dc8f& */ "./resources/js/src/views/base/Navbars.vue?vue&type=template&id=6d23dc8f&");
/* harmony import */ var _Navbars_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbars.vue?vue&type=script&lang=js& */ "./resources/js/src/views/base/Navbars.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Navbars_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Navbars_vue_vue_type_template_id_6d23dc8f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Navbars_vue_vue_type_template_id_6d23dc8f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/base/Navbars.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/base/Navbars.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/src/views/base/Navbars.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbars_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Navbars.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/base/Navbars.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbars_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/base/Navbars.vue?vue&type=template&id=6d23dc8f&":
/*!********************************************************************************!*\
  !*** ./resources/js/src/views/base/Navbars.vue?vue&type=template&id=6d23dc8f& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbars_vue_vue_type_template_id_6d23dc8f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Navbars.vue?vue&type=template&id=6d23dc8f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/base/Navbars.vue?vue&type=template&id=6d23dc8f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbars_vue_vue_type_template_id_6d23dc8f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbars_vue_vue_type_template_id_6d23dc8f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);