import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Entypo, AntDesign, Fontisto } from "@expo/vector-icons";

import Home from "../screens/Home";
import Search from "../screens/Search";
import Favorite from "../screens/Favorite";
import Pdf from "../screens/Pdf";
import useTheme, { defaultTheme } from "../hooks/useTheme";
import { StyleSheet } from "react-native";
import Player from "../screens/Player";
import SearchPdf from "../screens/SearchPdf";

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
            <Fontisto name="applemusic" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="tab_pdf"
        component={SearchPdf}
        options={{
          headerShown: false,
          tabBarActiveTintColor: theme.colors.color4,
          tabBarInactiveTintColor: theme.colors.color3,
          tabBarStyle: style.tab,
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Fontisto
              name="file-1"
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
            <AntDesign name="heart" color={color} size={size} />
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
            headerBackTitleVisible: false,
            headerTitle: '',
            headerStyle: style.tab,
            headerTintColor: defaultTheme.colors.color5
          }}
        />
        <Stack.Screen
          name="pdf"
          component={Pdf}
          options={{
            headerBackTitleVisible: false,
            headerTitle: '',
            headerStyle: style.tabPdf,
            headerTintColor: defaultTheme.colors.color1
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const style = StyleSheet.create({
  tab: {
    backgroundColor: theme.colors.color1,
    borderTopColor: theme.colors.color1,
  },
  tabPdf: {
    backgroundColor: theme.colors.color7,
    borderTopColor: theme.colors.color7,
  },
});

export default Routes;
