import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Products from '../src/Components/Products/Products.json'
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

//Necesario para exportar mi json
import { getFirestore, collection, addDoc} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_fsGrAHI9qIY04ksyYd_T41bXkd5pO48",
  authDomain: "ciscosshop.firebaseapp.com",
  projectId: "ciscosshop",
  storageBucket: "ciscosshop.appspot.com",
  messagingSenderId: "1028233448980",
  appId: "1:1028233448980:web:d336b27bd0377b51f9a101"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

//Iterar sobre los datos del mock para subirlo a firebase
Object.values(Products).forEach((productArray) => {
  productArray.forEach((product) => {
    addDoc(collection(db, 'Products'), product)
      .then((docRef) => {
        console.log("Documento agregado con id ", docRef.id);
      })
      .catch((error) => {
        console.error("Error al agregar el documento", error);
      });
  });
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
