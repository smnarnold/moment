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

/***/ "./node_modules/intersection-observer/intersection-observer.js":
/*!*********************************************************************!*\
  !*** ./node_modules/intersection-observer/intersection-observer.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the W3C SOFTWARE AND DOCUMENT NOTICE AND LICENSE.
 *
 *  https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 */

(function(window, document) {
'use strict';


// Exits early if all IntersectionObserver and IntersectionObserverEntry
// features are natively supported.
if ('IntersectionObserver' in window &&
    'IntersectionObserverEntry' in window &&
    'intersectionRatio' in window.IntersectionObserverEntry.prototype) {

  // Minimal polyfill for Edge 15's lack of `isIntersecting`
  // See: https://github.com/w3c/IntersectionObserver/issues/211
  if (!('isIntersecting' in window.IntersectionObserverEntry.prototype)) {
    Object.defineProperty(window.IntersectionObserverEntry.prototype,
      'isIntersecting', {
      get: function () {
        return this.intersectionRatio > 0;
      }
    });
  }
  return;
}


/**
 * An IntersectionObserver registry. This registry exists to hold a strong
 * reference to IntersectionObserver instances currently observering a target
 * element. Without this registry, instances without another reference may be
 * garbage collected.
 */
var registry = [];


/**
 * Creates the global IntersectionObserverEntry constructor.
 * https://w3c.github.io/IntersectionObserver/#intersection-observer-entry
 * @param {Object} entry A dictionary of instance properties.
 * @constructor
 */
function IntersectionObserverEntry(entry) {
  this.time = entry.time;
  this.target = entry.target;
  this.rootBounds = entry.rootBounds;
  this.boundingClientRect = entry.boundingClientRect;
  this.intersectionRect = entry.intersectionRect || getEmptyRect();
  this.isIntersecting = !!entry.intersectionRect;

  // Calculates the intersection ratio.
  var targetRect = this.boundingClientRect;
  var targetArea = targetRect.width * targetRect.height;
  var intersectionRect = this.intersectionRect;
  var intersectionArea = intersectionRect.width * intersectionRect.height;

  // Sets intersection ratio.
  if (targetArea) {
    this.intersectionRatio = intersectionArea / targetArea;
  } else {
    // If area is zero and is intersecting, sets to 1, otherwise to 0
    this.intersectionRatio = this.isIntersecting ? 1 : 0;
  }
}


/**
 * Creates the global IntersectionObserver constructor.
 * https://w3c.github.io/IntersectionObserver/#intersection-observer-interface
 * @param {Function} callback The function to be invoked after intersection
 *     changes have queued. The function is not invoked if the queue has
 *     been emptied by calling the `takeRecords` method.
 * @param {Object=} opt_options Optional configuration options.
 * @constructor
 */
function IntersectionObserver(callback, opt_options) {

  var options = opt_options || {};

  if (typeof callback != 'function') {
    throw new Error('callback must be a function');
  }

  if (options.root && options.root.nodeType != 1) {
    throw new Error('root must be an Element');
  }

  // Binds and throttles `this._checkForIntersections`.
  this._checkForIntersections = throttle(
      this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT);

  // Private properties.
  this._callback = callback;
  this._observationTargets = [];
  this._queuedEntries = [];
  this._rootMarginValues = this._parseRootMargin(options.rootMargin);

  // Public properties.
  this.thresholds = this._initThresholds(options.threshold);
  this.root = options.root || null;
  this.rootMargin = this._rootMarginValues.map(function(margin) {
    return margin.value + margin.unit;
  }).join(' ');
}


/**
 * The minimum interval within which the document will be checked for
 * intersection changes.
 */
IntersectionObserver.prototype.THROTTLE_TIMEOUT = 100;


/**
 * The frequency in which the polyfill polls for intersection changes.
 * this can be updated on a per instance basis and must be set prior to
 * calling `observe` on the first target.
 */
IntersectionObserver.prototype.POLL_INTERVAL = null;

/**
 * Use a mutation observer on the root element
 * to detect intersection changes.
 */
IntersectionObserver.prototype.USE_MUTATION_OBSERVER = true;


/**
 * Starts observing a target element for intersection changes based on
 * the thresholds values.
 * @param {Element} target The DOM element to observe.
 */
IntersectionObserver.prototype.observe = function(target) {
  var isTargetAlreadyObserved = this._observationTargets.some(function(item) {
    return item.element == target;
  });

  if (isTargetAlreadyObserved) {
    return;
  }

  if (!(target && target.nodeType == 1)) {
    throw new Error('target must be an Element');
  }

  this._registerInstance();
  this._observationTargets.push({element: target, entry: null});
  this._monitorIntersections();
  this._checkForIntersections();
};


/**
 * Stops observing a target element for intersection changes.
 * @param {Element} target The DOM element to observe.
 */
IntersectionObserver.prototype.unobserve = function(target) {
  this._observationTargets =
      this._observationTargets.filter(function(item) {

    return item.element != target;
  });
  if (!this._observationTargets.length) {
    this._unmonitorIntersections();
    this._unregisterInstance();
  }
};


/**
 * Stops observing all target elements for intersection changes.
 */
IntersectionObserver.prototype.disconnect = function() {
  this._observationTargets = [];
  this._unmonitorIntersections();
  this._unregisterInstance();
};


/**
 * Returns any queue entries that have not yet been reported to the
 * callback and clears the queue. This can be used in conjunction with the
 * callback to obtain the absolute most up-to-date intersection information.
 * @return {Array} The currently queued entries.
 */
IntersectionObserver.prototype.takeRecords = function() {
  var records = this._queuedEntries.slice();
  this._queuedEntries = [];
  return records;
};


/**
 * Accepts the threshold value from the user configuration object and
 * returns a sorted array of unique threshold values. If a value is not
 * between 0 and 1 and error is thrown.
 * @private
 * @param {Array|number=} opt_threshold An optional threshold value or
 *     a list of threshold values, defaulting to [0].
 * @return {Array} A sorted list of unique and valid threshold values.
 */
IntersectionObserver.prototype._initThresholds = function(opt_threshold) {
  var threshold = opt_threshold || [0];
  if (!Array.isArray(threshold)) threshold = [threshold];

  return threshold.sort().filter(function(t, i, a) {
    if (typeof t != 'number' || isNaN(t) || t < 0 || t > 1) {
      throw new Error('threshold must be a number between 0 and 1 inclusively');
    }
    return t !== a[i - 1];
  });
};


/**
 * Accepts the rootMargin value from the user configuration object
 * and returns an array of the four margin values as an object containing
 * the value and unit properties. If any of the values are not properly
 * formatted or use a unit other than px or %, and error is thrown.
 * @private
 * @param {string=} opt_rootMargin An optional rootMargin value,
 *     defaulting to '0px'.
 * @return {Array<Object>} An array of margin objects with the keys
 *     value and unit.
 */
IntersectionObserver.prototype._parseRootMargin = function(opt_rootMargin) {
  var marginString = opt_rootMargin || '0px';
  var margins = marginString.split(/\s+/).map(function(margin) {
    var parts = /^(-?\d*\.?\d+)(px|%)$/.exec(margin);
    if (!parts) {
      throw new Error('rootMargin must be specified in pixels or percent');
    }
    return {value: parseFloat(parts[1]), unit: parts[2]};
  });

  // Handles shorthand.
  margins[1] = margins[1] || margins[0];
  margins[2] = margins[2] || margins[0];
  margins[3] = margins[3] || margins[1];

  return margins;
};


/**
 * Starts polling for intersection changes if the polling is not already
 * happening, and if the page's visibilty state is visible.
 * @private
 */
IntersectionObserver.prototype._monitorIntersections = function() {
  if (!this._monitoringIntersections) {
    this._monitoringIntersections = true;

    // If a poll interval is set, use polling instead of listening to
    // resize and scroll events or DOM mutations.
    if (this.POLL_INTERVAL) {
      this._monitoringInterval = setInterval(
          this._checkForIntersections, this.POLL_INTERVAL);
    }
    else {
      addEvent(window, 'resize', this._checkForIntersections, true);
      addEvent(document, 'scroll', this._checkForIntersections, true);

      if (this.USE_MUTATION_OBSERVER && 'MutationObserver' in window) {
        this._domObserver = new MutationObserver(this._checkForIntersections);
        this._domObserver.observe(document, {
          attributes: true,
          childList: true,
          characterData: true,
          subtree: true
        });
      }
    }
  }
};


/**
 * Stops polling for intersection changes.
 * @private
 */
IntersectionObserver.prototype._unmonitorIntersections = function() {
  if (this._monitoringIntersections) {
    this._monitoringIntersections = false;

    clearInterval(this._monitoringInterval);
    this._monitoringInterval = null;

    removeEvent(window, 'resize', this._checkForIntersections, true);
    removeEvent(document, 'scroll', this._checkForIntersections, true);

    if (this._domObserver) {
      this._domObserver.disconnect();
      this._domObserver = null;
    }
  }
};


/**
 * Scans each observation target for intersection changes and adds them
 * to the internal entries queue. If new entries are found, it
 * schedules the callback to be invoked.
 * @private
 */
IntersectionObserver.prototype._checkForIntersections = function() {
  var rootIsInDom = this._rootIsInDom();
  var rootRect = rootIsInDom ? this._getRootRect() : getEmptyRect();

  this._observationTargets.forEach(function(item) {
    var target = item.element;
    var targetRect = getBoundingClientRect(target);
    var rootContainsTarget = this._rootContainsTarget(target);
    var oldEntry = item.entry;
    var intersectionRect = rootIsInDom && rootContainsTarget &&
        this._computeTargetAndRootIntersection(target, rootRect);

    var newEntry = item.entry = new IntersectionObserverEntry({
      time: now(),
      target: target,
      boundingClientRect: targetRect,
      rootBounds: rootRect,
      intersectionRect: intersectionRect
    });

    if (!oldEntry) {
      this._queuedEntries.push(newEntry);
    } else if (rootIsInDom && rootContainsTarget) {
      // If the new entry intersection ratio has crossed any of the
      // thresholds, add a new entry.
      if (this._hasCrossedThreshold(oldEntry, newEntry)) {
        this._queuedEntries.push(newEntry);
      }
    } else {
      // If the root is not in the DOM or target is not contained within
      // root but the previous entry for this target had an intersection,
      // add a new record indicating removal.
      if (oldEntry && oldEntry.isIntersecting) {
        this._queuedEntries.push(newEntry);
      }
    }
  }, this);

  if (this._queuedEntries.length) {
    this._callback(this.takeRecords(), this);
  }
};


/**
 * Accepts a target and root rect computes the intersection between then
 * following the algorithm in the spec.
 * TODO(philipwalton): at this time clip-path is not considered.
 * https://w3c.github.io/IntersectionObserver/#calculate-intersection-rect-algo
 * @param {Element} target The target DOM element
 * @param {Object} rootRect The bounding rect of the root after being
 *     expanded by the rootMargin value.
 * @return {?Object} The final intersection rect object or undefined if no
 *     intersection is found.
 * @private
 */
IntersectionObserver.prototype._computeTargetAndRootIntersection =
    function(target, rootRect) {

  // If the element isn't displayed, an intersection can't happen.
  if (window.getComputedStyle(target).display == 'none') return;

  var targetRect = getBoundingClientRect(target);
  var intersectionRect = targetRect;
  var parent = getParentNode(target);
  var atRoot = false;

  while (!atRoot) {
    var parentRect = null;
    var parentComputedStyle = parent.nodeType == 1 ?
        window.getComputedStyle(parent) : {};

    // If the parent isn't displayed, an intersection can't happen.
    if (parentComputedStyle.display == 'none') return;

    if (parent == this.root || parent == document) {
      atRoot = true;
      parentRect = rootRect;
    } else {
      // If the element has a non-visible overflow, and it's not the <body>
      // or <html> element, update the intersection rect.
      // Note: <body> and <html> cannot be clipped to a rect that's not also
      // the document rect, so no need to compute a new intersection.
      if (parent != document.body &&
          parent != document.documentElement &&
          parentComputedStyle.overflow != 'visible') {
        parentRect = getBoundingClientRect(parent);
      }
    }

    // If either of the above conditionals set a new parentRect,
    // calculate new intersection data.
    if (parentRect) {
      intersectionRect = computeRectIntersection(parentRect, intersectionRect);

      if (!intersectionRect) break;
    }
    parent = getParentNode(parent);
  }
  return intersectionRect;
};


/**
 * Returns the root rect after being expanded by the rootMargin value.
 * @return {Object} The expanded root rect.
 * @private
 */
IntersectionObserver.prototype._getRootRect = function() {
  var rootRect;
  if (this.root) {
    rootRect = getBoundingClientRect(this.root);
  } else {
    // Use <html>/<body> instead of window since scroll bars affect size.
    var html = document.documentElement;
    var body = document.body;
    rootRect = {
      top: 0,
      left: 0,
      right: html.clientWidth || body.clientWidth,
      width: html.clientWidth || body.clientWidth,
      bottom: html.clientHeight || body.clientHeight,
      height: html.clientHeight || body.clientHeight
    };
  }
  return this._expandRectByRootMargin(rootRect);
};


/**
 * Accepts a rect and expands it by the rootMargin value.
 * @param {Object} rect The rect object to expand.
 * @return {Object} The expanded rect.
 * @private
 */
IntersectionObserver.prototype._expandRectByRootMargin = function(rect) {
  var margins = this._rootMarginValues.map(function(margin, i) {
    return margin.unit == 'px' ? margin.value :
        margin.value * (i % 2 ? rect.width : rect.height) / 100;
  });
  var newRect = {
    top: rect.top - margins[0],
    right: rect.right + margins[1],
    bottom: rect.bottom + margins[2],
    left: rect.left - margins[3]
  };
  newRect.width = newRect.right - newRect.left;
  newRect.height = newRect.bottom - newRect.top;

  return newRect;
};


/**
 * Accepts an old and new entry and returns true if at least one of the
 * threshold values has been crossed.
 * @param {?IntersectionObserverEntry} oldEntry The previous entry for a
 *    particular target element or null if no previous entry exists.
 * @param {IntersectionObserverEntry} newEntry The current entry for a
 *    particular target element.
 * @return {boolean} Returns true if a any threshold has been crossed.
 * @private
 */
IntersectionObserver.prototype._hasCrossedThreshold =
    function(oldEntry, newEntry) {

  // To make comparing easier, an entry that has a ratio of 0
  // but does not actually intersect is given a value of -1
  var oldRatio = oldEntry && oldEntry.isIntersecting ?
      oldEntry.intersectionRatio || 0 : -1;
  var newRatio = newEntry.isIntersecting ?
      newEntry.intersectionRatio || 0 : -1;

  // Ignore unchanged ratios
  if (oldRatio === newRatio) return;

  for (var i = 0; i < this.thresholds.length; i++) {
    var threshold = this.thresholds[i];

    // Return true if an entry matches a threshold or if the new ratio
    // and the old ratio are on the opposite sides of a threshold.
    if (threshold == oldRatio || threshold == newRatio ||
        threshold < oldRatio !== threshold < newRatio) {
      return true;
    }
  }
};


/**
 * Returns whether or not the root element is an element and is in the DOM.
 * @return {boolean} True if the root element is an element and is in the DOM.
 * @private
 */
IntersectionObserver.prototype._rootIsInDom = function() {
  return !this.root || containsDeep(document, this.root);
};


/**
 * Returns whether or not the target element is a child of root.
 * @param {Element} target The target element to check.
 * @return {boolean} True if the target element is a child of root.
 * @private
 */
IntersectionObserver.prototype._rootContainsTarget = function(target) {
  return containsDeep(this.root || document, target);
};


/**
 * Adds the instance to the global IntersectionObserver registry if it isn't
 * already present.
 * @private
 */
IntersectionObserver.prototype._registerInstance = function() {
  if (registry.indexOf(this) < 0) {
    registry.push(this);
  }
};


/**
 * Removes the instance from the global IntersectionObserver registry.
 * @private
 */
IntersectionObserver.prototype._unregisterInstance = function() {
  var index = registry.indexOf(this);
  if (index != -1) registry.splice(index, 1);
};


/**
 * Returns the result of the performance.now() method or null in browsers
 * that don't support the API.
 * @return {number} The elapsed time since the page was requested.
 */
function now() {
  return window.performance && performance.now && performance.now();
}


/**
 * Throttles a function and delays its executiong, so it's only called at most
 * once within a given time period.
 * @param {Function} fn The function to throttle.
 * @param {number} timeout The amount of time that must pass before the
 *     function can be called again.
 * @return {Function} The throttled function.
 */
function throttle(fn, timeout) {
  var timer = null;
  return function () {
    if (!timer) {
      timer = setTimeout(function() {
        fn();
        timer = null;
      }, timeout);
    }
  };
}


/**
 * Adds an event handler to a DOM node ensuring cross-browser compatibility.
 * @param {Node} node The DOM node to add the event handler to.
 * @param {string} event The event name.
 * @param {Function} fn The event handler to add.
 * @param {boolean} opt_useCapture Optionally adds the even to the capture
 *     phase. Note: this only works in modern browsers.
 */
function addEvent(node, event, fn, opt_useCapture) {
  if (typeof node.addEventListener == 'function') {
    node.addEventListener(event, fn, opt_useCapture || false);
  }
  else if (typeof node.attachEvent == 'function') {
    node.attachEvent('on' + event, fn);
  }
}


/**
 * Removes a previously added event handler from a DOM node.
 * @param {Node} node The DOM node to remove the event handler from.
 * @param {string} event The event name.
 * @param {Function} fn The event handler to remove.
 * @param {boolean} opt_useCapture If the event handler was added with this
 *     flag set to true, it should be set to true here in order to remove it.
 */
function removeEvent(node, event, fn, opt_useCapture) {
  if (typeof node.removeEventListener == 'function') {
    node.removeEventListener(event, fn, opt_useCapture || false);
  }
  else if (typeof node.detatchEvent == 'function') {
    node.detatchEvent('on' + event, fn);
  }
}


/**
 * Returns the intersection between two rect objects.
 * @param {Object} rect1 The first rect.
 * @param {Object} rect2 The second rect.
 * @return {?Object} The intersection rect or undefined if no intersection
 *     is found.
 */
function computeRectIntersection(rect1, rect2) {
  var top = Math.max(rect1.top, rect2.top);
  var bottom = Math.min(rect1.bottom, rect2.bottom);
  var left = Math.max(rect1.left, rect2.left);
  var right = Math.min(rect1.right, rect2.right);
  var width = right - left;
  var height = bottom - top;

  return (width >= 0 && height >= 0) && {
    top: top,
    bottom: bottom,
    left: left,
    right: right,
    width: width,
    height: height
  };
}


/**
 * Shims the native getBoundingClientRect for compatibility with older IE.
 * @param {Element} el The element whose bounding rect to get.
 * @return {Object} The (possibly shimmed) rect of the element.
 */
function getBoundingClientRect(el) {
  var rect;

  try {
    rect = el.getBoundingClientRect();
  } catch (err) {
    // Ignore Windows 7 IE11 "Unspecified error"
    // https://github.com/w3c/IntersectionObserver/pull/205
  }

  if (!rect) return getEmptyRect();

  // Older IE
  if (!(rect.width && rect.height)) {
    rect = {
      top: rect.top,
      right: rect.right,
      bottom: rect.bottom,
      left: rect.left,
      width: rect.right - rect.left,
      height: rect.bottom - rect.top
    };
  }
  return rect;
}


/**
 * Returns an empty rect object. An empty rect is returned when an element
 * is not in the DOM.
 * @return {Object} The empty rect.
 */
function getEmptyRect() {
  return {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: 0,
    height: 0
  };
}

/**
 * Checks to see if a parent element contains a child elemnt (including inside
 * shadow DOM).
 * @param {Node} parent The parent element.
 * @param {Node} child The child element.
 * @return {boolean} True if the parent node contains the child node.
 */
function containsDeep(parent, child) {
  var node = child;
  while (node) {
    if (node == parent) return true;

    node = getParentNode(node);
  }
  return false;
}


/**
 * Gets the parent node of an element or its host element if the parent node
 * is a shadow root.
 * @param {Node} node The node whose parent to get.
 * @return {Node|null} The parent node or null if no parent exists.
 */
function getParentNode(node) {
  var parent = node.parentNode;

  if (parent && parent.nodeType == 11 && parent.host) {
    // If the parent is a shadow root, return the host element.
    return parent.host;
  }
  return parent;
}


// Exposes the constructors globally.
window.IntersectionObserver = IntersectionObserver;
window.IntersectionObserverEntry = IntersectionObserverEntry;

}(window, document));


/***/ }),

/***/ "./node_modules/scrollama/build/scrollama.js":
/*!***************************************************!*\
  !*** ./node_modules/scrollama/build/scrollama.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

// DOM helper functions

// private
function selectionToArray(selection) {
  var len = selection.length;
  var result = [];
  for (var i = 0; i < len; i += 1) {
    result.push(selection[i]);
  }
  return result;
}

// public
function select(selector) {
  if (selector instanceof Element) { return selector; }
  else if (typeof selector === 'string')
    { return document.querySelector(selector); }
  return null;
}

function selectAll(selector, parent) {
  if ( parent === void 0 ) parent = document;

  if (typeof selector === 'string') {
    return selectionToArray(parent.querySelectorAll(selector));
  } else if (selector instanceof NodeList) {
    return selectionToArray(selector);
  } else if (selector instanceof Array) {
    return selector;
  }
  return [];
}

function getStepId(ref) {
  var id = ref.id;
  var i = ref.i;

  return ("scrollama__debug-step--" + id + "-" + i);
}

function getOffsetId(ref) {
  var id = ref.id;

  return ("scrollama__debug-offset--" + id);
}

// SETUP

function setupOffset(ref) {
  var id = ref.id;
  var offsetVal = ref.offsetVal;
  var stepClass = ref.stepClass;

  var el = document.createElement('div');
  el.setAttribute('id', getOffsetId({ id: id }));
  el.setAttribute('class', 'scrollama__debug-offset');

  el.style.position = 'fixed';
  el.style.left = '0';
  el.style.width = '100%';
  el.style.height = '0px';
  el.style.borderTop = '2px dashed black';
  el.style.zIndex = '9999';

  var text = document.createElement('p');
  text.innerText = "\"." + stepClass + "\" trigger: " + offsetVal;
  text.style.fontSize = '12px';
  text.style.fontFamily = 'monospace';
  text.style.color = 'black';
  text.style.margin = '0';
  text.style.padding = '6px';
  el.appendChild(text);
  document.body.appendChild(el);
}

function setup(ref) {
  var id = ref.id;
  var offsetVal = ref.offsetVal;
  var stepEl = ref.stepEl;

  var stepClass = stepEl[0].getAttribute('class');
  setupOffset({ id: id, offsetVal: offsetVal, stepClass: stepClass });
}

// UPDATE
function updateOffset(ref) {
  var id = ref.id;
  var offsetMargin = ref.offsetMargin;
  var offsetVal = ref.offsetVal;

  var idVal = getOffsetId({ id: id });
  var el = document.querySelector(("#" + idVal));
  el.style.top = offsetMargin + "px";
}

function update(ref) {
  var id = ref.id;
  var stepOffsetHeight = ref.stepOffsetHeight;
  var offsetMargin = ref.offsetMargin;
  var offsetVal = ref.offsetVal;

  updateOffset({ id: id, offsetMargin: offsetMargin });
}

function notifyStep(ref) {
  var id = ref.id;
  var index = ref.index;
  var state = ref.state;

  var idVal = getStepId({ id: id, i: index });
  var elA = document.querySelector(("#" + idVal + "_above"));
  var elB = document.querySelector(("#" + idVal + "_below"));
  var display = state === 'enter' ? 'block' : 'none';

  if (elA) { elA.style.display = display; }
  if (elB) { elB.style.display = display; }
}

function scrollama() {
  var ZERO_MOE = 1; // zero with some rounding margin of error
  var callback = {};
  var io = {};

  var containerEl = null;
  var graphicEl = null;
  var stepEl = null;

  var id = null;
  var offsetVal = 0;
  var offsetMargin = 0;
  var vh = 0;
  var ph = 0;
  var stepOffsetHeight = null;
  var stepOffsetTop = null;
  var bboxGraphic = null;

  var isReady = false;
  var isEnabled = false;
  var debugMode = false;
  var progressMode = false;
  var progressThreshold = 0;
  var preserveOrder = false;
  var triggerOnce = false;

  var stepStates = null;
  var containerState = null;
  var previousYOffset = -1;
  var direction = null;

  var exclude = [];

  // HELPERS
  function generateId() {
    var a = 'abcdefghijklmnopqrstuv';
    var l = a.length;
    var t = new Date().getTime();
    var r = [0, 0, 0].map(function (d) { return a[Math.floor(Math.random() * l)]; }).join('');
    return ("" + r + t);
  }

  //www.gomakethings.com/how-to-get-an-elements-distance-from-the-top-of-the-page-with-vanilla-javascript/
  function getOffsetTop(el) {
    // Set our distance placeholder
    var distance = 0;

    // Loop up the DOM
    if (el.offsetParent) {
      do {
        distance += el.offsetTop;
        el = el.offsetParent;
      } while (el);
    }

    // Return our distance
    return distance < 0 ? 0 : distance;
  }

  function getPageHeight() {
    var body = document.body;
    var html = document.documentElement;

    return Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
  }

  function getIndex(element) {
    return +element.getAttribute('data-scrollama-index');
  }

  function updateDirection() {
    if (window.pageYOffset > previousYOffset) { direction = 'down'; }
    else if (window.pageYOffset < previousYOffset) { direction = 'up'; }
    previousYOffset = window.pageYOffset;
  }

  function handleResize() {
    vh = window.innerHeight;
    ph = getPageHeight();

    bboxGraphic = graphicEl ? graphicEl.getBoundingClientRect() : null;

    offsetMargin = offsetVal * vh;

    stepOffsetHeight = stepEl ? stepEl.map(function (el) { return el.offsetHeight; }) : [];

    stepOffsetTop = stepEl ? stepEl.map(getOffsetTop) : [];

    if (isEnabled && isReady) { updateIO(); }

    if (debugMode)
      { update({ id: id, stepOffsetHeight: stepOffsetHeight, offsetMargin: offsetMargin, offsetVal: offsetVal }); }
  }

  function handleEnable(enable) {
    if (enable && !isEnabled) {
      if (isReady) { updateIO(); }
      isEnabled = true;
    } else if (!enable) {
      if (io.top) { io.top.disconnect(); }
      if (io.bottom) { io.bottom.disconnect(); }
      if (io.stepAbove) { io.stepAbove.forEach(function (d) { return d.disconnect(); }); }
      if (io.stepBelow) { io.stepBelow.forEach(function (d) { return d.disconnect(); }); }
      if (io.stepProgress) { io.stepProgress.forEach(function (d) { return d.disconnect(); }); }
      if (io.viewportAbove) { io.viewportAbove.forEach(function (d) { return d.disconnect(); }); }
      if (io.viewportBelow) { io.viewportBelow.forEach(function (d) { return d.disconnect(); }); }
      isEnabled = false;
    }
  }

  function createThreshold(height) {
    var count = Math.ceil(height / progressThreshold);
    var t = [];
    var ratio = 1 / count;
    for (var i = 0; i < count; i++) {
      t.push(i * ratio);
    }
    return t;
  }

  // NOTIFY CALLBACKS
  function notifyOthers(index, location) {
    if (location === 'above') {
      // check if steps above/below were skipped and should be notified first
      for (var i = 0; i < index; i++) {
        var ss = stepStates[i];
        if (ss.state === 'enter') { notifyStepExit(stepEl[i], 'down'); }
        if (ss.direction === 'up') {
          notifyStepEnter(stepEl[i], 'down', false);
          notifyStepExit(stepEl[i], 'down');
        }
      }
    } else if (location === 'below') {
      for (var i$1 = stepStates.length - 1; i$1 > index; i$1--) {
        var ss$1 = stepStates[i$1];
        if (ss$1.state === 'enter') {
          notifyStepExit(stepEl[i$1], 'up');
        }
        if (ss$1.direction === 'down') {
          notifyStepEnter(stepEl[i$1], 'up', false);
          notifyStepExit(stepEl[i$1], 'up');
        }
      }
    }
  }

  function notifyStepEnter(element, direction, check) {
    if ( check === void 0 ) check = true;

    var index = getIndex(element);
    var resp = { element: element, index: index, direction: direction };

    // store most recent trigger
    stepStates[index].direction = direction;
    stepStates[index].state = 'enter';

    if (preserveOrder && check && direction === 'down')
      { notifyOthers(index, 'above'); }

    if (preserveOrder && check && direction === 'up')
      { notifyOthers(index, 'below'); }

    if (
      callback.stepEnter &&
      typeof callback.stepEnter === 'function' &&
      !exclude[index]
    ) {
      callback.stepEnter(resp, stepStates);
      if (debugMode) { notifyStep({ id: id, index: index, state: 'enter' }); }
      if (triggerOnce) { exclude[index] = true; }
    }

    if (progressMode) {
      if (direction === 'down') { notifyStepProgress(element, 0); }
      else { notifyStepProgress(element, 1); }
    }
  }

  function notifyStepExit(element, direction) {
    var index = getIndex(element);
    var resp = { element: element, index: index, direction: direction };

    // store most recent trigger
    stepStates[index].direction = direction;
    stepStates[index].state = 'exit';

    if (progressMode) {
      if (direction === 'down') { notifyStepProgress(element, 1); }
      else { notifyStepProgress(element, 0); }
    }

    if (callback.stepExit && typeof callback.stepExit === 'function') {
      callback.stepExit(resp, stepStates);
      if (debugMode) { notifyStep({ id: id, index: index, state: 'exit' }); }
    }
  }

  function notifyStepProgress(element, progress) {
    var index = getIndex(element);
    var resp = { element: element, index: index, progress: progress };
    if (callback.stepProgress && typeof callback.stepProgress === 'function')
      { callback.stepProgress(resp); }
  }

  function notifyContainerEnter() {
    var resp = { direction: direction };
    containerState.direction = direction;
    containerState.state = 'enter';
    if (
      callback.containerEnter &&
      typeof callback.containerEnter === 'function'
    )
      { callback.containerEnter(resp); }
  }

  function notifyContainerExit() {
    var resp = { direction: direction };
    containerState.direction = direction;
    containerState.state = 'exit';
    if (callback.containerExit && typeof callback.containerExit === 'function')
      { callback.containerExit(resp); }
  }

  // OBSERVER - INTERSECT HANDLING

  // if TOP edge of step crosses threshold,
  // bottom must be > 0 which means it is on "screen" (shifted by offset)
  function intersectStepAbove(entries) {
    updateDirection();
    entries.forEach(function (entry) {
      var isIntersecting = entry.isIntersecting;
      var boundingClientRect = entry.boundingClientRect;
      var target = entry.target;

      // bottom is how far bottom edge of el is from top of viewport
      var bottom = boundingClientRect.bottom;
      var height = boundingClientRect.height;
      var bottomAdjusted = bottom - offsetMargin;
      var index = getIndex(target);
      var ss = stepStates[index];

      if (bottomAdjusted >= -ZERO_MOE) {
        if (isIntersecting && direction === 'down' && ss.state !== 'enter')
          { notifyStepEnter(target, direction); }
        else if (!isIntersecting && direction === 'up' && ss.state === 'enter')
          { notifyStepExit(target, direction); }
        else if (
          !isIntersecting &&
          bottomAdjusted >= height &&
          direction === 'down' &&
          ss.state === 'enter'
        ) {
          notifyStepExit(target, direction);
        }
      }
    });
  }

  function intersectStepBelow(entries) {
    updateDirection();
    entries.forEach(function (entry) {
      var isIntersecting = entry.isIntersecting;
      var boundingClientRect = entry.boundingClientRect;
      var target = entry.target;

      var bottom = boundingClientRect.bottom;
      var height = boundingClientRect.height;
      var bottomAdjusted = bottom - offsetMargin;
      var index = getIndex(target);
      var ss = stepStates[index];

      if (
        bottomAdjusted >= -ZERO_MOE &&
        bottomAdjusted < height &&
        isIntersecting &&
        direction === 'up' &&
        ss.state !== 'enter'
      ) {
        notifyStepEnter(target, direction);
      } else if (
        bottomAdjusted <= ZERO_MOE &&
        !isIntersecting &&
        direction === 'down' &&
        ss.state === 'enter'
      ) {
        notifyStepExit(target, direction);
      }
    });
  }

  /*
	if there is a scroll event where a step never intersects (therefore
	skipping an enter/exit trigger), use this fallback to detect if it is
	in view
	*/
  function intersectViewportAbove(entries) {
    updateDirection();
    entries.forEach(function (entry) {
      var isIntersecting = entry.isIntersecting;
      var target = entry.target;
      var index = getIndex(target);
      var ss = stepStates[index];
      if (
        isIntersecting &&
        direction === 'down' &&
        ss.state !== 'enter' &&
        ss.direction !== 'down'
      ) {
        notifyStepEnter(target, 'down');
        notifyStepExit(target, 'down');
      }
    });
  }

  function intersectViewportBelow(entries) {
    updateDirection();
    entries.forEach(function (entry) {
      var isIntersecting = entry.isIntersecting;
      var target = entry.target;
      var index = getIndex(target);
      var ss = stepStates[index];
      if (
        isIntersecting &&
        direction === 'up' &&
        ss.state !== 'enter' &&
        ss.direction !== 'up'
      ) {
        notifyStepEnter(target, 'up');
        notifyStepExit(target, 'up');
      }
    });
  }

  function intersectStepProgress(entries) {
    updateDirection();
    entries.forEach(
      function (ref) {
        var isIntersecting = ref.isIntersecting;
        var intersectionRatio = ref.intersectionRatio;
        var boundingClientRect = ref.boundingClientRect;
        var target = ref.target;

        var bottom = boundingClientRect.bottom;
        var bottomAdjusted = bottom - offsetMargin;

        if (isIntersecting && bottomAdjusted >= -ZERO_MOE) {
          notifyStepProgress(target, +intersectionRatio.toFixed(3));
        }
      }
    );
  }

  function intersectTop(entries) {
    updateDirection();
    var ref = entries[0];
    var isIntersecting = ref.isIntersecting;
    var boundingClientRect = ref.boundingClientRect;
    var top = boundingClientRect.top;
    var bottom = boundingClientRect.bottom;

    if (bottom > -ZERO_MOE) {
      if (isIntersecting) { notifyContainerEnter(direction); }
      else if (containerState.state === 'enter') { notifyContainerExit(direction); }
    }
  }

  function intersectBottom(entries) {
    updateDirection();
    var ref = entries[0];
    var isIntersecting = ref.isIntersecting;
    var boundingClientRect = ref.boundingClientRect;
    var top = boundingClientRect.top;

    if (top < ZERO_MOE) {
      if (isIntersecting) { notifyContainerEnter(direction); }
      else if (containerState.state === 'enter') { notifyContainerExit(direction); }
    }
  }

  // OBSERVER - CREATION

  function updateTopIO() {
    if (io.top) { io.top.unobserve(containerEl); }

    var options = {
      root: null,
      rootMargin: (vh + "px 0px -" + vh + "px 0px"),
      threshold: 0
    };

    io.top = new IntersectionObserver(intersectTop, options);
    io.top.observe(containerEl);
  }

  function updateBottomIO() {
    if (io.bottom) { io.bottom.unobserve(containerEl); }
    var options = {
      root: null,
      rootMargin: ("-" + (bboxGraphic.height) + "px 0px " + (bboxGraphic.height) + "px 0px"),
      threshold: 0
    };

    io.bottom = new IntersectionObserver(intersectBottom, options);
    io.bottom.observe(containerEl);
  }

  // top edge
  function updateStepAboveIO() {
    if (io.stepAbove) { io.stepAbove.forEach(function (d) { return d.disconnect(); }); }

    io.stepAbove = stepEl.map(function (el, i) {
      var marginTop = stepOffsetHeight[i];
      var marginBottom = -vh + offsetMargin;
      var rootMargin = marginTop + "px 0px " + marginBottom + "px 0px";

      var options = {
        root: null,
        rootMargin: rootMargin,
        threshold: 0
      };

      var obs = new IntersectionObserver(intersectStepAbove, options);
      obs.observe(el);
      return obs;
    });
  }

  // bottom edge
  function updateStepBelowIO() {
    if (io.stepBelow) { io.stepBelow.forEach(function (d) { return d.disconnect(); }); }

    io.stepBelow = stepEl.map(function (el, i) {
      var marginTop = -offsetMargin;
      var marginBottom = ph - vh + stepOffsetHeight[i] + offsetMargin;
      var rootMargin = marginTop + "px 0px " + marginBottom + "px 0px";

      var options = {
        root: null,
        rootMargin: rootMargin,
        threshold: 0
      };

      var obs = new IntersectionObserver(intersectStepBelow, options);
      obs.observe(el);
      return obs;
    });
  }

  // jump into viewport
  function updateViewportAboveIO() {
    if (io.viewportAbove) { io.viewportAbove.forEach(function (d) { return d.disconnect(); }); }
    io.viewportAbove = stepEl.map(function (el, i) {
      var marginTop = stepOffsetTop[i];
      var marginBottom = -(vh - offsetMargin + stepOffsetHeight[i]);
      var rootMargin = marginTop + "px 0px " + marginBottom + "px 0px";
      var options = {
        root: null,
        rootMargin: rootMargin,
        threshold: 0
      };

      var obs = new IntersectionObserver(intersectViewportAbove, options);
      obs.observe(el);
      return obs;
    });
  }

  function updateViewportBelowIO() {
    if (io.viewportBelow) { io.viewportBelow.forEach(function (d) { return d.disconnect(); }); }
    io.viewportBelow = stepEl.map(function (el, i) {
      var marginTop = -(offsetMargin + stepOffsetHeight[i]);
      var marginBottom =
        ph - stepOffsetTop[i] - stepOffsetHeight[i] - offsetMargin;
      var rootMargin = marginTop + "px 0px " + marginBottom + "px 0px";
      var options = {
        root: null,
        rootMargin: rootMargin,
        threshold: 0
      };

      var obs = new IntersectionObserver(intersectViewportBelow, options);
      obs.observe(el);
      return obs;
    });
  }

  // progress progress tracker
  function updateStepProgressIO() {
    if (io.stepProgress) { io.stepProgress.forEach(function (d) { return d.disconnect(); }); }

    io.stepProgress = stepEl.map(function (el, i) {
      var marginTop = stepOffsetHeight[i] - offsetMargin;
      var marginBottom = -vh + offsetMargin;
      var rootMargin = marginTop + "px 0px " + marginBottom + "px 0px";

      var threshold = createThreshold(stepOffsetHeight[i]);
      var options = {
        root: null,
        rootMargin: rootMargin,
        threshold: threshold
      };

      var obs = new IntersectionObserver(intersectStepProgress, options);
      obs.observe(el);
      return obs;
    });
  }

  function updateIO() {
    updateViewportAboveIO();
    updateViewportBelowIO();
    updateStepAboveIO();
    updateStepBelowIO();

    if (progressMode) { updateStepProgressIO(); }

    if (containerEl && graphicEl) {
      updateTopIO();
      updateBottomIO();
    }
  }

  // SETUP FUNCTIONS

  function indexSteps() {
    stepEl.forEach(function (el, i) { return el.setAttribute('data-scrollama-index', i); });
  }

  function setupStates() {
    stepStates = stepEl.map(function () { return ({
      direction: null,
      state: null
    }); });

    containerState = { direction: null, state: null };
  }

  function addDebug() {
    if (debugMode) { setup({ id: id, stepEl: stepEl, offsetVal: offsetVal }); }
  }

  var S = {};

  S.setup = function (ref) {
    var container = ref.container;
    var graphic = ref.graphic;
    var step = ref.step;
    var offset = ref.offset; if ( offset === void 0 ) offset = 0.5;
    var progress = ref.progress; if ( progress === void 0 ) progress = false;
    var threshold = ref.threshold; if ( threshold === void 0 ) threshold = 4;
    var debug = ref.debug; if ( debug === void 0 ) debug = false;
    var order = ref.order; if ( order === void 0 ) order = true;
    var once = ref.once; if ( once === void 0 ) once = false;

    id = generateId();
    // elements
    stepEl = selectAll(step);
    containerEl = container ? select(container) : null;
    graphicEl = graphic ? select(graphic) : null;

    // error if no step selected
    if (!stepEl.length) {
      console.error('scrollama error: no step elements');
      return S;
    }

    // options
    debugMode = debug;
    progressMode = progress;
    preserveOrder = order;
    triggerOnce = once;

    S.offsetTrigger(offset);
    progressThreshold = Math.max(1, +threshold);

    isReady = true;

    // customize
    addDebug();
    indexSteps();
    setupStates();
    handleResize();
    handleEnable(true);
    return S;
  };

  S.resize = function () {
    handleResize();
    return S;
  };

  S.enable = function () {
    handleEnable(true);
    return S;
  };

  S.disable = function () {
    handleEnable(false);
    return S;
  };

  S.destroy = function () {
    handleEnable(false);
    Object.keys(callback).forEach(function (c) { return (callback[c] = null); });
    Object.keys(io).forEach(function (i) { return (io[i] = null); });
  };

  S.offsetTrigger = function(x) {
    if (x && !isNaN(x)) {
      offsetVal = Math.min(Math.max(0, x), 1);
      return S;
    }
    return offsetVal;
  };

  S.onStepEnter = function (cb) {
    callback.stepEnter = cb;
    return S;
  };

  S.onStepExit = function (cb) {
    callback.stepExit = cb;
    return S;
  };

  S.onStepProgress = function (cb) {
    callback.stepProgress = cb;
    return S;
  };

  S.onContainerEnter = function (cb) {
    callback.containerEnter = cb;
    return S;
  };

  S.onContainerExit = function (cb) {
    callback.containerExit = cb;
    return S;
  };

  return S;
}

return scrollama;

})));


/***/ }),

/***/ "./node_modules/throttle-debounce/index.esm.js":
/*!*****************************************************!*\
  !*** ./node_modules/throttle-debounce/index.esm.js ***!
  \*****************************************************/
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
function throttle ( delay, noTrailing, callback, debounceMode ) {

	/*
	 * After wrapper has stopped being called, this timeout ensures that
	 * `callback` is executed at the proper times in `throttle` and `end`
	 * debounce modes.
	 */
	var timeoutID;

	// Keep track of the last time `callback` was executed.
	var lastExec = 0;

	// `noTrailing` defaults to falsy.
	if ( typeof noTrailing !== 'boolean' ) {
		debounceMode = callback;
		callback = noTrailing;
		noTrailing = undefined;
	}

	/*
	 * The `wrapper` function encapsulates all of the throttling / debouncing
	 * functionality and when executed will limit the rate at which `callback`
	 * is executed.
	 */
	function wrapper () {

		var self = this;
		var elapsed = Number(new Date()) - lastExec;
		var args = arguments;

		// Execute `callback` and update the `lastExec` timestamp.
		function exec () {
			lastExec = Number(new Date());
			callback.apply(self, args);
		}

		/*
		 * If `debounceMode` is true (at begin) this is used to clear the flag
		 * to allow future `callback` executions.
		 */
		function clear () {
			timeoutID = undefined;
		}

		if ( debounceMode && !timeoutID ) {
			/*
			 * Since `wrapper` is being called for the first time and
			 * `debounceMode` is true (at begin), execute `callback`.
			 */
			exec();
		}

		// Clear any existing timeout.
		if ( timeoutID ) {
			clearTimeout(timeoutID);
		}

		if ( debounceMode === undefined && elapsed > delay ) {
			/*
			 * In throttle mode, if `delay` time has been exceeded, execute
			 * `callback`.
			 */
			exec();

		} else if ( noTrailing !== true ) {
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

	// Return the wrapper function.
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
function debounce ( delay, atBegin, callback ) {
	return callback === undefined ? throttle(delay, atBegin, false) : throttle(delay, callback, atBegin !== false);
}




/***/ }),

/***/ "./node_modules/ua-parser-js/src/ua-parser.js":
/*!****************************************************!*\
  !*** ./node_modules/ua-parser-js/src/ua-parser.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * UAParser.js v0.7.18
 * Lightweight JavaScript-based User-Agent string parser
 * https://github.com/faisalman/ua-parser-js
 *
 * Copyright © 2012-2016 Faisal Salman <fyzlman@gmail.com>
 * Dual licensed under GPLv2 or MIT
 */

(function (window, undefined) {

    'use strict';

    //////////////
    // Constants
    /////////////


    var LIBVERSION  = '0.7.18',
        EMPTY       = '',
        UNKNOWN     = '?',
        FUNC_TYPE   = 'function',
        UNDEF_TYPE  = 'undefined',
        OBJ_TYPE    = 'object',
        STR_TYPE    = 'string',
        MAJOR       = 'major', // deprecated
        MODEL       = 'model',
        NAME        = 'name',
        TYPE        = 'type',
        VENDOR      = 'vendor',
        VERSION     = 'version',
        ARCHITECTURE= 'architecture',
        CONSOLE     = 'console',
        MOBILE      = 'mobile',
        TABLET      = 'tablet',
        SMARTTV     = 'smarttv',
        WEARABLE    = 'wearable',
        EMBEDDED    = 'embedded';


    ///////////
    // Helper
    //////////


    var util = {
        extend : function (regexes, extensions) {
            var margedRegexes = {};
            for (var i in regexes) {
                if (extensions[i] && extensions[i].length % 2 === 0) {
                    margedRegexes[i] = extensions[i].concat(regexes[i]);
                } else {
                    margedRegexes[i] = regexes[i];
                }
            }
            return margedRegexes;
        },
        has : function (str1, str2) {
          if (typeof str1 === "string") {
            return str2.toLowerCase().indexOf(str1.toLowerCase()) !== -1;
          } else {
            return false;
          }
        },
        lowerize : function (str) {
            return str.toLowerCase();
        },
        major : function (version) {
            return typeof(version) === STR_TYPE ? version.replace(/[^\d\.]/g,'').split(".")[0] : undefined;
        },
        trim : function (str) {
          return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
        }
    };


    ///////////////
    // Map helper
    //////////////


    var mapper = {

        rgx : function (ua, arrays) {

            //var result = {},
            var i = 0, j, k, p, q, matches, match;//, args = arguments;

            /*// construct object barebones
            for (p = 0; p < args[1].length; p++) {
                q = args[1][p];
                result[typeof q === OBJ_TYPE ? q[0] : q] = undefined;
            }*/

            // loop through all regexes maps
            while (i < arrays.length && !matches) {

                var regex = arrays[i],       // even sequence (0,2,4,..)
                    props = arrays[i + 1];   // odd sequence (1,3,5,..)
                j = k = 0;

                // try matching uastring with regexes
                while (j < regex.length && !matches) {

                    matches = regex[j++].exec(ua);

                    if (!!matches) {
                        for (p = 0; p < props.length; p++) {
                            match = matches[++k];
                            q = props[p];
                            // check if given property is actually array
                            if (typeof q === OBJ_TYPE && q.length > 0) {
                                if (q.length == 2) {
                                    if (typeof q[1] == FUNC_TYPE) {
                                        // assign modified match
                                        this[q[0]] = q[1].call(this, match);
                                    } else {
                                        // assign given value, ignore regex match
                                        this[q[0]] = q[1];
                                    }
                                } else if (q.length == 3) {
                                    // check whether function or regex
                                    if (typeof q[1] === FUNC_TYPE && !(q[1].exec && q[1].test)) {
                                        // call function (usually string mapper)
                                        this[q[0]] = match ? q[1].call(this, match, q[2]) : undefined;
                                    } else {
                                        // sanitize match using given regex
                                        this[q[0]] = match ? match.replace(q[1], q[2]) : undefined;
                                    }
                                } else if (q.length == 4) {
                                        this[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : undefined;
                                }
                            } else {
                                this[q] = match ? match : undefined;
                            }
                        }
                    }
                }
                i += 2;
            }
            // console.log(this);
            //return this;
        },

        str : function (str, map) {

            for (var i in map) {
                // check if array
                if (typeof map[i] === OBJ_TYPE && map[i].length > 0) {
                    for (var j = 0; j < map[i].length; j++) {
                        if (util.has(map[i][j], str)) {
                            return (i === UNKNOWN) ? undefined : i;
                        }
                    }
                } else if (util.has(map[i], str)) {
                    return (i === UNKNOWN) ? undefined : i;
                }
            }
            return str;
        }
    };


    ///////////////
    // String map
    //////////////


    var maps = {

        browser : {
            oldsafari : {
                version : {
                    '1.0'   : '/8',
                    '1.2'   : '/1',
                    '1.3'   : '/3',
                    '2.0'   : '/412',
                    '2.0.2' : '/416',
                    '2.0.3' : '/417',
                    '2.0.4' : '/419',
                    '?'     : '/'
                }
            }
        },

        device : {
            amazon : {
                model : {
                    'Fire Phone' : ['SD', 'KF']
                }
            },
            sprint : {
                model : {
                    'Evo Shift 4G' : '7373KT'
                },
                vendor : {
                    'HTC'       : 'APA',
                    'Sprint'    : 'Sprint'
                }
            }
        },

        os : {
            windows : {
                version : {
                    'ME'        : '4.90',
                    'NT 3.11'   : 'NT3.51',
                    'NT 4.0'    : 'NT4.0',
                    '2000'      : 'NT 5.0',
                    'XP'        : ['NT 5.1', 'NT 5.2'],
                    'Vista'     : 'NT 6.0',
                    '7'         : 'NT 6.1',
                    '8'         : 'NT 6.2',
                    '8.1'       : 'NT 6.3',
                    '10'        : ['NT 6.4', 'NT 10.0'],
                    'RT'        : 'ARM'
                }
            }
        }
    };


    //////////////
    // Regex map
    /////////////


    var regexes = {

        browser : [[

            // Presto based
            /(opera\smini)\/([\w\.-]+)/i,                                       // Opera Mini
            /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,                      // Opera Mobi/Tablet
            /(opera).+version\/([\w\.]+)/i,                                     // Opera > 9.80
            /(opera)[\/\s]+([\w\.]+)/i                                          // Opera < 9.80
            ], [NAME, VERSION], [

            /(opios)[\/\s]+([\w\.]+)/i                                          // Opera mini on iphone >= 8.0
            ], [[NAME, 'Opera Mini'], VERSION], [

            /\s(opr)\/([\w\.]+)/i                                               // Opera Webkit
            ], [[NAME, 'Opera'], VERSION], [

            // Mixed
            /(kindle)\/([\w\.]+)/i,                                             // Kindle
            /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,
                                                                                // Lunascape/Maxthon/Netfront/Jasmine/Blazer

            // Trident based
            /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,
                                                                                // Avant/IEMobile/SlimBrowser/Baidu
            /(?:ms|\()(ie)\s([\w\.]+)/i,                                        // Internet Explorer

            // Webkit/KHTML based
            /(rekonq)\/([\w\.]*)/i,                                             // Rekonq
            /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark)\/([\w\.-]+)/i
                                                                                // Chromium/Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron/Iridium/PhantomJS/Bowser
            ], [NAME, VERSION], [

            /(trident).+rv[:\s]([\w\.]+).+like\sgecko/i                         // IE11
            ], [[NAME, 'IE'], VERSION], [

            /(edge|edgios|edgea)\/((\d+)?[\w\.]+)/i                             // Microsoft Edge
            ], [[NAME, 'Edge'], VERSION], [

            /(yabrowser)\/([\w\.]+)/i                                           // Yandex
            ], [[NAME, 'Yandex'], VERSION], [

            /(puffin)\/([\w\.]+)/i                                              // Puffin
            ], [[NAME, 'Puffin'], VERSION], [

            /((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i
                                                                                // UCBrowser
            ], [[NAME, 'UCBrowser'], VERSION], [

            /(comodo_dragon)\/([\w\.]+)/i                                       // Comodo Dragon
            ], [[NAME, /_/g, ' '], VERSION], [

            /(micromessenger)\/([\w\.]+)/i                                      // WeChat
            ], [[NAME, 'WeChat'], VERSION], [

            /(qqbrowserlite)\/([\w\.]+)/i                                       // QQBrowserLite
            ], [NAME, VERSION], [

            /(QQ)\/([\d\.]+)/i                                                  // QQ, aka ShouQ
            ], [NAME, VERSION], [

            /m?(qqbrowser)[\/\s]?([\w\.]+)/i                                    // QQBrowser
            ], [NAME, VERSION], [

            /(BIDUBrowser)[\/\s]?([\w\.]+)/i                                    // Baidu Browser
            ], [NAME, VERSION], [

            /(2345Explorer)[\/\s]?([\w\.]+)/i                                   // 2345 Browser
            ], [NAME, VERSION], [

            /(MetaSr)[\/\s]?([\w\.]+)/i                                         // SouGouBrowser
            ], [NAME], [

            /(LBBROWSER)/i                                      // LieBao Browser
            ], [NAME], [

            /xiaomi\/miuibrowser\/([\w\.]+)/i                                   // MIUI Browser
            ], [VERSION, [NAME, 'MIUI Browser']], [

            /;fbav\/([\w\.]+);/i                                                // Facebook App for iOS & Android
            ], [VERSION, [NAME, 'Facebook']], [

            /headlesschrome(?:\/([\w\.]+)|\s)/i                                 // Chrome Headless
            ], [VERSION, [NAME, 'Chrome Headless']], [

            /\swv\).+(chrome)\/([\w\.]+)/i                                      // Chrome WebView
            ], [[NAME, /(.+)/, '$1 WebView'], VERSION], [

            /((?:oculus|samsung)browser)\/([\w\.]+)/i
            ], [[NAME, /(.+(?:g|us))(.+)/, '$1 $2'], VERSION], [                // Oculus / Samsung Browser

            /android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i        // Android Browser
            ], [VERSION, [NAME, 'Android Browser']], [

            /(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i
                                                                                // Chrome/OmniWeb/Arora/Tizen/Nokia
            ], [NAME, VERSION], [

            /(dolfin)\/([\w\.]+)/i                                              // Dolphin
            ], [[NAME, 'Dolphin'], VERSION], [

            /((?:android.+)crmo|crios)\/([\w\.]+)/i                             // Chrome for Android/iOS
            ], [[NAME, 'Chrome'], VERSION], [

            /(coast)\/([\w\.]+)/i                                               // Opera Coast
            ], [[NAME, 'Opera Coast'], VERSION], [

            /fxios\/([\w\.-]+)/i                                                // Firefox for iOS
            ], [VERSION, [NAME, 'Firefox']], [

            /version\/([\w\.]+).+?mobile\/\w+\s(safari)/i                       // Mobile Safari
            ], [VERSION, [NAME, 'Mobile Safari']], [

            /version\/([\w\.]+).+?(mobile\s?safari|safari)/i                    // Safari & Safari Mobile
            ], [VERSION, NAME], [

            /webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i  // Google Search Appliance on iOS
            ], [[NAME, 'GSA'], VERSION], [

            /webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i                     // Safari < 3.0
            ], [NAME, [VERSION, mapper.str, maps.browser.oldsafari.version]], [

            /(konqueror)\/([\w\.]+)/i,                                          // Konqueror
            /(webkit|khtml)\/([\w\.]+)/i
            ], [NAME, VERSION], [

            // Gecko based
            /(navigator|netscape)\/([\w\.-]+)/i                                 // Netscape
            ], [[NAME, 'Netscape'], VERSION], [
            /(swiftfox)/i,                                                      // Swiftfox
            /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,
                                                                                // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror
            /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,

                                                                                // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
            /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,                          // Mozilla

            // Other
            /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,
                                                                                // Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Sleipnir
            /(links)\s\(([\w\.]+)/i,                                            // Links
            /(gobrowser)\/?([\w\.]*)/i,                                         // GoBrowser
            /(ice\s?browser)\/v?([\w\._]+)/i,                                   // ICE Browser
            /(mosaic)[\/\s]([\w\.]+)/i                                          // Mosaic
            ], [NAME, VERSION]

            /* /////////////////////
            // Media players BEGIN
            ////////////////////////

            , [

            /(apple(?:coremedia|))\/((\d+)[\w\._]+)/i,                          // Generic Apple CoreMedia
            /(coremedia) v((\d+)[\w\._]+)/i
            ], [NAME, VERSION], [

            /(aqualung|lyssna|bsplayer)\/((\d+)?[\w\.-]+)/i                     // Aqualung/Lyssna/BSPlayer
            ], [NAME, VERSION], [

            /(ares|ossproxy)\s((\d+)[\w\.-]+)/i                                 // Ares/OSSProxy
            ], [NAME, VERSION], [

            /(audacious|audimusicstream|amarok|bass|core|dalvik|gnomemplayer|music on console|nsplayer|psp-internetradioplayer|videos)\/((\d+)[\w\.-]+)/i,
                                                                                // Audacious/AudiMusicStream/Amarok/BASS/OpenCORE/Dalvik/GnomeMplayer/MoC
                                                                                // NSPlayer/PSP-InternetRadioPlayer/Videos
            /(clementine|music player daemon)\s((\d+)[\w\.-]+)/i,               // Clementine/MPD
            /(lg player|nexplayer)\s((\d+)[\d\.]+)/i,
            /player\/(nexplayer|lg player)\s((\d+)[\w\.-]+)/i                   // NexPlayer/LG Player
            ], [NAME, VERSION], [
            /(nexplayer)\s((\d+)[\w\.-]+)/i                                     // Nexplayer
            ], [NAME, VERSION], [

            /(flrp)\/((\d+)[\w\.-]+)/i                                          // Flip Player
            ], [[NAME, 'Flip Player'], VERSION], [

            /(fstream|nativehost|queryseekspider|ia-archiver|facebookexternalhit)/i
                                                                                // FStream/NativeHost/QuerySeekSpider/IA Archiver/facebookexternalhit
            ], [NAME], [

            /(gstreamer) souphttpsrc (?:\([^\)]+\)){0,1} libsoup\/((\d+)[\w\.-]+)/i
                                                                                // Gstreamer
            ], [NAME, VERSION], [

            /(htc streaming player)\s[\w_]+\s\/\s((\d+)[\d\.]+)/i,              // HTC Streaming Player
            /(java|python-urllib|python-requests|wget|libcurl)\/((\d+)[\w\.-_]+)/i,
                                                                                // Java/urllib/requests/wget/cURL
            /(lavf)((\d+)[\d\.]+)/i                                             // Lavf (FFMPEG)
            ], [NAME, VERSION], [

            /(htc_one_s)\/((\d+)[\d\.]+)/i                                      // HTC One S
            ], [[NAME, /_/g, ' '], VERSION], [

            /(mplayer)(?:\s|\/)(?:(?:sherpya-){0,1}svn)(?:-|\s)(r\d+(?:-\d+[\w\.-]+){0,1})/i
                                                                                // MPlayer SVN
            ], [NAME, VERSION], [

            /(mplayer)(?:\s|\/|[unkow-]+)((\d+)[\w\.-]+)/i                      // MPlayer
            ], [NAME, VERSION], [

            /(mplayer)/i,                                                       // MPlayer (no other info)
            /(yourmuze)/i,                                                      // YourMuze
            /(media player classic|nero showtime)/i                             // Media Player Classic/Nero ShowTime
            ], [NAME], [

            /(nero (?:home|scout))\/((\d+)[\w\.-]+)/i                           // Nero Home/Nero Scout
            ], [NAME, VERSION], [

            /(nokia\d+)\/((\d+)[\w\.-]+)/i                                      // Nokia
            ], [NAME, VERSION], [

            /\s(songbird)\/((\d+)[\w\.-]+)/i                                    // Songbird/Philips-Songbird
            ], [NAME, VERSION], [

            /(winamp)3 version ((\d+)[\w\.-]+)/i,                               // Winamp
            /(winamp)\s((\d+)[\w\.-]+)/i,
            /(winamp)mpeg\/((\d+)[\w\.-]+)/i
            ], [NAME, VERSION], [

            /(ocms-bot|tapinradio|tunein radio|unknown|winamp|inlight radio)/i  // OCMS-bot/tap in radio/tunein/unknown/winamp (no other info)
                                                                                // inlight radio
            ], [NAME], [

            /(quicktime|rma|radioapp|radioclientapplication|soundtap|totem|stagefright|streamium)\/((\d+)[\w\.-]+)/i
                                                                                // QuickTime/RealMedia/RadioApp/RadioClientApplication/
                                                                                // SoundTap/Totem/Stagefright/Streamium
            ], [NAME, VERSION], [

            /(smp)((\d+)[\d\.]+)/i                                              // SMP
            ], [NAME, VERSION], [

            /(vlc) media player - version ((\d+)[\w\.]+)/i,                     // VLC Videolan
            /(vlc)\/((\d+)[\w\.-]+)/i,
            /(xbmc|gvfs|xine|xmms|irapp)\/((\d+)[\w\.-]+)/i,                    // XBMC/gvfs/Xine/XMMS/irapp
            /(foobar2000)\/((\d+)[\d\.]+)/i,                                    // Foobar2000
            /(itunes)\/((\d+)[\d\.]+)/i                                         // iTunes
            ], [NAME, VERSION], [

            /(wmplayer)\/((\d+)[\w\.-]+)/i,                                     // Windows Media Player
            /(windows-media-player)\/((\d+)[\w\.-]+)/i
            ], [[NAME, /-/g, ' '], VERSION], [

            /windows\/((\d+)[\w\.-]+) upnp\/[\d\.]+ dlnadoc\/[\d\.]+ (home media server)/i
                                                                                // Windows Media Server
            ], [VERSION, [NAME, 'Windows']], [

            /(com\.riseupradioalarm)\/((\d+)[\d\.]*)/i                          // RiseUP Radio Alarm
            ], [NAME, VERSION], [

            /(rad.io)\s((\d+)[\d\.]+)/i,                                        // Rad.io
            /(radio.(?:de|at|fr))\s((\d+)[\d\.]+)/i
            ], [[NAME, 'rad.io'], VERSION]

            //////////////////////
            // Media players END
            ////////////////////*/

        ],

        cpu : [[

            /(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i                     // AMD64
            ], [[ARCHITECTURE, 'amd64']], [

            /(ia32(?=;))/i                                                      // IA32 (quicktime)
            ], [[ARCHITECTURE, util.lowerize]], [

            /((?:i[346]|x)86)[;\)]/i                                            // IA32
            ], [[ARCHITECTURE, 'ia32']], [

            // PocketPC mistakenly identified as PowerPC
            /windows\s(ce|mobile);\sppc;/i
            ], [[ARCHITECTURE, 'arm']], [

            /((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i                           // PowerPC
            ], [[ARCHITECTURE, /ower/, '', util.lowerize]], [

            /(sun4\w)[;\)]/i                                                    // SPARC
            ], [[ARCHITECTURE, 'sparc']], [

            /((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i
                                                                                // IA64, 68K, ARM/64, AVR/32, IRIX/64, MIPS/64, SPARC/64, PA-RISC
            ], [[ARCHITECTURE, util.lowerize]]
        ],

        device : [[

            /\((ipad|playbook);[\w\s\);-]+(rim|apple)/i                         // iPad/PlayBook
            ], [MODEL, VENDOR, [TYPE, TABLET]], [

            /applecoremedia\/[\w\.]+ \((ipad)/                                  // iPad
            ], [MODEL, [VENDOR, 'Apple'], [TYPE, TABLET]], [

            /(apple\s{0,1}tv)/i                                                 // Apple TV
            ], [[MODEL, 'Apple TV'], [VENDOR, 'Apple']], [

            /(archos)\s(gamepad2?)/i,                                           // Archos
            /(hp).+(touchpad)/i,                                                // HP TouchPad
            /(hp).+(tablet)/i,                                                  // HP Tablet
            /(kindle)\/([\w\.]+)/i,                                             // Kindle
            /\s(nook)[\w\s]+build\/(\w+)/i,                                     // Nook
            /(dell)\s(strea[kpr\s\d]*[\dko])/i                                  // Dell Streak
            ], [VENDOR, MODEL, [TYPE, TABLET]], [

            /(kf[A-z]+)\sbuild\/.+silk\//i                                      // Kindle Fire HD
            ], [MODEL, [VENDOR, 'Amazon'], [TYPE, TABLET]], [
            /(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i                         // Fire Phone
            ], [[MODEL, mapper.str, maps.device.amazon.model], [VENDOR, 'Amazon'], [TYPE, MOBILE]], [

            /\((ip[honed|\s\w*]+);.+(apple)/i                                   // iPod/iPhone
            ], [MODEL, VENDOR, [TYPE, MOBILE]], [
            /\((ip[honed|\s\w*]+);/i                                            // iPod/iPhone
            ], [MODEL, [VENDOR, 'Apple'], [TYPE, MOBILE]], [

            /(blackberry)[\s-]?(\w+)/i,                                         // BlackBerry
            /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,
                                                                                // BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Meizu/Motorola/Polytron
            /(hp)\s([\w\s]+\w)/i,                                               // HP iPAQ
            /(asus)-?(\w+)/i                                                    // Asus
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [
            /\(bb10;\s(\w+)/i                                                   // BlackBerry 10
            ], [MODEL, [VENDOR, 'BlackBerry'], [TYPE, MOBILE]], [
                                                                                // Asus Tablets
            /android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i
            ], [MODEL, [VENDOR, 'Asus'], [TYPE, TABLET]], [

            /(sony)\s(tablet\s[ps])\sbuild\//i,                                  // Sony
            /(sony)?(?:sgp.+)\sbuild\//i
            ], [[VENDOR, 'Sony'], [MODEL, 'Xperia Tablet'], [TYPE, TABLET]], [
            /android.+\s([c-g]\d{4}|so[-l]\w+)\sbuild\//i
            ], [MODEL, [VENDOR, 'Sony'], [TYPE, MOBILE]], [

            /\s(ouya)\s/i,                                                      // Ouya
            /(nintendo)\s([wids3u]+)/i                                          // Nintendo
            ], [VENDOR, MODEL, [TYPE, CONSOLE]], [

            /android.+;\s(shield)\sbuild/i                                      // Nvidia
            ], [MODEL, [VENDOR, 'Nvidia'], [TYPE, CONSOLE]], [

            /(playstation\s[34portablevi]+)/i                                   // Playstation
            ], [MODEL, [VENDOR, 'Sony'], [TYPE, CONSOLE]], [

            /(sprint\s(\w+))/i                                                  // Sprint Phones
            ], [[VENDOR, mapper.str, maps.device.sprint.vendor], [MODEL, mapper.str, maps.device.sprint.model], [TYPE, MOBILE]], [

            /(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i                         // Lenovo tablets
            ], [VENDOR, MODEL, [TYPE, TABLET]], [

            /(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,                               // HTC
            /(zte)-(\w*)/i,                                                     // ZTE
            /(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i
                                                                                // Alcatel/GeeksPhone/Lenovo/Nexian/Panasonic/Sony
            ], [VENDOR, [MODEL, /_/g, ' '], [TYPE, MOBILE]], [

            /(nexus\s9)/i                                                       // HTC Nexus 9
            ], [MODEL, [VENDOR, 'HTC'], [TYPE, TABLET]], [

            /d\/huawei([\w\s-]+)[;\)]/i,
            /(nexus\s6p)/i                                                      // Huawei
            ], [MODEL, [VENDOR, 'Huawei'], [TYPE, MOBILE]], [

            /(microsoft);\s(lumia[\s\w]+)/i                                     // Microsoft Lumia
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [

            /[\s\(;](xbox(?:\sone)?)[\s\);]/i                                   // Microsoft Xbox
            ], [MODEL, [VENDOR, 'Microsoft'], [TYPE, CONSOLE]], [
            /(kin\.[onetw]{3})/i                                                // Microsoft Kin
            ], [[MODEL, /\./g, ' '], [VENDOR, 'Microsoft'], [TYPE, MOBILE]], [

                                                                                // Motorola
            /\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,
            /mot[\s-]?(\w*)/i,
            /(XT\d{3,4}) build\//i,
            /(nexus\s6)/i
            ], [MODEL, [VENDOR, 'Motorola'], [TYPE, MOBILE]], [
            /android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i
            ], [MODEL, [VENDOR, 'Motorola'], [TYPE, TABLET]], [

            /hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i            // HbbTV devices
            ], [[VENDOR, util.trim], [MODEL, util.trim], [TYPE, SMARTTV]], [

            /hbbtv.+maple;(\d+)/i
            ], [[MODEL, /^/, 'SmartTV'], [VENDOR, 'Samsung'], [TYPE, SMARTTV]], [

            /\(dtv[\);].+(aquos)/i                                              // Sharp
            ], [MODEL, [VENDOR, 'Sharp'], [TYPE, SMARTTV]], [

            /android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,
            /((SM-T\w+))/i
            ], [[VENDOR, 'Samsung'], MODEL, [TYPE, TABLET]], [                  // Samsung
            /smart-tv.+(samsung)/i
            ], [VENDOR, [TYPE, SMARTTV], MODEL], [
            /((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,
            /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i,
            /sec-((sgh\w+))/i
            ], [[VENDOR, 'Samsung'], MODEL, [TYPE, MOBILE]], [

            /sie-(\w*)/i                                                        // Siemens
            ], [MODEL, [VENDOR, 'Siemens'], [TYPE, MOBILE]], [

            /(maemo|nokia).*(n900|lumia\s\d+)/i,                                // Nokia
            /(nokia)[\s_-]?([\w-]*)/i
            ], [[VENDOR, 'Nokia'], MODEL, [TYPE, MOBILE]], [

            /android\s3\.[\s\w;-]{10}(a\d{3})/i                                 // Acer
            ], [MODEL, [VENDOR, 'Acer'], [TYPE, TABLET]], [

            /android.+([vl]k\-?\d{3})\s+build/i                                 // LG Tablet
            ], [MODEL, [VENDOR, 'LG'], [TYPE, TABLET]], [
            /android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i                     // LG Tablet
            ], [[VENDOR, 'LG'], MODEL, [TYPE, TABLET]], [
            /(lg) netcast\.tv/i                                                 // LG SmartTV
            ], [VENDOR, MODEL, [TYPE, SMARTTV]], [
            /(nexus\s[45])/i,                                                   // LG
            /lg[e;\s\/-]+(\w*)/i,
            /android.+lg(\-?[\d\w]+)\s+build/i
            ], [MODEL, [VENDOR, 'LG'], [TYPE, MOBILE]], [

            /android.+(ideatab[a-z0-9\-\s]+)/i                                  // Lenovo
            ], [MODEL, [VENDOR, 'Lenovo'], [TYPE, TABLET]], [

            /linux;.+((jolla));/i                                               // Jolla
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [

            /((pebble))app\/[\d\.]+\s/i                                         // Pebble
            ], [VENDOR, MODEL, [TYPE, WEARABLE]], [

            /android.+;\s(oppo)\s?([\w\s]+)\sbuild/i                            // OPPO
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [

            /crkey/i                                                            // Google Chromecast
            ], [[MODEL, 'Chromecast'], [VENDOR, 'Google']], [

            /android.+;\s(glass)\s\d/i                                          // Google Glass
            ], [MODEL, [VENDOR, 'Google'], [TYPE, WEARABLE]], [

            /android.+;\s(pixel c)\s/i                                          // Google Pixel C
            ], [MODEL, [VENDOR, 'Google'], [TYPE, TABLET]], [

            /android.+;\s(pixel xl|pixel)\s/i                                   // Google Pixel
            ], [MODEL, [VENDOR, 'Google'], [TYPE, MOBILE]], [

            /android.+;\s(\w+)\s+build\/hm\1/i,                                 // Xiaomi Hongmi 'numeric' models
            /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,               // Xiaomi Hongmi
            /android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i,    // Xiaomi Mi
            /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i       // Redmi Phones
            ], [[MODEL, /_/g, ' '], [VENDOR, 'Xiaomi'], [TYPE, MOBILE]], [
            /android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i            // Mi Pad tablets
            ],[[MODEL, /_/g, ' '], [VENDOR, 'Xiaomi'], [TYPE, TABLET]], [
            /android.+;\s(m[1-5]\snote)\sbuild/i                                // Meizu Tablet
            ], [MODEL, [VENDOR, 'Meizu'], [TYPE, TABLET]], [

            /android.+a000(1)\s+build/i,                                        // OnePlus
            /android.+oneplus\s(a\d{4})\s+build/i
            ], [MODEL, [VENDOR, 'OnePlus'], [TYPE, MOBILE]], [

            /android.+[;\/]\s*(RCT[\d\w]+)\s+build/i                            // RCA Tablets
            ], [MODEL, [VENDOR, 'RCA'], [TYPE, TABLET]], [

            /android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i                      // Dell Venue Tablets
            ], [MODEL, [VENDOR, 'Dell'], [TYPE, TABLET]], [

            /android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i                         // Verizon Tablet
            ], [MODEL, [VENDOR, 'Verizon'], [TYPE, TABLET]], [

            /android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i     // Barnes & Noble Tablet
            ], [[VENDOR, 'Barnes & Noble'], MODEL, [TYPE, TABLET]], [

            /android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i                           // Barnes & Noble Tablet
            ], [MODEL, [VENDOR, 'NuVision'], [TYPE, TABLET]], [

            /android.+;\s(k88)\sbuild/i                                         // ZTE K Series Tablet
            ], [MODEL, [VENDOR, 'ZTE'], [TYPE, TABLET]], [

            /android.+[;\/]\s*(gen\d{3})\s+build.*49h/i                         // Swiss GEN Mobile
            ], [MODEL, [VENDOR, 'Swiss'], [TYPE, MOBILE]], [

            /android.+[;\/]\s*(zur\d{3})\s+build/i                              // Swiss ZUR Tablet
            ], [MODEL, [VENDOR, 'Swiss'], [TYPE, TABLET]], [

            /android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i                         // Zeki Tablets
            ], [MODEL, [VENDOR, 'Zeki'], [TYPE, TABLET]], [

            /(android).+[;\/]\s+([YR]\d{2})\s+build/i,
            /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i        // Dragon Touch Tablet
            ], [[VENDOR, 'Dragon Touch'], MODEL, [TYPE, TABLET]], [

            /android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i                            // Insignia Tablets
            ], [MODEL, [VENDOR, 'Insignia'], [TYPE, TABLET]], [

            /android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i                    // NextBook Tablets
            ], [MODEL, [VENDOR, 'NextBook'], [TYPE, TABLET]], [

            /android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i
            ], [[VENDOR, 'Voice'], MODEL, [TYPE, MOBILE]], [                    // Voice Xtreme Phones

            /android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i                     // LvTel Phones
            ], [[VENDOR, 'LvTel'], MODEL, [TYPE, MOBILE]], [

            /android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i          // Envizen Tablets
            ], [MODEL, [VENDOR, 'Envizen'], [TYPE, TABLET]], [

            /android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i          // Le Pan Tablets
            ], [VENDOR, MODEL, [TYPE, TABLET]], [

            /android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i                         // MachSpeed Tablets
            ], [MODEL, [VENDOR, 'MachSpeed'], [TYPE, TABLET]], [

            /android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i                // Trinity Tablets
            ], [VENDOR, MODEL, [TYPE, TABLET]], [

            /android.+[;\/]\s*TU_(1491)\s+build/i                               // Rotor Tablets
            ], [MODEL, [VENDOR, 'Rotor'], [TYPE, TABLET]], [

            /android.+(KS(.+))\s+build/i                                        // Amazon Kindle Tablets
            ], [MODEL, [VENDOR, 'Amazon'], [TYPE, TABLET]], [

            /android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i                      // Gigaset Tablets
            ], [VENDOR, MODEL, [TYPE, TABLET]], [

            /\s(tablet|tab)[;\/]/i,                                             // Unidentifiable Tablet
            /\s(mobile)(?:[;\/]|\ssafari)/i                                     // Unidentifiable Mobile
            ], [[TYPE, util.lowerize], VENDOR, MODEL], [

            /(android[\w\.\s\-]{0,9});.+build/i                                 // Generic Android Device
            ], [MODEL, [VENDOR, 'Generic']]


        /*//////////////////////////
            // TODO: move to string map
            ////////////////////////////

            /(C6603)/i                                                          // Sony Xperia Z C6603
            ], [[MODEL, 'Xperia Z C6603'], [VENDOR, 'Sony'], [TYPE, MOBILE]], [
            /(C6903)/i                                                          // Sony Xperia Z 1
            ], [[MODEL, 'Xperia Z 1'], [VENDOR, 'Sony'], [TYPE, MOBILE]], [

            /(SM-G900[F|H])/i                                                   // Samsung Galaxy S5
            ], [[MODEL, 'Galaxy S5'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
            /(SM-G7102)/i                                                       // Samsung Galaxy Grand 2
            ], [[MODEL, 'Galaxy Grand 2'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
            /(SM-G530H)/i                                                       // Samsung Galaxy Grand Prime
            ], [[MODEL, 'Galaxy Grand Prime'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
            /(SM-G313HZ)/i                                                      // Samsung Galaxy V
            ], [[MODEL, 'Galaxy V'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
            /(SM-T805)/i                                                        // Samsung Galaxy Tab S 10.5
            ], [[MODEL, 'Galaxy Tab S 10.5'], [VENDOR, 'Samsung'], [TYPE, TABLET]], [
            /(SM-G800F)/i                                                       // Samsung Galaxy S5 Mini
            ], [[MODEL, 'Galaxy S5 Mini'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
            /(SM-T311)/i                                                        // Samsung Galaxy Tab 3 8.0
            ], [[MODEL, 'Galaxy Tab 3 8.0'], [VENDOR, 'Samsung'], [TYPE, TABLET]], [

            /(T3C)/i                                                            // Advan Vandroid T3C
            ], [MODEL, [VENDOR, 'Advan'], [TYPE, TABLET]], [
            /(ADVAN T1J\+)/i                                                    // Advan Vandroid T1J+
            ], [[MODEL, 'Vandroid T1J+'], [VENDOR, 'Advan'], [TYPE, TABLET]], [
            /(ADVAN S4A)/i                                                      // Advan Vandroid S4A
            ], [[MODEL, 'Vandroid S4A'], [VENDOR, 'Advan'], [TYPE, MOBILE]], [

            /(V972M)/i                                                          // ZTE V972M
            ], [MODEL, [VENDOR, 'ZTE'], [TYPE, MOBILE]], [

            /(i-mobile)\s(IQ\s[\d\.]+)/i                                        // i-mobile IQ
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [
            /(IQ6.3)/i                                                          // i-mobile IQ IQ 6.3
            ], [[MODEL, 'IQ 6.3'], [VENDOR, 'i-mobile'], [TYPE, MOBILE]], [
            /(i-mobile)\s(i-style\s[\d\.]+)/i                                   // i-mobile i-STYLE
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [
            /(i-STYLE2.1)/i                                                     // i-mobile i-STYLE 2.1
            ], [[MODEL, 'i-STYLE 2.1'], [VENDOR, 'i-mobile'], [TYPE, MOBILE]], [

            /(mobiistar touch LAI 512)/i                                        // mobiistar touch LAI 512
            ], [[MODEL, 'Touch LAI 512'], [VENDOR, 'mobiistar'], [TYPE, MOBILE]], [

            /////////////
            // END TODO
            ///////////*/

        ],

        engine : [[

            /windows.+\sedge\/([\w\.]+)/i                                       // EdgeHTML
            ], [VERSION, [NAME, 'EdgeHTML']], [

            /(presto)\/([\w\.]+)/i,                                             // Presto
            /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,     // WebKit/Trident/NetFront/NetSurf/Amaya/Lynx/w3m
            /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,                          // KHTML/Tasman/Links
            /(icab)[\/\s]([23]\.[\d\.]+)/i                                      // iCab
            ], [NAME, VERSION], [

            /rv\:([\w\.]{1,9}).+(gecko)/i                                       // Gecko
            ], [VERSION, NAME]
        ],

        os : [[

            // Windows based
            /microsoft\s(windows)\s(vista|xp)/i                                 // Windows (iTunes)
            ], [NAME, VERSION], [
            /(windows)\snt\s6\.2;\s(arm)/i,                                     // Windows RT
            /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,                   // Windows Phone
            /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i
            ], [NAME, [VERSION, mapper.str, maps.os.windows.version]], [
            /(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i
            ], [[NAME, 'Windows'], [VERSION, mapper.str, maps.os.windows.version]], [

            // Mobile/Embedded OS
            /\((bb)(10);/i                                                      // BlackBerry 10
            ], [[NAME, 'BlackBerry'], VERSION], [
            /(blackberry)\w*\/?([\w\.]*)/i,                                     // Blackberry
            /(tizen)[\/\s]([\w\.]+)/i,                                          // Tizen
            /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]*)/i,
                                                                                // Android/WebOS/Palm/QNX/Bada/RIM/MeeGo/Contiki
            /linux;.+(sailfish);/i                                              // Sailfish OS
            ], [NAME, VERSION], [
            /(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i                  // Symbian
            ], [[NAME, 'Symbian'], VERSION], [
            /\((series40);/i                                                    // Series 40
            ], [NAME], [
            /mozilla.+\(mobile;.+gecko.+firefox/i                               // Firefox OS
            ], [[NAME, 'Firefox OS'], VERSION], [

            // Console
            /(nintendo|playstation)\s([wids34portablevu]+)/i,                   // Nintendo/Playstation

            // GNU/Linux based
            /(mint)[\/\s\(]?(\w*)/i,                                            // Mint
            /(mageia|vectorlinux)[;\s]/i,                                       // Mageia/VectorLinux
            /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,
                                                                                // Joli/Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware
                                                                                // Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus
            /(hurd|linux)\s?([\w\.]*)/i,                                        // Hurd/Linux
            /(gnu)\s?([\w\.]*)/i                                                // GNU
            ], [NAME, VERSION], [

            /(cros)\s[\w]+\s([\w\.]+\w)/i                                       // Chromium OS
            ], [[NAME, 'Chromium OS'], VERSION],[

            // Solaris
            /(sunos)\s?([\w\.\d]*)/i                                            // Solaris
            ], [[NAME, 'Solaris'], VERSION], [

            // BSD based
            /\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i                    // FreeBSD/NetBSD/OpenBSD/PC-BSD/DragonFly
            ], [NAME, VERSION],[

            /(haiku)\s(\w+)/i                                                   // Haiku
            ], [NAME, VERSION],[

            /cfnetwork\/.+darwin/i,
            /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i             // iOS
            ], [[VERSION, /_/g, '.'], [NAME, 'iOS']], [

            /(mac\sos\sx)\s?([\w\s\.]*)/i,
            /(macintosh|mac(?=_powerpc)\s)/i                                    // Mac OS
            ], [[NAME, 'Mac OS'], [VERSION, /_/g, '.']], [

            // Other
            /((?:open)?solaris)[\/\s-]?([\w\.]*)/i,                             // Solaris
            /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,                                // AIX
            /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,
                                                                                // Plan9/Minix/BeOS/OS2/AmigaOS/MorphOS/RISCOS/OpenVMS
            /(unix)\s?([\w\.]*)/i                                               // UNIX
            ], [NAME, VERSION]
        ]
    };


    /////////////////
    // Constructor
    ////////////////
    /*
    var Browser = function (name, version) {
        this[NAME] = name;
        this[VERSION] = version;
    };
    var CPU = function (arch) {
        this[ARCHITECTURE] = arch;
    };
    var Device = function (vendor, model, type) {
        this[VENDOR] = vendor;
        this[MODEL] = model;
        this[TYPE] = type;
    };
    var Engine = Browser;
    var OS = Browser;
    */
    var UAParser = function (uastring, extensions) {

        if (typeof uastring === 'object') {
            extensions = uastring;
            uastring = undefined;
        }

        if (!(this instanceof UAParser)) {
            return new UAParser(uastring, extensions).getResult();
        }

        var ua = uastring || ((window && window.navigator && window.navigator.userAgent) ? window.navigator.userAgent : EMPTY);
        var rgxmap = extensions ? util.extend(regexes, extensions) : regexes;
        //var browser = new Browser();
        //var cpu = new CPU();
        //var device = new Device();
        //var engine = new Engine();
        //var os = new OS();

        this.getBrowser = function () {
            var browser = { name: undefined, version: undefined };
            mapper.rgx.call(browser, ua, rgxmap.browser);
            browser.major = util.major(browser.version); // deprecated
            return browser;
        };
        this.getCPU = function () {
            var cpu = { architecture: undefined };
            mapper.rgx.call(cpu, ua, rgxmap.cpu);
            return cpu;
        };
        this.getDevice = function () {
            var device = { vendor: undefined, model: undefined, type: undefined };
            mapper.rgx.call(device, ua, rgxmap.device);
            return device;
        };
        this.getEngine = function () {
            var engine = { name: undefined, version: undefined };
            mapper.rgx.call(engine, ua, rgxmap.engine);
            return engine;
        };
        this.getOS = function () {
            var os = { name: undefined, version: undefined };
            mapper.rgx.call(os, ua, rgxmap.os);
            return os;
        };
        this.getResult = function () {
            return {
                ua      : this.getUA(),
                browser : this.getBrowser(),
                engine  : this.getEngine(),
                os      : this.getOS(),
                device  : this.getDevice(),
                cpu     : this.getCPU()
            };
        };
        this.getUA = function () {
            return ua;
        };
        this.setUA = function (uastring) {
            ua = uastring;
            //browser = new Browser();
            //cpu = new CPU();
            //device = new Device();
            //engine = new Engine();
            //os = new OS();
            return this;
        };
        return this;
    };

    UAParser.VERSION = LIBVERSION;
    UAParser.BROWSER = {
        NAME    : NAME,
        MAJOR   : MAJOR, // deprecated
        VERSION : VERSION
    };
    UAParser.CPU = {
        ARCHITECTURE : ARCHITECTURE
    };
    UAParser.DEVICE = {
        MODEL   : MODEL,
        VENDOR  : VENDOR,
        TYPE    : TYPE,
        CONSOLE : CONSOLE,
        MOBILE  : MOBILE,
        SMARTTV : SMARTTV,
        TABLET  : TABLET,
        WEARABLE: WEARABLE,
        EMBEDDED: EMBEDDED
    };
    UAParser.ENGINE = {
        NAME    : NAME,
        VERSION : VERSION
    };
    UAParser.OS = {
        NAME    : NAME,
        VERSION : VERSION
    };
    //UAParser.Utils = util;

    ///////////
    // Export
    //////////


    // check js environment
    if (typeof(exports) !== UNDEF_TYPE) {
        // nodejs env
        if (typeof module !== UNDEF_TYPE && module.exports) {
            exports = module.exports = UAParser;
        }
        // TODO: test!!!!!!!!
        /*
        if (require && require.main === module && process) {
            // cli
            var jsonize = function (arr) {
                var res = [];
                for (var i in arr) {
                    res.push(new UAParser(arr[i]).getResult());
                }
                process.stdout.write(JSON.stringify(res, null, 2) + '\n');
            };
            if (process.stdin.isTTY) {
                // via args
                jsonize(process.argv.slice(2));
            } else {
                // via pipe
                var str = '';
                process.stdin.on('readable', function() {
                    var read = process.stdin.read();
                    if (read !== null) {
                        str += read;
                    }
                });
                process.stdin.on('end', function () {
                    jsonize(str.replace(/\n$/, '').split('\n'));
                });
            }
        }
        */
        exports.UAParser = UAParser;
    } else {
        // requirejs env (optional)
        if ("function" === FUNC_TYPE && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")) {
            !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
                return UAParser;
            }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else if (window) {
            // browser env
            window.UAParser = UAParser;
        }
    }

    // jQuery/Zepto specific (optional)
    // Note:
    //   In AMD env the global scope should be kept clean, but jQuery is an exception.
    //   jQuery always exports to global scope, unless jQuery.noConflict(true) is used,
    //   and we should catch that.
    var $ = window && (window.jQuery || window.Zepto);
    if (typeof $ !== UNDEF_TYPE) {
        var parser = new UAParser();
        $.ua = parser.getResult();
        $.ua.get = function () {
            return parser.getUA();
        };
        $.ua.set = function (uastring) {
            parser.setUA(uastring);
            var result = parser.getResult();
            for (var prop in result) {
                $.ua[prop] = result[prop];
            }
        };
    }

})(typeof window === 'object' ? window : this);


/***/ }),

/***/ "./node_modules/url-search-params/build/url-search-params.node.js":
/*!************************************************************************!*\
  !*** ./node_modules/url-search-params/build/url-search-params.node.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
Copyright (C) 2015-2017 Andrea Giammarchi - @WebReflection

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/


function URLSearchParams(query) {
  var
    index, key, value,
    pairs, i, length,
    dict = Object.create(null)
  ;
  this[secret] = dict;
  if (!query) return;
  if (typeof query === 'string') {
    if (query.charAt(0) === '?') {
      query = query.slice(1);
    }
    for (
      pairs = query.split('&'),
      i = 0,
      length = pairs.length; i < length; i++
    ) {
      value = pairs[i];
      index = value.indexOf('=');
      if (-1 < index) {
        appendTo(
          dict,
          decode(value.slice(0, index)),
          decode(value.slice(index + 1))
        );
      } else if (value.length){
        appendTo(
          dict,
          decode(value),
          ''
        );
      }
    }
  } else {
    if (isArray(query)) {
      for (
        i = 0,
        length = query.length; i < length; i++
      ) {
        value = query[i];
        appendTo(dict, value[0], value[1]);
      }
    } else {
      for (key in query) {
         appendTo(dict, key, query[key]);
      }
    }
  }
}

var
  isArray = Array.isArray,
  URLSearchParamsProto = URLSearchParams.prototype,
  find = /[!'\(\)~]|%20|%00/g,
  plus = /\+/g,
  replace = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\x00'
  },
  replacer = function (match) {
    return replace[match];
  },
  secret = '__URLSearchParams__:' + Math.random()
;

function appendTo(dict, name, value) {
  if (name in dict) {
    dict[name].push('' + value);
  } else {
    dict[name] = isArray(value) ? value : ['' + value];
  }
}

function decode(str) {
  return decodeURIComponent(str.replace(plus, ' '));
}

function encode(str) {
  return encodeURIComponent(str).replace(find, replacer);
}

URLSearchParamsProto.append = function append(name, value) {
  appendTo(this[secret], name, value);
};

URLSearchParamsProto.delete = function del(name) {
  delete this[secret][name];
};

URLSearchParamsProto.get = function get(name) {
  var dict = this[secret];
  return name in dict ? dict[name][0] : null;
};

URLSearchParamsProto.getAll = function getAll(name) {
  var dict = this[secret];
  return name in dict ? dict[name].slice(0) : [];
};

URLSearchParamsProto.has = function has(name) {
  return name in this[secret];
};

URLSearchParamsProto.set = function set(name, value) {
  this[secret][name] = ['' + value];
};

URLSearchParamsProto.forEach = function forEach(callback, thisArg) {
  var dict = this[secret];
  Object.getOwnPropertyNames(dict).forEach(function(name) {
    dict[name].forEach(function(value) {
      callback.call(thisArg, value, name, this);
    }, this);
  }, this);
};

/*
URLSearchParamsProto.toBody = function() {
  return new Blob(
    [this.toString()],
    {type: 'application/x-www-form-urlencoded'}
  );
};
*/

URLSearchParamsProto.toJSON = function toJSON() {
  return {};
};

URLSearchParamsProto.toString = function toString() {
  var dict = this[secret], query = [], i, key, name, value;
  for (key in dict) {
    name = encode(key);
    for (
      i = 0,
      value = dict[key];
      i < value.length; i++
    ) {
      query.push(name + '=' + encode(value[i]));
    }
  }
  return query.join('&');
};

URLSearchParams = (module.exports = global.URLSearchParams || URLSearchParams);

(function (URLSearchParamsProto) {

  var iterable = (function () {
    try {
      return !!Symbol.iterator;
    } catch(error) {
      return false;
    }
  }());

  // mostly related to issue #24
  if (!('forEach' in URLSearchParamsProto)) {
    URLSearchParamsProto.forEach = function forEach(callback, thisArg) {
      var names = Object.create(null);
      this.toString()
          .replace(/=[\s\S]*?(?:&|$)/g, '=')
          .split('=')
          .forEach(function (name) {
            if (!name.length || name in names) return;
            (names[name] = this.getAll(name)).forEach(function(value) {
              callback.call(thisArg, value, name, this);
            }, this);
          }, this);
    };
  }

  if (!('keys' in URLSearchParamsProto)) {
    URLSearchParamsProto.keys = function keys() {
      var items = [];
      this.forEach(function(value, name) { items.push(name); });
      var iterator = {
        next: function() {
          var value = items.shift();
          return {done: value === undefined, value: value};
        }
      };

      if (iterable) {
        iterator[Symbol.iterator] = function() {
          return iterator;
        };
      }

      return iterator;
    };
  }

  if (!('values' in URLSearchParamsProto)) {
    URLSearchParamsProto.values = function values() {
      var items = [];
      this.forEach(function(value) { items.push(value); });
      var iterator = {
        next: function() {
          var value = items.shift();
          return {done: value === undefined, value: value};
        }
      };

      if (iterable) {
        iterator[Symbol.iterator] = function() {
          return iterator;
        };
      }

      return iterator;
    };
  }

  if (!('entries' in URLSearchParamsProto)) {
    URLSearchParamsProto.entries = function entries() {
      var items = [];
      this.forEach(function(value, name) { items.push([name, value]); });
      var iterator = {
        next: function() {
          var value = items.shift();
          return {done: value === undefined, value: value};
        }
      };

      if (iterable) {
        iterator[Symbol.iterator] = function() {
          return iterator;
        };
      }

      return iterator;
    };
  }

  if (iterable && !(Symbol.iterator in URLSearchParamsProto)) {
    URLSearchParamsProto[Symbol.iterator] = URLSearchParamsProto.entries;
  }

  if (!('sort' in URLSearchParamsProto)) {
    URLSearchParamsProto.sort = function sort() {
      var
        entries = this.entries(),
        entry = entries.next(),
        done = entry.done,
        keys = [],
        values = Object.create(null),
        i, key, value
      ;
      while (!done) {
        value = entry.value;
        key = value[0];
        keys.push(key);
        if (!(key in values)) {
          values[key] = [];
        }
        values[key].push(value[1]);
        entry = entries.next();
        done = entry.done;
      }
      // not the champion in efficiency
      // but these two bits just do the job
      keys.sort();
      for (i = 0; i < keys.length; i++) {
        this.delete(keys[i]);
      }
      for (i = 0; i < keys.length; i++) {
        key = keys[i];
        this.append(key, values[key].shift());
      }
    };
  }

}(URLSearchParams.prototype));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Modules = {
  AnchorsMenu: __webpack_require__(/*! ./modules/AnchorsMenu */ "./src/js/modules/AnchorsMenu.js").default,
  Filters: __webpack_require__(/*! ./modules/Filters */ "./src/js/modules/Filters.js").default,
  SiteHeader: __webpack_require__(/*! ./modules/SiteHeader */ "./src/js/modules/SiteHeader.js").default
};
var Pages = {
  Default: __webpack_require__(/*! ./pages/Default */ "./src/js/pages/Default.js").default,
  Home: __webpack_require__(/*! ./pages/Home */ "./src/js/pages/Home.js").default
};
$(function () {
  window.dom = {
    body: $("body"),
    document: $(document),
    html: $("html"),
    window: $(window)
  };
  initClasses(window.dom.body, "page"); // Pages

  initClasses(window.dom.body, "module"); // Modules

  window.dom.window.trigger("app:ready");
});

window.initClasses = function () {
  var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.dom.body;
  var selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "module";
  var attr = "data-".concat(selector);
  var classes = selector === "page" ? Pages : Modules;
  var items = context[0].querySelectorAll("[".concat(attr, "]"));
  var styles = "background: ".concat(selector === "page" ? "#8bbeb2" : "#18314f", "; color: #fff; padding: 0 0.25em;");

  for (var i = 0; i < items.length; i++) {
    // ex: all [data-page]
    var item = items[i]; // ex: [data-page="Home"]

    var list = item.getAttribute(attr).split(/\s+/); // ex: Home

    for (var j = 0; j < list.length; j++) {
      var name = list[j];

      if (classes[name] !== undefined) {
        console.log("%c\u2714\uFE0F".concat(name, "%O"), styles, {
          el: item
        });
        new classes[name]($(item)).init();
      } else if (classes.Default !== undefined) {
        console.warn("%c\u26A0\uFE0F".concat(name, "%O"), styles, {
          el: item
        });
        new classes.Default($(item)).init();
      } else {
        console.error("%c\u274C\uFE0F".concat(name, "%O"), styles, {
          el: item
        });
      }
    }
  }
};

/***/ }),

/***/ "./src/js/base/Module.js":
/*!*******************************!*\
  !*** ./src/js/base/Module.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Module; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Module = function Module(el) {
  _classCallCheck(this, Module);

  this.dom = $.extend({}, window.dom, {
    el: el
  });
  this.eventNames = {
    animationEnd: "animationend webkitAnimationEnd oanimationend oAnimationEnd MSAnimationEnd",
    transitionEnd: "transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd"
  };
};



/***/ }),

/***/ "./src/js/base/Page.js":
/*!*****************************!*\
  !*** ./src/js/base/Page.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Page; });
/* harmony import */ var ua_parser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ua-parser-js */ "./node_modules/ua-parser-js/src/ua-parser.js");
/* harmony import */ var ua_parser_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ua_parser_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_responsive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../helpers/responsive */ "./src/js/helpers/responsive.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Page =
/*#__PURE__*/
function () {
  function Page(el) {
    _classCallCheck(this, Page);

    this.dom = $.extend({}, window.dom, {
      el: el
    });
    this.parser = new ua_parser_js__WEBPACK_IMPORTED_MODULE_0___default.a().getResult();
  }

  _createClass(Page, [{
    key: "init",
    value: function init() {
      this.setDeviceType();
    }
  }, {
    key: "setDeviceType",
    value: function setDeviceType() {
      this.dom.html.addClass(this.parser.os.name.toLowerCase()).addClass(this.parser.browser.name.toLowerCase());
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      var _this = this;

      this.dom.window.on("breakpointChange", function (e, breakpoint) {
        return _this.onBreakpointChange(breakpoint);
      });
    } // eslint-disable-next-line no-unused-vars

  }, {
    key: "onBreakpointChange",
    value: function onBreakpointChange(breakpoint) {
      console.log("%cBootstrap: ".concat(_helpers_responsive__WEBPACK_IMPORTED_MODULE_1__["default"].breakpoint), "background: #573e7d; color: #fff; padding: 0 .5em;");
    }
  }]);

  return Page;
}();



/***/ }),

/***/ "./src/js/helpers/responsive.js":
/*!**************************************!*\
  !*** ./src/js/helpers/responsive.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var throttle_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! throttle-debounce */ "./node_modules/throttle-debounce/index.esm.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var possibleBreakpointsList = ["xs", "sm", "md", "lg", "xl"];

var Responsive =
/*#__PURE__*/
function () {
  function Responsive() {
    var _this = this;

    _classCallCheck(this, Responsive);

    this.breakpoint = null;
    this.eventName = "breakpointChange";
    this.__private = {
      window: window.jQuery(window),
      body: window.jQuery(window.document.body),
      dummyDiv: window.jQuery(window.document.createElement("div"))
    };

    this.__detectBreakpoint(false);

    this.__private.window.on("resize", Object(throttle_debounce__WEBPACK_IMPORTED_MODULE_0__["throttle"])(100, function () {
      return _this.__detectBreakpoint(true);
    }));

    this.__private.window.on("app:ready", function () {
      return _this.__private.window.trigger(_this.eventName, _this.breakpoint);
    });
  }

  _createClass(Responsive, [{
    key: "__detectBreakpoint",
    value: function __detectBreakpoint(triggerEvent) {
      this.__private.dummyDiv.appendTo(this.__private.body);

      var vpSize = null;

      for (var i = possibleBreakpointsList.length - 1; i >= 0; i--) {
        vpSize = possibleBreakpointsList[i];

        this.__private.dummyDiv.attr("class", "d-".concat(vpSize, "-none"));

        if (this.__private.dummyDiv.is(":hidden")) {
          break;
        }
      }

      this.__private.dummyDiv.detach();

      if (this.breakpoint !== vpSize) {
        this.breakpoint = vpSize;

        if (triggerEvent) {
          this.__private.window.trigger(this.eventName, this.breakpoint);
        }
      }
    }
  }, {
    key: "isBreakpointGreaterThan",
    value: function isBreakpointGreaterThan(compareToBreakpoint) {
      var compareIndex = possibleBreakpointsList.indexOf(compareToBreakpoint);
      if (compareIndex === -1) return false;
      var currentIndex = possibleBreakpointsList.indexOf(this.breakpoint);
      return currentIndex > compareIndex;
    }
  }, {
    key: "isBreakpointSmallerThan",
    value: function isBreakpointSmallerThan(compareToBreakpoint) {
      var compareIndex = possibleBreakpointsList.indexOf(compareToBreakpoint);
      if (compareIndex === -1) return false;
      var currentIndex = possibleBreakpointsList.indexOf(this.breakpoint);
      return currentIndex < compareIndex;
    }
  }, {
    key: "isBreakpointGreaterOrEqualTo",
    value: function isBreakpointGreaterOrEqualTo(compareToBreakpoint) {
      var compareIndex = possibleBreakpointsList.indexOf(compareToBreakpoint);
      if (compareIndex === -1) return false;
      var currentIndex = possibleBreakpointsList.indexOf(this.breakpoint);
      return currentIndex >= compareIndex;
    }
  }, {
    key: "isBreakpointSmallerOrEqualTo",
    value: function isBreakpointSmallerOrEqualTo(compareToBreakpoint) {
      var compareIndex = possibleBreakpointsList.indexOf(compareToBreakpoint);
      if (compareIndex === -1) return false;
      var currentIndex = possibleBreakpointsList.indexOf(this.breakpoint);
      return currentIndex <= compareIndex;
    }
  }]);

  return Responsive;
}();

/* harmony default export */ __webpack_exports__["default"] = (new Responsive());

/***/ }),

/***/ "./src/js/modules/AnchorsMenu.js":
/*!***************************************!*\
  !*** ./src/js/modules/AnchorsMenu.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _base_Module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/Module */ "./src/js/base/Module.js");
/* harmony import */ var intersection_observer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! intersection-observer */ "./node_modules/intersection-observer/intersection-observer.js");
/* harmony import */ var intersection_observer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(intersection_observer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var scrollama__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! scrollama */ "./node_modules/scrollama/build/scrollama.js");
/* harmony import */ var scrollama__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(scrollama__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var throttle_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! throttle-debounce */ "./node_modules/throttle-debounce/index.esm.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var _default =
/*#__PURE__*/
function (_Module) {
  _inherits(_default, _Module);

  function _default(el) {
    var _this;

    _classCallCheck(this, _default);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(_default).call(this, el)); // -- Properties
    // --------------------------------------------------------------

    _this.dom = $.extend({}, _this.dom, {
      siteHeader: _this.dom.body.find(".site-header"),
      select: el.find(".js-anchors"),
      list: el.find(".js-list"),
      line: el.find(".anchors-menu__line"),
      references: _this.dom.body.find(".js-anchor")
    });
    _this.navScroller = scrollama__WEBPACK_IMPORTED_MODULE_2___default()();
    _this.anchorsScroller = scrollama__WEBPACK_IMPORTED_MODULE_2___default()();
    return _this;
  } // -- Methods
  // --------------------------------------------------------------


  _createClass(_default, [{
    key: "init",
    value: function init() {
      if (this.dom.references.length < 1) {
        this.dom.el.remove();
        return;
      }

      this.populate();
      this.setNavScroller();
      this.setAnchorsScroller();
      this.bindEvents();
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      var _this2 = this;

      this.dom.window.on("resize", Object(throttle_debounce__WEBPACK_IMPORTED_MODULE_3__["debounce"])(250, function () {
        return _this2.resize();
      }));
    }
  }, {
    key: "resize",
    value: function resize() {
      this.navScroller.offsetTrigger(this.anchorsOffset).resize();
      this.anchorsScroller.resize();
    }
  }, {
    key: "populate",
    value: function populate() {
      var select = "";
      var list = "";

      for (var x = 0; x < this.dom.references.length; x++) {
        var reference = this.dom.references.eq(x);
        var id = reference.attr("id");
        var name = reference.data("name");
        select += "<option value=\"".concat(id, "\">").concat(name, "</option>");
        list += "<li class=\"anchors-menu__item\">\n                 <a href=\"#".concat(id, "\" class=\"anchors-menu__link js-scroll-to\">").concat(name, "</a>\n               </li>");
      }

      this.dom.siteHeader.find(".site-header__anchor-nav").append(select);
      this.dom.select.append(select);
      this.dom.list.append(list);
    }
  }, {
    key: "setNavScroller",
    value: function setNavScroller() {
      var _this3 = this;

      this.navScroller.setup({
        step: '[data-module="AnchorsMenu"]',
        container: "[data-page]",
        offset: this.navScrollerOffset,
        debug: false
      }).onStepEnter(function (e) {
        if (e.direction === "down") {
          _this3.dom.el.addClass("is-docked");

          _this3.dom.siteHeader.addClass("is-merged");
        }
      }).onStepExit(function (e) {
        if (e.direction === "up") {
          _this3.dom.el.removeClass("is-docked");

          _this3.dom.siteHeader.removeClass("is-merged");
        }
      });
    }
  }, {
    key: "setAnchorsScroller",
    value: function setAnchorsScroller() {
      var _this4 = this;

      this.anchorsScroller.setup({
        step: ".js-anchor",
        container: "[data-page]",
        offset: this.anchorsOffset,
        debug: false
      }).onStepEnter(function (e) {
        if (e.direction === "down") {
          _this4.updateNav(e.element.id);
        }
      }).onStepExit(function (e) {
        if (e.direction === "up") {
          var el = _this4.dom.body.find("[href=\"#".concat(e.element.id, "\"].anchors-menu__link"));

          var prev = el.parent().prev().children();

          if (prev.length) {
            el = prev;
          }

          _this4.updateNav(el.attr("href").substring(1));
        }
      });
    }
  }, {
    key: "updateNav",
    value: function updateNav(id) {
      this.dom.body.find(".js-anchors").val(id);
      var el = this.dom.el.find("[href=\"#".concat(id, "\"]"));

      if (el.length) {
        this.dom.line.css({
          width: el.width(),
          transform: "translateX(".concat(el.position().left, "px)")
        });
      }
    }
  }, {
    key: "mode",
    get: function get() {
      return window.innerWidth < 992 ? "mobile" : "desktop";
    }
  }, {
    key: "anchorsOffset",
    get: function get() {
      var headerHeight = this.dom.siteHeader.outerHeight() / window.innerHeight;

      if (this.mode === "desktop") {
        headerHeight = headerHeight * 2;
      }

      return headerHeight;
    }
  }, {
    key: "navScrollerOffset",
    get: function get() {
      var navOffset = 0.001; // Because 0 doesn't work :S

      if (this.mode === "desktop") {
        navOffset = this.dom.siteHeader.outerHeight() / window.innerHeight;
      }

      return navOffset;
    }
  }]);

  return _default;
}(_base_Module__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/js/modules/Filters.js":
/*!***********************************!*\
  !*** ./src/js/modules/Filters.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _base_Module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/Module */ "./src/js/base/Module.js");
/* harmony import */ var url_search_params__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! url-search-params */ "./node_modules/url-search-params/build/url-search-params.node.js");
/* harmony import */ var url_search_params__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(url_search_params__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var _default =
/*#__PURE__*/
function (_Module) {
  _inherits(_default, _Module);

  function _default(el) {
    var _this;

    _classCallCheck(this, _default);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(_default).call(this, el));
    _this.dom = $.extend({}, _this.dom, {
      selects: el.find("select"),
      submit: el.find("button")
    });
    return _this;
  } // -- Methods
  // --------------------------------------------------------------


  _createClass(_default, [{
    key: "init",
    value: function init() {
      this.bindEvents();
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      var _this2 = this;

      this.dom.submit.on("click", function (e) {
        return _this2.changeUrl(e);
      });
    }
  }, {
    key: "changeUrl",
    value: function changeUrl(e) {
      e.preventDefault();
      var params = new url_search_params__WEBPACK_IMPORTED_MODULE_1___default.a();
      var root = this.dom.el.data("root");
      this.dom.selects.each(function (i, el) {
        var $el = $(el);
        var taxonomy = $el.data("taxonomy");
        var value = $el.val();
        if (!taxonomy || value === "all") return;
        params.set(taxonomy, value);
      });
      window.location = params.toString() !== "" ? root + "?" + params : root;
    }
  }]);

  return _default;
}(_base_Module__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/js/modules/SiteHeader.js":
/*!**************************************!*\
  !*** ./src/js/modules/SiteHeader.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _base_Module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/Module */ "./src/js/base/Module.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var _default =
/*#__PURE__*/
function (_Module) {
  _inherits(_default, _Module);

  function _default(el) {
    var _this;

    _classCallCheck(this, _default);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(_default).call(this, el));
    _this.dom = $.extend({}, _this.dom, {
      overlay: el.find(".site-header__overlay"),
      menu: el.find(".site-header__menu"),
      toggle: el.find(".site-header__toggle")
    });
    _this.menuIsOpened = false;
    return _this;
  } // -- Methods
  // --------------------------------------------------------------


  _createClass(_default, [{
    key: "init",
    value: function init() {
      this.bindEvents();
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      var _this2 = this;

      this.dom.body.on("click touchend", function () {
        return _this2.closeMenu();
      });
      this.dom.el.on("click touchend", function (e) {
        return e.stopPropagation();
      });
      this.dom.overlay.on("click", function () {
        return _this2.closeMenu();
      });
      this.dom.toggle.on("click", function () {
        return _this2.toggleMenu();
      });
    }
  }, {
    key: "toggleMenu",
    value: function toggleMenu() {
      if (this.menuIsOpened) {
        this.closeMenu();
      } else {
        this.openMenu();
      }
    }
  }, {
    key: "openMenu",
    value: function openMenu() {
      this.dom.el.addClass("is-opened");
      this.dom.toggle.addClass("is-active");
      this.menuIsOpened = true;
    }
  }, {
    key: "closeMenu",
    value: function closeMenu() {
      this.dom.el.removeClass("is-opened");
      this.dom.toggle.removeClass("is-active");
      this.menuIsOpened = false;
    }
  }]);

  return _default;
}(_base_Module__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/js/pages/Default.js":
/*!*********************************!*\
  !*** ./src/js/pages/Default.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _base_Page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/Page */ "./src/js/base/Page.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var _default =
/*#__PURE__*/
function (_Page) {
  _inherits(_default, _Page);

  function _default(el) {
    var _this;

    _classCallCheck(this, _default);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(_default).call(this, el));
    _this.dom = $.extend({}, _this.dom, {});
    return _this;
  }

  _createClass(_default, [{
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(_default.prototype), "init", this).call(this);

      this.bindEvents();
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      _get(_getPrototypeOf(_default.prototype), "bindEvents", this).call(this);
    }
  }]);

  return _default;
}(_base_Page__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/js/pages/Home.js":
/*!******************************!*\
  !*** ./src/js/pages/Home.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _base_Page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/Page */ "./src/js/base/Page.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var _default =
/*#__PURE__*/
function (_Page) {
  _inherits(_default, _Page);

  function _default(el) {
    var _this;

    _classCallCheck(this, _default);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(_default).call(this, el));
    _this.dom = $.extend({}, _this.dom, {});
    return _this;
  }

  _createClass(_default, [{
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(_default.prototype), "init", this).call(this);

      this.bindEvents();
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      _get(_getPrototypeOf(_default.prototype), "bindEvents", this).call(this);
    }
  }]);

  return _default;
}(_base_Page__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ludGVyc2VjdGlvbi1vYnNlcnZlci9pbnRlcnNlY3Rpb24tb2JzZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Njcm9sbGFtYS9idWlsZC9zY3JvbGxhbWEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Rocm90dGxlLWRlYm91bmNlL2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdWEtcGFyc2VyLWpzL3NyYy91YS1wYXJzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VybC1zZWFyY2gtcGFyYW1zL2J1aWxkL3VybC1zZWFyY2gtcGFyYW1zLm5vZGUuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2FtZC1vcHRpb25zLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvYmFzZS9Nb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2Jhc2UvUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaGVscGVycy9yZXNwb25zaXZlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2R1bGVzL0FuY2hvcnNNZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2R1bGVzL0ZpbHRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHVsZXMvU2l0ZUhlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcGFnZXMvRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcGFnZXMvSG9tZS5qcyJdLCJuYW1lcyI6WyJNb2R1bGVzIiwiQW5jaG9yc01lbnUiLCJkZWZhdWx0IiwiRmlsdGVycyIsIlNpdGVIZWFkZXIiLCJQYWdlcyIsIkRlZmF1bHQiLCJIb21lIiwiJCIsIndpbmRvdyIsImRvbSIsImJvZHkiLCJkb2N1bWVudCIsImh0bWwiLCJpbml0Q2xhc3NlcyIsInRyaWdnZXIiLCJjb250ZXh0Iiwic2VsZWN0b3IiLCJhdHRyIiwiY2xhc3NlcyIsIml0ZW1zIiwicXVlcnlTZWxlY3RvckFsbCIsInN0eWxlcyIsImkiLCJsZW5ndGgiLCJpdGVtIiwibGlzdCIsImdldEF0dHJpYnV0ZSIsInNwbGl0IiwiaiIsIm5hbWUiLCJ1bmRlZmluZWQiLCJjb25zb2xlIiwibG9nIiwiZWwiLCJpbml0Iiwid2FybiIsImVycm9yIiwiTW9kdWxlIiwiZXh0ZW5kIiwiZXZlbnROYW1lcyIsImFuaW1hdGlvbkVuZCIsInRyYW5zaXRpb25FbmQiLCJQYWdlIiwicGFyc2VyIiwiZ2V0UmVzdWx0Iiwic2V0RGV2aWNlVHlwZSIsImFkZENsYXNzIiwib3MiLCJ0b0xvd2VyQ2FzZSIsImJyb3dzZXIiLCJvbiIsImUiLCJicmVha3BvaW50Iiwib25CcmVha3BvaW50Q2hhbmdlIiwicG9zc2libGVCcmVha3BvaW50c0xpc3QiLCJSZXNwb25zaXZlIiwiZXZlbnROYW1lIiwiX19wcml2YXRlIiwialF1ZXJ5IiwiZHVtbXlEaXYiLCJjcmVhdGVFbGVtZW50IiwiX19kZXRlY3RCcmVha3BvaW50IiwidHJpZ2dlckV2ZW50IiwiYXBwZW5kVG8iLCJ2cFNpemUiLCJpcyIsImRldGFjaCIsImNvbXBhcmVUb0JyZWFrcG9pbnQiLCJjb21wYXJlSW5kZXgiLCJpbmRleE9mIiwiY3VycmVudEluZGV4Iiwic2l0ZUhlYWRlciIsImZpbmQiLCJzZWxlY3QiLCJsaW5lIiwicmVmZXJlbmNlcyIsIm5hdlNjcm9sbGVyIiwiYW5jaG9yc1Njcm9sbGVyIiwicmVtb3ZlIiwicG9wdWxhdGUiLCJzZXROYXZTY3JvbGxlciIsInNldEFuY2hvcnNTY3JvbGxlciIsImJpbmRFdmVudHMiLCJyZXNpemUiLCJvZmZzZXRUcmlnZ2VyIiwiYW5jaG9yc09mZnNldCIsIngiLCJyZWZlcmVuY2UiLCJlcSIsImlkIiwiZGF0YSIsImFwcGVuZCIsInNldHVwIiwic3RlcCIsImNvbnRhaW5lciIsIm9mZnNldCIsIm5hdlNjcm9sbGVyT2Zmc2V0IiwiZGVidWciLCJvblN0ZXBFbnRlciIsImRpcmVjdGlvbiIsIm9uU3RlcEV4aXQiLCJyZW1vdmVDbGFzcyIsInVwZGF0ZU5hdiIsImVsZW1lbnQiLCJwcmV2IiwicGFyZW50IiwiY2hpbGRyZW4iLCJzdWJzdHJpbmciLCJ2YWwiLCJjc3MiLCJ3aWR0aCIsInRyYW5zZm9ybSIsInBvc2l0aW9uIiwibGVmdCIsImlubmVyV2lkdGgiLCJoZWFkZXJIZWlnaHQiLCJvdXRlckhlaWdodCIsImlubmVySGVpZ2h0IiwibW9kZSIsIm5hdk9mZnNldCIsInNlbGVjdHMiLCJzdWJtaXQiLCJjaGFuZ2VVcmwiLCJwcmV2ZW50RGVmYXVsdCIsInBhcmFtcyIsInJvb3QiLCJlYWNoIiwiJGVsIiwidGF4b25vbXkiLCJ2YWx1ZSIsInNldCIsImxvY2F0aW9uIiwidG9TdHJpbmciLCJvdmVybGF5IiwibWVudSIsInRvZ2dsZSIsIm1lbnVJc09wZW5lZCIsImNsb3NlTWVudSIsInN0b3BQcm9wYWdhdGlvbiIsInRvZ2dsZU1lbnUiLCJvcGVuTWVudSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVB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QTtBQUNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixZQUFZO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsWUFBWTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2Is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Ozs7MkJBRU07QUFDTDs7QUFDQSxXQUFLeUUsVUFBTDtBQUNEOzs7aUNBRVk7QUFDWDtBQUNEOzs7O0VBZDBCLGtEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGN0I7Ozs7Ozs7QUFHRSxvQkFBWWpELEVBQVosRUFBZ0I7QUFBQTs7QUFBQTs7QUFDZCxrRkFBTUEsRUFBTjtBQUVBLFVBQUt4QixHQUFMLEdBQVdGLENBQUMsQ0FBQytCLE1BQUYsQ0FBUyxFQUFULEVBQWEsTUFBSzdCLEdBQWxCLEVBQXVCLEVBQXZCLENBQVg7QUFIYztBQUlmOzs7OzJCQUVNO0FBQ0w7O0FBQ0EsV0FBS3lFLFVBQUw7QUFDRDs7O2lDQUVZO0FBQ1g7QUFDRDs7OztFQWQwQixrRCIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qcy9hcHAuanNcIik7XG4iLCIvKipcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIFczQyBTT0ZUV0FSRSBBTkQgRE9DVU1FTlQgTk9USUNFIEFORCBMSUNFTlNFLlxuICpcbiAqICBodHRwczovL3d3dy53My5vcmcvQ29uc29ydGl1bS9MZWdhbC8yMDE1L2NvcHlyaWdodC1zb2Z0d2FyZS1hbmQtZG9jdW1lbnRcbiAqXG4gKi9cblxuKGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQpIHtcbid1c2Ugc3RyaWN0JztcblxuXG4vLyBFeGl0cyBlYXJseSBpZiBhbGwgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgYW5kIEludGVyc2VjdGlvbk9ic2VydmVyRW50cnlcbi8vIGZlYXR1cmVzIGFyZSBuYXRpdmVseSBzdXBwb3J0ZWQuXG5pZiAoJ0ludGVyc2VjdGlvbk9ic2VydmVyJyBpbiB3aW5kb3cgJiZcbiAgICAnSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeScgaW4gd2luZG93ICYmXG4gICAgJ2ludGVyc2VjdGlvblJhdGlvJyBpbiB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeS5wcm90b3R5cGUpIHtcblxuICAvLyBNaW5pbWFsIHBvbHlmaWxsIGZvciBFZGdlIDE1J3MgbGFjayBvZiBgaXNJbnRlcnNlY3RpbmdgXG4gIC8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL3czYy9JbnRlcnNlY3Rpb25PYnNlcnZlci9pc3N1ZXMvMjExXG4gIGlmICghKCdpc0ludGVyc2VjdGluZycgaW4gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyRW50cnkucHJvdG90eXBlKSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeS5wcm90b3R5cGUsXG4gICAgICAnaXNJbnRlcnNlY3RpbmcnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJzZWN0aW9uUmF0aW8gPiAwO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIHJldHVybjtcbn1cblxuXG4vKipcbiAqIEFuIEludGVyc2VjdGlvbk9ic2VydmVyIHJlZ2lzdHJ5LiBUaGlzIHJlZ2lzdHJ5IGV4aXN0cyB0byBob2xkIGEgc3Ryb25nXG4gKiByZWZlcmVuY2UgdG8gSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaW5zdGFuY2VzIGN1cnJlbnRseSBvYnNlcnZlcmluZyBhIHRhcmdldFxuICogZWxlbWVudC4gV2l0aG91dCB0aGlzIHJlZ2lzdHJ5LCBpbnN0YW5jZXMgd2l0aG91dCBhbm90aGVyIHJlZmVyZW5jZSBtYXkgYmVcbiAqIGdhcmJhZ2UgY29sbGVjdGVkLlxuICovXG52YXIgcmVnaXN0cnkgPSBbXTtcblxuXG4vKipcbiAqIENyZWF0ZXMgdGhlIGdsb2JhbCBJbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5IGNvbnN0cnVjdG9yLlxuICogaHR0cHM6Ly93M2MuZ2l0aHViLmlvL0ludGVyc2VjdGlvbk9ic2VydmVyLyNpbnRlcnNlY3Rpb24tb2JzZXJ2ZXItZW50cnlcbiAqIEBwYXJhbSB7T2JqZWN0fSBlbnRyeSBBIGRpY3Rpb25hcnkgb2YgaW5zdGFuY2UgcHJvcGVydGllcy5cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBJbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5KGVudHJ5KSB7XG4gIHRoaXMudGltZSA9IGVudHJ5LnRpbWU7XG4gIHRoaXMudGFyZ2V0ID0gZW50cnkudGFyZ2V0O1xuICB0aGlzLnJvb3RCb3VuZHMgPSBlbnRyeS5yb290Qm91bmRzO1xuICB0aGlzLmJvdW5kaW5nQ2xpZW50UmVjdCA9IGVudHJ5LmJvdW5kaW5nQ2xpZW50UmVjdDtcbiAgdGhpcy5pbnRlcnNlY3Rpb25SZWN0ID0gZW50cnkuaW50ZXJzZWN0aW9uUmVjdCB8fCBnZXRFbXB0eVJlY3QoKTtcbiAgdGhpcy5pc0ludGVyc2VjdGluZyA9ICEhZW50cnkuaW50ZXJzZWN0aW9uUmVjdDtcblxuICAvLyBDYWxjdWxhdGVzIHRoZSBpbnRlcnNlY3Rpb24gcmF0aW8uXG4gIHZhciB0YXJnZXRSZWN0ID0gdGhpcy5ib3VuZGluZ0NsaWVudFJlY3Q7XG4gIHZhciB0YXJnZXRBcmVhID0gdGFyZ2V0UmVjdC53aWR0aCAqIHRhcmdldFJlY3QuaGVpZ2h0O1xuICB2YXIgaW50ZXJzZWN0aW9uUmVjdCA9IHRoaXMuaW50ZXJzZWN0aW9uUmVjdDtcbiAgdmFyIGludGVyc2VjdGlvbkFyZWEgPSBpbnRlcnNlY3Rpb25SZWN0LndpZHRoICogaW50ZXJzZWN0aW9uUmVjdC5oZWlnaHQ7XG5cbiAgLy8gU2V0cyBpbnRlcnNlY3Rpb24gcmF0aW8uXG4gIGlmICh0YXJnZXRBcmVhKSB7XG4gICAgdGhpcy5pbnRlcnNlY3Rpb25SYXRpbyA9IGludGVyc2VjdGlvbkFyZWEgLyB0YXJnZXRBcmVhO1xuICB9IGVsc2Uge1xuICAgIC8vIElmIGFyZWEgaXMgemVybyBhbmQgaXMgaW50ZXJzZWN0aW5nLCBzZXRzIHRvIDEsIG90aGVyd2lzZSB0byAwXG4gICAgdGhpcy5pbnRlcnNlY3Rpb25SYXRpbyA9IHRoaXMuaXNJbnRlcnNlY3RpbmcgPyAxIDogMDtcbiAgfVxufVxuXG5cbi8qKlxuICogQ3JlYXRlcyB0aGUgZ2xvYmFsIEludGVyc2VjdGlvbk9ic2VydmVyIGNvbnN0cnVjdG9yLlxuICogaHR0cHM6Ly93M2MuZ2l0aHViLmlvL0ludGVyc2VjdGlvbk9ic2VydmVyLyNpbnRlcnNlY3Rpb24tb2JzZXJ2ZXItaW50ZXJmYWNlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBUaGUgZnVuY3Rpb24gdG8gYmUgaW52b2tlZCBhZnRlciBpbnRlcnNlY3Rpb25cbiAqICAgICBjaGFuZ2VzIGhhdmUgcXVldWVkLiBUaGUgZnVuY3Rpb24gaXMgbm90IGludm9rZWQgaWYgdGhlIHF1ZXVlIGhhc1xuICogICAgIGJlZW4gZW1wdGllZCBieSBjYWxsaW5nIHRoZSBgdGFrZVJlY29yZHNgIG1ldGhvZC5cbiAqIEBwYXJhbSB7T2JqZWN0PX0gb3B0X29wdGlvbnMgT3B0aW9uYWwgY29uZmlndXJhdGlvbiBvcHRpb25zLlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIEludGVyc2VjdGlvbk9ic2VydmVyKGNhbGxiYWNrLCBvcHRfb3B0aW9ucykge1xuXG4gIHZhciBvcHRpb25zID0gb3B0X29wdGlvbnMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjYWxsYmFjayBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLnJvb3QgJiYgb3B0aW9ucy5yb290Lm5vZGVUeXBlICE9IDEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Jvb3QgbXVzdCBiZSBhbiBFbGVtZW50Jyk7XG4gIH1cblxuICAvLyBCaW5kcyBhbmQgdGhyb3R0bGVzIGB0aGlzLl9jaGVja0ZvckludGVyc2VjdGlvbnNgLlxuICB0aGlzLl9jaGVja0ZvckludGVyc2VjdGlvbnMgPSB0aHJvdHRsZShcbiAgICAgIHRoaXMuX2NoZWNrRm9ySW50ZXJzZWN0aW9ucy5iaW5kKHRoaXMpLCB0aGlzLlRIUk9UVExFX1RJTUVPVVQpO1xuXG4gIC8vIFByaXZhdGUgcHJvcGVydGllcy5cbiAgdGhpcy5fY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgdGhpcy5fb2JzZXJ2YXRpb25UYXJnZXRzID0gW107XG4gIHRoaXMuX3F1ZXVlZEVudHJpZXMgPSBbXTtcbiAgdGhpcy5fcm9vdE1hcmdpblZhbHVlcyA9IHRoaXMuX3BhcnNlUm9vdE1hcmdpbihvcHRpb25zLnJvb3RNYXJnaW4pO1xuXG4gIC8vIFB1YmxpYyBwcm9wZXJ0aWVzLlxuICB0aGlzLnRocmVzaG9sZHMgPSB0aGlzLl9pbml0VGhyZXNob2xkcyhvcHRpb25zLnRocmVzaG9sZCk7XG4gIHRoaXMucm9vdCA9IG9wdGlvbnMucm9vdCB8fCBudWxsO1xuICB0aGlzLnJvb3RNYXJnaW4gPSB0aGlzLl9yb290TWFyZ2luVmFsdWVzLm1hcChmdW5jdGlvbihtYXJnaW4pIHtcbiAgICByZXR1cm4gbWFyZ2luLnZhbHVlICsgbWFyZ2luLnVuaXQ7XG4gIH0pLmpvaW4oJyAnKTtcbn1cblxuXG4vKipcbiAqIFRoZSBtaW5pbXVtIGludGVydmFsIHdpdGhpbiB3aGljaCB0aGUgZG9jdW1lbnQgd2lsbCBiZSBjaGVja2VkIGZvclxuICogaW50ZXJzZWN0aW9uIGNoYW5nZXMuXG4gKi9cbkludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5USFJPVFRMRV9USU1FT1VUID0gMTAwO1xuXG5cbi8qKlxuICogVGhlIGZyZXF1ZW5jeSBpbiB3aGljaCB0aGUgcG9seWZpbGwgcG9sbHMgZm9yIGludGVyc2VjdGlvbiBjaGFuZ2VzLlxuICogdGhpcyBjYW4gYmUgdXBkYXRlZCBvbiBhIHBlciBpbnN0YW5jZSBiYXNpcyBhbmQgbXVzdCBiZSBzZXQgcHJpb3IgdG9cbiAqIGNhbGxpbmcgYG9ic2VydmVgIG9uIHRoZSBmaXJzdCB0YXJnZXQuXG4gKi9cbkludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5QT0xMX0lOVEVSVkFMID0gbnVsbDtcblxuLyoqXG4gKiBVc2UgYSBtdXRhdGlvbiBvYnNlcnZlciBvbiB0aGUgcm9vdCBlbGVtZW50XG4gKiB0byBkZXRlY3QgaW50ZXJzZWN0aW9uIGNoYW5nZXMuXG4gKi9cbkludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5VU0VfTVVUQVRJT05fT0JTRVJWRVIgPSB0cnVlO1xuXG5cbi8qKlxuICogU3RhcnRzIG9ic2VydmluZyBhIHRhcmdldCBlbGVtZW50IGZvciBpbnRlcnNlY3Rpb24gY2hhbmdlcyBiYXNlZCBvblxuICogdGhlIHRocmVzaG9sZHMgdmFsdWVzLlxuICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXQgVGhlIERPTSBlbGVtZW50IHRvIG9ic2VydmUuXG4gKi9cbkludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5vYnNlcnZlID0gZnVuY3Rpb24odGFyZ2V0KSB7XG4gIHZhciBpc1RhcmdldEFscmVhZHlPYnNlcnZlZCA9IHRoaXMuX29ic2VydmF0aW9uVGFyZ2V0cy5zb21lKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICByZXR1cm4gaXRlbS5lbGVtZW50ID09IHRhcmdldDtcbiAgfSk7XG5cbiAgaWYgKGlzVGFyZ2V0QWxyZWFkeU9ic2VydmVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKCEodGFyZ2V0ICYmIHRhcmdldC5ub2RlVHlwZSA9PSAxKSkge1xuICAgIHRocm93IG5ldyBFcnJvcigndGFyZ2V0IG11c3QgYmUgYW4gRWxlbWVudCcpO1xuICB9XG5cbiAgdGhpcy5fcmVnaXN0ZXJJbnN0YW5jZSgpO1xuICB0aGlzLl9vYnNlcnZhdGlvblRhcmdldHMucHVzaCh7ZWxlbWVudDogdGFyZ2V0LCBlbnRyeTogbnVsbH0pO1xuICB0aGlzLl9tb25pdG9ySW50ZXJzZWN0aW9ucygpO1xuICB0aGlzLl9jaGVja0ZvckludGVyc2VjdGlvbnMoKTtcbn07XG5cblxuLyoqXG4gKiBTdG9wcyBvYnNlcnZpbmcgYSB0YXJnZXQgZWxlbWVudCBmb3IgaW50ZXJzZWN0aW9uIGNoYW5nZXMuXG4gKiBAcGFyYW0ge0VsZW1lbnR9IHRhcmdldCBUaGUgRE9NIGVsZW1lbnQgdG8gb2JzZXJ2ZS5cbiAqL1xuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLnVub2JzZXJ2ZSA9IGZ1bmN0aW9uKHRhcmdldCkge1xuICB0aGlzLl9vYnNlcnZhdGlvblRhcmdldHMgPVxuICAgICAgdGhpcy5fb2JzZXJ2YXRpb25UYXJnZXRzLmZpbHRlcihmdW5jdGlvbihpdGVtKSB7XG5cbiAgICByZXR1cm4gaXRlbS5lbGVtZW50ICE9IHRhcmdldDtcbiAgfSk7XG4gIGlmICghdGhpcy5fb2JzZXJ2YXRpb25UYXJnZXRzLmxlbmd0aCkge1xuICAgIHRoaXMuX3VubW9uaXRvckludGVyc2VjdGlvbnMoKTtcbiAgICB0aGlzLl91bnJlZ2lzdGVySW5zdGFuY2UoKTtcbiAgfVxufTtcblxuXG4vKipcbiAqIFN0b3BzIG9ic2VydmluZyBhbGwgdGFyZ2V0IGVsZW1lbnRzIGZvciBpbnRlcnNlY3Rpb24gY2hhbmdlcy5cbiAqL1xuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLmRpc2Nvbm5lY3QgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5fb2JzZXJ2YXRpb25UYXJnZXRzID0gW107XG4gIHRoaXMuX3VubW9uaXRvckludGVyc2VjdGlvbnMoKTtcbiAgdGhpcy5fdW5yZWdpc3Rlckluc3RhbmNlKCk7XG59O1xuXG5cbi8qKlxuICogUmV0dXJucyBhbnkgcXVldWUgZW50cmllcyB0aGF0IGhhdmUgbm90IHlldCBiZWVuIHJlcG9ydGVkIHRvIHRoZVxuICogY2FsbGJhY2sgYW5kIGNsZWFycyB0aGUgcXVldWUuIFRoaXMgY2FuIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCB0aGVcbiAqIGNhbGxiYWNrIHRvIG9idGFpbiB0aGUgYWJzb2x1dGUgbW9zdCB1cC10by1kYXRlIGludGVyc2VjdGlvbiBpbmZvcm1hdGlvbi5cbiAqIEByZXR1cm4ge0FycmF5fSBUaGUgY3VycmVudGx5IHF1ZXVlZCBlbnRyaWVzLlxuICovXG5JbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUudGFrZVJlY29yZHMgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHJlY29yZHMgPSB0aGlzLl9xdWV1ZWRFbnRyaWVzLnNsaWNlKCk7XG4gIHRoaXMuX3F1ZXVlZEVudHJpZXMgPSBbXTtcbiAgcmV0dXJuIHJlY29yZHM7XG59O1xuXG5cbi8qKlxuICogQWNjZXB0cyB0aGUgdGhyZXNob2xkIHZhbHVlIGZyb20gdGhlIHVzZXIgY29uZmlndXJhdGlvbiBvYmplY3QgYW5kXG4gKiByZXR1cm5zIGEgc29ydGVkIGFycmF5IG9mIHVuaXF1ZSB0aHJlc2hvbGQgdmFsdWVzLiBJZiBhIHZhbHVlIGlzIG5vdFxuICogYmV0d2VlbiAwIGFuZCAxIGFuZCBlcnJvciBpcyB0aHJvd24uXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheXxudW1iZXI9fSBvcHRfdGhyZXNob2xkIEFuIG9wdGlvbmFsIHRocmVzaG9sZCB2YWx1ZSBvclxuICogICAgIGEgbGlzdCBvZiB0aHJlc2hvbGQgdmFsdWVzLCBkZWZhdWx0aW5nIHRvIFswXS5cbiAqIEByZXR1cm4ge0FycmF5fSBBIHNvcnRlZCBsaXN0IG9mIHVuaXF1ZSBhbmQgdmFsaWQgdGhyZXNob2xkIHZhbHVlcy5cbiAqL1xuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLl9pbml0VGhyZXNob2xkcyA9IGZ1bmN0aW9uKG9wdF90aHJlc2hvbGQpIHtcbiAgdmFyIHRocmVzaG9sZCA9IG9wdF90aHJlc2hvbGQgfHwgWzBdO1xuICBpZiAoIUFycmF5LmlzQXJyYXkodGhyZXNob2xkKSkgdGhyZXNob2xkID0gW3RocmVzaG9sZF07XG5cbiAgcmV0dXJuIHRocmVzaG9sZC5zb3J0KCkuZmlsdGVyKGZ1bmN0aW9uKHQsIGksIGEpIHtcbiAgICBpZiAodHlwZW9mIHQgIT0gJ251bWJlcicgfHwgaXNOYU4odCkgfHwgdCA8IDAgfHwgdCA+IDEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcigndGhyZXNob2xkIG11c3QgYmUgYSBudW1iZXIgYmV0d2VlbiAwIGFuZCAxIGluY2x1c2l2ZWx5Jyk7XG4gICAgfVxuICAgIHJldHVybiB0ICE9PSBhW2kgLSAxXTtcbiAgfSk7XG59O1xuXG5cbi8qKlxuICogQWNjZXB0cyB0aGUgcm9vdE1hcmdpbiB2YWx1ZSBmcm9tIHRoZSB1c2VyIGNvbmZpZ3VyYXRpb24gb2JqZWN0XG4gKiBhbmQgcmV0dXJucyBhbiBhcnJheSBvZiB0aGUgZm91ciBtYXJnaW4gdmFsdWVzIGFzIGFuIG9iamVjdCBjb250YWluaW5nXG4gKiB0aGUgdmFsdWUgYW5kIHVuaXQgcHJvcGVydGllcy4gSWYgYW55IG9mIHRoZSB2YWx1ZXMgYXJlIG5vdCBwcm9wZXJseVxuICogZm9ybWF0dGVkIG9yIHVzZSBhIHVuaXQgb3RoZXIgdGhhbiBweCBvciAlLCBhbmQgZXJyb3IgaXMgdGhyb3duLlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nPX0gb3B0X3Jvb3RNYXJnaW4gQW4gb3B0aW9uYWwgcm9vdE1hcmdpbiB2YWx1ZSxcbiAqICAgICBkZWZhdWx0aW5nIHRvICcwcHgnLlxuICogQHJldHVybiB7QXJyYXk8T2JqZWN0Pn0gQW4gYXJyYXkgb2YgbWFyZ2luIG9iamVjdHMgd2l0aCB0aGUga2V5c1xuICogICAgIHZhbHVlIGFuZCB1bml0LlxuICovXG5JbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuX3BhcnNlUm9vdE1hcmdpbiA9IGZ1bmN0aW9uKG9wdF9yb290TWFyZ2luKSB7XG4gIHZhciBtYXJnaW5TdHJpbmcgPSBvcHRfcm9vdE1hcmdpbiB8fCAnMHB4JztcbiAgdmFyIG1hcmdpbnMgPSBtYXJnaW5TdHJpbmcuc3BsaXQoL1xccysvKS5tYXAoZnVuY3Rpb24obWFyZ2luKSB7XG4gICAgdmFyIHBhcnRzID0gL14oLT9cXGQqXFwuP1xcZCspKHB4fCUpJC8uZXhlYyhtYXJnaW4pO1xuICAgIGlmICghcGFydHMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcigncm9vdE1hcmdpbiBtdXN0IGJlIHNwZWNpZmllZCBpbiBwaXhlbHMgb3IgcGVyY2VudCcpO1xuICAgIH1cbiAgICByZXR1cm4ge3ZhbHVlOiBwYXJzZUZsb2F0KHBhcnRzWzFdKSwgdW5pdDogcGFydHNbMl19O1xuICB9KTtcblxuICAvLyBIYW5kbGVzIHNob3J0aGFuZC5cbiAgbWFyZ2luc1sxXSA9IG1hcmdpbnNbMV0gfHwgbWFyZ2luc1swXTtcbiAgbWFyZ2luc1syXSA9IG1hcmdpbnNbMl0gfHwgbWFyZ2luc1swXTtcbiAgbWFyZ2luc1szXSA9IG1hcmdpbnNbM10gfHwgbWFyZ2luc1sxXTtcblxuICByZXR1cm4gbWFyZ2lucztcbn07XG5cblxuLyoqXG4gKiBTdGFydHMgcG9sbGluZyBmb3IgaW50ZXJzZWN0aW9uIGNoYW5nZXMgaWYgdGhlIHBvbGxpbmcgaXMgbm90IGFscmVhZHlcbiAqIGhhcHBlbmluZywgYW5kIGlmIHRoZSBwYWdlJ3MgdmlzaWJpbHR5IHN0YXRlIGlzIHZpc2libGUuXG4gKiBAcHJpdmF0ZVxuICovXG5JbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuX21vbml0b3JJbnRlcnNlY3Rpb25zID0gZnVuY3Rpb24oKSB7XG4gIGlmICghdGhpcy5fbW9uaXRvcmluZ0ludGVyc2VjdGlvbnMpIHtcbiAgICB0aGlzLl9tb25pdG9yaW5nSW50ZXJzZWN0aW9ucyA9IHRydWU7XG5cbiAgICAvLyBJZiBhIHBvbGwgaW50ZXJ2YWwgaXMgc2V0LCB1c2UgcG9sbGluZyBpbnN0ZWFkIG9mIGxpc3RlbmluZyB0b1xuICAgIC8vIHJlc2l6ZSBhbmQgc2Nyb2xsIGV2ZW50cyBvciBET00gbXV0YXRpb25zLlxuICAgIGlmICh0aGlzLlBPTExfSU5URVJWQUwpIHtcbiAgICAgIHRoaXMuX21vbml0b3JpbmdJbnRlcnZhbCA9IHNldEludGVydmFsKFxuICAgICAgICAgIHRoaXMuX2NoZWNrRm9ySW50ZXJzZWN0aW9ucywgdGhpcy5QT0xMX0lOVEVSVkFMKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBhZGRFdmVudCh3aW5kb3csICdyZXNpemUnLCB0aGlzLl9jaGVja0ZvckludGVyc2VjdGlvbnMsIHRydWUpO1xuICAgICAgYWRkRXZlbnQoZG9jdW1lbnQsICdzY3JvbGwnLCB0aGlzLl9jaGVja0ZvckludGVyc2VjdGlvbnMsIHRydWUpO1xuXG4gICAgICBpZiAodGhpcy5VU0VfTVVUQVRJT05fT0JTRVJWRVIgJiYgJ011dGF0aW9uT2JzZXJ2ZXInIGluIHdpbmRvdykge1xuICAgICAgICB0aGlzLl9kb21PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXMuX2NoZWNrRm9ySW50ZXJzZWN0aW9ucyk7XG4gICAgICAgIHRoaXMuX2RvbU9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQsIHtcbiAgICAgICAgICBhdHRyaWJ1dGVzOiB0cnVlLFxuICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgICBjaGFyYWN0ZXJEYXRhOiB0cnVlLFxuICAgICAgICAgIHN1YnRyZWU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5cbi8qKlxuICogU3RvcHMgcG9sbGluZyBmb3IgaW50ZXJzZWN0aW9uIGNoYW5nZXMuXG4gKiBAcHJpdmF0ZVxuICovXG5JbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuX3VubW9uaXRvckludGVyc2VjdGlvbnMgPSBmdW5jdGlvbigpIHtcbiAgaWYgKHRoaXMuX21vbml0b3JpbmdJbnRlcnNlY3Rpb25zKSB7XG4gICAgdGhpcy5fbW9uaXRvcmluZ0ludGVyc2VjdGlvbnMgPSBmYWxzZTtcblxuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5fbW9uaXRvcmluZ0ludGVydmFsKTtcbiAgICB0aGlzLl9tb25pdG9yaW5nSW50ZXJ2YWwgPSBudWxsO1xuXG4gICAgcmVtb3ZlRXZlbnQod2luZG93LCAncmVzaXplJywgdGhpcy5fY2hlY2tGb3JJbnRlcnNlY3Rpb25zLCB0cnVlKTtcbiAgICByZW1vdmVFdmVudChkb2N1bWVudCwgJ3Njcm9sbCcsIHRoaXMuX2NoZWNrRm9ySW50ZXJzZWN0aW9ucywgdHJ1ZSk7XG5cbiAgICBpZiAodGhpcy5fZG9tT2JzZXJ2ZXIpIHtcbiAgICAgIHRoaXMuX2RvbU9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgIHRoaXMuX2RvbU9ic2VydmVyID0gbnVsbDtcbiAgICB9XG4gIH1cbn07XG5cblxuLyoqXG4gKiBTY2FucyBlYWNoIG9ic2VydmF0aW9uIHRhcmdldCBmb3IgaW50ZXJzZWN0aW9uIGNoYW5nZXMgYW5kIGFkZHMgdGhlbVxuICogdG8gdGhlIGludGVybmFsIGVudHJpZXMgcXVldWUuIElmIG5ldyBlbnRyaWVzIGFyZSBmb3VuZCwgaXRcbiAqIHNjaGVkdWxlcyB0aGUgY2FsbGJhY2sgdG8gYmUgaW52b2tlZC5cbiAqIEBwcml2YXRlXG4gKi9cbkludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5fY2hlY2tGb3JJbnRlcnNlY3Rpb25zID0gZnVuY3Rpb24oKSB7XG4gIHZhciByb290SXNJbkRvbSA9IHRoaXMuX3Jvb3RJc0luRG9tKCk7XG4gIHZhciByb290UmVjdCA9IHJvb3RJc0luRG9tID8gdGhpcy5fZ2V0Um9vdFJlY3QoKSA6IGdldEVtcHR5UmVjdCgpO1xuXG4gIHRoaXMuX29ic2VydmF0aW9uVGFyZ2V0cy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICB2YXIgdGFyZ2V0ID0gaXRlbS5lbGVtZW50O1xuICAgIHZhciB0YXJnZXRSZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KHRhcmdldCk7XG4gICAgdmFyIHJvb3RDb250YWluc1RhcmdldCA9IHRoaXMuX3Jvb3RDb250YWluc1RhcmdldCh0YXJnZXQpO1xuICAgIHZhciBvbGRFbnRyeSA9IGl0ZW0uZW50cnk7XG4gICAgdmFyIGludGVyc2VjdGlvblJlY3QgPSByb290SXNJbkRvbSAmJiByb290Q29udGFpbnNUYXJnZXQgJiZcbiAgICAgICAgdGhpcy5fY29tcHV0ZVRhcmdldEFuZFJvb3RJbnRlcnNlY3Rpb24odGFyZ2V0LCByb290UmVjdCk7XG5cbiAgICB2YXIgbmV3RW50cnkgPSBpdGVtLmVudHJ5ID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyRW50cnkoe1xuICAgICAgdGltZTogbm93KCksXG4gICAgICB0YXJnZXQ6IHRhcmdldCxcbiAgICAgIGJvdW5kaW5nQ2xpZW50UmVjdDogdGFyZ2V0UmVjdCxcbiAgICAgIHJvb3RCb3VuZHM6IHJvb3RSZWN0LFxuICAgICAgaW50ZXJzZWN0aW9uUmVjdDogaW50ZXJzZWN0aW9uUmVjdFxuICAgIH0pO1xuXG4gICAgaWYgKCFvbGRFbnRyeSkge1xuICAgICAgdGhpcy5fcXVldWVkRW50cmllcy5wdXNoKG5ld0VudHJ5KTtcbiAgICB9IGVsc2UgaWYgKHJvb3RJc0luRG9tICYmIHJvb3RDb250YWluc1RhcmdldCkge1xuICAgICAgLy8gSWYgdGhlIG5ldyBlbnRyeSBpbnRlcnNlY3Rpb24gcmF0aW8gaGFzIGNyb3NzZWQgYW55IG9mIHRoZVxuICAgICAgLy8gdGhyZXNob2xkcywgYWRkIGEgbmV3IGVudHJ5LlxuICAgICAgaWYgKHRoaXMuX2hhc0Nyb3NzZWRUaHJlc2hvbGQob2xkRW50cnksIG5ld0VudHJ5KSkge1xuICAgICAgICB0aGlzLl9xdWV1ZWRFbnRyaWVzLnB1c2gobmV3RW50cnkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBJZiB0aGUgcm9vdCBpcyBub3QgaW4gdGhlIERPTSBvciB0YXJnZXQgaXMgbm90IGNvbnRhaW5lZCB3aXRoaW5cbiAgICAgIC8vIHJvb3QgYnV0IHRoZSBwcmV2aW91cyBlbnRyeSBmb3IgdGhpcyB0YXJnZXQgaGFkIGFuIGludGVyc2VjdGlvbixcbiAgICAgIC8vIGFkZCBhIG5ldyByZWNvcmQgaW5kaWNhdGluZyByZW1vdmFsLlxuICAgICAgaWYgKG9sZEVudHJ5ICYmIG9sZEVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgIHRoaXMuX3F1ZXVlZEVudHJpZXMucHVzaChuZXdFbnRyeSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB0aGlzKTtcblxuICBpZiAodGhpcy5fcXVldWVkRW50cmllcy5sZW5ndGgpIHtcbiAgICB0aGlzLl9jYWxsYmFjayh0aGlzLnRha2VSZWNvcmRzKCksIHRoaXMpO1xuICB9XG59O1xuXG5cbi8qKlxuICogQWNjZXB0cyBhIHRhcmdldCBhbmQgcm9vdCByZWN0IGNvbXB1dGVzIHRoZSBpbnRlcnNlY3Rpb24gYmV0d2VlbiB0aGVuXG4gKiBmb2xsb3dpbmcgdGhlIGFsZ29yaXRobSBpbiB0aGUgc3BlYy5cbiAqIFRPRE8ocGhpbGlwd2FsdG9uKTogYXQgdGhpcyB0aW1lIGNsaXAtcGF0aCBpcyBub3QgY29uc2lkZXJlZC5cbiAqIGh0dHBzOi8vdzNjLmdpdGh1Yi5pby9JbnRlcnNlY3Rpb25PYnNlcnZlci8jY2FsY3VsYXRlLWludGVyc2VjdGlvbi1yZWN0LWFsZ29cbiAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0IFRoZSB0YXJnZXQgRE9NIGVsZW1lbnRcbiAqIEBwYXJhbSB7T2JqZWN0fSByb290UmVjdCBUaGUgYm91bmRpbmcgcmVjdCBvZiB0aGUgcm9vdCBhZnRlciBiZWluZ1xuICogICAgIGV4cGFuZGVkIGJ5IHRoZSByb290TWFyZ2luIHZhbHVlLlxuICogQHJldHVybiB7P09iamVjdH0gVGhlIGZpbmFsIGludGVyc2VjdGlvbiByZWN0IG9iamVjdCBvciB1bmRlZmluZWQgaWYgbm9cbiAqICAgICBpbnRlcnNlY3Rpb24gaXMgZm91bmQuXG4gKiBAcHJpdmF0ZVxuICovXG5JbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuX2NvbXB1dGVUYXJnZXRBbmRSb290SW50ZXJzZWN0aW9uID1cbiAgICBmdW5jdGlvbih0YXJnZXQsIHJvb3RSZWN0KSB7XG5cbiAgLy8gSWYgdGhlIGVsZW1lbnQgaXNuJ3QgZGlzcGxheWVkLCBhbiBpbnRlcnNlY3Rpb24gY2FuJ3QgaGFwcGVuLlxuICBpZiAod2luZG93LmdldENvbXB1dGVkU3R5bGUodGFyZ2V0KS5kaXNwbGF5ID09ICdub25lJykgcmV0dXJuO1xuXG4gIHZhciB0YXJnZXRSZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KHRhcmdldCk7XG4gIHZhciBpbnRlcnNlY3Rpb25SZWN0ID0gdGFyZ2V0UmVjdDtcbiAgdmFyIHBhcmVudCA9IGdldFBhcmVudE5vZGUodGFyZ2V0KTtcbiAgdmFyIGF0Um9vdCA9IGZhbHNlO1xuXG4gIHdoaWxlICghYXRSb290KSB7XG4gICAgdmFyIHBhcmVudFJlY3QgPSBudWxsO1xuICAgIHZhciBwYXJlbnRDb21wdXRlZFN0eWxlID0gcGFyZW50Lm5vZGVUeXBlID09IDEgP1xuICAgICAgICB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShwYXJlbnQpIDoge307XG5cbiAgICAvLyBJZiB0aGUgcGFyZW50IGlzbid0IGRpc3BsYXllZCwgYW4gaW50ZXJzZWN0aW9uIGNhbid0IGhhcHBlbi5cbiAgICBpZiAocGFyZW50Q29tcHV0ZWRTdHlsZS5kaXNwbGF5ID09ICdub25lJykgcmV0dXJuO1xuXG4gICAgaWYgKHBhcmVudCA9PSB0aGlzLnJvb3QgfHwgcGFyZW50ID09IGRvY3VtZW50KSB7XG4gICAgICBhdFJvb3QgPSB0cnVlO1xuICAgICAgcGFyZW50UmVjdCA9IHJvb3RSZWN0O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBJZiB0aGUgZWxlbWVudCBoYXMgYSBub24tdmlzaWJsZSBvdmVyZmxvdywgYW5kIGl0J3Mgbm90IHRoZSA8Ym9keT5cbiAgICAgIC8vIG9yIDxodG1sPiBlbGVtZW50LCB1cGRhdGUgdGhlIGludGVyc2VjdGlvbiByZWN0LlxuICAgICAgLy8gTm90ZTogPGJvZHk+IGFuZCA8aHRtbD4gY2Fubm90IGJlIGNsaXBwZWQgdG8gYSByZWN0IHRoYXQncyBub3QgYWxzb1xuICAgICAgLy8gdGhlIGRvY3VtZW50IHJlY3QsIHNvIG5vIG5lZWQgdG8gY29tcHV0ZSBhIG5ldyBpbnRlcnNlY3Rpb24uXG4gICAgICBpZiAocGFyZW50ICE9IGRvY3VtZW50LmJvZHkgJiZcbiAgICAgICAgICBwYXJlbnQgIT0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICYmXG4gICAgICAgICAgcGFyZW50Q29tcHV0ZWRTdHlsZS5vdmVyZmxvdyAhPSAndmlzaWJsZScpIHtcbiAgICAgICAgcGFyZW50UmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChwYXJlbnQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIElmIGVpdGhlciBvZiB0aGUgYWJvdmUgY29uZGl0aW9uYWxzIHNldCBhIG5ldyBwYXJlbnRSZWN0LFxuICAgIC8vIGNhbGN1bGF0ZSBuZXcgaW50ZXJzZWN0aW9uIGRhdGEuXG4gICAgaWYgKHBhcmVudFJlY3QpIHtcbiAgICAgIGludGVyc2VjdGlvblJlY3QgPSBjb21wdXRlUmVjdEludGVyc2VjdGlvbihwYXJlbnRSZWN0LCBpbnRlcnNlY3Rpb25SZWN0KTtcblxuICAgICAgaWYgKCFpbnRlcnNlY3Rpb25SZWN0KSBicmVhaztcbiAgICB9XG4gICAgcGFyZW50ID0gZ2V0UGFyZW50Tm9kZShwYXJlbnQpO1xuICB9XG4gIHJldHVybiBpbnRlcnNlY3Rpb25SZWN0O1xufTtcblxuXG4vKipcbiAqIFJldHVybnMgdGhlIHJvb3QgcmVjdCBhZnRlciBiZWluZyBleHBhbmRlZCBieSB0aGUgcm9vdE1hcmdpbiB2YWx1ZS5cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIGV4cGFuZGVkIHJvb3QgcmVjdC5cbiAqIEBwcml2YXRlXG4gKi9cbkludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5fZ2V0Um9vdFJlY3QgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHJvb3RSZWN0O1xuICBpZiAodGhpcy5yb290KSB7XG4gICAgcm9vdFJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QodGhpcy5yb290KTtcbiAgfSBlbHNlIHtcbiAgICAvLyBVc2UgPGh0bWw+Lzxib2R5PiBpbnN0ZWFkIG9mIHdpbmRvdyBzaW5jZSBzY3JvbGwgYmFycyBhZmZlY3Qgc2l6ZS5cbiAgICB2YXIgaHRtbCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICB2YXIgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gICAgcm9vdFJlY3QgPSB7XG4gICAgICB0b3A6IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgcmlnaHQ6IGh0bWwuY2xpZW50V2lkdGggfHwgYm9keS5jbGllbnRXaWR0aCxcbiAgICAgIHdpZHRoOiBodG1sLmNsaWVudFdpZHRoIHx8IGJvZHkuY2xpZW50V2lkdGgsXG4gICAgICBib3R0b206IGh0bWwuY2xpZW50SGVpZ2h0IHx8IGJvZHkuY2xpZW50SGVpZ2h0LFxuICAgICAgaGVpZ2h0OiBodG1sLmNsaWVudEhlaWdodCB8fCBib2R5LmNsaWVudEhlaWdodFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIHRoaXMuX2V4cGFuZFJlY3RCeVJvb3RNYXJnaW4ocm9vdFJlY3QpO1xufTtcblxuXG4vKipcbiAqIEFjY2VwdHMgYSByZWN0IGFuZCBleHBhbmRzIGl0IGJ5IHRoZSByb290TWFyZ2luIHZhbHVlLlxuICogQHBhcmFtIHtPYmplY3R9IHJlY3QgVGhlIHJlY3Qgb2JqZWN0IHRvIGV4cGFuZC5cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIGV4cGFuZGVkIHJlY3QuXG4gKiBAcHJpdmF0ZVxuICovXG5JbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuX2V4cGFuZFJlY3RCeVJvb3RNYXJnaW4gPSBmdW5jdGlvbihyZWN0KSB7XG4gIHZhciBtYXJnaW5zID0gdGhpcy5fcm9vdE1hcmdpblZhbHVlcy5tYXAoZnVuY3Rpb24obWFyZ2luLCBpKSB7XG4gICAgcmV0dXJuIG1hcmdpbi51bml0ID09ICdweCcgPyBtYXJnaW4udmFsdWUgOlxuICAgICAgICBtYXJnaW4udmFsdWUgKiAoaSAlIDIgPyByZWN0LndpZHRoIDogcmVjdC5oZWlnaHQpIC8gMTAwO1xuICB9KTtcbiAgdmFyIG5ld1JlY3QgPSB7XG4gICAgdG9wOiByZWN0LnRvcCAtIG1hcmdpbnNbMF0sXG4gICAgcmlnaHQ6IHJlY3QucmlnaHQgKyBtYXJnaW5zWzFdLFxuICAgIGJvdHRvbTogcmVjdC5ib3R0b20gKyBtYXJnaW5zWzJdLFxuICAgIGxlZnQ6IHJlY3QubGVmdCAtIG1hcmdpbnNbM11cbiAgfTtcbiAgbmV3UmVjdC53aWR0aCA9IG5ld1JlY3QucmlnaHQgLSBuZXdSZWN0LmxlZnQ7XG4gIG5ld1JlY3QuaGVpZ2h0ID0gbmV3UmVjdC5ib3R0b20gLSBuZXdSZWN0LnRvcDtcblxuICByZXR1cm4gbmV3UmVjdDtcbn07XG5cblxuLyoqXG4gKiBBY2NlcHRzIGFuIG9sZCBhbmQgbmV3IGVudHJ5IGFuZCByZXR1cm5zIHRydWUgaWYgYXQgbGVhc3Qgb25lIG9mIHRoZVxuICogdGhyZXNob2xkIHZhbHVlcyBoYXMgYmVlbiBjcm9zc2VkLlxuICogQHBhcmFtIHs/SW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeX0gb2xkRW50cnkgVGhlIHByZXZpb3VzIGVudHJ5IGZvciBhXG4gKiAgICBwYXJ0aWN1bGFyIHRhcmdldCBlbGVtZW50IG9yIG51bGwgaWYgbm8gcHJldmlvdXMgZW50cnkgZXhpc3RzLlxuICogQHBhcmFtIHtJbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5fSBuZXdFbnRyeSBUaGUgY3VycmVudCBlbnRyeSBmb3IgYVxuICogICAgcGFydGljdWxhciB0YXJnZXQgZWxlbWVudC5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IFJldHVybnMgdHJ1ZSBpZiBhIGFueSB0aHJlc2hvbGQgaGFzIGJlZW4gY3Jvc3NlZC5cbiAqIEBwcml2YXRlXG4gKi9cbkludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5faGFzQ3Jvc3NlZFRocmVzaG9sZCA9XG4gICAgZnVuY3Rpb24ob2xkRW50cnksIG5ld0VudHJ5KSB7XG5cbiAgLy8gVG8gbWFrZSBjb21wYXJpbmcgZWFzaWVyLCBhbiBlbnRyeSB0aGF0IGhhcyBhIHJhdGlvIG9mIDBcbiAgLy8gYnV0IGRvZXMgbm90IGFjdHVhbGx5IGludGVyc2VjdCBpcyBnaXZlbiBhIHZhbHVlIG9mIC0xXG4gIHZhciBvbGRSYXRpbyA9IG9sZEVudHJ5ICYmIG9sZEVudHJ5LmlzSW50ZXJzZWN0aW5nID9cbiAgICAgIG9sZEVudHJ5LmludGVyc2VjdGlvblJhdGlvIHx8IDAgOiAtMTtcbiAgdmFyIG5ld1JhdGlvID0gbmV3RW50cnkuaXNJbnRlcnNlY3RpbmcgP1xuICAgICAgbmV3RW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gfHwgMCA6IC0xO1xuXG4gIC8vIElnbm9yZSB1bmNoYW5nZWQgcmF0aW9zXG4gIGlmIChvbGRSYXRpbyA9PT0gbmV3UmF0aW8pIHJldHVybjtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMudGhyZXNob2xkcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciB0aHJlc2hvbGQgPSB0aGlzLnRocmVzaG9sZHNbaV07XG5cbiAgICAvLyBSZXR1cm4gdHJ1ZSBpZiBhbiBlbnRyeSBtYXRjaGVzIGEgdGhyZXNob2xkIG9yIGlmIHRoZSBuZXcgcmF0aW9cbiAgICAvLyBhbmQgdGhlIG9sZCByYXRpbyBhcmUgb24gdGhlIG9wcG9zaXRlIHNpZGVzIG9mIGEgdGhyZXNob2xkLlxuICAgIGlmICh0aHJlc2hvbGQgPT0gb2xkUmF0aW8gfHwgdGhyZXNob2xkID09IG5ld1JhdGlvIHx8XG4gICAgICAgIHRocmVzaG9sZCA8IG9sZFJhdGlvICE9PSB0aHJlc2hvbGQgPCBuZXdSYXRpbykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG59O1xuXG5cbi8qKlxuICogUmV0dXJucyB3aGV0aGVyIG9yIG5vdCB0aGUgcm9vdCBlbGVtZW50IGlzIGFuIGVsZW1lbnQgYW5kIGlzIGluIHRoZSBET00uXG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHRoZSByb290IGVsZW1lbnQgaXMgYW4gZWxlbWVudCBhbmQgaXMgaW4gdGhlIERPTS5cbiAqIEBwcml2YXRlXG4gKi9cbkludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5fcm9vdElzSW5Eb20gPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuICF0aGlzLnJvb3QgfHwgY29udGFpbnNEZWVwKGRvY3VtZW50LCB0aGlzLnJvb3QpO1xufTtcblxuXG4vKipcbiAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIHRhcmdldCBlbGVtZW50IGlzIGEgY2hpbGQgb2Ygcm9vdC5cbiAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0IFRoZSB0YXJnZXQgZWxlbWVudCB0byBjaGVjay5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdGhlIHRhcmdldCBlbGVtZW50IGlzIGEgY2hpbGQgb2Ygcm9vdC5cbiAqIEBwcml2YXRlXG4gKi9cbkludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5fcm9vdENvbnRhaW5zVGFyZ2V0ID0gZnVuY3Rpb24odGFyZ2V0KSB7XG4gIHJldHVybiBjb250YWluc0RlZXAodGhpcy5yb290IHx8IGRvY3VtZW50LCB0YXJnZXQpO1xufTtcblxuXG4vKipcbiAqIEFkZHMgdGhlIGluc3RhbmNlIHRvIHRoZSBnbG9iYWwgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgcmVnaXN0cnkgaWYgaXQgaXNuJ3RcbiAqIGFscmVhZHkgcHJlc2VudC5cbiAqIEBwcml2YXRlXG4gKi9cbkludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5fcmVnaXN0ZXJJbnN0YW5jZSA9IGZ1bmN0aW9uKCkge1xuICBpZiAocmVnaXN0cnkuaW5kZXhPZih0aGlzKSA8IDApIHtcbiAgICByZWdpc3RyeS5wdXNoKHRoaXMpO1xuICB9XG59O1xuXG5cbi8qKlxuICogUmVtb3ZlcyB0aGUgaW5zdGFuY2UgZnJvbSB0aGUgZ2xvYmFsIEludGVyc2VjdGlvbk9ic2VydmVyIHJlZ2lzdHJ5LlxuICogQHByaXZhdGVcbiAqL1xuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLl91bnJlZ2lzdGVySW5zdGFuY2UgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGluZGV4ID0gcmVnaXN0cnkuaW5kZXhPZih0aGlzKTtcbiAgaWYgKGluZGV4ICE9IC0xKSByZWdpc3RyeS5zcGxpY2UoaW5kZXgsIDEpO1xufTtcblxuXG4vKipcbiAqIFJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgcGVyZm9ybWFuY2Uubm93KCkgbWV0aG9kIG9yIG51bGwgaW4gYnJvd3NlcnNcbiAqIHRoYXQgZG9uJ3Qgc3VwcG9ydCB0aGUgQVBJLlxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgZWxhcHNlZCB0aW1lIHNpbmNlIHRoZSBwYWdlIHdhcyByZXF1ZXN0ZWQuXG4gKi9cbmZ1bmN0aW9uIG5vdygpIHtcbiAgcmV0dXJuIHdpbmRvdy5wZXJmb3JtYW5jZSAmJiBwZXJmb3JtYW5jZS5ub3cgJiYgcGVyZm9ybWFuY2Uubm93KCk7XG59XG5cblxuLyoqXG4gKiBUaHJvdHRsZXMgYSBmdW5jdGlvbiBhbmQgZGVsYXlzIGl0cyBleGVjdXRpb25nLCBzbyBpdCdzIG9ubHkgY2FsbGVkIGF0IG1vc3RcbiAqIG9uY2Ugd2l0aGluIGEgZ2l2ZW4gdGltZSBwZXJpb2QuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gdGhyb3R0bGUuXG4gKiBAcGFyYW0ge251bWJlcn0gdGltZW91dCBUaGUgYW1vdW50IG9mIHRpbWUgdGhhdCBtdXN0IHBhc3MgYmVmb3JlIHRoZVxuICogICAgIGZ1bmN0aW9uIGNhbiBiZSBjYWxsZWQgYWdhaW4uXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gVGhlIHRocm90dGxlZCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gdGhyb3R0bGUoZm4sIHRpbWVvdXQpIHtcbiAgdmFyIHRpbWVyID0gbnVsbDtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXRpbWVyKSB7XG4gICAgICB0aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGZuKCk7XG4gICAgICAgIHRpbWVyID0gbnVsbDtcbiAgICAgIH0sIHRpbWVvdXQpO1xuICAgIH1cbiAgfTtcbn1cblxuXG4vKipcbiAqIEFkZHMgYW4gZXZlbnQgaGFuZGxlciB0byBhIERPTSBub2RlIGVuc3VyaW5nIGNyb3NzLWJyb3dzZXIgY29tcGF0aWJpbGl0eS5cbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZSBUaGUgRE9NIG5vZGUgdG8gYWRkIHRoZSBldmVudCBoYW5kbGVyIHRvLlxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGV2ZW50IGhhbmRsZXIgdG8gYWRkLlxuICogQHBhcmFtIHtib29sZWFufSBvcHRfdXNlQ2FwdHVyZSBPcHRpb25hbGx5IGFkZHMgdGhlIGV2ZW4gdG8gdGhlIGNhcHR1cmVcbiAqICAgICBwaGFzZS4gTm90ZTogdGhpcyBvbmx5IHdvcmtzIGluIG1vZGVybiBicm93c2Vycy5cbiAqL1xuZnVuY3Rpb24gYWRkRXZlbnQobm9kZSwgZXZlbnQsIGZuLCBvcHRfdXNlQ2FwdHVyZSkge1xuICBpZiAodHlwZW9mIG5vZGUuYWRkRXZlbnRMaXN0ZW5lciA9PSAnZnVuY3Rpb24nKSB7XG4gICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBmbiwgb3B0X3VzZUNhcHR1cmUgfHwgZmFsc2UpO1xuICB9XG4gIGVsc2UgaWYgKHR5cGVvZiBub2RlLmF0dGFjaEV2ZW50ID09ICdmdW5jdGlvbicpIHtcbiAgICBub2RlLmF0dGFjaEV2ZW50KCdvbicgKyBldmVudCwgZm4pO1xuICB9XG59XG5cblxuLyoqXG4gKiBSZW1vdmVzIGEgcHJldmlvdXNseSBhZGRlZCBldmVudCBoYW5kbGVyIGZyb20gYSBET00gbm9kZS5cbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZSBUaGUgRE9NIG5vZGUgdG8gcmVtb3ZlIHRoZSBldmVudCBoYW5kbGVyIGZyb20uXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnQgVGhlIGV2ZW50IG5hbWUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZXZlbnQgaGFuZGxlciB0byByZW1vdmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG9wdF91c2VDYXB0dXJlIElmIHRoZSBldmVudCBoYW5kbGVyIHdhcyBhZGRlZCB3aXRoIHRoaXNcbiAqICAgICBmbGFnIHNldCB0byB0cnVlLCBpdCBzaG91bGQgYmUgc2V0IHRvIHRydWUgaGVyZSBpbiBvcmRlciB0byByZW1vdmUgaXQuXG4gKi9cbmZ1bmN0aW9uIHJlbW92ZUV2ZW50KG5vZGUsIGV2ZW50LCBmbiwgb3B0X3VzZUNhcHR1cmUpIHtcbiAgaWYgKHR5cGVvZiBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIgPT0gJ2Z1bmN0aW9uJykge1xuICAgIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgZm4sIG9wdF91c2VDYXB0dXJlIHx8IGZhbHNlKTtcbiAgfVxuICBlbHNlIGlmICh0eXBlb2Ygbm9kZS5kZXRhdGNoRXZlbnQgPT0gJ2Z1bmN0aW9uJykge1xuICAgIG5vZGUuZGV0YXRjaEV2ZW50KCdvbicgKyBldmVudCwgZm4pO1xuICB9XG59XG5cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBpbnRlcnNlY3Rpb24gYmV0d2VlbiB0d28gcmVjdCBvYmplY3RzLlxuICogQHBhcmFtIHtPYmplY3R9IHJlY3QxIFRoZSBmaXJzdCByZWN0LlxuICogQHBhcmFtIHtPYmplY3R9IHJlY3QyIFRoZSBzZWNvbmQgcmVjdC5cbiAqIEByZXR1cm4gez9PYmplY3R9IFRoZSBpbnRlcnNlY3Rpb24gcmVjdCBvciB1bmRlZmluZWQgaWYgbm8gaW50ZXJzZWN0aW9uXG4gKiAgICAgaXMgZm91bmQuXG4gKi9cbmZ1bmN0aW9uIGNvbXB1dGVSZWN0SW50ZXJzZWN0aW9uKHJlY3QxLCByZWN0Mikge1xuICB2YXIgdG9wID0gTWF0aC5tYXgocmVjdDEudG9wLCByZWN0Mi50b3ApO1xuICB2YXIgYm90dG9tID0gTWF0aC5taW4ocmVjdDEuYm90dG9tLCByZWN0Mi5ib3R0b20pO1xuICB2YXIgbGVmdCA9IE1hdGgubWF4KHJlY3QxLmxlZnQsIHJlY3QyLmxlZnQpO1xuICB2YXIgcmlnaHQgPSBNYXRoLm1pbihyZWN0MS5yaWdodCwgcmVjdDIucmlnaHQpO1xuICB2YXIgd2lkdGggPSByaWdodCAtIGxlZnQ7XG4gIHZhciBoZWlnaHQgPSBib3R0b20gLSB0b3A7XG5cbiAgcmV0dXJuICh3aWR0aCA+PSAwICYmIGhlaWdodCA+PSAwKSAmJiB7XG4gICAgdG9wOiB0b3AsXG4gICAgYm90dG9tOiBib3R0b20sXG4gICAgbGVmdDogbGVmdCxcbiAgICByaWdodDogcmlnaHQsXG4gICAgd2lkdGg6IHdpZHRoLFxuICAgIGhlaWdodDogaGVpZ2h0XG4gIH07XG59XG5cblxuLyoqXG4gKiBTaGltcyB0aGUgbmF0aXZlIGdldEJvdW5kaW5nQ2xpZW50UmVjdCBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG9sZGVyIElFLlxuICogQHBhcmFtIHtFbGVtZW50fSBlbCBUaGUgZWxlbWVudCB3aG9zZSBib3VuZGluZyByZWN0IHRvIGdldC5cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIChwb3NzaWJseSBzaGltbWVkKSByZWN0IG9mIHRoZSBlbGVtZW50LlxuICovXG5mdW5jdGlvbiBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWwpIHtcbiAgdmFyIHJlY3Q7XG5cbiAgdHJ5IHtcbiAgICByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIC8vIElnbm9yZSBXaW5kb3dzIDcgSUUxMSBcIlVuc3BlY2lmaWVkIGVycm9yXCJcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdzNjL0ludGVyc2VjdGlvbk9ic2VydmVyL3B1bGwvMjA1XG4gIH1cblxuICBpZiAoIXJlY3QpIHJldHVybiBnZXRFbXB0eVJlY3QoKTtcblxuICAvLyBPbGRlciBJRVxuICBpZiAoIShyZWN0LndpZHRoICYmIHJlY3QuaGVpZ2h0KSkge1xuICAgIHJlY3QgPSB7XG4gICAgICB0b3A6IHJlY3QudG9wLFxuICAgICAgcmlnaHQ6IHJlY3QucmlnaHQsXG4gICAgICBib3R0b206IHJlY3QuYm90dG9tLFxuICAgICAgbGVmdDogcmVjdC5sZWZ0LFxuICAgICAgd2lkdGg6IHJlY3QucmlnaHQgLSByZWN0LmxlZnQsXG4gICAgICBoZWlnaHQ6IHJlY3QuYm90dG9tIC0gcmVjdC50b3BcbiAgICB9O1xuICB9XG4gIHJldHVybiByZWN0O1xufVxuXG5cbi8qKlxuICogUmV0dXJucyBhbiBlbXB0eSByZWN0IG9iamVjdC4gQW4gZW1wdHkgcmVjdCBpcyByZXR1cm5lZCB3aGVuIGFuIGVsZW1lbnRcbiAqIGlzIG5vdCBpbiB0aGUgRE9NLlxuICogQHJldHVybiB7T2JqZWN0fSBUaGUgZW1wdHkgcmVjdC5cbiAqL1xuZnVuY3Rpb24gZ2V0RW1wdHlSZWN0KCkge1xuICByZXR1cm4ge1xuICAgIHRvcDogMCxcbiAgICBib3R0b206IDAsXG4gICAgbGVmdDogMCxcbiAgICByaWdodDogMCxcbiAgICB3aWR0aDogMCxcbiAgICBoZWlnaHQ6IDBcbiAgfTtcbn1cblxuLyoqXG4gKiBDaGVja3MgdG8gc2VlIGlmIGEgcGFyZW50IGVsZW1lbnQgY29udGFpbnMgYSBjaGlsZCBlbGVtbnQgKGluY2x1ZGluZyBpbnNpZGVcbiAqIHNoYWRvdyBET00pLlxuICogQHBhcmFtIHtOb2RlfSBwYXJlbnQgVGhlIHBhcmVudCBlbGVtZW50LlxuICogQHBhcmFtIHtOb2RlfSBjaGlsZCBUaGUgY2hpbGQgZWxlbWVudC5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdGhlIHBhcmVudCBub2RlIGNvbnRhaW5zIHRoZSBjaGlsZCBub2RlLlxuICovXG5mdW5jdGlvbiBjb250YWluc0RlZXAocGFyZW50LCBjaGlsZCkge1xuICB2YXIgbm9kZSA9IGNoaWxkO1xuICB3aGlsZSAobm9kZSkge1xuICAgIGlmIChub2RlID09IHBhcmVudCkgcmV0dXJuIHRydWU7XG5cbiAgICBub2RlID0gZ2V0UGFyZW50Tm9kZShub2RlKTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cblxuLyoqXG4gKiBHZXRzIHRoZSBwYXJlbnQgbm9kZSBvZiBhbiBlbGVtZW50IG9yIGl0cyBob3N0IGVsZW1lbnQgaWYgdGhlIHBhcmVudCBub2RlXG4gKiBpcyBhIHNoYWRvdyByb290LlxuICogQHBhcmFtIHtOb2RlfSBub2RlIFRoZSBub2RlIHdob3NlIHBhcmVudCB0byBnZXQuXG4gKiBAcmV0dXJuIHtOb2RlfG51bGx9IFRoZSBwYXJlbnQgbm9kZSBvciBudWxsIGlmIG5vIHBhcmVudCBleGlzdHMuXG4gKi9cbmZ1bmN0aW9uIGdldFBhcmVudE5vZGUobm9kZSkge1xuICB2YXIgcGFyZW50ID0gbm9kZS5wYXJlbnROb2RlO1xuXG4gIGlmIChwYXJlbnQgJiYgcGFyZW50Lm5vZGVUeXBlID09IDExICYmIHBhcmVudC5ob3N0KSB7XG4gICAgLy8gSWYgdGhlIHBhcmVudCBpcyBhIHNoYWRvdyByb290LCByZXR1cm4gdGhlIGhvc3QgZWxlbWVudC5cbiAgICByZXR1cm4gcGFyZW50Lmhvc3Q7XG4gIH1cbiAgcmV0dXJuIHBhcmVudDtcbn1cblxuXG4vLyBFeHBvc2VzIHRoZSBjb25zdHJ1Y3RvcnMgZ2xvYmFsbHkuXG53aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSBJbnRlcnNlY3Rpb25PYnNlcnZlcjtcbndpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5ID0gSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeTtcblxufSh3aW5kb3csIGRvY3VtZW50KSk7XG4iLCIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuXHR0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6XG5cdHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XG5cdChnbG9iYWwuc2Nyb2xsYW1hID0gZmFjdG9yeSgpKTtcbn0odGhpcywgKGZ1bmN0aW9uICgpIHsgJ3VzZSBzdHJpY3QnO1xuXG4vLyBET00gaGVscGVyIGZ1bmN0aW9uc1xuXG4vLyBwcml2YXRlXG5mdW5jdGlvbiBzZWxlY3Rpb25Ub0FycmF5KHNlbGVjdGlvbikge1xuICB2YXIgbGVuID0gc2VsZWN0aW9uLmxlbmd0aDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgcmVzdWx0LnB1c2goc2VsZWN0aW9uW2ldKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vLyBwdWJsaWNcbmZ1bmN0aW9uIHNlbGVjdChzZWxlY3Rvcikge1xuICBpZiAoc2VsZWN0b3IgaW5zdGFuY2VvZiBFbGVtZW50KSB7IHJldHVybiBzZWxlY3RvcjsgfVxuICBlbHNlIGlmICh0eXBlb2Ygc2VsZWN0b3IgPT09ICdzdHJpbmcnKVxuICAgIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpOyB9XG4gIHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiBzZWxlY3RBbGwoc2VsZWN0b3IsIHBhcmVudCkge1xuICBpZiAoIHBhcmVudCA9PT0gdm9pZCAwICkgcGFyZW50ID0gZG9jdW1lbnQ7XG5cbiAgaWYgKHR5cGVvZiBzZWxlY3RvciA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gc2VsZWN0aW9uVG9BcnJheShwYXJlbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpO1xuICB9IGVsc2UgaWYgKHNlbGVjdG9yIGluc3RhbmNlb2YgTm9kZUxpc3QpIHtcbiAgICByZXR1cm4gc2VsZWN0aW9uVG9BcnJheShzZWxlY3Rvcik7XG4gIH0gZWxzZSBpZiAoc2VsZWN0b3IgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgIHJldHVybiBzZWxlY3RvcjtcbiAgfVxuICByZXR1cm4gW107XG59XG5cbmZ1bmN0aW9uIGdldFN0ZXBJZChyZWYpIHtcbiAgdmFyIGlkID0gcmVmLmlkO1xuICB2YXIgaSA9IHJlZi5pO1xuXG4gIHJldHVybiAoXCJzY3JvbGxhbWFfX2RlYnVnLXN0ZXAtLVwiICsgaWQgKyBcIi1cIiArIGkpO1xufVxuXG5mdW5jdGlvbiBnZXRPZmZzZXRJZChyZWYpIHtcbiAgdmFyIGlkID0gcmVmLmlkO1xuXG4gIHJldHVybiAoXCJzY3JvbGxhbWFfX2RlYnVnLW9mZnNldC0tXCIgKyBpZCk7XG59XG5cbi8vIFNFVFVQXG5cbmZ1bmN0aW9uIHNldHVwT2Zmc2V0KHJlZikge1xuICB2YXIgaWQgPSByZWYuaWQ7XG4gIHZhciBvZmZzZXRWYWwgPSByZWYub2Zmc2V0VmFsO1xuICB2YXIgc3RlcENsYXNzID0gcmVmLnN0ZXBDbGFzcztcblxuICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZWwuc2V0QXR0cmlidXRlKCdpZCcsIGdldE9mZnNldElkKHsgaWQ6IGlkIH0pKTtcbiAgZWwuc2V0QXR0cmlidXRlKCdjbGFzcycsICdzY3JvbGxhbWFfX2RlYnVnLW9mZnNldCcpO1xuXG4gIGVsLnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcbiAgZWwuc3R5bGUubGVmdCA9ICcwJztcbiAgZWwuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gIGVsLnN0eWxlLmhlaWdodCA9ICcwcHgnO1xuICBlbC5zdHlsZS5ib3JkZXJUb3AgPSAnMnB4IGRhc2hlZCBibGFjayc7XG4gIGVsLnN0eWxlLnpJbmRleCA9ICc5OTk5JztcblxuICB2YXIgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgdGV4dC5pbm5lclRleHQgPSBcIlxcXCIuXCIgKyBzdGVwQ2xhc3MgKyBcIlxcXCIgdHJpZ2dlcjogXCIgKyBvZmZzZXRWYWw7XG4gIHRleHQuc3R5bGUuZm9udFNpemUgPSAnMTJweCc7XG4gIHRleHQuc3R5bGUuZm9udEZhbWlseSA9ICdtb25vc3BhY2UnO1xuICB0ZXh0LnN0eWxlLmNvbG9yID0gJ2JsYWNrJztcbiAgdGV4dC5zdHlsZS5tYXJnaW4gPSAnMCc7XG4gIHRleHQuc3R5bGUucGFkZGluZyA9ICc2cHgnO1xuICBlbC5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbCk7XG59XG5cbmZ1bmN0aW9uIHNldHVwKHJlZikge1xuICB2YXIgaWQgPSByZWYuaWQ7XG4gIHZhciBvZmZzZXRWYWwgPSByZWYub2Zmc2V0VmFsO1xuICB2YXIgc3RlcEVsID0gcmVmLnN0ZXBFbDtcblxuICB2YXIgc3RlcENsYXNzID0gc3RlcEVsWzBdLmdldEF0dHJpYnV0ZSgnY2xhc3MnKTtcbiAgc2V0dXBPZmZzZXQoeyBpZDogaWQsIG9mZnNldFZhbDogb2Zmc2V0VmFsLCBzdGVwQ2xhc3M6IHN0ZXBDbGFzcyB9KTtcbn1cblxuLy8gVVBEQVRFXG5mdW5jdGlvbiB1cGRhdGVPZmZzZXQocmVmKSB7XG4gIHZhciBpZCA9IHJlZi5pZDtcbiAgdmFyIG9mZnNldE1hcmdpbiA9IHJlZi5vZmZzZXRNYXJnaW47XG4gIHZhciBvZmZzZXRWYWwgPSByZWYub2Zmc2V0VmFsO1xuXG4gIHZhciBpZFZhbCA9IGdldE9mZnNldElkKHsgaWQ6IGlkIH0pO1xuICB2YXIgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKChcIiNcIiArIGlkVmFsKSk7XG4gIGVsLnN0eWxlLnRvcCA9IG9mZnNldE1hcmdpbiArIFwicHhcIjtcbn1cblxuZnVuY3Rpb24gdXBkYXRlKHJlZikge1xuICB2YXIgaWQgPSByZWYuaWQ7XG4gIHZhciBzdGVwT2Zmc2V0SGVpZ2h0ID0gcmVmLnN0ZXBPZmZzZXRIZWlnaHQ7XG4gIHZhciBvZmZzZXRNYXJnaW4gPSByZWYub2Zmc2V0TWFyZ2luO1xuICB2YXIgb2Zmc2V0VmFsID0gcmVmLm9mZnNldFZhbDtcblxuICB1cGRhdGVPZmZzZXQoeyBpZDogaWQsIG9mZnNldE1hcmdpbjogb2Zmc2V0TWFyZ2luIH0pO1xufVxuXG5mdW5jdGlvbiBub3RpZnlTdGVwKHJlZikge1xuICB2YXIgaWQgPSByZWYuaWQ7XG4gIHZhciBpbmRleCA9IHJlZi5pbmRleDtcbiAgdmFyIHN0YXRlID0gcmVmLnN0YXRlO1xuXG4gIHZhciBpZFZhbCA9IGdldFN0ZXBJZCh7IGlkOiBpZCwgaTogaW5kZXggfSk7XG4gIHZhciBlbEEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKChcIiNcIiArIGlkVmFsICsgXCJfYWJvdmVcIikpO1xuICB2YXIgZWxCID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigoXCIjXCIgKyBpZFZhbCArIFwiX2JlbG93XCIpKTtcbiAgdmFyIGRpc3BsYXkgPSBzdGF0ZSA9PT0gJ2VudGVyJyA/ICdibG9jaycgOiAnbm9uZSc7XG5cbiAgaWYgKGVsQSkgeyBlbEEuc3R5bGUuZGlzcGxheSA9IGRpc3BsYXk7IH1cbiAgaWYgKGVsQikgeyBlbEIuc3R5bGUuZGlzcGxheSA9IGRpc3BsYXk7IH1cbn1cblxuZnVuY3Rpb24gc2Nyb2xsYW1hKCkge1xuICB2YXIgWkVST19NT0UgPSAxOyAvLyB6ZXJvIHdpdGggc29tZSByb3VuZGluZyBtYXJnaW4gb2YgZXJyb3JcbiAgdmFyIGNhbGxiYWNrID0ge307XG4gIHZhciBpbyA9IHt9O1xuXG4gIHZhciBjb250YWluZXJFbCA9IG51bGw7XG4gIHZhciBncmFwaGljRWwgPSBudWxsO1xuICB2YXIgc3RlcEVsID0gbnVsbDtcblxuICB2YXIgaWQgPSBudWxsO1xuICB2YXIgb2Zmc2V0VmFsID0gMDtcbiAgdmFyIG9mZnNldE1hcmdpbiA9IDA7XG4gIHZhciB2aCA9IDA7XG4gIHZhciBwaCA9IDA7XG4gIHZhciBzdGVwT2Zmc2V0SGVpZ2h0ID0gbnVsbDtcbiAgdmFyIHN0ZXBPZmZzZXRUb3AgPSBudWxsO1xuICB2YXIgYmJveEdyYXBoaWMgPSBudWxsO1xuXG4gIHZhciBpc1JlYWR5ID0gZmFsc2U7XG4gIHZhciBpc0VuYWJsZWQgPSBmYWxzZTtcbiAgdmFyIGRlYnVnTW9kZSA9IGZhbHNlO1xuICB2YXIgcHJvZ3Jlc3NNb2RlID0gZmFsc2U7XG4gIHZhciBwcm9ncmVzc1RocmVzaG9sZCA9IDA7XG4gIHZhciBwcmVzZXJ2ZU9yZGVyID0gZmFsc2U7XG4gIHZhciB0cmlnZ2VyT25jZSA9IGZhbHNlO1xuXG4gIHZhciBzdGVwU3RhdGVzID0gbnVsbDtcbiAgdmFyIGNvbnRhaW5lclN0YXRlID0gbnVsbDtcbiAgdmFyIHByZXZpb3VzWU9mZnNldCA9IC0xO1xuICB2YXIgZGlyZWN0aW9uID0gbnVsbDtcblxuICB2YXIgZXhjbHVkZSA9IFtdO1xuXG4gIC8vIEhFTFBFUlNcbiAgZnVuY3Rpb24gZ2VuZXJhdGVJZCgpIHtcbiAgICB2YXIgYSA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdHV2JztcbiAgICB2YXIgbCA9IGEubGVuZ3RoO1xuICAgIHZhciB0ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgdmFyIHIgPSBbMCwgMCwgMF0ubWFwKGZ1bmN0aW9uIChkKSB7IHJldHVybiBhW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGwpXTsgfSkuam9pbignJyk7XG4gICAgcmV0dXJuIChcIlwiICsgciArIHQpO1xuICB9XG5cbiAgLy93d3cuZ29tYWtldGhpbmdzLmNvbS9ob3ctdG8tZ2V0LWFuLWVsZW1lbnRzLWRpc3RhbmNlLWZyb20tdGhlLXRvcC1vZi10aGUtcGFnZS13aXRoLXZhbmlsbGEtamF2YXNjcmlwdC9cbiAgZnVuY3Rpb24gZ2V0T2Zmc2V0VG9wKGVsKSB7XG4gICAgLy8gU2V0IG91ciBkaXN0YW5jZSBwbGFjZWhvbGRlclxuICAgIHZhciBkaXN0YW5jZSA9IDA7XG5cbiAgICAvLyBMb29wIHVwIHRoZSBET01cbiAgICBpZiAoZWwub2Zmc2V0UGFyZW50KSB7XG4gICAgICBkbyB7XG4gICAgICAgIGRpc3RhbmNlICs9IGVsLm9mZnNldFRvcDtcbiAgICAgICAgZWwgPSBlbC5vZmZzZXRQYXJlbnQ7XG4gICAgICB9IHdoaWxlIChlbCk7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIG91ciBkaXN0YW5jZVxuICAgIHJldHVybiBkaXN0YW5jZSA8IDAgPyAwIDogZGlzdGFuY2U7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRQYWdlSGVpZ2h0KCkge1xuICAgIHZhciBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgICB2YXIgaHRtbCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuICAgIHJldHVybiBNYXRoLm1heChcbiAgICAgIGJvZHkuc2Nyb2xsSGVpZ2h0LFxuICAgICAgYm9keS5vZmZzZXRIZWlnaHQsXG4gICAgICBodG1sLmNsaWVudEhlaWdodCxcbiAgICAgIGh0bWwuc2Nyb2xsSGVpZ2h0LFxuICAgICAgaHRtbC5vZmZzZXRIZWlnaHRcbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0SW5kZXgoZWxlbWVudCkge1xuICAgIHJldHVybiArZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2Nyb2xsYW1hLWluZGV4Jyk7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVEaXJlY3Rpb24oKSB7XG4gICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+IHByZXZpb3VzWU9mZnNldCkgeyBkaXJlY3Rpb24gPSAnZG93bic7IH1cbiAgICBlbHNlIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPCBwcmV2aW91c1lPZmZzZXQpIHsgZGlyZWN0aW9uID0gJ3VwJzsgfVxuICAgIHByZXZpb3VzWU9mZnNldCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVJlc2l6ZSgpIHtcbiAgICB2aCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICBwaCA9IGdldFBhZ2VIZWlnaHQoKTtcblxuICAgIGJib3hHcmFwaGljID0gZ3JhcGhpY0VsID8gZ3JhcGhpY0VsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIDogbnVsbDtcblxuICAgIG9mZnNldE1hcmdpbiA9IG9mZnNldFZhbCAqIHZoO1xuXG4gICAgc3RlcE9mZnNldEhlaWdodCA9IHN0ZXBFbCA/IHN0ZXBFbC5tYXAoZnVuY3Rpb24gKGVsKSB7IHJldHVybiBlbC5vZmZzZXRIZWlnaHQ7IH0pIDogW107XG5cbiAgICBzdGVwT2Zmc2V0VG9wID0gc3RlcEVsID8gc3RlcEVsLm1hcChnZXRPZmZzZXRUb3ApIDogW107XG5cbiAgICBpZiAoaXNFbmFibGVkICYmIGlzUmVhZHkpIHsgdXBkYXRlSU8oKTsgfVxuXG4gICAgaWYgKGRlYnVnTW9kZSlcbiAgICAgIHsgdXBkYXRlKHsgaWQ6IGlkLCBzdGVwT2Zmc2V0SGVpZ2h0OiBzdGVwT2Zmc2V0SGVpZ2h0LCBvZmZzZXRNYXJnaW46IG9mZnNldE1hcmdpbiwgb2Zmc2V0VmFsOiBvZmZzZXRWYWwgfSk7IH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUVuYWJsZShlbmFibGUpIHtcbiAgICBpZiAoZW5hYmxlICYmICFpc0VuYWJsZWQpIHtcbiAgICAgIGlmIChpc1JlYWR5KSB7IHVwZGF0ZUlPKCk7IH1cbiAgICAgIGlzRW5hYmxlZCA9IHRydWU7XG4gICAgfSBlbHNlIGlmICghZW5hYmxlKSB7XG4gICAgICBpZiAoaW8udG9wKSB7IGlvLnRvcC5kaXNjb25uZWN0KCk7IH1cbiAgICAgIGlmIChpby5ib3R0b20pIHsgaW8uYm90dG9tLmRpc2Nvbm5lY3QoKTsgfVxuICAgICAgaWYgKGlvLnN0ZXBBYm92ZSkgeyBpby5zdGVwQWJvdmUuZm9yRWFjaChmdW5jdGlvbiAoZCkgeyByZXR1cm4gZC5kaXNjb25uZWN0KCk7IH0pOyB9XG4gICAgICBpZiAoaW8uc3RlcEJlbG93KSB7IGlvLnN0ZXBCZWxvdy5mb3JFYWNoKGZ1bmN0aW9uIChkKSB7IHJldHVybiBkLmRpc2Nvbm5lY3QoKTsgfSk7IH1cbiAgICAgIGlmIChpby5zdGVwUHJvZ3Jlc3MpIHsgaW8uc3RlcFByb2dyZXNzLmZvckVhY2goZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQuZGlzY29ubmVjdCgpOyB9KTsgfVxuICAgICAgaWYgKGlvLnZpZXdwb3J0QWJvdmUpIHsgaW8udmlld3BvcnRBYm92ZS5mb3JFYWNoKGZ1bmN0aW9uIChkKSB7IHJldHVybiBkLmRpc2Nvbm5lY3QoKTsgfSk7IH1cbiAgICAgIGlmIChpby52aWV3cG9ydEJlbG93KSB7IGlvLnZpZXdwb3J0QmVsb3cuZm9yRWFjaChmdW5jdGlvbiAoZCkgeyByZXR1cm4gZC5kaXNjb25uZWN0KCk7IH0pOyB9XG4gICAgICBpc0VuYWJsZWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVUaHJlc2hvbGQoaGVpZ2h0KSB7XG4gICAgdmFyIGNvdW50ID0gTWF0aC5jZWlsKGhlaWdodCAvIHByb2dyZXNzVGhyZXNob2xkKTtcbiAgICB2YXIgdCA9IFtdO1xuICAgIHZhciByYXRpbyA9IDEgLyBjb3VudDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgIHQucHVzaChpICogcmF0aW8pO1xuICAgIH1cbiAgICByZXR1cm4gdDtcbiAgfVxuXG4gIC8vIE5PVElGWSBDQUxMQkFDS1NcbiAgZnVuY3Rpb24gbm90aWZ5T3RoZXJzKGluZGV4LCBsb2NhdGlvbikge1xuICAgIGlmIChsb2NhdGlvbiA9PT0gJ2Fib3ZlJykge1xuICAgICAgLy8gY2hlY2sgaWYgc3RlcHMgYWJvdmUvYmVsb3cgd2VyZSBza2lwcGVkIGFuZCBzaG91bGQgYmUgbm90aWZpZWQgZmlyc3RcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW5kZXg7IGkrKykge1xuICAgICAgICB2YXIgc3MgPSBzdGVwU3RhdGVzW2ldO1xuICAgICAgICBpZiAoc3Muc3RhdGUgPT09ICdlbnRlcicpIHsgbm90aWZ5U3RlcEV4aXQoc3RlcEVsW2ldLCAnZG93bicpOyB9XG4gICAgICAgIGlmIChzcy5kaXJlY3Rpb24gPT09ICd1cCcpIHtcbiAgICAgICAgICBub3RpZnlTdGVwRW50ZXIoc3RlcEVsW2ldLCAnZG93bicsIGZhbHNlKTtcbiAgICAgICAgICBub3RpZnlTdGVwRXhpdChzdGVwRWxbaV0sICdkb3duJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGxvY2F0aW9uID09PSAnYmVsb3cnKSB7XG4gICAgICBmb3IgKHZhciBpJDEgPSBzdGVwU3RhdGVzLmxlbmd0aCAtIDE7IGkkMSA+IGluZGV4OyBpJDEtLSkge1xuICAgICAgICB2YXIgc3MkMSA9IHN0ZXBTdGF0ZXNbaSQxXTtcbiAgICAgICAgaWYgKHNzJDEuc3RhdGUgPT09ICdlbnRlcicpIHtcbiAgICAgICAgICBub3RpZnlTdGVwRXhpdChzdGVwRWxbaSQxXSwgJ3VwJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNzJDEuZGlyZWN0aW9uID09PSAnZG93bicpIHtcbiAgICAgICAgICBub3RpZnlTdGVwRW50ZXIoc3RlcEVsW2kkMV0sICd1cCcsIGZhbHNlKTtcbiAgICAgICAgICBub3RpZnlTdGVwRXhpdChzdGVwRWxbaSQxXSwgJ3VwJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBub3RpZnlTdGVwRW50ZXIoZWxlbWVudCwgZGlyZWN0aW9uLCBjaGVjaykge1xuICAgIGlmICggY2hlY2sgPT09IHZvaWQgMCApIGNoZWNrID0gdHJ1ZTtcblxuICAgIHZhciBpbmRleCA9IGdldEluZGV4KGVsZW1lbnQpO1xuICAgIHZhciByZXNwID0geyBlbGVtZW50OiBlbGVtZW50LCBpbmRleDogaW5kZXgsIGRpcmVjdGlvbjogZGlyZWN0aW9uIH07XG5cbiAgICAvLyBzdG9yZSBtb3N0IHJlY2VudCB0cmlnZ2VyXG4gICAgc3RlcFN0YXRlc1tpbmRleF0uZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuICAgIHN0ZXBTdGF0ZXNbaW5kZXhdLnN0YXRlID0gJ2VudGVyJztcblxuICAgIGlmIChwcmVzZXJ2ZU9yZGVyICYmIGNoZWNrICYmIGRpcmVjdGlvbiA9PT0gJ2Rvd24nKVxuICAgICAgeyBub3RpZnlPdGhlcnMoaW5kZXgsICdhYm92ZScpOyB9XG5cbiAgICBpZiAocHJlc2VydmVPcmRlciAmJiBjaGVjayAmJiBkaXJlY3Rpb24gPT09ICd1cCcpXG4gICAgICB7IG5vdGlmeU90aGVycyhpbmRleCwgJ2JlbG93Jyk7IH1cblxuICAgIGlmIChcbiAgICAgIGNhbGxiYWNrLnN0ZXBFbnRlciAmJlxuICAgICAgdHlwZW9mIGNhbGxiYWNrLnN0ZXBFbnRlciA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgIWV4Y2x1ZGVbaW5kZXhdXG4gICAgKSB7XG4gICAgICBjYWxsYmFjay5zdGVwRW50ZXIocmVzcCwgc3RlcFN0YXRlcyk7XG4gICAgICBpZiAoZGVidWdNb2RlKSB7IG5vdGlmeVN0ZXAoeyBpZDogaWQsIGluZGV4OiBpbmRleCwgc3RhdGU6ICdlbnRlcicgfSk7IH1cbiAgICAgIGlmICh0cmlnZ2VyT25jZSkgeyBleGNsdWRlW2luZGV4XSA9IHRydWU7IH1cbiAgICB9XG5cbiAgICBpZiAocHJvZ3Jlc3NNb2RlKSB7XG4gICAgICBpZiAoZGlyZWN0aW9uID09PSAnZG93bicpIHsgbm90aWZ5U3RlcFByb2dyZXNzKGVsZW1lbnQsIDApOyB9XG4gICAgICBlbHNlIHsgbm90aWZ5U3RlcFByb2dyZXNzKGVsZW1lbnQsIDEpOyB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbm90aWZ5U3RlcEV4aXQoZWxlbWVudCwgZGlyZWN0aW9uKSB7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXgoZWxlbWVudCk7XG4gICAgdmFyIHJlc3AgPSB7IGVsZW1lbnQ6IGVsZW1lbnQsIGluZGV4OiBpbmRleCwgZGlyZWN0aW9uOiBkaXJlY3Rpb24gfTtcblxuICAgIC8vIHN0b3JlIG1vc3QgcmVjZW50IHRyaWdnZXJcbiAgICBzdGVwU3RhdGVzW2luZGV4XS5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XG4gICAgc3RlcFN0YXRlc1tpbmRleF0uc3RhdGUgPSAnZXhpdCc7XG5cbiAgICBpZiAocHJvZ3Jlc3NNb2RlKSB7XG4gICAgICBpZiAoZGlyZWN0aW9uID09PSAnZG93bicpIHsgbm90aWZ5U3RlcFByb2dyZXNzKGVsZW1lbnQsIDEpOyB9XG4gICAgICBlbHNlIHsgbm90aWZ5U3RlcFByb2dyZXNzKGVsZW1lbnQsIDApOyB9XG4gICAgfVxuXG4gICAgaWYgKGNhbGxiYWNrLnN0ZXBFeGl0ICYmIHR5cGVvZiBjYWxsYmFjay5zdGVwRXhpdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2FsbGJhY2suc3RlcEV4aXQocmVzcCwgc3RlcFN0YXRlcyk7XG4gICAgICBpZiAoZGVidWdNb2RlKSB7IG5vdGlmeVN0ZXAoeyBpZDogaWQsIGluZGV4OiBpbmRleCwgc3RhdGU6ICdleGl0JyB9KTsgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG5vdGlmeVN0ZXBQcm9ncmVzcyhlbGVtZW50LCBwcm9ncmVzcykge1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4KGVsZW1lbnQpO1xuICAgIHZhciByZXNwID0geyBlbGVtZW50OiBlbGVtZW50LCBpbmRleDogaW5kZXgsIHByb2dyZXNzOiBwcm9ncmVzcyB9O1xuICAgIGlmIChjYWxsYmFjay5zdGVwUHJvZ3Jlc3MgJiYgdHlwZW9mIGNhbGxiYWNrLnN0ZXBQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJylcbiAgICAgIHsgY2FsbGJhY2suc3RlcFByb2dyZXNzKHJlc3ApOyB9XG4gIH1cblxuICBmdW5jdGlvbiBub3RpZnlDb250YWluZXJFbnRlcigpIHtcbiAgICB2YXIgcmVzcCA9IHsgZGlyZWN0aW9uOiBkaXJlY3Rpb24gfTtcbiAgICBjb250YWluZXJTdGF0ZS5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XG4gICAgY29udGFpbmVyU3RhdGUuc3RhdGUgPSAnZW50ZXInO1xuICAgIGlmIChcbiAgICAgIGNhbGxiYWNrLmNvbnRhaW5lckVudGVyICYmXG4gICAgICB0eXBlb2YgY2FsbGJhY2suY29udGFpbmVyRW50ZXIgPT09ICdmdW5jdGlvbidcbiAgICApXG4gICAgICB7IGNhbGxiYWNrLmNvbnRhaW5lckVudGVyKHJlc3ApOyB9XG4gIH1cblxuICBmdW5jdGlvbiBub3RpZnlDb250YWluZXJFeGl0KCkge1xuICAgIHZhciByZXNwID0geyBkaXJlY3Rpb246IGRpcmVjdGlvbiB9O1xuICAgIGNvbnRhaW5lclN0YXRlLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbiAgICBjb250YWluZXJTdGF0ZS5zdGF0ZSA9ICdleGl0JztcbiAgICBpZiAoY2FsbGJhY2suY29udGFpbmVyRXhpdCAmJiB0eXBlb2YgY2FsbGJhY2suY29udGFpbmVyRXhpdCA9PT0gJ2Z1bmN0aW9uJylcbiAgICAgIHsgY2FsbGJhY2suY29udGFpbmVyRXhpdChyZXNwKTsgfVxuICB9XG5cbiAgLy8gT0JTRVJWRVIgLSBJTlRFUlNFQ1QgSEFORExJTkdcblxuICAvLyBpZiBUT1AgZWRnZSBvZiBzdGVwIGNyb3NzZXMgdGhyZXNob2xkLFxuICAvLyBib3R0b20gbXVzdCBiZSA+IDAgd2hpY2ggbWVhbnMgaXQgaXMgb24gXCJzY3JlZW5cIiAoc2hpZnRlZCBieSBvZmZzZXQpXG4gIGZ1bmN0aW9uIGludGVyc2VjdFN0ZXBBYm92ZShlbnRyaWVzKSB7XG4gICAgdXBkYXRlRGlyZWN0aW9uKCk7XG4gICAgZW50cmllcy5mb3JFYWNoKGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgdmFyIGlzSW50ZXJzZWN0aW5nID0gZW50cnkuaXNJbnRlcnNlY3Rpbmc7XG4gICAgICB2YXIgYm91bmRpbmdDbGllbnRSZWN0ID0gZW50cnkuYm91bmRpbmdDbGllbnRSZWN0O1xuICAgICAgdmFyIHRhcmdldCA9IGVudHJ5LnRhcmdldDtcblxuICAgICAgLy8gYm90dG9tIGlzIGhvdyBmYXIgYm90dG9tIGVkZ2Ugb2YgZWwgaXMgZnJvbSB0b3Agb2Ygdmlld3BvcnRcbiAgICAgIHZhciBib3R0b20gPSBib3VuZGluZ0NsaWVudFJlY3QuYm90dG9tO1xuICAgICAgdmFyIGhlaWdodCA9IGJvdW5kaW5nQ2xpZW50UmVjdC5oZWlnaHQ7XG4gICAgICB2YXIgYm90dG9tQWRqdXN0ZWQgPSBib3R0b20gLSBvZmZzZXRNYXJnaW47XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleCh0YXJnZXQpO1xuICAgICAgdmFyIHNzID0gc3RlcFN0YXRlc1tpbmRleF07XG5cbiAgICAgIGlmIChib3R0b21BZGp1c3RlZCA+PSAtWkVST19NT0UpIHtcbiAgICAgICAgaWYgKGlzSW50ZXJzZWN0aW5nICYmIGRpcmVjdGlvbiA9PT0gJ2Rvd24nICYmIHNzLnN0YXRlICE9PSAnZW50ZXInKVxuICAgICAgICAgIHsgbm90aWZ5U3RlcEVudGVyKHRhcmdldCwgZGlyZWN0aW9uKTsgfVxuICAgICAgICBlbHNlIGlmICghaXNJbnRlcnNlY3RpbmcgJiYgZGlyZWN0aW9uID09PSAndXAnICYmIHNzLnN0YXRlID09PSAnZW50ZXInKVxuICAgICAgICAgIHsgbm90aWZ5U3RlcEV4aXQodGFyZ2V0LCBkaXJlY3Rpb24pOyB9XG4gICAgICAgIGVsc2UgaWYgKFxuICAgICAgICAgICFpc0ludGVyc2VjdGluZyAmJlxuICAgICAgICAgIGJvdHRvbUFkanVzdGVkID49IGhlaWdodCAmJlxuICAgICAgICAgIGRpcmVjdGlvbiA9PT0gJ2Rvd24nICYmXG4gICAgICAgICAgc3Muc3RhdGUgPT09ICdlbnRlcidcbiAgICAgICAgKSB7XG4gICAgICAgICAgbm90aWZ5U3RlcEV4aXQodGFyZ2V0LCBkaXJlY3Rpb24pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBpbnRlcnNlY3RTdGVwQmVsb3coZW50cmllcykge1xuICAgIHVwZGF0ZURpcmVjdGlvbigpO1xuICAgIGVudHJpZXMuZm9yRWFjaChmdW5jdGlvbiAoZW50cnkpIHtcbiAgICAgIHZhciBpc0ludGVyc2VjdGluZyA9IGVudHJ5LmlzSW50ZXJzZWN0aW5nO1xuICAgICAgdmFyIGJvdW5kaW5nQ2xpZW50UmVjdCA9IGVudHJ5LmJvdW5kaW5nQ2xpZW50UmVjdDtcbiAgICAgIHZhciB0YXJnZXQgPSBlbnRyeS50YXJnZXQ7XG5cbiAgICAgIHZhciBib3R0b20gPSBib3VuZGluZ0NsaWVudFJlY3QuYm90dG9tO1xuICAgICAgdmFyIGhlaWdodCA9IGJvdW5kaW5nQ2xpZW50UmVjdC5oZWlnaHQ7XG4gICAgICB2YXIgYm90dG9tQWRqdXN0ZWQgPSBib3R0b20gLSBvZmZzZXRNYXJnaW47XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleCh0YXJnZXQpO1xuICAgICAgdmFyIHNzID0gc3RlcFN0YXRlc1tpbmRleF07XG5cbiAgICAgIGlmIChcbiAgICAgICAgYm90dG9tQWRqdXN0ZWQgPj0gLVpFUk9fTU9FICYmXG4gICAgICAgIGJvdHRvbUFkanVzdGVkIDwgaGVpZ2h0ICYmXG4gICAgICAgIGlzSW50ZXJzZWN0aW5nICYmXG4gICAgICAgIGRpcmVjdGlvbiA9PT0gJ3VwJyAmJlxuICAgICAgICBzcy5zdGF0ZSAhPT0gJ2VudGVyJ1xuICAgICAgKSB7XG4gICAgICAgIG5vdGlmeVN0ZXBFbnRlcih0YXJnZXQsIGRpcmVjdGlvbik7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBib3R0b21BZGp1c3RlZCA8PSBaRVJPX01PRSAmJlxuICAgICAgICAhaXNJbnRlcnNlY3RpbmcgJiZcbiAgICAgICAgZGlyZWN0aW9uID09PSAnZG93bicgJiZcbiAgICAgICAgc3Muc3RhdGUgPT09ICdlbnRlcidcbiAgICAgICkge1xuICAgICAgICBub3RpZnlTdGVwRXhpdCh0YXJnZXQsIGRpcmVjdGlvbik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKlxuXHRpZiB0aGVyZSBpcyBhIHNjcm9sbCBldmVudCB3aGVyZSBhIHN0ZXAgbmV2ZXIgaW50ZXJzZWN0cyAodGhlcmVmb3JlXG5cdHNraXBwaW5nIGFuIGVudGVyL2V4aXQgdHJpZ2dlciksIHVzZSB0aGlzIGZhbGxiYWNrIHRvIGRldGVjdCBpZiBpdCBpc1xuXHRpbiB2aWV3XG5cdCovXG4gIGZ1bmN0aW9uIGludGVyc2VjdFZpZXdwb3J0QWJvdmUoZW50cmllcykge1xuICAgIHVwZGF0ZURpcmVjdGlvbigpO1xuICAgIGVudHJpZXMuZm9yRWFjaChmdW5jdGlvbiAoZW50cnkpIHtcbiAgICAgIHZhciBpc0ludGVyc2VjdGluZyA9IGVudHJ5LmlzSW50ZXJzZWN0aW5nO1xuICAgICAgdmFyIHRhcmdldCA9IGVudHJ5LnRhcmdldDtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4KHRhcmdldCk7XG4gICAgICB2YXIgc3MgPSBzdGVwU3RhdGVzW2luZGV4XTtcbiAgICAgIGlmIChcbiAgICAgICAgaXNJbnRlcnNlY3RpbmcgJiZcbiAgICAgICAgZGlyZWN0aW9uID09PSAnZG93bicgJiZcbiAgICAgICAgc3Muc3RhdGUgIT09ICdlbnRlcicgJiZcbiAgICAgICAgc3MuZGlyZWN0aW9uICE9PSAnZG93bidcbiAgICAgICkge1xuICAgICAgICBub3RpZnlTdGVwRW50ZXIodGFyZ2V0LCAnZG93bicpO1xuICAgICAgICBub3RpZnlTdGVwRXhpdCh0YXJnZXQsICdkb3duJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBpbnRlcnNlY3RWaWV3cG9ydEJlbG93KGVudHJpZXMpIHtcbiAgICB1cGRhdGVEaXJlY3Rpb24oKTtcbiAgICBlbnRyaWVzLmZvckVhY2goZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgICB2YXIgaXNJbnRlcnNlY3RpbmcgPSBlbnRyeS5pc0ludGVyc2VjdGluZztcbiAgICAgIHZhciB0YXJnZXQgPSBlbnRyeS50YXJnZXQ7XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleCh0YXJnZXQpO1xuICAgICAgdmFyIHNzID0gc3RlcFN0YXRlc1tpbmRleF07XG4gICAgICBpZiAoXG4gICAgICAgIGlzSW50ZXJzZWN0aW5nICYmXG4gICAgICAgIGRpcmVjdGlvbiA9PT0gJ3VwJyAmJlxuICAgICAgICBzcy5zdGF0ZSAhPT0gJ2VudGVyJyAmJlxuICAgICAgICBzcy5kaXJlY3Rpb24gIT09ICd1cCdcbiAgICAgICkge1xuICAgICAgICBub3RpZnlTdGVwRW50ZXIodGFyZ2V0LCAndXAnKTtcbiAgICAgICAgbm90aWZ5U3RlcEV4aXQodGFyZ2V0LCAndXAnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGludGVyc2VjdFN0ZXBQcm9ncmVzcyhlbnRyaWVzKSB7XG4gICAgdXBkYXRlRGlyZWN0aW9uKCk7XG4gICAgZW50cmllcy5mb3JFYWNoKFxuICAgICAgZnVuY3Rpb24gKHJlZikge1xuICAgICAgICB2YXIgaXNJbnRlcnNlY3RpbmcgPSByZWYuaXNJbnRlcnNlY3Rpbmc7XG4gICAgICAgIHZhciBpbnRlcnNlY3Rpb25SYXRpbyA9IHJlZi5pbnRlcnNlY3Rpb25SYXRpbztcbiAgICAgICAgdmFyIGJvdW5kaW5nQ2xpZW50UmVjdCA9IHJlZi5ib3VuZGluZ0NsaWVudFJlY3Q7XG4gICAgICAgIHZhciB0YXJnZXQgPSByZWYudGFyZ2V0O1xuXG4gICAgICAgIHZhciBib3R0b20gPSBib3VuZGluZ0NsaWVudFJlY3QuYm90dG9tO1xuICAgICAgICB2YXIgYm90dG9tQWRqdXN0ZWQgPSBib3R0b20gLSBvZmZzZXRNYXJnaW47XG5cbiAgICAgICAgaWYgKGlzSW50ZXJzZWN0aW5nICYmIGJvdHRvbUFkanVzdGVkID49IC1aRVJPX01PRSkge1xuICAgICAgICAgIG5vdGlmeVN0ZXBQcm9ncmVzcyh0YXJnZXQsICtpbnRlcnNlY3Rpb25SYXRpby50b0ZpeGVkKDMpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiBpbnRlcnNlY3RUb3AoZW50cmllcykge1xuICAgIHVwZGF0ZURpcmVjdGlvbigpO1xuICAgIHZhciByZWYgPSBlbnRyaWVzWzBdO1xuICAgIHZhciBpc0ludGVyc2VjdGluZyA9IHJlZi5pc0ludGVyc2VjdGluZztcbiAgICB2YXIgYm91bmRpbmdDbGllbnRSZWN0ID0gcmVmLmJvdW5kaW5nQ2xpZW50UmVjdDtcbiAgICB2YXIgdG9wID0gYm91bmRpbmdDbGllbnRSZWN0LnRvcDtcbiAgICB2YXIgYm90dG9tID0gYm91bmRpbmdDbGllbnRSZWN0LmJvdHRvbTtcblxuICAgIGlmIChib3R0b20gPiAtWkVST19NT0UpIHtcbiAgICAgIGlmIChpc0ludGVyc2VjdGluZykgeyBub3RpZnlDb250YWluZXJFbnRlcihkaXJlY3Rpb24pOyB9XG4gICAgICBlbHNlIGlmIChjb250YWluZXJTdGF0ZS5zdGF0ZSA9PT0gJ2VudGVyJykgeyBub3RpZnlDb250YWluZXJFeGl0KGRpcmVjdGlvbik7IH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpbnRlcnNlY3RCb3R0b20oZW50cmllcykge1xuICAgIHVwZGF0ZURpcmVjdGlvbigpO1xuICAgIHZhciByZWYgPSBlbnRyaWVzWzBdO1xuICAgIHZhciBpc0ludGVyc2VjdGluZyA9IHJlZi5pc0ludGVyc2VjdGluZztcbiAgICB2YXIgYm91bmRpbmdDbGllbnRSZWN0ID0gcmVmLmJvdW5kaW5nQ2xpZW50UmVjdDtcbiAgICB2YXIgdG9wID0gYm91bmRpbmdDbGllbnRSZWN0LnRvcDtcblxuICAgIGlmICh0b3AgPCBaRVJPX01PRSkge1xuICAgICAgaWYgKGlzSW50ZXJzZWN0aW5nKSB7IG5vdGlmeUNvbnRhaW5lckVudGVyKGRpcmVjdGlvbik7IH1cbiAgICAgIGVsc2UgaWYgKGNvbnRhaW5lclN0YXRlLnN0YXRlID09PSAnZW50ZXInKSB7IG5vdGlmeUNvbnRhaW5lckV4aXQoZGlyZWN0aW9uKTsgfVxuICAgIH1cbiAgfVxuXG4gIC8vIE9CU0VSVkVSIC0gQ1JFQVRJT05cblxuICBmdW5jdGlvbiB1cGRhdGVUb3BJTygpIHtcbiAgICBpZiAoaW8udG9wKSB7IGlvLnRvcC51bm9ic2VydmUoY29udGFpbmVyRWwpOyB9XG5cbiAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgIHJvb3Q6IG51bGwsXG4gICAgICByb290TWFyZ2luOiAodmggKyBcInB4IDBweCAtXCIgKyB2aCArIFwicHggMHB4XCIpLFxuICAgICAgdGhyZXNob2xkOiAwXG4gICAgfTtcblxuICAgIGlvLnRvcCA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihpbnRlcnNlY3RUb3AsIG9wdGlvbnMpO1xuICAgIGlvLnRvcC5vYnNlcnZlKGNvbnRhaW5lckVsKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZUJvdHRvbUlPKCkge1xuICAgIGlmIChpby5ib3R0b20pIHsgaW8uYm90dG9tLnVub2JzZXJ2ZShjb250YWluZXJFbCk7IH1cbiAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgIHJvb3Q6IG51bGwsXG4gICAgICByb290TWFyZ2luOiAoXCItXCIgKyAoYmJveEdyYXBoaWMuaGVpZ2h0KSArIFwicHggMHB4IFwiICsgKGJib3hHcmFwaGljLmhlaWdodCkgKyBcInB4IDBweFwiKSxcbiAgICAgIHRocmVzaG9sZDogMFxuICAgIH07XG5cbiAgICBpby5ib3R0b20gPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoaW50ZXJzZWN0Qm90dG9tLCBvcHRpb25zKTtcbiAgICBpby5ib3R0b20ub2JzZXJ2ZShjb250YWluZXJFbCk7XG4gIH1cblxuICAvLyB0b3AgZWRnZVxuICBmdW5jdGlvbiB1cGRhdGVTdGVwQWJvdmVJTygpIHtcbiAgICBpZiAoaW8uc3RlcEFib3ZlKSB7IGlvLnN0ZXBBYm92ZS5mb3JFYWNoKGZ1bmN0aW9uIChkKSB7IHJldHVybiBkLmRpc2Nvbm5lY3QoKTsgfSk7IH1cblxuICAgIGlvLnN0ZXBBYm92ZSA9IHN0ZXBFbC5tYXAoZnVuY3Rpb24gKGVsLCBpKSB7XG4gICAgICB2YXIgbWFyZ2luVG9wID0gc3RlcE9mZnNldEhlaWdodFtpXTtcbiAgICAgIHZhciBtYXJnaW5Cb3R0b20gPSAtdmggKyBvZmZzZXRNYXJnaW47XG4gICAgICB2YXIgcm9vdE1hcmdpbiA9IG1hcmdpblRvcCArIFwicHggMHB4IFwiICsgbWFyZ2luQm90dG9tICsgXCJweCAwcHhcIjtcblxuICAgICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgIHJvb3Q6IG51bGwsXG4gICAgICAgIHJvb3RNYXJnaW46IHJvb3RNYXJnaW4sXG4gICAgICAgIHRocmVzaG9sZDogMFxuICAgICAgfTtcblxuICAgICAgdmFyIG9icyA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihpbnRlcnNlY3RTdGVwQWJvdmUsIG9wdGlvbnMpO1xuICAgICAgb2JzLm9ic2VydmUoZWwpO1xuICAgICAgcmV0dXJuIG9icztcbiAgICB9KTtcbiAgfVxuXG4gIC8vIGJvdHRvbSBlZGdlXG4gIGZ1bmN0aW9uIHVwZGF0ZVN0ZXBCZWxvd0lPKCkge1xuICAgIGlmIChpby5zdGVwQmVsb3cpIHsgaW8uc3RlcEJlbG93LmZvckVhY2goZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQuZGlzY29ubmVjdCgpOyB9KTsgfVxuXG4gICAgaW8uc3RlcEJlbG93ID0gc3RlcEVsLm1hcChmdW5jdGlvbiAoZWwsIGkpIHtcbiAgICAgIHZhciBtYXJnaW5Ub3AgPSAtb2Zmc2V0TWFyZ2luO1xuICAgICAgdmFyIG1hcmdpbkJvdHRvbSA9IHBoIC0gdmggKyBzdGVwT2Zmc2V0SGVpZ2h0W2ldICsgb2Zmc2V0TWFyZ2luO1xuICAgICAgdmFyIHJvb3RNYXJnaW4gPSBtYXJnaW5Ub3AgKyBcInB4IDBweCBcIiArIG1hcmdpbkJvdHRvbSArIFwicHggMHB4XCI7XG5cbiAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICByb290OiBudWxsLFxuICAgICAgICByb290TWFyZ2luOiByb290TWFyZ2luLFxuICAgICAgICB0aHJlc2hvbGQ6IDBcbiAgICAgIH07XG5cbiAgICAgIHZhciBvYnMgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoaW50ZXJzZWN0U3RlcEJlbG93LCBvcHRpb25zKTtcbiAgICAgIG9icy5vYnNlcnZlKGVsKTtcbiAgICAgIHJldHVybiBvYnM7XG4gICAgfSk7XG4gIH1cblxuICAvLyBqdW1wIGludG8gdmlld3BvcnRcbiAgZnVuY3Rpb24gdXBkYXRlVmlld3BvcnRBYm92ZUlPKCkge1xuICAgIGlmIChpby52aWV3cG9ydEFib3ZlKSB7IGlvLnZpZXdwb3J0QWJvdmUuZm9yRWFjaChmdW5jdGlvbiAoZCkgeyByZXR1cm4gZC5kaXNjb25uZWN0KCk7IH0pOyB9XG4gICAgaW8udmlld3BvcnRBYm92ZSA9IHN0ZXBFbC5tYXAoZnVuY3Rpb24gKGVsLCBpKSB7XG4gICAgICB2YXIgbWFyZ2luVG9wID0gc3RlcE9mZnNldFRvcFtpXTtcbiAgICAgIHZhciBtYXJnaW5Cb3R0b20gPSAtKHZoIC0gb2Zmc2V0TWFyZ2luICsgc3RlcE9mZnNldEhlaWdodFtpXSk7XG4gICAgICB2YXIgcm9vdE1hcmdpbiA9IG1hcmdpblRvcCArIFwicHggMHB4IFwiICsgbWFyZ2luQm90dG9tICsgXCJweCAwcHhcIjtcbiAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICByb290OiBudWxsLFxuICAgICAgICByb290TWFyZ2luOiByb290TWFyZ2luLFxuICAgICAgICB0aHJlc2hvbGQ6IDBcbiAgICAgIH07XG5cbiAgICAgIHZhciBvYnMgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoaW50ZXJzZWN0Vmlld3BvcnRBYm92ZSwgb3B0aW9ucyk7XG4gICAgICBvYnMub2JzZXJ2ZShlbCk7XG4gICAgICByZXR1cm4gb2JzO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlVmlld3BvcnRCZWxvd0lPKCkge1xuICAgIGlmIChpby52aWV3cG9ydEJlbG93KSB7IGlvLnZpZXdwb3J0QmVsb3cuZm9yRWFjaChmdW5jdGlvbiAoZCkgeyByZXR1cm4gZC5kaXNjb25uZWN0KCk7IH0pOyB9XG4gICAgaW8udmlld3BvcnRCZWxvdyA9IHN0ZXBFbC5tYXAoZnVuY3Rpb24gKGVsLCBpKSB7XG4gICAgICB2YXIgbWFyZ2luVG9wID0gLShvZmZzZXRNYXJnaW4gKyBzdGVwT2Zmc2V0SGVpZ2h0W2ldKTtcbiAgICAgIHZhciBtYXJnaW5Cb3R0b20gPVxuICAgICAgICBwaCAtIHN0ZXBPZmZzZXRUb3BbaV0gLSBzdGVwT2Zmc2V0SGVpZ2h0W2ldIC0gb2Zmc2V0TWFyZ2luO1xuICAgICAgdmFyIHJvb3RNYXJnaW4gPSBtYXJnaW5Ub3AgKyBcInB4IDBweCBcIiArIG1hcmdpbkJvdHRvbSArIFwicHggMHB4XCI7XG4gICAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgcm9vdDogbnVsbCxcbiAgICAgICAgcm9vdE1hcmdpbjogcm9vdE1hcmdpbixcbiAgICAgICAgdGhyZXNob2xkOiAwXG4gICAgICB9O1xuXG4gICAgICB2YXIgb2JzID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGludGVyc2VjdFZpZXdwb3J0QmVsb3csIG9wdGlvbnMpO1xuICAgICAgb2JzLm9ic2VydmUoZWwpO1xuICAgICAgcmV0dXJuIG9icztcbiAgICB9KTtcbiAgfVxuXG4gIC8vIHByb2dyZXNzIHByb2dyZXNzIHRyYWNrZXJcbiAgZnVuY3Rpb24gdXBkYXRlU3RlcFByb2dyZXNzSU8oKSB7XG4gICAgaWYgKGlvLnN0ZXBQcm9ncmVzcykgeyBpby5zdGVwUHJvZ3Jlc3MuZm9yRWFjaChmdW5jdGlvbiAoZCkgeyByZXR1cm4gZC5kaXNjb25uZWN0KCk7IH0pOyB9XG5cbiAgICBpby5zdGVwUHJvZ3Jlc3MgPSBzdGVwRWwubWFwKGZ1bmN0aW9uIChlbCwgaSkge1xuICAgICAgdmFyIG1hcmdpblRvcCA9IHN0ZXBPZmZzZXRIZWlnaHRbaV0gLSBvZmZzZXRNYXJnaW47XG4gICAgICB2YXIgbWFyZ2luQm90dG9tID0gLXZoICsgb2Zmc2V0TWFyZ2luO1xuICAgICAgdmFyIHJvb3RNYXJnaW4gPSBtYXJnaW5Ub3AgKyBcInB4IDBweCBcIiArIG1hcmdpbkJvdHRvbSArIFwicHggMHB4XCI7XG5cbiAgICAgIHZhciB0aHJlc2hvbGQgPSBjcmVhdGVUaHJlc2hvbGQoc3RlcE9mZnNldEhlaWdodFtpXSk7XG4gICAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgcm9vdDogbnVsbCxcbiAgICAgICAgcm9vdE1hcmdpbjogcm9vdE1hcmdpbixcbiAgICAgICAgdGhyZXNob2xkOiB0aHJlc2hvbGRcbiAgICAgIH07XG5cbiAgICAgIHZhciBvYnMgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoaW50ZXJzZWN0U3RlcFByb2dyZXNzLCBvcHRpb25zKTtcbiAgICAgIG9icy5vYnNlcnZlKGVsKTtcbiAgICAgIHJldHVybiBvYnM7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVJTygpIHtcbiAgICB1cGRhdGVWaWV3cG9ydEFib3ZlSU8oKTtcbiAgICB1cGRhdGVWaWV3cG9ydEJlbG93SU8oKTtcbiAgICB1cGRhdGVTdGVwQWJvdmVJTygpO1xuICAgIHVwZGF0ZVN0ZXBCZWxvd0lPKCk7XG5cbiAgICBpZiAocHJvZ3Jlc3NNb2RlKSB7IHVwZGF0ZVN0ZXBQcm9ncmVzc0lPKCk7IH1cblxuICAgIGlmIChjb250YWluZXJFbCAmJiBncmFwaGljRWwpIHtcbiAgICAgIHVwZGF0ZVRvcElPKCk7XG4gICAgICB1cGRhdGVCb3R0b21JTygpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFNFVFVQIEZVTkNUSU9OU1xuXG4gIGZ1bmN0aW9uIGluZGV4U3RlcHMoKSB7XG4gICAgc3RlcEVsLmZvckVhY2goZnVuY3Rpb24gKGVsLCBpKSB7IHJldHVybiBlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtc2Nyb2xsYW1hLWluZGV4JywgaSk7IH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0dXBTdGF0ZXMoKSB7XG4gICAgc3RlcFN0YXRlcyA9IHN0ZXBFbC5tYXAoZnVuY3Rpb24gKCkgeyByZXR1cm4gKHtcbiAgICAgIGRpcmVjdGlvbjogbnVsbCxcbiAgICAgIHN0YXRlOiBudWxsXG4gICAgfSk7IH0pO1xuXG4gICAgY29udGFpbmVyU3RhdGUgPSB7IGRpcmVjdGlvbjogbnVsbCwgc3RhdGU6IG51bGwgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZERlYnVnKCkge1xuICAgIGlmIChkZWJ1Z01vZGUpIHsgc2V0dXAoeyBpZDogaWQsIHN0ZXBFbDogc3RlcEVsLCBvZmZzZXRWYWw6IG9mZnNldFZhbCB9KTsgfVxuICB9XG5cbiAgdmFyIFMgPSB7fTtcblxuICBTLnNldHVwID0gZnVuY3Rpb24gKHJlZikge1xuICAgIHZhciBjb250YWluZXIgPSByZWYuY29udGFpbmVyO1xuICAgIHZhciBncmFwaGljID0gcmVmLmdyYXBoaWM7XG4gICAgdmFyIHN0ZXAgPSByZWYuc3RlcDtcbiAgICB2YXIgb2Zmc2V0ID0gcmVmLm9mZnNldDsgaWYgKCBvZmZzZXQgPT09IHZvaWQgMCApIG9mZnNldCA9IDAuNTtcbiAgICB2YXIgcHJvZ3Jlc3MgPSByZWYucHJvZ3Jlc3M7IGlmICggcHJvZ3Jlc3MgPT09IHZvaWQgMCApIHByb2dyZXNzID0gZmFsc2U7XG4gICAgdmFyIHRocmVzaG9sZCA9IHJlZi50aHJlc2hvbGQ7IGlmICggdGhyZXNob2xkID09PSB2b2lkIDAgKSB0aHJlc2hvbGQgPSA0O1xuICAgIHZhciBkZWJ1ZyA9IHJlZi5kZWJ1ZzsgaWYgKCBkZWJ1ZyA9PT0gdm9pZCAwICkgZGVidWcgPSBmYWxzZTtcbiAgICB2YXIgb3JkZXIgPSByZWYub3JkZXI7IGlmICggb3JkZXIgPT09IHZvaWQgMCApIG9yZGVyID0gdHJ1ZTtcbiAgICB2YXIgb25jZSA9IHJlZi5vbmNlOyBpZiAoIG9uY2UgPT09IHZvaWQgMCApIG9uY2UgPSBmYWxzZTtcblxuICAgIGlkID0gZ2VuZXJhdGVJZCgpO1xuICAgIC8vIGVsZW1lbnRzXG4gICAgc3RlcEVsID0gc2VsZWN0QWxsKHN0ZXApO1xuICAgIGNvbnRhaW5lckVsID0gY29udGFpbmVyID8gc2VsZWN0KGNvbnRhaW5lcikgOiBudWxsO1xuICAgIGdyYXBoaWNFbCA9IGdyYXBoaWMgPyBzZWxlY3QoZ3JhcGhpYykgOiBudWxsO1xuXG4gICAgLy8gZXJyb3IgaWYgbm8gc3RlcCBzZWxlY3RlZFxuICAgIGlmICghc3RlcEVsLmxlbmd0aCkge1xuICAgICAgY29uc29sZS5lcnJvcignc2Nyb2xsYW1hIGVycm9yOiBubyBzdGVwIGVsZW1lbnRzJyk7XG4gICAgICByZXR1cm4gUztcbiAgICB9XG5cbiAgICAvLyBvcHRpb25zXG4gICAgZGVidWdNb2RlID0gZGVidWc7XG4gICAgcHJvZ3Jlc3NNb2RlID0gcHJvZ3Jlc3M7XG4gICAgcHJlc2VydmVPcmRlciA9IG9yZGVyO1xuICAgIHRyaWdnZXJPbmNlID0gb25jZTtcblxuICAgIFMub2Zmc2V0VHJpZ2dlcihvZmZzZXQpO1xuICAgIHByb2dyZXNzVGhyZXNob2xkID0gTWF0aC5tYXgoMSwgK3RocmVzaG9sZCk7XG5cbiAgICBpc1JlYWR5ID0gdHJ1ZTtcblxuICAgIC8vIGN1c3RvbWl6ZVxuICAgIGFkZERlYnVnKCk7XG4gICAgaW5kZXhTdGVwcygpO1xuICAgIHNldHVwU3RhdGVzKCk7XG4gICAgaGFuZGxlUmVzaXplKCk7XG4gICAgaGFuZGxlRW5hYmxlKHRydWUpO1xuICAgIHJldHVybiBTO1xuICB9O1xuXG4gIFMucmVzaXplID0gZnVuY3Rpb24gKCkge1xuICAgIGhhbmRsZVJlc2l6ZSgpO1xuICAgIHJldHVybiBTO1xuICB9O1xuXG4gIFMuZW5hYmxlID0gZnVuY3Rpb24gKCkge1xuICAgIGhhbmRsZUVuYWJsZSh0cnVlKTtcbiAgICByZXR1cm4gUztcbiAgfTtcblxuICBTLmRpc2FibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgaGFuZGxlRW5hYmxlKGZhbHNlKTtcbiAgICByZXR1cm4gUztcbiAgfTtcblxuICBTLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgaGFuZGxlRW5hYmxlKGZhbHNlKTtcbiAgICBPYmplY3Qua2V5cyhjYWxsYmFjaykuZm9yRWFjaChmdW5jdGlvbiAoYykgeyByZXR1cm4gKGNhbGxiYWNrW2NdID0gbnVsbCk7IH0pO1xuICAgIE9iamVjdC5rZXlzKGlvKS5mb3JFYWNoKGZ1bmN0aW9uIChpKSB7IHJldHVybiAoaW9baV0gPSBudWxsKTsgfSk7XG4gIH07XG5cbiAgUy5vZmZzZXRUcmlnZ2VyID0gZnVuY3Rpb24oeCkge1xuICAgIGlmICh4ICYmICFpc05hTih4KSkge1xuICAgICAgb2Zmc2V0VmFsID0gTWF0aC5taW4oTWF0aC5tYXgoMCwgeCksIDEpO1xuICAgICAgcmV0dXJuIFM7XG4gICAgfVxuICAgIHJldHVybiBvZmZzZXRWYWw7XG4gIH07XG5cbiAgUy5vblN0ZXBFbnRlciA9IGZ1bmN0aW9uIChjYikge1xuICAgIGNhbGxiYWNrLnN0ZXBFbnRlciA9IGNiO1xuICAgIHJldHVybiBTO1xuICB9O1xuXG4gIFMub25TdGVwRXhpdCA9IGZ1bmN0aW9uIChjYikge1xuICAgIGNhbGxiYWNrLnN0ZXBFeGl0ID0gY2I7XG4gICAgcmV0dXJuIFM7XG4gIH07XG5cbiAgUy5vblN0ZXBQcm9ncmVzcyA9IGZ1bmN0aW9uIChjYikge1xuICAgIGNhbGxiYWNrLnN0ZXBQcm9ncmVzcyA9IGNiO1xuICAgIHJldHVybiBTO1xuICB9O1xuXG4gIFMub25Db250YWluZXJFbnRlciA9IGZ1bmN0aW9uIChjYikge1xuICAgIGNhbGxiYWNrLmNvbnRhaW5lckVudGVyID0gY2I7XG4gICAgcmV0dXJuIFM7XG4gIH07XG5cbiAgUy5vbkNvbnRhaW5lckV4aXQgPSBmdW5jdGlvbiAoY2IpIHtcbiAgICBjYWxsYmFjay5jb250YWluZXJFeGl0ID0gY2I7XG4gICAgcmV0dXJuIFM7XG4gIH07XG5cbiAgcmV0dXJuIFM7XG59XG5cbnJldHVybiBzY3JvbGxhbWE7XG5cbn0pKSk7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZmluZWQsbm8tcGFyYW0tcmVhc3NpZ24sbm8tc2hhZG93ICovXG5cbi8qKlxuICogVGhyb3R0bGUgZXhlY3V0aW9uIG9mIGEgZnVuY3Rpb24uIEVzcGVjaWFsbHkgdXNlZnVsIGZvciByYXRlIGxpbWl0aW5nXG4gKiBleGVjdXRpb24gb2YgaGFuZGxlcnMgb24gZXZlbnRzIGxpa2UgcmVzaXplIGFuZCBzY3JvbGwuXG4gKlxuICogQHBhcmFtICB7TnVtYmVyfSAgICBkZWxheSAgICAgICAgICBBIHplcm8tb3ItZ3JlYXRlciBkZWxheSBpbiBtaWxsaXNlY29uZHMuIEZvciBldmVudCBjYWxsYmFja3MsIHZhbHVlcyBhcm91bmQgMTAwIG9yIDI1MCAob3IgZXZlbiBoaWdoZXIpIGFyZSBtb3N0IHVzZWZ1bC5cbiAqIEBwYXJhbSAge0Jvb2xlYW59ICAgW25vVHJhaWxpbmddICAgT3B0aW9uYWwsIGRlZmF1bHRzIHRvIGZhbHNlLiBJZiBub1RyYWlsaW5nIGlzIHRydWUsIGNhbGxiYWNrIHdpbGwgb25seSBleGVjdXRlIGV2ZXJ5IGBkZWxheWAgbWlsbGlzZWNvbmRzIHdoaWxlIHRoZVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdHRsZWQtZnVuY3Rpb24gaXMgYmVpbmcgY2FsbGVkLiBJZiBub1RyYWlsaW5nIGlzIGZhbHNlIG9yIHVuc3BlY2lmaWVkLCBjYWxsYmFjayB3aWxsIGJlIGV4ZWN1dGVkIG9uZSBmaW5hbCB0aW1lXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFmdGVyIHRoZSBsYXN0IHRocm90dGxlZC1mdW5jdGlvbiBjYWxsLiAoQWZ0ZXIgdGhlIHRocm90dGxlZC1mdW5jdGlvbiBoYXMgbm90IGJlZW4gY2FsbGVkIGZvciBgZGVsYXlgIG1pbGxpc2Vjb25kcyxcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIGludGVybmFsIGNvdW50ZXIgaXMgcmVzZXQpXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gIGNhbGxiYWNrICAgICAgIEEgZnVuY3Rpb24gdG8gYmUgZXhlY3V0ZWQgYWZ0ZXIgZGVsYXkgbWlsbGlzZWNvbmRzLiBUaGUgYHRoaXNgIGNvbnRleHQgYW5kIGFsbCBhcmd1bWVudHMgYXJlIHBhc3NlZCB0aHJvdWdoLCBhcy1pcyxcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gYGNhbGxiYWNrYCB3aGVuIHRoZSB0aHJvdHRsZWQtZnVuY3Rpb24gaXMgZXhlY3V0ZWQuXG4gKiBAcGFyYW0gIHtCb29sZWFufSAgIFtkZWJvdW5jZU1vZGVdIElmIGBkZWJvdW5jZU1vZGVgIGlzIHRydWUgKGF0IGJlZ2luKSwgc2NoZWR1bGUgYGNsZWFyYCB0byBleGVjdXRlIGFmdGVyIGBkZWxheWAgbXMuIElmIGBkZWJvdW5jZU1vZGVgIGlzIGZhbHNlIChhdCBlbmQpLFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2hlZHVsZSBgY2FsbGJhY2tgIHRvIGV4ZWN1dGUgYWZ0ZXIgYGRlbGF5YCBtcy5cbiAqXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gIEEgbmV3LCB0aHJvdHRsZWQsIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiB0aHJvdHRsZSAoIGRlbGF5LCBub1RyYWlsaW5nLCBjYWxsYmFjaywgZGVib3VuY2VNb2RlICkge1xuXG5cdC8qXG5cdCAqIEFmdGVyIHdyYXBwZXIgaGFzIHN0b3BwZWQgYmVpbmcgY2FsbGVkLCB0aGlzIHRpbWVvdXQgZW5zdXJlcyB0aGF0XG5cdCAqIGBjYWxsYmFja2AgaXMgZXhlY3V0ZWQgYXQgdGhlIHByb3BlciB0aW1lcyBpbiBgdGhyb3R0bGVgIGFuZCBgZW5kYFxuXHQgKiBkZWJvdW5jZSBtb2Rlcy5cblx0ICovXG5cdHZhciB0aW1lb3V0SUQ7XG5cblx0Ly8gS2VlcCB0cmFjayBvZiB0aGUgbGFzdCB0aW1lIGBjYWxsYmFja2Agd2FzIGV4ZWN1dGVkLlxuXHR2YXIgbGFzdEV4ZWMgPSAwO1xuXG5cdC8vIGBub1RyYWlsaW5nYCBkZWZhdWx0cyB0byBmYWxzeS5cblx0aWYgKCB0eXBlb2Ygbm9UcmFpbGluZyAhPT0gJ2Jvb2xlYW4nICkge1xuXHRcdGRlYm91bmNlTW9kZSA9IGNhbGxiYWNrO1xuXHRcdGNhbGxiYWNrID0gbm9UcmFpbGluZztcblx0XHRub1RyYWlsaW5nID0gdW5kZWZpbmVkO1xuXHR9XG5cblx0Lypcblx0ICogVGhlIGB3cmFwcGVyYCBmdW5jdGlvbiBlbmNhcHN1bGF0ZXMgYWxsIG9mIHRoZSB0aHJvdHRsaW5nIC8gZGVib3VuY2luZ1xuXHQgKiBmdW5jdGlvbmFsaXR5IGFuZCB3aGVuIGV4ZWN1dGVkIHdpbGwgbGltaXQgdGhlIHJhdGUgYXQgd2hpY2ggYGNhbGxiYWNrYFxuXHQgKiBpcyBleGVjdXRlZC5cblx0ICovXG5cdGZ1bmN0aW9uIHdyYXBwZXIgKCkge1xuXG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdHZhciBlbGFwc2VkID0gTnVtYmVyKG5ldyBEYXRlKCkpIC0gbGFzdEV4ZWM7XG5cdFx0dmFyIGFyZ3MgPSBhcmd1bWVudHM7XG5cblx0XHQvLyBFeGVjdXRlIGBjYWxsYmFja2AgYW5kIHVwZGF0ZSB0aGUgYGxhc3RFeGVjYCB0aW1lc3RhbXAuXG5cdFx0ZnVuY3Rpb24gZXhlYyAoKSB7XG5cdFx0XHRsYXN0RXhlYyA9IE51bWJlcihuZXcgRGF0ZSgpKTtcblx0XHRcdGNhbGxiYWNrLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXHRcdH1cblxuXHRcdC8qXG5cdFx0ICogSWYgYGRlYm91bmNlTW9kZWAgaXMgdHJ1ZSAoYXQgYmVnaW4pIHRoaXMgaXMgdXNlZCB0byBjbGVhciB0aGUgZmxhZ1xuXHRcdCAqIHRvIGFsbG93IGZ1dHVyZSBgY2FsbGJhY2tgIGV4ZWN1dGlvbnMuXG5cdFx0ICovXG5cdFx0ZnVuY3Rpb24gY2xlYXIgKCkge1xuXHRcdFx0dGltZW91dElEID0gdW5kZWZpbmVkO1xuXHRcdH1cblxuXHRcdGlmICggZGVib3VuY2VNb2RlICYmICF0aW1lb3V0SUQgKSB7XG5cdFx0XHQvKlxuXHRcdFx0ICogU2luY2UgYHdyYXBwZXJgIGlzIGJlaW5nIGNhbGxlZCBmb3IgdGhlIGZpcnN0IHRpbWUgYW5kXG5cdFx0XHQgKiBgZGVib3VuY2VNb2RlYCBpcyB0cnVlIChhdCBiZWdpbiksIGV4ZWN1dGUgYGNhbGxiYWNrYC5cblx0XHRcdCAqL1xuXHRcdFx0ZXhlYygpO1xuXHRcdH1cblxuXHRcdC8vIENsZWFyIGFueSBleGlzdGluZyB0aW1lb3V0LlxuXHRcdGlmICggdGltZW91dElEICkge1xuXHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXRJRCk7XG5cdFx0fVxuXG5cdFx0aWYgKCBkZWJvdW5jZU1vZGUgPT09IHVuZGVmaW5lZCAmJiBlbGFwc2VkID4gZGVsYXkgKSB7XG5cdFx0XHQvKlxuXHRcdFx0ICogSW4gdGhyb3R0bGUgbW9kZSwgaWYgYGRlbGF5YCB0aW1lIGhhcyBiZWVuIGV4Y2VlZGVkLCBleGVjdXRlXG5cdFx0XHQgKiBgY2FsbGJhY2tgLlxuXHRcdFx0ICovXG5cdFx0XHRleGVjKCk7XG5cblx0XHR9IGVsc2UgaWYgKCBub1RyYWlsaW5nICE9PSB0cnVlICkge1xuXHRcdFx0Lypcblx0XHRcdCAqIEluIHRyYWlsaW5nIHRocm90dGxlIG1vZGUsIHNpbmNlIGBkZWxheWAgdGltZSBoYXMgbm90IGJlZW5cblx0XHRcdCAqIGV4Y2VlZGVkLCBzY2hlZHVsZSBgY2FsbGJhY2tgIHRvIGV4ZWN1dGUgYGRlbGF5YCBtcyBhZnRlciBtb3N0XG5cdFx0XHQgKiByZWNlbnQgZXhlY3V0aW9uLlxuXHRcdFx0ICpcblx0XHRcdCAqIElmIGBkZWJvdW5jZU1vZGVgIGlzIHRydWUgKGF0IGJlZ2luKSwgc2NoZWR1bGUgYGNsZWFyYCB0byBleGVjdXRlXG5cdFx0XHQgKiBhZnRlciBgZGVsYXlgIG1zLlxuXHRcdFx0ICpcblx0XHRcdCAqIElmIGBkZWJvdW5jZU1vZGVgIGlzIGZhbHNlIChhdCBlbmQpLCBzY2hlZHVsZSBgY2FsbGJhY2tgIHRvXG5cdFx0XHQgKiBleGVjdXRlIGFmdGVyIGBkZWxheWAgbXMuXG5cdFx0XHQgKi9cblx0XHRcdHRpbWVvdXRJRCA9IHNldFRpbWVvdXQoZGVib3VuY2VNb2RlID8gY2xlYXIgOiBleGVjLCBkZWJvdW5jZU1vZGUgPT09IHVuZGVmaW5lZCA/IGRlbGF5IC0gZWxhcHNlZCA6IGRlbGF5KTtcblx0XHR9XG5cblx0fVxuXG5cdC8vIFJldHVybiB0aGUgd3JhcHBlciBmdW5jdGlvbi5cblx0cmV0dXJuIHdyYXBwZXI7XG5cbn1cblxuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWZpbmVkICovXG5cbi8qKlxuICogRGVib3VuY2UgZXhlY3V0aW9uIG9mIGEgZnVuY3Rpb24uIERlYm91bmNpbmcsIHVubGlrZSB0aHJvdHRsaW5nLFxuICogZ3VhcmFudGVlcyB0aGF0IGEgZnVuY3Rpb24gaXMgb25seSBleGVjdXRlZCBhIHNpbmdsZSB0aW1lLCBlaXRoZXIgYXQgdGhlXG4gKiB2ZXJ5IGJlZ2lubmluZyBvZiBhIHNlcmllcyBvZiBjYWxscywgb3IgYXQgdGhlIHZlcnkgZW5kLlxuICpcbiAqIEBwYXJhbSAge051bWJlcn0gICBkZWxheSAgICAgICAgIEEgemVyby1vci1ncmVhdGVyIGRlbGF5IGluIG1pbGxpc2Vjb25kcy4gRm9yIGV2ZW50IGNhbGxiYWNrcywgdmFsdWVzIGFyb3VuZCAxMDAgb3IgMjUwIChvciBldmVuIGhpZ2hlcikgYXJlIG1vc3QgdXNlZnVsLlxuICogQHBhcmFtICB7Qm9vbGVhbn0gIFthdEJlZ2luXSAgICAgT3B0aW9uYWwsIGRlZmF1bHRzIHRvIGZhbHNlLiBJZiBhdEJlZ2luIGlzIGZhbHNlIG9yIHVuc3BlY2lmaWVkLCBjYWxsYmFjayB3aWxsIG9ubHkgYmUgZXhlY3V0ZWQgYGRlbGF5YCBtaWxsaXNlY29uZHNcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFmdGVyIHRoZSBsYXN0IGRlYm91bmNlZC1mdW5jdGlvbiBjYWxsLiBJZiBhdEJlZ2luIGlzIHRydWUsIGNhbGxiYWNrIHdpbGwgYmUgZXhlY3V0ZWQgb25seSBhdCB0aGUgZmlyc3QgZGVib3VuY2VkLWZ1bmN0aW9uIGNhbGwuXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoQWZ0ZXIgdGhlIHRocm90dGxlZC1mdW5jdGlvbiBoYXMgbm90IGJlZW4gY2FsbGVkIGZvciBgZGVsYXlgIG1pbGxpc2Vjb25kcywgdGhlIGludGVybmFsIGNvdW50ZXIgaXMgcmVzZXQpLlxuICogQHBhcmFtICB7RnVuY3Rpb259IGNhbGxiYWNrICAgICAgQSBmdW5jdGlvbiB0byBiZSBleGVjdXRlZCBhZnRlciBkZWxheSBtaWxsaXNlY29uZHMuIFRoZSBgdGhpc2AgY29udGV4dCBhbmQgYWxsIGFyZ3VtZW50cyBhcmUgcGFzc2VkIHRocm91Z2gsIGFzLWlzLFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gYGNhbGxiYWNrYCB3aGVuIHRoZSBkZWJvdW5jZWQtZnVuY3Rpb24gaXMgZXhlY3V0ZWQuXG4gKlxuICogQHJldHVybiB7RnVuY3Rpb259IEEgbmV3LCBkZWJvdW5jZWQgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGRlYm91bmNlICggZGVsYXksIGF0QmVnaW4sIGNhbGxiYWNrICkge1xuXHRyZXR1cm4gY2FsbGJhY2sgPT09IHVuZGVmaW5lZCA/IHRocm90dGxlKGRlbGF5LCBhdEJlZ2luLCBmYWxzZSkgOiB0aHJvdHRsZShkZWxheSwgY2FsbGJhY2ssIGF0QmVnaW4gIT09IGZhbHNlKTtcbn1cblxuZXhwb3J0IHsgdGhyb3R0bGUsIGRlYm91bmNlIH07XG4iLCIvKiFcbiAqIFVBUGFyc2VyLmpzIHYwLjcuMThcbiAqIExpZ2h0d2VpZ2h0IEphdmFTY3JpcHQtYmFzZWQgVXNlci1BZ2VudCBzdHJpbmcgcGFyc2VyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vZmFpc2FsbWFuL3VhLXBhcnNlci1qc1xuICpcbiAqIENvcHlyaWdodCDCqSAyMDEyLTIwMTYgRmFpc2FsIFNhbG1hbiA8Znl6bG1hbkBnbWFpbC5jb20+XG4gKiBEdWFsIGxpY2Vuc2VkIHVuZGVyIEdQTHYyIG9yIE1JVFxuICovXG5cbihmdW5jdGlvbiAod2luZG93LCB1bmRlZmluZWQpIHtcblxuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIC8vLy8vLy8vLy8vLy8vXG4gICAgLy8gQ29uc3RhbnRzXG4gICAgLy8vLy8vLy8vLy8vL1xuXG5cbiAgICB2YXIgTElCVkVSU0lPTiAgPSAnMC43LjE4JyxcbiAgICAgICAgRU1QVFkgICAgICAgPSAnJyxcbiAgICAgICAgVU5LTk9XTiAgICAgPSAnPycsXG4gICAgICAgIEZVTkNfVFlQRSAgID0gJ2Z1bmN0aW9uJyxcbiAgICAgICAgVU5ERUZfVFlQRSAgPSAndW5kZWZpbmVkJyxcbiAgICAgICAgT0JKX1RZUEUgICAgPSAnb2JqZWN0JyxcbiAgICAgICAgU1RSX1RZUEUgICAgPSAnc3RyaW5nJyxcbiAgICAgICAgTUFKT1IgICAgICAgPSAnbWFqb3InLCAvLyBkZXByZWNhdGVkXG4gICAgICAgIE1PREVMICAgICAgID0gJ21vZGVsJyxcbiAgICAgICAgTkFNRSAgICAgICAgPSAnbmFtZScsXG4gICAgICAgIFRZUEUgICAgICAgID0gJ3R5cGUnLFxuICAgICAgICBWRU5ET1IgICAgICA9ICd2ZW5kb3InLFxuICAgICAgICBWRVJTSU9OICAgICA9ICd2ZXJzaW9uJyxcbiAgICAgICAgQVJDSElURUNUVVJFPSAnYXJjaGl0ZWN0dXJlJyxcbiAgICAgICAgQ09OU09MRSAgICAgPSAnY29uc29sZScsXG4gICAgICAgIE1PQklMRSAgICAgID0gJ21vYmlsZScsXG4gICAgICAgIFRBQkxFVCAgICAgID0gJ3RhYmxldCcsXG4gICAgICAgIFNNQVJUVFYgICAgID0gJ3NtYXJ0dHYnLFxuICAgICAgICBXRUFSQUJMRSAgICA9ICd3ZWFyYWJsZScsXG4gICAgICAgIEVNQkVEREVEICAgID0gJ2VtYmVkZGVkJztcblxuXG4gICAgLy8vLy8vLy8vLy9cbiAgICAvLyBIZWxwZXJcbiAgICAvLy8vLy8vLy8vXG5cblxuICAgIHZhciB1dGlsID0ge1xuICAgICAgICBleHRlbmQgOiBmdW5jdGlvbiAocmVnZXhlcywgZXh0ZW5zaW9ucykge1xuICAgICAgICAgICAgdmFyIG1hcmdlZFJlZ2V4ZXMgPSB7fTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgaW4gcmVnZXhlcykge1xuICAgICAgICAgICAgICAgIGlmIChleHRlbnNpb25zW2ldICYmIGV4dGVuc2lvbnNbaV0ubGVuZ3RoICUgMiA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBtYXJnZWRSZWdleGVzW2ldID0gZXh0ZW5zaW9uc1tpXS5jb25jYXQocmVnZXhlc1tpXSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2VkUmVnZXhlc1tpXSA9IHJlZ2V4ZXNbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG1hcmdlZFJlZ2V4ZXM7XG4gICAgICAgIH0sXG4gICAgICAgIGhhcyA6IGZ1bmN0aW9uIChzdHIxLCBzdHIyKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBzdHIxID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyMi50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc3RyMS50b0xvd2VyQ2FzZSgpKSAhPT0gLTE7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGxvd2VyaXplIDogZnVuY3Rpb24gKHN0cikge1xuICAgICAgICAgICAgcmV0dXJuIHN0ci50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB9LFxuICAgICAgICBtYWpvciA6IGZ1bmN0aW9uICh2ZXJzaW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gdHlwZW9mKHZlcnNpb24pID09PSBTVFJfVFlQRSA/IHZlcnNpb24ucmVwbGFjZSgvW15cXGRcXC5dL2csJycpLnNwbGl0KFwiLlwiKVswXSA6IHVuZGVmaW5lZDtcbiAgICAgICAgfSxcbiAgICAgICAgdHJpbSA6IGZ1bmN0aW9uIChzdHIpIHtcbiAgICAgICAgICByZXR1cm4gc3RyLnJlcGxhY2UoL15bXFxzXFx1RkVGRlxceEEwXSt8W1xcc1xcdUZFRkZcXHhBMF0rJC9nLCAnJyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG5cbiAgICAvLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBNYXAgaGVscGVyXG4gICAgLy8vLy8vLy8vLy8vLy9cblxuXG4gICAgdmFyIG1hcHBlciA9IHtcblxuICAgICAgICByZ3ggOiBmdW5jdGlvbiAodWEsIGFycmF5cykge1xuXG4gICAgICAgICAgICAvL3ZhciByZXN1bHQgPSB7fSxcbiAgICAgICAgICAgIHZhciBpID0gMCwgaiwgaywgcCwgcSwgbWF0Y2hlcywgbWF0Y2g7Ly8sIGFyZ3MgPSBhcmd1bWVudHM7XG5cbiAgICAgICAgICAgIC8qLy8gY29uc3RydWN0IG9iamVjdCBiYXJlYm9uZXNcbiAgICAgICAgICAgIGZvciAocCA9IDA7IHAgPCBhcmdzWzFdLmxlbmd0aDsgcCsrKSB7XG4gICAgICAgICAgICAgICAgcSA9IGFyZ3NbMV1bcF07XG4gICAgICAgICAgICAgICAgcmVzdWx0W3R5cGVvZiBxID09PSBPQkpfVFlQRSA/IHFbMF0gOiBxXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH0qL1xuXG4gICAgICAgICAgICAvLyBsb29wIHRocm91Z2ggYWxsIHJlZ2V4ZXMgbWFwc1xuICAgICAgICAgICAgd2hpbGUgKGkgPCBhcnJheXMubGVuZ3RoICYmICFtYXRjaGVzKSB7XG5cbiAgICAgICAgICAgICAgICB2YXIgcmVnZXggPSBhcnJheXNbaV0sICAgICAgIC8vIGV2ZW4gc2VxdWVuY2UgKDAsMiw0LC4uKVxuICAgICAgICAgICAgICAgICAgICBwcm9wcyA9IGFycmF5c1tpICsgMV07ICAgLy8gb2RkIHNlcXVlbmNlICgxLDMsNSwuLilcbiAgICAgICAgICAgICAgICBqID0gayA9IDA7XG5cbiAgICAgICAgICAgICAgICAvLyB0cnkgbWF0Y2hpbmcgdWFzdHJpbmcgd2l0aCByZWdleGVzXG4gICAgICAgICAgICAgICAgd2hpbGUgKGogPCByZWdleC5sZW5ndGggJiYgIW1hdGNoZXMpIHtcblxuICAgICAgICAgICAgICAgICAgICBtYXRjaGVzID0gcmVnZXhbaisrXS5leGVjKHVhKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoISFtYXRjaGVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHAgPSAwOyBwIDwgcHJvcHMubGVuZ3RoOyBwKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaCA9IG1hdGNoZXNbKytrXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxID0gcHJvcHNbcF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgaWYgZ2l2ZW4gcHJvcGVydHkgaXMgYWN0dWFsbHkgYXJyYXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHEgPT09IE9CSl9UWVBFICYmIHEubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocS5sZW5ndGggPT0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBxWzFdID09IEZVTkNfVFlQRSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFzc2lnbiBtb2RpZmllZCBtYXRjaFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbcVswXV0gPSBxWzFdLmNhbGwodGhpcywgbWF0Y2gpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhc3NpZ24gZ2l2ZW4gdmFsdWUsIGlnbm9yZSByZWdleCBtYXRjaFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbcVswXV0gPSBxWzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHEubGVuZ3RoID09IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIHdoZXRoZXIgZnVuY3Rpb24gb3IgcmVnZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcVsxXSA9PT0gRlVOQ19UWVBFICYmICEocVsxXS5leGVjICYmIHFbMV0udGVzdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjYWxsIGZ1bmN0aW9uICh1c3VhbGx5IHN0cmluZyBtYXBwZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1txWzBdXSA9IG1hdGNoID8gcVsxXS5jYWxsKHRoaXMsIG1hdGNoLCBxWzJdKSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2FuaXRpemUgbWF0Y2ggdXNpbmcgZ2l2ZW4gcmVnZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzW3FbMF1dID0gbWF0Y2ggPyBtYXRjaC5yZXBsYWNlKHFbMV0sIHFbMl0pIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHEubGVuZ3RoID09IDQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzW3FbMF1dID0gbWF0Y2ggPyBxWzNdLmNhbGwodGhpcywgbWF0Y2gucmVwbGFjZShxWzFdLCBxWzJdKSkgOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzW3FdID0gbWF0Y2ggPyBtYXRjaCA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaSArPSAyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcyk7XG4gICAgICAgICAgICAvL3JldHVybiB0aGlzO1xuICAgICAgICB9LFxuXG4gICAgICAgIHN0ciA6IGZ1bmN0aW9uIChzdHIsIG1hcCkge1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpIGluIG1hcCkge1xuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIGFycmF5XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtYXBbaV0gPT09IE9CSl9UWVBFICYmIG1hcFtpXS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgbWFwW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodXRpbC5oYXMobWFwW2ldW2pdLCBzdHIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChpID09PSBVTktOT1dOKSA/IHVuZGVmaW5lZCA6IGk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHV0aWwuaGFzKG1hcFtpXSwgc3RyKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKGkgPT09IFVOS05PV04pID8gdW5kZWZpbmVkIDogaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc3RyO1xuICAgICAgICB9XG4gICAgfTtcblxuXG4gICAgLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gU3RyaW5nIG1hcFxuICAgIC8vLy8vLy8vLy8vLy8vXG5cblxuICAgIHZhciBtYXBzID0ge1xuXG4gICAgICAgIGJyb3dzZXIgOiB7XG4gICAgICAgICAgICBvbGRzYWZhcmkgOiB7XG4gICAgICAgICAgICAgICAgdmVyc2lvbiA6IHtcbiAgICAgICAgICAgICAgICAgICAgJzEuMCcgICA6ICcvOCcsXG4gICAgICAgICAgICAgICAgICAgICcxLjInICAgOiAnLzEnLFxuICAgICAgICAgICAgICAgICAgICAnMS4zJyAgIDogJy8zJyxcbiAgICAgICAgICAgICAgICAgICAgJzIuMCcgICA6ICcvNDEyJyxcbiAgICAgICAgICAgICAgICAgICAgJzIuMC4yJyA6ICcvNDE2JyxcbiAgICAgICAgICAgICAgICAgICAgJzIuMC4zJyA6ICcvNDE3JyxcbiAgICAgICAgICAgICAgICAgICAgJzIuMC40JyA6ICcvNDE5JyxcbiAgICAgICAgICAgICAgICAgICAgJz8nICAgICA6ICcvJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBkZXZpY2UgOiB7XG4gICAgICAgICAgICBhbWF6b24gOiB7XG4gICAgICAgICAgICAgICAgbW9kZWwgOiB7XG4gICAgICAgICAgICAgICAgICAgICdGaXJlIFBob25lJyA6IFsnU0QnLCAnS0YnXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzcHJpbnQgOiB7XG4gICAgICAgICAgICAgICAgbW9kZWwgOiB7XG4gICAgICAgICAgICAgICAgICAgICdFdm8gU2hpZnQgNEcnIDogJzczNzNLVCdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHZlbmRvciA6IHtcbiAgICAgICAgICAgICAgICAgICAgJ0hUQycgICAgICAgOiAnQVBBJyxcbiAgICAgICAgICAgICAgICAgICAgJ1NwcmludCcgICAgOiAnU3ByaW50J1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBvcyA6IHtcbiAgICAgICAgICAgIHdpbmRvd3MgOiB7XG4gICAgICAgICAgICAgICAgdmVyc2lvbiA6IHtcbiAgICAgICAgICAgICAgICAgICAgJ01FJyAgICAgICAgOiAnNC45MCcsXG4gICAgICAgICAgICAgICAgICAgICdOVCAzLjExJyAgIDogJ05UMy41MScsXG4gICAgICAgICAgICAgICAgICAgICdOVCA0LjAnICAgIDogJ05UNC4wJyxcbiAgICAgICAgICAgICAgICAgICAgJzIwMDAnICAgICAgOiAnTlQgNS4wJyxcbiAgICAgICAgICAgICAgICAgICAgJ1hQJyAgICAgICAgOiBbJ05UIDUuMScsICdOVCA1LjInXSxcbiAgICAgICAgICAgICAgICAgICAgJ1Zpc3RhJyAgICAgOiAnTlQgNi4wJyxcbiAgICAgICAgICAgICAgICAgICAgJzcnICAgICAgICAgOiAnTlQgNi4xJyxcbiAgICAgICAgICAgICAgICAgICAgJzgnICAgICAgICAgOiAnTlQgNi4yJyxcbiAgICAgICAgICAgICAgICAgICAgJzguMScgICAgICAgOiAnTlQgNi4zJyxcbiAgICAgICAgICAgICAgICAgICAgJzEwJyAgICAgICAgOiBbJ05UIDYuNCcsICdOVCAxMC4wJ10sXG4gICAgICAgICAgICAgICAgICAgICdSVCcgICAgICAgIDogJ0FSTSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG5cbiAgICAvLy8vLy8vLy8vLy8vL1xuICAgIC8vIFJlZ2V4IG1hcFxuICAgIC8vLy8vLy8vLy8vLy9cblxuXG4gICAgdmFyIHJlZ2V4ZXMgPSB7XG5cbiAgICAgICAgYnJvd3NlciA6IFtbXG5cbiAgICAgICAgICAgIC8vIFByZXN0byBiYXNlZFxuICAgICAgICAgICAgLyhvcGVyYVxcc21pbmkpXFwvKFtcXHdcXC4tXSspL2ksICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gT3BlcmEgTWluaVxuICAgICAgICAgICAgLyhvcGVyYVxcc1ttb2JpbGV0YWJdKykuK3ZlcnNpb25cXC8oW1xcd1xcLi1dKykvaSwgICAgICAgICAgICAgICAgICAgICAgLy8gT3BlcmEgTW9iaS9UYWJsZXRcbiAgICAgICAgICAgIC8ob3BlcmEpLit2ZXJzaW9uXFwvKFtcXHdcXC5dKykvaSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gT3BlcmEgPiA5LjgwXG4gICAgICAgICAgICAvKG9wZXJhKVtcXC9cXHNdKyhbXFx3XFwuXSspL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBPcGVyYSA8IDkuODBcbiAgICAgICAgICAgIF0sIFtOQU1FLCBWRVJTSU9OXSwgW1xuXG4gICAgICAgICAgICAvKG9waW9zKVtcXC9cXHNdKyhbXFx3XFwuXSspL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBPcGVyYSBtaW5pIG9uIGlwaG9uZSA+PSA4LjBcbiAgICAgICAgICAgIF0sIFtbTkFNRSwgJ09wZXJhIE1pbmknXSwgVkVSU0lPTl0sIFtcblxuICAgICAgICAgICAgL1xccyhvcHIpXFwvKFtcXHdcXC5dKykvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gT3BlcmEgV2Via2l0XG4gICAgICAgICAgICBdLCBbW05BTUUsICdPcGVyYSddLCBWRVJTSU9OXSwgW1xuXG4gICAgICAgICAgICAvLyBNaXhlZFxuICAgICAgICAgICAgLyhraW5kbGUpXFwvKFtcXHdcXC5dKykvaSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBLaW5kbGVcbiAgICAgICAgICAgIC8obHVuYXNjYXBlfG1heHRob258bmV0ZnJvbnR8amFzbWluZXxibGF6ZXIpW1xcL1xcc10/KFtcXHdcXC5dKikvaSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTHVuYXNjYXBlL01heHRob24vTmV0ZnJvbnQvSmFzbWluZS9CbGF6ZXJcblxuICAgICAgICAgICAgLy8gVHJpZGVudCBiYXNlZFxuICAgICAgICAgICAgLyhhdmFudFxcc3xpZW1vYmlsZXxzbGltfGJhaWR1KSg/OmJyb3dzZXIpP1tcXC9cXHNdPyhbXFx3XFwuXSopL2ksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEF2YW50L0lFTW9iaWxlL1NsaW1Ccm93c2VyL0JhaWR1XG4gICAgICAgICAgICAvKD86bXN8XFwoKShpZSlcXHMoW1xcd1xcLl0rKS9pLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJbnRlcm5ldCBFeHBsb3JlclxuXG4gICAgICAgICAgICAvLyBXZWJraXQvS0hUTUwgYmFzZWRcbiAgICAgICAgICAgIC8ocmVrb25xKVxcLyhbXFx3XFwuXSopL2ksICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVrb25xXG4gICAgICAgICAgICAvKGNocm9taXVtfGZsb2NrfHJvY2ttZWx0fG1pZG9yaXxlcGlwaGFueXxzaWxrfHNreWZpcmV8b3ZpYnJvd3Nlcnxib2x0fGlyb258dml2YWxkaXxpcmlkaXVtfHBoYW50b21qc3xib3dzZXJ8cXVhcmspXFwvKFtcXHdcXC4tXSspL2lcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2hyb21pdW0vRmxvY2svUm9ja01lbHQvTWlkb3JpL0VwaXBoYW55L1NpbGsvU2t5ZmlyZS9Cb2x0L0lyb24vSXJpZGl1bS9QaGFudG9tSlMvQm93c2VyXG4gICAgICAgICAgICBdLCBbTkFNRSwgVkVSU0lPTl0sIFtcblxuICAgICAgICAgICAgLyh0cmlkZW50KS4rcnZbOlxcc10oW1xcd1xcLl0rKS4rbGlrZVxcc2dlY2tvL2kgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSUUxMVxuICAgICAgICAgICAgXSwgW1tOQU1FLCAnSUUnXSwgVkVSU0lPTl0sIFtcblxuICAgICAgICAgICAgLyhlZGdlfGVkZ2lvc3xlZGdlYSlcXC8oKFxcZCspP1tcXHdcXC5dKykvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTWljcm9zb2Z0IEVkZ2VcbiAgICAgICAgICAgIF0sIFtbTkFNRSwgJ0VkZ2UnXSwgVkVSU0lPTl0sIFtcblxuICAgICAgICAgICAgLyh5YWJyb3dzZXIpXFwvKFtcXHdcXC5dKykvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBZYW5kZXhcbiAgICAgICAgICAgIF0sIFtbTkFNRSwgJ1lhbmRleCddLCBWRVJTSU9OXSwgW1xuXG4gICAgICAgICAgICAvKHB1ZmZpbilcXC8oW1xcd1xcLl0rKS9pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFB1ZmZpblxuICAgICAgICAgICAgXSwgW1tOQU1FLCAnUHVmZmluJ10sIFZFUlNJT05dLCBbXG5cbiAgICAgICAgICAgIC8oKD86W1xcc1xcL10pdWM/XFxzP2Jyb3dzZXJ8KD86anVjLispdWN3ZWIpW1xcL1xcc10/KFtcXHdcXC5dKykvaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBVQ0Jyb3dzZXJcbiAgICAgICAgICAgIF0sIFtbTkFNRSwgJ1VDQnJvd3NlciddLCBWRVJTSU9OXSwgW1xuXG4gICAgICAgICAgICAvKGNvbW9kb19kcmFnb24pXFwvKFtcXHdcXC5dKykvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENvbW9kbyBEcmFnb25cbiAgICAgICAgICAgIF0sIFtbTkFNRSwgL18vZywgJyAnXSwgVkVSU0lPTl0sIFtcblxuICAgICAgICAgICAgLyhtaWNyb21lc3NlbmdlcilcXC8oW1xcd1xcLl0rKS9pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBXZUNoYXRcbiAgICAgICAgICAgIF0sIFtbTkFNRSwgJ1dlQ2hhdCddLCBWRVJTSU9OXSwgW1xuXG4gICAgICAgICAgICAvKHFxYnJvd3NlcmxpdGUpXFwvKFtcXHdcXC5dKykvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFFRQnJvd3NlckxpdGVcbiAgICAgICAgICAgIF0sIFtOQU1FLCBWRVJTSU9OXSwgW1xuXG4gICAgICAgICAgICAvKFFRKVxcLyhbXFxkXFwuXSspL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFFRLCBha2EgU2hvdVFcbiAgICAgICAgICAgIF0sIFtOQU1FLCBWRVJTSU9OXSwgW1xuXG4gICAgICAgICAgICAvbT8ocXFicm93c2VyKVtcXC9cXHNdPyhbXFx3XFwuXSspL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBRUUJyb3dzZXJcbiAgICAgICAgICAgIF0sIFtOQU1FLCBWRVJTSU9OXSwgW1xuXG4gICAgICAgICAgICAvKEJJRFVCcm93c2VyKVtcXC9cXHNdPyhbXFx3XFwuXSspL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBCYWlkdSBCcm93c2VyXG4gICAgICAgICAgICBdLCBbTkFNRSwgVkVSU0lPTl0sIFtcblxuICAgICAgICAgICAgLygyMzQ1RXhwbG9yZXIpW1xcL1xcc10/KFtcXHdcXC5dKykvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gMjM0NSBCcm93c2VyXG4gICAgICAgICAgICBdLCBbTkFNRSwgVkVSU0lPTl0sIFtcblxuICAgICAgICAgICAgLyhNZXRhU3IpW1xcL1xcc10/KFtcXHdcXC5dKykvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU291R291QnJvd3NlclxuICAgICAgICAgICAgXSwgW05BTUVdLCBbXG5cbiAgICAgICAgICAgIC8oTEJCUk9XU0VSKS9pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBMaWVCYW8gQnJvd3NlclxuICAgICAgICAgICAgXSwgW05BTUVdLCBbXG5cbiAgICAgICAgICAgIC94aWFvbWlcXC9taXVpYnJvd3NlclxcLyhbXFx3XFwuXSspL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1JVUkgQnJvd3NlclxuICAgICAgICAgICAgXSwgW1ZFUlNJT04sIFtOQU1FLCAnTUlVSSBCcm93c2VyJ11dLCBbXG5cbiAgICAgICAgICAgIC87ZmJhdlxcLyhbXFx3XFwuXSspOy9pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRmFjZWJvb2sgQXBwIGZvciBpT1MgJiBBbmRyb2lkXG4gICAgICAgICAgICBdLCBbVkVSU0lPTiwgW05BTUUsICdGYWNlYm9vayddXSwgW1xuXG4gICAgICAgICAgICAvaGVhZGxlc3NjaHJvbWUoPzpcXC8oW1xcd1xcLl0rKXxcXHMpL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDaHJvbWUgSGVhZGxlc3NcbiAgICAgICAgICAgIF0sIFtWRVJTSU9OLCBbTkFNRSwgJ0Nocm9tZSBIZWFkbGVzcyddXSwgW1xuXG4gICAgICAgICAgICAvXFxzd3ZcXCkuKyhjaHJvbWUpXFwvKFtcXHdcXC5dKykvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2hyb21lIFdlYlZpZXdcbiAgICAgICAgICAgIF0sIFtbTkFNRSwgLyguKykvLCAnJDEgV2ViVmlldyddLCBWRVJTSU9OXSwgW1xuXG4gICAgICAgICAgICAvKCg/Om9jdWx1c3xzYW1zdW5nKWJyb3dzZXIpXFwvKFtcXHdcXC5dKykvaVxuICAgICAgICAgICAgXSwgW1tOQU1FLCAvKC4rKD86Z3x1cykpKC4rKS8sICckMSAkMiddLCBWRVJTSU9OXSwgWyAgICAgICAgICAgICAgICAvLyBPY3VsdXMgLyBTYW1zdW5nIEJyb3dzZXJcblxuICAgICAgICAgICAgL2FuZHJvaWQuK3ZlcnNpb25cXC8oW1xcd1xcLl0rKVxccysoPzptb2JpbGVcXHM/c2FmYXJpfHNhZmFyaSkqL2kgICAgICAgIC8vIEFuZHJvaWQgQnJvd3NlclxuICAgICAgICAgICAgXSwgW1ZFUlNJT04sIFtOQU1FLCAnQW5kcm9pZCBCcm93c2VyJ11dLCBbXG5cbiAgICAgICAgICAgIC8oY2hyb21lfG9tbml3ZWJ8YXJvcmF8W3RpemVub2thXXs1fVxccz9icm93c2VyKVxcL3Y/KFtcXHdcXC5dKykvaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDaHJvbWUvT21uaVdlYi9Bcm9yYS9UaXplbi9Ob2tpYVxuICAgICAgICAgICAgXSwgW05BTUUsIFZFUlNJT05dLCBbXG5cbiAgICAgICAgICAgIC8oZG9sZmluKVxcLyhbXFx3XFwuXSspL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRG9scGhpblxuICAgICAgICAgICAgXSwgW1tOQU1FLCAnRG9scGhpbiddLCBWRVJTSU9OXSwgW1xuXG4gICAgICAgICAgICAvKCg/OmFuZHJvaWQuKyljcm1vfGNyaW9zKVxcLyhbXFx3XFwuXSspL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENocm9tZSBmb3IgQW5kcm9pZC9pT1NcbiAgICAgICAgICAgIF0sIFtbTkFNRSwgJ0Nocm9tZSddLCBWRVJTSU9OXSwgW1xuXG4gICAgICAgICAgICAvKGNvYXN0KVxcLyhbXFx3XFwuXSspL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE9wZXJhIENvYXN0XG4gICAgICAgICAgICBdLCBbW05BTUUsICdPcGVyYSBDb2FzdCddLCBWRVJTSU9OXSwgW1xuXG4gICAgICAgICAgICAvZnhpb3NcXC8oW1xcd1xcLi1dKykvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZpcmVmb3ggZm9yIGlPU1xuICAgICAgICAgICAgXSwgW1ZFUlNJT04sIFtOQU1FLCAnRmlyZWZveCddXSwgW1xuXG4gICAgICAgICAgICAvdmVyc2lvblxcLyhbXFx3XFwuXSspLis/bW9iaWxlXFwvXFx3K1xccyhzYWZhcmkpL2kgICAgICAgICAgICAgICAgICAgICAgIC8vIE1vYmlsZSBTYWZhcmlcbiAgICAgICAgICAgIF0sIFtWRVJTSU9OLCBbTkFNRSwgJ01vYmlsZSBTYWZhcmknXV0sIFtcblxuICAgICAgICAgICAgL3ZlcnNpb25cXC8oW1xcd1xcLl0rKS4rPyhtb2JpbGVcXHM/c2FmYXJpfHNhZmFyaSkvaSAgICAgICAgICAgICAgICAgICAgLy8gU2FmYXJpICYgU2FmYXJpIE1vYmlsZVxuICAgICAgICAgICAgXSwgW1ZFUlNJT04sIE5BTUVdLCBbXG5cbiAgICAgICAgICAgIC93ZWJraXQuKz8oZ3NhKVxcLyhbXFx3XFwuXSspLis/KG1vYmlsZVxccz9zYWZhcml8c2FmYXJpKShcXC9bXFx3XFwuXSspL2kgIC8vIEdvb2dsZSBTZWFyY2ggQXBwbGlhbmNlIG9uIGlPU1xuICAgICAgICAgICAgXSwgW1tOQU1FLCAnR1NBJ10sIFZFUlNJT05dLCBbXG5cbiAgICAgICAgICAgIC93ZWJraXQuKz8obW9iaWxlXFxzP3NhZmFyaXxzYWZhcmkpKFxcL1tcXHdcXC5dKykvaSAgICAgICAgICAgICAgICAgICAgIC8vIFNhZmFyaSA8IDMuMFxuICAgICAgICAgICAgXSwgW05BTUUsIFtWRVJTSU9OLCBtYXBwZXIuc3RyLCBtYXBzLmJyb3dzZXIub2xkc2FmYXJpLnZlcnNpb25dXSwgW1xuXG4gICAgICAgICAgICAvKGtvbnF1ZXJvcilcXC8oW1xcd1xcLl0rKS9pLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEtvbnF1ZXJvclxuICAgICAgICAgICAgLyh3ZWJraXR8a2h0bWwpXFwvKFtcXHdcXC5dKykvaVxuICAgICAgICAgICAgXSwgW05BTUUsIFZFUlNJT05dLCBbXG5cbiAgICAgICAgICAgIC8vIEdlY2tvIGJhc2VkXG4gICAgICAgICAgICAvKG5hdmlnYXRvcnxuZXRzY2FwZSlcXC8oW1xcd1xcLi1dKykvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5ldHNjYXBlXG4gICAgICAgICAgICBdLCBbW05BTUUsICdOZXRzY2FwZSddLCBWRVJTSU9OXSwgW1xuICAgICAgICAgICAgLyhzd2lmdGZveCkvaSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTd2lmdGZveFxuICAgICAgICAgICAgLyhpY2VkcmFnb258aWNld2Vhc2VsfGNhbWlub3xjaGltZXJhfGZlbm5lY3xtYWVtb1xcc2Jyb3dzZXJ8bWluaW1vfGNvbmtlcm9yKVtcXC9cXHNdPyhbXFx3XFwuXFwrXSspL2ksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEljZURyYWdvbi9JY2V3ZWFzZWwvQ2FtaW5vL0NoaW1lcmEvRmVubmVjL01hZW1vL01pbmltby9Db25rZXJvclxuICAgICAgICAgICAgLyhmaXJlZm94fHNlYW1vbmtleXxrLW1lbGVvbnxpY2VjYXR8aWNlYXBlfGZpcmViaXJkfHBob2VuaXh8cGFsZW1vb258YmFzaWxpc2t8d2F0ZXJmb3gpXFwvKFtcXHdcXC4tXSspJC9pLFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZpcmVmb3gvU2VhTW9ua2V5L0stTWVsZW9uL0ljZUNhdC9JY2VBcGUvRmlyZWJpcmQvUGhvZW5peFxuICAgICAgICAgICAgLyhtb3ppbGxhKVxcLyhbXFx3XFwuXSspLitydlxcOi4rZ2Vja29cXC9cXGQrL2ksICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBNb3ppbGxhXG5cbiAgICAgICAgICAgIC8vIE90aGVyXG4gICAgICAgICAgICAvKHBvbGFyaXN8bHlueHxkaWxsb3xpY2FifGRvcmlzfGFtYXlhfHczbXxuZXRzdXJmfHNsZWlwbmlyKVtcXC9cXHNdPyhbXFx3XFwuXSspL2ksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFBvbGFyaXMvTHlueC9EaWxsby9pQ2FiL0RvcmlzL0FtYXlhL3czbS9OZXRTdXJmL1NsZWlwbmlyXG4gICAgICAgICAgICAvKGxpbmtzKVxcc1xcKChbXFx3XFwuXSspL2ksICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBMaW5rc1xuICAgICAgICAgICAgLyhnb2Jyb3dzZXIpXFwvPyhbXFx3XFwuXSopL2ksICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBHb0Jyb3dzZXJcbiAgICAgICAgICAgIC8oaWNlXFxzP2Jyb3dzZXIpXFwvdj8oW1xcd1xcLl9dKykvaSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIElDRSBCcm93c2VyXG4gICAgICAgICAgICAvKG1vc2FpYylbXFwvXFxzXShbXFx3XFwuXSspL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBNb3NhaWNcbiAgICAgICAgICAgIF0sIFtOQU1FLCBWRVJTSU9OXVxuXG4gICAgICAgICAgICAvKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgICAgICAgIC8vIE1lZGlhIHBsYXllcnMgQkVHSU5cbiAgICAgICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgICAgICAgICAsIFtcblxuICAgICAgICAgICAgLyhhcHBsZSg/OmNvcmVtZWRpYXwpKVxcLygoXFxkKylbXFx3XFwuX10rKS9pLCAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gR2VuZXJpYyBBcHBsZSBDb3JlTWVkaWFcbiAgICAgICAgICAgIC8oY29yZW1lZGlhKSB2KChcXGQrKVtcXHdcXC5fXSspL2lcbiAgICAgICAgICAgIF0sIFtOQU1FLCBWRVJTSU9OXSwgW1xuXG4gICAgICAgICAgICAvKGFxdWFsdW5nfGx5c3NuYXxic3BsYXllcilcXC8oKFxcZCspP1tcXHdcXC4tXSspL2kgICAgICAgICAgICAgICAgICAgICAvLyBBcXVhbHVuZy9MeXNzbmEvQlNQbGF5ZXJcbiAgICAgICAgICAgIF0sIFtOQU1FLCBWRVJTSU9OXSwgW1xuXG4gICAgICAgICAgICAvKGFyZXN8b3NzcHJveHkpXFxzKChcXGQrKVtcXHdcXC4tXSspL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBcmVzL09TU1Byb3h5XG4gICAgICAgICAgICBdLCBbTkFNRSwgVkVSU0lPTl0sIFtcblxuICAgICAgICAgICAgLyhhdWRhY2lvdXN8YXVkaW11c2ljc3RyZWFtfGFtYXJva3xiYXNzfGNvcmV8ZGFsdmlrfGdub21lbXBsYXllcnxtdXNpYyBvbiBjb25zb2xlfG5zcGxheWVyfHBzcC1pbnRlcm5ldHJhZGlvcGxheWVyfHZpZGVvcylcXC8oKFxcZCspW1xcd1xcLi1dKykvaSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQXVkYWNpb3VzL0F1ZGlNdXNpY1N0cmVhbS9BbWFyb2svQkFTUy9PcGVuQ09SRS9EYWx2aWsvR25vbWVNcGxheWVyL01vQ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBOU1BsYXllci9QU1AtSW50ZXJuZXRSYWRpb1BsYXllci9WaWRlb3NcbiAgICAgICAgICAgIC8oY2xlbWVudGluZXxtdXNpYyBwbGF5ZXIgZGFlbW9uKVxccygoXFxkKylbXFx3XFwuLV0rKS9pLCAgICAgICAgICAgICAgIC8vIENsZW1lbnRpbmUvTVBEXG4gICAgICAgICAgICAvKGxnIHBsYXllcnxuZXhwbGF5ZXIpXFxzKChcXGQrKVtcXGRcXC5dKykvaSxcbiAgICAgICAgICAgIC9wbGF5ZXJcXC8obmV4cGxheWVyfGxnIHBsYXllcilcXHMoKFxcZCspW1xcd1xcLi1dKykvaSAgICAgICAgICAgICAgICAgICAvLyBOZXhQbGF5ZXIvTEcgUGxheWVyXG4gICAgICAgICAgICBdLCBbTkFNRSwgVkVSU0lPTl0sIFtcbiAgICAgICAgICAgIC8obmV4cGxheWVyKVxccygoXFxkKylbXFx3XFwuLV0rKS9pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5leHBsYXllclxuICAgICAgICAgICAgXSwgW05BTUUsIFZFUlNJT05dLCBbXG5cbiAgICAgICAgICAgIC8oZmxycClcXC8oKFxcZCspW1xcd1xcLi1dKykvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZsaXAgUGxheWVyXG4gICAgICAgICAgICBdLCBbW05BTUUsICdGbGlwIFBsYXllciddLCBWRVJTSU9OXSwgW1xuXG4gICAgICAgICAgICAvKGZzdHJlYW18bmF0aXZlaG9zdHxxdWVyeXNlZWtzcGlkZXJ8aWEtYXJjaGl2ZXJ8ZmFjZWJvb2tleHRlcm5hbGhpdCkvaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBGU3RyZWFtL05hdGl2ZUhvc3QvUXVlcnlTZWVrU3BpZGVyL0lBIEFyY2hpdmVyL2ZhY2Vib29rZXh0ZXJuYWxoaXRcbiAgICAgICAgICAgIF0sIFtOQU1FXSwgW1xuXG4gICAgICAgICAgICAvKGdzdHJlYW1lcikgc291cGh0dHBzcmMgKD86XFwoW15cXCldK1xcKSl7MCwxfSBsaWJzb3VwXFwvKChcXGQrKVtcXHdcXC4tXSspL2lcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gR3N0cmVhbWVyXG4gICAgICAgICAgICBdLCBbTkFNRSwgVkVSU0lPTl0sIFtcblxuICAgICAgICAgICAgLyhodGMgc3RyZWFtaW5nIHBsYXllcilcXHNbXFx3X10rXFxzXFwvXFxzKChcXGQrKVtcXGRcXC5dKykvaSwgICAgICAgICAgICAgIC8vIEhUQyBTdHJlYW1pbmcgUGxheWVyXG4gICAgICAgICAgICAvKGphdmF8cHl0aG9uLXVybGxpYnxweXRob24tcmVxdWVzdHN8d2dldHxsaWJjdXJsKVxcLygoXFxkKylbXFx3XFwuLV9dKykvaSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSmF2YS91cmxsaWIvcmVxdWVzdHMvd2dldC9jVVJMXG4gICAgICAgICAgICAvKGxhdmYpKChcXGQrKVtcXGRcXC5dKykvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIExhdmYgKEZGTVBFRylcbiAgICAgICAgICAgIF0sIFtOQU1FLCBWRVJTSU9OXSwgW1xuXG4gICAgICAgICAgICAvKGh0Y19vbmVfcylcXC8oKFxcZCspW1xcZFxcLl0rKS9pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBIVEMgT25lIFNcbiAgICAgICAgICAgIF0sIFtbTkFNRSwgL18vZywgJyAnXSwgVkVSU0lPTl0sIFtcblxuICAgICAgICAgICAgLyhtcGxheWVyKSg/Olxcc3xcXC8pKD86KD86c2hlcnB5YS0pezAsMX1zdm4pKD86LXxcXHMpKHJcXGQrKD86LVxcZCtbXFx3XFwuLV0rKXswLDF9KS9pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1QbGF5ZXIgU1ZOXG4gICAgICAgICAgICBdLCBbTkFNRSwgVkVSU0lPTl0sIFtcblxuICAgICAgICAgICAgLyhtcGxheWVyKSg/Olxcc3xcXC98W3Vua293LV0rKSgoXFxkKylbXFx3XFwuLV0rKS9pICAgICAgICAgICAgICAgICAgICAgIC8vIE1QbGF5ZXJcbiAgICAgICAgICAgIF0sIFtOQU1FLCBWRVJTSU9OXSwgW1xuXG4gICAgICAgICAgICAvKG1wbGF5ZXIpL2ksICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1QbGF5ZXIgKG5vIG90aGVyIGluZm8pXG4gICAgICAgICAgICAvKHlvdXJtdXplKS9pLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFlvdXJNdXplXG4gICAgICAgICAgICAvKG1lZGlhIHBsYXllciBjbGFzc2ljfG5lcm8gc2hvd3RpbWUpL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1lZGlhIFBsYXllciBDbGFzc2ljL05lcm8gU2hvd1RpbWVcbiAgICAgICAgICAgIF0sIFtOQU1FXSwgW1xuXG4gICAgICAgICAgICAvKG5lcm8gKD86aG9tZXxzY291dCkpXFwvKChcXGQrKVtcXHdcXC4tXSspL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBOZXJvIEhvbWUvTmVybyBTY291dFxuICAgICAgICAgICAgXSwgW05BTUUsIFZFUlNJT05dLCBbXG5cbiAgICAgICAgICAgIC8obm9raWFcXGQrKVxcLygoXFxkKylbXFx3XFwuLV0rKS9pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBOb2tpYVxuICAgICAgICAgICAgXSwgW05BTUUsIFZFUlNJT05dLCBbXG5cbiAgICAgICAgICAgIC9cXHMoc29uZ2JpcmQpXFwvKChcXGQrKVtcXHdcXC4tXSspL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTb25nYmlyZC9QaGlsaXBzLVNvbmdiaXJkXG4gICAgICAgICAgICBdLCBbTkFNRSwgVkVSU0lPTl0sIFtcblxuICAgICAgICAgICAgLyh3aW5hbXApMyB2ZXJzaW9uICgoXFxkKylbXFx3XFwuLV0rKS9pLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBXaW5hbXBcbiAgICAgICAgICAgIC8od2luYW1wKVxccygoXFxkKylbXFx3XFwuLV0rKS9pLFxuICAgICAgICAgICAgLyh3aW5hbXApbXBlZ1xcLygoXFxkKylbXFx3XFwuLV0rKS9pXG4gICAgICAgICAgICBdLCBbTkFNRSwgVkVSU0lPTl0sIFtcblxuICAgICAgICAgICAgLyhvY21zLWJvdHx0YXBpbnJhZGlvfHR1bmVpbiByYWRpb3x1bmtub3dufHdpbmFtcHxpbmxpZ2h0IHJhZGlvKS9pICAvLyBPQ01TLWJvdC90YXAgaW4gcmFkaW8vdHVuZWluL3Vua25vd24vd2luYW1wIChubyBvdGhlciBpbmZvKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpbmxpZ2h0IHJhZGlvXG4gICAgICAgICAgICBdLCBbTkFNRV0sIFtcblxuICAgICAgICAgICAgLyhxdWlja3RpbWV8cm1hfHJhZGlvYXBwfHJhZGlvY2xpZW50YXBwbGljYXRpb258c291bmR0YXB8dG90ZW18c3RhZ2VmcmlnaHR8c3RyZWFtaXVtKVxcLygoXFxkKylbXFx3XFwuLV0rKS9pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFF1aWNrVGltZS9SZWFsTWVkaWEvUmFkaW9BcHAvUmFkaW9DbGllbnRBcHBsaWNhdGlvbi9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU291bmRUYXAvVG90ZW0vU3RhZ2VmcmlnaHQvU3RyZWFtaXVtXG4gICAgICAgICAgICBdLCBbTkFNRSwgVkVSU0lPTl0sIFtcblxuICAgICAgICAgICAgLyhzbXApKChcXGQrKVtcXGRcXC5dKykvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTTVBcbiAgICAgICAgICAgIF0sIFtOQU1FLCBWRVJTSU9OXSwgW1xuXG4gICAgICAgICAgICAvKHZsYykgbWVkaWEgcGxheWVyIC0gdmVyc2lvbiAoKFxcZCspW1xcd1xcLl0rKS9pLCAgICAgICAgICAgICAgICAgICAgIC8vIFZMQyBWaWRlb2xhblxuICAgICAgICAgICAgLyh2bGMpXFwvKChcXGQrKVtcXHdcXC4tXSspL2ksXG4gICAgICAgICAgICAvKHhibWN8Z3Zmc3x4aW5lfHhtbXN8aXJhcHApXFwvKChcXGQrKVtcXHdcXC4tXSspL2ksICAgICAgICAgICAgICAgICAgICAvLyBYQk1DL2d2ZnMvWGluZS9YTU1TL2lyYXBwXG4gICAgICAgICAgICAvKGZvb2JhcjIwMDApXFwvKChcXGQrKVtcXGRcXC5dKykvaSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBGb29iYXIyMDAwXG4gICAgICAgICAgICAvKGl0dW5lcylcXC8oKFxcZCspW1xcZFxcLl0rKS9pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpVHVuZXNcbiAgICAgICAgICAgIF0sIFtOQU1FLCBWRVJTSU9OXSwgW1xuXG4gICAgICAgICAgICAvKHdtcGxheWVyKVxcLygoXFxkKylbXFx3XFwuLV0rKS9pLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBXaW5kb3dzIE1lZGlhIFBsYXllclxuICAgICAgICAgICAgLyh3aW5kb3dzLW1lZGlhLXBsYXllcilcXC8oKFxcZCspW1xcd1xcLi1dKykvaVxuICAgICAgICAgICAgXSwgW1tOQU1FLCAvLS9nLCAnICddLCBWRVJTSU9OXSwgW1xuXG4gICAgICAgICAgICAvd2luZG93c1xcLygoXFxkKylbXFx3XFwuLV0rKSB1cG5wXFwvW1xcZFxcLl0rIGRsbmFkb2NcXC9bXFxkXFwuXSsgKGhvbWUgbWVkaWEgc2VydmVyKS9pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdpbmRvd3MgTWVkaWEgU2VydmVyXG4gICAgICAgICAgICBdLCBbVkVSU0lPTiwgW05BTUUsICdXaW5kb3dzJ11dLCBbXG5cbiAgICAgICAgICAgIC8oY29tXFwucmlzZXVwcmFkaW9hbGFybSlcXC8oKFxcZCspW1xcZFxcLl0qKS9pICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSaXNlVVAgUmFkaW8gQWxhcm1cbiAgICAgICAgICAgIF0sIFtOQU1FLCBWRVJTSU9OXSwgW1xuXG4gICAgICAgICAgICAvKHJhZC5pbylcXHMoKFxcZCspW1xcZFxcLl0rKS9pLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSYWQuaW9cbiAgICAgICAgICAgIC8ocmFkaW8uKD86ZGV8YXR8ZnIpKVxccygoXFxkKylbXFxkXFwuXSspL2lcbiAgICAgICAgICAgIF0sIFtbTkFNRSwgJ3JhZC5pbyddLCBWRVJTSU9OXVxuXG4gICAgICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgICAgICAgICAvLyBNZWRpYSBwbGF5ZXJzIEVORFxuICAgICAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8qL1xuXG4gICAgICAgIF0sXG5cbiAgICAgICAgY3B1IDogW1tcblxuICAgICAgICAgICAgLyg/OihhbWR8eCg/Oig/Ojg2fDY0KVtfLV0pP3x3b3d8d2luKTY0KVs7XFwpXS9pICAgICAgICAgICAgICAgICAgICAgLy8gQU1ENjRcbiAgICAgICAgICAgIF0sIFtbQVJDSElURUNUVVJFLCAnYW1kNjQnXV0sIFtcblxuICAgICAgICAgICAgLyhpYTMyKD89OykpL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJQTMyIChxdWlja3RpbWUpXG4gICAgICAgICAgICBdLCBbW0FSQ0hJVEVDVFVSRSwgdXRpbC5sb3dlcml6ZV1dLCBbXG5cbiAgICAgICAgICAgIC8oKD86aVszNDZdfHgpODYpWztcXCldL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIElBMzJcbiAgICAgICAgICAgIF0sIFtbQVJDSElURUNUVVJFLCAnaWEzMiddXSwgW1xuXG4gICAgICAgICAgICAvLyBQb2NrZXRQQyBtaXN0YWtlbmx5IGlkZW50aWZpZWQgYXMgUG93ZXJQQ1xuICAgICAgICAgICAgL3dpbmRvd3NcXHMoY2V8bW9iaWxlKTtcXHNwcGM7L2lcbiAgICAgICAgICAgIF0sIFtbQVJDSElURUNUVVJFLCAnYXJtJ11dLCBbXG5cbiAgICAgICAgICAgIC8oKD86cHBjfHBvd2VycGMpKD86NjQpPykoPzpcXHNtYWN8O3xcXCkpL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBQb3dlclBDXG4gICAgICAgICAgICBdLCBbW0FSQ0hJVEVDVFVSRSwgL293ZXIvLCAnJywgdXRpbC5sb3dlcml6ZV1dLCBbXG5cbiAgICAgICAgICAgIC8oc3VuNFxcdylbO1xcKV0vaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTUEFSQ1xuICAgICAgICAgICAgXSwgW1tBUkNISVRFQ1RVUkUsICdzcGFyYyddXSwgW1xuXG4gICAgICAgICAgICAvKCg/OmF2cjMyfGlhNjQoPz07KSl8NjhrKD89XFwpKXxhcm0oPzo2NHwoPz12XFxkKzspKXwoPz1hdG1lbFxccylhdnJ8KD86aXJpeHxtaXBzfHNwYXJjKSg/OjY0KT8oPz07KXxwYS1yaXNjKS9pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIElBNjQsIDY4SywgQVJNLzY0LCBBVlIvMzIsIElSSVgvNjQsIE1JUFMvNjQsIFNQQVJDLzY0LCBQQS1SSVNDXG4gICAgICAgICAgICBdLCBbW0FSQ0hJVEVDVFVSRSwgdXRpbC5sb3dlcml6ZV1dXG4gICAgICAgIF0sXG5cbiAgICAgICAgZGV2aWNlIDogW1tcblxuICAgICAgICAgICAgL1xcKChpcGFkfHBsYXlib29rKTtbXFx3XFxzXFwpOy1dKyhyaW18YXBwbGUpL2kgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaVBhZC9QbGF5Qm9va1xuICAgICAgICAgICAgXSwgW01PREVMLCBWRU5ET1IsIFtUWVBFLCBUQUJMRVRdXSwgW1xuXG4gICAgICAgICAgICAvYXBwbGVjb3JlbWVkaWFcXC9bXFx3XFwuXSsgXFwoKGlwYWQpLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpUGFkXG4gICAgICAgICAgICBdLCBbTU9ERUwsIFtWRU5ET1IsICdBcHBsZSddLCBbVFlQRSwgVEFCTEVUXV0sIFtcblxuICAgICAgICAgICAgLyhhcHBsZVxcc3swLDF9dHYpL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQXBwbGUgVFZcbiAgICAgICAgICAgIF0sIFtbTU9ERUwsICdBcHBsZSBUViddLCBbVkVORE9SLCAnQXBwbGUnXV0sIFtcblxuICAgICAgICAgICAgLyhhcmNob3MpXFxzKGdhbWVwYWQyPykvaSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQXJjaG9zXG4gICAgICAgICAgICAvKGhwKS4rKHRvdWNocGFkKS9pLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEhQIFRvdWNoUGFkXG4gICAgICAgICAgICAvKGhwKS4rKHRhYmxldCkvaSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEhQIFRhYmxldFxuICAgICAgICAgICAgLyhraW5kbGUpXFwvKFtcXHdcXC5dKykvaSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBLaW5kbGVcbiAgICAgICAgICAgIC9cXHMobm9vaylbXFx3XFxzXStidWlsZFxcLyhcXHcrKS9pLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBOb29rXG4gICAgICAgICAgICAvKGRlbGwpXFxzKHN0cmVhW2twclxcc1xcZF0qW1xcZGtvXSkvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBEZWxsIFN0cmVha1xuICAgICAgICAgICAgXSwgW1ZFTkRPUiwgTU9ERUwsIFtUWVBFLCBUQUJMRVRdXSwgW1xuXG4gICAgICAgICAgICAvKGtmW0Etel0rKVxcc2J1aWxkXFwvLitzaWxrXFwvL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEtpbmRsZSBGaXJlIEhEXG4gICAgICAgICAgICBdLCBbTU9ERUwsIFtWRU5ET1IsICdBbWF6b24nXSwgW1RZUEUsIFRBQkxFVF1dLCBbXG4gICAgICAgICAgICAvKHNkfGtmKVswMzQ5aGlqb3JzdHV3XStcXHNidWlsZFxcLy4rc2lsa1xcLy9pICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZpcmUgUGhvbmVcbiAgICAgICAgICAgIF0sIFtbTU9ERUwsIG1hcHBlci5zdHIsIG1hcHMuZGV2aWNlLmFtYXpvbi5tb2RlbF0sIFtWRU5ET1IsICdBbWF6b24nXSwgW1RZUEUsIE1PQklMRV1dLCBbXG5cbiAgICAgICAgICAgIC9cXCgoaXBbaG9uZWR8XFxzXFx3Kl0rKTsuKyhhcHBsZSkvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaVBvZC9pUGhvbmVcbiAgICAgICAgICAgIF0sIFtNT0RFTCwgVkVORE9SLCBbVFlQRSwgTU9CSUxFXV0sIFtcbiAgICAgICAgICAgIC9cXCgoaXBbaG9uZWR8XFxzXFx3Kl0rKTsvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaVBvZC9pUGhvbmVcbiAgICAgICAgICAgIF0sIFtNT0RFTCwgW1ZFTkRPUiwgJ0FwcGxlJ10sIFtUWVBFLCBNT0JJTEVdXSwgW1xuXG4gICAgICAgICAgICAvKGJsYWNrYmVycnkpW1xccy1dPyhcXHcrKS9pLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQmxhY2tCZXJyeVxuICAgICAgICAgICAgLyhibGFja2JlcnJ5fGJlbnF8cGFsbSg/PVxcLSl8c29ueWVyaWNzc29ufGFjZXJ8YXN1c3xkZWxsfG1laXp1fG1vdG9yb2xhfHBvbHl0cm9uKVtcXHNfLV0/KFtcXHctXSopL2ksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEJlblEvUGFsbS9Tb255LUVyaWNzc29uL0FjZXIvQXN1cy9EZWxsL01laXp1L01vdG9yb2xhL1BvbHl0cm9uXG4gICAgICAgICAgICAvKGhwKVxccyhbXFx3XFxzXStcXHcpL2ksICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBIUCBpUEFRXG4gICAgICAgICAgICAvKGFzdXMpLT8oXFx3KykvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBc3VzXG4gICAgICAgICAgICBdLCBbVkVORE9SLCBNT0RFTCwgW1RZUEUsIE1PQklMRV1dLCBbXG4gICAgICAgICAgICAvXFwoYmIxMDtcXHMoXFx3KykvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEJsYWNrQmVycnkgMTBcbiAgICAgICAgICAgIF0sIFtNT0RFTCwgW1ZFTkRPUiwgJ0JsYWNrQmVycnknXSwgW1RZUEUsIE1PQklMRV1dLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFzdXMgVGFibGV0c1xuICAgICAgICAgICAgL2FuZHJvaWQuKyh0cmFuc2ZvW3ByaW1lXFxzXXs0LDEwfVxcc1xcdyt8ZWVlcGN8c2xpZGVyXFxzXFx3K3xuZXh1cyA3fHBhZGZvbmUpL2lcbiAgICAgICAgICAgIF0sIFtNT0RFTCwgW1ZFTkRPUiwgJ0FzdXMnXSwgW1RZUEUsIFRBQkxFVF1dLCBbXG5cbiAgICAgICAgICAgIC8oc29ueSlcXHModGFibGV0XFxzW3BzXSlcXHNidWlsZFxcLy9pLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTb255XG4gICAgICAgICAgICAvKHNvbnkpPyg/OnNncC4rKVxcc2J1aWxkXFwvL2lcbiAgICAgICAgICAgIF0sIFtbVkVORE9SLCAnU29ueSddLCBbTU9ERUwsICdYcGVyaWEgVGFibGV0J10sIFtUWVBFLCBUQUJMRVRdXSwgW1xuICAgICAgICAgICAgL2FuZHJvaWQuK1xccyhbYy1nXVxcZHs0fXxzb1stbF1cXHcrKVxcc2J1aWxkXFwvL2lcbiAgICAgICAgICAgIF0sIFtNT0RFTCwgW1ZFTkRPUiwgJ1NvbnknXSwgW1RZUEUsIE1PQklMRV1dLCBbXG5cbiAgICAgICAgICAgIC9cXHMob3V5YSlcXHMvaSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBPdXlhXG4gICAgICAgICAgICAvKG5pbnRlbmRvKVxccyhbd2lkczN1XSspL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBOaW50ZW5kb1xuICAgICAgICAgICAgXSwgW1ZFTkRPUiwgTU9ERUwsIFtUWVBFLCBDT05TT0xFXV0sIFtcblxuICAgICAgICAgICAgL2FuZHJvaWQuKztcXHMoc2hpZWxkKVxcc2J1aWxkL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE52aWRpYVxuICAgICAgICAgICAgXSwgW01PREVMLCBbVkVORE9SLCAnTnZpZGlhJ10sIFtUWVBFLCBDT05TT0xFXV0sIFtcblxuICAgICAgICAgICAgLyhwbGF5c3RhdGlvblxcc1szNHBvcnRhYmxldmldKykvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUGxheXN0YXRpb25cbiAgICAgICAgICAgIF0sIFtNT0RFTCwgW1ZFTkRPUiwgJ1NvbnknXSwgW1RZUEUsIENPTlNPTEVdXSwgW1xuXG4gICAgICAgICAgICAvKHNwcmludFxccyhcXHcrKSkvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3ByaW50IFBob25lc1xuICAgICAgICAgICAgXSwgW1tWRU5ET1IsIG1hcHBlci5zdHIsIG1hcHMuZGV2aWNlLnNwcmludC52ZW5kb3JdLCBbTU9ERUwsIG1hcHBlci5zdHIsIG1hcHMuZGV2aWNlLnNwcmludC5tb2RlbF0sIFtUWVBFLCBNT0JJTEVdXSwgW1xuXG4gICAgICAgICAgICAvKGxlbm92bylcXHM/KFMoPzo1MDAwfDYwMDApKyg/OlstXVtcXHcrXSkpL2kgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTGVub3ZvIHRhYmxldHNcbiAgICAgICAgICAgIF0sIFtWRU5ET1IsIE1PREVMLCBbVFlQRSwgVEFCTEVUXV0sIFtcblxuICAgICAgICAgICAgLyhodGMpWztfXFxzLV0rKFtcXHdcXHNdKyg/PVxcKSl8XFx3KykqL2ksICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEhUQ1xuICAgICAgICAgICAgLyh6dGUpLShcXHcqKS9pLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gWlRFXG4gICAgICAgICAgICAvKGFsY2F0ZWx8Z2Vla3NwaG9uZXxsZW5vdm98bmV4aWFufHBhbmFzb25pY3woPz07XFxzKXNvbnkpW19cXHMtXT8oW1xcdy1dKikvaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBbGNhdGVsL0dlZWtzUGhvbmUvTGVub3ZvL05leGlhbi9QYW5hc29uaWMvU29ueVxuICAgICAgICAgICAgXSwgW1ZFTkRPUiwgW01PREVMLCAvXy9nLCAnICddLCBbVFlQRSwgTU9CSUxFXV0sIFtcblxuICAgICAgICAgICAgLyhuZXh1c1xcczkpL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSFRDIE5leHVzIDlcbiAgICAgICAgICAgIF0sIFtNT0RFTCwgW1ZFTkRPUiwgJ0hUQyddLCBbVFlQRSwgVEFCTEVUXV0sIFtcblxuICAgICAgICAgICAgL2RcXC9odWF3ZWkoW1xcd1xccy1dKylbO1xcKV0vaSxcbiAgICAgICAgICAgIC8obmV4dXNcXHM2cCkvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEh1YXdlaVxuICAgICAgICAgICAgXSwgW01PREVMLCBbVkVORE9SLCAnSHVhd2VpJ10sIFtUWVBFLCBNT0JJTEVdXSwgW1xuXG4gICAgICAgICAgICAvKG1pY3Jvc29mdCk7XFxzKGx1bWlhW1xcc1xcd10rKS9pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1pY3Jvc29mdCBMdW1pYVxuICAgICAgICAgICAgXSwgW1ZFTkRPUiwgTU9ERUwsIFtUWVBFLCBNT0JJTEVdXSwgW1xuXG4gICAgICAgICAgICAvW1xcc1xcKDtdKHhib3goPzpcXHNvbmUpPylbXFxzXFwpO10vaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTWljcm9zb2Z0IFhib3hcbiAgICAgICAgICAgIF0sIFtNT0RFTCwgW1ZFTkRPUiwgJ01pY3Jvc29mdCddLCBbVFlQRSwgQ09OU09MRV1dLCBbXG4gICAgICAgICAgICAvKGtpblxcLltvbmV0d117M30pL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBNaWNyb3NvZnQgS2luXG4gICAgICAgICAgICBdLCBbW01PREVMLCAvXFwuL2csICcgJ10sIFtWRU5ET1IsICdNaWNyb3NvZnQnXSwgW1RZUEUsIE1PQklMRV1dLCBbXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTW90b3JvbGFcbiAgICAgICAgICAgIC9cXHMobWlsZXN0b25lfGRyb2lkKD86WzItNHhdfFxccyg/OmJpb25pY3x4Mnxwcm98cmF6cikpPzo/KFxcczRnKT8pW1xcd1xcc10rYnVpbGRcXC8vaSxcbiAgICAgICAgICAgIC9tb3RbXFxzLV0/KFxcdyopL2ksXG4gICAgICAgICAgICAvKFhUXFxkezMsNH0pIGJ1aWxkXFwvL2ksXG4gICAgICAgICAgICAvKG5leHVzXFxzNikvaVxuICAgICAgICAgICAgXSwgW01PREVMLCBbVkVORE9SLCAnTW90b3JvbGEnXSwgW1RZUEUsIE1PQklMRV1dLCBbXG4gICAgICAgICAgICAvYW5kcm9pZC4rXFxzKG16NjBcXGR8eG9vbVtcXHMyXXswLDJ9KVxcc2J1aWxkXFwvL2lcbiAgICAgICAgICAgIF0sIFtNT0RFTCwgW1ZFTkRPUiwgJ01vdG9yb2xhJ10sIFtUWVBFLCBUQUJMRVRdXSwgW1xuXG4gICAgICAgICAgICAvaGJidHZcXC9cXGQrXFwuXFxkK1xcLlxcZCtcXHMrXFwoW1xcd1xcc10qO1xccyooXFx3W147XSopOyhbXjtdKikvaSAgICAgICAgICAgIC8vIEhiYlRWIGRldmljZXNcbiAgICAgICAgICAgIF0sIFtbVkVORE9SLCB1dGlsLnRyaW1dLCBbTU9ERUwsIHV0aWwudHJpbV0sIFtUWVBFLCBTTUFSVFRWXV0sIFtcblxuICAgICAgICAgICAgL2hiYnR2LittYXBsZTsoXFxkKykvaVxuICAgICAgICAgICAgXSwgW1tNT0RFTCwgL14vLCAnU21hcnRUViddLCBbVkVORE9SLCAnU2Ftc3VuZyddLCBbVFlQRSwgU01BUlRUVl1dLCBbXG5cbiAgICAgICAgICAgIC9cXChkdHZbXFwpO10uKyhhcXVvcykvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTaGFycFxuICAgICAgICAgICAgXSwgW01PREVMLCBbVkVORE9SLCAnU2hhcnAnXSwgW1RZUEUsIFNNQVJUVFZdXSwgW1xuXG4gICAgICAgICAgICAvYW5kcm9pZC4rKChzY2gtaVs4OV0wXFxkfHNody1tMzgwc3xndC1wXFxkezR9fGd0LW5cXGQrfHNnaC10OFs1Nl05fG5leHVzIDEwKSkvaSxcbiAgICAgICAgICAgIC8oKFNNLVRcXHcrKSkvaVxuICAgICAgICAgICAgXSwgW1tWRU5ET1IsICdTYW1zdW5nJ10sIE1PREVMLCBbVFlQRSwgVEFCTEVUXV0sIFsgICAgICAgICAgICAgICAgICAvLyBTYW1zdW5nXG4gICAgICAgICAgICAvc21hcnQtdHYuKyhzYW1zdW5nKS9pXG4gICAgICAgICAgICBdLCBbVkVORE9SLCBbVFlQRSwgU01BUlRUVl0sIE1PREVMXSwgW1xuICAgICAgICAgICAgLygoc1tjZ3BdaC1cXHcrfGd0LVxcdyt8Z2FsYXh5XFxzbmV4dXN8c20tXFx3W1xcd1xcZF0rKSkvaSxcbiAgICAgICAgICAgIC8oc2FtW3N1bmddKilbXFxzLV0qKFxcdystP1tcXHctXSopL2ksXG4gICAgICAgICAgICAvc2VjLSgoc2doXFx3KykpL2lcbiAgICAgICAgICAgIF0sIFtbVkVORE9SLCAnU2Ftc3VuZyddLCBNT0RFTCwgW1RZUEUsIE1PQklMRV1dLCBbXG5cbiAgICAgICAgICAgIC9zaWUtKFxcdyopL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNpZW1lbnNcbiAgICAgICAgICAgIF0sIFtNT0RFTCwgW1ZFTkRPUiwgJ1NpZW1lbnMnXSwgW1RZUEUsIE1PQklMRV1dLCBbXG5cbiAgICAgICAgICAgIC8obWFlbW98bm9raWEpLioobjkwMHxsdW1pYVxcc1xcZCspL2ksICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBOb2tpYVxuICAgICAgICAgICAgLyhub2tpYSlbXFxzXy1dPyhbXFx3LV0qKS9pXG4gICAgICAgICAgICBdLCBbW1ZFTkRPUiwgJ05va2lhJ10sIE1PREVMLCBbVFlQRSwgTU9CSUxFXV0sIFtcblxuICAgICAgICAgICAgL2FuZHJvaWRcXHMzXFwuW1xcc1xcdzstXXsxMH0oYVxcZHszfSkvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFjZXJcbiAgICAgICAgICAgIF0sIFtNT0RFTCwgW1ZFTkRPUiwgJ0FjZXInXSwgW1RZUEUsIFRBQkxFVF1dLCBbXG5cbiAgICAgICAgICAgIC9hbmRyb2lkLisoW3ZsXWtcXC0/XFxkezN9KVxccytidWlsZC9pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTEcgVGFibGV0XG4gICAgICAgICAgICBdLCBbTU9ERUwsIFtWRU5ET1IsICdMRyddLCBbVFlQRSwgVEFCTEVUXV0sIFtcbiAgICAgICAgICAgIC9hbmRyb2lkXFxzM1xcLltcXHNcXHc7LV17MTB9KGxnPyktKFswNmN2OV17Myw0fSkvaSAgICAgICAgICAgICAgICAgICAgIC8vIExHIFRhYmxldFxuICAgICAgICAgICAgXSwgW1tWRU5ET1IsICdMRyddLCBNT0RFTCwgW1RZUEUsIFRBQkxFVF1dLCBbXG4gICAgICAgICAgICAvKGxnKSBuZXRjYXN0XFwudHYvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBMRyBTbWFydFRWXG4gICAgICAgICAgICBdLCBbVkVORE9SLCBNT0RFTCwgW1RZUEUsIFNNQVJUVFZdXSwgW1xuICAgICAgICAgICAgLyhuZXh1c1xcc1s0NV0pL2ksICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTEdcbiAgICAgICAgICAgIC9sZ1tlO1xcc1xcLy1dKyhcXHcqKS9pLFxuICAgICAgICAgICAgL2FuZHJvaWQuK2xnKFxcLT9bXFxkXFx3XSspXFxzK2J1aWxkL2lcbiAgICAgICAgICAgIF0sIFtNT0RFTCwgW1ZFTkRPUiwgJ0xHJ10sIFtUWVBFLCBNT0JJTEVdXSwgW1xuXG4gICAgICAgICAgICAvYW5kcm9pZC4rKGlkZWF0YWJbYS16MC05XFwtXFxzXSspL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTGVub3ZvXG4gICAgICAgICAgICBdLCBbTU9ERUwsIFtWRU5ET1IsICdMZW5vdm8nXSwgW1RZUEUsIFRBQkxFVF1dLCBbXG5cbiAgICAgICAgICAgIC9saW51eDsuKygoam9sbGEpKTsvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSm9sbGFcbiAgICAgICAgICAgIF0sIFtWRU5ET1IsIE1PREVMLCBbVFlQRSwgTU9CSUxFXV0sIFtcblxuICAgICAgICAgICAgLygocGViYmxlKSlhcHBcXC9bXFxkXFwuXStcXHMvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUGViYmxlXG4gICAgICAgICAgICBdLCBbVkVORE9SLCBNT0RFTCwgW1RZUEUsIFdFQVJBQkxFXV0sIFtcblxuICAgICAgICAgICAgL2FuZHJvaWQuKztcXHMob3BwbylcXHM/KFtcXHdcXHNdKylcXHNidWlsZC9pICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE9QUE9cbiAgICAgICAgICAgIF0sIFtWRU5ET1IsIE1PREVMLCBbVFlQRSwgTU9CSUxFXV0sIFtcblxuICAgICAgICAgICAgL2Nya2V5L2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBHb29nbGUgQ2hyb21lY2FzdFxuICAgICAgICAgICAgXSwgW1tNT0RFTCwgJ0Nocm9tZWNhc3QnXSwgW1ZFTkRPUiwgJ0dvb2dsZSddXSwgW1xuXG4gICAgICAgICAgICAvYW5kcm9pZC4rO1xccyhnbGFzcylcXHNcXGQvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEdvb2dsZSBHbGFzc1xuICAgICAgICAgICAgXSwgW01PREVMLCBbVkVORE9SLCAnR29vZ2xlJ10sIFtUWVBFLCBXRUFSQUJMRV1dLCBbXG5cbiAgICAgICAgICAgIC9hbmRyb2lkLis7XFxzKHBpeGVsIGMpXFxzL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBHb29nbGUgUGl4ZWwgQ1xuICAgICAgICAgICAgXSwgW01PREVMLCBbVkVORE9SLCAnR29vZ2xlJ10sIFtUWVBFLCBUQUJMRVRdXSwgW1xuXG4gICAgICAgICAgICAvYW5kcm9pZC4rO1xccyhwaXhlbCB4bHxwaXhlbClcXHMvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gR29vZ2xlIFBpeGVsXG4gICAgICAgICAgICBdLCBbTU9ERUwsIFtWRU5ET1IsICdHb29nbGUnXSwgW1RZUEUsIE1PQklMRV1dLCBbXG5cbiAgICAgICAgICAgIC9hbmRyb2lkLis7XFxzKFxcdyspXFxzK2J1aWxkXFwvaG1cXDEvaSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBYaWFvbWkgSG9uZ21pICdudW1lcmljJyBtb2RlbHNcbiAgICAgICAgICAgIC9hbmRyb2lkLisoaG1bXFxzXFwtX10qbm90ZT9bXFxzX10qKD86XFxkXFx3KT8pXFxzK2J1aWxkL2ksICAgICAgICAgICAgICAgLy8gWGlhb21pIEhvbmdtaVxuICAgICAgICAgICAgL2FuZHJvaWQuKyhtaVtcXHNcXC1fXSooPzpvbmV8b25lW1xcc19dcGx1c3xub3RlIGx0ZSk/W1xcc19dKig/OlxcZD9cXHc/KVtcXHNfXSooPzpwbHVzKT8pXFxzK2J1aWxkL2ksICAgIC8vIFhpYW9taSBNaVxuICAgICAgICAgICAgL2FuZHJvaWQuKyhyZWRtaVtcXHNcXC1fXSooPzpub3RlKT8oPzpbXFxzX10qW1xcd1xcc10rKSlcXHMrYnVpbGQvaSAgICAgICAvLyBSZWRtaSBQaG9uZXNcbiAgICAgICAgICAgIF0sIFtbTU9ERUwsIC9fL2csICcgJ10sIFtWRU5ET1IsICdYaWFvbWknXSwgW1RZUEUsIE1PQklMRV1dLCBbXG4gICAgICAgICAgICAvYW5kcm9pZC4rKG1pW1xcc1xcLV9dKig/OnBhZCkoPzpbXFxzX10qW1xcd1xcc10rKSlcXHMrYnVpbGQvaSAgICAgICAgICAgIC8vIE1pIFBhZCB0YWJsZXRzXG4gICAgICAgICAgICBdLFtbTU9ERUwsIC9fL2csICcgJ10sIFtWRU5ET1IsICdYaWFvbWknXSwgW1RZUEUsIFRBQkxFVF1dLCBbXG4gICAgICAgICAgICAvYW5kcm9pZC4rO1xccyhtWzEtNV1cXHNub3RlKVxcc2J1aWxkL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1laXp1IFRhYmxldFxuICAgICAgICAgICAgXSwgW01PREVMLCBbVkVORE9SLCAnTWVpenUnXSwgW1RZUEUsIFRBQkxFVF1dLCBbXG5cbiAgICAgICAgICAgIC9hbmRyb2lkLithMDAwKDEpXFxzK2J1aWxkL2ksICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE9uZVBsdXNcbiAgICAgICAgICAgIC9hbmRyb2lkLitvbmVwbHVzXFxzKGFcXGR7NH0pXFxzK2J1aWxkL2lcbiAgICAgICAgICAgIF0sIFtNT0RFTCwgW1ZFTkRPUiwgJ09uZVBsdXMnXSwgW1RZUEUsIE1PQklMRV1dLCBbXG5cbiAgICAgICAgICAgIC9hbmRyb2lkLitbO1xcL11cXHMqKFJDVFtcXGRcXHddKylcXHMrYnVpbGQvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSQ0EgVGFibGV0c1xuICAgICAgICAgICAgXSwgW01PREVMLCBbVkVORE9SLCAnUkNBJ10sIFtUWVBFLCBUQUJMRVRdXSwgW1xuXG4gICAgICAgICAgICAvYW5kcm9pZC4rWztcXC9cXHNdKyhWZW51ZVtcXGRcXHNdezIsN30pXFxzK2J1aWxkL2kgICAgICAgICAgICAgICAgICAgICAgLy8gRGVsbCBWZW51ZSBUYWJsZXRzXG4gICAgICAgICAgICBdLCBbTU9ERUwsIFtWRU5ET1IsICdEZWxsJ10sIFtUWVBFLCBUQUJMRVRdXSwgW1xuXG4gICAgICAgICAgICAvYW5kcm9pZC4rWztcXC9dXFxzKihRW1R8TV1bXFxkXFx3XSspXFxzK2J1aWxkL2kgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVmVyaXpvbiBUYWJsZXRcbiAgICAgICAgICAgIF0sIFtNT0RFTCwgW1ZFTkRPUiwgJ1Zlcml6b24nXSwgW1RZUEUsIFRBQkxFVF1dLCBbXG5cbiAgICAgICAgICAgIC9hbmRyb2lkLitbO1xcL11cXHMrKEJhcm5lc1smXFxzXStOb2JsZVxccyt8Qk5bUlRdKShWPy4qKVxccytidWlsZC9pICAgICAvLyBCYXJuZXMgJiBOb2JsZSBUYWJsZXRcbiAgICAgICAgICAgIF0sIFtbVkVORE9SLCAnQmFybmVzICYgTm9ibGUnXSwgTU9ERUwsIFtUWVBFLCBUQUJMRVRdXSwgW1xuXG4gICAgICAgICAgICAvYW5kcm9pZC4rWztcXC9dXFxzKyhUTVxcZHszfS4qXFxiKVxccytidWlsZC9pICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQmFybmVzICYgTm9ibGUgVGFibGV0XG4gICAgICAgICAgICBdLCBbTU9ERUwsIFtWRU5ET1IsICdOdVZpc2lvbiddLCBbVFlQRSwgVEFCTEVUXV0sIFtcblxuICAgICAgICAgICAgL2FuZHJvaWQuKztcXHMoazg4KVxcc2J1aWxkL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFpURSBLIFNlcmllcyBUYWJsZXRcbiAgICAgICAgICAgIF0sIFtNT0RFTCwgW1ZFTkRPUiwgJ1pURSddLCBbVFlQRSwgVEFCTEVUXV0sIFtcblxuICAgICAgICAgICAgL2FuZHJvaWQuK1s7XFwvXVxccyooZ2VuXFxkezN9KVxccytidWlsZC4qNDloL2kgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3dpc3MgR0VOIE1vYmlsZVxuICAgICAgICAgICAgXSwgW01PREVMLCBbVkVORE9SLCAnU3dpc3MnXSwgW1RZUEUsIE1PQklMRV1dLCBbXG5cbiAgICAgICAgICAgIC9hbmRyb2lkLitbO1xcL11cXHMqKHp1clxcZHszfSlcXHMrYnVpbGQvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN3aXNzIFpVUiBUYWJsZXRcbiAgICAgICAgICAgIF0sIFtNT0RFTCwgW1ZFTkRPUiwgJ1N3aXNzJ10sIFtUWVBFLCBUQUJMRVRdXSwgW1xuXG4gICAgICAgICAgICAvYW5kcm9pZC4rWztcXC9dXFxzKigoWmVraSk/VEIuKlxcYilcXHMrYnVpbGQvaSAgICAgICAgICAgICAgICAgICAgICAgICAvLyBaZWtpIFRhYmxldHNcbiAgICAgICAgICAgIF0sIFtNT0RFTCwgW1ZFTkRPUiwgJ1pla2knXSwgW1RZUEUsIFRBQkxFVF1dLCBbXG5cbiAgICAgICAgICAgIC8oYW5kcm9pZCkuK1s7XFwvXVxccysoW1lSXVxcZHsyfSlcXHMrYnVpbGQvaSxcbiAgICAgICAgICAgIC9hbmRyb2lkLitbO1xcL11cXHMrKERyYWdvbltcXC1cXHNdK1RvdWNoXFxzK3xEVCkoXFx3ezV9KVxcc2J1aWxkL2kgICAgICAgIC8vIERyYWdvbiBUb3VjaCBUYWJsZXRcbiAgICAgICAgICAgIF0sIFtbVkVORE9SLCAnRHJhZ29uIFRvdWNoJ10sIE1PREVMLCBbVFlQRSwgVEFCTEVUXV0sIFtcblxuICAgICAgICAgICAgL2FuZHJvaWQuK1s7XFwvXVxccyooTlMtP1xcd3swLDl9KVxcc2J1aWxkL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSW5zaWduaWEgVGFibGV0c1xuICAgICAgICAgICAgXSwgW01PREVMLCBbVkVORE9SLCAnSW5zaWduaWEnXSwgW1RZUEUsIFRBQkxFVF1dLCBbXG5cbiAgICAgICAgICAgIC9hbmRyb2lkLitbO1xcL11cXHMqKChOWHxOZXh0KS0/XFx3ezAsOX0pXFxzK2J1aWxkL2kgICAgICAgICAgICAgICAgICAgIC8vIE5leHRCb29rIFRhYmxldHNcbiAgICAgICAgICAgIF0sIFtNT0RFTCwgW1ZFTkRPUiwgJ05leHRCb29rJ10sIFtUWVBFLCBUQUJMRVRdXSwgW1xuXG4gICAgICAgICAgICAvYW5kcm9pZC4rWztcXC9dXFxzKihYdHJlbWVcXF8pPyhWKDFbMDQ1XXwyWzAxNV18MzB8NDB8NjB8N1swNV18OTApKVxccytidWlsZC9pXG4gICAgICAgICAgICBdLCBbW1ZFTkRPUiwgJ1ZvaWNlJ10sIE1PREVMLCBbVFlQRSwgTU9CSUxFXV0sIFsgICAgICAgICAgICAgICAgICAgIC8vIFZvaWNlIFh0cmVtZSBQaG9uZXNcblxuICAgICAgICAgICAgL2FuZHJvaWQuK1s7XFwvXVxccyooTFZURUxcXC0pPyhWMVsxMl0pXFxzK2J1aWxkL2kgICAgICAgICAgICAgICAgICAgICAvLyBMdlRlbCBQaG9uZXNcbiAgICAgICAgICAgIF0sIFtbVkVORE9SLCAnTHZUZWwnXSwgTU9ERUwsIFtUWVBFLCBNT0JJTEVdXSwgW1xuXG4gICAgICAgICAgICAvYW5kcm9pZC4rWztcXC9dXFxzKihWKDEwME1EfDcwME5BfDcwMTF8OTE3RykuKlxcYilcXHMrYnVpbGQvaSAgICAgICAgICAvLyBFbnZpemVuIFRhYmxldHNcbiAgICAgICAgICAgIF0sIFtNT0RFTCwgW1ZFTkRPUiwgJ0Vudml6ZW4nXSwgW1RZUEUsIFRBQkxFVF1dLCBbXG5cbiAgICAgICAgICAgIC9hbmRyb2lkLitbO1xcL11cXHMqKExlW1xcc1xcLV0rUGFuKVtcXHNcXC1dKyhcXHd7MSw5fSlcXHMrYnVpbGQvaSAgICAgICAgICAvLyBMZSBQYW4gVGFibGV0c1xuICAgICAgICAgICAgXSwgW1ZFTkRPUiwgTU9ERUwsIFtUWVBFLCBUQUJMRVRdXSwgW1xuXG4gICAgICAgICAgICAvYW5kcm9pZC4rWztcXC9dXFxzKihUcmlvW1xcc1xcLV0qLiopXFxzK2J1aWxkL2kgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTWFjaFNwZWVkIFRhYmxldHNcbiAgICAgICAgICAgIF0sIFtNT0RFTCwgW1ZFTkRPUiwgJ01hY2hTcGVlZCddLCBbVFlQRSwgVEFCTEVUXV0sIFtcblxuICAgICAgICAgICAgL2FuZHJvaWQuK1s7XFwvXVxccyooVHJpbml0eSlbXFwtXFxzXSooVFxcZHszfSlcXHMrYnVpbGQvaSAgICAgICAgICAgICAgICAvLyBUcmluaXR5IFRhYmxldHNcbiAgICAgICAgICAgIF0sIFtWRU5ET1IsIE1PREVMLCBbVFlQRSwgVEFCTEVUXV0sIFtcblxuICAgICAgICAgICAgL2FuZHJvaWQuK1s7XFwvXVxccypUVV8oMTQ5MSlcXHMrYnVpbGQvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSb3RvciBUYWJsZXRzXG4gICAgICAgICAgICBdLCBbTU9ERUwsIFtWRU5ET1IsICdSb3RvciddLCBbVFlQRSwgVEFCTEVUXV0sIFtcblxuICAgICAgICAgICAgL2FuZHJvaWQuKyhLUyguKykpXFxzK2J1aWxkL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQW1hem9uIEtpbmRsZSBUYWJsZXRzXG4gICAgICAgICAgICBdLCBbTU9ERUwsIFtWRU5ET1IsICdBbWF6b24nXSwgW1RZUEUsIFRBQkxFVF1dLCBbXG5cbiAgICAgICAgICAgIC9hbmRyb2lkLisoR2lnYXNldClbXFxzXFwtXSsoUVxcd3sxLDl9KVxccytidWlsZC9pICAgICAgICAgICAgICAgICAgICAgIC8vIEdpZ2FzZXQgVGFibGV0c1xuICAgICAgICAgICAgXSwgW1ZFTkRPUiwgTU9ERUwsIFtUWVBFLCBUQUJMRVRdXSwgW1xuXG4gICAgICAgICAgICAvXFxzKHRhYmxldHx0YWIpWztcXC9dL2ksICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVW5pZGVudGlmaWFibGUgVGFibGV0XG4gICAgICAgICAgICAvXFxzKG1vYmlsZSkoPzpbO1xcL118XFxzc2FmYXJpKS9pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFVuaWRlbnRpZmlhYmxlIE1vYmlsZVxuICAgICAgICAgICAgXSwgW1tUWVBFLCB1dGlsLmxvd2VyaXplXSwgVkVORE9SLCBNT0RFTF0sIFtcblxuICAgICAgICAgICAgLyhhbmRyb2lkW1xcd1xcLlxcc1xcLV17MCw5fSk7LitidWlsZC9pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gR2VuZXJpYyBBbmRyb2lkIERldmljZVxuICAgICAgICAgICAgXSwgW01PREVMLCBbVkVORE9SLCAnR2VuZXJpYyddXVxuXG5cbiAgICAgICAgLyovLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgICAgICAgICAgLy8gVE9ETzogbW92ZSB0byBzdHJpbmcgbWFwXG4gICAgICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICAgICAgICAgIC8oQzY2MDMpL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU29ueSBYcGVyaWEgWiBDNjYwM1xuICAgICAgICAgICAgXSwgW1tNT0RFTCwgJ1hwZXJpYSBaIEM2NjAzJ10sIFtWRU5ET1IsICdTb255J10sIFtUWVBFLCBNT0JJTEVdXSwgW1xuICAgICAgICAgICAgLyhDNjkwMykvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTb255IFhwZXJpYSBaIDFcbiAgICAgICAgICAgIF0sIFtbTU9ERUwsICdYcGVyaWEgWiAxJ10sIFtWRU5ET1IsICdTb255J10sIFtUWVBFLCBNT0JJTEVdXSwgW1xuXG4gICAgICAgICAgICAvKFNNLUc5MDBbRnxIXSkvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNhbXN1bmcgR2FsYXh5IFM1XG4gICAgICAgICAgICBdLCBbW01PREVMLCAnR2FsYXh5IFM1J10sIFtWRU5ET1IsICdTYW1zdW5nJ10sIFtUWVBFLCBNT0JJTEVdXSwgW1xuICAgICAgICAgICAgLyhTTS1HNzEwMikvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTYW1zdW5nIEdhbGF4eSBHcmFuZCAyXG4gICAgICAgICAgICBdLCBbW01PREVMLCAnR2FsYXh5IEdyYW5kIDInXSwgW1ZFTkRPUiwgJ1NhbXN1bmcnXSwgW1RZUEUsIE1PQklMRV1dLCBbXG4gICAgICAgICAgICAvKFNNLUc1MzBIKS9pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNhbXN1bmcgR2FsYXh5IEdyYW5kIFByaW1lXG4gICAgICAgICAgICBdLCBbW01PREVMLCAnR2FsYXh5IEdyYW5kIFByaW1lJ10sIFtWRU5ET1IsICdTYW1zdW5nJ10sIFtUWVBFLCBNT0JJTEVdXSwgW1xuICAgICAgICAgICAgLyhTTS1HMzEzSFopL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTYW1zdW5nIEdhbGF4eSBWXG4gICAgICAgICAgICBdLCBbW01PREVMLCAnR2FsYXh5IFYnXSwgW1ZFTkRPUiwgJ1NhbXN1bmcnXSwgW1RZUEUsIE1PQklMRV1dLCBbXG4gICAgICAgICAgICAvKFNNLVQ4MDUpL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNhbXN1bmcgR2FsYXh5IFRhYiBTIDEwLjVcbiAgICAgICAgICAgIF0sIFtbTU9ERUwsICdHYWxheHkgVGFiIFMgMTAuNSddLCBbVkVORE9SLCAnU2Ftc3VuZyddLCBbVFlQRSwgVEFCTEVUXV0sIFtcbiAgICAgICAgICAgIC8oU00tRzgwMEYpL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2Ftc3VuZyBHYWxheHkgUzUgTWluaVxuICAgICAgICAgICAgXSwgW1tNT0RFTCwgJ0dhbGF4eSBTNSBNaW5pJ10sIFtWRU5ET1IsICdTYW1zdW5nJ10sIFtUWVBFLCBNT0JJTEVdXSwgW1xuICAgICAgICAgICAgLyhTTS1UMzExKS9pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTYW1zdW5nIEdhbGF4eSBUYWIgMyA4LjBcbiAgICAgICAgICAgIF0sIFtbTU9ERUwsICdHYWxheHkgVGFiIDMgOC4wJ10sIFtWRU5ET1IsICdTYW1zdW5nJ10sIFtUWVBFLCBUQUJMRVRdXSwgW1xuXG4gICAgICAgICAgICAvKFQzQykvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFkdmFuIFZhbmRyb2lkIFQzQ1xuICAgICAgICAgICAgXSwgW01PREVMLCBbVkVORE9SLCAnQWR2YW4nXSwgW1RZUEUsIFRBQkxFVF1dLCBbXG4gICAgICAgICAgICAvKEFEVkFOIFQxSlxcKykvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBZHZhbiBWYW5kcm9pZCBUMUorXG4gICAgICAgICAgICBdLCBbW01PREVMLCAnVmFuZHJvaWQgVDFKKyddLCBbVkVORE9SLCAnQWR2YW4nXSwgW1RZUEUsIFRBQkxFVF1dLCBbXG4gICAgICAgICAgICAvKEFEVkFOIFM0QSkvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFkdmFuIFZhbmRyb2lkIFM0QVxuICAgICAgICAgICAgXSwgW1tNT0RFTCwgJ1ZhbmRyb2lkIFM0QSddLCBbVkVORE9SLCAnQWR2YW4nXSwgW1RZUEUsIE1PQklMRV1dLCBbXG5cbiAgICAgICAgICAgIC8oVjk3Mk0pL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gWlRFIFY5NzJNXG4gICAgICAgICAgICBdLCBbTU9ERUwsIFtWRU5ET1IsICdaVEUnXSwgW1RZUEUsIE1PQklMRV1dLCBbXG5cbiAgICAgICAgICAgIC8oaS1tb2JpbGUpXFxzKElRXFxzW1xcZFxcLl0rKS9pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGktbW9iaWxlIElRXG4gICAgICAgICAgICBdLCBbVkVORE9SLCBNT0RFTCwgW1RZUEUsIE1PQklMRV1dLCBbXG4gICAgICAgICAgICAvKElRNi4zKS9pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGktbW9iaWxlIElRIElRIDYuM1xuICAgICAgICAgICAgXSwgW1tNT0RFTCwgJ0lRIDYuMyddLCBbVkVORE9SLCAnaS1tb2JpbGUnXSwgW1RZUEUsIE1PQklMRV1dLCBbXG4gICAgICAgICAgICAvKGktbW9iaWxlKVxccyhpLXN0eWxlXFxzW1xcZFxcLl0rKS9pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpLW1vYmlsZSBpLVNUWUxFXG4gICAgICAgICAgICBdLCBbVkVORE9SLCBNT0RFTCwgW1RZUEUsIE1PQklMRV1dLCBbXG4gICAgICAgICAgICAvKGktU1RZTEUyLjEpL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGktbW9iaWxlIGktU1RZTEUgMi4xXG4gICAgICAgICAgICBdLCBbW01PREVMLCAnaS1TVFlMRSAyLjEnXSwgW1ZFTkRPUiwgJ2ktbW9iaWxlJ10sIFtUWVBFLCBNT0JJTEVdXSwgW1xuXG4gICAgICAgICAgICAvKG1vYmlpc3RhciB0b3VjaCBMQUkgNTEyKS9pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1vYmlpc3RhciB0b3VjaCBMQUkgNTEyXG4gICAgICAgICAgICBdLCBbW01PREVMLCAnVG91Y2ggTEFJIDUxMiddLCBbVkVORE9SLCAnbW9iaWlzdGFyJ10sIFtUWVBFLCBNT0JJTEVdXSwgW1xuXG4gICAgICAgICAgICAvLy8vLy8vLy8vLy8vXG4gICAgICAgICAgICAvLyBFTkQgVE9ET1xuICAgICAgICAgICAgLy8vLy8vLy8vLy8qL1xuXG4gICAgICAgIF0sXG5cbiAgICAgICAgZW5naW5lIDogW1tcblxuICAgICAgICAgICAgL3dpbmRvd3MuK1xcc2VkZ2VcXC8oW1xcd1xcLl0rKS9pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRWRnZUhUTUxcbiAgICAgICAgICAgIF0sIFtWRVJTSU9OLCBbTkFNRSwgJ0VkZ2VIVE1MJ11dLCBbXG5cbiAgICAgICAgICAgIC8ocHJlc3RvKVxcLyhbXFx3XFwuXSspL2ksICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUHJlc3RvXG4gICAgICAgICAgICAvKHdlYmtpdHx0cmlkZW50fG5ldGZyb250fG5ldHN1cmZ8YW1heWF8bHlueHx3M20pXFwvKFtcXHdcXC5dKykvaSwgICAgIC8vIFdlYktpdC9UcmlkZW50L05ldEZyb250L05ldFN1cmYvQW1heWEvTHlueC93M21cbiAgICAgICAgICAgIC8oa2h0bWx8dGFzbWFufGxpbmtzKVtcXC9cXHNdXFwoPyhbXFx3XFwuXSspL2ksICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBLSFRNTC9UYXNtYW4vTGlua3NcbiAgICAgICAgICAgIC8oaWNhYilbXFwvXFxzXShbMjNdXFwuW1xcZFxcLl0rKS9pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpQ2FiXG4gICAgICAgICAgICBdLCBbTkFNRSwgVkVSU0lPTl0sIFtcblxuICAgICAgICAgICAgL3J2XFw6KFtcXHdcXC5dezEsOX0pLisoZ2Vja28pL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBHZWNrb1xuICAgICAgICAgICAgXSwgW1ZFUlNJT04sIE5BTUVdXG4gICAgICAgIF0sXG5cbiAgICAgICAgb3MgOiBbW1xuXG4gICAgICAgICAgICAvLyBXaW5kb3dzIGJhc2VkXG4gICAgICAgICAgICAvbWljcm9zb2Z0XFxzKHdpbmRvd3MpXFxzKHZpc3RhfHhwKS9pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gV2luZG93cyAoaVR1bmVzKVxuICAgICAgICAgICAgXSwgW05BTUUsIFZFUlNJT05dLCBbXG4gICAgICAgICAgICAvKHdpbmRvd3MpXFxzbnRcXHM2XFwuMjtcXHMoYXJtKS9pLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBXaW5kb3dzIFJUXG4gICAgICAgICAgICAvKHdpbmRvd3NcXHNwaG9uZSg/Olxcc29zKSopW1xcc1xcL10/KFtcXGRcXC5cXHNcXHddKikvaSwgICAgICAgICAgICAgICAgICAgLy8gV2luZG93cyBQaG9uZVxuICAgICAgICAgICAgLyh3aW5kb3dzXFxzbW9iaWxlfHdpbmRvd3MpW1xcc1xcL10/KFtudGNlXFxkXFwuXFxzXStcXHcpL2lcbiAgICAgICAgICAgIF0sIFtOQU1FLCBbVkVSU0lPTiwgbWFwcGVyLnN0ciwgbWFwcy5vcy53aW5kb3dzLnZlcnNpb25dXSwgW1xuICAgICAgICAgICAgLyh3aW4oPz0zfDl8bil8d2luXFxzOXhcXHMpKFtudFxcZFxcLl0rKS9pXG4gICAgICAgICAgICBdLCBbW05BTUUsICdXaW5kb3dzJ10sIFtWRVJTSU9OLCBtYXBwZXIuc3RyLCBtYXBzLm9zLndpbmRvd3MudmVyc2lvbl1dLCBbXG5cbiAgICAgICAgICAgIC8vIE1vYmlsZS9FbWJlZGRlZCBPU1xuICAgICAgICAgICAgL1xcKChiYikoMTApOy9pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQmxhY2tCZXJyeSAxMFxuICAgICAgICAgICAgXSwgW1tOQU1FLCAnQmxhY2tCZXJyeSddLCBWRVJTSU9OXSwgW1xuICAgICAgICAgICAgLyhibGFja2JlcnJ5KVxcdypcXC8/KFtcXHdcXC5dKikvaSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQmxhY2tiZXJyeVxuICAgICAgICAgICAgLyh0aXplbilbXFwvXFxzXShbXFx3XFwuXSspL2ksICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGl6ZW5cbiAgICAgICAgICAgIC8oYW5kcm9pZHx3ZWJvc3xwYWxtXFxzb3N8cW54fGJhZGF8cmltXFxzdGFibGV0XFxzb3N8bWVlZ298Y29udGlraSlbXFwvXFxzLV0/KFtcXHdcXC5dKikvaSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQW5kcm9pZC9XZWJPUy9QYWxtL1FOWC9CYWRhL1JJTS9NZWVHby9Db250aWtpXG4gICAgICAgICAgICAvbGludXg7Lisoc2FpbGZpc2gpOy9pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNhaWxmaXNoIE9TXG4gICAgICAgICAgICBdLCBbTkFNRSwgVkVSU0lPTl0sIFtcbiAgICAgICAgICAgIC8oc3ltYmlhblxccz9vc3xzeW1ib3N8czYwKD89OykpW1xcL1xccy1dPyhbXFx3XFwuXSopL2kgICAgICAgICAgICAgICAgICAvLyBTeW1iaWFuXG4gICAgICAgICAgICBdLCBbW05BTUUsICdTeW1iaWFuJ10sIFZFUlNJT05dLCBbXG4gICAgICAgICAgICAvXFwoKHNlcmllczQwKTsvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTZXJpZXMgNDBcbiAgICAgICAgICAgIF0sIFtOQU1FXSwgW1xuICAgICAgICAgICAgL21vemlsbGEuK1xcKG1vYmlsZTsuK2dlY2tvLitmaXJlZm94L2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRmlyZWZveCBPU1xuICAgICAgICAgICAgXSwgW1tOQU1FLCAnRmlyZWZveCBPUyddLCBWRVJTSU9OXSwgW1xuXG4gICAgICAgICAgICAvLyBDb25zb2xlXG4gICAgICAgICAgICAvKG5pbnRlbmRvfHBsYXlzdGF0aW9uKVxccyhbd2lkczM0cG9ydGFibGV2dV0rKS9pLCAgICAgICAgICAgICAgICAgICAvLyBOaW50ZW5kby9QbGF5c3RhdGlvblxuXG4gICAgICAgICAgICAvLyBHTlUvTGludXggYmFzZWRcbiAgICAgICAgICAgIC8obWludClbXFwvXFxzXFwoXT8oXFx3KikvaSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1pbnRcbiAgICAgICAgICAgIC8obWFnZWlhfHZlY3RvcmxpbnV4KVs7XFxzXS9pLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1hZ2VpYS9WZWN0b3JMaW51eFxuICAgICAgICAgICAgLyhqb2xpfFtreGxuXT91YnVudHV8ZGViaWFufHN1c2V8b3BlbnN1c2V8Z2VudG9vfCg/PVxccylhcmNofHNsYWNrd2FyZXxmZWRvcmF8bWFuZHJpdmF8Y2VudG9zfHBjbGludXhvc3xyZWRoYXR8emVud2Fsa3xsaW5wdXMpW1xcL1xccy1dPyg/IWNocm9tKShbXFx3XFwuLV0qKS9pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBKb2xpL1VidW50dS9EZWJpYW4vU1VTRS9HZW50b28vQXJjaC9TbGFja3dhcmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRmVkb3JhL01hbmRyaXZhL0NlbnRPUy9QQ0xpbnV4T1MvUmVkSGF0L1plbndhbGsvTGlucHVzXG4gICAgICAgICAgICAvKGh1cmR8bGludXgpXFxzPyhbXFx3XFwuXSopL2ksICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEh1cmQvTGludXhcbiAgICAgICAgICAgIC8oZ251KVxccz8oW1xcd1xcLl0qKS9pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gR05VXG4gICAgICAgICAgICBdLCBbTkFNRSwgVkVSU0lPTl0sIFtcblxuICAgICAgICAgICAgLyhjcm9zKVxcc1tcXHddK1xccyhbXFx3XFwuXStcXHcpL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDaHJvbWl1bSBPU1xuICAgICAgICAgICAgXSwgW1tOQU1FLCAnQ2hyb21pdW0gT1MnXSwgVkVSU0lPTl0sW1xuXG4gICAgICAgICAgICAvLyBTb2xhcmlzXG4gICAgICAgICAgICAvKHN1bm9zKVxccz8oW1xcd1xcLlxcZF0qKS9pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTb2xhcmlzXG4gICAgICAgICAgICBdLCBbW05BTUUsICdTb2xhcmlzJ10sIFZFUlNJT05dLCBbXG5cbiAgICAgICAgICAgIC8vIEJTRCBiYXNlZFxuICAgICAgICAgICAgL1xccyhbZnJlbnRvcGMtXXswLDR9YnNkfGRyYWdvbmZseSlcXHM/KFtcXHdcXC5dKikvaSAgICAgICAgICAgICAgICAgICAgLy8gRnJlZUJTRC9OZXRCU0QvT3BlbkJTRC9QQy1CU0QvRHJhZ29uRmx5XG4gICAgICAgICAgICBdLCBbTkFNRSwgVkVSU0lPTl0sW1xuXG4gICAgICAgICAgICAvKGhhaWt1KVxccyhcXHcrKS9pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSGFpa3VcbiAgICAgICAgICAgIF0sIFtOQU1FLCBWRVJTSU9OXSxbXG5cbiAgICAgICAgICAgIC9jZm5ldHdvcmtcXC8uK2Rhcndpbi9pLFxuICAgICAgICAgICAgL2lwW2hvbmVhZF17Miw0fSg/Oi4qb3NcXHMoW1xcd10rKVxcc2xpa2VcXHNtYWN8O1xcc29wZXJhKS9pICAgICAgICAgICAgIC8vIGlPU1xuICAgICAgICAgICAgXSwgW1tWRVJTSU9OLCAvXy9nLCAnLiddLCBbTkFNRSwgJ2lPUyddXSwgW1xuXG4gICAgICAgICAgICAvKG1hY1xcc29zXFxzeClcXHM/KFtcXHdcXHNcXC5dKikvaSxcbiAgICAgICAgICAgIC8obWFjaW50b3NofG1hYyg/PV9wb3dlcnBjKVxccykvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1hYyBPU1xuICAgICAgICAgICAgXSwgW1tOQU1FLCAnTWFjIE9TJ10sIFtWRVJTSU9OLCAvXy9nLCAnLiddXSwgW1xuXG4gICAgICAgICAgICAvLyBPdGhlclxuICAgICAgICAgICAgLygoPzpvcGVuKT9zb2xhcmlzKVtcXC9cXHMtXT8oW1xcd1xcLl0qKS9pLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU29sYXJpc1xuICAgICAgICAgICAgLyhhaXgpXFxzKChcXGQpKD89XFwufFxcKXxcXHMpW1xcd1xcLl0pKi9pLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQUlYXG4gICAgICAgICAgICAvKHBsYW5cXHM5fG1pbml4fGJlb3N8b3NcXC8yfGFtaWdhb3N8bW9ycGhvc3xyaXNjXFxzb3N8b3BlbnZtcykvaSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUGxhbjkvTWluaXgvQmVPUy9PUzIvQW1pZ2FPUy9Nb3JwaE9TL1JJU0NPUy9PcGVuVk1TXG4gICAgICAgICAgICAvKHVuaXgpXFxzPyhbXFx3XFwuXSopL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFVOSVhcbiAgICAgICAgICAgIF0sIFtOQU1FLCBWRVJTSU9OXVxuICAgICAgICBdXG4gICAgfTtcblxuXG4gICAgLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBDb25zdHJ1Y3RvclxuICAgIC8vLy8vLy8vLy8vLy8vLy9cbiAgICAvKlxuICAgIHZhciBCcm93c2VyID0gZnVuY3Rpb24gKG5hbWUsIHZlcnNpb24pIHtcbiAgICAgICAgdGhpc1tOQU1FXSA9IG5hbWU7XG4gICAgICAgIHRoaXNbVkVSU0lPTl0gPSB2ZXJzaW9uO1xuICAgIH07XG4gICAgdmFyIENQVSA9IGZ1bmN0aW9uIChhcmNoKSB7XG4gICAgICAgIHRoaXNbQVJDSElURUNUVVJFXSA9IGFyY2g7XG4gICAgfTtcbiAgICB2YXIgRGV2aWNlID0gZnVuY3Rpb24gKHZlbmRvciwgbW9kZWwsIHR5cGUpIHtcbiAgICAgICAgdGhpc1tWRU5ET1JdID0gdmVuZG9yO1xuICAgICAgICB0aGlzW01PREVMXSA9IG1vZGVsO1xuICAgICAgICB0aGlzW1RZUEVdID0gdHlwZTtcbiAgICB9O1xuICAgIHZhciBFbmdpbmUgPSBCcm93c2VyO1xuICAgIHZhciBPUyA9IEJyb3dzZXI7XG4gICAgKi9cbiAgICB2YXIgVUFQYXJzZXIgPSBmdW5jdGlvbiAodWFzdHJpbmcsIGV4dGVuc2lvbnMpIHtcblxuICAgICAgICBpZiAodHlwZW9mIHVhc3RyaW5nID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgZXh0ZW5zaW9ucyA9IHVhc3RyaW5nO1xuICAgICAgICAgICAgdWFzdHJpbmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgVUFQYXJzZXIpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFVBUGFyc2VyKHVhc3RyaW5nLCBleHRlbnNpb25zKS5nZXRSZXN1bHQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB1YSA9IHVhc3RyaW5nIHx8ICgod2luZG93ICYmIHdpbmRvdy5uYXZpZ2F0b3IgJiYgd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpID8gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQgOiBFTVBUWSk7XG4gICAgICAgIHZhciByZ3htYXAgPSBleHRlbnNpb25zID8gdXRpbC5leHRlbmQocmVnZXhlcywgZXh0ZW5zaW9ucykgOiByZWdleGVzO1xuICAgICAgICAvL3ZhciBicm93c2VyID0gbmV3IEJyb3dzZXIoKTtcbiAgICAgICAgLy92YXIgY3B1ID0gbmV3IENQVSgpO1xuICAgICAgICAvL3ZhciBkZXZpY2UgPSBuZXcgRGV2aWNlKCk7XG4gICAgICAgIC8vdmFyIGVuZ2luZSA9IG5ldyBFbmdpbmUoKTtcbiAgICAgICAgLy92YXIgb3MgPSBuZXcgT1MoKTtcblxuICAgICAgICB0aGlzLmdldEJyb3dzZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYnJvd3NlciA9IHsgbmFtZTogdW5kZWZpbmVkLCB2ZXJzaW9uOiB1bmRlZmluZWQgfTtcbiAgICAgICAgICAgIG1hcHBlci5yZ3guY2FsbChicm93c2VyLCB1YSwgcmd4bWFwLmJyb3dzZXIpO1xuICAgICAgICAgICAgYnJvd3Nlci5tYWpvciA9IHV0aWwubWFqb3IoYnJvd3Nlci52ZXJzaW9uKTsgLy8gZGVwcmVjYXRlZFxuICAgICAgICAgICAgcmV0dXJuIGJyb3dzZXI7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZ2V0Q1BVID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGNwdSA9IHsgYXJjaGl0ZWN0dXJlOiB1bmRlZmluZWQgfTtcbiAgICAgICAgICAgIG1hcHBlci5yZ3guY2FsbChjcHUsIHVhLCByZ3htYXAuY3B1KTtcbiAgICAgICAgICAgIHJldHVybiBjcHU7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZ2V0RGV2aWNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGRldmljZSA9IHsgdmVuZG9yOiB1bmRlZmluZWQsIG1vZGVsOiB1bmRlZmluZWQsIHR5cGU6IHVuZGVmaW5lZCB9O1xuICAgICAgICAgICAgbWFwcGVyLnJneC5jYWxsKGRldmljZSwgdWEsIHJneG1hcC5kZXZpY2UpO1xuICAgICAgICAgICAgcmV0dXJuIGRldmljZTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5nZXRFbmdpbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZW5naW5lID0geyBuYW1lOiB1bmRlZmluZWQsIHZlcnNpb246IHVuZGVmaW5lZCB9O1xuICAgICAgICAgICAgbWFwcGVyLnJneC5jYWxsKGVuZ2luZSwgdWEsIHJneG1hcC5lbmdpbmUpO1xuICAgICAgICAgICAgcmV0dXJuIGVuZ2luZTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5nZXRPUyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBvcyA9IHsgbmFtZTogdW5kZWZpbmVkLCB2ZXJzaW9uOiB1bmRlZmluZWQgfTtcbiAgICAgICAgICAgIG1hcHBlci5yZ3guY2FsbChvcywgdWEsIHJneG1hcC5vcyk7XG4gICAgICAgICAgICByZXR1cm4gb3M7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZ2V0UmVzdWx0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1YSAgICAgIDogdGhpcy5nZXRVQSgpLFxuICAgICAgICAgICAgICAgIGJyb3dzZXIgOiB0aGlzLmdldEJyb3dzZXIoKSxcbiAgICAgICAgICAgICAgICBlbmdpbmUgIDogdGhpcy5nZXRFbmdpbmUoKSxcbiAgICAgICAgICAgICAgICBvcyAgICAgIDogdGhpcy5nZXRPUygpLFxuICAgICAgICAgICAgICAgIGRldmljZSAgOiB0aGlzLmdldERldmljZSgpLFxuICAgICAgICAgICAgICAgIGNwdSAgICAgOiB0aGlzLmdldENQVSgpXG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmdldFVBID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHVhO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNldFVBID0gZnVuY3Rpb24gKHVhc3RyaW5nKSB7XG4gICAgICAgICAgICB1YSA9IHVhc3RyaW5nO1xuICAgICAgICAgICAgLy9icm93c2VyID0gbmV3IEJyb3dzZXIoKTtcbiAgICAgICAgICAgIC8vY3B1ID0gbmV3IENQVSgpO1xuICAgICAgICAgICAgLy9kZXZpY2UgPSBuZXcgRGV2aWNlKCk7XG4gICAgICAgICAgICAvL2VuZ2luZSA9IG5ldyBFbmdpbmUoKTtcbiAgICAgICAgICAgIC8vb3MgPSBuZXcgT1MoKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgVUFQYXJzZXIuVkVSU0lPTiA9IExJQlZFUlNJT047XG4gICAgVUFQYXJzZXIuQlJPV1NFUiA9IHtcbiAgICAgICAgTkFNRSAgICA6IE5BTUUsXG4gICAgICAgIE1BSk9SICAgOiBNQUpPUiwgLy8gZGVwcmVjYXRlZFxuICAgICAgICBWRVJTSU9OIDogVkVSU0lPTlxuICAgIH07XG4gICAgVUFQYXJzZXIuQ1BVID0ge1xuICAgICAgICBBUkNISVRFQ1RVUkUgOiBBUkNISVRFQ1RVUkVcbiAgICB9O1xuICAgIFVBUGFyc2VyLkRFVklDRSA9IHtcbiAgICAgICAgTU9ERUwgICA6IE1PREVMLFxuICAgICAgICBWRU5ET1IgIDogVkVORE9SLFxuICAgICAgICBUWVBFICAgIDogVFlQRSxcbiAgICAgICAgQ09OU09MRSA6IENPTlNPTEUsXG4gICAgICAgIE1PQklMRSAgOiBNT0JJTEUsXG4gICAgICAgIFNNQVJUVFYgOiBTTUFSVFRWLFxuICAgICAgICBUQUJMRVQgIDogVEFCTEVULFxuICAgICAgICBXRUFSQUJMRTogV0VBUkFCTEUsXG4gICAgICAgIEVNQkVEREVEOiBFTUJFRERFRFxuICAgIH07XG4gICAgVUFQYXJzZXIuRU5HSU5FID0ge1xuICAgICAgICBOQU1FICAgIDogTkFNRSxcbiAgICAgICAgVkVSU0lPTiA6IFZFUlNJT05cbiAgICB9O1xuICAgIFVBUGFyc2VyLk9TID0ge1xuICAgICAgICBOQU1FICAgIDogTkFNRSxcbiAgICAgICAgVkVSU0lPTiA6IFZFUlNJT05cbiAgICB9O1xuICAgIC8vVUFQYXJzZXIuVXRpbHMgPSB1dGlsO1xuXG4gICAgLy8vLy8vLy8vLy9cbiAgICAvLyBFeHBvcnRcbiAgICAvLy8vLy8vLy8vXG5cblxuICAgIC8vIGNoZWNrIGpzIGVudmlyb25tZW50XG4gICAgaWYgKHR5cGVvZihleHBvcnRzKSAhPT0gVU5ERUZfVFlQRSkge1xuICAgICAgICAvLyBub2RlanMgZW52XG4gICAgICAgIGlmICh0eXBlb2YgbW9kdWxlICE9PSBVTkRFRl9UWVBFICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgICAgICAgICBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBVQVBhcnNlcjtcbiAgICAgICAgfVxuICAgICAgICAvLyBUT0RPOiB0ZXN0ISEhISEhISFcbiAgICAgICAgLypcbiAgICAgICAgaWYgKHJlcXVpcmUgJiYgcmVxdWlyZS5tYWluID09PSBtb2R1bGUgJiYgcHJvY2Vzcykge1xuICAgICAgICAgICAgLy8gY2xpXG4gICAgICAgICAgICB2YXIganNvbml6ZSA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVzID0gW107XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSBpbiBhcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzLnB1c2gobmV3IFVBUGFyc2VyKGFycltpXSkuZ2V0UmVzdWx0KCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwcm9jZXNzLnN0ZG91dC53cml0ZShKU09OLnN0cmluZ2lmeShyZXMsIG51bGwsIDIpICsgJ1xcbicpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLnN0ZGluLmlzVFRZKSB7XG4gICAgICAgICAgICAgICAgLy8gdmlhIGFyZ3NcbiAgICAgICAgICAgICAgICBqc29uaXplKHByb2Nlc3MuYXJndi5zbGljZSgyKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIHZpYSBwaXBlXG4gICAgICAgICAgICAgICAgdmFyIHN0ciA9ICcnO1xuICAgICAgICAgICAgICAgIHByb2Nlc3Muc3RkaW4ub24oJ3JlYWRhYmxlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZWFkID0gcHJvY2Vzcy5zdGRpbi5yZWFkKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZWFkICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHIgKz0gcmVhZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHByb2Nlc3Muc3RkaW4ub24oJ2VuZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAganNvbml6ZShzdHIucmVwbGFjZSgvXFxuJC8sICcnKS5zcGxpdCgnXFxuJykpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICovXG4gICAgICAgIGV4cG9ydHMuVUFQYXJzZXIgPSBVQVBhcnNlcjtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyByZXF1aXJlanMgZW52IChvcHRpb25hbClcbiAgICAgICAgaWYgKHR5cGVvZihkZWZpbmUpID09PSBGVU5DX1RZUEUgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgICAgICAgZGVmaW5lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gVUFQYXJzZXI7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgIC8vIGJyb3dzZXIgZW52XG4gICAgICAgICAgICB3aW5kb3cuVUFQYXJzZXIgPSBVQVBhcnNlcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGpRdWVyeS9aZXB0byBzcGVjaWZpYyAob3B0aW9uYWwpXG4gICAgLy8gTm90ZTpcbiAgICAvLyAgIEluIEFNRCBlbnYgdGhlIGdsb2JhbCBzY29wZSBzaG91bGQgYmUga2VwdCBjbGVhbiwgYnV0IGpRdWVyeSBpcyBhbiBleGNlcHRpb24uXG4gICAgLy8gICBqUXVlcnkgYWx3YXlzIGV4cG9ydHMgdG8gZ2xvYmFsIHNjb3BlLCB1bmxlc3MgalF1ZXJ5Lm5vQ29uZmxpY3QodHJ1ZSkgaXMgdXNlZCxcbiAgICAvLyAgIGFuZCB3ZSBzaG91bGQgY2F0Y2ggdGhhdC5cbiAgICB2YXIgJCA9IHdpbmRvdyAmJiAod2luZG93LmpRdWVyeSB8fCB3aW5kb3cuWmVwdG8pO1xuICAgIGlmICh0eXBlb2YgJCAhPT0gVU5ERUZfVFlQRSkge1xuICAgICAgICB2YXIgcGFyc2VyID0gbmV3IFVBUGFyc2VyKCk7XG4gICAgICAgICQudWEgPSBwYXJzZXIuZ2V0UmVzdWx0KCk7XG4gICAgICAgICQudWEuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHBhcnNlci5nZXRVQSgpO1xuICAgICAgICB9O1xuICAgICAgICAkLnVhLnNldCA9IGZ1bmN0aW9uICh1YXN0cmluZykge1xuICAgICAgICAgICAgcGFyc2VyLnNldFVBKHVhc3RyaW5nKTtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBwYXJzZXIuZ2V0UmVzdWx0KCk7XG4gICAgICAgICAgICBmb3IgKHZhciBwcm9wIGluIHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICQudWFbcHJvcF0gPSByZXN1bHRbcHJvcF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG59KSh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JyA/IHdpbmRvdyA6IHRoaXMpO1xuIiwiLyohXG5Db3B5cmlnaHQgKEMpIDIwMTUtMjAxNyBBbmRyZWEgR2lhbW1hcmNoaSAtIEBXZWJSZWZsZWN0aW9uXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbm9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbmluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbnRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbmNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbmFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5JTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbkZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbk9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cblRIRSBTT0ZUV0FSRS5cblxuKi9cbid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gVVJMU2VhcmNoUGFyYW1zKHF1ZXJ5KSB7XG4gIHZhclxuICAgIGluZGV4LCBrZXksIHZhbHVlLFxuICAgIHBhaXJzLCBpLCBsZW5ndGgsXG4gICAgZGljdCA9IE9iamVjdC5jcmVhdGUobnVsbClcbiAgO1xuICB0aGlzW3NlY3JldF0gPSBkaWN0O1xuICBpZiAoIXF1ZXJ5KSByZXR1cm47XG4gIGlmICh0eXBlb2YgcXVlcnkgPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKHF1ZXJ5LmNoYXJBdCgwKSA9PT0gJz8nKSB7XG4gICAgICBxdWVyeSA9IHF1ZXJ5LnNsaWNlKDEpO1xuICAgIH1cbiAgICBmb3IgKFxuICAgICAgcGFpcnMgPSBxdWVyeS5zcGxpdCgnJicpLFxuICAgICAgaSA9IDAsXG4gICAgICBsZW5ndGggPSBwYWlycy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrK1xuICAgICkge1xuICAgICAgdmFsdWUgPSBwYWlyc1tpXTtcbiAgICAgIGluZGV4ID0gdmFsdWUuaW5kZXhPZignPScpO1xuICAgICAgaWYgKC0xIDwgaW5kZXgpIHtcbiAgICAgICAgYXBwZW5kVG8oXG4gICAgICAgICAgZGljdCxcbiAgICAgICAgICBkZWNvZGUodmFsdWUuc2xpY2UoMCwgaW5kZXgpKSxcbiAgICAgICAgICBkZWNvZGUodmFsdWUuc2xpY2UoaW5kZXggKyAxKSlcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUubGVuZ3RoKXtcbiAgICAgICAgYXBwZW5kVG8oXG4gICAgICAgICAgZGljdCxcbiAgICAgICAgICBkZWNvZGUodmFsdWUpLFxuICAgICAgICAgICcnXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChpc0FycmF5KHF1ZXJ5KSkge1xuICAgICAgZm9yIChcbiAgICAgICAgaSA9IDAsXG4gICAgICAgIGxlbmd0aCA9IHF1ZXJ5Lmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrXG4gICAgICApIHtcbiAgICAgICAgdmFsdWUgPSBxdWVyeVtpXTtcbiAgICAgICAgYXBwZW5kVG8oZGljdCwgdmFsdWVbMF0sIHZhbHVlWzFdKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChrZXkgaW4gcXVlcnkpIHtcbiAgICAgICAgIGFwcGVuZFRvKGRpY3QsIGtleSwgcXVlcnlba2V5XSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbnZhclxuICBpc0FycmF5ID0gQXJyYXkuaXNBcnJheSxcbiAgVVJMU2VhcmNoUGFyYW1zUHJvdG8gPSBVUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlLFxuICBmaW5kID0gL1shJ1xcKFxcKX5dfCUyMHwlMDAvZyxcbiAgcGx1cyA9IC9cXCsvZyxcbiAgcmVwbGFjZSA9IHtcbiAgICAnISc6ICclMjEnLFxuICAgIFwiJ1wiOiAnJTI3JyxcbiAgICAnKCc6ICclMjgnLFxuICAgICcpJzogJyUyOScsXG4gICAgJ34nOiAnJTdFJyxcbiAgICAnJTIwJzogJysnLFxuICAgICclMDAnOiAnXFx4MDAnXG4gIH0sXG4gIHJlcGxhY2VyID0gZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgcmV0dXJuIHJlcGxhY2VbbWF0Y2hdO1xuICB9LFxuICBzZWNyZXQgPSAnX19VUkxTZWFyY2hQYXJhbXNfXzonICsgTWF0aC5yYW5kb20oKVxuO1xuXG5mdW5jdGlvbiBhcHBlbmRUbyhkaWN0LCBuYW1lLCB2YWx1ZSkge1xuICBpZiAobmFtZSBpbiBkaWN0KSB7XG4gICAgZGljdFtuYW1lXS5wdXNoKCcnICsgdmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIGRpY3RbbmFtZV0gPSBpc0FycmF5KHZhbHVlKSA/IHZhbHVlIDogWycnICsgdmFsdWVdO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRlY29kZShzdHIpIHtcbiAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChzdHIucmVwbGFjZShwbHVzLCAnICcpKTtcbn1cblxuZnVuY3Rpb24gZW5jb2RlKHN0cikge1xuICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHN0cikucmVwbGFjZShmaW5kLCByZXBsYWNlcik7XG59XG5cblVSTFNlYXJjaFBhcmFtc1Byb3RvLmFwcGVuZCA9IGZ1bmN0aW9uIGFwcGVuZChuYW1lLCB2YWx1ZSkge1xuICBhcHBlbmRUbyh0aGlzW3NlY3JldF0sIG5hbWUsIHZhbHVlKTtcbn07XG5cblVSTFNlYXJjaFBhcmFtc1Byb3RvLmRlbGV0ZSA9IGZ1bmN0aW9uIGRlbChuYW1lKSB7XG4gIGRlbGV0ZSB0aGlzW3NlY3JldF1bbmFtZV07XG59O1xuXG5VUkxTZWFyY2hQYXJhbXNQcm90by5nZXQgPSBmdW5jdGlvbiBnZXQobmFtZSkge1xuICB2YXIgZGljdCA9IHRoaXNbc2VjcmV0XTtcbiAgcmV0dXJuIG5hbWUgaW4gZGljdCA/IGRpY3RbbmFtZV1bMF0gOiBudWxsO1xufTtcblxuVVJMU2VhcmNoUGFyYW1zUHJvdG8uZ2V0QWxsID0gZnVuY3Rpb24gZ2V0QWxsKG5hbWUpIHtcbiAgdmFyIGRpY3QgPSB0aGlzW3NlY3JldF07XG4gIHJldHVybiBuYW1lIGluIGRpY3QgPyBkaWN0W25hbWVdLnNsaWNlKDApIDogW107XG59O1xuXG5VUkxTZWFyY2hQYXJhbXNQcm90by5oYXMgPSBmdW5jdGlvbiBoYXMobmFtZSkge1xuICByZXR1cm4gbmFtZSBpbiB0aGlzW3NlY3JldF07XG59O1xuXG5VUkxTZWFyY2hQYXJhbXNQcm90by5zZXQgPSBmdW5jdGlvbiBzZXQobmFtZSwgdmFsdWUpIHtcbiAgdGhpc1tzZWNyZXRdW25hbWVdID0gWycnICsgdmFsdWVdO1xufTtcblxuVVJMU2VhcmNoUGFyYW1zUHJvdG8uZm9yRWFjaCA9IGZ1bmN0aW9uIGZvckVhY2goY2FsbGJhY2ssIHRoaXNBcmcpIHtcbiAgdmFyIGRpY3QgPSB0aGlzW3NlY3JldF07XG4gIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGRpY3QpLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xuICAgIGRpY3RbbmFtZV0uZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgY2FsbGJhY2suY2FsbCh0aGlzQXJnLCB2YWx1ZSwgbmFtZSwgdGhpcyk7XG4gICAgfSwgdGhpcyk7XG4gIH0sIHRoaXMpO1xufTtcblxuLypcblVSTFNlYXJjaFBhcmFtc1Byb3RvLnRvQm9keSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IEJsb2IoXG4gICAgW3RoaXMudG9TdHJpbmcoKV0sXG4gICAge3R5cGU6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnfVxuICApO1xufTtcbiovXG5cblVSTFNlYXJjaFBhcmFtc1Byb3RvLnRvSlNPTiA9IGZ1bmN0aW9uIHRvSlNPTigpIHtcbiAgcmV0dXJuIHt9O1xufTtcblxuVVJMU2VhcmNoUGFyYW1zUHJvdG8udG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgdmFyIGRpY3QgPSB0aGlzW3NlY3JldF0sIHF1ZXJ5ID0gW10sIGksIGtleSwgbmFtZSwgdmFsdWU7XG4gIGZvciAoa2V5IGluIGRpY3QpIHtcbiAgICBuYW1lID0gZW5jb2RlKGtleSk7XG4gICAgZm9yIChcbiAgICAgIGkgPSAwLFxuICAgICAgdmFsdWUgPSBkaWN0W2tleV07XG4gICAgICBpIDwgdmFsdWUubGVuZ3RoOyBpKytcbiAgICApIHtcbiAgICAgIHF1ZXJ5LnB1c2gobmFtZSArICc9JyArIGVuY29kZSh2YWx1ZVtpXSkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcXVlcnkuam9pbignJicpO1xufTtcblxuVVJMU2VhcmNoUGFyYW1zID0gKG1vZHVsZS5leHBvcnRzID0gZ2xvYmFsLlVSTFNlYXJjaFBhcmFtcyB8fCBVUkxTZWFyY2hQYXJhbXMpO1xuXG4oZnVuY3Rpb24gKFVSTFNlYXJjaFBhcmFtc1Byb3RvKSB7XG5cbiAgdmFyIGl0ZXJhYmxlID0gKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuICEhU3ltYm9sLml0ZXJhdG9yO1xuICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0oKSk7XG5cbiAgLy8gbW9zdGx5IHJlbGF0ZWQgdG8gaXNzdWUgIzI0XG4gIGlmICghKCdmb3JFYWNoJyBpbiBVUkxTZWFyY2hQYXJhbXNQcm90bykpIHtcbiAgICBVUkxTZWFyY2hQYXJhbXNQcm90by5mb3JFYWNoID0gZnVuY3Rpb24gZm9yRWFjaChjYWxsYmFjaywgdGhpc0FyZykge1xuICAgICAgdmFyIG5hbWVzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgIHRoaXMudG9TdHJpbmcoKVxuICAgICAgICAgIC5yZXBsYWNlKC89W1xcc1xcU10qPyg/OiZ8JCkvZywgJz0nKVxuICAgICAgICAgIC5zcGxpdCgnPScpXG4gICAgICAgICAgLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgIGlmICghbmFtZS5sZW5ndGggfHwgbmFtZSBpbiBuYW1lcykgcmV0dXJuO1xuICAgICAgICAgICAgKG5hbWVzW25hbWVdID0gdGhpcy5nZXRBbGwobmFtZSkpLmZvckVhY2goZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzQXJnLCB2YWx1ZSwgbmFtZSwgdGhpcyk7XG4gICAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgICB9LCB0aGlzKTtcbiAgICB9O1xuICB9XG5cbiAgaWYgKCEoJ2tleXMnIGluIFVSTFNlYXJjaFBhcmFtc1Byb3RvKSkge1xuICAgIFVSTFNlYXJjaFBhcmFtc1Byb3RvLmtleXMgPSBmdW5jdGlvbiBrZXlzKCkge1xuICAgICAgdmFyIGl0ZW1zID0gW107XG4gICAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHsgaXRlbXMucHVzaChuYW1lKTsgfSk7XG4gICAgICB2YXIgaXRlcmF0b3IgPSB7XG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciB2YWx1ZSA9IGl0ZW1zLnNoaWZ0KCk7XG4gICAgICAgICAgcmV0dXJuIHtkb25lOiB2YWx1ZSA9PT0gdW5kZWZpbmVkLCB2YWx1ZTogdmFsdWV9O1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgICAgaXRlcmF0b3JbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBpdGVyYXRvcjtcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGl0ZXJhdG9yO1xuICAgIH07XG4gIH1cblxuICBpZiAoISgndmFsdWVzJyBpbiBVUkxTZWFyY2hQYXJhbXNQcm90bykpIHtcbiAgICBVUkxTZWFyY2hQYXJhbXNQcm90by52YWx1ZXMgPSBmdW5jdGlvbiB2YWx1ZXMoKSB7XG4gICAgICB2YXIgaXRlbXMgPSBbXTtcbiAgICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkgeyBpdGVtcy5wdXNoKHZhbHVlKTsgfSk7XG4gICAgICB2YXIgaXRlcmF0b3IgPSB7XG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciB2YWx1ZSA9IGl0ZW1zLnNoaWZ0KCk7XG4gICAgICAgICAgcmV0dXJuIHtkb25lOiB2YWx1ZSA9PT0gdW5kZWZpbmVkLCB2YWx1ZTogdmFsdWV9O1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgICAgaXRlcmF0b3JbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBpdGVyYXRvcjtcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGl0ZXJhdG9yO1xuICAgIH07XG4gIH1cblxuICBpZiAoISgnZW50cmllcycgaW4gVVJMU2VhcmNoUGFyYW1zUHJvdG8pKSB7XG4gICAgVVJMU2VhcmNoUGFyYW1zUHJvdG8uZW50cmllcyA9IGZ1bmN0aW9uIGVudHJpZXMoKSB7XG4gICAgICB2YXIgaXRlbXMgPSBbXTtcbiAgICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkgeyBpdGVtcy5wdXNoKFtuYW1lLCB2YWx1ZV0pOyB9KTtcbiAgICAgIHZhciBpdGVyYXRvciA9IHtcbiAgICAgICAgbmV4dDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIHZhbHVlID0gaXRlbXMuc2hpZnQoKTtcbiAgICAgICAgICByZXR1cm4ge2RvbmU6IHZhbHVlID09PSB1bmRlZmluZWQsIHZhbHVlOiB2YWx1ZX07XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgICBpdGVyYXRvcltTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIGl0ZXJhdG9yO1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaXRlcmF0b3I7XG4gICAgfTtcbiAgfVxuXG4gIGlmIChpdGVyYWJsZSAmJiAhKFN5bWJvbC5pdGVyYXRvciBpbiBVUkxTZWFyY2hQYXJhbXNQcm90bykpIHtcbiAgICBVUkxTZWFyY2hQYXJhbXNQcm90b1tTeW1ib2wuaXRlcmF0b3JdID0gVVJMU2VhcmNoUGFyYW1zUHJvdG8uZW50cmllcztcbiAgfVxuXG4gIGlmICghKCdzb3J0JyBpbiBVUkxTZWFyY2hQYXJhbXNQcm90bykpIHtcbiAgICBVUkxTZWFyY2hQYXJhbXNQcm90by5zb3J0ID0gZnVuY3Rpb24gc29ydCgpIHtcbiAgICAgIHZhclxuICAgICAgICBlbnRyaWVzID0gdGhpcy5lbnRyaWVzKCksXG4gICAgICAgIGVudHJ5ID0gZW50cmllcy5uZXh0KCksXG4gICAgICAgIGRvbmUgPSBlbnRyeS5kb25lLFxuICAgICAgICBrZXlzID0gW10sXG4gICAgICAgIHZhbHVlcyA9IE9iamVjdC5jcmVhdGUobnVsbCksXG4gICAgICAgIGksIGtleSwgdmFsdWVcbiAgICAgIDtcbiAgICAgIHdoaWxlICghZG9uZSkge1xuICAgICAgICB2YWx1ZSA9IGVudHJ5LnZhbHVlO1xuICAgICAgICBrZXkgPSB2YWx1ZVswXTtcbiAgICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgICAgIGlmICghKGtleSBpbiB2YWx1ZXMpKSB7XG4gICAgICAgICAgdmFsdWVzW2tleV0gPSBbXTtcbiAgICAgICAgfVxuICAgICAgICB2YWx1ZXNba2V5XS5wdXNoKHZhbHVlWzFdKTtcbiAgICAgICAgZW50cnkgPSBlbnRyaWVzLm5leHQoKTtcbiAgICAgICAgZG9uZSA9IGVudHJ5LmRvbmU7XG4gICAgICB9XG4gICAgICAvLyBub3QgdGhlIGNoYW1waW9uIGluIGVmZmljaWVuY3lcbiAgICAgIC8vIGJ1dCB0aGVzZSB0d28gYml0cyBqdXN0IGRvIHRoZSBqb2JcbiAgICAgIGtleXMuc29ydCgpO1xuICAgICAgZm9yIChpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5kZWxldGUoa2V5c1tpXSk7XG4gICAgICB9XG4gICAgICBmb3IgKGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBrZXkgPSBrZXlzW2ldO1xuICAgICAgICB0aGlzLmFwcGVuZChrZXksIHZhbHVlc1trZXldLnNoaWZ0KCkpO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxufShVUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlKSk7XG4iLCIvKiBnbG9iYWxzIF9fd2VicGFja19hbWRfb3B0aW9uc19fICovXHJcbm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX2FtZF9vcHRpb25zX187XHJcbiIsInZhciBnO1xyXG5cclxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcclxuZyA9IChmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gdGhpcztcclxufSkoKTtcclxuXHJcbnRyeSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXHJcblx0ZyA9IGcgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpIHx8ICgxLCBldmFsKShcInRoaXNcIik7XHJcbn0gY2F0Y2ggKGUpIHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxyXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xyXG59XHJcblxyXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXHJcbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXHJcbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZztcclxuIiwiY29uc3QgTW9kdWxlcyA9IHtcbiAgQW5jaG9yc01lbnU6IHJlcXVpcmUoXCIuL21vZHVsZXMvQW5jaG9yc01lbnVcIikuZGVmYXVsdCxcbiAgRmlsdGVyczogcmVxdWlyZShcIi4vbW9kdWxlcy9GaWx0ZXJzXCIpLmRlZmF1bHQsXG4gIFNpdGVIZWFkZXI6IHJlcXVpcmUoXCIuL21vZHVsZXMvU2l0ZUhlYWRlclwiKS5kZWZhdWx0XG59O1xuXG5jb25zdCBQYWdlcyA9IHtcbiAgRGVmYXVsdDogcmVxdWlyZShcIi4vcGFnZXMvRGVmYXVsdFwiKS5kZWZhdWx0LFxuICBIb21lOiByZXF1aXJlKFwiLi9wYWdlcy9Ib21lXCIpLmRlZmF1bHRcbn07XG5cbiQoKCkgPT4ge1xuICB3aW5kb3cuZG9tID0ge1xuICAgIGJvZHk6ICQoXCJib2R5XCIpLFxuICAgIGRvY3VtZW50OiAkKGRvY3VtZW50KSxcbiAgICBodG1sOiAkKFwiaHRtbFwiKSxcbiAgICB3aW5kb3c6ICQod2luZG93KVxuICB9O1xuXG4gIGluaXRDbGFzc2VzKHdpbmRvdy5kb20uYm9keSwgXCJwYWdlXCIpOyAvLyBQYWdlc1xuICBpbml0Q2xhc3Nlcyh3aW5kb3cuZG9tLmJvZHksIFwibW9kdWxlXCIpOyAvLyBNb2R1bGVzXG4gIHdpbmRvdy5kb20ud2luZG93LnRyaWdnZXIoXCJhcHA6cmVhZHlcIik7XG59KTtcblxud2luZG93LmluaXRDbGFzc2VzID0gZnVuY3Rpb24oY29udGV4dCA9IHdpbmRvdy5kb20uYm9keSwgc2VsZWN0b3IgPSBcIm1vZHVsZVwiKSB7XG4gIGxldCBhdHRyID0gYGRhdGEtJHtzZWxlY3Rvcn1gO1xuICBsZXQgY2xhc3NlcyA9IHNlbGVjdG9yID09PSBcInBhZ2VcIiA/IFBhZ2VzIDogTW9kdWxlcztcbiAgbGV0IGl0ZW1zID0gY29udGV4dFswXS5xdWVyeVNlbGVjdG9yQWxsKGBbJHthdHRyfV1gKTtcbiAgbGV0IHN0eWxlcyA9IGBiYWNrZ3JvdW5kOiAke1xuICAgIHNlbGVjdG9yID09PSBcInBhZ2VcIiA/IFwiIzhiYmViMlwiIDogXCIjMTgzMTRmXCJcbiAgfTsgY29sb3I6ICNmZmY7IHBhZGRpbmc6IDAgMC4yNWVtO2A7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgIC8vIGV4OiBhbGwgW2RhdGEtcGFnZV1cbiAgICBsZXQgaXRlbSA9IGl0ZW1zW2ldOyAvLyBleDogW2RhdGEtcGFnZT1cIkhvbWVcIl1cbiAgICBsZXQgbGlzdCA9IGl0ZW0uZ2V0QXR0cmlidXRlKGF0dHIpLnNwbGl0KC9cXHMrLyk7IC8vIGV4OiBIb21lXG5cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxpc3QubGVuZ3RoOyBqKyspIHtcbiAgICAgIGxldCBuYW1lID0gbGlzdFtqXTtcblxuICAgICAgaWYgKGNsYXNzZXNbbmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zb2xlLmxvZyhgJWPinJTvuI8ke25hbWV9JU9gLCBzdHlsZXMsIHsgZWw6IGl0ZW0gfSk7XG4gICAgICAgIG5ldyBjbGFzc2VzW25hbWVdKCQoaXRlbSkpLmluaXQoKTtcbiAgICAgIH0gZWxzZSBpZiAoY2xhc3Nlcy5EZWZhdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc29sZS53YXJuKGAlY+KaoO+4jyR7bmFtZX0lT2AsIHN0eWxlcywgeyBlbDogaXRlbSB9KTtcbiAgICAgICAgbmV3IGNsYXNzZXMuRGVmYXVsdCgkKGl0ZW0pKS5pbml0KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKGAlY+KdjO+4jyR7bmFtZX0lT2AsIHN0eWxlcywgeyBlbDogaXRlbSB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNb2R1bGUge1xuICBjb25zdHJ1Y3RvcihlbCkge1xuICAgIHRoaXMuZG9tID0gJC5leHRlbmQoe30sIHdpbmRvdy5kb20sIHtcbiAgICAgIGVsOiBlbFxuICAgIH0pO1xuXG4gICAgdGhpcy5ldmVudE5hbWVzID0ge1xuICAgICAgYW5pbWF0aW9uRW5kOlxuICAgICAgICBcImFuaW1hdGlvbmVuZCB3ZWJraXRBbmltYXRpb25FbmQgb2FuaW1hdGlvbmVuZCBvQW5pbWF0aW9uRW5kIE1TQW5pbWF0aW9uRW5kXCIsXG4gICAgICB0cmFuc2l0aW9uRW5kOlxuICAgICAgICBcInRyYW5zaXRpb25lbmQgd2Via2l0VHJhbnNpdGlvbkVuZCBvVHJhbnNpdGlvbkVuZCBvdHJhbnNpdGlvbmVuZCBNU1RyYW5zaXRpb25FbmRcIlxuICAgIH07XG4gIH1cbn1cbiIsImltcG9ydCBVQVBhcnNlciBmcm9tIFwidWEtcGFyc2VyLWpzXCI7XG5pbXBvcnQgcmVzcG9uc2l2ZUhlbHBlciBmcm9tIFwiLi8uLi9oZWxwZXJzL3Jlc3BvbnNpdmVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZSB7XG4gIGNvbnN0cnVjdG9yKGVsKSB7XG4gICAgdGhpcy5kb20gPSAkLmV4dGVuZCh7fSwgd2luZG93LmRvbSwge1xuICAgICAgZWw6IGVsXG4gICAgfSk7XG5cbiAgICB0aGlzLnBhcnNlciA9IG5ldyBVQVBhcnNlcigpLmdldFJlc3VsdCgpO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLnNldERldmljZVR5cGUoKTtcbiAgfVxuXG4gIHNldERldmljZVR5cGUoKSB7XG4gICAgdGhpcy5kb20uaHRtbFxuICAgICAgLmFkZENsYXNzKHRoaXMucGFyc2VyLm9zLm5hbWUudG9Mb3dlckNhc2UoKSlcbiAgICAgIC5hZGRDbGFzcyh0aGlzLnBhcnNlci5icm93c2VyLm5hbWUudG9Mb3dlckNhc2UoKSk7XG4gIH1cblxuICBiaW5kRXZlbnRzKCkge1xuICAgIHRoaXMuZG9tLndpbmRvdy5vbihcImJyZWFrcG9pbnRDaGFuZ2VcIiwgKGUsIGJyZWFrcG9pbnQpID0+XG4gICAgICB0aGlzLm9uQnJlYWtwb2ludENoYW5nZShicmVha3BvaW50KVxuICAgICk7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgb25CcmVha3BvaW50Q2hhbmdlKGJyZWFrcG9pbnQpIHtcbiAgICBjb25zb2xlLmxvZyhcbiAgICAgIGAlY0Jvb3RzdHJhcDogJHtyZXNwb25zaXZlSGVscGVyLmJyZWFrcG9pbnR9YCxcbiAgICAgIFwiYmFja2dyb3VuZDogIzU3M2U3ZDsgY29sb3I6ICNmZmY7IHBhZGRpbmc6IDAgLjVlbTtcIlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCB7IHRocm90dGxlIH0gZnJvbSBcInRocm90dGxlLWRlYm91bmNlXCI7XG5cbmxldCBwb3NzaWJsZUJyZWFrcG9pbnRzTGlzdCA9IFtcInhzXCIsIFwic21cIiwgXCJtZFwiLCBcImxnXCIsIFwieGxcIl07XG5cbmNsYXNzIFJlc3BvbnNpdmUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJyZWFrcG9pbnQgPSBudWxsO1xuICAgIHRoaXMuZXZlbnROYW1lID0gXCJicmVha3BvaW50Q2hhbmdlXCI7XG5cbiAgICB0aGlzLl9fcHJpdmF0ZSA9IHtcbiAgICAgIHdpbmRvdzogd2luZG93LmpRdWVyeSh3aW5kb3cpLFxuICAgICAgYm9keTogd2luZG93LmpRdWVyeSh3aW5kb3cuZG9jdW1lbnQuYm9keSksXG4gICAgICBkdW1teURpdjogd2luZG93LmpRdWVyeSh3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSlcbiAgICB9O1xuXG4gICAgdGhpcy5fX2RldGVjdEJyZWFrcG9pbnQoZmFsc2UpO1xuICAgIHRoaXMuX19wcml2YXRlLndpbmRvdy5vbihcbiAgICAgIFwicmVzaXplXCIsXG4gICAgICB0aHJvdHRsZSgxMDAsICgpID0+IHRoaXMuX19kZXRlY3RCcmVha3BvaW50KHRydWUpKVxuICAgICk7XG4gICAgdGhpcy5fX3ByaXZhdGUud2luZG93Lm9uKFwiYXBwOnJlYWR5XCIsICgpID0+XG4gICAgICB0aGlzLl9fcHJpdmF0ZS53aW5kb3cudHJpZ2dlcih0aGlzLmV2ZW50TmFtZSwgdGhpcy5icmVha3BvaW50KVxuICAgICk7XG4gIH1cblxuICBfX2RldGVjdEJyZWFrcG9pbnQodHJpZ2dlckV2ZW50KSB7XG4gICAgdGhpcy5fX3ByaXZhdGUuZHVtbXlEaXYuYXBwZW5kVG8odGhpcy5fX3ByaXZhdGUuYm9keSk7XG5cbiAgICBsZXQgdnBTaXplID0gbnVsbDtcblxuICAgIGZvciAobGV0IGkgPSBwb3NzaWJsZUJyZWFrcG9pbnRzTGlzdC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgdnBTaXplID0gcG9zc2libGVCcmVha3BvaW50c0xpc3RbaV07XG5cbiAgICAgIHRoaXMuX19wcml2YXRlLmR1bW15RGl2LmF0dHIoXCJjbGFzc1wiLCBgZC0ke3ZwU2l6ZX0tbm9uZWApO1xuXG4gICAgICBpZiAodGhpcy5fX3ByaXZhdGUuZHVtbXlEaXYuaXMoXCI6aGlkZGVuXCIpKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX19wcml2YXRlLmR1bW15RGl2LmRldGFjaCgpO1xuXG4gICAgaWYgKHRoaXMuYnJlYWtwb2ludCAhPT0gdnBTaXplKSB7XG4gICAgICB0aGlzLmJyZWFrcG9pbnQgPSB2cFNpemU7XG5cbiAgICAgIGlmICh0cmlnZ2VyRXZlbnQpIHtcbiAgICAgICAgdGhpcy5fX3ByaXZhdGUud2luZG93LnRyaWdnZXIodGhpcy5ldmVudE5hbWUsIHRoaXMuYnJlYWtwb2ludCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaXNCcmVha3BvaW50R3JlYXRlclRoYW4oY29tcGFyZVRvQnJlYWtwb2ludCkge1xuICAgIGxldCBjb21wYXJlSW5kZXggPSBwb3NzaWJsZUJyZWFrcG9pbnRzTGlzdC5pbmRleE9mKGNvbXBhcmVUb0JyZWFrcG9pbnQpO1xuICAgIGlmIChjb21wYXJlSW5kZXggPT09IC0xKSByZXR1cm4gZmFsc2U7XG5cbiAgICBsZXQgY3VycmVudEluZGV4ID0gcG9zc2libGVCcmVha3BvaW50c0xpc3QuaW5kZXhPZih0aGlzLmJyZWFrcG9pbnQpO1xuICAgIHJldHVybiBjdXJyZW50SW5kZXggPiBjb21wYXJlSW5kZXg7XG4gIH1cblxuICBpc0JyZWFrcG9pbnRTbWFsbGVyVGhhbihjb21wYXJlVG9CcmVha3BvaW50KSB7XG4gICAgbGV0IGNvbXBhcmVJbmRleCA9IHBvc3NpYmxlQnJlYWtwb2ludHNMaXN0LmluZGV4T2YoY29tcGFyZVRvQnJlYWtwb2ludCk7XG4gICAgaWYgKGNvbXBhcmVJbmRleCA9PT0gLTEpIHJldHVybiBmYWxzZTtcblxuICAgIGxldCBjdXJyZW50SW5kZXggPSBwb3NzaWJsZUJyZWFrcG9pbnRzTGlzdC5pbmRleE9mKHRoaXMuYnJlYWtwb2ludCk7XG4gICAgcmV0dXJuIGN1cnJlbnRJbmRleCA8IGNvbXBhcmVJbmRleDtcbiAgfVxuXG4gIGlzQnJlYWtwb2ludEdyZWF0ZXJPckVxdWFsVG8oY29tcGFyZVRvQnJlYWtwb2ludCkge1xuICAgIGxldCBjb21wYXJlSW5kZXggPSBwb3NzaWJsZUJyZWFrcG9pbnRzTGlzdC5pbmRleE9mKGNvbXBhcmVUb0JyZWFrcG9pbnQpO1xuICAgIGlmIChjb21wYXJlSW5kZXggPT09IC0xKSByZXR1cm4gZmFsc2U7XG5cbiAgICBsZXQgY3VycmVudEluZGV4ID0gcG9zc2libGVCcmVha3BvaW50c0xpc3QuaW5kZXhPZih0aGlzLmJyZWFrcG9pbnQpO1xuXG4gICAgcmV0dXJuIGN1cnJlbnRJbmRleCA+PSBjb21wYXJlSW5kZXg7XG4gIH1cblxuICBpc0JyZWFrcG9pbnRTbWFsbGVyT3JFcXVhbFRvKGNvbXBhcmVUb0JyZWFrcG9pbnQpIHtcbiAgICBsZXQgY29tcGFyZUluZGV4ID0gcG9zc2libGVCcmVha3BvaW50c0xpc3QuaW5kZXhPZihjb21wYXJlVG9CcmVha3BvaW50KTtcbiAgICBpZiAoY29tcGFyZUluZGV4ID09PSAtMSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgbGV0IGN1cnJlbnRJbmRleCA9IHBvc3NpYmxlQnJlYWtwb2ludHNMaXN0LmluZGV4T2YodGhpcy5icmVha3BvaW50KTtcbiAgICByZXR1cm4gY3VycmVudEluZGV4IDw9IGNvbXBhcmVJbmRleDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgUmVzcG9uc2l2ZSgpO1xuIiwiaW1wb3J0IE1vZHVsZSBmcm9tIFwiLi4vYmFzZS9Nb2R1bGVcIjtcbmltcG9ydCBcImludGVyc2VjdGlvbi1vYnNlcnZlclwiO1xuaW1wb3J0IHNjcm9sbGFtYSBmcm9tIFwic2Nyb2xsYW1hXCI7XG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gXCJ0aHJvdHRsZS1kZWJvdW5jZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIE1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKGVsKSB7XG4gICAgc3VwZXIoZWwpO1xuXG4gICAgLy8gLS0gUHJvcGVydGllc1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy5kb20gPSAkLmV4dGVuZCh7fSwgdGhpcy5kb20sIHtcbiAgICAgIHNpdGVIZWFkZXI6IHRoaXMuZG9tLmJvZHkuZmluZChcIi5zaXRlLWhlYWRlclwiKSxcbiAgICAgIHNlbGVjdDogZWwuZmluZChcIi5qcy1hbmNob3JzXCIpLFxuICAgICAgbGlzdDogZWwuZmluZChcIi5qcy1saXN0XCIpLFxuICAgICAgbGluZTogZWwuZmluZChcIi5hbmNob3JzLW1lbnVfX2xpbmVcIiksXG4gICAgICByZWZlcmVuY2VzOiB0aGlzLmRvbS5ib2R5LmZpbmQoXCIuanMtYW5jaG9yXCIpXG4gICAgfSk7XG5cbiAgICB0aGlzLm5hdlNjcm9sbGVyID0gc2Nyb2xsYW1hKCk7XG4gICAgdGhpcy5hbmNob3JzU2Nyb2xsZXIgPSBzY3JvbGxhbWEoKTtcbiAgfVxuXG4gIC8vIC0tIE1ldGhvZHNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaW5pdCgpIHtcbiAgICBpZiAodGhpcy5kb20ucmVmZXJlbmNlcy5sZW5ndGggPCAxKSB7XG4gICAgICB0aGlzLmRvbS5lbC5yZW1vdmUoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnBvcHVsYXRlKCk7XG4gICAgdGhpcy5zZXROYXZTY3JvbGxlcigpO1xuICAgIHRoaXMuc2V0QW5jaG9yc1Njcm9sbGVyKCk7XG4gICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gIH1cblxuICBiaW5kRXZlbnRzKCkge1xuICAgIHRoaXMuZG9tLndpbmRvdy5vbihcInJlc2l6ZVwiLCBkZWJvdW5jZSgyNTAsICgpID0+IHRoaXMucmVzaXplKCkpKTtcbiAgfVxuXG4gIGdldCBtb2RlKCkge1xuICAgIHJldHVybiB3aW5kb3cuaW5uZXJXaWR0aCA8IDk5MiA/IFwibW9iaWxlXCIgOiBcImRlc2t0b3BcIjtcbiAgfVxuXG4gIHJlc2l6ZSgpIHtcbiAgICB0aGlzLm5hdlNjcm9sbGVyLm9mZnNldFRyaWdnZXIodGhpcy5hbmNob3JzT2Zmc2V0KS5yZXNpemUoKTtcbiAgICB0aGlzLmFuY2hvcnNTY3JvbGxlci5yZXNpemUoKTtcbiAgfVxuXG4gIHBvcHVsYXRlKCkge1xuICAgIGxldCBzZWxlY3QgPSBcIlwiO1xuICAgIGxldCBsaXN0ID0gXCJcIjtcblxuICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5kb20ucmVmZXJlbmNlcy5sZW5ndGg7IHgrKykge1xuICAgICAgbGV0IHJlZmVyZW5jZSA9IHRoaXMuZG9tLnJlZmVyZW5jZXMuZXEoeCk7XG4gICAgICBsZXQgaWQgPSByZWZlcmVuY2UuYXR0cihcImlkXCIpO1xuICAgICAgbGV0IG5hbWUgPSByZWZlcmVuY2UuZGF0YShcIm5hbWVcIik7XG5cbiAgICAgIHNlbGVjdCArPSBgPG9wdGlvbiB2YWx1ZT1cIiR7aWR9XCI+JHtuYW1lfTwvb3B0aW9uPmA7XG4gICAgICBsaXN0ICs9IGA8bGkgY2xhc3M9XCJhbmNob3JzLW1lbnVfX2l0ZW1cIj5cbiAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiMke2lkfVwiIGNsYXNzPVwiYW5jaG9ycy1tZW51X19saW5rIGpzLXNjcm9sbC10b1wiPiR7bmFtZX08L2E+XG4gICAgICAgICAgICAgICA8L2xpPmA7XG4gICAgfVxuXG4gICAgdGhpcy5kb20uc2l0ZUhlYWRlci5maW5kKFwiLnNpdGUtaGVhZGVyX19hbmNob3ItbmF2XCIpLmFwcGVuZChzZWxlY3QpO1xuICAgIHRoaXMuZG9tLnNlbGVjdC5hcHBlbmQoc2VsZWN0KTtcbiAgICB0aGlzLmRvbS5saXN0LmFwcGVuZChsaXN0KTtcbiAgfVxuXG4gIHNldE5hdlNjcm9sbGVyKCkge1xuICAgIHRoaXMubmF2U2Nyb2xsZXJcbiAgICAgIC5zZXR1cCh7XG4gICAgICAgIHN0ZXA6ICdbZGF0YS1tb2R1bGU9XCJBbmNob3JzTWVudVwiXScsXG4gICAgICAgIGNvbnRhaW5lcjogXCJbZGF0YS1wYWdlXVwiLFxuICAgICAgICBvZmZzZXQ6IHRoaXMubmF2U2Nyb2xsZXJPZmZzZXQsXG4gICAgICAgIGRlYnVnOiBmYWxzZVxuICAgICAgfSlcbiAgICAgIC5vblN0ZXBFbnRlcihlID0+IHtcbiAgICAgICAgaWYgKGUuZGlyZWN0aW9uID09PSBcImRvd25cIikge1xuICAgICAgICAgIHRoaXMuZG9tLmVsLmFkZENsYXNzKFwiaXMtZG9ja2VkXCIpO1xuICAgICAgICAgIHRoaXMuZG9tLnNpdGVIZWFkZXIuYWRkQ2xhc3MoXCJpcy1tZXJnZWRcIik7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAub25TdGVwRXhpdChlID0+IHtcbiAgICAgICAgaWYgKGUuZGlyZWN0aW9uID09PSBcInVwXCIpIHtcbiAgICAgICAgICB0aGlzLmRvbS5lbC5yZW1vdmVDbGFzcyhcImlzLWRvY2tlZFwiKTtcbiAgICAgICAgICB0aGlzLmRvbS5zaXRlSGVhZGVyLnJlbW92ZUNsYXNzKFwiaXMtbWVyZ2VkXCIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIHNldEFuY2hvcnNTY3JvbGxlcigpIHtcbiAgICB0aGlzLmFuY2hvcnNTY3JvbGxlclxuICAgICAgLnNldHVwKHtcbiAgICAgICAgc3RlcDogXCIuanMtYW5jaG9yXCIsXG4gICAgICAgIGNvbnRhaW5lcjogXCJbZGF0YS1wYWdlXVwiLFxuICAgICAgICBvZmZzZXQ6IHRoaXMuYW5jaG9yc09mZnNldCxcbiAgICAgICAgZGVidWc6IGZhbHNlXG4gICAgICB9KVxuICAgICAgLm9uU3RlcEVudGVyKGUgPT4ge1xuICAgICAgICBpZiAoZS5kaXJlY3Rpb24gPT09IFwiZG93blwiKSB7XG4gICAgICAgICAgdGhpcy51cGRhdGVOYXYoZS5lbGVtZW50LmlkKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5vblN0ZXBFeGl0KGUgPT4ge1xuICAgICAgICBpZiAoZS5kaXJlY3Rpb24gPT09IFwidXBcIikge1xuICAgICAgICAgIGxldCBlbCA9IHRoaXMuZG9tLmJvZHkuZmluZChcbiAgICAgICAgICAgIGBbaHJlZj1cIiMke2UuZWxlbWVudC5pZH1cIl0uYW5jaG9ycy1tZW51X19saW5rYFxuICAgICAgICAgICk7XG4gICAgICAgICAgbGV0IHByZXYgPSBlbFxuICAgICAgICAgICAgLnBhcmVudCgpXG4gICAgICAgICAgICAucHJldigpXG4gICAgICAgICAgICAuY2hpbGRyZW4oKTtcblxuICAgICAgICAgIGlmIChwcmV2Lmxlbmd0aCkge1xuICAgICAgICAgICAgZWwgPSBwcmV2O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMudXBkYXRlTmF2KGVsLmF0dHIoXCJocmVmXCIpLnN1YnN0cmluZygxKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgZ2V0IGFuY2hvcnNPZmZzZXQoKSB7XG4gICAgbGV0IGhlYWRlckhlaWdodCA9IHRoaXMuZG9tLnNpdGVIZWFkZXIub3V0ZXJIZWlnaHQoKSAvIHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICBpZiAodGhpcy5tb2RlID09PSBcImRlc2t0b3BcIikge1xuICAgICAgaGVhZGVySGVpZ2h0ID0gaGVhZGVySGVpZ2h0ICogMjtcbiAgICB9XG4gICAgcmV0dXJuIGhlYWRlckhlaWdodDtcbiAgfVxuXG4gIGdldCBuYXZTY3JvbGxlck9mZnNldCgpIHtcbiAgICBsZXQgbmF2T2Zmc2V0ID0gMC4wMDE7IC8vIEJlY2F1c2UgMCBkb2Vzbid0IHdvcmsgOlNcblxuICAgIGlmICh0aGlzLm1vZGUgPT09IFwiZGVza3RvcFwiKSB7XG4gICAgICBuYXZPZmZzZXQgPSB0aGlzLmRvbS5zaXRlSGVhZGVyLm91dGVySGVpZ2h0KCkgLyB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5hdk9mZnNldDtcbiAgfVxuXG4gIHVwZGF0ZU5hdihpZCkge1xuICAgIHRoaXMuZG9tLmJvZHkuZmluZChcIi5qcy1hbmNob3JzXCIpLnZhbChpZCk7XG5cbiAgICBsZXQgZWwgPSB0aGlzLmRvbS5lbC5maW5kKGBbaHJlZj1cIiMke2lkfVwiXWApO1xuXG4gICAgaWYgKGVsLmxlbmd0aCkge1xuICAgICAgdGhpcy5kb20ubGluZS5jc3Moe1xuICAgICAgICB3aWR0aDogZWwud2lkdGgoKSxcbiAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgke2VsLnBvc2l0aW9uKCkubGVmdH1weClgXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBNb2R1bGUgZnJvbSBcIi4uL2Jhc2UvTW9kdWxlXCI7XG5pbXBvcnQgVVJMU2VhcmNoUGFyYW1zIGZyb20gXCJ1cmwtc2VhcmNoLXBhcmFtc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIE1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKGVsKSB7XG4gICAgc3VwZXIoZWwpO1xuXG4gICAgdGhpcy5kb20gPSAkLmV4dGVuZCh7fSwgdGhpcy5kb20sIHtcbiAgICAgIHNlbGVjdHM6IGVsLmZpbmQoXCJzZWxlY3RcIiksXG4gICAgICBzdWJtaXQ6IGVsLmZpbmQoXCJidXR0b25cIilcbiAgICB9KTtcbiAgfVxuXG4gIC8vIC0tIE1ldGhvZHNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgfVxuXG4gIGJpbmRFdmVudHMoKSB7XG4gICAgdGhpcy5kb20uc3VibWl0Lm9uKFwiY2xpY2tcIiwgZSA9PiB0aGlzLmNoYW5nZVVybChlKSk7XG4gIH1cblxuICBjaGFuZ2VVcmwoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xuICAgIGxldCByb290ID0gdGhpcy5kb20uZWwuZGF0YShcInJvb3RcIik7XG5cbiAgICB0aGlzLmRvbS5zZWxlY3RzLmVhY2goKGksIGVsKSA9PiB7XG4gICAgICBsZXQgJGVsID0gJChlbCk7XG4gICAgICBsZXQgdGF4b25vbXkgPSAkZWwuZGF0YShcInRheG9ub215XCIpO1xuICAgICAgbGV0IHZhbHVlID0gJGVsLnZhbCgpO1xuXG4gICAgICBpZiAoIXRheG9ub215IHx8IHZhbHVlID09PSBcImFsbFwiKSByZXR1cm47XG5cbiAgICAgIHBhcmFtcy5zZXQodGF4b25vbXksIHZhbHVlKTtcbiAgICB9KTtcblxuICAgIHdpbmRvdy5sb2NhdGlvbiA9IHBhcmFtcy50b1N0cmluZygpICE9PSBcIlwiID8gcm9vdCArIFwiP1wiICsgcGFyYW1zIDogcm9vdDtcbiAgfVxufVxuIiwiaW1wb3J0IE1vZHVsZSBmcm9tIFwiLi4vYmFzZS9Nb2R1bGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBNb2R1bGUge1xuICBjb25zdHJ1Y3RvcihlbCkge1xuICAgIHN1cGVyKGVsKTtcblxuICAgIHRoaXMuZG9tID0gJC5leHRlbmQoe30sIHRoaXMuZG9tLCB7XG4gICAgICBvdmVybGF5OiBlbC5maW5kKFwiLnNpdGUtaGVhZGVyX19vdmVybGF5XCIpLFxuICAgICAgbWVudTogZWwuZmluZChcIi5zaXRlLWhlYWRlcl9fbWVudVwiKSxcbiAgICAgIHRvZ2dsZTogZWwuZmluZChcIi5zaXRlLWhlYWRlcl9fdG9nZ2xlXCIpXG4gICAgfSk7XG5cbiAgICB0aGlzLm1lbnVJc09wZW5lZCA9IGZhbHNlO1xuICB9XG5cbiAgLy8gLS0gTWV0aG9kc1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpbml0KCkge1xuICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICB9XG5cbiAgYmluZEV2ZW50cygpIHtcbiAgICB0aGlzLmRvbS5ib2R5Lm9uKFwiY2xpY2sgdG91Y2hlbmRcIiwgKCkgPT4gdGhpcy5jbG9zZU1lbnUoKSk7XG4gICAgdGhpcy5kb20uZWwub24oXCJjbGljayB0b3VjaGVuZFwiLCBlID0+IGUuc3RvcFByb3BhZ2F0aW9uKCkpO1xuICAgIHRoaXMuZG9tLm92ZXJsYXkub24oXCJjbGlja1wiLCAoKSA9PiB0aGlzLmNsb3NlTWVudSgpKTtcbiAgICB0aGlzLmRvbS50b2dnbGUub24oXCJjbGlja1wiLCAoKSA9PiB0aGlzLnRvZ2dsZU1lbnUoKSk7XG4gIH1cblxuICB0b2dnbGVNZW51KCkge1xuICAgIGlmICh0aGlzLm1lbnVJc09wZW5lZCkge1xuICAgICAgdGhpcy5jbG9zZU1lbnUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vcGVuTWVudSgpO1xuICAgIH1cbiAgfVxuXG4gIG9wZW5NZW51KCkge1xuICAgIHRoaXMuZG9tLmVsLmFkZENsYXNzKFwiaXMtb3BlbmVkXCIpO1xuICAgIHRoaXMuZG9tLnRvZ2dsZS5hZGRDbGFzcyhcImlzLWFjdGl2ZVwiKTtcbiAgICB0aGlzLm1lbnVJc09wZW5lZCA9IHRydWU7XG4gIH1cblxuICBjbG9zZU1lbnUoKSB7XG4gICAgdGhpcy5kb20uZWwucmVtb3ZlQ2xhc3MoXCJpcy1vcGVuZWRcIik7XG4gICAgdGhpcy5kb20udG9nZ2xlLnJlbW92ZUNsYXNzKFwiaXMtYWN0aXZlXCIpO1xuICAgIHRoaXMubWVudUlzT3BlbmVkID0gZmFsc2U7XG4gIH1cbn1cbiIsImltcG9ydCBQYWdlIGZyb20gXCIuLi9iYXNlL1BhZ2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBQYWdlIHtcbiAgY29uc3RydWN0b3IoZWwpIHtcbiAgICBzdXBlcihlbCk7XG5cbiAgICB0aGlzLmRvbSA9ICQuZXh0ZW5kKHt9LCB0aGlzLmRvbSwge30pO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBzdXBlci5pbml0KCk7XG4gICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gIH1cblxuICBiaW5kRXZlbnRzKCkge1xuICAgIHN1cGVyLmJpbmRFdmVudHMoKTtcbiAgfVxufVxuIiwiaW1wb3J0IFBhZ2UgZnJvbSBcIi4uL2Jhc2UvUGFnZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFBhZ2Uge1xuICBjb25zdHJ1Y3RvcihlbCkge1xuICAgIHN1cGVyKGVsKTtcblxuICAgIHRoaXMuZG9tID0gJC5leHRlbmQoe30sIHRoaXMuZG9tLCB7fSk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIHN1cGVyLmluaXQoKTtcbiAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgfVxuXG4gIGJpbmRFdmVudHMoKSB7XG4gICAgc3VwZXIuYmluZEV2ZW50cygpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9