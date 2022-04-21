/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet, View, Text, Button, Linking
} from 'react-native';

const App = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Hi Team</Text>
      <Button style={styles.button} title='Click Here' onPress={() => { Linking.openURL("https://www.youtube.com") }}></Button>
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
