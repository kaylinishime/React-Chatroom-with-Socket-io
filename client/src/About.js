import React, { Component } from 'react';
import ChatNav from './ChatNav'

class About extends Component {
  render() {
    return (
      <div className="About">
        <ChatNav />
        <p> This is the about page</p>
        <p>This is a React chat application built in WDI 11 DTLA</p>
      </div>
    )
  }
}

export default About
