import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    
    containerCards: {
        marginBottom: 15,
        marginRight: 20,
        width: 250,
        height: 300,
        backgroundColor: "#000",
        borderRadius: 8,
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,   

        
        
    },
    name: {
        fontSize: 18,
        color: "white",
        fontWeight: "bold",
        paddingTop: 10

        
    },
    status: {

        color: "white",
        paddingTop: 5
    },
    images: {
        width: 150,
        height: 150,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: "white"
    },
    gender: {
        fontSize: 16,
        color: "white",
        paddingTop: 5
    }

})

export default styles