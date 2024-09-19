import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logoSplash: {
    height: 250,
    width: 350,
    objectFit: "scale-down",
  },

  touchableStyle: {
    borderStyle: "solid",
    borderColor: "#00DB5F",
    borderWidth: 1,
    borderRadius: 10,
    width: 300,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },

  touchableContentStyle: {
    fontSize: 18,
    fontWeight: "500",
  },

  imageProduct: {
    width: 50,
    height: 80,
  },
});

export default styles;
