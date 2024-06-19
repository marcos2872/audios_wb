import { StyleSheet } from "react-native"
import { defaultTheme } from "../../hooks/useTheme"

export const stylesSearch = StyleSheet.create({
  main: {
    paddingTop: defaultTheme.size.statusbar,
    backgroundColor: defaultTheme.colors.color1,
    flex: 1,
    alignItems: 'center',
    gap: 20
  },

  searchContainer: {
    width: defaultTheme.size.windowWidth -50,
    height: 50,
    alignItems: "baseline"
  },
  
  search: {
    backgroundColor: defaultTheme.colors.color7,
    width: defaultTheme.size.windowWidth - 50,
    height: 50,
    borderRadius: 10,
    paddingLeft: 10,
    color: defaultTheme.colors.color1,
  },
  
  searchIcon: {
    position: "absolute",
    right: 10,
    top: 10
  },
  
  nothingFound: {
    width: defaultTheme.size.windowWidth,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 100
  },
  
  text: {
    color: defaultTheme.colors.color4,
    fontSize: 15
  },
})