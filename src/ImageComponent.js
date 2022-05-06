import React from 'react';
import {
    StyleSheet, View, Text, Button, Linking, Image, ImageBackground
} from 'react-native';

const ImageItem = (props) => {
    return (
        <Text style={styles.image} >
            {props.text}
        </Text>
    );
};

const styles = StyleSheet.create({
    image: {
        margin: 20,
        color: '#FFFF'
    }
})

export default ImageItem;