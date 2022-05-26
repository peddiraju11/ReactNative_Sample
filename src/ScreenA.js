import React from 'react';
import {
    StyleSheet, View, Text, Pressable
} from 'react-native';

export default function ScreenA({ navigation }) {

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