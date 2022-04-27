import React from 'react';
import {
  StyleSheet, View, Text, Button, Linking
} from 'react-native';

const App = () => {
  return (
    <View style={styles.body}>
      <View style={styles.view1}>
        <Text style={styles.text}>1</Text>
      </View>
      <View style={styles.view2}>
        <Text style={styles.text}>2</Text>
      </View>
      <View style={styles.view3}>
        <Text style={styles.text}>3</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  body: {
    backgroundColor: '#3f4592',
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    flexDirection: 'row-reverse'
  },
  text: {
    color: '#000000',
    fontSize: 20,
  },
  view1: {
    flex: 1,
    backgroundColor: '#D0FF00',
    alignItems: 'center',
    justifyContent: 'center'
  },
  view2: {
    flex: 1,
    backgroundColor: '#00F000',
    alignItems: 'center',
    justifyContent: 'center'
  },
  view3: {
    flex: 1,
    backgroundColor: '#00F0F0',
    alignItems: 'center',
    justifyContent: 'center'
  },
});

export default App;
