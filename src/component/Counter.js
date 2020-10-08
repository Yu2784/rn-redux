import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  const decreaseCounter = () => {
    setCounter(counter - 1);
  };

  return (
    <View style={styles.actions}>
      <TouchableOpacity
        onPress={() => {
          increaseCounter();
        }}
      >
        <Text style={styles.text}>Increase</Text>
      </TouchableOpacity>
      <Text style={styles.text}>{counter}</Text>
      <TouchableOpacity
        onPress={() => {
          decreaseCounter();
        }}
      >
        <Text style={styles.text}>Decrease</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  actions: {
    flexDirection: "row",
    width: 200,
    justifyContent: "space-around",
  },
  text: {
    fontSize: 20,
  },
});

export default Counter;
