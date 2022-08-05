
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import CustomButton from './CustomButton';

const Head = (props) => {
    return (
        <View style={styles.container}>
        <Image style={styles.classicBackgroundBig} source={props.background1} />
        <Image style={styles.classicBackgroundBig2} source={props.background2} />
        <View style={styles.head}>
            <TouchableOpacity onPress={props.onSettingsButtonPress} style={styles.settingsButton} activeOpacity={.7}>
                <Image style={{width: 32, height: 32}} source={require('../assets/settingsButton.png')} />
            </TouchableOpacity>
            <Image style={styles.icon} source={props.icon} />
            <Text style={styles.mainText}>{props.mainText}</Text>
            <Text style={styles.subText}>{props.subText}</Text>
            <CustomButton style={styles.headButton} text="Start Game"/>
        </View>
      </View>
    )
}

export default Head;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#111111',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
      },
    head:  {
        flex: 1,
        position: 'absolute',
        width: '80%',
        height: '30%',
        top: '10%',
        justifyContent: 'center',
      },
    classicBackgroundBig: {
        position: 'absolute',
        width: '100%',
        top: 0,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
      },
      classicBackgroundBig2: {
        position: 'absolute',
        top: 0,
        left: 0,
      },
      headButton: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
      },
      settingsButton: {
        position: 'absolute',
        top: 0,
        right: 0,
      },
      mainText: {
        fontFamily: 'Gilroy-Heavy',
        fontStyle: 'normal',
        fontSize: 36,
        lineHeight: 46,
        color: 'white',
      },
      subText: {
        fontFamily: 'Gilroy-Regular',
        fontStyle: 'normal',
        fontSize: 17,
        lineHeight: 22,
        color: 'white',
        marginBottom: 28
      },
      icon: {
        width: 41,
        height: 41
      },
  });
