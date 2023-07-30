import React, { Component } from "react";

class ComponentToView extends React.Component {
  constructor() {
    super();
    this.state = {
      subject: "JavaScript",
    };
  }

  handleChange = (event) => {
    this.setState({ subject: event.target.value });
  };

  render() {
    return (
      <div>
        <h4 style={{ color: "#68cf48" }}>GeeksForGeeks</h4>
        {/* View to component data binding */}
        <input placeholder="Enter Subject" onChange={this.handleChange}></input>
        <p>
          {/* component to view data binding */}
          <b>{this.state.subject}</b> Tutorial
        </p>
      </div>
    );
  }
}

export default ComponentToView;
