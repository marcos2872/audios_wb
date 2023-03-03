import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator()

import { MaterialIcons } from '@expo/vector-icons'

import Home from '../screens/Home'
import theme from '../constants/theme';
import Search from '../screens/Search';

const Routes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
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
        <Tab.Screen name='home' component={Home} options={{
          headerShown: false,
          tabBarLabel: 'início',
          tabBarIcon: ({ color, size }) => (
          <MaterialIcons
          name='home'
          color={color}
          size={size}
          />)

          }} />

        <Tab.Screen name='search' component={Search} options={{
          headerShown: false,
          tabBarLabel: 'Busca',
          tabBarIcon: ({ color, size }) => (
          <MaterialIcons
          name='search'
          color={color}
          size={size}
          />)

          }} />

      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Routes