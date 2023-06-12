/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useState, useEffect } from "react";

const UsersFunction = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const data = await axios("https://jsonplaceholder.typicode.com/users");

      console.log(data);
      setUsers(getUsers.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    
      <div className="cards">
       { users.map((user) =>{
        return(
          <div key={user.id}>
            <p>Name:{user.name}</p>
            <p>Username:{user.username}</p>
            <p>Email:{user.email}</p>
          </div>
        )
       })}
      </div>
  );
};

export default UsersFunction;
