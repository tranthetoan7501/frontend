import React, { useEffect, useState } from "react";
import { Link, useLocation} from "react-router-dom";
import {getPostById} from '../../api'
import "./singlePost.css";

export default function SinglePost() {
  const location = useLocation();
  //console.log(location);
  //const navigate = useNavigate();
  const postId = location.pathname.split("/")[2];

  const [post, setPost] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const {data} = await getPostById(postId);
        console.log(data.data);
        setPost(data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src={post.image}
          alt=""
        />
        <h1 className="singlePostTitle">
          {post.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to="/posts?username=Safak">
                {post.owner? post.owner.username:""}
              </Link>
            </b>
          </span>
          <span>1 day ago</span>
        </div>
        <p className="singlePostDesc">
          {post.description}
          {/* <br />
          <br /> */}

        </p>
      </div>
    </div>
  );
}
