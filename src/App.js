import React from 'react';
import {
  StyleSheet, View, Text, Pressable
} from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

function ScreenA({ navigation }) {

  const onPressHandlerA = () => {
    navigation.navigate("Screen_B")
  }
  return (
    <View style={styles.body}>
      <Text style={styles.text}>
        Screen A
      </Text>
      <Pressable
        style={({ pressed }) => ({ backgroundColor: pressed ? '#F4FD' : "#F12" })}
        onPress={onPressHandlerA}>
        <Text style={styles.text}>
          Click to B
        </Text>
      </Pressable>


    </View >
  )
}

function ScreenB({ navigation }) {

  const onPressHandlerA = () => {
    navigation.navigate("Screen_A")
  }
  return (
    <View style={styles.body}>
      <Text style={styles.text}>
        Screen B
      </Text>
      <Pressable
        style={({ pressed }) => ({ backgroundColor: pressed ? '#F4FD' : "#F12" })}
        onPress={onPressHandlerA}>
        <Text style={styles.text}>
          Click to A
        </Text>
      </Pressable>
    </View>
  )
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      // screenOptions={{
      //   header: () => null
      // }}
      >
        <Stack.Screen
          name="Screen_A"
          component={ScreenA}
        // options={{
        //   header: () => null
        // }
        // }
        />
        <Stack.Screen
          name="Screen_B"
          component={ScreenB}
        // options={{
        //   header: () => null
        // }
        // }
        />
      </Stack.Navigator>
    </NavigationContainer >
  )
}
const styles = StyleSheet.create({

  body: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    margin: 10
  }


});

export default App;
