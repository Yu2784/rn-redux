// TODO: Organize styling better

import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Button,
} from "react-native";
import { connect } from "react-redux";
import { loginWithEmail } from '../actions/auth'
import firebase from '../config'

const Login = ({ loginWithEmail }) => {
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setErrorMessage("");
        }, 7000);
    });

    useEffect(() => {
        firebase.auth().onAuthStateChanged(onAuthStateChanged);
    }, []);

    const onAuthStateChanged = (user) => {
        if (!!user) {
            console.log("True")
            setIsAuthenticated(true);
        }

    };

    const emailInputHandler = (input) => {
        setUserEmail(input);
    };

    const passwordInputHandler = (input) => {
        setUserPassword(input);
    };

    const loginButtonHandler = () => {
        loginWithEmail(userEmail, userPassword);
    };


    return (
        <View style={styles.container}>
      <View style={styles.title}>
        <Text style={{ fontSize: 30 }}>Login</Text>
      </View>

      <Text style={styles.errMsg}>{isAuthenticated}</Text>

      <View style={styles.input}>
        <TextInput
          placeholder="Email"
          onChangeText={emailInputHandler}
          value={userEmail}
        />
      </View>

      <View style={styles.input}>
        <TextInput
          placeholder="Password"
          onChangeText={passwordInputHandler}
          value={userPassword}
          secureTextEntry={true}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Login"
          onPress={loginButtonHandler}
          rounded
          color="#c76da2"
          style={{ height: 100 }}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Logout"
          onPress={() =>{
            console.log("Logout")
            firebase.auth().signOut()
            }}
          rounded
          color="#c76da2"
          style={{ height: 100 }}
        />
      </View>


      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={{ marginHorizontal: 5 }}>
          <Text style={{ color: "#545354", fontSize: 15 }}>
            Don't have an account?
          </Text>
        </View>
        <View style={{ width: 90 }}>
          <TouchableOpacity onPress={() => navigation.navigate("Registration")}>
            <Text style={{ fontSize: 15, fontWeight: "700", color: "#c76da2" }}>
              Register here{" "}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          width: "90%",
          alignItems: "center",
          justifyContent: "center",
          padding: 30,
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            color: "#545354",
          }}
        >
          ─────── Or Login With ───────{"  "}
        </Text>
      </View>
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: "center",
        backgroundColor: "white",
    },
    title: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 30,
    },
    errMsg: {
        marginVertical: 30,
        color: "red",
    },
    input: {
        marginVertical: 20,
        height: 30,
        width: "90%",
        borderColor: "lightgrey",
        borderBottomWidth: 1,
        paddingHorizontal: 5,
    },
    buttonContainer: {
        marginVertical: 20,
        width: "90%",
    },
    iconContainer: {
        flexDirection: "row",
    },
    icon: {
        marginHorizontal: 10,
    },
});

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, { loginWithEmail })(Login);