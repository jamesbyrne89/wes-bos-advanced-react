import React, { Component } from 'react';

export default class Page extends Component {
  render() {
    return <main>{this.props.children}</main>;
  }
}
