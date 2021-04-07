(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/@coreui/utils/src/deep-objects-merge.js":
/*!**************************************************************!*\
  !*** ./node_modules/@coreui/utils/src/deep-objects-merge.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const deepObjectsMerge = (target, source) => {
  // Iterate through `source` properties and if an `Object` set property to merge of `target` and `source` properties
  for (const key of Object.keys(source)) {
    if (source[key] instanceof Object) {
      Object.assign(source[key], deepObjectsMerge(target[key], source[key]))
    }
  }

  // Join `target` and modified `source`
  Object.assign(target || {}, source)
  return target
}

/* harmony default export */ __webpack_exports__["default"] = (deepObjectsMerge);


/***/ }),

/***/ "./node_modules/@coreui/utils/src/get-color.js":
/*!*****************************************************!*\
  !*** ./node_modules/@coreui/utils/src/get-color.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _get_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-style */ "./node_modules/@coreui/utils/src/get-style.js");


const getColor = (rawProperty, element = document.body) => {
  const property = `--${rawProperty}`
  const style = Object(_get_style__WEBPACK_IMPORTED_MODULE_0__["default"])(property, element)
  return style ? style : rawProperty
}

/* harmony default export */ __webpack_exports__["default"] = (getColor);


/***/ }),

/***/ "./node_modules/@coreui/utils/src/get-css-custom-properties.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@coreui/utils/src/get-css-custom-properties.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * --------------------------------------------------------------------------
 * Licensed under MIT (https://coreui.io/license)
 * @returns {string} css custom property name
 * --------------------------------------------------------------------------
 */
const getCssCustomProperties = () => {
  const cssCustomProperties = {}
  const sheets = document.styleSheets
  let cssText = ''
  for (let i = sheets.length - 1; i > -1; i--) {
    const rules = sheets[i].cssRules
    for (let j = rules.length - 1; j > -1; j--) {
      if (rules[j].selectorText === '.ie-custom-properties') {
        // eslint-disable-next-line prefer-destructuring
        cssText = rules[j].cssText
        break
      }
    }

    if (cssText) {
      break
    }
  }

  // eslint-disable-next-line unicorn/prefer-string-slice
  cssText = cssText.substring(
    cssText.lastIndexOf('{') + 1,
    cssText.lastIndexOf('}')
  )

  cssText.split(';').forEach(property => {
    if (property) {
      const name = property.split(': ')[0]
      const value = property.split(': ')[1]
      if (name && value) {
        cssCustomProperties[`--${name.trim()}`] = value.trim()
      }
    }
  })
  return cssCustomProperties
}

/* harmony default export */ __webpack_exports__["default"] = (getCssCustomProperties);


/***/ }),

/***/ "./node_modules/@coreui/utils/src/get-style.js":
/*!*****************************************************!*\
  !*** ./node_modules/@coreui/utils/src/get-style.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _get_css_custom_properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-css-custom-properties */ "./node_modules/@coreui/utils/src/get-css-custom-properties.js");


const minIEVersion = 10
const isIE1x = () => Boolean(document.documentMode) && document.documentMode >= minIEVersion
const isCustomProperty = property => property.match(/^--.*/i)

const getStyle = (property, element = document.body) => {
  let style

  if (isCustomProperty(property) && isIE1x()) {
    const cssCustomProperties = Object(_get_css_custom_properties__WEBPACK_IMPORTED_MODULE_0__["default"])()
    style = cssCustomProperties[property]
  } else {
    style = window.getComputedStyle(element, null).getPropertyValue(property).replace(/^\s/, '')
  }

  return style
}

/* harmony default export */ __webpack_exports__["default"] = (getStyle);


/***/ }),

/***/ "./node_modules/@coreui/utils/src/hex-to-rgb.js":
/*!******************************************************!*\
  !*** ./node_modules/@coreui/utils/src/hex-to-rgb.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable no-magic-numbers */
