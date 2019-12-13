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
/******/ 	__webpack_require__.p = "/dist/assets";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/javascript/utility/speechRecognition.js
function speechRecognition(callback) {
  var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  var recognition = new SpeechRecognition();
  recognition.interimResults = false;
  recognition.start();

  recognition.onstart = function () {
    return new Audio('data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=').play();
  }; //recognition.addEventListener('end', recognition.start);


  return recognition;

  recognition.onresult = function (e) {
    console.log(e.results[0][0].transcript);
    callback(e.results[0][0].transcript.toLowerCase());
  };
}
// CONCATENATED MODULE: ./src/javascript/utility/textToSpeech.js
function textTospeech(msg) {
  var speech = new SpeechSynthesisUtterance();
  speech.text = msg;
  speechSynthesis.speak(speech); // setTimeout(() => {
  //   console.log(speechSynthesis.getVoices());
  // }, 5000);

  return speech;
} // export default class SpeechSynth {
//   constructor() {
//     this.speech = new SpeechSynthesisUtterance();
//   }
//   setMsg(msg) {
//     this.speech.text = msg;
//   }
//   speak() {
//     speechSynthesis.speak(this.speech);
//   }
//   afterSpooken(callback) {
//     this.speech.onend = callback;
//   }
// }
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(0);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(1);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// CONCATENATED MODULE: ./src/javascript/utility/elementCreator.js



var elementCreator_default =
/*#__PURE__*/
function () {
  function _default() {
    classCallCheck_default()(this, _default);
  }

  createClass_default()(_default, null, [{
    key: "createDivWithClass",
    value: function createDivWithClass(innerHtml, className) {
      var logo = document.createElement('div');
      logo.classList.add(className);
      logo.innerHTML = innerHtml;
      document.body.appendChild(logo);
    }
  }, {
    key: "createDivWithId",
    value: function createDivWithId(innerHtml, id) {
      var logo = document.createElement('div');
      logo.id = id;
      logo.innerHTML = innerHtml;
      document.body.appendChild(logo);
    }
  }]);

  return _default;
}();


// CONCATENATED MODULE: ./src/javascript/attributes/questions.js
/* harmony default export */ var questions = ({
  nikola: [{
    Q: 'Jak nazywa się stolica Polski?',
    A: 'warszawa'
  }, {
    Q: 'Ile to jest 4 razy 5?',
    A: '20'
  }],
  stasiu: [{
    Q: 'Jakie zwierzę znajduje się na obrazku?',
    A: 'globus',
    IMG: 'https://i.pinimg.com/236x/d2/c8/2e/d2c82e570e45238b68b30b36c4aca592--cartoon-dog-cartoon-sketches.jpg'
  }, {
    Q: 'Powiedz frytki',
    A: 'frytki'
  }],
  '0': [{
    Q: 'Jakie miasto jest stolicą włoch',
    A: 'rzym'
  }, {
    Q: 'Kto jest prezydentem stanów zjednoczonych',
    A: 'donald trump'
  }],
  '1': [{
    Q: 'Powiedz dwa',
    A: '2'
  }, {
    Q: 'Powiedz frytki',
    A: 'frytki'
  }],
  '2': [{
    Q: 'Powiedz dwa',
    A: 'dwa'
  }, {
    Q: 'Powiedz frytki',
    A: 'frytki'
  }],
  '3': [{
    Q: 'Powiedz dwa',
    A: 'dwa'
  }, {
    Q: 'Powiedz frytki',
    A: 'frytki'
  }]
});
// CONCATENATED MODULE: ./src/javascript/rundy.js





function ask(players, index, round) {
  textTospeech("Odpowiada ".concat(players[index]));
  var userEl = document.getElementById(players[index]);
  userEl.style.color = 'red';
  var question;

  if (players[index] === 'nikola' || players[index] === 'stasiu') {
    question = questions[players[index]];
  } else {
    question = questions[index];
  }

  function answering() {
    speechRecognition().onresult = function (e) {
      console.log(e.results[0][0].transcript.toLowerCase() === question[round - 1].A);

      if (!e.results[0][0].transcript.toLowerCase() === question[round - 1].A) {
        document.getElementById('correctAnswer').innerHTML = "Poprawna odpowiedz question".concat([round - 1].A);
      }

      document.getElementById('answer').innerHTML = "Twoja odpowiedz ".concat(e.results[0][0].transcript);
      userEl.style.color = 'lightgrey';
      if (players.length > index + 1) ask(players, index + 1, round);else if (round < 4) {
        textTospeech("Runda numer ".concat(round + 1));
        ask(players, 0, round + 1);
      }
    };
  }

  textTospeech(question[round - 1].Q).onend = answering;
  if (question[round - 1].IMG) document.getElementById('images').innerHTML = "<img width='100px' src=".concat(question[round - 1].IMG, ">");else document.getElementById('images').innerHTML = '';
}

