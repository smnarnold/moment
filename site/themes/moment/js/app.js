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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/throttle-debounce/dist/index.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/throttle-debounce/dist/index.esm.js ***!
  \**********************************************************/
/*! exports provided: throttle, debounce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
/* eslint-disable no-undefined,no-param-reassign,no-shadow */

/**
 * Throttle execution of a function. Especially useful for rate limiting
 * execution of handlers on events like resize and scroll.
 *
 * @param  {Number}    delay          A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 * @param  {Boolean}   [noTrailing]   Optional, defaults to false. If noTrailing is true, callback will only execute every `delay` milliseconds while the
 *                                    throttled-function is being called. If noTrailing is false or unspecified, callback will be executed one final time
 *                                    after the last throttled-function call. (After the throttled-function has not been called for `delay` milliseconds,
 *                                    the internal counter is reset)
 * @param  {Function}  callback       A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
 *                                    to `callback` when the throttled-function is executed.
 * @param  {Boolean}   [debounceMode] If `debounceMode` is true (at begin), schedule `clear` to execute after `delay` ms. If `debounceMode` is false (at end),
 *                                    schedule `callback` to execute after `delay` ms.
 *
 * @return {Function}  A new, throttled, function.
 */
function throttle (delay, noTrailing, callback, debounceMode) {
  /*
   * After wrapper has stopped being called, this timeout ensures that
   * `callback` is executed at the proper times in `throttle` and `end`
   * debounce modes.
   */
  var timeoutID;
  var cancelled = false; // Keep track of the last time `callback` was executed.

  var lastExec = 0; // Function to clear existing timeout

  function clearExistingTimeout() {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
  } // Function to cancel next exec


  function cancel() {
    clearExistingTimeout();
    cancelled = true;
  } // `noTrailing` defaults to falsy.


  if (typeof noTrailing !== 'boolean') {
    debounceMode = callback;
    callback = noTrailing;
    noTrailing = undefined;
  }
  /*
   * The `wrapper` function encapsulates all of the throttling / debouncing
   * functionality and when executed will limit the rate at which `callback`
   * is executed.
   */


  function wrapper() {
    var self = this;
    var elapsed = Date.now() - lastExec;
    var args = arguments;

    if (cancelled) {
      return;
    } // Execute `callback` and update the `lastExec` timestamp.


    function exec() {
      lastExec = Date.now();
      callback.apply(self, args);
    }
    /*
     * If `debounceMode` is true (at begin) this is used to clear the flag
     * to allow future `callback` executions.
     */


    function clear() {
      timeoutID = undefined;
    }

    if (debounceMode && !timeoutID) {
      /*
       * Since `wrapper` is being called for the first time and
       * `debounceMode` is true (at begin), execute `callback`.
       */
      exec();
    }

    clearExistingTimeout();

    if (debounceMode === undefined && elapsed > delay) {
      /*
       * In throttle mode, if `delay` time has been exceeded, execute
       * `callback`.
       */
      exec();
    } else if (noTrailing !== true) {
      /*
       * In trailing throttle mode, since `delay` time has not been
       * exceeded, schedule `callback` to execute `delay` ms after most
       * recent execution.
       *
       * If `debounceMode` is true (at begin), schedule `clear` to execute
       * after `delay` ms.
       *
       * If `debounceMode` is false (at end), schedule `callback` to
       * execute after `delay` ms.
       */
      timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
    }
  }

  wrapper.cancel = cancel; // Return the wrapper function.

  return wrapper;
}

/* eslint-disable no-undefined */
/**
 * Debounce execution of a function. Debouncing, unlike throttling,
 * guarantees that a function is only executed a single time, either at the
 * very beginning of a series of calls, or at the very end.
 *
 * @param  {Number}   delay         A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 * @param  {Boolean}  [atBegin]     Optional, defaults to false. If atBegin is false or unspecified, callback will only be executed `delay` milliseconds
 *                                  after the last debounced-function call. If atBegin is true, callback will be executed only at the first debounced-function call.
 *                                  (After the throttled-function has not been called for `delay` milliseconds, the internal counter is reset).
 * @param  {Function} callback      A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
 *                                  to `callback` when the debounced-function is executed.
 *
 * @return {Function} A new, debounced function.
 */