const hexToRgb = color => {
  if (typeof color === 'undefined') {
    throw new TypeError('Hex color is not defined')
  }

  const hex = color.match(/^#(?:[0-9a-f]{3}){1,2}$/i)

  if (!hex) {
    throw new Error(`${color} is not a valid hex color`)
  }

  let r
  let g
  let b

  if (color.length === 7) {
    r = parseInt(color.slice(1, 3), 16)
    g = parseInt(color.slice(3, 5), 16)
    b = parseInt(color.slice(5, 7), 16)
  } else {
    r = parseInt(color.slice(1, 2), 16)
    g = parseInt(color.slice(2, 3), 16)
    b = parseInt(color.slice(3, 5), 16)
  }

  return `rgba(${r}, ${g}, ${b})`
}

/* harmony default export */ __webpack_exports__["default"] = (hexToRgb);


/***/ }),

/***/ "./node_modules/@coreui/utils/src/hex-to-rgba.js":
/*!*******************************************************!*\
  !*** ./node_modules/@coreui/utils/src/hex-to-rgba.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable no-magic-numbers */
const hexToRgba = (color, opacity = 100) => {
  if (typeof color === 'undefined') {
    throw new TypeError('Hex color is not defined')
  }

  const hex = color.match(/^#(?:[0-9a-f]{3}){1,2}$/i)

  if (!hex) {
    throw new Error(`${color} is not a valid hex color`)
  }

  let r
  let g
  let b

  if (color.length === 7) {
    r = parseInt(color.slice(1, 3), 16)
    g = parseInt(color.slice(3, 5), 16)
    b = parseInt(color.slice(5, 7), 16)
  } else {
    r = parseInt(color.slice(1, 2), 16)
    g = parseInt(color.slice(2, 3), 16)
    b = parseInt(color.slice(3, 5), 16)
  }

  return `rgba(${r}, ${g}, ${b}, ${opacity / 100})`
}

/* harmony default export */ __webpack_exports__["default"] = (hexToRgba);


/***/ }),

/***/ "./node_modules/@coreui/utils/src/index.js":
/*!*************************************************!*\
  !*** ./node_modules/@coreui/utils/src/index.js ***!
  \*************************************************/
/*! exports provided: default, deepObjectsMerge, getColor, getStyle, hexToRgb, hexToRgba, makeUid, omitByKeys, pickByKeys, rgbToHex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _deep_objects_merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deep-objects-merge */ "./node_modules/@coreui/utils/src/deep-objects-merge.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deepObjectsMerge", function() { return _deep_objects_merge__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _get_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-color */ "./node_modules/@coreui/utils/src/get-color.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getColor", function() { return _get_color__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _get_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-style */ "./node_modules/@coreui/utils/src/get-style.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStyle", function() { return _get_style__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _hex_to_rgb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hex-to-rgb */ "./node_modules/@coreui/utils/src/hex-to-rgb.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hexToRgb", function() { return _hex_to_rgb__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _hex_to_rgba__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hex-to-rgba */ "./node_modules/@coreui/utils/src/hex-to-rgba.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hexToRgba", function() { return _hex_to_rgba__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _make_uid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./make-uid */ "./node_modules/@coreui/utils/src/make-uid.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeUid", function() { return _make_uid__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _omit_by_keys__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./omit-by-keys */ "./node_modules/@coreui/utils/src/omit-by-keys.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "omitByKeys", function() { return _omit_by_keys__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _pick_by_keys__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pick-by-keys */ "./node_modules/@coreui/utils/src/pick-by-keys.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pickByKeys", function() { return _pick_by_keys__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _rgb_to_hex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./rgb-to-hex */ "./node_modules/@coreui/utils/src/rgb-to-hex.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rgbToHex", function() { return _rgb_to_hex__WEBPACK_IMPORTED_MODULE_8__["default"]; });











const utils = {
  deepObjectsMerge: _deep_objects_merge__WEBPACK_IMPORTED_MODULE_0__["default"],
  getColor: _get_color__WEBPACK_IMPORTED_MODULE_1__["default"],
  getStyle: _get_style__WEBPACK_IMPORTED_MODULE_2__["default"],
  hexToRgb: _hex_to_rgb__WEBPACK_IMPORTED_MODULE_3__["default"],
  hexToRgba: _hex_to_rgba__WEBPACK_IMPORTED_MODULE_4__["default"],
  makeUid: _make_uid__WEBPACK_IMPORTED_MODULE_5__["default"],
  omitByKeys: _omit_by_keys__WEBPACK_IMPORTED_MODULE_6__["default"],
  pickByKeys: _pick_by_keys__WEBPACK_IMPORTED_MODULE_7__["default"],
  rgbToHex: _rgb_to_hex__WEBPACK_IMPORTED_MODULE_8__["default"]
}

/* harmony default export */ __webpack_exports__["default"] = (utils);



/***/ }),

/***/ "./node_modules/@coreui/utils/src/make-uid.js":
/*!****************************************************!*\
  !*** ./node_modules/@coreui/utils/src/make-uid.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//function for UI releted ID assignment, due to one in 10^15 probability of duplication
const makeUid = () => {
  const key = Math.random().toString(36).substr(2)
  return 'uid-' + key
}

/* harmony default export */ __webpack_exports__["default"] = (makeUid);

/***/ }),

/***/ "./node_modules/@coreui/utils/src/omit-by-keys.js":
/*!********************************************************!*\
  !*** ./node_modules/@coreui/utils/src/omit-by-keys.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const omitByKeys = (originalObject, keys) => {
  var newObj = {}
  var objKeys = Object.keys(originalObject)
  for (var i = 0; i < objKeys.length; i++) {
    !keys.includes(objKeys[i]) && (newObj[objKeys[i]] = originalObject[objKeys[i]])
  }
  return newObj
}

/* harmony default export */ __webpack_exports__["default"] = (omitByKeys);

/***/ }),

