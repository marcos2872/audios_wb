import { Text, TouchableOpacity } from 'react-native'
import { stylesRecents } from './styles.Recents'

type propType = {
  info: {
    id: string,
    progress: number,
    title: string,
    cover: string
  }
}

const Recents = ({ info }: propType) => {
  return (
    <TouchableOpacity style={stylesRecents.main}>
      <Text style={stylesRecents.text}>{info.title}</Text>
    </TouchableOpacity>
  )
}

export default Recents