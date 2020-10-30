import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { increaseCounter, decreaseCounter } from "../actions/counter";

const Counter = ({ counter, increaseCounter, decreaseCounter }) => {
  // console.log("main", counter.counter);
  return (
    <View style={styles.actions}>
      <TouchableOpacity
        onPress={() => {
          // console.log("+", counter.counter);
          increaseCounter(counter.counter);
        }}
      >
        <Text style={styles.text}>Increase</Text>
      </TouchableOpacity>
      <Text style={styles.text}>{counter.counter}</Text>
      <TouchableOpacity
        onPress={() => {
          // console.log("-", counter.counter);
          decreaseCounter(counter.counter);
        }}
      >
        <Text style={styles.text}>Decrease</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state) => ({
  counter: state.counter,
});

export default connect(mapStateToProps, { increaseCounter, decreaseCounter })(
  Counter
);

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
