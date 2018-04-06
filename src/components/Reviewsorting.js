import React, { Component } from 'react'

import Today from './Today'
import Thisweek from './Thisweek'
import Thismonth from './Thismonth'

import '../css/Reviewsorting.css'

class Reviewsorting extends Component {
  render () {
    return (
      <div className='sorting__parent'>
        <Today />
        <Thisweek />
        <Thismonth />
      </div>
    )
  }
}
export default Reviewsorting
