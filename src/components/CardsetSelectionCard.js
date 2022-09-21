import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

const CardsetSelectionCard = (props) => {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.shadowCard2}></View>
            <View style={styles.shadowCard}></View>
            <TouchableOpacity activeOpacity={.7} style={[styles.container, props.style, props.currentCardSet == props.type ? styles.checked : null]} onPress={props.onPress}>
                {props.currentCardSet == props.type? 
                <Image style={styles.checkbox} source={require('../assets/checked.png')} /> : <Image style={styles.checkbox} source={require('../assets/unchecked.png')} />
                }
                <View style={styles.textContainer}>
                    <View style={styles.title}>
                        <Image style={styles.icon} source={props.icon} />
                        <Text style={styles.mainText}>{props.mainText}</Text>
                    </View>
                    <Text style={styles.subText}>{props.subText}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default CardsetSelectionCard;

const styles = StyleSheet.create({
    cardContainer: {
        width: 208,
        height: 160,
        marginHorizontal: 8
    },
    container: {
      borderStyle: 'solid',
      borderColor: '#111111',
      borderWidth: 2,
      borderRadius: 10,
      height: '96%',
      width: '100%'
    },
    checked: {
        borderColor: 'white',
    },
    checkbox: {
        position: 'absolute',
        right: 0,
        margin: 16,
        width: 24,
        height: 24
    },
    mainText: {
        fontFamily: 'Gilroy-ExtraBold',
        fontStyle: 'normal',
        fontSize: 26,
        lineHeight: 33,
        color: 'white',
        marginLeft: 5,
    },
    subText: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 17,
        color: 'white',
        marginTop: 10
    },
    textContainer: {
        marginLeft: 16,
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        flexDirection: "row",
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