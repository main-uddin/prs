import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import ProductList from './ProductList'

import '../css/App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <AppBar className='menu__bar'
          title='Product Review System'
          iconClassNameRight='muidocs-icon-navigation-expand-more'
          showMenuIconButton={false}
        />
        <ProductList />
      </div>
    )
  }
}

export default App
