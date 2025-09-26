import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'darkslategray',
        padding: 24,
        flexGrow: 1,
    },
    image: {
        width: 260,
        height: 260,
        borderRadius: 16,
        borderWidth: 3,
        borderColor: '#fff',
        marginBottom: 24,
        marginTop: 16,
    },
    name: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 16,
        textAlign: 'center',
        textShadowColor: '#000',
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 6,
    },
    label: {
        fontSize: 20,
        color: '#FFD600',
        marginBottom: 8,
        fontWeight: '600',
        textAlign: 'center',
    },
    value: {
        fontWeight: 'bold',
    },
});

export default styles;