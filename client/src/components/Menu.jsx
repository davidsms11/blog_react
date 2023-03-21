import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const Menu = () => {
  const [posts, setPosts] = useState([]);
  const cat = useLocation().search;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/?cat=${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);
  /*   const posts = [
    {
      id: 1,
      title: "lorem dbkshbaskdasbdm dbkshbaskdasbdm askdasbd",
      desc: "lorem dbm dbkshbaskdasbdbm dbkshbaskdasbdbm dbkshbaskdasbdbm dbkshbaskdasbdbm dbkshbaskdasbdbm dbkshbaskdasbdbm dbkshbaskdasbdbm dbkshbaskdasbdkshbaskdasbd",
      img: "https://images.pexels.com/photos/1154638/pexels-photo-1154638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      title: "lorem dbkshbaskdasbdm dbkshbaskdasbdm dbkshbask",
      desc: "lorem dbm dbkshbaskdasbdbm dbkshbaskdasbdbm dbkshbaskdasbdbm dbkshbaskdasbdbm dbkshbaskdasbdbm dbkshbaskdasbdbm dbkshbaskdasbdbm dbkshbaskdasbdkshbaskdasbd",
      img: "https://images.pexels.com/photos/4871012/pexels-photo-4871012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      title: "lorem dbkshbaskdasbdm dbkshbaskdasbdm dbkbd",
      desc: "lorem dbm dbkshbaskdasbdbm dbkshbaskdasbdbm dbkshbaskdasbdbm dbkshbaskdasbdbm dbkshbaskdasbdbm dbkshbaskdasbdbm dbkshbaskdasbdbm dbkshbaskdasbdkshbaskdasbd",
      img: "https://images.pexels.com/photos/1154638/pexels-photo-1154638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];
 */
  return (
    <div className="menu">
      <h1>Other post may you like </h1>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <img src={`../upload/${post?.img}`} alt="" />
          <h2> {post.title} </h2>
          <button>Read More</button>
        </div>
      ))}
    </div>
  );
};

export default Menu;
