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
      marginBottom: 20,
    },
    textPresentation: {
      color: theme.colors.text,
      fontSize: 25,
      fontWeight: '600',
      fontFamily: 'Roboto-Bold',
    },
    recentContainer: {
      gap: 10,
      alignItems: 'center',
      marginBottom: 10
    },
    text: {
      color: theme.colors.text,
      fontSize: 19,
      fontFamily: 'Roboto-Medium',
    },
    recent: {
      flex: 1,
      width: theme.size.width,
      flexDirection: 'row',
      paddingHorizontal: RFPercentage(1.1),
      gap: RFPercentage(1.5),
      alignItems: 'center',
      flexWrap: 'wrap',
      maxHeight: RFPercentage(20),
      marginBottom: 8,
    },
    subText: {
      marginTop: 20,
      alignItems: 'center',
      marginBottom: 10
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