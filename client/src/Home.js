import React,{useState} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Home = (props) => {
    const [posts, setPosts] = useState([]);
    const { id } = useParams();

    React.useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
            setPosts(res.data.slice(0, 10));
            // console.log(posts);
        },[])
    });
  return (
    <div>
      <h1>{id}</h1>
      <h1>Home2</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home2</h1>      
      <h1>{id}</h1>
    </div>
  );
};

export default Home;
