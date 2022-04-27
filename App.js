import React from 'react';
import {
  StyleSheet, View, Text, Button, Linking
} from 'react-native';

const App = () => {
  return (
    <View style={styles.body}>
      <View style={styles.view123}>
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
      <View style={styles.view4}>
        <Text style={styles.text}>4</Text>
      </View>
      <View style={styles.view5}>
        <Text style={styles.text}>5</Text>
      </View>
      <View style={styles.view67}>
        <View style={styles.view6}>
          <Text style={styles.text}>6</Text>
        </View>
        <View style={styles.view7}>
          <Text style={styles.text}>7</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  body: {
    backgroundColor: '#ffffff',
    flex: 1
  },
  text: {
    color: '#000000',
    fontSize: 20,
  },
  view123: {
    flexDirection: 'row',
    flex: 0.1
  },
  view1: {
    backgroundColor: '#ffff2f',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.2
  },
  view2: {
    backgroundColor: '#f84f2f',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.3
  },
  view3: {
    backgroundColor: '#0fff2f',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.5
  },
  view4: {
    backgroundColor: '#0f7f2f',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.1
  },
  view5: {
    backgroundColor: '#023f2f',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.1
  },
  view67: {
    alignItems: 'stretch',
    flexDirection: 'row',
    flex: 1
  },
  view6: {
    backgroundColor: '#01F134',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 0.5
  },
  view7: {
    backgroundColor: '#F54134',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 0.5
  },

});

export default App;
