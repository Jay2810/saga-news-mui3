import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from '@mui/material/Button';import { connect } from "react-redux";
import { getNewss } from "../actions";
import {store} from "../index.js"

const mapDispatchToProps = {
  loadnews: getNewss,
};

function Buttonmui() {
  const [category, setCategory] = useState("");
  const [country, setCountry] = useState("");
  const [disabled,setDisabled]  = useState(true);

  const handleCategory = (event) => {
    setCategory(event.target.value);
    document.getElementById("category").value = event.target.value;
    console.log("OK", document.getElementById("category").value);
    if(document.getElementById("country").value){setDisabled(false)}
    store.dispatch(getNewss(
      event.target.value,
      document.getElementById("country").value
    ))
  };



  const handleCountry = async (event) => {
    setCountry(event.target.value);
    // console.log(event.target.value);
    document.getElementById("country").value = event.target.value;
    // console.log(country);
    console.log("OK", document.getElementById("country").value);
    if(document.getElementById("category").value){setDisabled(false)}
    
    store.dispatch(getNewss(
      document.getElementById("category").value,
      event.target.value
    ))

  };

  return (
    <div style={{marginTop:"20px"}}>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="category"
          value={category}
          label="Category"
          onChange={handleCategory}
        >
          <MenuItem value="health">Health</MenuItem>
          <MenuItem value="business">Business</MenuItem>
          <MenuItem value="technology">Technology</MenuItem>
          <MenuItem value="science">Science</MenuItem>
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
          <MenuItem value="in">India</MenuItem>
          <MenuItem value="us">USA</MenuItem>
          <MenuItem value="de">Germany</MenuItem>
          <MenuItem value="fr">France</MenuItem>
        </Select>
        </FormControl>

        <Button variant="contained" 
        disabled={disabled}
        
        style={{margin:"15px 16px auto"}}>Explore</Button>

    </div>
  );
}

const Buttonmui1 = connect(null, mapDispatchToProps)(Buttonmui);

export default Buttonmui1;
