import React from "react";
import { useState } from "react";
import { signUp } from "../../utilities/users-service";
import { useNavigate } from "react-router-dom";
function SignUpForm({ setUser, user }) {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
    error: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value, error: "" });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = { ...state };
      delete formData.error;
      delete formData.confirm;

      const newUser = await signUp(formData);
      setUser(newUser);
      navigate("/home");
    } catch (error) {
      console.log(error);
      setState({ error: "Sign Up Failed" });
    }
  };


    const disable = this.state.password !== this.state.confirm;
  return (
    <div>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>Name</label>
          <input type="text" name="name" value={state.name} onChange={handleChange} required />
          <label>Email</label>
          <input type="email" name="email" value={state.email} onChange={handleChange} required />
          <label>Password</label>
          <input type="password" name="password" value={state.password} onChange={handleChange} required />
          <label>Confirm</label>
          <input type="password" name="confirm" value={state.confirm} onChange={handleChange} required />
          <button type="submit" disabled={disable}>SIGN UP</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{this.state.error}</p>
    </div>
  );
  
}

export default SignUpForm;
