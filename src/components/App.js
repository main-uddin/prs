import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import Productview from './Productview'
import Sidebar from './Sidebar'
import Reviewsorting from './Reviewsorting'
import Rating from './Rating'

import '../css/App.css'

class App extends Component {
  state = {
    showSidebar: true,
    showProductView: false,
    showDialog: false,
    productOwnData: []
  }
  render () {
    return (
      <div className='App'>
        <AppBar
          className='menu__bar'
          title='Booze Star'
          iconClassNameRight='muidocs-icon-navigation-expand-more'
          onLeftIconButtonClick={this.handleSidebar}
        />
        {this.state.showSidebar
          ? <Sidebar
            open={this.state.showSidebar}
            data={this.childData}
            productData={this.productGetData}
          />
          : this.state.showSidebar}

        {this.state.showProductView
          ? <Productview
            data={this.state.productOwnData}
            dialogData={this.DialogShow}
          />
          : this.state.showProductView}
        {this.state.showDialog
          ? <Rating
            showDial={this.state.showDialog}
            dialogCloseData={this.dialogClose}
          />
          : this.state.showDialog}
        <Reviewsorting />
      </div>
    )
  }
  handleSidebar = () => {
    this.setState({
      showSidebar: !this.state.showSidebar
    })
  }
  childData = e => {
    this.setState({
      showProductView: e
    })
  }
  productGetData = e => {
    this.setState({
      productOwnData: e
    })
  }
  DialogShow = e => {
    this.setState({
      showDialog: e
    })
  }
  dialogClose = e => {
    this.setState({
      showDialog: e
    })
  }
}

export default App
