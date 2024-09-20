import { useState, useEffect } from "react";
import { Text, View, Button, StyleSheet, FlatList } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useFocusEffect } from "expo-router";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

const BarcodeScanner = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false); // state boolean lié au statut caméra utilisé ou non
  const [scannedItems, setScannedItems] = useState([]); // state lié a la liste des éléments scannés

  //UseEffect pour Autorisation de la caméra
  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  useFocusEffect(() => {
    setScanned(false);
  });

  const handleBarCodeScanned = async ({ type, data }) => {
    setScanned(true);

    const newItem = { type, data };
    const updatedItems = [...scannedItems, newItem];
    // console.log(updatedItems);

    setScannedItems(updatedItems);

    try {
      await AsyncStorage.setItem("scannedItems", JSON.stringify(updatedItems));
    } catch (error) {
      console.error("Erreur lors de la sauvegarde de l'historique", error);
    }

    router.navigate({ pathname: `/${data}`, params: { barcode: data } }); // Rediriger vers une page produit scanné
  };

  if (hasPermission === null) {
    return <Text>Autoriser l'utilisation de la caméra</Text>;
  }

  if (hasPermission === false) {
    return <Text>Accès à la caméra refusé</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  historyContainer: {
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  historyTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default BarcodeScanner;
