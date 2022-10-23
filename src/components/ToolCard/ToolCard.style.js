import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor : "#eceff1",
        width: Dimensions.get('window').width / 2,
        height : Dimensions.get('window').height/ 2,
        margin : 10,
        borderRadius : 10,
    },
    image :{
        backgroundColor: "white",
        width: Dimensions.get('window').width /2.4,
        height : Dimensions.get('window').height /2.4,
        borderRadius : 5,
        margin : 10,
    },
    name : {
        fontSize : 20,
        fontWeight : "bold",
    },
    price : {
        color : "gray",
        fontSize : 14,
    },
    outOfStock : {
        color: "red",
        fontSize : 20,
        fontWeight : "bold",    
    }
});