import { observable } from 'mobx'

import cocacola from '../images/cocacola.png'
import pepsi from '../images/pepsi.png'
import sprite from '../images/sprite.png'
import pranup from '../images/pranup.png'
import sevenup from '../images/7up.png'
import mountaindew from '../images/mountaindew.png'
const cocacolaImg = window.btoa(cocacola)
const pepsiImg = window.btoa(pepsi)
const spriteImg = window.btoa(sprite)
const pranupImg = window.btoa(pranup)
const sevenupImg = window.btoa(sevenup)
const mountaindewImg = window.btoa(mountaindew)

const Store = {
  ProductArr: [
    {
      id: 1,
      name: 'coca-cola',
      img: cocacolaImg
    },
    {
      id: 2,
      name: 'Pepsi',
      img: pepsiImg
    },
    {
      id: 3,
      name: 'sprite',
      img: spriteImg
    },
    {
      id: 4,
      name: 'pran-up',
      img: pranupImg
    },
    {
      id: 5,
      name: '7up',
      img: sevenupImg
    },
    {
      id: 6,
      name: 'mountain-dew',
      img: mountaindewImg
    }
  ]
}
export default observable(Store)