function debounce (delay, atBegin, callback) {
  return callback === undefined ? throttle(delay, atBegin, false) : throttle(delay, callback, atBegin !== false);
}




/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var throttle_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! throttle-debounce */ "./node_modules/throttle-debounce/dist/index.esm.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Site =
/*#__PURE__*/
function () {
  function Site() {
    _classCallCheck(this, Site);

    this.dom = {
      header: document.querySelector(".site-header"),
      main: document.querySelector("main"),
      footer: document.querySelector(".site-footer"),
      vote: document.querySelector('.js-vote')
    };
    this.previousScrollY = 0;
  }
  /**
   * Methods
   */


  _createClass(Site, [{
    key: "init",
    value: function init() {
      this.bindEvents();
      this.setFooter();
      if (this.dom.vote) this.setArticleVote();
    }
  }, {
    key: "setArticleVote",
    value: function setArticleVote() {
      var _this = this;

      this.dom.voteBtns = document.querySelectorAll('.vote__item');
      this.canVote = false;
      var parent = this.dom.vote.dataset.parent;
      var slug = this.dom.vote.dataset.slug;
      var key = 'smn';
      if (parent) key += ".".concat(parent);
      if (slug) key += ".".concat(slug);
      var status = this.getWithExpiry(key);
      if (status === null) this.canVote = true;
      this.dom.voteBtns.forEach(function (btn) {
        if (_this.canVote) {
          btn.disabled = false;
          btn.classList.remove('is-disabled');
        }

        var text = btn.querySelector('.vote__desc').innerText.replace('\n', ' ').toLowerCase();
        btn.addEventListener('click', function () {
          if (_this.canVote) _this.castVote(key, text);
        });
      });
    }
  }, {
    key: "castVote",
    value: function castVote(key, text) {
      this.canVote = false;
      this.setWithExpiry(key, text, 86400000); // 24h

      gtag('event', 'feedback', {
        'event_category': key,
        'event_label': text
      });
      this.dom.voteBtns.forEach(function (btn) {
        btn.disabled = true;
        btn.classList.add('is-disabled');
      });
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      var _this2 = this;

      window.addEventListener("scroll", Object(throttle_debounce__WEBPACK_IMPORTED_MODULE_0__["throttle"])(300, function () {
        return _this2.setScrollDirection();
      }));
      window.addEventListener("resize", Object(throttle_debounce__WEBPACK_IMPORTED_MODULE_0__["debounce"])(300, function () {
        return _this2.setFooter();
      }));
    }
  }, {
    key: "setScrollDirection",
    value: function setScrollDirection() {
      var scrollY = window.pageYOffset || document.documentElement.scrollTop;
      var isScrollingDown = scrollY > this.previousScrollY ? true : false;
      document.documentElement.classList.toggle("is-scrolling-down", isScrollingDown);
      document.documentElement.classList.toggle("is-scrolling-up", !isScrollingDown);
      this.previousScrollY = scrollY <= 0 ? 0 : scrollY;
    }
  }, {
    key: "setFooter",
    value: function setFooter() {
      this.dom.main.style.marginBottom = "".concat(this.dom.footer.offsetHeight, "px");
    }
  }, {
    key: "setWithExpiry",
    value: function setWithExpiry(key, value, ttl) {
      var now = new Date();
      var item = {
        value: value,
        expiry: now.getTime() + ttl
      };
      localStorage.setItem(key, JSON.stringify(item));
    }
  }, {
    key: "getWithExpiry",
    value: function getWithExpiry(key) {
      var itemStr = localStorage.getItem(key);

      if (!itemStr) {
        return null;
      }

      var item = JSON.parse(itemStr);
      var now = new Date();

      if (now.getTime() > item.expiry) {
        localStorage.removeItem(key);
        return null;
      }

      return item.value;
    }
  }]);

  return Site;
}();

