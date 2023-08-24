import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

const UsersFunction = () => {
  const [users, setUsers] = useState([]);

  const imageUrls = [
    "/images/image1.jpg",
    "/images/image2.jpg",
    "/images/image3.jpg",
    "/images/image4.jpg",
    "/images/image5.jpg",
    "/images/image6.jpg",
    "/images/image7.jpg",
    "/images/image8.jpg",
    "/images/image9.jpg",
    "/images/image10.jpg",
    // Add more image URLs as needed
  ];

  const getUsers = async () => {
    try {
      const response = await axios("https://jsonplaceholder.typicode.com/users");
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {users.slice(0, 10).map((user, index) => {
          const imageUrl = imageUrls[index % imageUrls.length];

          return (
            <div key={user.id} className="col-md-3 mb-4">
              <div className="card">
                <img src={imageUrl} alt={`Image for ${user.name}`} className="card-img-top" />
                <div className="card-body">
                  <p className="card-text font-weight-bold">Name: {user.name}</p>
                  <p className="card-text">Username: {user.username}</p>
                  <p className="card-text">Email: {user.email}</p>
                  <Button variant="danger" className="mybtn"> Vote for Nominee</Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UsersFunction;

