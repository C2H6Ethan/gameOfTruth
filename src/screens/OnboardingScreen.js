import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import CustomButton from '../components/CustomButton';

export default function OnboardingScreen({navigation}) {

  const buttonPress = () => {
    navigation.navigate('HomeScreen')
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image style={styles.backgroundImage} source={require('../assets/background_bubble.png')} />
      <Image style={styles.backgroundImage} source={require('../assets/background_smile.png')} />
      <View style={styles.textContainer}>
        <Text style={styles.mainText}>Let's gather</Text>
        <Text style={styles.subText}>17+ was born from the idea to bring more life into the get-together. The goal of the app is to create a bridge between boring small talk and exciting deep conversations.</Text>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton text="Let's go" onPressFunction={buttonPress}/>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%'
  },
  mainText: {
    fontFamily: 'Gilroy-Heavy',
    fontStyle: 'normal',
    fontSize: 84,
    lineHeight: 76,
    color: 'white',
    flex: 1,
    flexWrap: 'wrap',
    marginBottom: 18,
  },
  textContainer: {
    position: 'absolute',
    width: '80%',
    top: '35%',
  },
  subText: {
    fontFamily: 'Gilroy-Regular',
    fontStyle: 'normal',
    fontSize: 17,
    lineHeight: 22,
    color: 'white'
  },
  buttonContainer: {
    position: 'absolute',
    width: '80%',
    top: '85%',
  },
  buttonText: {
    fontFamily: 'Gilroy-Bold',
    fontStyle: 'normal',
    fontSize: 17,
    lineHeight: 22,
    color: '#111111',
  }
});
