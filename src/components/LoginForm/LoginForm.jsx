import { useState } from 'react';
import * as userService from '../../utilities/users-service';
import {Link, useNavigate} from "react-router-dom";


export default function LoginForm ({ setUser }) {
    const [credentials, setCredentials ] = useState({
        email: '',
        password: ''
    })
    const [ error, setError ] = useState('')

    const handleChange = (evt) => {
        setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
        setError('');
    }

    let navigate = useNavigate()

    const handleSubmit = async (evt) => {
        evt.preventDefault()
        try{
            const user = await userService.login(credentials);
            setUser(user)
            navigate('/home')
        }catch(error){
            setError(error)
        }
    }

return (
    <div >
<div  >
 <h2>Login</h2>
 <h5>Need to Sign Up? <Link  to='/signup'><button><em>Click Here</em></button> </Link></h5>
 <form autoComplete="off" onSubmit={handleSubmit} >
   <div >
   <input type="text" name="email" value={credentials.email} onChange={handleChange} required placeholder='use this email: test@gmail.com'/>      <label>Email</label>
   </div>
   <div>
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
<h1 className="error-message">&nbsp;{error}</h1>

</div>
)
    
}