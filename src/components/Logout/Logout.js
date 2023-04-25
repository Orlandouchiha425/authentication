import { logout } from '../../utilities/users-service';
// import styles from "./LogOut.module.css"
export default function UserLogOut({ user, setUser }) {
function handleLogOut() {
  logout();
  setUser(null);
}


return (
 <div className="snow">
  
    <div>
      <h1>{user.email}</h1>
      <h1>{user.name}</h1>
       <button  onClick={handleLogOut}>LOG OUT</button>
    </div>
    
    </div>
  );
  }