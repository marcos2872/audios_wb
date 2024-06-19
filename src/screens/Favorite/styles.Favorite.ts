import { StyleSheet } from "react-native"
import { RFPercentage } from "react-native-responsive-fontsize"
import theme from "../../constants/theme"
import { defaultTheme } from "../../hooks/useTheme"

export const stylesFavorite = StyleSheet.create({
  main: {
    paddingTop: defaultTheme.size.statusbar,
    backgroundColor: defaultTheme.colors.color1,
    flex: 1,
    alignItems: 'center',
    gap: 20
  },
  title: {
    color: theme.colors.text,
    fontSize: RFPercentage(4),
    marginBottom: RFPercentage(5)
  },
  text: {
    color: theme.colors.text,
  },
  nothingFound: {
    width: defaultTheme.size.windowWidth,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 100
  },
})