import { StyleSheet } from "react-native"
import theme from '../../constants/theme'

export const stylesNavBar = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'row',
    height: 50,
    width: '100%',
    justifyContent: 'space-around',
    backgroundColor: theme.colors.blackOpacity,
    position: 'absolute',
    bottom: 0
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: theme.colors.text
  },
  textSelected: {
    color: theme.colors.select
  }
})