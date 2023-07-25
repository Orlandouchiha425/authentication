import React, { useState } from "react";
import SignUpForm from "../SignUpForm/SignUpForm";
import { getUser } from "../../utilities/users-service";
import Home from "../Home/Home";
import { Routes, Route } from "react-router-dom";
import Logout from "../Logout/Logout";
import LoginForm from "../LoginForm/LoginForm";
import NavBar from "../../NavBar/NavBar";

function CleanUp() {
  const [user, setUser] = useState(getUser());

  return (
    <div>
    <NavBar setUser={setUser} user={user} />

    <Routes>
      {user ? (
        
        <>
              

          <Route path="/home" element={<Home setUser={setUser} />} />
          <Route path='/logout' element = {<Logout user={user} setUser={setUser}/>}/>
        
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
    </div>
  );
}

export default CleanUp;
