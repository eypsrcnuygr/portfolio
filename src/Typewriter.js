import React from "react";

export default class Typewriter extends React.Component {
  state = {
    typeColor: {
      color: "blue",
    },
    typed: "",
  };

  componentDidMount() {
    this.a = setTimeout(
      () =>
        this.typeWord(
          this.props.inputStrings[0],
          [].concat(this.props.inputStrings)
        ),
      1200
    );
  }

  typeWord(word, words) {
    this.stringChecker(word, words);
  }

  componentWillUnmount() {
    clearTimeout(this.a) 
  }


  typeWriter(string, words) {
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
      this.state.typed ===
      "I am a material scientist and a developer. Residing between Kuşadası and İstanbul, Turkey. Working as a part-time Technical Support Engineer at Microverse. Interested in music and poetry. Below are my skills. I can help you to build a product."
    ) {
      setTimeout(() => {
        this.setState({
          typed: "",
        });
        setTimeout(() => words[0] && this.typeWord(words[0], words), 100);
      }, 2000);
    }
  }

  stringChecker(string, words) {
    if (string === "Johnson") {
      this.setState({ typeColor: { color: "blue" } });
    } else {
      this.setState({ typeColor: { color: "white" } });
    }
    this.typeWriter(string, words);
  }

  render() {
    return <div style={this.state.typeColor}>{this.state.typed}</div>;
  }
}
