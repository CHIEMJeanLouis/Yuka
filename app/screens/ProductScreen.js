import { router, useLocalSearchParams } from "expo-router";
import { Text, View, Button, Image, ActivityIndicator } from "react-native";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "../../assets/style/basics";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProductScreen() {
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

  // const score = data.product.nutriscore_score;
  return isLoading ? (
    <ActivityIndicator style={styles.container} />
  ) : (
    <SafeAreaView style={styles.container}>
      <FontAwesome5
        name="carrot"
        size={50}
        color="orange"
        style={{ marginTop: 20 }}
      />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          gap: 30,
        }}
      >
        <Image
          source={{ uri: data.product.selected_images.front.display.fr }}
          style={styles.imageProduct}
        />
        <View style={{ gap: 25 }}>
          <Text style={styles.h2Style}>{data.product.product_name_fr}</Text>

          <Text style={styles.h3Style}> {data.product.brands}</Text>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <View
              style={
                data.product.nutriscore_score <= 30
                  ? styles.scoreRed
                  : data.product.nutriscore_score <= 60
                  ? styles.scoredOrange
                  : styles.scoreGreen
              }
            ></View>
            <Text>{data.product.nutriscore_score}/100</Text>
          </View>
        </View>
      </View>
      <Button title="Revenir" onPress={() => router.back()} />
    </SafeAreaView>
  );
}
