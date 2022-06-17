import React from "react";
import {  useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";

export default function Loading()
{ 
  var loadingState = useSelector(state=>state.loading);
  if(loadingState)
  return(
    <div style={{ textAlign: "center" }}>
      <CircularProgress disableShrink style={{ marginTop: "20%" }} />
    </div>

  )
  return null;


}
