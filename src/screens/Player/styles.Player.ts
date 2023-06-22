import { StyleSheet } from "react-native"
import theme from "../../constants/theme"

export const stylesPlayer = StyleSheet.create({
  main: {
    backgroundColor: theme.colors.background,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: theme.size.statusbar + 20
  },
  header: {
    width: '100%',
    position: 'absolute',
    top: theme.size.statusbar,
    left: 10
  },
  arrow: {
    color: theme.colors.text,
  },
  image: {
    width: '90%',
    height: 350,
    borderRadius: 200,
  },
})