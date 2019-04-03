import React, { Component } from "react";
import Heading from "./Heading";
class Add extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      name: "",
      phone: ""
    };
  }

  handleChange = e => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleAdd(this.state);
    this.setState({ id: 0, name: "", phone: " " });
    this.props.history.push("/");
  };

  render() {
    const { name, phone } = this.state;

    return (
      <div>
        <Heading heading="Add Subscriber" />
        <div className="container">
          <br />
          <a href="/">
            <button>Back</button>
          </a>
          <br />
          <br />
          <form onSubmit={this.handleSubmit.bind(this)}>
            <label htmlFor="name">Name: </label>
            <br />
            <input
              id="name"
              type="text"
              name="name"
              onChange={this.handleChange}
            />
            <br />
            <br />
            <label htmlFor="phone">Phone: </label>
            <br />
            <input
              id="phone"
              type="text"
              name="phone"
              onChange={this.handleChange}
            />
            <br />
            <br />
            <div>
              <span>Subscriber to be added: </span>
              <br />
              <br />
              <span>Name: {name}</span>
              <br />
              <span>Phone: {phone}</span>
              <br />
            </div>
            <br />
            <button className="btn-success" type="submit">
              Add
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default Add;
