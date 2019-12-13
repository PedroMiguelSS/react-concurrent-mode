import React from "react";
import { render, createRoot } from "react-dom";
import List from "./List";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increaseCount() {
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count);
  }

  render() {
    return (
      <div style={styles}>
        <List />
      </div>
    );
  }
}

// render(<App />, document.getElementById("root"));

// Enables concurrent mode
createRoot(document.getElementById("root")).render(<App />);
