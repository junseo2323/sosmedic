import {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  Alert,
  Button,
  TouchableOpacity,
} from 'react-native';
import auth from '@react-native-firebase/auth';

function App(): React.JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    try {
      await auth().signInWithEmailAndPassword(email, password);
      Alert.alert('Success', 'Signed in successfully');
    } catch (error: any) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <SafeAreaView>
      <Text style={styles.titleText}>Log In</Text>
      <TextInput
        editable
        maxLength={40}
        onChangeText={text => setEmail(text)}
        placeholder="Email"
        style={styles.inputContainer}
      />
      <TextInput
        editable
        secureTextEntry
        maxLength={40}
        onChangeText={text => setPassword(text)}
        placeholder="Password"
        style={styles.inputContainer}
      />
      <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
        <Text style={styles.signInText}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.forGotButton}>
        <Text style={styles.forgotText}>Forgot your password?</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  inputContainer: {
    margin: 10,
    padding: 10,
    paddingTop: 13,
    paddingBottom: 13,
    borderRadius: 15,
    backgroundColor: '#F6F6F6',
  },
  signInButton: {
    backgroundColor: '#5DB075',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 50,
    alignItems: 'center',
    marginTop: 50,
    marginHorizontal: 20,
  },
  signInText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forGotButton: {
    backgroundColor: '(0, 0, 0, 0.5)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 20,
  },
  forgotText: {
    color: '#5DB075',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;
