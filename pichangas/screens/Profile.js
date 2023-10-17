import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import styles from '../components/styles.js';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { NavigateBefore } from '@mui/icons-material';



export default function Profile({ navigation }) {
    const logOut = async () => {
        try {
            await AsyncStorage.removeItem('userToken');
            navigation.navigate('Login', { screen: 'Login' });
            return true;
        } catch (exception) {
            return false;
        }
    };
    return (
        <View style={styles.container}>
            <Text>User Profile</Text>
            <Button
                title="Log Out"
                color="#FF0000"
                onPress={logOut}
            />
        </View>
    );
}

