import { StyleSheet } from "react-native"
import { RFPercentage } from "react-native-responsive-fontsize"
import theme from "../../constants/theme"

export const stylesSearch = StyleSheet.create({
  main: {
    backgroundColor: theme.colors.background,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: theme.size.statusbar + 20
  },
  text: {
    color: theme.colors.text,
    fontSize: RFPercentage(3)
  },
  cards: {
    width: '100%',
    marginBottom: 50,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchContainer: {
    width: theme.size.width - 50,
    height: 50,
    marginBottom: 20,
    alignItems: "baseline"
  },
  search: {
    backgroundColor: theme.colors.backCards,
    width: theme.size.width - 50,
    height: 50,
    borderRadius: 10,
    paddingLeft: 10,
    color: theme.colors.text,
  },
  searchIcon: {
    position: "absolute",
    right: 10,
    top: 10
  },
  nothingFound: {
    width: theme.size.width,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 100
  }
})