import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Products from '../src/Components/Products/Products.json'
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

//Necesario para exportar mi json
import { getFirestore, collection,doc, addDoc, getDoc, updateDoc, setDoc} from 'firebase/firestore'

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

//Se crea la constante PRODUCTS_ADDED_KEY para cambiar su valor luego de agregar los productos y evitar agregados repetitivos
const PRODUCTS_ADDED_KEY = 'productsAdded';

(async () => {
  // Verifica si los productos ya han sido agregados previamente.
  const metadataRef = doc(collection(db, 'Products'), 'metadata');
  const metadataDoc = await getDoc(metadataRef);

  if (!metadataDoc.exists() || !metadataDoc.data()[PRODUCTS_ADDED_KEY]) {
    // Agrega los productos a la colección.
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

    // Marca los productos como agregados en la base de datos.
    if (metadataDoc.exists()) {
      await updateDoc(metadataRef, { [PRODUCTS_ADDED_KEY]: true });
    } else {
      await setDoc(metadataRef, { [PRODUCTS_ADDED_KEY]: true });
    }
  }
})();

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
