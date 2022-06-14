import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Card.css";

const Card = () => {
  const [user, setUser] = useState({});
  const params = useParams();

  const url = `https://reqres.in/api/users/${params.id}`;

  useEffect(() => {
    axios.get(url).then((response) => {
      setUser(response.data.data);
    });
  }, [params]);

  return (
    <div className="user-container">
      <div
        className="img-container"
        style={{ backgroundImage: `url("${user.avatar}")` }}
      >
        <img />
      </div>
      <div className="user_content">
        <div className="id">Serial no.:{user.id}</div>
        <div className="name">
          Name: {user.first_name} {user.last_name}
        </div>
        <div className="email">email: {user.email}</div>
      </div>
    </div>
  );
};

export default Card;
