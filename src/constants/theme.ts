import { Dimensions } from "react-native"
import {StatusBar} from 'react-native'

const { width } = Dimensions.get('window')
const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 20 : 50

export default {
  colors: {
    text: '#fff',
    background: '#000000',
    select: '#1DB954',
    blackOpacity: 'rgba(0, 0, 0, 0.7)',
    whiteOpacity: 'rgba(255, 255, 255, 0.75)',
    backCards: '#3A3A3A',
    remove: '#c2193f'
  },
  size:{
    statusbar: statusBarHeight,
    width
  }
}
