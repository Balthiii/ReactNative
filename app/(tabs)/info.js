import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Image } from "react-native";
import logo from '../../assets/logo.png';
import banniere from '../../assets/presentation.jpg';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
    <Image source={logo} style={styles.logo} />
    <Text style={styles.title}>735 MILLIONS DE PERSONNES SOUFFRENT DE LA FAIM DANS LE MONDE¹. C’EST INACCEPTABLE.</Text>
    <Text style={styles.description}>
    ACTION CONTRE LA FAIM SE BAT CONTRE CETTE INJUSTICE DEPUIS 40 ANS. ET LE MONDE A ENCORE BESOIN DE NOTRE DÉTERMINATION. 
    </Text>
    <Image source={banniere} style={styles.banniere} />
    <Text style={styles.title}>UNE ASSOCIATION HUMANITAIRE FRANÇAISE</Text>
    <Text style={styles.description}>
    Créée en 1979, notre association loi 1901 (statuts, règlement intérieur) est une organisation non-gouvernementale 
    de solidarité internationale (ONG) – Action contre la Faim – lutte contre la faim dans le monde. 
    Les conflits, les dérèglements climatiques, la pauvreté, les inégalités d’accès à l’eau, aux soins, 
    sont autant de causes de la malnutrition. Notre mission est de sauver des vies en éliminant la faim par la prévention, 
    la détection et le traitement de la sous-nutrition, en particulier pendant et après les situations d’urgence liées aux 
    conflits et aux catastrophes naturelles.
</Text>
  </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
      padding: 20,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    },
    title: {
      fontSize: 26,
      fontWeight: 'bold',
      marginBottom: 20,
      color: '#4cbd35',
      textAlign: 'center',
      fontStyle: 'bold',
    },
    logo: {
        width: 175,
        height: 110,
        marginBottom: 20,
      },
    banniere: {
      width: 350,
      height: 200,
      marginBottom: 20,
    },
    description: {
      fontSize: 18,
      textAlign: 'center',
        color: '#747474',
        marginBottom: 15,
        fontStyle : 'bolder',
    },
  });