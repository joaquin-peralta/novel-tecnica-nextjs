exports.ids = [9];
exports.modules = {

/***/ "j1/2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("AuoD");
/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_leaflet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("hgx0");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);





const Map = () => {
  const position = [-31.447930521044952, -60.92875309668356];
  const placeholder = leaflet__WEBPACK_IMPORTED_MODULE_2___default.a.icon({
    iconUrl: '/marker-icon.png',
    iconSize: [27, 40],
    iconAnchor: [27, 40]
  });
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_leaflet__WEBPACK_IMPORTED_MODULE_1__["MapContainer"], {
    center: position,
    zoom: 16,
    scrollWheelZoom: false,
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_leaflet__WEBPACK_IMPORTED_MODULE_1__["TileLayer"], {
      attribution: "\xA9 <a href=\"http://osm.org/copyright\">OpenStreetMap</a> contributors",
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_leaflet__WEBPACK_IMPORTED_MODULE_1__["Marker"], {
      position: position,
      icon: placeholder,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_leaflet__WEBPACK_IMPORTED_MODULE_1__["Popup"], {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", {
          children: "Novel T\xE9cnica"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", {}), "Lun a Vie 9 a 17 hs"]
      })
    })]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Map);

/***/ })

};;