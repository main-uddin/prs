import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { List, ListItem } from 'material-ui/List'
import TextField from 'material-ui/TextField'
import Avatar from 'material-ui/Avatar'

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
                  <p className='score'>score:<span>{this.state.score}</span></p>
                }
                onClick={this.handleProductView}
              />
            </List>
          ))}
        </div>
      </div>
    )
  }
  handleProductView = e => {
    const image = window.btoa(e.target.childNodes[0].attributes.src.nodeValue)
    const name = e.target.childNodes[2].innerText
    const score = e.target.childNodes[1].firstChild.data
    const productObj = {
      image: image,
      name: name,
      score: score
    }
    this.props.data('true')
    this.props.productData(productObj)
  }
}
export default observer(ProductList)
