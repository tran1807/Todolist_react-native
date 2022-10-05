import { StyleSheet } from 'react-native';
import color from './../../contains/color'

const styles = StyleSheet.create({
    items:{
        marginTop:25,
      },
    item:{
        marginTop:10,
        flexDirection: 'row',
        backgroundColor:color.white,
        marginBottom:15,
        padding:15,
        borderRadius:18,
        justifyContent:'space-between',
        alignItems:'center',
      },
      square:{
        width:48,
        height:36,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
      },
      even :{
        backgroundColor: color.green,
      },
      odd :{
        backgroundColor: color.second,
      },
      number:{
        fontWeight:16,
        fontWeight:'700',
        color:color.white
      },
      content:{
        width:'80%',
        fontSize: 16,
      },
      
})
export default styles;