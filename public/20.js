(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/base/Forms.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/base/Forms.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'Forms',
  data: function data() {
    return {
      selected: [],
      // Must be an array reference!
      show: true,
      horizontal: {
        label: 'col-3',
        input: 'col-9'
      },
      options: ['Option 1', 'Option 2', 'Option 3'],
      selectOptions: ['Option 1', 'Option 2', 'Option 3', {
        value: ['some value', 'another value'],
        label: 'Selected option'
      }],
      selectedOption: ['some value', 'another value'],
      formCollapsed: true,
      checkboxNames: ['Checkboxes', 'Inline Checkboxes', 'Checkboxes - custom', 'Inline Checkboxes - custom'],
      radioNames: ['Radios', 'Inline Radios', 'Radios - custom', 'Inline Radios - custom']
    };
  },
  methods: {
    validator: function validator(val) {
      return val ? val.length >= 4 : false;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/base/Forms.vue?vue&type=template&id=40b51d4a&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/base/Forms.vue?vue&type=template&id=40b51d4a& ***!
  \************************************************************************************************************************************************************************************************************/
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
            { attrs: { sm: "6" } },
            [
              _c(
                "CCard",
                [
                  _c("CCardHeader", [
                    _c("strong", [_vm._v("Credit Card ")]),
                    _vm._v(" "),
                    _c("small", [_vm._v("Form")]),
                    _vm._v(" "),
                    _c("div", { staticClass: "card-header-actions" }, [
                      _c(
                        "a",
                        {
                          staticClass: "card-header-action",
                          attrs: {
                            href:
                              "https://coreui.io/vue/docs/components/form-components",
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
                  ]),
                  _vm._v(" "),
                  _c(
                    "CCardBody",
                    [
                      _c(
                        "CRow",
                        [
                          _c(
                            "CCol",
                            { attrs: { sm: "12" } },
                            [
                              _c("CInput", {
                                attrs: {
                                  label: "Name",
                                  placeholder: "Enter your name"
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
                        "CRow",
                        [
                          _c(
                            "CCol",
                            { attrs: { sm: "12" } },
                            [
                              _c("CInput", {
                                attrs: {
                                  label: "Credit Card Number",
                                  placeholder: "0000 0000 0000 0000"
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
                        "CRow",
                        [
                          _c(
                            "CCol",
                            { attrs: { sm: "4" } },
                            [
                              _c("CSelect", {
                                attrs: {
                                  label: "Month",
                                  options: [
                                    1,
                                    2,
                                    3,
                                    4,
                                    5,
                                    6,
                                    7,
                                    8,
                                    9,
                                    10,
                                    11,
                                    12
                                  ]
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "CCol",
                            { attrs: { sm: "4" } },
                            [
                              _c("CSelect", {
                                attrs: {
                                  label: "Year",
                                  options: [
                                    2014,
                                    2015,
                                    2016,
                                    2017,
                                    2018,
                                    2019,
                                    2020,
                                    2021,
                                    2022,
                                    2023,
                                    2024,
                                    2025
                                  ]
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "CCol",
                            { attrs: { sm: "4" } },
                            [
                              _c("CInput", {
                                attrs: { label: "CVV/CVC", placeholder: "123" }
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
          ),
          _vm._v(" "),
          _c(
            "CCol",
            { attrs: { sm: "6" } },
            [
              _c(
                "CCard",
                [
                  _c("CCardHeader", [
                    _c("strong", [_vm._v("Company ")]),
                    _c("small", [_vm._v("Form")])
                  ]),
                  _vm._v(" "),
                  _c(
                    "CCardBody",
                    [
                      _c("CInput", {
                        attrs: {
                          label: "Company",
                          placeholder: "Enter your company name"
                        }
                      }),
                      _vm._v(" "),
                      _c("CInput", {
                        attrs: { label: "VAT", placeholder: "PL1234567890" }
                      }),
                      _vm._v(" "),
                      _c("CInput", {
                        attrs: {
                          label: "Street",
                          placeholder: "Enter street name"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "CRow",
                        [
                          _c(
                            "CCol",
                            { attrs: { sm: "8" } },
                            [
                              _c("CInput", {
                                attrs: {
                                  label: "City",
                                  placeholder: "Enter your city"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "CCol",
                            { attrs: { sm: "4" } },
                            [
                              _c("CInput", {
                                attrs: {
                                  label: "Postal code",
                                  placeholder: "Postal code"
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("CInput", {
                        attrs: { label: "Country", placeholder: "Country name" }
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
      ),
      _vm._v(" "),
      _c(
        "CRow",
        [
          _c(
            "CCol",
            { attrs: { md: "6" } },
            [
              _c(
                "CCard",
                [
                  _c("CCardHeader", [
                    _c("strong", [_vm._v("Basic Form")]),
                    _vm._v(" Elements\n        ")
                  ]),
                  _vm._v(" "),
                  _c(
                    "CCardBody",
                    [
                      _c(
                        "CForm",
                        [
                          _c("CInput", {
                            attrs: {
                              description: "ФИО",
                              label: "Enter your name",
                              horizontal: "",
                              autocomplete: "name"
                            }
                          }),
                          _vm._v(" "),
                          _c("CInput", {
                            attrs: {
                              label: "Static",
                              value: "Username",
                              horizontal: "",
                              plaintext: ""
                            }
                          }),
                          _vm._v(" "),
                          _c("CInput", {
                            attrs: {
                              label: "Text input",
                              description: "This is a help text",
                              placeholder: "Text",
                              horizontal: ""
                            }
                          }),
                          _vm._v(" "),
                          _c("CInput", {
                            attrs: {
                              label: "Date",
                              type: "date",
                              horizontal: ""
                            }
                          }),
                          _vm._v(" "),
                          _c("CInput", {
                            attrs: {
                              label: "Email input",
                              description: "Please enter your email",
                              placeholder: "Enter your email",
                              type: "email",
                              horizontal: "",
                              autocomplete: "email"
                            }
                          }),
                          _vm._v(" "),
                          _c("CInput", {
                            attrs: {
                              label: "Password Input",
                              description: "Please enter a complex password",
                              placeholder: "Enter your password",
                              type: "password",
                              horizontal: "",
                              autocomplete: "current-password"
                            }
                          }),
                          _vm._v(" "),
                          _c("CInput", {
                            attrs: {
                              label: "Disabled Input",
                              placeholder: "Disabled",
                              horizontal: "",
                              disabled: ""
                            }
                          }),
                          _vm._v(" "),
                          _c("CTextarea", {
                            attrs: {
                              label: "Textarea",
                              placeholder: "Content...",
                              horizontal: "",
                              rows: "9"
                            }
                          }),
                          _vm._v(" "),
                          _c("CSelect", {
                            attrs: {
                              label: "Select",
                              horizontal: "",
                              options: _vm.options,
                              placeholder: "Please select"
                            }
                          }),
                          _vm._v(" "),
                          _c("CSelect", {
                            attrs: {
                              label: "Large select",
                              size: "lg",
                              horizontal: "",
                              value: _vm.selectedOption,
                              options: _vm.selectOptions,
                              placeholder: "Please select"
                            },
                            on: {
                              "update:value": function($event) {
                                _vm.selectedOption = $event
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("CSelect", {
                            attrs: {
                              label: "Small select",
                              size: "sm",
                              horizontal: "",
                              options: _vm.options,
                              placeholder: "Please select"
                            }
                          }),
                          _vm._v(" "),
                          _c("CSelect", {
                            attrs: {
                              label: "Select",
                              horizontal: "",
                              options: _vm.options,
                              placeholder: "Please select",
                              disabled: ""
                            }
                          }),
                          _vm._v(" "),
                          _vm._l(_vm.checkboxNames, function(name, key) {
                            return [
                              _c(
                                "CRow",
                                {
                                  key: name,
                                  staticClass: "form-group",
                                  attrs: { form: "" }
                                },
                                [
                                  _c(
                                    "CCol",
                                    {
                                      staticClass: "col-form-label",
                                      attrs: { tag: "label", sm: "3" }
                                    },
                                    [
                                      _vm._v(
                                        "\n                  " +
                                          _vm._s(name) +
                                          "\n                "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "CCol",
                                    {
                                      class: key % 2 === 1 ? "form-inline" : "",
                                      attrs: { sm: "9" }
                                    },
                                    _vm._l(_vm.options, function(
                                      option,
                                      optionIndex
                                    ) {
                                      return _c("CInputCheckbox", {
                                        key: key + option,
                                        attrs: {
                                          label: option,
                                          value: option,
                                          custom: key > 1,
                                          name: "Option 1" + key,
                                          checked: optionIndex === key,
                                          inline: key % 2 === 1
                                        }
                                      })
                                    }),
                                    1
                                  )
                                ],
                                1
                              )
                            ]
                          }),
                          _vm._v(" "),
                          _vm._l(_vm.radioNames, function(name, key) {
                            return [
                              _c(
                                "CRow",
                                {
                                  key: name,
                                  staticClass: "form-group",
                                  attrs: { form: "" }
                                },
                                [
                                  _c("CCol", { attrs: { sm: "3" } }, [
                                    _vm._v(
                                      "\n                  " +
                                        _vm._s(name) +
                                        "\n                "
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("CInputRadioGroup", {
                                    staticClass: "col-sm-9",
                                    attrs: {
                                      options: _vm.options,
                                      custom: key > 1,
                                      checked: "Option " + key,
                                      inline: key % 2 === 1
                                    }
                                  })
                                ],
                                1
                              )
                            ]
                          }),
                          _vm._v(" "),
                          _c("CInputFile", {
                            attrs: { label: "File input", horizontal: "" }
                          }),
                          _vm._v(" "),
                          _c("CInputFile", {
                            attrs: {
                              label: "Multiple file input",
                              horizontal: "",
                              multiple: ""
                            }
                          }),
                          _vm._v(" "),
                          _c("CInputFile", {
                            attrs: {
                              label: "File custom input",
                              horizontal: "",
                              custom: ""
                            }
                          }),
                          _vm._v(" "),
                          _c("CInputFile", {
                            attrs: {
                              label: "Multiple file custom input",
                              horizontal: "",
                              multiple: "",
                              custom: ""
                            }
                          })
                        ],
                        2
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "CCardFooter",
                    [
                      _c(
                        "CButton",
                        {
                          attrs: {
                            type: "submit",
                            size: "sm",
                            color: "primary"
                          }
                        },
                        [
                          _c("CIcon", { attrs: { name: "cil-check-circle" } }),
                          _vm._v(" Submit")
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "CButton",
                        {
                          attrs: { type: "reset", size: "sm", color: "danger" }
                        },
                        [
                          _c("CIcon", { attrs: { name: "cil-ban" } }),
                          _vm._v(" Reset")
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
                  _c("CCardHeader", [
                    _c("strong", [_vm._v("Inline")]),
                    _vm._v(" Form\n        ")
                  ]),
                  _vm._v(" "),
                  _c(
                    "CCardBody",
                    [
                      _c(
                        "CForm",
                        { attrs: { inline: "" } },
                        [
                          _c("CInput", {
                            staticClass: "mr-2",
                            attrs: { placeholder: "Jane Doe" },
                            scopedSlots: _vm._u([
                              {
                                key: "label",
                                fn: function() {
                                  return [_c("small", [_vm._v("Name: ")])]
                                },
                                proxy: true
                              }
                            ])
                          }),
                          _vm._v(" "),
                          _c("CInput", {
                            attrs: {
                              placeholder: "jane.doe@example.com",
                              autocomplete: "email"
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "label",
                                fn: function() {
                                  return [_c("small", [_vm._v("Email: ")])]
                                },
                                proxy: true
                              }
                            ])
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "CCardFooter",
                    [
                      _c(
                        "CButton",
                        {
                          attrs: {
                            type: "submit",
                            size: "sm",
                            color: "primary"
                          }
                        },
                        [
                          _c("CIcon", { attrs: { name: "cil-check-circle" } }),
                          _vm._v(" Submit")
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "CButton",
                        {
                          attrs: { type: "reset", size: "sm", color: "danger" }
                        },
                        [
                          _c("CIcon", { attrs: { name: "cil-ban" } }),
                          _vm._v(" Reset")
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
            { attrs: { md: "6" } },
            [
              _c(
                "CCard",
                [
                  _c("CCardHeader", [
                    _c("strong", [_vm._v("Horizontal")]),
                    _vm._v(" Form\n        ")
                  ]),
                  _vm._v(" "),
                  _c(
                    "CCardBody",
                    [
                      _c(
                        "CForm",
                        [
                          _c("CInput", {
                            attrs: {
                              type: "email",
                              description: "Please enter your email.",
                              autocomplete: "email",
                              label: "Email",
                              horizontal: "",
                              placeholder: "Enter Email..."
                            }
                          }),
                          _vm._v(" "),
                          _c("CInput", {
                            attrs: {
                              type: "password",
                              description: "Please enter your password.",
                              autocomplete: "current-password",
                              label: "Password",
                              horizontal: "",
                              placeholder: "Enter Password..."
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
                    "CCardFooter",
                    [
                      _c(
                        "CButton",
                        {
                          attrs: {
                            type: "submit",
                            size: "sm",
                            color: "primary"
                          }
                        },
                        [
                          _c("CIcon", { attrs: { name: "cil-check-circle" } }),
                          _vm._v(" Submit")
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "CButton",
                        {
                          attrs: { type: "reset", size: "sm", color: "danger" }
                        },
                        [
                          _c("CIcon", { attrs: { name: "cil-ban" } }),
                          _vm._v(" Reset")
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
                  _c("CCardHeader", [
                    _c("strong", [_vm._v("Normal")]),
                    _vm._v(" Form\n        ")
                  ]),
                  _vm._v(" "),
                  _c(
                    "CForm",
                    { attrs: { novalidate: "" } },
                    [
                      _c(
                        "CCardBody",
                        [
                          _c("CInput", {
                            attrs: {
                              type: "email",
                              description: "Please enter your email.",
                              autocomplete: "email",
                              label: "Email",
                              placeholder: "Enter Email...",
                              required: "",
                              "was-validated": ""
                            }
                          }),
                          _vm._v(" "),
                          _c("CInput", {
                            attrs: {
                              type: "password",
                              description: "Please enter your password.",
                              autocomplete: "current-password",
                              label: "Password",
                              placeholder: "Enter Password...",
                              required: "",
                              "was-validated": ""
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "CCardFooter",
                        [
                          _c(
                            "CButton",
                            {
                              attrs: {
                                type: "submit",
                                size: "sm",
                                color: "primary"
                              }
                            },
                            [
                              _c("CIcon", {
                                attrs: { name: "cil-check-circle" }
                              }),
                              _vm._v(" Submit")
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "CButton",
                            {
                              attrs: {
                                type: "reset",
                                size: "sm",
                                color: "danger"
                              }
                            },
                            [
                              _c("CIcon", { attrs: { name: "cil-ban" } }),
                              _vm._v(" Reset")
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
                  _c("CCardHeader", [
                    _vm._v("\n          Input "),
                    _c("strong", [_vm._v("Grid")])
                  ]),
                  _vm._v(" "),
                  _c(
                    "CCardBody",
                    [
                      _c(
                        "CRow",
                        { staticClass: "form-group" },
                        [
                          _c(
                            "CCol",
                            { attrs: { sm: "3" } },
                            [
                              _c("CInput", {
                                staticClass: "mb-0",
                                attrs: { placeholder: ".col-sm-3" }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "CRow",
                        { staticClass: "form-group" },
                        [
                          _c(
                            "CCol",
                            { attrs: { sm: "4" } },
                            [
                              _c("CInput", {
                                staticClass: "mb-0",
                                attrs: { placeholder: ".col-sm-4" }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "CRow",
                        { staticClass: "form-group" },
                        [
                          _c(
                            "CCol",
                            { attrs: { sm: "5" } },
                            [
                              _c("CInput", {
                                staticClass: "mb-0",
                                attrs: { placeholder: ".col-sm-5" }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "CRow",
                        { staticClass: "form-group" },
                        [
                          _c(
                            "CCol",
                            { attrs: { sm: "6" } },
                            [
                              _c("CInput", {
                                staticClass: "mb-0",
                                attrs: { placeholder: ".col-sm-6" }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "CRow",
                        { staticClass: "form-group" },
                        [
                          _c(
                            "CCol",
                            { attrs: { sm: "7" } },
                            [
                              _c("CInput", {
                                staticClass: "mb-0",
                                attrs: { placeholder: ".col-sm-7" }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "CRow",
                        { staticClass: "form-group" },
                        [
                          _c(
                            "CCol",
                            { attrs: { sm: "8" } },
                            [
                              _c("CInput", {
                                staticClass: "mb-0",
                                attrs: { placeholder: ".col-sm-8" }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "CRow",
                        { staticClass: "form-group" },
                        [
                          _c(
                            "CCol",
                            { attrs: { sm: "9" } },
                            [
                              _c("CInput", {
                                staticClass: "mb-0",
                                attrs: { placeholder: ".col-sm-9" }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "CRow",
                        { staticClass: "form-group" },
                        [
                          _c(
                            "CCol",
                            { attrs: { sm: "10" } },
                            [
                              _c("CInput", {
                                staticClass: "mb-0",
                                attrs: { placeholder: ".col-sm-10" }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "CRow",
                        { staticClass: "form-group" },
                        [
                          _c(
                            "CCol",
                            { attrs: { sm: "11" } },
                            [
                              _c("CInput", {
                                staticClass: "mb-0",
                                attrs: { placeholder: ".col-sm-11" }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "CRow",
                        { staticClass: "form-group" },
                        [
                          _c(
                            "CCol",
                            { attrs: { sm: "12" } },
                            [
                              _c("CInput", {
                                staticClass: "mb-0",
                                attrs: { placeholder: ".col-sm-12" }
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
                    "CCardFooter",
                    [
                      _c(
                        "CButton",
                        {
                          attrs: {
                            type: "submit",
                            size: "sm",
                            color: "primary"
                          }
                        },
                        [
                          _c("CIcon", { attrs: { name: "cil-user" } }),
                          _vm._v(" Login")
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "CButton",
                        {
                          attrs: { type: "reset", size: "sm", color: "danger" }
                        },
                        [
                          _c("CIcon", { attrs: { name: "cil-ban" } }),
                          _vm._v(" Reset")
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
                  _c("CCardHeader", [
                    _vm._v("\n          Input "),
                    _c("strong", [_vm._v("Sizes")])
                  ]),
                  _vm._v(" "),
                  _c(
                    "CCardBody",
                    [
                      _c("CInput", {
                        attrs: {
                          label: "Small input",
                          size: "sm",
                          horizontal: "",
                          placeholder: "size='sm'"
                        }
                      }),
                      _vm._v(" "),
                      _c("CInput", {
                        attrs: {
                          label: "Default input",
                          horizontal: "",
                          placeholder: "normal"
                        }
                      }),
                      _vm._v(" "),
                      _c("CInput", {
                        attrs: {
                          label: "Large input",
                          size: "lg",
                          horizontal: "",
                          placeholder: "size='lg'"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "CCardFooter",
                    [
                      _c(
                        "CButton",
                        {
                          attrs: {
                            type: "submit",
                            size: "sm",
                            color: "primary"
                          }
                        },
                        [
                          _c("CIcon", { attrs: { name: "cil-check-circle" } }),
                          _vm._v(" Submit")
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "CButton",
                        {
                          attrs: { type: "reset", size: "sm", color: "danger" }
                        },
                        [
                          _c("CIcon", { attrs: { name: "cil-ban" } }),
                          _vm._v(" Reset")
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
        "CRow",
        [
          _c(
            "CCol",
            { attrs: { sm: "12", md: "6" } },
            [
              _c(
                "CCard",
                [
                  _c("CCardHeader", [
                    _c("strong", [_vm._v("Basic Validation")]),
                    _vm._v(" Form\n        ")
                  ]),
                  _vm._v(" "),
                  _c(
                    "CCardBody",
                    [
                      _c(
                        "CForm",
                        { attrs: { validated: "", novalidate: "" } },
                        [
                          _c("CInput", {
                            attrs: {
                              label: "Input is valid",
                              "valid-feedback": "Input is not required."
                            }
                          }),
                          _vm._v(" "),
                          _c("CInput", {
                            attrs: {
                              label: "Input is invalid",
                              required: "",
                              "valid-feedback": "Thank you :)",
                              "invalid-feedback":
                                "Please provide a required input."
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
          ),
          _vm._v(" "),
          _c(
            "CCol",
            { attrs: { sm: "12", md: "6" } },
            [
              _c(
                "CCard",
                [
                  _c("CCardHeader", [
                    _c("strong", [_vm._v("Custom Validation")]),
                    _vm._v(" Form\n        ")
                  ]),
                  _vm._v(" "),
                  _c(
                    "CCardBody",
                    [
                      _c(
                        "CForm",
                        [
                          _c("CInput", {
                            attrs: {
                              label: "Input is valid",
                              "valid-feedback": "Input is valid.",
                              "invalid-feedback":
                                "Please provide at least 4 characters.",
                              value: "Valid value",
                              "is-valid": _vm.validator
                            }
                          }),
                          _vm._v(" "),
                          _c("CInput", {
                            attrs: {
                              label: "Input is invalid",
                              "valid-feedback": "Thank you :)",
                              "invalid-feedback":
                                "Please provide at least 4 characters.",
                              "is-valid": _vm.validator
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
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "CRow",
        [
          _c(
            "CCol",
            { attrs: { sm: "4" } },
            [
              _c(
                "CCard",
                [
                  _c("CCardHeader", [
                    _c("strong", [_vm._v("Icon/Text")]),
                    _vm._v(" Groups\n        ")
                  ]),
                  _vm._v(" "),
                  _c(
                    "CCardBody",
                    [
                      _c("CInput", {
                        attrs: { placeholder: "Username" },
                        scopedSlots: _vm._u([
                          {
                            key: "prepend-content",
                            fn: function() {
                              return [
                                _c("CIcon", { attrs: { name: "cil-user" } })
                              ]
                            },
                            proxy: true
                          }
                        ])
                      }),
                      _vm._v(" "),
                      _c("CInput", {
                        attrs: {
                          type: "email",
                          placeholder: "Email",
                          autocomplete: "email"
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "append-content",
                            fn: function() {
                              return [
                                _c("CIcon", {
                                  attrs: { name: "cil-envelope-open" }
                                })
                              ]
                            },
                            proxy: true
                          }
                        ])
                      }),
                      _vm._v(" "),
                      _c("CInput", {
                        attrs: { placeholder: "ex. $1.000.000", append: ".00" },
                        scopedSlots: _vm._u([
                          {
                            key: "prepend-content",
                            fn: function() {
                              return [
                                _c("CIcon", { attrs: { name: "cil-euro" } })
                              ]
                            },
                            proxy: true
                          }
                        ])
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "CCardFooter",
                    [
                      _c(
                        "CButton",
                        {
                          attrs: {
                            type: "submit",
                            size: "sm",
                            color: "success"
                          }
                        },
                        [
                          _c("CIcon", { attrs: { name: "cil-check-circle" } }),
                          _vm._v(" Submit")
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "CButton",
                        {
                          attrs: { type: "reset", size: "sm", color: "danger" }
                        },
                        [
                          _c("CIcon", { attrs: { name: "cil-ban" } }),
                          _vm._v(" Reset")
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
            { attrs: { sm: "4" } },
            [
              _c(
                "CCard",
                [
                  _c("CCardHeader", [
                    _c("strong", [_vm._v("Buttons")]),
                    _vm._v(" Groups\n        ")
                  ]),
                  _vm._v(" "),
                  _c(
                    "CCardBody",
                    [
                      _c("CInput", {
                        attrs: { placeholder: "Username" },
                        scopedSlots: _vm._u([
                          {
                            key: "prepend",
                            fn: function() {
                              return [
                                _c(
                                  "CButton",
                                  { attrs: { color: "primary" } },
                                  [
                                    _c("CIcon", {
                                      attrs: { name: "cil-magnifying-glass" }
                                    }),
                                    _vm._v(" Search\n              ")
                                  ],
                                  1
                                )
                              ]
                            },
                            proxy: true
                          }
                        ])
                      }),
                      _vm._v(" "),
                      _c("CInput", {
                        attrs: {
                          type: "email",
                          placeholder: "Email",
                          autocomplete: "email"
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "append",
                            fn: function() {
                              return [
                                _c(
                                  "CButton",
                                  {
                                    attrs: { type: "submit", color: "primary" }
                                  },
                                  [_vm._v("Submit")]
                                )
                              ]
                            },
                            proxy: true
                          }
                        ])
                      }),
                      _vm._v(" "),
                      _c("CInput", {
                        attrs: {
                          type: "email",
                          placeholder: "Email",
                          autocomplete: "email"
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "prepend",
                            fn: function() {
                              return [
                                _c(
                                  "CButton",
                                  { attrs: { color: "primary" } },
                                  [
                                    _c("CIcon", {
                                      attrs: {
                                        name: "cib-facebook",
                                        height: "14"
                                      }
                                    })
                                  ],
                                  1
                                )
                              ]
                            },
                            proxy: true
                          },
                          {
                            key: "append",
                            fn: function() {
                              return [
                                _c(
                                  "CButton",
                                  { attrs: { color: "primary" } },
                                  [
                                    _c("CIcon", {
                                      attrs: {
                                        name: "cib-twitter",
                                        height: "14"
                                      }
                                    })
                                  ],
                                  1
                                )
                              ]
                            },
                            proxy: true
                          }
                        ])
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "CCardFooter",
                    [
                      _c(
                        "CButton",
                        {
                          attrs: {
                            type: "submit",
                            size: "sm",
                            color: "success"
                          }
                        },
                        [
                          _c("CIcon", { attrs: { name: "cil-check-circle" } }),
                          _vm._v(" Submit")
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "CButton",
                        {
                          attrs: { type: "reset", size: "sm", color: "danger" }
                        },
                        [
                          _c("CIcon", { attrs: { name: "cil-ban" } }),
                          _vm._v(" Reset")
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
            { attrs: { sm: "4" } },
            [
              _c(
                "CCard",
                [
                  _c("CCardHeader", [
                    _c("strong", [_vm._v("Dropdowns")]),
                    _vm._v(" Groups\n        ")
                  ]),
                  _vm._v(" "),
                  _c(
                    "CCardBody",
                    [
                      _c("CInput", {
                        attrs: { placeholder: "Username" },
                        scopedSlots: _vm._u([
                          {
                            key: "prepend",
                            fn: function() {
                              return [
                                _c(
                                  "CDropdown",
                                  {
                                    attrs: {
                                      togglerText: "Action",
                                      color: "primary"
                                    }
                                  },
                                  [
                                    _c("CDropdownItem", [_vm._v("Action")]),
                                    _vm._v(" "),
                                    _c("CDropdownItem", [
                                      _vm._v("Another action")
                                    ]),
                                    _vm._v(" "),
                                    _c("CDropdownItem", [
                                      _vm._v("Something else here...")
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "CDropdownItem",
                                      { attrs: { disabled: "" } },
                                      [_vm._v("Disabled action")]
                                    )
                                  ],
                                  1
                                )
                              ]
                            },
                            proxy: true
                          }
                        ])
                      }),
                      _vm._v(" "),
                      _c("CInput", {
                        attrs: {
                          type: "email",
                          placeholder: "Email",
                          autocomplete: "email"
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "append",
                            fn: function() {
                              return [
                                _c(
                                  "CDropdown",
                                  {
                                    attrs: {
                                      togglerText: "Action",
                                      color: "primary",
                                      right: ""
                                    }
                                  },
                                  [
                                    _c("CDropdownItem", [_vm._v("Action")]),
                                    _vm._v(" "),
                                    _c("CDropdownItem", [
                                      _vm._v("Another action")
                                    ]),
                                    _vm._v(" "),
                                    _c("CDropdownItem", [
                                      _vm._v("Something else here...")
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "CDropdownItem",
                                      { attrs: { disabled: "" } },
                                      [_vm._v("Disabled action")]
                                    )
                                  ],
                                  1
                                )
                              ]
                            },
                            proxy: true
                          }
                        ])
                      }),
                      _vm._v(" "),
                      _c("CInput", {
                        attrs: { placeholder: "..." },
                        scopedSlots: _vm._u([
                          {
                            key: "prepend",
                            fn: function() {
                              return [
                                _c(
                                  "CDropdown",
                                  {
                                    attrs: {
                                      togglerText: "Split",
                                      color: "primary",
                                      split: ""
                                    }
                                  },
                                  [
                                    _c(
                                      "CDropdownItem",
                                      { attrs: { href: "#" } },
                                      [_vm._v("Action")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "CDropdownItem",
                                      { attrs: { href: "#" } },
                                      [_vm._v("Another action")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "CDropdownItem",
                                      { attrs: { href: "#" } },
                                      [_vm._v("Something else here...")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "CDropdownItem",
                                      { attrs: { disabled: "" } },
                                      [_vm._v("Disabled action")]
                                    )
                                  ],
                                  1
                                )
                              ]
                            },
                            proxy: true
                          },
                          {
                            key: "append",
                            fn: function() {
                              return [
                                _c(
                                  "CDropdown",
                                  {
                                    attrs: {
                                      togglerText: "Action",
                                      color: "primary",
                                      right: ""
                                    }
                                  },
                                  [
                                    _c("CDropdownItem", [_vm._v("Action")]),
                                    _vm._v(" "),
                                    _c("CDropdownItem", [
                                      _vm._v("Another action")
                                    ]),
                                    _vm._v(" "),
                                    _c("CDropdownItem", [
                                      _vm._v("Something else here...")
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "CDropdownItem",
                                      { attrs: { disabled: "" } },
                                      [_vm._v("Disabled action")]
                                    )
                                  ],
                                  1
                                )
                              ]
                            },
                            proxy: true
                          }
                        ])
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "CCardFooter",
                    [
                      _c(
                        "CButton",
                        {
                          attrs: {
                            type: "submit",
                            size: "sm",
                            color: "success"
                          }
                        },
                        [
                          _c("CIcon", { attrs: { name: "cil-check-circle" } }),
                          _vm._v(" Submit")
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "CButton",
                        {
                          attrs: { type: "reset", size: "sm", color: "danger" }
                        },
                        [
                          _c("CIcon", { attrs: { name: "cil-ban" } }),
                          _vm._v(" Reset")
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
        "CRow",
        [
          _c(
            "CCol",
            { attrs: { md: "6" } },
            [
              _c(
                "CCard",
                [
                  _c("CCardHeader", [
                    _vm._v("\n          Use the grid for big devices! "),
                    _c("small", [
                      _c("code", [_vm._v(".col-lg-*")]),
                      _vm._v(" "),
                      _c("code", [_vm._v(".col-md-*")]),
                      _vm._v(" "),
                      _c("code", [_vm._v(".col-sm-*")])
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "CCardBody",
                    _vm._l([4, 5, 6, 7, 8], function(number, key) {
                      return _c(
                        "CRow",
                        { key: key, staticClass: "form-group" },
                        [
                          _c(
                            "CCol",
                            { attrs: { col: 12 - number } },
                            [
                              _c("CInput", {
                                staticClass: "mb-0",
                                attrs: {
                                  placeholder: ".col-md-" + (12 - number)
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "CCol",
                            { attrs: { col: number } },
                            [
                              _c("CInput", {
                                staticClass: "mb-0",
                                attrs: { placeholder: ".col-md-" + number }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      )
                    }),
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "CCardFooter",
                    [
                      _c(
                        "CButton",
                        { attrs: { size: "sm", color: "primary" } },
                        [_vm._v("Action")]
                      ),
                      _vm._v(" "),
                      _c(
                        "CButton",
                        { attrs: { size: "sm", color: "danger" } },
                        [_vm._v("Action")]
                      ),
                      _vm._v(" "),
                      _c(
                        "CButton",
                        { attrs: { size: "sm", color: "warning" } },
                        [_vm._v("Action")]
                      ),
                      _vm._v(" "),
                      _c("CButton", { attrs: { size: "sm", color: "info" } }, [
                        _vm._v("Action")
                      ]),
                      _vm._v(" "),
                      _c(
                        "CButton",
                        { attrs: { size: "sm", color: "success" } },
                        [_vm._v("Action")]
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
            { attrs: { md: "6" } },
            [
              _c(
                "CCard",
                [
                  _c("CCardHeader", [
                    _vm._v("\n          Input Grid for small devices! "),
                    _c("small", [_c("code", [_vm._v(".col-*")])])
                  ]),
                  _vm._v(" "),
                  _c(
                    "CCardBody",
                    _vm._l([4, 5, 6, 7, 8], function(number, key) {
                      return _c(
                        "CRow",
                        { key: key, staticClass: "form-group" },
                        [
                          _c(
                            "CCol",
                            { attrs: { col: number } },
                            [
                              _c("CInput", {
                                staticClass: "mb-0",
                                attrs: { placeholder: ".col-" + number }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "CCol",
                            { attrs: { col: 12 - number } },
                            [
                              _c("CInput", {
                                staticClass: "mb-0",
                                attrs: { placeholder: ".col-" + (12 - number) }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      )
                    }),
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "CCardFooter",
                    [
                      _c(
                        "CButton",
                        { attrs: { size: "sm", color: "primary" } },
                        [_vm._v("Action")]
                      ),
                      _vm._v(" "),
                      _c(
                        "CButton",
                        { attrs: { size: "sm", color: "danger" } },
                        [_vm._v("Action")]
                      ),
                      _vm._v(" "),
                      _c(
                        "CButton",
                        { attrs: { size: "sm", color: "warning" } },
                        [_vm._v("Action")]
                      ),
                      _vm._v(" "),
                      _c("CButton", { attrs: { size: "sm", color: "info" } }, [
                        _vm._v("Action")
                      ]),
                      _vm._v(" "),
                      _c(
                        "CButton",
                        { attrs: { size: "sm", color: "success" } },
                        [_vm._v("Action")]
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
        "CRow",
        [
          _c(
            "CCol",
            { attrs: { sm: "4" } },
            [
              _c(
                "CCard",
                [
                  _c("CCardHeader", [
                    _vm._v("\n          Example Form\n        ")
                  ]),
                  _vm._v(" "),
                  _c(
                    "CCardBody",
                    [
                      _c(
                        "CForm",
                        [
                          _c("CInput", {
                            attrs: { prepend: "Username" },
                            scopedSlots: _vm._u([
                              {
                                key: "append-content",
                                fn: function() {
                                  return [
                                    _c("CIcon", { attrs: { name: "cil-user" } })
                                  ]
                                },
                                proxy: true
                              }
                            ])
                          }),
                          _vm._v(" "),
                          _c("CInput", {
                            attrs: {
                              type: "email",
                              autocomplete: "email",
                              prepend: "Email"
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "append-content",
                                fn: function() {
                                  return [
                                    _c("CIcon", {
                                      attrs: { name: "cil-envelope-closed" }
                                    })
                                  ]
                                },
                                proxy: true
                              }
                            ])
                          }),
                          _vm._v(" "),
                          _c("CInput", {
                            attrs: {
                              type: "password",
                              autocomplete: "current-password",
                              prepend: "Password"
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "append-content",
                                fn: function() {
                                  return [
                                    _c("CIcon", {
                                      attrs: { name: "cil-shield-alt" }
                                    })
                                  ]
                                },
                                proxy: true
                              }
                            ])
                          }),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "form-group form-actions" },
                            [
                              _c(
                                "CButton",
                                {
                                  attrs: {
                                    type: "submit",
                                    size: "sm",
                                    color: "primary"
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                Submit\n              "
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
            "CCol",
            { attrs: { sm: "4" } },
            [
              _c(
                "CCard",
                [
                  _c("CCardHeader", [
                    _vm._v("\n          Example Form\n        ")
                  ]),
                  _vm._v(" "),
                  _c(
                    "CCardBody",
                    [
                      _c(
                        "CForm",
                        [
                          _c("CInput", {
                            attrs: { placeholder: "Username" },
                            scopedSlots: _vm._u([
                              {
                                key: "append-content",
                                fn: function() {
                                  return [
                                    _c("CIcon", { attrs: { name: "cil-user" } })
                                  ]
                                },
                                proxy: true
                              }
                            ])
                          }),
                          _vm._v(" "),
                          _c("CInput", {
                            attrs: {
                              placeholder: "Email",
                              type: "email",
                              autocomplete: "email"
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "append-content",
                                fn: function() {
                                  return [
                                    _c("CIcon", {
                                      attrs: { name: "cil-envelope-closed" }
                                    })
                                  ]
                                },
                                proxy: true
                              }
                            ])
                          }),
                          _vm._v(" "),
                          _c("CInput", {
                            attrs: {
                              placeholder: "Password",
                              type: "password",
                              autocomplete: "current-password"
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "append-content",
                                fn: function() {
                                  return [
                                    _c("CIcon", {
                                      attrs: { name: "cil-shield-alt" }
                                    })
                                  ]
                                },
                                proxy: true
                              }
                            ])
                          }),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "form-group form-actions" },
                            [
                              _c(
                                "CButton",
                                {
                                  staticClass: "btn btn-sm btn-secondary",
                                  attrs: { type: "submit" }
                                },
                                [
                                  _vm._v(
                                    "\n                Submit\n              "
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
            "CCol",
            { attrs: { sm: "4" } },
            [
              _c(
                "CCard",
                [
                  _c("CCardHeader", [
                    _vm._v("\n          Example Form\n        ")
                  ]),
                  _vm._v(" "),
                  _c(
                    "CCardBody",
                    [
                      _c(
                        "CForm",
                        [
                          _c("CInput", {
                            attrs: { placeholder: "Username" },
                            scopedSlots: _vm._u([
                              {
                                key: "prepend-content",
                                fn: function() {
                                  return [
                                    _c("CIcon", { attrs: { name: "cil-user" } })
                                  ]
                                },
                                proxy: true
                              }
                            ])
                          }),
                          _vm._v(" "),
                          _c("CInput", {
                            attrs: {
                              placeholder: "Email",
                              type: "email",
                              autocomplete: "email"
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "prepend-content",
                                fn: function() {
                                  return [
                                    _c("CIcon", {
                                      attrs: { name: "cil-envelope-closed" }
                                    })
                                  ]
                                },
                                proxy: true
                              }
                            ])
                          }),
                          _vm._v(" "),
                          _c("CInput", {
                            attrs: {
                              placeholder: "Password",
                              type: "password",
                              autocomplete: "current-password"
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "prepend-content",
                                fn: function() {
                                  return [
                                    _c("CIcon", {
                                      attrs: { name: "cil-shield-alt" }
                                    })
                                  ]
                                },
                                proxy: true
                              }
                            ])
                          }),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "form-group form-actions" },
                            [
                              _c(
                                "CButton",
                                {
                                  attrs: {
                                    type: "submit",
                                    size: "sm",
                                    color: "success"
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                Submit\n              "
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
            { attrs: { lg: "12" } },
            [
              _c(
                "transition",
                { attrs: { name: "fade" } },
                [
                  _vm.show
                    ? _c(
                        "CCard",
                        [
                          _c(
                            "CCardHeader",
                            [
                              _c("CIcon", { attrs: { name: "cil-pencil" } }),
                              _vm._v(" Form Elements\n            "),
                              _c(
                                "div",
                                { staticClass: "card-header-actions" },
                                [
                                  _c(
                                    "CLink",
                                    {
                                      staticClass:
                                        "card-header-action btn-setting",
                                      attrs: { href: "#" }
                                    },
                                    [
                                      _c("CIcon", {
                                        attrs: { name: "cil-settings" }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "CLink",
                                    {
                                      staticClass:
                                        "card-header-action btn-minimize",
                                      on: {
                                        click: function($event) {
                                          _vm.formCollapsed = !_vm.formCollapsed
                                        }
                                      }
                                    },
                                    [
                                      _c("CIcon", {
                                        attrs: {
                                          name:
                                            "cil-chevron-" +
                                            (_vm.formCollapsed
                                              ? "bottom"
                                              : "top")
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "CLink",
                                    {
                                      staticClass:
                                        "card-header-action btn-close",
                                      attrs: { href: "#" },
                                      on: {
                                        click: function($event) {
                                          _vm.show = !_vm.show
                                        }
                                      }
                                    },
                                    [
                                      _c("CIcon", {
                                        attrs: { name: "cil-x-circle" }
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
                            "CCollapse",
                            { attrs: { show: _vm.formCollapsed } },
                            [
                              _c(
                                "CCardBody",
                                [
                                  _c("CInput", {
                                    attrs: {
                                      label: "Prepended text",
                                      description: "Here's some help text",
                                      type: "email",
                                      autocomplete: "email",
                                      prepend: "@"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("CInput", {
                                    attrs: {
                                      label: "Appended text",
                                      append: ".00",
                                      description: "Here's some help text"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("CInput", {
                                    attrs: {
                                      label: "Appended and prepended text",
                                      append: ".00",
                                      description: "Here's some help text",
                                      prepend: "$"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("CInput", {
                                    attrs: {
                                      label: "Append with button",
                                      description: "Here's some help text"
                                    },
                                    scopedSlots: _vm._u(
                                      [
                                        {
                                          key: "append",
                                          fn: function() {
                                            return [
                                              _c(
                                                "CButton",
                                                { attrs: { color: "primary" } },
                                                [_vm._v("Go!")]
                                              )
                                            ]
                                          },
                                          proxy: true
                                        }
                                      ],
                                      null,
                                      false,
                                      542345765
                                    )
                                  }),
                                  _vm._v(" "),
                                  _c("CInput", {
                                    attrs: { label: "Two-buttons append" },
                                    scopedSlots: _vm._u(
                                      [
                                        {
                                          key: "append",
                                          fn: function() {
                                            return [
                                              _c(
                                                "CButton",
                                                { attrs: { color: "primary" } },
                                                [_vm._v("Search")]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "CButton",
                                                { attrs: { color: "danger" } },
                                                [_vm._v("Options")]
                                              )
                                            ]
                                          },
                                          proxy: true
                                        }
                                      ],
                                      null,
                                      false,
                                      755980186
                                    )
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "form-actions" },
                                    [
                                      _c(
                                        "CButton",
                                        {
                                          attrs: {
                                            type: "submit",
                                            color: "primary"
                                          }
                                        },
                                        [_vm._v("Save changes")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "CButton",
                                        { attrs: { color: "secondary" } },
                                        [_vm._v("Cancel")]
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
                    : _vm._e()
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

/***/ "./resources/js/src/views/base/Forms.vue":
/*!***********************************************!*\
  !*** ./resources/js/src/views/base/Forms.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Forms_vue_vue_type_template_id_40b51d4a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Forms.vue?vue&type=template&id=40b51d4a& */ "./resources/js/src/views/base/Forms.vue?vue&type=template&id=40b51d4a&");
/* harmony import */ var _Forms_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Forms.vue?vue&type=script&lang=js& */ "./resources/js/src/views/base/Forms.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Forms_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Forms_vue_vue_type_template_id_40b51d4a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Forms_vue_vue_type_template_id_40b51d4a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/base/Forms.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/base/Forms.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/src/views/base/Forms.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Forms_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Forms.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/base/Forms.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Forms_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/base/Forms.vue?vue&type=template&id=40b51d4a&":
/*!******************************************************************************!*\
  !*** ./resources/js/src/views/base/Forms.vue?vue&type=template&id=40b51d4a& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Forms_vue_vue_type_template_id_40b51d4a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Forms.vue?vue&type=template&id=40b51d4a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/base/Forms.vue?vue&type=template&id=40b51d4a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Forms_vue_vue_type_template_id_40b51d4a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Forms_vue_vue_type_template_id_40b51d4a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);