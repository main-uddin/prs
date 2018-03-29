import React, { Component } from 'react'
import Popover from 'material-ui/Popover'

class Pop extends Component {
  state = {
    isOpen: this.props.openProp
  }
  render () {
    return (
      <div>
        <Popover
          anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
          targetOrigin={{ horizontal: 'left', vertical: 'top' }}
          onRequestClose={this.handleRequestClose}
        >
          <p>hello bangladesh</p>
        </Popover>
      </div>
    )
  }
  handleRequestClose = e => {
    this.setState({
      isOpen: true
    })
  }
}
export default Pop

// open={this.props.openProp}
// anchorEl={this.state.anchorEl}
