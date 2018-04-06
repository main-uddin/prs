import React, { Component } from 'react'
import Paper from 'material-ui/Paper'

const paperstyle = {
  width: '90%',
  height: '25vh',
  marginLeft: '5%'
}

class Thismonth extends Component {
  render () {
    return (
      <div>
        <Paper style={paperstyle} zDepth={1}>
          helllo from Month
        </Paper>
      </div>
    )
  }
}
export default Thismonth
