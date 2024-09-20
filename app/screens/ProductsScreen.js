import {
  Text,
  View,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import styles from "../../assets/style/basics";
import { useEffect, useState } from "react";

export default ProductsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ justifyContent: "center", alignItems: "center", gap: 50 }}>
        <Text>Liste de produits</Text>
        <TouchableOpacity
          onPress={async () => {
            // await AsyncStorage.removeItem("scannedItems");
            const Stored = await AsyncStorage.getItem("scannedItems");
            console.log(Stored);
          }}
        >
          <Text>Cliquez ici pour nettoyer l'historique</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
