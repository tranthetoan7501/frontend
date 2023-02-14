import Post from "../post/Post";
import { getPost } from "../../api";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';


import "./posts.css";

export default function Posts() {
  const { notify } = useContext(AuthContext);
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const {data} = await getPost();
        setItems(data.data);
      } catch (err) {
        notify(err.response.data.error);
      }
    };
    fetchData();
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  return (
    <div className="posts">
      {items.map((item)=>{
        return <Post key={item._id} id={item._id} title={item.title} content={item.description} img={item.image}/>
      })}
    </div>
  );
}
