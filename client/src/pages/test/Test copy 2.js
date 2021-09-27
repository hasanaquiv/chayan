import React, { useState, useEffect } from "react";
import axios from "axios";

import Checkbox from "./Checkbox";
import { Catalogues } from "./mock";
import EnhancedTable from "./EnhancedTable";


const Test = () => {

  const data = async () => {
    const token = JSON.parse(localStorage.getItem("authUser"));
  try {
    const { data } = await axios.get("/api/home", {
      headers: { Authorization: token },
    });
    // return data;
    console.log(data);
  } catch (err) {
    console.log(err);
  }
  }

  useEffect(() =>{
    data()
  },[])

  return(
    <h1 style={{marginTop:"100px"}}>Test</h1>
  )
  
};
export default Test;
