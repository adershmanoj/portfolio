import React, { Component } from 'react';

export default class Cursor extends Component {

  constructor(props) {
    super(props);
    this.state = {
      display: true
    };
    this.animateCursor = this.animateCursor.bind(this);
  }

  componentDidMount() {
    this.animateCursor();
  }

  componentWillUnmount() {
    this._interval && clearInterval(this._interval);
  }

  animateCursor() {
    this._interval = setInterval(() => {
      this.setState({ display: !this.state.display });
    }, 500);
  }

  render() {
    const { display } = this.state;
    return (
      <span style={getStyles(display)}>|</span>
    );
  }
}

const getStyles = (display = true) => {
  return {
    MsTransition: "opacity 0.5s",
    WebkitTransition: "opacity 0.5s",
    MozTransition: "opacity 0.5s",
    transition: "opacity 0.5s",
    opacity: display ? 1 : 0
  };
};