/***/ "./node_modules/@coreui/utils/src/pick-by-keys.js":
/*!********************************************************!*\
  !*** ./node_modules/@coreui/utils/src/pick-by-keys.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const pickByKeys = (originalObject, keys) => {
  var newObj = {}
  for (var i = 0; i < keys.length; i++) {
    newObj[keys[i]] = originalObject[keys[i]]
  }
  return newObj
}

/* harmony default export */ __webpack_exports__["default"] = (pickByKeys);

/***/ }),

/***/ "./node_modules/@coreui/utils/src/rgb-to-hex.js":
/*!******************************************************!*\
  !*** ./node_modules/@coreui/utils/src/rgb-to-hex.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable no-magic-numbers */
const rgbToHex = color => {
  if (typeof color === 'undefined') {
    throw new TypeError('Hex color is not defined')
  }

  if (color === 'transparent') {
    return '#00000000'
  }

  const rgb = color.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i)

  if (!rgb) {
    throw new Error(`${color} is not a valid rgb color`)
  }

  const r = `0${parseInt(rgb[1], 10).toString(16)}`
  const g = `0${parseInt(rgb[2], 10).toString(16)}`
  const b = `0${parseInt(rgb[3], 10).toString(16)}`

  return `#${r.slice(-2)}${g.slice(-2)}${b.slice(-2)}`
}

