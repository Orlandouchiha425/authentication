import React, { useState } from 'react';
import SignUpForm from '../SignUpForm/SignUpForm';
import { getUser } from '../../utilities/users-service';
import { Routes, Route } from "react-router-dom";
import Home from '../Home/Home';

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <div className="App">
      <Routes>
        {user ?
          <Route path="/" element={<Home setUser={setUser}/>}/>
          :
          <Route path="/signup" element={<SignUpForm setUser={setUser} user={user}/>}/>
        }
      </Routes>
    </div>
  );
}

export default App;
