import React, { Component } from "react";
// import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  //   componentDidMount() {
  //     console.log("did update run");
  //     this.showFn();
  //   }

  //   showFn = () => {
  //     console.log("showfn run");
  //     this.setState({
  //       show: this.state.show,
  //     });
  //   };

  render() {
    console.log("button clicked");
    return (
      <div id="main">
        {/* Do not remove this main div!! */}
        <button id="click" onClick={this.showFn}>
          render a paragraph tag
        </button>
        {/* {this.show && (
          <p id="para">
            Hello, I've learnt to use the full-stack evaluation tool. This
            makesme so happy
          </p>
        )} */}
      </div>
    );
  }
}

export default App;
