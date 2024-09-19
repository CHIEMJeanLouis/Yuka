import {
  Text,
  View,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { router } from "expo-router";
import styles from "../../assets/style/basics";

export default FavoritesScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ justifyContent: "center", alignItems: "center", gap: 50 }}>
        <Text>Favoris</Text>
      </View>
    </SafeAreaView>
  );
};
