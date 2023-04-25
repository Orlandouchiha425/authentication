import React, { useState } from "react";
import SignUpForm from "../SignUpForm/SignUpForm";
import { getUser } from "../../utilities/users-service";
import Home from "../Home/Home";
import { Routes, Route } from "react-router-dom";
import UserLogOut from "../Logout/Logout";
import LoginForm from "../LoginForm/LoginForm";

function CleanUp() {
  const [user, setUser] = useState(getUser());

  return (
    <Routes>
      {user ? (
        <>
          <Route path="/home" element={<Home setUser={setUser} />} />
          <Route
            path="/logout"
            element={<UserLogOut user={user} setUser={setUser} />}
          />
        </>
      ) : (
        <>
          <Route
            path="/signup"
            element={<SignUpForm setUser={setUser} user={user} />}
          />
          <Route
            path="/login"
            element={<LoginForm setUser={setUser} user={user} />}
          />
          <Route
            path="/*"
            element={<SignUpForm setUser={setUser} user={user} />}
          />
        </>
      )}
    </Routes>
  );
}

export default CleanUp;
