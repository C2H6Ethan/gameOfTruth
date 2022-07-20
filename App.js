import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import {
  OnboardingScreen,
  HomeScreen
} from './src/screens'
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

const Stack = createStackNavigator()

let customFonts = {
  'Gilroy-Heavy': require('./src/assets/fonts/Gilroy-Heavy.ttf'),
  'Gilroy-Regular': require('./src/assets/fonts/Gilroy-Regular.ttf'),
  'Gilroy-Bold': require('./src/assets/fonts/Gilroy-Bold.ttf'),
};
export default class App extends Component {

  constructor (props){
    super(props);

    this.state = {
        fontsLoaded: false
    };
  }

  componentDidMount() {
    this.loadFonts();
  }


  loadFonts = async() => {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }


 
  render(){
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    }

    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="OnboardingScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

