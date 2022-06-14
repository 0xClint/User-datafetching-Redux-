import React from "react";
import { useSelector } from "react-redux/es/exports";
import Card from "./Card";
import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./CardList.css";

const CardList = () => {
  const Users = useSelector((state) => state.users);
  const userList = Users.userList[1];

  return (
    <div className="user_container">
      <Router>
        <div className="user_card">
          <Routes>
            <Route path="/user/:id" element={<Card />} />
          </Routes>
        </div>
        <div className="user_list-container">
          {userList?.map((e) => {
            const { id, email, first_name, last_name } = e;
            return (
              <Link
                to={"/user/" + id}
                element={<Card id={id} />}
                style={{ textDecoration: "none" }}
              >
                <div className="user-list">
                  <h1>
                    {first_name} {last_name}
                  </h1>
                  <p>{email}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </Router>
    </div>
  );
};

export default CardList;
