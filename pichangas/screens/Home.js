import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import styles from '../components/styles.js';


export default function Home(){
    return (
        <View style={styles.container}>
            <Text>Home Page of Pichangas APP.</Text>
        </View>
    );
}

