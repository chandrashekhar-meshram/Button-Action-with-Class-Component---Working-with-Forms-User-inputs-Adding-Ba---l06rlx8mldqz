import React, { Component } from "react";

import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: "",
    };
  }

  showFn = () => {
    this.setState({
      show: `Hello, I've learnt to use the full-stack evaluation tool. This
            makesme so happy`,
    });
  };

  render() {
    return (
      <div id="main">
        {/* Do not remove this main div!! */}
        <button
          id="click"
          onClick={this.showFn}
        >
          render a paragraph tag
        </button>
        <p id="para">{this.state.show}</p>
      </div>
    );
  }
}

export default App;
