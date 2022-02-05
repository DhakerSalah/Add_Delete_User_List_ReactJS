import "./index.css";
import { Component } from "react";
import User from "./User";
import Add from "./Add";

class App extends Component {

  state = {
    users: [
      { id: 1, name: "Alex", age: "20" },
      { id: 2, name: "John", age: "25" },
      { id: 3, name: "Mario", age: "30" }
    ]
  };

  addUser = (user) => {
    user.id = Math.random();
    const { users } = this.state;
    users.push(user);
    this.setState({
      users
    });
  };

  deleteUser = (id) => {
    let users = this.state.users.filter((user) => {
      return user.id !== id;
    });
    this.setState({
      users
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center">Welcome with us</h1>
        <Add addUser={this.addUser} />
        <User users={this.state.users} deleteUser={this.deleteUser} />
      </div>
    );
  }
}
export default App;