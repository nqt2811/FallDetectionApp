import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

const QRScreen = () => {

    const [permision, setPermision] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [deviceCode, setDeviceCode] = useState('');
    const [scanningState, setScanningState] = useState('Scanning...');

    // Ask user for using camera
    const askPermision = () => {
        (async () => {
          const { status } = await BarCodeScanner.requestPermissionsAsync();
          setPermission(status === 'granted');
        })()
    }
    useEffect(() => {
        askPermision();
    })

    const handleQRCodeScanned = deviceCode => {
        setScanned(true);
        setDeviceCode(deviceCode);
    };

    return (
        <View
            className="flex-1 bg-blue-400"
        >
            <Text 
                className=""
            >
                Scan your device's QRCode
            </Text>
        </View>
    )
};

export default QRScreen;
