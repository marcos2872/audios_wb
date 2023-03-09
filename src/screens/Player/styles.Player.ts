import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import theme from "../../constants/theme";

export const stylesPlayer = StyleSheet.create({
  main: {
    backgroundColor: theme.colors.background,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 100
  },
  header: {
    width: '100%',
    position: 'absolute',
    top: 40,
    left: 10
  },
  arrow: {
    color: theme.colors.text,
  },
  image: {
    width: '90%',
    height: 350,
    borderRadius: 200
  },
  menu: {
    width: '100%',
    height: 200,
    alignItems: 'center',
    gap: 20
  },
  title: {
    color: theme.colors.text,
    fontSize: RFPercentage(2)
  },
  text: {
    color: theme.colors.text
  },
  count: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10
  },
  buttons: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  loading: {
    width: 100,
    height: 100,
  }
})