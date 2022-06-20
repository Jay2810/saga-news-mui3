import React, { useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Switch from "@mui/material/Switch";
import { getNews } from "../actions";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import { categoriesArr, countriesArr } from "../static/data";
import { Button, MenuItem } from "@mui/material";
import { useRef } from "react";
const lodash = require("lodash");

export default function ButtonMui() {
  const [category, setCategory] = useState("");
  const [country, setCountry] = useState("");
  const dispatch = useDispatch();
  const textRef = useRef("");
  const question = useRef("");

  function handleCategory(event) {
    setCategory(event.target.value);
  }
  const handleCountry = (event) => {
    setCountry(event.target.value);
  };

  useEffect(() => {
    if (category !== "" && country !== "") {
      dispatch(getNews(category, country));
    }
  }, [category, country]);

  const handleTop = (event) => {
    dispatch({ type: "GET_NEWS", query: event.target.value });
  };

  const handleTop1 = () => {
    // console.log("Top ",textRef.current.value);
    if (question.current.value != "") {
      dispatch({ type: "GET_NEWS", query: question.current.value });
    }
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="category"
          value={category}
          label="Category"
          onChange={handleCategory}
        >
          {categoriesArr.map((cat) => {
            return (
              <MenuItem key={cat.name} value={cat.name}>
                {cat.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Country</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="country"
          value={country}
          label="Category"
          onChange={handleCountry}
        >
          {countriesArr.map((con) => {
            return (
              <MenuItem key={con.code} value={con.code}>
                {con.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>

      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="top"
          type="text"
          label="Search"
          variant="outlined"
          inputRef={question}
          // onChange={()=>console.log(question.current.value)}
          // onChange={lodash.debounce(handleTop, 1000)}
          // value={qu.current}
          placeholder="Gujarat"
        />

        {/* <input type="text" ref={textRef} onChange={()=>console.log(textRef.current.value)} /> */}
        <Button
          style={{ marginTop: "16px" }}
          variant="contained"
          onClick={handleTop1}
        >
          Click
        </Button>
      </Box>
    </div>
  );
}
