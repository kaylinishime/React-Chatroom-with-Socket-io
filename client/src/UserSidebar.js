import React, { Component } from 'react';
import state from './state'
import $ from 'jquery'


class UserSidebar extends Component {
    constructor (props, context) {
      super(props, context)
      this.state = state
    }

    componentDidMount(){
      $(document).on('stateChange', e => {
        this.setState(e.detail)
      })
    }


  render() {
    var userSidebarStyle = {
      border: '1px solid lightgray',
      padding: 15,
      height: window.innerHeight * .7
    }
    var userDivs = this.state.users.map((user, index) => {
      return <div key={index}>{user}</div>
    })

    var sidebar = <div></div>
    if (this.state.showUsers) {
      sidebar = (
        <div style={userSidebarStyle} className="UserSidebar col-md-3">
        <h3>Users</h3>
        {userDivs}
        </div>
      )
    }
    return sidebar
  }
}


export default UserSidebar
