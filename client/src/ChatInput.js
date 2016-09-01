import React, { Component } from 'react';
import $ from 'jquery';
import socket from './socket';
import state from './state';

class ChatInput extends Component {
  constructor(props, context){
    super(props,context)
    this.state = state
  }

componentDidMount(){
  $(document).on('stateChange', e => {
    this.state = e.detail
  })
}

  handleKeyDown(e) {
    if (e.keyCode == 13) {
      socket.emit('chat', {
        msg: $('#chat-message').val(),
        user: this.state.user
      })
      $('#chat-message').val('')
    }

  }

  render() {

    var inputStyle = {
      padding: '15px',
      border: '1px solid lightgray',
      height: '100%',
      width: '100%'
    }

    return(
    <div className="ChatInput">
    <input id="chat-message" placeholder="type here to chat...ENTER to send" style={inputStyle} onKeyDown={this.handleKeyDown.bind(this)} />
    </div>
    )
  }
}

export default ChatInput
