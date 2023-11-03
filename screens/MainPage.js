import React from "react";
import Stats from "./Stats";
import Advice from "./Advice";
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { bgColorDarkBlue, bgColorLightBlue } from "../assets/common";
import Icon from "react-native-vector-icons/FontAwesome";
import { View, Text, StyleSheet } from "react-native";

const MainScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.mainText}>Home</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: bgColorLightBlue,
        justifyContent: 'center',
        alignItems: 'center'
    },
    mainText: {
        fontSize: 30,
        fontWeight: 'bold'
    },
});

const Tab = createBottomTabNavigator();

const MainPage = () => {
  return (
          <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
      
                  if (route.name === 'Home') {
                    iconName = focused ? 'map' : 'map';
                  }
                  if (route.name === 'Stats') {
                    iconName = focused ? 'sellsy' : 'sellsy';
                  }

                  if (route.name === 'Advice') {
                    iconName = focused ? 'stethoscope' : 'stethoscope';
                  }
                  return <Icon name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: bgColorLightBlue,
                tabBarInactiveTintColor: 'gray',
                headerShown: false,
              })
              
            }
          >
              <Tab.Screen name='Home' component={MainScreen}/>
              <Tab.Screen name='Stats'component={Stats}/>
              <Tab.Screen name='Advice'component={Advice}/>
          </Tab.Navigator>
  )
};

export default MainPage;
