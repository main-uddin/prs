import React, { Component } from 'react'
import {
  Card,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText,
  CardActions
} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import { observer } from 'mobx-react'

import Store from './Store'
import '../css/Productview.css'

const actionStyle = {
  position: 'absolute'
}
class Productview extends Component {
  render () {
    return (
      <Card className='card__main'>
        <CardHeader
          className='card__header'
          title={this.props.data.name}
          subtitle={`Rating-Score:  ${this.props.data.score}`}
        />
        <CardMedia
          className='card_media'
          overlay={
            <CardTitle title='Overlay title' subtitle='Overlay subtitle' />
          }
        >
          <img className='card__img' src={this.props.data.image} alt='' />
        </CardMedia>
        <CardText className='card__text'>
          <h3 className='card__text__h3'>
            Product Details
          </h3>
          <p className='card__text__p'>
            Writing a product review of an item you have purchased
            and used can be a great way to share useful information
            with other shoppers, promote products you love, or just
            build your writing portfolio. One can review almost any
            product - from an electric toothbrush to a new hybrid car
          </p>
        </CardText>
        <CardActions className='card__action' style={actionStyle}>
          <FlatButton label='Rate' onClick={this.showDialogBox} fullWidth />
        </CardActions>
      </Card>
    )
  }
  showDialogBox = e => {
    this.props.dialogData(true)
    // const name = e.target.parentElement.parentElement.parentElement.parentElement.children[0].childNodes[0].children[0].childNodes[0].data
    Store.dialogDataArr.push({
      name: this.props.data.name,
      image: this.props.data.image,
      score: this.props.data.score
    })
    console
      .dir()
      // e.target.parentElement
      // e.target.parentElement.parentElement.parentElement.parentElement.childNode[0].children[0].childNode[0].childNode[0].data
  }
}
export default observer(Productview)
