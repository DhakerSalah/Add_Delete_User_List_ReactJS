import React, { Component } from "react";

class Add extends Component {
  state = {
    name: "",
    age: ""
  };

  changer = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  ok = (e) => {
    e.preventDefault();
    this.props.addUser(this.state);
    this.setState({
        name:"",
        age:""
    })
  };

  render() {
    return (
      <form onSubmit={this.ok}>
        <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          id="name"
          className="form-control"
          onChange={this.changer}
          placeholder="name"
          value={this.state.name}
        />
        </div>

        <div className="mb-3">
        <label className="form-label">Age</label>
        <input
         type="text" 
         id="age" 
         className="form-control"
         onChange={this.changer} 
         placeholder="age" 
         value={this.state.age}
         />
         </div>

        <input 
         type="submit" 
         value="add" 
         className="btn btn-primary d-grid gap-2 col-2 mx-auto "
        />
      </form>
    );
  }
}
export default Add;
