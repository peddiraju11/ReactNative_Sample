import React from 'react';
import {
  StyleSheet, View, Text, Button, Linking, Image, ImageBackground
} from 'react-native';

const App = () => {
  return (
    <ImageBackground
      style={styles.body}
      source={require('./assets/background.jpg')}>
      <Image
        style={styles.image}
        source={require('./assets/baby.jpg')}
        resizeMode='center'
      />
      <Image
        style={styles.image}
        source={{ uri: 'https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U' }}
        resizeMode='center'
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({

  body: {
    backgroundColor: '#ffffff',
    flex: 1,
    alignItems: 'center'
  },
  text: {
    color: '#000000',
    fontSize: 20,
    margin: 20,
  },
  button: {
    margin: 20,
  },
  image: {
    margin: 20,
    height: 300,
    width: 100
  }

});

export default App;