/* harmony default export */ var rundy = (function (players) {
  console.log(players);
  elementCreator_default.createDivWithId('', 'answer');
  elementCreator_default.createDivWithId('', 'correctAnswer');
  elementCreator_default.createDivWithId('', 'images');
  textTospeech("Runda numer 1");
  ask(players, 0, 1);
});
// CONCATENATED MODULE: ./src/javascript/static/gameintro.js
/* harmony default export */ var gameintro = ({
  welcome: 'Witam w grze Super extra Quiz 3000!',
  playerNumber: 'Ile osób będzie grało?'
});
// CONCATENATED MODULE: ./src/javascript/game.js






function createListOfUsers(playersArr) {
  var html = "<ul>";
  playersArr.forEach(function (player) {
    html += "<li id=".concat(player, ">").concat(player.toUpperCase(), "</li>");
  });
  html += "</ul>";
  return html;
}

function game_name(arr, callback) {
  var index = arr.findIndex(function (e) {
    return !e;
  }); //listen().onresult = e => {

  var arro = ['nikola', 'jarmuz', 'bobby'];
  var namex = arro[index]; // e.results[0][0].transcript;

  console.log("Gracz ".concat(index + 1, " to: ").concat(namex));
  var user = document.querySelector("#user".concat(index + 1));
  user.id = namex;
  user.innerHTML = namex; // eslint-disable-next-line no-param-reassign

  arr[index] = namex;
  callback(arr); // };
}

function names(arr) {
  console.log(arr);
  var index = arr.findIndex(function (e) {
    return !e;
  });
  if (index > -1) textTospeech("podaj imie gracza numer ".concat(index + 1)).onend = function () {
    return game_name(arr, names);
  };else {
    rundy(arr);
  }
}

function game_players() {
  //listen().onresult = e => {
  var arr = new Array(3); // Number(e.results[0][0].transcript));

  names(arr);
  var users = document.createElement('div');
  users.classList.add('users');
  var inner = '';

  for (var i = 0; i < arr.length; i++) {
    inner += "<div class='user' id='user".concat(i + 1, "'>").concat(i, "</div>");
  }

  console.log(inner);
  users.innerHTML = inner;
  document.body.appendChild(users); //};
}

/* harmony default export */ var game = (function () {
  elementCreator_default.createDivWithId("<p>Super Quiz 3000</p>", 'logo');

  textTospeech(gameintro.welcome).onend = function () {// const x = new Audio('song.mp3');
    // x.volume = 0.02;
    // x.play();
  };

  textTospeech(gameintro.playerNumber).onend = game_players;
});
// CONCATENATED MODULE: ./src/javascript/index.js



 // speech().onaudioend = function(e) {
//   let res;
//   e.target.onresult = e => (res = e.results[0][0].transcript);
//   if (!res) {
//     console.log('zjebalo');
//     speech();
//   }
// };
//  talk('siemka');

document.querySelector('button').onclick = game; //rundy(['nikola', 'stasiu', 'Mateusz', 'Karolina']);
// speech().onresult = e => {
//   const res = e.results[0][0].transcript;
//   console.log(res);
//   if (res.includes('tło')) {
//     const splited = res.split(' ');
//     document.body.style.backgroundColor = splited[splited.length - 1];
//   }
//   if (res.includes('obrazek')) {
//     console.log('obrazek');
//     document.body.innerHTML = `<img id='pies' src='https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_960_720.jpg'>`;
//   }
//   if (res.includes('napis')) {
//     console.log('napisac');
//     document.body.innerHTML = `<h1> SIEMKA </h1>`;
//   }
//   if (res.includes('zmniejsz psa')) {
//     document.getElementById('pies').style.width = '200px';
//   }
// };

/***/ })
/******/ ]);