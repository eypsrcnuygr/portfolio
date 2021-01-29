import React from "react";

export default class Typewriter extends React.Component {
  state = {
    typeColor: {
      color: "blue",
    },
    typed: "",
  };

  componentDidMount() {
    this._isMounted = true;
    if (this._isMounted) {
      setTimeout(
        () =>
          this.typeWord(
            this.props.inputStrings[0],
            [].concat(this.props.inputStrings)
          ),
        1200
      );
    }  
  }

  typeWord(word, words) {
    if (this._isMounted) {
      this.stringChecker(word, words);
    }
    
  }


  typeWriter(string, words) {
    if (this._isMounted) {
      if (string.length === 0) {
        words = words.slice(1);
        words[0] && this.typeWord(words[0], words);
      } else {
        this.setState((state, props) => ({
          typed: state.typed.concat(string[0]),
        }));
  
        setTimeout(() => this.typeWriter(string.slice(1), words), 100);
      }
      if (
        this.state.typed.includes("product.")
      ) {
        setTimeout(() => {
          this.setState({
            typed: "",
          });
          setTimeout(() => words[0] && this.typeWord(words[0], words), 100);
        }, 2000);
      }
    }
    
  }

  stringChecker(string, words) {
    if (this._isMounted) {
      if (string === "Johnson") {
        this.setState({ typeColor: { color: "blue" } });
      } else {
        this.setState({ typeColor: { color: "white" } });
      }
      this.typeWriter(string, words);
    }
    
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return <div style={this.state.typeColor}>{this.state.typed}</div>;
  }
}
