import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Add from "./Add";
import Display from "./Display";
class App extends Component {
  constructor() {
    super();
    this.state = {
      subscribersList: [{ id: 1, name: "abc", phone: "0000" }]
    };
  }

  handleAdd = newSubscriber => {
    let subscribersList = this.state.subscribersList;
    if (subscribersList.length > 0) {
      newSubscriber.id = subscribersList[subscribersList.length - 1].id + 1;
    } else {
      newSubscriber.id = 1;
    }
    subscribersList.push(newSubscriber);
    this.setState({ subscribersList: subscribersList });
  };
  handleDelete = subscriberId => {
    let subscribersList = this.state.subscribersList;
    let subscriberIndex = 0;
    subscribersList.forEach(function(subscriber, index) {
      if (subscriber.id === subscriberId) {
        subscriberIndex = index;
      }
    }, this);
    let newSubscribers = subscribersList;
    newSubscribers.splice(subscriberIndex, 1);
    this.setState({ subscribers: newSubscribers });
  };

  render() {
    return (
      <Router>
        <div>
          <Route
            exact
            path="/"
            render={props => (
              <Display
                {...props}
                subscribersList={this.state.subscribersList}
                handleDelete={this.handleDelete}
              />
            )}
          />
          <Route
            exact
            path="/add"
            render={({ history }, props) => (
              <Add history={history} {...props} handleAdd={this.handleAdd} />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
