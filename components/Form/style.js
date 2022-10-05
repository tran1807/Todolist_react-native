import { StyleSheet } from 'react-native';
import color from './../../contains/color'

const styles = StyleSheet.create({
    addTask:{
        padding:20,
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center'

    },
    input:{
        height:44,
        width:'80%',
        backgroundColor:color.white,
        borderWidth:2,
        borderColor:color.primary,
        borderRadius:20,
        paddingHorizontal:20,
        paddingVertical:10,
    },
    iconWrapper:{
        width:44,
        height:44,
        backgroundColor:color.primary,
        borderRadius:100,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:2,
        borderColor:color.background
    },
    icon:{
        fontSize:30,
        color:color.white
    }
})
export default styles;