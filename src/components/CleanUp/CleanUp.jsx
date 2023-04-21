import React, { useState } from "react";
import SignUpForm from "../SignUpForm/SignUpForm";
import { getUser } from "../../utilities/users-service";
import Home from "../Home/Home";
import { Routes, Route } from "react-router-dom";

function CleanUp() {
  const [user, setUser] = useState(getUser());

  return (
    <div>
      <Routes>
        {user ? (
          <>
            <Route path="/home">
              <Home />
            </Route>
          </>
        ) : (
          <>
            <Route path="/">
              <SignUpForm setUser={setUser} user={user} />
            </Route>
          </>
        )}
      </Routes>
    </div>
  );
}

export default CleanUp;
