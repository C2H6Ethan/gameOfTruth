import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from "react";
import { StyleSheet, Modal, Text, View, Image, SafeAreaView, TouchableOpacity, Animated } from 'react-native';
import LanguageButton from '../components/LanguageButton';

export default function LanguageSettingsScreen({ navigation }) {
  const [english, setEnglish] = useState(true);
  const [detusch, setDeutsch] = useState(false);
  const [francais, setFrancais] = useState(false);
  const [espanol, setEspanol] = useState(false);

  const select = (language) => {
    //deselect all
    setEnglish(false)
    setDeutsch(false)
    setFrancais(false)
    setEspanol(false)

    //select wanted
    switch (language) {
      case 'english':
        setEnglish(true)
        break;
      case 'deutsch':
        setDeutsch(true)
        break;
      case 'francais':
        setFrancais(true)
        break;
      case 'espanol':
        setEspanol(true)
        break;
    }

  }

  return (
    <View style={styles.container}>
      <Image style={{position: 'absolute', top: 0, width: '100%'}} source={require('../assets/settingsBackground1.png')}/>
      <Image style={{position: 'absolute', bottom: 0, width: '100%'}} source={require('../assets/settingsBackground2.png')}/>
      <View style={styles.content}>
        <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={.7}>
          <Image style={styles.closeButton} source={require('../assets/closeButton.png')} /> 
        </TouchableOpacity>

        <Text style={{fontFamily: 'Gilroy-ExtraBold', fontSize: 36, lineHeight: 46, color: 'white', marginBottom: 32}}>Language</Text>

        <Text style={{fontFamily: 'Gilroy-ExtraBold', fontSize: 36, lineHeight: 46, color: 'white', marginBottom: 32}}>Coming soon</Text>
        
        {/* <LanguageButton text="English" selected={english} onPress={() => select('english')}></LanguageButton>
        <LanguageButton text="Deutsch" selected={detusch} onPress={() => select('deutsch')}></LanguageButton>
        <LanguageButton text="Francais" selected={francais} onPress={() => select('francais')}></LanguageButton>
        <LanguageButton text="Espanol" selected={espanol} onPress={() => select('espanol')}></LanguageButton> */}

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
