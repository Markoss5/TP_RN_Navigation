import * as React from "react";
import {
  Button,
  TextInput,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Ionicons } from "@expo/vector-icons";
import Layout from "./Components/Layout";
import Card from "./Components/Card";
import CardNoticias from "./Components/CardNoticias";
//
// Screens del Primer Stack
//
function ScreenA1() {
  const navigation = useNavigation();
  return (
    <View /*style={styles.homeScreen}*/>
      <Layout/>
      <Card/>
      <Text style={styles.description}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("ScreenA2")}
        >
          <Text style={styles.buttonText}>Inciar Sesion</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
}

function ScreenA2() {
  const navigation = useNavigation();
  return (
    <View style={styles.homeScreen}>
      <Layout></Layout>
      <Text style={styles.text}>HOME - ALGO</Text>
      <Text style={styles.description}>
        Primer Stack - Segunda Screen
        {"\n\n"}
        *Boton para navegar a ScreenA1
        {"\n"}
        navigation.navigate('ScreenA1')
        {"\n"}
      </Text>
      <Button
        title="Ir A ScreenA1"
        onPress={() => navigation.navigate("ScreenA1")}
      />
    </View>
  );
}

//
// Screens del Segundo Stack
//
function ScreenB1() {
  const navigation = useNavigation();
  return (
    <View style={styles.searchScreen}>
      <Layout></Layout>
      <Button
        title="ScreenB2 itemId: 1"
        onPress={() => navigation.navigate("ScreenB2", { itemId: 1 })}
      />
      <Button
        title="ScreenB2 itemId: 2"
        onPress={() => navigation.navigate("ScreenB2", { itemId: 2 })}
      />
      <TouchableOpacity onPress={() => alert("Presionaste en el Icono!")}>
        <Ionicons name="search" size={50} color="white" />
      </TouchableOpacity>
    </View>
  );
}

function ScreenB2({ route }) {
  const { itemId } = route.params;
  const navigation = useNavigation();
  return (
    <View style={styles.searchScreen}>
      <Text style={styles.text}>BUSCADOR - ITEM</Text>
      <Text style={styles.text}>Parametro recibido {itemId}</Text>
      <Text style={styles.description}>
        Segundo Stack - Segunda Screen
        {"\n\n"}* No hay boton para navegar (ver la barra):
        {"\n"}
      </Text>
      {/* <Button title="BUSCADOR" onPress={() => navigation.navigate('ScreenB1')} /> */}
    </View>
  );
}

//
// Screens del Tercer Stack
//
function ScreenC1() {
  const navigation = useNavigation();
  return (
    <View style={styles.perfilScreen}>
      <Layout />

      {/* Imagen del perfil */}
      <Image
        source={{
          uri: "https://t3.ftcdn.net/jpg/08/05/28/22/360_F_805282248_LHUxw7t2pnQ7x8lFEsS2IZgK8IGFXePS.jpg",
        }}
        style={styles.ProfileImage}
      />

      <Button
        title="IR A ScreenC2"
        onPress={() => navigation.navigate("ScreenC2")}
      />
    </View>
  );
}

function ScreenC2() {
  const navigation = useNavigation();
  return (
    <View style={styles.perfilScreen}>
      <Text style={styles.text}>PERFIL - EDICION</Text>

      <Text style={styles.label}>Name</Text>
      <TextInput style={styles.input} placeholder="Enter your name" />
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        keyboardType="email-address"
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        secureTextEntry
      />

      <Button
        title="IR A ScreenC1"
        onPress={() => navigation.navigate("ScreenC1")}
      />
    </View>
  );
}

function ScreenD1() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Layout>
        <CardNoticias />
      </Layout>
    </View>
  );
}

function ScreenD2() {
  const navigation = useNavigation();
  return (
    <View style={styles.perfilScreen} contentContainerStyle={{ marginTop: 40 }}>
      <Text
        style={{
          color: "black",
          fontSize: 24,
          fontWeight: "bold",
          marginBottom: 10,
        }}
      >
        ¡Bombazo en el mercado! Gerónimo Rivera vendido en 15 millones de
        dólares
      </Text>
      <Text style={{ color: "black", fontSize: 16, marginBottom: 20 }}>
        Buenos Aires, 13 de junio de 2025 – En una operación que sacudió el
        mercado de pases, el joven delantero argentino Gerónimo Rivera fue
        transferido al Borussia Dortmund por una suma récord de 15 millones de
        dólares.
      </Text>
      <Text style={{ color: "black", fontSize: 16, marginBottom: 20 }}>
        Rivera, de apenas 19 años, venía siendo figura en el fútbol local tras
        un torneo brillante con Club Atlético Banfield, donde anotó 12 goles y
        dio 8 asistencias en la última temporada.
      </Text>

      <Image
        source={{
          uri: "https://balonlatino.net/app/uploads/2023/10/Geronimo-Rivera-Jugo-lesionado-anoto-un-golazo-y-tumbo-a.jpg",
        }}
        style={styles.cardImage}
      />

      <Text style={{ color: "black", fontSize: 16, marginBottom: 20 }}>
        El contrato firmado tendrá una duración de 5 años, y se espera que
        Rivera se incorpore a la pretemporada del Borussia el próximo 1º de
        julio. Banfield se queda con un 10% de una futura venta, lo cual
        representa una jugada inteligente de la dirigencia del club del sur.
      </Text>
      <Text style={{ color: "black", fontSize: 16, marginBottom: 40 }}>
        Con esta venta, Gerónimo Rivera se convierte en la transferencia más
        cara en la historia de Banfield, superando incluso la salida de James
        Rodríguez en su momento.
      </Text>

      <Button
        title="Volver Atrás"
        onPress={() => navigation.navigate("ScreenD1")}
      />
    </View>
  );
}

