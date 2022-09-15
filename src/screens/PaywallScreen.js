import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from "react";
import { StyleSheet, Modal, Text, View, Image, SafeAreaView, TouchableOpacity, Animated } from 'react-native';
import CustomButton from '../components/CustomButton';
import Constants from 'expo-constants';


export default function PaywallScreen({ navigation }) {
  const [price, setPrice] = useState('$6');

  useEffect(() => {
    getIAPDetails()
  }, []);

  const getIAPDetails = async() => {
    if (Constants.appOwnership != "expo"){
      const InAppPurchases = await import("expo-in-app-purchases")
  
      await InAppPurchases.connectAsync();
  
      var premium = await InAppPurchases.getProductsAsync(['com.gameOfTruth.premium'])
      setPrice(premium.results[0]['price'])

      await InAppPurchases.disconnectAsync();
    }
  }

  const purchasePremium = async() => {
    if (Constants.appOwnership != "expo"){
      const InAppPurchases = await import("expo-in-app-purchases")

      await InAppPurchases.connectAsync();

      await InAppPurchases.getProductsAsync(['com.gameOfTruth.premium'])

      InAppPurchases.purchaseItemAsync('com.gameOfTruth.premium')

      await InAppPurchases.disconnectAsync();
    }
  }

  return (
    <View style={styles.container}>
      <Image style={{position: 'absolute', width: '100%', height: '100%'}} source={require('../assets/paywallBackground.png')}/>
      <View style={styles.content}>
        <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={.7}>
          <Image style={styles.closeButton} source={require('../assets/closeButton.png')} /> 
        </TouchableOpacity>
        <CustomButton onPress={() => purchasePremium()} text={`${price} Upgrade to Premium`}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,  
    backgroundColor: '#6D6AFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeButton: {
    height: 46,
    width: 46,
    marginTop: 60,
    marginBottom: 58
  },
  content: {
    width: '80%',
    height: '100%'
  },
});
