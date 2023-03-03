import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { stylesHomeCards } from './styles.HomeCards'
import { IData } from '../../interfaces/IDataApi'

const HomeCards = ({ data }: {data: IData}) => {
  console.log(data.id)
  
  return (
    <TouchableOpacity style={stylesHomeCards.main}>
      <Image source={{uri: data.cover}} style={stylesHomeCards.image} />
    </TouchableOpacity>
  )
}

export default HomeCards