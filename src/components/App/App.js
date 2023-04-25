import React, { useState } from "react";
import SignUpForm from "../SignUpForm/SignUpForm";
import LoginForm from "../LoginForm/LoginForm";
import { getUser } from "../../utilities/users-service";
import { Routes, Route } from "react-router-dom";
import UserLogOut from "../Logout/Logout";
import Home from "../Home/Home";

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <div className="App">
      <Routes>
        {user ? (
          <>
            <Route path="/home" element={<Home setUser={setUser} />} />
            <Route path='/logout' element = {<UserLogOut user={user} setUser={setUser}/>}/>

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
              <Route path="/*"  element={<SignUpForm  setUser={setUser} user={user}/>}/>

          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