var site = new Site();
site.init();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Rocm90dGxlLWRlYm91bmNlL2Rpc3QvaW5kZXguZXNtLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9hcHAuanMiXSwibmFtZXMiOlsiU2l0ZSIsImRvbSIsImhlYWRlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1haW4iLCJmb290ZXIiLCJ2b3RlIiwicHJldmlvdXNTY3JvbGxZIiwiYmluZEV2ZW50cyIsInNldEZvb3RlciIsInNldEFydGljbGVWb3RlIiwidm90ZUJ0bnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2FuVm90ZSIsInBhcmVudCIsImRhdGFzZXQiLCJzbHVnIiwia2V5Iiwic3RhdHVzIiwiZ2V0V2l0aEV4cGlyeSIsImZvckVhY2giLCJidG4iLCJkaXNhYmxlZCIsImNsYXNzTGlzdCIsInJlbW92ZSIsInRleHQiLCJpbm5lclRleHQiLCJyZXBsYWNlIiwidG9Mb3dlckNhc2UiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FzdFZvdGUiLCJzZXRXaXRoRXhwaXJ5IiwiZ3RhZyIsImFkZCIsIndpbmRvdyIsInRocm90dGxlIiwic2V0U2Nyb2xsRGlyZWN0aW9uIiwiZGVib3VuY2UiLCJzY3JvbGxZIiwicGFnZVlPZmZzZXQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJpc1Njcm9sbGluZ0Rvd24iLCJ0b2dnbGUiLCJzdHlsZSIsIm1hcmdpbkJvdHRvbSIsIm9mZnNldEhlaWdodCIsInZhbHVlIiwidHRsIiwibm93IiwiRGF0ZSIsIml0ZW0iLCJleHBpcnkiLCJnZXRUaW1lIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJpdGVtU3RyIiwiZ2V0SXRlbSIsInBhcnNlIiwicmVtb3ZlSXRlbSIsInNpdGUiLCJpbml0Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVB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QVQsQ0FBZ0J5QyxZQUF0RDtBQUNEOzs7a0NBRWE3QixHLEVBQUs4QixLLEVBQU9DLEcsRUFBSztBQUM3QixVQUFNQyxHQUFHLEdBQUcsSUFBSUMsSUFBSixFQUFaO0FBQ0EsVUFBTUMsSUFBSSxHQUFHO0FBQ1hKLGFBQUssRUFBRUEsS0FESTtBQUVYSyxjQUFNLEVBQUVILEdBQUcsQ0FBQ0ksT0FBSixLQUFnQkw7QUFGYixPQUFiO0FBSUFNLGtCQUFZLENBQUNDLE9BQWIsQ0FBcUJ0QyxHQUFyQixFQUEwQnVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlTixJQUFmLENBQTFCO0FBQ0Q7OztrQ0FFYWxDLEcsRUFBSztBQUNqQixVQUFNeUMsT0FBTyxHQUFHSixZQUFZLENBQUNLLE9BQWIsQ0FBcUIxQyxHQUFyQixDQUFoQjs7QUFDQSxVQUFJLENBQUN5QyxPQUFMLEVBQWM7QUFDWixlQUFPLElBQVA7QUFDRDs7QUFFRCxVQUFNUCxJQUFJLEdBQUdLLElBQUksQ0FBQ0ksS0FBTCxDQUFXRixPQUFYLENBQWI7QUFDQSxVQUFNVCxHQUFHLEdBQUcsSUFBSUMsSUFBSixFQUFaOztBQUVBLFVBQUlELEdBQUcsQ0FBQ0ksT0FBSixLQUFnQkYsSUFBSSxDQUFDQyxNQUF6QixFQUFpQztBQUMvQkUsb0JBQVksQ0FBQ08sVUFBYixDQUF3QjVDLEdBQXhCO0FBQ0EsZUFBTyxJQUFQO0FBQ0Q7O0FBRUQsYUFBT2tDLElBQUksQ0FBQ0osS0FBWjtBQUNEOzs7Ozs7QUFHSCxJQUFJZSxJQUFJLEdBQUcsSUFBSS9ELElBQUosRUFBWDtBQUNBK0QsSUFBSSxDQUFDQyxJQUFMLEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvanMvYXBwLmpzXCIpO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWZpbmVkLG5vLXBhcmFtLXJlYXNzaWduLG5vLXNoYWRvdyAqL1xuXG4vKipcbiAqIFRocm90dGxlIGV4ZWN1dGlvbiBvZiBhIGZ1bmN0aW9uLiBFc3BlY2lhbGx5IHVzZWZ1bCBmb3IgcmF0ZSBsaW1pdGluZ1xuICogZXhlY3V0aW9uIG9mIGhhbmRsZXJzIG9uIGV2ZW50cyBsaWtlIHJlc2l6ZSBhbmQgc2Nyb2xsLlxuICpcbiAqIEBwYXJhbSAge051bWJlcn0gICAgZGVsYXkgICAgICAgICAgQSB6ZXJvLW9yLWdyZWF0ZXIgZGVsYXkgaW4gbWlsbGlzZWNvbmRzLiBGb3IgZXZlbnQgY2FsbGJhY2tzLCB2YWx1ZXMgYXJvdW5kIDEwMCBvciAyNTAgKG9yIGV2ZW4gaGlnaGVyKSBhcmUgbW9zdCB1c2VmdWwuXG4gKiBAcGFyYW0gIHtCb29sZWFufSAgIFtub1RyYWlsaW5nXSAgIE9wdGlvbmFsLCBkZWZhdWx0cyB0byBmYWxzZS4gSWYgbm9UcmFpbGluZyBpcyB0cnVlLCBjYWxsYmFjayB3aWxsIG9ubHkgZXhlY3V0ZSBldmVyeSBgZGVsYXlgIG1pbGxpc2Vjb25kcyB3aGlsZSB0aGVcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3R0bGVkLWZ1bmN0aW9uIGlzIGJlaW5nIGNhbGxlZC4gSWYgbm9UcmFpbGluZyBpcyBmYWxzZSBvciB1bnNwZWNpZmllZCwgY2FsbGJhY2sgd2lsbCBiZSBleGVjdXRlZCBvbmUgZmluYWwgdGltZVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZnRlciB0aGUgbGFzdCB0aHJvdHRsZWQtZnVuY3Rpb24gY2FsbC4gKEFmdGVyIHRoZSB0aHJvdHRsZWQtZnVuY3Rpb24gaGFzIG5vdCBiZWVuIGNhbGxlZCBmb3IgYGRlbGF5YCBtaWxsaXNlY29uZHMsXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSBpbnRlcm5hbCBjb3VudGVyIGlzIHJlc2V0KVxuICogQHBhcmFtICB7RnVuY3Rpb259ICBjYWxsYmFjayAgICAgICBBIGZ1bmN0aW9uIHRvIGJlIGV4ZWN1dGVkIGFmdGVyIGRlbGF5IG1pbGxpc2Vjb25kcy4gVGhlIGB0aGlzYCBjb250ZXh0IGFuZCBhbGwgYXJndW1lbnRzIGFyZSBwYXNzZWQgdGhyb3VnaCwgYXMtaXMsXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGBjYWxsYmFja2Agd2hlbiB0aGUgdGhyb3R0bGVkLWZ1bmN0aW9uIGlzIGV4ZWN1dGVkLlxuICogQHBhcmFtICB7Qm9vbGVhbn0gICBbZGVib3VuY2VNb2RlXSBJZiBgZGVib3VuY2VNb2RlYCBpcyB0cnVlIChhdCBiZWdpbiksIHNjaGVkdWxlIGBjbGVhcmAgdG8gZXhlY3V0ZSBhZnRlciBgZGVsYXlgIG1zLiBJZiBgZGVib3VuY2VNb2RlYCBpcyBmYWxzZSAoYXQgZW5kKSxcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NoZWR1bGUgYGNhbGxiYWNrYCB0byBleGVjdXRlIGFmdGVyIGBkZWxheWAgbXMuXG4gKlxuICogQHJldHVybiB7RnVuY3Rpb259ICBBIG5ldywgdGhyb3R0bGVkLCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gdGhyb3R0bGUgKGRlbGF5LCBub1RyYWlsaW5nLCBjYWxsYmFjaywgZGVib3VuY2VNb2RlKSB7XG4gIC8qXG4gICAqIEFmdGVyIHdyYXBwZXIgaGFzIHN0b3BwZWQgYmVpbmcgY2FsbGVkLCB0aGlzIHRpbWVvdXQgZW5zdXJlcyB0aGF0XG4gICAqIGBjYWxsYmFja2AgaXMgZXhlY3V0ZWQgYXQgdGhlIHByb3BlciB0aW1lcyBpbiBgdGhyb3R0bGVgIGFuZCBgZW5kYFxuICAgKiBkZWJvdW5jZSBtb2Rlcy5cbiAgICovXG4gIHZhciB0aW1lb3V0SUQ7XG4gIHZhciBjYW5jZWxsZWQgPSBmYWxzZTsgLy8gS2VlcCB0cmFjayBvZiB0aGUgbGFzdCB0aW1lIGBjYWxsYmFja2Agd2FzIGV4ZWN1dGVkLlxuXG4gIHZhciBsYXN0RXhlYyA9IDA7IC8vIEZ1bmN0aW9uIHRvIGNsZWFyIGV4aXN0aW5nIHRpbWVvdXRcblxuICBmdW5jdGlvbiBjbGVhckV4aXN0aW5nVGltZW91dCgpIHtcbiAgICBpZiAodGltZW91dElEKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dElEKTtcbiAgICB9XG4gIH0gLy8gRnVuY3Rpb24gdG8gY2FuY2VsIG5leHQgZXhlY1xuXG5cbiAgZnVuY3Rpb24gY2FuY2VsKCkge1xuICAgIGNsZWFyRXhpc3RpbmdUaW1lb3V0KCk7XG4gICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgfSAvLyBgbm9UcmFpbGluZ2AgZGVmYXVsdHMgdG8gZmFsc3kuXG5cblxuICBpZiAodHlwZW9mIG5vVHJhaWxpbmcgIT09ICdib29sZWFuJykge1xuICAgIGRlYm91bmNlTW9kZSA9IGNhbGxiYWNrO1xuICAgIGNhbGxiYWNrID0gbm9UcmFpbGluZztcbiAgICBub1RyYWlsaW5nID0gdW5kZWZpbmVkO1xuICB9XG4gIC8qXG4gICAqIFRoZSBgd3JhcHBlcmAgZnVuY3Rpb24gZW5jYXBzdWxhdGVzIGFsbCBvZiB0aGUgdGhyb3R0bGluZyAvIGRlYm91bmNpbmdcbiAgICogZnVuY3Rpb25hbGl0eSBhbmQgd2hlbiBleGVjdXRlZCB3aWxsIGxpbWl0IHRoZSByYXRlIGF0IHdoaWNoIGBjYWxsYmFja2BcbiAgICogaXMgZXhlY3V0ZWQuXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gd3JhcHBlcigpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIGVsYXBzZWQgPSBEYXRlLm5vdygpIC0gbGFzdEV4ZWM7XG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBFeGVjdXRlIGBjYWxsYmFja2AgYW5kIHVwZGF0ZSB0aGUgYGxhc3RFeGVjYCB0aW1lc3RhbXAuXG5cblxuICAgIGZ1bmN0aW9uIGV4ZWMoKSB7XG4gICAgICBsYXN0RXhlYyA9IERhdGUubm93KCk7XG4gICAgICBjYWxsYmFjay5hcHBseShzZWxmLCBhcmdzKTtcbiAgICB9XG4gICAgLypcbiAgICAgKiBJZiBgZGVib3VuY2VNb2RlYCBpcyB0cnVlIChhdCBiZWdpbikgdGhpcyBpcyB1c2VkIHRvIGNsZWFyIHRoZSBmbGFnXG4gICAgICogdG8gYWxsb3cgZnV0dXJlIGBjYWxsYmFja2AgZXhlY3V0aW9ucy5cbiAgICAgKi9cblxuXG4gICAgZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgICB0aW1lb3V0SUQgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgaWYgKGRlYm91bmNlTW9kZSAmJiAhdGltZW91dElEKSB7XG4gICAgICAvKlxuICAgICAgICogU2luY2UgYHdyYXBwZXJgIGlzIGJlaW5nIGNhbGxlZCBmb3IgdGhlIGZpcnN0IHRpbWUgYW5kXG4gICAgICAgKiBgZGVib3VuY2VNb2RlYCBpcyB0cnVlIChhdCBiZWdpbiksIGV4ZWN1dGUgYGNhbGxiYWNrYC5cbiAgICAgICAqL1xuICAgICAgZXhlYygpO1xuICAgIH1cblxuICAgIGNsZWFyRXhpc3RpbmdUaW1lb3V0KCk7XG5cbiAgICBpZiAoZGVib3VuY2VNb2RlID09PSB1bmRlZmluZWQgJiYgZWxhcHNlZCA+IGRlbGF5KSB7XG4gICAgICAvKlxuICAgICAgICogSW4gdGhyb3R0bGUgbW9kZSwgaWYgYGRlbGF5YCB0aW1lIGhhcyBiZWVuIGV4Y2VlZGVkLCBleGVjdXRlXG4gICAgICAgKiBgY2FsbGJhY2tgLlxuICAgICAgICovXG4gICAgICBleGVjKCk7XG4gICAgfSBlbHNlIGlmIChub1RyYWlsaW5nICE9PSB0cnVlKSB7XG4gICAgICAvKlxuICAgICAgICogSW4gdHJhaWxpbmcgdGhyb3R0bGUgbW9kZSwgc2luY2UgYGRlbGF5YCB0aW1lIGhhcyBub3QgYmVlblxuICAgICAgICogZXhjZWVkZWQsIHNjaGVkdWxlIGBjYWxsYmFja2AgdG8gZXhlY3V0ZSBgZGVsYXlgIG1zIGFmdGVyIG1vc3RcbiAgICAgICAqIHJlY2VudCBleGVjdXRpb24uXG4gICAgICAgKlxuICAgICAgICogSWYgYGRlYm91bmNlTW9kZWAgaXMgdHJ1ZSAoYXQgYmVnaW4pLCBzY2hlZHVsZSBgY2xlYXJgIHRvIGV4ZWN1dGVcbiAgICAgICAqIGFmdGVyIGBkZWxheWAgbXMuXG4gICAgICAgKlxuICAgICAgICogSWYgYGRlYm91bmNlTW9kZWAgaXMgZmFsc2UgKGF0IGVuZCksIHNjaGVkdWxlIGBjYWxsYmFja2AgdG9cbiAgICAgICAqIGV4ZWN1dGUgYWZ0ZXIgYGRlbGF5YCBtcy5cbiAgICAgICAqL1xuICAgICAgdGltZW91dElEID0gc2V0VGltZW91dChkZWJvdW5jZU1vZGUgPyBjbGVhciA6IGV4ZWMsIGRlYm91bmNlTW9kZSA9PT0gdW5kZWZpbmVkID8gZGVsYXkgLSBlbGFwc2VkIDogZGVsYXkpO1xuICAgIH1cbiAgfVxuXG4gIHdyYXBwZXIuY2FuY2VsID0gY2FuY2VsOyAvLyBSZXR1cm4gdGhlIHdyYXBwZXIgZnVuY3Rpb24uXG5cbiAgcmV0dXJuIHdyYXBwZXI7XG59XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmaW5lZCAqL1xuLyoqXG4gKiBEZWJvdW5jZSBleGVjdXRpb24gb2YgYSBmdW5jdGlvbi4gRGVib3VuY2luZywgdW5saWtlIHRocm90dGxpbmcsXG4gKiBndWFyYW50ZWVzIHRoYXQgYSBmdW5jdGlvbiBpcyBvbmx5IGV4ZWN1dGVkIGEgc2luZ2xlIHRpbWUsIGVpdGhlciBhdCB0aGVcbiAqIHZlcnkgYmVnaW5uaW5nIG9mIGEgc2VyaWVzIG9mIGNhbGxzLCBvciBhdCB0aGUgdmVyeSBlbmQuXG4gKlxuICogQHBhcmFtICB7TnVtYmVyfSAgIGRlbGF5ICAgICAgICAgQSB6ZXJvLW9yLWdyZWF0ZXIgZGVsYXkgaW4gbWlsbGlzZWNvbmRzLiBGb3IgZXZlbnQgY2FsbGJhY2tzLCB2YWx1ZXMgYXJvdW5kIDEwMCBvciAyNTAgKG9yIGV2ZW4gaGlnaGVyKSBhcmUgbW9zdCB1c2VmdWwuXG4gKiBAcGFyYW0gIHtCb29sZWFufSAgW2F0QmVnaW5dICAgICBPcHRpb25hbCwgZGVmYXVsdHMgdG8gZmFsc2UuIElmIGF0QmVnaW4gaXMgZmFsc2Ugb3IgdW5zcGVjaWZpZWQsIGNhbGxiYWNrIHdpbGwgb25seSBiZSBleGVjdXRlZCBgZGVsYXlgIG1pbGxpc2Vjb25kc1xuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWZ0ZXIgdGhlIGxhc3QgZGVib3VuY2VkLWZ1bmN0aW9uIGNhbGwuIElmIGF0QmVnaW4gaXMgdHJ1ZSwgY2FsbGJhY2sgd2lsbCBiZSBleGVjdXRlZCBvbmx5IGF0IHRoZSBmaXJzdCBkZWJvdW5jZWQtZnVuY3Rpb24gY2FsbC5cbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChBZnRlciB0aGUgdGhyb3R0bGVkLWZ1bmN0aW9uIGhhcyBub3QgYmVlbiBjYWxsZWQgZm9yIGBkZWxheWAgbWlsbGlzZWNvbmRzLCB0aGUgaW50ZXJuYWwgY291bnRlciBpcyByZXNldCkuXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gY2FsbGJhY2sgICAgICBBIGZ1bmN0aW9uIHRvIGJlIGV4ZWN1dGVkIGFmdGVyIGRlbGF5IG1pbGxpc2Vjb25kcy4gVGhlIGB0aGlzYCBjb250ZXh0IGFuZCBhbGwgYXJndW1lbnRzIGFyZSBwYXNzZWQgdGhyb3VnaCwgYXMtaXMsXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0byBgY2FsbGJhY2tgIHdoZW4gdGhlIGRlYm91bmNlZC1mdW5jdGlvbiBpcyBleGVjdXRlZC5cbiAqXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gQSBuZXcsIGRlYm91bmNlZCBmdW5jdGlvbi5cbiAqL1xuXG5mdW5jdGlvbiBkZWJvdW5jZSAoZGVsYXksIGF0QmVnaW4sIGNhbGxiYWNrKSB7XG4gIHJldHVybiBjYWxsYmFjayA9PT0gdW5kZWZpbmVkID8gdGhyb3R0bGUoZGVsYXksIGF0QmVnaW4sIGZhbHNlKSA6IHRocm90dGxlKGRlbGF5LCBjYWxsYmFjaywgYXRCZWdpbiAhPT0gZmFsc2UpO1xufVxuXG5leHBvcnQgeyB0aHJvdHRsZSwgZGVib3VuY2UgfTtcbiIsImltcG9ydCB7IHRocm90dGxlLCBkZWJvdW5jZSB9IGZyb20gXCJ0aHJvdHRsZS1kZWJvdW5jZVwiO1xuXG5jbGFzcyBTaXRlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5kb20gPSB7XG4gICAgICBoZWFkZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2l0ZS1oZWFkZXJcIiksXG4gICAgICBtYWluOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKSxcbiAgICAgIGZvb3RlcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaXRlLWZvb3RlclwiKSxcbiAgICAgIHZvdGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy12b3RlJylcbiAgICB9O1xuXG4gICAgdGhpcy5wcmV2aW91c1Njcm9sbFkgPSAwO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZHNcbiAgICovXG4gIGluaXQoKSB7XG4gICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgdGhpcy5zZXRGb290ZXIoKTtcblxuICAgIGlmKHRoaXMuZG9tLnZvdGUpIHRoaXMuc2V0QXJ0aWNsZVZvdGUoKTtcbiAgfVxuXG4gIHNldEFydGljbGVWb3RlKCkge1xuICAgIHRoaXMuZG9tLnZvdGVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnZvdGVfX2l0ZW0nKTtcbiAgICB0aGlzLmNhblZvdGUgPSBmYWxzZTtcbiAgICBjb25zdCBwYXJlbnQgPSB0aGlzLmRvbS52b3RlLmRhdGFzZXQucGFyZW50O1xuICAgIGNvbnN0IHNsdWcgPSB0aGlzLmRvbS52b3RlLmRhdGFzZXQuc2x1ZztcbiAgICBsZXQga2V5ID0gJ3Ntbic7XG4gICAgaWYgKHBhcmVudCkga2V5ICs9IGAuJHtwYXJlbnR9YDtcbiAgICBpZiAoc2x1Zykga2V5ICs9IGAuJHtzbHVnfWA7XG5cbiAgICBjb25zdCBzdGF0dXMgPSB0aGlzLmdldFdpdGhFeHBpcnkoa2V5KTtcblxuICAgIGlmIChzdGF0dXMgPT09IG51bGwpIHRoaXMuY2FuVm90ZSA9IHRydWU7XG5cbiAgICB0aGlzLmRvbS52b3RlQnRucy5mb3JFYWNoKGJ0biA9PiB7XG4gICAgICBpZiAodGhpcy5jYW5Wb3RlKSB7XG4gICAgICAgIGJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZSgnaXMtZGlzYWJsZWQnKTtcbiAgICAgIH1cbiAgXG4gICAgICBjb25zdCB0ZXh0ID0gYnRuLnF1ZXJ5U2VsZWN0b3IoJy52b3RlX19kZXNjJykuaW5uZXJUZXh0LnJlcGxhY2UoJ1xcbicsICcgJykudG9Mb3dlckNhc2UoKTtcbiAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuY2FuVm90ZSkgdGhpcy5jYXN0Vm90ZShrZXksIHRleHQpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBjYXN0Vm90ZShrZXksIHRleHQpIHtcbiAgICB0aGlzLmNhblZvdGUgPSBmYWxzZTtcbiAgICB0aGlzLnNldFdpdGhFeHBpcnkoa2V5LCB0ZXh0LCA4NjQwMDAwMCk7IC8vIDI0aFxuXG4gICAgZ3RhZygnZXZlbnQnLCAnZmVlZGJhY2snLCB7XG4gICAgICAnZXZlbnRfY2F0ZWdvcnknOiBrZXksXG4gICAgICAnZXZlbnRfbGFiZWwnOiB0ZXh0LFxuICAgIH0pO1xuXG4gICAgdGhpcy5kb20udm90ZUJ0bnMuZm9yRWFjaChidG4gPT4ge1xuICAgICAgYnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdpcy1kaXNhYmxlZCcpO1xuICAgIH0pO1xuICB9XG5cbiAgYmluZEV2ZW50cygpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwic2Nyb2xsXCIsXG4gICAgICB0aHJvdHRsZSgzMDAsICgpID0+IHRoaXMuc2V0U2Nyb2xsRGlyZWN0aW9uKCkpXG4gICAgKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBkZWJvdW5jZSgzMDAsICgpID0+IHRoaXMuc2V0Rm9vdGVyKCkpKTtcbiAgfVxuXG4gIHNldFNjcm9sbERpcmVjdGlvbigpIHtcbiAgICBsZXQgc2Nyb2xsWSA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgIGxldCBpc1Njcm9sbGluZ0Rvd24gPSBzY3JvbGxZID4gdGhpcy5wcmV2aW91c1Njcm9sbFkgPyB0cnVlIDogZmFsc2U7XG5cbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcbiAgICAgIFwiaXMtc2Nyb2xsaW5nLWRvd25cIixcbiAgICAgIGlzU2Nyb2xsaW5nRG93blxuICAgICk7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXG4gICAgICBcImlzLXNjcm9sbGluZy11cFwiLFxuICAgICAgIWlzU2Nyb2xsaW5nRG93blxuICAgICk7XG4gICAgdGhpcy5wcmV2aW91c1Njcm9sbFkgPSBzY3JvbGxZIDw9IDAgPyAwIDogc2Nyb2xsWTtcbiAgfVxuXG4gIHNldEZvb3RlcigpIHtcbiAgICB0aGlzLmRvbS5tYWluLnN0eWxlLm1hcmdpbkJvdHRvbSA9IGAke3RoaXMuZG9tLmZvb3Rlci5vZmZzZXRIZWlnaHR9cHhgO1xuICB9XG5cbiAgc2V0V2l0aEV4cGlyeShrZXksIHZhbHVlLCB0dGwpIHtcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpXG4gICAgY29uc3QgaXRlbSA9IHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGV4cGlyeTogbm93LmdldFRpbWUoKSArIHR0bCxcbiAgICB9O1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkoaXRlbSkpXG4gIH1cbiAgXG4gIGdldFdpdGhFeHBpcnkoa2V5KSB7XG4gICAgY29uc3QgaXRlbVN0ciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSlcbiAgICBpZiAoIWl0ZW1TdHIpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgY29uc3QgaXRlbSA9IEpTT04ucGFyc2UoaXRlbVN0cilcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpXG5cbiAgICBpZiAobm93LmdldFRpbWUoKSA+IGl0ZW0uZXhwaXJ5KSB7XG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpXG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBpdGVtLnZhbHVlXG4gIH1cbn1cblxudmFyIHNpdGUgPSBuZXcgU2l0ZSgpO1xuc2l0ZS5pbml0KCk7XG4iXSwic291cmNlUm9vdCI6IiJ9