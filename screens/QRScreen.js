import React, { useState, useEffect } from 'react';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useNavigation } from "@react-navigation/native";
import { bgColorLightBlue, bgColorDarkBlue, textColorPrimary } from '../assets/common'
import { Text, View, StyleSheet, Button, Pressable } from 'react-native';

const QRScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [scannedData, setScannedData] = useState('');
  const [infoText, setInfoText] = useState('');

  const navigation = useNavigation();

  //Ask user for camera permision   
  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })()
  }

  useEffect(() => {
    askForCameraPermission();
  }, []);

  //Read scanned-data    
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setScannedData({type, data});
  };

  //Check permision   
  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Requesting for camera permission</Text>
      </View>
    )
  }
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>No access to camera</Text>
        <Button title={'Allow Camera'} onPress={() => askForCameraPermission()} />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.barcodebox}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ height: 400, width: 400 }} />
      </View>
      <Text style={styles.mainText}>{scannedData.data}</Text>
      
      {scanned && <Pressable 
            onPress={() => setScanned(false)} 
            style={styles.button}
            >
                <Text style={styles.btnText}>Scan again!</Text>
            </Pressable>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: bgColorLightBlue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainText: {
    fontSize: 16,
    margin: 20,
  },
  btnText: {
    fontSize: 16,
    margin: 10,
    opacity: 0.8,
    textAlign: 'center'
  },
  button: {
    borderRadius: 30,
    backgroundColor: bgColorDarkBlue,
    width: '80%',
  },
  barcodebox: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
    width: 300,
    overflow: 'hidden',
    borderRadius: 30,
  },
});

export default QRScreen;
