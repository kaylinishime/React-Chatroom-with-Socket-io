import React, { Component } from 'react';
import ChatLog from './ChatLog'
import ChatInput from './ChatInput'
import state from './state'
import $ from 'jquery'

class ChatBox extends Component {
    constructor(props, context){
      super(props,context)
      this.state = state
    }

  componentDidMount(){
    $(document).on('stateChange', e => {
      this.setState(e.detail)
    })
  }


  render() {
    var width = "ChatBox col-md-12"
    if (this.state.showUsers)
      width = "ChatBox col-md-9"


    return(
    <div className={width}>
    <ChatLog />
    <ChatInput />
    </div>
  );
  }
}

export default ChatBox
