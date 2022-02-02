import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [outputText, setOutputText] = useState("Open up App.js");
  return (
    <View style={styles.container}>
      <Text> {outputText}</Text>
      <Text>Changed the content that is done!</Text>
      <Button
        title="Change Text"
        onPress={() => {
          setOutputText(
            "This text should be displayed when the button is pressed."
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
