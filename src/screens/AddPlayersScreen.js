import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from "react";
import { StyleSheet, Modal, Text, View, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import CustomButton from '../components/CustomButton';

export default function AddPlayersScreen({ route, navigation }) {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [players, setPlayers] = useState([])
  const [inputText, onInputTextChange] = useState("");
  const [dummyValue, setDummyValue] = useState(null)
  const [totalAddedPlayers, setTotalAddedPlayers] = useState(0)
  const { cardset } = route.params;

  const onNameEnter = (name) => {
    if(name == ''){return}
    onInputTextChange('')

    var newPlayers = players
    var player = {id: totalAddedPlayers, name: name, points: 0, timesPlayed: 0}
    newPlayers.push(player)
    setPlayers(newPlayers)

    // check if start game button should be disabled
    if(players.length >= 1){setIsButtonDisabled(false)}
    else {setIsButtonDisabled(true)}

    setTotalAddedPlayers(totalAddedPlayers + 1)
  }

  const removeName = (index) => {

    var newPlayers = players
    newPlayers.splice(index, 1)
    setPlayers(newPlayers)

    // check if start game button should be disabled
    if(players.length >= 1){setIsButtonDisabled(false)}
    else {setIsButtonDisabled(true)}

    //added this because component wasn't updating (forces component update)
    if (dummyValue == 69){setDummyValue(420)}
    else {setDummyValue(69)} 
  }
  
  const startGame = () => {
    var player = players[Math.floor(Math.random()*players.length)];

    player['timesPlayed'] = 1;

    navigation.navigate('GameTransitionScreen', {cardset: cardset, player: player, players: players, totalAddedPlayers: totalAddedPlayers, round: 1})
  }


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={.7}>
          <Image style={styles.closeButton} source={require('../assets/closeButton.png')} /> 
        </TouchableOpacity>
        <Text style={{fontFamily: 'Gilroy-ExtraBold', fontSize: 17, lineHeight: 22, color: 'white', textTransform: 'uppercase'}}>{cardset}</Text>
      </View>
      <View style={styles.content}>
        
        <Text style={{fontFamily: 'Gilroy-ExtraBold', fontSize: 30, lineHeight: 36, color: 'white', marginBottom: 16, width: '80%'}}>Who are u playing with?</Text>
        <Text style={{fontFamily: 'Gilroy-ExtraBold', fontSize: 17, lineHeight: 22, color: 'white', marginBottom: 56, width: '80%'}}>Remove or Add players down below.</Text>
        <Text style={{fontFamily: 'Gilroy-ExtraBold', fontSize: 14, lineHeight: 21, color: 'white', width: '80%'}}>Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={onInputTextChange}
          value={inputText}
          placeholder="Name"
          placeholderTextColor={"#9CA3AF"}
          onSubmitEditing={() => onNameEnter(inputText)}
        />
        <ScrollView bounces={true} showsHorizontalScrollIndicator={false} horizontal={true} style={styles.cardsetSelectionCardScrollView}>
          <View style={styles.names}>
          {players.map((player, index) => {
            return (
                <View style={styles.name}>
                  <Text style={{fontFamily: 'Gilroy-ExtraBold', fontSize: 14, lineHeight: 20, color: 'white', marginLeft: 12}}>{player['name']}</Text>
                  <TouchableOpacity onPress={() => removeName(index)} style={{height: 35, width: 35,  alignItems: 'center', justifyContent: 'center',}} activeOpacity={.7}>
                    <Image style={{height: 10.5, width: 10.5}} source={require('../assets/remove.png')}/>
                  </TouchableOpacity>
                </View>
            )
          })}
          </View>
        </ScrollView>


      </View>
      <View style={styles.buttonContainer}>
        <CustomButton disabled={isButtonDisabled}  text="Start game" onPress={() => startGame()} />
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
  content: {
    position: 'absolute',
    top: '30%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeButton: {
    height: 46,
    width: 46,
  },
  header: {
    position: 'absolute',
    width: '80%',
    top: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  buttonContainer: {
    position: 'absolute',
    width: '80%',
    top: '85%',
  },
  input:{
    height: 56,
    width: '80%',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#374151',
    borderRadius: 4,
    color: 'white',
    marginBottom: 30,
    paddingLeft: 16,
  },
  cardsetSelectionCardScrollView: {
    position: 'absolute',
    bottom: -24,
    width: '100%'
  },
  names: {
    flexDirection: 'row',
    marginHorizontal: 36,
  },
  name: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'white',
    height: 36
  },
});
