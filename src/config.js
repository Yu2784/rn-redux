import * as firebase from "firebase/app";

import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBJdQTlDKMcORf9oiw-E05Km6SVs4mCqVM",
    authDomain: "rn-expo-371c6.firebaseapp.com",
    databaseURL: "https://rn-expo-371c6.firebaseio.com",
    projectId: "rn-expo-371c6",
    storageBucket: "rn-expo-371c6.appspot.com",
    messagingSenderId: "622136105663",
    appId: "1:622136105663:web:521c28ab5b1bdd45ab440a",
    measurementId: "G-CEN0454RST",
};


firebase.initializeApp(firebaseConfig);

export default firebase