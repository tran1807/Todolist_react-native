import { StyleSheet } from 'react-native';
import color from './contains/color'

const styles = StyleSheet.create({
    container:{
        flex:1,
       backgroundColor:color.background,
      },
      body:{
        flex:1,
       paddingTop: 20,
       paddingHorizontal:18,
      },
      header:{
        fontSize: 24,
        color:color.primary,
        fontWeight:'bold',
      },
})
export default styles;