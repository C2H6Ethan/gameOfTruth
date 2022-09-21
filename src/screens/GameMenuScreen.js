import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from "react";
import { StyleSheet, Modal, Text, View, Image, SafeAreaView, TouchableOpacity, Animated } from 'react-native';
import CustomButton from '../components/CustomButton';
import { MyContext } from "../context";
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function GameMenuScreen({ navigation, route }) {
  const [hasUpgraded, setHasUpgraded] = useState(false);
  const { cardset } = route.params;
  const { question } = route.params; 
  const { round } = route.params;
  const { player } = route.params;
  const { players } = route.params;

  useEffect(async () => {
    var temp = await AsyncStorage.getItem('hasUpgraded')
    if (temp == 'true'){setHasUpgraded(true)}
  }, []);

  const endGame = (interstitial) => {
    if(!hasUpgraded) {interstitial.show()}
    
    navigation.reset({
      index: 0,
      routes: [{ name: 'HomeScreen' }],
    });
  }

  const adjustPlayers = () => {
    navigation.navigate('AdjustPlayersScreen', {cardset: cardset, question: question, player: player, round: round, oldPlayers: players})
  }

  return (
    <MyContext.Consumer>
      {context => (
        <View style={styles.container}>
          <Image style={{position: 'absolute', top: 0, left: 0}} source={require('../assets/gameTransitionScreenBackground1.png')}/>
          <Image style={{position: 'absolute', bottom: 0, width: '100%'}} source={require('../assets/gameMenuBackground2.png')}/>
          
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={.7}>
              <Image style={styles.closeButton} source={require('../assets/closeButton.png')} /> 
            </TouchableOpacity>
            <Text style={{fontFamily: 'Gilroy-ExtraBold', fontSize: 17, lineHeight: 22, color: 'white', textTransform: 'uppercase'}}>{cardset}</Text>
          </View>
          <View style={styles.content}>

            <Text style={{fontFamily: 'Gilroy-ExtraBold', fontSize: 36, lineHeight: 46, color: 'white', marginBottom: 32}}>Game Menu</Text>

            <CustomButton onPress={() => adjustPlayers()} style={{marginBottom: 20}} text="Adjust Players" inverted={true}/>
            <CustomButton onPress={() => endGame(context.interstitial)} style={{marginBottom: 58}} text="End Game" inverted={true}/>

            <Text style={{fontFamily: 'Gilroy-ExtraBold', fontSize: 30, lineHeight: 36, color: 'white'}}>How it's played</Text>
            <Text style={{fontFamily: 'Poppins', fontSize: 17, lineHeight: 22, color: 'white'}}>A random card with a question or task appears on the screen.</Text>
            <Text style={{fontFamily: 'Gilroy-ExtraBold', fontSize: 24, lineHeight: 31, color: 'white', marginTop: 24}}>If you answer:</Text>
            <Text style={{fontFamily: 'Poppins', fontSize: 17, lineHeight: 22, color: 'white'}}>You get a point.</Text>
            <Text style={{fontFamily: 'Gilroy-ExtraBold', fontSize: 24, lineHeight: 31, color: 'white', marginTop: 24}}>If you pass:</Text>
            <Text style={{fontFamily: 'Poppins', fontSize: 17, lineHeight: 22, color: 'white'}}>You get punished MUHAHAHA!</Text>

          </View>
        </View>
      )}
    </MyContext.Consumer>
    
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
  },
  content: {
    position: 'absolute',
    top: '20%',
    width: '80%',
  },
  settingsButton: {
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
  },
  termsButton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:  'space-between',
    width: '100%',
    marginTop: 66
  },
  header: {
    position: 'absolute',
    width: '80%',
    top: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
});
