import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native'
import theme from './constants/theme'
import ContextApi from './context'
import Routes from './Routes'

const App = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme.colors.background}}>
      <StatusBar style="auto" backgroundColor={theme.colors.blackOpacity} />
      <ContextApi>
      <Routes />
      </ContextApi>
    </SafeAreaView>
  )
}

export default App