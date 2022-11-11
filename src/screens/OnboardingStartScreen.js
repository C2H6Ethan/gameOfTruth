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
    <View style={styles.container}>
      <LottieView
        style={{flex: 1}}
        source={require('../assets/animation/test.json')}
        autoPlay
        loop
      />
    </View>
    // <View style={styles.container}>
    //   <Image style={{position: 'absolute', bottom: 0, width: '100%'}} source={require('../assets/onboardingBackground1.png')} />

    //   <View style={styles.animationContainer}>
    //     <LottieView
    //       autoPlay
    //       loop
    //       ref={animation}
    //       source={require('../assets/animation/rose_icon.json')}
    //     />
    //   </View>

    //   <View style={styles.textContainer}>
    //     <Text style={{fontFamily: 'Gilroy-ExtraBold', fontSize: 36, lineHeight: 43, color: 'white', marginBottom: 8}}>game of truth.</Text>
    //     <Text style={{fontFamily: 'Poppins', fontSize: 16, lineHeight: 21, color: 'white', textAlign: 'center'}}>A bridge to endless topics of conversation.</Text>
    //   </View>
    //   <View style={styles.buttonContainer}>
    //     <CustomButton text="Show me how it works" onPress={() => buttonPress()} />
    //   </View>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    width: '80%',
    top: '85%',
  },
  textContainer: {
    position: 'absolute',
    width: '80%',
    top: '63%',
    alignItems: 'center',
  },

  animationContainer: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
