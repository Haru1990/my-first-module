module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _plugins_css_hiprint_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _plugins_css_hiprint_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_plugins_css_hiprint_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _plugins_css_print_lock_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _plugins_css_print_lock_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_plugins_css_print_lock_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _plugins_js_hiprint_bundle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);




/* harmony default export */ __webpack_exports__["default"] = (_plugins_js_hiprint_bundle__WEBPACK_IMPORTED_MODULE_2__["default"]);



/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(2);
            var content = __webpack_require__(3);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\r\n/* hiprint-pagination */\r\n.hiprint-pagination {\r\n    display: inline-block;\r\n    padding-left: 0;\r\n}\r\n    .hiprint-pagination > li {\r\n        border: 1px solid #bdc3c7;\r\n        -moz-border-radius: 2px;\r\n        -webkit-border-radius: 2px;\r\n        display: block;\r\n        float: left;\r\n        padding: 5px;\r\n        text-decoration: none;\r\n        margin-right: 5px;\r\n        margin-bottom: 5px;\r\n        font-family: helvetica;\r\n        font-size: 13px;\r\n        cursor: pointer\r\n    }\r\n\r\n        .hiprint-pagination > li > span {\r\n            padding: 0 10px 0 10px;\r\n        }\r\n\r\n        .hiprint-pagination > li > a {\r\n            color: #bdc3c7;\r\n            font-weight: bold;\r\n            text-decoration: none;\r\n            font-size: 11px;\r\n            padding: 3px;\r\n        }\r\n\r\n            .hiprint-pagination > li > a:hover {\r\n                color: red;\r\n            }\r\n\r\n\r\n\r\n.hiprint-pagination-sm > li > a {\r\n    padding: 5px 10px;\r\n    font-size: 12px;\r\n    line-height: 1.5;\r\n}\r\n/*rect-printElement-type hiprint-printElement-type */\r\n.rect-printElement-types .hiprint-printElement-type {\r\n    display: block;\r\n}\r\n\r\n.rect-printElement-types .hiprint-printElement-type {\r\n    padding: 0 0 0 0;\r\n    list-style: none;\r\n}\r\n\r\n    .rect-printElement-types .hiprint-printElement-type > li > .title {\r\n        display: block;\r\n        padding: 4px 0px;\r\n        clear: both;\r\n    }\r\n\r\n    .rect-printElement-types .hiprint-printElement-type > li > ul {\r\n        padding: 0 0 0 0;\r\n        display: block;\r\n        list-style: none;\r\n    }\r\n\r\n        .rect-printElement-types .hiprint-printElement-type > li > ul > li {\r\n            display: block;\r\n            width: 50%;\r\n            float: left;\r\n            max-width: 100px;\r\n        }\r\n\r\n            .rect-printElement-types .hiprint-printElement-type > li > ul > li > a {\r\n                height: 92px;\r\n                padding: 12px 6px;\r\n                margin-left: -1px;\r\n                line-height: 1.42857143;\r\n                color: #337ab7;\r\n                text-decoration: none;\r\n                background-color: #fff;\r\n                border: 1px solid #ddd;\r\n                margin-right: 5px;\r\n                width: 95%;\r\n                max-width: 100px;\r\n                display: inline-block;\r\n                text-align: center;\r\n                margin-bottom: 7px;\r\n                box-sizing: border-box;\r\n                color: #b9a5a6;\r\n                border: 1px solid rgba(0,0,0,0.2);\r\n                border-radius: 3px;\r\n                box-shadow: 0 1px 0 0 rgba(0,0,0,0.15);\r\n            }\r\n\r\n\r\n/*small-printElement-type hiprint-printElement-type */\r\n.small-printElement-types .hiprint-printElement-type {\r\n    display: block;\r\n}\r\n\r\n.small-printElement-types .hiprint-printElement-type {\r\n    padding: 0 0 0 0;\r\n    list-style: none;\r\n}\r\n\r\n    .small-printElement-types .hiprint-printElement-type > li > .title {\r\n        display: block;\r\n        padding: 4px 0px;\r\n        clear: both;\r\n    }\r\n\r\n    .small-printElement-types .hiprint-printElement-type > li > ul {\r\n        padding: 0 0 0 0;\r\n        display: block;\r\n        list-style: none;\r\n        width: 100%;\r\n    }\r\n\r\n        .small-printElement-types .hiprint-printElement-type > li > ul > li {\r\n            display: block;\r\n            width: 50%;\r\n            float: left;\r\n            padding: 0 4px;\r\n        }\r\n\r\n            .small-printElement-types .hiprint-printElement-type > li > ul > li > a {\r\n                height: 22px;\r\n                /* padding: 12px 6px; */\r\n                /* margin-left: -1px; */\r\n                line-height: 20px;\r\n                color: #337ab7;\r\n                text-decoration: none;\r\n                background-color: #fff;\r\n                border: 1px solid #ddd;\r\n                margin-right: 5px;\r\n                width: 100%;\r\n                display: block;\r\n                text-align: center;\r\n                margin-bottom: 7px;\r\n                box-sizing: border-box;\r\n                color: #b9a5a6;\r\n                border: 1px solid rgba(0,0,0,0.2);\r\n                border-radius: 3px;\r\n                box-shadow: 0 1px 0 0 rgba(0,0,0,0.15);\r\n            }\r\n\r\n\r\n/* hiprint-toolbar*/\r\n\r\n.hiprint-toolbar {\r\n}\r\n\r\n    .hiprint-toolbar > ul {\r\n        padding: 0px;\r\n        margin-bottom: 5px;\r\n    }\r\n\r\n        .hiprint-toolbar > ul > li {\r\n            display: inline-block;\r\n        }\r\n\r\n            .hiprint-toolbar > ul > li > a {\r\n                position: relative;\r\n                float: left;\r\n                padding: 3px 10px;\r\n                margin-left: -1px;\r\n                line-height: 1.42857143;\r\n                color: #337ab7;\r\n                text-decoration: none;\r\n                background-color: #fff;\r\n                border: 1px solid #ddd;\r\n                margin-right: 4px;\r\n                cursor: pointer;\r\n            }\r\n\r\n\r\n.hiprint-printElement-type .glyphicon-class {\r\n    display: block;\r\n    text-align: center;\r\n    word-wrap: break-word;\r\n    /*font-size: 0.65rem;\r\nfont-weight: normal;*/\r\n    font-family: Helvetica, sans-serif;\r\n}\r\n\r\n.hiprint-printElement-type .glyphicon {\r\n    margin-top: 5px;\r\n    margin-bottom: 10px;\r\n    font-size: 37px;\r\n}\r\n\r\n\r\n/*\r\n\r\n\r\n*/\r\n\r\n/*option css*/\r\n/*option css*/\r\n.hiprint-option-items {\r\n    font-size: .75rem;\r\n    padding: 10px 5px;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    align-items: flex-end;\r\n    box-sizing: border-box;\r\n    width: 100%;\r\n}\r\n\r\n    .hiprint-option-items .hiprint-option-item {\r\n        box-sizing: border-box;\r\n        float: left;\r\n        width: 50%;\r\n        margin-bottom: 5px;\r\n        padding: 0 5px;\r\n    }\r\n\r\n    .hiprint-option-items .hiprint-option-item-row {\r\n        width: 100%;\r\n    }\r\n\r\n.hiprint-option-item-label {\r\n    margin: 5px 5px 3px 0;\r\n}\r\n\r\n.hiprint-option-items .hiprint-option-item-field input, .hiprint-option-items .hiprint-option-item-field select, .hiprint-option-items .hiprint-option-item-field textarea {\r\n    color: inherit;\r\n    background-color: transparent;\r\n    box-sizing: border-box;\r\n    width: 100%;\r\n    position: relative;\r\n    padding: 3px;\r\n    z-index: 1;\r\n    border: 1px solid rgb(169, 169, 169);\r\n    height: 19pt;\r\n}\r\n\r\n.hiprint-option-item-settingBtn {\r\n    height: 19pt;\r\n    line-height: 19pt;\r\n    font-size: 12px;\r\n    padding: 0 24px;\r\n    background: #00c1de;\r\n    border-color: transparent;\r\n    color: #fff;\r\n    display: inline-block;\r\n    margin: 5px;\r\n    font-weight: 400;\r\n    border: 1px solid transparent;\r\n    font-family: PingFangSC, helvetica neue, hiragino sans gb, arial, microsoft yahei ui, microsoft yahei, simsun, \"sans-serif\";\r\n    vertical-align: middle;\r\n    transition: .3s cubic-bezier(.4, 0, .2, 1);\r\n    transform: translateZ(0);\r\n}\r\n\r\n.hiprint-option-item-deleteBtn {\r\n    background: red;\r\n}\r\n\r\n.hiprint-option-items .minicolors {\r\n    position: relative;\r\n}\r\n\r\n.hiprint-option-items .minicolors-swatch {\r\n    position: absolute;\r\n    vertical-align: middle;\r\n    background-position: -80px 0;\r\n    cursor: text;\r\n    padding: 0;\r\n    margin: 0;\r\n    display: inline-block;\r\n}\r\n\r\n.hiprint-option-items .minicolors-swatch-color {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n}\r\n\r\n.hiprint-option-items .minicolors input[type=hidden] + .minicolors-swatch {\r\n    width: 28px;\r\n    position: static;\r\n    cursor: pointer;\r\n}\r\n\r\n.hiprint-option-items .minicolors input[type=hidden][disabled] + .minicolors-swatch {\r\n    cursor: default;\r\n}\r\n\r\n/* Panel */\r\n.hiprint-option-items .minicolors-panel {\r\n    position: absolute;\r\n    width: 173px;\r\n    background: white;\r\n    border: solid 1px #CCC;\r\n    box-shadow: 0 0 20px rgba(0, 0, 0, .2);\r\n    z-index: 99999;\r\n    box-sizing: content-box;\r\n    display: none;\r\n}\r\n\r\n    .hiprint-option-items .minicolors-panel.minicolors-visible {\r\n        display: block;\r\n    }\r\n\r\n/* Panel positioning */\r\n.hiprint-option-items .minicolors-position-top .minicolors-panel {\r\n    top: -154px;\r\n}\r\n\r\n.hiprint-option-items .minicolors-position-right .minicolors-panel {\r\n    right: 0;\r\n}\r\n\r\n.hiprint-option-items .minicolors-position-bottom .minicolors-panel {\r\n    top: auto;\r\n}\r\n\r\n.hiprint-option-items .minicolors-position-left .minicolors-panel {\r\n    left: 0;\r\n}\r\n\r\n.hiprint-option-items .minicolors-with-opacity .minicolors-panel {\r\n    width: 194px;\r\n}\r\n\r\n.hiprint-option-items .minicolors .minicolors-grid {\r\n    position: relative;\r\n    top: 1px;\r\n    left: 1px; /* LTR */\r\n    width: 150px;\r\n    height: 150px;\r\n    margin-bottom: 2px;\r\n    background-position: -120px 0;\r\n    cursor: crosshair;\r\n}\r\n\r\n.hiprint-option-items .minicolors .minicolors-grid-inner {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 150px;\r\n    height: 150px;\r\n}\r\n\r\n.hiprint-option-items .minicolors-slider-saturation .minicolors-grid {\r\n    background-position: -420px 0;\r\n}\r\n\r\n.hiprint-option-items .minicolors-slider-saturation .minicolors-grid-inner {\r\n    background-position: -270px 0;\r\n    background-image: inherit;\r\n}\r\n\r\n.hiprint-option-items .minicolors-slider-brightness .minicolors-grid {\r\n    background-position: -570px 0;\r\n}\r\n\r\n.hiprint-option-items .minicolors-slider-brightness .minicolors-grid-inner {\r\n    background-color: black;\r\n}\r\n\r\n.hiprint-option-items .minicolors-slider-wheel .minicolors-grid {\r\n    background-position: -720px 0;\r\n}\r\n\r\n.hiprint-option-items .minicolors-slider,\r\n.hiprint-option-items .minicolors-opacity-slider {\r\n    position: absolute;\r\n    top: 1px;\r\n    left: 152px; /* LTR */\r\n    width: 20px;\r\n    height: 150px;\r\n    background-color: white;\r\n    background-position: 0 0;\r\n    cursor: row-resize;\r\n}\r\n\r\n.hiprint-option-items .minicolors-slider-saturation .minicolors-slider {\r\n    background-position: -60px 0;\r\n}\r\n\r\n.hiprint-option-items .minicolors-slider-brightness .minicolors-slider {\r\n    background-position: -20px 0;\r\n}\r\n\r\n.hiprint-option-items .minicolors-slider-wheel .minicolors-slider {\r\n    background-position: -20px 0;\r\n}\r\n\r\n.hiprint-option-items .minicolors-opacity-slider {\r\n    left: 173px; /* LTR */\r\n    background-position: -40px 0;\r\n    display: none;\r\n}\r\n\r\n\r\n.hiprint-option-items .minicolors-with-opacity .minicolors-opacity-slider {\r\n    display: block;\r\n}\r\n\r\n/* Pickers */\r\n.hiprint-option-items .minicolors-grid .minicolors-picker {\r\n    position: absolute;\r\n    top: 70px;\r\n    left: 70px;\r\n    width: 12px;\r\n    height: 12px;\r\n    border: solid 1px black;\r\n    border-radius: 10px;\r\n    margin-top: -6px;\r\n    margin-left: -6px;\r\n    background: none;\r\n}\r\n\r\n    .hiprint-option-items .minicolors-grid .minicolors-picker > div {\r\n        position: absolute;\r\n        top: 0;\r\n        left: 0;\r\n        width: 8px;\r\n        height: 8px;\r\n        border-radius: 8px;\r\n        border: solid 2px white;\r\n        box-sizing: content-box;\r\n    }\r\n\r\n.hiprint-option-items .minicolors-picker {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 18px;\r\n    height: 2px;\r\n    background: white;\r\n    border: solid 1px black;\r\n    margin-top: -2px;\r\n    box-sizing: content-box;\r\n}\r\n\r\n/* Swatches */\r\n.hiprint-option-items .minicolors-swatches,\r\n.hiprint-option-items .minicolors-swatches li {\r\n    margin: 5px 0 3px 5px; /* LTR */\r\n    padding: 0;\r\n    list-style: none;\r\n    overflow: hidden;\r\n}\r\n\r\n    .hiprint-option-items .minicolors-swatches .minicolors-swatch {\r\n        position: relative;\r\n        float: left; /* LTR */\r\n        cursor: pointer;\r\n        margin: 0 4px 0 0; /* LTR */\r\n    }\r\n\r\n\r\n.hiprint-option-items .minicolors-with-opacity .minicolors-swatches .minicolors-swatch {\r\n    margin-right: 7px; /* LTR */\r\n}\r\n\r\n\r\n.hiprint-option-items .minicolors-swatch.selected {\r\n    border-color: #000;\r\n}\r\n\r\n/* Inline controls */\r\n.hiprint-option-items .minicolors-inline {\r\n    display: inline-block;\r\n}\r\n\r\n    .hiprint-option-items .minicolors-inline .minicolors-input {\r\n        display: none !important;\r\n    }\r\n\r\n    .hiprint-option-items .minicolors-inline .minicolors-panel {\r\n        position: relative;\r\n        top: auto;\r\n        left: auto; /* LTR */\r\n        box-shadow: none;\r\n        z-index: auto;\r\n        display: inline-block;\r\n    }\r\n\r\n\r\n\r\n/* Bootstrap theme */\r\n.hiprint-option-items .minicolors-theme-bootstrap .minicolors-swatch {\r\n    z-index: 2;\r\n    top: 3px;\r\n    left: 3px;\r\n    width: 17px;\r\n    height: 17px;\r\n}\r\n\r\n.hiprint-option-items .minicolors-theme-bootstrap .minicolors-swatches .minicolors-swatch {\r\n    margin-bottom: 2px;\r\n    top: 0;\r\n    left: 0; /* LTR */\r\n    width: 20px;\r\n    height: 20px;\r\n}\r\n\r\n.hiprint-option-items .minicolors-theme-bootstrap .minicolors-swatch-color {\r\n    border-radius: inherit;\r\n}\r\n\r\n.hiprint-option-items .minicolors-theme-bootstrap.minicolors-position-right > .minicolors-swatch {\r\n    left: auto; /* LTR */\r\n    right: 3px; /* LTR */\r\n}\r\n\r\n.hiprint-option-items .minicolors-theme-bootstrap .minicolors-input {\r\n    float: none;\r\n    padding-left: 23px; /* LTR */\r\n}\r\n\r\n.hiprint-option-items .minicolors-theme-bootstrap.minicolors-position-right .minicolors-input {\r\n    padding-right: 44px; /* LTR */\r\n    padding-left: 12px; /* LTR */\r\n}\r\n\r\n.hiprint-option-items .minicolors-theme-bootstrap .minicolors-input.input-lg + .minicolors-swatch {\r\n    top: 4px;\r\n    left: 4px; /* LTR */\r\n    width: 37px;\r\n    height: 37px;\r\n    border-radius: 5px;\r\n}\r\n\r\n.hiprint-option-items .minicolors-theme-bootstrap .minicolors-input.input-sm + .minicolors-swatch {\r\n    width: 24px;\r\n    height: 24px;\r\n}\r\n\r\n.hiprint-option-items .minicolors-theme-bootstrap .minicolors-input.input-xs + .minicolors-swatch {\r\n    width: 18px;\r\n    height: 18px;\r\n}\r\n\r\n.hiprint-option-items .input-group .minicolors-theme-bootstrap:not(:first-child) .minicolors-input {\r\n    border-top-left-radius: 0; /* LTR */\r\n    border-bottom-left-radius: 0; /* LTR */\r\n}\r\n\r\n\r\n\r\n/*hitable reizer*/\r\n.hitable {\r\n}\r\n\r\n\r\n\r\n    .hitable .selected {\r\n        background: #3e66ad;\r\n    }\r\n\r\n\r\n    /*resizer*/\r\n    .hitable tr.resizerRow,\r\n    .hitable .resizerRow td {\r\n        border: 0pt dashed;\r\n        height: 0pt;\r\n        background: #fff;\r\n    }\r\n\r\n        .hitable tr.resizerRow + tr,\r\n        .hitable tr.resizerRow + tr td {\r\n            border-top: 0px !important;\r\n        }\r\n\r\n    .hitable td.resizerColumn {\r\n        border: 0pt dashed;\r\n        width: 0.000001px !important;\r\n        background: #fff;\r\n    }\r\n\r\n\r\n        .hitable td.resizerColumn + td {\r\n            border-left: 0px !important;\r\n        }\r\n\r\n\r\n/*GRIP*/\r\n\r\n.columngrips {\r\n    height: 0px;\r\n    position: absolute;\r\n}\r\n\r\n.columngrip {\r\n    margin-left: -5px;\r\n    position: absolute;\r\n    z-index: 5;\r\n    width: 10px;\r\n}\r\n\r\n    .columngrip .gripResizer {\r\n        position: absolute;\r\n        filter: alpha(opacity=1);\r\n        opacity: 0;\r\n        width: 10px;\r\n        height: 100%;\r\n        cursor: col-resize;\r\n        top: 0px;\r\n    }\r\n\r\n.columngripDraging {\r\n    border-left: 1px dotted black;\r\n}\r\n\r\n.rowgrips {\r\n    height: 0px;\r\n    width: 0px;\r\n    position: absolute;\r\n}\r\n\r\n.rowgrip {\r\n    margin-top: -5px;\r\n    position: absolute;\r\n    z-index: 5;\r\n    height: 10px;\r\n}\r\n\r\n    .rowgrip .gripResizer {\r\n        position: absolute;\r\n        filter: alpha(opacity=1);\r\n        opacity: 0;\r\n        height: 10px;\r\n        width: 100%;\r\n        cursor: row-resize;\r\n        left: 0px;\r\n    }\r\n\r\n.rowgripDraging {\r\n    border-top: 1px dotted black;\r\n}\r\n\r\n.hitable .hitable-editor-text {\r\n    border: 1px solid;\r\n    width: 95%;\r\n    height: 80%;\r\n}\r\n\r\n\r\n\r\n\r\n.hipanel-disable {\r\n    height: 0px;\r\n    display: block !important;\r\n    top: 8500px;\r\n    width: 0px;\r\n    overflow: hidden;\r\n    position: absolute;\r\n}\r\n\r\n.hiprint_rul_wrapper {\r\n    position: absolute;\r\n    height: 100%;\r\n    width: 100%;\r\n    overflow: hidden;\r\n    pointer-events: none;\r\n    border: 0;\r\n    border-top: 1px solid rgb(201, 190, 190);\r\n    border-left: 1px solid rgb(201, 190, 190);\r\n    padding-left: 15px;\r\n    margin: -16px\r\n}\r\n\r\n    .hiprint_rul_wrapper .h_img {\r\n        position: absolute;\r\n        top: 0px;\r\n        left: 15px;\r\n        width: 400mm;\r\n        height: 15px;\r\n    }\r\n\r\n    .hiprint_rul_wrapper .v_img {\r\n        width: 400mm;\r\n        transform: rotate(90deg);\r\n        transform-origin: 0 100%;\r\n        height: 15px;\r\n        position: absolute;\r\n        top: -2px;\r\n        left: 0px;\r\n    }\r\n\r\n/*hiprint-option-table*/\r\n\r\n.hiprint-option-table-selected-columns {\r\n    color: inherit;\r\n    background-color: transparent;\r\n    box-sizing: border-box;\r\n    width: 100%;\r\n    position: relative;\r\n    padding: 0px;\r\n    list-style: none;\r\n}\r\n\r\n    .hiprint-option-table-selected-columns .hiprint-option-table-selected-item {\r\n        color: inherit;\r\n        background-color: transparent;\r\n        box-sizing: border-box;\r\n        width: 100%;\r\n        padding: 0 3px;\r\n        border: 1px solid rgb(169, 169, 169);\r\n        line-height: 19pt;\r\n        margin: 3px 0;\r\n    }\r\n/*hi-pretty */\r\n.hi-pretty * {\r\n    box-sizing: border-box;\r\n}\r\n\r\n.hi-pretty input:not([type='checkbox']):not([type='radio']) {\r\n    display: none;\r\n}\r\n\r\n.hi-pretty {\r\n    position: relative;\r\n    display: inline-block;\r\n    margin-right: 1em;\r\n    white-space: nowrap;\r\n    line-height: 1;\r\n}\r\n\r\n    .hi-pretty input {\r\n        position: absolute;\r\n        left: 0;\r\n        top: 0;\r\n        min-width: 1em;\r\n        width: 100%;\r\n        height: 100%;\r\n        z-index: 2;\r\n        opacity: 0;\r\n        margin: 0;\r\n        padding: 0;\r\n        cursor: pointer;\r\n    }\r\n\r\n    .hi-pretty .state label {\r\n        position: initial;\r\n        display: inline-block;\r\n        font-weight: normal;\r\n        margin: 0;\r\n        text-indent: 1.5em;\r\n        min-width: calc(1em + 2px);\r\n    }\r\n\r\n        .hi-pretty .state label:before,\r\n        .hi-pretty .state label:after {\r\n            content: '';\r\n            width: calc(1em + 2px);\r\n            height: calc(1em + 2px);\r\n            display: block;\r\n            box-sizing: border-box;\r\n            border-radius: 0;\r\n            border: 1px solid transparent;\r\n            z-index: 0;\r\n            position: absolute;\r\n            left: 0;\r\n            top: calc((0% - (100% - 1em)) - 8%);\r\n            background-color: transparent;\r\n        }\r\n\r\n        .hi-pretty .state label:before {\r\n            border-color: #bdc3c7;\r\n        }\r\n\r\n    .hi-pretty .state.p-is-hover,\r\n    .hi-pretty .state.p-is-indeterminate {\r\n        display: none;\r\n    }\r\n\r\n\r\n    .hi-pretty.p-default.p-fill .state label:after {\r\n        -webkit-transform: scale(1);\r\n        -ms-transform: scale(1);\r\n        transform: scale(1);\r\n    }\r\n\r\n    .hi-pretty.p-default .state label:after {\r\n        -webkit-transform: scale(0.6);\r\n        -ms-transform: scale(0.6);\r\n        transform: scale(0.6);\r\n    }\r\n\r\n    .hi-pretty.p-default input:checked ~ .state label:after {\r\n        background-color: #bdc3c7 !important;\r\n    }\r\n\r\n    .hi-pretty.p-default.p-thick .state label:before,\r\n    .hi-pretty.p-default.p-thick .state label:after {\r\n        border-width: calc(1em / 7);\r\n    }\r\n\r\n    .hi-pretty.p-default.p-thick .state label:after {\r\n        -webkit-transform: scale(0.4) !important;\r\n        -ms-transform: scale(0.4) !important;\r\n        transform: scale(0.4) !important;\r\n    }\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(2);
            var content = __webpack_require__(6);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\r\n@media print {\r\n    body {\r\n        margin: 0px;\r\n        padding: 0px;\r\n    }\r\n}\r\n\r\n@page {\r\n    margin: 0;\r\n}\r\n\r\n.hiprint-printPaper * {\r\n    box-sizing: border-box;\r\n    -moz-box-sizing: border-box; /* Firefox */\r\n    -webkit-box-sizing: border-box; /* Safari */\r\n   \r\n}\r\n\r\n    .hiprint-printPaper *:focus {\r\n        outline: -webkit-focus-ring-color auto 0px;\r\n    }\r\n\r\n\r\n.hiprint-page-break-avoid {\r\n    page-break-after: avoid;\r\n}\r\n.hiprint-printPaper {\r\n    position: relative;\r\n    padding: 0 0 0 0;\r\n    page-break-after: always;\r\n    overflow-x: hidden;\r\n    overflow: hidden;\r\n}\r\n    .hiprint-printPaper .hiprint-printPaper-content {\r\n        position: relative;\r\n    }\r\n.hiprint-printPaper.design {\r\n    overflow: visible;\r\n}\r\n\r\n\r\n\r\n.hiprint-printTemplate .hiprint-printPanel {\r\n    page-break-after: always;\r\n}\r\n\r\n.hiprint-printPaper, hiprint-printPanel {\r\n    box-sizing: border-box;\r\n    border: 0px;\r\n}\r\n\r\n.hiprint-printPanel .hiprint-printPaper:last-child {\r\n    page-break-after: avoid;\r\n}\r\n\r\n.hiprint-printTemplate .hiprint-printPanel:last-child {\r\n    page-break-after: avoid;\r\n}\r\n\r\n.hiprint-printPaper .hideheaderLinetarget {\r\n    border-top: 0px dashed rgb(201, 190, 190) !important;\r\n}\r\n\r\n.hiprint-printPaper .hidefooterLinetarget {\r\n    border-top: 0px dashed rgb(201, 190, 190) !important;\r\n}\r\n\r\n.hiprint-printPaper.design {\r\n    border: 1px dashed rgba(170,170,170,0.7);\r\n}\r\n\r\n.design .hiprint-printElement-table-content, .design .hiprint-printElement-longText-content {\r\n    overflow: hidden;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.design .resize-panel {\r\n    box-sizing: border-box;\r\n    border: 1px dotted;\r\n}\r\n\r\n.hiprint-printElement-text {\r\n    background-color: transparent;\r\n    background-repeat: repeat;\r\n    padding: 0 0 0 0;\r\n    border: 0.75pt none rgb(0,0,0);\r\n    direction: ltr;\r\n    font-family: 'SimSun';\r\n    font-size: 9pt;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    padding-bottom: 0pt;\r\n    padding-left: 0pt;\r\n    padding-right: 0pt;\r\n    padding-top: 0pt;\r\n    text-align: left;\r\n    text-decoration: none;\r\n    line-height: 9.75pt;\r\n    box-sizing: border-box;\r\n    word-wrap: break-word;\r\n    word-break: break-all;\r\n}\r\n\r\n.design .hiprint-printElement-text-content {\r\n    border: 1px dashed rgb(206, 188, 188);\r\n    box-sizing: border-box;\r\n}\r\n\r\n.hiprint-printElement-longText {\r\n    background-color: transparent;\r\n    background-repeat: repeat;\r\n    border: 0.75pt none rgb(0,0,0);\r\n    direction: ltr;\r\n    font-family: 'SimSun';\r\n    font-size: 9pt;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    padding-bottom: 0pt;\r\n    padding-left: 0pt;\r\n    padding-right: 0pt;\r\n    padding-top: 0pt;\r\n    text-align: left;\r\n    text-decoration: none;\r\n    line-height: 9.75pt;\r\n    box-sizing: border-box;\r\n    word-wrap: break-word;\r\n    word-break: break-all;\r\n    /*white-space: pre-wrap*/\r\n}\r\n\r\n\r\n\r\n.hiprint-printElement-table {\r\n    background-color: transparent;\r\n    background-repeat: repeat;\r\n    color: rgb(0,0,0);\r\n    border-color: rgb(0,0,0);\r\n    border-style: none;\r\n    direction: ltr;\r\n    font-family: 'SimSun';\r\n    font-size: 9pt;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    padding-bottom: 0pt;\r\n    padding-left: 0pt;\r\n    padding-right: 0pt;\r\n    padding-top: 0pt;\r\n    text-align: left;\r\n    text-decoration: none;\r\n    padding: 0 0 0 0;\r\n    box-sizing: border-box;\r\n    line-height: 9.75pt;\r\n}\r\n\r\n    .hiprint-printElement-table thead {\r\n        background: #e8e8e8;\r\n        font-weight: 700;\r\n    }\r\n\r\n.hiprint-printElement-tableTarget, .hiprint-printElement-tableTarget tr, .hiprint-printElement-tableTarget td {\r\n    border-color: rgb(0,0,0);\r\n    border-style: none;\r\n    border: 1px solid rgb(0,0,0);\r\n    font-weight: normal;\r\n    direction: ltr;\r\n    padding-bottom: 0pt;\r\n    padding-left: 0pt;\r\n    padding-right: 0pt;\r\n    padding-top: 0pt;\r\n    text-decoration: none;\r\n    vertical-align: middle;\r\n    box-sizing: border-box;\r\n    word-wrap: break-word;\r\n    word-break: break-all;\r\n    /*line-height: 9.75pt;\r\n    font-size: 9pt;*/\r\n}\r\n\r\n    /*.hiprint-printElement-tableTarget tr,*/\r\n    .hiprint-printElement-tableTarget td {\r\n        height: 18pt;\r\n    }\r\n\r\n.hiprint-printPaper .hiprint-paperNumber {\r\n    font-size: 9pt;\r\n}\r\n\r\n.design .hiprint-printElement-table-handle {\r\n    position: absolute;\r\n    height: 21pt;\r\n    width: 21pt;\r\n    background: red;\r\n    z-index:1;\r\n}\r\n\r\n.hiprint-printPaper .hiprint-paperNumber-disabled {\r\n    float: right !important;\r\n    right: 0 !important;\r\n    color: gainsboro !important;\r\n}\r\n\r\n.hiprint-printElement-vline, .hiprint-printElement-hline {\r\n    border: 0px none rgb(0,0,0);\r\n    \r\n}\r\n.hiprint-printElement-vline {\r\n    border-left: 0.75pt solid #000;\r\n    border-right: 0px none rgb(0,0,0) !important;\r\n    border-bottom: 0px none rgb(0,0,0) !important;\r\n    border-top: 0px none rgb(0,0,0) !important;\r\n}\r\n\r\n.hiprint-printElement-hline {\r\n    border-top: 0.75pt solid #000;\r\n    border-right: 0px none rgb(0,0,0) !important;\r\n    border-bottom: 0px none rgb(0,0,0) !important;\r\n    border-left: 0px none rgb(0,0,0) !important;\r\n}\r\n\r\n.hiprint-printElement-oval, .hiprint-printElement-rect {\r\n    border: 0.75pt solid #000;\r\n}\r\n\r\n.hiprint-text-content-middle {\r\n    display:table;\r\n}\r\n.hiprint-text-content-middle>div {\r\n    display: table-cell;\r\n    vertical-align:middle\r\n}\r\n\r\n.hiprint-text-content-bottom {\r\n    display: table;\r\n}\r\n\r\n    .hiprint-text-content-bottom > div {\r\n        display: table-cell;\r\n        vertical-align: bottom\r\n    }\r\n\r\n/*hi-grid-row */\r\n.hi-grid-row {\r\n    position: relative;\r\n    height: auto;\r\n    margin-right: 0;\r\n    margin-left: 0;\r\n    zoom: 1;\r\n    display: block;\r\n    box-sizing: border-box;\r\n}\r\n\r\n    .hi-grid-row::after, .hi-grid-row::before {\r\n        display: table;\r\n        content: '';\r\n        box-sizing: border-box;\r\n    }\r\n\r\n.hi-grid-col {\r\n    display: block;\r\n    box-sizing: border-box;\r\n    position: relative;\r\n    float: left;\r\n    flex: 0 0 auto;\r\n}\r\n\r\n.table-grid-row {\r\n    margin-left: -0pt;\r\n    margin-right: -0pt;\r\n}\r\n\r\n.tableGridColumnsGutterRow {\r\n    padding-left: 0pt;\r\n    padding-right: 0pt;\r\n}\r\n.hiprint-gridColumnsFooter {\r\n    text-align: left;\r\n    clear: both;\r\n}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jsbarcode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var jsbarcode__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsbarcode__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var qrcodejs2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59);
/* harmony import */ var qrcodejs2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(qrcodejs2__WEBPACK_IMPORTED_MODULE_2__);
/**
 * jQuery Hiprint 2.5.3
 * 
 * Copyright (c) 2016-2019 www.hinnn.com. All rights reserved.
 *
 * Licensed under the LGPL or commercial licenses
 * To use it on other terms please contact us: hinnn.com@gmail.com
 *
 */





function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var hiprint = function (t) {
    var e = {};

    function n(i) {
        if (e[i]) return e[i].exports;
        var o = e[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return t[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
    }

    return n.m = t, n.c = e, n.d = function (t, e, i) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: i
        });
    }, n.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        });
    }, n.t = function (t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == _typeof(t) && t && t.__esModule) return t;
        var i = Object.create(null);
        if (n.r(i), Object.defineProperty(i, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t) for (var o in t) {
            n.d(i, o, function (e) {
                return t[e];
            }.bind(null, o));
        }
        return i;
    }, n.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default;
        } : function () {
            return t;
        };
        return n.d(e, "a", e), e;
    }, n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
    }, n.p = "/", n(n.s = 21);
}([function (t, e, n) {
    "use strict";

    var i;
    n.d(e, "a", function () {
        return hinnn;
    }), window.hinnn = {}, hinnn.event = (i = {}, {
        on: function on(t, e) {
            i[t] || (i[t] = []), i[t].push(e);
        },
        id: 0,
        off: function off(t, e) {
            var n = i[t];

            if (n) {
                for (var o = -1, r = 0; r < n.length; r++) {
                    if (n[r] === e) {
                        o = r;
                        break;
                    }
                }

                o < 0 || i[t].splice(o, 1);
            }
        },
        trigger: function trigger(t) {
            var e = i[t];
            if (e && e.length) for (var n = Array.prototype.slice.call(arguments, 1), o = 0; o < e.length; o++) {
                e[o].apply(this, n);
            }
        },
        clear: function clear(t) {
            i[t] = [];
        },
        getId: function getId() {
            return this.id += 1, this.id;
        },
        getNameWithId: function getNameWithId(t) {
            return t + "-" + this.getId();
        }
    }), hinnn.form = {
        serialize: function serialize(t) {
            var e = jquery__WEBPACK_IMPORTED_MODULE_0___default()(t).serializeArray(),
                n = {};
            return jquery__WEBPACK_IMPORTED_MODULE_0___default.a.each(e, function () {
                n[this.name] ? "[object Array]" == Object.prototype.toString.call(n[this.name]) ? n[this.name].push(this.value) : n[this.name] = [n[this.name], this.value] : n[this.name] = this.value;
            }), n;
        }
    }, hinnn.pt = {
        toPx: function toPx(t) {
            return t * (this.getDpi() / 72);
        },
        dpi: 0,
        getDpi: function getDpi() {
            if (!this.dpi) {
                var _t2 = document.createElement("DIV");

                _t2.style.cssText = "width:1in;height:1in;position:absolute;left:0px;top:0px;z-index:99;visibility:hidden", document.body.appendChild(_t2), this.dpi = _t2.offsetHeight;
            }

            return this.dpi;
        }
    }, hinnn.px = {
        toPt: function toPt(t) {
            return t * (72 / this.getDpi());
        },
        dpi: 0,
        getDpi: function getDpi() {
            if (!this.dpi) {
                var _t3 = document.createElement("DIV");

                _t3.style.cssText = "width:1in;height:1in;position:absolute;left:0px;top:0px;z-index:99;visibility:hidden", document.body.appendChild(_t3), this.dpi = _t3.offsetHeight;
            }

            return this.dpi;
        }
    }, hinnn.mm = {
        toPt: function toPt(t) {
            return 72 / 25.4 * t;
        },
        toPx: function toPx(t) {
            return hinnn.pt.toPx(hinnn.mm.toPt(t));
        }
    }, hinnn.throttle = function (t, e, n) {
        var i,
            o,
            r,
            a = null,
            p = 0;
        n || (n = {});

        var s = function s() {
            p = !1 === n.leading ? 0 : _.now(), a = null, r = t.apply(i, o), a || (i = o = null);
        };

        return function () {
            var l = _.now();

            p || !1 !== n.leading || (p = l);
            var u = e - (l - p);
            return i = this, o = arguments, u <= 0 || u > e ? (a && (clearTimeout(a), a = null), p = l, r = t.apply(i, o), a || (i = o = null)) : a || !1 === n.trailing || (a = setTimeout(s, u)), r;
        };
    }, hinnn.debounce = function (t, e, n) {
        var i,
            o,
            r,
            a,
            p,
            s = function s() {
                var l = _.now() - a;
                l < e && l >= 0 ? i = setTimeout(s, e - l) : (i = null, n || (p = t.apply(r, o), i || (r = o = null)));
            };

        return function () {
            r = this, o = arguments, a = _.now();
            var l = n && !i;
            return i || (i = setTimeout(s, e)), l && (p = t.apply(r, o), r = o = null), p;
        };
    }, hinnn.toUtf8 = function (t) {
        var e, n, i, o;

        for (e = "", i = t.length, n = 0; n < i; n++) {
            (o = t.charCodeAt(n)) >= 1 && o <= 127 ? e += t.charAt(n) : o > 2047 ? (e += String.fromCharCode(224 | o >> 12 & 15), e += String.fromCharCode(128 | o >> 6 & 63), e += String.fromCharCode(128 | o >> 0 & 63)) : (e += String.fromCharCode(192 | o >> 6 & 31), e += String.fromCharCode(128 | o >> 0 & 63));
        }

        return e;
    }, hinnn.groupBy = function (t, e, n) {
        var i = {};
        return t.forEach(function (t) {
            var o = JSON.stringify(n(t));
            i[o] || (i[o] = {
                rows: []
            }, e.forEach(function (e) {
                i[o][e] = t[e];
            })), i[o].rows.push(t);
        }), Object.keys(i).map(function (t) {
            return i[t];
        });
    }, hinnn.orderBy = function (t, e) {
        if (t.length <= 1) return t;
        var n = Math.floor(t.length / 2),
            i = t.splice(n, 1)[0],
            o = [],
            r = [];
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = t[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var _n = _step.value;
                e(_n) < e(i) ? o.push(_n) : r.push(_n);
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        return this.orderBy(o, e).concat([i], this.orderBy(r, e));
    }, hinnn.dateFormat = function (t, e) {
        if (t) try {
            var o = "string" == typeof t ? new Date(t) : t;
            var n = {
                "M+": o.getMonth() + 1,
                "d+": o.getDate(),
                "H+": o.getHours(),
                "m+": o.getMinutes(),
                "s+": o.getSeconds(),
                "q+": Math.floor((o.getMonth() + 3) / 3),
                S: o.getMilliseconds()
            };

            for (var i in /(y+)/.test(e) && (e = e.replace(RegExp.$1, (o.getFullYear() + "").substr(4 - RegExp.$1.length))), n) {
                new RegExp("(" + i + ")").test(e) && (e = e.replace(RegExp.$1, 1 == RegExp.$1.length ? n[i] : ("00" + n[i]).substr(("" + n[i]).length)));
            }

            return e;
        } catch (t) {
            return console.log(t), "";
        }
        return "";
    };
}, function (t, e, n) {
    "use strict";

    n.d(e, "a", function () {
        return o;
    });

    var i = n(9),
        o = function () {
            function t() {
                this.providers = [], this.movingDistance = 1.5, this.paperHeightTrim = 1, this.text = {
                    supportOptions: [{
                        name: "title",
                        hidden: !1,
                        title: ""
                    }, {
                        name: "field",
                        hidden: !1
                    }, {
                        name: "testData",
                        hidden: !1
                    }, {
                        name: "dataType",
                        hidden: !1
                    }, {
                        name: "fontFamily",
                        hidden: !1
                    }, {
                        name: "fontSize",
                        hidden: !1
                    }, {
                        name: "fontWeight",
                        hidden: !1
                    }, {
                        name: "letterSpacing",
                        hidden: !1
                    }, {
                        name: "color",
                        hidden: !1
                    }, {
                        name: "textDecoration",
                        hidden: !1
                    }, {
                        name: "textAlign",
                        hidden: !1
                    }, {
                        name: "textContentVerticalAlign",
                        hidden: !1
                    }, {
                        name: "lineHeight",
                        hidden: !1
                    }, {
                        name: "textType",
                        hidden: !1
                    }, {
                        name: "barcodeMode",
                        hidden: !1
                    }, {
                        name: "hideTitle",
                        hidden: !1
                    }, {
                        name: "showInPage",
                        hidden: !1
                    }, {
                        name: "unShowInPage",
                        hidden: !1
                    }, {
                        name: "fixed",
                        hidden: !1
                    }, {
                        name: "axis",
                        hidden: !1
                    }, {
                        name: "transform",
                        hidden: !1
                    }, {
                        name: "optionsGroup",
                        hidden: !1
                    }, {
                        name: "borderLeft",
                        hidden: !1
                    }, {
                        name: "borderTop",
                        hidden: !1
                    }, {
                        name: "borderRight",
                        hidden: !1
                    }, {
                        name: "borderBottom",
                        hidden: !1
                    }, {
                        name: "borderWidth",
                        hidden: !1
                    }, {
                        name: "borderColor",
                        hidden: !1
                    }, {
                        name: "contentPaddingLeft",
                        hidden: !1
                    }, {
                        name: "contentPaddingTop",
                        hidden: !1
                    }, {
                        name: "contentPaddingRight",
                        hidden: !1
                    }, {
                        name: "contentPaddingBottom",
                        hidden: !1
                    }, {
                        name: "backgroundColor",
                        hidden: !1
                    }, {
                        name: "formatter",
                        hidden: !1
                    }, {
                        name: "styler",
                        hidden: !1
                    }],
                    default: {
                        fontFamily: void 0,
                        fontSize: void 0,
                        fontWeight: "",
                        letterSpacing: void 0,
                        textAlign: void 0,
                        textType: "text",
                        hideTitle: !1,
                        height: 9.75,
                        lineHeight: void 0,
                        width: 120
                    }
                }, this.image = {
                    supportOptions: [{
                        name: "field",
                        hidden: !1
                    }, {
                        name: "src",
                        hidden: !1
                    }, {
                        name: "showInPage",
                        hidden: !1
                    }, {
                        name: "fixed",
                        hidden: !1
                    }, {
                        name: "axis",
                        hidden: !1
                    }, {
                        name: "transform",
                        hidden: !1
                    }, {
                        name: "formatter",
                        hidden: !1
                    }, {
                        name: "styler",
                        hidden: !1
                    }],
                    default: {}
                }, this.longText = {
                    supportOptions: [{
                        name: "title",
                        hidden: !1
                    }, {
                        name: "field",
                        hidden: !1
                    }, {
                        name: "testData",
                        hidden: !1
                    }, {
                        name: "fontFamily",
                        hidden: !1
                    }, {
                        name: "fontSize",
                        hidden: !1
                    }, {
                        name: "fontWeight",
                        hidden: !1
                    }, {
                        name: "letterSpacing",
                        hidden: !1
                    }, {
                        name: "textAlign",
                        hidden: !1
                    }, {
                        name: "lineHeight",
                        hidden: !1
                    }, {
                        name: "color",
                        hidden: !1
                    }, {
                        name: "hideTitle",
                        hidden: !1
                    }, {
                        name: "longTextIndent",
                        hidden: !1
                    }, {
                        name: "leftSpaceRemoved",
                        hidden: !1
                    }, {
                        name: "showInPage",
                        hidden: !1
                    }, {
                        name: "unShowInPage",
                        hidden: !1
                    }, {
                        name: "fixed",
                        hidden: !1
                    }, {
                        name: "axis",
                        hidden: !1
                    }, {
                        name: "lHeight",
                        hidden: !1
                    }, {
                        name: "transform",
                        hidden: !1
                    }, {
                        name: "optionsGroup",
                        hidden: !1
                    }, {
                        name: "borderLeft",
                        hidden: !1
                    }, {
                        name: "borderTop",
                        hidden: !1
                    }, {
                        name: "borderRight",
                        hidden: !1
                    }, {
                        name: "borderBottom",
                        hidden: !1
                    }, {
                        name: "borderWidth",
                        hidden: !1
                    }, {
                        name: "borderColor",
                        hidden: !1
                    }, {
                        name: "contentPaddingLeft",
                        hidden: !1
                    }, {
                        name: "contentPaddingTop",
                        hidden: !1
                    }, {
                        name: "contentPaddingRight",
                        hidden: !1
                    }, {
                        name: "contentPaddingBottom",
                        hidden: !1
                    }, {
                        name: "backgroundColor",
                        hidden: !1
                    }, {
                        name: "formatter",
                        hidden: !1
                    }, {
                        name: "styler",
                        hidden: !1
                    }],
                    default: {
                        fontFamily: void 0,
                        fontSize: void 0,
                        fontWeight: "",
                        letterSpacing: void 0,
                        textAlign: void 0,
                        hideTitle: !1,
                        height: 42,
                        lineHeight: void 0,
                        width: 550
                    }
                }, this.table = {
                    supportOptions: [{
                        name: "field",
                        hidden: !1
                    }, {
                        name: "fontFamily",
                        hidden: !1
                    }, {
                        name: "fontSize",
                        hidden: !1
                    }, {
                        name: "lineHeight",
                        hidden: !1
                    }, {
                        name: "textAlign",
                        hidden: !1
                    }, {
                        name: "gridColumns",
                        hidden: !1
                    }, {
                        name: "gridColumnsGutter",
                        hidden: !1
                    }, {
                        name: "tableBorder",
                        hidden: !1
                    }, {
                        name: "tableHeaderBorder",
                        hidden: !1
                    }, {
                        name: "tableHeaderCellBorder",
                        hidden: !1
                    }, {
                        name: "tableHeaderRowHeight",
                        hidden: !1
                    }, {
                        name: "tableHeaderBackground",
                        hidden: !1
                    }, {
                        name: "tableHeaderFontSize",
                        hidden: !1
                    }, {
                        name: "tableHeaderFontWeight",
                        hidden: !1
                    }, {
                        name: "tableBodyRowHeight",
                        hidden: !1
                    }, {
                        name: "tableBodyRowBorder",
                        hidden: !1
                    }, {
                        name: "tableBodyCellBorder",
                        hidden: !1
                    }, {
                        name: "axis",
                        hidden: !1
                    }, {
                        name: "lHeight",
                        hidden: !1
                    }, {
                        name: "autoCompletion",
                        hidden: !1
                    }, {
                        name: "columns",
                        hidden: !1
                    }, {
                        name: "styler",
                        hidden: !1
                    }, {
                        name: "rowStyler",
                        hidden: !1
                    }, {
                        name: "tableFooterRepeat",
                        hidden: !1
                    }, {
                        name: "footerFormatter",
                        hidden: !1
                    }, {
                        name: "gridColumnsFooterFormatter",
                        hidden: !1
                    }],
                    default: {
                        fontFamily: void 0,
                        fontSize: void 0,
                        fontWeight: "",
                        textAlign: void 0,
                        tableBorder: void 0,
                        tableHeaderBorder: void 0,
                        tableHeaderCellBorder: void 0,
                        tableHeaderBackground: void 0,
                        tableHeaderRowHeight: void 0,
                        tableHeaderFontWeight: void 0,
                        tableBodyCellBorder: void 0,
                        tableBodyRowHeight: void 0,
                        letterSpacing: "",
                        lineHeight: void 0,
                        width: 550
                    }
                }, this.tableCustom = {
                    supportOptions: [{
                        name: "field",
                        hidden: !1
                    }, {
                        name: "fontFamily",
                        hidden: !1
                    }, {
                        name: "fontSize",
                        hidden: !1
                    }, {
                        name: "textAlign",
                        hidden: !1
                    }, {
                        name: "tableBorder",
                        hidden: !1
                    }, {
                        name: "tableHeaderBorder",
                        hidden: !1
                    }, {
                        name: "tableHeaderCellBorder",
                        hidden: !1
                    }, {
                        name: "tableHeaderRowHeight",
                        hidden: !1
                    }, {
                        name: "tableHeaderFontSize",
                        hidden: !1
                    }, {
                        name: "tableHeaderFontWeight",
                        hidden: !1
                    }, {
                        name: "tableHeaderBackground",
                        hidden: !1
                    }, {
                        name: "tableBodyRowHeight",
                        hidden: !1
                    }, {
                        name: "tableBodyRowBorder",
                        hidden: !1
                    }, {
                        name: "tableBodyCellBorder",
                        hidden: !1
                    }, {
                        name: "axis",
                        hidden: !1
                    }, {
                        name: "lHeight",
                        hidden: !1
                    }, {
                        name: "autoCompletion",
                        hidden: !1
                    }, {
                        name: "tableFooterRepeat",
                        hidden: !1
                    }],
                    default: {
                        fontFamily: void 0,
                        fontSize: void 0,
                        fontWeight: "",
                        textAlign: void 0,
                        tableBorder: void 0,
                        tableHeaderBorder: void 0,
                        tableHeaderCellBorder: void 0,
                        tableHeaderBackground: void 0,
                        tableHeaderRowHeight: void 0,
                        tableHeaderFontWeight: void 0,
                        tableBodyCellBorder: void 0,
                        tableBodyRowHeight: void 0,
                        letterSpacing: "",
                        lineHeight: void 0,
                        width: 550
                    }
                }, this.hline = {
                    supportOptions: [{
                        name: "borderColor",
                        hidden: !1
                    }, {
                        name: "borderWidth",
                        hidden: !1
                    }, {
                        name: "showInPage",
                        hidden: !1
                    }, {
                        name: "fixed",
                        hidden: !1
                    }, {
                        name: "axis",
                        hidden: !1
                    }, {
                        name: "transform",
                        hidden: !1
                    }, {
                        name: "borderStyle",
                        hidden: !1
                    }],
                    default: {
                        borderWidth: .75,
                        height: 9,
                        width: 90
                    }
                }, this.vline = {
                    supportOptions: [{
                        name: "borderColor",
                        hidden: !1
                    }, {
                        name: "borderWidth",
                        hidden: !1
                    }, {
                        name: "showInPage",
                        hidden: !1
                    }, {
                        name: "fixed",
                        hidden: !1
                    }, {
                        name: "axis",
                        hidden: !1
                    }, {
                        name: "transform",
                        hidden: !1
                    }, {
                        name: "borderStyle",
                        hidden: !1
                    }],
                    default: {
                        borderWidth: void 0,
                        height: 90,
                        width: 9
                    }
                }, this.rect = {
                    supportOptions: [{
                        name: "borderColor",
                        hidden: !1
                    }, {
                        name: "borderWidth",
                        hidden: !1
                    }, {
                        name: "showInPage",
                        hidden: !1
                    }, {
                        name: "fixed",
                        hidden: !1
                    }, {
                        name: "axis",
                        hidden: !1
                    }, {
                        name: "transform",
                        hidden: !1
                    }, {
                        name: "borderStyle",
                        hidden: !1
                    }],
                    default: {
                        borderWidth: void 0,
                        height: 90,
                        width: 90
                    }
                }, this.oval = {
                    supportOptions: [{
                        name: "borderColor",
                        hidden: !1
                    }, {
                        name: "borderWidth",
                        hidden: !1
                    }, {
                        name: "showInPage",
                        hidden: !1
                    }, {
                        name: "fixed",
                        hidden: !1
                    }, {
                        name: "axis",
                        hidden: !1
                    }, {
                        name: "transform",
                        hidden: !1
                    }, {
                        name: "borderStyle",
                        hidden: !1
                    }],
                    default: {
                        borderWidth: void 0,
                        height: 90,
                        width: 90
                    }
                }, this.html = {
                    supportOptions: [{
                        name: "showInPage",
                        hidden: !1
                    }, {
                        name: "unShowInPage",
                        hidden: !1
                    }, {
                        name: "fixed",
                        hidden: !1
                    }, {
                        name: "axis",
                        hidden: !1
                    }, {
                        name: "formatter",
                        hidden: !1
                    }],
                    default: {
                        height: 90,
                        width: 90
                    }
                }, this.tableColumn = {
                    supportOptions: [{
                        name: "title",
                        hidden: !1
                    }, {
                        name: "align",
                        hidden: !1
                    }, {
                        name: "halign",
                        hidden: !1
                    }, {
                        name: "vAlign",
                        hidden: !1
                    }, {
                        name: "paddingLeft",
                        hidden: !1
                    }, {
                        name: "paddingRight",
                        hidden: !1
                    }, {
                        name: "formatter2",
                        hidden: !1
                    }, {
                        name: "styler2",
                        hidden: !1
                    }],
                    default: {
                        height: 90,
                        width: 90
                    }
                };
            }

            return t.prototype.init = function (t) {
                t && jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend(this, t);
            }, Object.defineProperty(t, "instance", {
                get: function get() {
                    return t._instance || (t._instance = new t(), window.HIPRINT_CONFIG && jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend(t._instance, HIPRINT_CONFIG), t._instance.optionItems && t._instance.optionItems.forEach(function (t) {
                        i.a.registerItem(t);
                    })), t._instance;
                },
                enumerable: !0,
                configurable: !0
            }), t;
        }();
}, function (t, e, n) {
    "use strict";

    var i = function () {
        function t(t) {
            this.printElement = t;
        }

        return t.prototype.updatePosition = function (t, e) {
            this.left = t, this.top = e;
        }, t;
    }();

    n.d(e, "a", function () {
        return o;
    });

    var o = function () {
        function t() {
            this.printTemplateContainer = {}, this.A1 = {
                width: 841,
                height: 594
            }, this.A2 = {
                width: 420,
                height: 594
            }, this.A3 = {
                width: 420,
                height: 297
            }, this.A4 = {
                width: 210,
                height: 297
            }, this.A5 = {
                width: 210,
                height: 148
            }, this.A6 = {
                width: 105,
                height: 148
            }, this.A7 = {
                width: 105,
                height: 74
            }, this.A8 = {
                width: 52,
                height: 74
            }, this.B1 = {
                width: 1e3,
                height: 707
            }, this.B2 = {
                width: 500,
                height: 707
            }, this.B3 = {
                width: 500,
                height: 353
            }, this.B4 = {
                width: 250,
                height: 353
            }, this.B5 = {
                width: 250,
                height: 176
            }, this.B6 = {
                width: 125,
                height: 176
            }, this.B7 = {
                width: 125,
                height: 88
            }, this.B8 = {
                width: 62,
                height: 88
            }, this.dragLengthCNum = function (t, e) {
                var n = .75 * t;
                return e && (e = e), Math.round(n / e) * e;
            };
        }

        return Object.defineProperty(t, "instance", {
            get: function get() {
                return this._instance || (this._instance = new t()), this._instance;
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.getDragingPrintElement = function () {
            return t.instance.dragingPrintElement;
        }, t.prototype.setDragingPrintElement = function (e) {
            t.instance.dragingPrintElement = new i(e);
        }, t.prototype.guid = function () {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (t) {
                var e = 16 * Math.random() | 0;
                return ("x" == t ? e : 3 & e | 8).toString(16);
            });
        }, t.prototype.imageToBase64 = function (t) {
            if (-1 == jquery__WEBPACK_IMPORTED_MODULE_0___default()(t).attr("src").indexOf("base64")) try {
                var e = document.createElement("canvas"),
                    n = new Image();
                n.src = t.attr("src"), e.width = n.width, e.height = n.height, e.getContext("2d").drawImage(n, 0, 0), t.attr("src", e.toDataURL("image/png"));
            } catch (e) {
                try {
                    this.xhrLoadImage(t);
                } catch (t) {
                    console.log(t);
                }
            }
        }, t.prototype.xhrLoadImage = function (t) { }, t.prototype.transformImg = function (t) {
            var e = this;
            t.map(function (t, n) {
                e.imageToBase64(jquery__WEBPACK_IMPORTED_MODULE_0___default()(n));
            });
        }, t.prototype.getPrintTemplateById = function (e) {
            return t.instance.printTemplateContainer[e];
        }, t.prototype.setPrintTemplateById = function (e, n) {
            return t.instance.printTemplateContainer[e] = n;
        }, t;
    }();
}, function (t, e, n) {
    "use strict";

    var i = function () {
        return function () { };
    }();

    n.d(e, "a", function () {
        return o;
    });

    var o = function () {
        function t(t) {
            t = t || {}, this.left = t.left, this.top = t.top, this.topInDesign = this.top, this.height = t.height, this.width = t.width, this.init(t);
        }

        return t.prototype.setDefault = function (t) {
            this.defaultOptions = t, this.initSize();
        }, t.prototype.initSize = function () {
            this.width || this.setWidth(this.defaultOptions.width), this.height || this.setHeight(this.defaultOptions.height);
        }, t.prototype.initSizeByHtml = function (t, e) {
            this.width || this.setWidth(t), this.height || this.setHeight(e);
        }, t.prototype.getLeft = function () {
            return this.left;
        }, t.prototype.displayLeft = function () {
            return this.left + "pt";
        }, t.prototype.setLeft = function (t) {
            null != t && (this.left = t);
        }, t.prototype.getTop = function () {
            return this.top;
        }, t.prototype.getTopInDesign = function () {
            return this.topInDesign;
        }, t.prototype.displayTop = function () {
            return this.top + "pt";
        }, t.prototype.setTop = function (t) {
            null != t && (this.top = t);
        }, t.prototype.copyDesignTopFromTop = function () {
            this.topInDesign = this.top;
        }, t.prototype.getHeight = function () {
            return this.height;
        }, t.prototype.displayHeight = function () {
            return this.height + "pt";
        }, t.prototype.setHeight = function (t) {
            null != t && (this.height = t);
        }, t.prototype.getWidth = function () {
            return this.width;
        }, t.prototype.displayWidth = function () {
            return this.width + "pt";
        }, t.prototype.setWidth = function (t) {
            null != t && (this.width = t);
        }, t.prototype.getValueFromOptionsOrDefault = function (t) {
            return null == this[t] ? this.defaultOptions[t] : this[t];
        }, t.prototype.getPrintElementOptionEntity = function () {
            var t = new i(),
                e = this;
            return Object.keys(this).filter(function (t) {
                return "topInDesign" != t;
            }).forEach(function (n) {
                if ("number" != typeof e[n] && "string" != typeof e[n] && _typeof(e[n]) != _typeof(!0) || (t[n] = e[n]), "style" == n) {
                    t.style = {};
                    var i = e[n];
                    if (i) Object.keys(i).forEach(function (e) {
                        "number" != typeof i[e] && "string" != typeof i[e] || (t.style[e] = i[e]);
                    });
                }
            }), t;
        }, t.prototype.init = function (t) {
            var e = this;
            t && Object.keys(t).forEach(function (n) {
                e[n] = t[n];
            });
        }, t;
    }();
}, function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.d(__webpack_exports__, "a", function () {
        return BasePrintElement;
    });

    var _entity_PrintElementEntity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17),
        _HiPrintConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1),
        _print_element_option_PrintElementOptionItemManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9),
        _dto_PaperHtmlResult__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6),
        _assets_plugins_hinnn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0),
        _PrintReferenceElement__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8),
        _HiPrintlib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2),
        BasePrintElement = function () {
            function BasePrintElement(t) {
                this.printElementType = t, this.id = _HiPrintlib__WEBPACK_IMPORTED_MODULE_6__.a.instance.guid();
            }

            return BasePrintElement.prototype.getConfigOptionsByName = function (t) {
                return _HiPrintConfig__WEBPACK_IMPORTED_MODULE_1__.a.instance[t];
            }, BasePrintElement.prototype.getProxyTarget = function (t) {
                t && this.SetProxyTargetOption(t);
                var e = this.getData(),
                    n = this.createTarget(this.getTitle(), e);
                return this.updateTargetSize(n), this.css(n, e), n;
            }, BasePrintElement.prototype.SetProxyTargetOption = function (t) {
                this.options.getPrintElementOptionEntity();
                jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend(this.options, t);
            }, BasePrintElement.prototype.showInPage = function (t, e) {
                var n = this.options.showInPage,
                    i = this.options.unShowInPage;

                if (n) {
                    if ("first" == n) return 0 == t;
                    if (t == e - 1 && "last" == i) return !1;
                    if ("odd" == n) return (0 != t || "first" != i) && t % 2 == 0;
                    if ("even" == n) return t % 2 == 1;
                    if ("last" == n) return t == e - 1;
                }

                return (0 != t || "first" != i) && (t != e - 1 || "last" != i);
            }, BasePrintElement.prototype.setTemplateId = function (t) {
                this.templateId = t;
            }, BasePrintElement.prototype.setPanel = function (t) {
                this.panel = t;
            }, BasePrintElement.prototype.getField = function () {
                return this.options.field || this.printElementType.field;
            }, BasePrintElement.prototype.getTitle = function () {
                return this.printElementType.title;
            }, BasePrintElement.prototype.updateSizeAndPositionOptions = function (t, e, n, i) {
                this.options.setLeft(t), this.options.setTop(e), this.options.copyDesignTopFromTop(), this.options.setWidth(n), this.options.setHeight(i), _assets_plugins_hinnn__WEBPACK_IMPORTED_MODULE_4__.a.event.trigger("hiprintTemplateDataChanged_" + this.templateId);
            }, BasePrintElement.prototype.initSizeByHtml = function (t) {
                if (t && t.length) {
                    this.createTempContainer();
                    var e = t.clone();
                    this.getTempContainer().append(e), this.options.initSizeByHtml(parseInt(_assets_plugins_hinnn__WEBPACK_IMPORTED_MODULE_4__.a.px.toPt(e.width()).toString()), parseInt(_assets_plugins_hinnn__WEBPACK_IMPORTED_MODULE_4__.a.px.toPt(e.height()).toString())), this.removeTempContainer();
                }
            }, BasePrintElement.prototype.updateTargetSize = function (t) {
                t.css("width", this.options.displayWidth()), t.css("height", this.options.displayHeight());
            }, BasePrintElement.prototype.updateTargetWidth = function (t) {
                t.css("width", this.options.displayWidth());
            }, BasePrintElement.prototype.getDesignTarget = function (t) {
                var e = this;
                return this.designTarget = this.getHtml(t)[0].target, this.designPaper = t, this.designTarget.click(function () {
                    _assets_plugins_hinnn__WEBPACK_IMPORTED_MODULE_4__.a.event.trigger(e.getPrintElementSelectEventKey(), {
                        printElement: e
                    });
                }), this.designTarget;
            }, BasePrintElement.prototype.getPrintElementSelectEventKey = function () {
                return "PrintElementSelectEventKey_" + this.templateId;
            }, BasePrintElement.prototype.design = function (t, e) {
                var n = this;
                this.designTarget.hidraggable({
                    axis: n.options.axis && t && t.axisEnabled ? n.options.axis : void 0,
                    onDrag: function onDrag(t, i, o) {
                        n.updateSizeAndPositionOptions(i, o), n.createLineOfPosition(e);
                    },
                    moveUnit: "pt",
                    minMove: _HiPrintConfig__WEBPACK_IMPORTED_MODULE_1__.a.instance.movingDistance,
                    onBeforeDrag: function onBeforeDrag(t) {
                        _HiPrintlib__WEBPACK_IMPORTED_MODULE_6__.a.instance.draging = !0, n.designTarget.focus(), n.createLineOfPosition(e);
                    },
                    onStopDrag: function onStopDrag(t) {
                        _HiPrintlib__WEBPACK_IMPORTED_MODULE_6__.a.instance.draging = !1, n.removeLineOfPosition();
                    }
                }), this.designTarget.hireizeable({
                    showPoints: n.getReizeableShowPoints(),
                    onBeforeResize: function onBeforeResize() {
                        _HiPrintlib__WEBPACK_IMPORTED_MODULE_6__.a.instance.draging = !0;
                    },
                    onResize: function onResize(t, i, o, r, a) {
                        n.onResize(t, i, o, r, a), n.createLineOfPosition(e);
                    },
                    onStopResize: function onStopResize() {
                        _HiPrintlib__WEBPACK_IMPORTED_MODULE_6__.a.instance.draging = !1, n.removeLineOfPosition();
                    }
                }), this.bingCopyEvent(this.designTarget), this.bingKeyboardMoveEvent(this.designTarget, e);
            }, BasePrintElement.prototype.getPrintElementEntity = function (t) {
                return t ? new _entity_PrintElementEntity__WEBPACK_IMPORTED_MODULE_0__.a(void 0, this.options.getPrintElementOptionEntity(), this.printElementType.getPrintElementTypeEntity()) : new _entity_PrintElementEntity__WEBPACK_IMPORTED_MODULE_0__.a(this.printElementType.tid, this.options.getPrintElementOptionEntity());
            }, BasePrintElement.prototype.submitOption = function () {
                var t = this;
                this.getPrintElementOptionItems().forEach(function (e) {
                    var n = e.getValue();
                    n && "object" == _typeof(n) ? Object.keys(n).forEach(function (e) {
                        t.options[e] = n[e];
                    }) : t.options[e.name] = n;
                }), this.updateDesignViewFromOptions(), _assets_plugins_hinnn__WEBPACK_IMPORTED_MODULE_4__.a.event.trigger("hiprintTemplateDataChanged_" + this.templateId);
            }, BasePrintElement.prototype.getReizeableShowPoints = function () {
                return ["s", "e"];
            }, BasePrintElement.prototype.onResize = function (t, e, n, i, o) {
                this.updateSizeAndPositionOptions(o, i, n, e);
            }, BasePrintElement.prototype.getOrderIndex = function () {
                return this.options.getTop();
            }, BasePrintElement.prototype.getHtml = function (t, e, n) {
                var i = 0;
                this.setCurrenttemplateData(e);
                var o = [],
                    r = this.getBeginPrintTopInPaperByReferenceElement(t),
                    a = t.getPaperFooter(i);
                this.isHeaderOrFooter() || this.isFixed() || r > a && (o.push(new _dto_PaperHtmlResult__WEBPACK_IMPORTED_MODULE_3__.a({
                    target: void 0,
                    printLine: void 0
                })), r = r - a + t.paperHeader, i++ , a = t.getPaperFooter(i));
                var p = this.getData(e),
                    s = this.createTarget(this.getTitle(), p, n);
                return this.updateTargetSize(s), this.css(s, p), s.css("position", "absolute"), s.css("left", this.options.displayLeft()), s.css("top", r + "pt"), o.push(new _dto_PaperHtmlResult__WEBPACK_IMPORTED_MODULE_3__.a({
                    target: s,
                    printLine: r + this.options.getHeight()
                })), o;
            }, BasePrintElement.prototype.getHtml2 = function (t, e, n) {
                var i = 0;
                this.setCurrenttemplateData(e);
                var o = [],
                    r = this.getBeginPrintTopInPaperByReferenceElement(t),
                    a = t.getPaperFooter(i);
                this.isHeaderOrFooter() || this.isFixed() || (r > a && (o.push(new _dto_PaperHtmlResult__WEBPACK_IMPORTED_MODULE_3__.a({
                    target: void 0,
                    printLine: void 0
                })), r = r - a + t.paperHeader, i++ , a = t.getPaperFooter(i)), r <= a && r + this.options.getHeight() > a && (o.push(new _dto_PaperHtmlResult__WEBPACK_IMPORTED_MODULE_3__.a({
                    target: void 0,
                    printLine: void 0
                })), r = t.paperHeader, i++ , a = t.getPaperFooter(i)));
                var p = this.getData(e),
                    s = this.createTarget(this.getTitle(), p);
                return this.updateTargetSize(s), this.css(s, p), s.css("position", "absolute"), s.css("left", this.options.displayLeft()), s.css("top", r + "pt"), o.push(new _dto_PaperHtmlResult__WEBPACK_IMPORTED_MODULE_3__.a({
                    target: s,
                    printLine: r + this.options.getHeight(),
                    referenceElement: new _PrintReferenceElement__WEBPACK_IMPORTED_MODULE_5__.a({
                        top: this.options.getTop(),
                        left: this.options.getLeft(),
                        height: this.options.getHeight(),
                        width: this.options.getWidth(),
                        beginPrintPaperIndex: t.index,
                        bottomInLastPaper: r + this.options.getHeight(),
                        printTopInPaper: r
                    })
                })), o;
            }, BasePrintElement.prototype.getBeginPrintTopInPaperByReferenceElement = function (t) {
                var e = this.options.getTop();
                return this.isHeaderOrFooter() || this.isFixed() ? e : t.referenceElement.isPositionLeftOrRight(e) ? t.referenceElement.printTopInPaper + (e - t.referenceElement.top) : t.referenceElement.bottomInLastPaper + (e - (t.referenceElement.top + t.referenceElement.height));
            }, BasePrintElement.prototype.css = function (t, e) {
                var n = this,
                    i = [],
                    o = this.getConfigOptions();

                if (o) {
                    var r = o.supportOptions;
                    r && r.forEach(function (e) {
                        var o = _print_element_option_PrintElementOptionItemManager__WEBPACK_IMPORTED_MODULE_2__.a.getItem(e.name);

                        if (o && o.css) {
                            var r = o.css(t, n.options.getValueFromOptionsOrDefault(e.name));
                            r && i.push(r);
                        }
                    });
                }

                this.stylerCss(t, e);
            }, BasePrintElement.prototype.stylerCss = function (t, e) {
                var n = this.getStyler();

                if (n) {
                    var i = n(e, this.options, t, this._currenttemplateData);
                    if (i) Object.keys(i).forEach(function (e) {
                        t.css(e, i[e]);
                    });
                }
            }, BasePrintElement.prototype.getData = function (t) {
                return t ? t[this.getField()] || "" : this.printElementType.getData();
            }, BasePrintElement.prototype.getPrintElementOptionItems = function () {
                if (this._printElementOptionItems) return this._printElementOptionItems;
                var t = [],
                    e = this.getConfigOptions();

                if (e) {
                    var n = e.supportOptions;
                    n && n.filter(function (t) {
                        return !t.hidden;
                    }).forEach(function (e) {
                        var n = _print_element_option_PrintElementOptionItemManager__WEBPACK_IMPORTED_MODULE_2__.a.getItem(e.name);

                        t.push(n);
                    });
                }

                return this._printElementOptionItems = this.filterOptionItems(t.concat()), this._printElementOptionItems;
            }, BasePrintElement.prototype.getPrintElementOptionItemsByName = function (t) {
                var e = [],
                    n = this.getConfigOptionsByName(t);

                if (n) {
                    var i = n.supportOptions;
                    i && i.filter(function (t) {
                        return !t.hidden;
                    }).forEach(function (t) {
                        var n = _print_element_option_PrintElementOptionItemManager__WEBPACK_IMPORTED_MODULE_2__.a.getItem(t.name);

                        e.push(n);
                    });
                }

                return e.concat();
            }, BasePrintElement.prototype.filterOptionItems = function (t) {
                return this.printElementType.field ? t.filter(function (t) {
                    return "field" != t.name;
                }) : t;
            }, BasePrintElement.prototype.createTempContainer = function () {
                this.removeTempContainer(), jquery__WEBPACK_IMPORTED_MODULE_0___default()("body").append(jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div class="hiprint_temp_Container hiprint-printPaper" style="overflow:hidden;height: 0px;box-sizing: border-box;"></div>'));
            }, BasePrintElement.prototype.removeTempContainer = function () {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()(".hiprint_temp_Container").remove();
            }, BasePrintElement.prototype.getTempContainer = function () {
                return jquery__WEBPACK_IMPORTED_MODULE_0___default()(".hiprint_temp_Container");
            }, BasePrintElement.prototype.isHeaderOrFooter = function () {
                return this.options.getTopInDesign() < this.panel.paperHeader || this.options.getTopInDesign() >= this.panel.paperFooter;
            }, BasePrintElement.prototype.delete = function () {
                this.designTarget && this.designTarget.remove();
            }, BasePrintElement.prototype.setCurrenttemplateData = function (t) {
                this._currenttemplateData = t;
            }, BasePrintElement.prototype.isFixed = function () {
                return this.options.fixed;
            }, BasePrintElement.prototype.onRendered = function (t, e) {
                this.printElementType && this.printElementType.onRendered && this.printElementType.onRendered(e, this.options, t.getTarget());
            }, BasePrintElement.prototype.createLineOfPosition = function (t) {
                var e = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".toplineOfPosition" + this.id),
                    n = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".leftlineOfPosition" + this.id),
                    i = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".rightlineOfPosition" + this.id),
                    o = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".bottomlineOfPosition" + this.id);
                if (e.length ? e.css("top", this.options.displayTop()) : ((e = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div class="toplineOfPosition' + this.id + '" style="border:0;border-top:1px dashed  rgb(169, 169, 169);position: absolute; width: 100%;"></div>')).css("top", this.options.displayTop()), e.css("width", t.displayWidth()), this.designTarget.parents(".hiprint-printPaper-content").append(e)), n.length) n.css("left", this.options.displayLeft()); else {
                    var r = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div class="leftlineOfPosition' + this.id + '" style="border:0;border-left:1px dashed  rgb(169, 169, 169);position: absolute;height: 100%;"></div>');
                    r.css("left", this.options.displayLeft()), r.css("height", t.displayHeight()), this.designTarget.parents(".hiprint-printPaper-content").append(r);
                }
                if (i.length) i.css("left", this.options.getLeft() + this.options.getWidth() + "pt"); else {
                    var a = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div class="rightlineOfPosition' + this.id + '" style="border:0;border-left:1px dashed  rgb(169, 169, 169);position: absolute;height: 100%;"></div>');
                    a.css("left", this.options.getLeft() + this.options.getWidth() + "pt"), a.css("height", t.displayHeight()), this.designTarget.parents(".hiprint-printPaper-content").append(a);
                }
                if (o.length) o.css("top", this.options.getTop() + this.options.getHeight() + "pt"); else {
                    var p = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div class="bottomlineOfPosition' + this.id + '" style="border:0;border-top:1px dashed  rgb(169, 169, 169);position: absolute;width: 100%;"></div>');
                    p.css("top", this.options.getTop() + this.options.getHeight() + "pt"), p.css("width", t.displayWidth()), this.designTarget.parents(".hiprint-printPaper-content").append(p);
                }
            }, BasePrintElement.prototype.removeLineOfPosition = function () {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()(".toplineOfPosition" + this.id).remove(), jquery__WEBPACK_IMPORTED_MODULE_0___default()(".leftlineOfPosition" + this.id).remove(), jquery__WEBPACK_IMPORTED_MODULE_0___default()(".rightlineOfPosition" + this.id).remove(), jquery__WEBPACK_IMPORTED_MODULE_0___default()(".bottomlineOfPosition" + this.id).remove();
            }, BasePrintElement.prototype.getFields = function () {
                var t = this.printElementType.getFields();
                return t || (t = _HiPrintlib__WEBPACK_IMPORTED_MODULE_6__.a.instance.getPrintTemplateById(this.templateId).getFields());
            }, BasePrintElement.prototype.bingCopyEvent = function (t) { }, BasePrintElement.prototype.getFormatter = function () {
                var formatter = void 0;
                if (this.printElementType.formatter && (formatter = this.printElementType.formatter), this.options.formatter) try {
                    var s = "formatter=" + this.options.formatter;
                    eval(s);
                } catch (t) {
                    console.log(t);
                }
                return formatter;
            }, BasePrintElement.prototype.getStyler = function () {
                var fnstyler = void 0;
                if (this.printElementType.styler && (fnstyler = this.printElementType.styler), this.options.styler) try {
                    var s = "fnstyler=" + this.options.styler;
                    eval(s);
                } catch (t) {
                    console.log(t);
                }
                return fnstyler;
            }, BasePrintElement.prototype.bingKeyboardMoveEvent = function (t, e) {
                var n = this,
                    i = void 0,
                    o = void 0;
                t.attr("tabindex", "1"), t.keydown(function (r) {
                    switch (r.keyCode) {
                        case 37:
                            i = n.options.getLeft(), n.updateSizeAndPositionOptions(i - _HiPrintConfig__WEBPACK_IMPORTED_MODULE_1__.a.instance.movingDistance), t.css("left", n.options.displayLeft()), n.createLineOfPosition(e), r.preventDefault();
                            break;

                        case 38:
                            o = n.options.getTop(), n.updateSizeAndPositionOptions(void 0, o - _HiPrintConfig__WEBPACK_IMPORTED_MODULE_1__.a.instance.movingDistance), t.css("top", n.options.displayTop()), n.createLineOfPosition(e), r.preventDefault();
                            break;

                        case 39:
                            i = n.options.getLeft(), n.updateSizeAndPositionOptions(i + _HiPrintConfig__WEBPACK_IMPORTED_MODULE_1__.a.instance.movingDistance), t.css("left", n.options.displayLeft()), n.createLineOfPosition(e), r.preventDefault();
                            break;

                        case 40:
                            o = n.options.getTop(), n.updateSizeAndPositionOptions(void 0, o + _HiPrintConfig__WEBPACK_IMPORTED_MODULE_1__.a.instance.movingDistance), t.css("top", n.options.displayTop()), n.createLineOfPosition(e), r.preventDefault();
                    }
                });
            }, BasePrintElement.prototype.inRect = function (t) {
                var e = this.designTarget.offset().left,
                    n = this.designTarget.offset().top;
                return t.minX < e && t.minY < n && t.maxX > e && t.maxY > n;
            }, BasePrintElement.prototype.multipleSelect = function (t) {
                t ? this.designTarget.addClass("multipleSelect") : this.designTarget.removeClass("multipleSelect");
            }, BasePrintElement.prototype.updatePositionByMultipleSelect = function (t, e) {
                this.updateSizeAndPositionOptions(t + this.options.getLeft(), e + this.options.getTop()), this.designTarget.css("left", this.options.displayLeft()), this.designTarget.css("top", this.options.displayTop());
            }, BasePrintElement;
        }();
}, function (t, e, n) {
    "use strict";

    var i = function () {
        function t() { }

        return t.prototype.init = function (t) {
            this.target = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<input type="text" class="hitable-editor-text" value="" />'), t.getTarget().append(this.target), this.target.focus();
        }, t.prototype.getValue = function () {
            return this.target.val();
        }, t.prototype.setValue = function (t) {
            this.target.val(t);
        }, t.prototype.destroy = function () {
            this.target.remove();
        }, t;
    }(),
        o = function () {
            function t() {
                this.text = new i();
            }

            return Object.defineProperty(t, "Instance", {
                get: function get() {
                    return t._instance || (t._instance = new t()), t._instance;
                },
                enumerable: !0,
                configurable: !0
            }), t;
        }(),
        r = function () {
            function t() { }

            return Object.defineProperty(t, "Instance", {
                get: function get() {
                    return o._instance || (t._instance = new t()), t._instance;
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.createEditor = function (t) {
                return jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, o.Instance[t]);
            }, t;
        }(),
        a = n(10),
        p = n(14),
        s = n(11),
        l = function () {
            function t() { }

            return t.prototype.init = function (t, e) {
                var n = this;
                this.tableOptions = e, this.title = t.title, this.field = t.field, t.getTarget().unbind("dblclick.hitable").bind("dblclick.hitable", function () {
                    t.isEditing = !0, n.beginEdit(t);
                });
            }, t.prototype.getDisplayHtml = function () {
                return this.title;
            }, t.prototype.beginEdit = function (t) {
                var e = this;
                this.editor = r.Instance.createEditor("text"), t.getTarget().html(""), this.editor.init(t), (this.title || this.field) && (this.tableOptions.options.isEnableEditField ? this.editor.setValue((this.title || "") + "#" + (this.field || "")) : this.editor.setValue(this.title || "")), jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.editor.target).keydown(function (n) {
                    13 == n.keyCode && e.endEdit(t);
                }), jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.editor.target).blur(function (n) {
                    e.endEdit(t);
                }), this.tableOptions.editingCell && this.tableOptions.editingCell.id != t.id && this.tableOptions.editingCell.innerElement.endEdit(this.tableOptions.editingCell), this.tableOptions.editingCell = t;
            }, t.prototype.endEdit = function (t) {
                var e = this.editor.getValue();
                if (e) {
                    if (this.tableOptions.options.isEnableEditField) {
                        var n = e.split("#");
                        t.title = this.title = n[0], n.length > 0 && (t.field = this.field = n[1]);
                    } else t.title = this.title = e;
                } else this.tableOptions.options.isEnableEditField ? (t.title = this.title = "", t.field = this.field = "") : t.title = this.title = "";
                this.editor.destroy(), t.getTarget().html(this.title);
            }, t;
        }(),
        u = function () {
            return function (t) {
                this.title = t.title, this.field = t.field, this.width = t.width, this.align = t.align, this.halign = t.halign, this.vAlign = t.vAlign, this.colspan = t.colspan, this.rowspan = t.rowspan, this.checked = t.checked, this.columnId = t.columnId, this.formatter2 = t.formatter2, this.styler2 = t.styler2;
            };
        }(),
        d = function () {
            function t() {
                this.id = s.a.createId();
            }

            return t.prototype.init = function (t, e, n, i) {
                this.isHead = i, this.rowId = n, this.isEditing = !1;
                var o = /^[0-9]*$/;
                this.target = t, this.tableOptions = e;
                var r = this.target.attr("colspan");
                this.colspan = o.test(r) ? parseInt(r) : 1;
                var a = this.target.attr("rowspan");
                this.rowspan = o.test(a) ? parseInt(a) : 1, this.initEvent(), this.isHead && this.initInnerEelement();
            }, t.prototype.beginEdit = function () {
                if (!this.isEditing && this.tableOptions.isEnableEdit && this.tableOptions.onBeforEdit(this)) {
                    var t = this.getValue();
                    this.editor = r.Instance.createEditor("text"), this.isEditing = !0, this.tableOptions.editingCell = this, this.target.html(""), this.editor.init(this), this.editor.setValue(t);
                }
            }, t.prototype.endEdit = function () {
                this.isEditing = !1;
                var t = this.editor.getValue();
                this.editor.destroy(), this.target.html(t);
            }, t.prototype.getTarget = function () {
                return this.target;
            }, t.prototype.getValue = function () {
                return this.target.html();
            }, t.prototype.setValue = function (t) { }, t.prototype.initInnerEelement = function () {
                this.innerElement = new l(), this.innerElement.init(this, this.tableOptions);
            }, t.prototype.initEvent = function () { }, t.prototype.isXYinCell = function (t, e) {
                var n = new a.b({
                    x: t,
                    y: e,
                    height: 0,
                    width: 0
                });
                return this.isOverlap(n);
            }, t.prototype.getTableRect = function () {
                return new a.b({
                    x: this.target.offset().left,
                    y: this.target.offset().top,
                    height: this.target[0].offsetHeight,
                    width: this.target[0].offsetWidth
                });
            }, t.prototype.isOverlap = function (t) {
                var e = this.getTableRect();
                return t.x + t.width > e.x && e.x + e.width > t.x && t.y + t.height > e.y && e.y + e.height > t.y;
            }, t.prototype.isInRect = function (t) {
                var e = t.rect,
                    n = this.getTableRect();

                if (e.x + e.width > n.x && n.x + n.width > e.x && e.y + e.height > n.y && n.y + n.height > e.y) {
                    var i = p.a.mergeRect(e, n);
                    return JSON.stringify(e) == JSON.stringify(i) || (t.changed = !0, t.rect = i, !0);
                }

                return !1;
            }, t.prototype.isSelected = function () {
                return this.target.hasClass("selected");
            }, t.prototype.select = function () {
                this.target.addClass("selected");
            }, t.prototype.isHeader = function () {
                return !1;
            }, t.prototype.setAlign = function (t) {
                this.align = t, t ? this.target.css("text-align", t) : this.target[0].style.textAlign = "";
            }, t.prototype.setVAlign = function (t) {
                this.vAlign = t, t ? this.target.css("vertical-align", t) : this.target[0].style.verticalAlign = "";
            }, t.prototype.getEntity = function () {
                return new u(this);
            }, t;
        }();

    n.d(e, "a", function () {
        return f;
    });

    var _c,
        h = (_c = function c(t, e) {
            return (_c = Object.setPrototypeOf || _instanceof({
                __proto__: []
            }, Array) && function (t, e) {
                t.__proto__ = e;
            } || function (t, e) {
                for (var n in e) {
                    e.hasOwnProperty(n) && (t[n] = e[n]);
                }
            })(t, e);
        }, function (t, e) {
            function n() {
                this.constructor = t;
            }

            _c(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
        }),
        f = function (t) {
            function e(e) {
                var n = this;
                return e = e || {}, (n = t.call(this) || this).width = e.width ? parseFloat(e.width.toString()) : 100, n.title = e.title, n.descTitle = e.descTitle, n.field = e.field, n.fixed = e.fixed, n.rowspan = e.rowspan ? parseInt(e.rowspan) : 1, n.colspan = e.colspan ? parseInt(e.colspan) : 1, n.align = e.align, n.halign = e.halign, n.vAlign = e.vAlign, n.formatter = e.formatter, n.styler = e.styler, n.formatter2 = e.formatter2, n.styler2 = e.styler2, n.checkbox = e.checkbox, n.checked = 0 != e.checked, n.columnId = e.columnId || e.field, n;
            }

            return h(e, t), e.prototype.css = function (t) { }, e;
        }(d);
}, function (t, e, n) {
    "use strict";

    n.d(e, "a", function () {
        return i;
    });

    var i = function () {
        return function (t) {
            this.printLine = t.printLine, this.target = t.target, this.referenceElement = t.referenceElement;
        };
    }();
}, function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.d(__webpack_exports__, "a", function () {
        return TableExcelHelper;
    });

    var _ReconsitutionTableColumns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19),
        _assets_plugins_hinnn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0),
        TableExcelHelper = function () {
            function TableExcelHelper() { }

            return TableExcelHelper.createTableHead = function (t, e) {
                for (var n = TableExcelHelper.reconsitutionTableColumnTree(t), i = jquery__WEBPACK_IMPORTED_MODULE_0___default()("<thead></thead>"), o = TableExcelHelper.getColumnsWidth(n, e), r = function r(t) {
                    var e = jquery__WEBPACK_IMPORTED_MODULE_0___default()("<tr></tr>");
                    n[t].forEach(function (t) {
                        var n = jquery__WEBPACK_IMPORTED_MODULE_0___default()("<td></td>");
                        t.id && n.attr("id", t.id), t.columnId && n.attr("column-id", t.columnId), (t.align || t.halign) && n.css("text-align", t.halign || t.align), t.vAlign && n.css("vertical-align", t.vAlign), t.colspan > 1 && n.attr("colspan", t.colspan), t.rowspan > 1 && n.attr("rowspan", t.rowspan), n.html(t.title), o[t.id] ? (t.hasWidth = !0, t.targetWidth = o[t.id], n.attr("haswidth", "haswidth"), n.css("width", o[t.id] + "pt")) : t.hasWidth = !1, e.append(n);
                    }), i.append(e);
                }, a = 0; a < n.totalLayer; a++) {
                    r(a);
                }

                return TableExcelHelper.syncTargetWidthToOption(t), i;
            }, TableExcelHelper.createTableFooter = function (t, e, n, i, o, r) {
                var a = jquery__WEBPACK_IMPORTED_MODULE_0___default()("<tfoot></tfoot>"),
                    p = this.getFooterFormatter(n, i);
                return p && a.append(p(n, e, o, r)), a;
            }, TableExcelHelper.createTableRow = function (t, e, n, i) {
                var o = TableExcelHelper.reconsitutionTableColumnTree(t),
                    r = jquery__WEBPACK_IMPORTED_MODULE_0___default()("<tbody></tbody>");
                (e || (e = []), i.groupFields.length) ? _assets_plugins_hinnn__WEBPACK_IMPORTED_MODULE_1__.a.groupBy(e, i.groupFields, function (t) {
                    var e = {};
                    return i.groupFields.forEach(function (n) {
                        return e[n] = t[n];
                    }), e;
                }).forEach(function (t) {
                    if (i.groupFormatter) {
                        var e = jquery__WEBPACK_IMPORTED_MODULE_0___default()("<tr><td colspan=" + o.colspan + "></td></tr>");
                        e.find("td").append(i.groupFormatter(t, n)), r.append(e);
                    }

                    if (t.rows.forEach(function (t) {
                        var e = TableExcelHelper.createRowTarget(o, t, n, i);
                        r.append(e);
                    }), i.groupFooterFormatter) {
                        var a = jquery__WEBPACK_IMPORTED_MODULE_0___default()("<tr><td colspan=" + o.colspan + "></td></tr>");
                        a.find("td").append(i.groupFooterFormatter(t, n)), r.append(a);
                    }
                }) : e.forEach(function (t) {
                    var e = TableExcelHelper.createRowTarget(o, t, n, i);
                    r.append(e);
                });
                return r;
            }, TableExcelHelper.createRowTarget = function (t, e, n, i) {
                var o = jquery__WEBPACK_IMPORTED_MODULE_0___default()("<tr></tr>");
                o.data("rowData", e), t.rowColumns.forEach(function (t, i) {
                    var r = jquery__WEBPACK_IMPORTED_MODULE_0___default()("<td></td>");
                    t.field && r.attr("field", t.field), t.align && r.css("text-align", t.align), t.vAlign && r.css("vertical-align", t.vAlign);
                    var a = TableExcelHelper.getColumnFormatter(t),
                        p = a ? a(e[t.field], e, i, n) : e[t.field];
                    r.html(p);
                    var s = TableExcelHelper.getColumnStyler(t);

                    if (s) {
                        var l = s(e[t.field], e, i, n);
                        if (l) Object.keys(l).forEach(function (t) {
                            r.css(t, l[t]);
                        });
                    }

                    o.append(r);
                });
                var r = TableExcelHelper.getRowStyler(n, i);

                if (r) {
                    var a = r(e, n);
                    if (a) Object.keys(a).forEach(function (t) {
                        o.css(t, a[t]);
                    });
                }

                return o;
            }, TableExcelHelper.createEmptyRowTarget = function (t) {
                var e = TableExcelHelper.reconsitutionTableColumnTree(t),
                    n = jquery__WEBPACK_IMPORTED_MODULE_0___default()("<tr></tr>");
                return e.rowColumns.forEach(function (t, e) {
                    var i = jquery__WEBPACK_IMPORTED_MODULE_0___default()("<td></td>");
                    t.field && i.attr("field", t.field), t.align && i.css("text-align", t.align), t.vAlign && i.css("vertical-align", t.vAlign), n.append(i);
                }), n;
            }, TableExcelHelper.getColumnsWidth = function (t, e) {
                var n = {},
                    i = TableExcelHelper.allAutoWidth(t),
                    o = TableExcelHelper.allFixedWidth(t);
                return t.rowColumns.forEach(function (t) {
                    if (t.fixed) n[t.id] = t.width; else {
                        var r = e - o,
                            a = t.width / i * (r > 0 ? r : 0);
                        n[t.id] = a;
                    }
                }), n;
            }, TableExcelHelper.resizeTableCellWidth = function (t, e, n) {
                var i = TableExcelHelper.reconsitutionTableColumnTree(e),
                    o = TableExcelHelper.getColumnsWidth(i, n);
                t.find("thead tr td[haswidth]").map(function (t, e) {
                    var n = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e).attr("id"),
                        i = o[n];
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()(e).css("width", i + "pt");
                });
            }, TableExcelHelper.allAutoWidth = function (t) {
                var e = 0;
                return t.rowColumns.forEach(function (t) {
                    e += t.fixed ? 0 : t.width;
                }), e;
            }, TableExcelHelper.allFixedWidth = function (t) {
                var e = 0;
                return t.rowColumns.forEach(function (t) {
                    e += t.fixed ? t.width : 0;
                }), e;
            }, TableExcelHelper.reconsitutionTableColumnTree = function (t, e, n) {
                var i = e || new _ReconsitutionTableColumns__WEBPACK_IMPORTED_MODULE_0__.a();
                i.colspan = 0;

                for (var o = function o(e) {
                    i.totalLayer = e + 1, i[e] = t[e].columns, 0 == e && t[e].columns.forEach(function (t) {
                        0 == e && (i.colspan += t.colspan);
                    });
                }, r = 0; r < t.length; r++) {
                    o(r);
                }

                return i.rowColumns = TableExcelHelper.getOrderdColumns(i), i;
            }, TableExcelHelper.syncTargetWidthToOption = function (t) {
                t.forEach(function (t) {
                    t.columns.forEach(function (t) {
                        t.hasWidth && (t.width = t.targetWidth);
                    });
                });
            }, TableExcelHelper.getFooterFormatter = function (options, tablePrintElementType) {
                var footerFormatter = void 0;
                if (tablePrintElementType.footerFormatter && (footerFormatter = tablePrintElementType.footerFormatter), options.footerFormatter) try {
                    var s = "footerFormatter=" + options.footerFormatter;
                    eval(s);
                } catch (t) {
                    console.log(t);
                }
                return footerFormatter;
            }, TableExcelHelper.getRowStyler = function (options, tablePrintElementType) {
                var rowStyler = void 0;
                if (tablePrintElementType.rowStyler && (rowStyler = tablePrintElementType.rowStyler), options.rowStyler) try {
                    var s = "rowStyler=" + options.rowStyler;
                    eval(s);
                } catch (t) {
                    console.log(t);
                }
                return rowStyler;
            }, TableExcelHelper.getColumnStyler = function (column) {
                var styler = void 0;
                if (column.styler && (styler = column.styler), column.styler2) try {
                    var s = "styler=" + column.styler2;
                    eval(s);
                } catch (t) {
                    console.log(t);
                }
                return styler;
            }, TableExcelHelper.getColumnFormatter = function (column) {
                var formatter = void 0;
                if (column.formatter && (formatter = column.formatter), column.formatter2) try {
                    var s = "formatter=" + column.formatter2;
                    eval(s);
                } catch (t) {
                    console.log(t);
                }
                return formatter;
            }, TableExcelHelper.getOrderdColumns = function (t) {
                for (var e = {}, n = function n(_n2) {
                    t[_n2].forEach(function (t) {
                        for (var i = 0; i < t.rowspan; i++) {
                            e[_n2 + i] = e[_n2 + i] ? e[_n2 + i] : [], e[_n2 + i].push(t);
                        }
                    });
                }, i = 0; i < t.totalLayer; i++) {
                    n(i);
                }

                return e[t.totalLayer - 1];
            }, TableExcelHelper;
        }();
}, function (t, e, n) {
    "use strict";

    n.d(e, "a", function () {
        return i;
    });

    var i = function () {
        function t(t) {
            this.top = t.top, this.left = t.left, this.height = t.height, this.width = t.width, this.bottomInLastPaper = t.bottomInLastPaper, this.beginPrintPaperIndex = t.beginPrintPaperIndex, this.printTopInPaper = t.printTopInPaper, this.endPrintPaperIndex = t.endPrintPaperIndex;
        }

        return t.prototype.isPositionLeftOrRight = function (t) {
            return this.top <= t && this.top + this.height > t;
        }, t;
    }();
}, function (t, e, n) {
    "use strict";

    var i = function () {
        function t() {
            this.name = "lineHeight";
        }

        return t.prototype.css = function (t, e) {
            if (t && t.length) {
                if (e) return t.css("line-height", e + "pt"), "line-height:" + e + "pt";
                t[0].style.lineHeight = "";
            }

            return null;
        }, t.prototype.createTarget = function () {
            return this.target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(' <div class="hiprint-option-item">\n        <div class="hiprint-option-item-label">\n        字体行高\n        </div>\n        <div class="hiprint-option-item-field">\n        <select class="auto-submit">\n        <option value="" >默认</option>\n        <option value="6" >6pt</option>\n        <option value="6.75" >6.75pt</option>\n        <option value="7.5" >7.5pt</option>\n        <option value="8.25" >8.25pt</option>\n        <option value="9" >9pt</option>\n        <option value="9.75" >9.75pt</option>\n        <option value="10.5" >10.5pt</option>\n        <option value="11.25" >11.25pt</option>\n        <option value="12" >12pt</option>\n        <option value="12.75" >12.75pt</option>\n        <option value="13.5" >13pt</option>\n        <option value="14.25" >14.25pt</option>\n        <option value="15" >15pt</option>\n        <option value="15.75" >15.75pt</option>\n        <option value="16.5" >16.5pt</option>\n        <option value="17.25" >17.25pt</option>\n        <option value="18" >18pt</option>\n        <option value="18.75" >18.75pt</option>\n        <option value="19.5" >19.5pt</option>\n        <option value="20.25" >20.25pt</option>\n        <option value="21" >21pt</option>\n        <option value="21.75" >21.75pt</option>\n        <option value="22.5" >22.5pt</option>\n        <option value="23.25" >23.25pt</option>\n        <option value="24" >24pt</option>\n        <option value="24.75" >24.75pt</option>\n        <option value="25.5" >25.5pt</option>\n        <option value="26.25" >26.25pt</option>\n        <option value="27" >27pt</option>\n        <option value="27.75" >27.75pt</option>\n        <option value="28.5" >28.5pt</option>\n        <option value="29.25" >29.25pt</option>\n        <option value="30" >30pt</option>\n        <option value="30.75" >30.75pt</option>\n        <option value="31.5" >31.5pt</option>\n        <option value="32.25" >32.25pt</option>\n        <option value="33" >33pt</option>\n        <option value="33.75" >33.75pt</option>\n        <option value="34.5" >34.5pt</option>\n        <option value="35.25" >35.25pt</option>\n        <option value="36" >36pt</option>\n        </select>\n        </div>\n    </div>'), this.target;
        }, t.prototype.getValue = function () {
            var t = this.target.find("select").val();
            if (t) return parseFloat(t.toString());
        }, t.prototype.setValue = function (t) {
            t && (this.target.find('option[value="' + t + '"]').length || this.target.find("select").prepend('<option value="' + t + '" >' + t + "</option>"));
            this.target.find("select").val(t);
        }, t.prototype.destroy = function () {
            this.target.remove();
        }, t;
    }(),
        o = function () {
            function t() {
                this.name = "fontFamily";
            }

            return t.prototype.createTarget = function () {
                return this.target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(' <div class="hiprint-option-item">\n        <div class="hiprint-option-item-label">\n        字体\n        </div>\n        <div class="hiprint-option-item-field">\n        <select class="auto-submit">\n        <option value="" >默认</option>\n            <option value="SimSun" >宋体</option>\n            <option value="Microsoft YaHei" >微软雅黑</option>\n        </select>\n        </div>\n    </div>'), this.target;
            }, t.prototype.css = function (t, e) {
                if (t && t.length) {
                    if (e) return t.css("font-family", e), "font-family:" + e;
                    t[0].style.fontFamily = "";
                }

                return null;
            }, t.prototype.getValue = function () {
                var t = this.target.find("select").val();
                if (t) return t.toString();
            }, t.prototype.setValue = function (t) {
                t && (this.target.find('option[value="' + t + '"]').length || this.target.find("select").prepend('<option value="' + t + '" >' + t + "</option>"));
                this.target.find("select").val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        r = function () {
            function t() {
                this.name = "fontSize";
            }

            return t.prototype.css = function (t, e) {
                if (t && t.length) {
                    if (e) return t.css("font-size", e + "pt"), "font-size:" + e + "pt";
                    t[0].style.fontSize = "";
                }

                return null;
            }, t.prototype.createTarget = function () {
                return this.target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(' <div class="hiprint-option-item">\n        <div class="hiprint-option-item-label">\n        字体大小\n        </div>\n        <div class="hiprint-option-item-field">\n        <select class="auto-submit">\n        <option value="" >默认</option>\n        <option value="6" >6pt</option>\n        <option value="6.75" >6.75pt</option>\n        <option value="7.5" >7.5pt</option>\n        <option value="8.25" >8.25pt</option>\n        <option value="9" >9pt</option>\n        <option value="9.75" >9.75pt</option>\n        <option value="10.5" >10.5pt</option>\n        <option value="11.25" >11.25pt</option>\n        <option value="12" >12pt</option>\n        <option value="12.75" >12.75pt</option>\n        <option value="13.5" >13.5pt</option>\n        <option value="14.25" >14.25pt</option>\n        <option value="15" >15pt</option>\n        <option value="15.75" >15.75pt</option>\n        <option value="16.5" >16.5pt</option>\n        <option value="17.25" >17.25pt</option>\n        <option value="18" >18pt</option>\n        <option value="18.75" >18.75pt</option>\n        <option value="19.5" >19.5pt</option>\n        <option value="20.25" >20.25pt</option>\n        <option value="21" >21pt</option>\n        <option value="21.75" >21.75pt</option>\n        </select>\n        </div>\n    </div>'), this.target;
            }, t.prototype.getValue = function () {
                var t = this.target.find("select").val();
                if (t) return parseFloat(t.toString());
            }, t.prototype.setValue = function (t) {
                t && (this.target.find('option[value="' + t + '"]').length || this.target.find("select").prepend('<option value="' + t + '" >' + t + "</option>"));
                this.target.find("select").val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        a = function () {
            function t() {
                this.name = "fontWeight";
            }

            return t.prototype.css = function (t, e) {
                if (t && t.length) {
                    if (e) return t.css("font-weight", e), "font-weight:" + e;
                    t[0].style.fontWeight = "";
                }

                return null;
            }, t.prototype.createTarget = function () {
                return this.target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(' <div class="hiprint-option-item">\n        <div class="hiprint-option-item-label">\n        字体粗细\n        </div>\n        <div class="hiprint-option-item-field">\n        <select class="auto-submit">\n        <option value="" >默认</option>\n        <option value="lighter" >更细</option>\n        <option value="bold" >粗体</option>\n        <option value="bolder" >粗体+</option>\n            <option value="100" >100</option>\n            <option value="200" >200</option>\n            <option value="300" >300</option>\n            <option value="400" >400</option>\n            <option value="500" >500</option>\n            <option value="600" >600</option>\n            <option value="700" >700</option>\n            <option value="800" >800</option>\n            <option value="900" >900</option>\n        </select>\n        </div>\n    </div>'), this.target;
            }, t.prototype.getValue = function () {
                var t = this.target.find("select").val();
                if (t) return t.toString();
            }, t.prototype.setValue = function (t) {
                t && (this.target.find('option[value="' + t + '"]').length || this.target.find("select").prepend('<option value="' + t + '" >' + t + "</option>"));
                this.target.find("select").val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        p = function () {
            function t() {
                this.name = "letterSpacing";
            }

            return t.prototype.css = function (t, e) {
                if (t && t.length) {
                    if (e) return t.css("letter-spacing", e + "pt"), "letter-spacing:" + e + "pt";
                    t[0].style.letterSpacing = "";
                }

                return null;
            }, t.prototype.createTarget = function () {
                return this.target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(' <div class="hiprint-option-item">\n        <div class="hiprint-option-item-label">\n        字间距\n        </div>\n        <div class="hiprint-option-item-field">\n        <select class="auto-submit">\n        <option value="" >默认</option>\n        <option value="0.75" >0.75pt</option>\n        <option value="1.5" >1.5pt</option>\n        <option value="2.25" >2.25pt</option>\n        <option value="3" >3pt</option>\n        <option value="3.75" >3.75pt</option>\n        <option value="4.5" >4.5pt</option>\n        <option value="5.25" >5.25pt</option>\n        <option value="6" >6pt</option>\n        <option value="6.75" >6.75pt</option>\n        <option value="7.5" >7.5pt</option>\n        <option value="8.25" >8.25pt</option>\n        <option value="9" >9pt</option>\n        <option value="9.75" >9.75pt</option>\n        <option value="10.5" >10.5pt</option>\n        <option value="11.25" >11.25pt</option>\n        <option value="12" >12pt</option>\n        </select>\n        </div>\n    </div>'), this.target;
            }, t.prototype.getValue = function () {
                var t = this.target.find("select").val();
                if (t) return parseFloat(t.toString());
            }, t.prototype.setValue = function (t) {
                t && (this.target.find('option[value="' + t + '"]').length || this.target.find("select").prepend('<option value="' + t + '" >' + t + "</option>"));
                this.target.find("select").val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        s = function () {
            function t() {
                this.name = "textAlign";
            }

            return t.prototype.css = function (t, e) {
                if (t && t.length) {
                    if (e) return t.css("text-align", e), "justify" == e ? (t.css("text-align-last", "justify"), t.css("text-justify", "distribute-all-lines")) : (t[0].style.textAlignLast = "", t[0].style.textJustify = ""), "text-align:" + e;
                    t[0].style.textAlign = "", t[0].style.textAlignLast = "", t[0].style.textJustify = "";
                }

                return null;
            }, t.prototype.createTarget = function () {
                return this.target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(' <div class="hiprint-option-item">\n        <div class="hiprint-option-item-label">\n        左右对齐\n        </div>\n        <div class="hiprint-option-item-field">\n        <select class="auto-submit">\n        <option value="" >默认</option>\n        <option value="" >居左</option>\n        <option value="center" >居中</option>\n        <option value="right" >居右</option>\n        <option value="justify" >两端对齐</option>\n        </select>\n        </div>\n    </div>'), this.target;
            }, t.prototype.getValue = function () {
                var t = this.target.find("select").val();
                if (t) return t.toString();
            }, t.prototype.setValue = function (t) {
                this.target.find("select").val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        l = function () {
            function t() {
                this.name = "hideTitle";
            }

            return t.prototype.createTarget = function () {
                return this.target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(' <div class="hiprint-option-item">\n        <div class="hiprint-option-item-label">\n        标题显示隐藏\n        </div>\n        <div class="hiprint-option-item-field">\n        <select class="auto-submit">\n        <option value="" >默认</option>\n            <option value="false" >显示</option>\n            <option value="true" >隐藏</option>\n        </select>\n        </div>\n    </div>'), this.target;
            }, t.prototype.getValue = function () {
                if ("true" == this.target.find("select").val()) return !0;
            }, t.prototype.setValue = function (t) {
                this.target.find("select").val((null == t ? "" : t).toString());
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        u = function () {
            function t() {
                this.name = "tableBorder";
            }

            return t.prototype.css = function (t, e) {
                if (t.find("table").length) {
                    if ("border" == e) return t.find("table").css("border", "1px solid"), "border:1px solid";
                    "noBorder" == e ? t.find("table").css("border", "0px solid") : t.find("table")[0].style.border = "";
                }

                return null;
            }, t.prototype.createTarget = function () {
                return this.target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(' <div class="hiprint-option-item">\n        <div class="hiprint-option-item-label">\n        表格边框\n        </div>\n        <div class="hiprint-option-item-field">\n            <select class="auto-submit">\n            <option value="" >默认</option>\n            <option value="border" >有边框</option>\n            <option value="noBorder" >无边框</option>\n            </select>\n        </div>\n    </div>'), this.target;
            }, t.prototype.getValue = function () {
                var t = this.target.find("select").val();
                if (t) return t.toString();
            }, t.prototype.setValue = function (t) {
                this.target.find("select").val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        d = function () {
            function t() {
                this.name = "tableHeaderBorder";
            }

            return t.prototype.css = function (t, e) {
                if (t.find("thead tr").length) {
                    if ("border" == e) return t.find("thead tr").css("border", "1px solid"), "border:1pt solid";
                    "noBorder" == e ? t.find("thead tr").css("border", "0px solid") : "topBorder" == e ? (t.find("thead tr").css("border", "0px solid"), t.find("thead tr").css("border-top", "1px solid")) : "bottomBorder" == e ? (t.find("thead tr").css("border", "0px solid"), t.find("thead tr").css("border-bottom", "1px solid")) : "topBottomBorder" == e ? (t.find("thead tr").css("border", "0px solid"), t.find("thead tr").css("border-top", "1px solid"), t.find("thead tr").css("border-bottom", "1px solid")) : t.find("thead tr").map(function (t, e) {
                        e.style.border = "";
                    });
                }

                return null;
            }, t.prototype.createTarget = function () {
                return this.target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(' <div class="hiprint-option-item">\n        <div class="hiprint-option-item-label">\n        表头边框\n        </div>\n        <div class="hiprint-option-item-field">\n        <select class="auto-submit">\n        <option value="" >默认</option>    \n        <option value="border" >有边框</option>\n        <option value="noBorder" >无边框</option>\n        <option value="topBorder" >上边框</option>\n        <option value="bottomBorder" >下边框</option>\n        <option value="topBottomBorder" >上下边框</option>\n        </select>\n        </div>\n    </div>'), this.target;
            }, t.prototype.getValue = function () {
                var t = this.target.find("select").val();
                if (t) return t.toString();
            }, t.prototype.setValue = function (t) {
                this.target.find("select").val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        c = function () {
            function t() {
                this.name = "tableHeaderCellBorder";
            }

            return t.prototype.css = function (t, e) {
                if (t.find("thead tr td").length) {
                    if ("border" == e) return t.find("thead tr td").css("border", "1px solid"), "border:1px solid";
                    "noBorder" == e ? t.find("thead tr td").css("border", "0px solid") : t.find("thead tr td").map(function (t, e) {
                        e.style.border = "";
                    });
                }

                return null;
            }, t.prototype.createTarget = function () {
                return this.target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(' <div class="hiprint-option-item">\n        <div class="hiprint-option-item-label">\n        表头单元格边框\n        </div>\n        <div class="hiprint-option-item-field">\n        <select class="auto-submit">\n        <option value="" >默认</option>    \n        <option value="border" >有边框</option>\n        <option value="noBorder" >无边框</option>\n      \n        </select>\n        </div>\n    </div>'), this.target;
            }, t.prototype.getValue = function () {
                var t = this.target.find("select").val();
                if (t) return t.toString();
            }, t.prototype.setValue = function (t) {
                this.target.find("select").val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        h = function () {
            function t() {
                this.name = "tableHeaderRowHeight";
            }

            return t.prototype.css = function (t, e) {
                if (t.find("thead tr td").length) {
                    if (e) return t.find("thead tr td:not([rowspan])").css("height", e + "pt"), "height:" + e + "pt";
                    t.find("thead tr td").map(function (t, e) {
                        e.style.height = "";
                    });
                }

                return null;
            }, t.prototype.createTarget = function () {
                return this.target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(' <div class="hiprint-option-item">\n        <div class="hiprint-option-item-label">\n        表头行高\n        </div>\n        <div class="hiprint-option-item-field">\n        <select class="auto-submit">\n       \n        <option value="" >默认</option>\n        <option value="6" >6pt</option>\n        <option value="6.75" >6.75pt</option>\n        <option value="7.5" >7.5pt</option>\n        <option value="8.25" >8.25pt</option>\n        <option value="9" >9pt</option>\n        <option value="9.75" >9.75pt</option>\n        <option value="10.5" >10.5pt</option>\n        <option value="11.25" >11.25pt</option>\n        <option value="12" >12pt</option>\n        <option value="12.75" >12.75pt</option>\n        <option value="13.5" >13.5pt</option>\n        <option value="14.25" >14.25pt</option>\n        <option value="15" >15pt</option>\n        <option value="15.75" >15.75pt</option>\n        <option value="16.5" >16.5pt</option>\n        <option value="17.25" >17.25pt</option>\n        <option value="18" >18pt</option>\n        <option value="18.75" >18.75pt</option>\n        <option value="19.5" >19.5pt</option>\n        <option value="20.25" >20.25pt</option>\n        <option value="21" >21pt</option>\n        <option value="21.75" >21.75pt</option>\n        <option value="22.5" >22.5pt</option>\n        <option value="23.25" >23.25pt</option>\n        <option value="24" >24pt</option>\n        <option value="24.75" >24.75pt</option>\n        <option value="25.5" >25.5pt</option>\n        <option value="26.25" >26.25pt</option>\n        <option value="27" >27pt</option>\n        <option value="27.75" >27.75pt</option>\n        <option value="28.5" >28.5pt</option>\n        <option value="29.25" >29.25pt</option>\n        <option value="30" >30pt</option>\n        <option value="30.75" >30.75pt</option>\n        <option value="31.5" >31.5pt</option>\n        <option value="32.25" >32.25pt</option>\n        <option value="33" >33pt</option>\n        <option value="33.75" >33.75pt</option>\n        <option value="34.5" >34.5pt</option>\n        <option value="35.25" >35.25pt</option>\n        <option value="36" >36pt</option>\n        </select>\n        </div>\n    </div>'), this.target;
            }, t.prototype.getValue = function () {
                var t = this.target.find("select").val();
                if (t) return parseFloat(t.toString());
            }, t.prototype.setValue = function (t) {
                t && (this.target.find('option[value="' + t + '"]').length || this.target.find("select").prepend('<option value="' + t + '" >' + t + "</option>"));
                this.target.find("select").val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        f = function () {
            function t() {
                this.name = "tableHeaderFontSize";
            }

            return t.prototype.css = function (t, e) {
                if (t.find("thead").length) {
                    if (e) return t.find("thead").css("font-size", e + "pt"), "font-size:" + e + "pt";
                    t.find("thead").map(function (t, e) {
                        e.style.fontSize = "";
                    });
                }

                return null;
            }, t.prototype.createTarget = function () {
                return this.target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(' <div class="hiprint-option-item">\n        <div class="hiprint-option-item-label">\n        表头字体大小\n        </div>\n        <div class="hiprint-option-item-field">\n        <select class="auto-submit">\n        <option value="" >默认</option>\n        <option value="6" >6pt</option>\n        <option value="6.75" >6.75pt</option>\n        <option value="7.5" >7.5pt</option>\n        <option value="8.25" >8.25pt</option>\n        <option value="9" >9pt</option>\n        <option value="9.75" >9.75pt</option>\n        <option value="10.5" >10.5pt</option>\n        <option value="11.25" >11.25pt</option>\n        <option value="12" >12pt</option>\n        <option value="12.75" >12.75pt</option>\n        <option value="13.5" >13.5pt</option>\n        <option value="14.25" >14.25pt</option>\n        <option value="15" >15pt</option>\n        <option value="15.75" >15.75pt</option>\n        <option value="16.5" >16.5pt</option>\n        <option value="17.25" >17.25pt</option>\n        <option value="18" >18pt</option>\n        <option value="18.75" >18.75pt</option>\n        <option value="19.5" >19.5pt</option>\n        <option value="20.25" >20.25pt</option>\n        <option value="21" >21pt</option>\n        <option value="21.75" >21.75pt</option>\n        </select>\n        </div>\n    </div>'), this.target;
            }, t.prototype.getValue = function () {
                var t = this.target.find("select").val();
                if (t) return parseFloat(t.toString());
            }, t.prototype.setValue = function (t) {
                t && (this.target.find('option[value="' + t + '"]').length || this.target.find("select").prepend('<option value="' + t + '" >' + t + "</option>"));
                this.target.find("select").val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        g = function () {
            function t() {
                this.name = "tableHeaderFontWeight";
            }

            return t.prototype.css = function (t, e) {
                if (t.find("thead").length) {
                    if (e) return t.find("thead tr td").css("font-weight", e), "font-weight:" + e;
                    t.find("thead tr td").map(function (t, e) {
                        e.style.fontWeight = "";
                    });
                }

                return null;
            }, t.prototype.createTarget = function () {
                return this.target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(' <div class="hiprint-option-item">\n        <div class="hiprint-option-item-label">\n        表头字体粗细\n        </div>\n        <div class="hiprint-option-item-field">\n        <select class="auto-submit"> \n        <option value="" >默认</option>\n        <option value="lighter" >更细</option>\n        <option value="bold" >粗体</option>\n        <option value="bolder" >粗体+</option>\n        <option value="100" >100</option>\n        <option value="200" >200</option>\n        <option value="300" >300</option>\n        <option value="400" >400</option>\n        <option value="500" >500</option>\n        <option value="600" >600</option>\n        <option value="700" >700</option>\n        <option value="800" >800</option>\n        <option value="900" >900</option>\n        </select>\n        </div>\n    </div>'), this.target;
            }, t.prototype.getValue = function () {
                var t = this.target.find("select").val();
                if (t) return t;
            }, t.prototype.setValue = function (t) {
                t && (this.target.find('option[value="' + t + '"]').length || this.target.find("select").prepend('<option value="' + t + '" >' + t + "</option>"));
                this.target.find("select").val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        m = function () {
            function t() {
                this.name = "tableBodyCellBorder";
            }

            return t.prototype.css = function (t, e) {
                if (t.find("tbody tr td").length) {
                    if ("border" == e) return t.find("tbody tr td").css("border", "1px solid"), "border:1px solid";
                    "noBorder" == e ? t.find("tbody tr td").css("border", "0px solid") : t.find("tbody tr td").map(function (t, e) {
                        e.style.border = "";
                    });
                }

                return null;
            }, t.prototype.createTarget = function () {
                return this.target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(' <div class="hiprint-option-item">\n        <div class="hiprint-option-item-label">\n            表体单元格\n        </div>\n        <div class="hiprint-option-item-field">\n            <select class="auto-submit">\n            <option value="" >默认</option>\n            <option value="border" >有边框</option>\n            <option value="noBorder" >无边框</option>\n            </select>\n        </div>\n    </div>'), this.target;
            }, t.prototype.getValue = function () {
                var t = this.target.find("select").val();
                if (t) return t.toString();
            }, t.prototype.setValue = function (t) {
                this.target.find("select").val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        v = function () {
            function t() {
                this.name = "tableBodyRowHeight";
            }

            return t.prototype.css = function (t, e) {
                if (t.find("tbody tr td").length) {
                    if (e) return t.find("tbody tr td:not([rowspan])").css("height", e + "pt"), "height:" + e + "pt";
                    t.find("tbody tr td").map(function (t, e) {
                        e.style.height = "";
                    });
                }

                return null;
            }, t.prototype.createTarget = function () {
                return this.target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(' <div class="hiprint-option-item">\n        <div class="hiprint-option-item-label">\n            表体行高\n        </div>\n        <div class="hiprint-option-item-field">\n            <select class="auto-submit">\n            <option value="" >默认</option>\n            <option value="6" >6pt</option>\n            <option value="6.75" >6.75pt</option>\n            <option value="7.5" >7.5pt</option>\n            <option value="8.25" >8.25pt</option>\n            <option value="9" >9pt</option>\n            <option value="9.75" >9.75pt</option>\n            <option value="10.5" >10.5pt</option>\n            <option value="11.25" >11.25pt</option>\n            <option value="12" >12pt</option>\n            <option value="12.75" >12.75pt</option>\n            <option value="13.5" >13.5pt</option>\n            <option value="14.25" >14.25pt</option>\n            <option value="15" >15pt</option>\n            <option value="15.75" >15.75pt</option>\n            <option value="16.5" >16.5pt</option>\n            <option value="17.25" >17.25pt</option>\n            <option value="18" >18pt</option>\n            <option value="18.75" >18.75pt</option>\n            <option value="19.5" >19.5pt</option>\n            <option value="20.25" >20.25pt</option>\n            <option value="21" >21pt</option>\n            <option value="21.75" >21.75pt</option>\n            <option value="22.5" >22.5pt</option>\n            <option value="23.25" >23.25pt</option>\n            <option value="24" >24pt</option>\n            <option value="24.75" >24.75pt</option>\n            <option value="25.5" >25.5pt</option>\n            <option value="26.25" >26.25pt</option>\n            <option value="27" >27pt</option>\n            <option value="27.75" >27.75pt</option>\n            <option value="28.5" >28.5pt</option>\n            <option value="29.25" >29.25pt</option>\n            <option value="30" >30pt</option>\n            <option value="30.75" >30.75pt</option>\n            <option value="31.5" >31.5pt</option>\n            <option value="32.25" >32.25pt</option>\n            <option value="33" >33pt</option>\n            <option value="33.75" >33.75pt</option>\n            <option value="34.5" >34.5pt</option>\n            <option value="35.25" >35.25pt</option>\n            <option value="36" >36pt</option>\n            </select>\n        </div>\n    </div>'), this.target;
            }, t.prototype.getValue = function () {
                var t = this.target.find("select").val();
                if (t) return parseFloat(t.toString());
            }, t.prototype.setValue = function (t) {
                t && (this.target.find('option[value="' + t + '"]').length || this.target.find("select").prepend('<option value="' + t + '" >' + t + "</option>"));
                this.target.find("select").val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        y = function () {
            function t() {
                this.name = "tableHeaderBackground";
            }

            return t.prototype.css = function (t, e) {
                if (t.find("thead").length) {
                    if (e) return t.find("thead").css("background", e), "background:" + e;
                    t.find("thead").map(function (t, e) {
                        e.style.background = "";
                    });
                }

                return null;
            }, t.prototype.createTarget = function () {
                return this.target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(' <div class="hiprint-option-item">\n        <div class="hiprint-option-item-label">\n        表头背景\n        </div>\n        <div class="hiprint-option-item-field">\n        <input type="text" class="auto-submit" />\n        </div>\n    </div>'), this.target;
            }, t.prototype.getValue = function () {
                var t = this.target.find("input").val();
                if (t) return t.toString();
            }, t.prototype.setValue = function (t) {
                this.target.find("input").minicolors({
                    defaultValue: t || "",
                    theme: "bootstrap"
                }), this.target.find("input").val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        b = function () {
            function t() {
                this.name = "borderWidth";
            }

            return t.prototype.createTarget = function () {
                return this.target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(' <div class="hiprint-option-item">\n        <div class="hiprint-option-item-label">\n        边框大小\n        </div>\n        <div class="hiprint-option-item-field">\n        <select class="auto-submit">\n        <option value="" >默认</option>\n        <option value="0.75" >0.75pt</option>\n        <option value="1.5" >1.5pt</option>\n        <option value="2.25" >2.25pt</option>\n        <option value="3" >3pt</option>\n        <option value="3.75" >3.75pt</option>\n        <option value="4.5" >4.5pt</option>\n        <option value="5.25" >5.25pt</option>\n        <option value="6" >6pt</option>\n        <option value="6.75" >6.75pt</option>\n        </select>\n        </div>\n    </div>'), this.target;
            }, t.prototype.css = function (t, e) {
                if (t && t.length) {
                    if (e) return t.css("border-width", e + "pt"), "border-width:" + e + "pt";
                    t[0].style.borderWidth = "";
                }

                return null;
            }, t.prototype.getValue = function () {
                var t = this.target.find("select").val();
                if (t) return t.toString();
            }, t.prototype.setValue = function (t) {
                t && (this.target.find('option[value="' + t + '"]').length || this.target.find("select").prepend('<option value="' + t + '" >' + t + "</option>"));
                this.target.find("select").val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        E = function () {
            function t() {
                this.name = "barcodeMode";
            }

            return t.prototype.createTarget = function () {
                return this.target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(' <div class="hiprint-option-item">\n        <div class="hiprint-option-item-label">\n        条形码格式\n        </div>\n        <div class="hiprint-option-item-field">\n        <select class="auto-submit">\n        <option value="" >默认</option>\n        <option value="CODE128A" >CODE128A</option>\n        <option value="CODE128B" >CODE128B</option>\n        <option value="CODE128C" >CODE128C</option>\n        <option value="CODE39" >CODE39</option>\n        <option value="EAN-13" >EAN-13</option>\n        <option value="EAN-8" >EAN-8</option>\n        <option value="EAN-5" >EAN-5</option>\n        <option value="EAN-2" >EAN-2</option>\n        <option value="UPC（A）" >UPC（A）</option>\n        <option value="ITF" >ITF</option>\n        <option value="ITF-14" >ITF-14</option>\n        <option value="MSI" >MSI</option>\n            <option value="MSI10" >MSI10</option>\n            <option value="MSI11" >MSI11</option>\n            <option value="MSI1010" >MSI1010</option>\n            <option value="MSI1110" >MSI1110</option>\n            <option value="Pharmacode" >Pharmacode</option>\n        </select>\n        </div>\n    </div>'), this.target;
            }, t.prototype.getValue = function () {
                var t = this.target.find("select").val();
                return t || void 0;
            }, t.prototype.setValue = function (t) {
                this.target.find("select").val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        T = function () {
            function t() {
                this.name = "color";
            }

            return t.prototype.css = function (t, e) {
                if (t && t.length) {
                    if (e) return t.css("color", e), "color:" + e;
                    t[0].style.color = "";
                }

                return null;
            }, t.prototype.createTarget = function () {
                return this.target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(' <div class="hiprint-option-item">\n        <div class="hiprint-option-item-label">\n        字体颜色\n        </div>\n        <div class="hiprint-option-item-field">\n        <input type="text" class="auto-submit"/>\n        </div>\n    </div>'), this.target;
            }, t.prototype.getValue = function () {
                var t = this.target.find("input").val();
                if (t) return t.toString();
            }, t.prototype.setValue = function (t) {
                this.target.find("input").minicolors({
                    defaultValue: t || "",
                    theme: "bootstrap"
                }), this.target.find("input").val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        P = function () {
            function t() {
                this.name = "textDecoration";
            }

            return t.prototype.createTarget = function () {
                return this.target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(' <div class="hiprint-option-item">\n        <div class="hiprint-option-item-label">\n        文本修饰\n        </div>\n        <div class="hiprint-option-item-field">\n        <select class="auto-submit">\n        <option value="" >默认</option>\n            <option value="underline" >下划线。</option>\n            <option value="overline" >上划线</option>\n            <option value="line-through" >穿梭线</option>\n           \n        </select>\n        </div>\n    </div>'), this.target;
            }, t.prototype.css = function (t, e) {
                if (t && t.length) {
                    if (e) return t.css("text-decoration", e), "text-decoration:" + e;
                    t[0].style.textDecoration = "";
                }

                return null;
            }, t.prototype.getValue = function () {
                var t = this.target.find("select").val();
                if (t) return t.toString();
            }, t.prototype.setValue = function (t) {
                t && (this.target.find('option[value="' + t + '"]').length || this.target.find("select").prepend('<option value="' + t + '" >' + t + "</option>"));
                this.target.find("select").val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        _ = function () {
            function t() {
                this.name = "field";
            }

            return t.prototype.createTarget = function (t) {
                var e = void 0;

                if (t && (e = t.getFields()), e) {
                    this.isSelect = !0;
                    var n = ' <div class="hiprint-option-item hiprint-option-item-row">\n            <div class="hiprint-option-item-label">\n            字段名\n            </div>\n            <div class="hiprint-option-item-field">\n            <select class="auto-submit">\n                <option value="" >请选择字段</option>';
                    e.forEach(function (t, e) {
                        n += ' <option value="' + (t.field || "") + '" >' + (t.text || "") + "</option>";
                    }), n += " </select>\n            </div>\n        </div>", this.target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(n);
                } else {
                    this.isSelect = !1;
                    this.target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(' <div class="hiprint-option-item hiprint-option-item-row">\n            <div class="hiprint-option-item-label">\n            字段名\n            </div>\n            <div class="hiprint-option-item-field">\n            <input type="text" placeholder="请输入字段名" class="auto-submit">\n            </div>\n        </div>');
                }

                return this.target;
            }, t.prototype.getValue = function () {
                return (this.isSelect ? this.target.find("select").val() : this.target.find("input").val()) || void 0;
            }, t.prototype.setValue = function (t) {
                this.isSelect ? t && (this.target.find('option[value="' + t + '"]').length || this.target.find("select").prepend('<option value="' + t + '" >' + t + "</option>"), this.target.find("select").val(t)) : this.target.find("input").val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        w = function () {
            function t() {
                this.name = "title";
            }

            return t.prototype.createTarget = function () {
                return this.target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(' <div class="hiprint-option-item hiprint-option-item-row">\n        <div class="hiprint-option-item-label">\n        标题\n        </div>\n        <div class="hiprint-option-item-field">\n        <textarea style="height:50px;" placeholder="请输入标题" class="auto-submit"></textarea>\n        </div>\n    </div>'), this.target;
            }, t.prototype.getValue = function () {
                var t = this.target.find("textarea").val();
                if (t) return t;
            }, t.prototype.setValue = function (t) {
                this.target.find("textarea").val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        x = function () {
            function t() {
                this.name = "testData";
            }

            return t.prototype.createTarget = function () {
                return this.target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(' <div class="hiprint-option-item hiprint-option-item-row">\n        <div class="hiprint-option-item-label">\n        测试数据\n        </div>\n        <div class="hiprint-option-item-field">\n        <input type="text" placeholder="仅字段名称存在时有效" class="auto-submit" >\n        </div>\n    </div>'), this.target;
            }, t.prototype.getValue = function () {
                var t = this.target.find("input").val();
                if (t) return t.toString();
            }, t.prototype.setValue = function (t) {
                this.target.find("input").val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        C = function () {
            function t() {
                this.name = "src";
            }

            return t.prototype.createTarget = function () {
                return this.target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(' <div class="hiprint-option-item hiprint-option-item-row">\n        <div class="hiprint-option-item-label">\n        图片地址\n        </div>\n        <div class="hiprint-option-item-field">\n        <input type="text" placeholder="请输入图片地址" class="auto-submit">\n        </div>\n    </div>'), this.target;
            }, t.prototype.getValue = function () {
                var t = this.target.find("input").val();
                if (t) return t.toString();
            }, t.prototype.setValue = function (t) {
                this.target.find("input").val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        O = function () {
            function t() {
                this.name = "borderColor";
            }

            return t.prototype.css = function (t, e) {
                if (t && t.length) {
                    if (e) return t.css("border-color", e), "border-color:" + e;
                    t[0].style.borderColor = "";
                }

                return null;
            }, t.prototype.createTarget = function () {
                return this.target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(' <div class="hiprint-option-item">\n        <div class="hiprint-option-item-label">\n        边框颜色\n        </div>\n        <div class="hiprint-option-item-field">\n        <input type="text" class="auto-submit" />\n        </div>\n    </div>'), this.target;
            }, t.prototype.getValue = function () {
                var t = this.target.find("input").val();
                if (t) return t.toString();
            }, t.prototype.setValue = function (t) {
                this.target.find("input").minicolors({
                    defaultValue: t || "",
                    theme: "bootstrap"
                }), this.target.find("input").val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        H = function () {
            function t() {
                this.name = "paperNumberFormat";
            }

            return t.prototype.createTarget = function () {
                return this.target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(' <div class="hiprint-option-item hiprint-option-item-row">\n        <div class="hiprint-option-item-label">\n        页码格式\n        </div>\n        <div class="hiprint-option-item-field">\n        <input type="text" placeholder="paperNo-paperCount" class="auto-submit">\n        </div>\n    </div>'), this.target;
            }, t.prototype.getValue = function () {
                var t = this.target.find("input").val();
                if (t) return t.toString();
            }, t.prototype.setValue = function (t) {
                this.target.find("input").val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        D = function () {
            function t() {
                this.name = "paperNumberDisabled";
            }

            return t.prototype.createTarget = function () {
                return this.target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(' <div class="hiprint-option-item">\n        <div class="hiprint-option-item-label">\n        启用/禁用\n        </div>\n        <div class="hiprint-option-item-field">\n        <select class="auto-submit">\n        <option value="" >默认</option>\n        <option value="false" >启用</option>\n        <option value="true" >禁用</option>\n        </select>\n        </div>\n    </div>'), this.target;
            }, t.prototype.getValue = function () {
                if ("true" == this.target.find("select").val()) return !0;
            }, t.prototype.setValue = function (t) {
                this.target.find("select").val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        I = function () {
            function t() {
                this.name = "longTextIndent";
            }

            return t.prototype.css = function (t, e) {
                return null;
            }, t.prototype.createTarget = function () {
                return this.target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(' <div class="hiprint-option-item">\n        <div class="hiprint-option-item-label">\n        每行缩进\n        </div>\n        <div class="hiprint-option-item-field">\n        <select class="auto-submit">\n        <option value="" >默认</option>\n        <option value="6" >6pt</option>\n        <option value="6.75" >6.75pt</option>\n        <option value="7.5" >7.5pt</option>\n        <option value="8.25" >8.25pt</option>\n        <option value="9" >9pt</option>\n        <option value="9.75" >9.75pt</option>\n        <option value="10.5" >10.5pt</option>\n        <option value="11.25" >11.25pt</option>\n        <option value="12" >12pt</option>\n        <option value="12.75" >12.75pt</option>\n        <option value="13.5" >13pt</option>\n        <option value="14.25" >14.25pt</option>\n        <option value="15" >15pt</option>\n        <option value="15.75" >15.75pt</option>\n        <option value="16.5" >16.5pt</option>\n        <option value="17.25" >17.25pt</option>\n        <option value="18" >18pt</option>\n        <option value="18.75" >18.75pt</option>\n        <option value="19.5" >19.5pt</option>\n        <option value="20.25" >20.25pt</option>\n        <option value="21" >21pt</option>\n        <option value="21.75" >21.75pt</option>\n        <option value="22.5" >22.5pt</option>\n        <option value="23.25" >23.25pt</option>\n        <option value="24" >24pt</option>\n        <option value="24.75" >24.75pt</option>\n        <option value="25.5" >25.5pt</option>\n        <option value="26.25" >26.25pt</option>\n        <option value="27" >27pt</option>\n        <option value="27.75" >27.75pt</option>\n        <option value="28.5" >28.5pt</option>\n        <option value="29.25" >29.25pt</option>\n        <option value="30" >30pt</option>\n        <option value="30.75" >30.75pt</option>\n        <option value="31.5" >31.5pt</option>\n        <option value="32.25" >32.25pt</option>\n        <option value="33" >33pt</option>\n        <option value="33.75" >33.75pt</option>\n        <option value="34.5" >34.5pt</option>\n        <option value="35.25" >35.25pt</option>\n        <option value="36" >36pt</option>\n        </select>\n        </div>\n    </div>'), this.target;
            }, t.prototype.getValue = function () {
                var t = this.target.find("select").val();
                if (t) return parseFloat(t.toString());
            }, t.prototype.setValue = function (t) {
                t && (this.target.find('option[value="' + t + '"]').length || this.target.find("select").prepend('<option value="' + t + '" >' + t + "</option>"));
                this.target.find("select").val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        R = function () {
            function t() {
                this.name = "showInPage";
            }

            return t.prototype.createTarget = function () {
                return this.target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(' <div class="hiprint-option-item">\n        <div class="hiprint-option-item-label">\n        显示规则\n        </div>\n        <div class="hiprint-option-item-field">\n        <select class="auto-submit">\n        <option value="" >默认</option>\n            <option value="first" >首页</option>\n            <option value="odd" >奇数页</option>\n            <option value="even" >偶数页</option>\n            <option value="last" >尾页</option>\n        </select>\n        </div>\n    </div>'), this.target;
            }, t.prototype.getValue = function () {
                var t = this.target.find("select").val();
                if (t) return t.toString();
            }, t.prototype.setValue = function (t) {
                this.target.find("select").val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        M = function () {
            function t() {
                this.name = "panelPaperRule";
            }

            return t.prototype.createTarget = function () {
                return this.target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(' <div class="hiprint-option-item">\n        <div class="hiprint-option-item-label">\n        打印规则\n        </div>\n        <div class="hiprint-option-item-field">\n        <select class="auto-submit">\n        <option value="" >默认</option>\n            <option value="odd" >保持奇数</option>\n            <option value="even" >保持偶数</option>\n        </select>\n        </div>\n    </div>'), this.target;
            }, t.prototype.getValue = function () {
                var t = this.target.find("select").val();
                if (t) return t.toString();
            }, t.prototype.setValue = function (t) {
                this.target.find("select").val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        S = function () {
            function t() {
                this.name = "leftSpaceRemoved";
            }

            return t.prototype.createTarget = function () {
                return this.target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(' <div class="hiprint-option-item">\n        <div class="hiprint-option-item-label">\n        移除段落左侧空白\n        </div>\n        <div class="hiprint-option-item-field">\n        <select class="auto-submit">\n        <option value="" >默认</option>\n            <option value="true" >移除</option>\n            <option value="false" >不移除</option>\n        </select>\n        </div>\n    </div>'), this.target;
            }, t.prototype.getValue = function () {
                if ("false" == this.target.find("select").val()) return !1;
            }, t.prototype.setValue = function (t) {
                this.target.find("select").val((null == t ? "" : t).toString());
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        B = function () {
            function t() {
                this.name = "firstPaperFooter";
            }

            return t.prototype.createTarget = function () {
                return this.target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(' <div class="hiprint-option-item hiprint-option-item-row">\n        <div class="hiprint-option-item-label">\n        首页页尾\n        </div>\n        <div class="hiprint-option-item-field">\n        <input type="text" placeholder="首页页尾" class="auto-submit">\n        </div>\n    </div>'), this.target;
            }, t.prototype.getValue = function () {
                var t = this.target.find("input").val();
                if (t) return parseFloat(t.toString());
            }, t.prototype.setValue = function (t) {
                this.target.find("input").val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        F = function () {
            function t() {
                this.name = "lastPaperFooter";
            }

            return t.prototype.createTarget = function () {
                return this.target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(' <div class="hiprint-option-item hiprint-option-item-row">\n        <div class="hiprint-option-item-label">\n        尾页页尾\n        </div>\n        <div class="hiprint-option-item-field">\n        <input type="text" placeholder="尾页页尾" class="auto-submit">\n        </div>\n    </div>'), this.target;
            }, t.prototype.getValue = function () {
                var t = this.target.find("input").val();
                if (t) return parseFloat(t.toString());
            }, t.prototype.setValue = function (t) {
                this.target.find("input").val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        L = function () {
            function t() {
                this.name = "evenPaperFooter";
            }

            return t.prototype.createTarget = function () {
                return this.target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(' <div class="hiprint-option-item hiprint-option-item-row">\n        <div class="hiprint-option-item-label">\n        偶数页页尾\n        </div>\n        <div class="hiprint-option-item-field">\n        <input type="text" placeholder="偶数页页尾" class="auto-submit">\n        </div>\n    </div>'), this.target;
            }, t.prototype.getValue = function () {
                var t = this.target.find("input").val();
                if (t) return parseFloat(t.toString());
            }, t.prototype.setValue = function (t) {
                this.target.find("input").val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        A = function () {
            function t() {
                this.name = "oddPaperFooter";
            }

            return t.prototype.createTarget = function () {
                return this.target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(' <div class="hiprint-option-item hiprint-option-item-row">\n        <div class="hiprint-option-item-label">\n        奇数页页尾\n        </div>\n        <div class="hiprint-option-item-field">\n        <input type="text" placeholder="奇数页页尾" class="auto-submit" >\n        </div>\n    </div>'), this.target;
            }, t.prototype.getValue = function () {
                var t = this.target.find("input").val();
                if (t) return parseFloat(t.toString());
            }, t.prototype.setValue = function (t) {
                this.target.find("input").val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        z = function () {
            function t() {
                this.name = "fixed";
            }

            return t.prototype.createTarget = function () {
                return this.target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(' <div class="hiprint-option-item">\n        <div class="hiprint-option-item-label">\n        位置固定\n        </div>\n        <div class="hiprint-option-item-field">\n        <select class="auto-submit">\n        <option value="" >默认</option>\n            <option value="false" >否</option>\n            <option value="true" >是</option>\n        </select>\n        </div>\n    </div>'), this.target;
            }, t.prototype.getValue = function () {
                if ("true" == this.target.find("select").val()) return !0;
            }, t.prototype.setValue = function (t) {
                this.target.find("select").val((null == t ? "" : t).toString());
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        k = function () {
            function t() {
                this.name = "axis";
            }

            return t.prototype.createTarget = function () {
                return this.target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(' <div class="hiprint-option-item">\n        <div class="hiprint-option-item-label">\n        拖动方向\n        </div>\n        <div class="hiprint-option-item-field">\n        <select class="auto-submit">\n        <option value="" >默认</option>\n        <option value="v" >横向</option>\n        <option value="h" >竖向</option>\n        </select>\n        </div>\n    </div>'), this.target;
            }, t.prototype.getValue = function () {
                var t = this.target.find("select").val();
                return t || void 0;
            }, t.prototype.setValue = function (t) {
                this.target.find("select").val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        N = function () {
            function t() {
                this.name = "leftOffset";
            }

            return t.prototype.createTarget = function () {
                return this.target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(' <div class="hiprint-option-item hiprint-option-item-row">\n        <div class="hiprint-option-item-label">\n        左偏移\n        </div>\n        <div class="hiprint-option-item-field">\n        <input type="text" placeholder="偏移量pt" class="auto-submit" >\n        </div>\n    </div>'), this.target;
            }, t.prototype.getValue = function () {
                var t = this.target.find("input").val();
                if (t) return parseFloat(t.toString());
            }, t.prototype.setValue = function (t) {
                this.target.find("input").val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        V = function () {
            function t() {
                this.name = "lHeight";
            }

            return t.prototype.createTarget = function () {
                return this.target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(' <div class="hiprint-option-item hiprint-option-item-row">\n        <div class="hiprint-option-item-label">\n        最低高度\n        </div>\n        <div class="hiprint-option-item-field">\n        <input type="text" placeholder="文本过短或为空时的高度" class="auto-submit">\n        </div>\n    </div>'), this.target;
            }, t.prototype.getValue = function () {
                var t = this.target.find("input").val();
                if (t) return parseFloat(t.toString());
            }, t.prototype.setValue = function (t) {
                this.target.find("input").val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        W = function () {
            function t() {
                this.name = "unShowInPage";
            }

            return t.prototype.createTarget = function () {
                return this.target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(' <div class="hiprint-option-item">\n        <div class="hiprint-option-item-label">\n        隐藏规则\n        </div>\n        <div class="hiprint-option-item-field">\n        <select class="auto-submit">\n        <option value="" >默认</option>\n            <option value="first" >首页</option>\n            <option value="last" >尾页</option>\n        </select>\n        </div>\n    </div>'), this.target;
            }, t.prototype.getValue = function () {
                var t = this.target.find("select").val();
                if (t) return t;
            }, t.prototype.setValue = function (t) {
                this.target.find("select").val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        j = function () {
            function t() {
                this.name = "tableBodyRowBorder";
            }

            return t.prototype.css = function (t, e) {
                if (t.find("tbody tr").length) {
                    if ("border" == e) return t.find("tbody tr").css("border", "1px solid"), "border:1pt solid";
                    "noBorder" == e ? t.find("tbody tr").css("border", "0px solid") : "topBorder" == e ? (t.find("tbody tr").css("border", "0px solid"), t.find("tbody tr").css("border-top", "1px solid")) : "bottomBorder" == e ? (t.find("tbody tr").css("border", "0px solid"), t.find("tbody tr").css("border-bottom", "1px solid")) : "topBottomBorder" == e ? (t.find("tbody tr").css("border", "0px solid"), t.find("tbody tr").css("border-top", "1px solid"), t.find("tbody tr").css("border-bottom", "1px solid")) : t.find("tbody tr").map(function (t, e) {
                        e.style.border = "";
                    });
                }

                return null;
            }, t.prototype.createTarget = function () {
                return this.target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(' <div class="hiprint-option-item">\n        <div class="hiprint-option-item-label">\n        表体行边框\n        </div>\n        <div class="hiprint-option-item-field">\n        <select class="auto-submit">\n        <option value="" >默认</option>    \n        <option value="border" >有边框</option>\n        <option value="noBorder" >无边框</option>\n        <option value="topBorder" >上边框</option>\n        <option value="bottomBorder" >下边框</option>\n        <option value="topBottomBorder" >上下边框</option>\n        </select>\n        </div>\n    </div>'), this.target;
            }, t.prototype.getValue = function () {
                var t = this.target.find("select").val();
                if (t) return t.toString();
            }, t.prototype.setValue = function (t) {
                this.target.find("select").val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        U = function () {
            function t() {
                this.name = "transform";
            }

            return t.prototype.css = function (t, e) {
                if (t && t.length) {
                    var n = t.find(".hiprint-printElement-content");
                    if (e) return n.css("transform", "rotate(" + e + "deg)"), n.css("-ms-transform", "rotate(" + e + "deg)"), n.css("-moz-transform", "rotate(" + e + "deg)"), n.css("-webkit-transform", "rotate(" + e + "deg)"), n.css("-o-transform", "rotate(" + e + "deg)"), "transform:rotate(" + e + "deg)";
                    n.length && (n[0].style.transform = "");
                }

                return null;
            }, t.prototype.createTarget = function () {
                return this.target = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div class="hiprint-option-item">\n        <div class="hiprint-option-item-label">\n        旋转角度\n        </div>\n        <div class="hiprint-option-item-field">\n        <input type="text" class="auto-submit"/>\n        </div>\n    </div>'), this.target;
            }, t.prototype.getValue = function () {
                var t = this.target.find("input").val();
                if (t) return parseFloat(t.toString());
            }, t.prototype.setValue = function (t) {
                this.target.find("input").val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        K = function () {
            function t() {
                this.name = "optionsGroup";
            }

            return t.prototype.createTarget = function () {
                return this.target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(' <div class="hiprint-option-item hiprint-option-item-row">\n        <div class="hiprint-option-item-label">\n        边框设置\n        </div>\n       \n    </div>'), this.target;
            }, t.prototype.getValue = function () { }, t.prototype.setValue = function (t) { }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        G = function () {
            function t() {
                this.name = "borderTop";
            }

            return t.prototype.css = function (t, e) {
                if (t && t.length) {
                    if (e) return t.css("border-top-style", e), "border-top:1px";
                    t[0].style.borderTopStyle = "", t[0].style.borderTopWidth = "";
                }

                return null;
            }, t.prototype.createTarget = function () {
                return this.target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(' <div class="hiprint-option-item">\n        <div class="hiprint-option-item-label">\n        上边框\n        </div>\n        <div class="hiprint-option-item-field">\n        <select class="auto-submit">\n            <option value="" >否</option>\n            <option value="solid" >实线</option>\n            <option value="dotted" >虚线</option>\n        </select>\n        </div>\n    </div>'), this.target;
            }, t.prototype.getValue = function () {
                var t = this.target.find("select").val();
                if (t) return t;
            }, t.prototype.setValue = function (t) {
                this.target.find("select").val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        q = function () {
            function t() {
                this.name = "borderLeft";
            }

            return t.prototype.css = function (t, e) {
                if (t && t.length) {
                    if (e) return t.css("border-left-style", e), "border-left:1px";
                    t[0].style.borderLeftStyle = "", t[0].style.borderLeftWidth = "";
                }

                return null;
            }, t.prototype.createTarget = function () {
                return this.target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(' <div class="hiprint-option-item">\n        <div class="hiprint-option-item-label">\n        左边框\n        </div>\n        <div class="hiprint-option-item-field">\n        <select>\n        <option value="" >否</option>\n        <option value="solid" >实线</option>\n        <option value="dotted" >虚线</option>\n        </select>\n        </div>\n    </div>'), this.target;
            }, t.prototype.getValue = function () {
                var t = this.target.find("select").val();
                if (t) return t;
            }, t.prototype.setValue = function (t) {
                this.target.find("select").val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        X = function () {
            function t() {
                this.name = "borderRight";
            }

            return t.prototype.css = function (t, e) {
                if (t && t.length) {
                    if (e) return t.css("border-right-style", e), "border-right:1px";
                    t[0].style.borderRightStyle = "", t[0].style.borderRightWidth = "";
                }

                return null;
            }, t.prototype.createTarget = function () {
                return this.target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(' <div class="hiprint-option-item">\n        <div class="hiprint-option-item-label">\n        右边框\n        </div>\n        <div class="hiprint-option-item-field">\n        <select>\n        <option value="" >否</option>\n        <option value="solid" >实线</option>\n        <option value="dotted" >虚线</option>\n        </select>\n        </div>\n    </div>'), this.target;
            }, t.prototype.getValue = function () {
                var t = this.target.find("select").val();
                if (t) return t;
            }, t.prototype.setValue = function (t) {
                this.target.find("select").val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        Y = function () {
            function t() {
                this.name = "borderBottom";
            }

            return t.prototype.css = function (t, e) {
                if (t && t.length) {
                    if (e) return t.css("border-bottom-style", e), "border-bottom-style:1px solid";
                    t[0].style.borderBottomStyle = "", t[0].style.borderBottomWidth = "";
                }

                return null;
            }, t.prototype.createTarget = function () {
                return this.target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(' <div class="hiprint-option-item">\n        <div class="hiprint-option-item-label">\n        下边框\n        </div>\n        <div class="hiprint-option-item-field">\n        <select>\n        <option value="" >否</option>\n        <option value="solid" >实线</option>\n        <option value="dotted" >虚线</option>\n        </select>\n        </div>\n    </div>'), this.target;
            }, t.prototype.getValue = function () {
                var t = this.target.find("select").val();
                if (t) return t;
            }, t.prototype.setValue = function (t) {
                this.target.find("select").val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        J = function () {
            function t() {
                this.name = "contentPaddingLeft";
            }

            return t.prototype.css = function (t, e) {
                var n = t.find(".hiprint-printElement-content");

                if (n && n.length) {
                    if (e) return n.css("padding-left", e + "pt"), "padding-left";
                    n[0].style.paddingLeft = "";
                }

                return null;
            }, t.prototype.createTarget = function () {
                return this.target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(' <div class="hiprint-option-item">\n        <div class="hiprint-option-item-label">\n        左内边距\n        </div>\n        <div class="hiprint-option-item-field">\n        <select class="auto-submit">\n        <option value="" >默认</option>\n        <option value="0.75" >0.75pt</option>\n        <option value="1.5" >1.5pt</option>\n        <option value="2.25" >2.25pt</option>\n        <option value="3" >3pt</option>\n        <option value="3.75" >3.75pt</option>\n        <option value="4.5" >4.5pt</option>\n        <option value="5.25" >5.25pt</option>\n        <option value="6" >6pt</option>\n        <option value="6.75" >6.75pt</option>\n        <option value="7.5" >7.5pt</option>\n        <option value="8.25" >8.25pt</option>\n        <option value="9" >9pt</option>\n        <option value="9.75" >9.75pt</option>\n        <option value="10.5" >10.5pt</option>\n        <option value="11.25" >11.25pt</option>\n        <option value="12" >12pt</option>\n        <option value="12.75" >12.75pt</option>\n        <option value="13.5" >13.5pt</option>\n        <option value="14.25" >14.25pt</option>\n        <option value="15" >15pt</option>\n        <option value="15.75" >15.75pt</option>\n        <option value="16.5" >16.5pt</option>\n        <option value="17.25" >17.25pt</option>\n        <option value="18" >18pt</option>\n        <option value="18.75" >18.75pt</option>\n        <option value="19.5" >19.5pt</option>\n        <option value="20.25" >20.25pt</option>\n        <option value="21" >21pt</option>\n        <option value="21.75" >21.75pt</option>\n        </select>\n        </div>\n    </div>'), this.target;
            }, t.prototype.getValue = function () {
                var t = this.target.find("select").val();
                if (t) return parseFloat(t.toString());
            }, t.prototype.setValue = function (t) {
                t && (this.target.find('option[value="' + t + '"]').length || this.target.find("select").prepend('<option value="' + t + '" >' + t + "</option>"));
                this.target.find("select").val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        Q = function () {
            function t() {
                this.name = "contentPaddingTop";
            }

            return t.prototype.css = function (t, e) {
                var n = t.find(".hiprint-printElement-content");

                if (n && n.length) {
                    if (e) return n.css("padding-top", e + "pt"), "padding-top";
                    n[0].style.paddingTop = "";
                }

                return null;
            }, t.prototype.createTarget = function () {
                return this.target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(' <div class="hiprint-option-item">\n        <div class="hiprint-option-item-label">\n        上内边距\n        </div>\n        <div class="hiprint-option-item-field">\n        <select>\n        <option value="" >默认</option>\n        <option value="0.75" >0.75pt</option>\n        <option value="1.5" >1.5pt</option>\n        <option value="2.25" >2.25pt</option>\n        <option value="3" >3pt</option>\n        <option value="3.75" >3.75pt</option>\n        <option value="4.5" >4.5pt</option>\n        <option value="5.25" >5.25pt</option>\n        <option value="6" >6pt</option>\n        <option value="6.75" >6.75pt</option>\n        <option value="7.5" >7.5pt</option>\n        <option value="8.25" >8.25pt</option>\n        <option value="9" >9pt</option>\n        <option value="9.75" >9.75pt</option>\n        <option value="10.5" >10.5pt</option>\n        <option value="11.25" >11.25pt</option>\n        <option value="12" >12pt</option>\n        <option value="12.75" >12.75pt</option>\n        <option value="13.5" >13.5pt</option>\n        <option value="14.25" >14.25pt</option>\n        <option value="15" >15pt</option>\n        <option value="15.75" >15.75pt</option>\n        <option value="16.5" >16.5pt</option>\n        <option value="17.25" >17.25pt</option>\n        <option value="18" >18pt</option>\n        <option value="18.75" >18.75pt</option>\n        <option value="19.5" >19.5pt</option>\n        <option value="20.25" >20.25pt</option>\n        <option value="21" >21pt</option>\n        <option value="21.75" >21.75pt</option>\n        </select>\n        </div>\n    </div>'), this.target;
            }, t.prototype.getValue = function () {
                var t = this.target.find("select").val();
                if (t) return parseFloat(t.toString());
            }, t.prototype.setValue = function (t) {
                t && (this.target.find('option[value="' + t + '"]').length || this.target.find("select").prepend('<option value="' + t + '" >' + t + "</option>"));
                this.target.find("select").val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        Z = function () {
            function t() {
                this.name = "contentPaddingRight";
            }

            return t.prototype.css = function (t, e) {
                var n = t.find(".hiprint-printElement-content");

                if (n && n.length) {
                    if (e) return n.css("padding-right", e + "pt"), "padding-right";
                    n[0].style.paddingRight = "";
                }

                return null;
            }, t.prototype.createTarget = function () {
                return this.target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(' <div class="hiprint-option-item">\n        <div class="hiprint-option-item-label">\n        右内边距\n        </div>\n        <div class="hiprint-option-item-field">\n        <select>\n        <option value="" >默认</option>\n        <option value="0.75" >0.75pt</option>\n        <option value="1.5" >1.5pt</option>\n        <option value="2.25" >2.25pt</option>\n        <option value="3" >3pt</option>\n        <option value="3.75" >3.75pt</option>\n        <option value="4.5" >4.5pt</option>\n        <option value="5.25" >5.25pt</option>\n        <option value="6" >6pt</option>\n        <option value="6.75" >6.75pt</option>\n        <option value="7.5" >7.5pt</option>\n        <option value="8.25" >8.25pt</option>\n        <option value="9" >9pt</option>\n        <option value="9.75" >9.75pt</option>\n        <option value="10.5" >10.5pt</option>\n        <option value="11.25" >11.25pt</option>\n        <option value="12" >12pt</option>\n        <option value="12.75" >12.75pt</option>\n        <option value="13.5" >13.5pt</option>\n        <option value="14.25" >14.25pt</option>\n        <option value="15" >15pt</option>\n        <option value="15.75" >15.75pt</option>\n        <option value="16.5" >16.5pt</option>\n        <option value="17.25" >17.25pt</option>\n        <option value="18" >18pt</option>\n        <option value="18.75" >18.75pt</option>\n        <option value="19.5" >19.5pt</option>\n        <option value="20.25" >20.25pt</option>\n        <option value="21" >21pt</option>\n        <option value="21.75" >21.75pt</option>\n        </select>\n        </div>\n    </div>'), this.target;
            }, t.prototype.getValue = function () {
                var t = this.target.find("select").val();
                if (t) return parseFloat(t.toString());
            }, t.prototype.setValue = function (t) {
                t && (this.target.find('option[value="' + t + '"]').length || this.target.find("select").prepend('<option value="' + t + '" >' + t + "</option>"));
                this.target.find("select").val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        tt = function () {
            function t() {
                this.name = "contentPaddingBottom";
            }

            return t.prototype.css = function (t, e) {
                var n = t.find(".hiprint-printElement-content");

                if (n && n.length) {
                    if (e) return n.css("padding-bottom", e + "pt"), "padding-bottom";
                    n[0].style.paddingBottom = "";
                }

                return null;
            }, t.prototype.createTarget = function () {
                return this.target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(' <div class="hiprint-option-item">\n        <div class="hiprint-option-item-label">\n        下内边距\n        </div>\n        <div class="hiprint-option-item-field">\n        <select>\n        <option value="" >默认</option>\n        <option value="0.75" >0.75pt</option>\n        <option value="1.5" >1.5pt</option>\n        <option value="2.25" >2.25pt</option>\n        <option value="3" >3pt</option>\n        <option value="3.75" >3.75pt</option>\n        <option value="4.5" >4.5pt</option>\n        <option value="5.25" >5.25pt</option>\n        <option value="6" >6pt</option>\n        <option value="6.75" >6.75pt</option>\n        <option value="7.5" >7.5pt</option>\n        <option value="8.25" >8.25pt</option>\n        <option value="9" >9pt</option>\n        <option value="9.75" >9.75pt</option>\n        <option value="10.5" >10.5pt</option>\n        <option value="11.25" >11.25pt</option>\n        <option value="12" >12pt</option>\n        <option value="12.75" >12.75pt</option>\n        <option value="13.5" >13.5pt</option>\n        <option value="14.25" >14.25pt</option>\n        <option value="15" >15pt</option>\n        <option value="15.75" >15.75pt</option>\n        <option value="16.5" >16.5pt</option>\n        <option value="17.25" >17.25pt</option>\n        <option value="18" >18pt</option>\n        <option value="18.75" >18.75pt</option>\n        <option value="19.5" >19.5pt</option>\n        <option value="20.25" >20.25pt</option>\n        <option value="21" >21pt</option>\n        <option value="21.75" >21.75pt</option>\n        </select>\n        </div>\n    </div>'), this.target;
            }, t.prototype.getValue = function () {
                var t = this.target.find("select").val();
                if (t) return parseFloat(t.toString());
            }, t.prototype.setValue = function (t) {
                t && (this.target.find('option[value="' + t + '"]').length || this.target.find("select").prepend('<option value="' + t + '" >' + t + "</option>"));
                this.target.find("select").val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        et = function () {
            function t() {
                this.name = "borderStyle";
            }

            return t.prototype.css = function (t, e) {
                if (t && t.length) {
                    if (e) return t.css("border-style", e), "border-style:1px";
                    t[0].style.borderStyle = "";
                }

                return null;
            }, t.prototype.createTarget = function () {
                return this.target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(' <div class="hiprint-option-item">\n        <div class="hiprint-option-item-label">\n       边框样式\n        </div>\n        <div class="hiprint-option-item-field">\n        <select class="auto-submit">\n            <option value="" >默认</option>\n            <option value="solid" >实线</option>\n            <option value="dotted" >虚线</option>\n        </select>\n        </div>\n    </div>'), this.target;
            }, t.prototype.getValue = function () {
                var t = this.target.find("select").val();
                if (t) return t;
            }, t.prototype.setValue = function (t) {
                this.target.find("select").val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        nt = function () {
            function t() {
                this.name = "backgroundColor";
            }

            return t.prototype.css = function (t, e) {
                if (t && t.length) {
                    if (e) return t.css("background-color", e), "background-color:" + e;
                    t[0].style.backgroundColor = "";
                }

                return null;
            }, t.prototype.createTarget = function () {
                return this.target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(' <div class="hiprint-option-item">\n        <div class="hiprint-option-item-label">\n        背景颜色\n        </div>\n        <div class="hiprint-option-item-field">\n        <input type="text" class="auto-submit"/>\n        </div>\n    </div>'), this.target;
            }, t.prototype.getValue = function () {
                var t = this.target.find("input").val();
                if (t) return t.toString();
            }, t.prototype.setValue = function (t) {
                this.target.find("input").minicolors({
                    defaultValue: t || "",
                    theme: "bootstrap"
                }), this.target.find("input").val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        it = function () {
            function t() {
                this.name = "orient";
            }

            return t.prototype.createTarget = function () {
                return this.target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(' <div class="hiprint-option-item">\n        <div class="hiprint-option-item-label">\n        纸张方向(仅自定义纸质有效)\n        </div>\n        <div class="hiprint-option-item-field">\n        <select class="auto-submit">\n        <option value="" >默认</option>\n        <option value="1" >纵向</option>\n        <option value="2" >横向</option>\n        </select>\n        </div>\n    </div>'), this.target;
            }, t.prototype.getValue = function () {
                var t = this.target.find("select").val();
                if (t) return parseFloat(t.toString());
            }, t.prototype.setValue = function (t) {
                this.target.find("select").val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        ot = function () {
            function t() {
                this.name = "textContentVerticalAlign";
            }

            return t.prototype.createTarget = function () {
                return this.target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(' <div class="hiprint-option-item">\n        <div class="hiprint-option-item-label">\n        上下对齐\n        </div>\n        <div class="hiprint-option-item-field">\n        <select class="auto-submit">\n        <option value="" >默认</option>\n        <option value="middle" >垂直居中</option>\n        <option value="bottom" >底部</option>\n       \n        </select>\n        </div>\n    </div>'), this.target;
            }, t.prototype.css = function (t, e) {
                if (t && t.length) {
                    if (e) return "middle" === e && t.addClass("hiprint-text-content-middle"), "bottom" === e && t.addClass("hiprint-text-content-bottom"), "";
                    t.removeClass("hiprint-text-content-middle"), t.removeClass("hiprint-text-content-bottom");
                }

                return null;
            }, t.prototype.getValue = function () {
                var t = this.target.find("select").val();
                if (t) return t.toString();
            }, t.prototype.setValue = function (t) {
                this.target.find("select").val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        rt = n(5),
        at = function () {
            function t() {
                this.name = "columns";
            }

            return t.prototype.createTarget = function () {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div class="indicator"></div>').appendTo("body");
                return " </ul>\n       </div>\n    </div>", this.target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(' <div class="hiprint-option-item hiprint-option-item-row">\n       <div>\n            <ul class="hiprint-option-table-selected-columns"> </ul>\n       </div>\n    </div>'), this.target;
            }, t.prototype.getValue = function () {
                return this.buildData();
            }, t.prototype.setValue = function (t, e, n) {
                var i = this,
                    o = this;
                this.value = t, this.options = e, this.printElementType = n;
                var r = n.columns[0].filter(function (e) {
                    return 0 == t[0].columns.filter(function (t) {
                        return e.columnId == t.columnId;
                    }).length;
                }).map(function (t) {
                    var e = new rt.a(t);
                    return e.checked = !1, e;
                });
                this.allColumns = t[0].columns.concat(r), t && 1 == t.length && (this.target.find("ul").html(this.allColumns.map(function (t, e) {
                    return '<li  class="hiprint-option-table-selected-item"> <div class="hi-pretty p-default">\n                ' + (t.checked ? '<input type="checkbox"   checked column-id="' + (t.columnId || "") + '" />' : '<input type="checkbox"  column-id="' + (t.columnId || "") + '" />') + '\n                <div class="state">\n                    <label></label>\n                </div>\n            </div><span class="column-title">' + (t.title || t.descTitle || "") + "</span></li>";
                }).join("")), this.target.find("input").change(function () {
                    i.submit();
                }), this.printElementType.columnDisplayIndexEditable && this.target.find("li").hidraggable({
                    revert: !0,
                    handle: ".column-title",
                    moveUnit: "pt",
                    deltaX: 0,
                    deltaY: 0
                }).hidroppable({
                    onDragOver: function onDragOver(t, e) {
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).css("border-bottom-color", "red");
                    },
                    onDragLeave: function onDragLeave(t, e) {
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).css("border-bottom-color", "");
                    },
                    onDrop: function onDrop(t, e) {
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()(e).insertAfter(this), jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).css("border-bottom-color", ""), o.submit();
                    }
                }));
            }, t.prototype.buildData = function () {
                var t = this,
                    e = [];
                return this.allColumns.filter(function (t) {
                    t.checked = !1;
                }), (this.printElementType.columnDisplayEditable ? this.target.find("input:checked") : this.target.find("input")).map(function (n, i) {
                    var o = jquery__WEBPACK_IMPORTED_MODULE_0___default()(i).attr("column-id"),
                        r = t.options.makeColumnObj();
                    if (r[o]) r[o].checked = !0, e.push(r[o]); else {
                        var a = t.printElementType.getColumnByColumnId(o);

                        if (a) {
                            var p = new rt.a(a);
                            p.checked = !0, e.push(p);
                        }
                    }
                }), this.value[0].columns = e, this.value;
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        pt = function () {
            function t() {
                this.name = "textType";
            }

            return t.prototype.createTarget = function () {
                return this.target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(' <div class="hiprint-option-item">\n        <div class="hiprint-option-item-label">\n        打印类型\n        </div>\n        <div class="hiprint-option-item-field">\n        <select class="auto-submit">\n        <option value="" >默认</option>\n        <option value="" >文本</option>\n        <option value="barcode" >条形码</option>\n        <option value="qrcode" >二维码</option>\n        </select>\n        </div>\n    </div>'), this.target;
            }, t.prototype.getValue = function () {
                var t = this.target.find("select").val();
                if (t) return t;
            }, t.prototype.setValue = function (t) {
                this.target.find("select").val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        st = function () {
            function t() {
                this.name = "topOffset";
            }

            return t.prototype.createTarget = function () {
                return this.target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(' <div class="hiprint-option-item hiprint-option-item-row">\n        <div class="hiprint-option-item-label">\n        顶部偏移\n        </div>\n        <div class="hiprint-option-item-field">\n        <input type="text" placeholder="偏移量pt" class="auto-submit">\n        </div>\n    </div>'), this.target;
            }, t.prototype.getValue = function () {
                var t = this.target.find("input").val();
                if (t) return parseFloat(t.toString());
            }, t.prototype.setValue = function (t) {
                this.target.find("input").val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        lt = function () {
            function t() {
                this.name = "gridColumns";
            }

            return t.prototype.createTarget = function () {
                return this.target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(' <div class="hiprint-option-item">\n        <div class="hiprint-option-item-label">\n        一行多组\n        </div>\n        <div class="hiprint-option-item-field">\n        <select class="auto-submit">\n        <option value="" >默认</option>\n        <option value="2" >一行二列</option>\n        <option value="3" >一行三列</option>\n        <option value="4" >一行四列</option>\n        </select>\n        </div>\n    </div>'), this.target;
            }, t.prototype.getValue = function () {
                var t = this.target.find("select").val();
                if (t) return parseFloat(t.toString());
            }, t.prototype.setValue = function (t) {
                t && (this.target.find('option[value="' + t + '"]').length || this.target.find("select").prepend('<option value="' + t + '" >' + t + "</option>"));
                this.target.find("select").val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        ut = function () {
            function t() {
                this.name = "gridColumnsGutter";
            }

            return t.prototype.createTarget = function () {
                return this.target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(' <div class="hiprint-option-item">\n        <div class="hiprint-option-item-label">\n        一行多组间隔\n        </div>\n        <div class="hiprint-option-item-field">\n        <select class="auto-submit">\n        <option value="" >默认</option>\n        <option value="1.5" >1.5pt</option>\n        <option value="2.25" >2.25pt</option>\n        <option value="3" >3pt</option>\n        <option value="3.75" >3.75pt</option>\n        <option value="4.5" >4.5pt</option>\n        <option value="5.25" >5.25pt</option>\n        <option value="6" >6pt</option>\n        <option value="6.75" >6.75pt</option>\n        <option value="7.25" >7.25pt</option>\n        <option value="8.5" >8.5pt</option>\n        <option value="9" >9pt</option>\n        </select>\n        </div>\n    </div>'), this.target;
            }, t.prototype.getValue = function () {
                var t = this.target.find("select").val();
                if (t) return parseFloat(t.toString());
            }, t.prototype.css = function (t, e) {
                if (t && t.length) {
                    if (e) return t.find(".table-grid-row").css("margin-left", "-" + e + "pt").css("margin-right", "-" + e + "pt"), t.find(".tableGridColumnsGutterRow").css("padding-left", e + "pt").css("padding-right", e + "pt"), null;
                    t.find(".table-grid-row").map(function (t, e) {
                        e.style.marginLeft = "", e.style.marginRight = "";
                    }), t.find(".tableGridColumnsGutterRow").map(function (t, e) {
                        e.style.paddingLeft = "", e.style.paddingRight = "";
                    });
                }

                return null;
            }, t.prototype.setValue = function (t) {
                t && (this.target.find('option[value="' + t + '"]').length || this.target.find("select").prepend('<option value="' + t + '" >' + t + "</option>"));
                this.target.find("select").val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        dt = function () {
            function t() {
                this.name = "paddingLeft";
            }

            return t.prototype.css = function (t, e) {
                var n = t;

                if (n && n.length) {
                    if (e) return n.css("padding-left", e + "pt"), "padding-left";
                    n[0].style.paddingLeft = "";
                }

                return null;
            }, t.prototype.createTarget = function () {
                return this.target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(' <div class="hiprint-option-item">\n        <div class="hiprint-option-item-label">\n        左内边距\n        </div>\n        <div class="hiprint-option-item-field">\n        <select class="auto-submit">\n        <option value="" >默认</option>\n        <option value="0.75" >0.75pt</option>\n        <option value="1.5" >1.5pt</option>\n        <option value="2.25" >2.25pt</option>\n        <option value="3" >3pt</option>\n        <option value="3.75" >3.75pt</option>\n        <option value="4.5" >4.5pt</option>\n        <option value="5.25" >5.25pt</option>\n        <option value="6" >6pt</option>\n        <option value="6.75" >6.75pt</option>\n        <option value="7.5" >7.5pt</option>\n        <option value="8.25" >8.25pt</option>\n        <option value="9" >9pt</option>\n        <option value="9.75" >9.75pt</option>\n        <option value="10.5" >10.5pt</option>\n        <option value="11.25" >11.25pt</option>\n        <option value="12" >12pt</option>\n        <option value="12.75" >12.75pt</option>\n        <option value="13.5" >13.5pt</option>\n        <option value="14.25" >14.25pt</option>\n        <option value="15" >15pt</option>\n        <option value="15.75" >15.75pt</option>\n        <option value="16.5" >16.5pt</option>\n        <option value="17.25" >17.25pt</option>\n        <option value="18" >18pt</option>\n        <option value="18.75" >18.75pt</option>\n        <option value="19.5" >19.5pt</option>\n        <option value="20.25" >20.25pt</option>\n        <option value="21" >21pt</option>\n        <option value="21.75" >21.75pt</option>\n        </select>\n        </div>\n    </div>'), this.target;
            }, t.prototype.getValue = function () {
                var t = this.target.find("select").val();
                if (t) return parseFloat(t.toString());
            }, t.prototype.setValue = function (t) {
                t && (this.target.find('option[value="' + t + '"]').length || this.target.find("select").prepend('<option value="' + t + '" >' + t + "</option>"));
                this.target.find("select").val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        ct = function () {
            function t() {
                this.name = "paddingRight";
            }

            return t.prototype.css = function (t, e) {
                var n = t;

                if (n && n.length) {
                    if (e) return n.css("padding-right", e + "pt"), "padding-right";
                    n[0].style.paddingRight = "";
                }

                return null;
            }, t.prototype.createTarget = function () {
                return this.target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(' <div class="hiprint-option-item">\n        <div class="hiprint-option-item-label">\n        右内边距\n        </div>\n        <div class="hiprint-option-item-field">\n        <select>\n        <option value="" >默认</option>\n        <option value="0.75" >0.75pt</option>\n        <option value="1.5" >1.5pt</option>\n        <option value="2.25" >2.25pt</option>\n        <option value="3" >3pt</option>\n        <option value="3.75" >3.75pt</option>\n        <option value="4.5" >4.5pt</option>\n        <option value="5.25" >5.25pt</option>\n        <option value="6" >6pt</option>\n        <option value="6.75" >6.75pt</option>\n        <option value="7.5" >7.5pt</option>\n        <option value="8.25" >8.25pt</option>\n        <option value="9" >9pt</option>\n        <option value="9.75" >9.75pt</option>\n        <option value="10.5" >10.5pt</option>\n        <option value="11.25" >11.25pt</option>\n        <option value="12" >12pt</option>\n        <option value="12.75" >12.75pt</option>\n        <option value="13.5" >13.5pt</option>\n        <option value="14.25" >14.25pt</option>\n        <option value="15" >15pt</option>\n        <option value="15.75" >15.75pt</option>\n        <option value="16.5" >16.5pt</option>\n        <option value="17.25" >17.25pt</option>\n        <option value="18" >18pt</option>\n        <option value="18.75" >18.75pt</option>\n        <option value="19.5" >19.5pt</option>\n        <option value="20.25" >20.25pt</option>\n        <option value="21" >21pt</option>\n        <option value="21.75" >21.75pt</option>\n        </select>\n        </div>\n    </div>'), this.target;
            }, t.prototype.getValue = function () {
                var t = this.target.find("select").val();
                if (t) return parseFloat(t.toString());
            }, t.prototype.setValue = function (t) {
                t && (this.target.find('option[value="' + t + '"]').length || this.target.find("select").prepend('<option value="' + t + '" >' + t + "</option>"));
                this.target.find("select").val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        ht = function () {
            function t() {
                this.name = "dataType";
            }

            return t.prototype.createTarget = function () {
                var t = this;
                return this.target = jquery__WEBPACK_IMPORTED_MODULE_0___default()('\n        <div class="hiprint-option-item-row">\n        <div class="hiprint-option-item">\n        <div class="hiprint-option-item-label">\n        数据类型\n        </div>\n        <div class="hiprint-option-item-field">\n        <select class="hiprint-option-item-datatype">\n        <option value="" >默认</option>\n        <option value="datetime" >日期时间</option>\n        <option value="boolean" >布尔</option>\n        </select>\n        </div>\n    </div>\n    <div class="hiprint-option-item ">\n        <div class="hiprint-option-item-label ">\n        格式\n        </div>\n        <div class="hiprint-option-item-field">\n        <select  class="auto-submit hiprint-option-item-datatype-select-format">\n        <option value="" >默认</option>\n        \n        </select>\n        <input class="auto-submit  hiprint-option-item-datatype-input-format" type="text" data-type="boolean" placeholder="true:false">\n        </div>\n    </div>\n        </div>\n        '), jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.target.find(".hiprint-option-item-datatype")).change(function () {
                    var e = jquery__WEBPACK_IMPORTED_MODULE_0___default()(t.target.find(".hiprint-option-item-datatype")).val();
                    t.loadFormatSelectByDataType(e), t.submit(t.getValue());
                }), this.target;
            }, t.prototype.getValue = function () {
                var t = this.target.find(".hiprint-option-item-datatype").val();

                if (t) {
                    var e = this.target.find(".hiprint-option-item-datatype-format").val();
                    return {
                        dataType: t,
                        format: e || void 0
                    };
                }

                return {
                    dataType: void 0,
                    format: void 0
                };
            }, t.prototype.setValue = function (t, e) {
                this.target.find(".hiprint-option-item-datatype").val(e.dataType || ""), this.loadFormatSelectByDataType(e.dataType), this.target.find(".hiprint-option-item-datatype-format").val(e.format || "");
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t.prototype.loadFormatSelectByDataType = function (t) {
                "boolean" === t ? (this.target.find(".hiprint-option-item-datatype-select-format").removeClass("hiprint-option-item-datatype-format").hide().val(""), this.target.find(".hiprint-option-item-datatype-input-format").addClass("hiprint-option-item-datatype-format").show()) : "datetime" === t ? (this.target.find(".hiprint-option-item-datatype-select-format").addClass("hiprint-option-item-datatype-format").show(), this.target.find(".hiprint-option-item-datatype-input-format").removeClass("hiprint-option-item-datatype-format").hide().val(""), this.target.find(".hiprint-option-item-datatype-select-format").html('\n            <option value="" >默认</option>\n            <option value="M/d" >M/d</option>\n            <option value="MM/dd" >MM/dd</option>\n            <option value="yy/M/d" >yy/M/d</option>\n            <option value="yy/MM/dd" >yy/MM/dd</option>\n            <option value="yyyy/M/d" >yyyy/M/d</option>\n            <option value="yyyy/MM/dd" >yyyy/MM/dd</option>\n            <option value="yy/M/d H:m" >yy/M/d H:m</option>\n            <option value="yy/M/d H:m:s" >yy/M/d H:m:s</option>\n            <option value="yy/M/d HH:mm" >yy/M/d HH:mm</option>\n            <option value="yy/M/d HH:mm:ss" >yy/M/d HH:mm:ss</option>\n            <option value="yy/MM/dd H:m" >yy/MM/dd H:m</option>\n            <option value="yy/MM/dd H:m:s" >yy/MM/dd H:m:s</option>\n            <option value="yy/MM/dd HH:mm" >yy/MM/dd HH:mm</option>\n            <option value="yy/MM/dd HH:mm:ss" >yy/MM/dd HH:mm:ss</option>\n            <option value="yyyy/M/d H:m" >yyyy/M/dd H:m</option>\n            <option value="yyyy/M/d H:m:s" >yyyy/M/d H:m:s</option>\n            <option value="yyyy/M/d HH:mm" >yyyy/M/d HH:mm</option>\n            <option value="yyyy/M/d HH:mm:ss" >yyyy/M/d HH:mm:ss</option>\n            <option value="yyyy/MM/dd H:m" >yyyy/MM/dd H:m</option>\n            <option value="yyyy/MM/dd H:m:s" >yyyy/MM/dd H:m:s</option>\n            <option value="yyyy/MM/dd HH:mm" >yyyy/MM/dd HH:mm</option>\n            <option value="yyyy/MM/dd HH:mm:ss" >yyyy/MM/dd HH:mm:ss</option>\n\n            <option value="M-d" >M-d</option>\n            <option value="MM-dd" >MM-dd</option>\n            <option value="yy-M-d" >yy-M-d</option>\n            <option value="yy-MM-dd" >yy-MM-dd</option>\n            <option value="yyyy-M-d" >yyyy-M-d</option>\n            <option value="yyyy-MM-dd" >yyyy-MM-dd</option>\n            <option value="yy-M-d H:m" >yy-M-d H:m</option>\n            <option value="yy-M-d H:m:s" >yy-M-d H:m:s</option>\n            <option value="yy-M-d HH:mm" >yy-M-d HH:mm</option>\n            <option value="yy-M-d HH:mm:ss" >yy-M-d HH:mm:ss</option>\n            <option value="yy-MM-dd H:m" >yy-MM-dd H:m</option>\n            <option value="yy-MM-dd H:m:s" >yy-MM-dd H:m:s</option>\n            <option value="yy-MM-dd HH:mm" >yy-MM-dd HH:mm</option>\n            <option value="yy-MM-dd HH:mm:ss" >yy-MM-dd HH:mm:ss</option>\n            <option value="yyyy-M-d H:m" >yyyy-M-d H:m</option>\n            <option value="yyyy-M-d H:m:s" >yyyy-M-d H:m:s</option>\n            <option value="yyyy-M-d HH:mm" >yyyy-M-d HH:mm</option>\n            <option value="yyyy-M-d HH:mm:ss" >yyyy-M-d HH:mm:ss</option>\n            <option value="yyyy-MM-dd H:m" >yyyy-MM-dd H:m</option>\n            <option value="yyyy-MM-dd H:m:s" >yyyy-MM-dd H:m:s</option>\n            <option value="yyyy-MM-dd HH:mm" >yyyy-MM-dd HH:mm</option>\n            <option value="yyyy-MM-dd HH:mm:ss" >yyyy-MM-dd HH:mm:ss</option>\n        ')) : (this.target.find(".hiprint-option-item-datatype-select-format").show(), this.target.find(".hiprint-option-item-datatype-input-format").hide().val(""), this.target.find(".hiprint-option-item-datatype-format").html('\n            <option value="" >默认</option>\n        '));
            }, t;
        }(),
        ft = function () {
            function t() {
                this.name = "formatter";
            }

            return t.prototype.createTarget = function () {
                var t = ' <div class="hiprint-option-item hiprint-option-item-row">\n        <div class="hiprint-option-item-label">\n        格式化函数\n        </div>\n        <div class="hiprint-option-item-field">\n        <textarea style="height:80px;" placeholder="' + (this.placeholder || "") + '" class="auto-submit"></textarea>\n        </div>\n    </div>';
                return this.target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(t), this.target;
            }, t.prototype.getValue = function () {
                var t = this.target.find("textarea").val();
                if (t) return t;
            }, t.prototype.setValue = function (t) {
                this.target.find("textarea").val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        gt = function () {
            function t() {
                this.name = "styler";
            }

            return t.prototype.createTarget = function () {
                return this.target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(' <div class="hiprint-option-item hiprint-option-item-row">\n        <div class="hiprint-option-item-label">\n        样式函数\n        </div>\n        <div class="hiprint-option-item-field">\n        <textarea style="height:80px;" placeholder="function(value, options, target,templateData){}" class="auto-submit"></textarea>\n        </div>\n    </div>'), this.target;
            }, t.prototype.getValue = function () {
                var t = this.target.find("textarea").val();
                if (t) return t;
            }, t.prototype.setValue = function (t) {
                this.target.find("textarea").val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        mt = function () {
            function t() {
                this.name = "footerFormatter";
            }

            return t.prototype.createTarget = function () {
                return this.target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(' <div class="hiprint-option-item hiprint-option-item-row">\n        <div class="hiprint-option-item-label">\n        表格脚函数\n        </div>\n        <div class="hiprint-option-item-field">\n        <textarea style="height:80px;" placeholder="function(options,rows,data){ return \'<tr></tr>\' }; }" class="auto-submit"></textarea>\n        </div>\n    </div>'), this.target;
            }, t.prototype.getValue = function () {
                var t = this.target.find("textarea").val();
                if (t) return t;
            }, t.prototype.setValue = function (t) {
                this.target.find("textarea").val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        vt = function () {
            function t() {
                this.name = "gridColumnsFooterFormatter";
            }

            return t.prototype.createTarget = function () {
                return this.target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(' <div class="hiprint-option-item hiprint-option-item-row">\n        <div class="hiprint-option-item-label">\n        多组表格脚函数\n        </div>\n        <div class="hiprint-option-item-field">\n        <textarea style="height:80px;" placeholder="function(options,rows,data){ return \'\' }; }" class="auto-submit"></textarea>\n        </div>\n    </div>'), this.target;
            }, t.prototype.getValue = function () {
                var t = this.target.find("textarea").val();
                if (t) return t;
            }, t.prototype.setValue = function (t) {
                this.target.find("textarea").val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        yt = function () {
            function t() {
                this.name = "rowStyler";
            }

            return t.prototype.createTarget = function () {
                return this.target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(' <div class="hiprint-option-item hiprint-option-item-row">\n        <div class="hiprint-option-item-label">\n        行样式函数\n        </div>\n        <div class="hiprint-option-item-field">\n        <textarea style="height:80px;" placeholder="请输入标题" class="auto-submit"></textarea>\n        </div>\n    </div>'), this.target;
            }, t.prototype.getValue = function () {
                var t = this.target.find("textarea").val();
                if (t) return t;
            }, t.prototype.setValue = function (t) {
                this.target.find("textarea").val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        bt = function () {
            function t() {
                this.name = "align";
            }

            return t.prototype.createTarget = function () {
                return this.target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(' <div class="hiprint-option-item">\n        <div class="hiprint-option-item-label">\n        单元格左右对齐\n        </div>\n        <div class="hiprint-option-item-field">\n        <select class="auto-submit">\n        <option value="" >默认</option>\n        <option value="left" >居左</option>\n        <option value="center" >居中</option>\n        <option value="right" >居右</option>\n        <option value="justify" >两端对齐</option>\n        </select>\n        </div>\n    </div>'), this.target;
            }, t.prototype.getValue = function () {
                var t = this.target.find("select").val();
                if (t) return t.toString();
            }, t.prototype.setValue = function (t) {
                this.target.find("select").val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        Et = function () {
            function t() {
                this.name = "vAlign";
            }

            return t.prototype.createTarget = function () {
                return this.target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(' <div class="hiprint-option-item">\n        <div class="hiprint-option-item-label">\n        单元格上下对齐\n        </div>\n        <div class="hiprint-option-item-field">\n        <select class="auto-submit">\n        <option value="" >默认</option>\n        <option value="top" >上</option>\n        <option value="middle" >中</option>\n        <option value="bottom" >居右</option>\n        \n        </select>\n        </div>\n    </div>'), this.target;
            }, t.prototype.getValue = function () {
                var t = this.target.find("select").val();
                if (t) return t.toString();
            }, t.prototype.setValue = function (t) {
                this.target.find("select").val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        Tt = function () {
            function t() {
                this.name = "halign";
            }

            return t.prototype.createTarget = function () {
                return this.target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(' <div class="hiprint-option-item">\n        <div class="hiprint-option-item-label">\n        表格头单元格左右对齐\n        </div>\n        <div class="hiprint-option-item-field">\n        <select class="auto-submit">\n        <option value="" >默认</option>\n        <option value="left" >居左</option>\n        <option value="center" >居中</option>\n        <option value="right" >居右</option>\n        <option value="justify" >两端对齐</option>\n        </select>\n        </div>\n    </div>'), this.target;
            }, t.prototype.getValue = function () {
                var t = this.target.find("select").val();
                if (t) return t.toString();
            }, t.prototype.setValue = function (t) {
                this.target.find("select").val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        Pt = function () {
            function t() {
                this.name = "styler2";
            }

            return t.prototype.createTarget = function () {
                return this.target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(' <div class="hiprint-option-item hiprint-option-item-row">\n        <div class="hiprint-option-item-label">\n        单元格样式函数\n        </div>\n        <div class="hiprint-option-item-field">\n        <textarea style="height:80px;" placeholder="function(value,row,index,options){ return {color:\'red\' }; }" class="auto-submit"></textarea>\n        </div>\n    </div>'), this.target;
            }, t.prototype.getValue = function () {
                var t = this.target.find("textarea").val();
                if (t) return t;
            }, t.prototype.setValue = function (t) {
                this.target.find("textarea").val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        _t = function () {
            function t() {
                this.name = "formatter2";
            }

            return t.prototype.createTarget = function () {
                return this.target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(' <div class="hiprint-option-item hiprint-option-item-row">\n        <div class="hiprint-option-item-label">\n        单元格格式化函数\n        </div>\n        <div class="hiprint-option-item-field">\n        <textarea style="height:80px;" placeholder="function(value,row,index,options){ return \'\'; }" class="auto-submit"></textarea>\n        </div>\n    </div>'), this.target;
            }, t.prototype.getValue = function () {
                var t = this.target.find("textarea").val();
                if (t) return t;
            }, t.prototype.setValue = function (t) {
                this.target.find("textarea").val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        wt = function () {
            function t() {
                this.name = "autoCompletion";
            }

            return t.prototype.createTarget = function () {
                return this.target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(' <div class="hiprint-option-item">\n        <div class="hiprint-option-item-label">\n        自动补全\n        </div>\n        <div class="hiprint-option-item-field">\n        <select class="auto-submit">\n        <option value="" >默认</option>\n        <option value="true" >是</option>\n        <option value="false" >否</option>\n        </select>\n        </div>\n    </div>'), this.target;
            }, t.prototype.getValue = function () {
                if ("true" == this.target.find("select").val()) return !0;
            }, t.prototype.setValue = function (t) {
                this.target.find("select").val((null == t ? "" : t).toString());
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        xt = function () {
            function t() {
                this.name = "tableFooterRepeat";
            }

            return t.prototype.createTarget = function () {
                return this.target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(' <div class="hiprint-option-item">\n        <div class="hiprint-option-item-label">\n        表格脚显示\n        </div>\n        <div class="hiprint-option-item-field">\n        <select class="auto-submit">\n        <option value="" >默认</option>\n        <option value="no" >不显示</option>\n        <option value="page" >每页显示</option>\n        <option value="last" >最后显示</option>\n        </select>\n        </div>\n    </div>'), this.target;
            }, t.prototype.getValue = function () {
                var t = this.target.find("select").val();
                if (t) return t.toString();
            }, t.prototype.setValue = function (t) {
                this.target.find("select").val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }();

    n.d(e, "a", function () {
        return Ct;
    });

    var Ct = function () {
        function t() { }

        return t.init = function () {
            t.printElementOptionItems || (t.printElementOptionItems = {}, t._printElementOptionItems.forEach(function (e) {
                t.printElementOptionItems[e.name] = e;
            }));
        }, t.registerItem = function (e) {
            if (!e.name) throw new Error("styleItem must have name");
            t.init(), t.printElementOptionItems[e.name] = e;
        }, t.getItem = function (e) {
            return t.init(), t.printElementOptionItems[e];
        }, t._printElementOptionItems = [new o(), new r(), new a(), new p(), new i(), new s(), new l(), new pt(), new u(), new d(), new c(), new h(), new f(), new g(), new m(), new v(), new y(), new b(), new E(), new T(), new P(), new _(), new w(), new x(), new C(), new O(), new H(), new D(), new I(), new R(), new M(), new S(), new B(), new F(), new L(), new A(), new z(), new k(), new st(), new N(), new V(), new W(), new j(), new U(), new K(), new G(), new q(), new X(), new Y(), new Q(), new J(), new Z(), new tt(), new et(), new nt(), new it(), new ot(), new at(), new lt(), new ut(), new dt(), new ct(), new ht(), new ft(), new gt(), new mt(), new vt(), new yt(), new bt(), new Tt(), new Et(), new Pt(), new _t(), new wt(), new xt()], t;
    }();
}, function (t, e, n) {
    "use strict";

    n.d(e, "a", function () {
        return o;
    }), n.d(e, "b", function () {
        return r;
    });

    var i = n(14),
        o = function () {
            function t(t, e) {
                this.selectedCells = [], this.rows = t, this.tableTatget = e;
            }

            return t.prototype.clear = function () {
                this.tableTatget.find("td").removeClass("selected");
            }, t.prototype.setSingleSelect = function (t) {
                this.startCell = t, this.selectedCells = [];
            }, t.prototype.getSingleSelect = function () {
                if (this.selectedCells.length) {
                    if (1 == this.selectedCells.length) return 1 == this.selectedCells[0].length ? this.selectedCells[0][0] : void 0;
                    if (this.selectedCells.length > 1) return;
                }

                return this.startCell;
            }, t.prototype.singleSelectByXY = function (t, e) {
                var n = this.getCellByXY(t, e);
                n && (this.clear(), n && (n.cell.select(), this.startCell = n, this.selectedCells = []));
            }, t.prototype.multipleSelectByXY = function (t, e) {
                this.clear();
                var n = [];

                if (this.startCell) {
                    var o = this.getCellByXY(t, e);

                    if (o) {
                        var r = i.a.mergeRect(this.startCell.cell.getTableRect(), o.cell.getTableRect());
                        this.selectByRect(new a(r), n);
                    }
                }

                this.selectedCells = n;
            }, t.prototype.selectByRect = function (t, e) {
                this.rows.forEach(function (n, i) {
                    var o = [];
                    n.columns.forEach(function (e) {
                        e.isInRect(t) && (o.push(new p(i, e)), e.select());
                    }), o.length && e.push(o);
                }), t.changed && (t.changed = !1, e.splice(0, e.length), this.selectByRect(t, e));
            }, t.prototype.getSelectedCells = function () {
                return this.selectedCells;
            }, t.prototype.getCellByXY = function (t, e) {
                var n;
                return this.rows.forEach(function (i, o) {
                    var r = i.columns.filter(function (n) {
                        return n.isXYinCell(t, e);
                    });
                    r.length && (n = new p(o, r[0]));
                }), n;
            }, t;
        }(),
        r = function () {
            return function (t) {
                this.x = t.x, this.y = t.y, this.height = t.height, this.width = t.width;
            };
        }(),
        a = function () {
            return function (t) {
                this.rect = t;
            };
        }(),
        p = function () {
            return function (t, e) {
                this.rowIndex = t, this.cell = e;
            };
        }();
}, function (t, e, n) {
    "use strict";

    n.d(e, "a", function () {
        return i;
    });

    var i = function () {
        function t() { }

        return t.createId = function () {
            return this.id += 1, this.id;
        }, t.id = 1, t;
    }();
}, function (t, e, n) {
    "use strict";

    n.d(e, "a", function () {
        return p;
    });

    var _i,
        o = n(5),
        r = n(13),
        a = (_i = function i(t, e) {
            return (_i = Object.setPrototypeOf || _instanceof({
                __proto__: []
            }, Array) && function (t, e) {
                t.__proto__ = e;
            } || function (t, e) {
                for (var n in e) {
                    e.hasOwnProperty(n) && (t[n] = e[n]);
                }
            })(t, e);
        }, function (t, e) {
            function n() {
                this.constructor = t;
            }

            _i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
        }),
        p = function (t) {
            function e(e) {
                var n = t.call(this) || this;
                (n.columns = [], e && e.constructor === Array) ? (e || []).forEach(function (t) {
                    n.columns.push(new o.a(t));
                }) : e.columns && (e.columns || []).forEach(function (t) {
                    n.columns.push(new o.a(t));
                });
                return n;
            }

            return a(e, t), e.prototype.getPrintElementOptionEntity = function () {
                var t = [];
                return this.columns.forEach(function (e) {
                    t.push(e.getEntity());
                }), t;
            }, e;
        }(r.a);
}, function (t, e, n) {
    "use strict";

    n.d(e, "a", function () {
        return r;
    });

    var i = n(11),
        o = n(5),
        r = function () {
            function t() {
                this.id = i.a.createId();
            }

            return t.prototype.init = function (t, e, n) {
                this.isHead = n, this.target = e || jquery__WEBPACK_IMPORTED_MODULE_0___default()("<tr></tr>"), this.tableOptions = t, this.initCells(this.columns);
            }, t.prototype.getTarget = function () {
                return this.target;
            }, t.prototype.initCells = function (t) {
                var e = this;
                t ? t.forEach(function (t, n) {
                    t.init(e.target.find("td:eq(" + n + ")"), e.tableOptions, e.id, e.isHead);
                }) : (this.columns = [], this.target.find("td").map(function (t, n) {
                    var i = new o.a();
                    i.init(jquery__WEBPACK_IMPORTED_MODULE_0___default()(n), e.tableOptions, e.id, e.isHead), e.columns.push(i);
                }));
            }, t.prototype.removeCell = function (t) {
                var e = this.columns.indexOf(t);
                this.columns[e].getTarget().remove(), this.columns.splice(e, 1);
            }, t.prototype.createTableCell = function (t, e) {
                var n = new o.a();
                return n.init(jquery__WEBPACK_IMPORTED_MODULE_0___default()("<td></td>"), this.tableOptions, this.id, this.isHead), t > 1 && (n.getTarget().attr("rowspan", t), n.rowspan = t), e > 1 && (n.getTarget().attr("colspan", e), n.colspan = e), n;
            }, t.prototype.insertToTargetCellLeft = function (t, e) {
                var n = this.columns.indexOf(t);
                t.getTarget().before(e.getTarget()), this.columns.splice(n, 0, e);
            }, t.prototype.insertToTargetCellRight = function (t, e) {
                var n = this.columns.indexOf(t);
                this.columns[n].getTarget().after(e.getTarget()), this.columns.splice(n + 1, 0, e);
            }, t.prototype.insertCellToFirst = function (t) {
                this.target.prepend(t.getTarget()), this.columns.splice(0, 0, t);
            }, t.prototype.insertCellToLast = function (t) {
                this.columns.push(t), this.target.append(t.getTarget());
            }, t.prototype.getPrintElementOptionEntity = function () {
                var t = [];
                return this.columns.forEach(function (e) {
                    t.push(e.getEntity());
                }), t;
            }, t;
        }();
}, function (t, e, n) {
    "use strict";

    n.d(e, "a", function () {
        return o;
    });

    var i = n(10),
        o = function () {
            function t() { }

            return t.mergeRect = function (t, e) {
                var n = Math.min(t.x, e.x),
                    o = Math.min(t.y, e.y);
                return new i.b({
                    x: n,
                    y: o,
                    height: Math.max(t.y + t.height, e.y + e.height) - o,
                    width: Math.max(t.x + t.width, e.x + e.width) - n
                });
            }, t.Rect = function (t, e, n, i) {
                return {
                    minX: t < n ? t : n,
                    minY: e < i ? e : i,
                    maxX: t < n ? n : t,
                    maxY: e < i ? i : e
                };
            }, t;
        }();
}, function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.d(__webpack_exports__, "a", function () {
        return TablePrintElement;
    });

    var _BasePrintElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4),
        _HiPrintConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1),
        _dto_PaperHtmlResult__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6),
        _assets_plugins_hinnn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0),
        _PrintReferenceElement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8),
        _option_TablePrintElementOption__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18),
        _table_TableExcelHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7),
        _hitable_HiTale__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16),
        _table_GridColumnsStructure__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20),
        _HiPrintlib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2),
        __extends = (_extendStatics = function extendStatics(t, e) {
            return (_extendStatics = Object.setPrototypeOf || _instanceof({
                __proto__: []
            }, Array) && function (t, e) {
                t.__proto__ = e;
            } || function (t, e) {
                for (var n in e) {
                    e.hasOwnProperty(n) && (t[n] = e[n]);
                }
            })(t, e);
        }, function (t, e) {
            function n() {
                this.constructor = t;
            }

            _extendStatics(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
        }),
        _extendStatics,
        TablePrintElement = function (_super) {
            function TablePrintElement(t, e) {
                var n = _super.call(this, t) || this;
                return n.gridColumnsFooterCss = "hiprint-gridColumnsFooter", n.tableGridRowCss = "table-grid-row", n.options = new _option_TablePrintElementOption__WEBPACK_IMPORTED_MODULE_5__.a(e, n.printElementType), n.options.setDefault(new _option_TablePrintElementOption__WEBPACK_IMPORTED_MODULE_5__.a(_HiPrintConfig__WEBPACK_IMPORTED_MODULE_1__.a.instance.table.default).getPrintElementOptionEntity()), n;
            }

            return __extends(TablePrintElement, _super), TablePrintElement.prototype.getColumns = function () {
                return this.options.columns;
            }, TablePrintElement.prototype.getColumnByColumnId = function (t) {
                return this.options.getColumnByColumnId(t);
            }, TablePrintElement.prototype.updateDesignViewFromOptions = function () {
                if (this.designTarget) {
                    this.css(this.designTarget, this.getData());
                    var t = this.designTarget.find(".hiprint-printElement-table-content"),
                        e = this.getHtml(this.designPaper);
                    t.html(""), t.append(e[0].target.find(".table-grid-row")), this.printElementType.editable && this.setHitable(), this.setColumnsOptions();
                }
            }, TablePrintElement.prototype.css = function (t, e) {
                if ((this.getField() || !this.options.content) && !this.printElementType.formatter) return _super.prototype.css.call(this, t, e);
            }, TablePrintElement.prototype.getDesignTarget = function (t) {
                return this.designTarget = this.getHtml(t)[0].target, this.designPaper = t, this.designTarget.find("td").hidroppable({
                    accept: ".rn-draggable-item",
                    onDrop: function onDrop(t, e) { },
                    onDragEnter: function onDragEnter(t, e) {
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()(e).removeClass("rn-draggable-item");
                    },
                    onDragLeave: function onDragLeave(t, e) {
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()(e).addClass("rn-draggable-item");
                    }
                }), this.designTarget;
            }, TablePrintElement.prototype.getConfigOptions = function () {
                return _HiPrintConfig__WEBPACK_IMPORTED_MODULE_1__.a.instance.table;
            }, TablePrintElement.prototype.createTarget = function (t, e, n) {
                for (var i = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div class="hiprint-printElement hiprint-printElement-table" style="position: absolute;"><div class="hiprint-printElement-table-handle"></div><div class="hiprint-printElement-table-content" style="height:100%;width:100%"></span></div>'), o = this.createGridColumnsStructure(n), r = 0; r < o.gridColumns; r++) {
                    o.getByIndex(r).append(this.getTableHtml(e, n));
                }

                return i.find(".hiprint-printElement-table-content").append(o.target), i;
            }, TablePrintElement.prototype.createGridColumnsStructure = function (t) {
                for (var e = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div class="hi-grid-row table-grid-row"></div>'), n = 0; n < this.options.getGridColumns(); n++) {
                    var i = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div class="tableGridColumnsGutterRow hi-grid-col" style="width:' + 100 / this.options.getGridColumns() + '%;"></div>');
                    e.append(i);
                }

                var o = this.getGridColumnsFooterFormatter();

                if (o) {
                    var r = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div class="hiprint-gridColumnsFooter"></div>');
                    r.append(o(this.options, this.getData(t), t, [])), e.append(r);
                }

                return new _table_GridColumnsStructure__WEBPACK_IMPORTED_MODULE_8__.a(this.options.getGridColumns(), e);
            }, TablePrintElement.prototype.createtempEmptyRowsTargetStructure = function (t) {
                if (this.getField()) return this.createTarget(this.printElementType.title, []);
                var e = this.createTarget(this.printElementType.title, []).clone();
                return e.find(".hiprint-printElement-tableTarget tbody tr").remove(), e;
            }, TablePrintElement.prototype.getTableHtml = function (t, e) {
                var n, i;
                if (!this.getField() && this.options.content) return (n = jquery__WEBPACK_IMPORTED_MODULE_0___default()("<div></div>")).append(this.options.content), (i = n.find("table")).addClass("hiprint-printElement-tableTarget"), i;
                if (this.printElementType.formatter) return (n = jquery__WEBPACK_IMPORTED_MODULE_0___default()("<div></div>")).append(this.printElementType.formatter(t)), (i = n.find("table")).addClass("hiprint-printElement-tableTarget"), i;
                var o = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<table class="hiprint-printElement-tableTarget" style="border-collapse: collapse;"></table>');
                return o.append(_table_TableExcelHelper__WEBPACK_IMPORTED_MODULE_6__.a.createTableHead(this.getColumns(), this.options.getWidth() / this.options.getGridColumns())), o.append(_table_TableExcelHelper__WEBPACK_IMPORTED_MODULE_6__.a.createTableRow(this.getColumns(), t, this.options, this.printElementType)), this.getFooterFormatter() && ("no" == this.options.tableFooterRepeat || ("last" == this.options.tableFooterRepeat ? o.find("tbody").append(_table_TableExcelHelper__WEBPACK_IMPORTED_MODULE_6__.a.createTableFooter(this.printElementType.columns, t, this.options, this.printElementType, e, t).html()) : o.append(_table_TableExcelHelper__WEBPACK_IMPORTED_MODULE_6__.a.createTableFooter(this.printElementType.columns, t, this.options, this.printElementType, e, [])))), o;
            }, TablePrintElement.prototype.getEmptyRowTarget = function () {
                return _table_TableExcelHelper__WEBPACK_IMPORTED_MODULE_6__.a.createEmptyRowTarget(this.getColumns());
            }, TablePrintElement.prototype.getHtml = function (t, e) {
                this.createTempContainer();
                var n = this.getPaperHtmlResult(t, e);
                return this.removeTempContainer(), n;
            }, TablePrintElement.prototype.getPaperHtmlResult = function (t, e) {
                var n = [],
                    i = this.getData(e),
                    o = this.getTableHtml(i, e),
                    r = this.createtempEmptyRowsTargetStructure(e);
                e ? this.updateTargetWidth(r) : this.updateTargetSize(r), this.css(r, i), this.css(o, i), this.getTempContainer().html(""), this.getTempContainer().append(r);

                for (var a, p = this.getBeginPrintTopInPaperByReferenceElement(t), s = 0, l = !1; !l;) {
                    var u = 0,
                        d = t.getPaperFooter(s);
                    0 == s && p > d && (p = p - d + t.paperHeader, n.push(new _dto_PaperHtmlResult__WEBPACK_IMPORTED_MODULE_2__.a({
                        target: void 0,
                        printLine: void 0
                    })), u = t.getContentHeight(s) - (p - t.paperHeader), s++ , d = t.getPaperFooter(s));
                    var c = n.length > 0 ? n[n.length - 1].target : void 0,
                        h = this.getRowsInSpecificHeight(e, u > 0 ? u : 0 == s ? d - p : t.getContentHeight(s), r, o, s, c);
                    l = h.isEnd;
                    var f = void 0;
                    h.target && (h.target.css("left", this.options.displayLeft()), h.target[0].height = ""), 0 == s || u > 0 ? (h.target && (a = p, h.target.css("top", p + "pt")), f = l && null != this.options.lHeight ? p + (h.height > this.options.lHeight ? h.height : this.options.lHeight) : p + h.height) : (h.target && (a = t.paperHeader, h.target.css("top", t.paperHeader + "pt")), f = t.paperHeader + h.height), n.push(new _dto_PaperHtmlResult__WEBPACK_IMPORTED_MODULE_2__.a({
                        target: h.target,
                        printLine: f,
                        referenceElement: new _PrintReferenceElement__WEBPACK_IMPORTED_MODULE_4__.a({
                            top: this.options.getTop(),
                            left: this.options.getLeft(),
                            height: this.options.getHeight(),
                            width: this.options.getWidth(),
                            beginPrintPaperIndex: t.index,
                            bottomInLastPaper: f,
                            printTopInPaper: a
                        })
                    })), s++;
                }

                return n;
            }, TablePrintElement.prototype.getRowsInSpecificHeight = function (t, e, n, i, o, r) {
                var a = i.find("tbody"),
                    p = _assets_plugins_hinnn__WEBPACK_IMPORTED_MODULE_3__.a.pt.toPx(e);

                n.find(".hiprint-printElement-tableTarget tbody").html("");
                var s = n.outerHeight();
                if (s > p) return {
                    target: void 0,
                    length: 0,
                    height: 0,
                    isEnd: !1
                };

                for (var l = [], u = 0; u < this.options.getGridColumns(); u++) {
                    for (var d = n.find(".hiprint-printElement-tableTarget:eq(" + u + ")"), c = void 0, h = []; ;) {
                        if (s <= p) if (0 == a.find("tr").length) c = {
                            height: _assets_plugins_hinnn__WEBPACK_IMPORTED_MODULE_3__.a.px.toPt(s),
                            isEnd: !0
                        }, t && this.options.autoCompletion && (this.autoCompletion(p, d), s = n.outerHeight()); else {
                            var f = a.find("tr:lt(1)");
                            d.find("tbody").append(f);
                            var g = f.data("rowData");
                            l.push(g), h.push(g), (s = n.outerHeight()) > p && (a.prepend(f), l.pop(), h.pop(), s = n.outerHeight(), c = {
                                height: _assets_plugins_hinnn__WEBPACK_IMPORTED_MODULE_3__.a.px.toPt(s),
                                isEnd: !1
                            });
                        }

                        if (c) {
                            if (this.getFooterFormatter()) d.find("tfoot").length && d.find("tfoot").html(_table_TableExcelHelper__WEBPACK_IMPORTED_MODULE_6__.a.createTableFooter(this.printElementType.columns, this.getData(t), this.options, this.printElementType, t, h).html());
                            break;
                        }
                    }
                }

                var m = n.find(".hiprint-printElement-tableTarget tbody tr").length,
                    v = this.getGridColumnsFooterFormatter();
                return v && n.find(this.gridColumnsFooterCss).html(v(this.options, this.getData(t), t, l)), 0 == a.find("tr").length ? 0 == m && r ? {
                    target: void 0,
                    length: 0,
                    height: 0,
                    isEnd: !0
                } : {
                        target: n.clone(),
                        length: m,
                        height: _assets_plugins_hinnn__WEBPACK_IMPORTED_MODULE_3__.a.px.toPt(s),
                        isEnd: !0
                    } : {
                        target: n.clone(),
                        length: m,
                        height: _assets_plugins_hinnn__WEBPACK_IMPORTED_MODULE_3__.a.px.toPt(s),
                        isEnd: !1
                    };
            }, TablePrintElement.prototype.autoCompletion = function (t, e) {
                for (var n, i = this.getEmptyRowTarget(), o = e.outerHeight(); t > o;) {
                    n = i.clone(), e.find("tbody").append(n), o = e.outerHeight();
                }

                n && n.remove();
            }, TablePrintElement.prototype.getData = function (t) {
                if (!t) return [{}];
                var e = t[this.getField()];
                return e ? JSON.parse(JSON.stringify(e)) : [];
            }, TablePrintElement.prototype.onResize = function (t, e, n, i, o) {
                _super.prototype.updateSizeAndPositionOptions.call(this, o, i, n, e), _table_TableExcelHelper__WEBPACK_IMPORTED_MODULE_6__.a.resizeTableCellWidth(this.designTarget, this.getColumns(), this.options.getWidth());
            }, TablePrintElement.prototype.getReizeableShowPoints = function () {
                return ["s", "e"];
            }, TablePrintElement.prototype.design = function (t, e) {
                var n = this;
                this.designTarget.hidraggable({
                    handle: this.designTarget.find(".hiprint-printElement-table-handle"),
                    axis: n.options.axis && t && t.axisEnabled ? n.options.axis : void 0,
                    onDrag: function onDrag(t, i, o) {
                        n.updateSizeAndPositionOptions(i, o), n.createLineOfPosition(e);
                    },
                    moveUnit: "pt",
                    minMove: _HiPrintConfig__WEBPACK_IMPORTED_MODULE_1__.a.instance.movingDistance,
                    onBeforeDrag: function onBeforeDrag(t) {
                        _HiPrintlib__WEBPACK_IMPORTED_MODULE_9__.a.instance.draging = !0, n.createLineOfPosition(e);
                    },
                    onStopDrag: function onStopDrag(t) {
                        _HiPrintlib__WEBPACK_IMPORTED_MODULE_9__.a.instance.draging = !1, n.removeLineOfPosition();
                    }
                }), this.printElementType.editable && this.setHitable(), this.setColumnsOptions(), this.designTarget.hireizeable({
                    showPoints: n.getReizeableShowPoints(),
                    noContainer: !0,
                    onBeforeResize: function onBeforeResize() {
                        _HiPrintlib__WEBPACK_IMPORTED_MODULE_9__.a.instance.draging = !0;
                    },
                    onResize: function onResize(t, i, o, r, a) {
                        n.onResize(t, i, o, r, a), n.hitable && n.hitable.updateColumnGrips(), n.createLineOfPosition(e);
                    },
                    onStopResize: function onStopResize() {
                        _HiPrintlib__WEBPACK_IMPORTED_MODULE_9__.a.instance.draging = !1, n.removeLineOfPosition();
                    }
                }), this.bingKeyboardMoveEvent(this.designTarget, e);
            }, TablePrintElement.prototype.setHitable = function () {
                var t = this;
                this.hitable = new _hitable_HiTale__WEBPACK_IMPORTED_MODULE_7__.a({
                    table: this.designTarget.find(".hiprint-printElement-tableTarget:eq(0)"),
                    rows: this.getColumns(),
                    resizeRow: !1,
                    resizeColumn: !0,
                    trs: this.designTarget.find(".hiprint-printElement-tableTarget:eq(0)").find("tbody tr"),
                    handle: this.designTarget.find(".hiprint-printElement-tableTarget:eq(0)").find("thead"),
                    isEnableEdit: this.printElementType.editable,
                    columnDisplayEditable: this.printElementType.columnDisplayEditable,
                    columnDisplayIndexEditable: this.printElementType.columnDisplayIndexEditable,
                    columnResizable: this.printElementType.columnResizable,
                    columnAlignEditable: this.printElementType.columnAlignEditable,
                    isEnableEditText: this.printElementType.columnTitleEditable,
                    isEnableEditField: !1,
                    isEnableContextMenu: !0,
                    isEnableInsertRow: !1,
                    isEnableDeleteRow: !1,
                    isEnableInsertColumn: !1,
                    isEnableDeleteColumn: !1,
                    isEnableMergeCell: !1
                }), _assets_plugins_hinnn__WEBPACK_IMPORTED_MODULE_3__.a.event.on("updateTable" + this.hitable.id, function () {
                    t.updateDesignViewFromOptions();
                });
            }, TablePrintElement.prototype.setColumnsOptions = function () {
                var t = this;
                this.designTarget.find(".hiprint-printElement-tableTarget:eq(0)").find("thead td").bind("click.hiprint", function (e) {
                    var n = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).attr("column-id"),
                        i = t.getColumnByColumnId(n);

                    if (i) {
                        var o = t.getPrintElementOptionItemsByName("tableColumn");

                        _assets_plugins_hinnn__WEBPACK_IMPORTED_MODULE_3__.a.event.trigger(t.getPrintElementSelectEventKey(), {
                            printElement: t,
                            customOptionsInput: [{
                                title: i.title + "-列属性",
                                optionItems: o,
                                options: i,
                                callback: function callback(t) {
                                    o.forEach(function (t) {
                                        var e = t.getValue();
                                        i[t.name] = e;
                                    });
                                }
                            }]
                        });
                    } else _assets_plugins_hinnn__WEBPACK_IMPORTED_MODULE_3__.a.event.trigger(t.getPrintElementSelectEventKey(), {
                        printElement: t
                    });
                });
            }, TablePrintElement.prototype.filterOptionItems = function (t) {
                var e = _super.prototype.filterOptionItems.call(this, t);

                return this.printElementType.editable && 1 == this.options.columns.length ? e : t.filter(function (t) {
                    return "columns" != t.name;
                });
            }, TablePrintElement.prototype.getFooterFormatter = function () {
                var footerFormatter = void 0;
                if (this.printElementType.footerFormatter && (footerFormatter = this.printElementType.footerFormatter), this.options.footerFormatter) try {
                    var s = "footerFormatter=" + this.options.footerFormatter;
                    eval(s);
                } catch (t) {
                    console.log(t);
                }
                return footerFormatter;
            }, TablePrintElement.prototype.getGridColumnsFooterFormatter = function () {
                var gridColumnsFooterFormatter = void 0;
                if (this.printElementType.gridColumnsFooterFormatter && (gridColumnsFooterFormatter = this.printElementType.gridColumnsFooterFormatter), this.options.gridColumnsFooterFormatter) try {
                    var s = "gridColumnsFooterFormatter=" + this.options.gridColumnsFooterFormatter;
                    eval(s);
                } catch (t) {
                    console.log(t);
                }
                return gridColumnsFooterFormatter;
            }, TablePrintElement;
        }(_BasePrintElement__WEBPACK_IMPORTED_MODULE_0__.a);
}, function (t, e, n) {
    "use strict";

    var i = function () {
        return function (t) {
            this.table = t.table, this.isEnableEdit = t.isEnableEdit, this.trs = t.trs, this.resizeRow = t.resizeRow, this.resizeColumn = t.resizeColumn, this.isEnableEditField = t.isEnableEditField, this.isEnableContextMenu = t.isEnableContextMenu, this.isEnableEditField = t.isEnableEditField, this.isEnableInsertRow = t.isEnableInsertRow, this.isEnableDeleteRow = t.isEnableDeleteRow, this.isEnableInsertColumn = t.isEnableInsertColumn, this.isEnableDeleteColumn = t.isEnableDeleteColumn, this.isEnableMergeCell = t.isEnableMergeCell, this.columnResizable = t.columnResizable, this.columnAlignEditable = t.columnAlignEditable;
        };
    }(),
        o = function () {
            function t(t) {
                this.options = new i(t);
            }

            return t.prototype.enableEidt = function () {
                this.options.isEnableEdit;
            }, t.prototype.disableEdit = function () {
                this.options.isEnableEdit;
            }, t.prototype.isEnableEdit = function () {
                return this.options.isEnableEdit;
            }, t;
        }(),
        r = n(0),
        a = function () {
            return function (t) {
                this.cell = t.cell, this.link = t.link, this.linkType = t.linkType, this.bottom = t.bottom, this.rightMost = t.rightMost, this.rowLevel = t.rowLevel, this.columnLevel = t.columnLevel, this.indexInTableGridRow = t.indexInTableGridRow, this.indexInTableGridColumn = t.indexInTableGridColumn;
            };
        }(),
        p = n(10),
        s = function () {
            function t() { }

            return t.getLeftTableCell = function (t, e) {
                var n;
                return t.forEach(function (t, i) {
                    t.cell && i < e && (n = t.cell);
                }), n;
            }, t.getIndex = function (t, e) {
                var n;
                return t.forEach(function (t, i) {
                    t.cell && t.cell.id == e && (n = i);
                }), n;
            }, t;
        }(),
        l = n(13),
        u = n(11),
        d = function () {
            return function (t, e) {
                this.target = t, this.grips = e;
            };
        }(),
        c = function () {
            return function (t) {
                this.target = t;
            };
        }(),
        h = function () {
            return function () {
                this.rowColumns = [];
            };
        }(),
        f = function () {
            function t() { }

            return t.getColumnsWidth = function (e, n) {
                var i = {},
                    o = t.allAutoWidth(e);
                return e.rowColumns.forEach(function (t) {
                    var e = n - 0,
                        r = t.width / o * (e > 0 ? e : 0);
                    i[t.id] = r;
                }), i;
            }, t.resizeTableCellWeight = function (t) {
                t.forEach(function (t) {
                    t.columns.forEach(function (t) {
                        t.hasWidth && jquery__WEBPACK_IMPORTED_MODULE_0___default()(t.getTarget()).css("width", t.width + "pt");
                    });
                });
            }, t.allAutoWidth = function (t) {
                var e = 0;
                return t.rowColumns.forEach(function (t) {
                    e += t.width;
                }), e;
            }, t.reconsitutionTableColumnTree = function (t, e, n) {
                for (var i = e || new h(), o = function o(e) {
                    i.totalLayer = e + 1, i[e] = t[e].columns, i.rowColumns = i.rowColumns.concat(i[e].filter(function (n) {
                        return n.rowspan == t.length - e;
                    }));
                }, r = 0; r < t.length; r++) {
                    o(r);
                }

                return i;
            }, t;
        }(),
        g = n(2),
        m = function () {
            function t(t) {
                this.signature = "HiTresizer", this.hitable = t, this.rows = t.rows, this.target = t.target;
            }

            return t.prototype.init = function () {
                this.addResizeRowAndColumn(), this.hitable.optionsCoat.options.resizeColumn && this.createColumnGrips(), this.hitable.optionsCoat.options.resizeRow && this.createRowGrips();
            }, t.prototype.resizeTableCellWidth = function () {
                f.resizeTableCellWeight(this.rows);
            }, t.prototype.addResizeRowAndColumn = function () { }, t.prototype.createColumnGrips = function () {
                var t = this,
                    e = this,
                    n = [],
                    i = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div class="columngrips"/>');
                i.width(this.target.width()), this.rows.forEach(function (o) {
                    o.columns.forEach(function (o, a) {
                        if (o.getTarget().attr("haswidth")) {
                            var p = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div class="columngrip"><div class="gripResizer"></div></div>');
                            i.append(p);
                            var s = new c(p);
                            n.length > 0 && (n[n.length - 1].nextGrip = s), n.push(s), t.syncGrips(o, s), jquery__WEBPACK_IMPORTED_MODULE_0___default()(p).hidraggable({
                                axis: "h",
                                onDrag: function onDrag(t, e, n) { },
                                moveUnit: "pt",
                                minMove: 1,
                                onBeforeDrag: function onBeforeDrag(t) {
                                    if (g.a.instance.draging = !0, !s.nextGrip) return !1;
                                    e.dragingGrip = s, e.dragingGrip.left = parseFloat(e.dragingGrip.target.css("left").replace("px", "")), s.target.addClass("columngripDraging");
                                },
                                onStopDrag: function onStopDrag(n) {
                                    g.a.instance.draging = !1;
                                    var i = parseFloat(e.dragingGrip.target.css("left").replace("px", "")),
                                        o = r.a.px.toPt(i - e.dragingGrip.left);
                                    s.cell.width = s.cell.width + o, s.nextGrip.cell.width = s.nextGrip.cell.width - o, t.resizeTableCellWidth(), s.target.removeClass("columngripDraging"), e.updateColumnGrips();
                                }
                            });
                        }
                    });
                }), this.target.before(i), this.cgripContariner = new d(i, n);
            }, t.prototype.updateColumnGrips = function () {
                this.cgripContariner && (this.cgripContariner.target.remove(), this.createColumnGrips());
            }, t.prototype.updateRowGrips = function () {
                this.rgripContariner && (this.rgripContariner.target.remove(), this.createRowGrips());
            }, t.prototype.createRowGrips = function () {
                var t = this,
                    e = this,
                    n = [],
                    i = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div class="rowgrips"/>');
                this.rows.forEach(function (o, a) {
                    var p = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div class="rowgrip"><div class="gripResizer"></div></div>');
                    i.append(p);
                    var s = new c(p);
                    n.push(s), a > 0 && a < t.rows.length && jquery__WEBPACK_IMPORTED_MODULE_0___default()(p).hidraggable({
                        axis: "v",
                        onDrag: function onDrag(t, e, n) { },
                        moveUnit: "pt",
                        minMove: 1,
                        onBeforeDrag: function onBeforeDrag(t) {
                            e.dragingGrip = s, e.dragingGrip.top = parseFloat(e.dragingGrip.target.css("top").replace("px", "")), s.target.addClass("rowgripDraging");
                        },
                        onStopDrag: function onStopDrag(t) {
                            var n = parseFloat(e.dragingGrip.target.css("top").replace("px", "")),
                                i = r.a.px.toPt(n - e.dragingGrip.top + e.rows[a].columns[0].getTarget().height());
                            e.rows[a].columns[0].getTarget().css("height", i + "pt"), e.syncRowGrips(), s.target.removeClass("rowgripDraging");
                        }
                    });
                }), this.target.before(i), this.rgripContariner = new d(i, n), this.syncRowGrips();
            }, t.prototype.syncGrips = function (t, e) {
                var n = t.getTarget();
                e.cell = t, e.target.css({
                    left: n.offset().left - this.target.offset().left + n.outerWidth(!1),
                    height: 30
                });
            }, t.prototype.syncRowGrips = function () {
                var t = this;
                this.rgripContariner.target.height(this.target.height()), this.rows.forEach(function (e, n) {
                    var i = e.columns[0].getTarget();
                    t.rgripContariner.grips[n].target.css({
                        top: i.offset().top - t.target.offset().top + i.outerHeight(!1),
                        width: 30
                    });
                });
            }, t.prototype.addResizerHeadRow = function () {
                this.target.find("thead").prepend();
            }, t;
        }(),
        v = function () {
            function t() { }

            return t.prototype.init = function () { }, t.prototype.updateRowGrips = function () { }, t.prototype.updateColumnGrips = function () { }, t;
        }();

    n.d(e, "a", function () {
        return y;
    });

    var y = function () {
        function t(t) {
            this.id = u.a.createId(), this.optionsCoat = new o(t), this.handle = t.handle, this.target = t.table, this.initRows(t.rows), this.init(t), this.tableCellSelector = new p.a(this.rows, this.target), this.resizer = this.optionsCoat.options.columnResizable ? new m(this) : new v(), this.resizer.init();
        }

        return t.prototype.insertRow = function (t, e, n) {
            var i = e || this.tableCellSelector.getSingleSelect(),
                o = i.cell,
                a = this.rows[i.rowIndex],
                p = i.rowIndex,
                s = this.getCellGrid(),
                u = new l.a();
            if (u.init(this.optionsCoat, void 0, a.isHead), n && u.getTarget().addClass(n), "above" == t) s[p].forEach(function (t) {
                var e = t.link ? t.link : t.cell,
                    n = e.width / e.colspan;

                if (0 == t.columnLevel) {
                    var i = u.createTableCell();
                    i.width = n, u.insertCellToLast(i);
                } else {
                    if ("column" == t.linkType) {
                        var o = t.link.getTarget();
                        t.link.rowspan += 1, o.attr("rowspan", t.link.rowspan);
                    }

                    t.linkType;
                }
            }), this.rows.splice(p, 0, u), a.getTarget().before(u.getTarget()), r.a.event.trigger("newRow" + this.id, u); else {
                var d = p + o.rowspan - 1;
                s[d].forEach(function (t) {
                    var e = t.link ? t.link : t.cell,
                        n = e.width / e.colspan;

                    if (t.bottom) {
                        var i = u.createTableCell();
                        i.width = n, u.insertCellToLast(i);
                    } else {
                        if (t.cell) {
                            var o = t.cell.getTarget();
                            t.cell.rowspan += 1, o.attr("rowspan", t.cell.rowspan);
                        }

                        if ("column" == t.linkType) {
                            o = t.link.getTarget();
                            t.link.rowspan += 1, o.attr("rowspan", t.link.rowspan);
                        }
                    }
                }), this.rows.splice(d + 1, 0, u), this.rows[d].getTarget().after(u.getTarget()), r.a.event.trigger("newRow" + this.id, u);
            }
        }, t.prototype.insertColumn = function (t, e, n, i) {
            var o = this,
                a = this.rows.concat(this.trRows),
                p = e || this.tableCellSelector.getSingleSelect(),
                s = p.cell,
                l = p.rowIndex,
                u = this.getCellGrid(a),
                d = u[l].filter(function (t) {
                    return t.cell && t.cell.id == s.id || t.link && t.link.id == s.id;
                });

            if ("left" == t) {
                var c = d[0].indexInTableGridRow;
                u.forEach(function (t, e) {
                    var p = t[c],
                        s = t.filter(function (t, e) {
                            return e >= c && t.cell;
                        });

                    if (0 == p.rowLevel) {
                        var l = a[e],
                            u = a[e].createTableCell();
                        n && u.getTarget().addClass(n), null != i && (u.width = i), s.length ? l.insertToTargetCellLeft(s[0].cell, u) : l.insertCellToLast(u), r.a.event.trigger("newCell" + o.id, u);
                    } else if ("row" == p.linkType) {
                        var d = p.link.getTarget();
                        p.link.colspan += 1, d.attr("colspan", p.link.colspan);
                    }
                });
            } else {
                var h = d[d.length - 1].indexInTableGridRow;
                u.forEach(function (t, e) {
                    var p = t[h],
                        s = t.filter(function (t, e) {
                            return e <= h && t.cell;
                        });

                    if (p.rightMost) {
                        var l = a[e],
                            u = l.createTableCell();
                        n && u.getTarget().addClass(n), null != i && (u.width = i), s.length ? l.insertToTargetCellRight(s[s.length - 1].cell, u) : l.insertCellToFirst(u), r.a.event.trigger("newCell" + o.id, u);
                    } else {
                        var d = p.link || p.cell;

                        if ("row" == p.linkType) {
                            var c = d.getTarget();
                            d.colspan += 1, c.attr("colspan", d.colspan);
                        }

                        if (p.cell) {
                            c = d.getTarget();
                            d.colspan += 1, c.attr("colspan", d.colspan);
                        }
                    }
                });
            }
        }, t.prototype.deleteRow = function () {
            var t = this,
                e = this.tableCellSelector.getSingleSelect(),
                n = (e.cell, this.rows[e.rowIndex], e.rowIndex),
                i = this.getCellGrid(),
                o = this.rows[n];
            i[n].forEach(function (e, r) {
                if (e.cell) {
                    if (1 == e.cell.rowspan) o.removeCell(e.cell); else {
                        o.removeCell(e.cell);
                        var a = i[n + 1].filter(function (t, e) {
                            return t.cell && e > r;
                        }),
                            p = t.rows[n + 1],
                            s = p.createTableCell(e.cell.rowspan - 1, e.cell.colspan);
                        a.length ? p.insertToTargetCellLeft(a[0].cell, s) : p.insertCellToLast(s);
                    }
                } else if ("column" == e.linkType) {
                    var l = e.link;
                    l.rowspan -= 1, l.getTarget().attr("rowspan", l.rowspan);
                }
            }), o.getTarget().remove(), this.rows.splice(n, 1);
        }, t.prototype.deleteColums = function () {
            var t = this.rows.concat(this.trRows),
                e = this.tableCellSelector.getSingleSelect(),
                n = e.cell,
                i = e.rowIndex,
                o = this.getCellGrid(t),
                r = o[i].filter(function (t) {
                    return t.cell && t.cell.id == n.id || t.link && t.link.id == n.id;
                })[0].indexInTableGridRow;
            o.forEach(function (e, n) {
                var i = e[r];
                i.cell ? 1 == i.cell.colspan ? t[n].removeCell(i.cell) : (i.cell.colspan -= 1, i.cell.getTarget().attr("colspan", i.cell.colspan)) : "row" == i.linkType && (i.link.colspan -= 1, i.link.getTarget().attr("colspan", i.link.colspan));
            });
        }, t.prototype.mergeCell = function () {
            var t = this,
                e = this.tableCellSelector.getSelectedCells();

            if (0 != e.length) {
                var n = e[0][0].cell;
                e.forEach(function (i, o) {
                    i.forEach(function (i, r) {
                        0 == o ? 0 != r && (n.colspan += i.cell.colspan, t.rows[i.rowIndex].removeCell(i.cell)) : t.rows[i.rowIndex].removeCell(i.cell), 0 == r && e[0][0].rowIndex + n.rowspan - 1 < i.rowIndex && (n.rowspan += i.cell.rowspan);
                    });
                }), n.getTarget().attr("colspan", n.colspan), n.getTarget().attr("rowspan", n.rowspan), this.tableCellSelector.setSingleSelect(e[0][0]);
            }
        }, t.prototype.splitCell = function () {
            var t = this.tableCellSelector.getSingleSelect(),
                e = this.getCellGrid(),
                n = s.getIndex(e[t.rowIndex], t.cell.id);

            if (t) {
                for (var i = t.rowIndex; i < t.rowIndex + t.cell.rowspan; i++) {
                    for (var o = this.rows[i], r = i == t.rowIndex ? t.cell : s.getLeftTableCell(e[i], n), a = 0; a < t.cell.colspan; a++) {
                        i == t.rowIndex && 0 == a || (r ? o.insertToTargetCellRight(r, o.createTableCell()) : o.insertCellToFirst(o.createTableCell()));
                    }
                }

                t.cell.rowspan = 1, t.cell.colspan = 1, t.cell.getTarget().attr("colspan", t.cell.colspan), t.cell.getTarget().attr("rowspan", t.cell.rowspan);
            }
        }, t.prototype.init = function (t) {
            var e = this;
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.target).addClass("hitable"), this.optionsCoat.onBeforEdit = function (n) {
                if (e.optionsCoat.options.onBeforEdit && !1 === t.onBeforEdit(n)) return !1;
                return e.optionsCoat.editingCell && e.optionsCoat.editingCell.endEdit(), !0;
            }, jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.target).mousedown(function (t) {
                e.optionsCoat.isLeftMouseButtonDown = !0;
            }), jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.target).mouseup(function (t) {
                e.optionsCoat.isLeftMouseButtonDown = !1;
            }), this.initContext(), this.target.on("mousemove", function (t) {
                1 === t.buttons && e.tableCellSelector.multipleSelectByXY(t.pageX, t.pageY);
            }).on("mousedown", function (t) {
                1 === t.buttons && e.tableCellSelector.singleSelectByXY(t.pageX, t.pageY);
            });
        }, t.prototype.initRows = function (t) {
            var e = this;

            if (this.trRows = [], t) {
                this.rows = t, t.forEach(function (t, n) {
                    t.init(e.optionsCoat, e.target.find("tr:eq(" + n + ")"), !0);
                });
                var n = this.optionsCoat.options.trs;
                n && this.initRowsByTrs(n).forEach(function (t) {
                    e.trRows.push(t);
                });
            } else this.rows = this.initRowsByTrs(this.target.find("tr"));
        }, t.prototype.initRowsByTrs = function (t) {
            var e = this;
            return t.map(function (t, n) {
                var i = new l.a();
                return i.init(e.optionsCoat, jquery__WEBPACK_IMPORTED_MODULE_0___default()(n)), i;
            }).get();
        }, t.prototype.enableEidt = function () {
            this.optionsCoat.enableEidt();
        }, t.prototype.disableEdit = function () {
            this.optionsCoat.disableEdit();
        }, t.prototype.getCellGrid = function (t) {
            var e = t || this.rows,
                n = this.getColumnStep(),
                i = new Array();
            return e.forEach(function (t, e) {
                t.columns.forEach(function (t, o) {
                    for (var r = 0; r < t.colspan; r++) {
                        for (var p = 0, s = !1; p < n && !s;) {
                            if (i[e] = i[e] || [], i[e][p]); else {
                                i[e][p] = new a({
                                    cell: 0 == r ? t : void 0,
                                    link: 0 != r ? t : void 0,
                                    linkType: r > 0 ? "row" : void 0,
                                    rightMost: r == t.colspan - 1 || void 0,
                                    bottom: 0 == t.rowspan - 1,
                                    rowLevel: r,
                                    columnLevel: 0,
                                    indexInTableGridRow: p,
                                    indexInTableGridColumn: e
                                });

                                for (var l = e + 1, u = 1; u < t.rowspan; u++) {
                                    i[l] = i[l] || [], i[l][p] = new a({
                                        cell: void 0,
                                        link: t,
                                        linkType: r > 0 ? "rowColumn" : "column",
                                        rightMost: r == t.colspan - 1 || void 0,
                                        bottom: u == t.rowspan - 1,
                                        rowLevel: r,
                                        columnLevel: u,
                                        indexInTableGridRow: p,
                                        indexInTableGridColumn: l
                                    }), l += 1;
                                }

                                s = !0;
                            }
                            p++;
                        }
                    }
                });
            }), i;
        }, t.prototype.setAlign = function (t) {
            var e = this.tableCellSelector.getSingleSelect();
            e && e.cell.setAlign(t);
        }, t.prototype.setVAlign = function (t) {
            var e = this.tableCellSelector.getSingleSelect();
            e && e.cell.setVAlign(t);
        }, t.prototype.getColumnStep = function (t) {
            var e = 0;
            return this.rows.length && this.rows[t || 0].columns.forEach(function (t) {
                e += t.colspan;
            }), e;
        }, t.prototype.initContext = function () {
            var t = this;
            if (!this.optionsCoat.options.isEnableContextMenu) return !1;
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.handle).hicontextMenu({
                menus: [{
                    text: "在上方插入行",
                    enabled: this.optionsCoat.options.isEnableInsertRow,
                    disable: function disable() {
                        return !t.tableCellSelector.getSingleSelect();
                    },
                    callback: function callback() {
                        t.insertRow("above"), t.resizer.updateRowGrips(), r.a.event.trigger("updateTable" + t.id);
                    }
                }, {
                    text: "在下方插入行",
                    borderBottom: !0,
                    enabled: this.optionsCoat.options.isEnableInsertRow,
                    disable: function disable() {
                        return !t.tableCellSelector.getSingleSelect();
                    },
                    callback: function callback() {
                        t.insertRow("below"), t.resizer.updateRowGrips(), r.a.event.trigger("updateTable" + t.id);
                    }
                }, {
                    text: "向左方插入列",
                    enabled: this.optionsCoat.options.isEnableInsertColumn,
                    disable: function disable() {
                        return !t.tableCellSelector.getSingleSelect();
                    },
                    callback: function callback() {
                        t.insertColumn("left"), t.resizer.updateColumnGrips(), r.a.event.trigger("updateTable" + t.id);
                    }
                }, {
                    text: "向右方插入列",
                    enabled: this.optionsCoat.options.isEnableInsertColumn,
                    disable: function disable() {
                        return !t.tableCellSelector.getSingleSelect();
                    },
                    borderBottom: !0,
                    callback: function callback() {
                        t.insertColumn("right"), t.resizer.updateColumnGrips(), r.a.event.trigger("updateTable" + t.id);
                    }
                }, {
                    text: "删除行",
                    enabled: this.optionsCoat.options.isEnableDeleteRow,
                    disable: function disable() {
                        return !t.tableCellSelector.getSingleSelect();
                    },
                    callback: function callback() {
                        t.deleteRow(), t.resizer.updateRowGrips(), r.a.event.trigger("updateTable" + t.id);
                    }
                }, {
                    text: "删除列",
                    borderBottom: !0,
                    enabled: this.optionsCoat.options.isEnableDeleteColumn,
                    disable: function disable() {
                        return !t.tableCellSelector.getSingleSelect();
                    },
                    callback: function callback() {
                        t.deleteColums(), t.resizer.updateColumnGrips(), r.a.event.trigger("updateTable" + t.id);
                    }
                }, {
                    text: "对齐",
                    borderBottom: !0,
                    enabled: this.optionsCoat.options.columnAlignEditable,
                    menus: [{
                        text: "左",
                        callback: function callback() {
                            t.setAlign("left");
                        }
                    }, {
                        text: "左右居中",
                        callback: function callback() {
                            t.setAlign("center");
                        }
                    }, {
                        text: "右",
                        callback: function callback() {
                            t.setAlign("right");
                        }
                    }, {
                        text: "默认",
                        borderBottom: !0,
                        callback: function callback() {
                            t.setAlign("");
                        }
                    }, {
                        text: "上",
                        callback: function callback() {
                            t.setVAlign("top");
                        }
                    }, {
                        text: "垂直居中",
                        callback: function callback() {
                            t.setVAlign("middle");
                        }
                    }, {
                        text: "下",
                        callback: function callback() {
                            t.setVAlign("bottom");
                        }
                    }, {
                        text: "默认",
                        callback: function callback() {
                            t.setVAlign("");
                        }
                    }]
                }, {
                    text: "合并单元格",
                    enabled: this.optionsCoat.options.isEnableMergeCell,
                    disable: function disable() {
                        return t.tableCellSelector.getSingleSelect();
                    },
                    callback: function callback() {
                        t.mergeCell(), r.a.event.trigger("updateTable" + t.id);
                    }
                }, {
                    text: "解开单元格",
                    enabled: this.optionsCoat.options.isEnableMergeCell,
                    disable: function disable() {
                        var e = t.tableCellSelector.getSingleSelect();
                        return !e || 1 == e.cell.rowspan && 1 == e.cell.colspan;
                    },
                    callback: function callback() {
                        t.splitCell(), r.a.event.trigger("updateTable" + t.id);
                    }
                }].filter(function (t) {
                    return t.enabled;
                })
            });
        }, t.prototype.getTableWidth = function () {
            return r.a.px.toPt(this.target.outerWidth(!1));
        }, t.prototype.updateColumnGrips = function () {
            this.resizer.updateColumnGrips();
        }, t.prototype.updateRowGrips = function () {
            this.resizer.updateRowGrips();
        }, t;
    }();
}, function (t, e, n) {
    "use strict";

    n.d(e, "a", function () {
        return i;
    });

    var i = function () {
        return function (t, e, n) {
            this.tid = t, this.options = e, this.printElementType = n;
        };
    }();
}, function (t, e, n) {
    "use strict";

    var i = n(3),
        o = n(12),
        r = (function () { }(), function () {
            return function (t) {
                this.width = t.width, this.title = t.title, this.columnId = t.columnId, this.fixed = !1, this.rowspan = t.rowspan || 1, this.colspan = t.colspan || 1, this.align = t.align, this.halign = t.halign, this.vAlign = t.vAlign, this.formatter2 = t.formatter2, this.styler2 = t.styler2;
            };
        }()),
        a = n(5);
    n.d(e, "a", function () {
        return l;
    });

    var _p,
        s = (_p = function p(t, e) {
            return (_p = Object.setPrototypeOf || _instanceof({
                __proto__: []
            }, Array) && function (t, e) {
                t.__proto__ = e;
            } || function (t, e) {
                for (var n in e) {
                    e.hasOwnProperty(n) && (t[n] = e[n]);
                }
            })(t, e);
        }, function (t, e) {
            function n() {
                this.constructor = t;
            }

            _p(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
        }),
        l = function (t) {
            function e(e, n) {
                var i = this;
                (e = e || {}, (i = t.call(this, e) || this).lHeight = e.lHeight, i.autoCompletion = e.autoCompletion, i.tableFooterRepeat = e.tableFooterRepeat, n) && (i.columns = [], n.editable && e.columns && e.columns.length ? e.columns.forEach(function (t) {
                    var e = [];
                    t.forEach(function (t) {
                        var i = new r(t),
                            o = n.getColumnByColumnId(i.columnId),
                            p = o ? jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend(o, i) : new a.a(i);
                        p.checked = !0, e.push(p);
                    }), i.columns.push(new o.a(e));
                }) : n.columns.forEach(function (t) {
                    i.columns.push(new o.a(t.filter(function (t) {
                        return t.checked;
                    })));
                }));
                return i;
            }

            return s(e, t), e.prototype.getColumnByColumnId = function (t) {
                return this.makeColumnObj()[t];
            }, e.prototype.makeColumnObj = function () {
                var t = {};
                return this.columns && this.columns.forEach(function (e) {
                    e.columns.forEach(function (e) {
                        e.columnId && (t[e.columnId] = e);
                    });
                }), t;
            }, e.prototype.getGridColumns = function () {
                return this.gridColumns || 1;
            }, e.prototype.getPrintElementOptionEntity = function () {
                var e = t.prototype.getPrintElementOptionEntity.call(this);
                return this.columns && (e.columns = [], this.columns.forEach(function (t) {
                    var n = t.getPrintElementOptionEntity().filter(function (t) {
                        return t.checked;
                    }).map(function (t) {
                        return new r(t);
                    });
                    e.columns.push(n);
                })), e;
            }, e;
        }(i.a);
}, function (t, e, n) {
    "use strict";

    n.d(e, "a", function () {
        return i;
    });

    var i = function () {
        return function () {
            this.rowColumns = [];
        };
    }();
}, function (t, e, n) {
    "use strict";

    n.d(e, "a", function () {
        return i;
    });

    var i = function () {
        function t(t, e) {
            this.gridColumns = t, this.target = e;
        }

        return t.prototype.getByIndex = function (t) {
            return this.target.find(".hi-grid-col:eq(" + t + ")");
        }, t;
    }();
}, function (t, e, n) {
    t.exports = n(33);
}, function (t, e) {
    !function (t) {
        function e(e) {
            var n = t.data(e.data.target, "hidraggable"),
                i = n.options,
                o = n.proxy,
                r = e.data,
                a = r.startLeft + e.pageX - r.startX,
                p = r.startTop + e.pageY - r.startY;
            o && (o.parent()[0] == document.body ? (a = null != i.deltaX && null != i.deltaX ? e.pageX + i.deltaX : e.pageX - e.data.offsetWidth, p = null != i.deltaY && null != i.deltaY ? e.pageY + i.deltaY : e.pageY - e.data.offsetHeight) : (null != i.deltaX && null != i.deltaX && (a += e.data.offsetWidth + i.deltaX), null != i.deltaY && null != i.deltaY && (p += e.data.offsetHeight + i.deltaY))), e.data.parent != document.body && (a += t(e.data.parent).scrollLeft(), p += t(e.data.parent).scrollTop()), "h" == i.axis ? r.left = a : "v" == i.axis ? r.top = p : (r.left = a, r.top = p);
        }

        function n(e) {
            var n = t.data(e.data.target, "hidraggable"),
                i = n.options,
                o = n.proxy;
            o || (o = t(e.data.target)), o.css({
                left: t.fn.dragLengthC(e.data.left, i),
                top: t.fn.dragLengthC(e.data.top, i)
            }), t("body").css("cursor", i.cursor);
        }

        function i(i) {
            t.fn.hidraggable.isDragging = !0;
            var o = t.data(i.data.target, "hidraggable"),
                r = o.options,
                a = t(".hidroppable").filter(function () {
                    return i.data.target != this;
                }).filter(function () {
                    var e = t.data(this, "hidroppable").options.accept;
                    return !e || t(e).filter(function () {
                        return this == i.data.target;
                    }).length > 0;
                });
            o.hidroppables = a;
            var p = o.proxy;
            return p || (r.proxy ? (p = "clone" == r.proxy ? t(i.data.target).clone().insertAfter(i.data.target) : r.proxy.call(i.data.target, i.data.target), o.proxy = p) : p = t(i.data.target)), p.css("position", "absolute"), e(i), n(i), r.onStartDrag.call(i.data.target, i), !1;
        }

        function o(i) {
            var o = t.data(i.data.target, "hidraggable");
            e(i), 0 != o.options.onDrag.call(i.data.target, i, t.fn.dragLengthCNum(i.data.left, o.options), t.fn.dragLengthCNum(i.data.top, o.options)) && n(i);
            var r = i.data.target;
            return o.hidroppables.each(function () {
                var e = t(this);

                if (!e.hidroppable("options").disabled) {
                    var n = e.offset();
                    i.pageX > n.left && i.pageX < n.left + e.outerWidth() && i.pageY > n.top && i.pageY < n.top + e.outerHeight() ? (this.entered || (t(this).trigger("_dragenter", [r]), this.entered = !0), t(this).trigger("_dragover", [r])) : this.entered && (t(this).trigger("_dragleave", [r]), this.entered = !1);
                }
            }), !1;
        }

        function r(e) {
            t.fn.hidraggable.isDragging = !1, o(e);
            var n,
                i,
                r = t.data(e.data.target, "hidraggable"),
                a = r.proxy,
                p = r.options;
            p.revert ? 1 == l() ? t(e.data.target).css({
                position: e.data.startPosition,
                left: e.data.startLeft,
                top: e.data.startTop
            }) : a ? (a.parent()[0] == document.body ? (n = e.data.startX - e.data.offsetWidth, i = e.data.startY - e.data.offsetHeight) : (n = e.data.startLeft, i = e.data.startTop), a.animate({
                left: n,
                top: i
            }, function () {
                s();
            })) : t(e.data.target).animate({
                left: e.data.startLeft,
                top: e.data.startTop
            }, function () {
                t(e.data.target).css("position", e.data.startPosition);
            }) : (t(e.data.target).css({
                position: "absolute",
                left: t.fn.dragLengthC(e.data.left, p),
                top: t.fn.dragLengthC(e.data.top, p)
            }), l());

            function s() {
                a && a.remove(), r.proxy = null;
            }

            function l() {
                var n = !1;
                return r.hidroppables.each(function () {
                    var i = t(this);

                    if (!i.hidroppable("options").disabled) {
                        var o = i.offset();
                        return e.pageX > o.left && e.pageX < o.left + i.outerWidth() && e.pageY > o.top && e.pageY < o.top + i.outerHeight() ? (p.revert && t(e.data.target).css({
                            position: e.data.startPosition,
                            left: e.data.startLeft,
                            top: e.data.startTop
                        }), t(this).trigger("_drop", [e.data.target]), s(), n = !0, this.entered = !1, !1) : void 0;
                    }
                }), n || p.revert || s(), n;
            }

            return p.onStopDrag.call(e.data.target, e), t(document).unbind(".hidraggable"), setTimeout(function () {
                t("body").css("cursor", "");
            }, 100), !1;
        }

        t.fn.hidraggable = function (e, n) {
            return "string" == typeof e ? t.fn.hidraggable.methods[e](this, n) : this.each(function () {
                var n,
                    a = t.data(this, "hidraggable");
                a ? (a.handle.unbind(".hidraggable"), n = t.extend(a.options, e)) : n = t.extend({}, t.fn.hidraggable.defaults, t.fn.hidraggable.parseOptions(this), e || {});
                var p = n.handle ? "string" == typeof n.handle ? t(n.handle, this) : n.handle : t(this);

                function s(e) {
                    var n = t.data(e.data.target, "hidraggable"),
                        i = n.handle,
                        o = t(i).offset(),
                        r = t(i).outerWidth(),
                        a = t(i).outerHeight(),
                        p = e.pageY - o.top,
                        s = o.left + r - e.pageX,
                        l = o.top + a - e.pageY,
                        u = e.pageX - o.left;
                    return Math.min(p, s, l, u) > n.options.edge;
                }

                t.data(this, "hidraggable", {
                    options: n,
                    handle: p
                }), n.disabled ? t(this).css("cursor", "") : p.unbind(".hidraggable").bind("mousemove.hidraggable", {
                    target: this
                }, function (e) {
                    if (!t.fn.hidraggable.isDragging) {
                        var n = t.data(e.data.target, "hidraggable").options;
                        s(e) ? t(this).css("cursor", n.cursor) : t(this).css("cursor", "");
                    }
                }).bind("mouseleave.hidraggable", {
                    target: this
                }, function (e) {
                    t(this).css("cursor", "");
                }).bind("mousedown.hidraggable", {
                    target: this
                }, function (e) {
                    if (0 != s(e)) {
                        t(this).css("cursor", "");
                        var n = t(e.data.target).position(),
                            a = t(e.data.target).offset(),
                            p = {
                                startPosition: t(e.data.target).css("position"),
                                startLeft: n.left,
                                startTop: n.top,
                                left: n.left,
                                top: n.top,
                                startX: e.pageX,
                                startY: e.pageY,
                                offsetWidth: e.pageX - a.left,
                                offsetHeight: e.pageY - a.top,
                                target: e.data.target,
                                parent: t(e.data.target).parent()[0]
                            };
                        t.extend(e.data, p), 0 != t.data(e.data.target, "hidraggable").options.onBeforeDrag.call(e.data.target, e) && (t(document).bind("mousedown.hidraggable", e.data, i), t(document).bind("mousemove.hidraggable", e.data, o), t(document).bind("mouseup.hidraggable", e.data, r));
                    }
                });
            });
        }, t.fn.hidraggable.methods = {
            options: function options(e) {
                return t.data(e[0], "hidraggable").options;
            },
            proxy: function proxy(e) {
                return t.data(e[0], "hidraggable").proxy;
            },
            enable: function enable(e) {
                return e.each(function () {
                    t(this).hidraggable({
                        disabled: !1
                    });
                });
            },
            disable: function disable(e) {
                return e.each(function () {
                    t(this).hidraggable({
                        disabled: !0
                    });
                });
            }
        }, t.fn.hidraggable.parseOptions = function (e) {
            var n = t(e);
            return t.extend({}, t.hiprintparser.parseOptions(e, ["cursor", "handle", "axis", {
                revert: "boolean",
                deltaX: "number",
                deltaY: "number",
                edge: "number"
            }]), {
                    disabled: !!n.attr("disabled") || void 0
                });
        }, t.fn.hidraggable.defaults = {
            proxy: null,
            revert: !1,
            cursor: "move",
            deltaX: null,
            deltaY: null,
            handle: null,
            disabled: !1,
            edge: 0,
            axis: null,
            onBeforeDrag: function onBeforeDrag(t) { },
            onStartDrag: function onStartDrag(t) { },
            onDrag: function onDrag(t) { },
            onStopDrag: function onStopDrag(t) { }
        }, t.fn.hidraggable.isDragging = !1;
    }(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);
}, function (t, e) {
    !function (t) {
        t.fn.hidroppable = function (e, n) {
            return "string" == typeof e ? t.fn.hidroppable.methods[e](this, n) : (e = e || {}, this.each(function () {
                var n,
                    i = t.data(this, "hidroppable");
                i ? t.extend(i.options, e) : (t(n = this).addClass("hidroppable"), t(n).bind("_dragenter", function (e, i) {
                    t.data(n, "hidroppable").options.onDragEnter.apply(n, [e, i]);
                }), t(n).bind("_dragleave", function (e, i) {
                    t.data(n, "hidroppable").options.onDragLeave.apply(n, [e, i]);
                }), t(n).bind("_dragover", function (e, i) {
                    t.data(n, "hidroppable").options.onDragOver.apply(n, [e, i]);
                }), t(n).bind("_drop", function (e, i) {
                    t.data(n, "hidroppable").options.onDrop.apply(n, [e, i]);
                }), t.data(this, "hidroppable", {
                    options: t.extend({}, t.fn.hidroppable.defaults, t.fn.hidroppable.parseOptions(this), e)
                }));
            }));
        }, t.fn.hidroppable.methods = {
            options: function options(e) {
                return t.data(e[0], "hidroppable").options;
            },
            enable: function enable(e) {
                return e.each(function () {
                    t(this).hidroppable({
                        disabled: !1
                    });
                });
            },
            disable: function disable(e) {
                return e.each(function () {
                    t(this).hidroppable({
                        disabled: !0
                    });
                });
            }
        }, t.fn.hidroppable.parseOptions = function (e) {
            var n = t(e);
            return t.extend({}, t.hiprintparser.parseOptions(e, ["accept"]), {
                disabled: !!n.attr("disabled") || void 0
            });
        }, t.fn.hidroppable.defaults = {
            accept: null,
            disabled: !1,
            onDragEnter: function onDragEnter(t, e) { },
            onDragOver: function onDragOver(t, e) { },
            onDragLeave: function onDragLeave(t, e) { },
            onDrop: function onDrop(t, e) { }
        };
    }(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);
}, function (t, e) {
    var n;
    (n = jquery__WEBPACK_IMPORTED_MODULE_0___default.a).hiprintparser = {
        parseOptions: function parseOptions(t, e) {
            var i = n(t),
                o = {},
                r = n.trim(i.attr("data-options"));

            if (r && ("{" != r.substring(0, 1) && (r = "{" + r + "}"), o = new Function("return " + r)()), e) {
                for (var a = {}, p = 0; p < e.length; p++) {
                    var s = e[p];
                    if ("string" == typeof s) a[s] = "width" == s || "height" == s || "left" == s || "top" == s ? parseInt(t.style[s]) || void 0 : i.attr(s); else for (var l in s) {
                        var u = s[l];
                        "boolean" == u ? a[l] = i.attr(l) ? "true" == i.attr(l) : void 0 : "number" == u && (a[l] = "0" == i.attr(l) ? 0 : parseFloat(i.attr(l)) || void 0);
                    }
                }

                n.extend(o, a);
            }

            return o;
        }
    }, n.fn.dragLengthC = function (t, e) {
        return "pt" == e.moveUnit ? n.fn.dragLengthCNum(t, e) + "pt" : n.fn.dragLengthCNum(t, e);
    }, n.fn.dragLengthCNum = function (t, e) {
        var n = 3;

        if ("pt" == e.moveUnit) {
            var i = .75 * t;
            return e.minMove && (n = e.minMove), Math.round(i / n) * n;
        }

        return Math.round(i / n) * n;
    };
}, function (t, e) {
    var n, i, o;
    n = jquery__WEBPACK_IMPORTED_MODULE_0___default.a, i = {
        maxPanelIndex: 0
    }, (o = function o(t) {
        this.options = n.data(t.target, "hireizeable").options, this.init(t.target);
    }).prototype = {
            numHandlerText: function numHandlerText(t) {
                return this.numHandler(t) + "pt";
            },
            numHandler: function numHandler(t) {
                var e = 1.5,
                    n = .75 * t;
                return this.options.minResize && (e = this.options.minResize), Math.round(n / e) * e;
            },
            init: function init(t) {
                this.initResizeBox(t);
            },
            initResizeBox: function initResizeBox(t) {
                var e = this;
                n(t).each(function () {
                    var o;
                    i.maxPanelIndex += 1, e.options.noContainer ? o = n(t) : (o = n("<div panelIndex=" + i.maxPanelIndex + ' class="resize-panel"></div>')).css({
                        width: "100%",
                        height: "100%",
                        top: 0,
                        left: 0,
                        position: "absolute",
                        "background-color": "rgba(0,0,0,0.5)",
                        cursor: "move",
                        display: "none"
                    }), e.appendHandler(o, n(this));

                    var r = {
                        name: "n",
                        target: n('<div class="n resizebtn" style="cursor: n-resize;top: -12px;margin-left: -4px;left: 50%;"></div>')
                    },
                        a = {
                            name: "s",
                            target: n('<div class="s resizebtn" style="cursor: s-resize;bottom: -12px;margin-left: -4px;left: 50%;"></div>')
                        },
                        p = {
                            name: "w",
                            target: n('<div class="w resizebtn" style="cursor: w-resize;left: -12px;margin-top: -4px;top: 50%;"></div>')
                        },
                        s = {
                            name: "e",
                            target: n('<div class="e resizebtn" style="cursor: e-resize; top: 50%; margin-top:-4px;right: -12px;"></div>')
                        },
                        l = {
                            name: "ne",
                            target: n('<div class="ne resizebtn" style="cursor: ne-resize;top: -12px;right: -12px;"></div>')
                        },
                        u = {
                            name: "nw",
                            target: n('<div class="nw resizebtn" style=" cursor: nw-resize;top: -12px;left:-12px;"></div>')
                        },
                        d = {
                            name: "se",
                            target: n('<div class="se resizebtn" style="cursor: se-resize;bottom:-12px;right: -12px;"></div>')
                        },
                        c = {
                            name: "sw",
                            target: n('<div class="sw resizebtn" style="cursor: sw-resize;bottom: -12px;left: -12px;"></div>')
                        },
                        h = function h() {
                            var t = [],
                                i = e.options.showPoints;
                            return n.each([r, a, p, s, l, u, d, c], function (e, o) {
                                n.inArray(o.name, i) > -1 && t.push(o.target);
                            }), t;
                        };

                    e.addHandlerCss(h()), e.appendHandler(h(), o), e.bindResizeEvent(o, n(this));
                    var f = n(this);
                    n(o).on("mousedown", ".resizebtn", function () {
                        f.addClass("resizeing");
                    }), n(".easyui-droppable").on("mouseup", function () {
                        f.removeClass("resizeing");
                    }), e.bindTrigger(n(this));
                }), e.bindHidePanel();
            },
            addHandlerCss: function addHandlerCss(t) {
                for (var e = 0; e < t.length; e++) {
                    t[e].css({
                        position: "absolute",
                        width: "8px",
                        height: "8px",
                        background: "#ff6600",
                        "border-radius": "50%"
                    });
                }
            },
            appendHandler: function appendHandler(t, e) {
                for (var n = 0; n < t.length; n++) {
                    e.append(t[n]);
                }
            },
            triggerResize: function triggerResize(t) {
                t.siblings().children("div[panelindex]").css({
                    display: "none"
                }), t.children("div[panelindex]").css({
                    display: "block"
                });
            },
            bindResizeEvent: function bindResizeEvent(t, e) {
                var i = this,
                    o = 0,
                    r = 0,
                    a = t.width(),
                    p = t.height(),
                    s = t.offset().left,
                    l = t.offset().top,
                    u = i.options.noContainer ? n(e) : t.parent(),
                    d = !1;
                t.on("mousedown", ".e", function (e) {
                    o = e.pageX, a = t.width(), d = !0;
                });
                var c = !1;
                t.on("mousedown", ".s", function (e) {
                    r = e.pageY, p = t.height(), c = !0;
                });
                var h = !1;
                t.on("mousedown", ".w", function (e) {
                    o = e.pageX, a = t.width(), h = !0, s = u.offset().left;
                });
                var f = !1;
                t.on("mousedown", ".n", function (e) {
                    r = e.pageY, p = t.height(), f = !0, l = u.offset().top;
                });
                var g = !1;
                t.on("mousedown", ".ne", function (e) {
                    o = e.pageX, r = e.pageY, a = t.width(), p = t.height(), g = !0, l = u.offset().top;
                });
                var m = !1;
                t.on("mousedown", ".nw", function (e) {
                    o = e.pageX, r = e.pageY, a = t.width(), p = t.height(), l = u.offset().top, s = u.offset().left, m = !0;
                });
                var v = !1;
                t.on("mousedown", ".se", function (e) {
                    o = e.pageX, r = e.pageY, a = t.width(), p = t.height(), v = !0;
                });
                var y = !1;
                t.on("mousedown", ".sw", function (e) {
                    o = e.pageX, r = e.pageY, a = t.width(), p = t.height(), y = !0, s = u.offset().left;
                });
                var b = !1;
                t.on("mousedown", function (t) {
                    i.options.onBeforeResize(), o = t.pageX, r = t.pageY, l = u.offset().top, s = u.offset().left, b = !1;
                }), n(i.options.stage).on("mousemove", function (e) {
                    if (d) {
                        var n = e.pageX - o;
                        t.css({
                            width: "100%"
                        }), u.css({
                            width: i.numHandlerText(a + n)
                        }), i.options.onResize(e, void 0, i.numHandler(a + n), void 0, void 0);
                    } else if (c) {
                        var E = e.pageY - r;
                        t.css({
                            height: "100%"
                        }), u.css({
                            height: i.numHandlerText(p + E)
                        }), i.options.onResize(e, i.numHandler(p + E), void 0, void 0, void 0);
                    } else h ? (n = e.pageX - o, t.css({
                        width: "100%"
                    }), u.css({
                        width: i.numHandlerText(a - n),
                        left: i.numHandlerText(i.options.noDrag ? void 0 : i.numHandler(s + n))
                    }), i.options.onResize(e, void 0, i.numHandler(a - n), void 0, i.options.noDrag ? void 0 : i.numHandler(s + n))) : f ? (E = e.pageY - r, t.css({
                        height: "100%"
                    }), u.css({
                        height: i.numHandlerText(p - E),
                        top: i.numHandlerText(i.options.noDrag ? void 0 : l + E)
                    }), i.options.onResize(e, i.numHandler(p - E), void 0, i.options.noDrag ? void 0 : i.numHandler(l + E), void 0)) : g ? (n = e.pageX - o, E = e.pageY - r, t.css({
                        height: "100%",
                        width: "100%"
                    }), u.css({
                        height: i.numHandlerText(p - E),
                        top: i.numHandlerText(i.options.noDrag ? void 0 : l + E),
                        width: i.numHandlerText(a + n)
                    }), i.options.onResize(e, i.numHandler(p - E), i.numHandler(a + n), i.options.noDrag ? void 0 : i.numHandler(l + E), void 0)) : m ? (n = e.pageX - o, E = e.pageY - r, t.css({
                        height: "100%",
                        width: "100%"
                    }), u.css({
                        height: i.numHandlerText(p - E),
                        top: i.numHandlerText(i.options.noDrag ? void 0 : l + E),
                        width: i.numHandlerText(a - n),
                        left: i.numHandlerText(i.options.noDrag ? void 0 : s + n)
                    }), i.options.onResize(e, i.numHandler(p - E), i.numHandler(a - n), i.options.noDrag ? void 0 : i.numHandler(l + E), i.options.noDrag ? void 0 : i.numHandler(s + n))) : v ? (n = e.pageX - o, E = e.pageY - r, t.css({
                        width: "100%",
                        height: "100%"
                    }), u.css({
                        width: i.numHandlerText(a + n),
                        height: i.numHandlerText(p + E)
                    }), i.options.onResize(e, i.numHandler(p + E), i.numHandler(a + n), void 0, void 0)) : y ? (n = e.pageX - o, E = e.pageY - r, t.css({
                        width: "100%",
                        height: "100%"
                    }), u.css({
                        width: i.numHandlerText(a - n),
                        left: i.numHandlerText(i.options.noDrag ? void 0 : s + n),
                        height: i.numHandlerText(p + E)
                    }), i.options.onResize(e, i.numHandler(p + E), i.numHandler(a - n), i.numHandler(otundefinedop), i.options.noDrag ? void 0 : i.numHandler(s + n))) : b && (n = e.pageX - o, E = e.pageY - r, u.css({
                        left: i.numHandlerText(i.options.noDrag ? void 0 : s + n),
                        top: i.numHandlerText(i.options.noDrag ? void 0 : l + E)
                    }), i.options.onResize(e, void 0, void 0, i.options.noDrag ? void 0 : i.numHandler(l + E), i.options.noDrag ? void 0 : i.numHandler(s + n)));
                }).on("mouseup", function (t) {
                    d = !1, c = !1, h = !1, f = !1, g = !1, m = !1, y = !1, v = !1, b = !1, i.options.onStopResize();
                });
            },
            bindTrigger: function bindTrigger(t) {
                var e = this;
                t.on("click", function (n) {
                    n.stopPropagation(), e.triggerResize(t);
                });
            },
            bindHidePanel: function bindHidePanel(t) {
                if (i.maxPanelIndex < 2) {
                    var e = this.options.stage;
                    n(e).bind("click", function (t) {
                        t.stopPropagation(), n("div[panelindex]").css({
                            display: "none"
                        });
                    });
                }
            }
        }, n.fn.extend({
            hireizeable: function hireizeable(t) {
                return this.each(function () {
                    var e,
                        i = n.data(this, "hireizeable");
                    e = i ? n.extend(i.options, _1f) : n.extend({}, n.fn.hireizeable.defaults, t || {}), n.data(this, "hireizeable", {
                        options: e
                    }), new o({
                        target: this,
                        onResize: function onResize(t, e, n, i, o) { },
                        onStopResize: function onStopResize(t, e, n, i, o) { }
                    });
                });
            }
        }), n.fn.hireizeable.defaults = {
            stage: document,
            reizeUnit: "pt",
            minResize: 1.5,
            showPoints: ["s", "e"],
            noContainer: !1,
            onBeforeResize: function onBeforeResize(t, e, n, i, o) { },
            onResize: function onResize(t, e, n, i, o) { },
            onStopResize: function onStopResize(t, e, n, i, o) { },
            noDrag: !1
        };
}, function (t, e) {
    var n, i;
    jquery__WEBPACK_IMPORTED_MODULE_0___default.a, n = "connected", i = "reconnecting", window.hiwebSocket = {
        opened: !1,
        name: "webSockets",
        reconnectTimeout: 6e4,
        reconnectWindowSetTimeout: null,
        reconnectDelay: 2e3,
        supportsKeepAlive: function supportsKeepAlive() {
            return !0;
        },
        hasIo: function hasIo(t) {
            return window.io;
        },
        send: function send(t) {
            try {
                this.socket.emit("news", t);
            } catch (e) {
                console.log("send data error:" + (t || "") + JSON.stringify(e));
            }
        },
        getPrinterList: function getPrinterList() {
            return this.printerList;
        },
        start: function start() {
            var _this = this;

            var t = this;
            window.WebSocket ? this.socket || (this.socket = io("http://localhost:17521", {
                reconnectionAttempts: 5
            }), this.socket.on("connect", function (e) {
                t.opened = !0, console.log("Websocket opened."), _this.socket.on("successs", function (t) {
                    hinnn.event.trigger("printSuccess_" + t.templateId, t);
                }), _this.socket.on("error", function (t) {
                    hinnn.event.trigger("printError_" + t.templateId, t);
                }), _this.socket.on("printerList", function (e) {
                    t.printerList = e;
                }), t.state = n;
            }), this.socket.on("disconnect", function () {
                t.opened = !1;
            })) : console.log("WebSocket start fail");
        },
        reconnect: function reconnect() {
            this.state !== n && this.state !== i || (this.stop(), this.ensureReconnectingState() && (console.log("Websocket reconnecting."), this.start()));
        },
        stop: function stop() {
            this.socket && (console.log("Closing the Websocket."), this.socket.close(), this.socket = null);
        },
        ensureReconnectingState: function ensureReconnectingState() {
            return this.state = i, this.state === i;
        }
    };
}, function (t, e, n) {
    var i = n(28);
    "string" == typeof i && (i = [[t.i, i, ""]]);
    var o = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    n(30)(i, o);
    i.locals && (t.exports = i.locals);
}, function (t, e, n) {
    (t.exports = n(29)(!1)).push([t.i, ".hicontextmenu {\r\n\tposition: absolute;\r\n\tdisplay: inline-block;\r\n\twidth: 215px;\r\n\tpadding: 0 0;\r\n\tmargin: 0;\r\n\tfont-family: inherit;\r\n\tfont-size: inherit;\r\n\tlist-style-type: none;\r\n\tlist-style: none;\r\n\tbackground: #fff;\r\n\tborder: 1px solid #bebebe;\r\n\tborder-radius: 2px;\r\n\tfont-size: 13px;\r\n}\r\n\r\n.hicontextmenuroot .hicontextmenuitem {\r\n\tposition: relative;\r\n\t-webkit-box-sizing: content-box;\r\n\t-moz-box-sizing: content-box;\r\n\tbox-sizing: content-box;\r\n\tpadding: .2em 12px;\r\n\tcolor: #2f2f2f;\r\n\t-webkit-user-select: none;\r\n\t-moz-user-select: none;\r\n\t-ms-user-select: none;\r\n\ttext-decoration: none;\r\n\r\n\tuser-select: none;\r\n\tbackground-color: #fff;\r\n\r\n}\r\n\r\n.hicontextmenuroot>.hicontextmenuitem:hover,\r\n.hicontextmenuroot .hicontextmenuitem > a:hover {\r\n\tbackground-color: #f3f3f3;\r\n}\r\n\r\n.hicontextmenuroot .hicontextmenuitem>a {\r\n\ttext-decoration: none;\r\n\tcolor: #363636;\r\n\tline-height: 22px;\r\n\r\n}\r\n\r\n.hicontextmenuroot .hicontextsubmenu>ul {\r\n\tdisplay: none;\r\n\tposition: absolute;\r\n\r\n}\r\n\r\n.hicontextmenuroot .hicontextsubmenu:hover>ul {\r\n\tdisplay: block;\r\n\tleft: 100%;\r\n\ttop: -1px;\r\n\tmargin-left: 0px;\r\n}\r\n\r\n.hicontextmenuroot .borderBottom {\r\n\tborder-bottom: 1px solid #efe6e6;\r\n}\r\n\r\n.hicontextmenuroot .disable> a {\r\n  \r\n    color: #ccc;\r\n   \r\n}\r\n.hicontextmenuroot>.disable:hover,\r\n.hicontextmenuroot .disable> a:hover {\r\n\tbackground-color:#fff;\r\n}", ""]);
}, function (t, e, n) {
    "use strict";

    t.exports = function (t) {
        var e = [];
        return e.toString = function () {
            return this.map(function (e) {
                var n = function (t, e) {
                    var n = t[1] || "",
                        i = t[3];
                    if (!i) return n;

                    if (e && "function" == typeof btoa) {
                        var o = (a = i, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(a)))) + " */"),
                            r = i.sources.map(function (t) {
                                return "/*# sourceURL=" + i.sourceRoot + t + " */";
                            });
                        return [n].concat(r).concat([o]).join("\n");
                    }

                    var a;
                    return [n].join("\n");
                }(e, t);

                return e[2] ? "@media " + e[2] + "{" + n + "}" : n;
            }).join("");
        }, e.i = function (t, n) {
            "string" == typeof t && (t = [[null, t, ""]]);

            for (var i = {}, o = 0; o < this.length; o++) {
                var r = this[o][0];
                null != r && (i[r] = !0);
            }

            for (o = 0; o < t.length; o++) {
                var a = t[o];
                null != a[0] && i[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), e.push(a));
            }
        }, e;
    };
}, function (t, e, n) {
    var i,
        o,
        r = {},
        a = (i = function i() {
            return window && document && document.all && !window.atob;
        }, function () {
            return void 0 === o && (o = i.apply(this, arguments)), o;
        }),
        p = function (t) {
            var e = {};
            return function (t, n) {
                if ("function" == typeof t) return t();

                if (void 0 === e[t]) {
                    var i = function (t, e) {
                        return e ? e.querySelector(t) : document.querySelector(t);
                    }.call(this, t, n);

                    if (window.HTMLIFrameElement && _instanceof(i, window.HTMLIFrameElement)) try {
                        i = i.contentDocument.head;
                    } catch (t) {
                        i = null;
                    }
                    e[t] = i;
                }

                return e[t];
            };
        }(),
        s = null,
        l = 0,
        u = [],
        d = n(31);

    function c(t, e) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n],
                o = r[i.id];

            if (o) {
                o.refs++;

                for (var a = 0; a < o.parts.length; a++) {
                    o.parts[a](i.parts[a]);
                }

                for (; a < i.parts.length; a++) {
                    o.parts.push(y(i.parts[a], e));
                }
            } else {
                var p = [];

                for (a = 0; a < i.parts.length; a++) {
                    p.push(y(i.parts[a], e));
                }

                r[i.id] = {
                    id: i.id,
                    refs: 1,
                    parts: p
                };
            }
        }
    }

    function h(t, e) {
        for (var n = [], i = {}, o = 0; o < t.length; o++) {
            var r = t[o],
                a = e.base ? r[0] + e.base : r[0],
                p = {
                    css: r[1],
                    media: r[2],
                    sourceMap: r[3]
                };
            i[a] ? i[a].parts.push(p) : n.push(i[a] = {
                id: a,
                parts: [p]
            });
        }

        return n;
    }

    function f(t, e) {
        var n = p(t.insertInto);
        if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var i = u[u.length - 1];
        if ("top" === t.insertAt) i ? i.nextSibling ? n.insertBefore(e, i.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild), u.push(e); else if ("bottom" === t.insertAt) n.appendChild(e); else {
            if ("object" != _typeof(t.insertAt) || !t.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
            var o = p(t.insertAt.before, n);
            n.insertBefore(e, o);
        }
    }

    function g(t) {
        if (null === t.parentNode) return !1;
        t.parentNode.removeChild(t);
        var e = u.indexOf(t);
        e >= 0 && u.splice(e, 1);
    }

    function m(t) {
        var e = document.createElement("style");

        if (void 0 === t.attrs.type && (t.attrs.type = "text/css"), void 0 === t.attrs.nonce) {
            var i = function () {
                0;
                return n.nc;
            }();

            i && (t.attrs.nonce = i);
        }

        return v(e, t.attrs), f(t, e), e;
    }

    function v(t, e) {
        Object.keys(e).forEach(function (n) {
            t.setAttribute(n, e[n]);
        });
    }

    function y(t, e) {
        var n, i, o, r;

        if (e.transform && t.css) {
            if (!(r = "function" == typeof e.transform ? e.transform(t.css) : e.transform.default(t.css))) return function () { };
            t.css = r;
        }

        if (e.singleton) {
            var a = l++;
            n = s || (s = m(e)), i = T.bind(null, n, a, !1), o = T.bind(null, n, a, !0);
        } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function (t) {
            var e = document.createElement("link");
            return void 0 === t.attrs.type && (t.attrs.type = "text/css"), t.attrs.rel = "stylesheet", v(e, t.attrs), f(t, e), e;
        }(e), i = function (t, e, n) {
            var i = n.css,
                o = n.sourceMap,
                r = void 0 === e.convertToAbsoluteUrls && o;
            (e.convertToAbsoluteUrls || r) && (i = d(i));
            o && (i += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
            var a = new Blob([i], {
                type: "text/css"
            }),
                p = t.href;
            t.href = URL.createObjectURL(a), p && URL.revokeObjectURL(p);
        }.bind(null, n, e), o = function o() {
            g(n), n.href && URL.revokeObjectURL(n.href);
        }) : (n = m(e), i = function (t, e) {
            var n = e.css,
                i = e.media;
            i && t.setAttribute("media", i);
            if (t.styleSheet) t.styleSheet.cssText = n; else {
                for (; t.firstChild;) {
                    t.removeChild(t.firstChild);
                }

                t.appendChild(document.createTextNode(n));
            }
        }.bind(null, n), o = function o() {
            g(n);
        });

        return i(t), function (e) {
            if (e) {
                if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
                i(t = e);
            } else o();
        };
    }

    t.exports = function (t, e) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != (typeof document === "undefined" ? "undefined" : _typeof(document))) throw new Error("The style-loader cannot be used in a non-browser environment");
        (e = e || {}).attrs = "object" == _typeof(e.attrs) ? e.attrs : {}, e.singleton || "boolean" == typeof e.singleton || (e.singleton = a()), e.insertInto || (e.insertInto = "head"), e.insertAt || (e.insertAt = "bottom");
        var n = h(t, e);
        return c(n, e), function (t) {
            for (var i = [], o = 0; o < n.length; o++) {
                var a = n[o];
                (p = r[a.id]).refs-- , i.push(p);
            }

            t && c(h(t, e), e);

            for (o = 0; o < i.length; o++) {
                var p;

                if (0 === (p = i[o]).refs) {
                    for (var s = 0; s < p.parts.length; s++) {
                        p.parts[s]();
                    }

                    delete r[p.id];
                }
            }
        };
    };

    var b,
        E = (b = [], function (t, e) {
            return b[t] = e, b.filter(Boolean).join("\n");
        });

    function T(t, e, n, i) {
        var o = n ? "" : i.css;
        if (t.styleSheet) t.styleSheet.cssText = E(e, o); else {
            var r = document.createTextNode(o),
                a = t.childNodes;
            a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(r, a[e]) : t.appendChild(r);
        }
    }
}, function (t, e) {
    t.exports = function (t) {
        var e = "undefined" != typeof window && window.location;
        if (!e) throw new Error("fixUrls requires window.location");
        if (!t || "string" != typeof t) return t;
        var n = e.protocol + "//" + e.host,
            i = n + e.pathname.replace(/\/[^\/]*$/, "/");
        return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (t, e) {
            var o,
                r = e.trim().replace(/^"(.*)"$/, function (t, e) {
                    return e;
                }).replace(/^'(.*)'$/, function (t, e) {
                    return e;
                });
            return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r) ? t : (o = 0 === r.indexOf("//") ? r : 0 === r.indexOf("/") ? n + r : i + r.replace(/^\.\//, ""), "url(" + JSON.stringify(o) + ")");
        });
    };
}, function (t, e) {
    var n, i;
    window, document, n = jquery__WEBPACK_IMPORTED_MODULE_0___default.a, (i = function i(t, e) {
        this.init(t, e);
    }).prototype = {
            init: function init(t, e) {
                this.ele = t, this.defaults = {
                    menu: [{
                        text: "text",
                        menus: [{}, {}],
                        callback: function callback() { }
                    }],
                    target: function target(t) { },
                    width: 100,
                    itemHeight: 28,
                    bgColor: "#fff",
                    color: "#333",
                    fontSize: 14,
                    hoverBgColor: "#f5f5f5"
                }, this.opts = n.extend(!0, {}, this.defaults, e), this.random = new Date().getTime() + parseInt(1e3 * Math.random()), this.eventBind();
            },
            renderMenu: function renderMenu(t, e) {
                var n = this,
                    i = e;

                if (t && t.length) {
                    var o = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<ul class="hicontextmenu" ></ul>');
                    i || (i = o).addClass("hicontextmenuroot"), jquery__WEBPACK_IMPORTED_MODULE_0___default.a.each(t, function (t, e) {
                        var i = !!e.disable && e.disable(),
                            r = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<li class="hicontextmenuitem"><a href="javascript:void(0);"><span>' + (e.text || "") + "</span></a></li>");
                        i && r.addClass("disable"), e.borderBottom && r.addClass("borderBottom"), e.menus && (r.addClass("hicontextsubmenu"), n.renderMenu(e.menus, r)), e.callback && r.click(function (t) {
                            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).hasClass("disable") ? t.stopPropagation() : (jquery__WEBPACK_IMPORTED_MODULE_0___default()(".hicontextmenuroot").remove(), e.callback(), t.stopPropagation());
                        }), o.append(r);
                    }), e && e.append(o);
                }

                e || jquery__WEBPACK_IMPORTED_MODULE_0___default()("body").append(i).find(".hicontextmenuroot").hide();
            },
            setPosition: function setPosition(t) {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()(".hicontextmenuroot").css({
                    left: t.pageX + 2,
                    top: t.pageY + 2
                }).show();
            },
            eventBind: function eventBind() {
                var t = this;
                this.ele.on("contextmenu", function (e) {
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".hicontextmenuroot").remove(), e.preventDefault(), t.renderMenu(t.opts.menus), t.setPosition(e), t.opts.target && "function" == typeof t.opts.target && t.opts.target(n(this));
                }), n("body").on("click", function () {
                    n(".hicontextmenuroot").remove();
                });
            }
        }, n.fn.hicontextMenu = function (t) {
            return new i(this, t), this;
        };
}, function (t, e, n) {
    "use strict";

    n.r(e);
    n(22), n(23), n(24), n(25);
    var i,
        o = n(0);
    n(26);
    window.hiLocalStorage = (i = window.localStorage || null, {
        saveLocalData: function saveLocalData(t, e) {
            return !(!i || !e || (i.setItem(t, e), 0));
        },
        getLocalData: function getLocalData(t) {
            return i ? i.getItem(t) : null;
        },
        removeItem: function removeItem(t) {
            i && i.removeItem(t);
        }
    });
    n(27), n(32);

    var _r,
        a = function () {
            function t() {
                this.allElementTypes = [];
            }

            return Object.defineProperty(t, "instance", {
                get: function get() {
                    return t._instance || (t._instance = new t()), t._instance;
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.addPrintElementTypes = function (t, e) {
                var n = this;
                this[t] ? this[t] = this[t].concat(e) : this[t] = e, e.forEach(function (t) {
                    n.allElementTypes = n.allElementTypes.concat(t.printElementTypes);
                });
            }, t.prototype.getElementTypeGroups = function (t) {
                return this[this.formatterModule(t)] || [];
            }, t.prototype.getElementType = function (t) {
                var e = this.allElementTypes.filter(function (e) {
                    return e.tid == t;
                });
                if (e.length > 0) return e[0];
            }, t.prototype.formatterModule = function (t) {
                return t || "_default";
            }, t;
        }(),
        p = n(1),
        s = n(2),
        l = function () {
            function t() { }

            return t.prototype.createPrintElementTypeHtml = function (t, e) {
                var n = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<ul class="hiprint-printElement-type"></ul>');
                return e.forEach(function (t) {
                    var e = jquery__WEBPACK_IMPORTED_MODULE_0___default()("<li></li>");
                    e.append('<span class="title">' + t.name + "</span>");
                    var i = jquery__WEBPACK_IMPORTED_MODULE_0___default()("<ul></ul>");
                    e.append(i), t.printElementTypes.forEach(function (t) {
                        i.append('<li><a class="ep-draggable-item" tid="' + t.tid + '">  ' + t.getText() + " </a></li>");
                    }), n.append(e);
                }), jquery__WEBPACK_IMPORTED_MODULE_0___default()(t).append(n), n.find(".ep-draggable-item");
            }, t;
        }(),
        u = n(5),
        d = n(15),
        c = function () {
            return function (t) {
                this.field = t.field, this.title = t.title, this.type = t.type, this.columns = t.columns;
            };
        }(),
        h = function () {
            function t(t) {
                var e = this;
                this.text = t.text, this.field = t.field, this.fields = t.fields, this.title = t.title, this.tid = t.tid, this.data = t.data, this.styler = t.styler, this.formatter = t.formatter, this.type = t.type, this.options = t.options, this.editable = t.editable, this.columnDisplayEditable = t.columnDisplayEditable, this.columnDisplayIndexEditable = t.columnDisplayIndexEditable, this.columnTitleEditable = t.columnTitleEditable, this.columnResizable = t.columnResizable, this.columnAlignEditable = t.columnAlignEditable, this.columns = [], (t.columns || []).forEach(function (t, n) {
                    e.columns.push(e.createTableColumnArray(t));
                }), this.rowStyler = t.rowStyler, this.striped = t.striped, this.groupFields = t.groupFields || [], this.groupFormatter = t.groupFormatter, this.groupFooterFormatter = t.groupFooterFormatter, this.footerFormatter = t.footerFormatter, this.gridColumnsFooterFormatter = t.gridColumnsFooterFormatter, this.columnObj = this.makeColumnObj();
            }

            return t.prototype.getText = function () {
                return this.text || this.title || "";
            }, t.prototype.createPrintElement = function (t) {
                var e = this;
                return this.columns && 0 == this.columns.length && (t.columns || []).forEach(function (t, n) {
                    e.columns.push(e.createTableColumnArray(t));
                }), new d.a(this, t);
            }, t.prototype.getData = function () {
                return [{}];
            }, t.prototype.createTableColumnArray = function (t) {
                var e = [];
                return t.forEach(function (t, n) {
                    e.push(new u.a(t));
                }), e;
            }, t.prototype.getPrintElementTypeEntity = function () {
                return new c({
                    title: this.title,
                    type: this.type
                });
            }, t.prototype.getFields = function () {
                return this.fields;
            }, t.prototype.getOptions = function () {
                return this.options || {};
            }, t.prototype.getColumnByColumnId = function (t) {
                return this.columnObj[t];
            }, t.prototype.makeColumnObj = function () {
                var t = {};
                return this.columns && this.columns.forEach(function (e) {
                    e.forEach(function (e) {
                        e.columnId && (t[e.columnId] = e);
                    });
                }), t;
            }, t;
        }(),
        f = n(4),
        g = n(3),
        m = (_r = function r(t, e) {
            return (_r = Object.setPrototypeOf || _instanceof({
                __proto__: []
            }, Array) && function (t, e) {
                t.__proto__ = e;
            } || function (t, e) {
                for (var n in e) {
                    e.hasOwnProperty(n) && (t[n] = e[n]);
                }
            })(t, e);
        }, function (t, e) {
            function n() {
                this.constructor = t;
            }

            _r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
        }),
        v = function (t) {
            function e(e, n) {
                var i = t.call(this, e) || this;
                return i.options = new g.a(n), i.options.setDefault(new g.a(p.a.instance.image.default).getPrintElementOptionEntity()), i;
            }

            return m(e, t), e.prototype.getReizeableShowPoints = function () {
                return ["se"];
            }, e.prototype.getData = function (t) {
                var e = "";
                t ? e = this.getField() ? t[this.getField()] || "" : this.options.src || this.printElementType.getData() : e = this.options.src || this.printElementType.getData();
                var n = this.getFormatter();
                return n && (e = n(e, this.options, this._currenttemplateData)), e || "";
            }, e.prototype.createTarget = function (t, e) {
                var n = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div  class="hiprint-printElement hiprint-printElement-image" style="position: absolute;"><div class="hiprint-printElement-image-content" style="height:100%;width:100%"></div></div>');
                return this.updateTargetImage(n, t, e), n;
            }, e.prototype.initSizeByHtml = function (e) {
                t.prototype.initSizeByHtml.call(this, e), this.css(e, this.getData());
            }, e.prototype.getConfigOptions = function () {
                return p.a.instance.image;
            }, e.prototype.updateDesignViewFromOptions = function () {
                this.designTarget && (this.css(this.designTarget, this.getData()), this.updateTargetImage(this.designTarget, this.getTitle(), this.getData()));
            }, e.prototype.updateTargetImage = function (t, e, n) {
                var i = t.find(".hiprint-printElement-image-content");
                i.find("img").length ? i.find("img").attr("src", n) : i.html('<img style="width:100%;height:100%;" src="' + n + '">');
            }, e.prototype.getHtml = function (t, e, n) {
                return this.getHtml2(t, e, n);
            }, e;
        }(f.a),
        y = function () {
            var _t4 = function t(e, n) {
                return (_t4 = Object.setPrototypeOf || _instanceof({
                    __proto__: []
                }, Array) && function (t, e) {
                    t.__proto__ = e;
                } || function (t, e) {
                    for (var n in e) {
                        e.hasOwnProperty(n) && (t[n] = e[n]);
                    }
                })(e, n);
            };

            return function (e, n) {
                function i() {
                    this.constructor = e;
                }

                _t4(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i());
            };
        }(),
        b = function (t) {
            function e(e) {
                var n = this;
                return e = e || {}, (n = t.call(this, e) || this).leftSpaceRemoved = e.leftSpaceRemoved, n;
            }

            return y(e, t), e.prototype.getHideTitle = function () {
                return null == this.hideTitle ? this.defaultOptions.hideTitle : this.hideTitle;
            }, e;
        }(g.a),
        E = n(8),
        T = function () {
            function t(t, e, n, i, r, a, p, s, l, u, d) {
                this.defaultPaperNumberFormat = "paperNo-paperCount", this.printLine = 0, this.templateId = t, this.width = o.a.mm.toPt(e), this.height = o.a.mm.toPt(n), this.mmwidth = e, this.mmheight = n, this.paperHeader = i, this.paperFooter = r, this.contentHeight = r - i, this.createTarget(), this.index = u, this.paperNumberLeft = a || parseInt((this.width - 30).toString()), this.paperNumberTop = p || parseInt((this.height - 22).toString()), this.paperNumberDisabled = s, this.paperNumberFormat = l, this.referenceElement = d ? jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, d) : new E.a({
                    top: 0,
                    left: 0,
                    height: 0,
                    width: 0,
                    bottomInLastPaper: 0,
                    beginPrintPaperIndex: 0,
                    printTopInPaper: 0,
                    endPrintPaperIndex: 0
                });
            }

            return t.prototype.subscribePaperBaseInfoChanged = function (t) {
                this.onPaperBaseInfoChanged = t;
            }, t.prototype.triggerOnPaperBaseInfoChanged = function () {
                this.onPaperBaseInfoChanged && this.onPaperBaseInfoChanged({
                    paperHeader: this.paperHeader,
                    paperFooter: this.paperFooter,
                    paperNumberLeft: this.paperNumberLeft,
                    paperNumberTop: this.paperNumberTop,
                    paperNumberDisabled: this.paperNumberDisabled,
                    paperNumberFormat: this.paperNumberFormat
                });
            }, t.prototype.setFooter = function (t, e, n, i) {
                this.firstPaperFooter = t, this.evenPaperFooter = e, this.oddPaperFooter = n, this.lastPaperFooter = i;
            }, t.prototype.setOffset = function (t, e) {
                this.setLeftOffset(t), this.setTopOffset(e);
            }, t.prototype.setLeftOffset = function (t) {
                t ? this.paperContentTarget.css("left", t + "pt") : this.paperContentTarget[0].style.left = "";
            }, t.prototype.setTopOffset = function (t) {
                t ? this.paperContentTarget.css("top", t + "pt") : this.paperContentTarget[0].style.top = "";
            }, t.prototype.createTarget = function () {
                this.target = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div class="hiprint-printPaper"><div class="hiprint-printPaper-content"></div></div>'), this.paperContentTarget = this.target.find(".hiprint-printPaper-content"), this.target.css("width", this.mmwidth + "mm"), this.target.css("height", this.mmheight - p.a.instance.paperHeightTrim + "mm"), this.target.attr("original-height", this.mmheight);
            }, t.prototype.createHeaderLine = function () {
                var t = this;
                this.headerLinetarget = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div class="hiprint-headerLine"  style="position: absolute;width: 100%;border-top: 1px dashed #c9bebe;height: 7pt;"></div>'), this.headerLinetarget.css("top", (this.paperHeader || -1) + "pt"), 0 == this.paperHeader && this.headerLinetarget.addClass("hideheaderLinetarget"), this.paperContentTarget.append(this.headerLinetarget), this.dragHeadLineOrFootLine(this.headerLinetarget, function (e, n) {
                    t.paperHeader = n, t.triggerOnPaperBaseInfoChanged();
                });
            }, t.prototype.createFooterLine = function () {
                var t = this;
                this.footerLinetarget = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div class="hiprint-footerLine"  style="position: absolute;width: 100%;border-top: 1px dashed #c9bebe;height: 7pt;"></div>'), this.footerLinetarget.css("top", parseInt(this.paperFooter.toString()) + "pt"), this.paperFooter == this.height && (this.footerLinetarget.css("top", this.mmheight - p.a.instance.paperHeightTrim + "mm"), this.footerLinetarget.addClass("hidefooterLinetarget")), this.paperContentTarget.append(this.footerLinetarget), this.dragHeadLineOrFootLine(this.footerLinetarget, function (e, n) {
                    t.paperFooter = n, t.triggerOnPaperBaseInfoChanged();
                });
            }, t.prototype.createPaperNumber = function (t) {
                var e = this,
                    n = this.target.find(".hiprint-paperNumber");
                if (n.length) return n.html(t), n;
                var i = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<span class="hiprint-paperNumber"  style="position: absolute">' + t + "</span>");
                return i.css("top", this.paperNumberTop + "pt"), i.css("left", this.paperNumberLeft + "pt"), this.paperContentTarget.append(i), this.dragHeadLineOrFootLine(i, function (t, n) {
                    e.paperNumberTop = n, e.paperNumberLeft = t, e.triggerOnPaperBaseInfoChanged();
                }, !0), i;
            }, t.prototype.getTarget = function () {
                return this.target;
            }, t.prototype.append = function (t) {
                this.paperContentTarget.append(t);
            }, t.prototype.updateReferenceElement = function (t) {
                t && (this.referenceElement = t);
            }, t.prototype.updatePrintLine = function (t) {
                t >= this.printLine && (this.printLine = t);
            }, t.prototype.design = function (t) {
                var e = this;
                this.createHeaderLine(), this.createFooterLine(), this.target.addClass("design"), this.paperNumberTarget = this.createPaperNumber(this.formatPaperNumber(1, 1)), this.createRuler(), this.resetPaperNumber(this.paperNumberTarget), jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.paperNumberTarget).bind("dblclick.hiprint", function () {
                    null == e.paperNumberDisabled && (e.paperNumberDisabled = !1), e.paperNumberDisabled = !e.paperNumberDisabled, e.resetPaperNumber(e.paperNumberTarget), e.triggerOnPaperBaseInfoChanged();
                }), jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.paperNumberTarget).bind("click.hiprint", function () {
                    o.a.event.trigger("BuildCustomOptionSettingEventKey_" + e.templateId, {
                        options: {
                            paperNumberFormat: e.paperNumberFormat,
                            paperNumberDisabled: e.paperNumberDisabled
                        },
                        callback: function callback(t) {
                            e.paperNumberDisabled = !!t.paperNumberDisabled || void 0, e.paperNumberFormat = t.paperNumberFormat ? t.paperNumberFormat : void 0, e.createPaperNumber(e.formatPaperNumber(1, 1)), e.resetPaperNumber(e.paperNumberTarget), e.triggerOnPaperBaseInfoChanged();
                        }
                    });
                });
            }, t.prototype.resetPaperNumber = function (t) {
                this.paperNumberDisabled ? t.addClass("hiprint-paperNumber-disabled") : t.removeClass("hiprint-paperNumber-disabled");
            }, t.prototype.updatePaperNumber = function (t, e, n) {
                var i = this.createPaperNumber(this.formatPaperNumber(t, e));
                this.paperNumberDisabled ? i.hide() : n && this.index % 2 == 1 && (i[0].style.left = "", i.css("right", this.paperNumberLeft + "pt"));
            }, t.prototype.formatPaperNumber = function (t, e) {
                return (this.paperNumberFormat ? this.paperNumberFormat : this.defaultPaperNumberFormat).replace("paperNo", t.toString()).replace("paperCount", e.toString());
            }, t.prototype.dragHeadLineOrFootLine = function (t, e, n) {
                var i = this;
                t.hidraggable({
                    axis: n ? void 0 : "v",
                    onDrag: function onDrag(t, n, i) {
                        e(n, i);
                    },
                    moveUnit: "pt",
                    minMove: p.a.instance.movingDistance,
                    onBeforeDrag: function onBeforeDrag(t) {
                        s.a.instance.draging = !0;
                    },
                    onStopDrag: function onStopDrag(t) {
                        s.a.instance.draging = !1, i.footerLinetarget.removeClass("hidefooterLinetarget"), i.headerLinetarget.removeClass("hideheaderLinetarget");
                    }
                });
            }, t.prototype.resize = function (t, e) {
                this.width = o.a.mm.toPt(t), this.height = o.a.mm.toPt(e), this.mmwidth = t, this.mmheight = e, this.target.css("width", t + "mm"), this.target.css("height", e - p.a.instance.paperHeightTrim + "mm"), this.target.attr("original-height", this.mmheight), this.paperFooter = this.height, this.footerLinetarget.css("top", this.height + "pt"), this.contentHeight = this.paperFooter - this.paperHeader, this.paperNumberLeft = parseInt((this.width - 30).toString()), this.paperNumberTop = parseInt((this.height - 22).toString()), this.paperNumberTarget.css("top", this.paperNumberTop + "pt"), this.paperNumberTarget.css("left", this.paperNumberLeft + "pt"), this.triggerOnPaperBaseInfoChanged();
            }, t.prototype.getPaperFooter = function (t) {
                var e = this.index + t;
                return 0 == e ? this.firstPaperFooter ? this.firstPaperFooter : this.oddPaperFooter ? this.oddPaperFooter : this.paperFooter : e % 2 == 0 ? this.oddPaperFooter ? this.oddPaperFooter : this.paperFooter : e % 2 == 1 ? this.evenPaperFooter ? this.evenPaperFooter : this.paperFooter : void 0;
            }, t.prototype.getContentHeight = function (t) {
                return this.getPaperFooter(t) - this.paperHeader;
            }, t.prototype.createRuler = function () {
                this.target.append('<div class="hiprint_rul_wrapper">\n                     <img class="h_img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB9AAAAAPCAYAAAC891QNAAAKxklEQVR4Xu1dPezlQxQ92yE6opGIaOg2QeWjUVjRSCg24qMgQtBItHazq5XoJBtBgYiCROGz0CBRiGRVdKISoRNKcmIudyfze+/tvL27v/Oc1+yX3/ife2buOXPv/OYdAXASwCnof4xjXRyaD/NREQHPq4qozo9pPuZjV/Gk+aiI6vyY5mM+dhVPmo+KqM6PaT7mY1fxpPmoiOr8mOZjPnYVT5qPiqjOj2k+5mNX8aT5qIjq/JjmYz52FU+aj4qozo9pPuZjV/Gk+aiI6vyY5mM+dhVPmo+KqE6OeQTAXwD4q/rHONbFoPkwHxUR8LyqiOr8mOZjPnYVT5qPiqjOj2k+5mNX8aT5qIjq/JjmYz52FU+aj4qozo9pPuZjV/Gk+aiI6vyY5mM+dhVPmo+KqM6PaT7mY1fxpPmoiOr8mOZjPnYVT5qPiqjOj2k+5mNX8aT5qIjq5JhuoE8GrvAxL5DC4E4MbT4mglb4iPkoDO7E0OZjImiFj5iPwuBODG0+JoJW+Ij5KAzuxNDmYyJohY+Yj8LgTgxtPiaCVviI+SgM7sTQ5mMiaIWPmI/C4E4MbT4mglb4iPkoDO7E0OZjImiFj5iPwuBODG0+JoJW+Ij5KAzu+Q6dG+gPAXgLwBkAzwH483wHu8T/fZ5YtwO4HsDbAK5qvx4DcAeAry7xz7ntfx84go9PAfD3/BCPEo4rALwM4Mk0r/h3ajjihgbOpacBvARAFUfMK84nrofvRfkIHGcBHAfwqyCOmwC8C+BoW98PA/hEEAfXxwsATgNQzlfE0eug6jrnlNqmg2vW/CU9Jy7+3D82Lb+xrSH+PfPAD9sE9iL/+y6+hOuemqjIB+fYly2m4a8UccS0yHNLEUf2u+Hl71+xt99lfZwA8KLo+ghd5PwKbbxHkI/Is/QqyvlqtB9UWOe77AcVcfwG4HIAzwN4BQD/rIgj78+V1kc/r7gnUdTzHgfnUe8V1eeVkp5vyldKet7jYP2H+1w1Pe9xXJ1qD8r5alQXXfs637UuqoiDfQM1Pd/Gh8r6GOG4WVDPRziiH6W0P982r1T0fBsOFT0f4eC+Q03PRziuE9TzbfNq9fXEaKDTTEVjkMW2KE5f5FrzXv+7KMRFwSqLHvGwURgY13w4gDjIB3l4NTVBGBw1HPmrAe5rHNwqjIPifWc7YBLrRGlekY8nALzfClW5wKCEI+crYmAiZlFaeX0EL4o4Mh807PzwAJMaHz0OYlDNu9t08HUAj7XDQGvU/JGeM2/FgawwVzzs91Hj6d7273sZiQv88JIvCT38qTUP3gHwoBgfbPrHh40pziNytGYvucQHcURzjc3arIcq64N8sNHJJsgHjZh86E8JRy6UEMNlgvkqr4/ghc0pxfURfHwL4BEAH4rykXGweKKQd3fZDyro+QjHN63w83M6KL729THC8XvTDCU9H+GInKWk50s41PR8aX2o6fmmfMUXWFT0fNP6UNLzTXwo6fk2HCp6vktdVEHPRzi47eBLIUp6PsLBnMs9oJKej3DECwVKer6EQ03Pl9aHmp5vyldKer5pfSjp+SY+lPR8G47V63k00Lmgo/jcF+AucD25bLilN1miwE4h6ZuHZT/MHgP3VzTEz09+2ChQxMFmzrWt8fyUKA6ui1sAXAngTQCKOPKJn3gb6lFBPpivuC54s4EyjhCQnHNV81W8ofZee1tQEUfWwXh7+xrB9RHzKr+B3vPxHYDbWsN5jZq/yxvoNIvx5tofrbHD3LymA3KbcNAmMPah7Wv2YJtwxNp/pt0EooqD/vCXhoE3mijiyDcC8BApG1SKOJiveJjs7vbGsyqO2ArE3oNFYEU+iIM+/oF20wf/rIgjdDAKo58J6SBjvrQfVNLzjIP72fzGmtL66HGo6nmPQ1XPexyqep5xcD3EjQBqet7nK1U9H61zRT3vcajq+UgHFfV8U11USc8zjv4NdCU973Go6nmPQ1XPexyqep5x5BsB1PS8z1eqej5a54p63uNQ1fORDkrouRvoe3S6ix6NQjWLCnzb7ot2vatiQyqfMFFvSDHBftyKhqoN9EPh49Aanflgj+I6H725rdp4jje3WVjnlaI3uIFepHSbh/0/NNCpiZxvfCtSqdCQD2YEi9EEUWpIZRxxiISNc35UG+iHwodyo7NfH/mAUhyYobdXOrjUv7mtvM75hhQ/XwN4Q6SBvm0/qFJw73GQB8UG+giHop6PcGROVNZ5j0NVzw+VD1U9H/GhqOc9DlU9H61zRT0Pn75UF1XR8x4HbzBR1PMRDkU9H+FQ1PMeBw9Qs+6ruD8nln5PqFgvyTiivivR6ATQv5g6qv3w1j6l/Xnmg7/nja/xUpGKbx+tcxk9P8Qr3PtkFUZR6Ypqvil8CsBr6TtdFXEcypXIxBHf2875xZNjkbCU5tWh8DFqoCvywfwbVyvx6xr4UVzn5ONxACcB8ISl8tXnIejBg+JV9KM30Pt5pXRFXL/5yNc7q1zh3vsSYrqr3dbAf1O5anvJX4VxV7gSeWl9vNUWP281eVbkSv1D5aMvuKvOK/ITX9fAt21V1zkP+nyeNujKfOR8q6CDu+wHVXH0DXT+ee1XuI/4UNTzTfNKSc+XcKjp+SHzoajnIz4U9XyEQ1HPl/hQ0/Nd6nAKej7C0TfQFfR8hIPNKLX9+aZ5paTnSzjU9PyQ+egb6Ar7waV8pbY/H+Hgi15q+/MlPmT0PBro/JVFaSaoM+1q5Py2KgH1JzjW/HdRcCee3Pzk96byOqy1Y2NDiqcwjkY3RxRHnlcsSh8TxhGFHn7/I9eI4rw6JD4iX6nPq3yanTnW8+rS5ef8FQehg6p85Mbakg7yIFBoPgtcvAZ9jdqY9TxyGDe4/P4lrpmzTSePtwNna/UqGccJAKdTw5baqMhHXh/x8yviyE110kKfqIjjUPg4FBycV/mGGeYmz6uLqzM578YekGs8fr92PnbdDyri4PrIb6zxDSNFHIp6vm1eqej5CIeinh8yH4p6vjSv1PT8kOeVop7vWodbuw6OcCjq+QiHop5vm1cqer40r6KmpbQ/31SnVuZDUc+X5pWanh/yOpfS89xAT71aqWZ5/NxrLZr75/tvZpkjrYMonrueu9aFHAGv3zUfnHO+cr5yvnK+WuMhIOcm5ybnJucm56aLe3jGedd513nXedd513nX9WfXr1y/+kcLvBYcA8+DPdeCG+h7BtCJyMm47U0sSBYkC5LzqQt2Lti5YOeCnQt2LtjZE9oT2hPaE9oT2hPaE9oT2hPaE9oT2hPaE9oT2hPaE9oTintCN9CdyJ3IncidyMUTuQ/y+CCPD/L8u4hdpHCRwkUKe1t7W3tbe1t7Wzeu3LiyJ7QntCe0J7QntCe0J7QntCe0J7QntCfcyxO6gW5DaUNpQ2lDaUNpQ2lDaUNpQ7mXofRBHh/k8UEeH+RJdsqaYk2xprjO4DqD6wyuM7jO4DqD6wz2hPaE9oT2hPaE9oTSntANdCcxJzEnMekk5qaNmzZu2rhp46bNOdU5FylcpHCRwv7e/t7+3v7ejSs3rty4sie0J7QntCe0J7QntCe0J7QntCe0J9zDE7qBbjNlM2UzZTNlM2UzZTNlM7WHmfJBHh/k8UEeH+TxQR4f5DnXTsK6al1148q1FtdaXGtxrcW1FtdaXGuxJ7QntCe0J7QnFPaEfwNdvyoPYn5mCwAAAABJRU5ErkJggg==" />\n                     <img class="v_img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB9AAAAAPCAYAAAC891QNAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAiHSURBVHhe7Z29q21HGYevplLTKSL4UQQkwUYQG1EUtBGba5qkyEeX+NGI9irof2ClvTaCtoqgoEkISAIpTZMiJBCCQsCvSq7vc88emExm7XO2++Tc+S2fB17WmnftzZ3ffWf2b601a+9za8Kdw7bHnDkwZw7MmQNz5sCcOTBnDsyZA3PmwJw5MGcOzJkDc+bAnDkwZw7MmYPlc+897IiIiIiIiIiIiIiIiIiIiPxf4wK6iIiIiIiIiIiIiIiIiIhI4QK6iIiIiIiIiIiIiIiIiIhI4QK6iIiIiIiIiIiIiIiIiIhI4QK6iIiIiIiIiIiIiIiIiIhIkbCA/vmKOxW/rfggieKxCvJJzHTQJl6qeJBEADMd7JOjLinMdDxd8b6L3Rj2XI+96IDbFSlzHPZcj59WkGO74nynT62P7f96poNj5FeGMY+/EQ363I+h1XXM6tHmAvF9EkWiDrZp42prfox9th43w551AP1/6mL3LtbjZtia57SJ1vdkHX09mq5VrwdnOug7/sexRqIO6tD63fw8UQdb2unjivkxzulEHXupx150AP3v/TxRx17q0XyQaPM9WUdfD/b716zGTAd9H/08UUfrM9H8PFEHW9rp42rm59bjZtizDqD/vZ9bj5tha57TJtp8T9bR1+Md64OzBfT3HLY99yr3/oovV3yo4scVX62YvW7GdfflnNyWDuKhit9VvFox45x/97pzMx2PH/Y59kBFG2wjN9G/q+a2dPys4l8V/aQZuYn+XTW393qwz+s/XLF1IXXdfTknN9PRXoeGv17sTrnuvpyTu2xcfboitR5fqHimgtd/s+LfFTOuuy+n5D5TQR/pP3P4YxVb4+oyzu3LyKm5r1U8eojvkRiYvXfGdfSl55TcWA/q0Grwg4o/HPavwin/7si5uVHHJw9b2knjaqaDmyTPVrST4Nl7Z5zbl5FTcnuuR9PxnYonK2bvnXFuX0ZOyc3mObB982J3+t4Z5/Zl5JTcZePq2xWz9844ty8jp+RGHb0Pcvy5w/YqnPLvjpybO6ajn+fEyteDW/Ojh9cRaTpmfk4k6djyDyJNx8zPCevxdt6N3DEdvZ8TafMc2PZ+TiSPq+bnRJKOLT8nUnW0eZ5wH25rfvSk6hj9PFHHzD9SdYx+bj1uLndMR/Pz1HkObJuf72Fc4eeJOmZ+nq6Dvrd5/o71wdW/gY6gNyr+VsHiE4tQiWzpwEi+W/HDiq2FnJU4Vg/6z2Dj2OrMdPy64hsVH6/4VUWqjkZ6PRLZ0tFMI6EWcFk9/l5BfnVmOjBFThg5kW9PJq8GfXyhgjn8jwoMPXF+8LTePyu4CUK/7z/k0hjrQZs5zYkUF+ecKCYw6uhPZtHwi4vd5Rl13FeB1/FwzNcrOJbAXuvR60hi1EEbuJn7l4vdCC6rxyuH7eqMOvDBj1b8vmLVb6fNmOmY+fnq14Nb82MkUcfMz9N0bPlHmo4tP7ceN8MxHT2J8xxGP0+vR/PzNB1bfp6oY+v6nNeseh9ua37MSNMx83NI0rHlH5Ck49j1ufV49zmmYyRJB22YXZ8n16O/Pk/Scez6PE3H6OfT9UH/Bvq9g8FFYY59CzIBBtYTFasuRp3KFyv+dLEbCSeN1IIFQn6WInHBCnodKTdKt+DEMXlMASeLPJX1fMUvK1Y0wqvAIu6PKnjyDLNMH1tyb+AhDJ7e7S/O03irghsMzOk9zANOhDmnevluKw/qwcUTT7nie+NP3qXQ6/gJiWC4uE0eU0A98GzmOR7e3/hJ4/WKz1Xwiyb8usle2Mv1YKqO0c8Tdcz8PHlc9X6eWo/Rz9N1ND9PHVejn6fWY/Tz1HqMfp6qY2Qv90VTdYx+nqhj5ufJ46r389R6jH6erqP5eeq4Gv08tR6jn6fWY/TzVB1bvG19cPUFdCb4RyqYJHz4tp9pAH4OJKUoMx2frfhzBfD3Gzi2OjMdn6j4TQVPl6SwNa74KQcW1lJuls50sLDJT07QfrEi4SJkqx4PV/AtYj6UeRJodWY62O8NPoGZDk4WOZnHHB+p4NjqbI0r4MESFtNXHFf0CX9ofXytYkvHyj7IZ88HKvAI+s0DC+3z6OcV/QM+K+sY6/Gfw5Zv1nNhe7uikaSD9qcqvlIxfj6l6YBvVXDC3pOmg4snzkF4Ur/pgiQdzHMegEMHDyulfF7N6rH18FtaPb5UgXfj4XzDq5Gko39oL8kHRx0zP+f46teDs/kBnBu2m7yJOmZ+nlqP0c9TdUDv56k6Rj9P1DHz89R6jH6eWo/RzxN1zPw8UcfMzxPui87mB/R+nqhj5uep9Rj9PHlc9X6eqmP080QdMz9Prcfo56n1GP08UcfMzxN1bN1vT1sfvAtmztM+TPh2MsUAI9/g+OqMOgj2ybUbWok6GHTtD/C3BZFUHdyAa2MMEnW0NpE8rjjx5WdA0nXQd9pE+1mTRB0E++TajepEHf3n1arjatbHUQdwjHxjNR3Q5nH/kz70uemC1XXM6sE2rR7HxhXR+p6qo+030nT07fRxhUek66Df9J820XwvsR5safefw4k66C/tvXzuNh39WGuvSdBBv5kXHINUHWxpp9ejjSuC/WQdbR8SdfTt9HE1+nmijr7PBJpS68GWdvPzVB178cFRR/8atrQTdND33s9TdbClnV6P0c+TdbR9SNTRt9PH1ejniTrod/MKon1upekAtrSbn6fq2IsPznS088XGajr+Z/YiRB1roY61UMdaqGMt1LEW6lgLdayFOtZCHWuhjrVQx1qoYy3UsRbqWAt1rIU61kIda6GOtVDHWtzxb6CLiIiIiIiIiIiIiIiIiIgU9x22e+CPh2066lgLdayFOtZCHWuhjrVQx1qoYy3UsRbqWAt1rIU61kIda6GOtVDHWqhjLdSxFupYC3WshTqW4dat/wKB2hwSL8nDjQAAAABJRU5ErkJggg==" />\n                    </div>');
            }, t.prototype.displayHeight = function () {
                return this.mmheight - p.a.instance.paperHeightTrim + "mm";
            }, t.prototype.displayWidth = function () {
                return this.mmwidth + "mm";
            }, t.prototype.getPanelTarget = function () {
                return this.target.parent(".hiprint-printPanel ");
            }, t;
        }(),
        P = n(6),
        _ = function () {
            var _t5 = function t(e, n) {
                return (_t5 = Object.setPrototypeOf || _instanceof({
                    __proto__: []
                }, Array) && function (t, e) {
                    t.__proto__ = e;
                } || function (t, e) {
                    for (var n in e) {
                        e.hasOwnProperty(n) && (t[n] = e[n]);
                    }
                })(e, n);
            };

            return function (e, n) {
                function i() {
                    this.constructor = e;
                }

                _t5(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i());
            };
        }(),
        w = function (t) {
            function e(e, n) {
                var i = t.call(this, e) || this;
                return i.options = new b(n), i.options.setDefault(new b(p.a.instance.longText.default).getPrintElementOptionEntity()), i;
            }

            return _(e, t), e.prototype.getDesignTarget = function (e) {
                var n = t.prototype.getDesignTarget.call(this, e);
                return n.find(".hiprint-printElement-longText-content").css("border", "1px dashed #cebcbc"), n;
            }, e.prototype.getProxyTarget = function (t) {
                t && this.SetProxyTargetOption(t);
                var e = this.getData(),
                    n = this.createTarget(this.printElementType.getText(!0), e);
                return this.updateTargetSize(n), this.css(n, e), n;
            }, e.prototype.updateDesignViewFromOptions = function () {
                if (this.designTarget) {
                    var t = this.getData(),
                        e = this.getHtml(this.designPaper)[0].target;
                    this.designTarget.find(".hiprint-printElement-longText-content").html(e.find(".hiprint-printElement-longText-content").html()), this.css(this.designTarget, t);
                }
            }, e.prototype.getConfigOptions = function () {
                return p.a.instance.longText;
            }, e.prototype.getTitle = function () {
                return this.options.title || this.printElementType.title;
            }, e.prototype.getData = function (t) {
                return t ? t[this.getField()] || "" : this.options.testData || this.printElementType.getData() || "";
            }, e.prototype.updateTargetText = function (t, e, n) {
                var i = t.find(".hiprint-printElement-longText-content"),
                    o = this.getText(e, n);
                i.html(o);
            }, e.prototype.createTarget = function (t, e) {
                var n = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div  class="hiprint-printElement hiprint-printElement-longText" style="position: absolute;"><div class="hiprint-printElement-longText-content hiprint-printElement-content" style="height:100%;width:100%"></div></div>');
                return this.updateTargetText(n, t, e), n;
            }, e.prototype.getText = function (t, e) {
                var n = this.getFormatter();
                e && (e = 0 != this.options.leftSpaceRemoved ? e.toString().replace(/^\s*/, "") : e);
                return (this.getField() ? (this.options.getHideTitle() ? "" : t ? t + "：" : "") + (n ? n(t, e, this.options, this._currenttemplateData) : e) : n ? n(t, t, this.options, this._currenttemplateData) : t || "") || "";
            }, e.prototype.getHtml = function (t, e) {
                this.setCurrenttemplateData(e), this.createTempContainer();
                var n = this.getPaperHtmlResult(t, e);
                return this.removeTempContainer(), n;
            }, e.prototype.getHeightByData = function (t) {
                this.createTempContainer();
                var e = this.getPaperHtmlResult(new T("", 1e3, 1e3, 0, 25e3, 0, 0, !0, void 0, 0, void 0), {}, t);
                return this.removeTempContainer(), e[0].referenceElement.bottomInLastPaper - e[0].referenceElement.printTopInPaper;
            }, e.prototype.getLongTextIndent = function () {
                return this.options.longTextIndent ? '<span class="long-text-indent" style="margin-left:' + this.options.longTextIndent + 'pt"></span>' : '<span class="long-text-indent"></span>';
            }, e.prototype.getPaperHtmlResult = function (t, e, n) {
                var i = this,
                    o = [],
                    r = 0,
                    a = n || this.getData(e),
                    p = this.getText(this.getTitle(), a),
                    s = this.createTarget(this.getTitle(), this.options.testData || "");
                this.css(s, a), e ? this.updateTargetWidth(s) : this.updateTargetSize(s), this.getTempContainer().html(""), this.getTempContainer().append(s);
                var l = [this.getLongTextIndent()],
                    u = p.split(new RegExp("\r|\n", "g"));
                if (u.forEach(function (t, e) {
                    var n = 0 != i.options.leftSpaceRemoved ? (t || "").toString().replace(/^\s*/, "") : t;
                    l = l.concat(n.split("")), e < u.length - 1 && l.push("<br/>" + i.getLongTextIndent());
                }), 0 == l.length && (l = [""]), this.isHeaderOrFooter() || this.isFixed() || !e) return (f = this.getStringBySpecificHeight(l, 25e3, s)).target.css("left", this.options.displayLeft()), f.target.css("top", this.options.displayTop()), f.target[0].height = "", o.push(new P.a({
                    target: f.target,
                    printLine: this.options.displayTop() + f.height,
                    referenceElement: new E.a({
                        top: this.options.getTop(),
                        left: this.options.getLeft(),
                        height: this.options.getHeight(),
                        width: this.options.getWidth(),
                        beginPrintPaperIndex: t.index,
                        bottomInLastPaper: this.options.getTop() + f.height,
                        printTopInPaper: this.options.getTop()
                    })
                })), o;

                for (var d = this.getBeginPrintTopInPaperByReferenceElement(t); l.length > 0;) {
                    var c = 0,
                        h = t.getPaperFooter(r);
                    0 == r && d > h && (d = d - h + t.paperHeader, o.push(new P.a({
                        target: void 0,
                        printLine: void 0
                    })), r++ , c = t.getContentHeight(r) - (d - t.paperHeader), h = t.getPaperFooter(r));
                    var f = this.getStringBySpecificHeight(l, c > 0 ? c : 0 == r ? h - d : t.getContentHeight(r), s);
                    l.splice(0, f.length);
                    var g = void 0,
                        m = void 0;
                    f.target.css("left", this.options.displayLeft()), f.target[0].height = "", 0 == r || c > 0 ? (m = d, f.target.css("top", m + "pt"), g = l.length > 0 ? d + f.height : null != this.options.lHeight ? d + (f.height > this.options.lHeight ? f.height : this.options.lHeight) : d + f.height) : (m = t.paperHeader, f.target.css("top", m + "pt"), g = m + f.height), o.push(new P.a({
                        target: f.target,
                        printLine: g,
                        referenceElement: new E.a({
                            top: this.options.getTop(),
                            left: this.options.getLeft(),
                            height: this.options.getHeight(),
                            width: this.options.getWidth(),
                            beginPrintPaperIndex: t.index,
                            bottomInLastPaper: g,
                            printTopInPaper: m
                        })
                    })), r++;
                }

                return o;
            }, e.prototype.getStringBySpecificHeight = function (t, e, n) {
                var i = o.a.pt.toPx(e),
                    r = this.IsPaginationIndex(t, t.length - 1, i, n);
                return r.IsPagination ? r : this.BinarySearch(t, 0, t.length - 1, i, n);
            }, e.prototype.BinarySearch = function (t, e, n, i, o) {
                var r = Math.floor((e + n) / 2);
                if (e > n) return o.find(".hiprint-printElement-longText-content").html(""), {
                    IsPagination: !0,
                    height: 0,
                    length: 0,
                    target: o.clone()
                };
                var a = this.IsPaginationIndex(t, r, i, o);
                return a.IsPagination ? a : "l" == a.move ? this.BinarySearch(t, e, r - 1, i, o) : this.BinarySearch(t, r + 1, n, i, o);
            }, e.prototype.IsPaginationIndex = function (t, e, n, i) {
                i.find(".hiprint-printElement-longText-content").html(t.slice(0, e + 2).join(""));
                var r = i.height();
                i.find(".hiprint-printElement-longText-content").html(t.slice(0, e + 1).join(""));
                var a = i.height();
                return e >= t.length - 1 && a < n ? {
                    IsPagination: !0,
                    height: o.a.px.toPt(a),
                    length: t.length,
                    target: i.clone()
                } : a <= n && r >= n ? {
                    IsPagination: !0,
                    height: a,
                    length: e + 1,
                    target: i.clone()
                } : a >= n ? {
                    IsPagination: !1,
                    move: "l"
                } : r <= n ? {
                    IsPagination: !1,
                    move: "r"
                } : {
                                    IsPagination: !0,
                                    result: 1
                                };
            }, e;
        }(f.a),
        x = function () {
            function t() { }

            return t.replaceEnterAndNewline = function (t, e) {
                return t.replace(new RegExp("\r|\n|/g", "g"), e);
            }, t.replaceTab = function (t, e) {
                return t.replace(new RegExp("\t/g", "g"), e);
            }, t.replaceEnterAndNewlineAndTab = function (t, e) {
                return t.replace(new RegExp("\r|\n|\t|/g", "g"), e);
            }, t;
        }(),
        C = function () {
            var _t6 = function t(e, n) {
                return (_t6 = Object.setPrototypeOf || _instanceof({
                    __proto__: []
                }, Array) && function (t, e) {
                    t.__proto__ = e;
                } || function (t, e) {
                    for (var n in e) {
                        e.hasOwnProperty(n) && (t[n] = e[n]);
                    }
                })(e, n);
            };

            return function (e, n) {
                function i() {
                    this.constructor = e;
                }

                _t6(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i());
            };
        }(),
        O = function (t) {
            function e(e) {
                var n = t.call(this, e) || this;
                return n.title && (n.title = x.replaceEnterAndNewlineAndTab(n.title, "")), n;
            }

            return C(e, t), e.prototype.getHideTitle = function () {
                return null == this.hideTitle ? this.defaultOptions.hideTitle : this.hideTitle;
            }, e.prototype.getTextType = function () {
                return (null == this.textType ? this.defaultOptions.textType : this.textType) || "text";
            }, e.prototype.getFontSize = function () {
                return (null == this.fontSize ? this.defaultOptions.fontSize : this.fontSize) || 9;
            }, e.prototype.getbarcodeMode = function () {
                return (null == this.barcodeMode ? this.defaultOptions.barcodeMode : this.barcodeMode) || "CODE128";
            }, e;
        }(g.a),
        H = function () {
            var _t7 = function t(e, n) {
                return (_t7 = Object.setPrototypeOf || _instanceof({
                    __proto__: []
                }, Array) && function (t, e) {
                    t.__proto__ = e;
                } || function (t, e) {
                    for (var n in e) {
                        e.hasOwnProperty(n) && (t[n] = e[n]);
                    }
                })(e, n);
            };

            return function (e, n) {
                function i() {
                    this.constructor = e;
                }

                _t7(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i());
            };
        }(),
        D = function (t) {
            function e(e, n) {
                var i = t.call(this, e) || this;
                return i.options = new O(n), i.options.setDefault(new O(p.a.instance.text.default).getPrintElementOptionEntity()), i;
            }

            return H(e, t), e.prototype.getDesignTarget = function (e) {
                return t.prototype.getDesignTarget.call(this, e);
            }, e.prototype.getProxyTarget = function (t) {
                t && this.SetProxyTargetOption(t);
                var e = this.getData(),
                    n = this.createTarget(this.printElementType.getText(!0), e);
                return this.updateTargetSize(n), this.css(n, e), n;
            }, e.prototype.updateDesignViewFromOptions = function () {
                if (this.designTarget) {
                    var t = this.getData();
                    this.css(this.designTarget, t), this.updateTargetText(this.designTarget, this.getTitle(), t);
                }
            }, e.prototype.getConfigOptions = function () {
                return p.a.instance.text;
            }, e.prototype.getTitle = function () {
                var t = this.options.title || this.printElementType.title || "";
                return t && (t = x.replaceEnterAndNewlineAndTab(t, "")), t;
            }, e.prototype.getData = function (t) {
                var e = void 0;

                if (e = t ? t[this.getField()] || "" : this.options.testData || this.printElementType.getData() || "", this.options.format) {
                    if ("datetime" == this.options.dataType) return o.a.dateFormat(e, this.options.format);

                    if ("boolen" == this.options.dataType) {
                        var n = this.options.format.split(":");
                        if (n.length > 0) return !0 === e || "true" === e ? n[0] : n[1];
                    }
                }

                return e;
            }, e.prototype.updateTargetText = function (t, e, n, i) {
                var r = this.getFormatter(),
                    a = t.find(".hiprint-printElement-text-content"),
                    p = "";
                p = this.getField() ? (this.options.getHideTitle() ? "" : e ? e + "：" : "") + (r ? r(e, n, this.options, this._currenttemplateData, t) : n) : n = r ? r(e, e, this.options, this._currenttemplateData, t) : e;
                var s = this.options.getTextType();
                if ("text" == s) a.html(p); else {
                    if ("barcode" == s) {
                        a.html('<svg width="100%" display="block" height="100%" class="hibarcode_imgcode" preserveAspectRatio="none slice"></svg ><div class="hibarcode_displayValue"></div>');

                        try {
                            n ? (jsbarcode__WEBPACK_IMPORTED_MODULE_1___default()(a.find(".hibarcode_imgcode")[0], n, {
                                format: this.options.getbarcodeMode(),
                                width: 1,
                                textMargin: -1,
                                lineColor: this.options.color || "#000000",
                                margin: 0,
                                height: parseInt(o.a.pt.toPx(this.options.getHeight() || 10).toString()),
                                displayValue: !1
                            }), a.find(".hibarcode_imgcode").attr("height", "100%"), a.find(".hibarcode_imgcode").attr("width", "100%"), this.options.hideTitle || a.find(".hibarcode_displayValue").html(n)) : a.html("");
                        } catch (t) {
                            console.log(t), a.html("此格式不支持该文本");
                        }
                    }

                    if ("qrcode" == s) {
                        a.html("");

                        try {
                            if (n) {
                                var l = parseInt(o.a.pt.toPx(this.options.getWidth() || 20)),
                                    u = parseInt(o.a.pt.toPx(this.options.getHeight() || 20));
                                new qrcodejs2__WEBPACK_IMPORTED_MODULE_2___default.a(a[0], {
                                    width: l,
                                    height: u,
                                    colorDark: this.options.color || "#000000",
                                    useSVG: !0
                                }).makeCode(n);
                            }
                        } catch (t) {
                            console.log(t), a.html("二维码生成失败");
                        }
                    }
                }
            }, e.prototype.onResize = function (e, n, i, o, r) {
                t.prototype.onResize.call(this, e, n, i, o, r);
                "barcode" != this.options.getTextType() && "qrcode" != this.options.getTextType() || this.updateTargetText(this.designTarget, this.getTitle(), this.getData());
            }, e.prototype.createTarget = function (t, e, n) {
                var i = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div tabindex="1" class="hiprint-printElement hiprint-printElement-text" style="position: absolute;"><div class="hiprint-printElement-text-content hiprint-printElement-content" style="height:100%;width:100%"></div></div>');
                return this.updateTargetText(i, t, e, n), i;
            }, e.prototype.getHtml = function (t, e, n) {
                return this.getHtml2(t, e, n);
            }, e;
        }(f.a),
        I = function () {
            var _t8 = function t(e, n) {
                return (_t8 = Object.setPrototypeOf || _instanceof({
                    __proto__: []
                }, Array) && function (t, e) {
                    t.__proto__ = e;
                } || function (t, e) {
                    for (var n in e) {
                        e.hasOwnProperty(n) && (t[n] = e[n]);
                    }
                })(e, n);
            };

            return function (e, n) {
                function i() {
                    this.constructor = e;
                }

                _t8(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i());
            };
        }(),
        R = function (t) {
            function e(e) {
                return t.call(this, e) || this;
            }

            return I(e, t), e;
        }(g.a),
        M = function () {
            var _t9 = function t(e, n) {
                return (_t9 = Object.setPrototypeOf || _instanceof({
                    __proto__: []
                }, Array) && function (t, e) {
                    t.__proto__ = e;
                } || function (t, e) {
                    for (var n in e) {
                        e.hasOwnProperty(n) && (t[n] = e[n]);
                    }
                })(e, n);
            };

            return function (e, n) {
                function i() {
                    this.constructor = e;
                }

                _t9(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i());
            };
        }(),
        S = function (t) {
            function e(e, n) {
                var i = t.call(this, e) || this;
                return i.options = new R(n), i.options.setDefault(new R(p.a.instance.html.default).getPrintElementOptionEntity()), i;
            }

            return M(e, t), e.prototype.updateDesignViewFromOptions = function () {
                if (this.designTarget) {
                    var t = this.getData();
                    this.css(this.designTarget, t), this.updateTargetHtml();
                }
            }, e.prototype.updateTargetHtml = function () {
                var t = this.getFormatter();

                if (t) {
                    var e = t(this.getData(), this.options, this._currenttemplateData);
                    this.designTarget.find(".hiprint-printElement-html-content").html(e);
                }
            }, e.prototype.getConfigOptions = function () {
                return p.a.instance.html;
            }, e.prototype.createTarget = function (t, e) {
                var n = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div  class="hiprint-printElement hiprint-printElement-html" style="position: absolute;"><div class="hiprint-printElement-html-content" style="height:100%;width:100%"></div></div>'),
                    i = this.getFormatter();

                if (i) {
                    var o = i(this.getData(), this.options, this._currenttemplateData);
                    n.find(".hiprint-printElement-html-content").append(o);
                } else this.options.content && n.find(".hiprint-printElement-html-content").append(this.options.content);

                return n;
            }, e.prototype.getHtml = function (t, e, n) {
                return this.getHtml2(t, e, n);
            }, e;
        }(f.a),
        B = function () {
            var _t10 = function t(e, n) {
                return (_t10 = Object.setPrototypeOf || _instanceof({
                    __proto__: []
                }, Array) && function (t, e) {
                    t.__proto__ = e;
                } || function (t, e) {
                    for (var n in e) {
                        e.hasOwnProperty(n) && (t[n] = e[n]);
                    }
                })(e, n);
            };

            return function (e, n) {
                function i() {
                    this.constructor = e;
                }

                _t10(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i());
            };
        }(),
        F = function (t) {
            function e(e, n) {
                var i = t.call(this, e) || this;
                return i.options = new g.a(n), i.options.setDefault(new g.a(p.a.instance.vline.default).getPrintElementOptionEntity()), i;
            }

            return B(e, t), e.prototype.updateDesignViewFromOptions = function () {
                if (this.designTarget) {
                    var t = this.getData();
                    this.css(this.designTarget, t);
                }
            }, e.prototype.getConfigOptions = function () {
                return p.a.instance.hline;
            }, e.prototype.createTarget = function (t, e) {
                return jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div class="hiprint-printElement hiprint-printElement-vline" style="border-left:1px solid;position: absolute;"></div>');
            }, e.prototype.getReizeableShowPoints = function () {
                return ["s"];
            }, e.prototype.getHtml = function (t, e, n) {
                return this.getHtml2(t, e, n);
            }, e;
        }(f.a),
        L = function () {
            var _t11 = function t(e, n) {
                return (_t11 = Object.setPrototypeOf || _instanceof({
                    __proto__: []
                }, Array) && function (t, e) {
                    t.__proto__ = e;
                } || function (t, e) {
                    for (var n in e) {
                        e.hasOwnProperty(n) && (t[n] = e[n]);
                    }
                })(e, n);
            };

            return function (e, n) {
                function i() {
                    this.constructor = e;
                }

                _t11(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i());
            };
        }(),
        A = function (t) {
            function e(e, n) {
                var i = t.call(this, e) || this;
                return i.options = new g.a(n), i.options.setDefault(new g.a(p.a.instance.hline.default).getPrintElementOptionEntity()), i;
            }

            return L(e, t), e.prototype.updateDesignViewFromOptions = function () {
                if (this.designTarget) {
                    var t = this.getData();
                    this.css(this.designTarget, t);
                }
            }, e.prototype.getConfigOptions = function () {
                return p.a.instance.hline;
            }, e.prototype.createTarget = function (t, e) {
                return jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div class="hiprint-printElement hiprint-printElement-hline" style="border-top:1px solid;position: absolute;"></div>');
            }, e.prototype.getReizeableShowPoints = function () {
                return ["e"];
            }, e;
        }(f.a),
        z = function () {
            var _t12 = function t(e, n) {
                return (_t12 = Object.setPrototypeOf || _instanceof({
                    __proto__: []
                }, Array) && function (t, e) {
                    t.__proto__ = e;
                } || function (t, e) {
                    for (var n in e) {
                        e.hasOwnProperty(n) && (t[n] = e[n]);
                    }
                })(e, n);
            };

            return function (e, n) {
                function i() {
                    this.constructor = e;
                }

                _t12(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i());
            };
        }(),
        k = function (t) {
            function e(e, n) {
                var i = t.call(this, e) || this;
                return i.options = new g.a(n), i.options.setDefault(new g.a(p.a.instance.rect.default).getPrintElementOptionEntity()), i;
            }

            return z(e, t), e.prototype.updateDesignViewFromOptions = function () {
                if (this.designTarget) {
                    var t = this.getData();
                    this.css(this.designTarget, t);
                }
            }, e.prototype.getConfigOptions = function () {
                return p.a.instance.hline;
            }, e.prototype.createTarget = function (t, e) {
                return jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div class="hiprint-printElement hiprint-printElement-rect" style="border:1px solid;position: absolute;"></div>');
            }, e.prototype.getHtml = function (t, e, n) {
                return this.getHtml2(t, e, n);
            }, e;
        }(f.a),
        N = function () {
            var _t13 = function t(e, n) {
                return (_t13 = Object.setPrototypeOf || _instanceof({
                    __proto__: []
                }, Array) && function (t, e) {
                    t.__proto__ = e;
                } || function (t, e) {
                    for (var n in e) {
                        e.hasOwnProperty(n) && (t[n] = e[n]);
                    }
                })(e, n);
            };

            return function (e, n) {
                function i() {
                    this.constructor = e;
                }

                _t13(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i());
            };
        }(),
        V = function (t) {
            function e(e, n) {
                var i = t.call(this, e) || this;
                return i.options = new g.a(n), i.options.setDefault(new g.a(p.a.instance.oval.default).getPrintElementOptionEntity()), i;
            }

            return N(e, t), e.prototype.updateDesignViewFromOptions = function () {
                if (this.designTarget) {
                    var t = this.getData();
                    this.css(this.designTarget, t);
                }
            }, e.prototype.getConfigOptions = function () {
                return p.a.instance.hline;
            }, e.prototype.createTarget = function (t, e) {
                return jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div class="hiprint-printElement hiprint-printElement-oval" style="border:1px solid;position: absolute;border-radius: 50%;"></div>');
            }, e.prototype.getHtml = function (t, e, n) {
                return this.getHtml2(t, e, n);
            }, e;
        }(f.a),
        W = function () {
            function t() { }

            return t.createPrintElement = function (t, e) {
                return "text" == t.type ? new D(t, e) : "image" == t.type ? new v(t, e) : "longText" == t.type ? new w(t, e) : "table" == t.type ? new d.a(t, e) : "html" == t.type ? new S(t, e) : "vline" == t.type ? new F(t, e) : "hline" == t.type ? new A(t, e) : "rect" == t.type ? new k(t, e) : "oval" == t.type ? new V(t, e) : void 0;
            }, t;
        }(),
        j = function () {
            function t(t) {
                this.field = t.field, this.fields = t.fields, this.title = t.title, this.text = t.text, this.tid = t.tid, this.data = t.data, this.styler = t.styler, this.formatter = t.formatter, this.type = t.type, this.onRendered = t.onRendered, this.options = t.options;
            }

            return t.prototype.getText = function (t) {
                return t ? this.title || this.text || "" : this.text || this.title || "";
            }, t.prototype.getData = function () {
                return this.data;
            }, t.prototype.createPrintElement = function (t) {
                var e = {};
                return jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend(e, t || {}), W.createPrintElement(this, e);
            }, t.prototype.getPrintElementTypeEntity = function () {
                return new c({
                    title: this.title,
                    type: this.type
                });
            }, t.prototype.getFields = function () {
                return this.fields;
            }, t.prototype.getOptions = function () {
                return this.options || {};
            }, t;
        }(),
        U = n(16),
        K = n(12),
        G = function () {
            var _t14 = function t(e, n) {
                return (_t14 = Object.setPrototypeOf || _instanceof({
                    __proto__: []
                }, Array) && function (t, e) {
                    t.__proto__ = e;
                } || function (t, e) {
                    for (var n in e) {
                        e.hasOwnProperty(n) && (t[n] = e[n]);
                    }
                })(e, n);
            };

            return function (e, n) {
                function i() {
                    this.constructor = e;
                }

                _t14(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i());
            };
        }(),
        q = function (t) {
            function e(e) {
                var n = t.call(this, e) || this;
                (e = e || {}).columns ? (n.columns = [], e.columns.forEach(function (t) {
                    n.columns.push(new K.a(t));
                })) : n.columns = [new K.a({
                    columns: [new u.a({
                        width: 100
                    }), new u.a({
                        width: 100
                    })]
                })];
                return n.lHeight = e.lHeight, n.autoCompletion = e.autoCompletion, n.tableFooterRepeat = e.tableFooterRepeat, n;
            }

            return G(e, t), e.prototype.getPrintElementOptionEntity = function () {
                var e = t.prototype.getPrintElementOptionEntity.call(this);
                return e.columns = [], this.columns.forEach(function (t) {
                    e.columns.push(t.getPrintElementOptionEntity());
                }), e;
            }, e;
        }(g.a),
        X = n(7),
        Y = function () {
            var _t15 = function t(e, n) {
                return (_t15 = Object.setPrototypeOf || _instanceof({
                    __proto__: []
                }, Array) && function (t, e) {
                    t.__proto__ = e;
                } || function (t, e) {
                    for (var n in e) {
                        e.hasOwnProperty(n) && (t[n] = e[n]);
                    }
                })(e, n);
            };

            return function (e, n) {
                function i() {
                    this.constructor = e;
                }

                _t15(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i());
            };
        }(),
        J = function (t) {
            function e(e, n) {
                var i = t.call(this, e) || this;
                return i.options = new q(n), i.options.setDefault(new q(p.a.instance.tableCustom.default).getPrintElementOptionEntity()), i.columns = i.options.columns, i;
            }

            return Y(e, t), e.prototype.updateDesignViewFromOptions = function () {
                if (this.designTarget) {
                    this.css(this.designTarget, this.getData());
                    var t = this.designTarget.find(".hiprint-printElement-table-content"),
                        e = this.getHtml(this.designPaper);
                    t.html(""), t.append(e[0].target.find(".hiprint-printElement-tableTarget")), this.setHiReizeable();
                }
            }, e.prototype.getDesignTarget = function (t) {
                var e = this;
                return this.designTarget = this.getHtml(t)[0].target, this.designPaper = t, this.designTarget.click(function () {
                    o.a.event.trigger(e.getPrintElementSelectEventKey(), {
                        printElement: e
                    });
                }), this.designTarget.find("td").hidroppable({
                    accept: ".rn-draggable-item",
                    onDrop: function onDrop(t, e) { },
                    onDragEnter: function onDragEnter(t, e) {
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()(e).removeClass("rn-draggable-item");
                    },
                    onDragLeave: function onDragLeave(t, e) {
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()(e).addClass("rn-draggable-item");
                    }
                }), this.designTarget;
            }, e.prototype.getConfigOptions = function () {
                return p.a.instance.tableCustom;
            }, e.prototype.createTarget = function (t, e, n) {
                var i = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div class="hiprint-printElement hiprint-printElement-table" style="position: absolute;"><div class="hiprint-printElement-table-handle"></div><div class="hiprint-printElement-table-content" style="height:100%;width:100%"></span></div>');
                return i.find(".hiprint-printElement-table-content").append(this.getTableHtml(e, n)), i;
            }, e.prototype.getTableHtml = function (t, e) {
                var n = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<table class="hiprint-printElement-tableTarget" style="border-collapse: collapse;width:100%;"></table>');
                return n.append(X.a.createTableHead(this.columns, this.options.getWidth())), n.append(X.a.createTableRow(this.columns, t, this.options, this.printElementType)), this.printElementType.footerFormatter && ("no" == this.options.tableFooterRepeat || ("last" == this.options.tableFooterRepeat ? n.find("tbody").append(X.a.createTableFooter(this.printElementType.columns, t, this.options, this.printElementType, e, t).html()) : n.append(X.a.createTableFooter(this.printElementType.columns, t, this.options, this.printElementType, e, [])))), n;
            }, e.prototype.getHtml = function (t, e) {
                this.setCurrenttemplateData(e), this.createTempContainer();
                var n = this.getPaperHtmlResult(t, e);
                return this.removeTempContainer(), n;
            }, e.prototype.getPaperHtmlResult = function (t, e) {
                var n = [],
                    i = this.getData(e),
                    o = this.getTableHtml(i, e),
                    r = this.createTarget(this.printElementType.title, [], e);
                e ? this.updateTargetWidth(r) : this.updateTargetSize(r), this.css(r, i), this.css(o, i), this.getTempContainer().html(""), this.getTempContainer().append(r);

                for (var a, p = this.getBeginPrintTopInPaperByReferenceElement(t), s = 0, l = !1; !l;) {
                    var u = 0,
                        d = t.getPaperFooter(s);
                    0 == s && p > d && (p = p - d + t.paperHeader, n.push(new P.a({
                        target: void 0,
                        printLine: void 0
                    })), s++ , u = t.getContentHeight(s) - (p - t.paperHeader), d = t.getPaperFooter(s));
                    var c = n.length > 0 ? n[n.length - 1].target : void 0,
                        h = this.getRowsInSpecificHeight(u > 0 ? u : 0 == s ? d - p : t.getContentHeight(s), r, o, s, c, e);
                    l = h.isEnd;
                    var f = void 0;
                    h.target && (h.target.css("left", this.options.displayLeft()), h.target[0].height = ""), 0 == s || u > 0 ? (h.target && (a = p, h.target.css("top", p + "pt")), f = l && null != this.options.lHeight ? p + (h.height > this.options.lHeight ? h.height : this.options.lHeight) : p + h.height) : (h.target && (a = t.paperHeader, h.target.css("top", t.paperHeader + "pt")), f = t.paperHeader + h.height), n.push(new P.a({
                        target: h.target,
                        printLine: f,
                        referenceElement: new E.a({
                            top: this.options.getTop(),
                            left: this.options.getLeft(),
                            height: this.options.getHeight(),
                            width: this.options.getWidth(),
                            beginPrintPaperIndex: t.index,
                            bottomInLastPaper: f,
                            printTopInPaper: a
                        })
                    })), s++;
                }

                return n;
            }, e.prototype.getRowsInSpecificHeight = function (t, e, n, i, r, a) {
                var p = void 0,
                    s = n.find("tbody"),
                    l = o.a.pt.toPx(t);
                e.find("tbody").html("");

                for (var u = e.outerHeight(), d = []; ;) {
                    if (u <= l) {
                        if (0 == s.find("tr").length) {
                            a && this.options.autoCompletion && (this.autoCompletion(l, e), u = e.outerHeight()), p = {
                                target: e.clone(),
                                length: e.find("tbody tr").length,
                                height: o.a.px.toPt(u),
                                isEnd: !0
                            }, 0 == e.find("tbody tr").length && r && (p = {
                                target: void 0,
                                length: 0,
                                height: 0,
                                isEnd: !0
                            });
                        } else {
                            var c = s.find("tr:lt(1)");
                            e.find("tbody").append(c), u = e.outerHeight();
                            var h = c.data("rowData");
                            d.push(h), u > l && (s.prepend(c), d.pop(), u = e.outerHeight(), p = {
                                target: e.clone(),
                                length: e.find("tbody tr").length,
                                height: o.a.px.toPt(u),
                                isEnd: !1
                            });
                        }
                    } else p = {
                        target: void 0,
                        length: 0,
                        height: 0,
                        isEnd: !1
                    };

                    if (p) {
                        this.printElementType.footerFormatter && e.find("tfoot") && e.find("tfoot").html(X.a.createTableFooter(this.printElementType.columns, this.getData(a), this.options, this.printElementType, a, d).html());
                        break;
                    }
                }

                return p;
            }, e.prototype.getData = function (t) {
                if (!t) return [{}];
                var e = t[this.getField()];
                return e ? JSON.parse(JSON.stringify(e)) : [];
            }, e.prototype.autoCompletion = function (t, e) {
                for (var n, i = this.getEmptyRowTarget(), o = e.outerHeight(); t > o;) {
                    n = i.clone(), e.find("tbody").append(n), o = e.outerHeight();
                }

                n && n.remove();
            }, e.prototype.getEmptyRowTarget = function () {
                return X.a.createEmptyRowTarget(this.columns);
            }, e.prototype.onResize = function (e, n, i, o, r) {
                t.prototype.updateSizeAndPositionOptions.call(this, r, o, i, n), X.a.resizeTableCellWidth(this.designTarget, this.columns, this.options.getWidth());
            }, e.prototype.getReizeableShowPoints = function () {
                return ["s", "e"];
            }, e.prototype.design = function (t, e) {
                var n = this;
                this.designTarget.hidraggable({
                    handle: this.designTarget.find(".hiprint-printElement-table-handle"),
                    axis: n.options.axis && t && t.axisEnabled ? n.options.axis : void 0,
                    onDrag: function onDrag(t, i, o) {
                        n.updateSizeAndPositionOptions(i, o), n.createLineOfPosition(e);
                    },
                    moveUnit: "pt",
                    minMove: p.a.instance.movingDistance,
                    onBeforeDrag: function onBeforeDrag(t) {
                        s.a.instance.draging = !0, n.createLineOfPosition(e);
                    },
                    onStopDrag: function onStopDrag(t) {
                        s.a.instance.draging = !1, n.removeLineOfPosition();
                    }
                }), this.setHiReizeable(), this.designTarget.hireizeable({
                    showPoints: n.getReizeableShowPoints(),
                    noContainer: !0,
                    onBeforeResize: function onBeforeResize() {
                        s.a.instance.draging = !0;
                    },
                    onResize: function onResize(t, i, o, r, a) {
                        n.onResize(t, i, o, r, a), n.hitable.updateColumnGrips(), n.createLineOfPosition(e);
                    },
                    onStopResize: function onStopResize() {
                        s.a.instance.draging = !1, n.removeLineOfPosition();
                    }
                }), this.bingKeyboardMoveEvent(this.designTarget, e);
            }, e.prototype.setHiReizeable = function () {
                var t = this;
                this.hitable = new U.a({
                    table: this.designTarget.find("table"),
                    rows: this.columns,
                    resizeRow: !1,
                    resizeColumn: !0,
                    trs: jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.designTarget).find("tbody tr"),
                    handle: this.designTarget.find("table thead"),
                    columnDisplayEditable: !0,
                    columnDisplayIndexEditable: !0,
                    columnResizable: !0,
                    columnAlignEditable: !0,
                    isEnableEdit: !0,
                    isEnableEditText: !0,
                    isEnableEditField: !0,
                    isEnableContextMenu: !0,
                    isEnableInsertRow: !0,
                    isEnableDeleteRow: !0,
                    isEnableInsertColumn: !0,
                    isEnableDeleteColumn: !0,
                    isEnableMergeCell: !0
                }), o.a.event.on("updateTable" + this.hitable.id, function () {
                    t.updateDesignViewFromOptions();
                });
            }, e;
        }(f.a),
        Q = function () {
            var _t16 = function t(e, n) {
                return (_t16 = Object.setPrototypeOf || _instanceof({
                    __proto__: []
                }, Array) && function (t, e) {
                    t.__proto__ = e;
                } || function (t, e) {
                    for (var n in e) {
                        e.hasOwnProperty(n) && (t[n] = e[n]);
                    }
                })(e, n);
            };

            return function (e, n) {
                function i() {
                    this.constructor = e;
                }

                _t16(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i());
            };
        }(),
        Z = function (t) {
            function e(e) {
                return t.call(this, e) || this;
            }

            return Q(e, t), e.prototype.createPrintElement = function (t) {
                return new J(this, t);
            }, e;
        }(h),
        tt = function () {
            var _t17 = function t(e, n) {
                return (_t17 = Object.setPrototypeOf || _instanceof({
                    __proto__: []
                }, Array) && function (t, e) {
                    t.__proto__ = e;
                } || function (t, e) {
                    for (var n in e) {
                        e.hasOwnProperty(n) && (t[n] = e[n]);
                    }
                })(e, n);
            };

            return function (e, n) {
                function i() {
                    this.constructor = e;
                }

                _t17(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i());
            };
        }(),
        et = function (t) {
            function e(e) {
                return t.call(this, e) || this;
            }

            return tt(e, t), e.prototype.createPrintElement = function (t) {
                var e = {};
                return jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend(e, t || {}), W.createPrintElement(this, e);
            }, e.prototype.getPrintElementTypeEntity = function () {
                return new c({
                    title: this.title,
                    type: this.type
                });
            }, e;
        }(j),
        nt = function () {
            function t() { }

            return t.createPrintElementType = function (t) {
                return t.type = t.type || "text", "text" == t.type ? new et(t) : "table" == t.type ? new h(t) : "tableCustom" == t.type ? new Z(t) : new j(t);
            }, t;
        }(),
        it = function () {
            function t() { }

            return t.getElementTypeGroups = function (e) {
                var n = t.formatterModule(e);
                return a.instance[n] || [];
            }, t.getElementType = function (t, e) {
                if (t) return a.instance.getElementType(t);
                nt.createPrintElementType({
                    type: e
                });
            }, t.build = function (e, n) {
                var i = t.formatterModule(n),
                    o = new l().createPrintElementTypeHtml(e, this.getElementTypeGroups(i));
                this.enableDrag(o);
            }, t.buildByHtml = function (t) {
                this.enableDrag(t);
            }, t.enableDrag = function (e) {
                e.hidraggable({
                    revert: !0,
                    proxy: function proxy(t) {
                        var e = s.a.instance.getDragingPrintElement(),
                            n = e.printElement.getProxyTarget(e.printElement.printElementType.getOptions());
                        return n.appendTo("body"), n.css("z-index", "9999"), n;
                    },
                    moveUnit: "pt",
                    minMove: 4,
                    onBeforeDrag: function onBeforeDrag(e) {
                        s.a.instance.draging = !0;
                        var n = t.getElementType(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.data.target).attr("tid"), jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.data.target).attr("ptype"));
                        return s.a.instance.setDragingPrintElement(n.createPrintElement()), !0;
                    },
                    onDrag: function onDrag(t, e, n) {
                        s.a.instance.getDragingPrintElement().updatePosition(e, n);
                    },
                    onStopDrag: function onStopDrag(t) {
                        s.a.instance.draging = !1;
                    }
                });
            }, t.formatterModule = function (t) {
                return t || "_default";
            }, t;
        }(),
        ot = function () {
            return function (t, e) {
                var n = this;
                this.name = t, this.printElementTypes = [], e.forEach(function (t) {
                    n.printElementTypes.push(nt.createPrintElementType(t));
                });
            };
        }(),
        rt = function () {
            return function (t) {
                if (this.index = t.index, this.paperType = t.paperType, this.paperType) {
                    var e = s.a.instance[this.paperType];
                    t.height ? (this.height = t.height, this.width = t.width) : (this.height = e.height, this.width = e.width);
                } else this.height = t.height, this.width = t.width;

                this.paperHeader = t.paperHeader || 0, this.paperFooter = t.paperFooter || o.a.mm.toPt(this.height), this.printElements = t.printElements || [], this.paperNumberLeft = t.paperNumberLeft, this.paperNumberTop = t.paperNumberTop, this.paperNumberDisabled = t.paperNumberDisabled, this.paperNumberFormat = t.paperNumberFormat, this.panelPaperRule = t.panelPaperRule, this.rotate = t.rotate || void 0, this.firstPaperFooter = t.firstPaperFooter, this.evenPaperFooter = t.evenPaperFooter, this.oddPaperFooter = t.oddPaperFooter, this.lastPaperFooter = t.lastPaperFooter, this.topOffset = t.topOffset, this.fontFamily = t.fontFamily, this.leftOffset = t.leftOffset, this.orient = t.orient;
            };
        }(),
        at = function () {
            function t(t, e, n, i) {
                this.startX = this.minX = t, this.startY = this.minY = e, this.maxX = t, this.maxY = e, this.lastLeft = n, this.lastTop = i;
            }

            return t.prototype.updateRect = function (t, e) {
                this.minX = this.startX < t ? this.startX : t, this.minY = this.startY < e ? this.startY : e, this.maxX = this.startX < t ? t : this.startX, this.maxY = this.startY < e ? e : this.startY;
            }, t.prototype.updatePositionByMultipleSelect = function (t, e) {
                null != t && (this.lastLeft = this.lastLeft + t), null != e && (this.lastTop = this.lastTop + e), this.target.css({
                    left: this.lastLeft + "pt",
                    top: this.lastTop + "pt"
                });
            }, t;
        }(),
        pt = function () {
            function t(t, e) {
                this.templateId = e, this.index = t.index, this.width = t.width, this.height = t.height, this.paperType = t.paperType, this.paperHeader = t.paperHeader, this.paperFooter = t.paperFooter, this.initPrintElements(t.printElements), this.paperNumberLeft = t.paperNumberLeft, this.paperNumberTop = t.paperNumberTop, this.paperNumberDisabled = t.paperNumberDisabled, this.paperNumberFormat = t.paperNumberFormat, this.panelPaperRule = t.panelPaperRule, this.firstPaperFooter = t.firstPaperFooter, this.evenPaperFooter = t.evenPaperFooter, this.oddPaperFooter = t.oddPaperFooter, this.lastPaperFooter = t.lastPaperFooter, this.topOffset = t.topOffset, this.leftOffset = t.leftOffset, this.fontFamily = t.fontFamily, this.orient = t.orient, this.target = this.createTarget(), this.rotate = t.rotate;
            }

            return t.prototype.design = function (t) {
                var e = this;
                this.orderPrintElements(), this.designPaper = this.createNewPage(0), this.target.html(""), this.target.append(this.designPaper.getTarget()), this.droppablePaper(this.designPaper), this.designPaper.design(t), this.designPaper.subscribePaperBaseInfoChanged(function (t) {
                    e.paperHeader = t.paperHeader, e.paperFooter = t.paperFooter, e.paperNumberLeft = t.paperNumberLeft, e.paperNumberTop = t.paperNumberTop, e.paperNumberDisabled = t.paperNumberDisabled, e.paperNumberFormat = t.paperNumberFormat;
                }), this.printElements.forEach(function (n) {
                    e.appendDesignPrintElement(e.designPaper, n), n.design(t, e.designPaper);
                }), this.target.bind("click.hiprint", function (t) {
                    o.a.event.trigger("BuildCustomOptionSettingEventKey_" + e.templateId, {
                        options: {
                            panelPaperRule: e.panelPaperRule,
                            firstPaperFooter: e.firstPaperFooter,
                            evenPaperFooter: e.evenPaperFooter,
                            oddPaperFooter: e.oddPaperFooter,
                            lastPaperFooter: e.lastPaperFooter,
                            leftOffset: e.leftOffset,
                            topOffset: e.topOffset,
                            fontFamily: e.fontFamily,
                            orient: e.orient,
                            paperNumberFormat: e.paperNumberFormat
                        },
                        callback: function callback(t) {
                            e.panelPaperRule = t.panelPaperRule, e.firstPaperFooter = t.firstPaperFooter, e.evenPaperFooter = t.evenPaperFooter, e.oddPaperFooter = t.oddPaperFooter, e.lastPaperFooter = t.lastPaperFooter, e.leftOffset = t.leftOffset, e.topOffset = t.topOffset, e.fontFamily = t.fontFamily, e.orient = t.orient, e.paperNumberFormat = t.paperNumberFormat, e.designPaper.setOffset(e.leftOffset, e.topOffset), e.css(e.target);
                        }
                    });
                }), this.bindBatchMoveElement();
            }, t.prototype.css = function (t) {
                this.fontFamily && t.css("fontFamily", this.fontFamily);
            }, t.prototype.getHtml = function (t, e, n, i, o) {
                var r = this;
                this.orderPrintElements();
                var a,
                    p = n || [],
                    s = i || this,
                    l = void 0;

                if (i ? (l = p[p.length - 1], a = l.getPanelTarget(), l.updateReferenceElement(new E.a({
                    top: this.paperHeader,
                    left: 0,
                    height: 0,
                    width: 0,
                    bottomInLastPaper: l.referenceElement.bottomInLastPaper,
                    beginPrintPaperIndex: p.length - 1,
                    printTopInPaper: l.referenceElement.bottomInLastPaper,
                    endPrintPaperIndex: p.length - 1
                }))) : (a = s.createTarget(), l = s.createNewPage(p.length), p.push(l), a.append(l.getTarget())), this.printElements.filter(function (t) {
                    return !t.isFixed() && !t.isHeaderOrFooter();
                }).forEach(function (e) {
                    var n = [],
                        i = p[p.length - 1];
                    i.referenceElement.isPositionLeftOrRight(e.options.getTop()) ? (l = p[i.referenceElement.beginPrintPaperIndex], n = e.getHtml(l, t)) : (l = p[i.referenceElement.endPrintPaperIndex], n = e.getHtml(l, t)), n.forEach(function (t, i) {
                        t.referenceElement && (t.referenceElement.endPrintPaperIndex = t.referenceElement.beginPrintPaperIndex + n.length - 1), i > 0 && (l.index < p.length - 1 ? l = p[l.index + 1] : (l = s.createNewPage(p.length, l.referenceElement), p.push(l)), a.append(l.getTarget())), t.target && (l.append(t.target), l.updatePrintLine(t.printLine), e.onRendered(l, t.target)), i == n.length - 1 && t.referenceElement && l.updateReferenceElement(t.referenceElement);
                    });
                }), o && o.templates.forEach(function (t, e) {
                    var i = t.data || {},
                        o = t.options || {};
                    t.template.printPanels.forEach(function (t) {
                        t.getHtml(i, o, n, r);
                    });
                }), !i) {
                    if (this.lastPaperFooter) p[p.length - 1].printLine > this.lastPaperFooter && (l = s.createNewPage(p.length, l.referenceElement), p.push(l), a.append(l.getTarget()));
                    this.panelPaperRule && ("odd" == this.panelPaperRule && p.length % 2 == 0 && (l = s.createNewPage(p.length, l.referenceElement), p.push(l), a.append(l.getTarget())), "even" == this.panelPaperRule && p.length % 2 == 1 && (l = s.createNewPage(p.length, l.referenceElement), p.push(l), a.append(l.getTarget()))), p.forEach(function (n) {
                        n.updatePaperNumber(n.index + 1, p.length, e.paperNumberToggleInEven), r.fillPaperHeaderAndFooter(n, t, p.length), e && (null != e.leftOffset && n.setLeftOffset(e.leftOffset), null != e.topOffset && n.setTopOffset(e.topOffset));
                    }), a.prepend(this.getPrintStyle());
                }

                return a;
            }, t.prototype.resize = function (t, e, n, i) {
                this.width = e, this.height = n, this.paperType = t, this.rotate = i, this.designPaper.resize(e, n);
            }, t.prototype.rotatePaper = function () {
                null == this.rotate && (this.rotate = !1), this.rotate = !this.rotate, this.resize(this.paperType, this.height, this.width, this.rotate);
            }, t.prototype.getTarget = function () {
                return this.target;
            }, t.prototype.enable = function () {
                this.target.removeClass("hipanel-disable");
            }, t.prototype.disable = function () {
                this.target.addClass("hipanel-disable");
            }, t.prototype.getPanelEntity = function (t) {
                var e = [];
                return this.printElements.forEach(function (n) {
                    e.push(n.getPrintElementEntity(t));
                }), new rt({
                    index: this.index,
                    width: this.width,
                    height: this.height,
                    paperType: this.paperType,
                    paperHeader: this.paperHeader,
                    paperFooter: this.paperFooter,
                    paperNumberDisabled: !!this.paperNumberDisabled || void 0,
                    paperNumberFormat: this.paperNumberFormat ? this.paperNumberFormat : void 0,
                    panelPaperRule: this.panelPaperRule ? this.panelPaperRule : void 0,
                    paperNumberLeft: this.paperNumberLeft,
                    paperNumberTop: this.paperNumberTop,
                    printElements: e,
                    rotate: this.rotate,
                    firstPaperFooter: this.firstPaperFooter,
                    evenPaperFooter: this.evenPaperFooter,
                    oddPaperFooter: this.oddPaperFooter,
                    lastPaperFooter: this.lastPaperFooter,
                    topOffset: this.topOffset,
                    fontFamily: this.fontFamily,
                    orient: this.orient,
                    leftOffset: this.leftOffset
                });
            }, t.prototype.createTarget = function () {
                var t = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div class="hiprint-printPanel panel-index-' + this.index + '"></div>');
                return this.css(t), t;
            }, t.prototype.droppablePaper = function (t) {
                var e = this;
                t.getTarget().hidroppable({
                    accept: ".ep-draggable-item",
                    onDrop: function onDrop(n, i) {
                        var r = s.a.instance.getDragingPrintElement(),
                            a = r.printElement;
                        a.updateSizeAndPositionOptions(e.mathroundToporleft(r.left - o.a.px.toPt(e.target.offset().left)), e.mathroundToporleft(r.top - o.a.px.toPt(e.target.offset().top))), a.setTemplateId(e.templateId), a.setPanel(e), e.appendDesignPrintElement(e.designPaper, a, !0), e.printElements.push(a), a.design(void 0, t);
                    }
                });
            }, t.prototype.initPrintElements = function (t) {
                var e = this;
                this.printElements = [], t && t.forEach(function (n) {
                    var i;

                    if (i = n.printElementType ? nt.createPrintElementType(n.printElementType) : a.instance.getElementType(n.tid)) {
                        var o = i.createPrintElement(n.options);
                        o.setTemplateId(e.templateId), o.setPanel(e), e.printElements.push(o);
                    } else console.log("miss " + JSON.stringify(t));
                });
            }, t.prototype.mathroundToporleft = function (t) {
                var e = p.a.instance.movingDistance;
                return Math.round(t / e) * e;
            }, t.prototype.appendDesignPrintElement = function (t, e, n) {
                e.setCurrenttemplateData(void 0);
                var i = e.getDesignTarget(t);
                i.addClass("design"), n && e.initSizeByHtml(i), t.append(i);
            }, t.prototype.createNewPage = function (t, e) {
                var n = new T(this.templateId, this.width, this.height, this.paperHeader, this.paperFooter, this.paperNumberLeft, this.paperNumberTop, this.paperNumberDisabled, this.paperNumberFormat, t, e);
                return n.setFooter(this.firstPaperFooter, this.evenPaperFooter, this.oddPaperFooter, this.lastPaperFooter), n.setOffset(this.leftOffset, this.topOffset), n;
            }, t.prototype.orderPrintElements = function () {
                this.printElements = o.a.orderBy(this.printElements, function (t) {
                    return t.options.getLeft();
                }), this.printElements = o.a.orderBy(this.printElements, function (t) {
                    return t.options.getTop();
                });
            }, t.prototype.fillPaperHeaderAndFooter = function (t, e, n) {
                this.printElements.filter(function (t) {
                    return t.isFixed() || t.isHeaderOrFooter();
                }).forEach(function (i) {
                    if (i.isFixed(), i.showInPage(t.index, n)) {
                        var o = i.getHtml(t, e);
                        o.length && t.append(o[0].target);
                    }
                });
            }, t.prototype.clear = function () {
                this.printElements.forEach(function (t) {
                    t.designTarget && t.designTarget.length && t.designTarget.remove();
                }), this.printElements = [];
            }, t.prototype.insertPrintElementToPanel = function (t) {
                var e = this.getPrintElementTypeByEntity(t);

                if (e) {
                    var n = e.createPrintElement(t.options);
                    n.setTemplateId(this.templateId), n.setPanel(this), this.printElements.push(n);
                }
            }, t.prototype.addPrintText = function (t) {
                t.printElementType = t.printElementType || {}, t.printElementType.type = "text", this.insertPrintElementToPanel(t);
            }, t.prototype.addPrintHtml = function (t) {
                t.printElementType = t.printElementType || {}, t.printElementType.type = "html", this.insertPrintElementToPanel(t);
            }, t.prototype.addPrintTable = function (t) {
                if (t.printElementType = t.printElementType || {}, t.printElementType.type = "table", t.options && t.options.columns) {
                    var e = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, t.options.columns);
                    t.printElementType.columns = e.columns, e.columns = void 0;
                }

                this.insertPrintElementToPanel(t);
            }, t.prototype.addPrintImage = function (t) {
                t.printElementType = t.printElementType || {}, t.printElementType.type = "image", this.insertPrintElementToPanel(t);
            }, t.prototype.addPrintLongText = function (t) {
                t.printElementType = t.printElementType || {}, t.printElementType.type = "longText", this.insertPrintElementToPanel(t);
            }, t.prototype.addPrintVline = function (t) {
                t.printElementType = t.printElementType || {}, t.printElementType.type = "vline", this.insertPrintElementToPanel(t);
            }, t.prototype.addPrintHline = function (t) {
                t.printElementType = t.printElementType || {}, t.printElementType.type = "hline", this.insertPrintElementToPanel(t);
            }, t.prototype.addPrintRect = function (t) {
                t.printElementType = t.printElementType || {}, t.printElementType.type = "rect", this.insertPrintElementToPanel(t);
            }, t.prototype.addPrintOval = function (t) {
                t.printElementType = t.printElementType || {}, t.printElementType.type = "oval", this.insertPrintElementToPanel(t);
            }, t.prototype.getPrintElementTypeByEntity = function (t) {
                var e;
                return (e = t.tid ? a.instance.getElementType(t.tid) : nt.createPrintElementType(t.printElementType)) || console.log("miss " + JSON.stringify(t)), e;
            }, t.prototype.getPrintStyle = function () {
                return " <style printStyle>\n        @page\n        {\n             border:0;\n             padding:0cm;\n             margin:0cm;\n             " + this.getPrintSizeStyle() + "\n        }\n        </style>\n        ";
            }, t.prototype.getPrintSizeStyle = function () {
                return this.paperType ? "size:" + this.paperType + " " + (this.height > this.width ? "portrait" : "landscape") + ";" : "size:" + this.width + "mm " + this.height + "mm " + (this.orient ? 1 == this.orient ? "portrait" : "landscape" : "") + ";";
            }, t.prototype.deletePrintElement = function (t) {
                var e = this;
                this.printElements.filter(function (n, i) {
                    n.id == t.id && (t.delete(), e.printElements.splice(i, 1));
                });
            }, t.prototype.getElementByTid = function (t) {
                return this.printElements.filter(function (e) {
                    return e.printElementType.tid === t;
                }).map(function (t, e) {
                    return t;
                });
            }, t.prototype.getElementByName = function (t) {
                return this.printElements.filter(function (e) {
                    return e.options.name === t;
                }).map(function (t, e) {
                    return t;
                });
            }, t.prototype.getFieldsInPanel = function () {
                var t = [];
                return this.printElements.forEach(function (e) {
                    e.options && e.options.field ? t.push(e.options.field) : e.printElementType.field && t.push(e.printElementType.field);
                }), t;
            }, t.prototype.bindBatchMoveElement = function () {
                var t = this;
                this.designPaper.getTarget().on("mousemove", function (e) {
                    s.a.instance.draging || 1 === e.buttons && (t.mouseRect.updateRect(e.pageX, e.pageY), t.updateRectPanel(t.mouseRect));
                }).on("mousedown", function (e) {
                    s.a.instance.draging || (t.mouseRect && t.mouseRect.target && t.mouseRect.target.remove(), 1 === e.buttons && (t.mouseRect = new at(e.pageX, e.pageY, s.a.instance.dragLengthCNum(e.pageX - t.designPaper.getTarget().offset().left, p.a.instance.movingDistance), s.a.instance.dragLengthCNum(e.pageY - t.designPaper.getTarget().offset().top, p.a.instance.movingDistance))));
                });
            }, t.prototype.getElementInRect = function (t) {
                var e = [];
                return this.printElements.forEach(function (n) {
                    n.inRect(t) && e.push(n);
                }), e;
            }, t.prototype.updateRectPanel = function (t) {
                var e = this,
                    n = this.designPaper.getTarget();
                this.mouseRect.target || (this.mouseRect.target = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div tabindex="1" style="z-index:2;position: absolute;opacity:0.2;border: 1px dashed #000;background-color:#31676f;"><span></span></div>'), n.find(".hiprint-printPaper-content").append(this.mouseRect.target), this.mouseRect.target.focus(), this.bingKeyboardMoveEvent(this.mouseRect.target), this.mouseRect.target.hidraggable({
                    onDrag: function onDrag(t, n, i) {
                        e.mouseRect.lastLeft = e.mouseRect.lastLeft ? e.mouseRect.lastLeft : n, e.mouseRect.lastTop = e.mouseRect.lastTop ? e.mouseRect.lastTop : i, (e.mouseRect.mouseRectSelectedElement || []).forEach(function (t) {
                            t.updatePositionByMultipleSelect(n - e.mouseRect.lastLeft, i - e.mouseRect.lastTop);
                        }), e.mouseRect.lastLeft = n, e.mouseRect.lastTop = i;
                    },
                    moveUnit: "pt",
                    minMove: p.a.instance.movingDistance,
                    onBeforeDrag: function onBeforeDrag(t) {
                        e.mouseRect.target.focus(), s.a.instance.draging = !0, e.mouseRect.mouseRectSelectedElement || (e.mouseRect.mouseRectSelectedElement = e.getElementInRect(e.mouseRect));
                    },
                    onStopDrag: function onStopDrag(t) {
                        s.a.instance.draging = !1;
                    }
                })), this.mouseRect.target.css({
                    height: t.maxY - t.minY + "px",
                    width: t.maxX - t.minX + "px",
                    left: t.lastLeft + "pt",
                    top: t.lastTop + "pt"
                });
            }, t.prototype.bingKeyboardMoveEvent = function (t) {
                var e = this;
                t.attr("tabindex", "1"), t.keydown(function (t) {
                    e.mouseRect.mouseRectSelectedElement || (e.mouseRect.mouseRectSelectedElement = e.getElementInRect(e.mouseRect));
                    var n = e.mouseRect.mouseRectSelectedElement || [];

                    switch (t.keyCode) {
                        case 37:
                            e.mouseRect.updatePositionByMultipleSelect(0 - p.a.instance.movingDistance, 0), n.forEach(function (t) {
                                t.updatePositionByMultipleSelect(0 - p.a.instance.movingDistance, 0);
                            }), t.preventDefault();
                            break;

                        case 38:
                            e.mouseRect.updatePositionByMultipleSelect(0, 0 - p.a.instance.movingDistance), n.forEach(function (t) {
                                t.updatePositionByMultipleSelect(0, 0 - p.a.instance.movingDistance);
                            }), t.preventDefault();
                            break;

                        case 39:
                            e.mouseRect.updatePositionByMultipleSelect(p.a.instance.movingDistance, 0), n.forEach(function (t) {
                                t.updatePositionByMultipleSelect(p.a.instance.movingDistance, 0);
                            }), t.preventDefault();
                            break;

                        case 40:
                            e.mouseRect.updatePositionByMultipleSelect(0, p.a.instance.movingDistance), n.forEach(function (t) {
                                t.updatePositionByMultipleSelect(0, p.a.instance.movingDistance);
                            }), t.preventDefault();
                    }
                });
            }, t;
        }(),
        st = function () {
            return function (t) {
                if (t) if (t.panels) {
                    this.panels = [];

                    for (var e = 0; e < t.panels.length; e++) {
                        this.panels.push(new rt(t.panels[e]));
                    }
                } else this.panels = [];
            };
        }(),
        lt = n(9),
        ut = function () {
            function t(t, e) {
                var n = this;
                this.printElementOptionSettingPanel = {}, this.printTemplate = t, this.settingContainer = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e), o.a.event.on(t.getPrintElementSelectEventKey(), function (t) {
                    n.buildSetting(t);
                }), o.a.event.on(t.getBuildCustomOptionSettingEventKey(), function (t) {
                    n.buildSettingByCustomOptions(t);
                });
            }

            return t.prototype.init = function () { }, t.prototype.buildSetting = function (t) {
                var e = this,
                    n = this,
                    i = t.printElement,
                    o = t.customOptionsInput;
                this.lastPrintElement && this.lastPrintElement.getPrintElementOptionItems().forEach(function (t) {
                    t.destroy();
                });
                this.lastPrintElement = void 0, this.settingContainer.html("");
                var r = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div class="hiprint-option-items"></div>');
                i.getPrintElementOptionItems().forEach(function (t) {
                    t.submit = function (t) {
                        i.submitOption();
                    };

                    var n = t.createTarget(i, i.options, i.printElementType);
                    e.printElementOptionSettingPanel[t.name] = n, r.append(n), t.setValue(i.options[t.name], i.options, i.printElementType);
                });
                var a = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<button class="hiprint-option-item-settingBtn hiprint-option-item-submitBtn"\n        type="button">确定</button>'),
                    p = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<button  class="hiprint-option-item-settingBtn hiprint-option-item-deleteBtn"\n        type="button">删除</button>');
                r.append(a), r.append(p), a.bind("click.submitOption", function () {
                    i.submitOption();
                }), p.bind("click.deleteBtn", function () {
                    n.printTemplate.deletePrintElement(i);
                }), r.find(".auto-submit").change(function (t) {
                    i.submitOption();
                }), r.find(".auto-submit:input").bind("keydown.submitOption", function (t) {
                    13 == t.keyCode && i.submitOption();
                }), this.settingContainer.append(r), o && o.forEach(function (t) {
                    var n = t.callback;
                    t.callback = function (t) {
                        n && (n(t), i.submitOption());
                    }, e.buildSettingByCustomOptions(t, e.settingContainer);
                }), this.lastPrintElement = i;
            }, t.prototype.buildSettingByCustomOptions = function (t, e) {
                var n = this;
                this.lastPrintElement && this.lastPrintElement.getPrintElementOptionItems().forEach(function (t) {
                    t.destroy();
                });
                this.lastPrintElement = void 0;
                var i = e || this.settingContainer;
                e || this.settingContainer.html("");
                var o = [];
                t.optionItems ? o = t.optionItems : Object.keys(t.options).forEach(function (t) {
                    var e = lt.a.getItem(t);
                    e && o.push(e);
                });
                var r = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div class="hiprint-option-items"></div>');
                t.title && r.append('<div class="hiprint-option-item hiprint-option-item-row">\n            <div class="hiprint-option-item-label hiprint-option-title">\n              ' + t.title + "\n            </div>\n        </div>"), o.forEach(function (e) {
                    e.submit = function (e) {
                        t.callback(n.getValueByOptionItems(o));
                    }, r.append(e.createTarget(void 0, t.options, void 0)), e.setValue(t.options[e.name], t.options, void 0);
                });
                var a = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<button class="hiprint-option-item-settingBtn hiprint-option-item-submitBtn"\n        type="button">确定</button>');
                r.append(a), a.bind("click.submitOption", function () {
                    t.callback(n.getValueByOptionItems(o));
                }), r.find(".auto-submit").change(function (e) {
                    t.callback(n.getValueByOptionItems(o));
                }), r.find(".auto-submit:input").bind("keydown.submitOption", function (e) {
                    13 == e.keyCode && t.callback(n.getValueByOptionItems(o));
                }), i.append(r);
            }, t.prototype.getValueByOptionItems = function (t) {
                var e = {};
                return t.forEach(function (t) {
                    e[t.name] = t.getValue();
                }), e;
            }, t;
        }(),
        dt = function () {
            function t(t, e) {
                this.paginationContainer = t, this.jqPaginationContainer = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.paginationContainer), this.template = e;
            }

            return t.prototype.buildPagination = function (t) {
                var e = this.template.getPaneltotal(),
                    n = this;
                this.jqPaginationContainer.html("");

                for (var i = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<ul class="hiprint-pagination"></ul>'), o = function o() {
                    var t = r,
                        e = jquery__WEBPACK_IMPORTED_MODULE_0___default()("<li><span>" + (t + 1) + '</span><a href="javascript:void(0);">x</a></li>');
                    e.find("span").click(function () {
                        n.template.selectPanel(t), e.removeClass("selected"), jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent("li").addClass("selected");
                    }), e.find("a").click(function () {
                        n.template.deletePanel(t), n.buildPagination();
                    }), i.append(e);
                }, r = 0; r < e; r++) {
                    o();
                }

                var a = jquery__WEBPACK_IMPORTED_MODULE_0___default()("<li><span>+</span></li>");
                i.append(a), this.jqPaginationContainer.append(i), a.click(function () {
                    n.template.addPrintPanel(void 0, !0), n.buildPagination();
                });
            }, t;
        }(),
        ct = function () {
            function t(t) {
                var e = this;
                this.tempimageBase64 = {}, this.id = s.a.instance.guid(), s.a.instance.setPrintTemplateById(this.id, this);
                var n = t || {};
                this.printPanels = [];
                var i = new st(n.template || []);
                n.template && i.panels.forEach(function (t) {
                    e.printPanels.push(new pt(t, e.id));
                }), n.fields && (this.fields = n.fields), n.settingContainer && new ut(this, n.settingContainer), n.paginationContainer && (this.printPaginationCreator = new dt(n.paginationContainer, this), this.printPaginationCreator.buildPagination()), this.initAutoSave();
            }

            return t.prototype.design = function (t, e) {
                var n = this;

                if (e || (e = {}), 0 == this.printPanels.length) {
                    var i = this.createDefaultPanel();
                    this.printPanels.push(i);
                }

                if (!t) throw new Error("options.container can not be empty");
                this.createContainer(t), this.printPanels.forEach(function (t, i) {
                    n.container.append(t.getTarget()), i > 0 && t.disable(), t.design(e);
                }), this.selectPanel(0);
            }, t.prototype.getSimpleHtml = function (t, e) {
                var n = this;
                e || (e = {});
                var i = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div class="hiprint-printTemplate"></div>');
                t && t.constructor === Array ? t.forEach(function (t) {
                    t && n.printPanels.forEach(function (n, o) {
                        i.append(n.getHtml(t, e));
                    });
                }) : this.printPanels.forEach(function (n, o) {
                    i.append(n.getHtml(t, e));
                });
                return e && e.imgToBase64 && this.transformImg(i.find("img")), i;
            }, t.prototype.getHtml = function (t, e) {
                return t || (t = {}), this.getSimpleHtml(t, e);
            }, t.prototype.getJointHtml = function (t, e, n) {
                var i = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div class="hiprint-printTemplate"></div>'),
                    o = [];
                return this.printPanels.forEach(function (r, a) {
                    i.append(r.getHtml(t, e, o, void 0, n));
                }), i;
            }, t.prototype.setPaper = function (t, e) {
                if (/^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/.test(t)) this.editingPanel.resize(void 0, parseFloat(t), parseFloat(e), !1); else {
                    var n = s.a.instance[t];
                    if (!n) throw new Error("not found pagetype:" + (t || ""));
                    this.editingPanel.resize(t, n.width, n.height, !1);
                }
            }, t.prototype.rotatePaper = function () {
                this.editingPanel.rotatePaper();
            }, t.prototype.addPrintPanel = function (t, e) {
                var n = t ? new pt(new rt(t), this.id) : this.createDefaultPanel();
                return t && (t.index = this.printPanels.length), e && (this.container.append(n.getTarget()), n.design()), this.printPanels.push(n), e && this.selectPanel(n.index), n;
            }, t.prototype.selectPanel = function (t) {
                var e = this;
                this.printPanels.forEach(function (n, i) {
                    t == i ? (n.enable(), e.editingPanel = n) : n.disable();
                });
            }, t.prototype.deletePanel = function (t) {
                this.printPanels[t].clear(), this.printPanels[t].getTarget().remove(), this.printPanels.splice(t, 1);
            }, t.prototype.getPaneltotal = function () {
                return this.printPanels.length;
            }, t.prototype.createDefaultPanel = function () {
                return new pt(new rt({
                    index: this.printPanels.length,
                    paperType: "A4"
                }), this.id);
            }, t.prototype.createContainer = function (t) {
                t ? (this.container = jquery__WEBPACK_IMPORTED_MODULE_0___default()(t), this.container.addClass("hiprint-printTemplate")) : this.container = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div class="hiprint-printTemplate"></div>');
            }, t.prototype.getJsonTid = function () {
                var t = [];
                return this.printPanels.forEach(function (e) {
                    e.getPanelEntity().printElements.length && t.push(e.getPanelEntity());
                }), new st({
                    panels: t
                });
            }, t.prototype.getJson = function () {
                var t = [];
                return this.printPanels.forEach(function (e) {
                    t.push(e.getPanelEntity(!0));
                }), new st({
                    panels: t
                });
            }, t.prototype.getPrintElementSelectEventKey = function () {
                return "PrintElementSelectEventKey_" + this.id;
            }, t.prototype.getBuildCustomOptionSettingEventKey = function () {
                return "BuildCustomOptionSettingEventKey_" + this.id;
            }, t.prototype.clear = function () {
                this.printPanels.forEach(function (t) {
                    if (t.clear(), t.index > 0) {
                        var e = t.getTarget();
                        e && e.length && e.remove();
                    }
                }), this.printPanels = [this.printPanels[0]], this.printPaginationCreator && this.printPaginationCreator.buildPagination();
            }, t.prototype.getPaperType = function (t) {
                return null == t && (t = 0), this.printPanels[0].paperType;
            }, t.prototype.getOrient = function (t) {
                return null == t && (t = 0), this.printPanels[t].height > this.printPanels[t].width ? 1 : 2;
            }, t.prototype.getPrintStyle = function (t) {
                return this.printPanels[t].getPrintStyle();
            }, t.prototype.print = function (t, e) {
                t || (t = {}), this.getHtml(t, e).hiwprint();
            }, t.prototype.print2 = function (t, e) {
                if (t || (t = {}), e || (e = {}), this.clientIsOpened()) {
                    var n = this,
                        i = 0,
                        o = {},
                        r = jquery__WEBPACK_IMPORTED_MODULE_0___default()("link[media=print]").length > 0 ? jquery__WEBPACK_IMPORTED_MODULE_0___default()("link[media=print]") : jquery__WEBPACK_IMPORTED_MODULE_0___default()("link");
                    r.each(function (a, p) {
                        var s = new XMLHttpRequest();
                        s.open("GET", jquery__WEBPACK_IMPORTED_MODULE_0___default()(p).attr("href")), s.onreadystatechange = function () {
                            if (4 === s.readyState && 200 === s.status && (o[a + ""] = '<style rel="stylesheet" type="text/css">' + s.responseText + "</style>", ++i == r.length)) {
                                for (var p = "", l = 0; l < r.length; l++) {
                                    p += o[l + ""];
                                }

                                n.sentToClient(p, t, e);
                            }
                        }, s.send();
                    });
                } else alert("连接客户端失败");
            }, t.prototype.imageToBase64 = function (t) {
                var e = jquery__WEBPACK_IMPORTED_MODULE_0___default()(t).attr("src");
                if (-1 == e.indexOf("base64")) try {
                    if (!this.tempimageBase64[e]) {
                        var n = document.createElement("canvas"),
                            i = new Image();
                        i.src = t.attr("src"), n.width = i.width, n.height = i.height, n.getContext("2d").drawImage(i, 0, 0), e && (this.tempimageBase64[e] = n.toDataURL("image/png"));
                    }

                    t.attr("src", this.tempimageBase64[e]);
                } catch (e) {
                    try {
                        this.xhrLoadImage(t);
                    } catch (t) {
                        console.log(t);
                    }
                }
            }, t.prototype.xhrLoadImage = function (t) { }, t.prototype.sentToClient = function (t, e, n) {
                e || (e = {});
                var i = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, n || {});
                i.imgToBase64 = !0;
                var o = t + this.getHtml(e, i)[0].outerHTML;
                hiwebSocket.send({
                    id: s.a.instance.guid(),
                    printer: n.printer,
                    html: o,
                    templateId: this.id
                });
            }, t.prototype.printByHtml = function (t) {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()(t).hiwprint();
            }, t.prototype.printByHtml2 = function (t, e) {
                if (e || (e = {}), this.clientIsOpened()) {
                    var n = this,
                        i = 0,
                        o = {},
                        r = jquery__WEBPACK_IMPORTED_MODULE_0___default()("link[media=print]").length > 0 ? jquery__WEBPACK_IMPORTED_MODULE_0___default()("link[media=print]") : jquery__WEBPACK_IMPORTED_MODULE_0___default()("link");
                    r.each(function (a, p) {
                        var l = new XMLHttpRequest();
                        l.open("GET", jquery__WEBPACK_IMPORTED_MODULE_0___default()(p).attr("href")), l.onreadystatechange = function () {
                            if (4 === l.readyState && 200 === l.status && (o[a + ""] = '<style rel="stylesheet" type="text/css">' + l.responseText + "</style>", ++i == r.length)) {
                                for (var p = "", u = 0; u < r.length; u++) {
                                    p += o[u + ""];
                                }

                                var d = p + jquery__WEBPACK_IMPORTED_MODULE_0___default()(t)[0].outerHTML;
                                hiwebSocket.send({
                                    id: s.a.instance.guid(),
                                    printer: e.printer,
                                    html: d,
                                    templateId: n.id
                                });
                            }
                        }, l.send();
                    });
                } else alert("连接客户端失败");
            }, t.prototype.deletePrintElement = function (t) {
                this.printPanels.forEach(function (e) {
                    e.deletePrintElement(t);
                });
            }, t.prototype.transformImg = function (t) {
                var e = this;
                t.map(function (t, n) {
                    e.imageToBase64(jquery__WEBPACK_IMPORTED_MODULE_0___default()(n));
                });
            }, t.prototype.toPdf = function (t, e, n) {
                var i = this;

                if (this.printPanels.length) {
                    var r = o.a.mm.toPt(this.printPanels[0].width),
                        a = o.a.mm.toPt(this.printPanels[0].height),
                        p = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
                            scale: 2,
                            width: o.a.pt.toPx(r),
                            x: 0,
                            y: 0,
                            useCORS: !0
                        }, n || {}),
                        s = new jsPDF({
                            orientation: 1 == this.getOrient(0) ? "portrait" : "landscape",
                            unit: "pt",
                            format: this.printPanels[0].paperType ? this.printPanels[0].paperType.toLocaleLowerCase() : [r, a]
                        }),
                        l = this.getHtml(t, n);
                    this.createTempContainer();
                    var u = this.getTempContainer();
                    this.svg2canvas(l), u.html(l[0]);
                    var d = u.find(".hiprint-printPanel .hiprint-printPaper").length;
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()(l).css("position:fixed"), html2canvas(l[0], p).then(function (t) {
                        var n = t.getContext("2d");
                        n.mozImageSmoothingEnabled = !1, n.webkitImageSmoothingEnabled = !1, n.msImageSmoothingEnabled = !1, n.imageSmoothingEnabled = !1;

                        for (var o = t.toDataURL("image/jpeg"), p = 0; p < d; p++) {
                            s.addImage(o, "JPEG", 0, 0 - p * a, r, d * a), p < d - 1 && s.addPage();
                        }

                        i.removeTempContainer(), e.indexOf(".pdf") > -1 ? s.save(e) : s.save(e + ".pdf");
                    });
                }
            }, t.prototype.createTempContainer = function () {
                this.removeTempContainer(), jquery__WEBPACK_IMPORTED_MODULE_0___default()("body").prepend(jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div class="hiprint_temp_Container" style="overflow:hidden;height: 0px;box-sizing: border-box;"></div>'));
            }, t.prototype.removeTempContainer = function () {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()(".hiprint_temp_Container").remove();
            }, t.prototype.getTempContainer = function () {
                return jquery__WEBPACK_IMPORTED_MODULE_0___default()(".hiprint_temp_Container");
            }, t.prototype.svg2canvas = function (t) {
                t.find("svg").each(function (t, e) {
                    var n = e.parentNode,
                        i = document.createElement("canvas"),
                        o = new XMLSerializer().serializeToString(e);
                    canvg(i, o), jquery__WEBPACK_IMPORTED_MODULE_0___default()(e).before(i), n.removeChild(e), jquery__WEBPACK_IMPORTED_MODULE_0___default()(i).css("width", "100%"), jquery__WEBPACK_IMPORTED_MODULE_0___default()(i).css("height", "100%");
                });
            }, t.prototype.on = function (t, e) {
                o.a.event.on(t + "_" + this.id, e);
            }, t.prototype.clientIsOpened = function () {
                return hiwebSocket.opened;
            }, t.prototype.getPrinterList = function () {
                var t = hiwebSocket.getPrinterList();
                return t || [];
            }, t.prototype.getElementByTid = function (t, e) {
                return null == e && (e = 0), this.printPanels[e].getElementByTid(t);
            }, t.prototype.getElementByName = function (t, e) {
                return null == e && (e = 0), this.printPanels[e].getElementByName(t);
            }, t.prototype.getPanel = function (t) {
                return null == t && (t = 0), this.printPanels[t];
            }, t.prototype.loadAllImages = function (t, e, n) {
                var i = this;
                null == n && (n = 0);

                for (var o = t[0].getElementsByTagName("img"), r = !0, a = 0; a < o.length; a++) {
                    var p = o[a];
                    p.src && p.src !== window.location.href && -1 == p.src.indexOf("base64") && (p && void 0 !== p.naturalWidth && 0 !== p.naturalWidth && p.complete || (r = !1));
                }

                n++ , !r && n < 10 ? setTimeout(function () {
                    i.loadAllImages(t, e, n);
                }, 500) : e();
            }, t.prototype.setFields = function (t) {
                this.fields = t;
            }, t.prototype.getFields = function () {
                return this.fields;
            }, t.prototype.getFieldsInPanel = function () {
                var t = [];
                return this.printPanels.forEach(function (e) {
                    t = t.concat(e.getFieldsInPanel());
                }), t;
            }, t.prototype.initAutoSave = function () {
                var t = this;
                this.autoSave && o.a.event.on("hiprintTemplateDataChanged_" + this.id, function () {
                    hiLocalStorage.saveLocalData(t.autoSaveKey || "hiprintAutoSave", JSON.stringify(1 == t.autoSaveMode ? t.getJson() : t.getJsonTid()));
                });
            }, t;
        }();

    function ht(t) {
        this.getHtml(t).hiwprint();
    }

    function ft(t, e, n) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, t || {}).imgToBase64 = !0;
        var i = new ct({});
        i.on("printSuccess", e), i.on("printError", n), i.printByHtml2(this.getHtml(t));
    }

    function gt(t) {
        var e = void 0;
        return t && t.templates.forEach(function (n, i) {
            var o = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, n.options || {});
            t.imgToBase64 && (o.imgToBase64 = !0), e ? e.append(n.template.getHtml(n.data, o).html()) : e = n.template.getHtml(n.data, o);
        }), e;
    }

    function mt(t) {
        p.a.instance.init(t), p.a.instance.providers.forEach(function (t) {
            t.addElementTypes(a.instance);
        });
    }

    n.d(e, "init", function () {
        return mt;
    }), n.d(e, "PrintElementTypeManager", function () {
        return it;
    }), n.d(e, "PrintElementTypeGroup", function () {
        return ot;
    }), n.d(e, "PrintTemplate", function () {
        return ct;
    }), n.d(e, "print", function () {
        return ht;
    }), n.d(e, "print2", function () {
        return ft;
    }), n.d(e, "getHtml", function () {
        return gt;
    }), jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
        hiwebSocket.hasIo() && hiwebSocket.start();
    });
}]);

/* harmony default export */ __webpack_exports__["default"] = (hiprint);

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */
( function( global, factory ) {

	"use strict";

	if (  true && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};




	var preservedScriptAttributes = {
		type: true,
		src: true,
		noModule: true
	};

	function DOMEval( code, doc, node ) {
		doc = doc || document;

		var i,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {
				if ( node[ i ] ) {
					script[ i ] = node[ i ];
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.3.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && Array.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
        if ( nodeName( elem, "iframe" ) ) {
            return elem.contentDocument;
        }

        // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
        // Treat the template element as a regular one in browsers that
        // don't support it.
        if ( nodeName( elem, "template" ) ) {
            elem = elem.content || elem;
        }

        return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc, node );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		div.style.position = "absolute";
		scrollboxSizeVal = div.offsetWidth === 36 || "absolute";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function finalPropName( name ) {
	var ret = jQuery.cssProps[ name ];
	if ( !ret ) {
		ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
	}
	return ret;
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5
		) );
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),
		val = curCSS( elem, dimension, styles ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox;

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}

	// Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox = valueIsBorderBox &&
		( support.boxSizingReliable() || val === elem.style[ dimension ] );

	// Fall back to offsetWidth/offsetHeight when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	// Support: Android <=4.1 - 4.3 only
	// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
	if ( val === "auto" ||
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) {

		val = elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ];

		// offsetWidth/offsetHeight provide border-box values
		valueIsBorderBox = true;
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),
				isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra && boxModelAdjustment(
					elem,
					dimension,
					extra,
					isBorderBox,
					styles
				);

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && support.scrollboxSize() === styles.position ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = Date.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _barcodes = __webpack_require__(10);

var _barcodes2 = _interopRequireDefault(_barcodes);

var _merge = __webpack_require__(45);

var _merge2 = _interopRequireDefault(_merge);

var _linearizeEncodings = __webpack_require__(46);

var _linearizeEncodings2 = _interopRequireDefault(_linearizeEncodings);

var _fixOptions = __webpack_require__(47);

var _fixOptions2 = _interopRequireDefault(_fixOptions);

var _getRenderProperties = __webpack_require__(48);

var _getRenderProperties2 = _interopRequireDefault(_getRenderProperties);

var _optionsFromStrings = __webpack_require__(50);

var _optionsFromStrings2 = _interopRequireDefault(_optionsFromStrings);

var _ErrorHandler = __webpack_require__(58);

var _ErrorHandler2 = _interopRequireDefault(_ErrorHandler);

var _exceptions = __webpack_require__(57);

var _defaults = __webpack_require__(51);

var _defaults2 = _interopRequireDefault(_defaults);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// The protype of the object returned from the JsBarcode() call


// Help functions
var API = function API() {};

// The first call of the library API
// Will return an object with all barcodes calls and the data that is used
// by the renderers


// Default values


// Exceptions
// Import all the barcodes
var JsBarcode = function JsBarcode(element, text, options) {
	var api = new API();

	if (typeof element === "undefined") {
		throw Error("No element to render on was provided.");
	}

	// Variables that will be pased through the API calls
	api._renderProperties = (0, _getRenderProperties2.default)(element);
	api._encodings = [];
	api._options = _defaults2.default;
	api._errorHandler = new _ErrorHandler2.default(api);

	// If text is set, use the simple syntax (render the barcode directly)
	if (typeof text !== "undefined") {
		options = options || {};

		if (!options.format) {
			options.format = autoSelectBarcode();
		}

		api.options(options)[options.format](text, options).render();
	}

	return api;
};

// To make tests work TODO: remove
JsBarcode.getModule = function (name) {
	return _barcodes2.default[name];
};

// Register all barcodes
for (var name in _barcodes2.default) {
	if (_barcodes2.default.hasOwnProperty(name)) {
		// Security check if the propery is a prototype property
		registerBarcode(_barcodes2.default, name);
	}
}
function registerBarcode(barcodes, name) {
	API.prototype[name] = API.prototype[name.toUpperCase()] = API.prototype[name.toLowerCase()] = function (text, options) {
		var api = this;
		return api._errorHandler.wrapBarcodeCall(function () {
			// Ensure text is options.text
			options.text = typeof options.text === 'undefined' ? undefined : '' + options.text;

			var newOptions = (0, _merge2.default)(api._options, options);
			newOptions = (0, _optionsFromStrings2.default)(newOptions);
			var Encoder = barcodes[name];
			var encoded = encode(text, Encoder, newOptions);
			api._encodings.push(encoded);

			return api;
		});
	};
}

// encode() handles the Encoder call and builds the binary string to be rendered
function encode(text, Encoder, options) {
	// Ensure that text is a string
	text = "" + text;

	var encoder = new Encoder(text, options);

	// If the input is not valid for the encoder, throw error.
	// If the valid callback option is set, call it instead of throwing error
	if (!encoder.valid()) {
		throw new _exceptions.InvalidInputException(encoder.constructor.name, text);
	}

	// Make a request for the binary data (and other infromation) that should be rendered
	var encoded = encoder.encode();

	// Encodings can be nestled like [[1-1, 1-2], 2, [3-1, 3-2]
	// Convert to [1-1, 1-2, 2, 3-1, 3-2]
	encoded = (0, _linearizeEncodings2.default)(encoded);

	// Merge
	for (var i = 0; i < encoded.length; i++) {
		encoded[i].options = (0, _merge2.default)(options, encoded[i].options);
	}

	return encoded;
}

function autoSelectBarcode() {
	// If CODE128 exists. Use it
	if (_barcodes2.default["CODE128"]) {
		return "CODE128";
	}

	// Else, take the first (probably only) barcode
	return Object.keys(_barcodes2.default)[0];
}

// Sets global encoder options
// Added to the api by the JsBarcode function
API.prototype.options = function (options) {
	this._options = (0, _merge2.default)(this._options, options);
	return this;
};

// Will create a blank space (usually in between barcodes)
API.prototype.blank = function (size) {
	var zeroes = new Array(size + 1).join("0");
	this._encodings.push({ data: zeroes });
	return this;
};

// Initialize JsBarcode on all HTML elements defined.
API.prototype.init = function () {
	// Should do nothing if no elements where found
	if (!this._renderProperties) {
		return;
	}

	// Make sure renderProperies is an array
	if (!Array.isArray(this._renderProperties)) {
		this._renderProperties = [this._renderProperties];
	}

	var renderProperty;
	for (var i in this._renderProperties) {
		renderProperty = this._renderProperties[i];
		var options = (0, _merge2.default)(this._options, renderProperty.options);

		if (options.format == "auto") {
			options.format = autoSelectBarcode();
		}

		this._errorHandler.wrapBarcodeCall(function () {
			var text = options.value;
			var Encoder = _barcodes2.default[options.format.toUpperCase()];
			var encoded = encode(text, Encoder, options);

			render(renderProperty, encoded, options);
		});
	}
};

// The render API call. Calls the real render function.
API.prototype.render = function () {
	if (!this._renderProperties) {
		throw new _exceptions.NoElementException();
	}

	if (Array.isArray(this._renderProperties)) {
		for (var i = 0; i < this._renderProperties.length; i++) {
			render(this._renderProperties[i], this._encodings, this._options);
		}
	} else {
		render(this._renderProperties, this._encodings, this._options);
	}

	return this;
};

API.prototype._defaults = _defaults2.default;

// Prepares the encodings and calls the renderer
function render(renderProperties, encodings, options) {
	encodings = (0, _linearizeEncodings2.default)(encodings);

	for (var i = 0; i < encodings.length; i++) {
		encodings[i].options = (0, _merge2.default)(options, encodings[i].options);
		(0, _fixOptions2.default)(encodings[i].options);
	}

	(0, _fixOptions2.default)(options);

	var Renderer = renderProperties.renderer;
	var renderer = new Renderer(renderProperties.element, encodings, options);
	renderer.render();

	if (renderProperties.afterRender) {
		renderProperties.afterRender();
	}
}

// Export to browser
if (typeof window !== "undefined") {
	window.JsBarcode = JsBarcode;
}

// Export to jQuery
/*global jQuery */
if (typeof jQuery !== 'undefined') {
	jQuery.fn.JsBarcode = function (content, options) {
		var elementArray = [];
		jQuery(this).each(function () {
			elementArray.push(this);
		});
		return JsBarcode(elementArray, content, options);
	};
}

// Export to commonJS
module.exports = JsBarcode;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _CODE = __webpack_require__(11);

var _CODE2 = __webpack_require__(13);

var _EAN_UPC = __webpack_require__(21);

var _ITF = __webpack_require__(31);

var _MSI = __webpack_require__(35);

var _pharmacode = __webpack_require__(42);

var _codabar = __webpack_require__(43);

var _GenericBarcode = __webpack_require__(44);

exports.default = {
	CODE39: _CODE.CODE39,
	CODE128: _CODE2.CODE128, CODE128A: _CODE2.CODE128A, CODE128B: _CODE2.CODE128B, CODE128C: _CODE2.CODE128C,
	EAN13: _EAN_UPC.EAN13, EAN8: _EAN_UPC.EAN8, EAN5: _EAN_UPC.EAN5, EAN2: _EAN_UPC.EAN2, UPC: _EAN_UPC.UPC, UPCE: _EAN_UPC.UPCE,
	ITF14: _ITF.ITF14,
	ITF: _ITF.ITF,
	MSI: _MSI.MSI, MSI10: _MSI.MSI10, MSI11: _MSI.MSI11, MSI1010: _MSI.MSI1010, MSI1110: _MSI.MSI1110,
	pharmacode: _pharmacode.pharmacode,
	codabar: _codabar.codabar,
	GenericBarcode: _GenericBarcode.GenericBarcode
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.CODE39 = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Barcode2 = __webpack_require__(12);

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding documentation:
// https://en.wikipedia.org/wiki/Code_39#Encoding

var CODE39 = function (_Barcode) {
	_inherits(CODE39, _Barcode);

	function CODE39(data, options) {
		_classCallCheck(this, CODE39);

		data = data.toUpperCase();

		// Calculate mod43 checksum if enabled
		if (options.mod43) {
			data += getCharacter(mod43checksum(data));
		}

		return _possibleConstructorReturn(this, (CODE39.__proto__ || Object.getPrototypeOf(CODE39)).call(this, data, options));
	}

	_createClass(CODE39, [{
		key: "encode",
		value: function encode() {
			// First character is always a *
			var result = getEncoding("*");

			// Take every character and add the binary representation to the result
			for (var i = 0; i < this.data.length; i++) {
				result += getEncoding(this.data[i]) + "0";
			}

			// Last character is always a *
			result += getEncoding("*");

			return {
				data: result,
				text: this.text
			};
		}
	}, {
		key: "valid",
		value: function valid() {
			return this.data.search(/^[0-9A-Z\-\.\ \$\/\+\%]+$/) !== -1;
		}
	}]);

	return CODE39;
}(_Barcode3.default);

// All characters. The position in the array is the (checksum) value


var characters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "-", ".", " ", "$", "/", "+", "%", "*"];

// The decimal representation of the characters, is converted to the
// corresponding binary with the getEncoding function
var encodings = [20957, 29783, 23639, 30485, 20951, 29813, 23669, 20855, 29789, 23645, 29975, 23831, 30533, 22295, 30149, 24005, 21623, 29981, 23837, 22301, 30023, 23879, 30545, 22343, 30161, 24017, 21959, 30065, 23921, 22385, 29015, 18263, 29141, 17879, 29045, 18293, 17783, 29021, 18269, 17477, 17489, 17681, 20753, 35770];

// Get the binary representation of a character by converting the encodings
// from decimal to binary
function getEncoding(character) {
	return getBinary(characterValue(character));
}

function getBinary(characterValue) {
	return encodings[characterValue].toString(2);
}

function getCharacter(characterValue) {
	return characters[characterValue];
}

function characterValue(character) {
	return characters.indexOf(character);
}

function mod43checksum(data) {
	var checksum = 0;
	for (var i = 0; i < data.length; i++) {
		checksum += characterValue(data[i]);
	}

	checksum = checksum % 43;
	return checksum;
}

exports.CODE39 = CODE39;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Barcode = function Barcode(data, options) {
	_classCallCheck(this, Barcode);

	this.data = data;
	this.text = options.text || data;
	this.options = options;
};

exports.default = Barcode;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CODE128C = exports.CODE128B = exports.CODE128A = exports.CODE128 = undefined;

var _CODE128_AUTO = __webpack_require__(14);

var _CODE128_AUTO2 = _interopRequireDefault(_CODE128_AUTO);

var _CODE128A = __webpack_require__(18);

var _CODE128A2 = _interopRequireDefault(_CODE128A);

var _CODE128B = __webpack_require__(19);

var _CODE128B2 = _interopRequireDefault(_CODE128B);

var _CODE128C = __webpack_require__(20);

var _CODE128C2 = _interopRequireDefault(_CODE128C);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.CODE128 = _CODE128_AUTO2.default;
exports.CODE128A = _CODE128A2.default;
exports.CODE128B = _CODE128B2.default;
exports.CODE128C = _CODE128C2.default;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _CODE2 = __webpack_require__(15);

var _CODE3 = _interopRequireDefault(_CODE2);

var _auto = __webpack_require__(17);

var _auto2 = _interopRequireDefault(_auto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CODE128AUTO = function (_CODE) {
	_inherits(CODE128AUTO, _CODE);

	function CODE128AUTO(data, options) {
		_classCallCheck(this, CODE128AUTO);

		// ASCII value ranges 0-127, 200-211
		if (/^[\x00-\x7F\xC8-\xD3]+$/.test(data)) {
			var _this = _possibleConstructorReturn(this, (CODE128AUTO.__proto__ || Object.getPrototypeOf(CODE128AUTO)).call(this, (0, _auto2.default)(data), options));
		} else {
			var _this = _possibleConstructorReturn(this, (CODE128AUTO.__proto__ || Object.getPrototypeOf(CODE128AUTO)).call(this, data, options));
		}
		return _possibleConstructorReturn(_this);
	}

	return CODE128AUTO;
}(_CODE3.default);

exports.default = CODE128AUTO;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Barcode2 = __webpack_require__(12);

var _Barcode3 = _interopRequireDefault(_Barcode2);

var _constants = __webpack_require__(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// This is the master class,
// it does require the start code to be included in the string
var CODE128 = function (_Barcode) {
	_inherits(CODE128, _Barcode);

	function CODE128(data, options) {
		_classCallCheck(this, CODE128);

		// Get array of ascii codes from data
		var _this = _possibleConstructorReturn(this, (CODE128.__proto__ || Object.getPrototypeOf(CODE128)).call(this, data.substring(1), options));

		_this.bytes = data.split('').map(function (char) {
			return char.charCodeAt(0);
		});
		return _this;
	}

	_createClass(CODE128, [{
		key: 'valid',
		value: function valid() {
			// ASCII value ranges 0-127, 200-211
			return (/^[\x00-\x7F\xC8-\xD3]+$/.test(this.data)
			);
		}

		// The public encoding function

	}, {
		key: 'encode',
		value: function encode() {
			var bytes = this.bytes;
			// Remove the start code from the bytes and set its index
			var startIndex = bytes.shift() - 105;
			// Get start set by index
			var startSet = _constants.SET_BY_CODE[startIndex];

			if (startSet === undefined) {
				throw new RangeError('The encoding does not start with a start character.');
			}

			if (this.shouldEncodeAsEan128() === true) {
				bytes.unshift(_constants.FNC1);
			}

			// Start encode with the right type
			var encodingResult = CODE128.next(bytes, 1, startSet);

			return {
				text: this.text === this.data ? this.text.replace(/[^\x20-\x7E]/g, '') : this.text,
				data:
				// Add the start bits
				CODE128.getBar(startIndex) +
				// Add the encoded bits
				encodingResult.result +
				// Add the checksum
				CODE128.getBar((encodingResult.checksum + startIndex) % _constants.MODULO) +
				// Add the end bits
				CODE128.getBar(_constants.STOP)
			};
		}

		// GS1-128/EAN-128

	}, {
		key: 'shouldEncodeAsEan128',
		value: function shouldEncodeAsEan128() {
			var isEAN128 = this.options.ean128 || false;
			if (typeof isEAN128 === 'string') {
				isEAN128 = isEAN128.toLowerCase() === 'true';
			}
			return isEAN128;
		}

		// Get a bar symbol by index

	}], [{
		key: 'getBar',
		value: function getBar(index) {
			return _constants.BARS[index] ? _constants.BARS[index].toString() : '';
		}

		// Correct an index by a set and shift it from the bytes array

	}, {
		key: 'correctIndex',
		value: function correctIndex(bytes, set) {
			if (set === _constants.SET_A) {
				var charCode = bytes.shift();
				return charCode < 32 ? charCode + 64 : charCode - 32;
			} else if (set === _constants.SET_B) {
				return bytes.shift() - 32;
			} else {
				return (bytes.shift() - 48) * 10 + bytes.shift() - 48;
			}
		}
	}, {
		key: 'next',
		value: function next(bytes, pos, set) {
			if (!bytes.length) {
				return { result: '', checksum: 0 };
			}

			var nextCode = void 0,
			    index = void 0;

			// Special characters
			if (bytes[0] >= 200) {
				index = bytes.shift() - 105;
				var nextSet = _constants.SWAP[index];

				// Swap to other set
				if (nextSet !== undefined) {
					nextCode = CODE128.next(bytes, pos + 1, nextSet);
				}
				// Continue on current set but encode a special character
				else {
						// Shift
						if ((set === _constants.SET_A || set === _constants.SET_B) && index === _constants.SHIFT) {
							// Convert the next character so that is encoded correctly
							bytes[0] = set === _constants.SET_A ? bytes[0] > 95 ? bytes[0] - 96 : bytes[0] : bytes[0] < 32 ? bytes[0] + 96 : bytes[0];
						}
						nextCode = CODE128.next(bytes, pos + 1, set);
					}
			}
			// Continue encoding
			else {
					index = CODE128.correctIndex(bytes, set);
					nextCode = CODE128.next(bytes, pos + 1, set);
				}

			// Get the correct binary encoding and calculate the weight
			var enc = CODE128.getBar(index);
			var weight = index * pos;

			return {
				result: enc + nextCode.result,
				checksum: weight + nextCode.checksum
			};
		}
	}]);

	return CODE128;
}(_Barcode3.default);

exports.default = CODE128;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _SET_BY_CODE;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// constants for internal usage
var SET_A = exports.SET_A = 0;
var SET_B = exports.SET_B = 1;
var SET_C = exports.SET_C = 2;

// Special characters
var SHIFT = exports.SHIFT = 98;
var START_A = exports.START_A = 103;
var START_B = exports.START_B = 104;
var START_C = exports.START_C = 105;
var MODULO = exports.MODULO = 103;
var STOP = exports.STOP = 106;
var FNC1 = exports.FNC1 = 207;

// Get set by start code
var SET_BY_CODE = exports.SET_BY_CODE = (_SET_BY_CODE = {}, _defineProperty(_SET_BY_CODE, START_A, SET_A), _defineProperty(_SET_BY_CODE, START_B, SET_B), _defineProperty(_SET_BY_CODE, START_C, SET_C), _SET_BY_CODE);

// Get next set by code
var SWAP = exports.SWAP = {
	101: SET_A,
	100: SET_B,
	99: SET_C
};

var A_START_CHAR = exports.A_START_CHAR = String.fromCharCode(208); // START_A + 105
var B_START_CHAR = exports.B_START_CHAR = String.fromCharCode(209); // START_B + 105
var C_START_CHAR = exports.C_START_CHAR = String.fromCharCode(210); // START_C + 105

// 128A (Code Set A)
// ASCII characters 00 to 95 (0–9, A–Z and control codes), special characters, and FNC 1–4
var A_CHARS = exports.A_CHARS = "[\x00-\x5F\xC8-\xCF]";

// 128B (Code Set B)
// ASCII characters 32 to 127 (0–9, A–Z, a–z), special characters, and FNC 1–4
var B_CHARS = exports.B_CHARS = "[\x20-\x7F\xC8-\xCF]";

// 128C (Code Set C)
// 00–99 (encodes two digits with a single code point) and FNC1
var C_CHARS = exports.C_CHARS = "(\xCF*[0-9]{2}\xCF*)";

// CODE128 includes 107 symbols:
// 103 data symbols, 3 start symbols (A, B and C), and 1 stop symbol (the last one)
// Each symbol consist of three black bars (1) and three white spaces (0).
var BARS = exports.BARS = [11011001100, 11001101100, 11001100110, 10010011000, 10010001100, 10001001100, 10011001000, 10011000100, 10001100100, 11001001000, 11001000100, 11000100100, 10110011100, 10011011100, 10011001110, 10111001100, 10011101100, 10011100110, 11001110010, 11001011100, 11001001110, 11011100100, 11001110100, 11101101110, 11101001100, 11100101100, 11100100110, 11101100100, 11100110100, 11100110010, 11011011000, 11011000110, 11000110110, 10100011000, 10001011000, 10001000110, 10110001000, 10001101000, 10001100010, 11010001000, 11000101000, 11000100010, 10110111000, 10110001110, 10001101110, 10111011000, 10111000110, 10001110110, 11101110110, 11010001110, 11000101110, 11011101000, 11011100010, 11011101110, 11101011000, 11101000110, 11100010110, 11101101000, 11101100010, 11100011010, 11101111010, 11001000010, 11110001010, 10100110000, 10100001100, 10010110000, 10010000110, 10000101100, 10000100110, 10110010000, 10110000100, 10011010000, 10011000010, 10000110100, 10000110010, 11000010010, 11001010000, 11110111010, 11000010100, 10001111010, 10100111100, 10010111100, 10010011110, 10111100100, 10011110100, 10011110010, 11110100100, 11110010100, 11110010010, 11011011110, 11011110110, 11110110110, 10101111000, 10100011110, 10001011110, 10111101000, 10111100010, 11110101000, 11110100010, 10111011110, 10111101110, 11101011110, 11110101110, 11010000100, 11010010000, 11010011100, 1100011101011];

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _constants = __webpack_require__(16);

// Match Set functions
var matchSetALength = function matchSetALength(string) {
	return string.match(new RegExp('^' + _constants.A_CHARS + '*'))[0].length;
};
var matchSetBLength = function matchSetBLength(string) {
	return string.match(new RegExp('^' + _constants.B_CHARS + '*'))[0].length;
};
var matchSetC = function matchSetC(string) {
	return string.match(new RegExp('^' + _constants.C_CHARS + '*'))[0];
};

// CODE128A or CODE128B
function autoSelectFromAB(string, isA) {
	var ranges = isA ? _constants.A_CHARS : _constants.B_CHARS;
	var untilC = string.match(new RegExp('^(' + ranges + '+?)(([0-9]{2}){2,})([^0-9]|$)'));

	if (untilC) {
		return untilC[1] + String.fromCharCode(204) + autoSelectFromC(string.substring(untilC[1].length));
	}

	var chars = string.match(new RegExp('^' + ranges + '+'))[0];

	if (chars.length === string.length) {
		return string;
	}

	return chars + String.fromCharCode(isA ? 205 : 206) + autoSelectFromAB(string.substring(chars.length), !isA);
}

// CODE128C
function autoSelectFromC(string) {
	var cMatch = matchSetC(string);
	var length = cMatch.length;

	if (length === string.length) {
		return string;
	}

	string = string.substring(length);

	// Select A/B depending on the longest match
	var isA = matchSetALength(string) >= matchSetBLength(string);
	return cMatch + String.fromCharCode(isA ? 206 : 205) + autoSelectFromAB(string, isA);
}

// Detect Code Set (A, B or C) and format the string

exports.default = function (string) {
	var newString = void 0;
	var cLength = matchSetC(string).length;

	// Select 128C if the string start with enough digits
	if (cLength >= 2) {
		newString = _constants.C_START_CHAR + autoSelectFromC(string);
	} else {
		// Select A/B depending on the longest match
		var isA = matchSetALength(string) > matchSetBLength(string);
		newString = (isA ? _constants.A_START_CHAR : _constants.B_START_CHAR) + autoSelectFromAB(string, isA);
	}

	return newString.replace(/[\xCD\xCE]([^])[\xCD\xCE]/, // Any sequence between 205 and 206 characters
	function (match, char) {
		return String.fromCharCode(203) + char;
	});
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CODE2 = __webpack_require__(15);

var _CODE3 = _interopRequireDefault(_CODE2);

var _constants = __webpack_require__(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CODE128A = function (_CODE) {
	_inherits(CODE128A, _CODE);

	function CODE128A(string, options) {
		_classCallCheck(this, CODE128A);

		return _possibleConstructorReturn(this, (CODE128A.__proto__ || Object.getPrototypeOf(CODE128A)).call(this, _constants.A_START_CHAR + string, options));
	}

	_createClass(CODE128A, [{
		key: 'valid',
		value: function valid() {
			return new RegExp('^' + _constants.A_CHARS + '+$').test(this.data);
		}
	}]);

	return CODE128A;
}(_CODE3.default);

exports.default = CODE128A;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CODE2 = __webpack_require__(15);

var _CODE3 = _interopRequireDefault(_CODE2);

var _constants = __webpack_require__(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CODE128B = function (_CODE) {
	_inherits(CODE128B, _CODE);

	function CODE128B(string, options) {
		_classCallCheck(this, CODE128B);

		return _possibleConstructorReturn(this, (CODE128B.__proto__ || Object.getPrototypeOf(CODE128B)).call(this, _constants.B_START_CHAR + string, options));
	}

	_createClass(CODE128B, [{
		key: 'valid',
		value: function valid() {
			return new RegExp('^' + _constants.B_CHARS + '+$').test(this.data);
		}
	}]);

	return CODE128B;
}(_CODE3.default);

exports.default = CODE128B;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CODE2 = __webpack_require__(15);

var _CODE3 = _interopRequireDefault(_CODE2);

var _constants = __webpack_require__(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CODE128C = function (_CODE) {
	_inherits(CODE128C, _CODE);

	function CODE128C(string, options) {
		_classCallCheck(this, CODE128C);

		return _possibleConstructorReturn(this, (CODE128C.__proto__ || Object.getPrototypeOf(CODE128C)).call(this, _constants.C_START_CHAR + string, options));
	}

	_createClass(CODE128C, [{
		key: 'valid',
		value: function valid() {
			return new RegExp('^' + _constants.C_CHARS + '+$').test(this.data);
		}
	}]);

	return CODE128C;
}(_CODE3.default);

exports.default = CODE128C;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UPCE = exports.UPC = exports.EAN2 = exports.EAN5 = exports.EAN8 = exports.EAN13 = undefined;

var _EAN = __webpack_require__(22);

var _EAN2 = _interopRequireDefault(_EAN);

var _EAN3 = __webpack_require__(26);

var _EAN4 = _interopRequireDefault(_EAN3);

var _EAN5 = __webpack_require__(27);

var _EAN6 = _interopRequireDefault(_EAN5);

var _EAN7 = __webpack_require__(28);

var _EAN8 = _interopRequireDefault(_EAN7);

var _UPC = __webpack_require__(29);

var _UPC2 = _interopRequireDefault(_UPC);

var _UPCE = __webpack_require__(30);

var _UPCE2 = _interopRequireDefault(_UPCE);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.EAN13 = _EAN2.default;
exports.EAN8 = _EAN4.default;
exports.EAN5 = _EAN6.default;
exports.EAN2 = _EAN8.default;
exports.UPC = _UPC2.default;
exports.UPCE = _UPCE2.default;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _constants = __webpack_require__(23);

var _EAN2 = __webpack_require__(24);

var _EAN3 = _interopRequireDefault(_EAN2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding documentation:
// https://en.wikipedia.org/wiki/International_Article_Number_(EAN)#Binary_encoding_of_data_digits_into_EAN-13_barcode

// Calculate the checksum digit
// https://en.wikipedia.org/wiki/International_Article_Number_(EAN)#Calculation_of_checksum_digit
var checksum = function checksum(number) {
	var res = number.substr(0, 12).split('').map(function (n) {
		return +n;
	}).reduce(function (sum, a, idx) {
		return idx % 2 ? sum + a * 3 : sum + a;
	}, 0);

	return (10 - res % 10) % 10;
};

var EAN13 = function (_EAN) {
	_inherits(EAN13, _EAN);

	function EAN13(data, options) {
		_classCallCheck(this, EAN13);

		// Add checksum if it does not exist
		if (data.search(/^[0-9]{12}$/) !== -1) {
			data += checksum(data);
		}

		// Adds a last character to the end of the barcode
		var _this = _possibleConstructorReturn(this, (EAN13.__proto__ || Object.getPrototypeOf(EAN13)).call(this, data, options));

		_this.lastChar = options.lastChar;
		return _this;
	}

	_createClass(EAN13, [{
		key: 'valid',
		value: function valid() {
			return this.data.search(/^[0-9]{13}$/) !== -1 && +this.data[12] === checksum(this.data);
		}
	}, {
		key: 'leftText',
		value: function leftText() {
			return _get(EAN13.prototype.__proto__ || Object.getPrototypeOf(EAN13.prototype), 'leftText', this).call(this, 1, 6);
		}
	}, {
		key: 'leftEncode',
		value: function leftEncode() {
			var data = this.data.substr(1, 6);
			var structure = _constants.EAN13_STRUCTURE[this.data[0]];
			return _get(EAN13.prototype.__proto__ || Object.getPrototypeOf(EAN13.prototype), 'leftEncode', this).call(this, data, structure);
		}
	}, {
		key: 'rightText',
		value: function rightText() {
			return _get(EAN13.prototype.__proto__ || Object.getPrototypeOf(EAN13.prototype), 'rightText', this).call(this, 7, 6);
		}
	}, {
		key: 'rightEncode',
		value: function rightEncode() {
			var data = this.data.substr(7, 6);
			return _get(EAN13.prototype.__proto__ || Object.getPrototypeOf(EAN13.prototype), 'rightEncode', this).call(this, data, 'RRRRRR');
		}

		// The "standard" way of printing EAN13 barcodes with guard bars

	}, {
		key: 'encodeGuarded',
		value: function encodeGuarded() {
			var data = _get(EAN13.prototype.__proto__ || Object.getPrototypeOf(EAN13.prototype), 'encodeGuarded', this).call(this);

			// Extend data with left digit & last character
			if (this.options.displayValue) {
				data.unshift({
					data: '000000000000',
					text: this.text.substr(0, 1),
					options: { textAlign: 'left', fontSize: this.fontSize }
				});

				if (this.options.lastChar) {
					data.push({
						data: '00'
					});
					data.push({
						data: '00000',
						text: this.options.lastChar,
						options: { fontSize: this.fontSize }
					});
				}
			}

			return data;
		}
	}]);

	return EAN13;
}(_EAN3.default);

exports.default = EAN13;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
// Standard start end and middle bits
var SIDE_BIN = exports.SIDE_BIN = '101';
var MIDDLE_BIN = exports.MIDDLE_BIN = '01010';

var BINARIES = exports.BINARIES = {
	'L': [// The L (left) type of encoding
	'0001101', '0011001', '0010011', '0111101', '0100011', '0110001', '0101111', '0111011', '0110111', '0001011'],
	'G': [// The G type of encoding
	'0100111', '0110011', '0011011', '0100001', '0011101', '0111001', '0000101', '0010001', '0001001', '0010111'],
	'R': [// The R (right) type of encoding
	'1110010', '1100110', '1101100', '1000010', '1011100', '1001110', '1010000', '1000100', '1001000', '1110100'],
	'O': [// The O (odd) encoding for UPC-E
	'0001101', '0011001', '0010011', '0111101', '0100011', '0110001', '0101111', '0111011', '0110111', '0001011'],
	'E': [// The E (even) encoding for UPC-E
	'0100111', '0110011', '0011011', '0100001', '0011101', '0111001', '0000101', '0010001', '0001001', '0010111']
};

// Define the EAN-2 structure
var EAN2_STRUCTURE = exports.EAN2_STRUCTURE = ['LL', 'LG', 'GL', 'GG'];

// Define the EAN-5 structure
var EAN5_STRUCTURE = exports.EAN5_STRUCTURE = ['GGLLL', 'GLGLL', 'GLLGL', 'GLLLG', 'LGGLL', 'LLGGL', 'LLLGG', 'LGLGL', 'LGLLG', 'LLGLG'];

// Define the EAN-13 structure
var EAN13_STRUCTURE = exports.EAN13_STRUCTURE = ['LLLLLL', 'LLGLGG', 'LLGGLG', 'LLGGGL', 'LGLLGG', 'LGGLLG', 'LGGGLL', 'LGLGLG', 'LGLGGL', 'LGGLGL'];

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(23);

var _encoder = __webpack_require__(25);

var _encoder2 = _interopRequireDefault(_encoder);

var _Barcode2 = __webpack_require__(12);

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Base class for EAN8 & EAN13
var EAN = function (_Barcode) {
	_inherits(EAN, _Barcode);

	function EAN(data, options) {
		_classCallCheck(this, EAN);

		// Make sure the font is not bigger than the space between the guard bars
		var _this = _possibleConstructorReturn(this, (EAN.__proto__ || Object.getPrototypeOf(EAN)).call(this, data, options));

		_this.fontSize = !options.flat && options.fontSize > options.width * 10 ? options.width * 10 : options.fontSize;

		// Make the guard bars go down half the way of the text
		_this.guardHeight = options.height + _this.fontSize / 2 + options.textMargin;
		return _this;
	}

	_createClass(EAN, [{
		key: 'encode',
		value: function encode() {
			return this.options.flat ? this.encodeFlat() : this.encodeGuarded();
		}
	}, {
		key: 'leftText',
		value: function leftText(from, to) {
			return this.text.substr(from, to);
		}
	}, {
		key: 'leftEncode',
		value: function leftEncode(data, structure) {
			return (0, _encoder2.default)(data, structure);
		}
	}, {
		key: 'rightText',
		value: function rightText(from, to) {
			return this.text.substr(from, to);
		}
	}, {
		key: 'rightEncode',
		value: function rightEncode(data, structure) {
			return (0, _encoder2.default)(data, structure);
		}
	}, {
		key: 'encodeGuarded',
		value: function encodeGuarded() {
			var textOptions = { fontSize: this.fontSize };
			var guardOptions = { height: this.guardHeight };

			return [{ data: _constants.SIDE_BIN, options: guardOptions }, { data: this.leftEncode(), text: this.leftText(), options: textOptions }, { data: _constants.MIDDLE_BIN, options: guardOptions }, { data: this.rightEncode(), text: this.rightText(), options: textOptions }, { data: _constants.SIDE_BIN, options: guardOptions }];
		}
	}, {
		key: 'encodeFlat',
		value: function encodeFlat() {
			var data = [_constants.SIDE_BIN, this.leftEncode(), _constants.MIDDLE_BIN, this.rightEncode(), _constants.SIDE_BIN];

			return {
				data: data.join(''),
				text: this.text
			};
		}
	}]);

	return EAN;
}(_Barcode3.default);

exports.default = EAN;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _constants = __webpack_require__(23);

// Encode data string
var encode = function encode(data, structure, separator) {
	var encoded = data.split('').map(function (val, idx) {
		return _constants.BINARIES[structure[idx]];
	}).map(function (val, idx) {
		return val ? val[data[idx]] : '';
	});

	if (separator) {
		var last = data.length - 1;
		encoded = encoded.map(function (val, idx) {
			return idx < last ? val + separator : val;
		});
	}

	return encoded.join('');
};

exports.default = encode;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _EAN2 = __webpack_require__(24);

var _EAN3 = _interopRequireDefault(_EAN2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding documentation:
// http://www.barcodeisland.com/ean8.phtml

// Calculate the checksum digit
var checksum = function checksum(number) {
	var res = number.substr(0, 7).split('').map(function (n) {
		return +n;
	}).reduce(function (sum, a, idx) {
		return idx % 2 ? sum + a : sum + a * 3;
	}, 0);

	return (10 - res % 10) % 10;
};

var EAN8 = function (_EAN) {
	_inherits(EAN8, _EAN);

	function EAN8(data, options) {
		_classCallCheck(this, EAN8);

		// Add checksum if it does not exist
		if (data.search(/^[0-9]{7}$/) !== -1) {
			data += checksum(data);
		}

		return _possibleConstructorReturn(this, (EAN8.__proto__ || Object.getPrototypeOf(EAN8)).call(this, data, options));
	}

	_createClass(EAN8, [{
		key: 'valid',
		value: function valid() {
			return this.data.search(/^[0-9]{8}$/) !== -1 && +this.data[7] === checksum(this.data);
		}
	}, {
		key: 'leftText',
		value: function leftText() {
			return _get(EAN8.prototype.__proto__ || Object.getPrototypeOf(EAN8.prototype), 'leftText', this).call(this, 0, 4);
		}
	}, {
		key: 'leftEncode',
		value: function leftEncode() {
			var data = this.data.substr(0, 4);
			return _get(EAN8.prototype.__proto__ || Object.getPrototypeOf(EAN8.prototype), 'leftEncode', this).call(this, data, 'LLLL');
		}
	}, {
		key: 'rightText',
		value: function rightText() {
			return _get(EAN8.prototype.__proto__ || Object.getPrototypeOf(EAN8.prototype), 'rightText', this).call(this, 4, 4);
		}
	}, {
		key: 'rightEncode',
		value: function rightEncode() {
			var data = this.data.substr(4, 4);
			return _get(EAN8.prototype.__proto__ || Object.getPrototypeOf(EAN8.prototype), 'rightEncode', this).call(this, data, 'RRRR');
		}
	}]);

	return EAN8;
}(_EAN3.default);

exports.default = EAN8;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(23);

var _encoder = __webpack_require__(25);

var _encoder2 = _interopRequireDefault(_encoder);

var _Barcode2 = __webpack_require__(12);

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding documentation:
// https://en.wikipedia.org/wiki/EAN_5#Encoding

var checksum = function checksum(data) {
	var result = data.split('').map(function (n) {
		return +n;
	}).reduce(function (sum, a, idx) {
		return idx % 2 ? sum + a * 9 : sum + a * 3;
	}, 0);
	return result % 10;
};

var EAN5 = function (_Barcode) {
	_inherits(EAN5, _Barcode);

	function EAN5(data, options) {
		_classCallCheck(this, EAN5);

		return _possibleConstructorReturn(this, (EAN5.__proto__ || Object.getPrototypeOf(EAN5)).call(this, data, options));
	}

	_createClass(EAN5, [{
		key: 'valid',
		value: function valid() {
			return this.data.search(/^[0-9]{5}$/) !== -1;
		}
	}, {
		key: 'encode',
		value: function encode() {
			var structure = _constants.EAN5_STRUCTURE[checksum(this.data)];
			return {
				data: '1011' + (0, _encoder2.default)(this.data, structure, '01'),
				text: this.text
			};
		}
	}]);

	return EAN5;
}(_Barcode3.default);

exports.default = EAN5;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(23);

var _encoder = __webpack_require__(25);

var _encoder2 = _interopRequireDefault(_encoder);

var _Barcode2 = __webpack_require__(12);

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding documentation:
// https://en.wikipedia.org/wiki/EAN_2#Encoding

var EAN2 = function (_Barcode) {
	_inherits(EAN2, _Barcode);

	function EAN2(data, options) {
		_classCallCheck(this, EAN2);

		return _possibleConstructorReturn(this, (EAN2.__proto__ || Object.getPrototypeOf(EAN2)).call(this, data, options));
	}

	_createClass(EAN2, [{
		key: 'valid',
		value: function valid() {
			return this.data.search(/^[0-9]{2}$/) !== -1;
		}
	}, {
		key: 'encode',
		value: function encode() {
			// Choose the structure based on the number mod 4
			var structure = _constants.EAN2_STRUCTURE[parseInt(this.data) % 4];
			return {
				// Start bits + Encode the two digits with 01 in between
				data: '1011' + (0, _encoder2.default)(this.data, structure, '01'),
				text: this.text
			};
		}
	}]);

	return EAN2;
}(_Barcode3.default);

exports.default = EAN2;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.checksum = checksum;

var _encoder = __webpack_require__(25);

var _encoder2 = _interopRequireDefault(_encoder);

var _Barcode2 = __webpack_require__(12);

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding documentation:
// https://en.wikipedia.org/wiki/Universal_Product_Code#Encoding

var UPC = function (_Barcode) {
	_inherits(UPC, _Barcode);

	function UPC(data, options) {
		_classCallCheck(this, UPC);

		// Add checksum if it does not exist
		if (data.search(/^[0-9]{11}$/) !== -1) {
			data += checksum(data);
		}

		var _this = _possibleConstructorReturn(this, (UPC.__proto__ || Object.getPrototypeOf(UPC)).call(this, data, options));

		_this.displayValue = options.displayValue;

		// Make sure the font is not bigger than the space between the guard bars
		if (options.fontSize > options.width * 10) {
			_this.fontSize = options.width * 10;
		} else {
			_this.fontSize = options.fontSize;
		}

		// Make the guard bars go down half the way of the text
		_this.guardHeight = options.height + _this.fontSize / 2 + options.textMargin;
		return _this;
	}

	_createClass(UPC, [{
		key: "valid",
		value: function valid() {
			return this.data.search(/^[0-9]{12}$/) !== -1 && this.data[11] == checksum(this.data);
		}
	}, {
		key: "encode",
		value: function encode() {
			if (this.options.flat) {
				return this.flatEncoding();
			} else {
				return this.guardedEncoding();
			}
		}
	}, {
		key: "flatEncoding",
		value: function flatEncoding() {
			var result = "";

			result += "101";
			result += (0, _encoder2.default)(this.data.substr(0, 6), "LLLLLL");
			result += "01010";
			result += (0, _encoder2.default)(this.data.substr(6, 6), "RRRRRR");
			result += "101";

			return {
				data: result,
				text: this.text
			};
		}
	}, {
		key: "guardedEncoding",
		value: function guardedEncoding() {
			var result = [];

			// Add the first digit
			if (this.displayValue) {
				result.push({
					data: "00000000",
					text: this.text.substr(0, 1),
					options: { textAlign: "left", fontSize: this.fontSize }
				});
			}

			// Add the guard bars
			result.push({
				data: "101" + (0, _encoder2.default)(this.data[0], "L"),
				options: { height: this.guardHeight }
			});

			// Add the left side
			result.push({
				data: (0, _encoder2.default)(this.data.substr(1, 5), "LLLLL"),
				text: this.text.substr(1, 5),
				options: { fontSize: this.fontSize }
			});

			// Add the middle bits
			result.push({
				data: "01010",
				options: { height: this.guardHeight }
			});

			// Add the right side
			result.push({
				data: (0, _encoder2.default)(this.data.substr(6, 5), "RRRRR"),
				text: this.text.substr(6, 5),
				options: { fontSize: this.fontSize }
			});

			// Add the end bits
			result.push({
				data: (0, _encoder2.default)(this.data[11], "R") + "101",
				options: { height: this.guardHeight }
			});

			// Add the last digit
			if (this.displayValue) {
				result.push({
					data: "00000000",
					text: this.text.substr(11, 1),
					options: { textAlign: "right", fontSize: this.fontSize }
				});
			}

			return result;
		}
	}]);

	return UPC;
}(_Barcode3.default);

// Calulate the checksum digit
// https://en.wikipedia.org/wiki/International_Article_Number_(EAN)#Calculation_of_checksum_digit


function checksum(number) {
	var result = 0;

	var i;
	for (i = 1; i < 11; i += 2) {
		result += parseInt(number[i]);
	}
	for (i = 0; i < 11; i += 2) {
		result += parseInt(number[i]) * 3;
	}

	return (10 - result % 10) % 10;
}

exports.default = UPC;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _encoder = __webpack_require__(25);

var _encoder2 = _interopRequireDefault(_encoder);

var _Barcode2 = __webpack_require__(12);

var _Barcode3 = _interopRequireDefault(_Barcode2);

var _UPC = __webpack_require__(29);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding documentation:
// https://en.wikipedia.org/wiki/Universal_Product_Code#Encoding
//
// UPC-E documentation:
// https://en.wikipedia.org/wiki/Universal_Product_Code#UPC-E

var EXPANSIONS = ["XX00000XXX", "XX10000XXX", "XX20000XXX", "XXX00000XX", "XXXX00000X", "XXXXX00005", "XXXXX00006", "XXXXX00007", "XXXXX00008", "XXXXX00009"];

var PARITIES = [["EEEOOO", "OOOEEE"], ["EEOEOO", "OOEOEE"], ["EEOOEO", "OOEEOE"], ["EEOOOE", "OOEEEO"], ["EOEEOO", "OEOOEE"], ["EOOEEO", "OEEOOE"], ["EOOOEE", "OEEEOO"], ["EOEOEO", "OEOEOE"], ["EOEOOE", "OEOEEO"], ["EOOEOE", "OEEOEO"]];

var UPCE = function (_Barcode) {
	_inherits(UPCE, _Barcode);

	function UPCE(data, options) {
		_classCallCheck(this, UPCE);

		var _this = _possibleConstructorReturn(this, (UPCE.__proto__ || Object.getPrototypeOf(UPCE)).call(this, data, options));
		// Code may be 6 or 8 digits;
		// A 7 digit code is ambiguous as to whether the extra digit
		// is a UPC-A check or number system digit.


		_this.isValid = false;
		if (data.search(/^[0-9]{6}$/) !== -1) {
			_this.middleDigits = data;
			_this.upcA = expandToUPCA(data, "0");
			_this.text = options.text || '' + _this.upcA[0] + data + _this.upcA[_this.upcA.length - 1];
			_this.isValid = true;
		} else if (data.search(/^[01][0-9]{7}$/) !== -1) {
			_this.middleDigits = data.substring(1, data.length - 1);
			_this.upcA = expandToUPCA(_this.middleDigits, data[0]);

			if (_this.upcA[_this.upcA.length - 1] === data[data.length - 1]) {
				_this.isValid = true;
			} else {
				// checksum mismatch
				return _possibleConstructorReturn(_this);
			}
		} else {
			return _possibleConstructorReturn(_this);
		}

		_this.displayValue = options.displayValue;

		// Make sure the font is not bigger than the space between the guard bars
		if (options.fontSize > options.width * 10) {
			_this.fontSize = options.width * 10;
		} else {
			_this.fontSize = options.fontSize;
		}

		// Make the guard bars go down half the way of the text
		_this.guardHeight = options.height + _this.fontSize / 2 + options.textMargin;
		return _this;
	}

	_createClass(UPCE, [{
		key: 'valid',
		value: function valid() {
			return this.isValid;
		}
	}, {
		key: 'encode',
		value: function encode() {
			if (this.options.flat) {
				return this.flatEncoding();
			} else {
				return this.guardedEncoding();
			}
		}
	}, {
		key: 'flatEncoding',
		value: function flatEncoding() {
			var result = "";

			result += "101";
			result += this.encodeMiddleDigits();
			result += "010101";

			return {
				data: result,
				text: this.text
			};
		}
	}, {
		key: 'guardedEncoding',
		value: function guardedEncoding() {
			var result = [];

			// Add the UPC-A number system digit beneath the quiet zone
			if (this.displayValue) {
				result.push({
					data: "00000000",
					text: this.text[0],
					options: { textAlign: "left", fontSize: this.fontSize }
				});
			}

			// Add the guard bars
			result.push({
				data: "101",
				options: { height: this.guardHeight }
			});

			// Add the 6 UPC-E digits
			result.push({
				data: this.encodeMiddleDigits(),
				text: this.text.substring(1, 7),
				options: { fontSize: this.fontSize }
			});

			// Add the end bits
			result.push({
				data: "010101",
				options: { height: this.guardHeight }
			});

			// Add the UPC-A check digit beneath the quiet zone
			if (this.displayValue) {
				result.push({
					data: "00000000",
					text: this.text[7],
					options: { textAlign: "right", fontSize: this.fontSize }
				});
			}

			return result;
		}
	}, {
		key: 'encodeMiddleDigits',
		value: function encodeMiddleDigits() {
			var numberSystem = this.upcA[0];
			var checkDigit = this.upcA[this.upcA.length - 1];
			var parity = PARITIES[parseInt(checkDigit)][parseInt(numberSystem)];
			return (0, _encoder2.default)(this.middleDigits, parity);
		}
	}]);

	return UPCE;
}(_Barcode3.default);

function expandToUPCA(middleDigits, numberSystem) {
	var lastUpcE = parseInt(middleDigits[middleDigits.length - 1]);
	var expansion = EXPANSIONS[lastUpcE];

	var result = "";
	var digitIndex = 0;
	for (var i = 0; i < expansion.length; i++) {
		var c = expansion[i];
		if (c === 'X') {
			result += middleDigits[digitIndex++];
		} else {
			result += c;
		}
	}

	result = '' + numberSystem + result;
	return '' + result + (0, _UPC.checksum)(result);
}

exports.default = UPCE;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ITF14 = exports.ITF = undefined;

var _ITF = __webpack_require__(32);

var _ITF2 = _interopRequireDefault(_ITF);

var _ITF3 = __webpack_require__(34);

var _ITF4 = _interopRequireDefault(_ITF3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.ITF = _ITF2.default;
exports.ITF14 = _ITF4.default;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(33);

var _Barcode2 = __webpack_require__(12);

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ITF = function (_Barcode) {
	_inherits(ITF, _Barcode);

	function ITF() {
		_classCallCheck(this, ITF);

		return _possibleConstructorReturn(this, (ITF.__proto__ || Object.getPrototypeOf(ITF)).apply(this, arguments));
	}

	_createClass(ITF, [{
		key: 'valid',
		value: function valid() {
			return this.data.search(/^([0-9]{2})+$/) !== -1;
		}
	}, {
		key: 'encode',
		value: function encode() {
			var _this2 = this;

			// Calculate all the digit pairs
			var encoded = this.data.match(/.{2}/g).map(function (pair) {
				return _this2.encodePair(pair);
			}).join('');

			return {
				data: _constants.START_BIN + encoded + _constants.END_BIN,
				text: this.text
			};
		}

		// Calculate the data of a number pair

	}, {
		key: 'encodePair',
		value: function encodePair(pair) {
			var second = _constants.BINARIES[pair[1]];

			return _constants.BINARIES[pair[0]].split('').map(function (first, idx) {
				return (first === '1' ? '111' : '1') + (second[idx] === '1' ? '000' : '0');
			}).join('');
		}
	}]);

	return ITF;
}(_Barcode3.default);

exports.default = ITF;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var START_BIN = exports.START_BIN = '1010';
var END_BIN = exports.END_BIN = '11101';

var BINARIES = exports.BINARIES = ['00110', '10001', '01001', '11000', '00101', '10100', '01100', '00011', '10010', '01010'];

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ITF2 = __webpack_require__(32);

var _ITF3 = _interopRequireDefault(_ITF2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Calculate the checksum digit
var checksum = function checksum(data) {
	var res = data.substr(0, 13).split('').map(function (num) {
		return parseInt(num, 10);
	}).reduce(function (sum, n, idx) {
		return sum + n * (3 - idx % 2 * 2);
	}, 0);

	return Math.ceil(res / 10) * 10 - res;
};

var ITF14 = function (_ITF) {
	_inherits(ITF14, _ITF);

	function ITF14(data, options) {
		_classCallCheck(this, ITF14);

		// Add checksum if it does not exist
		if (data.search(/^[0-9]{13}$/) !== -1) {
			data += checksum(data);
		}
		return _possibleConstructorReturn(this, (ITF14.__proto__ || Object.getPrototypeOf(ITF14)).call(this, data, options));
	}

	_createClass(ITF14, [{
		key: 'valid',
		value: function valid() {
			return this.data.search(/^[0-9]{14}$/) !== -1 && +this.data[13] === checksum(this.data);
		}
	}]);

	return ITF14;
}(_ITF3.default);

exports.default = ITF14;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MSI1110 = exports.MSI1010 = exports.MSI11 = exports.MSI10 = exports.MSI = undefined;

var _MSI = __webpack_require__(36);

var _MSI2 = _interopRequireDefault(_MSI);

var _MSI3 = __webpack_require__(37);

var _MSI4 = _interopRequireDefault(_MSI3);

var _MSI5 = __webpack_require__(39);

var _MSI6 = _interopRequireDefault(_MSI5);

var _MSI7 = __webpack_require__(40);

var _MSI8 = _interopRequireDefault(_MSI7);

var _MSI9 = __webpack_require__(41);

var _MSI10 = _interopRequireDefault(_MSI9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.MSI = _MSI2.default;
exports.MSI10 = _MSI4.default;
exports.MSI11 = _MSI6.default;
exports.MSI1010 = _MSI8.default;
exports.MSI1110 = _MSI10.default;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Barcode2 = __webpack_require__(12);

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding documentation
// https://en.wikipedia.org/wiki/MSI_Barcode#Character_set_and_binary_lookup

var MSI = function (_Barcode) {
	_inherits(MSI, _Barcode);

	function MSI(data, options) {
		_classCallCheck(this, MSI);

		return _possibleConstructorReturn(this, (MSI.__proto__ || Object.getPrototypeOf(MSI)).call(this, data, options));
	}

	_createClass(MSI, [{
		key: "encode",
		value: function encode() {
			// Start bits
			var ret = "110";

			for (var i = 0; i < this.data.length; i++) {
				// Convert the character to binary (always 4 binary digits)
				var digit = parseInt(this.data[i]);
				var bin = digit.toString(2);
				bin = addZeroes(bin, 4 - bin.length);

				// Add 100 for every zero and 110 for every 1
				for (var b = 0; b < bin.length; b++) {
					ret += bin[b] == "0" ? "100" : "110";
				}
			}

			// End bits
			ret += "1001";

			return {
				data: ret,
				text: this.text
			};
		}
	}, {
		key: "valid",
		value: function valid() {
			return this.data.search(/^[0-9]+$/) !== -1;
		}
	}]);

	return MSI;
}(_Barcode3.default);

function addZeroes(number, n) {
	for (var i = 0; i < n; i++) {
		number = "0" + number;
	}
	return number;
}

exports.default = MSI;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _MSI2 = __webpack_require__(36);

var _MSI3 = _interopRequireDefault(_MSI2);

var _checksums = __webpack_require__(38);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MSI10 = function (_MSI) {
	_inherits(MSI10, _MSI);

	function MSI10(data, options) {
		_classCallCheck(this, MSI10);

		return _possibleConstructorReturn(this, (MSI10.__proto__ || Object.getPrototypeOf(MSI10)).call(this, data + (0, _checksums.mod10)(data), options));
	}

	return MSI10;
}(_MSI3.default);

exports.default = MSI10;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.mod10 = mod10;
exports.mod11 = mod11;
function mod10(number) {
	var sum = 0;
	for (var i = 0; i < number.length; i++) {
		var n = parseInt(number[i]);
		if ((i + number.length) % 2 === 0) {
			sum += n;
		} else {
			sum += n * 2 % 10 + Math.floor(n * 2 / 10);
		}
	}
	return (10 - sum % 10) % 10;
}

function mod11(number) {
	var sum = 0;
	var weights = [2, 3, 4, 5, 6, 7];
	for (var i = 0; i < number.length; i++) {
		var n = parseInt(number[number.length - 1 - i]);
		sum += weights[i % weights.length] * n;
	}
	return (11 - sum % 11) % 11;
}

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _MSI2 = __webpack_require__(36);

var _MSI3 = _interopRequireDefault(_MSI2);

var _checksums = __webpack_require__(38);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MSI11 = function (_MSI) {
	_inherits(MSI11, _MSI);

	function MSI11(data, options) {
		_classCallCheck(this, MSI11);

		return _possibleConstructorReturn(this, (MSI11.__proto__ || Object.getPrototypeOf(MSI11)).call(this, data + (0, _checksums.mod11)(data), options));
	}

	return MSI11;
}(_MSI3.default);

exports.default = MSI11;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _MSI2 = __webpack_require__(36);

var _MSI3 = _interopRequireDefault(_MSI2);

var _checksums = __webpack_require__(38);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MSI1010 = function (_MSI) {
	_inherits(MSI1010, _MSI);

	function MSI1010(data, options) {
		_classCallCheck(this, MSI1010);

		data += (0, _checksums.mod10)(data);
		data += (0, _checksums.mod10)(data);
		return _possibleConstructorReturn(this, (MSI1010.__proto__ || Object.getPrototypeOf(MSI1010)).call(this, data, options));
	}

	return MSI1010;
}(_MSI3.default);

exports.default = MSI1010;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _MSI2 = __webpack_require__(36);

var _MSI3 = _interopRequireDefault(_MSI2);

var _checksums = __webpack_require__(38);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MSI1110 = function (_MSI) {
	_inherits(MSI1110, _MSI);

	function MSI1110(data, options) {
		_classCallCheck(this, MSI1110);

		data += (0, _checksums.mod11)(data);
		data += (0, _checksums.mod10)(data);
		return _possibleConstructorReturn(this, (MSI1110.__proto__ || Object.getPrototypeOf(MSI1110)).call(this, data, options));
	}

	return MSI1110;
}(_MSI3.default);

exports.default = MSI1110;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.pharmacode = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Barcode2 = __webpack_require__(12);

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding documentation
// http://www.gomaro.ch/ftproot/Laetus_PHARMA-CODE.pdf

var pharmacode = function (_Barcode) {
	_inherits(pharmacode, _Barcode);

	function pharmacode(data, options) {
		_classCallCheck(this, pharmacode);

		var _this = _possibleConstructorReturn(this, (pharmacode.__proto__ || Object.getPrototypeOf(pharmacode)).call(this, data, options));

		_this.number = parseInt(data, 10);
		return _this;
	}

	_createClass(pharmacode, [{
		key: "encode",
		value: function encode() {
			var z = this.number;
			var result = "";

			// http://i.imgur.com/RMm4UDJ.png
			// (source: http://www.gomaro.ch/ftproot/Laetus_PHARMA-CODE.pdf, page: 34)
			while (!isNaN(z) && z != 0) {
				if (z % 2 === 0) {
					// Even
					result = "11100" + result;
					z = (z - 2) / 2;
				} else {
					// Odd
					result = "100" + result;
					z = (z - 1) / 2;
				}
			}

			// Remove the two last zeroes
			result = result.slice(0, -2);

			return {
				data: result,
				text: this.text
			};
		}
	}, {
		key: "valid",
		value: function valid() {
			return this.number >= 3 && this.number <= 131070;
		}
	}]);

	return pharmacode;
}(_Barcode3.default);

exports.pharmacode = pharmacode;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.codabar = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Barcode2 = __webpack_require__(12);

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding specification:
// http://www.barcodeisland.com/codabar.phtml

var codabar = function (_Barcode) {
	_inherits(codabar, _Barcode);

	function codabar(data, options) {
		_classCallCheck(this, codabar);

		if (data.search(/^[0-9\-\$\:\.\+\/]+$/) === 0) {
			data = "A" + data + "A";
		}

		var _this = _possibleConstructorReturn(this, (codabar.__proto__ || Object.getPrototypeOf(codabar)).call(this, data.toUpperCase(), options));

		_this.text = _this.options.text || _this.text.replace(/[A-D]/g, '');
		return _this;
	}

	_createClass(codabar, [{
		key: "valid",
		value: function valid() {
			return this.data.search(/^[A-D][0-9\-\$\:\.\+\/]+[A-D]$/) !== -1;
		}
	}, {
		key: "encode",
		value: function encode() {
			var result = [];
			var encodings = this.getEncodings();
			for (var i = 0; i < this.data.length; i++) {
				result.push(encodings[this.data.charAt(i)]);
				// for all characters except the last, append a narrow-space ("0")
				if (i !== this.data.length - 1) {
					result.push("0");
				}
			}
			return {
				text: this.text,
				data: result.join('')
			};
		}
	}, {
		key: "getEncodings",
		value: function getEncodings() {
			return {
				"0": "101010011",
				"1": "101011001",
				"2": "101001011",
				"3": "110010101",
				"4": "101101001",
				"5": "110101001",
				"6": "100101011",
				"7": "100101101",
				"8": "100110101",
				"9": "110100101",
				"-": "101001101",
				"$": "101100101",
				":": "1101011011",
				"/": "1101101011",
				".": "1101101101",
				"+": "101100110011",
				"A": "1011001001",
				"B": "1001001011",
				"C": "1010010011",
				"D": "1010011001"
			};
		}
	}]);

	return codabar;
}(_Barcode3.default);

exports.codabar = codabar;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.GenericBarcode = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Barcode2 = __webpack_require__(12);

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GenericBarcode = function (_Barcode) {
	_inherits(GenericBarcode, _Barcode);

	function GenericBarcode(data, options) {
		_classCallCheck(this, GenericBarcode);

		return _possibleConstructorReturn(this, (GenericBarcode.__proto__ || Object.getPrototypeOf(GenericBarcode)).call(this, data, options)); // Sets this.data and this.text
	}

	// Return the corresponding binary numbers for the data provided


	_createClass(GenericBarcode, [{
		key: "encode",
		value: function encode() {
			return {
				data: "10101010101010101010101010101010101010101",
				text: this.text
			};
		}

		// Resturn true/false if the string provided is valid for this encoder

	}, {
		key: "valid",
		value: function valid() {
			return true;
		}
	}]);

	return GenericBarcode;
}(_Barcode3.default);

exports.GenericBarcode = GenericBarcode;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (old, replaceObj) {
  return _extends({}, old, replaceObj);
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = linearizeEncodings;

// Encodings can be nestled like [[1-1, 1-2], 2, [3-1, 3-2]
// Convert to [1-1, 1-2, 2, 3-1, 3-2]

function linearizeEncodings(encodings) {
	var linearEncodings = [];
	function nextLevel(encoded) {
		if (Array.isArray(encoded)) {
			for (var i = 0; i < encoded.length; i++) {
				nextLevel(encoded[i]);
			}
		} else {
			encoded.text = encoded.text || "";
			encoded.data = encoded.data || "";
			linearEncodings.push(encoded);
		}
	}
	nextLevel(encodings);

	return linearEncodings;
}

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = fixOptions;


function fixOptions(options) {
	// Fix the margins
	options.marginTop = options.marginTop || options.margin;
	options.marginBottom = options.marginBottom || options.margin;
	options.marginRight = options.marginRight || options.margin;
	options.marginLeft = options.marginLeft || options.margin;

	return options;
}

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /* global HTMLImageElement */
/* global HTMLCanvasElement */
/* global SVGElement */

var _getOptionsFromElement = __webpack_require__(49);

var _getOptionsFromElement2 = _interopRequireDefault(_getOptionsFromElement);

var _renderers = __webpack_require__(52);

var _renderers2 = _interopRequireDefault(_renderers);

var _exceptions = __webpack_require__(57);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Takes an element and returns an object with information about how
// it should be rendered
// This could also return an array with these objects
// {
//   element: The element that the renderer should draw on
//   renderer: The name of the renderer
//   afterRender (optional): If something has to done after the renderer
//     completed, calls afterRender (function)
//   options (optional): Options that can be defined in the element
// }

function getRenderProperties(element) {
	// If the element is a string, query select call again
	if (typeof element === "string") {
		return querySelectedRenderProperties(element);
	}
	// If element is array. Recursivly call with every object in the array
	else if (Array.isArray(element)) {
			var returnArray = [];
			for (var i = 0; i < element.length; i++) {
				returnArray.push(getRenderProperties(element[i]));
			}
			return returnArray;
		}
		// If element, render on canvas and set the uri as src
		else if (typeof HTMLCanvasElement !== 'undefined' && element instanceof HTMLImageElement) {
				return newCanvasRenderProperties(element);
			}
			// If SVG
			else if (element && element.nodeName === 'svg' || typeof SVGElement !== 'undefined' && element instanceof SVGElement) {
					return {
						element: element,
						options: (0, _getOptionsFromElement2.default)(element),
						renderer: _renderers2.default.SVGRenderer
					};
				}
				// If canvas (in browser)
				else if (typeof HTMLCanvasElement !== 'undefined' && element instanceof HTMLCanvasElement) {
						return {
							element: element,
							options: (0, _getOptionsFromElement2.default)(element),
							renderer: _renderers2.default.CanvasRenderer
						};
					}
					// If canvas (in node)
					else if (element && element.getContext) {
							return {
								element: element,
								renderer: _renderers2.default.CanvasRenderer
							};
						} else if (element && (typeof element === "undefined" ? "undefined" : _typeof(element)) === 'object' && !element.nodeName) {
							return {
								element: element,
								renderer: _renderers2.default.ObjectRenderer
							};
						} else {
							throw new _exceptions.InvalidElementException();
						}
}

function querySelectedRenderProperties(string) {
	var selector = document.querySelectorAll(string);
	if (selector.length === 0) {
		return undefined;
	} else {
		var returnArray = [];
		for (var i = 0; i < selector.length; i++) {
			returnArray.push(getRenderProperties(selector[i]));
		}
		return returnArray;
	}
}

function newCanvasRenderProperties(imgElement) {
	var canvas = document.createElement('canvas');
	return {
		element: canvas,
		options: (0, _getOptionsFromElement2.default)(imgElement),
		renderer: _renderers2.default.CanvasRenderer,
		afterRender: function afterRender() {
			imgElement.setAttribute("src", canvas.toDataURL());
		}
	};
}

exports.default = getRenderProperties;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _optionsFromStrings = __webpack_require__(50);

var _optionsFromStrings2 = _interopRequireDefault(_optionsFromStrings);

var _defaults = __webpack_require__(51);

var _defaults2 = _interopRequireDefault(_defaults);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getOptionsFromElement(element) {
	var options = {};
	for (var property in _defaults2.default) {
		if (_defaults2.default.hasOwnProperty(property)) {
			// jsbarcode-*
			if (element.hasAttribute("jsbarcode-" + property.toLowerCase())) {
				options[property] = element.getAttribute("jsbarcode-" + property.toLowerCase());
			}

			// data-*
			if (element.hasAttribute("data-" + property.toLowerCase())) {
				options[property] = element.getAttribute("data-" + property.toLowerCase());
			}
		}
	}

	options["value"] = element.getAttribute("jsbarcode-value") || element.getAttribute("data-value");

	// Since all atributes are string they need to be converted to integers
	options = (0, _optionsFromStrings2.default)(options);

	return options;
}

exports.default = getOptionsFromElement;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = optionsFromStrings;

// Convert string to integers/booleans where it should be

function optionsFromStrings(options) {
	var intOptions = ["width", "height", "textMargin", "fontSize", "margin", "marginTop", "marginBottom", "marginLeft", "marginRight"];

	for (var intOption in intOptions) {
		if (intOptions.hasOwnProperty(intOption)) {
			intOption = intOptions[intOption];
			if (typeof options[intOption] === "string") {
				options[intOption] = parseInt(options[intOption], 10);
			}
		}
	}

	if (typeof options["displayValue"] === "string") {
		options["displayValue"] = options["displayValue"] != "false";
	}

	return options;
}

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var defaults = {
	width: 2,
	height: 100,
	format: "auto",
	displayValue: true,
	fontOptions: "",
	font: "monospace",
	text: undefined,
	textAlign: "center",
	textPosition: "bottom",
	textMargin: 2,
	fontSize: 20,
	background: "#ffffff",
	lineColor: "#000000",
	margin: 10,
	marginTop: undefined,
	marginBottom: undefined,
	marginLeft: undefined,
	marginRight: undefined,
	valid: function valid() {}
};

exports.default = defaults;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _canvas = __webpack_require__(53);

var _canvas2 = _interopRequireDefault(_canvas);

var _svg = __webpack_require__(55);

var _svg2 = _interopRequireDefault(_svg);

var _object = __webpack_require__(56);

var _object2 = _interopRequireDefault(_object);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = { CanvasRenderer: _canvas2.default, SVGRenderer: _svg2.default, ObjectRenderer: _object2.default };

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _merge = __webpack_require__(45);

var _merge2 = _interopRequireDefault(_merge);

var _shared = __webpack_require__(54);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CanvasRenderer = function () {
	function CanvasRenderer(canvas, encodings, options) {
		_classCallCheck(this, CanvasRenderer);

		this.canvas = canvas;
		this.encodings = encodings;
		this.options = options;
	}

	_createClass(CanvasRenderer, [{
		key: "render",
		value: function render() {
			// Abort if the browser does not support HTML5 canvas
			if (!this.canvas.getContext) {
				throw new Error('The browser does not support canvas.');
			}

			this.prepareCanvas();
			for (var i = 0; i < this.encodings.length; i++) {
				var encodingOptions = (0, _merge2.default)(this.options, this.encodings[i].options);

				this.drawCanvasBarcode(encodingOptions, this.encodings[i]);
				this.drawCanvasText(encodingOptions, this.encodings[i]);

				this.moveCanvasDrawing(this.encodings[i]);
			}

			this.restoreCanvas();
		}
	}, {
		key: "prepareCanvas",
		value: function prepareCanvas() {
			// Get the canvas context
			var ctx = this.canvas.getContext("2d");

			ctx.save();

			(0, _shared.calculateEncodingAttributes)(this.encodings, this.options, ctx);
			var totalWidth = (0, _shared.getTotalWidthOfEncodings)(this.encodings);
			var maxHeight = (0, _shared.getMaximumHeightOfEncodings)(this.encodings);

			this.canvas.width = totalWidth + this.options.marginLeft + this.options.marginRight;

			this.canvas.height = maxHeight;

			// Paint the canvas
			ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
			if (this.options.background) {
				ctx.fillStyle = this.options.background;
				ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
			}

			ctx.translate(this.options.marginLeft, 0);
		}
	}, {
		key: "drawCanvasBarcode",
		value: function drawCanvasBarcode(options, encoding) {
			// Get the canvas context
			var ctx = this.canvas.getContext("2d");

			var binary = encoding.data;

			// Creates the barcode out of the encoded binary
			var yFrom;
			if (options.textPosition == "top") {
				yFrom = options.marginTop + options.fontSize + options.textMargin;
			} else {
				yFrom = options.marginTop;
			}

			ctx.fillStyle = options.lineColor;

			for (var b = 0; b < binary.length; b++) {
				var x = b * options.width + encoding.barcodePadding;

				if (binary[b] === "1") {
					ctx.fillRect(x, yFrom, options.width, options.height);
				} else if (binary[b]) {
					ctx.fillRect(x, yFrom, options.width, options.height * binary[b]);
				}
			}
		}
	}, {
		key: "drawCanvasText",
		value: function drawCanvasText(options, encoding) {
			// Get the canvas context
			var ctx = this.canvas.getContext("2d");

			var font = options.fontOptions + " " + options.fontSize + "px " + options.font;

			// Draw the text if displayValue is set
			if (options.displayValue) {
				var x, y;

				if (options.textPosition == "top") {
					y = options.marginTop + options.fontSize - options.textMargin;
				} else {
					y = options.height + options.textMargin + options.marginTop + options.fontSize;
				}

				ctx.font = font;

				// Draw the text in the correct X depending on the textAlign option
				if (options.textAlign == "left" || encoding.barcodePadding > 0) {
					x = 0;
					ctx.textAlign = 'left';
				} else if (options.textAlign == "right") {
					x = encoding.width - 1;
					ctx.textAlign = 'right';
				}
				// In all other cases, center the text
				else {
						x = encoding.width / 2;
						ctx.textAlign = 'center';
					}

				ctx.fillText(encoding.text, x, y);
			}
		}
	}, {
		key: "moveCanvasDrawing",
		value: function moveCanvasDrawing(encoding) {
			var ctx = this.canvas.getContext("2d");

			ctx.translate(encoding.width, 0);
		}
	}, {
		key: "restoreCanvas",
		value: function restoreCanvas() {
			// Get the canvas context
			var ctx = this.canvas.getContext("2d");

			ctx.restore();
		}
	}]);

	return CanvasRenderer;
}();

exports.default = CanvasRenderer;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getTotalWidthOfEncodings = exports.calculateEncodingAttributes = exports.getBarcodePadding = exports.getEncodingHeight = exports.getMaximumHeightOfEncodings = undefined;

var _merge = __webpack_require__(45);

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getEncodingHeight(encoding, options) {
	return options.height + (options.displayValue && encoding.text.length > 0 ? options.fontSize + options.textMargin : 0) + options.marginTop + options.marginBottom;
}

function getBarcodePadding(textWidth, barcodeWidth, options) {
	if (options.displayValue && barcodeWidth < textWidth) {
		if (options.textAlign == "center") {
			return Math.floor((textWidth - barcodeWidth) / 2);
		} else if (options.textAlign == "left") {
			return 0;
		} else if (options.textAlign == "right") {
			return Math.floor(textWidth - barcodeWidth);
		}
	}
	return 0;
}

function calculateEncodingAttributes(encodings, barcodeOptions, context) {
	for (var i = 0; i < encodings.length; i++) {
		var encoding = encodings[i];
		var options = (0, _merge2.default)(barcodeOptions, encoding.options);

		// Calculate the width of the encoding
		var textWidth;
		if (options.displayValue) {
			textWidth = messureText(encoding.text, options, context);
		} else {
			textWidth = 0;
		}

		var barcodeWidth = encoding.data.length * options.width;
		encoding.width = Math.ceil(Math.max(textWidth, barcodeWidth));

		encoding.height = getEncodingHeight(encoding, options);

		encoding.barcodePadding = getBarcodePadding(textWidth, barcodeWidth, options);
	}
}

function getTotalWidthOfEncodings(encodings) {
	var totalWidth = 0;
	for (var i = 0; i < encodings.length; i++) {
		totalWidth += encodings[i].width;
	}
	return totalWidth;
}

function getMaximumHeightOfEncodings(encodings) {
	var maxHeight = 0;
	for (var i = 0; i < encodings.length; i++) {
		if (encodings[i].height > maxHeight) {
			maxHeight = encodings[i].height;
		}
	}
	return maxHeight;
}

function messureText(string, options, context) {
	var ctx;

	if (context) {
		ctx = context;
	} else if (typeof document !== "undefined") {
		ctx = document.createElement("canvas").getContext("2d");
	} else {
		// If the text cannot be messured we will return 0.
		// This will make some barcode with big text render incorrectly
		return 0;
	}
	ctx.font = options.fontOptions + " " + options.fontSize + "px " + options.font;

	// Calculate the width of the encoding
	var size = ctx.measureText(string).width;

	return size;
}

exports.getMaximumHeightOfEncodings = getMaximumHeightOfEncodings;
exports.getEncodingHeight = getEncodingHeight;
exports.getBarcodePadding = getBarcodePadding;
exports.calculateEncodingAttributes = calculateEncodingAttributes;
exports.getTotalWidthOfEncodings = getTotalWidthOfEncodings;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _merge = __webpack_require__(45);

var _merge2 = _interopRequireDefault(_merge);

var _shared = __webpack_require__(54);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var svgns = "http://www.w3.org/2000/svg";

var SVGRenderer = function () {
	function SVGRenderer(svg, encodings, options) {
		_classCallCheck(this, SVGRenderer);

		this.svg = svg;
		this.encodings = encodings;
		this.options = options;
		this.document = options.xmlDocument || document;
	}

	_createClass(SVGRenderer, [{
		key: "render",
		value: function render() {
			var currentX = this.options.marginLeft;

			this.prepareSVG();
			for (var i = 0; i < this.encodings.length; i++) {
				var encoding = this.encodings[i];
				var encodingOptions = (0, _merge2.default)(this.options, encoding.options);

				var group = this.createGroup(currentX, encodingOptions.marginTop, this.svg);

				this.setGroupOptions(group, encodingOptions);

				this.drawSvgBarcode(group, encodingOptions, encoding);
				this.drawSVGText(group, encodingOptions, encoding);

				currentX += encoding.width;
			}
		}
	}, {
		key: "prepareSVG",
		value: function prepareSVG() {
			// Clear the SVG
			while (this.svg.firstChild) {
				this.svg.removeChild(this.svg.firstChild);
			}

			(0, _shared.calculateEncodingAttributes)(this.encodings, this.options);
			var totalWidth = (0, _shared.getTotalWidthOfEncodings)(this.encodings);
			var maxHeight = (0, _shared.getMaximumHeightOfEncodings)(this.encodings);

			var width = totalWidth + this.options.marginLeft + this.options.marginRight;
			this.setSvgAttributes(width, maxHeight);

			if (this.options.background) {
				this.drawRect(0, 0, width, maxHeight, this.svg).setAttribute("style", "fill:" + this.options.background + ";");
			}
		}
	}, {
		key: "drawSvgBarcode",
		value: function drawSvgBarcode(parent, options, encoding) {
			var binary = encoding.data;

			// Creates the barcode out of the encoded binary
			var yFrom;
			if (options.textPosition == "top") {
				yFrom = options.fontSize + options.textMargin;
			} else {
				yFrom = 0;
			}

			var barWidth = 0;
			var x = 0;
			for (var b = 0; b < binary.length; b++) {
				x = b * options.width + encoding.barcodePadding;

				if (binary[b] === "1") {
					barWidth++;
				} else if (barWidth > 0) {
					this.drawRect(x - options.width * barWidth, yFrom, options.width * barWidth, options.height, parent);
					barWidth = 0;
				}
			}

			// Last draw is needed since the barcode ends with 1
			if (barWidth > 0) {
				this.drawRect(x - options.width * (barWidth - 1), yFrom, options.width * barWidth, options.height, parent);
			}
		}
	}, {
		key: "drawSVGText",
		value: function drawSVGText(parent, options, encoding) {
			var textElem = this.document.createElementNS(svgns, 'text');

			// Draw the text if displayValue is set
			if (options.displayValue) {
				var x, y;

				textElem.setAttribute("style", "font:" + options.fontOptions + " " + options.fontSize + "px " + options.font);

				if (options.textPosition == "top") {
					y = options.fontSize - options.textMargin;
				} else {
					y = options.height + options.textMargin + options.fontSize;
				}

				// Draw the text in the correct X depending on the textAlign option
				if (options.textAlign == "left" || encoding.barcodePadding > 0) {
					x = 0;
					textElem.setAttribute("text-anchor", "start");
				} else if (options.textAlign == "right") {
					x = encoding.width - 1;
					textElem.setAttribute("text-anchor", "end");
				}
				// In all other cases, center the text
				else {
						x = encoding.width / 2;
						textElem.setAttribute("text-anchor", "middle");
					}

				textElem.setAttribute("x", x);
				textElem.setAttribute("y", y);

				textElem.appendChild(this.document.createTextNode(encoding.text));

				parent.appendChild(textElem);
			}
		}
	}, {
		key: "setSvgAttributes",
		value: function setSvgAttributes(width, height) {
			var svg = this.svg;
			svg.setAttribute("width", width + "px");
			svg.setAttribute("height", height + "px");
			svg.setAttribute("x", "0px");
			svg.setAttribute("y", "0px");
			svg.setAttribute("viewBox", "0 0 " + width + " " + height);

			svg.setAttribute("xmlns", svgns);
			svg.setAttribute("version", "1.1");

			svg.setAttribute("style", "transform: translate(0,0)");
		}
	}, {
		key: "createGroup",
		value: function createGroup(x, y, parent) {
			var group = this.document.createElementNS(svgns, 'g');
			group.setAttribute("transform", "translate(" + x + ", " + y + ")");

			parent.appendChild(group);

			return group;
		}
	}, {
		key: "setGroupOptions",
		value: function setGroupOptions(group, options) {
			group.setAttribute("style", "fill:" + options.lineColor + ";");
		}
	}, {
		key: "drawRect",
		value: function drawRect(x, y, width, height, parent) {
			var rect = this.document.createElementNS(svgns, 'rect');

			rect.setAttribute("x", x);
			rect.setAttribute("y", y);
			rect.setAttribute("width", width);
			rect.setAttribute("height", height);

			parent.appendChild(rect);

			return rect;
		}
	}]);

	return SVGRenderer;
}();

exports.default = SVGRenderer;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ObjectRenderer = function () {
	function ObjectRenderer(object, encodings, options) {
		_classCallCheck(this, ObjectRenderer);

		this.object = object;
		this.encodings = encodings;
		this.options = options;
	}

	_createClass(ObjectRenderer, [{
		key: "render",
		value: function render() {
			this.object.encodings = this.encodings;
		}
	}]);

	return ObjectRenderer;
}();

exports.default = ObjectRenderer;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InvalidInputException = function (_Error) {
	_inherits(InvalidInputException, _Error);

	function InvalidInputException(symbology, input) {
		_classCallCheck(this, InvalidInputException);

		var _this = _possibleConstructorReturn(this, (InvalidInputException.__proto__ || Object.getPrototypeOf(InvalidInputException)).call(this));

		_this.name = "InvalidInputException";

		_this.symbology = symbology;
		_this.input = input;

		_this.message = '"' + _this.input + '" is not a valid input for ' + _this.symbology;
		return _this;
	}

	return InvalidInputException;
}(Error);

var InvalidElementException = function (_Error2) {
	_inherits(InvalidElementException, _Error2);

	function InvalidElementException() {
		_classCallCheck(this, InvalidElementException);

		var _this2 = _possibleConstructorReturn(this, (InvalidElementException.__proto__ || Object.getPrototypeOf(InvalidElementException)).call(this));

		_this2.name = "InvalidElementException";
		_this2.message = "Not supported type to render on";
		return _this2;
	}

	return InvalidElementException;
}(Error);

var NoElementException = function (_Error3) {
	_inherits(NoElementException, _Error3);

	function NoElementException() {
		_classCallCheck(this, NoElementException);

		var _this3 = _possibleConstructorReturn(this, (NoElementException.__proto__ || Object.getPrototypeOf(NoElementException)).call(this));

		_this3.name = "NoElementException";
		_this3.message = "No element to render on.";
		return _this3;
	}

	return NoElementException;
}(Error);

exports.InvalidInputException = InvalidInputException;
exports.InvalidElementException = InvalidElementException;
exports.NoElementException = NoElementException;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*eslint no-console: 0 */

var ErrorHandler = function () {
	function ErrorHandler(api) {
		_classCallCheck(this, ErrorHandler);

		this.api = api;
	}

	_createClass(ErrorHandler, [{
		key: "handleCatch",
		value: function handleCatch(e) {
			// If babel supported extending of Error in a correct way instanceof would be used here
			if (e.name === "InvalidInputException") {
				if (this.api._options.valid !== this.api._defaults.valid) {
					this.api._options.valid(false);
				} else {
					throw e.message;
				}
			} else {
				throw e;
			}

			this.api.render = function () {};
		}
	}, {
		key: "wrapBarcodeCall",
		value: function wrapBarcodeCall(func) {
			try {
				var result = func.apply(undefined, arguments);
				this.api._options.valid(true);
				return result;
			} catch (e) {
				this.handleCatch(e);

				return this.api;
			}
		}
	}]);

	return ErrorHandler;
}();

exports.default = ErrorHandler;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileoverview
 * - Using the 'QRCode for Javascript library'
 * - Fixed dataset of 'QRCode for Javascript library' for support full-spec.
 * - this library has no dependencies.
 *
 * @author davidshimjs
 * @see <a href="http://www.d-project.com/" target="_blank">http://www.d-project.com/</a>
 * @see <a href="http://jeromeetienne.github.com/jquery-qrcode/" target="_blank">http://jeromeetienne.github.com/jquery-qrcode/</a>
 */
var QRCode;

(function (root, factory) {

	/* CommonJS */
  if (true) module.exports = factory()

  /* AMD module */
  else {}

}(this, function () {	//---------------------------------------------------------------------
	// QRCode for JavaScript
	//
	// Copyright (c) 2009 Kazuhiko Arase
	//
	// URL: http://www.d-project.com/
	//
	// Licensed under the MIT license:
	//   http://www.opensource.org/licenses/mit-license.php
	//
	// The word "QR Code" is registered trademark of
	// DENSO WAVE INCORPORATED
	//   http://www.denso-wave.com/qrcode/faqpatent-e.html
	//
	//---------------------------------------------------------------------
	function QR8bitByte(data) {
		this.mode = QRMode.MODE_8BIT_BYTE;
		this.data = data;
		this.parsedData = [];

		// Added to support UTF-8 Characters
		for (var i = 0, l = this.data.length; i < l; i++) {
			var byteArray = [];
			var code = this.data.charCodeAt(i);

			if (code > 0x10000) {
				byteArray[0] = 0xF0 | ((code & 0x1C0000) >>> 18);
				byteArray[1] = 0x80 | ((code & 0x3F000) >>> 12);
				byteArray[2] = 0x80 | ((code & 0xFC0) >>> 6);
				byteArray[3] = 0x80 | (code & 0x3F);
			} else if (code > 0x800) {
				byteArray[0] = 0xE0 | ((code & 0xF000) >>> 12);
				byteArray[1] = 0x80 | ((code & 0xFC0) >>> 6);
				byteArray[2] = 0x80 | (code & 0x3F);
			} else if (code > 0x80) {
				byteArray[0] = 0xC0 | ((code & 0x7C0) >>> 6);
				byteArray[1] = 0x80 | (code & 0x3F);
			} else {
				byteArray[0] = code;
			}

			this.parsedData.push(byteArray);
		}

		this.parsedData = Array.prototype.concat.apply([], this.parsedData);

		if (this.parsedData.length != this.data.length) {
			this.parsedData.unshift(191);
			this.parsedData.unshift(187);
			this.parsedData.unshift(239);
		}
	}

	QR8bitByte.prototype = {
		getLength: function (buffer) {
			return this.parsedData.length;
		},
		write: function (buffer) {
			for (var i = 0, l = this.parsedData.length; i < l; i++) {
				buffer.put(this.parsedData[i], 8);
			}
		}
	};

	function QRCodeModel(typeNumber, errorCorrectLevel) {
		this.typeNumber = typeNumber;
		this.errorCorrectLevel = errorCorrectLevel;
		this.modules = null;
		this.moduleCount = 0;
		this.dataCache = null;
		this.dataList = [];
	}

	QRCodeModel.prototype={addData:function(data){var newData=new QR8bitByte(data);this.dataList.push(newData);this.dataCache=null;},isDark:function(row,col){if(row<0||this.moduleCount<=row||col<0||this.moduleCount<=col){throw new Error(row+","+col);}
	return this.modules[row][col];},getModuleCount:function(){return this.moduleCount;},make:function(){this.makeImpl(false,this.getBestMaskPattern());},makeImpl:function(test,maskPattern){this.moduleCount=this.typeNumber*4+17;this.modules=new Array(this.moduleCount);for(var row=0;row<this.moduleCount;row++){this.modules[row]=new Array(this.moduleCount);for(var col=0;col<this.moduleCount;col++){this.modules[row][col]=null;}}
	this.setupPositionProbePattern(0,0);this.setupPositionProbePattern(this.moduleCount-7,0);this.setupPositionProbePattern(0,this.moduleCount-7);this.setupPositionAdjustPattern();this.setupTimingPattern();this.setupTypeInfo(test,maskPattern);if(this.typeNumber>=7){this.setupTypeNumber(test);}
	if(this.dataCache==null){this.dataCache=QRCodeModel.createData(this.typeNumber,this.errorCorrectLevel,this.dataList);}
	this.mapData(this.dataCache,maskPattern);},setupPositionProbePattern:function(row,col){for(var r=-1;r<=7;r++){if(row+r<=-1||this.moduleCount<=row+r)continue;for(var c=-1;c<=7;c++){if(col+c<=-1||this.moduleCount<=col+c)continue;if((0<=r&&r<=6&&(c==0||c==6))||(0<=c&&c<=6&&(r==0||r==6))||(2<=r&&r<=4&&2<=c&&c<=4)){this.modules[row+r][col+c]=true;}else{this.modules[row+r][col+c]=false;}}}},getBestMaskPattern:function(){var minLostPoint=0;var pattern=0;for(var i=0;i<8;i++){this.makeImpl(true,i);var lostPoint=QRUtil.getLostPoint(this);if(i==0||minLostPoint>lostPoint){minLostPoint=lostPoint;pattern=i;}}
	return pattern;},createMovieClip:function(target_mc,instance_name,depth){var qr_mc=target_mc.createEmptyMovieClip(instance_name,depth);var cs=1;this.make();for(var row=0;row<this.modules.length;row++){var y=row*cs;for(var col=0;col<this.modules[row].length;col++){var x=col*cs;var dark=this.modules[row][col];if(dark){qr_mc.beginFill(0,100);qr_mc.moveTo(x,y);qr_mc.lineTo(x+cs,y);qr_mc.lineTo(x+cs,y+cs);qr_mc.lineTo(x,y+cs);qr_mc.endFill();}}}
	return qr_mc;},setupTimingPattern:function(){for(var r=8;r<this.moduleCount-8;r++){if(this.modules[r][6]!=null){continue;}
	this.modules[r][6]=(r%2==0);}
	for(var c=8;c<this.moduleCount-8;c++){if(this.modules[6][c]!=null){continue;}
	this.modules[6][c]=(c%2==0);}},setupPositionAdjustPattern:function(){var pos=QRUtil.getPatternPosition(this.typeNumber);for(var i=0;i<pos.length;i++){for(var j=0;j<pos.length;j++){var row=pos[i];var col=pos[j];if(this.modules[row][col]!=null){continue;}
	for(var r=-2;r<=2;r++){for(var c=-2;c<=2;c++){if(r==-2||r==2||c==-2||c==2||(r==0&&c==0)){this.modules[row+r][col+c]=true;}else{this.modules[row+r][col+c]=false;}}}}}},setupTypeNumber:function(test){var bits=QRUtil.getBCHTypeNumber(this.typeNumber);for(var i=0;i<18;i++){var mod=(!test&&((bits>>i)&1)==1);this.modules[Math.floor(i/3)][i%3+this.moduleCount-8-3]=mod;}
	for(var i=0;i<18;i++){var mod=(!test&&((bits>>i)&1)==1);this.modules[i%3+this.moduleCount-8-3][Math.floor(i/3)]=mod;}},setupTypeInfo:function(test,maskPattern){var data=(this.errorCorrectLevel<<3)|maskPattern;var bits=QRUtil.getBCHTypeInfo(data);for(var i=0;i<15;i++){var mod=(!test&&((bits>>i)&1)==1);if(i<6){this.modules[i][8]=mod;}else if(i<8){this.modules[i+1][8]=mod;}else{this.modules[this.moduleCount-15+i][8]=mod;}}
	for(var i=0;i<15;i++){var mod=(!test&&((bits>>i)&1)==1);if(i<8){this.modules[8][this.moduleCount-i-1]=mod;}else if(i<9){this.modules[8][15-i-1+1]=mod;}else{this.modules[8][15-i-1]=mod;}}
	this.modules[this.moduleCount-8][8]=(!test);},mapData:function(data,maskPattern){var inc=-1;var row=this.moduleCount-1;var bitIndex=7;var byteIndex=0;for(var col=this.moduleCount-1;col>0;col-=2){if(col==6)col--;while(true){for(var c=0;c<2;c++){if(this.modules[row][col-c]==null){var dark=false;if(byteIndex<data.length){dark=(((data[byteIndex]>>>bitIndex)&1)==1);}
	var mask=QRUtil.getMask(maskPattern,row,col-c);if(mask){dark=!dark;}
	this.modules[row][col-c]=dark;bitIndex--;if(bitIndex==-1){byteIndex++;bitIndex=7;}}}
	row+=inc;if(row<0||this.moduleCount<=row){row-=inc;inc=-inc;break;}}}}};QRCodeModel.PAD0=0xEC;QRCodeModel.PAD1=0x11;QRCodeModel.createData=function(typeNumber,errorCorrectLevel,dataList){var rsBlocks=QRRSBlock.getRSBlocks(typeNumber,errorCorrectLevel);var buffer=new QRBitBuffer();for(var i=0;i<dataList.length;i++){var data=dataList[i];buffer.put(data.mode,4);buffer.put(data.getLength(),QRUtil.getLengthInBits(data.mode,typeNumber));data.write(buffer);}
	var totalDataCount=0;for(var i=0;i<rsBlocks.length;i++){totalDataCount+=rsBlocks[i].dataCount;}
	if(buffer.getLengthInBits()>totalDataCount*8){throw new Error("code length overflow. ("
	+buffer.getLengthInBits()
	+">"
	+totalDataCount*8
	+")");}
	if(buffer.getLengthInBits()+4<=totalDataCount*8){buffer.put(0,4);}
	while(buffer.getLengthInBits()%8!=0){buffer.putBit(false);}
	while(true){if(buffer.getLengthInBits()>=totalDataCount*8){break;}
	buffer.put(QRCodeModel.PAD0,8);if(buffer.getLengthInBits()>=totalDataCount*8){break;}
	buffer.put(QRCodeModel.PAD1,8);}
	return QRCodeModel.createBytes(buffer,rsBlocks);};QRCodeModel.createBytes=function(buffer,rsBlocks){var offset=0;var maxDcCount=0;var maxEcCount=0;var dcdata=new Array(rsBlocks.length);var ecdata=new Array(rsBlocks.length);for(var r=0;r<rsBlocks.length;r++){var dcCount=rsBlocks[r].dataCount;var ecCount=rsBlocks[r].totalCount-dcCount;maxDcCount=Math.max(maxDcCount,dcCount);maxEcCount=Math.max(maxEcCount,ecCount);dcdata[r]=new Array(dcCount);for(var i=0;i<dcdata[r].length;i++){dcdata[r][i]=0xff&buffer.buffer[i+offset];}
	offset+=dcCount;var rsPoly=QRUtil.getErrorCorrectPolynomial(ecCount);var rawPoly=new QRPolynomial(dcdata[r],rsPoly.getLength()-1);var modPoly=rawPoly.mod(rsPoly);ecdata[r]=new Array(rsPoly.getLength()-1);for(var i=0;i<ecdata[r].length;i++){var modIndex=i+modPoly.getLength()-ecdata[r].length;ecdata[r][i]=(modIndex>=0)?modPoly.get(modIndex):0;}}
	var totalCodeCount=0;for(var i=0;i<rsBlocks.length;i++){totalCodeCount+=rsBlocks[i].totalCount;}
	var data=new Array(totalCodeCount);var index=0;for(var i=0;i<maxDcCount;i++){for(var r=0;r<rsBlocks.length;r++){if(i<dcdata[r].length){data[index++]=dcdata[r][i];}}}
	for(var i=0;i<maxEcCount;i++){for(var r=0;r<rsBlocks.length;r++){if(i<ecdata[r].length){data[index++]=ecdata[r][i];}}}
	return data;};var QRMode={MODE_NUMBER:1<<0,MODE_ALPHA_NUM:1<<1,MODE_8BIT_BYTE:1<<2,MODE_KANJI:1<<3};var QRErrorCorrectLevel={L:1,M:0,Q:3,H:2};var QRMaskPattern={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};var QRUtil={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:(1<<10)|(1<<8)|(1<<5)|(1<<4)|(1<<2)|(1<<1)|(1<<0),G18:(1<<12)|(1<<11)|(1<<10)|(1<<9)|(1<<8)|(1<<5)|(1<<2)|(1<<0),G15_MASK:(1<<14)|(1<<12)|(1<<10)|(1<<4)|(1<<1),getBCHTypeInfo:function(data){var d=data<<10;while(QRUtil.getBCHDigit(d)-QRUtil.getBCHDigit(QRUtil.G15)>=0){d^=(QRUtil.G15<<(QRUtil.getBCHDigit(d)-QRUtil.getBCHDigit(QRUtil.G15)));}
	return((data<<10)|d)^QRUtil.G15_MASK;},getBCHTypeNumber:function(data){var d=data<<12;while(QRUtil.getBCHDigit(d)-QRUtil.getBCHDigit(QRUtil.G18)>=0){d^=(QRUtil.G18<<(QRUtil.getBCHDigit(d)-QRUtil.getBCHDigit(QRUtil.G18)));}
	return(data<<12)|d;},getBCHDigit:function(data){var digit=0;while(data!=0){digit++;data>>>=1;}
	return digit;},getPatternPosition:function(typeNumber){return QRUtil.PATTERN_POSITION_TABLE[typeNumber-1];},getMask:function(maskPattern,i,j){switch(maskPattern){case QRMaskPattern.PATTERN000:return(i+j)%2==0;case QRMaskPattern.PATTERN001:return i%2==0;case QRMaskPattern.PATTERN010:return j%3==0;case QRMaskPattern.PATTERN011:return(i+j)%3==0;case QRMaskPattern.PATTERN100:return(Math.floor(i/2)+Math.floor(j/3))%2==0;case QRMaskPattern.PATTERN101:return(i*j)%2+(i*j)%3==0;case QRMaskPattern.PATTERN110:return((i*j)%2+(i*j)%3)%2==0;case QRMaskPattern.PATTERN111:return((i*j)%3+(i+j)%2)%2==0;default:throw new Error("bad maskPattern:"+maskPattern);}},getErrorCorrectPolynomial:function(errorCorrectLength){var a=new QRPolynomial([1],0);for(var i=0;i<errorCorrectLength;i++){a=a.multiply(new QRPolynomial([1,QRMath.gexp(i)],0));}
	return a;},getLengthInBits:function(mode,type){if(1<=type&&type<10){switch(mode){case QRMode.MODE_NUMBER:return 10;case QRMode.MODE_ALPHA_NUM:return 9;case QRMode.MODE_8BIT_BYTE:return 8;case QRMode.MODE_KANJI:return 8;default:throw new Error("mode:"+mode);}}else if(type<27){switch(mode){case QRMode.MODE_NUMBER:return 12;case QRMode.MODE_ALPHA_NUM:return 11;case QRMode.MODE_8BIT_BYTE:return 16;case QRMode.MODE_KANJI:return 10;default:throw new Error("mode:"+mode);}}else if(type<41){switch(mode){case QRMode.MODE_NUMBER:return 14;case QRMode.MODE_ALPHA_NUM:return 13;case QRMode.MODE_8BIT_BYTE:return 16;case QRMode.MODE_KANJI:return 12;default:throw new Error("mode:"+mode);}}else{throw new Error("type:"+type);}},getLostPoint:function(qrCode){var moduleCount=qrCode.getModuleCount();var lostPoint=0;for(var row=0;row<moduleCount;row++){for(var col=0;col<moduleCount;col++){var sameCount=0;var dark=qrCode.isDark(row,col);for(var r=-1;r<=1;r++){if(row+r<0||moduleCount<=row+r){continue;}
	for(var c=-1;c<=1;c++){if(col+c<0||moduleCount<=col+c){continue;}
	if(r==0&&c==0){continue;}
	if(dark==qrCode.isDark(row+r,col+c)){sameCount++;}}}
	if(sameCount>5){lostPoint+=(3+sameCount-5);}}}
	for(var row=0;row<moduleCount-1;row++){for(var col=0;col<moduleCount-1;col++){var count=0;if(qrCode.isDark(row,col))count++;if(qrCode.isDark(row+1,col))count++;if(qrCode.isDark(row,col+1))count++;if(qrCode.isDark(row+1,col+1))count++;if(count==0||count==4){lostPoint+=3;}}}
	for(var row=0;row<moduleCount;row++){for(var col=0;col<moduleCount-6;col++){if(qrCode.isDark(row,col)&&!qrCode.isDark(row,col+1)&&qrCode.isDark(row,col+2)&&qrCode.isDark(row,col+3)&&qrCode.isDark(row,col+4)&&!qrCode.isDark(row,col+5)&&qrCode.isDark(row,col+6)){lostPoint+=40;}}}
	for(var col=0;col<moduleCount;col++){for(var row=0;row<moduleCount-6;row++){if(qrCode.isDark(row,col)&&!qrCode.isDark(row+1,col)&&qrCode.isDark(row+2,col)&&qrCode.isDark(row+3,col)&&qrCode.isDark(row+4,col)&&!qrCode.isDark(row+5,col)&&qrCode.isDark(row+6,col)){lostPoint+=40;}}}
	var darkCount=0;for(var col=0;col<moduleCount;col++){for(var row=0;row<moduleCount;row++){if(qrCode.isDark(row,col)){darkCount++;}}}
	var ratio=Math.abs(100*darkCount/moduleCount/moduleCount-50)/5;lostPoint+=ratio*10;return lostPoint;}};var QRMath={glog:function(n){if(n<1){throw new Error("glog("+n+")");}
	return QRMath.LOG_TABLE[n];},gexp:function(n){while(n<0){n+=255;}
	while(n>=256){n-=255;}
	return QRMath.EXP_TABLE[n];},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)};for(var i=0;i<8;i++){QRMath.EXP_TABLE[i]=1<<i;}
	for(var i=8;i<256;i++){QRMath.EXP_TABLE[i]=QRMath.EXP_TABLE[i-4]^QRMath.EXP_TABLE[i-5]^QRMath.EXP_TABLE[i-6]^QRMath.EXP_TABLE[i-8];}
	for(var i=0;i<255;i++){QRMath.LOG_TABLE[QRMath.EXP_TABLE[i]]=i;}
	function QRPolynomial(num,shift){if(num.length==undefined){throw new Error(num.length+"/"+shift);}
	var offset=0;while(offset<num.length&&num[offset]==0){offset++;}
	this.num=new Array(num.length-offset+shift);for(var i=0;i<num.length-offset;i++){this.num[i]=num[i+offset];}}
	QRPolynomial.prototype={get:function(index){return this.num[index];},getLength:function(){return this.num.length;},multiply:function(e){var num=new Array(this.getLength()+e.getLength()-1);for(var i=0;i<this.getLength();i++){for(var j=0;j<e.getLength();j++){num[i+j]^=QRMath.gexp(QRMath.glog(this.get(i))+QRMath.glog(e.get(j)));}}
	return new QRPolynomial(num,0);},mod:function(e){if(this.getLength()-e.getLength()<0){return this;}
	var ratio=QRMath.glog(this.get(0))-QRMath.glog(e.get(0));var num=new Array(this.getLength());for(var i=0;i<this.getLength();i++){num[i]=this.get(i);}
	for(var i=0;i<e.getLength();i++){num[i]^=QRMath.gexp(QRMath.glog(e.get(i))+ratio);}
	return new QRPolynomial(num,0).mod(e);}};function QRRSBlock(totalCount,dataCount){this.totalCount=totalCount;this.dataCount=dataCount;}
	QRRSBlock.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]];QRRSBlock.getRSBlocks=function(typeNumber,errorCorrectLevel){var rsBlock=QRRSBlock.getRsBlockTable(typeNumber,errorCorrectLevel);if(rsBlock==undefined){throw new Error("bad rs block @ typeNumber:"+typeNumber+"/errorCorrectLevel:"+errorCorrectLevel);}
	var length=rsBlock.length/3;var list=[];for(var i=0;i<length;i++){var count=rsBlock[i*3+0];var totalCount=rsBlock[i*3+1];var dataCount=rsBlock[i*3+2];for(var j=0;j<count;j++){list.push(new QRRSBlock(totalCount,dataCount));}}
	return list;};QRRSBlock.getRsBlockTable=function(typeNumber,errorCorrectLevel){switch(errorCorrectLevel){case QRErrorCorrectLevel.L:return QRRSBlock.RS_BLOCK_TABLE[(typeNumber-1)*4+0];case QRErrorCorrectLevel.M:return QRRSBlock.RS_BLOCK_TABLE[(typeNumber-1)*4+1];case QRErrorCorrectLevel.Q:return QRRSBlock.RS_BLOCK_TABLE[(typeNumber-1)*4+2];case QRErrorCorrectLevel.H:return QRRSBlock.RS_BLOCK_TABLE[(typeNumber-1)*4+3];default:return undefined;}};function QRBitBuffer(){this.buffer=[];this.length=0;}
	QRBitBuffer.prototype={get:function(index){var bufIndex=Math.floor(index/8);return((this.buffer[bufIndex]>>>(7-index%8))&1)==1;},put:function(num,length){for(var i=0;i<length;i++){this.putBit(((num>>>(length-i-1))&1)==1);}},getLengthInBits:function(){return this.length;},putBit:function(bit){var bufIndex=Math.floor(this.length/8);if(this.buffer.length<=bufIndex){this.buffer.push(0);}
	if(bit){this.buffer[bufIndex]|=(0x80>>>(this.length%8));}
	this.length++;}};var QRCodeLimitLength=[[17,14,11,7],[32,26,20,14],[53,42,32,24],[78,62,46,34],[106,84,60,44],[134,106,74,58],[154,122,86,64],[192,152,108,84],[230,180,130,98],[271,213,151,119],[321,251,177,137],[367,287,203,155],[425,331,241,177],[458,362,258,194],[520,412,292,220],[586,450,322,250],[644,504,364,280],[718,560,394,310],[792,624,442,338],[858,666,482,382],[929,711,509,403],[1003,779,565,439],[1091,857,611,461],[1171,911,661,511],[1273,997,715,535],[1367,1059,751,593],[1465,1125,805,625],[1528,1190,868,658],[1628,1264,908,698],[1732,1370,982,742],[1840,1452,1030,790],[1952,1538,1112,842],[2068,1628,1168,898],[2188,1722,1228,958],[2303,1809,1283,983],[2431,1911,1351,1051],[2563,1989,1423,1093],[2699,2099,1499,1139],[2809,2213,1579,1219],[2953,2331,1663,1273]];

	function _isSupportCanvas() {
		return typeof CanvasRenderingContext2D != "undefined";
	}

	// android 2.x doesn't support Data-URI spec
	function _getAndroid() {
		var android = false;
		var sAgent = navigator.userAgent;

		if (/android/i.test(sAgent)) { // android
			android = true;
			var aMat = sAgent.toString().match(/android ([0-9]\.[0-9])/i);

			if (aMat && aMat[1]) {
				android = parseFloat(aMat[1]);
			}
		}

		return android;
	}

	var svgDrawer = (function() {

		var Drawing = function (el, htOption) {
			this._el = el;
			this._htOption = htOption;
		};

		Drawing.prototype.draw = function (oQRCode) {
			var _htOption = this._htOption;
			var _el = this._el;
			var nCount = oQRCode.getModuleCount();
			var nWidth = Math.floor(_htOption.width / nCount);
			var nHeight = Math.floor(_htOption.height / nCount);

			this.clear();

			function makeSVG(tag, attrs) {
				var el = document.createElementNS('http://www.w3.org/2000/svg', tag);
				for (var k in attrs)
					if (attrs.hasOwnProperty(k)) el.setAttribute(k, attrs[k]);
				return el;
			}

			var svg = makeSVG("svg" , {'viewBox': '0 0 ' + String(nCount) + " " + String(nCount), 'width': '100%', 'height': '100%', 'fill': _htOption.colorLight});
			svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
			_el.appendChild(svg);

			svg.appendChild(makeSVG("rect", {"fill": _htOption.colorLight, "width": "100%", "height": "100%"}));
			svg.appendChild(makeSVG("rect", {"fill": _htOption.colorDark, "width": "1", "height": "1", "id": "template"}));

			for (var row = 0; row < nCount; row++) {
				for (var col = 0; col < nCount; col++) {
					if (oQRCode.isDark(row, col)) {
						var child = makeSVG("use", {"x": String(col), "y": String(row)});
						child.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#template")
						svg.appendChild(child);
					}
				}
			}
		};
		Drawing.prototype.clear = function () {
			while (this._el.hasChildNodes())
				this._el.removeChild(this._el.lastChild);
		};
		return Drawing;
	})();

	var useSVG = document.documentElement.tagName.toLowerCase() === "svg";

	// Drawing in DOM by using Table tag
	var Drawing = useSVG ? svgDrawer : !_isSupportCanvas() ? (function () {
		var Drawing = function (el, htOption) {
			this._el = el;
			this._htOption = htOption;
		};

		/**
		 * Draw the QRCode
		 *
		 * @param {QRCode} oQRCode
		 */
		Drawing.prototype.draw = function (oQRCode) {
            var _htOption = this._htOption;
            var _el = this._el;
			var nCount = oQRCode.getModuleCount();
			var nWidth = Math.floor(_htOption.width / nCount);
			var nHeight = Math.floor(_htOption.height / nCount);
			var aHTML = ['<table style="border:0;border-collapse:collapse;">'];

			for (var row = 0; row < nCount; row++) {
				aHTML.push('<tr>');

				for (var col = 0; col < nCount; col++) {
					aHTML.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:' + nWidth + 'px;height:' + nHeight + 'px;background-color:' + (oQRCode.isDark(row, col) ? _htOption.colorDark : _htOption.colorLight) + ';"></td>');
				}

				aHTML.push('</tr>');
			}

			aHTML.push('</table>');
			_el.innerHTML = aHTML.join('');

			// Fix the margin values as real size.
			var elTable = _el.childNodes[0];
			var nLeftMarginTable = (_htOption.width - elTable.offsetWidth) / 2;
			var nTopMarginTable = (_htOption.height - elTable.offsetHeight) / 2;

			if (nLeftMarginTable > 0 && nTopMarginTable > 0) {
				elTable.style.margin = nTopMarginTable + "px " + nLeftMarginTable + "px";
			}
		};

		/**
		 * Clear the QRCode
		 */
		Drawing.prototype.clear = function () {
			this._el.innerHTML = '';
		};

		return Drawing;
	})() : (function () { // Drawing in Canvas
		function _onMakeImage() {
			this._elImage.src = this._elCanvas.toDataURL("image/png");
			this._elImage.style.display = "block";
			this._elCanvas.style.display = "none";
		}

		// Android 2.1 bug workaround
		// http://code.google.com/p/android/issues/detail?id=5141
		if (this._android && this._android <= 2.1) {
	    	var factor = 1 / window.devicePixelRatio;
	        var drawImage = CanvasRenderingContext2D.prototype.drawImage;
	    	CanvasRenderingContext2D.prototype.drawImage = function (image, sx, sy, sw, sh, dx, dy, dw, dh) {
	    		if (("nodeName" in image) && /img/i.test(image.nodeName)) {
		        	for (var i = arguments.length - 1; i >= 1; i--) {
		            	arguments[i] = arguments[i] * factor;
		        	}
	    		} else if (typeof dw == "undefined") {
	    			arguments[1] *= factor;
	    			arguments[2] *= factor;
	    			arguments[3] *= factor;
	    			arguments[4] *= factor;
	    		}

	        	drawImage.apply(this, arguments);
	    	};
		}

		/**
		 * Check whether the user's browser supports Data URI or not
		 *
		 * @private
		 * @param {Function} fSuccess Occurs if it supports Data URI
		 * @param {Function} fFail Occurs if it doesn't support Data URI
		 */
		function _safeSetDataURI(fSuccess, fFail) {
            var self = this;
            self._fFail = fFail;
            self._fSuccess = fSuccess;

            // Check it just once
            if (self._bSupportDataURI === null) {
                var el = document.createElement("img");
                var fOnError = function() {
                    self._bSupportDataURI = false;

                    if (self._fFail) {
                        self._fFail.call(self);
                    }
                };
                var fOnSuccess = function() {
                    self._bSupportDataURI = true;

                    if (self._fSuccess) {
                        self._fSuccess.call(self);
                    }
                };

                el.onabort = fOnError;
                el.onerror = fOnError;
                el.onload = fOnSuccess;
                el.src = "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=="; // the Image contains 1px data.
                return;
            } else if (self._bSupportDataURI === true && self._fSuccess) {
                self._fSuccess.call(self);
            } else if (self._bSupportDataURI === false && self._fFail) {
                self._fFail.call(self);
            }
		};

		/**
		 * Drawing QRCode by using canvas
		 *
		 * @constructor
		 * @param {HTMLElement} el
		 * @param {Object} htOption QRCode Options
		 */
		var Drawing = function (el, htOption) {
    		this._bIsPainted = false;
    		this._android = _getAndroid();

			this._htOption = htOption;
			this._elCanvas = document.createElement("canvas");
			this._elCanvas.width = htOption.width;
			this._elCanvas.height = htOption.height;
			el.appendChild(this._elCanvas);
			this._el = el;
			this._oContext = this._elCanvas.getContext("2d");
			this._bIsPainted = false;
			this._elImage = document.createElement("img");
			this._elImage.alt = "Scan me!";
			this._elImage.style.display = "none";
			this._el.appendChild(this._elImage);
			this._bSupportDataURI = null;
		};

		/**
		 * Draw the QRCode
		 *
		 * @param {QRCode} oQRCode
		 */
		Drawing.prototype.draw = function (oQRCode) {
            var _elImage = this._elImage;
            var _oContext = this._oContext;
            var _htOption = this._htOption;

			var nCount = oQRCode.getModuleCount();
			var nWidth = _htOption.width / nCount;
			var nHeight = _htOption.height / nCount;
			var nRoundedWidth = Math.round(nWidth);
			var nRoundedHeight = Math.round(nHeight);

			_elImage.style.display = "none";
			this.clear();

			for (var row = 0; row < nCount; row++) {
				for (var col = 0; col < nCount; col++) {
					var bIsDark = oQRCode.isDark(row, col);
					var nLeft = col * nWidth;
					var nTop = row * nHeight;
					_oContext.strokeStyle = bIsDark ? _htOption.colorDark : _htOption.colorLight;
					_oContext.lineWidth = 1;
					_oContext.fillStyle = bIsDark ? _htOption.colorDark : _htOption.colorLight;
					_oContext.fillRect(nLeft, nTop, nWidth, nHeight);

					// 안티 앨리어싱 방지 처리
					_oContext.strokeRect(
						Math.floor(nLeft) + 0.5,
						Math.floor(nTop) + 0.5,
						nRoundedWidth,
						nRoundedHeight
					);

					_oContext.strokeRect(
						Math.ceil(nLeft) - 0.5,
						Math.ceil(nTop) - 0.5,
						nRoundedWidth,
						nRoundedHeight
					);
				}
			}

			this._bIsPainted = true;
		};

		/**
		 * Make the image from Canvas if the browser supports Data URI.
		 */
		Drawing.prototype.makeImage = function () {
			if (this._bIsPainted) {
				_safeSetDataURI.call(this, _onMakeImage);
			}
		};

		/**
		 * Return whether the QRCode is painted or not
		 *
		 * @return {Boolean}
		 */
		Drawing.prototype.isPainted = function () {
			return this._bIsPainted;
		};

		/**
		 * Clear the QRCode
		 */
		Drawing.prototype.clear = function () {
			this._oContext.clearRect(0, 0, this._elCanvas.width, this._elCanvas.height);
			this._bIsPainted = false;
		};

		/**
		 * @private
		 * @param {Number} nNumber
		 */
		Drawing.prototype.round = function (nNumber) {
			if (!nNumber) {
				return nNumber;
			}

			return Math.floor(nNumber * 1000) / 1000;
		};

		return Drawing;
	})();

	/**
	 * Get the type by string length
	 *
	 * @private
	 * @param {String} sText
	 * @param {Number} nCorrectLevel
	 * @return {Number} type
	 */
	function _getTypeNumber(sText, nCorrectLevel) {
		var nType = 1;
		var length = _getUTF8Length(sText);

		for (var i = 0, len = QRCodeLimitLength.length; i <= len; i++) {
			var nLimit = 0;

			switch (nCorrectLevel) {
				case QRErrorCorrectLevel.L :
					nLimit = QRCodeLimitLength[i][0];
					break;
				case QRErrorCorrectLevel.M :
					nLimit = QRCodeLimitLength[i][1];
					break;
				case QRErrorCorrectLevel.Q :
					nLimit = QRCodeLimitLength[i][2];
					break;
				case QRErrorCorrectLevel.H :
					nLimit = QRCodeLimitLength[i][3];
					break;
			}

			if (length <= nLimit) {
				break;
			} else {
				nType++;
			}
		}

		if (nType > QRCodeLimitLength.length) {
			throw new Error("Too long data");
		}

		return nType;
	}

	function _getUTF8Length(sText) {
		var replacedText = encodeURI(sText).toString().replace(/\%[0-9a-fA-F]{2}/g, 'a');
		return replacedText.length + (replacedText.length != sText ? 3 : 0);
	}

	/**
	 * @class QRCode
	 * @constructor
	 * @example
	 * new QRCode(document.getElementById("test"), "http://jindo.dev.naver.com/collie");
	 *
	 * @example
	 * var oQRCode = new QRCode("test", {
	 *    text : "http://naver.com",
	 *    width : 128,
	 *    height : 128
	 * });
	 *
	 * oQRCode.clear(); // Clear the QRCode.
	 * oQRCode.makeCode("http://map.naver.com"); // Re-create the QRCode.
	 *
	 * @param {HTMLElement|String} el target element or 'id' attribute of element.
	 * @param {Object|String} vOption
	 * @param {String} vOption.text QRCode link data
	 * @param {Number} [vOption.width=256]
	 * @param {Number} [vOption.height=256]
	 * @param {String} [vOption.colorDark="#000000"]
	 * @param {String} [vOption.colorLight="#ffffff"]
	 * @param {QRCode.CorrectLevel} [vOption.correctLevel=QRCode.CorrectLevel.H] [L|M|Q|H]
	 */
	QRCode = function (el, vOption) {
		this._htOption = {
			width : 256,
			height : 256,
			typeNumber : 4,
			colorDark : "#000000",
			colorLight : "#ffffff",
			correctLevel : QRErrorCorrectLevel.H
		};

		if (typeof vOption === 'string') {
			vOption	= {
				text : vOption
			};
		}

		// Overwrites options
		if (vOption) {
			for (var i in vOption) {
				this._htOption[i] = vOption[i];
			}
		}

		if (typeof el == "string") {
			el = document.getElementById(el);
		}

		if (this._htOption.useSVG) {
			Drawing = svgDrawer;
		}

		this._android = _getAndroid();
		this._el = el;
		this._oQRCode = null;
		this._oDrawing = new Drawing(this._el, this._htOption);

		if (this._htOption.text) {
			this.makeCode(this._htOption.text);
		}
	};

	/**
	 * Make the QRCode
	 *
	 * @param {String} sText link data
	 */
	QRCode.prototype.makeCode = function (sText) {
		this._oQRCode = new QRCodeModel(_getTypeNumber(sText, this._htOption.correctLevel), this._htOption.correctLevel);
		this._oQRCode.addData(sText);
		this._oQRCode.make();
		this._el.title = sText;
		this._oDrawing.draw(this._oQRCode);
		this.makeImage();
	};

	/**
	 * Make the Image from Canvas element
	 * - It occurs automatically
	 * - Android below 3 doesn't support Data-URI spec.
	 *
	 * @private
	 */
	QRCode.prototype.makeImage = function () {
		if (typeof this._oDrawing.makeImage == "function" && (!this._android || this._android >= 3)) {
			this._oDrawing.makeImage();
		}
	};

	/**
	 * Clear the QRCode
	 */
	QRCode.prototype.clear = function () {
		this._oDrawing.clear();
	};

	/**
	 * @name QRCode.CorrectLevel
	 */
	QRCode.CorrectLevel = QRErrorCorrectLevel;
	
	return QRCode;
	
}));


/***/ })
/******/ ]);