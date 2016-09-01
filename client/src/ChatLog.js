import React, { Component } from 'react';
import state from './state'
import $ from 'jquery'

class ChatLog extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = state
  }

  componentDidMount(){
    $(document).on('stateChange', e => {
      this.setState(e.detail)
    })
    $(window).on('resize', e => {
      this.setState(this.state)
    })
    // document.addEventListener('stateChange')
    }

  render() {
    var chatLogStyle = {
      padding: '15px',
      border: '1px solid lightgray',
      height: window.innerHeight * .7
    }
    var chatDivs = this.state.chats.map(chat => {
      var userStyle = {
        color: this.state.colors[chat.user]
      }

      return (
        <div key={chat.id}>
        <span style={userStyle}>{chat.user} :</span>
        <span>{chat.msg}</span>
        </div>
      )
    })
    return(
    <div className="ChatLog" style={chatLogStyle}>
      {chatDivs}
    </div>
    )
  }
}

export default ChatLog