//
// Creación de los stacks
//
const StackA = createNativeStackNavigator();
const StackB = createNativeStackNavigator();
const StackC = createNativeStackNavigator();
const StackD = createNativeStackNavigator();
function StackANavigator() {
  return (
    <StackA.Navigator>
      <StackA.Screen
        name="ScreenA1"
        component={ScreenA1}
        options={{ headerShown: false }}
      />
      <StackA.Screen name="ScreenA2" component={ScreenA2} />
    </StackA.Navigator>
  );
}

function StackBNavigator() {
  return (
    <StackB.Navigator screenOptions={{ headerShown: false }}>
      <StackB.Screen name="ScreenB1" component={ScreenB1} />
      <StackB.Screen name="ScreenB2" component={ScreenB2} />
    </StackB.Navigator>
  );
}

function StackCNavigator() {
  return (
    <StackC.Navigator>
      <StackC.Screen
        name="ScreenC1"
        component={ScreenC1}
        options={{
          //headerShown: Muestra u oculta el encabezado de la pantalla.
          headerShown: false,
        }}
      />

      <StackC.Screen
        name="ScreenC2"
        component={ScreenC2}
        options={{
          //headerShown: Muestra u oculta el encabezado de la pantalla.
          headerShown: false,
        }}
      />
    </StackC.Navigator>
  );
}

function StackDNavigator() {
  return (
    <StackD.Navigator screenOptions={{ headerShown: false }}>
      <StackD.Screen name="ScreenD1" component={ScreenD1} />

      <StackD.Screen name="ScreenD2" component={ScreenD2} />
    </StackD.Navigator>
  );
}

//
// Creación del BottomTabNavigator
//
const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#0b6623", // Fondo verde Banfield para la barra de tabs
        },
        tabBarActiveTintColor: "white", // Íconos de las pestañas activas en blanco
        tabBarInactiveTintColor: "white", // Íconos de las pestañas inactivas también en blanco
      }}
    >
      <Tab.Screen
        name="Home"
        component={StackANavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={24} color={color} /> // Los iconos serán blancos
          ),
          headerShown: false, // Eliminar la barra superior
        }}
      />
      <Tab.Screen
        name="Buscador"
        component={StackBNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="search" size={24} color={color} /> // Los iconos serán blancos
          ),
          headerShown: false, // Eliminar la barra superior
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={StackCNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" size={24} color={color} /> // Los iconos serán blancos
          ),
          headerShown: false, // Eliminar la barra superior
        }}
      />
      <Tab.Screen
        name="Noticias"
        component={StackDNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="newspaper" size={24} color="white" /> // Los iconos serán blancos
          ),
          headerShown: false, // Eliminar la barra superior
        }}
      />
    </Tab.Navigator>
  );
}

//
// Envolviendo la aplicación en el NavigationContainer
//
export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

container: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "transparent", // ¡clave!
},
 // Fondo negro para contrastar el texto blanco
  text: {
    color: "white",
    fontSize: 20,
  },
  description: {
    color: "white",
    fontSize: 16,
  },
  button: {
    marginTop: 20,
  },

  homeScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0b6623",
  },

  searchScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0b6623",
  },

  label: {
    fontSize: 16,
    marginBottom: 5,
    color: "s",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: "90%",
    color: "white",
  },

  button: {
    width: "80%", // Esto sigue centrado
    height: 55,
    backgroundColor: "#047832",
    borderRadius: 50,
    justifyContent: "center", // Asegura que el contenido esté centrado verticalmente
    alignItems: "center", // Centra el contenido horizontalmente
    shadowColor: "#4CAF50",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.4,
    shadowRadius: 15,
    elevation: 12,
    display: "flex", // Esto asegura que se use el modelo Flexbox
    marginLeft: "auto", // Centra el contenedor horizontalmente
    marginRight: "auto", // Centra el contenedor horizontalmente
  },

  buttonText: {
    color: "#fff",
    fontSize: 19,
    fontWeight: "bold",
  },

  perfilScreen: {
flex: 1, // Hace que el contenedor ocupe todo el espacio disponible
    justifyContent: "center", // Centra los elementos verticalmente
    alignItems: "center", // Centra los elementos horizontalmente
    backgroundColor: "white",
  },
  cardImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },

  ProfileImage: {
    width: 150, // Establece un tamaño adecuado para la imagen
    height: 150,
    borderRadius: 75, // Esto le da forma circular
    marginBottom: 20, // Espacio debajo de la imagen
    resizeMode: "cover", // Asegura que la imagen se ajuste correctamente
alignItems: 'center',
marginLeft: "30%",
  },

});
