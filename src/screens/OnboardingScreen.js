import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import CustomButton from '../components/CustomButton';
import Onboarding from 'react-native-onboarding-swiper';
import OnboardingDot from '../components/OnboardingDot';
import AsyncStorage from '@react-native-async-storage/async-storage';
const translations = require('../translations.json');

export default function OnboardingScreen({navigation}) {
  const [language, setLanguage] = useState("en");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [pageIndex, setPageIndex] = useState(0);

  useEffect(async () => {
    var language = await AsyncStorage.getItem('language')
    if(language){setLanguage(language)}
  }, []);

  const getpageIndex = (pageIndex) => {
    setPageIndex(pageIndex)
    if (pageIndex == 3) {
      setIsButtonDisabled(false)
    }
  }

  const buttonPress = async() => {
    navigation.navigate('HomeScreen')
    await AsyncStorage.setItem('hasBeenOnboarded', 'true')
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image style={styles.backgroundImage} source={require('../assets/gameMenuBackground2.png')} />
      {/* <View style={styles.textContainer}>
        <Text style={styles.mainText}>Let's gather</Text>
        <Text style={styles.subText}>17+ was born from the idea to bring more life into the get-together. The goal of the app is to create a bridge between boring small talk and exciting deep conversations.</Text>
      </View> */}
      <Onboarding
        pageIndexCallback={getpageIndex}
        showPagination={false}

        containerStyles={{}}
        imageContainerStyles={{paddingBottom: 0, width: '100%', height: '52%', bottom:100}}
        pages={[
          {
            image: <Image resizeMode='contain' style={styles.onboardingImage} source={require('../assets/onboardingImage1.png')} />,
            title: translations[language]["1. Select game mode"],
            titleStyles: 
            {
              fontFamily: 'Gilroy-ExtraBold',
              fontStyle: 'normal',
              fontSize: 20,
              lineHeight: 24,
              color: 'white',
            },
          },
          {
            image: <Image resizeMode='contain' style={styles.onboardingImage} source={require('../assets/onboardingImage2.png')} />,
            title: translations[language]["2. Add your peeps."],
            titleStyles: 
            {
              fontFamily: 'Gilroy-ExtraBold',
              fontStyle: 'normal',
              fontSize: 20,
              lineHeight: 24,
              color: 'white',
            },
          },
          {
            image: <Image resizeMode='contain' style={styles.onboardingImage} source={require('../assets/onboardingImage3.png')} />,
            title: translations[language]["3. Random questions are asked."],
            titleStyles: 
            {
              fontFamily: 'Gilroy-ExtraBold',
              fontStyle: 'normal',
              fontSize: 20,
              lineHeight: 24,
              color: 'white',
            },
          },
          {
            image: <Image resizeMode='contain' style={styles.onboardingImage} source={require('../assets/onboardingImage4.png')} />,
            title: translations[language]["4. Who answers most, wins."],
            titleStyles: 
            {
              fontFamily: 'Gilroy-ExtraBold',
              fontStyle: 'normal',
              fontSize: 20,
              lineHeight: 24,
              color: 'white',
            },
          },
        ]}
      />
      <View style={styles.pagination}>
        <OnboardingDot index={0} pageIndex={pageIndex}/>
        <OnboardingDot index={1} pageIndex={pageIndex}/>
        <OnboardingDot index={2} pageIndex={pageIndex}/>
        <OnboardingDot index={3} pageIndex={pageIndex}/>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton disabled={isButtonDisabled}  text={translations[language]["Let’s go"]} onPress={() => buttonPress()} />
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
    bottom: 0
  },
  mainText: {
    fontFamily: 'Gilroy-ExtraBold',
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
  buttonContainer: {
    position: 'absolute',
    width: '80%',
    top: '85%',
  },
  buttonText: {
    fontFamily: 'Gilroy-ExtraBold',
    fontStyle: 'normal',
    fontSize: 17,
    lineHeight: 22,
    color: '#111111',
  },
  onboardingImage: {
    height: '100%',
    width: '100%',
  },
  pagination: {
    flex: 1,
    position: 'absolute',
    flexDirection: 'row',
    bottom: '20%',
    width: 62.5,
    height: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
  }
});
