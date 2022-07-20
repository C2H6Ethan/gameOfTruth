import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import Head from '../components/Head';
import CardsetSelectionCard from '../components/CardsetSelectionCard';
import { ScrollView } from 'react-native-gesture-handler';

export default function HomeScreen() {
    const [cardset, setCardset] = useState("classic");


    const onCardsetClick = (type) => {
        setCardset(type)
    }


  return (
    <View style={styles.container}>
        <StatusBar style="auto" />
        {cardset == 'classic'? 
        <Head 
            mainText="Classic Cardset" 
            subText="Free Cardset to get your party started." 
            background1={require('../assets/classicBackgroundBig.png')}
            background2={require('../assets/classicBackgroundBig2.png')}
            icon={require('../assets/classicIcon.png')}
        />
        : cardset == 'sex'?
        <Head 
            mainText="Sex" 
            subText="To make your party even hotter!" 
            background1={require('../assets/sexBackgroundBig.png')}
            background2={require('../assets/sexBackgroundBig2.png')}
            icon={require('../assets/sexIcon.png')}
        /> 
        : null
        }

        <View style={styles.screenInfo}>
            <Text style={styles.mainText}>Cardtypes</Text>
            <Text style={styles.subText}>Select your Gamemode</Text>
        </View>

        <Image style={styles.backgroundImage} source={require('../assets/background_bubble_home.png')} />
        <ScrollView bounces={true} showsHorizontalScrollIndicator={false} horizontal={true} style={styles.cardsetSelectionCardScrollView}>
            <CardsetSelectionCard
                mainText="Classic"
                type="classic" 
                subText="Free Cardset to get your party started."
                icon={require('../assets/classicIconSmall.png')} 
                style={{backgroundColor: '#903BFF'}} 
                onPress={() => onCardsetClick("classic")}
                currentCardSet={cardset}
            />
            <CardsetSelectionCard 
                mainText="Sex"
                type="sex"
                subText="To make your party even hotter!" 
                icon={require('../assets/sexIconSmall.png')}
                style={{backgroundColor: '#FF3A68'}} 
                onPress={() => onCardsetClick("sex")}
                currentCardSet={cardset}
            />
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
    fontFamily: 'Gilroy-Heavy',
    fontStyle: 'normal',
    fontSize: 26,
    lineHeight: 33,
    color: 'white',
  },
  subText: {
    fontFamily: 'Gilroy-Regular',
    fontStyle: 'normal',
    fontSize: 17,
    lineHeight: 22,
    color: 'white',
    marginBottom: 28
  },
  cardsetSelectionCardScrollView: {
    position: 'absolute',
    bottom: 128,
    width: '80%'
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
});
