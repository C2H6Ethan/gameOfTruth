import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from "react";
import { StyleSheet, Modal, Text, View, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';

export default function GameYesScreen({ route, navigation }) {
  const { cardset } = route.params;
  const { player } = route.params;
  const { players } = route.params;
  const { totalAddedPlayers } = route.params;

  useEffect(() => {
    // Start counting when the page is loaded
    const timeoutHandle = setTimeout(()=>{
      // Add your logic for the transition
      navigation.navigate('GameTransitionScreen', {cardset: cardset, player: player, players: players, totalAddedPlayers: totalAddedPlayers})
    }, 1250);
  }, []);


  return (
    <View style={styles.container}>
      <Image style={{width: 144, height: 144}} source={require('../assets/checkedBig.png')}/>
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
