import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from "react";
import { StyleSheet, Modal, Text, View, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';

export default function GameFinishWinnerScreen({ route, navigation }) {
  // const { player } = route.params;



  return (
    <View style={styles.container}>
      <Image style={{position: 'absolute', bottom: 0, resizeMode: 'stretch', width: '100%'}} source={require('../assets/gameFinishWinnerScreenBackgroundBubble.png')}/>
      <Image style={{}} source={require('../assets/award.png')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  
    backgroundColor: '#F0940B',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
