import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator()

import { MaterialIcons } from '@expo/vector-icons'

import Home from '../screens/Home'
import theme from '../constants/theme'
import Search from '../screens/Search'
import Player from '../screens/Player'
import Favorite from '../screens/Favorite'

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="home"
      >
        <Stack.Screen name='home' component={Home} options={{
          headerShown: false,
          }} />

        <Stack.Screen name='search' component={Search} options={{
          headerShown: false,
          }} />
         <Stack.Screen name='player' component={Player} options={{
         headerShown: false
          }} />
          <Stack.Screen name='favorite' component={Favorite} options={{
         headerShown: false
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes