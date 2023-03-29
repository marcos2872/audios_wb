import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import theme from "../../constants/theme";

export const stylesRecents = StyleSheet.create({
  main: {
    width: RFPercentage(22.9),
    height: RFPercentage(8),
    backgroundColor: theme.colors.backCards,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    // marginBottom: RFPercentage(1.5)
  },
  text: {
    color: theme.colors.text
  }
})