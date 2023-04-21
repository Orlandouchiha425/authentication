import './App.css';
import { getUser } from './utilities/users-service';
import { useState } from 'react';
import SignUpForm from './SignUpForm/SignUpForm';
function App() {
  const [user,setUser] = useState(getUser())

  return (
    <div className="App">
  <SignUpForm setUser={setUser} user={user}/>
    </div>
  );
}

export default App;
