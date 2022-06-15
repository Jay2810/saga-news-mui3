import React from "react";
import { connect } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import { display } from "@mui/system";
import CircularUnderLoad from "./circleload"
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
let NewsItem = ({ loading, news }) =>
  loading ? null : news ? (
    <div>
      {/* <Stack direction="row" > */}
      <br />
      <br />
      <br />{" "}
      <Grid
        container
        spacing={3}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        {news.map((data) => {
          // console.log(JSON.stringify(data.name));
          console.log(data.urlToImage);
          return (
            <Grid md={3} key={data.title} style={{ listStyleType: "none" }}>
              <Card sx={{margin:"35px"}}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="250"
                    image={data.urlToImage}
                    alt="news"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {data.source.name}
                    </Typography>
                    <Typography variant="body1" color="text.primary">
                      {data.title}
                    </Typography>
                    <br />
                    <Divider />
                    <br />
                    <Typography variant="body4" color="text.secondary">
                      {data.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    target="_blank"
                    size="small"
                    variant="outlined"
                    href={data.url}
                    color="warning"
                    style={{ marginLeft: "5px" }}
                  >
                    Full coverage
                  </Button>
                </CardActions>
              </Card>
              <br /> <br /> <br />
            </Grid>
          );
        })}
      </Grid>
      {/* </Stack> */}
    </div>
  ) : null;

const mapStateToProps = (state) => ({
  news: state.news,
  loading: state.loading,
});

NewsItem = connect(mapStateToProps, null)(NewsItem);

export default NewsItem;
