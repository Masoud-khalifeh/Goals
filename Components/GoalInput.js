import { View, TextInput, Modal, Text } from "react-native";
import { StyleSheet } from "react-native";
import Button from "./Button";
import { useState } from "react";

export default function GoalInput(props) {
    const [goal, setGoal] = useState("");
    const [error, setError] = useState("");

    function changeHandler(evt) {
        setError("");
        setGoal(evt)
    }

    function submitHandler() {
        if (goal) {
            props.add(goal);
            props.cancel();
        } else {
            setError("First, Please Enter a Text!")
        }
    }

    function resetError() {
        setError("")
    }

    return (
        <Modal animationType="slide">
            <View style={styles.goalInput}>
                <View style={styles.errorHolder}>
                    {error && <Text style={styles.error}>{error}</Text>}
                </View>
                <TextInput style={styles.input} id="goal" name="goal" value={goal} onChangeText={changeHandler} />
                <View style={styles.buttonArea}>
                    <View style={styles.button}>
                        <Button onPress={props.cancel}  >Cancel</Button>
                    </View>
                    <View style={styles.button}>
                        <Button onPress={submitHandler}>Add Goal</Button>
                    </View>
                </View>
            </View>
        </Modal>


    )

}

const styles = StyleSheet.create({
    goalInput: {
        width: "100%",
        flex: 1,
        backgroundColor: "#4287f5",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: "10%"
    },

    input: {
        width: "80%",
        borderRadius: 5,
        backgroundColor: "white",
        height: 70,
        marginBottom: "10%",
        padding: "2%"
    },
    buttonArea: {
        width: "80%",
        flexDirection: "row",
        justifyContent: "space-around",
        height: "8%"
    },
    button: {
        width: "40%",
        flexDirection: "row"
    },
    errorHolder: {
        justifyContent: "center",
        height:"30%"
    },
    error: {
        backgroundColor: "yellow",
        fontSize: 20,
        fontWeight: 600,
        padding: "5%",
        marginBottom: "5%",
    }
})