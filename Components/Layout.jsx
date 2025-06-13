// Layout.js
import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";

const imgFondo = require("../assets/FondoPantalla.jpg");
const logo = require("../assets/Logo.png");

export default function Layout({ children }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Image source={logo} style={styles.logo} />
          <Text style={styles.headerText}>
            C.A. <Text style={styles.boldText}>Banfield</Text>
          </Text>
        </View>
      </View>

      <ImageBackground source={imgFondo} style={styles.backgroundImage}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {children}
        </ScrollView>
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
  scrollContainer: {
    padding: 20,
    paddingBottom: 50,
  },
});
