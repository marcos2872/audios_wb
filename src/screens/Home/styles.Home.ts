import { Dimensions, StyleSheet } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { defaultTheme } from '../../hooks/useTheme'
 
export const stylesHome = StyleSheet.create(
  {
    container: {
      backgroundColor: defaultTheme.colors.color1,
      flex: 1,
      justifyContent: 'space-around',
      alignItems: 'center',
      paddingVertical: 10
    },
    title: {
      color: defaultTheme.colors.color5,
      fontWeight: 'bold',
      fontSize: 25
    },
    image: {
      width: defaultTheme.size.windowWidth - 20,
      height: defaultTheme.size.windowWidth -20,
      borderRadius: 20
    },
    link: {
      color: defaultTheme.colors.color4,
      fontWeight: 'bold',
      fontSize: 13
    }
  }
  )