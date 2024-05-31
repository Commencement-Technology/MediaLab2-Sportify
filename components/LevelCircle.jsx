import React from "react";
import { View, Text, StyleSheet } from "react-native";

const LevelCircle = ({ level, icon }) => {
  return (
    <View style={styles.circle}>
      <Text style={styles.levelText}>{level}</Text>
      {icon}
    </View>
  );
};

const styles = StyleSheet.create({
  circle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#d8eaff",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  levelText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
});

export default LevelCircle;
