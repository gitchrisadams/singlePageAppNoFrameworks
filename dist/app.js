(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _moduleJs = require("./module.js");

var _moduleJs2 = _interopRequireDefault(_moduleJs);

var timeElement = new _moduleJs2["default"](document.querySelector("time"));

timeElement.update();

console.log("Hello from index.js after timeElement");

},{"./module.js":2}],2:[function(require,module,exports){
"use strict";

"use-strict";

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var INTERVAL = 1000;

var Timer = (function () {
  function Timer(element) {
    _classCallCheck(this, Timer);

    this.element = element;
  }

  Timer.prototype.getTime = function getTime() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();

    return hours + ":" + minutes;
  };

  Timer.prototype.update = function update() {
    var _this = this;

    this.element.textContent = this.getTime();

    setInterval(function () {
      _this.element.textContent = _this.getTime();
    }, INTERVAL);
  };

  return Timer;
})();

exports["default"] = Timer;
module.exports = exports["default"];

},{}]},{},[1,2])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvdmFyL3d3dy9odG1sL1dlYi1kZXYvc2luZ2xlcGFnZWFwcHRlc3Rpbmcvc3JjL3NjcmlwdHMvaW5kZXguanMiLCIvdmFyL3d3dy9odG1sL1dlYi1kZXYvc2luZ2xlcGFnZWFwcHRlc3Rpbmcvc3JjL3NjcmlwdHMvbW9kdWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozt3QkNBa0IsYUFBYTs7OztBQUUvQixJQUFJLFdBQVcsR0FBRywwQkFBVyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFFLENBQUM7O0FBRTlELFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7QUFFckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDOzs7OztBQ05yRCxZQUFZLENBQUM7Ozs7OztBQUViLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQzs7SUFFaEIsS0FBSztBQUNFLFdBRFAsS0FBSyxDQUNHLE9BQU8sRUFBRTswQkFEakIsS0FBSzs7QUFFUCxRQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztHQUN4Qjs7QUFIRyxPQUFLLFdBS1QsT0FBTyxHQUFBLG1CQUFHO0FBQ1IsUUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztBQUN0QixRQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDNUIsUUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDOztBQUVoQyxXQUFPLEtBQUssR0FBRyxHQUFHLEdBQUcsT0FBTyxDQUFDO0dBQzlCOztBQVhHLE9BQUssV0FhVCxNQUFNLEdBQUEsa0JBQUc7OztBQUNQLFFBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQzs7QUFFMUMsZUFBVyxDQUFDLFlBQU07QUFDaEIsWUFBSyxPQUFPLENBQUMsV0FBVyxHQUFHLE1BQUssT0FBTyxFQUFFLENBQUM7S0FDM0MsRUFBRSxRQUFRLENBQUMsQ0FBQztHQUNkOztTQW5CRyxLQUFLOzs7cUJBc0JJLEtBQUsiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IFRpbWVyIGZyb20gXCIuL21vZHVsZS5qc1wiO1xuXG5sZXQgdGltZUVsZW1lbnQgPSBuZXcgVGltZXIoIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ0aW1lXCIpICk7XG5cbnRpbWVFbGVtZW50LnVwZGF0ZSgpO1xuXG5jb25zb2xlLmxvZyhcIkhlbGxvIGZyb20gaW5kZXguanMgYWZ0ZXIgdGltZUVsZW1lbnRcIik7XG5cbiIsIlwidXNlLXN0cmljdFwiO1xuXG5jb25zdCBJTlRFUlZBTCA9IDEwMDA7XG5cbmNsYXNzIFRpbWVyIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gIH1cblxuICBnZXRUaW1lKCkge1xuICAgIGxldCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICBsZXQgaG91cnMgPSBkYXRlLmdldEhvdXJzKCk7XG4gICAgbGV0IG1pbnV0ZXMgPSBkYXRlLmdldE1pbnV0ZXMoKTtcblxuICAgIHJldHVybiBob3VycyArIFwiOlwiICsgbWludXRlcztcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSB0aGlzLmdldFRpbWUoKTtcblxuICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9IHRoaXMuZ2V0VGltZSgpO1xuICAgIH0sIElOVEVSVkFMKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaW1lcjtcbiJdfQ==
