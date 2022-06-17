"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNews = void 0;

var getNews = function getNews(category, country, query) {
  return {
    type: 'GET_NEWS',
    category: category,
    country: country,
    query: query
  };
};

exports.getNews = getNews;