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

const cardStyle = {}
const cardMediaStyle = {
  // height: '50vh'
}
const actionStyle = {
  position: 'absolute'
}
const cardTextStyle = {
  // padding: 0,
  // position: 'relative',
  // bottom: '-12px'
}
const overflowScroll = {
  // overflow: 'scroll',
  // width: '100%',
  // height: '10vmin',
  // boxSizing: 'border-box',
  // textAlign: 'center'
  //   //  rejected
  // // border: '5px solid black',
  // // position: 'absolute',
  // // borderRadius: '3px',
  // // marginBottom: 0
}
const cardTextHeader = {
  // textAlign: 'center',
  // marginTop: '0px',
  // paddingTop: '5%'
}
class Productview extends Component {
  render () {
    const image = window.atob(this.props.data.image)
    return (
      <Card className='card__main' containerStyle={cardStyle}>
        <CardHeader
          className='card__header'
          title={this.props.data.name}
          subtitle='nothing'
        />
        <CardMedia
          mediaStyle={cardMediaStyle}
          className='card_media'
          overlay={
            <CardTitle title='Overlay title' subtitle='Overlay subtitle' />
          }
        >
          <img className='card__img' src={image} alt='' />
        </CardMedia>
        <CardText className='card__text' style={cardTextStyle}>
          <h3 className='card__text__h3' style={cardTextHeader}>
            Product Details
          </h3>
          <p className='card__text__p' style={overflowScroll}>
          Writing a product review of an item you have purchased
          and used can be a great way to share useful information
          with other shoppers, promote products you love, or just
          build your writing portfolio. One can review almost any
          product - from an electric toothbrush to a new hybrid car
          </p>
        </CardText>
        <CardActions className='card__action' style={actionStyle}>
          <FlatButton label='Back' />
          <FlatButton label='Rate' />
        </CardActions>
      </Card>
    )
  }
}
export default Productview
