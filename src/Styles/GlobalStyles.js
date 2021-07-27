import { StyleSheet , Platform} from 'react-native';
import Theme from './Theme';


export default StyleSheet.create({

    container: {
      flex: 1,
      paddingTop:50,
      paddingBottom:20, 
      paddingRight:10,
      paddingLeft:20,
      justifyContent:'flex-start',
      alignItems:'center',
      backgroundColor: Theme.colors.background,
    },

    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
      marginTop: 10,
      textAlign: 'center'
    },

    buttonText: {
    fontSize: 20,
    textAlign: 'center'
    },
    button: {
      paddingVertical: 15,
      paddingHorizontal: 35,
      borderRadius: 20,
      marginVertical: 10,
      marginHorizontal: 10
    },
    droidSafeArea: {
      flex: 1,
      paddingTop: Platform.OS === 'android' ? 40 : 0
  },
  });