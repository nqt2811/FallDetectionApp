import { StatusBar } from 'expo-status-bar';
import React, { Fragment } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import { WelcomeScreen, MainPage, QRScreen } from './screens';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='MainPage'>
        <Stack.Screen name="WelcomeScreen" options={{headerShown: false}} component={WelcomeScreen} />
        <Stack.Screen name="MainPage" options={{headerShown: false}} component={MainPage} />
        <Stack.Screen name="QRScreen" options={{headerShown: false}} component={QRScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
