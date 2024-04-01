import { StyleSheet } from "react-native"
import { RFPercentage } from "react-native-responsive-fontsize"
import theme from "../../constants/theme"
import { defaultTheme } from "../../hooks/useTheme"

export const stylesCard = StyleSheet.create({
  main: {
    backgroundColor: defaultTheme.colors.color2,
    width: defaultTheme.size.windowWidth - 20,
    height: 90,
    padding: 10,
    justifyContent: "space-evenly"
  },
  title: {
    color: defaultTheme.colors.color5,
  },
  year: {
    color: defaultTheme.colors.color5,
  }
})