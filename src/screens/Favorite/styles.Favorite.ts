import { StyleSheet } from "react-native"
import { RFPercentage } from "react-native-responsive-fontsize"
import theme from "../../constants/theme"

export const stylesFavorite = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingTop: theme.size.statusbar,
    alignItems: 'center'
  },
  title: {
    color: theme.colors.text,
    fontSize: RFPercentage(4),
    marginBottom: RFPercentage(5)
  },
  scroll: {
    marginBottom: 50
  },
  card: {
    backgroundColor: theme.colors.backCards,
    flexDirection: 'row',
    alignItems: 'center',
    width: theme.size.width - 20,
    height: RFPercentage(10),
    borderRadius: 10,
    marginBottom: 10,
    gap: 10
  },
  image: {
    width: RFPercentage(10),
    height: RFPercentage(10),
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10
  },
  text: {
    color: theme.colors.text,
    fontFamily: 'Roboto-Medium',
  },
  remove: {
    position: 'absolute',
    right: 5,
    top: 5

  }
})