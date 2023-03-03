import { View, Text, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import theme from '../../constants/theme'
import { stylesNavBar } from './styles.nav'
import { useNavigation, useRoute } from '@react-navigation/native'

const Navbar = () => {
  const navigation = useNavigation() as {navigate: (para: string) => void}
  const { name } = useRoute()
  console.log(name);
  

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
    </View>
  )
}

export default Navbar