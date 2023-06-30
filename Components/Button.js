import { View, Text, StyleSheet, Pressable } from "react-native";



export default function Button(props) {
    return (
        <Pressable style={styles.button} onPress={props.onPress}>
            <Text style={styles.buttonText}>
                {props.children}
            </Text>
        </Pressable>

    )
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: "#3503fc",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        height:80,
        flex:1
    },
    buttonText: {
        color: "white",
        fontSize: 20,
        fontWeight: "600",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",

    }
})