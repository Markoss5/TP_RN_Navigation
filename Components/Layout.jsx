import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  Image,

} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
// import Card from "./Components/Card";

const imgFondo = require("../assets/FondoPantalla.jpg");
const logo = require("../assets/Logo.png");

export default function Layout() {
  const [fontsLoaded] = useFonts({
    "Gotham-Book": require("../assets/Gotham-Book.ttf"),
  });

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Image source={logo} style={styles.logo} />
          <Text style={styles.headerText}>
            C.A. <Text style={styles.boldText}>Banfield</Text>
          </Text>
        </View>
      </View>

      <ImageBackground
        source={imgFondo}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        {/* <Card style={styles.card}>

        </Card> */}
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  header: {
    backgroundColor: "#047832",
    height: 70,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  headerContent: {
    flexDirection: "row",
    alignItems: "center",
  },

  logo: {
    width: 45,
    height: 45,
    marginTop: "4.2%",
  },

  headerText: {
    fontFamily: "Gotham-Book",
    fontSize: 22,
    color: "#fff",
    marginTop: "4.2%",
  },

  boldText: {
    fontWeight: "bold",
  },

  backgroundImage: {
    flex: 1,
  },

  card: {
    alignItems: 'center',  
    justifyContent: 'center',  
    flex: 1,
    paddingTop: '25%',
  }
});