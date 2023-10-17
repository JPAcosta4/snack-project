import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput as Input } from 'react-native-paper'; // Asegúrate de importar TextInput desde la biblioteca correcta

export default function TextInput({ errorText, description, ...props }) {
  return (
    <View style={styles.container}>
      <Input
        style={styles.input}
        selectionColor='blue' // Color de la selección (cursor) al escribir
        underlineColor="transparent"
        mode="outlined"
        {...props}
      />
      {description && !errorText ? (
        <Text style={styles.description}>{description}</Text>
      ) : null}
      {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 12,
  },
  input: {
    backgroundColor: 'white', 
    color: 'black', 
  },
  description: {
    fontSize: 13,
    color: 'gray', 
    paddingTop: 8,
  },
  error: {
    fontSize: 13,
    color: 'red', 
    paddingTop: 8,
  },
});
