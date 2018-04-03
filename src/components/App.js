import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import Productview from './Productview'
import Sidebar from './Sidebar'

// import '../css/App.css'

class App extends Component {
  state = {
    showSidebar: false,
    showProductDetails: false,
    productOwnData: []
  }
  render () {
    const image = this.state.productOwnData.image
    console.log(image)
    return (
      <div className='App'>
        <AppBar
          className='menu__bar'
          title='Product Review System'
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

        {this.state.showProductDetails
          ? <Productview data={this.state.productOwnData} />
          : this.state.showProductDetails}
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
      showProductDetails: e
    })
  }
  productGetData = e => {
    this.setState({
      productOwnData: e
    })
  }
}

export default App
