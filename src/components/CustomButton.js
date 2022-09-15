import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

const CustomButton = (props) => {
    return (
        <TouchableOpacity disabled={props.disabled} activeOpacity={.7} style={[styles.buttonContainer, props.style, props.disabled? styles.disabled : null, props.inverted? styles.inverted: null]} onPress={props.onPress}>
            <View style={styles.children}>
                <Text style={[styles.buttonText, props.inverted? styles.invertedText: null]}>{props.text}</Text>
                <Image style={{width: 26, height: 26}} source={props.inverted? require('../assets/arrowWhite.png') : require('../assets/arrow.png')} />
            </View>
        </TouchableOpacity>
    )
}

export default CustomButton;

const styles = StyleSheet.create({
    buttonContainer: {
      height: 58,
      backgroundColor: 'white',
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      fontFamily: 'Gilroy-ExtraBold',
      fontStyle: 'normal',
      fontSize: 17,
      lineHeight: 22,
      color: '#111111',
    },
    children: {
        flex: 1,
        width: '85%',
        flexDirection:'row', 
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    disabled: {
        opacity: .6
    },
    inverted: {
        height: 58,
        backgroundColor: '#1A1A1A',
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    invertedText: {
        color: 'white'
    }
  });