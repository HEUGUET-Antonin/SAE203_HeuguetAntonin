import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

const app = createApp(App)

app.use(router)

app.mount('#app')


// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCYUCSkANUqqKmWyhVLCC_VeUnUTTlNZTQ",
    authDomain: "sae203-antonin-heuguet.firebaseapp.com",
    projectId: "sae203-antonin-heuguet",
    storageBucket: "sae203-antonin-heuguet.appspot.com",
    messagingSenderId: "567115724235",
    appId: "1:567115724235:web:5d343b0d0f166ed3ed724e",
    measurementId: "G-8N42SMDHZC"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);