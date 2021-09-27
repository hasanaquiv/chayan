import React,{useState} from "react";
import axios from "axios";

const Home = () => {
    React.useEffect(() => {
        axios.get('/home').then((res) => {
            console.log(res);
        })
    },[]);

  return (
    <div>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
