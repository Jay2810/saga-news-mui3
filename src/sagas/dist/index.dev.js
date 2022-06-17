"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = rootSaga;

var _effects = require("redux-saga/effects");

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(fetchNews),
    _marked2 =
/*#__PURE__*/
regeneratorRuntime.mark(actionWatcher),
    _marked3 =
/*#__PURE__*/
regeneratorRuntime.mark(rootSaga);

function fetchNews(data) {
  var url, json;
  return regeneratorRuntime.wrap(function fetchNews$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log("saga", data); 
          if (data.query) {
            url = "https://newsapi.org/v2/everything?q=".concat(data.query, "&apiKey=d68b28a3b6c64646b9443bffbe4be41d");
          } else {
            url = "https://newsapi.org/v2/top-headlines?category=".concat(data.category, "&country=").concat(data.country, "&apiKey=d68b28a3b6c64646b9443bffbe4be41d");
          }

          console.log(url); // setTimeout(() => {}, 2000);

          _context.next = 5;
          return fetch(url).then(function (response) {
            return response.json();
          });

        case 5:
          json = _context.sent;
          _context.next = 8;
          return (0, _effects.put)({
            type: "NEWS_RECEIVED",
            json: json.articles
          });

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

function actionWatcher() {
  return regeneratorRuntime.wrap(function actionWatcher$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0, _effects.takeLatest)("GET_NEWS", fetchNews);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}

function rootSaga() {
  return regeneratorRuntime.wrap(function rootSaga$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return (0, _effects.all)([actionWatcher()]);

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}