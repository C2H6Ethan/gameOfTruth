import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

const LanguageButton = (props) => {
    return (
        <View>
            {props.selected ? 
            <TouchableOpacity activeOpacity={.7} style={[styles.buttonContainerSelected]} onPress={props.onPress}>
                <View style={styles.children}>
                    <Text style={styles.buttonTextSelected}>{props.text}</Text>
                    <Image style={{width: 24, height: 24, marginRight: 16}} source={require('../assets/checkedBlack.png')} />
                </View>
            </TouchableOpacity>
            :
            <TouchableOpacity activeOpacity={.7} style={[styles.buttonContainer]} onPress={props.onPress}>
                <View style={styles.children}>
                    <Text style={styles.buttonText}>{props.text}</Text>
                    <Image style={{width: 24, height: 24, marginRight: 16}} source={require('../assets/unchecked.png')} />
                </View>
            </TouchableOpacity>
            }
        </View>
    )
}

export default LanguageButton;

const styles = StyleSheet.create({
    buttonContainerSelected: {
        height: 58,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: 'white',
        borderStyle: 'solid',
        marginBottom: 20,
        backgroundColor: 'white'
    },
    buttonContainer: {
      height: 58,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 2,
      borderColor: 'white',
      borderStyle: 'solid',
      marginBottom: 20
    },
    buttonTextSelected: {
      fontFamily: 'Gilroy-Bold',
      fontStyle: 'normal',
      fontSize: 17,
      lineHeight: 21,
      color: '#111111',
      marginLeft: 24,
    },
    buttonText: {
      fontFamily: 'Gilroy-Bold',
      fontStyle: 'normal',
      fontSize: 17,
      lineHeight: 21,
      color: 'white',
      marginLeft: 24,
    },
    children: {
        flex: 1,
        flexDirection:'row', 
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%'
    },
  });