/* harmony default export */ __webpack_exports__["default"] = (rgbToHex);


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/theme/ColorTheme.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/theme/ColorTheme.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ColorView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ColorView */ "./resources/js/src/views/theme/ColorView.vue");
//
//
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
  name: 'ColorTheme',
  components: {
    ColorView: _ColorView__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    color: String
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/theme/ColorView.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/theme/ColorView.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _coreui_utils_src__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @coreui/utils/src */ "./node_modules/@coreui/utils/src/index.js");
//
//
//
//
//
//
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
  name: 'ColorView',
  data: function data() {
    return {
      bgColor: 'rgb(255, 255, 255)'
    };
  },
  computed: {
    hexColor: function hexColor() {
      return Object(_coreui_utils_src__WEBPACK_IMPORTED_MODULE_0__["rgbToHex"])(this.bgColor);
    }
  },
  methods: {
    setColor: function setColor() {
      var elem = this.$parent.$el.children[0];
      var color = window.getComputedStyle(elem).getPropertyValue('background-color');
      this.bgColor = color || this.bgColor;
    }
  },
  mounted: function mounted() {
    this.setColor();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/theme/Colors.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/theme/Colors.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ColorTheme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ColorTheme */ "./resources/js/src/views/theme/ColorTheme.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'Colors',
  components: {
    ColorTheme: _ColorTheme__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/theme/ColorTheme.vue?vue&type=template&id=21066356&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/theme/ColorTheme.vue?vue&type=template&id=21066356& ***!
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
    "CCol",
    { staticClass: "mb-4", attrs: { xl: "2", md: "4", sm: "6", xs: "12" } },
    [
      _c("div", {
        class: ["theme-color w-75 rounded mb-3", _vm.color],
        style: { paddingTop: "75%" }
      }),
      _vm._v(" "),
      _vm._t("default"),
      _vm._v(" "),
      _c("ColorView")
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/theme/ColorView.vue?vue&type=template&id=273688a8&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/theme/ColorView.vue?vue&type=template&id=273688a8& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
  return _c("table", { staticClass: "w-100" }, [
    _c("tbody", [
      _c("tr", [
        _c("td", { staticClass: "text-muted" }, [_vm._v("HEX:")]),
        _vm._v(" "),
        _c("td", { staticClass: "font-weight-bold" }, [
          _vm._v(_vm._s(this.hexColor))
        ])
      ]),
      _vm._v(" "),
      _c("tr", [
        _c("td", { staticClass: "text-muted" }, [_vm._v("RGB:")]),
        _vm._v(" "),
        _c("td", { staticClass: "font-weight-bold" }, [
          _vm._v(_vm._s(this.bgColor))
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/theme/Colors.vue?vue&type=template&id=95e708c0&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/theme/Colors.vue?vue&type=template&id=95e708c0& ***!
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
              _c("CIcon", { attrs: { name: "cil-drop" } }),
              _vm._v(" Theme colors\n    ")
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
                  _c("ColorTheme", { attrs: { color: "bg-primary" } }, [
                    _c("h6", [_vm._v("Brand Primary Color")])
                  ]),
                  _vm._v(" "),
                  _c("ColorTheme", { attrs: { color: "bg-secondary" } }, [
                    _c("h6", [_vm._v("Brand Secondary Color")])
                  ]),
                  _vm._v(" "),
                  _c("ColorTheme", { attrs: { color: "bg-success" } }, [
                    _c("h6", [_vm._v("Brand Success Color")])
                  ]),
                  _vm._v(" "),
                  _c("ColorTheme", { attrs: { color: "bg-danger" } }, [
                    _c("h6", [_vm._v("Brand Danger Color")])
                  ]),
                  _vm._v(" "),
                  _c("ColorTheme", { attrs: { color: "bg-warning" } }, [
                    _c("h6", [_vm._v("Brand Warning Color")])
                  ]),
                  _vm._v(" "),
                  _c("ColorTheme", { attrs: { color: "bg-info" } }, [
                    _c("h6", [_vm._v("Brand Info Color")])
                  ]),
                  _vm._v(" "),
                  _c("ColorTheme", { attrs: { color: "bg-light" } }, [
                    _c("h6", [_vm._v("Brand Light Color")])
                  ]),
                  _vm._v(" "),
                  _c("ColorTheme", { attrs: { color: "bg-dark" } }, [
                    _c("h6", [_vm._v("Brand Dark Color")])
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
              _c("CIcon", { attrs: { name: "cil-drop" } }),
              _vm._v(" Grays\n    ")
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
                  _c("ColorTheme", { attrs: { color: "bg-gray-100" } }, [
                    _c("h6", [_vm._v("Brand 100 Color")])
                  ]),
                  _vm._v(" "),
                  _c("ColorTheme", { attrs: { color: "bg-gray-200" } }, [
                    _c("h6", [_vm._v("Brand 200 Color")])
                  ]),
                  _vm._v(" "),
                  _c("ColorTheme", { attrs: { color: "bg-gray-300" } }, [
                    _c("h6", [_vm._v("Brand 300 Color")])
                  ]),
                  _vm._v(" "),
                  _c("ColorTheme", { attrs: { color: "bg-gray-400" } }, [
                    _c("h6", [_vm._v("Brand 400 Color")])
                  ]),
                  _vm._v(" "),
                  _c("ColorTheme", { attrs: { color: "bg-gray-500" } }, [
                    _c("h6", [_vm._v("Brand 500 Color")])
                  ]),
                  _vm._v(" "),
                  _c("ColorTheme", { attrs: { color: "bg-gray-600" } }, [
                    _c("h6", [_vm._v("Brand 600 Color")])
                  ]),
                  _vm._v(" "),
                  _c("ColorTheme", { attrs: { color: "bg-gray-700" } }, [
                    _c("h6", [_vm._v("Brand 700 Color")])
                  ]),
                  _vm._v(" "),
                  _c("ColorTheme", { attrs: { color: "bg-gray-800" } }, [
                    _c("h6", [_vm._v("Brand 800 Color")])
                  ]),
                  _vm._v(" "),
                  _c("ColorTheme", { attrs: { color: "bg-gray-900" } }, [
                    _c("h6", [_vm._v("Brand 900 Color")])
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

/***/ "./resources/js/src/views/theme/ColorTheme.vue":
/*!*****************************************************!*\
  !*** ./resources/js/src/views/theme/ColorTheme.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ColorTheme_vue_vue_type_template_id_21066356___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ColorTheme.vue?vue&type=template&id=21066356& */ "./resources/js/src/views/theme/ColorTheme.vue?vue&type=template&id=21066356&");
/* harmony import */ var _ColorTheme_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ColorTheme.vue?vue&type=script&lang=js& */ "./resources/js/src/views/theme/ColorTheme.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ColorTheme_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ColorTheme_vue_vue_type_template_id_21066356___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ColorTheme_vue_vue_type_template_id_21066356___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/theme/ColorTheme.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/theme/ColorTheme.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/src/views/theme/ColorTheme.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorTheme_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ColorTheme.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/theme/ColorTheme.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorTheme_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/theme/ColorTheme.vue?vue&type=template&id=21066356&":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/theme/ColorTheme.vue?vue&type=template&id=21066356& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorTheme_vue_vue_type_template_id_21066356___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ColorTheme.vue?vue&type=template&id=21066356& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/theme/ColorTheme.vue?vue&type=template&id=21066356&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorTheme_vue_vue_type_template_id_21066356___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorTheme_vue_vue_type_template_id_21066356___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/theme/ColorView.vue":
/*!****************************************************!*\
  !*** ./resources/js/src/views/theme/ColorView.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ColorView_vue_vue_type_template_id_273688a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ColorView.vue?vue&type=template&id=273688a8& */ "./resources/js/src/views/theme/ColorView.vue?vue&type=template&id=273688a8&");
/* harmony import */ var _ColorView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ColorView.vue?vue&type=script&lang=js& */ "./resources/js/src/views/theme/ColorView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ColorView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ColorView_vue_vue_type_template_id_273688a8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ColorView_vue_vue_type_template_id_273688a8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/theme/ColorView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/theme/ColorView.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/views/theme/ColorView.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ColorView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/theme/ColorView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/theme/ColorView.vue?vue&type=template&id=273688a8&":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/theme/ColorView.vue?vue&type=template&id=273688a8& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorView_vue_vue_type_template_id_273688a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ColorView.vue?vue&type=template&id=273688a8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/theme/ColorView.vue?vue&type=template&id=273688a8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorView_vue_vue_type_template_id_273688a8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorView_vue_vue_type_template_id_273688a8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/theme/Colors.vue":
/*!*************************************************!*\
  !*** ./resources/js/src/views/theme/Colors.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Colors_vue_vue_type_template_id_95e708c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Colors.vue?vue&type=template&id=95e708c0& */ "./resources/js/src/views/theme/Colors.vue?vue&type=template&id=95e708c0&");
/* harmony import */ var _Colors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Colors.vue?vue&type=script&lang=js& */ "./resources/js/src/views/theme/Colors.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Colors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Colors_vue_vue_type_template_id_95e708c0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Colors_vue_vue_type_template_id_95e708c0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/theme/Colors.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/theme/Colors.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/src/views/theme/Colors.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Colors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Colors.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/theme/Colors.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Colors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/theme/Colors.vue?vue&type=template&id=95e708c0&":
/*!********************************************************************************!*\
  !*** ./resources/js/src/views/theme/Colors.vue?vue&type=template&id=95e708c0& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Colors_vue_vue_type_template_id_95e708c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Colors.vue?vue&type=template&id=95e708c0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/theme/Colors.vue?vue&type=template&id=95e708c0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Colors_vue_vue_type_template_id_95e708c0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Colors_vue_vue_type_template_id_95e708c0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);