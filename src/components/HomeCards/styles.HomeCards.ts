import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import theme from "../../constants/theme";

export const stylesHomeCards = StyleSheet.create({
  main: {
    // backgroundColor: 'transparent',
    width: '46%',
    height: RFPercentage(26),
    margin: 5,
    alignItems: 'center',
  },
  image: {
    maxWidth: '100%',
    height: RFPercentage(20),
  },
  text: {
    color: theme.colors.text
  }
})