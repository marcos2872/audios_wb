import { Dimensions, StyleSheet } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import theme from '../../constants/theme'
const { width } = Dimensions.get('window')

export const stylesHome = StyleSheet.create(
  {
    container: {
      flex: 1,
    },
    main: {
      flex: 1,
      backgroundColor: theme.colors.background,
      paddingTop: theme.size.statusbar,
    },
    presentation: {
      padding: 10,
      marginBottom: 20
    },
    textPresentation: {
      color: theme.colors.text,
      fontSize: 25,
    },
    recent: {
      width: width,
      height: RFPercentage(20),
      borderStyle: 'solid',
      // borderWidth: 1,
      // borderColor: 'red',
      // marginBottom: 20,
      flexDirection: 'row',
      flexWrap: 'wrap',
      paddingHorizontal: '5%',
      gap: 15  
    },
    cards: {
      width: '100%',
      marginBottom: 100,
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center'
    },
  }
  )