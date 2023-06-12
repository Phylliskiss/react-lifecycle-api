import React, { Component } from "react";

export class UsersClass extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((uiData) => {
        console.log(uiData);
        this.setState({ users: uiData });
      });
  }

  render() {
    return (
      <div className="cards">
        {this.state.users.slice(0, 4).map((user) => {
          return (
            <div key={user.id} className="card">
              <p>Name:{user.name}</p>
              <p>Username:{user.username}</p>
              <p>Email:{user.email}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default UsersClass;
