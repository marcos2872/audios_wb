import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, Text, View, ViewBase } from 'react-native'
import theme from './constants/theme'
import ContextApi from './context'
import Routes from './Routes'

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar style="auto" backgroundColor={theme.colors.blackOpacity} />
      <ContextApi>
      <Routes />
      </ContextApi>
    </SafeAreaView>
  )
}

export default App