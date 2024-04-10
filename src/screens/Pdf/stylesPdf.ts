import { Dimensions, StyleSheet } from "react-native";
import { defaultTheme } from "../../hooks/useTheme";

export const stylesPdf = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: defaultTheme.colors.color7,
  },
  pdf: {
    flex: 1,
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height,
  }
});
