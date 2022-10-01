import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from "react";
import { StyleSheet, Modal, Text, View, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';
const questions = require('../questions.json');
import GameQuestionCard from '../components/GameQuestionCard';

export default function GameMainScreen({ route, navigation }) {
  const { cardset } = route.params;
  const { player = {name: ''} } = route.params;
  const { players } = route.params;
  const { totalAddedPlayers } = route.params;
  const { round } = route.params;
  const { question } = route.params;
  const [cardText, setCardText] = useState("");

  useEffect(() => {
    if (question) {
      setCardText(question)
    }
    else {
      getQuestion()
    }
  }, []);

  const getQuestion = () => {
    var filteredQuestions = []
    for (var i = 0; i < questions.length; i++) {
      const question = questions[i];
      if(question['cardset'].includes(cardset)) {filteredQuestions.push(questions[i])}
    }

    var question = filteredQuestions[Math.floor(Math.random()*filteredQuestions.length)];
    setCardText(question['text'])
  }

  const onNoButtonPress = () => {
    // pick new player
    var newPlayer = getNewPlayer()

    // show screen if game hasn't finished yet
    if (newPlayer != null){
      navigation.navigate('GameNoScreen', {cardset: cardset, player: newPlayer, players: players, totalAddedPlayers: totalAddedPlayers, round: round + 1})
    }
    else {
      // all players have played 3 times
      var mostPoints = players.reduce((acc, player) => acc = acc > player.points ? acc : player.points, 0);
      var winners = players.filter(function(player) { return player.points == mostPoints; });
      navigation.navigate('GameNoScreen', {cardset: cardset, players: players, winners: winners, isGameFinished: true})
    }
  }

  const onYesButtonPress = () => {
    // add point to player
    for (var i = 0; i < players.length; i++) {
      var currentPlayer = players[i];
      if(currentPlayer['id'] == player['id']) {currentPlayer['points'] += 1;}
    }
    // pick new player
    var newPlayer = getNewPlayer()

    // show screen if game hasn't finished yet
    if (newPlayer != null){
      navigation.navigate('GameYesScreen', {cardset: cardset, player: newPlayer, players: players, totalAddedPlayers: totalAddedPlayers, round: round + 1})
    }
    else {
      // all players have played 3 times
      var mostPoints = players.reduce((acc, player) => acc = acc > player.points ? acc : player.points, 0);
      var winners = players.filter(function(player) { return player.points == mostPoints; });
      navigation.navigate('GameYesScreen', {cardset: cardset, players: players, winners: winners, isGameFinished: true})
    }
    
  }

  const getNewPlayer = () => {
    var shuffledPlayers = shuffle(players)
    // find player that hasn't played maximum amount of times

    for (var i = 0; i < shuffledPlayers.length; i++) {
      const player = shuffledPlayers[i];
      if(player['timesPlayed'] < 3){
        //

        player['timesPlayed'] += 1

        // check if on last round
        var maxRounds = players.length * 3
        if (round == maxRounds){break}

        return(player)
      }
    }
    // navigation.navigate('GameFinishWinnerScreen', {winners: winners, cardset: cardset, players: players})
    return null
  }

  const shuffle = (cleanArray) => {
    var array = cleanArray.slice(0)
    // makes it not possible for a player to play twice in a row
    // it is possible though for a player to play twice incase another player was added later in the game
    var otherValidPlayers = cleanArray.slice(0)
    for (let i = otherValidPlayers.length - 1; i > -1; i--) {
      if (otherValidPlayers[i].id == player['id'] || otherValidPlayers[i].timesPlayed == 3) {
        otherValidPlayers.splice(i, 1);
      }
    }

    if(otherValidPlayers.length > 0) {
      let i = otherValidPlayers.length - 1;
      for (; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = otherValidPlayers[i];
        otherValidPlayers[i] = otherValidPlayers[j];
        otherValidPlayers[j] = temp;
      }
      return otherValidPlayers
    }

    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };


  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('GameMenuScreen', {cardset: cardset, question: cardText, player: player, round: round, players: players})} style={styles.settingsButton} activeOpacity={.7}>
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
        <Text style={{fontFamily: 'Poppins', fontSize: 16, lineHeight: 22, color: 'white'}}>Was the question answered?</Text>
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
