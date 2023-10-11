import { StyleSheet} from "react-native";


const GlobalStyles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    },
    titleStyle:{
        width: '85%',
        textAlign:'center',
        fontSize:30,
        paddingRight:66
    },
    btn:{
        borderRadius:10
    },
    btn_txt:{
        color:'white',
        padding:10,
        textAlign:'center'
    },
    blue:{
        backgroundColor:'blue',
    },
    green:{
        backgroundColor:'green',
    },
    textContainer: {
        flex: 0.1,
        marginTop: 200,
        alignItems: 'center',
        height: 100,
    },
    title: {
        fontSize: 35,
    },
})

export default GlobalStyles