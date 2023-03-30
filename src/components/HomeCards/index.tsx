import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { stylesHomeCards } from './styles.HomeCards'
import { IData } from '../../interfaces/IDataApi'
import { useNavigation } from '@react-navigation/native'

const HomeCards = ({ data }: {data: IData}) => {
  const { navigate } = useNavigation()as {navigate: (para: string, { }) => void}
  
  return (
    <TouchableOpacity
    style={stylesHomeCards.main}
    onPress={() => {
      navigate('player', { id: data.id })
    }}
    >
      <Image source={require('../../../assets/images/cover.png')} style={stylesHomeCards.image} />
      <Text style={stylesHomeCards.text}>
        {data.title.length >= 45 ? `${data.title.slice(0, 40)}...` : data.title}
        </Text>
    </TouchableOpacity>
  )
}

export default HomeCards