import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from "react";
import { StyleSheet, Modal, Text, View, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function GameTransitionScreen({ route, navigation }) {
  const { cardset } = route.params;
  const { player } = route.params;
  const { players } = route.params;
  const { round } = route.params;
  const { totalAddedPlayers } = route.params;
  const { usedQuestions } = route.params;

  useEffect(async() => {
    var language = 'en'
    var newLanguage = await AsyncStorage.getItem('language')
    if(newLanguage){language = newLanguage}

    // Start counting when the page is loaded
    const timeoutHandle = setTimeout(()=>{
      // Add your logic for the transition
      navigation.reset({
        index: 0,
        routes: [{ name: 'GameMainScreen', params:  {cardset: cardset, player: player, players: players, totalAddedPlayers: totalAddedPlayers, round: round, usedQuestions: usedQuestions, language: language}}],
      });
    }, 2500);
  }, []);

  


  return (
    <View style={styles.container}>
      <Image style={{position: 'absolute',top: 0, left: 0}} source={require('../assets/gameTransitionScreenBackground1.png')}/>
      <Image style={{position: 'absolute', bottom: 0, width: '100%', resizeMode: 'stretch'}} source={require('../assets/gameTransitionScreenBackground2.png')}/>

      <View style={styles.header}>
        <Text style={{fontFamily: 'Gilroy-ExtraBold', fontSize: 17, lineHeight: 22, color: 'white', textTransform: 'uppercase'}}>{cardset}</Text>
      </View>
      <Text style={{fontFamily: 'Gilroy-ExtraBold', fontSize: 24, lineHeight: 29, color: 'white', }}>{player['name']}</Text>
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
  header: {
    position: 'absolute',
    width: '80%',
    top: 72,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
