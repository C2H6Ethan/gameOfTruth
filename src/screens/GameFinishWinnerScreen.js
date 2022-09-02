import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from "react";
import { StyleSheet, Modal, Text, View, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import CustomButton from '../components/CustomButton';

export default function GameFinishWinnerScreen({ route, navigation }) {
  // const { player } = route.params;



  return (
    <View style={styles.container}>
      <Image style={{position: 'absolute', bottom: 0, resizeMode: 'stretch', width: '100%'}} source={require('../assets/gameFinishWinnerScreenBackgroundBubble.png')}/>
      <Image style={{position: 'absolute', width: 142, height: 264, bottom: '30%'}} source={require('../assets/award.png')}/>

      <View style={styles.content}>
        <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={.7}>
          <Image style={styles.closeButton} source={require('../assets/closeButtonWinnerScreen.png')} /> 
        </TouchableOpacity>
        <Text style={{fontFamily: 'Gilroy-Bold', fontSize: 24, lineHeight: 29, color: '#191919', textAlign: 'center'}}>Most answered</Text>
        <Text style={{fontFamily: 'Gilroy-Heavy', fontSize: 36, lineHeight: 44, color: '#191919', marginBottom: 32,  textAlign: 'center'}}>Supermegalol30</Text>
        <View style={styles.buttonContainer}>
          <CustomButton text="Back to Home" onPress={() => navigation.navigate('HomeScreen')} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  
    backgroundColor: '#F0940B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeButton: {
    height: 46,
    width: 46,
    marginTop: 60,
    marginBottom: 58
  },
  content: {
    width: '80%',
    height: '100%'
  },

  buttonContainer: {
    position: 'absolute',
    width: '100%',
    top: '85%',
  },
});
