import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";

import Home from "../screens/Home";
import Search from "../screens/Search";
// import Player from "../screens/Player";
import Favorite from "../screens/Favorite";
// import About from "../screens/About";
import Pdf from "../screens/Pdf";
import useTheme from "../hooks/useTheme";
import { StyleSheet } from "react-native";
import Player from "../screens/Player";

const theme = useTheme();

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabScreens = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="tab_home"
        component={Home}
        options={{
          headerShown: false,
          tabBarActiveTintColor: theme.colors.color4,
          tabBarInactiveTintColor: theme.colors.color3,
          tabBarStyle: style.tab,
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="tab_player"
        component={Search}
        options={{
          headerShown: false,
          tabBarActiveTintColor: theme.colors.color4,
          tabBarInactiveTintColor: theme.colors.color3,
          tabBarStyle: style.tab,
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Entypo name="controller-play" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="tab_pdf"
        component={Pdf}
        options={{
          headerShown: false,
          tabBarActiveTintColor: theme.colors.color4,
          tabBarInactiveTintColor: theme.colors.color3,
          tabBarStyle: style.tab,
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="file-pdf-box"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="tab_favorites"
        component={Favorite}
        options={{
          headerShown: false,
          tabBarActiveTintColor: theme.colors.color4,
          tabBarInactiveTintColor: theme.colors.color3,
          tabBarStyle: style.tab,
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Entypo name="heart" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen
          name="home"
          component={TabScreens}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="player"
          component={Player}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const style = StyleSheet.create({
  tab: {
    backgroundColor: theme.colors.color1,
  },
});

export default Routes;
