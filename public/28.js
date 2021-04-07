(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/base/Switches.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/base/Switches.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'Switches',
  data: function data() {
    return {
      colors: ['primary', 'secondary', 'warning', 'success', 'info', 'danger', 'light', 'dark'],
      fields: [{
        key: 'size'
      }, {
        key: 'example'
      }, {
        key: 'size_prop',
        label: 'Size prop'
      }],
      items: [{
        size: 'Large',
        example: {
          variant: '3d',
          color: 'primary',
          size: 'lg',
          checked: true
        },
        size_prop: 'Add following prop <code>size="lg"</code>'
      }, {
        size: 'Normal',
        example: {
          variant: '3d',
          color: 'primary',
          size: '',
          checked: true
        },
        size_prop: '-'
      }, {
        size: 'Small',
        example: {
          variant: '3d',
          color: 'primary',
          size: 'sm',
          checked: true
        },
        size_prop: 'Add following prop <code>size="sm"</code>'
      }],
      checker: true,
      radio: 'warning',
      labelIcon: {
        labelOn: "\u2713",
        labelOff: "\u2715"
      },
      labelTxt: {
        labelOn: 'yes',
        labelOff: 'no'
      }
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/base/Switches.vue?vue&type=template&id=4dcfa434&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/base/Switches.vue?vue&type=template&id=4dcfa434& ***!
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
        "CRow",
        [
          _c(
            "CCol",
            { attrs: { xs: "12", md: "6" } },
            [
              true
                ? _c(
                    "CCard",
                    [
                      _c(
                        "CCardHeader",
                        [
                          _vm._v("\n          Radio switches\n          "),
                          _c(
                            "CBadge",
                            {
                              staticClass: "mr-auto",
                              attrs: { color: _vm.radio }
                            },
                            [_vm._v(_vm._s(_vm.radio))]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "card-header-actions" }, [
                            _c(
                              "a",
                              {
                                staticClass: "card-header-action",
                                attrs: {
                                  href:
                                    "https://coreui.io/vue/docs/components/switch",
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
                        _vm._l(_vm.colors, function(color, key) {
                          return _c(
                            "CSwitch",
                            _vm._b(
                              {
                                key: "radio" + key,
                                staticClass: "mx-1",
                                attrs: {
                                  color: color,
                                  variant: "3d",
                                  type: "radio",
                                  name: "radio",
                                  checked: key === 2,
                                  value: color
                                },
                                on: {
                                  "update:checked": function(val) {
                                    return val ? (_vm.radio = color) : null
                                  }
                                }
                              },
                              "CSwitch",
                              _vm.labelIcon,
                              false
                            )
                          )
                        }),
                        1
                      )
                    ],
                    1
                  )
                : undefined
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "CRow",
        [
          _c(
            "CCol",
            { attrs: { xs: "12", md: "6" } },
            [
              _c(
                "CCard",
                [
                  _c(
                    "CCardHeader",
                    [
                      _vm._v("\n          Switch default\n          "),
                      _c("CBadge", { attrs: { color: "primary" } }, [
                        _vm._v(_vm._s(_vm.checker))
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "CCardBody",
                    [
                      _c("CSwitch", {
                        staticClass: "mx-1",
                        attrs: {
                          color: "primary",
                          name: "switch1",
                          checked: _vm.checker
                        },
                        on: {
                          "update:checked": function($event) {
                            _vm.checker = $event
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm._l(
                        [
                          "secondary",
                          "success",
                          "warning",
                          "info",
                          "danger",
                          "light",
                          "dark"
                        ],
                        function(color, key) {
                          return _c("CSwitch", {
                            key: key,
                            staticClass: "mx-1",
                            attrs: { color: color, checked: "" }
                          })
                        }
                      ),
                      _vm._v(" "),
                      _c("CSwitch", {
                        staticClass: "mx-1",
                        attrs: { color: "primary", disabled: "" }
                      })
                    ],
                    2
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
            { attrs: { xs: "12", md: "6" } },
            [
              _c(
                "CCard",
                [
                  _c("CCardHeader", [
                    _vm._v("\n          Switch pills\n        ")
                  ]),
                  _vm._v(" "),
                  _c(
                    "CCardBody",
                    [
                      _c("CSwitch", {
                        staticClass: "mx-1",
                        attrs: { color: "primary", checked: "", shape: "pill" }
                      }),
                      _vm._v(" "),
                      _c("CSwitch", {
                        staticClass: "mx-1",
                        attrs: {
                          color: "secondary",
                          checked: "",
                          shape: "pill"
                        }
                      }),
                      _vm._v(" "),
                      _c("CSwitch", {
                        staticClass: "mx-1",
                        attrs: { color: "success", checked: "", shape: "pill" }
                      }),
                      _vm._v(" "),
                      _c("CSwitch", {
                        staticClass: "mx-1",
                        attrs: { color: "warning", checked: "", shape: "pill" }
                      }),
                      _vm._v(" "),
                      _c("CSwitch", {
                        staticClass: "mx-1",
                        attrs: { color: "info", checked: "", shape: "pill" }
                      }),
                      _vm._v(" "),
                      _c("CSwitch", {
                        staticClass: "mx-1",
                        attrs: { color: "danger", checked: "", shape: "pill" }
                      }),
                      _vm._v(" "),
                      _c("CSwitch", {
                        staticClass: "mx-1",
                        attrs: { color: "light", checked: "", shape: "pill" }
                      }),
                      _vm._v(" "),
                      _c("CSwitch", {
                        staticClass: "mx-1",
                        attrs: { color: "dark", checked: "", shape: "pill" }
                      }),
                      _vm._v(" "),
                      _c("CSwitch", {
                        staticClass: "mx-1",
                        attrs: { color: "primary", disabled: "", shape: "pill" }
                      })
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
            { attrs: { xs: "12", md: "6" } },
            [
              _c(
                "CCard",
                [
                  _c("CCardHeader", [
                    _vm._v("\n          3d Switch\n        ")
                  ]),
                  _vm._v(" "),
                  _c(
                    "CCardBody",
                    [
                      _c("CSwitch", {
                        staticClass: "mx-1",
                        attrs: { color: "primary", checked: "", variant: "3d" }
                      }),
                      _vm._v(" "),
                      _c("CSwitch", {
                        staticClass: "mx-1",
                        attrs: {
                          color: "secondary",
                          checked: "",
                          variant: "3d"
                        }
                      }),
                      _vm._v(" "),
                      _c("CSwitch", {
                        staticClass: "mx-1",
                        attrs: { color: "success", checked: "", variant: "3d" }
                      }),
                      _vm._v(" "),
                      _c("CSwitch", {
                        staticClass: "mx-1",
                        attrs: { color: "warning", checked: "", variant: "3d" }
                      }),
                      _vm._v(" "),
                      _c("CSwitch", {
                        staticClass: "mx-1",
                        attrs: { color: "info", checked: "", variant: "3d" }
                      }),
                      _vm._v(" "),
                      _c("CSwitch", {
                        staticClass: "mx-1",
                        attrs: { color: "danger", checked: "", variant: "3d" }
                      }),
                      _vm._v(" "),
                      _c("CSwitch", {
                        staticClass: "mx-1",
                        attrs: { color: "light", checked: "", variant: "3d" }
                      }),
                      _vm._v(" "),
                      _c("CSwitch", {
                        staticClass: "mx-1",
                        attrs: { color: "dark", checked: "", variant: "3d" }
                      }),
                      _vm._v(" "),
                      _c("CSwitch", {
                        staticClass: "mx-1",
                        attrs: { color: "primary", disabled: "", variant: "3d" }
                      })
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
            { attrs: { xs: "12", md: "6" } },
            [
              _c(
                "CCard",
                [
                  _c("CCardHeader", [
                    _vm._v("\n          3d Switch "),
                    _c("small", [_c("code", [_vm._v("disabled")])])
                  ]),
                  _vm._v(" "),
                  _c(
                    "CCardBody",
                    [
                      _c("CSwitch", {
                        staticClass: "mx-1",
                        attrs: {
                          color: "primary",
                          checked: "",
                          variant: "3d",
                          disabled: ""
                        }
                      }),
                      _vm._v(" "),
                      _c("CSwitch", {
                        staticClass: "mx-1",
                        attrs: {
                          color: "secondary",
                          checked: "",
                          variant: "3d",
                          disabled: ""
                        }
                      }),
                      _vm._v(" "),
                      _c("CSwitch", {
                        staticClass: "mx-1",
                        attrs: {
                          color: "success",
                          checked: "",
                          variant: "3d",
                          disabled: ""
                        }
                      }),
                      _vm._v(" "),
                      _c("CSwitch", {
                        staticClass: "mx-1",
                        attrs: {
                          color: "warning",
                          checked: "",
                          variant: "3d",
                          disabled: ""
                        }
                      }),
                      _vm._v(" "),
                      _c("CSwitch", {
                        staticClass: "mx-1",
                        attrs: {
                          color: "info",
                          checked: "",
                          variant: "3d",
                          disabled: ""
                        }
                      }),
                      _vm._v(" "),
                      _c("CSwitch", {
                        staticClass: "mx-1",
                        attrs: {
                          color: "danger",
                          checked: "",
                          variant: "3d",
                          disabled: ""
                        }
                      }),
                      _vm._v(" "),
                      _c("CSwitch", {
                        staticClass: "mx-1",
                        attrs: {
                          color: "light",
                          checked: "",
                          variant: "3d",
                          disabled: ""
                        }
                      }),
                      _vm._v(" "),
                      _c("CSwitch", {
                        staticClass: "mx-1",
                        attrs: {
                          color: "dark",
                          checked: "",
                          variant: "3d",
                          disabled: ""
                        }
                      }),
                      _vm._v(" "),
                      _c("CSwitch", {
                        staticClass: "mx-1",
                        attrs: { color: "primary", disabled: "", variant: "3d" }
                      })
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
            { attrs: { xs: "12", md: "6" } },
            [
              _c(
                "CCard",
                [
                  _c("CCardHeader", [
                    _vm._v("\n          3d Switch "),
                    _c("small", [_c("code", [_vm._v("label")])])
                  ]),
                  _vm._v(" "),
                  _c(
                    "CCardBody",
                    [
                      _c(
                        "CSwitch",
                        _vm._b(
                          {
                            staticClass: "mx-1",
                            attrs: {
                              color: "primary",
                              variant: "3d",
                              shape: "square",
                              checked: ""
                            }
                          },
                          "CSwitch",
                          _vm.labelIcon,
                          false
                        )
                      ),
                      _vm._v(" "),
                      _c(
                        "CSwitch",
                        _vm._b(
                          {
                            staticClass: "mx-1",
                            attrs: {
                              color: "secondary",
                              checked: "",
                              variant: "3d"
                            }
                          },
                          "CSwitch",
                          _vm.labelIcon,
                          false
                        )
                      ),
                      _vm._v(" "),
                      _c(
                        "CSwitch",
                        _vm._b(
                          {
                            staticClass: "mx-1",
                            attrs: {
                              color: "success",
                              checked: "",
                              variant: "3d"
                            }
                          },
                          "CSwitch",
                          _vm.labelIcon,
                          false
                        )
                      ),
                      _vm._v(" "),
                      _c(
                        "CSwitch",
                        _vm._b(
                          {
                            staticClass: "mx-1",
                            attrs: {
                              color: "warning",
                              checked: "",
                              variant: "3d"
                            }
                          },
                          "CSwitch",
                          _vm.labelIcon,
                          false
                        )
                      ),
                      _vm._v(" "),
                      _c(
                        "CSwitch",
                        _vm._b(
                          {
                            staticClass: "mx-1",
                            attrs: { color: "info", checked: "", variant: "3d" }
                          },
                          "CSwitch",
                          _vm.labelIcon,
                          false
                        )
                      ),
                      _vm._v(" "),
                      _c(
                        "CSwitch",
                        _vm._b(
                          {
                            staticClass: "mx-1",
                            attrs: {
                              color: "danger",
                              checked: "",
                              variant: "3d"
                            }
                          },
                          "CSwitch",
                          _vm.labelIcon,
                          false
                        )
                      ),
                      _vm._v(" "),
                      _c(
                        "CSwitch",
                        _vm._b(
                          {
                            staticClass: "mx-1",
                            attrs: {
                              color: "light",
                              checked: "",
                              variant: "3d"
                            }
                          },
                          "CSwitch",
                          _vm.labelIcon,
                          false
                        )
                      ),
                      _vm._v(" "),
                      _c(
                        "CSwitch",
                        _vm._b(
                          {
                            staticClass: "mx-1",
                            attrs: { color: "dark", checked: "", variant: "3d" }
                          },
                          "CSwitch",
                          _vm.labelIcon,
                          false
                        )
                      ),
                      _vm._v(" "),
                      _c(
                        "CSwitch",
                        _vm._b(
                          {
                            staticClass: "mx-1",
                            attrs: {
                              color: "primary",
                              disabled: "",
                              variant: "3d"
                            }
                          },
                          "CSwitch",
                          _vm.labelIcon,
                          false
                        )
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
            { attrs: { xs: "12", md: "6" } },
            [
              _c(
                "CCard",
                [
                  _c("CCardHeader", [
                    _vm._v("\n          Switch "),
                    _c("small", [_c("code", [_vm._v('variant="outline"')])])
                  ]),
                  _vm._v(" "),
                  _c(
                    "CCardBody",
                    [
                      _c("CSwitch", {
                        staticClass: "mx-1",
                        attrs: {
                          color: "primary",
                          checked: "",
                          variant: "outline"
                        }
                      }),
                      _vm._v(" "),
                      _c("CSwitch", {
                        staticClass: "mx-1",
                        attrs: {
                          color: "secondary",
                          checked: "",
                          variant: "outline"
                        }
                      }),
                      _vm._v(" "),
                      _c("CSwitch", {
                        staticClass: "mx-1",
                        attrs: {
                          color: "success",
                          checked: "",
                          variant: "outline"
                        }
                      }),
                      _vm._v(" "),
                      _c("CSwitch", {
                        staticClass: "mx-1",
                        attrs: {
                          color: "warning",
                          checked: "",
                          variant: "outline"
                        }
                      }),
                      _vm._v(" "),
                      _c("CSwitch", {
                        staticClass: "mx-1",
                        attrs: {
                          color: "info",
                          checked: "",
                          variant: "outline"
                        }
                      }),
                      _vm._v(" "),
                      _c("CSwitch", {
                        staticClass: "mx-1",
                        attrs: {
                          color: "danger",
                          checked: "",
                          variant: "outline"
                        }
                      }),
                      _vm._v(" "),
                      _c("CSwitch", {
                        staticClass: "mx-1",
                        attrs: {
                          color: "light",
                          checked: "",
                          variant: "outline"
                        }
                      }),
                      _vm._v(" "),
                      _c("CSwitch", {
                        staticClass: "mx-1",
                        attrs: {
                          color: "dark",
                          checked: "",
                          variant: "outline"
                        }
                      }),
                      _vm._v(" "),
                      _c("CSwitch", {
                        staticClass: "mx-1",
                        attrs: {
                          color: "primary",
                          variant: "outline",
                          disabled: ""
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
          ),
          _vm._v(" "),
          _c(
            "CCol",
            { attrs: { xs: "12", md: "6" } },
            [
              _c(
                "CCard",
                [
                  _c("CCardHeader", [
                    _vm._v("\n          Switch "),
                    _c("small", [
                      _c("code", [_vm._v('variant="outline"  shape="pill"')])
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "CCardBody",
                    [
                      _c("CSwitch", {
                        staticClass: "mx-1",
                        attrs: {
                          color: "primary",
                          checked: "",
                          variant: "outline",
                          shape: "pill"
                        }
                      }),
                      _vm._v(" "),
                      _c("CSwitch", {
                        staticClass: "mx-1",
                        attrs: {
                          color: "secondary",
                          checked: "",
                          variant: "outline",
                          shape: "pill"
                        }
                      }),
                      _vm._v(" "),
                      _c("CSwitch", {
                        staticClass: "mx-1",
                        attrs: {
                          color: "success",
                          checked: "",
                          variant: "outline",
                          shape: "pill"
                        }
                      }),
                      _vm._v(" "),
                      _c("CSwitch", {
                        staticClass: "mx-1",
                        attrs: {
                          color: "warning",
                          checked: "",
                          variant: "outline",
                          shape: "pill"
                        }
                      }),
                      _vm._v(" "),
                      _c("CSwitch", {
                        staticClass: "mx-1",
                        attrs: {
                          color: "info",
                          checked: "",
                          variant: "outline",
                          shape: "pill"
                        }
                      }),
                      _vm._v(" "),
                      _c("CSwitch", {
                        staticClass: "mx-1",
                        attrs: {
                          color: "danger",
                          checked: "",
                          variant: "outline",
                          shape: "pill"
                        }
                      }),
                      _vm._v(" "),
                      _c("CSwitch", {
                        staticClass: "mx-1",
                        attrs: {
                          color: "light",
                          checked: "",
                          variant: "outline",
                          shape: "pill"
                        }
                      }),
                      _vm._v(" "),
                      _c("CSwitch", {
                        staticClass: "mx-1",
                        attrs: {
                          color: "dark",
                          checked: "",
                          variant: "outline",
                          shape: "pill"
                        }
                      }),
                      _vm._v(" "),
                      _c("CSwitch", {
                        staticClass: "mx-1",
                        attrs: {
                          color: "primary",
                          variant: "outline",
                          shape: "pill",
                          disabled: ""
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
          ),
          _vm._v(" "),
          _c(
            "CCol",
            { attrs: { xs: "12", md: "6" } },
            [
              _c(
                "CCard",
                [
                  _c("CCardHeader", [
                    _vm._v("\n          Switch "),
                    _c("small", [_c("code", [_vm._v('variant="opposite"')])])
                  ]),
                  _vm._v(" "),
                  _c(
                    "CCardBody",
                    [
                      _c("CSwitch", {
                        staticClass: "mx-1",
                        attrs: {
                          color: "primary",
                          checked: "",
                          variant: "opposite"
                        }
                      }),
                      _vm._v(" "),
                      _c("CSwitch", {
                        staticClass: "mx-1",
                        attrs: {
                          color: "secondary",
                          checked: "",
                          variant: "opposite"
                        }
                      }),
                      _vm._v(" "),
                      _c("CSwitch", {
                        staticClass: "mx-1",
                        attrs: {
                          color: "success",
                          checked: "",
                          variant: "opposite"
                        }
                      }),
                      _vm._v(" "),
                      _c("CSwitch", {
                        staticClass: "mx-1",
                        attrs: {
                          color: "warning",
                          checked: "",
                          variant: "opposite"
                        }
                      }),
                      _vm._v(" "),
                      _c("CSwitch", {
                        staticClass: "mx-1",
                        attrs: {
                          color: "info",
                          checked: "",
                          variant: "opposite"
                        }
                      }),
                      _vm._v(" "),
                      _c("CSwitch", {
                        staticClass: "mx-1",
                        attrs: {
                          color: "danger",
                          checked: "",
                          variant: "opposite"
                        }
                      }),
                      _vm._v(" "),
                      _c("CSwitch", {
                        staticClass: "mx-1",
                        attrs: {
                          color: "light",
                          checked: "",
                          variant: "opposite"
                        }
                      }),
                      _vm._v(" "),
                      _c("CSwitch", {
                        staticClass: "mx-1",
                        attrs: {
                          color: "dark",
                          checked: "",
                          variant: "opposite"
                        }
                      }),
                      _vm._v(" "),
                      _c("CSwitch", {
                        staticClass: "mx-1",
                        attrs: {
                          color: "primary",
                          variant: "opposite",
                          disabled: ""
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
          ),
          _vm._v(" "),
          _c(
            "CCol",
            { attrs: { xs: "12", md: "6" } },
            [
              _c(
                "CCard",
                [
                  _c("CCardHeader", [
                    _vm._v("\n          Switch "),
                    _c("small", [
                      _c("code", [_vm._v('variant="opposite"  shape="pill"')])
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "CCardBody",
                    [
                      _c("CSwitch", {
                        staticClass: "mx-1",
                        attrs: {
                          color: "primary",
                          checked: "",
                          variant: "opposite",
                          shape: "pill"
                        }
                      }),
                      _vm._v(" "),
                      _c("CSwitch", {
                        staticClass: "mx-1",
                        attrs: {
                          color: "secondary",
                          checked: "",
                          variant: "opposite",
                          shape: "pill"
                        }
                      }),
                      _vm._v(" "),
                      _c("CSwitch", {
                        staticClass: "mx-1",
                        attrs: {
                          color: "success",
                          checked: "",
                          variant: "opposite",
                          shape: "pill"
                        }
                      }),
                      _vm._v(" "),
                      _c("CSwitch", {
                        staticClass: "mx-1",
                        attrs: {
                          color: "warning",
                          checked: "",
                          variant: "opposite",
                          shape: "pill"
                        }
                      }),
                      _vm._v(" "),
                      _c("CSwitch", {
                        staticClass: "mx-1",
                        attrs: {
                          color: "info",
                          checked: "",
                          variant: "opposite",
                          shape: "pill"
                        }
                      }),
                      _vm._v(" "),
                      _c("CSwitch", {
                        staticClass: "mx-1",
                        attrs: {
                          color: "danger",
                          checked: "",
                          variant: "opposite",
                          shape: "pill"
                        }
                      }),
                      _vm._v(" "),
                      _c("CSwitch", {
                        staticClass: "mx-1",
                        attrs: {
                          color: "light",
                          checked: "",
                          variant: "opposite",
                          shape: "pill"
                        }
                      }),
                      _vm._v(" "),
                      _c("CSwitch", {
                        staticClass: "mx-1",
                        attrs: {
                          color: "dark",
                          checked: "",
                          variant: "opposite",
                          shape: "pill"
                        }
                      }),
                      _vm._v(" "),
                      _c("CSwitch", {
                        staticClass: "mx-1",
                        attrs: {
                          color: "primary",
                          variant: "opposite",
                          shape: "pill",
                          disabled: ""
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
          ),
          _vm._v(" "),
          _c(
            "CCol",
            { attrs: { xs: "12", md: "6" } },
            [
              _c(
                "CCard",
                [
                  _c("CCardHeader", [
                    _vm._v("\n          Switch "),
                    _c("small", [_c("code", [_vm._v("label")])])
                  ]),
                  _vm._v(" "),
                  _c(
                    "CCardBody",
                    [
                      _c(
                        "CSwitch",
                        _vm._b(
                          {
                            staticClass: "mx-1",
                            attrs: { color: "primary", checked: "" }
                          },
                          "CSwitch",
                          _vm.labelIcon,
                          false
                        )
                      ),
                      _vm._v(" "),
                      _c(
                        "CSwitch",
                        _vm._b(
                          {
                            staticClass: "mx-1",
                            attrs: { color: "secondary", checked: "" }
                          },
                          "CSwitch",
                          _vm.labelIcon,
                          false
                        )
                      ),
                      _vm._v(" "),
                      _c(
                        "CSwitch",
                        _vm._b(
                          {
                            staticClass: "mx-1",
                            attrs: { color: "success", checked: "" }
                          },
                          "CSwitch",
                          _vm.labelIcon,
                          false
                        )
                      ),
                      _vm._v(" "),
                      _c(
                        "CSwitch",
                        _vm._b(
                          {
                            staticClass: "mx-1",
                            attrs: { color: "warning", checked: "" }
                          },
                          "CSwitch",
                          _vm.labelIcon,
                          false
                        )
                      ),
                      _vm._v(" "),
                      _c(
                        "CSwitch",
                        _vm._b(
                          {
                            staticClass: "mx-1",
                            attrs: { color: "info", checked: "" }
                          },
                          "CSwitch",
                          _vm.labelIcon,
                          false
                        )
                      ),
                      _vm._v(" "),
                      _c(
                        "CSwitch",
                        _vm._b(
                          {
                            staticClass: "mx-1",
                            attrs: { color: "danger", checked: "" }
                          },
                          "CSwitch",
                          _vm.labelIcon,
                          false
                        )
                      ),
                      _vm._v(" "),
                      _c(
                        "CSwitch",
                        _vm._b(
                          {
                            staticClass: "mx-1",
                            attrs: { color: "light", checked: "" }
                          },
                          "CSwitch",
                          _vm.labelIcon,
                          false
                        )
                      ),
                      _vm._v(" "),
                      _c(
                        "CSwitch",
                        _vm._b(
                          {
                            staticClass: "mx-1",
                            attrs: { color: "dark", checked: "" }
                          },
                          "CSwitch",
                          _vm.labelIcon,
                          false
                        )
                      ),
                      _vm._v(" "),
                      _c(
                        "CSwitch",
                        _vm._b(
                          {
                            staticClass: "mx-1",
                            attrs: { color: "primary", disabled: "" }
                          },
                          "CSwitch",
                          _vm.labelIcon,
                          false
                        )
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v("shape\n    ")
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "CCol",
            { attrs: { xs: "12", md: "6" } },
            [
              _c(
                "CCard",
                [
                  _c("CCardHeader", [
                    _vm._v("\n          Switch "),
                    _c("small", [_c("code", [_vm._v('label shape="pill"')])])
                  ]),
                  _vm._v(" "),
                  _c(
                    "CCardBody",
                    [
                      _c(
                        "CSwitch",
                        _vm._b(
                          {
                            staticClass: "mx-1",
                            attrs: {
                              color: "primary",
                              checked: "",
                              shape: "pill"
                            }
                          },
                          "CSwitch",
                          _vm.labelIcon,
                          false
                        )
                      ),
                      _vm._v(" "),
                      _c(
                        "CSwitch",
                        _vm._b(
                          {
                            staticClass: "mx-1",
                            attrs: {
                              color: "secondary",
                              checked: "",
                              shape: "pill"
                            }
                          },
                          "CSwitch",
                          _vm.labelIcon,
                          false
                        )
                      ),
                      _vm._v(" "),
                      _c(
                        "CSwitch",
                        _vm._b(
                          {
                            staticClass: "mx-1",
                            attrs: {
                              color: "success",
                              checked: "",
                              shape: "pill"
                            }
                          },
                          "CSwitch",
                          _vm.labelIcon,
                          false
                        )
                      ),
                      _vm._v(" "),
                      _c(
                        "CSwitch",
                        _vm._b(
                          {
                            staticClass: "mx-1",
                            attrs: {
                              color: "warning",
                              checked: "",
                              shape: "pill"
                            }
                          },
                          "CSwitch",
                          _vm.labelIcon,
                          false
                        )
                      ),
                      _vm._v(" "),
                      _c(
                        "CSwitch",
                        _vm._b(
                          {
                            staticClass: "mx-1",
                            attrs: { color: "info", checked: "", shape: "pill" }
                          },
                          "CSwitch",
                          _vm.labelIcon,
                          false
                        )
                      ),
                      _vm._v(" "),
                      _c(
                        "CSwitch",
                        _vm._b(
                          {
                            staticClass: "mx-1",
                            attrs: {
                              color: "danger",
                              checked: "",
                              shape: "pill"
                            }
                          },
                          "CSwitch",
                          _vm.labelIcon,
                          false
                        )
                      ),
                      _vm._v(" "),
                      _c(
                        "CSwitch",
                        _vm._b(
                          {
                            staticClass: "mx-1",
                            attrs: {
                              color: "light",
                              checked: "",
                              shape: "pill"
                            }
                          },
                          "CSwitch",
                          _vm.labelIcon,
                          false
                        )
                      ),
                      _vm._v(" "),
                      _c(
                        "CSwitch",
                        _vm._b(
                          {
                            staticClass: "mx-1",
                            attrs: { color: "dark", checked: "", shape: "pill" }
                          },
                          "CSwitch",
                          _vm.labelIcon,
                          false
                        )
                      ),
                      _vm._v(" "),
                      _c(
                        "CSwitch",
                        _vm._b(
                          {
                            staticClass: "mx-1",
                            attrs: {
                              color: "primary",
                              shape: "pill",
                              disabled: ""
                            }
                          },
                          "CSwitch",
                          _vm.labelIcon,
                          false
                        )
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
            { attrs: { xs: "12", md: "6" } },
            [
              _c(
                "CCard",
                [
                  _c("CCardHeader", [
                    _vm._v("\n          Switch "),
                    _c("small", [
                      _c("code", [_vm._v('label variant="outline"')])
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "CCardBody",
                    [
                      _c(
                        "CSwitch",
                        _vm._b(
                          {
                            staticClass: "mx-1",
                            attrs: {
                              color: "primary",
                              checked: "",
                              variant: "outline"
                            }
                          },
                          "CSwitch",
                          _vm.labelIcon,
                          false
                        )
                      ),
                      _vm._v(" "),
                      _c(
                        "CSwitch",
                        _vm._b(
                          {
                            staticClass: "mx-1",
                            attrs: {
                              color: "secondary",
                              checked: "",
                              variant: "outline"
                            }
                          },
                          "CSwitch",
                          _vm.labelIcon,
                          false
                        )
                      ),
                      _vm._v(" "),
                      _c(
                        "CSwitch",
                        _vm._b(
                          {
                            staticClass: "mx-1",
                            attrs: {
                              color: "success",
                              checked: "",
                              variant: "outline"
                            }
                          },
                          "CSwitch",
                          _vm.labelIcon,
                          false
                        )
                      ),
                      _vm._v(" "),
                      _c(
                        "CSwitch",
                        _vm._b(
                          {
                            staticClass: "mx-1",
                            attrs: {
                              color: "warning",
                              checked: "",
                              variant: "outline"
                            }
                          },
                          "CSwitch",
                          _vm.labelIcon,
                          false
                        )
                      ),
                      _vm._v(" "),
                      _c(
                        "CSwitch",
                        _vm._b(
                          {
                            staticClass: "mx-1",
                            attrs: {
                              color: "info",
                              checked: "",
                              variant: "outline"
                            }
                          },
                          "CSwitch",
                          _vm.labelIcon,
                          false
                        )
                      ),
                      _vm._v(" "),
                      _c(
                        "CSwitch",
                        _vm._b(
                          {
                            staticClass: "mx-1",
                            attrs: {
                              color: "danger",
                              checked: "",
                              variant: "outline"
                            }
                          },
                          "CSwitch",
                          _vm.labelIcon,
                          false
                        )
                      ),
                      _vm._v(" "),
                      _c(
                        "CSwitch",
                        _vm._b(
                          {
                            staticClass: "mx-1",
                            attrs: {
                              color: "light",
                              checked: "",
                              variant: "outline"
                            }
                          },
                          "CSwitch",
                          _vm.labelIcon,
                          false
                        )
                      ),
                      _vm._v(" "),
                      _c(
                        "CSwitch",
                        _vm._b(
                          {
                            staticClass: "mx-1",
                            attrs: {
                              color: "dark",
                              checked: "",
                              variant: "outline"
                            }
                          },
                          "CSwitch",
                          _vm.labelIcon,
                          false
                        )
                      ),
                      _vm._v(" "),
                      _c(
                        "CSwitch",
                        _vm._b(
                          {
                            staticClass: "mx-1",
                            attrs: {
                              color: "primary",
                              variant: "outline",
                              disabled: ""
                            }
                          },
                          "CSwitch",
                          _vm.labelIcon,
                          false
                        )
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
            { attrs: { xs: "12", md: "6" } },
            [
              _c(
                "CCard",
                [
                  _c("CCardHeader", [
                    _vm._v("\n          Switch "),
                    _c("small", [
                      _c("code", [_vm._v('label variant="outline"')])
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "CCardBody",
                    [
                      _c(
                        "CSwitch",
                        _vm._b(
                          {
                            staticClass: "mx-1",
                            attrs: {
                              color: "primary",
                              checked: "",
                              variant: "outline",
                              shape: "pill"
                            }
                          },
                          "CSwitch",
                          _vm.labelIcon,
                          false
                        )
                      ),
                      _vm._v(" "),
                      _c(
                        "CSwitch",
                        _vm._b(
                          {
                            staticClass: "mx-1",
                            attrs: {
                              color: "secondary",
                              checked: "",
                              variant: "outline",
                              shape: "pill"
                            }
                          },
                          "CSwitch",
                          _vm.labelIcon,
                          false
                        )
                      ),
                      _vm._v(" "),
                      _c(
                        "CSwitch",
                        _vm._b(
                          {
                            staticClass: "mx-1",
                            attrs: {
                              color: "success",
                              checked: "",
                              variant: "outline",
                              shape: "pill"
                            }
                          },
                          "CSwitch",
                          _vm.labelIcon,
                          false
                        )
                      ),
                      _vm._v(" "),
                      _c(
                        "CSwitch",
                        _vm._b(
                          {
                            staticClass: "mx-1",
                            attrs: {
                              color: "warning",
                              checked: "",
                              variant: "outline",
                              shape: "pill"
                            }
                          },
                          "CSwitch",
                          _vm.labelIcon,
                          false
                        )
                      ),
                      _vm._v(" "),
                      _c(
                        "CSwitch",
                        _vm._b(
                          {
                            staticClass: "mx-1",
                            attrs: {
                              color: "info",
                              checked: "",
                              variant: "outline",
                              shape: "pill"
                            }
                          },
                          "CSwitch",
                          _vm.labelIcon,
                          false
                        )
                      ),
                      _vm._v(" "),
                      _c(
                        "CSwitch",
                        _vm._b(
                          {
                            staticClass: "mx-1",
                            attrs: {
                              color: "danger",
                              checked: "",
                              variant: "outline",
                              shape: "pill"
                            }
                          },
                          "CSwitch",
                          _vm.labelIcon,
                          false
                        )
                      ),
                      _vm._v(" "),
                      _c(
                        "CSwitch",
                        _vm._b(
                          {
                            staticClass: "mx-1",
                            attrs: {
                              color: "light",
                              checked: "",
                              variant: "outline",
                              shape: "pill"
                            }
                          },
                          "CSwitch",
                          _vm.labelIcon,
                          false
                        )
                      ),
                      _vm._v(" "),
                      _c(
                        "CSwitch",
                        _vm._b(
                          {
                            staticClass: "mx-1",
                            attrs: {
                              color: "dark",
                              checked: "",
                              variant: "outline",
                              shape: "pill"
                            }
                          },
                          "CSwitch",
                          _vm.labelIcon,
                          false
                        )
                      ),
                      _vm._v(" "),
                      _c(
                        "CSwitch",
                        _vm._b(
                          {
                            staticClass: "mx-1",
                            attrs: {
                              color: "primary",
                              variant: "outline",
                              shape: "pill",
                              disabled: ""
                            }
                          },
                          "CSwitch",
                          _vm.labelIcon,
                          false
                        )
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
            { attrs: { xs: "12", md: "6" } },
            [
              _c(
                "CCard",
                [
                  _c("CCardHeader", [
                    _vm._v("\n          Switch "),
                    _c("small", [
                      _c("code", [_vm._v('label variant="opposite"')])
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "CCardBody",
                    [
                      _c(
                        "CSwitch",
                        _vm._b(
                          {
                            staticClass: "mx-1",
                            attrs: {
                              color: "primary",
                              checked: "",
                              variant: "opposite"
                            }
                          },
                          "CSwitch",
                          _vm.labelIcon,
                          false
                        )
                      ),
                      _vm._v(" "),
                      _c(
                        "CSwitch",
                        _vm._b(
                          {
                            staticClass: "mx-1",
                            attrs: {
                              color: "secondary",
                              checked: "",
                              variant: "opposite"
                            }
                          },
                          "CSwitch",
                          _vm.labelIcon,
                          false
                        )
                      ),
                      _vm._v(" "),
                      _c(
                        "CSwitch",
                        _vm._b(
                          {
                            staticClass: "mx-1",
                            attrs: {
                              color: "success",
                              checked: "",
                              variant: "opposite"
                            }
                          },
                          "CSwitch",
                          _vm.labelIcon,
                          false
                        )
                      ),
                      _vm._v(" "),
                      _c(
                        "CSwitch",
                        _vm._b(
                          {
                            staticClass: "mx-1",
                            attrs: {
                              color: "warning",
                              checked: "",
                              variant: "opposite"
                            }
                          },
                          "CSwitch",
                          _vm.labelIcon,
                          false
                        )
                      ),
                      _vm._v(" "),
                      _c(
                        "CSwitch",
                        _vm._b(
                          {
                            staticClass: "mx-1",
                            attrs: {
                              color: "info",
                              checked: "",
                              variant: "opposite"
                            }
                          },
                          "CSwitch",
                          _vm.labelIcon,
                          false
                        )
                      ),
                      _vm._v(" "),
                      _c(
                        "CSwitch",
                        _vm._b(
                          {
                            staticClass: "mx-1",
                            attrs: {
                              color: "danger",
                              checked: "",
                              variant: "opposite"
                            }
                          },
                          "CSwitch",
                          _vm.labelIcon,
                          false
                        )
                      ),
                      _vm._v(" "),
                      _c(
                        "CSwitch",
                        _vm._b(
                          {
                            staticClass: "mx-1",
                            attrs: {
                              color: "light",
                              checked: "",
                              variant: "opposite"
                            }
                          },
                          "CSwitch",
                          _vm.labelIcon,
                          false
                        )
                      ),
                      _vm._v(" "),
                      _c(
                        "CSwitch",
                        _vm._b(
                          {
                            staticClass: "mx-1",
                            attrs: {
                              color: "dark",
                              checked: "",
                              variant: "opposite"
                            }
                          },
                          "CSwitch",
                          _vm.labelIcon,
                          false
                        )
                      ),
                      _vm._v(" "),
                      _c(
                        "CSwitch",
                        _vm._b(
                          {
                            staticClass: "mx-1",
                            attrs: {
                              color: "primary",
                              variant: "opposite",
                              disabled: ""
                            }
                          },
                          "CSwitch",
                          _vm.labelIcon,
                          false
                        )
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
            { attrs: { xs: "12", md: "6" } },
            [
              _c(
                "CCard",
                [
                  _c("CCardHeader", [
                    _vm._v("\n          Switch "),
                    _c("small", [
                      _c("code", [_vm._v('label variant="opposite"')])
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "CCardBody",
                    [
                      _c(
                        "CSwitch",
                        _vm._b(
                          {
                            staticClass: "mx-1",
                            attrs: {
                              color: "primary",
                              checked: "",
                              variant: "opposite",
                              shape: "pill"
                            }
                          },
                          "CSwitch",
                          _vm.labelTxt,
                          false
                        )
                      ),
                      _vm._v(" "),
                      _c(
                        "CSwitch",
                        _vm._b(
                          {
                            staticClass: "mx-1",
                            attrs: {
                              color: "secondary",
                              checked: "",
                              variant: "opposite",
                              shape: "pill"
                            }
                          },
                          "CSwitch",
                          _vm.labelIcon,
                          false
                        )
                      ),
                      _vm._v(" "),
                      _c(
                        "CSwitch",
                        _vm._b(
                          {
                            staticClass: "mx-1",
                            attrs: {
                              color: "success",
                              checked: "",
                              variant: "opposite",
                              shape: "pill"
                            }
                          },
                          "CSwitch",
                          _vm.labelIcon,
                          false
                        )
                      ),
                      _vm._v(" "),
                      _c(
                        "CSwitch",
                        _vm._b(
                          {
                            staticClass: "mx-1",
                            attrs: {
                              color: "warning",
                              checked: "",
                              variant: "opposite",
                              shape: "pill"
                            }
                          },
                          "CSwitch",
                          _vm.labelIcon,
                          false
                        )
                      ),
                      _vm._v(" "),
                      _c(
                        "CSwitch",
                        _vm._b(
                          {
                            staticClass: "mx-1",
                            attrs: {
                              color: "info",
                              checked: "",
                              variant: "opposite",
                              shape: "pill"
                            }
                          },
                          "CSwitch",
                          _vm.labelIcon,
                          false
                        )
                      ),
                      _vm._v(" "),
                      _c(
                        "CSwitch",
                        _vm._b(
                          {
                            staticClass: "mx-1",
                            attrs: {
                              color: "danger",
                              checked: "",
                              variant: "opposite",
                              shape: "pill"
                            }
                          },
                          "CSwitch",
                          _vm.labelIcon,
                          false
                        )
                      ),
                      _vm._v(" "),
                      _c(
                        "CSwitch",
                        _vm._b(
                          {
                            staticClass: "mx-1",
                            attrs: {
                              color: "light",
                              checked: "",
                              variant: "opposite",
                              shape: "pill"
                            }
                          },
                          "CSwitch",
                          _vm.labelIcon,
                          false
                        )
                      ),
                      _vm._v(" "),
                      _c(
                        "CSwitch",
                        _vm._b(
                          {
                            staticClass: "mx-1",
                            attrs: {
                              color: "dark",
                              checked: "",
                              variant: "opposite",
                              shape: "pill"
                            }
                          },
                          "CSwitch",
                          _vm.labelIcon,
                          false
                        )
                      ),
                      _vm._v(" "),
                      _c(
                        "CSwitch",
                        _vm._b(
                          {
                            staticClass: "mx-1",
                            attrs: {
                              color: "primary",
                              variant: "opposite",
                              shape: "pill",
                              disabled: ""
                            }
                          },
                          "CSwitch",
                          _vm.labelIcon,
                          false
                        )
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
            { attrs: { md: "12" } },
            [
              _c(
                "CCard",
                [
                  _c("CCardHeader", [_vm._v("\n          Sizes\n        ")]),
                  _vm._v(" "),
                  _c(
                    "CCardBody",
                    { staticClass: "p-0" },
                    [
                      _c("CDataTable", {
                        staticClass: "table-align-middle mb-0",
                        attrs: {
                          hover: "",
                          striped: "",
                          items: _vm.items,
                          fields: _vm.fields,
                          "no-sorting": ""
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "example",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _c(
                                  "td",
                                  [
                                    _c("CSwitch", {
                                      attrs: {
                                        variant: item.example.variant,
                                        color: item.example.color,
                                        size: item.example.size,
                                        checked: item.example.checked
                                      }
                                    })
                                  ],
                                  1
                                )
                              ]
                            }
                          },
                          {
                            key: "size_prop",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _c("td", [
                                  _c("span", {
                                    domProps: {
                                      innerHTML: _vm._s(item.size_prop)
                                    }
                                  })
                                ])
                              ]
                            }
                          }
                        ])
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

/***/ "./resources/js/src/views/base/Switches.vue":
/*!**************************************************!*\
  !*** ./resources/js/src/views/base/Switches.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Switches_vue_vue_type_template_id_4dcfa434___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Switches.vue?vue&type=template&id=4dcfa434& */ "./resources/js/src/views/base/Switches.vue?vue&type=template&id=4dcfa434&");
/* harmony import */ var _Switches_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Switches.vue?vue&type=script&lang=js& */ "./resources/js/src/views/base/Switches.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Switches_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Switches_vue_vue_type_template_id_4dcfa434___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Switches_vue_vue_type_template_id_4dcfa434___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/base/Switches.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/base/Switches.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/src/views/base/Switches.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Switches_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Switches.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/base/Switches.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Switches_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/base/Switches.vue?vue&type=template&id=4dcfa434&":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/base/Switches.vue?vue&type=template&id=4dcfa434& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Switches_vue_vue_type_template_id_4dcfa434___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Switches.vue?vue&type=template&id=4dcfa434& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/base/Switches.vue?vue&type=template&id=4dcfa434&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Switches_vue_vue_type_template_id_4dcfa434___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Switches_vue_vue_type_template_id_4dcfa434___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);