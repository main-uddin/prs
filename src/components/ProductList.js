import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { List, ListItem } from 'material-ui/List'
import TextField from 'material-ui/TextField'
import Avatar from 'material-ui/Avatar'
import Chip from 'material-ui/Chip'

// import '../css/Product.css'
import Store from './Store'

class ProductList extends Component {
  state = {
    score: 0
  }
  render () {
    return (
      <div className='product_root'>
        <div className='product__sidebar'>
          Search: <TextField floatingLabelText='Search Product' />
          {Store.ProductArr.map(e => (
            <List className='product__list'>
              <ListItem
                className='product__listitem'
                primaryText={e.name.toUpperCase()}
                secondaryText={<p>{Date().split(' ', 4).join(' - ')}</p>}
                leftAvatar={<Avatar src={window.atob(e.img)} />}
                rightAvatar={
                  <p className='score'>
                    <Chip>{`Score: ${this.state.score}`}</Chip>
                  </p>
                }
                onClick={() => {
                  const image = window.atob(e.img)
                  const name = e.name.toUpperCase()
                  const score = this.state.score
                  const productObj = {
                    image: image,
                    name: name,
                    score: score
                  }
                  this.props.data('true')
                  this.props.productData(productObj)
                }}
              />
            </List>
          ))}
        </div>
      </div>
    )
  }
}
export default observer(ProductList)
