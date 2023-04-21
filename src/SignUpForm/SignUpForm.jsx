import React from "react";
import { useState } from "react";
import { signUp } from "../utilities/users-service";
function SignUpForm({ setuser, user }) {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
    error: "",
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value, error: "" });
  };
  const submitForm = async (event) => {
    event.preventDefault()
    try{
        const formData = {...state}
        delete formData.error;
        delete formData.confirm;
        
        const newUser = await signUp(formData)
        setState(newUser)
    }
    catch(error){
      console.log(error)
    }
  };

  return <div>SignUpForm</div>;
}

export default SignUpForm;
