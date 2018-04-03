import { observable } from 'mobx'

import screamingeagle from '../images/screaming-eagle.png'
import ChateauMargaux from '../images/Chateau-Margaux.png'
import absolutvodka from '../images/absolut-vodka.png'
import greygoose from '../images/grey-goose.png'
import russianstandard from '../images/russian-standard.png'
import pinnaclevodka from '../images/pinnacle-vodka.png'
const screamingeagleImg = window.btoa(screamingeagle)
const ChateauMargauxImg = window.btoa(ChateauMargaux)
const absolutvodkaImg = window.btoa(absolutvodka)
const greygooseImg = window.btoa(greygoose)
const russianstandardImg = window.btoa(russianstandard)
const pinnaclevodkaImg = window.btoa(pinnaclevodka)

const Store = {
  ProductArr: [
    {
      id: 1,
      name: 'screaming-eagle',
      img: screamingeagleImg
    },
    {
      id: 2,
      name: 'Chateau-Margaux',
      img: ChateauMargauxImg
    },
    {
      id: 3,
      name: 'absolut-vodka',
      img: absolutvodkaImg
    },
    {
      id: 4,
      name: 'grey-goose',
      img: greygooseImg
    },
    {
      id: 5,
      name: 'russian-standard',
      img: russianstandardImg
    },
    {
      id: 6,
      name: 'pinnacle-vodka',
      img: pinnaclevodkaImg
    }
  ]
}
export default observable(Store)
