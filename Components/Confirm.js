import { Modal, StyleSheet, Text, View } from "react-native";
import Buttons from "./Button";

export default function Confirm(props) {

    return (
        <Modal animationType="slide">
            <View style={styles.confirm}>
                <View style={styles.textConfirm}>
                    <Text style={styles.text}>IS THIS GOAL DONE? </Text>
                    <Text style={styles.text} >({props.name}) </Text>
                </View>


                <View style={styles.buttonArea}>
                    <View style={styles.buttonConfirm}>
                        <Buttons onPress={props.cancel} >Not Yet!</Buttons>
                    </View>
                    <View style={styles.buttonConfirm}>
                        <Buttons onPress={props.delete}>JA, DELETE IT!</Buttons>
                    </View>
                </View>



            </View>
        </Modal>
    )
}


const styles = StyleSheet.create({

    confirm: {
        width: "100%",
        flex: 1,
        backgroundColor: "#4287f5",
        alignItems: "center",
        justifyContent: "center",
    },
    textConfirm: {
        backgroundColor: "yellow",
        width: "80%",
        padding: "7%",
        marginBottom: "10%",
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 20,
        fontWeight: 600,
    },
    buttonArea: {
        flexDirection: "row",
    },
    buttonConfirm: {
        marginHorizontal:"2%",
        width:"35%",
        height:100
    }

})