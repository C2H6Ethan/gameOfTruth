import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from "react";
import { StyleSheet, Modal, Text, View, Image, SafeAreaView, TouchableOpacity, Animated } from 'react-native';
import LanguageButton from '../components/LanguageButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
const translations = require('../translations.json');

export default function LanguageSettingsScreen({ navigation }) {
  const [english, setEnglish] = useState(true);
  const [detusch, setDeutsch] = useState(false);
  const [francais, setFrancais] = useState(false);
  const [espanol, setEspanol] = useState(false);
  const [language, setLanguage] = useState("en");

  useEffect(async () => {
    var language = await AsyncStorage.getItem('language')
    if(language){select(language); setLanguage(language)}
  }, []);

  const select = async (language) => {
    //deselect all
    setEnglish(false)
    setDeutsch(false)
    setFrancais(false)
    setEspanol(false)

    //select wanted
    setLanguage(language)
    await AsyncStorage.setItem('language', language)
    switch (language) {
      case 'en':
        setEnglish(true)
        break;
      case 'de':
        setDeutsch(true)
        break;
      case 'fr':
        setFrancais(true)
        break;
      case 'es':
        setEspanol(true)
        break;
    }

  }

  return (
    <View style={styles.container}>
      <Image style={{position: 'absolute', top: 0, width: '100%'}} source={require('../assets/settingsBackground1.png')}/>
      <Image style={{position: 'absolute', bottom: 0, width: '100%'}} source={require('../assets/settingsBackground2.png')}/>
      <View style={styles.content}>
        <TouchableOpacity onPress={() => navigation.reset({index: 0, routes: [{ name: 'HomeScreen' }],})} activeOpacity={.7}>
          <Image style={styles.closeButton} source={require('../assets/closeButton.png')} /> 
        </TouchableOpacity>

        <Text style={{fontFamily: 'Gilroy-ExtraBold', fontSize: 36, lineHeight: 46, color: 'white', marginBottom: 32}}>{translations[language]["Language"]}</Text>

        {/* <Text style={{fontFamily: 'Gilroy-ExtraBold', fontSize: 36, lineHeight: 46, color: 'white', marginBottom: 32}}>Coming soon</Text> */}
        
        <LanguageButton text="English" selected={english} onPress={() => select('en')}></LanguageButton>
        <LanguageButton text="Deutsch" selected={detusch} onPress={() => select('de')}></LanguageButton>
        {/* <LanguageButton text="Francais" selected={francais} onPress={() => select('fr')}></LanguageButton>
        <LanguageButton text="Espanol" selected={espanol} onPress={() => select('es')}></LanguageButton> */}

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
  
});
