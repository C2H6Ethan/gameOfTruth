import React, { Component } from "react";
import { Platform, View, Image, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  OnboardingStartScreen,
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
  GameFinishWinnerScreen,
  PaywallScreen,
  PremiumThankYou,
} from "./src/screens";
import * as Font from "expo-font";
import AsyncStorage from "@react-native-async-storage/async-storage";
import "expo-dev-client";
import {
  AdEventType,
  InterstitialAd,
  TestIds,
} from "react-native-google-mobile-ads";
import { MyContext } from "./src/context";
import { getLocales } from "expo-localization";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync().catch((error) => {
  console.log(error);
});

const Stack = createStackNavigator();
let customFonts = {
  "Gilroy-ExtraBold": require("./src/assets/fonts/Gilroy-ExtraBold.ttf"),
  Poppins: require("./src/assets/fonts/Poppins-Regular.ttf"),
  "Poppins-SemiBold": require("./src/assets/fonts/Poppins-SemiBold.ttf"),
};

const adUnitIds = {
  android: "ca-app-pub-9310152642296392/1921443681",
  ios: "ca-app-pub-9310152642296392/9817079723",
};

const interstitialId = adUnitIds[Platform.OS];

const interstitial = InterstitialAd.createForAdRequest(interstitialId, {
  requestNonPersonalizedAdsOnly: true,
});
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fontsLoaded: false,
      hasBeenOnboarded: false,
      interstitialLoaded: false,
    };
  }

  // IOS interstitial: ca-app-pub-9310152642296392/9817079723
  // Android interstitial: ca-app-pub-9310152642296392/1921443681

  loadInterstital = async () => {
    const unsubscribeLoaded = interstitial.addAdEventListener(
      AdEventType.LOADED,
      async () => {
        await this.setState({ interstitialLoaded: true });
      }
    );

    const unsubscribeClosed = interstitial.addAdEventListener(
      AdEventType.CLOSED,
      async () => {
        await this.setState({ interstitialLoaded: false });
        interstitial.load();
      }
    );

    interstitial.load();

    return () => {
      unsubscribeClosed();
      unsubscribeLoaded();
    };
  };

  componentDidMount = async () => {
    const unsubscribeInterstitalEvents = this.loadInterstital();

    this.loadFonts();
    var hasBeenOnboarded = await AsyncStorage.getItem("hasBeenOnboarded");
    if (hasBeenOnboarded == "true") {
      await this.setState({ hasBeenOnboarded: true });
    }

    //set device language if language setting hasn't been changed before
    var language = await AsyncStorage.getItem("language");
    if (!language) {
      const locales = getLocales();
      const languageCode = locales[0].languageCode;
      await AsyncStorage.setItem("language", languageCode);
    }
    return unsubscribeInterstitalEvents;
  };

  loadFonts = async () => {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  };

  render() {
    const forFade = ({ current }) => ({
      cardStyle: {
        opacity: current.progress,
      },
    });

    if (!this.state.fontsLoaded) {
      return null;
    }

    if (this.state.hasBeenOnboarded) {
      return (
        <MyContext.Provider value={{ interstitial: interstitial }}>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
                cardStyleInterpolator: forFade,
              }}
            >
              <Stack.Screen name="HomeScreen" component={HomeScreen} />
              <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
              <Stack.Screen
                name="LanguageSettingsScreen"
                component={LanguageSettingsScreen}
              />
              <Stack.Screen
                name="AddPlayersScreen"
                component={AddPlayersScreen}
              />
              <Stack.Screen
                name="AdjustPlayersScreen"
                component={AdjustPlayersScreen}
              />
              <Stack.Screen
                name="GameTransitionScreen"
                component={GameTransitionScreen}
              />
              <Stack.Screen name="GameMainScreen" component={GameMainScreen} />
              <Stack.Screen name="GameMenuScreen" component={GameMenuScreen} />
              <Stack.Screen name="GameYesScreen" component={GameYesScreen} />
              <Stack.Screen name="GameNoScreen" component={GameNoScreen} />
              <Stack.Screen
                name="GameFinishWinnerScreen"
                component={GameFinishWinnerScreen}
              />
              <Stack.Screen name="PaywallScreen" component={PaywallScreen} />
              <Stack.Screen
                name="PremiumThankYou"
                component={PremiumThankYou}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </MyContext.Provider>
      );
    }

    return (
      <MyContext.Provider value={{ interstitial: interstitial }}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              cardStyleInterpolator: forFade,
            }}
          >
            <Stack.Screen
              name="OnboardingStartScreen"
              component={OnboardingStartScreen}
            />
            <Stack.Screen
              name="OnboardingScreen"
              component={OnboardingScreen}
            />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
            <Stack.Screen
              name="LanguageSettingsScreen"
              component={LanguageSettingsScreen}
            />
            <Stack.Screen
              name="AddPlayersScreen"
              component={AddPlayersScreen}
            />
            <Stack.Screen
              name="AdjustPlayersScreen"
              component={AdjustPlayersScreen}
            />
            <Stack.Screen
              name="GameTransitionScreen"
              component={GameTransitionScreen}
            />
            <Stack.Screen name="GameMainScreen" component={GameMainScreen} />
            <Stack.Screen name="GameMenuScreen" component={GameMenuScreen} />
            <Stack.Screen name="GameYesScreen" component={GameYesScreen} />
            <Stack.Screen name="GameNoScreen" component={GameNoScreen} />
            <Stack.Screen
              name="GameFinishWinnerScreen"
              component={GameFinishWinnerScreen}
            />
            <Stack.Screen name="PaywallScreen" component={PaywallScreen} />
            <Stack.Screen name="PremiumThankYou" component={PremiumThankYou} />
          </Stack.Navigator>
        </NavigationContainer>
      </MyContext.Provider>
    );
  }
}
