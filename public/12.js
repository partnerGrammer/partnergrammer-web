(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Home.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Home.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_NavbarComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/NavbarComponent */ "./resources/js/components/NavbarComponent.vue");
/* harmony import */ var _components_FooterComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/FooterComponent */ "./resources/js/components/FooterComponent.vue");
/* harmony import */ var _components_ContactComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ContactComponent */ "./resources/js/components/ContactComponent.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'Home',
  components: {
    Navbar: _components_NavbarComponent__WEBPACK_IMPORTED_MODULE_1__["default"],
    Footer: _components_FooterComponent__WEBPACK_IMPORTED_MODULE_2__["default"],
    Contact: _components_ContactComponent__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {};
  },
  mounted: function mounted() {},
  methods: {
    goToArticle: function goToArticle(args) {
      this.$router.push({
        name: 'Article',
        params: {
          id: args
        }
      });
    },
    getArticle: function getArticle() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var URL, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                URL = '/api/article';
                _context.next = 4;
                return axios.get(URL);

              case 4:
                response = _context.sent;

                if (response) {
                  _this.mainArticle = response.data;
                }

                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 8]]);
      }))();
    },
    getArticles: function getArticles() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var URL, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _this2.articles = [];
                URL = "/api/articles?page=".concat(_this2.count);
                _context2.next = 5;
                return axios.get(URL);

              case 5:
                response = _context2.sent;

                if (response) {
                  console.log(response.data);
                  _this2.lastPage = response.data.last_page;
                  response.data.data.forEach(function (element) {
                    _this2.articles.push(element);
                  });
                }

                _context2.next = 12;
                break;

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](0);
                console.log(_context2.t0);

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 9]]);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Home.vue?vue&type=style&index=0&id=b3c5cf30&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Home.vue?vue&type=style&index=0&id=b3c5cf30&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.container[data-v-b3c5cf30]{\n    position: relative;\n}\n.main-container *[data-v-b3c5cf30]{\n    padding: 0;\n    margin: 0;\n}\n.main-container h1[data-v-b3c5cf30]{\n    font-size: 3.5em;\n}\n.image-about[data-v-b3c5cf30]{\n    width: 9vw;\n}\n.container-image[data-v-b3c5cf30]{\n    width: 100%;\n    padding-top: 160%; /* 1:1 Aspect Ratio */\n    position: relative; /* If you want text inside of it */\n    background-position: center;\n    background-size: cover;\n}\n.container-image-2[data-v-b3c5cf30]{\n    width: 100%;\n    padding-top: 100%; /* 1:1 Aspect Ratio */\n    position: relative; /* If you want text inside of it */\n    background-position: center;\n    background-size: cover;\n}\n.container-image img[data-v-b3c5cf30] {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    -o-object-fit: cover;\n       object-fit: cover;\n    -o-object-position: center;\n       object-position: center;\n}\n.container-image-2 img[data-v-b3c5cf30] {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    -o-object-fit: cover;\n       object-fit: cover;\n    -o-object-position: center;\n       object-position: center;\n}\n.main-container .row[data-v-b3c5cf30]:nth-child(1), .row[data-v-b3c5cf30]:nth-child(5), .row[data-v-b3c5cf30]:nth-child(8), .row[data-v-b3c5cf30]:nth-child(11), .row[data-v-b3c5cf30]:nth-child(13), .row[data-v-b3c5cf30]:nth-child(15){\n    margin-top: 5em;\n}\n.main-container .row[data-v-b3c5cf30]:nth-child(2), .row[data-v-b3c5cf30]:nth-child(3), .row[data-v-b3c5cf30]:nth-child(6), .row[data-v-b3c5cf30]:nth-child(9), .row[data-v-b3c5cf30]:nth-child(12), .row[data-v-b3c5cf30]:nth-child(16){\n    margin-top: 2em;\n}\n.main-container .row[data-v-b3c5cf30]:nth-child(10){\n    position: relative;\n    margin-top: 5em;\n}\n.main-container .row[data-v-b3c5cf30]:nth-child(14){\n    position: relative;\n}\n.carrousel[data-v-b3c5cf30]{\n    width: 100%;\n    height: 200px;\n    background-color: purple;\n}\n.main-container h2[data-v-b3c5cf30]{\n    font-size: 3em;\n    font-weight: bold;\n}\n.image-about[data-v-b3c5cf30]{\n    width: 20vw;\n}\n.line[data-v-b3c5cf30]{\n    width: 100%;\n    height: 110%;\n    background-color: #EE1331;\n    position: absolute;\n    top: -5%;\n    right: 0;\n    margin-right: -20%;\n}\n.main-container .row:nth-child(14) .line[data-v-b3c5cf30]{\n    width: 100%;\n    height: 30%;\n    background-color: #EAECED;\n    opacity: 0.8;\n    position: absolute;\n    top: 70%;\n    right: 0;\n    margin-right: -20%;\n}\n.btn-ver-mas[data-v-b3c5cf30]{\n    display: inline-block;\n    padding: 10px 35px;\n    color: white;\n    border: 1px solid white;\n    font-size: 14px;\n    border-radius: 0px;\n}\n.btn-ver-mas-2[data-v-b3c5cf30]{\n    display: inline-block;\n    padding: 10px 35px;\n    color: white;\n    background-color: #EE1331;\n    font-size: 14px;\n    border-radius: 0px;\n    margin-top: 20px;\n}\n.contacto[data-v-b3c5cf30]{\n    margin-top: 1em;\n    box-shadow: 3px 3px 10px #BFBFBF;\n    padding: 20px 10%;\n}\n.contacto input[data-v-b3c5cf30]{\n    width: 100%;\n    margin-top: 10px;\n    height: 35px;\n    border: none;\n    border: 1px solid black;\n    padding: 10px;\n}\n.contacto textarea[data-v-b3c5cf30]{\n    width: 100%;\n    margin-top: 10px;\n    border: none;\n    border: 1px solid black;\n    padding: 10px;\n}\n.line-pointer[data-v-b3c5cf30]{\n    position: absolute;\n    width: 1px;\n    height: 158px;\n    top: -30px;\n    left: 0;\n    background-color: #707070;\n    margin-left: 15px;\n    z-index: -1;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Home.vue?vue&type=style&index=0&id=b3c5cf30&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Home.vue?vue&type=style&index=0&id=b3c5cf30&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=style&index=0&id=b3c5cf30&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Home.vue?vue&type=style&index=0&id=b3c5cf30&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Home.vue?vue&type=template&id=b3c5cf30&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Home.vue?vue&type=template&id=b3c5cf30&scoped=true& ***!
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
    { staticClass: "container" },
    [
      _c("Navbar"),
      _vm._v(" "),
      _c(
        "section",
        { staticClass: "main-container" },
        [
          _vm._m(0),
          _vm._v(" "),
          _vm._m(1),
          _vm._v(" "),
          _vm._m(2),
          _vm._v(" "),
          _vm._m(3),
          _vm._v(" "),
          _vm._m(4),
          _vm._v(" "),
          _vm._m(5),
          _vm._v(" "),
          _vm._m(6),
          _vm._v(" "),
          _vm._m(7),
          _vm._v(" "),
          _vm._m(8),
          _vm._v(" "),
          _vm._m(9),
          _vm._v(" "),
          _vm._m(10),
          _vm._v(" "),
          _vm._m(11),
          _vm._v(" "),
          _vm._m(12),
          _vm._v(" "),
          _vm._m(13),
          _vm._v(" "),
          _vm._m(14),
          _vm._v(" "),
          _vm._m(15),
          _vm._v(" "),
          _c("Contact")
        ],
        1
      ),
      _vm._v(" "),
      _c("Footer")
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "row" }, [
      _c(
        "div",
        {
          staticClass:
            "col-md-6 d-flex justify-content-center align-items-center flex-column"
        },
        [
          _c("h1", [
            _vm._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit")
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "mt-3" }, [
            _vm._v(
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores porro reprehenderit inventore."
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-6" }, [
        _c("img", {
          attrs: { src: "/images/computer-bg-1.png", width: "100%", alt: "" }
        })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c("h2", { staticStyle: { color: "#949A9D" } }, [_vm._v("nuestros")]),
        _vm._v(" "),
        _c("h2", [_vm._v("procesos")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12 text-center" }, [
        _c("p", [
          _vm._v(
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores porro reprehenderit inventore."
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12 carrousel" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c("h2", { staticStyle: { color: "#949A9D" } }, [
          _vm._v("tu tranquilidad")
        ]),
        _vm._v(" "),
        _c("h2", [_vm._v("nuestra prioridad")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12 text-center" }, [
        _c("p", [
          _vm._v(
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores porro reprehenderit inventore."
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-1" }),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-10" }, [
        _c(
          "div",
          {
            staticClass: "row",
            staticStyle: { "background-color": "#EE1331" }
          },
          [
            _c(
              "div",
              {
                staticClass: "col-md-12",
                staticStyle: {
                  padding: "10px",
                  color: "white",
                  display: "flex"
                }
              },
              [
                _c("p", [_c("i", { staticClass: "fas fa-arrow-down" })]),
                _vm._v(" "),
                _c(
                  "p",
                  {
                    staticStyle: { "margin-left": "55px", "font-size": "1.2em" }
                  },
                  [_vm._v("Pagas a medida que te entregamos resultados")]
                )
              ]
            )
          ]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col-md-12", staticStyle: { position: "relative" } },
            [
              _c("div", { staticClass: "line-pointer" }),
              _vm._v(" "),
              _c("ul", { staticStyle: { "margin-left": "30px" } }, [
                _c("li", [
                  _c(
                    "p",
                    {
                      staticStyle: {
                        "margin-left": "50px",
                        "font-size": "1.2em",
                        "margin-top": "1.2em",
                        "font-weight": "bold"
                      }
                    },
                    [_vm._v("Penalización por tiempos")]
                  )
                ]),
                _vm._v(" "),
                _c("li", [
                  _c(
                    "p",
                    {
                      staticStyle: {
                        "margin-left": "50px",
                        "font-size": "1.2em",
                        "margin-top": "1.2em",
                        "font-weight": "bold"
                      }
                    },
                    [_vm._v("Garantía de 90 días")]
                  )
                ]),
                _vm._v(" "),
                _c("li", [
                  _c(
                    "p",
                    {
                      staticStyle: {
                        "margin-left": "50px",
                        "font-size": "1.2em",
                        "margin-top": "1.2em",
                        "font-weight": "bold"
                      }
                    },
                    [_vm._v("Todo se especifica en un contrato")]
                  )
                ])
              ])
            ]
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c("h2", { staticStyle: { color: "#949A9D" } }, [_vm._v("¿que")]),
        _vm._v(" "),
        _c("h2", [_vm._v("hacemos?")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12 text-center" }, [
        _c("p", [
          _vm._v(
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores porro reprehenderit inventore."
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "row" }, [
      _c("div", { staticClass: "line" }),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-4" }, [
        _c("div", { staticClass: "container-image-2" }, [
          _c("img", {
            attrs: {
              src:
                "https://vignette.wikia.nocookie.net/kpop/images/2/27/ELRIS_Bella_Jackpot_concept_photo_%283%29.png/revision/latest?cb=20200227233639",
              width: "100%",
              alt: ""
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "col-md-8 d-flex justify-content-around align-items-start flex-column text-left pl-5",
          staticStyle: { color: "white", padding: "20px 0" }
        },
        [
          _c("h2", [_vm._v("Proyectos")]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, omnis voluptatem. Dolor voluptate quis, repellendus perspiciatis officiis voluptatibus illo magnam laboriosam ex in qui nesciunt facilis consectetur molestiae pariatur iusto."
            )
          ]),
          _vm._v(" "),
          _c("a", { staticClass: "btn btn-ver-mas", attrs: { href: "#" } }, [
            _vm._v("Ver mas")
          ])
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c("h2", { staticStyle: { color: "#949A9D" } }, [_vm._v("nuestros")]),
        _vm._v(" "),
        _c("h2", [_vm._v("clientes")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "row" }, [
      _c(
        "div",
        {
          staticClass:
            "col-md-12 d-flex justify-content-around align-items-center flex-wrap"
        },
        [
          _c("img", {
            attrs: {
              src:
                "https://www.websmultimedia.com/style/img/trabajos/logotipo-areco.jpg",
              width: "200px",
              alt: ""
            }
          }),
          _vm._v(" "),
          _c("img", {
            attrs: {
              src:
                "https://www.websmultimedia.com/style/img/trabajos/logotipo-areco.jpg",
              width: "200px",
              alt: ""
            }
          }),
          _vm._v(" "),
          _c("img", {
            attrs: {
              src:
                "https://www.websmultimedia.com/style/img/trabajos/logotipo-areco.jpg",
              width: "200px",
              alt: ""
            }
          }),
          _vm._v(" "),
          _c("img", {
            attrs: {
              src:
                "https://www.websmultimedia.com/style/img/trabajos/logotipo-areco.jpg",
              width: "200px",
              alt: ""
            }
          }),
          _vm._v(" "),
          _c("img", {
            attrs: {
              src:
                "https://www.websmultimedia.com/style/img/trabajos/logotipo-areco.jpg",
              width: "200px",
              alt: ""
            }
          })
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c("h2", { staticStyle: { color: "#949A9D" } }, [_vm._v("nuestros")]),
        _vm._v(" "),
        _c("h2", [_vm._v("expertos")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "row" }, [
      _c("div", { staticClass: "line" }),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-4" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-12" }, [
            _c("img", {
              attrs: {
                src:
                  "https://img1.kpopmap.com/2017/05/ELRS-Jackpot-Concept-Photo-profile.jpg",
                width: "100%",
                alt: ""
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-12 mt-2" }, [
            _c("img", {
              attrs: {
                src:
                  "https://thebiaslistcom.files.wordpress.com/2017/06/elris-we-first.jpg",
                width: "100%",
                alt: ""
              }
            })
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-3" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-12 ml-2" }, [
            _c("img", {
              attrs: {
                src:
                  "https://vignette.wikia.nocookie.net/kpop/images/2/27/ELRIS_Bella_Jackpot_concept_photo_%283%29.png/revision/latest?cb=20200227233639",
                width: "100%",
                alt: ""
              }
            })
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "col-md-5 d-flex justify-content-center align-items-start flex-column pl-3"
        },
        [
          _c("p", [
            _vm._v(
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure fuga libero amet illo suscipit iste, error accusamus dolore dolorem debitis. Nemo, porro numquam! Aliquid ut porro harum officia quae? Cumque!"
            )
          ]),
          _vm._v(" "),
          _c("a", { staticClass: "btn btn-ver-mas-2", attrs: { href: "#" } }, [
            _vm._v("ver mas")
          ])
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c("h2", { staticStyle: { color: "#949A9D" } }, [
          _vm._v("¿que tienes en mente?")
        ]),
        _vm._v(" "),
        _c("h2", [_vm._v("contactanos")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12 text-center" }, [
        _c("p", [
          _vm._v(
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores porro reprehenderit inventore."
          )
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/Home.vue":
/*!*************************************!*\
  !*** ./resources/js/pages/Home.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_b3c5cf30_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=b3c5cf30&scoped=true& */ "./resources/js/pages/Home.vue?vue&type=template&id=b3c5cf30&scoped=true&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/pages/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Home_vue_vue_type_style_index_0_id_b3c5cf30_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home.vue?vue&type=style&index=0&id=b3c5cf30&scoped=true&lang=css& */ "./resources/js/pages/Home.vue?vue&type=style&index=0&id=b3c5cf30&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_b3c5cf30_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_b3c5cf30_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "b3c5cf30",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Home.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./resources/js/pages/Home.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Home.vue?vue&type=style&index=0&id=b3c5cf30&scoped=true&lang=css&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/pages/Home.vue?vue&type=style&index=0&id=b3c5cf30&scoped=true&lang=css& ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_b3c5cf30_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=style&index=0&id=b3c5cf30&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Home.vue?vue&type=style&index=0&id=b3c5cf30&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_b3c5cf30_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_b3c5cf30_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_b3c5cf30_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_b3c5cf30_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_b3c5cf30_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/pages/Home.vue?vue&type=template&id=b3c5cf30&scoped=true&":
/*!********************************************************************************!*\
  !*** ./resources/js/pages/Home.vue?vue&type=template&id=b3c5cf30&scoped=true& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_b3c5cf30_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=b3c5cf30&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Home.vue?vue&type=template&id=b3c5cf30&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_b3c5cf30_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_b3c5cf30_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);