
import {
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    Pressable,
    backgroundColor,
    secureTextEntry,
  } from "react-native";
  import React, { useState } from "react";
  import { Alert } from "react-native";
  
  export default function Card() {
    const [nombre, handleNombreChange] = React.useState("");
    const [contrasenia, handleContraseniaChange] = React.useState("");
  
    return (
      <View style={[styles.View, { backgroundColor }]}>
        <Text style={styles.titleText}>Iniciar Sesión</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese N° de socio"
          onChangeText={handleNombreChange}
          value={nombre}
        />
  
        <TextInput
          style={styles.input}
          placeholder="Ingrese Su Contraseña"
          onChangeText={handleContraseniaChange}
          secureTextEntry={true}
          value={contrasenia}
        />
          
         <TouchableOpacity>
            <Text style={styles.textoBlanco}>¿Olvidaste tu clave?</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.textoBlanco}>Crear cuenta</Text>
          </TouchableOpacity>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    View: {
      width: "85%",
      marginLeft: "7.5%",
      paddingTop: '40%',
      borderRadius: 10,
      padding: 20,
      alignItems: "center",
    },
    container: {
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center', 
      backgroundColor: 'transparent', 
    },
    card: {
      width: "85%",
      maxWidth: 400, 
      borderRadius: 20, 
      padding: 30, 
      alignItems: "center", 
      backgroundColor: "#fff",
      shadowColor: "#000", 
      shadowOffset: {
        width: 0,
        height: 6, 
      },
      shadowOpacity: 0.15, 
      shadowRadius: 12, 
      elevation: 8, 
    },
    logo: {
      width: 100,
      height: 100, 
      borderRadius: 50, 
      marginBottom: 25, 
      resizeMode: 'contain', 
      backgroundColor: '#f0f0f0', 
    },
    titleText: {
      fontSize: 30, 
      fontWeight: "bold", 
      color: "#ffffff", 
      marginBottom: 10, 
      fontFamily: "Gotham-Book",
    },
    subtitleText: {
      fontSize: 16,
      color: "#666",
      textAlign: "center", 
      marginBottom: 25,
      lineHeight: 22, 
    },
    input: {
      width: "100%", 
      height: 40, 
      borderColor: "#ddd", 
      borderWidth: 1, 
      borderRadius: 50, 
      paddingHorizontal: 15, 
      marginBottom: 15, 
      fontSize: 16, 
      backgroundColor: '#f9f9f9', 
    },

    buttonText: {
      color: "#fff", 
      fontSize: 19, 
      fontWeight: "bold", 
    },
  
    textoBlanco: {
      color: 'white',
      fontSize: 14,
      marginTop: 15,
    },
  });
  