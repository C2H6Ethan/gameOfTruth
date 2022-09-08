import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from "react";
import { StyleSheet, Modal, Text, View, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import CustomButton from '../components/CustomButton';

export default function GameFinishWinnerScreen({ route, navigation }) {
  const { winners } = route.params;



  return (
    <View style={styles.container}>
      <Image style={{position: 'absolute', bottom: 0, resizeMode: 'stretch', width: '100%'}} source={require('../assets/gameFinishWinnerScreenBackgroundBubble.png')}/>
      <Image style={{position: 'absolute', width: 142, height: 264, bottom: '30%'}} source={require('../assets/award.png')}/>

      <View style={styles.content}>
        <Text style={{fontFamily: 'Gilroy-Bold', fontSize: 24, lineHeight: 29, color: '#191919', textAlign: 'center', top: '20%'}}>Most answered</Text>

        
        <ScrollView bounces={true} showsHorizontalScrollIndicator={false} horizontal={true} style={styles.winnersScrollView} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center'}}>
          <View style={styles.names}>
          {winners.map((player, index) => {
            return (
                <View style={styles.name}>
                  <Text style={{fontFamily: 'Gilroy-SemiBold', fontSize: 14, lineHeight: 20, marginHorizontal: 12}}>{player['name']}</Text>
                </View>
            )
          })}
          </View>
        </ScrollView>

        
        <View style={styles.buttonContainer}>
          <CustomButton text="Restart" onPress={() => navigation.navigate('HomeScreen')} style={{marginBottom: 15}} inverted={true}/>
          <CustomButton text="Back to Home" onPress={() => navigation.navigate('HomeScreen')} inverted={true} />
        </View>
      </View>
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
  content: {
    width: '80%',
    height: '100%'
  },

  buttonContainer: {
    position: 'absolute',
    width: '100%',
    top: '75%',
  },
  winnersScrollView: {
    position: 'absolute',
    top: '25%',
    width: '100%',
  },
  names: {
    flexDirection: 'row',
  },
  name: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'black',
  },
});
