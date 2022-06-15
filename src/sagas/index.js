import { put, takeLatest, all } from 'redux-saga/effects';

function* fetchNews(data) {
  console.log("saga",data)
  // category = category.category
  // const country = category.country
  // console.log("cat ",category.category,country.country,"cate");
  const url = `https://newsapi.org/v2/top-headlines?category=${data.category}&country=${data.country}&apiKey=cc36c6c7d18441eea1aecb9d94900068`
  console.log(url);
  const json = yield fetch(url)
    .then(response => response.json());

  yield put({ type: "NEWS_RECEIVED", json: json.articles });
}

function* actionWatcher() {
  yield takeLatest('GET_NEWS', fetchNews)
}


export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}
