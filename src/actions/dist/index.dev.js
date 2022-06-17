"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNewss = void 0;

var getNewss = function getNewss(category, country, query) {
  return {
    type: 'GET_NEWS',
    category: category,
    country: country,
    query: query
  };
};

exports.getNewss = getNewss;