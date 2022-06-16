import React, { Component } from 'react'
import RoundedInput from "../../BaseComponents/RoundedInput/index";

export class AdminPortal extends Component {
  render() {
    return (
      <div id='admin' className=' mt-20'>

            <RoundedInput placeholder='Search Order ' type='emails' />
      </div>
    )
  }
}

export default AdminPortal