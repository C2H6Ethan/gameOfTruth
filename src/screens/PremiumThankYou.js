import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from "react";
import { StyleSheet, Modal, Text, View, Image, SafeAreaView, TouchableOpacity, Dimensions } from 'react-native';
import CustomButton from '../components/CustomButton';
const translations = require('../translations.json');
import AsyncStorage from '@react-native-async-storage/async-storage';

const {height, width} = Dimensions.get("window");

export default function PremiumThankYou({ navigation }) {
  const [language, setLanguage] = useState("en");

  useEffect(async () => {
    var language = await AsyncStorage.getItem('language')
    if(language){setLanguage(language)}
  }, []);

  return (
    <View style={styles.container}>
      <Image style={{position: 'absolute', bottom: (148 / 812) * height, resizeMode: 'stretch', width: '100%'}} source={require('../assets/premiumThankYouGuy.png')}/>
      <Image style={{position: 'absolute', bottom: 0, resizeMode: 'stretch', width: '100%'}} source={require('../assets/premiumThankYouBackground.png')}/>
      <Image style={{position: 'absolute', top: (135 / 812) * height, resizeMode: 'stretch', width: 52, height: 52}} source={require('../assets/premiumThankYouCrown.png')}/>
      <View style={styles.content}>
        <View style={styles.infoContainer}>
          <Text style={{fontFamily: 'Gilroy-ExtraBold', fontSize: 30, lineHeight: 36, color: 'black', marginBottom: 8}}>{translations[language]["Premium Unlocked"]}</Text>
          <Text style={{fontFamily: 'Poppins', fontSize: 16, lineHeight: 21, color: 'black'}}>{translations[language]["A big thank you for your support."]}</Text>
        </View>

        <View style={styles.footer}>
          <CustomButton onPress={() => navigation.reset({index: 0,routes: [{ name: 'HomeScreen' }]})} style={{width: '100%'}} text={translations[language]["Let’s go"]}/>
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
    marginBottom: 24,
  },
  content: {
    width: '80%',
    height: '100%',
  },
  infoContainer: {
    position: 'absolute', 
    top: (211 / 812) * height,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  info: {
    marginBottom: 24
  },
  infoTitle: {
    flexDirection: 'row'
  },
  footer: {
    position: 'absolute',
    bottom: (64 / 812) * height,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
