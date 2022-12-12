import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from "react";
import { StyleSheet, Modal, Text, View, Image, Dimensions } from 'react-native';
import Head from '../components/Head';
import CardsetSelectionCard from '../components/CardsetSelectionCard';
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
const translations = require('../translations.json');

const {height, width} = Dimensions.get("window");

export default function HomeScreen({ navigation }) {
  const [cardset, setCardset] = useState("classic");
  const [hasUpgraded, setHasUpgraded] = useState(false);
  const [language, setLanguage] = useState("en");

  useEffect(async () => {
    var temp = await AsyncStorage.getItem('hasUpgraded')
    if (temp == 'true'){setHasUpgraded(true)}
    
    var language = await AsyncStorage.getItem('language')
    if(language){setLanguage(language)}
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
            subText={translations[language]["To get your party started."]} 
            background1={require('../assets/classicBackgroundBig.png')}
            background2={require('../assets/classicBackgroundBig2.png')}
            icon={require('../assets/classicIcon.png')}
            hasUpgraded={true}
            language={language}
        />
        : cardset == 'sex'?
        <Head
            onStartGameButtonPress={hasUpgraded? () => navigation.navigate('AddPlayersScreen', {cardset: cardset}) : () => navigation.navigate('PaywallScreen')}
            onSettingsButtonPress={() => navigation.navigate('SettingsScreen')}
            mainText="Sex" 
            subText={translations[language]["To break taboos."]}
            background1={require('../assets/sexBackgroundBig.png')}
            background2={require('../assets/sexBackgroundBig2.png')}
            icon={require('../assets/sexIcon.png')}
            hasUpgraded={hasUpgraded}
            language={language}
        />
        : cardset == 'relationship'?
        <Head
            onStartGameButtonPress={hasUpgraded? () => navigation.navigate('AddPlayersScreen', {cardset: cardset}) : () => navigation.navigate('PaywallScreen')}
            onSettingsButtonPress={() => navigation.navigate('SettingsScreen')}
            mainText="Relationship" 
            subText={translations[language]["To fall in love."]} 
            background1={require('../assets/relationshipBackgroundBig.png')}
            icon={require('../assets/relationshipIcon.png')}
            hasUpgraded={hasUpgraded}
            language={language}
        /> 
        : cardset == 'dating'?
        <Head
            onStartGameButtonPress={hasUpgraded? () => navigation.navigate('AddPlayersScreen', {cardset: cardset}) : () => navigation.navigate('PaywallScreen')}
            onSettingsButtonPress={() => navigation.navigate('SettingsScreen')}
            mainText="Dating" 
            subText={translations[language]["To save the date."]} 
            background1={require('../assets/datingBackgroundBig.png')}
            icon={require('../assets/datingIcon.png')}
            hasUpgraded={hasUpgraded}
            language={language}
        /> 
        : null
        }

        <View style={styles.screenInfo}>
            <Text style={styles.mainText}>{translations[language]["Cardtypes"]}</Text>
            <Text style={styles.subText}>{translations[language]["Select your Gamemode"]}</Text>
        </View>

        <Image style={styles.backgroundImage} source={require('../assets/background_bubble_home.png')} />
        <ScrollView bounces={true} showsHorizontalScrollIndicator={false} horizontal={true} style={styles.cardsetSelectionCardScrollView}>
            <View style={styles.cards}>
                <CardsetSelectionCard
                    mainText="Classic"
                    type="classic" 
                    subText={translations[language]["To get your party started."]}
                    icon={require('../assets/classicIconSmall.png')} 
                    style={{backgroundColor: '#903BFF'}} 
                    onPress={() => onCardsetClick("classic")}
                    currentCardSet={cardset}
                />
                <CardsetSelectionCard 
                    mainText="Sex"
                    type="sex"
                    subText={translations[language]["To break taboos."]} 
                    icon={require('../assets/sexIconSmall.png')}
                    style={{backgroundColor: '#FF3A68'}} 
                    onPress={() => onCardsetClick("sex")}
                    currentCardSet={cardset}
                />
                <CardsetSelectionCard 
                    mainText="Relationship"
                    type="relationship"
                    subText={translations[language]["To fall in love."]}
                    icon={require('../assets/relationshipIconSmall.png')}
                    style={{backgroundColor: '#FF327C'}} 
                    onPress={() => onCardsetClick("relationship")}
                    currentCardSet={cardset}
                />
                <CardsetSelectionCard 
                    mainText="Dating"
                    type="dating"
                    subText={translations[language]["To save the date."]} 
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
    marginBottom: (128 / 812) * height
  },
  cardsetSelectionCardScrollView: {
    position: 'absolute',
    bottom: '15%',
  },
  backgroundImage: {
    position: 'absolute',
    left: 0,
    bottom: 0,
  },
  screenInfo: {
    position: 'absolute',
    top: '55%',
    width: width * 0.8,
  },
  cards: {
    flexDirection: 'row',
    marginHorizontal: width * 0.1,
  },    


  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalText: {
    textAlign: "center"
  },
});
