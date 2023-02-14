import { Link } from "react-router-dom";
import "./post.css";

export default function Post({id,title, content,img}) {
  return (
    <div className="post">
      <Link to={`/post/${id}`} className="link">
        <img
        className="postImg"
        src={img}
        alt=""
          />
      </Link>
      
      <div className="postInfo">
        <div className="postCats">
          {/* <span className="postCat">
            <Link className="link" to="/">
              Music
            </Link>
          </span>
          <span className="postCat">
            <Link className="link" to="/">
              Life
            </Link>
          </span> */}
        </div>
        <span className="postTitle">
          <Link to={`/post/${id}`} className="link">
            {title}
          </Link>
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        {content}

      </p>
    </div>
  );
}
