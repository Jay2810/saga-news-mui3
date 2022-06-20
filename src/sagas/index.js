import { put, takeLatest, all } from "redux-saga/effects";

function* fetchNews(data) {
  console.log("saga", data);

  var apiKey = "01ff8d3745ff4d05baa5f43cc76cad29";
  if (data.query) {
    var url = `https://newsapi.org/v2/everything?q=${data.query}&apiKey=${apiKey}`;
  } else {
    url = `https://newsapi.org/v2/top-headlines?category=${data.category}&country=${data.country}&apiKey=${apiKey}`;
  }
  console.log(url);
  const json = yield fetch(url).then((response) => response.json());

  yield put({ type: "NEWS_RECEIVED", json: json.articles });
}

function* actionWatcher() {
  yield takeLatest("GET_NEWS", fetchNews);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
