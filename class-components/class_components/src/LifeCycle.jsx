import React from "react";
import ReactDOM from "react-dom";

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hello: "World!" };
  }

  // printed first
  componentWillMount() {
    console.log("componentWillMount()");
  }

  componentDidMount() {
    console.log("componentDidMount()");
  }

  changeState() {
    this.setState({ hello: "Geek!" });
  }

  render() {
    return (
      <div>
        <h1>GeeksForGeeks.org, Hello{this.state.hello}</h1>
        <h2>
          <a onClick={this.changeState.bind(this)}>Press Here!</a>
          {/* Printed second */}
          {console.log("rendered")}
        </h2>
      </div>
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    //Printed third
    console.log("shouldComponentUpdate()");
    //if it's false there will be no re-render
    return true;
  }

  componentWillUpdate() {
    // printed forth
    console.log("componentWillUpdate()");
  }

  componentDidUpdate() {
    //Printed last
    console.log("componentDidUpdate()");
  }
}

export default Test;
