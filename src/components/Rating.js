import React, { Component } from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'

class Rating extends Component {
  render () {
    const actions = [
      <FlatButton label='Cancel' primary onClick={this.handleClose} />,
      <FlatButton
        label='Submit'
        primary
        keyboardFocused
        onClick={this.handleClose}
      />
    ]
    return (
      <div>
        <Dialog
          title='Dialog With Actions'
          actions={actions}
          modal={false}
          open={this.props.showDial}
          onRequestClose={this.handleClose}
        >
          The actions in this window were passed in as an array of React objects.
        </Dialog>
      </div>
    )
  }
  handleClose = () => this.props.dialogCloseData(false)
}
export default Rating
