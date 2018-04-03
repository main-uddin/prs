import React, { Component } from 'react'
import Drawer from 'material-ui/Drawer'

import ProductList from './ProductList'

const drawerStyle = {
  marginTop: '64px',
  width: '30%'
}

class Sidebar extends Component {
  render () {
    return (
      <Drawer open={this.props.open} containerStyle={drawerStyle}>
        <ProductList data={this.props.data} productData={this.props.productData} />
      </Drawer>
    )
  }
}
export default Sidebar
