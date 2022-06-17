import { put, takeLatest, all } from "redux-saga/effects";

function* fetchNews(data) {
  console.log("saga", data);
  // category = category.category
  // const country = category.country
  // console.log("cat ",category.category,country.country,"cate");
  if (data.query) {
    var url = `https://newsapi.org/v2/everything?q=${data.query}&apiKey=d68b28a3b6c64646b9443bffbe4be41d`
  }
  else{
    var url = `https://newsapi.org/v2/top-headlines?category=${data.category}&country=${data.country}&apiKey=d68b28a3b6c64646b9443bffbe4be41d`;
  }
  console.log(url);
  // setTimeout(() => {}, 2000);
  const json = yield fetch(url).then((response) => response.json());

  yield put({ type: "NEWS_RECEIVED", json: json.articles });
}

function* actionWatcher() {
  yield takeLatest("GET_NEWS", fetchNews);
}

export default function* rootSaga() {
  // yield all([actionWatcher()]);
  yield takeLatest("GET_NEWS", fetchNews);
}
