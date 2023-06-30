import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native';
import GoalInput from './Components/GoalInput';
import Button from './Components/Button';
import { useState } from 'react';
import Confirm from './Components/Confirm';
import uuid from 'react-native-uuid';



export default function App() {
  const [inputIsVisable, setInputIsVisable] = useState(false);
  const [confirmIsVisable, setConfirmIsVisable] = useState(false);
  const [goals, setGoals] = useState([]);
  const[deletedID,setDeletedID]=useState("");
  const[deletedText,setDeletedText]=useState("");


  function triggleInput() {
    setInputIsVisable(!inputIsVisable)
  }
  function triggleConfirm(id=null,text=null) {
    setConfirmIsVisable(!confirmIsVisable);
    setDeletedID(id);
    setDeletedText(text);
  }

  
  
  function addGoal(goal) {

    setGoals([...goals,{id:uuid.v4(),text:goal} ])

  }

  function deleteGoal (){
   const updatedGoals=()=>{return goals.filter(item=>item.id!==deletedID);}
   setGoals(updatedGoals);
   triggleConfirm();
  }




  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button onPress={triggleInput} >Add a New Goal</Button>
      </View>
      {inputIsVisable && <GoalInput cancel={triggleInput} add={addGoal} />}
      {confirmIsVisable&&<Confirm cancel={triggleConfirm} delete={deleteGoal} name={deletedText}/>}
      <FlatList
        style={styles.flatlist}
        data={goals}
        renderItem={({ item }) => (
          <Pressable style={styles.item} onPress={()=>triggleConfirm(item.id,item.text)}>
              <Text style={styles.itemText} >{item.text} </Text>
          </Pressable>

        )}
      />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4287f5",
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  button: {
    marginTop: "25%",
    width: "80%",
    height: "12%",
  },
  flatlist: {
    height: "80%",
    marginTop: "10%",
    width: "100%",
  },
  item: {
    backgroundColor: "#4287f5",
    borderWidth: 1,
    width: "80%",
    borderRadius: 10,
    margin: "2%",
    padding: "5%",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center"
  },
  itemText: {
    fontSize: 20,
    fontWeight: 500,
    color: "white"
  }
});
