import React, { Component } from "react";
import Heading from "./Heading";
class Display extends Component {
  onClick = subscriberId => {
    this.props.handleDelete(subscriberId);
  };

  render() {
    return (
      <div>
        <Heading heading="Phone Directory" />
        <br />
        <div className="container">
          <a href="/add">
            <button className="btn-success">Add</button>
          </a>
          <br />
          <br />
          <div>
            <div className="row">
              <div className="col-sm-6">
                <span>Name</span>
              </div>
              <div className="col-sm-6">
                <span> Phone</span>
              </div>
            </div>
          </div>
          {this.props.subscribersList.map(sub => {
            return (
              <div key={sub.id}>
                <div className="row">
                  <div className="col-sm-6">
                    <span>{sub.name}</span>
                  </div>
                  <div className="col-sm-3">
                    <span>{sub.phone}</span>
                  </div>
                  <div className="col-sm-3">
                    <span>
                      <button
                        className="btn-danger"
                        onClick={this.onClick.bind(this, sub.id)}
                      >
                        Delete
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Display;
