import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStore } from "redux";
import Counter from "./src/component/Counter";
import { Provider } from "react-redux";

const initialState = {
  counter: 0,
};

const reducer = (state = initialState) => {
  return state;
};

const store = createStore(reducer);

const App = () => {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <Counter />
      </Provider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
