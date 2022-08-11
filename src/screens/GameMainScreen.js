import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from "react";
import { StyleSheet, Modal, Text, View, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';

export default function GameMainScreen({ route, navigation }) {
  const { cardset } = route.params;
  const { name } = route.params;
  const { players } = route.params;


  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('GameMenuScreen')} style={styles.settingsButton} activeOpacity={.7}>
          <Image style={{width: 32, height: 32}} source={require('../assets/settingsButton.png')} />
        </TouchableOpacity>
      </View>
      <Text style={{fontFamily: 'Gilroy-Bold', fontSize: 24, lineHeight: 29, color: 'white', }}>Game Mainscreen</Text>
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
});
