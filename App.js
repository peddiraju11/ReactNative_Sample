import React, { useState } from 'react';
import {
  StyleSheet, View, Text, Button, Linking
} from 'react-native';

const App = () => {

  const [name, setName] = useState("Raju")
  const [session, setSession] = useState({ number: 7, title: "Ravi" })
  const [IsCurrent, setIsCurrent] = useState(true)


  const onPressButton = () => {
    setName("Ravi Raj")
    setSession({ number: 11, title: "Janu" })
    setIsCurrent(false)
  }

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Hello World with {name}</Text>
      <Text style={styles.text}>Current Seesion number {session.number} with {session.title}</Text>
      <Text style={styles.text}>{IsCurrent ? 'Current Session' : 'Next Sesion'}</Text>
      <Button style={styles.button} title='Click Here' onPress={() => { onPressButton() }}></Button>
    </View>
  );
};

const styles = StyleSheet.create({

  body: {
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  text: {
    color: '#000000',
    fontSize: 20,
    margin: 10,
  },
  button: {
    margin: 20,
  }

});

export default App;
