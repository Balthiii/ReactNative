import React from "react";
import { Text, Image, ScrollView, View, ActivityIndicator, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";
import dons from "../../assets/dons.png";
export default function DonsScreen() {
  const [loading, setLoading] = React.useState(true);
 
  const handleWebViewLoad = () => {
    setLoading(false);
  };
 
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>JE SAUVE UNE VIE</Text>
      <Image source={dons} style={styles.logo} />
      <Text style={styles.description}>Les dons au profit des associations donnent droit à une réduction d’impôt sur le revenu de 66 % à 75 % du montant versé, selon l’association choisie, dans la limite de 20 % du revenu imposable.</Text>
      <Text style={styles.title}> Faire un don via PAYPAL</Text>
 
      {loading && (
        <View style={styles.spinner}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}
      <WebView style={{ flex: 1, height: 400 }} source={{ uri: "https://react-paypal-js-storybook.fly.dev/buttons.html" }} onLoad={handleWebViewLoad} />
    </ScrollView>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#33a383",
    textAlign: "center",
    fontStyle: "bold",
  },
  logo: {
    marginBottom: 20,
    marginTop: 20,
    alignSelf: "center",
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
      color: '#747474',
      marginBottom: 15,
      fontStyle : 'bolder',
  },
  spinner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1,
  },
});