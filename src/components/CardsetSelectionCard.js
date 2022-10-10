import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image, Dimensions } from 'react-native';

const {height, width} = Dimensions.get("window");

const CardsetSelectionCard = (props) => {
    return (
        <View style={styles.cardContainer}>
            {/* <View style={styles.shadowCard2}></View>
            <View style={styles.shadowCard}></View> */}
            <TouchableOpacity activeOpacity={.7} style={[styles.container, props.style, props.currentCardSet == props.type ? styles.checked : null]} onPress={props.onPress}>
                <View style={styles.header}>
                    <Image style={styles.icon} source={props.icon} />
                    {props.currentCardSet == props.type? 
                    <Image style={styles.checkbox} source={require('../assets/checked.png')} /> : <Image style={styles.checkbox} source={require('../assets/unchecked.png')} />
                    }
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.mainText}>{props.mainText}</Text>
                    <Text style={styles.subText}>{props.subText}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default CardsetSelectionCard;

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        marginTop: 24,
        marginBottom: 14,
        justifyContent: 'space-between',
        marginHorizontal: 21,
    },
    cardContainer: {
        width: (192 / 375) * width,
        height: (152 / 812) * height,
        marginHorizontal: 8
    },
    container: {
      borderStyle: 'solid',
      borderColor: '#111111',
      borderWidth: 2,
      borderRadius: 10,
      height: '96%',
      width: '100%',
    },
    checked: {
        borderColor: 'white',
    },
    checkbox: {
        width: 24,
        height: 24
    },
    mainText: {
        fontFamily: 'Gilroy-ExtraBold',
        fontStyle: 'normal',
        fontSize: 24,
        lineHeight: 30,
        color: 'white',
    },
    subText: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 17,
        color: 'white',
    },
    textContainer: {
        marginLeft: 21,
    },
    shadowCard: {
        position: 'absolute',
        width: '100%',
        height: '97%',
        top: '2%',
        backgroundColor: '#333333',
        borderWidth: 2,
        borderRadius: 10
    },
    shadowCard2: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: '2%',
        backgroundColor: '#4A4A4A',
        borderWidth: 2,
        borderRadius: 10
    },
    icon: {
        height: 24,
        width: 24
    }
  });