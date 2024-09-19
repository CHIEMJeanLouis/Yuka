import {
  Text,
  View,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { router } from "expo-router";
import LogoSplash from "../../assets/Logo-splash.png";
import styles from "../../assets/style/basics";

export default SplashScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ justifyContent: "center", alignItems: "center", gap: 50 }}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: 300,
          }}
        >
          <Image source={LogoSplash} style={styles.logoSplash} />
        </View>
        <TouchableOpacity
          style={styles.touchableStyle}
          onPress={() => {
            router.navigate("/products");
          }}
        >
          <Text style={styles.touchableContentStyle}>Enter</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
