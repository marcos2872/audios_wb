import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native'
import theme from './constants/theme'
import ContextApi from './context'
import Routes from './routes'
import { defaultTheme } from './hooks/useTheme'

const App = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: defaultTheme.colors.color1}}>
      <StatusBar backgroundColor={defaultTheme.colors.color1} style='light' />
      <ContextApi>
      <Routes />
      </ContextApi>
    </SafeAreaView>
  )
}

export default App