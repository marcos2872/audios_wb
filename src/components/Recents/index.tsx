import { useNavigation } from '@react-navigation/native'
import { Text, TouchableOpacity } from 'react-native'
import { IRecents } from '../../interfaces/IRecents'
import { stylesRecents } from './styles.Recents'

type propType = {
  info: IRecents
}

const Recents = ({ info }: propType) => {
  const { navigate } = useNavigation()as {navigate: (para: string, { }) => void}
  return (
    <TouchableOpacity style={stylesRecents.main} onPress={() => {
      navigate('player', { id: info.id })
    }}>
      <Text style={stylesRecents.text}>
        {info.title.length >= 45 ? `${info.title.slice(0, 69)}...` : info.title}
        </Text>
    </TouchableOpacity>
  )
}

export default Recents