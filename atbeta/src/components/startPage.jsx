import React, { Component } from "react";
import Borrowing from "./borrowing";
import lending from "./lending";
import profile from "./profile";

class StartPage extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <h1>Welcome Bill!</h1>

        <button>Borrowing</button>
        <button>Lending</button>
        <button>My Profile</button>
      </div>
    );
  }
}

export default StartPage;
