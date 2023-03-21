import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

export const Home = () => {
  const [posts, setPosts] = useState([]);

  const cat = useLocation().search;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);
  // const posts = [
  //   {
  //     id: 1,
  //     title: "lorem dbkshbaskdasbdm dbkshbaskdasbdm askdasbd",
  //     desc: "lorem dbm dbkshbaskdasbdbm dbkshbaskdasbdbm dbkshbaskdasbdbm dbkshbaskdasbdbm dbkshbaskdasbdbm dbkshbaskdasbdbm dbkshbaskdasbdbm dbkshbaskdasbdkshbaskdasbd",
  //     img: "https://images.pexels.com/photos/4871012/pexels-photo-4871012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   },
  //   {
  //     id: 2,
  //     title: "lorem dbkshbaskdasbdm dbkshbaskdasbdm dbkshbask",
  //     desc: "lorem dbm dbkshbaskdasbdbm dbkshbaskdasbdbm dbkshbaskdasbdbm dbkshbaskdasbdbm dbkshbaskdasbdbm dbkshbaskdasbdbm dbkshbaskdasbdbm dbkshbaskdasbdkshbaskdasbd",
  //     img: "https://images.pexels.com/photos/1154638/pexels-photo-1154638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   },
  //   {
  //     id: 3,
  //     title: "lorem dbkshbaskdasbdm dbkshbaskdasbdm dbkbd",
  //     desc: "lorem dbm dbkshbaskdasbdbm dbkshbaskdasbdbm dbkshbaskdasbdbm dbkshbaskdasbdbm dbkshbaskdasbdbm dbkshbaskdasbdbm dbkshbaskdasbdbm dbkshbaskdasbdkshbaskdasbd",
  //     img: "https://images.pexels.com/photos/1154638/pexels-photo-1154638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   },
  // ];

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={`../upload/${post.img}`} alt="" />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{getText(post.desc)}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
