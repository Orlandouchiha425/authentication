import { useState } from 'react';
import styles from "./LoginForm.module.css"
import * as usersService from '../../utilities/users-service';
import { Link, useNavigate } from "react-router-dom";

export default function LoginForm({ setUser }) {
    const [credentials, setCredentials] = useState({
      email: '',
      password: ''
    });
    const [error, setError] = useState('');
  
    function handleChange(evt) {
      setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
      setError('');
    }
  
    let navigate = useNavigate();
    async function handleSubmit(evt) {
      evt.preventDefault();
      try {
        const user = await usersService.login(credentials);
        setUser(user);
        navigate('/')
      } catch {
        setError('Log In Failed - Try Again');
      }
    }
  
    return (
      <div>
        {error && <p>{error}</p>}
        <style>{'body { background: linear-gradient(#141e30, #243b55)}'}</style>
        <div className={styles.loginbox}>
          <h2>Login</h2>
          <h5>Need to Sign Up? <Link className="nav-link active" to='/signup'><button><em>Click Here</em></button> </Link></h5>
          <form autoComplete="off" onSubmit={handleSubmit}>
            <div className={styles.userbox}>
              <input type="text" name="email" value={credentials.email} onChange={handleChange} required placeholder='use this email: test@gmail.com'/>      
              <label>Email</label>
            </div>
            <div className={styles.userbox}>
              <input type="password" name="password" value={credentials.password} onChange={handleChange} required placeholder='use this password: 123456'/>
              <label>Password</label>
            </div>
            <button type='submit'>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Submit
            </button>
          </form>
        </div>
      </div>
    )
  }
  