import { router, useLocalSearchParams } from "expo-router";
import { Text, View, Button, Image, ActivityIndicator } from "react-native";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "../assets/style/basics";

export default function product() {
  const { barcode } = useLocalSearchParams();

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://world.openfoodfacts.org/api/v0/product/${barcode}.json`
      );
      //   console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  return isLoading ? (
    <ActivityIndicator style={styles.container} />
  ) : (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>{data.product.product_name_fr}</Text>
      <Text>{data.product.brands}</Text>
      <Image
        source={{ uri: data.product.selected_images.front.display.fr }}
        style={styles.imageProduct}
      />
    </View>
  );
}
