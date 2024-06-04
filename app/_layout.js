import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Asset } from 'expo-asset';
import { Stack } from 'expo-router';
import logo from '../assets/logo.png';

export default function RootLayout() {
  const [isLogoLoaded, setIsLogoLoaded] = useState(false);

  useEffect(() => {
    loadLogo();
  }, []);

  const loadLogo = async () => {
    try {
      await Asset.fromModule(logo).downloadAsync();
      setTimeout(() => setIsLogoLoaded(true), 1500);
    } catch (err) {
      console.warn(err);
    }
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    logo: {
      width: 350,
      height: 200,
    },
  });

if (!isLogoLoaded) {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logo} />
    </View>
  );
}
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}