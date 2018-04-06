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

import '../css/Productview.css'

const actionStyle = {
  position: 'absolute'
}
class Productview extends Component {
  render () {
    const image = this.props.data.image
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
          <img className='card__img' src={image} alt='' />
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
          <FlatButton label='Rate' onClick={this.showDialogBox} />
        </CardActions>
      </Card>
    )
  }
  showDialogBox = () => this.props.dialogData(true)
}
export default Productview
