import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { stylesHomeCards } from './styles.HomeCards'
import { IData } from '../../interfaces/IDataApi'

const HomeCards = ({ data }: {data: IData}) => {
  return (
    <TouchableOpacity style={stylesHomeCards.main}>
      <Image source={/* {uri: '../../mock/cover/cover.png'} */ require('../../mock/cover/cover.png')} style={stylesHomeCards.image} />
      <Text style={stylesHomeCards.text}>{data.title}</Text>
    </TouchableOpacity>
  )
}

export default HomeCards