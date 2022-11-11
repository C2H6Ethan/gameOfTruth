import { StatusBar } from 'expo-status-bar';
import React, { useRef } from "react";
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, Button } from 'react-native';
import CustomButton from '../components/CustomButton';
import LottieView from 'lottie-react-native';

export default function OnboardingStartScreen({navigation}) {
  const animation = useRef(null);

  const buttonPress = async() => {
    navigation.navigate('OnboardingScreen')
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image style={{position: 'absolute', bottom: 0, width: '100%'}} source={require('../assets/onboardingBackground1.png')} />

      <View style={styles.content}>
        <Image style={{position: 'absolute', width: 52, height: 52, top: 0, right: 0}} source={require('../assets/iconSmile.png')} />
        <Image style={{width: '80%', height: '50%', top: '5%'}} source={require('../assets/onboardingRose.png')} />
        

        <View style={styles.textContainer}>
          <Text style={{fontFamily: 'Gilroy-ExtraBold', fontSize: 36, lineHeight: 43, color: 'white', marginBottom: 8}}>game of truth.</Text>
          <Text style={{fontFamily: 'Poppins', fontSize: 16, lineHeight: 21, color: 'white', textAlign: 'center'}}>A bridge to endless topics of conversation.</Text>
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton text="Show me how it works" onPress={() => buttonPress()} />
        </View>
      </View>
  
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    width: '80%',
    height: '100%',
    alignItems: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    top: '85%',
  },
  textContainer: {
    position: 'absolute',
    top: '63%',
    width: '100%',
    alignItems: 'center',
  },
});
