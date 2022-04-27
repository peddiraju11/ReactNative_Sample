import React, { useState } from 'react';
import {
  StyleSheet, View, Text, Button, Linking
} from 'react-native';

const App = () => {

  const [value, setValue] = useState(0)
  const [clickValue, setClickValue] = useState(0)
  const onPressAdd = () => {
    setValue(value + 5)
    setClickValue(clickValue + 1)
  }
  return (
    <View style={styles.body}>
      <Text style={styles.text}>{value}</Text>
      <Button style={styles.button} title='Add' onPress={() => { onPressAdd() }}></Button>
      <Text style={styles.text}>{clickValue}</Text>
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
    margin: 20,
  },
  button: {
    margin: 20,
  }

});

export default App;
