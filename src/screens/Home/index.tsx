import { SafeAreaView, Text, View } from 'react-native'
import { stylesHome } from './styles.Home'

const index = () => {
  return (
    <SafeAreaView style={stylesHome.main} >
      <Text style={stylesHome.text} >index</Text>
    </SafeAreaView>
  )
}

export default index

