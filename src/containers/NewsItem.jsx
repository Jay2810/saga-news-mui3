import React from "react";
import { useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";

export default function NewsItem() {

let loading = useSelector(state=>state.loading)
let news = useSelector(state=>state.news)
  if(loading) {return null} 
  if(news){ return (
    <div>
      {/* <Stack direction="row" > */}
      <br />
      <br />
      <br />{" "}
      <Grid
        container
        spacing={1}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        {news.map((data) => {
          return (
            <Grid md={3} key={data.title} style={{ listStyleType: "none" }}>
              <Card sx={{ margin: "15px" }} height="600px">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="250"
                    image={data.urlToImage}
                    alt="news"
                  />
                  <CardContent
                    sx={{ height: "210px", contentVisibility: "auto" }}
                  >
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
                    <br />
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
              <br />
            </Grid>
          );
        })}
      </Grid>
    </div>
  )} 
  return null;
}

