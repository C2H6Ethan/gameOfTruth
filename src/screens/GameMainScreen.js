import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from "react";
import { StyleSheet, Modal, Text, View, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';
const questions = require('../questions.json');
import GameQuestionCard from '../components/GameQuestionCard';

export default function GameMainScreen({ route, navigation }) {
  const { cardset } = route.params;
  const { player } = route.params;
  const { players } = route.params;
  const { totalAddedPlayers } = route.params;
  const [cardText, setCardText] = useState("");

  useEffect(() => {
    getQuestion()
  }, []);

  const getQuestion = () => {
    var filteredQuestions = []
    for (var i = 0; i < questions.length; i++) {
      const question = questions[i];
      if(question['cardset'] == 'classic') {filteredQuestions.push(questions[i])}
    }

    var question = filteredQuestions[Math.floor(Math.random()*filteredQuestions.length)];
    setCardText(question['text'])
  }

  const onNoButtonPress = () => {
    console.warn("no")

    // show screen
  }

  const onYesButtonPress = () => {
    // add point to player
    for (var i = 0; i < players.length; i++) {
      var currentPlayer = players[i];
      if(currentPlayer['id'] == player['id']) {currentPlayer['points'] += 1; console.warn(currentPlayer)}
    }

    // show screen
    navigation.navigate('GameYesScreen', {cardset: cardset, player: player, players: players, totalAddedPlayers: totalAddedPlayers})
  }


  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('GameMenuScreen')} style={styles.settingsButton} activeOpacity={.7}>
          <Image style={{width: 32, height: 32}} source={require('../assets/settingsButton.png')} />
        </TouchableOpacity>
      </View>
      {cardset == 'classic'? 
        <GameQuestionCard name={player['name']} cardset={cardset} cardText={cardText} backgroundColor={'white'} textColor={'#111111'} icon={require('../assets/classicIconBlack.png')}/>
        : cardset == 'sex'?
        <GameQuestionCard name={player['name']} cardset={cardset} cardText={cardText} backgroundColor={'#FF3A68'} textColor={'white'} icon={require('../assets/sexIcon.png')}/> 
        : null
      }

      <View style={styles.choice}>
        <Text style={{fontFamily: 'Gilroy-Bold', fontSize: 16, lineHeight: 22, color: 'white'}}>Was the question answered?</Text>
        <View style={styles.choiceButtonsContainer}>
          <TouchableOpacity onPress={() => onNoButtonPress()} style={styles.choiceButton} activeOpacity={.7}>
            <Image style={{width: 24, height: 24}} source={require('../assets/no.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onYesButtonPress()} style={styles.choiceButton} activeOpacity={.7}>
            <Image style={{width: 24, height: 24}} source={require('../assets/checkedBlack.png')} />
          </TouchableOpacity>
        </View>
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
  header: {
    position: 'absolute',
    width: '80%',
    top: 72,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  settingsButton: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  choice: {
    marginTop: 45,
    height: 88,
    width: '80%'
  },
  choiceButtonsContainer:{
    position: 'absolute',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    bottom: 0
  },
  choiceButton: {
    backgroundColor: 'white',
    width: 144,
    height: 50,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
