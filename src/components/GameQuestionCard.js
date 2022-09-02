import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

const GameSelectionCard = (props) => {
    return (
        <View style={[styles.cardContainer, {backgroundColor: props.backgroundColor}]}>
            <View style={styles.content}>
                <Text style={{fontFamily: 'Gilroy-Bold', fontSize: 16, lineHeight: 19, color: props.textColor, }}>{props.name}</Text>

                <Text style={{fontFamily: 'Gilroy-Bold', fontSize: 31, lineHeight: 35, color: props.textColor, top: '25%'}}>{props.cardText}</Text>

                <View style={styles.cardFooter}>
                    <Text style={{fontFamily: 'Gilroy-Heavy', fontSize: 16, lineHeight: 22, color: props.textColor, textTransform: 'uppercase'}}>{props.cardset}</Text>
                    <Image style={{height: 41, width: 41}} source={props.icon} />
                </View>
            </View>
        </View>
    )
}

export default GameSelectionCard;

const styles = StyleSheet.create({
    cardContainer: {
        height: '50%',
        width: '80%',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        width: '80%',
        height: '90%',
    },
    cardFooter: {
        position: 'absolute',
        width: '100%',
        bottom: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
  });