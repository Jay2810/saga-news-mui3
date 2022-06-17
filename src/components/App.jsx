import React from "react";
import NewsItem from "../containers/NewsItem";
import Loading from "../containers/Loading";
import ButtonMui from "../containers/ButtonMui";
import ButtonAppBar from "../containers/AppBar";
let App = () => (
  <div>
    <ButtonAppBar />
    <ButtonMui />
    <Loading />
    <NewsItem />
  </div>
);

export default App;
