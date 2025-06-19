import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const noticias = [
  {
    title: "Histórica venta de Gerónimo Rivera de U$D 15 millones al Barcelona",
    description: "El joven futbolista de Banfield fue vendido al Barcelona por una cifra histórica para el club.",
    image: 'https://external-preview.redd.it/sporting-kc-rumor-sporting-kc-reportedly-interested-in-21-v0-hGbTPIyeIYb_iX5iFMgvEcFzDSA9PQGCi4vDeGGGykc.jpg?width=1080&crop=smart&auto=webp&s=7517445432091aad93c97799a6f3e23937c47e9d',
  },
  {
    title: "Asalariaron a los empleados del club luego de 3 meses sin pagos",
    description: "Después de una larga espera, finalmente se saldaron los sueldos atrasados de los empleados del club.",
    image: 'https://media.diariopopular.com.ar/p/7ae8fa3ca7246d97dbc8bfd7c0ca18fa/adjuntos/143/imagenes/008/194/0008194843/1140x0/smart/08mmmjpg.jpg',
  },
  {
    title: "Renunciaron Luchetti y Andujar como managers del club",
    description: "En medio de la crisis, los históricos jugadores dejaron sus puestos como managers en el club.",
    image: 'https://media.tycsports.com/files/2024/10/16/776781/mariano-andujar-manager-de-banfield_1440x810_wmk.webp?v=1',
  },
  {
    title: "Nicolas Tagliafico y James Rodriguez de Visita en el club ante la grave situación económica",
    description: "Ambos jugadores realizaron una visita solidaria para mostrar su apoyo al club en estos tiempos difíciles.",
    image: 'https://cdn.conmebol.com/wp-content/uploads/2017/02/ja_banfield.jpg',
  }
];

const CardNoticias = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {noticias.map((noticia, index) => (
        <View style={styles.card} key={index}>
          <TouchableOpacity onPress={() => navigation.navigate('ScreenD2', { itemId: 1 })}>
            <Image source={{ uri: noticia.image }} style={styles.cardImage} />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{noticia.title}</Text>
              <Text style={styles.cardDescription}>{noticia.description}</Text>
            </View>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  card: {
    backgroundColor: '#0b6623',
    marginBottom: 20,
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 6, // más suave
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 8,
  },
  cardImage: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
  },
  cardContent: {
    padding: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  cardTitle: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  cardDescription: {
    fontSize: 14,
    color: 'white',
    marginTop: 5,
  },
});


export default CardNoticias;
