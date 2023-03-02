import { StyleSheet } from 'react-native'
import theme from '../../constants/theme'

export const stylesHome = StyleSheet.create(
  {
    main: {
      flex: 1,
      backgroundColor: theme.colors.background,
      alignItems: 'center',
      justifyContent: 'center'
    },
    text: {
      color: theme.colors.text
    }
  }
  )