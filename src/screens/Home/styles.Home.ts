import { Dimensions, StyleSheet } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import theme from '../../constants/theme'
 
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
      width: theme.size.width,
      maxHeight: RFPercentage(20),
      borderStyle: 'solid',
      flexDirection: 'row',
      flexWrap: 'wrap',
      paddingHorizontal: '5%',
      gap: 15,
      marginBottom: 15
    },
    cards: {
      width: '100%',
      marginBottom: 120,
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }
  )