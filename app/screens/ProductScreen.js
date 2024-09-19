import {
  Text,
  View,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import axios from "axios";
import styles from "../../assets/style/basics";

export default ProductScreen = () => {
  const { barcode } = useLocalSearchParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `https://world.openfoodfacts.org/api/v0/product/${barcode}.json`
        );
        setData(data);
        console.log(data);
        setIsloading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ justifyContent: "center", alignItems: "center", gap: 50 }}>
        <Text>Produit</Text>
      </View>
    </SafeAreaView>
  );
};
