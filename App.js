import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Login from "./src/component/Login";
import { Provider } from "react-redux";
import store from "./src/store";

const App = () => {
    return (
        <View style={styles.container}>
      <Provider store={store}>
        <Login />
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