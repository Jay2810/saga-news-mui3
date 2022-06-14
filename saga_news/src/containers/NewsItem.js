import React from "react";
import { connect } from "react-redux";

// function display(news){
//   console.log("AAAAA",news);
//   const listitem = news.map( data => {
//         <li>{data.name}</li>
//         console.log("data",data.name);
//       }
//       )
//       console.log("BBBBBBB",listitem);
// return listitem
// }
let NewsItem = ({loading, news }) =>
 loading? null
:
( news ? (
  <div>
    <ul>
             {news.map((data) => {
        // console.log(JSON.stringify(data.name));
        return (
          <li>
            Source : {JSON.stringify(data.author)}
            <br />
            Discription : {JSON.stringify(data.description)}
            <br />  <br /> 
          </li>
        );
      })}

    </ul>
  </div>
) : null);

const mapStateToProps = (state) => ({
  news: state.news,
  loading:state.loading
});

NewsItem = connect(mapStateToProps, null)(NewsItem);

export default NewsItem;
