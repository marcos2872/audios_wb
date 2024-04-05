import { StyleSheet } from "react-native"
import { defaultTheme } from "../../hooks/useTheme"

export const stylesPlayer = StyleSheet.create({
  main: {
    backgroundColor: defaultTheme.colors.color1,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 50
  },
  image: {
    width: defaultTheme.size.windowWidth - 50,
    height: defaultTheme.size.windowWidth - 50,
    borderRadius: 50,
  },
})