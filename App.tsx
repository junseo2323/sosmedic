import { useState } from "react";
import { SafeAreaView,StyleSheet, Text, TextInput } from "react-native";

function App(): React.JSX.Element {
  const [value, onChangeText] = useState("username")
  return (
    <SafeAreaView>
      <Text style={styles.titleText}>Sign In</Text>
      <TextInput
        editable
        maxLength={40}
        onChangeText={text => onChangeText(text)}
        placeholder="username"
        style={styles.inputContainer}
      />
      <TextInput
        editable
        secureTextEntry
        maxLength={40}
        onChangeText={text => onChangeText(text)}
        placeholder="password"
        style={styles.inputContainer}
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleText : {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  inputContainer : {
    margin: 10,
    padding: 10,
    paddingTop: 13,
    paddingBottom: 13,
    borderRadius: 15,
    backgroundColor: "#F6F6F6"
  }
});

export default App;
