import React, { useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { getNewss } from "../actions";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import { categoriesarr, countriesarr } from "../static/data";
import { MenuItem } from "@mui/material";
const lodash = require("lodash");

export default function Buttonmui() {
  const dispatch = useDispatch();
  const [category, setCategory] = useState("");
  const [country, setCountry] = useState("");

  function handleCategory(event) {
    setCategory(event.target.value);
  }
  const handleCountry = (event) => {
    setCountry(event.target.value);
  };
  useEffect(() => {
    dispatch(getNewss(category, country));
  }, [category, country]);

  const handleTop = (event) => {
    dispatch({ type: "GET_NEWS", query: event.target.value });
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
          {categoriesarr.map((cat) => {
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
          {countriesarr.map((con) => {
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
          label="Search"
          variant="outlined"
          onChange={lodash.debounce(handleTop, 1000)}
          placeholder="Gujarat"
        />
      </Box>
    </div>
  );
}

// export default connect(null, mapDispatchToProps)(Buttonmui);
// exprot default Buttonmui;
