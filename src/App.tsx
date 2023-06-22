import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native'
import theme from './constants/theme'
import ContextApi from './context'
import Routes from './Routes'

const App = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme.colors.background}}>
      <StatusBar backgroundColor={theme.colors.background} style='light' />
      <ContextApi>
      <Routes />
      </ContextApi>
    </SafeAreaView>
  )
}

export default App