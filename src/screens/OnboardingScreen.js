import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState();

  useEffect(async() => {
    loadFonts();
  }, []);

  let customFonts = {
    'Gilroy-Heavy': require('../assets/fonts/Gilroy-Heavy.ttf'),
    'Gilroy-Regular': require('../assets/fonts/Gilroy-Regular.ttf'),
    'Gilroy-Bold': require('../assets/fonts/Gilroy-Bold.ttf'),
  };

  const loadFonts = async() => {
    await Font.loadAsync(customFonts);
    setFontsLoaded(true);
  }

  if (!fontsLoaded) {
    return <AppLoading />;
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
      <TouchableOpacity activeOpacity={.7} style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Let's go</Text>
      </TouchableOpacity>
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
    height: 58,
    top: '85%',
    backgroundColor: 'white',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'Gilroy-Bold',
    fontStyle: 'normal',
    fontSize: 17,
    lineHeight: 22,
    color: '#111111',
  },
});
