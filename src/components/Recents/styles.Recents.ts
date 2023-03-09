import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import theme from "../../constants/theme";

export const stylesRecents = StyleSheet.create({
  main: {
    width: '47%',
    height: RFPercentage(8),
    backgroundColor: theme.colors.backCards,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: theme.colors.text
  }
})