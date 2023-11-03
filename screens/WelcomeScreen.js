import React from "react";
import { useNavigation } from "@react-navigation/native";
import { textColorPrimary, bgColorDarkBlue } from "../assets/common";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  Text,
  View,
  Image,
  ImageBackground,
  Button,
  TouchableOpacity,
  Pressable,
  StyleSheet
} from "react-native";

const WelcomeScreen = () => {
  
  const navigation = useNavigation();

  const handleOnpress = () => {
    
    navigation.navigate('QRScreen');
  }

  return (
    <ImageBackground
      source={require("../assets/img/welcome.jpg")}
      style={styles.imgBackground}
    >
      <Text style={styles.text}>Welcome</Text>
      <Pressable
        style={styles.button}
        onPress={handleOnpress}
      >
        <Text style={styles.btnText}>Continue </Text>
        <Icon style={styles.btnIcon} name='arrow-right' size={24} color={textColorPrimary} solid />
      </Pressable>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imgBackground: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  text: {
    fontSize: 28,
    color: textColorPrimary,
    textAlign: 'center',
    margin: 80,
    fontWeight: 'bold',
    fontStyle: 'italic',
    opacity: 0.8
  },
  btnText: {
    fontSize: 24,
    color: textColorPrimary,
    textAlign: 'center',
    fontWeight: 'bold',
    fontStyle: 'italic',
    opacity: 0.8,
    padding: 8
  },
  btnIcon: {
    lineHeight: 24,
    opacity: 0.8
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    margin: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 80,
    backgroundColor: bgColorDarkBlue,
    width: '80%',
    borderRadius: 30,
    opacity: 0.8,
  },
})

export default WelcomeScreen;
