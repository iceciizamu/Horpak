import firebase from 'firebase/app'
import 'firebase/firestore'

// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyBIzs9oO7EDNrj4XTse5wrlTYoSwevteIU",
      authDomain: "horpak-mh9j.firebaseapp.com",
      databaseURL: "https://horpak-mh9j.firebaseio.com",
      projectId: "horpak-mh9j",
      storageBucket: "horpak-mh9j.appspot.com",
      messagingSenderId: "1039208702084",
      appId: "1:1039208702084:web:5bced922bd94cc4881a2d1",
      measurementId: "G-8S9B8KWR6W"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig)
   
  
}

export const db = firebase.firestore()
