import { observable } from 'mobx'

import screamingeagle from '../images/screaming-eagle.png'
import ChateauMargaux from '../images/Chateau-Margaux.png'
import absolutvodka from '../images/absolut-vodka.png'
import greygoose from '../images/grey-goose.png'
import russianstandard from '../images/russian-standard.png'
import pinnaclevodka from '../images/pinnacle-vodka.png'
import CherryWine from '../images/sona.png'
import Rum from '../images/rum.png'

const Store = {
  ProductArr: [
    {
      id: 1,
      name: 'screaming-eagle',
      img: window.btoa(screamingeagle)
    },
    {
      id: 2,
      name: 'Chateau-Margaux',
      img: window.btoa(ChateauMargaux)
    },
    {
      id: 3,
      name: 'absolut-vodka',
      img: window.btoa(absolutvodka)
    },
    {
      id: 4,
      name: 'grey-goose',
      img: window.btoa(greygoose)
    },
    {
      id: 5,
      name: 'russian-standard',
      img: window.btoa(russianstandard)
    },
    {
      id: 6,
      name: 'pinnacle-vodka',
      img: window.btoa(pinnaclevodka)
    },
    {
      id: 7,
      name: 'Cherry-Wine',
      img: window.btoa(CherryWine)
    },
    {
      id: 8,
      name: 'Rum',
      img: window.btoa(Rum)
    }
  ],
  dialogDataArr: []
}
export default observable(Store)
