import { StyleSheet } from "react-native"
import { RFPercentage } from "react-native-responsive-fontsize"
import theme from "../../constants/theme"
import { defaultTheme } from "../../hooks/useTheme"

export const stylesAudio = StyleSheet.create({
  main: {
    backgroundColor: defaultTheme.colors.color1,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,

  },
  menu: {
    width: '100%',
    height: 200,
    alignItems: 'center',
    gap: 20
  },
  changeAudioContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-end",
    gap: 10
  },
  changeAudio: {
    // backgroundColor: defaultTheme.colors.color3,
    padding: 5,
    borderRadius: 5
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
    width: theme.size.width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  divButton: {
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  loading: {
    width: 100,
    height: 100,
  }
})