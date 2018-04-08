import React, { Component } from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import Checkbox from 'material-ui/Checkbox'
import ActionFavorite from 'material-ui/svg-icons/action/favorite'
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border'
import { observer } from 'mobx-react'

import Store from './Store'
import './../css/RatingView.css'

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
        {Store.dialogDataArr.map(data => (
          <Dialog
            title={data.name}
            actions={actions}
            modal={false}
            open={this.props.showDial}
            onRequestClose={this.handleClose}
          >
            <div className='dialog__container_child'>
              <span>{`score: ${data.score}`}</span>
              <div className='rating__checkbox'>
                <Checkbox
                  checkedIcon={<ActionFavorite />}
                  uncheckedIcon={<ActionFavoriteBorder />}
                />
                <Checkbox
                  checkedIcon={<ActionFavorite />}
                  uncheckedIcon={<ActionFavoriteBorder />}
                />
                <Checkbox
                  checkedIcon={<ActionFavorite />}
                  uncheckedIcon={<ActionFavoriteBorder />}
                />
                <Checkbox
                  checkedIcon={<ActionFavorite />}
                  uncheckedIcon={<ActionFavoriteBorder />}
                />
                <Checkbox
                  checkedIcon={<ActionFavorite />}
                  uncheckedIcon={<ActionFavoriteBorder />}
                />
              </div>
              <img className='rating__img' src={data.image} alt='' />
            </div>
          </Dialog>
        ))}
      </div>
    )
  }
  handleClose = () => this.props.dialogCloseData(false)
}
export default observer(Rating)
