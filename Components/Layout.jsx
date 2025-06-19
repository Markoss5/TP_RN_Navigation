// Layout.jsx
import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  Image,
  ScrollView,
  Platform,
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

      <ImageBackground source={imgFondo} style={styles.backgroundImage} resizeMode="cover">
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.contentWrapper}>
            {children}
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#047832',
  },
  header: {
    backgroundColor: "#047832",
    height: 70,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? 20 : 0,
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  logo: {
    width: 40,
    height: 40,
  },
  headerText: {
    fontSize: 22,
    color: "#fff",
  },
  boldText: {
    fontWeight: "bold",
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 100,
  },
  contentWrapper: {
    paddingHorizontal: 20,
    paddingTop: 30,
  },
});
