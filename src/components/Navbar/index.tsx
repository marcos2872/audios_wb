import { View, Text, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import theme from '../../constants/theme'
import { stylesNavBar } from './styles.nav'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useEffect } from 'react'
import TrackPlayer from 'react-native-track-player'

const Navbar = () => {
  const navigation = useNavigation() as { navigate: (para: string) => void }
  const { name } = useRoute()

  useEffect(() => {
    (async () => {
      try {
        await TrackPlayer.setupPlayer({})
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])

  return (
    <View style={stylesNavBar.main}>
      <TouchableOpacity style={stylesNavBar.button} onPress={() => navigation.navigate('home')}>
        <MaterialIcons
          name='home'
          color={name === 'home' ? theme.colors.select : theme.colors.text}
          size={30}
        />
        <Text
          style={name === 'home' ? stylesNavBar.textSelected : stylesNavBar.text}
        >Início</Text>
      </TouchableOpacity>

      <TouchableOpacity style={stylesNavBar.button} onPress={() => navigation.navigate('search')}>
        <MaterialIcons
          name='search'
          color={name === 'search' ? theme.colors.select : theme.colors.text}
          size={30}
        />
        <Text
          style={name === 'search' ? stylesNavBar.textSelected : stylesNavBar.text}
        >Pesquisa</Text>
      </TouchableOpacity>

      <TouchableOpacity style={stylesNavBar.button} onPress={() => navigation.navigate('favorite')}>
        <MaterialIcons
          name={name !== 'favorite' ? 'favorite-border' : 'favorite'}
          color={name === 'favorite' ? theme.colors.select : theme.colors.text}
          size={30}
        />
        <Text
          style={name === 'favorite' ? stylesNavBar.textSelected : stylesNavBar.text}
        >Favoritos</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Navbar