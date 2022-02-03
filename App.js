import { useState } from "react";
import { render } from "react-dom";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");

  const [courseGoals, setCourseGoals] = useState([]);

  //due to this binding, use arrow function

  const goalInputHandler = (enteredGoal) => {
    setEnteredGoal(enteredGoal);
  };

  const addGoalHandler = () => {
    //use the arrow function to always ensure that  the current state is updated
    setCourseGoals((currentState) => [
      ...currentState,
      { key: Math.random().toString() + enteredGoal, value: enteredGoal },
    ]);
  };
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goals"
          style={styles.input}
          //used to handle each key stroke that the user types.
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="Add" onPress={addGoalHandler} />
      </View>
      {/* the view Component is not scrollable hence there is need to set
      scrollable view */}
      {/* scroll view is quite inefficient since it renders Components that are not
      seen in the app. A better option is to use the flatlist */}
      {/* <ScrollView>
        {courseGoals.map((goal) => {
          return (
            <View style={styles.goalHolder}>
              <Text key={goal + Math.floor(Math.random() * 100)}>{goal}</Text>
            </View>
          );
        })}
      </ScrollView> */}
      <FlatList
        data={courseGoals}
        renderItem={(itemData) => {
          return (
            <View style={styles.goalHolder}>
              <Text>{itemData.item.value}</Text>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
  },
  goalHolder: {
    marginVertical: 10,
    backgroundColor: "lightgrey",
    height: 40,
  },
});
