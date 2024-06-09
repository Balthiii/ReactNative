import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Image } from "react-native";
import logo from '../../assets/logo.png';
import banniere from '../../assets/banniere.jpg';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
    <Image source={logo} style={styles.logo} />
    <Text style={styles.title}>Actions Contre la Faim</Text>
    <Text style={styles.description}>
      Actions Contre la Faim est une organisation humanitaire internationale qui lutte contre la faim dans le monde. 
      Nous intervenons de manière globale contre la faim et ses causes, de l'urgence à la réhabilitation.
    </Text>
    <Image source={banniere} style={styles.banniere} />
    <Text style={styles.title}>CHEZ ACTION CONTRE LA FAIM,NOUS SAUVONS DES VIES ET RÉDUISONS L’INSÉCURITÉ NUTRITIONNELLE.</Text>
    <Text style={styles.description}>
    Chaque personne doit pouvoir manger à sa faim, de manière suffisante, diversifiée et durable.
     Nous en sommes très loin. En 2022, c’est 28 millions de vies que nous soutenons en nous attaquant aux 
     conséquences et aux causes structurelles de la faim. Les guerres, la crise climatique et environnementale, 
     les inégalités socioéconomiques et de genre en sont les raisons principales. Avec et pour les communautés, 
     nous rassemblons, agissons, apportons des solutions. Car oui, les solutions existent, et chez Action contre 
     la Faim nous savons comment faire pour que la faim cesse d’être une fatalité.
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
      color: '#2e6dc0',
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
    },
  });