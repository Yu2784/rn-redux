import { LOGIN_SUCCESS, LOGIN_ERROR } from "./types";

import firebase from '../config'

export const loginWithEmail = (email, password) => async dispatch => {
    try {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                console.log("LOGIN_SUCCESS")
                dispatch({ type: LOGIN_SUCCESS });
                firebase.auth().signOut()
            })

            .catch(() => {
                console.log("LOGIN_ERROR")
                dispatch({
                    type: LOGIN_ERROR
                });
            });
    } catch (err) {
        console.log("LOGIN_ERROR")
        dispatch({ type: LOGIN_ERROR });
    }
};