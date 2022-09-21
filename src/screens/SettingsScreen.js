import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from "react";
import { StyleSheet, Modal, Text, View, Image, SafeAreaView, TouchableOpacity, Animated } from 'react-native';


export default function SettingsScreen({ navigation }) {


  return (
    <View style={styles.container}>
      <Image style={{position: 'absolute', top: 0, width: '100%'}} source={require('../assets/settingsBackground1.png')}/>
      <Image style={{position: 'absolute', bottom: 0, width: '100%'}} source={require('../assets/settingsBackground2.png')}/>
      <View style={styles.content}>
        <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={.7}>
          <Image style={styles.closeButton} source={require('../assets/closeButton.png')} /> 
        </TouchableOpacity>

        <Text style={{fontFamily: 'Gilroy-ExtraBold', fontSize: 36, lineHeight: 46, color: 'white', marginBottom: 32}}>Settings</Text>
        <TouchableOpacity onPress={() => navigation.navigate('LanguageSettingsScreen')} style={styles.languageSettingsButton}  activeOpacity={.7}>
          <Text style={{fontFamily: 'Poppins-SemiBold', fontSize: 17, lineHeight: 21, color: 'white', marginLeft: 24}}>Language Settings</Text>
          <Image style={{width: 26, height: 26, marginRight: 24}} source={require('../assets/languageSettingsButton.png')} /> 
        </TouchableOpacity>

        <Text style={{fontFamily: 'Gilroy-ExtraBold', fontSize: 30, lineHeight: 36, color: 'white'}}>How it's played</Text>
        <Text style={{fontFamily: 'Poppins', fontSize: 17, lineHeight: 22, color: 'white'}}>A random card with a question or task appears on the screen.</Text>
        <Text style={{fontFamily: 'Gilroy-ExtraBold', fontSize: 24, lineHeight: 31, color: 'white', marginTop: 24}}>If you answer:</Text>
        <Text style={{fontFamily: 'Poppins', fontSize: 17, lineHeight: 22, color: 'white'}}>You get a point.</Text>
        <Text style={{fontFamily: 'Gilroy-ExtraBold', fontSize: 24, lineHeight: 31, color: 'white', marginTop: 24}}>If you pass:</Text>
        <Text style={{fontFamily: 'Poppins', fontSize: 17, lineHeight: 22, color: 'white'}}>You get punished MUHAHAHA!</Text>

        <TouchableOpacity style={styles.termsButton} activeOpacity={.7}>
          <Text style={{fontFamily: 'Poppins', fontSize: 17, lineHeight: 20, color: 'white'}}>Terms of use & Privacy policy</Text>
          <Image style={{width: 26, height: 26}} source={require('../assets/arrowWhite.png')} /> 
        </TouchableOpacity>
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
  languageSettingsButton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    borderColor: 'white',
    borderWidth: 2,
    borderStyle: 'solid',
    height: 58,
    borderRadius: 10,
    marginBottom: 102
  },
  termsButton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:  'space-between',
    width: '100%',
    marginTop: 66
  }
});
