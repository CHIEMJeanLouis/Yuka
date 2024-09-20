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

  h2Style: {
    fontSize: 22,
    fontWeight: "600",
  },

  h3Style: {
    fontSize: 20,
    fontWeight: "500",
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
    width: 100,
    height: 150,
  },

  scoreRed: {
    width: 10,
    height: 10,
    borderRadius: 100,
    backgroundColor: "red",
  },

  scoreOrange: {
    width: 10,
    height: 10,
    borderRadius: 100,
    backgroundColor: "orange",
  },
  scoreGreen: {
    width: 10,
    height: 10,
    borderRadius: 100,
    backgroundColor: "green",
  },
});

export default styles;
