import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Text,
  View,
  Image,
  ImageBackground,
  Button,
  TouchableOpacity,
  Pressable,
} from "react-native";

const WelcomeScreen = () => {
  
  const navigation = useNavigation();

  const handleOnpress = () => {

    navigation.navigate('QRScreen');
  }

  return (
    <ImageBackground
      source={require("../assets/img/welcome.jpg")}
      className="flex-1"
      style={{justifyContent: 'space-between', alignItems: 'center'}}
    >
      <Text className="text-xl font-bold text-center mt-20">Welcome</Text>
      <Pressable
        className="py-3 bg-blue-400 rounded-xl w-8/12 mb-20"
        onPress={handleOnpress}
      >
        <Text 
            className="text-xl font-light-400 text-center text-gray-700"
        >
            Continue
        </Text>
      </Pressable>
    </ImageBackground>
  );
};

export default WelcomeScreen;
