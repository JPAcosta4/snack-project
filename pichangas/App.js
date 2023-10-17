import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home'
import Login from './screens/Login'
import Profile from './screens/Profile'
import BottomTab from './navigation/BottomTab'


const Stack = createNativeStackNavigator();
export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    AsyncStorage.getItem('userToken')
      .then(token => {
        if (token) {
          setIsAuthenticated(true)
        }
      })
      .catch(error => {
        // Maneja errores al recuperar el token.
        console.error('Error al recuperar el token:', error);
        setIsAuthenticated(false)
      });

  }, []);


  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="BottomTab" component={BottomTab} />
        </Stack.Navigator>
    </NavigationContainer>

  );
}

// se me ocurre establecer un if 
// en el initialRouteName, que defina si el usuario está logeado 
// lo envíe a home sino a login, pero quizás no es necesario
// y se realice como en react con un controlador de sesión que 
// no da permisos a otro lugar si no se está logeado. 

