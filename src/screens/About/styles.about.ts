import { StyleSheet } from "react-native";
import theme from "../../constants/theme";

export const stylesAbout = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingTop: theme.size.statusbar,
  },
  text: {
    color: '#ffffff'
  },
  link: {
    color: '#585bfc'
  },
  header: {
    width: '100%',
    position: 'absolute',
    top: theme.size.statusbar,
    left: 10
  },
  arrow: {
    color: theme.colors.text,
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: theme.size.statusbar,
    gap: 50,
    height: '80%'
  },
  viewLink: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
})