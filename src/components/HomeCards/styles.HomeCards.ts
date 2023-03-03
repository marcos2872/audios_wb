import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

export const stylesHomeCards = StyleSheet.create({
  main: {
    width: '45%',
    height: RFPercentage(25),
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'green',
    margin: 10
  },
  image: {
    width: '100%',
    height: RFPercentage(20)
  }
})