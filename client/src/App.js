import React, { Component } from 'react';
import ChatNav from './ChatNav'
import ChatBox from './ChatBox'
import UserSidebar from './UserSidebar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>React Chat</h2>
          <ChatNav />
        <div className="row">
            <ChatBox />
            <UserSidebar />
        </div>
      </div>
    );
  }
}

export default App;
