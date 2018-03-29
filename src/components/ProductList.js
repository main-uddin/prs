import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { List, ListItem } from 'material-ui/List'
import TextField from 'material-ui/TextField'
// import Chip from 'material-ui/Chip'
// import FlatButton from 'material-ui/FlatButton'
// import Subheader from 'material-ui/Subheader'
// import FontIcon from 'material-ui/FontIcon'
import Avatar from 'material-ui/Avatar'

import '../css/Product.css'
import Store from './Store'
import Pop from './Pop'

class ProductList extends Component {
  state = {
    score: 0,
    open: false
  }
  render () {
    return (
      <div className='product__list'>
        Search: <TextField floatingLabelText='Search Product' />
        {Store.ProductArr.map(e => (
          <List>
            <ListItem
              primaryText={e.name.toUpperCase()}
              secondaryText={<p>{Date().split(' ', 4).join(' - ')}</p>}
              leftAvatar={<Avatar src={window.atob(e.img)} />}
              rightAvatar={
                <p className='score'>score:<span>{this.state.score}</span></p>
              }
              onClick={this.handleClick}
            />
          </List>
        ))}
        <Pop openProp={this.state.open} />
      </div>
    )
  }
  handleClick = e => {
    this.setState({
      open: true
    })
  }
}
export default observer(ProductList)
