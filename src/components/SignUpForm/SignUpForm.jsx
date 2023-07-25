// import { Component } from "react";
import { useState } from "react";
import { signUp } from '../../utilities/users-service';
import { useNavigate } from "react-router-dom";
import styles from "./SignUpForm.module.css";
import { Link } from "react-router-dom";

export default function SignUpForm({ setUser, user }) {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
    error: "",
  });

  let navigate = useNavigate();

  const handleChange = (evt) => {
    setState({ ...state, [evt.target.name]: evt.target.value, error: "" });

    //this is saying, we want setState to by dynamic({will copy everything from state,name emailpassword etc
    //but in the [evt.target.name value error, we specified what needs to be dynamic or needs changed thats why password and confirm is not necessary]})
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    //prevent function stops the default action from happening and stops the bubbling

    try {
      const formData = { ...state }; //assign variable fomdata to everything in state from line 4-8 empty ofcourse,havent done anything yet
      delete formData.error;
      delete formData.confirm;

      const newUser = await signUp(formData);
      setUser(newUser);
      navigate("/");
      // const user=await SignUp(formData)
    } catch (err) {
      console.log(err);
      setState({ error: "Sign Up Failed" });
    }
  };

  const disable = state.password !== state.confirm;

  return (
    <div>
      <style>{"body { background: linear-gradient(#141e30, #243b55)}"}</style>
      <div className={styles.loginbox}>
        <h2>SignUp</h2>
        <h5>
          Need to Login ?
          <Link className="nav-link active" to="/login">
            <button>
              <em>Click Here</em>
            </button>
          </Link>
        </h5>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <div className={styles.userbox}>
            <input
              type="text"
              name="name"
              value={state.name}
              onChange={handleChange}
              required
            />
            <label>Name</label>
          </div>

          <div className={styles.userbox}>
            <input
              type="email"
              name="email"
              value={state.email}
              onChange={handleChange}
              required
            />
            <label>Email</label>
          </div>

          <div className={styles.userbox}>
            <input
              type="password"
              name="password"
              value={state.password}
              onChange={handleChange}
              required
            />
            <label>Password</label>
          </div>

          <div className={styles.userbox}>
            <input
              type="password"
              name="confirm"
              value={state.confirm}
              onChange={handleChange}
              required
            />

            <label>Confirm</label>
          </div>

          <button type="submit" disabled={disable}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Sign Up
          </button>
        </form>
      </div>
      <p className="error-message">
        &nbsp;{state.error} <style>{"body { background: color)}"}</style>
      </p>
    </div>
  );
}


