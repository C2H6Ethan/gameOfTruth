import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from "react";
import { StyleSheet, Modal, Text, View, Image, SafeAreaView, TouchableOpacity, Animated } from 'react-native';
import CustomButton from '../components/CustomButton';


export default function PremiumThankYou({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={{position: 'absolute', width: '100%', height: '100%'}} source={require('../assets/premiumThankYouBackground1.png')}/>
      <Image style={{position: 'absolute', width: '100%', height: '100%'}} source={require('../assets/premiumThankYouBackground2.png')}/>
      <View style={styles.content}>
        <TouchableOpacity onPress={() => navigation.reset({index: 0,routes: [{ name: 'HomeScreen' }]})} activeOpacity={.7}>
          <Image style={styles.closeButton} source={require('../assets/closeButton.png')} /> 
        </TouchableOpacity>
        <Text style={{fontFamily: 'Gilroy-ExtraBold', fontSize: 30, lineHeight: 36, color: 'white', width: 200, marginBottom: 16}}>Thank you for the drink.</Text>
        <Text style={{fontFamily: 'Poppins', fontSize: 16, lineHeight: 21, color: 'white', width: '90%'}}>A big thank you for your support. With your purchase of Premium, we can continue to work on game of truth even stronger.</Text>

        <View style={styles.infoContainer}>
          <View style={styles.info}>
            <View style={styles.infoTitle}>
              <Image style={{width: 36, height: 36, marginRight: 18}} source={require('../assets/video-game-key.png')}/>
              <Text style={{fontFamily: 'Gilroy-ExtraBold', fontSize: 24, lineHeight: 29, color: 'white'}}>Access all packages!</Text>
            </View>
            <Text style={{fontFamily: 'Poppins', fontSize: 16, lineHeight: 21, color: 'white', flexWrap: 'wrap', marginLeft: 54}}>You got access to all our packages.</Text>
          </View>
          <View style={styles.info}>
            <View style={styles.infoTitle}>
              <Image style={{width: 36, height: 36, marginRight: 18}} source={require('../assets/target-miss.png')}/>
              <Text style={{fontFamily: 'Gilroy-ExtraBold', fontSize: 24, lineHeight: 29, color: 'white'}}>No more ads!</Text>
            </View>
            <Text style={{fontFamily: 'Poppins', fontSize: 16, lineHeight: 21, color: 'white', flexWrap: 'wrap', marginLeft: 54}}>Enjoy our app add free!</Text>
          </View>
        </View>

        <View style={styles.footer}>
          <CustomButton onPress={() => navigation.reset({index: 0,routes: [{ name: 'HomeScreen' }]})} style={{marginBottom: 16, width: '100%'}} text="Let's go"/>
        </View>
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
    marginBottom: 24,
  },
  content: {
    width: '80%',
    height: '100%',
  },
  infoContainer: {
    position: 'absolute', 
    top: '40%',
    justifyContent: 'center',
  },
  info: {
    marginBottom: 24
  },
  infoTitle: {
    flexDirection: 'row'
  },
  footer: {
    position: 'absolute',
    top: '75%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
