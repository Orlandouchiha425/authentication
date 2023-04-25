import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import { getUser } from "../utilities/users-api";

export default function NavBar({ user }) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await getUser();
          setData(response);
        } catch (err) {
          console.log(err);
        }
        setIsLoading(false);
      };
      fetchData();
    }, []);
  

    const Loading = () => {
        return (
          <div>
            <h1>Loading....</h1>
          </div>
        );
      };
    const navBar = (userData) => {
      return (
        <div>
          <nav>
            <Link to="/home">
              <h3>
                <strong>Home</strong>
              </h3>
            </Link>
            {userData && userData.name && (
              <Link to="/profile">
                <span>{userData.name}</span>
              </Link>
            )}
            <Link to="/logout">About Me</Link>
          </nav>
        </div>
      );
    };
  
    return isLoading ? Loading : (user ? navBar(data) : null);
  }
  
  
