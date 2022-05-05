import React, { useState } from 'react';
import {
  StyleSheet, View, Text, TextInput, Button,
  TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback,
  Pressable, Alert, ToastAndroid,
} from 'react-native';

const App = () => {

  const [name, setName] = useState('')

  const [IsSubmitted, setSubmit] = useState(false)

  const onPressHandler = () => {

    if (name.length > 3) {
      setSubmit(true)
    } else {
      //   Alert.alert('Warning', 'You should ennter minimum 4 characters',
      //     [
      //       {
      //         text: 'w wef wer',
      //         onPress: () => console.warn('click wer')
      //       },
      //       {
      //         text: 'Cancel',
      //         onPress: () => console.warn('click cancel')
      //       },
      //       {
      //         text: 'Ok',
      //         onPress: () => console.warn('wehbhjbew')
      //       },
      //     ], { cancelable: true })
      // }
      ToastAndroid.show('You should ennter minimum 4 characters', ToastAndroid.SHORT);
    }
  }
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Hi Team</Text>
      <TextInput
        style={styles.input}
        placeholder='e.g Peddy'
        onChangeText={(newName) => { setName(newName) }}
        keyboardType='numeric'
        maxLength={4}
        secureTextEntry={true}
      />
      <Pressable
        onPress={onPressHandler}
        hitSlop={{ top: 20, bottom: 20, left: 20, right: 29 }}
        android_ripple={'#F56'}
      >
        <View style={styles.button} >
          <Text style={styles.text}>{IsSubmitted ? 'clear' : 'submit'}</Text>
        </View>
      </Pressable>
      {
        IsSubmitted ?
          <Text style={styles.text}>You entered name: {name}</Text>
          : null
      }
    </View >
  );
};

const styles = StyleSheet.create({

  body: {
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',

  },
  text: {
    color: '#000000',
    fontSize: 20,
    margin: 10,
  },
  input: {
    margin: 20,
    borderColor: '#F34555',
    borderWidth: 2,
    borderRadius: 5,
    width: 300
  },
  button: {
    backgroundColor: '#FDF445',
    width: 150,
    height: 50,
    alignItems: 'center'
  }

});

export default App;
