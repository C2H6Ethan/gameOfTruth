import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import {
  OnboardingScreen,
  HomeScreen,
  SettingsScreen,
  LanguageSettingsScreen,
  AddPlayersScreen,
  AdjustPlayersScreen,
  GameTransitionScreen,
  GameMainScreen,
  GameMenuScreen,
  GameYesScreen,
  GameNoScreen,
  GameFinishWinnerScreen
} from './src/screens'
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as InAppPurchases from 'expo-in-app-purchases';

const Stack = createStackNavigator()

let customFonts = {
  'Gilroy-ExtraBold': require('./src/assets/fonts/Gilroy-ExtraBold.ttf'),
};
export default class App extends Component {

  constructor (props){
    super(props);

    this.state = {
        fontsLoaded: false,
        hasBeenOnboarded: false
    };
  }

  componentDidMount = async() => {
    const items = Platform.select({
      ios: [
        'com.gameOfTruth.premium',
      ],
      // android: ['gas', 'premium', 'gold_yearly', 'gold_monthly'],
    });

    await InAppPurchases.connectAsync()

    // Get product details
    const { responseCode, results } = await getProductsAsync(items);
    if (responseCode === IAPResponseCode.OK) {
      this.setState({ items: results, history: history.results });
    }


    this.loadFonts();
    var hasBeenOnboarded = await AsyncStorage.getItem('hasBeenOnboarded')
    if (hasBeenOnboarded == 'true') {
      await this.setState({hasBeenOnboarded: true})
    }
  }


  loadFonts = async() => {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

 
  render(){
    const forFade = ({ current }) => ({
      cardStyle: {
        opacity: current.progress,
      },
    });

    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    }

    if (this.state.hasBeenOnboarded){
      return (
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              cardStyleInterpolator: forFade,
            }}
          >
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="SettingsScreen" component={SettingsScreen}/>
            <Stack.Screen name="LanguageSettingsScreen" component={LanguageSettingsScreen}/>
            <Stack.Screen name="AddPlayersScreen" component={AddPlayersScreen}/>
            <Stack.Screen name="AdjustPlayersScreen" component={AdjustPlayersScreen}/>
            <Stack.Screen name="GameTransitionScreen" component={GameTransitionScreen}/>
            <Stack.Screen name="GameMainScreen" component={GameMainScreen}/>
            <Stack.Screen name="GameMenuScreen" component={GameMenuScreen}/>
            <Stack.Screen name="GameYesScreen" component={GameYesScreen}/>
            <Stack.Screen name="GameNoScreen" component={GameNoScreen}/>
            <Stack.Screen name="GameFinishWinnerScreen" component={GameFinishWinnerScreen}/>
          </Stack.Navigator>
        </NavigationContainer>
      )
    }

    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            cardStyleInterpolator: forFade,
          }}
        >
          <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
          <Stack.Screen name="LanguageSettingsScreen" component={LanguageSettingsScreen}/>
          <Stack.Screen name="AddPlayersScreen" component={AddPlayersScreen}/>
          <Stack.Screen name="AdjustPlayersScreen" component={AdjustPlayersScreen}/>
          <Stack.Screen name="GameTransitionScreen" component={GameTransitionScreen}/>
          <Stack.Screen name="GameMainScreen" component={GameMainScreen}/>
          <Stack.Screen name="GameMenuScreen" component={GameMenuScreen}/>
          <Stack.Screen name="GameYesScreen" component={GameYesScreen}/>
          <Stack.Screen name="GameNoScreen" component={GameNoScreen}/>
          <Stack.Screen name="GameFinishWinnerScreen" component={GameFinishWinnerScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

