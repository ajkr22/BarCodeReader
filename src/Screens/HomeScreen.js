// screens/HomeScreen.js

import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Blog")}
      >
        <Text style={styles.buttonText}>Read Blogs</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.secondaryButton]}
        onPress={() => navigation.navigate("BarCode")}
      >
        <Text style={styles.buttonText}>Go to BarCode Scanner</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  button: {
    backgroundColor: "#3498db",
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    width: 200,
    alignItems: "center",
  },
  secondaryButton: {
    backgroundColor: "#2ecc71",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default HomeScreen;
