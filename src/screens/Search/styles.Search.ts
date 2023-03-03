import { StyleSheet } from "react-native";
import theme from "../../constants/theme";

export const stylesSearch = StyleSheet.create({
  main: {
    backgroundColor: theme.colors.background,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: theme.colors.text
  }
})