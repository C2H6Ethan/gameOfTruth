import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import {
  OnboardingScreen
} from './src/screens'

const Stack = createStackNavigator()

export default class App extends Component {

  constructor (props){
    super(props);

    this.state = {
        
    };
  }

 
  render(){
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="OnboardingScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

