import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

const CustomButton = (props) => {
    return (
        <TouchableOpacity activeOpacity={.7} style={[styles.buttonContainer, props.style]} onPress={props.onPressFunction}>
            <View style={styles.children}>
                <Text style={styles.buttonText}>{props.text}</Text>
                <Image source={require('../assets/arrow.png')} />
            </View>
        </TouchableOpacity>
    )
}

export default CustomButton;

const styles = StyleSheet.create({
    buttonContainer: {
      height: 58,
      backgroundColor: 'white',
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      fontFamily: 'Gilroy-Bold',
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
  });