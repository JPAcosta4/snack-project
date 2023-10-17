import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, FlatList, View } from 'react-native';
import NavigationContainer from '@react-navigation/native';
import styles from '../components/styles.js';
import axios from 'axios'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Pichangas() {
  const [pichangas, setPichangas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const token = await AsyncStorage.getItem('userToken');

      if (token) {
        if (pichangas.length === 0) {
          try {
            const config = {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            };
            const response = await axios.get('https://pichang-app-e6269910e1a5.herokuapp.com/api/v1/pichangas', config);
            console.log('Respuesta del servidor:', response.data);
            response.data.pichangas.sort((a, b) => {
              const dateA = new Date(b.game_date);
              const dateB = new Date(a.game_date);
              return dateA - dateB;
            });
            setPichangas(response.data);

            AsyncStorage.setItem('pichangasData', JSON.stringify(response.data));
          } catch (error) {
            console.error('Error al iniciar sesión:', error);
            try {
              const cachedData = await AsyncStorage.getItem('pichangasData');
              if (cachedData) {
                setPichangas(JSON.parse(cachedData));
              }
            } catch (cacheError) {
              console.error('Error al cargar los datos en caché:', cacheError);
            }
          } finally {
            setIsLoading(false);
          }
        } else {
          setIsLoading(false);
        }
      } else {
        console.error('Error al recuperar el token:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <SafeAreaView style={stylex.container}>
      {isLoading ? (
        <Text>Cargando...</Text>
      ) : (
        <FlatList
          data={pichangas.pichangas}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <SafeAreaView style={stylex.item}>
              <Text>ID: {item.id}</Text>
              <Text>Home Team ID: {item.home_team.id || 'No home team '}</Text>
              <Text>
                Visitor Team ID: {item.visitor_team ? item.visitor_team.id || 'No visitor team ' : 'No visitor team '}
              </Text>
              <Text>Location: {item.location_id || 'No location'}</Text>
              <Text>Instructions : {item.instructions || 'No instructions'}</Text>
              <Text>Game Date: {item.game_date || 'No date'}</Text>
              <Text>Results: {item.results || 'No results'}</Text>
            </SafeAreaView>
          )}
        />
      )}
    </SafeAreaView>
  );
}

const stylex = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
  },
  title: {
    fontSize: 32,
  },
});
