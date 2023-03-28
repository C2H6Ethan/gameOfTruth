import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Modal,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Linking,
  Platform,
} from "react-native";
import CustomButton from "../components/CustomButton";
import Constants from "expo-constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ThemeProvider } from "@react-navigation/native";
const translations = require("../translations.json");

export default function PaywallScreen({ navigation }) {
  const [price, setPrice] = useState("");
  const [language, setLanguage] = useState("en");

  var iapID =
    Platform.OS == "ios"
      ? "com.gameOfTruth.premium"
      : "com.gameoftruth.premium";

  useEffect(async () => {
    getIAPDetails();
    var language = await AsyncStorage.getItem("language");
    if (language) {
      setLanguage(language);
    }
  }, []);

  const getIAPDetails = async () => {
    if (Constants.appOwnership != "expo") {
      const InAppPurchases = await import("expo-in-app-purchases");

      await InAppPurchases.connectAsync();

      var premium = await InAppPurchases.getProductsAsync([iapID]);
      setPrice(premium.results[0]["price"]);

      await InAppPurchases.disconnectAsync();
    }
  };

  const purchasePremium = async () => {
    if (Constants.appOwnership == "expo") return false;
    const InAppPurchases = await import("expo-in-app-purchases"),
      { IAPResponseCode } = await import("expo-in-app-purchases");

    try {
      await InAppPurchases.connectAsync();

      await InAppPurchases.getProductsAsync([iapID]);

      InAppPurchases.purchaseItemAsync(iapID);

      return await new Promise((resolve, reject) => {
        InAppPurchases.setPurchaseListener(async (result) => {
          switch (result.responseCode) {
            case IAPResponseCode.OK:
            case IAPResponseCode.DEFERRED:
              await onSuccess();
              await InAppPurchases.finishTransactionAsync(
                result.results[0],
                consumable
              );
              await InAppPurchases.disconnectAsync();
              return resolve(true);
            case IAPResponseCode.USER_CANCELED:
              await InAppPurchases.disconnectAsync();
              return resolve(false);
            case IAPResponseCode.ERROR:
              await InAppPurchases.disconnectAsync();
              return reject(new Error("IAP Error: " + result.errorCode));
          }
        });
      });
    } catch (e) {
      await InAppPurchases.disconnectAsync();
      throw e;
    }
  };

  const onSuccess = async () => {
    await AsyncStorage.setItem("hasUpgraded", "true");
    navigation.reset({
      index: 0,
      routes: [{ name: "PremiumThankYou" }],
    });
  };

  const restorePurchase = async () => {
    if (Constants.appOwnership == "expo") return false;
    const InAppPurchases = await import("expo-in-app-purchases");

    try {
      await InAppPurchases.connectAsync();

      var results = await InAppPurchases.getPurchaseHistoryAsync();
      results = results["results"];

      for (var i = 0; i < results.length; i++) {
        var result = results[i];
        if (result.productId == iapID && result.acknowledged) {
          onSuccess();
          await InAppPurchases.disconnectAsync();
          return true;
        }
      }
      await InAppPurchases.disconnectAsync();
    } catch (e) {
      await InAppPurchases.disconnectAsync();
      throw e;
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={{ position: "absolute", width: "100%", height: "100%" }}
        source={require("../assets/paywallBackground.png")}
      />
      <View style={styles.content}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.7}
        >
          <Image
            style={styles.closeButton}
            source={require("../assets/closeButton.png")}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontFamily: "Gilroy-ExtraBold",
            fontSize: 30,
            lineHeight: 36,
            color: "white",
          }}
        >
          {
            translations[language][
              "Support our work & get a better party experience."
            ]
          }
        </Text>

        <View style={styles.infoContainer}>
          <View style={styles.info}>
            <View style={styles.infoTitle}>
              <Image
                style={{ width: 36, height: 36, marginRight: 18 }}
                source={require("../assets/video-game-key.png")}
              />
              <Text
                style={{
                  fontFamily: "Gilroy-ExtraBold",
                  fontSize: 24,
                  lineHeight: 29,
                  color: "white",
                }}
              >
                {translations[language]["Access all packages!"]}
              </Text>
            </View>
            <Text
              style={{
                fontFamily: "Poppins",
                fontSize: 16,
                lineHeight: 21,
                color: "white",
                flexWrap: "wrap",
                marginLeft: 54,
              }}
            >
              {
                translations[language][
                  "Get Access to our exclusive party packs."
                ]
              }
            </Text>
          </View>
          <View style={styles.info}>
            <View style={styles.infoTitle}>
              <Image
                style={{ width: 36, height: 36, marginRight: 18 }}
                source={require("../assets/certified-ribbon-1.png")}
              />
              <Text
                style={{
                  fontFamily: "Gilroy-ExtraBold",
                  fontSize: 24,
                  lineHeight: 29,
                  color: "white",
                }}
              >
                {translations[language]["One time payment!"]}
              </Text>
            </View>
            <Text
              style={{
                fontFamily: "Poppins",
                fontSize: 16,
                lineHeight: 21,
                color: "white",
                flexWrap: "wrap",
                marginLeft: 54,
              }}
            >
              {
                translations[language][
                  "Fuck subscription plans. You’ll only pay once for all."
                ]
              }
            </Text>
          </View>
          <View style={styles.info}>
            <View style={styles.infoTitle}>
              <Image
                style={{ width: 36, height: 36, marginRight: 18 }}
                source={require("../assets/target-miss.png")}
              />
              <Text
                style={{
                  fontFamily: "Gilroy-ExtraBold",
                  fontSize: 24,
                  lineHeight: 29,
                  color: "white",
                }}
              >
                {translations[language]["No more ads!"]}
              </Text>
            </View>
            <Text
              style={{
                fontFamily: "Poppins",
                fontSize: 16,
                lineHeight: 21,
                color: "white",
                flexWrap: "wrap",
                marginLeft: 54,
              }}
            >
              {
                translations[language][
                  "As a thank you, we release you from the torments of advertising."
                ]
              }
            </Text>
          </View>
        </View>

        <View style={styles.footer}>
          <CustomButton
            style={{ marginBottom: 16, width: "100%" }}
            onPress={() => purchasePremium()}
            text={`${price} Upgrade`}
          />
          <TouchableOpacity
            onPress={() => restorePurchase()}
            activeOpacity={0.7}
          >
            <Text
              style={{
                fontFamily: "Poppins",
                fontSize: 17,
                lineHeight: 20,
                color: "white",
                marginBottom: 39,
              }}
            >
              {translations[language]["Restore previous purchases"]}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                "https://c2h6ethan.github.io/gameOfTruth.github.io/"
              )
            }
            activeOpacity={0.7}
          >
            <Text
              style={{
                fontFamily: "Poppins",
                fontSize: 12,
                lineHeight: 14,
                color: "white",
              }}
            >
              {translations[language]["Terms of use - Privacy policy"]}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6D6AFF",
    alignItems: "center",
    justifyContent: "center",
  },
  closeButton: {
    height: 46,
    width: 46,
    marginTop: 60,
    marginBottom: 20,
  },
  content: {
    width: "80%",
    height: "100%",
  },
  infoContainer: {
    position: "absolute",
    top: "33%",
    justifyContent: "center",
  },
  info: {
    marginBottom: 24,
  },
  infoTitle: {
    flexDirection: "row",
  },
  footer: {
    position: "absolute",
    top: "75%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
