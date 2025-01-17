// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"K4Xi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var string = ".skin * {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n.skin *::before,.skin *::after {\n  box-sizing: border-box;\n}\n.skin {\n    background: #ffe600;\n  min-height: 50vh;\n  position: relative;\n}\n.nose {\n  border: 10px solid black;\n  border-color: black transparent transparent;\n  border-bottom: none;\n  width: 0px;\n  height: 0px;\n  position: relative;\n  left: 50%;\n  top: 105px;\n  margin-left: -10px;\n  z-index: 10;\n}\n@keyframes wave {\n  0% {\n    transform: rotate(0deg);\n  }\n  33% {\n    transform: rotate(5deg);\n  }\n  66% {\n    transform: rotate(-5deg);\n  }\n  100% {\n    transform: rotate(0deg);\n  }\n}\n.nose:hover {\n  transform-origin: center bottom;\n  animation: wave 300ms infinite linear;\n}\n.yuan {\n  position: absolute;\n  width: 20px;\n  height: 6px;\n  top: -16px;\n  left: -10px;\n  border-radius: 10px 10px 0 0;\n  background: black;\n}\n.eye {\n  border: 2px solid #000;\n  width: 64px;\n  height: 64px;\n  position: absolute;\n  left: 50%;\n  top: 60px;\n  margin-left: -32px;\n  background: #2e2e2e;\n  border-radius: 50%;\n}\n.eye::before {\n  content: \"\";\n  display: block;\n  border: 3px solid #000;\n  height: 30px;\n  width: 30px;\n  background: #fff;\n  border-radius: 50%;\n  position: relative;\n  left: 4px;\n  top: 2px;\n}\n.eye.left {\n  transform: translateX(-100px);\n}\n.eye.right {\n  transform: translateX(100px);\n}\n.mouth {\n  /* border: 1px solid red; */\n  width: 200px;\n  height: 200px;\n  position: absolute;\n  left: 50%;\n  top: 130px;\n  margin-left: -100px;\n}\n.mouth .up {\n  position: relative;\n  top: -20px;\n  z-index: 1;\n}\n.mouth .up .lip {\n  border: 3px solid black;\n  height: 30px;\n  width: 100px;\n  border-top-color: transparent;\n  border-right-color: transparent;\n  position: absolute;\n  left: 50%;\n  margin-left: -50px;\n  background: #ffe600;\n}\n.mouth .up .lip.left {\n  border-radius: 0 0 0 50px;\n  transform: rotate(-15deg) translateX(-53px);\n}\n.mouth .up .lip.right {\n  border-radius: 0 0 50px 0;\n  transform: rotate(15deg) translateX(53px);\n}\n.mouth .up .lip::before {\n  content: \"\";\n  display: block;\n  width: 7px;\n  height: 30px;\n  position: absolute;\n  bottom: 0;\n  background: #ffe600;\n}\n.mouth .up .lip.left::before {\n  right: -6px;\n}\n.mouth .up .lip.right::before {\n  left: -6px;\n}\n.mouth .down {\n  height: 180px;\n  position: absolute;\n  top: 5px;\n  width: 100%;\n  overflow: hidden;\n}\n.mouth .down .yuan1 {\n  border: 3px solid black;\n  width: 150px;\n  height: 1000px;\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  margin-left: -75px;\n  border-radius: 75px/300px;\n  background: #9b000a;\n  overflow: hidden;\n}\n.mouth .down .yuan1 .yuan2 {\n  height: 300px;\n  width: 200px;\n  background: #ff485f;\n  position: absolute;\n  bottom: -155px;\n  left: 50%;\n  margin-left: -100px;\n  border-radius: 100px;\n  overflow: hidden;\n}\n.face {\n  position: absolute;\n  left: 50%;\n  border: 3px solid black;\n  width: 88px;\n  height: 88px;\n  top: 160px;\n  margin-left: -44px;\n  z-index: 3;\n}\n.face > img {\n  position: absolute;\n  top: 50px;\n  left: 50%;\n}\n.face.left {\n  transform: translateX(-180px);\n  background: #ff0000;\n  border-radius: 50%;\n}\n.face.left > img {\n  transform: rotateY(180deg);\n  transform-origin: 0 0;\n}\n.face.right {\n  transform: translateX(180px);\n  background: #ff0000;\n  border-radius: 50%;\n}\n";
exports.default = string; //导出字符串
},{}],"HdJB":[function(require,module,exports) {
"use strict";

var _css = require("./css.js");

var _css2 = _interopRequireDefault(_css);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//声明对象
var player = {
  //声明变量
  id: undefined,
  time: 100,
  ui: {
    demo: document.querySelector("#demo"),
    demo2: document.querySelector("#demo2")
  },
  //事件
  events: {
    //暂停功能
    "#btnPause": "pause",
    //播放功能
    "#btnPlay": "play",
    //慢速功能
    "#btnSlow": "slow",
    //中速功能
    "#btnNormal": "normal",
    //快速功能
    "#btnFast": "fast"
  },
  n: 1,
  //初始化代码
  init: function init() {
    player.ui.demo.innerText = _css2.default.substring(0, player.n);
    player.ui.demo2.innerHTML = _css2.default.substring(0, player.n);
    player.bindEvents();
    player.play();
  },
  //绑定函数
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key]; // pause/play/slow...这些字符串
        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: function run() {
    player.n += 1;
    if (player.n > _css2.default.length) {
      window.clearInterval(id);
      return;
    }
    player.ui.demo.innerText = _css2.default.substring(0, player.n);
    player.ui.demo2.innerHTML = _css2.default.substring(0, player.n);
    player.ui.demo.scrollTop = player.ui.demo.scrollHeight; //滚动条定位到内容的高度（其实还要减去滚动条本身的高度的）
  },
  play: function play() {
    player.id = setInterval(player.run, player.time);
  },
  pause: function pause() {
    window.clearInterval(player.id);
  },
  slow: function slow() {
    player.pause();
    player.time = 300;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.time = 100;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.time = 0;
    player.play();
  }
};

//对象初始化
player.init();
},{"./css.js":"K4Xi"}]},{},["HdJB"], null)
//# sourceMappingURL=test.99175631.map