import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, FlatList, Text } from 'react-native';
import * as SecureStore from 'expo-secure-store';

export default function GoodActionsScreen() {
  const [action, setAction] = useState('');
  const [actions, setActions] = useState([]);

  
  const handleSubmit = () => {
    setActions(prevActions => [...prevActions, action]);
    setAction('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Bonne action"
        value={action}
        onChangeText={setAction}
      />
      <Button title="Ajouter une action" onPress={handleSubmit} />
      <FlatList
        data={actions}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 100,
  },
});