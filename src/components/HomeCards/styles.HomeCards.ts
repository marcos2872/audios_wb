import { StyleSheet } from "react-native"
import { RFPercentage } from "react-native-responsive-fontsize"
import theme from "../../constants/theme"

export const stylesHomeCards = StyleSheet.create({
  main: {
    backgroundColor: theme.colors.backCards,
    width: '46%',
    height: RFPercentage(26),
    margin: 5,
    alignItems: 'center',
    paddingTop: 5,
    borderRadius: 10
  },
  image: {
    maxWidth: '95%',
    height: RFPercentage(20),
    borderRadius: 100,
  },
  text: {
    color: theme.colors.text
  }
})