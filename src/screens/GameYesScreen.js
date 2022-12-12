import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from "react";
import { StyleSheet, Modal, Text, View, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';
const translations = require('../translations.json');

export default function GameYesScreen({ route, navigation }) {
  const { cardset } = route.params;
  const { player } = route.params;
  const { players } = route.params;
  const { round } = route.params;
  const { totalAddedPlayers } = route.params;
  const { isGameFinished } = route.params;
  const { winners } = route.params;
  const { usedQuestions } = route.params;
  const { language } = route.params;

  useEffect(() => {
    // Start counting when the page is loaded
    const timeoutHandle = setTimeout(()=>{
      // Add your logic for the transition
      if (isGameFinished) {
        navigation.reset({
          index: 0,
          routes: [{ name: 'GameFinishWinnerScreen', params:  {winners: winners, cardset: cardset, players: players, usedQuestions: usedQuestions}}],
        });
      }
      else {
        navigation.replace('GameTransitionScreen', {cardset: cardset, player: player, players: players, totalAddedPlayers: totalAddedPlayers, round: round, usedQuestions: usedQuestions})
      }
    }, 1250);
  }, []);


  return (
    <View style={styles.container}>
      <Image style={{width: 144, height: 144, marginBottom: 40}} source={require('../assets/checkedBig.png')}/>
      <Text style={{fontFamily: 'Gilroy-ExtraBold', fontSize: 31, lineHeight: 35, color: 'white'}}>{translations[language]["Well done!"]}</Text>
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
});
