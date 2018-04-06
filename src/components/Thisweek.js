import React, { Component } from 'react'
import Paper from 'material-ui/Paper'

const paperstyle = {
  width: '90%',
  height: '25vh',
  marginLeft: '5%'
}

class Thisweek extends Component {
  render () {
    return (
      <div>
        <Paper style={paperstyle} zDepth={1}>
          helllo from week
        </Paper>
      </div>
    )
  }
}
export default Thisweek
