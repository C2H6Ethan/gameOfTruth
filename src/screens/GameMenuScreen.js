import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from "react";
import { StyleSheet, Modal, Text, View, Image, SafeAreaView, TouchableOpacity, Animated } from 'react-native';


export default function GameMenuScreen({ navigation, route }) {
  const { cardset } = route.params;
  const { question } = route.params; 
  const { round } = route.params;
  const { player } = route.params;
  const { players } = route.params;

  const endGame = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'HomeScreen' }],
    });
  }

  const adjustPlayers = () => {
    navigation.navigate('AdjustPlayersScreen', {cardset: cardset, question: question, player: player, round: round, oldPlayers: players})
  }

  return (
    <View style={styles.container}>
      <Image style={{position: 'absolute', top: 0, left: 0}} source={require('../assets/gameTransitionScreenBackground1.png')}/>
      <Image style={{position: 'absolute', bottom: 0, width: '100%'}} source={require('../assets/gameMenuBackground2.png')}/>
      
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={.7}>
          <Image style={styles.closeButton} source={require('../assets/closeButton.png')} /> 
        </TouchableOpacity>
        <Text style={{fontFamily: 'Gilroy-Heavy', fontSize: 17, lineHeight: 22, color: 'white', textTransform: 'uppercase'}}>{cardset}</Text>
      </View>
      <View style={styles.content}>

        <Text style={{fontFamily: 'Gilroy-Heavy', fontSize: 36, lineHeight: 46, color: 'white', marginBottom: 32}}>Game Menu</Text>

        <TouchableOpacity onPress={() => adjustPlayers()}  style={[styles.settingsButton, {marginBottom: 20}]}  activeOpacity={.7}>
          <Text style={{fontFamily: 'Gilroy-Bold', fontSize: 17, lineHeight: 21, color: 'white', marginLeft: 24}}>Adjust Players</Text>
          <Image style={{width: 26, height: 26, marginRight: 24}} source={require('../assets/arrowWhite.png')} /> 
        </TouchableOpacity>
        <TouchableOpacity onPress={() => endGame()} style={[styles.settingsButton, {marginBottom: 58}]}  activeOpacity={.7}>
          <Text style={{fontFamily: 'Gilroy-Bold', fontSize: 17, lineHeight: 21, color: 'white', marginLeft: 24}}>End Game</Text>
          <Image style={{width: 26, height: 26, marginRight: 24}} source={require('../assets/arrowWhite.png')} /> 
        </TouchableOpacity>

        <Text style={{fontFamily: 'Gilroy-Heavy', fontSize: 30, lineHeight: 36, color: 'white'}}>How it's played</Text>
        <Text style={{fontFamily: 'Gilroy-Regular', fontSize: 17, lineHeight: 22, color: 'white'}}>
          <Text>A </Text>
          <Text style={{fontFamily: 'Gilroy-Bold'}}>random </Text>
          <Text>card with a </Text>
          <Text style={{fontFamily: 'Gilroy-Bold'}}>question </Text>
          <Text>or </Text>
          <Text style={{fontFamily: 'Gilroy-Bold'}}>task </Text>
          <Text>appears on the screen</Text>
        </Text>
        <Text style={{fontFamily: 'Gilroy-Heavy', fontSize: 24, lineHeight: 31, color: 'white', marginTop: 24}}>If you answer:</Text>
        <Text style={{fontFamily: 'Gilroy-Regular', fontSize: 17, lineHeight: 22, color: 'white'}}>You get a point.</Text>
        <Text style={{fontFamily: 'Gilroy-Heavy', fontSize: 24, lineHeight: 31, color: 'white', marginTop: 24}}>If you pass:</Text>
        <Text style={{fontFamily: 'Gilroy-Regular', fontSize: 17, lineHeight: 22, color: 'white'}}>You get punished MUHAHAHA!</Text>

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
