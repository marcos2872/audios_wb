import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const {Screen, Navigator} = createBottomTabNavigator()

import { MaterialIcons } from '@expo/vector-icons'

import Home from '../screens/Home'
import theme from '../constants/theme';

const Routes = () => {
  return (
    <NavigationContainer>
      <Navigator
      initialRouteName="home"
      screenOptions={{
        tabBarActiveTintColor: theme.colors.select,
        tabBarInactiveTintColor: theme.colors.text,
        tabBarStyle: {
          backgroundColor: 'transparent',
          position: 'absolute',
        }
      }}
      >
        <Screen name='home' component={Home} options={{
          headerShown: false,
          tabBarLabel: 'inicio',
          tabBarIcon: ({ color, size }) => (
          <MaterialIcons
          name='home'
          color={color}
          size={size}
          />)

          }} />

      </Navigator>
    </NavigationContainer>
  )
}

export default Routes