import React from 'react';
import { Dimensions, StatusBar, View } from 'react-native';

const {height, width} = Dimensions.get('window');
const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 20 : 50

export const defaultTheme = {
  colors: {
    color1: '#0d1b2a',
    color2: '#1b263b',
    color3: '#415a77',
    color4: '#778da9',
    color5: '#e0e1dd',
    color6: '#bf0603',
    color7: '#ffffff',
  },
  size: {
    windowWidth: width,
    windowHeight: height,
    statusbar: statusBarHeight,
  }
}

const useTheme = () => {
  return defaultTheme
}

export default useTheme;