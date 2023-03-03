import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, Text, View, ViewBase } from 'react-native'
import theme from './constants/theme'
import Routes from './Routes'

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar style="auto" backgroundColor={theme.colors.blackOpacity} />
      <Routes />
    </SafeAreaView>
  )
}

export default App