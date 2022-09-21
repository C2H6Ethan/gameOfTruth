import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import CustomButton from '../components/CustomButton';
import Onboarding from 'react-native-onboarding-swiper';
import OnboardingDot from '../components/OnboardingDot';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function OnboardingScreen({navigation}) {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [pageIndex, setPageIndex] = useState(0);

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
      <Image style={styles.backgroundImage} source={require('../assets/background_bubble.png')} />
      <Image style={styles.backgroundImage} source={require('../assets/background_smile.png')} />
      {/* <View style={styles.textContainer}>
        <Text style={styles.mainText}>Let's gather</Text>
        <Text style={styles.subText}>17+ was born from the idea to bring more life into the get-together. The goal of the app is to create a bridge between boring small talk and exciting deep conversations.</Text>
      </View> */}
      <Onboarding
        pageIndexCallback={getpageIndex}
        showPagination={false}

        containerStyles={{}}
        imageContainerStyles={styles.imageContainerStyles}
        pages={[
          {
            title: "Let's gather",
            subtitle: 'Game of Truth was born from the idea to bring more life into the get-together. The goal of the app is to create a bridge between boring small talk and exciting deep conversations.',
            titleStyles: 
            {
              fontFamily: 'Gilroy-ExtraBold',
              fontSize: 84,
              lineHeight: 76,
              color: 'white',
              flexWrap: 'wrap',
              left: 0
            },
            subTitleStyles: 
            {
              fontFamily: 'Poppins',
              fontSize: 17,
              lineHeight: 22,
              color: 'white',
            }
          },
          {
            image: <Image resizeMode='contain' style={styles.onboardingImage} source={require('../assets/onboardingImage1.png')} />,
            title: 'Choose Cardset',
            titleStyles: 
            {
              fontFamily: 'Poppins',
              fontStyle: 'normal',
              fontSize: 20,
              lineHeight: 24,
              color: 'white',
            },
          },
          {
            image: <Image resizeMode='contain' style={styles.onboardingImage} source={require('../assets/onboardingImage2.png')} />,
            title: 'Add people. Or play alone',
            titleStyles: 
            {
              fontFamily: 'Poppins',
              fontStyle: 'normal',
              fontSize: 20,
              lineHeight: 24,
              color: 'white',
            },
          },
          {
            image: <Image resizeMode='contain' style={styles.onboardingImage} source={require('../assets/onboardingImage3.png')} />,
            title: 'Start playing',
            titleStyles: 
            {
              fontFamily: 'Poppins',
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
        <CustomButton disabled={isButtonDisabled}  text="Let's go" onPress={() => buttonPress()} />
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
  subText: {
    fontFamily: 'Gilroy-ExtraBold',
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
    fontFamily: 'Gilroy-ExtraBold',
    fontStyle: 'normal',
    fontSize: 17,
    lineHeight: 22,
    color: '#111111',
  },
  onboardingImage: {
    height: 380,
    width: 187,
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
