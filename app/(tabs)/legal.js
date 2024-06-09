import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Image } from "react-native";
import logo from '../../assets/logo.png';


export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
    <Image source={logo} style={styles.logo} />
    <Text style={styles.title}>CE SITE EST ÉDITÉ PAR :</Text>
    <View style={styles.description}>
  <View>
    <Text style={styles.description}>Association Action contre la Faim</Text>
    <Text style={styles.description}>102 RUE DE PARIS</Text>
    <Text style={styles.description}>CS 10007</Text>
    <Text style={styles.description}>93558 MONTREUIL CEDEX</Text>
    <Text style={styles.description}>SIRET : 318 990 892 00065</Text>
    <Text style={styles.description}>Tél. : 01.70.84.70.84</Text>
    <Text style={styles.description}>Email : communication@actioncontrelafaim.org</Text>
    <Text style={styles.description}>Directeur de la publication: Pierre Micheletti</Text>
    <Text style={styles.description}>Prestataire d’hébergement du site est : PLANETWORK, 231 Rue Saint-Honoré, 75001 Paris, Tél : 0 891 02 44 24</Text>
  </View>
    </View>

    <Text style={styles.subtitle}>I. DONNÉES NOMINATIVES – DROIT D’ACCÈS ET DE RECTIFICATION</Text>
    <Text style={styles.description}>
    Les données personnelles que vous avez communiquées à Action Contre la Faim par l’intermédiaire du site internet www.actioncontrelafaim.org/ sont, sauf demande contraire de votre part, traitées et conservées par notre association.
Conformément à la réglementation française et européenne en vigueur, vous pouvez vous opposer à l’utilisation de vos données ou y accéder pour leur rectification, limitation ou effacement en adressant une demande écrite, accompagnée d’un titre d’identité, à : Action contre la Faim – A l’attention du DPO – 102 rue de Paris – 93100 MONTREUIL ou dpo@actioncontrelafaim.org
Pour toute précision sur la politique de protection des données personnelles d’Action contre la Faim, cliquez ici ou rendez-vous sur la page Données personnelles.
</Text>
<Text style={styles.subtitle}>II. CONDITIONS D’UTILISATION DU SITE</Text>
<Text style={styles.subtitle}>1. PROPRIÉTÉ INTELLECTUELLE</Text>
<Text style={styles.description}>1.1.Le Site et chacun des éléments qui le compose, et notamment les textes, articles, lettres d’information, brochures, plans, nuage de mots-clés, images, illustrations, photographies, bases de données, logiciels, marques, logos, fichiers disponibles en téléchargement, clips vidéo ou sonores, structure générale du site, -ci-après les Éléments de propriété intellectuelle, sont protégés par le droit français de la propriété intellectuelle. Les marques et logos reproduits sur le site internet sont déposés et protégés à titre de marque.</Text>
<Text style={styles.description}>1.2. Tous les droits de reproduction sont réservés pour tous les éléments de propriété intellectuelle du présent site internet. La reproduction totale ou partielle des Éléments de propriété intellectuelle est interdite.</Text>
<Text style={styles.description}>1.3. L’utilisateur n’est autorisé qu’à représenter les pages du Site sur son écran et n’est autorisé à reproduire les Éléments de propriété intellectuelle du Site qu’à titre temporaire aux seules fins de consultation du Site.</Text>
<Text style={styles.description}>1.4. L’utilisateur n’est autorisé qu’à télécharger et reproduire de manière durable, sur tout support, les publications d’Action Contre la Faim, et notamment les lettres d’information, lorsque cette reproduction ou représentation est faite à des fins strictement personnelles, privées et non commerciales. L’utilisateur s’interdit de communiquer ces publications à des tiers, y compris par courrier électronique et par mise à disposition à partir d’un site internet ou d’un serveur.</Text>
<Text style={styles.description}>1.5. L’utilisateur est autorisé à faire des courtes citations du Site, sous réserve que soit précisé de manière apparente : l’origine du document (i.e. « extrait du site d’Action Contre la Faim ») le titre du document ou de la page cités, le nom de l’auteur et la date du document s’ils sont connus.</Text>

<Text style={styles.subtitle}>III.DROIT APPLICABLE ET LITIGES.</Text>
<Text style={styles.description}>
Les règles d’utilisation du présent Site sont soumises à la loi française, ainsi que les éventuels litiges pouvant en découler.
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
    subtitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 20,
      color: 'black',
      textAlign: 'center',
      fontStyle: 'bold',
    },
  });