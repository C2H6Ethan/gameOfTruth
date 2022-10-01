import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from "react";
import { StyleSheet, Modal, Text, View, Image, SafeAreaView, TouchableOpacity, Animated } from 'react-native';
import Head from '../components/Head';
import CardsetSelectionCard from '../components/CardsetSelectionCard';
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function HomeScreen({ navigation }) {
  const [cardset, setCardset] = useState("classic");
  const [hasUpgraded, setHasUpgraded] = useState(false);

  useEffect(async () => {
    var temp = await AsyncStorage.getItem('hasUpgraded')
    if (temp == 'true'){setHasUpgraded(true)}
  }, []);

  const onCardsetClick = (type) => {
    setCardset(type)
  }

  return (
    <View style={styles.container}>
        <StatusBar style="auto" />
        {cardset == 'classic'? 
        <Head 
            onStartGameButtonPress={() => navigation.navigate('AddPlayersScreen', {cardset: cardset})}
            onSettingsButtonPress={() => navigation.navigate('SettingsScreen')}
            mainText="Classic" 
            subText="To get your party started." 
            background1={require('../assets/classicBackgroundBig.png')}
            background2={require('../assets/classicBackgroundBig2.png')}
            icon={require('../assets/classicIcon.png')}
            hasUpgraded={true}
        />
        : cardset == 'sex'?
        <Head
            onStartGameButtonPress={hasUpgraded? () => navigation.navigate('AddPlayersScreen', {cardset: cardset}) : () => navigation.navigate('PaywallScreen')}
            onSettingsButtonPress={() => navigation.navigate('SettingsScreen')}
            mainText="Sex" 
            subText="To break taboos." 
            background1={require('../assets/sexBackgroundBig.png')}
            background2={require('../assets/sexBackgroundBig2.png')}
            icon={require('../assets/sexIcon.png')}
            hasUpgraded={hasUpgraded}
        />
        : cardset == 'relationship'?
        <Head
            onStartGameButtonPress={hasUpgraded? () => navigation.navigate('AddPlayersScreen', {cardset: cardset}) : () => navigation.navigate('PaywallScreen')}
            onSettingsButtonPress={() => navigation.navigate('SettingsScreen')}
            mainText="Relationship" 
            subText="To fall in love." 
            background1={require('../assets/relationshipBackgroundBig.png')}
            icon={require('../assets/relationshipIcon.png')}
            hasUpgraded={hasUpgraded}
        /> 
        : cardset == 'dating'?
        <Head
            onStartGameButtonPress={hasUpgraded? () => navigation.navigate('AddPlayersScreen', {cardset: cardset}) : () => navigation.navigate('PaywallScreen')}
            onSettingsButtonPress={() => navigation.navigate('SettingsScreen')}
            mainText="Dating" 
            subText="To save the date." 
            background1={require('../assets/datingBackgroundBig.png')}
            icon={require('../assets/datingIcon.png')}
            hasUpgraded={hasUpgraded}
        /> 
        : null
        }

        <View style={styles.screenInfo}>
            <Text style={styles.mainText}>Cardtypes</Text>
            <Text style={styles.subText}>Select your Gamemode</Text>
        </View>

        <Image style={styles.backgroundImage} source={require('../assets/background_bubble_home.png')} />
        <ScrollView bounces={true} showsHorizontalScrollIndicator={false} horizontal={true} style={styles.cardsetSelectionCardScrollView}>
            <View style={styles.cards}>
                <CardsetSelectionCard
                    mainText="Classic"
                    type="classic" 
                    subText="To get your party started."
                    icon={require('../assets/classicIconSmall.png')} 
                    style={{backgroundColor: '#903BFF'}} 
                    onPress={() => onCardsetClick("classic")}
                    currentCardSet={cardset}
                />
                <CardsetSelectionCard 
                    mainText="Sex"
                    type="sex"
                    subText="To break taboos." 
                    icon={require('../assets/sexIconSmall.png')}
                    style={{backgroundColor: '#FF3A68'}} 
                    onPress={() => onCardsetClick("sex")}
                    currentCardSet={cardset}
                />
                <CardsetSelectionCard 
                    mainText="Relationship"
                    type="relationship"
                    subText="To fall in love." 
                    icon={require('../assets/relationshipIconSmall.png')}
                    style={{backgroundColor: '#FF327C'}} 
                    onPress={() => onCardsetClick("relationship")}
                    currentCardSet={cardset}
                />
                <CardsetSelectionCard 
                    mainText="Dating"
                    type="dating"
                    subText="To save the date." 
                    icon={require('../assets/datingIconSmall.png')}
                    style={{backgroundColor: '#6F00FF'}} 
                    onPress={() => onCardsetClick("dating")}
                    currentCardSet={cardset}
                />
            </View>
            
        </ScrollView>
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
  classicBackgroundBig: {
    position: 'absolute',
    width: '100%',
    top: 0,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  classicBackgroundBig2: {
    position: 'absolute',
    top: 0,
    left: 0
  },
  headButton: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  questionmark: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  mainText: {
    fontFamily: 'Gilroy-ExtraBold',
    fontStyle: 'normal',
    fontSize: 26,
    lineHeight: 33,
    color: 'white',
  },
  subText: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontSize: 17,
    lineHeight: 22,
    color: 'white',
    marginBottom: 28
  },
  cardsetSelectionCardScrollView: {
    position: 'absolute',
    bottom: 128,
  },
  backgroundImage: {
    position: 'absolute',
    left: 0,
    bottom: 0,
  },
  screenInfo: {
    position: 'absolute',
    top: '55%',
    width: '80%',
  },
  cards: {
    flexDirection: 'row',
    marginHorizontal: 36,
  },    


  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    position: 'absolute',
    backgroundColor: "#4D4D4D",
    width: '100%',
    height: '57%',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    top: 0,

    alignItems: "center",
  },
  modalText: {
    textAlign: "center"
  },
  closeModalButton: {
    height: 46,
    width: 46,
    left: 0,
    marginBottom: 36
  },
  modalContent: {
    width: '80%',
    height: '100%',
    top: 69
  }
});
