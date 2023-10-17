import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import styles from '../components/styles.js';
import BackButton from '../components/BackButton'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import TextInput from '../components/TextInput.js'
import Button from '../components/Button'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'


export default function Login({ navigation }) {
    const [email, setEmail] = useState({ value: '', error: '' })
    const [password, setPassword] = useState({ value: '', error: '' })
    const [NotFound, setNotFound] = useState(false)
    const [wrongCredentials, setWrongCredentials] = useState(false)

    const onLoginPressed = () => {
        const emailError = emailValidator(email.value)
        const passwordError = passwordValidator(password.value)
        if (emailError || passwordError) {
            setEmail({ ...email, error: emailError })
            setPassword({ ...password, error: passwordError })
            return
        }
        const loginData = {
            email: email.value,
            password: password.value,
        };

        // Realizar una solicitud POST para iniciar sesión
        axios
            .post('https://pichang-app-e6269910e1a5.herokuapp.com/api/v1/login', loginData)
            .then((response) => {
                // Manejar la respuesta exitosa aquí
                console.log('Respuesta del servidor:', response.data);
                const token = response.data.token;
                // guardar el token JWT 
                AsyncStorage.setItem('userToken', token)
                .then(() => {
                  // se usan promesas por la forma de AsyncStorage. 
                })
                .catch(error => {
                  console.error('Error al almacenar el token:', error);
                });
                navigation.navigate('BottomTab', { screen: 'Home' });
            })
            .catch((error) => {
                console.log(error.message)
                // Manejar errores aquí
                if (error.message === 'Request failed with status code 500') {
                    setNotFound(true)
                    console.log("User not found.")
                }
                else {
                    setNotFound(false)
                }

                if (error.message === 'Request failed with status code 404'){
                    setWrongCredentials(true)
                    console.log("Wrong password")
                }
                else{
                    setWrongCredentials(false)
                }
                console.error('Error al iniciar sesión:', error);
            });

    }
    return (
        <View>
            <View style={CenterStyle.container}>
                <Text style={CenterStyle.text}>Welcome back</Text>
                <Text style={CenterStyle.text}>Pichanguero!</Text>
            </View>
            <TextInput
                label="Email"
                returnKeyType="next"
                value={email.value}
                onChangeText={(text) => setEmail({ value: text, error: '' })}
                onSubmitEditing={onLoginPressed}
                error={!!email.error}
                errorText={email.error}
                autoCapitalize="none"
                autoCompleteType="email"
                textContentType="emailAddress"
                keyboardType="email-address"
            />
            <TextInput
                label="Password"
                returnKeyType="done"
                value={password.value}
                onChangeText={(text) => setPassword({ value: text, error: '' })}
                onSubmitEditing={onLoginPressed}
                error={!!password.error}
                errorText={password.error}
                secureTextEntry
            />
            {NotFound && (
                <Text style={{ color: 'red', textAlign: 'center' }}>
                    User not found.
                </Text>
            )}
            {wrongCredentials && (
                <Text style={{ color: 'red', textAlign: 'center' }}>
                    Invalid password. 
                </Text>
            )}
            <Button mode="contained" onPress={onLoginPressed}>
                Login
            </Button>
        </View>
    )
}

const CenterStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
    },
});
