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
      <Text style={stylesRecents.text}>
        {info.title.length >= 45 ? `${info.title.slice(0, 69)}...` : info.title}
        </Text>
    </TouchableOpacity>
  )
}

export default Recents