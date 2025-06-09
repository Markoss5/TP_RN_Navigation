import React from 'react';
import { View, Text, StyleSheet, Image, Animated, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

// Noticias
const noticias = [
  {
    title: "Histórica venta de Gerónimo Rivera de 15 millones al Barcelona",
    description: "El joven futbolista de Banfield fue vendido al Barcelona por una cifra histórica para el club.",
    image: 'https://link-a-imagen-geronimo.jpg',
  },
  {
    title: "Asalariaron a los empleados del club luego de 3 meses sin pagos",
    description: "Después de una larga espera, finalmente se saldaron los sueldos atrasados de los empleados del club.",
    image: 'https://link-a-imagen-sueldo.jpg',
  },
  {
    title: "Renunciaron Luchetti y Andujar como managers del club",
    description: "En medio de la crisis, los históricos jugadores dejaron sus puestos como managers en el club.",
    image: 'https://link-a-imagen-luchetti-andujar.jpg',
  },
  {
    title: "Nicolas Tagliafico y James Rodriguez de Visita en el club ante la grave situación económica",
    description: "Ambos jugadores realizaron una visita solidaria para mostrar su apoyo al club en estos tiempos difíciles.",
    image: 'https://link-a-imagen-tagliafico-rodriguez.jpg',
  }
];

const CardNoticias = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {noticias.map((noticia, index) => (
        <Animated.View style={[styles.card, { opacity: new Animated.Value(0) }]} key={index}>
          <TouchableOpacity
            onPress={() => navigation.navigate('DetalleNoticia', { noticia })}
          >
            <Image source={{ uri: noticia.image }} style={styles.cardImage} />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{noticia.title}</Text>
              <Text style={styles.cardDescription}>{noticia.description}</Text>
            </View>
            <Ionicons name="ios-arrow-forward" size={24} color="#FFF" style={styles.icon} />
          </TouchableOpacity>
        </Animated.View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  card: {
    backgroundColor: '#0b6623',
    marginBottom: 20,
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 10, // Sombra en Android
    shadowColor: '#000', // Sombra en iOS
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    transform: [{ translateY: new Animated.Value(0) }], // Efecto de animación
  },
  cardImage: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
  },
  cardContent: {
    padding: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  cardTitle: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  cardDescription: {
    fontSize: 14,
    color: 'white',
    marginTop: 5,
  },
  icon: {
    position: 'absolute',
    right: 15,
    bottom: 15,
  },
});

export default CardNoticias;
